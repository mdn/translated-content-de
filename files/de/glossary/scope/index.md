---
title: Gültigkeitsbereich
slug: Glossary/Scope
l10n:
  sourceCommit: efe384c1877f0ed991e42851d1f9d34fa136ce38
---

{{GlossarySidebar}}

Der **Gültigkeitsbereich** ist der aktuelle Kontext der Ausführung, in dem {{glossary("value","Werte")}} und Ausdrücke "sichtbar" sind oder referenziert werden können. Wenn eine {{glossary("variable","Variable")}} oder ein Ausdruck nicht im aktuellen Gültigkeitsbereich ist, ist er nicht verfügbar. Gültigkeitsbereiche können auch in einer Hierarchie angeordnet sein, sodass untergeordnete Gültigkeitsbereiche Zugriff auf übergeordnete Gültigkeitsbereiche haben, aber nicht umgekehrt.

JavaScript hat die folgenden Arten von Gültigkeitsbereichen:

- Globaler Gültigkeitsbereich: Der Standard-Gültigkeitsbereich für alle im Skriptmodus ausgeführten Codes.
- Modul-Gültigkeitsbereich: Der Gültigkeitsbereich für Codes, die im Modulmodus ausgeführt werden.
- Funktions-Gültigkeitsbereich: Der Gültigkeitsbereich, der mit einer {{glossary("function","Funktion")}} erstellt wird.

Zusätzlich können mit bestimmten Syntaxen deklarierte Bezeichner, einschließlich [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`class`](/de/docs/Web/JavaScript/Reference/Statements/class) oder (im Strict-Modus) [`function`](/de/docs/Web/JavaScript/Reference/Statements/function), zu einem zusätzlichen Gültigkeitsbereich gehören:

- Block-Gültigkeitsbereich: Der mit einem Paar geschweifter Klammern (einem [Block](/de/docs/Web/JavaScript/Reference/Statements/block)) erstellte Gültigkeitsbereich.

Eine {{glossary("function","Funktion")}} erstellt einen Gültigkeitsbereich, sodass (zum Beispiel) eine exklusiv innerhalb der Funktion definierte Variable nicht von außerhalb der Funktion oder innerhalb anderer Funktionen aufgerufen werden kann. Beispielsweise ist Folgendes ungültig:

```js example-bad
function exampleFunction() {
  const x = "declared inside function"; // x can only be used in exampleFunction
  console.log("Inside function");
  console.log(x);
}

console.log(x); // Causes error
```

Jedoch ist der folgende Code gültig, da die Variable außerhalb der Funktion deklariert wurde und somit global ist:

```js example-good
const x = "declared outside function";

exampleFunction();

function exampleFunction() {
  console.log("Inside function");
  console.log(x);
}

console.log("Outside function");
console.log(x);
```

Blöcke umfassen nur `let` und `const` Deklarationen, aber nicht `var` Deklarationen.

```js example-good
{
  var x = 1;
}
console.log(x); // 1
```

```js example-bad
{
  const x = 1;
}
console.log(x); // ReferenceError: x is not defined
```

## Siehe auch

- [Scope (computer science)](<https://en.wikipedia.org/wiki/Scope_(computer_science)>) auf Wikipedia
- [Block Gültigkeitsbereichsregeln](/de/docs/Web/JavaScript/Reference/Statements/block#block_scoping_rules_with_let_const_class_or_function_declaration_in_strict_mode)
