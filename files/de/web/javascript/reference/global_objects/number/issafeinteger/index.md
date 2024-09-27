---
title: Number.isSafeInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

Die statische Methode **`Number.isSafeInteger()`** bestimmt, ob der angegebene Wert eine Zahl ist, die ein _sicherer Integer_ ist.

{{EmbedInteractiveExample("pages/js/number-issafeinteger.html")}}

## Syntax

```js-nolint
Number.isSafeInteger(testValue)
```

### Parameter

- `testValue`
  - : Der Wert, der darauf getestet werden soll, ein sicherer Integer zu sein.

### Rückgabewert

Der boolesche Wert `true`, wenn der gegebene Wert eine Zahl ist, die ein sicherer Integer ist. Andernfalls `false`.

## Beschreibung

Die sicheren Integer bestehen aus allen ganzen Zahlen von -(2<sup>53</sup> - 1) bis 2<sup>53</sup> - 1, inklusive (±9.007.199.254.740.991). Ein sicherer Integer ist ein Integer, der:

- genau als eine IEEE-754 Gleitkommazahl mit doppelter Genauigkeit dargestellt werden kann, und
- dessen IEEE-754 Darstellung nicht das Ergebnis der Rundung einer anderen Zahl ist, um die IEEE-754 Darstellung zu passen.

Zum Beispiel ist 2<sup>53</sup> - 1 ein sicherer Integer: er kann genau dargestellt werden und keine andere Zahl wird bei irgendeinem IEEE-754-Rundungsmodus auf ihn gerundet. Im Gegensatz dazu ist 2<sup>53</sup> _kein_ sicherer Integer: er kann genau in IEEE-754 dargestellt werden, aber der Integer 2<sup>53</sup> + 1 kann nicht direkt in IEEE-754 dargestellt werden, sondern wird stattdessen unter Rundung auf den nächsten Wert und Rundung zu Null auf 2<sup>53</sup> gerundet.

Das Bearbeiten von Werten, die größer oder kleiner als \~9 Billiarden sind, mit vollständiger Präzision erfordert die Verwendung einer [arithmetischen Bibliothek für beliebige Präzision](https://de.wikipedia.org/wiki/Arithmetik_mit_beliebiger_Präzision). Weitere Informationen zu Gleitkommadarstellungen von Zahlen finden Sie unter [Was jeder Programmierer über Gleitkommaarithmetik wissen muss](https://floating-point-gui.de/).

Für größere Integer sollten Sie den {{jsxref("BigInt")}}-Typ in Betracht ziehen.

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
