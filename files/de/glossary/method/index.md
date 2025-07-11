---
title: Methode
slug: Glossary/Method
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Eine **Methode** ist eine {{Glossary("function", "Funktion")}}, die eine {{Glossary("property", "Eigenschaft")}} eines {{Glossary("object", "Objekts")}} ist. Es gibt zwei Arten von Methoden: _Instanzmethoden_, die eingebaute Aufgaben sind, die von einer Objektinstanz durchgeführt werden, oder _{{Glossary("static_method", "statische Methoden")}}_, die Aufgaben sind, die direkt auf einem Objektkonstruktor aufgerufen werden.

> [!NOTE]
> In JavaScript sind Funktionen selbst Objekte, daher ist in diesem Kontext eine Methode tatsächlich eine {{Glossary("object_reference", "Objektreferenz")}} auf eine Funktion.

Wenn `F` als _Methode_ von `O` bezeichnet wird, bedeutet das oft, dass `F` `O` als seine [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Bindung verwendet. Funktions-Eigenschaften, die kein unterschiedliches Verhalten basierend auf ihrem `this`-Wert haben (oder die überhaupt keine dynamische `this`-Bindung haben — wie [gebundene Funktionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) und [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions)) werden möglicherweise nicht universell als Methoden anerkannt.

## Siehe auch

- [Methode (Computerprogrammierung)](<https://en.wikipedia.org/wiki/Method_(computer_programming)>) in Wikipedia
- [Definieren einer Methode in JavaScript](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) (Vergleich der traditionellen Syntax und der neuen Kurzschreibweise)
- [Liste der eingebauten JavaScript-Methoden](/de/docs/Web/JavaScript/Reference)
- Verwandte Glossarbegriffe:
  - {{Glossary("function", "Funktion")}}
  - {{Glossary("object", "Objekt")}}
  - {{Glossary("property", "Eigenschaft")}}
  - {{Glossary("static_method", "statische Methode")}}
