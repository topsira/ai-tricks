---
title: 'Claude Code: Plan Mode ก่อนแก้ Code จริง'
---

## Overview
Plan Mode = โหมด Read-only ของ Claude Code ที่ให้ AI สำรวจโค้ด เขียน Plan
ก่อน แล้วค่อยขออนุมัติ ไม่แก้ไฟล์จริงจนกว่าจะกด Approve

## Use Case
ใช้เมื่อ Task ใหญ่, กระทบหลายไฟล์, หรือไม่อยากให้ AI แก้โค้ดทันทีโดยไม่เห็น
แนวทางก่อน เหมาะกับงาน Refactor, Feature ใหม่, หรือ Production Code

## Steps / Method
1. เข้า Plan Mode (`shift+tab` สลับโหมด หรือสั่งให้เข้า Plan)
2. ให้ AI Explore โค้ดที่เกี่ยวข้องก่อนตอบ — ไม่ใช่เดา
3. AI เขียน Plan: Context, ไฟล์ที่จะแก้, ขั้นตอน, วิธี Verify
4. รีวิว Plan — ถามคำถามเพิ่มถ้าไม่ชัด (`AskUserQuestion`)
5. Approve → AI ออกจาก Plan Mode แล้วเริ่มแก้ไฟล์จริง

## Example
```text
User: "เพิ่ม cache logic ให้ API endpoint นี้"
AI (Plan Mode): Explore → พบ helper cache มีอยู่แล้วใน utils/cache.ts
               → Plan: ใช้ helper เดิม ไม่เขียนใหม่ ไฟล์ที่แก้ 1 ไฟล์
User: Approve
AI: แก้ไฟล์จริง
```

## Notes
- Plan Mode ช่วยจับ "AI จะเขียนโค้ดซ้ำของที่มีอยู่แล้ว" ก่อนเสียเวลาแก้จริง
- Task เล็ก (fix typo, 1-2 บรรทัด) ไม่ต้องเข้า Plan Mode — เกินความจำเป็น
- ถ้า Plan ดูกว้างไป ให้ถามกลับให้ AI โฟกัสเฉพาะไฟล์ที่จำเป็น

## Safety / Verification
- ตรวจ Plan ว่าไฟล์ที่จะแก้ตรงกับที่ตั้งใจจริง ไม่ใช่ไฟล์ใกล้เคียงผิดตัว
- งานที่กระทบ Production: รีวิว Plan ละเอียดก่อน Approve ทุกครั้ง
- หลัง Approve และแก้จริงแล้ว ต้องรัน Test / Build เพื่อยืนยันผลลัพธ์
