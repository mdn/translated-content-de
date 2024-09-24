---
title: Methode
slug: Glossary/Method
l10n:
  sourceCommit: 9409e72722add6d1c4baeaf7b262c9b0985c0bcf
---

{{GlossarySidebar}}

Eine **Methode** ist eine {{glossary("function", "Funktion")}}, die eine {{glossary("property", "Eigenschaft")}} eines {{glossary("object", "Objekts")}} ist. Es gibt zwei Arten von Methoden: _Instanzmethoden_, die eingebaute Aufgaben sind, die von einer Objektinstanz ausgeführt werden, oder _{{Glossary("static method", "statische Methoden")}}_, die Aufgaben sind, die direkt auf einem Objektkonstruktor aufgerufen werden.

> [!NOTE]
> In JavaScript sind Funktionen selbst Objekte, daher ist in diesem Kontext eine Methode tatsächlich ein {{glossary("object reference", "Objektreferenz")}} auf eine Funktion.

Wenn gesagt wird, dass `F` eine _Methode_ von `O` ist, bedeutet dies oft, dass `F` `O` als seine [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Bindung verwendet. Funktionseigenschaften, die keine unterschiedlichen Verhaltensweisen basierend auf ihrem `this`-Wert haben (oder solche, die überhaupt keine dynamische `this`-Bindung haben — wie [gebundene Funktionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) und [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions)), werden möglicherweise nicht universell als Methoden anerkannt.

## Siehe auch

- [Methode (Computerprogrammierung)](<https://en.wikipedia.org/wiki/Method_(computer_programming)>) in Wikipedia
- [Definieren einer Methode in JavaScript](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) (Vergleich der traditionellen Syntax und der neuen Kurzschreibweise)
- [Liste der eingebauten JavaScript-Methoden](/de/docs/Web/JavaScript/Reference)
- Verwandte Glossarbegriffe:
  - {{Glossary("function", "Funktion")}}
  - {{Glossary("object", "Objekt")}}
  - {{Glossary("property", "Eigenschaft")}}
  - {{Glossary("static method", "statische Methode")}}
