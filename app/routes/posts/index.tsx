import { LoaderFunction } from '@remix-run/node';
import NetlifyCmsApp from 'netlify-cms-app';

const loader: LoaderFunction = async ({ params }) => {
  const post = await fetch('');
};

export default function Post() {
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
      <div>{}</div>
    </div>
  );
}
