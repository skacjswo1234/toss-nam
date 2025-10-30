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
    // Support both binding names: Pages UI set to "toss-nam" (with hyphen) or local wrangler LANDING_DB
    const DB = env['toss-nam'] || env.LANDING_DB;
    if (!DB) {
      return new Response(JSON.stringify({ ok: false, error: 'db_binding_not_found' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await DB
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


