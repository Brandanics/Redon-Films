import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 metadataBase:new URL('https://redon-films-studio.bashimalik1234.chatgpt.site'),
 title:'Redon Films | We Make You Feel',
 description:'An independent creative production studio in Pakistan. Documentary filmmaking, brand films, design, events and media advocacy. Over 20 years of storytelling.',
 icons:{icon:'/favicon.png',apple:'/favicon.png'},
 openGraph:{type:'website',locale:'en_PK',siteName:'Redon Films',title:'Redon Films | We Make You Feel',description:'Film. Culture. Impact. A complete media studio with storytelling at its heart.',images:[{url:'/og.png',width:1536,height:1024,alt:'Redon Films. We Make You Feel. Film. Culture. Impact.'}]},
 twitter:{card:'summary_large_image',title:'Redon Films | We Make You Feel',description:'Film. Culture. Impact. A complete media studio with storytelling at its heart.',images:['/og.png']}
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><head><link rel="preload" href="/fonts/barlow-condensed-700.ttf" as="font" type="font/ttf" crossOrigin="anonymous"/><link rel="preload" href="/fonts/dm-sans-400.ttf" as="font" type="font/ttf" crossOrigin="anonymous"/></head><body>{children}</body></html>}
