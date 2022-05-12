export default function Index() {
  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        lineHeight: '1.4',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <h1>Welcome to Remix</h1>
      <div>Test</div>
      <a href="/posts">Posts</a>
    </div>
  );
}
