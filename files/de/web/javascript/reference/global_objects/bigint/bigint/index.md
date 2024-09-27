---
title: BigInt() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/BigInt/BigInt
l10n:
  sourceCommit: 34be23f34ebe0ecab6bb80ede42a289cfc3d62c5
---

{{JSRef}}

Die **`BigInt()`** Funktion gibt primitive Werte des Typs BigInt zurück.

## Syntax

```js-nolint
BigInt(value)
```

> **Note:** `BigInt()` kann nur ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Der Versuch, es mit `new` zu konstruieren, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `value`
  - : Der zu konvertierende Wert zu einem BigInt-Wert. Es kann sich um einen String, eine Ganzzahl, ein Boolean oder ein anderes `BigInt` handeln.

### Rückgabewert

Ein {{jsxref("BigInt")}}-Wert. Zahlenwerte müssen Ganzzahlen sein und werden in BigInts umgewandelt. Der boolesche Wert `true` wird `1n` und `false` wird `0n`. Strings werden so geparst, als ob sie Quelltext für Ganzzahl-Literale darstellen, was bedeutet, dass sie führende und abschließende Leerzeichen haben können und mit `0b`, `0o` oder `0x` vorangestellt sein können.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der Parameter eine nicht-ganzzahlige Zahl ist.
- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Der Parameter kann nicht in eine primitive Form konvertiert werden.
    - Nach der Konvertierung in eine primitive Form ist das Ergebnis {{jsxref("undefined")}}, {{jsxref("Operators/null", "null")}}, {{jsxref("symbol")}}.
- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der Parameter ein String ist, der nicht als `BigInt` geparst werden kann.

## Beispiele

### Verwendung von BigInt() zur Umwandlung einer Zahl in ein BigInt

`BigInt()` ist der einzige Fall, bei dem eine Zahl in ein BigInt umgewandelt werden kann, ohne dass ein Fehler auftritt, da es sehr explizit ist. Allerdings sind nur Ganzzahlen erlaubt.

```js
BigInt(123); // 123n
BigInt(123.3); // RangeError: The number 123.3 cannot be converted to a BigInt because it is not an integer
```

### Verwendung von String-Werten

```js
BigInt("123"); // 123n
BigInt("0b10101"); // 21n, which is 10101 in binary
BigInt("0o123"); // 83n, which is 123 in octal
BigInt("0x123"); // 291n, which is 123 in hexadecimal
BigInt("  123  "); // 123n, leading and trailing whitespaces are allowed
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("BigInt")}}
