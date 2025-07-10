---
title: BigInt()-Konstruktor
short-title: BigInt()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/BigInt
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`BigInt()`**-Funktion liefert primitive Werte vom Typ BigInt zurück.

## Syntax

```js-nolint
BigInt(value)
```

> [!NOTE]
> `BigInt()` kann nur ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Der Versuch, es mit `new` zu konstruieren, löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `value`
  - : Der Wert, der in einen BigInt-Wert umgewandelt werden soll. Es kann sich um einen String, eine ganze Zahl, einen booleschen Wert oder einen anderen `BigInt` handeln.

### Rückgabewert

Ein {{jsxref("BigInt")}}-Wert. Numerische Werte müssen Ganzzahlen sein und werden in BigInts umgewandelt. Der boolesche Wert `true` wird zu `1n`, und `false` wird zu `0n`. Zeichenfolgen werden geparst, als ob sie Quelltext für ganzzahlige Literale sind, was bedeutet, dass sie führende und nachfolgende Leerzeichen haben können und mit `0b`, `0o` oder `0x` versehen sein können.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der Parameter eine nicht-ganzzahlige Zahl ist.
- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Der Parameter kann nicht in einen primitiven Wert konvertiert werden.
    - Nach der Konvertierung in einen primitiven Wert ist das Ergebnis {{jsxref("undefined")}}, {{jsxref("Operators/null", "null")}}, {{jsxref("symbol")}}.
- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der Parameter ein String ist, der nicht als `BigInt` geparst werden kann.

## Beispiele

### Verwendung von BigInt() zur Umwandlung einer Zahl in einen BigInt

`BigInt()` ist der einzige Fall, in dem eine Zahl in einen BigInt umgewandelt werden kann, ohne einen Fehler auszulösen, da es sehr explizit ist. Es sind jedoch nur ganze Zahlen erlaubt.

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
