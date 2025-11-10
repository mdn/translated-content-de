---
title: "SyntaxError: for-in Schleifenkopf-Deklarationen dürfen keine Initialisierer haben"
slug: Web/JavaScript/Reference/Errors/Invalid_for-in_initializer
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-[Strict-Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)-ausschließliche Ausnahme
"for-in Schleifenkopf-Deklarationen dürfen keine Initialisierer haben"
tritt auf, wenn der Kopf einer [for...in](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleife
einen Initialisierungsausdruck enthält, wie zum Beispiel `for (var i = 0 in obj)`. Dies ist in for-in Schleifen im Strict-Mode nicht
erlaubt. Darüber hinaus sind lexikalische Deklarationen mit Initialisierern wie `for (const i = 0 in obj)` auch außerhalb des Strict-Modes nicht erlaubt.

## Meldung

```plain
SyntaxError: for-in loop variable declaration may not have an initializer. (V8-based)
SyntaxError: for-in loop head declarations may not have initializers (Firefox)
SyntaxError: a lexical declaration in the head of a for-in loop can't have an initializer (Firefox)
SyntaxError: Cannot assign to the loop variable inside a for-in loop header. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}.

## Was ist schief gelaufen?

Der Kopf einer [for...in](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleife enthält einen Initialisierungsausdruck.
Das heißt, eine Variable wird deklariert und ein Wert zugewiesen `for (var i = 0 in obj)`.
Im Nicht-Strict-Mode wird diese Kopf-Deklaration stillschweigend ignoriert und verhält sich wie `for (var i in obj)`.
Im [Strict-Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) wird jedoch ein `SyntaxError` ausgelöst. Darüber hinaus sind lexikalische Deklarationen mit Initialisierern wie `for (const i = 0 in obj)` auch außerhalb des Strict-Modes nicht erlaubt und führen immer zu einem `SyntaxError`.

## Beispiele

Dieses Beispiel löst einen `SyntaxError` aus:

```js-nolint example-bad
const obj = { a: 1, b: 2, c: 3 };

for (const i = 0 in obj) {
  console.log(obj[i]);
}

// SyntaxError: for-in loop head declarations may not have initializers
```

### Gültige for-in Schleife

Sie können den Initialisierer (`i = 0`) im Kopf der for-in Schleife entfernen.

```js example-good
const obj = { a: 1, b: 2, c: 3 };

for (const i in obj) {
  console.log(obj[i]);
}
```

### Array-Iteration

Die for...in Schleife [sollte nicht für die Array-Iteration verwendet werden](/de/docs/Web/JavaScript/Reference/Statements/for...in#array_iteration_and_for...in).
Haben Sie vor, eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) Schleife anstelle einer `for-in` Schleife zu verwenden, um ein {{jsxref("Array")}} zu iterieren? Die
`for` Schleife erlaubt es Ihnen, dann auch einen Initialisierer festzulegen:

```js example-good
const arr = ["a", "b", "c"];

for (let i = 2; i < arr.length; i++) {
  console.log(arr[i]);
}

// "c"
```

## Siehe auch

- [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)
- [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)
