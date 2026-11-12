/** Post metadata. Each post's body lives in content/blog/<slug>.mdx. */
export type Post = {
  slug: string
  title: string
  summary: string
  /** ISO date — used for sorting, <time> and structured data. */
  date: string
  readingTime: string
  tags: string[]
  /** Optional link back to the project the post came out of. */
  project?: { title: string; slug: string }
  featured?: boolean
}

export const posts: Post[] = [
  {
    slug: "the-quote-photo-gave-the-model-orders",
    title: "The quote photo gave the model orders",
    summary:
      "A fake quote photo told Amazon Nova to record a different supplier and price, and it did, twice, despite a system prompt forbidding it. What held was asking the model to copy every word it saw and letting code decide what to believe, and what that still doesn't stop.",
    date: "2026-11-12",
    readingTime: "4 min read",
    tags: ["AI Safety", "Prompt Injection", "Amazon Nova", "Payments"],
    project: { title: "Hakika", slug: "hakika" },
  },
  {
    slug: "the-guard-passed-a-number-the-photo-planted",
    title: "The guard passed a number the photo planted",
    summary:
      "Every number in Hakika's owner summary has to appear in the facts the model was given. A planted quote still got \"KES 1,000\" through, because those facts quoted words from the photo. The fix was to give the model less, and a number guard still can't check meaning.",
    date: "2026-11-12",
    readingTime: "4 min read",
    tags: ["AI Safety", "Guardrails", "LLMs", "Testing"],
    project: { title: "Hakika", slug: "hakika" },
  },
  {
    slug: "logic-proven-feel-unproven",
    title: "Logic proven, feel unproven",
    summary:
      "Jumpwise was built, tested and demonstrated in a preview, with a mouse for a hand and no glasses. All six tests pass, and I still don't know if it's any good. Why the README keeps those two claims apart, and how one test turned part of a feel question into a logic one.",
    date: "2026-11-08",
    readingTime: "4 min read",
    tags: ["AR", "Testing", "Spectacles", "Lens Studio"],
    project: { title: "Jumpwise", slug: "jumpwise" },
  },
  {
    slug: "the-tests-passed-against-the-wrong-order",
    title: "The tests passed against the wrong order",
    summary:
      "My jump-start guide's brief was missing a step: start the dead car before any clamp comes off. The coding agent built the brief faithfully and six tests confirmed it, because the tests came from the brief too. Checking one outside source caught it.",
    date: "2026-11-08",
    readingTime: "4 min read",
    tags: ["Testing", "Specifications", "AI Agents", "Safety"],
    project: { title: "Jumpwise", slug: "jumpwise" },
  },
  {
    slug: "one-drop-rule-for-a-hand-and-a-mouse",
    title: "One drop rule for a hand and a mouse",
    summary:
      "A clamp lands on a terminal if its tip is close in 3D, or if the line from your eye through it passes close. The second test makes mouse dragging work in the preview. It has no distance limit, and the tests line up on it the same way the mouse does, so it's the part to change for real glasses.",
    date: "2026-11-08",
    readingTime: "4 min read",
    tags: ["AR", "Interaction Design", "TypeScript", "Lens Studio"],
    project: { title: "Jumpwise", slug: "jumpwise" },
  },
  {
    slug: "black-is-invisible-on-an-additive-display",
    title: "Black is invisible on an additive display",
    summary:
      "Spectacles can only add light, so black is see-through. The rule was in my design brief, the UI kit's dark grey defaults broke it, and the preview showed me the version that works. What I changed, and why no test could have caught it.",
    date: "2026-11-08",
    readingTime: "4 min read",
    tags: ["AR", "UI Design", "Spectacles", "Accessibility"],
    project: { title: "Jumpwise", slug: "jumpwise" },
  },
  {
    slug: "all-22-ran-and-that-proves-less-than-it-sounds",
    title: "All 22 ran, and that proves less than it sounds",
    summary:
      "My wig try-on app passed every task in a live test on AI-generated faces. Then two people used it on their own phones and the blend check gave neither of them a result. What each test could actually say, and how I wrote that down.",
    date: "2026-11-02",
    readingTime: "4 min read",
    tags: ["Testing", "AI APIs", "Evaluation", "Next.js"],
    project: { title: "Jaribu", slug: "jaribu" },
  },
  {
    slug: "the-task-succeeded-and-put-the-wrong-face-on-me",
    title: "The task succeeded and put the wrong face on me",
    summary:
      "A try-on API reported success, charged for the work, and returned a stranger's face on my body. The cause looks like the seller's photo, not the code, which changes where a marketplace has to do its checking.",
    date: "2026-11-02",
    readingTime: "3 min read",
    tags: ["AI APIs", "Product", "TypeScript", "YouCam API"],
    project: { title: "Jaribu", slug: "jaribu" },
  },
  {
    slug: "statistics-decide-the-model-explains",
    title: "Statistics decide, the model explains",
    summary:
      "In a caregiving agent, \"is something wrong?\" is the question that wakes a family at 7am, so a language model never answers it. Robust baselines and a drift test with a guard week decide; Amazon Nova only explains what the tools returned, and every quiet morning keeps its reason.",
    date: "2026-10-24",
    readingTime: "4 min read",
    tags: ["TypeScript", "Statistics", "LLMs", "Amazon Bedrock"],
    project: { title: "Jirani", slug: "jirani" },
  },
  {
    slug: "a-test-that-shares-your-assumption-cannot-catch-it",
    title: "A test that shares your assumption cannot catch it",
    summary:
      "My webhook parser and my event simulator were written from the same wrong reading of Ring's payload, so a thousand replayed events were accepted and every test passed. The fix was not more tests but a source of truth neither of them wrote: Ring's documented examples, pasted in verbatim.",
    date: "2026-10-23",
    readingTime: "3 min read",
    tags: ["Testing", "Webhooks", "TypeScript", "Ring API"],
    project: { title: "Jirani", slug: "jirani" },
  },
  {
    slug: "a-rule-enforced-in-one-place-is-not-enforced",
    title: "A rule enforced in one place is not enforced",
    summary:
      "One rule about client money ended up in four places: the domain, a database trigger, a repository translation, and the ordering of two writes. Each answers a different question, and removing any one leaves a system that passes its tests and is wrong on a busy afternoon.",
    date: "2026-08-24",
    readingTime: "6 min read",
    tags: ["TypeScript", "Effect", "Postgres", "Domain Modelling"],
    project: { title: "OKLaw Practice Management", slug: "oklaw-law-firm-management" },
    featured: true,
  },
  {
    slug: "the-failures-that-cost-most-are-the-silent-ones",
    title: "The failures that cost the most are the silent ones",
    summary:
      "Two chart bars drew in nothing on a page whose figures had already been checked in a browser. A sign-in refusal rendered as ordinary body text. Neither threw, neither logged, and neither was findable by looking, so I started parsing the stylesheet in a test.",
    date: "2026-08-12",
    readingTime: "5 min read",
    tags: ["CSS", "Testing", "Accessibility", "Vitest"],
    project: { title: "OKLaw Practice Management", slug: "oklaw-law-firm-management" },
  },
  {
    slug: "the-default-is-the-control-not-the-flag",
    title: "The default is the control, not the flag",
    summary:
      "Making a public demo's affordances conditional took an afternoon. Deciding which way the condition should fail took longer and mattered more, because one direction is a dull afternoon and the other publishes a one-click administrator login.",
    date: "2026-07-30",
    readingTime: "5 min read",
    tags: ["Security", "Configuration", "Deployment"],
    project: { title: "OKLaw Practice Management", slug: "oklaw-law-firm-management" },
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getAllPostSlugs(): string[] {
  return posts.map((post) => post.slug)
}

/** Newest first — the order the blog index and the command palette use. */
export function getSortedPosts(): Post[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date))
}

export function formatPostDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  })
}
