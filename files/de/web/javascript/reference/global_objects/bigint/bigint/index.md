---
title: BigInt() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/BigInt/BigInt
l10n:
  sourceCommit: 34be23f34ebe0ecab6bb80ede42a289cfc3d62c5
---

{{JSRef}}

Die **`BigInt()`** Funktion gibt primitive Werte vom Typ BigInt zurück.

## Syntax

```js-nolint
BigInt(value)
```

> **Note:** `BigInt()` kann nur ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Der Versuch, es mit `new` zu konstruieren, wirft einen {{jsxref("TypeError")}}.

### Parameter

- `value`
  - : Der Wert, der in einen BigInt-Wert umgewandelt werden soll. Es kann sich um einen String, eine ganze Zahl, einen Boolean oder einen anderen `BigInt` handeln.

### Rückgabewert

Ein {{jsxref("BigInt")}}-Wert. Zahlwerte müssen ganze Zahlen sein und werden in BigInts umgewandelt. Der boolesche Wert `true` wird zu `1n`, und `false` wird zu `0n`. Strings werden so geparst, als ob sie Quelltext für Ganzzahlliterale wären, was bedeutet, dass sie führende und abschließende Leerzeichen haben können und mit `0b`, `0o` oder `0x` beginnen können.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der Parameter eine nicht-ganzzahlige Zahl ist.
- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Der Parameter kann nicht in ein primitives Objekt umgewandelt werden.
    - Nach der Umwandlung in ein primitives Objekt ist das Ergebnis {{jsxref("undefined")}}, {{jsxref("Operators/null", "null")}}, {{jsxref("symbol")}}.
- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der Parameter ein String ist, der nicht als `BigInt` geparst werden kann.

## Beispiele

### Verwendung von BigInt() zur Umwandlung einer Zahl in einen BigInt

`BigInt()` ist der einzige Fall, in dem eine Zahl ohne Fehler in einen BigInt umgewandelt werden kann, da es sehr explizit ist. Es sind jedoch nur ganze Zahlen erlaubt.

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
