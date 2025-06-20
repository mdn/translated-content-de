---
title: BigInt() Konstruktor
short-title: BigInt()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/BigInt
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`BigInt()`** Funktion gibt primitive Werte des Typs BigInt zurück.

## Syntax

```js-nolint
BigInt(value)
```

> **Note:** `BigInt()` kann nur ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Der Versuch, es mit `new` zu konstruieren, löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `value`
  - : Der Wert, der in einen BigInt-Wert umgewandelt werden soll. Es kann sich um einen String, eine Ganzzahl, einen Booleschen Wert oder einen anderen `BigInt` handeln.

### Rückgabewert

Ein {{jsxref("BigInt")}}-Wert. Zahlenwerte müssen ganze Zahlen sein und werden in BigInts umgewandelt. Der boolesche Wert `true` wird zu `1n` und `false` wird zu `0n`. Strings werden analysiert, als ob sie Quelltext für ganze Zahlenliterale wären, was bedeutet, dass sie führende und nachfolgende Leerzeichen haben können und mit `0b`, `0o` oder `0x` versehen sein können.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der Parameter eine nicht-ganzzahlige Zahl ist.
- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Der Parameter kann nicht in einen primitiven Wert umgewandelt werden.
    - Nach der Umwandlung in einen primitiven Wert ist das Ergebnis {{jsxref("undefined")}}, {{jsxref("Operators/null", "null")}}, {{jsxref("symbol")}}.
- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der Parameter ein String ist, der nicht als `BigInt` geparst werden kann.

## Beispiele

### Verwenden von BigInt(), um eine Zahl in einen BigInt zu konvertieren

`BigInt()` ist der einzige Fall, in dem eine Zahl ohne Ausnahme in einen BigInt umgewandelt werden kann, da es sehr explizit ist. Es sind jedoch nur ganze Zahlen erlaubt.

```js
BigInt(123); // 123n
BigInt(123.3); // RangeError: The number 123.3 cannot be converted to a BigInt because it is not an integer
```

### Verwenden von String-Werten

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
