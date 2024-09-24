---
title: Number.isSafeInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

Die **statische Methode `Number.isSafeInteger()`** bestimmt, ob der bereitgestellte Wert eine Zahl ist, die eine _sichere Ganzzahl_ darstellt.

{{EmbedInteractiveExample("pages/js/number-issafeinteger.html")}}

## Syntax

```js-nolint
Number.isSafeInteger(testValue)
```

### Parameter

- `testValue`
  - : Der Wert, der darauf getestet wird, ob er eine sichere Ganzzahl ist.

### Rückgabewert

Der boolesche Wert `true`, wenn der angegebene Wert eine Zahl ist, die eine sichere Ganzzahl darstellt. Andernfalls `false`.

## Beschreibung

Die sicheren Ganzzahlen umfassen alle Ganzzahlen von -(2<sup>53</sup> - 1) bis 2<sup>53</sup> - 1, einschließlich (±9.007.199.254.740.991). Eine sichere Ganzzahl ist eine Ganzzahl, die:

- genau als IEEE-754 Doppelpräzisionszahl dargestellt werden kann, und
- deren IEEE-754 Darstellung nicht das Ergebnis der Rundung einer anderen Ganzzahl ist, um in die IEEE-754 Darstellung zu passen.

Zum Beispiel ist 2<sup>53</sup> - 1 eine sichere Ganzzahl: Sie kann genau dargestellt werden, und keine andere Ganzzahl rundet auf sie unter irgendeinem IEEE-754 Rundungsmodus. Im Gegensatz dazu ist 2<sup>53</sup> _keine_ sichere Ganzzahl: Sie kann genau in IEEE-754 dargestellt werden, aber die Ganzzahl 2<sup>53</sup> + 1 kann nicht direkt in IEEE-754 dargestellt werden und rundet stattdessen auf 2<sup>53</sup> unter Rundung auf den nächsten Wert und Rundung zu Null.

Um Werte, die größer oder kleiner als ca. 9 Billiarden sind, mit voller Präzision zu handhaben, muss eine [Bibliothek für Arithmetik mit willkürlicher Präzision](https://en.wikipedia.org/wiki/Arbitrary-precision_arithmetic) verwendet werden. Siehe [What Every Programmer Needs to Know about Floating Point Arithmetic](https://floating-point-gui.de/) für weitere Informationen über Gleitkommazahldarstellungen.

Für größere Ganzzahlen sollten Sie den {{jsxref("BigInt")}} Typ verwenden.

## Beispiele

### Verwendung von isSafeInteger()

```js
Number.isSafeInteger(3); // true
Number.isSafeInteger(2 ** 53); // false
Number.isSafeInteger(2 ** 53 - 1); // true
Number.isSafeInteger(NaN); // false
Number.isSafeInteger(Infinity); // false
Number.isSafeInteger("3"); // false
Number.isSafeInteger(3.1); // false
Number.isSafeInteger(3.0); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.isSafeInteger` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
- {{jsxref("BigInt")}}
