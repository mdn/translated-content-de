---
title: Gültigkeitsbereich
slug: Glossary/Scope
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Der **Gültigkeitsbereich** ist der aktuelle Ausführungskontext, in dem {{Glossary("value", "Werte")}} und Ausdrücke "sichtbar" sind oder referenziert werden können. Wenn eine {{Glossary("variable", "Variable")}} oder ein Ausdruck nicht im aktuellen Gültigkeitsbereich ist, steht sie nicht zur Verfügung. Gültigkeitsbereiche können auch in einer Hierarchie geschichtet sein, sodass untergeordnete Gültigkeitsbereiche Zugriff auf übergeordnete Gültigkeitsbereiche haben, aber nicht umgekehrt.

JavaScript hat die folgenden Arten von Gültigkeitsbereichen:

- Globaler Gültigkeitsbereich: Der Standardgültigkeitsbereich für alle im Skriptmodus ausgeführten Codes.
- Modul-Gültigkeitsbereich: Der Gültigkeitsbereich für im Modulmodus ausgeführte Codes.
- Funktions-Gültigkeitsbereich: Der Gültigkeitsbereich, der durch eine {{Glossary("function", "Funktion")}} erstellt wird.

Zusätzlich können mit bestimmten Syntaxen deklarierte Bezeichner, einschließlich [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`class`](/de/docs/Web/JavaScript/Reference/Statements/class) oder (im strikten Modus) [`function`](/de/docs/Web/JavaScript/Reference/Statements/function), zu einem zusätzlichen Gültigkeitsbereich gehören:

- Block-Gültigkeitsbereich: Der Gültigkeitsbereich, der mit einem Paar geschweifter Klammern (einem [Block](/de/docs/Web/JavaScript/Reference/Statements/block)) erstellt wird.

Eine {{Glossary("function", "Funktion")}} erstellt einen Gültigkeitsbereich, sodass (zum Beispiel) eine Variable, die ausschließlich innerhalb der Funktion definiert ist, außerhalb der Funktion oder innerhalb anderer Funktionen nicht zugänglich ist. Zum Beispiel ist das folgende ungültig:

```js example-bad
function exampleFunction() {
  const x = "declared inside function"; // x can only be used in exampleFunction
  console.log("Inside function");
  console.log(x);
}

console.log(x); // Causes error
```

Der folgende Code ist jedoch gültig, da die Variable außerhalb der Funktion deklariert wurde und damit global ist:

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

Blöcke haben nur Einfluss auf `let`- und `const`-Deklarationen, nicht jedoch auf `var`-Deklarationen.

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

- [Gültigkeitsbereich (Informatik)](<https://en.wikipedia.org/wiki/Scope_(computer_science)>) auf Wikipedia
- [Regeln für den Block-Gültigkeitsbereich](/de/docs/Web/JavaScript/Reference/Statements/block#block_scoping_rules_with_let_const_class_or_function_declaration_in_strict_mode)
