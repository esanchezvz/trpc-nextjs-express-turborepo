import { Client } from '@/components/client';
import { Server } from '@/components/server';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Hola Mundo!</h1>

      <Server />
      <Client />
    </main>
  );
}
