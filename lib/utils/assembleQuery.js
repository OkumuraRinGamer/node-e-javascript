function run(request) {
  const url = new URL(`http://x${request.url}`);
  const pathname = url.pathname;
  const query = Object.fromEntries(url.searchParams.entries());

  request.query = query;

  return pathname;
}

module.exports = run;
