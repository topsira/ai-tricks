# AI Tricks

คลังความรู้ AI Tricks, Prompt Engineering, AI Coding Workflow และ Tool Notes
สำหรับงาน Technical / Automation / System Engineering — เน้นใช้งานจริง

**🌐 Live site:** https://topsira.github.io/ai-tricks/

สร้างด้วย [Astro](https://astro.build) + [Starlight](https://starlight.astro.build),
deploy อัตโนมัติด้วย GitHub Actions ไปยัง GitHub Pages

## โครงสร้าง

```
src/content/docs/
├── index.mdx            # หน้าแรก (landing)
├── instructions.md      # Charter + Documentation Standard
└── notes/               # Note ทั้งหมด — ขึ้น sidebar อัตโนมัติ
    └── <category>-<topic>.md
```

## เพิ่ม Note ใหม่

1. สร้างไฟล์ `src/content/docs/notes/<category>-<topic>.md`
   — prefix: `prompt-` `tool-` `workflow-` `skill-` `install-`
2. ใส่ frontmatter `title` + `description` แล้วเขียนตาม 7-section template
   (ดู [instructions](src/content/docs/instructions.md))
3. Push → GitHub Actions build + deploy เอง

## Local development

```bash
npm install
npm run dev      # http://localhost:4321/ai-tricks/
npm run build    # output ไปที่ dist/
```
