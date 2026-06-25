// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Project Pages: served under /ai-tricks/ on topsira.github.io
export default defineConfig({
  site: 'https://topsira.github.io',
  base: '/ai-tricks',
  integrations: [
    starlight({
      title: 'AI Tricks',
      description:
        'คลังความรู้ AI Tricks, Prompt Engineering, AI Coding Workflow และ Tool Notes สำหรับงาน Technical / Automation / System Engineering',
      defaultLocale: 'root',
      locales: {
        root: { label: 'ไทย', lang: 'th' },
      },
      social: {
        github: 'https://github.com/topsira/ai-tricks',
      },
      sidebar: [
        { label: 'เริ่มต้น', items: [{ label: 'ภาพรวม Project', slug: 'instructions' }] },
        {
          label: 'Notes',
          autogenerate: { directory: 'notes' },
        },
      ],
    }),
  ],
});
