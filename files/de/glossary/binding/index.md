---
title: Bindung
slug: Glossary/Binding
l10n:
  sourceCommit: 1f7c54fce7dc72e99e3d22ece8958db1290a7062
---

{{GlossarySidebar}}

In der Programmierung ist eine **Bindung** eine Zuordnung eines [Bezeichners](/de/docs/Glossary/identifier) zu einem Wert. Nicht alle Bindungen sind [Variablen](/de/docs/Glossary/variable) — beispielsweise sind Funktions[parameter](/de/docs/Glossary/parameter) und die Bindung, die durch den {{jsxref("Statements/try...catch", "catch (e)")}} Block erstellt wird, im strengen Sinne keine "Variablen". Darüber hinaus werden einige Bindungen implizit durch die Sprache erstellt — zum Beispiel {{jsxref("Operators/this", "this")}} und [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) in JavaScript.

Eine Bindung ist [veränderbar](/de/docs/Glossary/mutable), wenn sie neu zugewiesen werden kann, und [unveränderlich](/de/docs/Glossary/immutable), wenn nicht; dies bedeutet jedoch _nicht_, dass der Wert, den sie hält, unveränderlich ist.

Eine Bindung ist oft mit einem [Gültigkeitsbereich](/de/docs/Glossary/scope) verbunden. Einige Sprachen erlauben es, Bindungen (auch als erneutes Deklarieren bezeichnet) innerhalb desselben Gültigkeitsbereichs neu zu erstellen, während andere dies nicht zulassen; in JavaScript hängt es vom Konstrukt ab, das zur Erstellung der Bindung verwendet wird, ob Bindungen neu deklariert werden können.

## Siehe auch

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/class", "class")}}
