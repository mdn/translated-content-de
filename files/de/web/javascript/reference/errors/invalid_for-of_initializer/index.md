---
title: "SyntaxError: Eine Deklaration im Kopf einer for-of-Schleife kann keinen Initialisierer haben"
slug: Web/JavaScript/Reference/Errors/Invalid_for-of_initializer
l10n:
  sourceCommit: a71b8929628a2187794754c202ad399fe357141b
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "eine Deklaration im Kopf einer for-of-Schleife kann keinen Initialisierer haben" tritt auf, wenn der Kopf einer [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife einen Initialisierungsaufruf enthält, wie z.B. `for (const i = 0 of iterable)`. Dies ist in for-of-Schleifen nicht erlaubt.

## Meldung

```plain
SyntaxError: for-of loop variable declaration may not have an initializer. (V8-based)
SyntaxError: a declaration in the head of a for-of loop can't have an initializer (Firefox)
SyntaxError: Cannot assign to the loop variable inside a for-of loop header. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schief gelaufen?

Der Kopf einer [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife enthält einen Initialisierungsaufruf. Das bedeutet, eine Variable wird deklariert und ein Wert zugewiesen `for (const i = 0 of iterable)`. Dies ist in for-of-Schleifen nicht erlaubt. Möglicherweise möchten Sie eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife verwenden, die einen Initialisierer erlaubt.

## Beispiele

### Ungültige for-of-Schleife

```js-nolint example-bad
const iterable = [10, 20, 30];

for (const value = 50 of iterable) {
  console.log(value);
}

// SyntaxError: Eine Deklaration im Kopf einer for-of-Schleife kann
// keinen Initialisierer haben
```

### Gültige for-of-Schleife

Sie müssen den Initialisierer (`value = 50`) im Kopf der `for-of`-Schleife entfernen. Vielleicht wollten Sie 50 als Offset-Wert verwenden; in diesem Fall könnten Sie ihn zum Schleifenkörper hinzufügen, zum Beispiel.

```js example-good
const iterable = [10, 20, 30];

for (let value of iterable) {
  value += 50;
  console.log(value);
}
// 60
// 70
// 80
```

## Siehe auch

- [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)
- [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)
