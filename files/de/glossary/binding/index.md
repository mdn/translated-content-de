---
title: Bindung
slug: Glossary/Binding
l10n:
  sourceCommit: 1f7c54fce7dc72e99e3d22ece8958db1290a7062
---

{{GlossarySidebar}}

In der Programmierung ist eine **Bindung** eine Zuordnung eines {{glossary("identifier", "Bezeichners")}} zu einem Wert. Nicht alle Bindungen sind {{glossary("variable", "Variablen")}} — zum Beispiel sind Funktions-{{glossary("parameter", "Parameter")}} und die durch den {{jsxref("Statements/try...catch", "catch (e)")}} Block erstellte Bindung im strengen Sinne keine "Variablen". Zusätzlich werden einige Bindungen implizit durch die Sprache erstellt — zum Beispiel {{jsxref("Operators/this", "this")}} und [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) in JavaScript.

Eine Bindung ist {{glossary("mutable", "änderbar")}}, wenn sie neu zugewiesen werden kann, und {{glossary("immutable", "unveränderlich")}} andernfalls; dies bedeutet _nicht_, dass der Wert, den sie hält, unveränderlich ist.

Eine Bindung ist oft mit einem {{glossary("scope", "Geltungsbereich")}} verbunden. Einige Sprachen erlauben es, Bindungen (auch als erneutes Deklarieren bezeichnet) innerhalb desselben Geltungsbereichs neu zu erstellen, während andere dies nicht tun; in JavaScript hängt es davon ab, welches Konstrukt zur Erstellung der Bindung verwendet wurde, ob Bindungen neu deklariert werden können.

## Siehe auch

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/class", "class")}}
