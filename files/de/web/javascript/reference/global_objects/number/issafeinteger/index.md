---
title: Number.isSafeInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

Die **`Number.isSafeInteger()`** statische Methode bestimmt, ob der angegebene Wert eine Zahl ist, die ein _sicherer Integer_ ist.

{{EmbedInteractiveExample("pages/js/number-issafeinteger.html")}}

## Syntax

```js-nolint
Number.isSafeInteger(testValue)
```

### Parameter

- `testValue`
  - : Der Wert, der darauf getestet werden soll, ob er ein sicherer Integer ist.

### Rückgabewert

Der boolesche Wert `true`, wenn der angegebene Wert eine Zahl ist, die ein sicherer Integer ist. Andernfalls `false`.

## Beschreibung

Die sicheren Integer bestehen aus allen ganzen Zahlen von -(2<sup>53</sup> - 1) bis 2<sup>53</sup> - 1, einschließlich (±9.007.199.254.740.991). Ein sicherer Integer ist ein Integer, der:

- genau als eine IEEE-754-Doppelpräzisionszahl dargestellt werden kann und
- dessen IEEE-754-Darstellung nicht das Ergebnis der Rundung eines anderen Integers ist, um in die IEEE-754-Darstellung zu passen.

Zum Beispiel ist 2<sup>53</sup> - 1 ein sicherer Integer: Er kann exakt dargestellt werden, und kein anderer Integer wird unter irgendeinem IEEE-754-Rundungsmodus auf ihn gerundet. Im Gegensatz dazu ist 2<sup>53</sup> _kein_ sicherer Integer: Er kann zwar genau in IEEE-754 dargestellt werden, aber der Integer 2<sup>53</sup> + 1 kann nicht direkt in IEEE-754 dargestellt werden, sondern wird unter Rundung auf Nächsten und Rundung auf Null auf 2<sup>53</sup> gerundet.

Das Handhaben von Werten, die größer oder kleiner als etwa 9 Billiarden sind, mit voller Präzision erfordert die Verwendung einer [beliebigen Präzisionsarithmetik-Bibliothek](https://de.wikipedia.org/wiki/Arithmetik_mit_beliebiger_Präzision). Siehe [Was jeder Programmierer über Gleitkomma-Arithmetik wissen sollte](https://floating-point-gui.de/) für weitere Informationen über die Gleitkomma-Darstellung von Zahlen.

Für größere Integer ziehen Sie in Betracht, den {{jsxref("BigInt")}}-Typ zu verwenden.

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
