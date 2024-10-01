---
title: Binding
slug: Glossary/Binding
l10n:
  sourceCommit: 1f7c54fce7dc72e99e3d22ece8958db1290a7062
---

{{GlossarySidebar}}

In der Programmierung ist ein **Binding** eine Zuordnung eines {{Glossary("identifier", "Bezeichners")}} zu einem Wert. Nicht alle Bindings sind {{Glossary("variable", "Variablen")}} — zum Beispiel sind Funktions{{Glossary("parameter", "parameter")}} und das Binding, das durch den {{jsxref("Statements/try...catch", "catch (e)")}}-Block erstellt wird, im strengen Sinne keine "Variablen". Darüber hinaus werden einige Bindings implizit durch die Programmiersprache erstellt — zum Beispiel {{jsxref("Operators/this", "this")}} und [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) in JavaScript.

Ein Binding ist {{Glossary("mutable", "änderbar")}}, wenn es neu zugewiesen werden kann, und {{Glossary("immutable", "unveränderbar")}}, wenn dies nicht möglich ist; das bedeutet _nicht_, dass der Wert, den es hält, unveränderbar ist.

Ein Binding wird oft mit einem {{Glossary("scope", "Gültigkeitsbereich")}} in Verbindung gebracht. Einige Programmiersprachen erlauben die Neuerstellung von Bindings (auch als Neudeklaration bezeichnet) innerhalb desselben Gültigkeitsbereichs, andere nicht; ob Bindings in JavaScript neu deklariert werden können, hängt von der verwendeten Konstruktion ab, um das Binding zu erstellen.

## Siehe auch

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/class", "class")}}
