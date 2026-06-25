---
title: Role + Context + Constraint Prompt Pattern
---

## Overview
โครงสร้าง Prompt พื้นฐานที่บอก AI ว่า "เป็นใคร, รู้บริบทอะไร, ห้าม/ต้องทำอะไร,
อยาก Output แบบไหน" ก่อนสั่งงานจริง ลดการเดาบริบทผิดและคำตอบที่กว้างเกินไป

## Use Case
ใช้เมื่อ AI ตอบกว้างเกินไป, เดาบริบทผิด, หรือ Output รูปแบบไม่คงที่
เหมาะกับงาน System Admin / Automation ที่ผิดพลาดไม่ได้ และงานที่ต้องส่งต่อ
Output ให้ระบบอื่นใช้ (เช่น YAML, JSON, Shell)

## Steps / Method
1. **Role** — กำหนดบทบาท เช่น `You are a senior Linux engineer`
2. **Context** — ใส่ OS, version, tool, ข้อจำกัดของระบบ
3. **Constraint** — ระบุสิ่งที่ห้ามทำ เช่น ห้ามแตะ production, ห้าม `rm -rf`
4. **Output Format** — ขอ Markdown / Shell / YAML ให้ชัด
5. **Task** — สั่งงานจริงเป็นข้อสุดท้าย

## Example
```text
You are a senior Linux engineer.
Context: RHEL 9, no internet access, systemd-based.
Constraint: read-only analysis only — do NOT modify any files or services.
Output: a Markdown table of findings.
Task: review this `journalctl` output and list the top 3 likely root causes.
```

## Notes
- ยิ่ง Context แคบ คำตอบยิ่งตรง
- Constraint แบบ "ห้าม..." ลด action เสี่ยงได้จริง แต่ไม่ใช่ 100% — ยังต้องรีวิวเอง
- เก็บ Prompt ที่ได้ผลไว้เป็น Template reuse ในงานถัดไป

## Safety / Verification
- ก่อนรัน Command ใด ๆ ที่ AI เสนอ: ตรวจ Syntax และอ่าน man page ของ flag ที่ไม่รู้จัก
- ทดสอบใน Non-production ก่อนเสมอ
- ห้าม copy-paste Command ที่มี `rm`, `dd`, `mkfs`, หรือ redirect `>` โดยไม่อ่าน
- งานที่กระทบ Production / Security ต้องให้คนรีวิว Logic ก่อนใช้จริง
