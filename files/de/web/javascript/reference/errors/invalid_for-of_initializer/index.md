---
title: "SyntaxError: Eine Deklaration im Kopf einer for-of-Schleife darf keinen Initialisierer enthalten"
slug: Web/JavaScript/Reference/Errors/Invalid_for-of_initializer
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahme "eine Deklaration im Kopf einer for-of-Schleife darf keinen Initialisierer enthalten" tritt auf, wenn der Kopf einer [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife einen Initialisierungs-Ausdruck enthält, wie z. B. `for (const i = 0 of iterable)`. Dies ist in for-of-Schleifen nicht zulässig.

## Nachricht

```plain
SyntaxError: for-of loop variable declaration may not have an initializer. (V8-based)
SyntaxError: a declaration in the head of a for-of loop can't have an initializer (Firefox)
SyntaxError: Cannot assign to the loop variable inside a for-of loop header. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Der Kopf einer [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife enthält einen Initialisierungs-Ausdruck. Das bedeutet, es wird eine Variable deklariert und ein Wert zugewiesen `for (const i = 0 of iterable)`. Dies ist in for-of-Schleifen nicht erlaubt. Sie könnten eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife verwenden, die einen Initialisierer erlaubt.

## Beispiele

### Ungültige for-of-Schleife

```js-nolint example-bad
const iterable = [10, 20, 30];

for (const value = 50 of iterable) {
  console.log(value);
}

// SyntaxError: a declaration in the head of a for-of loop can't
// have an initializer
```

### Gültige for-of-Schleife

Sie müssen den Initialisierer (`value = 50`) im Kopf der `for-of`-Schleife entfernen. Möglicherweise wollten Sie 50 als Offset-Wert verwenden, in diesem Fall könnten Sie ihn im Schleifenkörper hinzufügen, zum Beispiel.

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
