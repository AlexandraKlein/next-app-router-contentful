import { Inter } from 'next/font/google';

export const metadata = {
    title: `Next.js and Contentful Example`,
    description: `This is a blog built with Next.js and Contentful.`,
};

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    display: 'swap',
});

function Footer() {
    return (
        <footer>
            <h3>All Rights Reserved</h3>
        </footer>
    );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.variable}>
            <body>
                <section>
                    <main>{children}</main>
                    <footer>All Rights Reserved</footer>
                </section>
            </body>
        </html>
    );
}
