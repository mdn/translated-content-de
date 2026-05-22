---
title: Binding
slug: Glossary/Binding
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

In der Programmierung ist ein **Binding** eine Zuordnung eines {{Glossary("identifier", "Identifiers")}} zu einem Wert. Nicht alle Bindings sind {{Glossary("variable", "Variablen")}} — zum Beispiel sind Funktions{{Glossary("parameter", "Parameter")}} und das Binding, das durch den {{jsxref("Statements/try...catch", "catch (e)")}}-Block erstellt wird, im strengen Sinne keine "Variablen". Darüber hinaus werden einige Bindings implizit durch die Sprache erstellt — zum Beispiel {{jsxref("this")}} und [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) in JavaScript.

Ein Binding ist {{Glossary("mutable", "mutable")}}, wenn es neu zugewiesen werden kann, und {{Glossary("immutable", "immutable")}} andernfalls; das bedeutet _nicht_, dass der Wert, den es enthält, unveränderlich ist.

Ein Binding ist oft mit einem {{Glossary("scope", "Scope")}} verbunden. Einige Sprachen erlauben die Neuerstellung von Bindings (auch als Neudeklaration bezeichnet) innerhalb desselben Scopes, während andere dies nicht erlauben; in JavaScript hängt es davon ab, welche Struktur zum Erstellen des Bindings verwendet wurde, ob Bindings neu deklariert werden können.

## Siehe auch

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/class", "class")}}
