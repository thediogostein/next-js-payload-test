import { RichText } from '@payloadcms/richtext-lexical/react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@/payload.config'

export const dynamic = 'force-dynamic'

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({ collection: 'posts', depth: 0, limit: 1, where: { slug: { equals: slug } } })
  const post = docs[0]
  if (!post) notFound()
  return <article className="article-shell"><header className="article-header"><Link className="back-link" href="/">← All posts</Link><p className="eyebrow">{new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(new Date(post.publishedAt))}</p><h1>{post.title}</h1><p className="article-excerpt">{post.excerpt}</p></header><div className="article-content"><RichText data={post.content} /></div><footer className="article-footer"><Link href="/">← Back to Field Notes</Link></footer></article>
}
