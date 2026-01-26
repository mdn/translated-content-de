---
title: asm.js
slug: Games/Tools/asm.js
l10n:
  sourceCommit: 1a0be468b9e7c88a09ea3438a81341c4f6a619a6
---

> [!WARNING]
> Die [asm.js](http://asmjs.org/) Spezifikation wird als **veraltet** angesehen.
> Entwickler können [WebAssembly](/de/docs/WebAssembly) als Alternative zu asm.js in Betracht ziehen, um hochleistungsfähigen Code im Browser auszuführen.

[Asm.js](http://asmjs.org/) ist eine Spezifikation, die eine Teilmenge von JavaScript definiert, die stark optimierbar ist. Dieser Artikel befasst sich damit, was genau in die asm.js-Teilmenge aufgenommen wird, welche Verbesserungen sie bietet, wo und wie Sie sie nutzen können, sowie mit weiteren Ressourcen und Beispielen.

## Was ist asm.js genau?

Es handelt sich um eine sehr kleine, strikte Teilmenge von JavaScript, die nur Dinge wie `while`, `if`, Zahlen, benannte Funktionen auf oberster Ebene und andere einfache Strukturen erlaubt. Sie erlaubt keine Objekte, Zeichenfolgen, Closures und im Grunde alles, was eine Heap-Allokation erfordert. Asm.js-Code ähnelt in vielerlei Hinsicht C, ist aber dennoch vollständig gültiges JavaScript, das in allen aktuellen Engines läuft. Es treibt JS-Engines dazu an, diese Art von Code zu optimieren, und gibt Compilern wie [Emscripten](https://github.com/emscripten-core/emscripten) eine klare Definition, welche Art von Code generiert werden soll. Wir zeigen, wie asm.js-Code aussieht, erklären, wie er hilft und wie Sie ihn verwenden können.

Diese Teilmenge von JavaScript ist bereits in vielen JavaScript-Engines hochgradig optimiert, mithilfe aufwändiger Just-In-Time (JIT) Kompilierungstechniken. Durch die Definition eines expliziten Standards können wir jedoch an der weiteren Optimierung dieser Art von Code arbeiten und möglichst viel Leistung herausholen. Mit standardisierten Namen und Benchmarking ermöglicht es die Zusammenarbeit über mehrere JS-Engines hinweg. Die Idee ist, dass diese Art von Code in jeder Engine **sehr schnell** laufen sollte, und wenn nicht, ist es ein Fehler, und es gibt eine klare Spezifikation, die die Engines optimieren sollten.

Es reduziert auch die Komplexität für Personen, die Compiler schreiben möchten, um leistungsstarken Code im Web zu generieren. Sie können die asm.js-Spezifikation konsultieren und wissen, dass es schnell laufen wird, wenn sie sich an asm.js-Patterns halten. [Emscripten](https://github.com/emscripten-core/emscripten), ein C/C++ zu JavaScript-Compiler, erzeugt asm.js-Code, um mit nahezu nativer Leistung in mehreren Browsern zu laufen.

Zusätzlich, wenn eine Engine beschließt, asm.js-Code speziell zu erkennen, können noch mehr Optimierungen vorgenommen werden. Derzeit ist Firefox der einzige Browser, der dies tut.

## asm.js Sprachübersicht

asm.js ist eine Zwischenprogrammiersprache. asm.js hat eine sehr vorhersehbare Leistungsrate, da es auf eine extrem eingeschränkte Teilmenge von JavaScript beschränkt ist, die nur streng typisierte Ganzzahlen, Fließkommazahlen, Arithmetik, Funktionsaufrufe und Heap-Zugriffe bereitstellt. Die Leistungsmerkmale liegen näher an nativen Code als an standardmäßigem JavaScript. Durch die Verwendung einer Teilmenge von JavaScript wird asm.js bereits von großen Webbrowsern unterstützt. Da asm.js in einem Browser ausgeführt wird, hängt es stark vom Browser und der Hardware ab.
