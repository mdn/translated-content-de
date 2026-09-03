---
title: BigInt() Konstruktor
short-title: BigInt()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/BigInt
l10n:
  sourceCommit: 690498c3dbaebcf8b9a21220fbb23d192a30a225
---

Die Funktion **`BigInt()`** gibt primitive Werte vom Typ BigInt zurück.

## Syntax

```js-nolint
BigInt(value)
```

> [!NOTE]
> `BigInt()` kann nur ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Der Versuch, es mit `new` zu konstruieren, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `value`
  - : Der Wert, der in einen BigInt-Wert umgewandelt werden soll. Es kann sich um einen String, eine Ganzzahl, einen Booleschen Wert oder einen anderen `BigInt` handeln.

### Rückgabewert

Ein {{jsxref("BigInt")}}-Wert. Zahlenwerte müssen Ganzzahlen sein und werden in BigInts konvertiert. Der Boolesche Wert `true` wird zu `1n`, und `false` wird zu `0n`. Strings werden so geparst, als wären sie Quelltext für ganzzahlige Literale, was bedeutet, dass sie führende und nachfolgende Leerzeichen haben können und mit `0b`, `0o` oder `0x` beginnen können.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der Parameter eine nicht ganzzahlige Zahl ist.
- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Der Parameter kann nicht in ein primitives Objekt umgewandelt werden.
    - Nach der Umwandlung in ein primitives Objekt ist das Ergebnis {{jsxref("undefined")}}, {{jsxref("null")}}, oder {{jsxref("Symbol")}}.
- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der Parameter ein String ist, der nicht als `BigInt` geparst werden kann.

## Beispiele

### Verwendung von BigInt() zur Umwandlung einer Zahl in einen BigInt

`BigInt()` ist der einzige Fall, in dem eine Zahl ohne Fehler in einen BigInt umgewandelt werden kann, da dies sehr explizit ist. Allerdings sind nur Ganzzahlen erlaubt.

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
