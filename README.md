# 🗓️ React Custom Calendar

This project is a React-based custom calendar built using `react-big-calendar` and `moment.js`.

It demonstrates a **day view calendar** where events can be scheduled with high precision — as short as **7.5 minutes**. The calendar is configured to use 15-minute time slots, with non-overlapping event rendering.

---

## 🎯 Project Objective

The main goal of this project is to **demonstrate an issue with event title alignment** when using `react-big-calendar`:

- The calendar displays events (sessions) correctly in terms of **duration and placement**.
- However, **event titles do not align properly**, especially for events with very short durations (like 7.5 minutes).
- This misalignment can impact user experience in applications that require precise and readable session blocks.

---

## 🔍 Why This Matters

When building applications like scheduling systems, medical appointment tools, or booking apps, it's important that short-duration events are:

- Displayed accurately in the calendar.
- **Readable and properly aligned** for clarity.
- Easily distinguishable without overlap or visual glitches.

This project brings attention to a subtle limitation or rendering bug in `react-big-calendar` when handling very short time slots.

---

## 🧪 Example Setup

Two back-to-back sessions are created:

- **Team Meeting**: from 01:00 AM to 01:07:30 AM
- **Lunch Break**: from 01:07:30 AM to 01:15 AM

Both events are rendered correctly in terms of timing, but the **titles may appear misaligned** depending on the rendering engine and styles.

---
