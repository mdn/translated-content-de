---
title: asm.js
slug: Games/Tools/asm.js
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

> [!WARNING]
> Die [asm.js](http://asmjs.org/)-Spezifikation gilt als **veraltet**.
> Entwickler können [WebAssembly](/de/docs/WebAssembly) als Alternative zu asm.js für das Ausführen von hochleistungsfähigem Code im Browser in Betracht ziehen.

[Asm.js](http://asmjs.org/) ist eine Spezifikation, die eine Teilmenge von JavaScript definiert, die hoch optimierbar ist. Dieser Artikel untersucht, was genau in der asm.js-Teilmenge erlaubt ist, welche Verbesserungen sie mit sich bringt, wo und wie Sie sie nutzen können, sowie weitere Ressourcen und Beispiele.

## Was ist asm.js genau?

Es ist eine sehr kleine, strenge Teilmenge von JavaScript, die nur Dinge wie `while`, `if`, Zahlen, benannte Funktionen auf höchster Ebene und andere einfache Konstrukte zulässt. Es erlaubt keine Objekte, Zeichenfolgen, Closures und im Grunde alles, was Speicherzuweisung erfordert. Asm.js-Code ähnelt in vieler Hinsicht C, ist aber dennoch vollständig gültiges JavaScript, das in allen aktuellen Engines läuft. Es fordert JS-Engines auf, diese Art von Code zu optimieren und gibt Compilern wie [Emscripten](https://github.com/emscripten-core/emscripten) eine klare Definition, welche Art von Code zu erzeugen ist. Wir werden zeigen, wie asm.js-Code aussieht, erklären, wie es hilft und wie Sie es verwenden können.

Diese JavaScript-Teilmenge ist in vielen JavaScript-Engines bereits hoch optimiert, indem ausgeklügelte Just-In-Time (JIT)-Kompilierungstechniken eingesetzt werden. Durch die Definition eines expliziten Standards können wir jedoch daran arbeiten, diese Art von Code noch weiter zu optimieren und die bestmögliche Leistung daraus zu ziehen. Es erleichtert die Zusammenarbeit über mehrere JS-Engines hinweg, weil es einfach ist, darüber zu sprechen und zu benchmarken. Die Idee ist, dass diese Art von Code **sehr schnell** in jeder Engine laufen sollte, und wenn nicht, handelt es sich um einen Fehler, und es gibt eine klare Spezifikation, für die die Engines optimieren sollten.

Es ermöglicht es auch Menschen, die Compiler schreiben, die leistungsstarken Code im Web erzeugen möchten. Sie können die asm.js-Spezifikation konsultieren und wissen, dass sie schnell laufen wird, wenn sie sich an die asm.js-Muster halten. [Emscripten](https://github.com/emscripten-core/emscripten), ein C/C++ zu JavaScript-Compiler, gibt asm.js-Code aus, um es mit nahezu nativer Leistung in mehreren Browsern auszuführen.

Zusätzlich können noch mehr Optimierungen vorgenommen werden, wenn eine Engine sich entscheidet, asm.js-Code speziell zu erkennen. Firefox ist derzeit der einzige Browser, der dies tut.

## Zusammenfassung der asm.js-Sprache

asm.js ist eine Zwischenprogrammiersprache. asm.js hat eine sehr vorhersehbare Leistungsrate, da es auf eine extrem eingeschränkte JavaScript-Teilmenge beschränkt ist, die nur streng getypte Ganzzahlen, Gleitkommazahlen, Arithmetik, Funktionsaufrufe und Speicherzugriffe bereitstellt. Die Leistungsmerkmale sind näher am nativen Code als der des Standard-JavaScripts. Da asm.js eine Teilmenge von JavaScript verwendet, wird es bereits von den wichtigsten Webbrowsern unterstützt. Da asm.js in einem Browser läuft, hängt es stark vom Browser und der Hardware ab.
