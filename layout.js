import './globals.css';

export const metadata = {
  title: 'Vanessa Agsangre | Copywriter Portfolio',
  description: 'Creative and compelling copywriting portfolio by Vanessa Agsangre.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
