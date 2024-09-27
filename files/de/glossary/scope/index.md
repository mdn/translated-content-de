---
title: Scope
slug: Glossary/Scope
l10n:
  sourceCommit: efe384c1877f0ed991e42851d1f9d34fa136ce38
---

{{GlossarySidebar}}

Der **Scope** ist der aktuelle Ausführungskontext, in dem [Werte](/de/docs/Glossary/value) und Ausdrücke "sichtbar" sind oder referenziert werden können. Wenn eine [Variable](/de/docs/Glossary/variable) oder ein Ausdruck nicht im aktuellen Scope ist, wird sie nicht zur Verwendung verfügbar sein. Scopes können auch in einer Hierarchie geschichtet sein, sodass Kind-Scopes Zugriff auf Eltern-Scopes haben, aber nicht umgekehrt.

JavaScript hat folgende Arten von Scopes:

- Globaler Scope: Der Standard-Scope für alle im Skriptmodus ausgeführten Codes.
- Modul-Scope: Der Scope für im Modulmodus ausgeführten Code.
- Funktions-Scope: Der durch eine [Funktion](/de/docs/Glossary/function) erstellte Scope.

Darüber hinaus können mit bestimmten Syntaxen deklarierte Bezeichner, einschließlich [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`class`](/de/docs/Web/JavaScript/Reference/Statements/class) oder (im strengen Modus) [`function`](/de/docs/Web/JavaScript/Reference/Statements/function), zu einem zusätzlichen Scope gehören:

- Block-Scope: Der durch ein Paar geschweifter Klammern (einen [Block](/de/docs/Web/JavaScript/Reference/Statements/block)) erstellte Scope.

Eine [Funktion](/de/docs/Glossary/function) erstellt einen Scope, sodass (zum Beispiel) eine ausschließlich innerhalb der Funktion definierte Variable von außerhalb der Funktion oder innerhalb anderer Funktionen nicht zugänglich ist. Zum Beispiel ist das Folgende ungültig:

```js example-bad
function exampleFunction() {
  const x = "declared inside function"; // x can only be used in exampleFunction
  console.log("Inside function");
  console.log(x);
}

console.log(x); // Causes error
```

Das folgende Beispiel ist jedoch gültig, da die Variable außerhalb der Funktion deklariert wurde und damit global ist:

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

Blöcke scopen nur `let`- und `const`-Deklarationen, jedoch keine `var`-Deklarationen.

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

- [Scope (Informatik)](<https://en.wikipedia.org/wiki/Scope_(computer_science)>) auf Wikipedia
- [Regeln für Block-Scoping](/de/docs/Web/JavaScript/Reference/Statements/block#block_scoping_rules_with_let_const_class_or_function_declaration_in_strict_mode)
