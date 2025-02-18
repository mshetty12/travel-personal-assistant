import { AuthWrapper } from "@/components/AuthWrapper";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@aws-amplify/ui-react/styles.css";

const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Travel Personal Assistant",
  description: "Meet Your Personal Travel AI Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script>
          (function(n,i,v,r,s,c,x,z){x=window.AwsRumClient={q:[],n:n,i:i,v:v,r:r,c:c};window[n]=function(c,p){x.q.push({c:c,p:p});};z=document.createElement('script');z.async=true;z.src=s;document.head.insertBefore(z,document.head.getElementsByTagName('script')[0]);})(
              'cwr',
              'a0b0b239-afac-4252-bd8f-ecef00eb55cd',
              '1.0.0',
              'us-east-1',
              'https://client.rum.us-east-1.amazonaws.com/1.19.0/cwr.js',
              {
                sessionSampleRate: 1,
                identityPoolId: "us-east-1:22658177-1abf-4d80-b14a-e203cd5c5ec7",
                endpoint: "https://dataplane.rum.us-east-1.amazonaws.com",
                telemetries: ["performance","errors","http"],
                allowCookies: true,
                enableXRay: true
              }
            );
      </script>
      
      <body className={inter.className}>
          <AuthWrapper>{children}</AuthWrapper>
      </body>
    </html>
  );
}
