---
title: asm.js
slug: Games/Tools/asm.js
l10n:
  sourceCommit: b25798255cfb773885c94557b74179400ac7153d
---

> [!WARNING]
> Die [asm.js](https://en.wikipedia.org/wiki/Asm.js)-Spezifikation gilt als **veraltet**.
> Entwickler können [WebAssembly](/de/docs/WebAssembly) als Alternative zu asm.js in Betracht ziehen, um leistungsstarken Code im Browser auszuführen.

[Asm.js](https://en.wikipedia.org/wiki/Asm.js) ist eine Spezifikation, die eine gut optimierbare Teilmenge von JavaScript definiert. Dieser Artikel erläutert, was in der asm.js-Teilmenge genau erlaubt ist, welche Leistungsverbesserungen sie ermöglicht, wo und wie Sie sie einsetzen können und welche weiterführenden Ressourcen und Beispiele es gibt.

## Was genau ist asm.js?

Asm.js ist eine sehr kleine, strenge Teilmenge von JavaScript, die nur Konstrukte wie `while`, `if`, Zahlen, benannte Funktionen auf oberster Ebene und andere einfache Konstrukte zulässt. Objekte, Zeichenfolgen, Closures und im Grunde alles, was eine Speicherzuweisung auf dem Heap erfordert, sind nicht erlaubt. Asm.js-Code ähnelt in vielerlei Hinsicht C, ist aber dennoch vollständig gültiges JavaScript, das in allen aktuellen Engines ausgeführt wird. Er veranlasst JS-Engines dazu, diese Art von Code zu optimieren, und gibt Compilern wie [Emscripten](https://github.com/emscripten-core/emscripten) eine klare Vorgabe, welche Art von Code sie erzeugen sollen. Wir zeigen, wie asm.js-Code aussieht, und erläutern, welche Vorteile er bietet und wie Sie ihn verwenden können.

Diese Teilmenge von JavaScript wird in vielen JavaScript-Engines bereits durch ausgefeilte Just-in-Time-Kompilierungstechniken (JIT) stark optimiert. Durch die Definition eines ausdrücklichen Standards können wir jedoch daran arbeiten, diese Art von Code noch weiter zu optimieren und möglichst viel Leistung daraus herauszuholen. Einheitliche Bezeichnungen und Benchmarks ermöglichen dabei die Zusammenarbeit über mehrere JS-Engines hinweg. Die Idee ist, dass diese Art von Code in jeder Engine sehr schnell laufen **sollte**. Ist das nicht der Fall, handelt es sich um einen Fehler, und es gibt eine klare Spezifikation, an der sich die Optimierung der Engines orientieren sollte.

Asm.js verringert außerdem die Komplexität für Entwickler von Compilern, die leistungsfähigen Code für das Web erzeugen möchten. Sie können die asm.js-Spezifikation heranziehen und wissen, dass ihr Code schnell ausgeführt wird, wenn er den asm.js-Mustern entspricht. [Emscripten](https://github.com/emscripten-core/emscripten), ein Compiler von C/C++ nach JavaScript, erzeugt asm.js-Code, der in mehreren Browsern nahezu mit der Leistung von nativem Code ausgeführt wird.

Wenn eine Engine asm.js-Code zudem gezielt erkennt, sind noch weitere Optimierungen möglich. Firefox ist derzeit der einzige Browser, der dies tut.

## Überblick über die asm.js-Sprache

Asm.js ist eine Programmiersprache für die Zwischendarstellung von Code. Ihre Leistung ist sehr gut vorhersehbar, da sie auf eine äußerst eingeschränkte Teilmenge von JavaScript begrenzt ist, die nur streng typisierte Ganzzahlen und Gleitkommazahlen, arithmetische Operationen, Funktionsaufrufe und Heap-Zugriffe bereitstellt. Ihre Leistungsmerkmale ähneln eher denen von nativem Code als denen von Standard-JavaScript. Da asm.js eine Teilmenge von JavaScript verwendet, wird es bereits von den wichtigsten Webbrowsern unterstützt. Weil asm.js in einem Browser ausgeführt wird, hängt seine Leistung stark vom Browser und von der Hardware ab.
