---
title: "SyntaxError: Eine Deklaration im Kopf einer for-of-Schleife darf keinen Initialisierer haben"
slug: Web/JavaScript/Reference/Errors/Invalid_for-of_initializer
l10n:
  sourceCommit: a71b8929628a2187794754c202ad399fe357141b
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler "Eine Deklaration im Kopf einer for-of-Schleife darf keinen Initialisierer haben" tritt auf, wenn der Kopf einer [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife einen Initialisierer-Ausdruck enthält, wie zum Beispiel `for (const i = 0 of iterable)`. Dies ist in for-of-Schleifen nicht erlaubt.

## Nachricht

```plain
SyntaxError: for-of loop variable declaration may not have an initializer. (V8-based)
SyntaxError: a declaration in the head of a for-of loop can't have an initializer (Firefox)
SyntaxError: Cannot assign to the loop variable inside a for-of loop header. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Der Kopf einer [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife enthält einen Initialisierer-Ausdruck. Das heißt, eine Variable wird deklariert und ein Wert zugewiesen, `for (const i = 0 of iterable)`. Dies ist in for-of-Schleifen nicht erlaubt. Sie möchten möglicherweise eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife verwenden, die einen Initialisierer zulässt.

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

Sie müssen den Initialisierer (`value = 50`) im Kopf der `for-of`-Schleife entfernen. Vielleicht beabsichtigten Sie, 50 als Offset-Wert zu verwenden, in diesem Fall könnten Sie ihn in den Schleifenrumpf hinzufügen, zum Beispiel.

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
