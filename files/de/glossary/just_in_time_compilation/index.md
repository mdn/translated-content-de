---
title: Just-In-Time Compilation (JIT)
slug: Glossary/Just_In_Time_Compilation
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**JIT** (_Just-In-Time Compilation_) ist ein {{Glossary("compile", "Kompilierungsprozess")}}, bei dem Code aus einer Zwischenrepräsentation oder einer höheren Programmiersprache (z.B. {{Glossary("JavaScript", "JavaScript")}} oder Java-Bytecode) zur Laufzeit in Maschinen-Code übersetzt wird, anstatt vor der Ausführung. Dieser Ansatz kombiniert die Vorteile sowohl der Interpretation als auch der Vorauskompilierung (AOT).

JIT-Compiler analysieren typischerweise kontinuierlich den Code, während er ausgeführt wird, und identifizieren Teile des Codes, die häufig ausgeführt werden (Hotspots). Wenn die Geschwindigkeitsvorteile den Aufwand für die Kompilierung überwiegen, kompiliert der JIT-Compiler diese Teile in Maschinen-Code. Der kompilierte Code wird dann direkt vom Prozessor ausgeführt, was zu erheblichen Leistungsverbesserungen führen kann.

JIT wird häufig in modernen {{Glossary("browser", "Webbrowsern")}} verwendet, um die Leistung von JavaScript-Code zu optimieren.

## Siehe auch

- [Just-In-Time Compilation](https://en.wikipedia.org/wiki/Just-in-time_compilation) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{Glossary("compile", "kompilieren")}}
