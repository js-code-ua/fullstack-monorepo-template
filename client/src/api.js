export async function getHelloMessage() {
  const rsp = await fetch('/test');

  if (!rsp.ok) {
    console.error(await rsp.text());
    throw new Error('Failed to fetch');
  }

  const { data } = await rsp.json();

  return data;
}
