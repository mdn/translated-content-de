---
title: Bindung
slug: Glossary/Binding
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

In der Programmierung ist eine **Bindung** eine Zuordnung eines {{Glossary("identifier", "Bezeichners")}} zu einem Wert. Nicht alle Bindungen sind {{Glossary("variable", "Variablen")}} — zum Beispiel sind Funktions{{Glossary("parameter", "parameter")}} und die Bindung, die durch den {{jsxref("Statements/try...catch", "catch (e)")}}-Block erstellt wird, im strengen Sinne keine "Variablen". Darüber hinaus werden einige Bindungen implizit durch die Sprache erstellt — zum Beispiel {{jsxref("Operators/this", "this")}} und [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) in JavaScript.

Eine Bindung ist {{Glossary("mutable", "veränderlich")}}, wenn sie neu zugewiesen werden kann, und {{Glossary("immutable", "unveränderlich")}}, wenn nicht; das bedeutet _nicht_, dass der Wert, den sie hält, unveränderlich ist.

Eine Bindung ist häufig mit einem {{Glossary("scope", "Gültigkeitsbereich")}} verbunden. Einige Sprachen erlauben das erneute Erstellen von Bindungen (auch Redeclarierung genannt) innerhalb desselben Gültigkeitsbereichs, während andere dies nicht tun; in JavaScript hängt es von der Konstruktion ab, die zur Erstellung der Bindung verwendet wurde, ob Bindungen erneut deklariert werden können.

## Siehe auch

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/class", "class")}}
