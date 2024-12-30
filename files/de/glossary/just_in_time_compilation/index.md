---
title: Just-In-Time-Kompilierung (JIT)
slug: Glossary/Just_In_Time_Compilation
l10n:
  sourceCommit: fabc398130abaab48f84f0e21c6755c8fb6dc836
---

{{GlossarySidebar}}

**JIT** (_Just-In-Time-Kompilierung_) ist ein {{Glossary("compile", "Kompilierungs")}}prozess, bei dem Code zur Laufzeit von einer Zwischenrepräsentation oder einer höheren Programmiersprache (z. B. {{Glossary("JavaScript", "JavaScript")}} oder Java-Bytecode) in Maschinencode übersetzt wird, anstatt vor der Ausführung. Dieser Ansatz kombiniert die Vorteile sowohl der Interpretation als auch der vorkompilierten (AOT) Kompilierung.

JIT-Compiler analysieren typischerweise kontinuierlich den Code während der Ausführung, um Teile des Codes zu identifizieren, die häufig ausgeführt werden (Hotspots). Wenn die Geschwindigkeitsgewinne den Kompilierungsaufwand überwiegen, kompiliert der JIT-Compiler diese Teile in Maschinencode. Der kompilierte Code wird dann direkt vom Prozessor ausgeführt, was zu erheblichen Leistungssteigerungen führen kann.

JIT wird häufig in modernen {{Glossary("browser", "Webbrowsern")}} verwendet, um die Leistung von JavaScript-Code zu optimieren.

## Siehe auch

- [Just-In-Time-Kompilierung](https://en.wikipedia.org/wiki/Just-in-time_compilation) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{Glossary("compile", "kompilieren")}}
