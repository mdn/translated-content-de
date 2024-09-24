---
title: asm.js
slug: Games/Tools/asm.js
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

> [!WARNING]
> Die [asm.js](http://asmjs.org/) Spezifikation gilt als **veraltet**.
> Entwickler können [WebAssembly](/de/docs/WebAssembly) als Alternative zu asm.js in Betracht ziehen, um leistungsstarken Code im Browser auszuführen.

[Asm.js](http://asmjs.org/) ist eine Spezifikation, die eine Teilmenge von JavaScript definiert, die stark optimierbar ist. Dieser Artikel befasst sich genau damit, was in der asm.js-Teilsprache erlaubt ist, welche Verbesserungen sie bietet, wo und wie Sie sie nutzen können, sowie mit weiteren Ressourcen und Beispielen.

## Was genau ist asm.js?

Es handelt sich um eine sehr kleine, strikte Teilmenge von JavaScript, die nur Dinge wie `while`, `if`, Zahlen, benannte Funktionen auf oberster Ebene und andere einfache Konstrukte erlaubt. Es erlaubt keine Objekte, Zeichenfolgen, Closures und im Grunde alles, was eine Speicherbelegung im Heap erfordert. Asm.js-Code ähnelt in vielerlei Hinsicht C, ist aber immer noch vollständig gültiges JavaScript, das in allen aktuellen Engines ausgeführt wird. Es drängt JS-Engines dazu, diese Art von Code zu optimieren und gibt Compilern wie [Emscripten](https://github.com/emscripten-core/emscripten) eine klare Definition, welche Art von Code zu erzeugen ist. Wir zeigen, wie asm.js-Code aussieht, erklären, wie es hilft, und wie Sie es nutzen können.

Diese Teilmenge von JavaScript ist bereits in vielen JavaScript-Engines stark optimiert, indem raffinierte Just-In-Time (JIT) Compilertechniken eingesetzt werden. Durch die Definition eines expliziten Standards können wir jedoch weiter daran arbeiten, diese Art von Code noch mehr zu optimieren und die bestmögliche Leistung daraus zu holen. Es erleichtert die Zusammenarbeit zwischen verschiedenen JS-Engines, da es einfach ist, darüber zu sprechen und Benchmarks durchzuführen. Die Idee ist, dass diese Art von Code **sehr schnell** in jeder Engine laufen sollte, und wenn nicht, ist das ein Fehler, da es eine klare Spezifikation gibt, für die Engines optimieren sollten.

Es erleichtert auch Personen, die Compiler schreiben und performanten Code im Web generieren möchten. Sie können die asm.js-Spezifikation konsultieren und wissen, dass sie schnell läuft, wenn sie sich an die asm.js-Muster halten. [Emscripten](https://github.com/emscripten-core/emscripten), ein C/C++ zu JavaScript-Compiler, erzeugt asm.js-Code, um ihn in mehreren Browsern mit nahezu nativer Leistung auszuführen.

Zusätzlich, wenn eine Engine entschließt, asm.js-Code speziell zu erkennen, können weitere Optimierungen vorgenommen werden. Firefox ist derzeit der einzige Browser, der dies tut.

## Zusammenfassung der asm.js-Sprache

asm.js ist eine Zwischenprogrammiersprache. asm.js hat eine sehr vorhersehbare Leistungsrate, da es auf eine extrem eingeschränkte Teilmenge von JavaScript beschränkt ist, die nur strikt getypte Ganzzahlen, Fließkommazahlen, Arithmetik, Funktionsaufrufe und Heap-Zugriffe bereitstellt. Die Leistungseigenschaften sind näher am nativen Code als die von standardmäßigem JavaScript. Da asm.js in einem Browser ausgeführt wird, hängt es stark vom Browser und der Hardware ab.
