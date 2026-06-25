# AI Tricks

คลังความรู้ AI Tricks, Prompt Engineering, AI Coding Workflow และ Tool Notes
สำหรับงาน Technical / Automation / System Engineering — เน้นใช้งานจริง

**🌐 Live site:** https://topsira.github.io/ai-tricks/

สร้างด้วย [Hugo](https://gohugo.io) + [Hextra theme](https://github.com/imfing/hextra),
deploy อัตโนมัติด้วย GitHub Actions ไปยัง GitHub Pages

## โครงสร้าง

```
content/
├── _index.md             # หน้าแรก (landing + hero)
└── docs/
    ├── _index.md         # หน้า Docs
    ├── instructions.md   # Charter + Documentation Standard
    └── notes/            # Note ทั้งหมด — ขึ้น sidebar อัตโนมัติ
        └── <category>-<topic>.md
```

## เพิ่ม Note ใหม่

1. สร้างไฟล์ `content/docs/notes/<category>-<topic>.md`
   — prefix: `prompt-` `tool-` `workflow-` `skill-` `install-`
2. ใส่ frontmatter `title` แล้วเขียนตาม 7-section template
   (ดู [instructions](content/docs/instructions.md))
3. Push → GitHub Actions build + deploy เอง

## Local development

```bash
# clone พร้อม theme submodule
git clone --recurse-submodules https://github.com/topsira/ai-tricks
cd ai-tricks

hugo server          # http://localhost:1313/ai-tricks/
hugo --minify --gc   # build ไปที่ public/
```

> ต้องติดตั้ง **Hugo extended** (`brew install hugo`)
