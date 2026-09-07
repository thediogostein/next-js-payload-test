import Link from 'next/link'
import { getPayload } from 'payload'

import config from '@/payload.config'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const payload = await getPayload({ config })
  const { docs: posts } = await payload.find({ collection: 'posts', depth: 0, limit: 24, sort: '-publishedAt' })
  return <div className="site-shell"><header className="site-header"><Link className="brand" href="/">Field Notes</Link><Link className="admin-link" href="/admin">Manage posts ↗</Link></header><main><section className="hero"><p className="eyebrow">A tiny Payload + Next.js demo</p><h1>Thoughts, experiments, and useful things.</h1><p className="intro">Publish from Payload’s admin panel, then see your posts appear here automatically.</p></section><section className="post-list" aria-labelledby="latest-posts"><div className="section-heading"><p className="eyebrow" id="latest-posts">Latest posts</p><span>{posts.length} {posts.length === 1 ? 'post' : 'posts'}</span></div>{posts.length ? posts.map((post) => <article className="post-card" key={post.id}><p className="post-date">{new Intl.DateTimeFormat('en', { dateStyle: 'medium' }).format(new Date(post.publishedAt))}</p><h2><Link href={`/posts/${post.slug}`}>{post.title}</Link></h2><p>{post.excerpt}</p><Link className="read-more" href={`/posts/${post.slug}`}>Read article →</Link></article>) : <div className="empty-state"><p className="eyebrow">It’s ready</p><h2>Your blog has no posts yet.</h2><p>Open the admin panel, create a user, and add your first published post.</p><Link className="button" href="/admin">Open Payload admin →</Link></div>}</section></main><footer>Built with Next.js and Payload CMS.</footer></div>
}
