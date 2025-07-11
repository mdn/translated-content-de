---
title: asm.js
slug: Games/Tools/asm.js
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

> [!WARNING]
> Die [asm.js](http://asmjs.org/) Spezifikation wird als **veraltet** angesehen.
> Entwickler können [WebAssembly](/de/docs/WebAssembly) als Alternative zu asm.js in Betracht ziehen, um performanten Code im Browser auszuführen.

[Asm.js](http://asmjs.org/) ist eine Spezifikation, die eine Teilmenge von JavaScript definiert, die hoch optimierbar ist. Dieser Artikel beleuchtet, was genau in der asm.js-Teilmenge erlaubt ist, welche Verbesserungen sie bietet, wo und wie Sie sie nutzen können, sowie weitere Ressourcen und Beispiele.

## Was genau ist asm.js?

Es ist eine sehr kleine, strikte Teilmenge von JavaScript, die nur Dinge wie `while`, `if`, Zahlen, benannte Funktionen auf oberster Ebene und andere einfache Konstrukte erlaubt. Sie erlaubt keine Objekte, Zeichenfolgen, Closures und grundsätzlich alles, was Heap-Allokation erfordert. Asm.js-Code ähnelt in vielerlei Hinsicht C, ist aber dennoch vollständig gültiges JavaScript, das in allen aktuellen Engines ausgeführt wird. Es treibt JS-Engines dazu an, diese Art von Code zu optimieren, und gibt Compilern wie [Emscripten](https://github.com/emscripten-core/emscripten) eine klare Definition dessen, welche Art von Code zu erzeugen ist. Wir werden zeigen, wie asm.js-Code aussieht, erklären, wie er hilft und wie Sie ihn verwenden können.

Diese Teilmenge von JavaScript ist bereits in vielen JavaScript-Engines hoch optimiert, indem ausgeklügelte Just-In-Time (JIT) Compilierungstechniken verwendet werden. Durch die Definition eines expliziten Standards können wir jedoch daran arbeiten, diese Art von Code noch weiter zu optimieren und so viel Leistung wie möglich herauszuholen. Es erleichtert die Zusammenarbeit über mehrere JS-Engines hinweg, da es einfach ist, darüber zu sprechen und Benchmarks zu erstellen. Die Idee ist, dass diese Art von Code **sehr schnell** in jeder Engine laufen sollte, und wenn nicht, handelt es sich um einen Fehler und es gibt eine klare Spezifikation, für die Engines optimieren sollten.

Es erleichtert auch Menschen, die Compiler schreiben, die leistungsstarken Code im Web erzeugen möchten. Sie können die asm.js-Spezifikation zu Rate ziehen und wissen, dass der Code schnell laufen wird, wenn sie sich an die asm.js-Muster halten. [Emscripten](https://github.com/emscripten-core/emscripten), ein C/C++-zu-JavaScript-Compiler, gibt asm.js-Code aus, um ihn mit nahezu nativer Leistung in mehreren Browsern auszuführen.

Zusätzlich, wenn sich eine Engine entscheidet, asm.js-Code speziell zu erkennen, können noch mehr Optimierungen vorgenommen werden. Derzeit ist Firefox der einzige Browser, der dies tut.

## asm.js Sprachübersicht

asm.js ist eine Zwischensprache. asm.js hat eine sehr vorhersehbare Leistungsrate, da es auf eine extrem eingeschränkte Teilmenge von JavaScript beschränkt ist, die nur strikt typisierte Ganzzahlen, Fließkommazahlen, Arithmetik, Funktionsaufrufe und Speicherzugriffe bereitstellt. Die Leistungseigenschaften sind näher am nativen Code als am standardmäßigen JavaScript. Da eine Teilmenge von JavaScript verwendet wird, wird asm.js bereits von den wichtigsten Webbrowsern unterstützt. Da asm.js in einem Browser ausgeführt wird, hängt es stark vom Browser und der Hardware ab.
