export type CaseMeta = {
  title: string;
  summary: string;
  org: string;
  period: string;
  stats: string[];
  order: number;
};

type CaseModule = { frontmatter: CaseMeta; url?: string };

const modules = import.meta.glob<CaseModule>('../pages/work/*.md', { eager: true });

export const cases = Object.entries(modules)
  .map(([path, mod]) => ({
    slug: path.split('/').pop()!.replace(/\.md$/, ''),
    ...mod.frontmatter,
  }))
  .sort((a, b) => a.order - b.order);

export const caseTitle = (slug: string) => cases.find((c) => c.slug === slug)?.title ?? slug;
