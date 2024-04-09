import { NextRequest, NextResponse } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  const interval = req.nextUrl.searchParams.get('interval')
  if (!interval) return new Response('No interval provided', { status: 400 })

  const response = await fetch('https://hacker-news.firebaseio.com/v0/item/39973315.json?print=pretty')

  let data = await response.json();
  // console.log('datadata', data);


  return new NextResponse(
    JSON.stringify({
      interval,
      ...data,
    }),
    {
      status: 200,
    }
  )
}
