---
title: asm.js
slug: Games/Tools/asm.js
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

> [!WARNING]
> Die [asm.js](http://asmjs.org/) Spezifikation gilt als **veraltet**.
> Entwickler könnten [WebAssembly](/de/docs/WebAssembly) als Alternative zu asm.js in Betracht ziehen, um Hochleistungscode im Browser auszuführen.

[Asm.js](http://asmjs.org/) ist eine Spezifikation, die eine Teilmenge von JavaScript definiert, die hoch optimierbar ist. Dieser Artikel untersucht, was genau in der asm.js-Teilmenge erlaubt ist, welche Verbesserungen sie bietet, wo und wie Sie sie nutzen können, sowie weitere Ressourcen und Beispiele.

## Was ist asm.js genau?

Es handelt sich um eine sehr kleine, strenge Teilmenge von JavaScript, die nur Dinge wie `while`, `if`, Zahlen, benannte Funktionen auf der obersten Ebene und andere einfache Konstrukte erlaubt. Es erlaubt keine Objekte, Strings, Closures und im Grunde alles, was eine Heap-Allokation erfordert. Asm.js-Code ähnelt in vielerlei Hinsicht C, ist aber dennoch vollständig gültiges JavaScript, das in allen aktuellen Engines ausgeführt wird. Es fordert JS-Engines dazu auf, diese Art von Code zu optimieren, und gibt Compilern wie [Emscripten](https://github.com/emscripten-core/emscripten) eine klare Definition, welche Art von Code zu generieren ist. Wir werden zeigen, wie asm.js-Code aussieht und erklären, wie es hilft und wie Sie es verwenden können.

Diese Teilmenge von JavaScript ist in vielen JavaScript-Engines bereits hoch optimiert, indem ausgeklügelte Just-In-Time (JIT)-Kompilierungstechniken verwendet werden. Durch die Definition eines expliziten Standards können wir jedoch daran arbeiten, diese Art von Code noch weiter zu optimieren und so viel Leistung wie möglich herauszuholen. Es erleichtert die Zusammenarbeit über mehrere JS-Engines hinweg, da es einfach ist, darüber zu sprechen und Benchmarks zu erstellen. Die Idee ist, dass diese Art von Code **sollte** in jeder Engine sehr schnell laufen, und wenn nicht, ist es ein Fehler, und es gibt eine klare Spezifikation, für die Engines optimieren sollten.

Es erleichtert auch das Erstellen von Compilern für Entwickler, die performanten Code für das Web generieren möchten. Sie können die asm.js-Spezifikation konsultieren und wissen, dass er schnell ausgeführt wird, wenn sie sich an asm.js-Muster halten. [Emscripten](https://github.com/emscripten-core/emscripten), ein C/C++ zu JavaScript Compiler, gibt asm.js Code aus, um ihn mit nahezu nativer Leistung in mehreren Browsern auszuführen.

Darüber hinaus gibt es, wenn eine Engine speziell asm.js-Code erkennen kann, noch mehr Optimierungen, die vorgenommen werden können. Firefox ist derzeit der einzige Browser, der dies tut.

## asm.js Sprachzusammenfassung

asm.js ist eine zwischengelagerte Programmiersprache. asm.js hat eine sehr vorhersehbare Leistungsausbeute, da es auf eine extrem eingeschränkte Teilmenge von JavaScript beschränkt ist, die nur streng typisierte Ganzzahlen, Gleitkommazahlen, Arithmetik, Funktionsaufrufe und Heap-Zugriffe bietet. Die Leistungsmerkmale sind näher am nativen Code als die von Standard-JavaScript. Durch die Verwendung einer Teilmenge von JavaScript wird asm.js bereits von großen Webbrowsern unterstützt. Da asm.js in einem Browser läuft, hängt es stark vom Browser und der Hardware ab.
