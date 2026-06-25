---
title: ภาพรวม Project & มาตรฐานการเขียน
description: Charter, โครงสร้าง, Naming Convention และ Documentation Standard ของคลัง AI Tricks
---

## Project Overview

รวบรวมความรู้ เทคนิค และ Trick การใช้งาน AI Tools สำหรับงาน Technical,
Automation, Coding, Documentation และ System Engineering

เน้นการใช้งานจริง ไม่ใช่ทฤษฎี ครอบคลุม Prompt Engineering, AI Coding Tools,
AI Co-work, การสร้าง Workflow, การติดตั้งเครื่องมือ, Best Practice และ
Prompt ตัวอย่างที่นำไปใช้ได้ทันที

## Purpose

1. รวบรวม AI Trick ที่ใช้ได้จริงในงานประจำวัน
2. เก็บ Prompt ตัวอย่างที่ผ่านการใช้งานและปรับแต่งแล้ว
3. เป็น Knowledge Base สำหรับเรียนรู้และอ้างอิงย้อนหลัง
4. ทำให้การใช้ Codex, Claude, Claude Code, Gemini และ Tools อื่น ๆ มีรูปแบบชัดเจน
5. ลดเวลาทดลองซ้ำ และนำ AI มาช่วยงาน Technical อย่างเป็นระบบ

## Scope of Content

### 1. Prompt Engineering
- เขียน Prompt ให้ AI วิเคราะห์ปัญหา / แก้ Code / Review งาน / สร้าง Documentation
- เขียน Prompt แบบ Step-by-step
- กำหนด Role, Context, Constraint, Output Format
- Prompt สำหรับงาน System Admin, Linux, AIX, Ansible, AWX, Automation

### 2. AI Coding Tools
- Codex, Claude Code, Claude Co-work, Gemini / Gemini Antigravity, Agent-based IDE อื่น ๆ
- แต่ละเครื่องมือเหมาะกับงานแบบไหน ใช้ยังไงให้ได้ผล ระวังอะไรบ้าง

### 3. AI Co-working Workflow
- ให้ AI ช่วย: วิเคราะห์ Requirement, ออกแบบโครงสร้าง Project, แยก Task,
  Review Script, หาจุดเสี่ยง/Bug, สรุปการแก้ไข, ทำ Change Log / Release Note,
  สร้าง README / SOP / Runbook

### 4. Skills, Agents & Custom Instructions
- เขียน Instruction ให้ AI ทำงานตาม Style ที่ต้องการ
- บังคับ Output Format (Markdown, YAML, JSON, Shell)
- ทำ Skill / Prompt Template สำหรับงานซ้ำ
- ใช้ AI ให้เหมาะกับงาน Technical และ Enterprise

### 5. Installation & Learning Notes
- วิธีติดตั้ง/เริ่มใช้ Tool, ปัญหาตอน Setup, Command ที่ใช้บ่อย,
  Configuration ที่ควรรู้, ข้อจำกัด, Tips, Lesson Learned

## Naming Convention

ทุก Note อยู่ใน `src/content/docs/notes/` ตั้งชื่อ `category-topic.md`
ตัวพิมพ์เล็ก คั่นด้วย hyphen ใช้ prefix 5 ตัวตามหมวด:

| Prefix      | หมวด                          | ตัวอย่าง                              |
|-------------|-------------------------------|---------------------------------------|
| `prompt-`   | Prompt Engineering            | `prompt-role-context-constraint.md`   |
| `tool-`     | AI Coding Tools               | `tool-claude-code-setup.md`           |
| `workflow-` | AI Co-working Workflow        | `workflow-ai-code-review.md`          |
| `skill-`    | Skills, Agents & Instructions | `skill-output-format-lock.md`         |
| `install-`  | Installation & Learning Notes | `install-gemini-cli.md`               |

Sidebar ของเว็บสร้างจากโฟลเดอร์ `notes/` อัตโนมัติ — เพิ่มไฟล์แล้วขึ้นเมนูเอง

## Documentation Standard

ทุก Note ใช้โครงสร้าง 7 ส่วนนี้ (พร้อม frontmatter `title` / `description`):

```markdown
---
title: ชื่อ Topic
description: สรุปสั้น 1 บรรทัด
---

## Overview            — เรื่องนี้เกี่ยวกับอะไร
## Use Case            — ใช้กับงานอะไร เมื่อไหร่ ทำไม
## Steps / Method      — Prompt, Command, หรือขั้นตอน
## Example             — ตัวอย่างจริง
## Notes               — ข้อจำกัด, Tips, สิ่งที่เรียนรู้
## Safety / Verification — ต้องเช็คอะไรก่อนใช้จริง
```

## Writing Style
- อธิบายเหมือนสอนเพื่อนร่วมทีม ไม่ใช้คำซับซ้อนเกินจำเป็น
- ภาษาไทยเป็นหลัก ศัพท์ Technical และ Code block ใช้ภาษาอังกฤษ
- มีตัวอย่าง Prompt / Command ประกอบเสมอ
- Trick ที่ใช้จริง → บันทึก Context และผลลัพธ์
- ระบุข้อควรระวังทุกครั้งถ้าเกี่ยวกับ Script, Automation, Production, Security

## Target Users
System Admin, DevOps, Platform Engineer, Automation Engineer, SRE,
Technical Support, และผู้ที่ต้องการใช้ AI ช่วยงาน Technical

## Important Notes
AI เป็นตัวช่วย ไม่ควรเชื่อผลลัพธ์ 100% โดยไม่ตรวจสอบ โดยเฉพาะงาน
Production, Security, Infrastructure, Script, Automation

ก่อนใช้ Code / Command / Config ที่ AI สร้าง ให้:
- ตรวจ Syntax
- ประเมินความเสี่ยงของ Command
- ทดสอบใน Lab / Non-production ก่อน
- ตรวจผลกระทบต่อระบบ
- Review Logic ก่อนใช้จริง

## Project Goal
สร้างคลังความรู้ส่วนตัวและทีมสำหรับใช้งาน AI ให้เกิดประโยชน์สูงสุด
เน้นเข้าใจง่าย ใช้ได้จริง ต่อยอดได้
