---
title: BigInt()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/BigInt/BigInt
l10n:
  sourceCommit: 34be23f34ebe0ecab6bb80ede42a289cfc3d62c5
---

{{JSRef}}

Die **`BigInt()`**-Funktion gibt primitive Werte des Typs BigInt zurück.

## Syntax

```js-nolint
BigInt(value)
```

> **Note:** `BigInt()` kann nur ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Der Versuch, ihn mit `new` zu konstruieren, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `value`
  - : Der Wert, der in einen BigInt-Wert umgewandelt werden soll. Es kann sich um einen String, eine ganze Zahl, einen booleschen Wert oder ein anderes `BigInt` handeln.

### Rückgabewert

Ein {{jsxref("BigInt")}}-Wert. Zahlenwerte müssen Ganzzahlen sein und werden in BigInts umgewandelt. Der boolesche Wert `true` wird zu `1n`, und `false` wird zu `0n`. Zeichenfolgen werden so geparst, als ob sie Quelltext für ganzzahlige Literale sind, was bedeutet, dass sie führende und nachfolgende Leerzeichen haben können und mit `0b`, `0o` oder `0x` versehen sein dürfen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der Parameter keine ganzzahlige Zahl ist.
- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Der Parameter kann nicht in ein primitives Objekt umgewandelt werden.
    - Nach der Umwandlung in ein primitives Objekt ist das Ergebnis {{jsxref("undefined")}}, {{jsxref("Operators/null", "null")}}, {{jsxref("symbol")}}.
- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der Parameter ein String ist, der nicht als `BigInt` geparst werden kann.

## Beispiele

### Verwendung von BigInt(), um eine Zahl in einen BigInt umzuwandeln

`BigInt()` ist der einzige Fall, in dem eine Zahl ohne Fehler in ein BigInt umgewandelt werden kann, da es sehr ausdrücklich ist. Es sind jedoch nur Ganzzahlen erlaubt.

```js
BigInt(123); // 123n
BigInt(123.3); // RangeError: Die Zahl 123.3 kann nicht in ein BigInt umgewandelt werden, da sie keine Ganzzahl ist
```

### Verwendung von Zeichenfolgenwerten

```js
BigInt("123"); // 123n
BigInt("0b10101"); // 21n, was 10101 im Binärsystem ist
BigInt("0o123"); // 83n, was 123 im Oktalsystem ist
BigInt("0x123"); // 291n, was 123 im Hexadezimalsystem ist
BigInt("  123  "); // 123n, führende und nachfolgende Leerzeichen sind erlaubt
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("BigInt")}}
