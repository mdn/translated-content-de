---
title: Methode
slug: Glossary/Method
l10n:
  sourceCommit: 9409e72722add6d1c4baeaf7b262c9b0985c0bcf
---

{{GlossarySidebar}}

Eine **Methode** ist eine [Funktion](/de/docs/Glossary/function), die eine [Eigenschaft](/de/docs/Glossary/property) eines [Objekts](/de/docs/Glossary/object) ist. Es gibt zwei Arten von Methoden: _Instanzmethoden_, die eingebaute Aufgaben ausführen, die von einer Objektinstanz durchgeführt werden, oder _[statische Methoden](/de/docs/Glossary/static_method)_, die Aufgaben sind, die direkt am Objektkonstruktor aufgerufen werden.

> [!NOTE]
> In JavaScript sind Funktionen selbst Objekte, daher ist in diesem Kontext eine Methode tatsächlich ein [Objektreferenz](/de/docs/Glossary/object_reference) auf eine Funktion.

Wenn `F` als _Methode_ von `O` bezeichnet wird, bedeutet dies oft, dass `F` `O` als seine [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Bindung verwendet. Funktionseigenschaften, die kein unterschiedliches Verhalten basierend auf ihrem `this`-Wert haben (oder solche, die überhaupt keine dynamische `this`-Bindung haben — wie [gebundene Funktionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) und [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions)) werden möglicherweise nicht universell als Methoden anerkannt.

## Siehe auch

- [Methode (Informatik)](<https://en.wikipedia.org/wiki/Method_(computer_programming)>) in Wikipedia
- [Definieren einer Methode in JavaScript](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) (Vergleich der traditionellen Syntax und der neuen Kurzschreibweise)
- [Liste der eingebauten JavaScript-Methoden](/de/docs/Web/JavaScript/Reference)
- Verwandte Glossarbegriffe:
  - [Funktion](/de/docs/Glossary/function)
  - [Objekt](/de/docs/Glossary/object)
  - [Eigenschaft](/de/docs/Glossary/property)
  - [statische Methode](/de/docs/Glossary/static_method)
