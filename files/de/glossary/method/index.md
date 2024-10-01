---
title: Method
slug: Glossary/Method
l10n:
  sourceCommit: 9409e72722add6d1c4baeaf7b262c9b0985c0bcf
---

{{GlossarySidebar}}

Eine **Methode** ist eine {{Glossary("function", "Funktion")}}, die eine {{Glossary("property", "Eigenschaft")}} eines {{Glossary("object", "Objekts")}} ist. Es gibt zwei Arten von Methoden: _Instanzmethoden_, die integrierte Aufgaben sind, die von einer Objektinstanz ausgeführt werden, und _{{Glossary("static_method", "statische Methoden")}}_, die Aufgaben sind, die direkt über einen Objektkonstruktor aufgerufen werden.

> [!NOTE]
> In JavaScript sind Funktionen selbst Objekte, daher ist eine Methode in diesem Kontext tatsächlich eine {{Glossary("object_reference", "Objektreferenz")}} auf eine Funktion.

Wenn `F` als _Methode_ von `O` bezeichnet wird, bedeutet dies oft, dass `F` `O` als seine [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Bindung verwendet. Funktionseigenschaften, die kein unterschiedliches Verhalten basierend auf ihrem `this`-Wert haben (oder solche, die gar keine dynamische `this`-Bindung haben — wie [gebundene Funktionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) und [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions)), werden möglicherweise nicht allgemein als Methoden anerkannt.

## Siehe auch

- [Method (computer programming)](<https://en.wikipedia.org/wiki/Method_(computer_programming)>) in Wikipedia
- [Definieren einer Methode in JavaScript](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) (Vergleich der traditionellen Syntax und der neuen Kurzschreibweise)
- [Liste der integrierten JavaScript-Methoden](/de/docs/Web/JavaScript/Reference)
- Verwandte Glossarbegriffe:
  - {{Glossary("function", "Funktion")}}
  - {{Glossary("object", "Objekt")}}
  - {{Glossary("property", "Eigenschaft")}}
  - {{Glossary("static_method", "statische Methode")}}
