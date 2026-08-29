const FROM = 'Automagic Website <website@noreply.automagicagents.com>';
const TO = process.env.CONTACT_EMAIL || 'midas@automagicai.nl';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Nettere labels in de mail voor de Webflow-veldnamen
const LABELS = {
  Name: 'Naam',
  Company: 'Bedrijf',
  Email: 'E-mail',
  'Share-project-details': 'Bericht',
};

export async function POST(request) {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY ontbreekt');
    return Response.json({ error: 'Server niet geconfigureerd' }, { status: 500 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Ongeldige aanvraag' }, { status: 400 });
  }

  // Alleen niet-lege stringvelden meenemen, met lengtelimieten tegen misbruik
  const fields = {};
  for (const [key, value] of Object.entries(body || {})) {
    if (typeof value === 'string' && value.trim()) {
      fields[key.slice(0, 100)] = value.trim().slice(0, 5000);
    }
  }

  const name = fields.Name || '';
  const email = fields.Email || '';
  if (!name || !EMAIL_RE.test(email)) {
    return Response.json({ error: 'Naam en geldig e-mailadres zijn verplicht' }, { status: 400 });
  }

  const text = Object.entries(fields)
    .map(([key, value]) => `${LABELS[key] || key}:\n${value}`)
    .join('\n\n');

  const company = fields.Company ? ` (${fields.Company})` : '';

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `Nieuwe aanvraag via de website — ${name}${company}`,
      text,
    }),
  });

  if (!res.ok) {
    console.error('Resend error:', res.status, await res.text());
    return Response.json({ error: 'Versturen mislukt' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
