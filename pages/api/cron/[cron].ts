import { NextRequest, NextResponse } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  const cron = req.nextUrl.pathname.split('/')[3]
  console.log(cron)
  if (!cron) return new Response('No cron provided', { status: 400 })
  const response = await update(cron)
  return new NextResponse(JSON.stringify(response), {
    status: 200,
  })
}

async function update(interval: string) {
  const topstories = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')


  let response = await topstories.json();

  console.log('intervalinterval', interval);
  console.log('responseresponse', response);

  return response
}
