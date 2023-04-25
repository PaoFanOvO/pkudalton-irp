import CourseList from '@/pages/CourseList';
import Header from '@/components/Header';
import Head from 'next/head';
import ToggleDarkModeButton from "@/components/ToggleDarkModeButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>ELP课程列表</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='h-screen'>
        <Header />
          <ToggleDarkModeButton />
        <div className='flex justify-center align-center'>
          <CourseList />
        </div>
      </main>
    </>
  );
}
