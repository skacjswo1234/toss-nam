export async function onRequestPost({ request, env }) {
  try {
    const data = await request.json();
    const { industry, purpose, name, phone, createdAt } = data || {};

    if (!industry || !purpose || !name || !phone) {
      return new Response(JSON.stringify({ ok: false, error: 'invalid_params' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const ts = createdAt || new Date().toISOString();

    await env.LANDING_DB
      .prepare(
        'INSERT INTO leads (industry, purpose, name, phone, created_at) VALUES (?, ?, ?, ?, ?)'
      )
      .bind(industry, purpose, name, phone, ts)
      .run();

    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: 'server_error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}


