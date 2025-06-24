---
title: BigInt() Konstruktor
short-title: BigInt()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/BigInt
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Die **`BigInt()`** Funktion gibt primitive Werte des Typs BigInt zurück.

## Syntax

```js-nolint
BigInt(value)
```

> [!NOTE] > `BigInt()` kann nur ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Der Versuch, es mit `new` zu konstruieren, wirft einen {{jsxref("TypeError")}}.

### Parameter

- `value`
  - : Der Wert, der in einen BigInt-Wert umgewandelt werden soll. Es kann sich um einen String, eine Ganzzahl, einen boolean oder ein anderes `BigInt` handeln.

### Rückgabewert

Ein {{jsxref("BigInt")}} Wert. Zahlenwerte müssen Ganzzahlen sein und werden in BigInts umgewandelt. Der boolean-Wert `true` wird zu `1n`, und `false` wird zu `0n`. Zeichenfolgen werden geparst, als ob sie Quelltext für ganzzahlige Literale wären, was bedeutet, dass sie führende und nachgestellte Leerzeichen enthalten können und mit `0b`, `0o` oder `0x` versehen sein können.

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

### Verwendung von BigInt() zur Umwandlung einer Zahl in ein BigInt

`BigInt()` ist der einzige Fall, in dem eine Zahl ohne Fehler in ein BigInt umgewandelt werden kann, da es sehr eindeutig ist. Es sind jedoch nur Ganzzahlen erlaubt.

```js
BigInt(123); // 123n
BigInt(123.3); // RangeError: The number 123.3 cannot be converted to a BigInt because it is not an integer
```

### Verwendung von Zeichenfolgenwerten

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
