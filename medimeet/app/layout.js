import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Doctor Appointment app",
  description: "Connect with Doctors anytime anywere",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}>

          <main className="min-h-screen">{children}</main>
          
          <footer>
            <div>
              <p>Made in MediMeet</p>
            </div>
          </footer>
          
          </body>
    </html>
  );
}
