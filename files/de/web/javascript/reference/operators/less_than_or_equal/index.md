---
title: Kleiner oder gleich (<=)
slug: Web/JavaScript/Reference/Operators/Less_than_or_equal
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **kleiner oder gleich (`<=`)** Operator gibt `true` zurück, wenn der linke Operand kleiner oder gleich dem rechten Operand ist, und `false` sonst.

{{InteractiveExample("JavaScript Demo: Kleiner oder gleich (<=) Operator")}}

```js interactive-example
console.log(5 <= 3);
// Expected output: false

console.log(3 <= 3);
// Expected output: true

// Compare bigint to number
console.log(3n <= 5);
// Expected output: true

console.log("aa" <= "ab");
// Expected output: true
```

## Syntax

```js-nolint
x <= y
```

## Beschreibung

Die Operanden werden mit demselben Algorithmus verglichen wie der [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) Operator, wobei die Operanden vertauscht und das Ergebnis negiert werden. `x <= y` ist im Allgemeinen gleichbedeutend mit `!(y < x)`, außer in zwei Fällen, in denen `x <= y` und `x > y` beide `false` sind:

- Wenn einer der Operanden in einen BigInt umgewandelt wird, während der andere in eine Zeichenkette umgewandelt wird, die nicht in einen BigInt-Wert umgewandelt werden kann (es löst einen [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax) aus, wenn er an [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) übergeben wird).
- Wenn einer der Operanden in `NaN` umgewandelt wird. (Zum Beispiel Zeichenketten, die nicht in Zahlen umgewandelt werden können, oder `undefined`.)

Zusätzlich zwingt `x <= y` `x` zu einem primitiven Wert, bevor `y` gezwungen wird, während `y < x` `y` zu einem primitiven Wert zwingt, bevor `x` gezwungen wird. Da die Typumwandlung Nebeneffekte haben kann, könnte die Reihenfolge der Operanden wichtig sein.

`x <= y` ist im Allgemeinen gleichbedeutend mit `x < y || x == y`, außer in einigen Fällen:

- Wenn einer von `x` oder `y` `null` ist, und der andere etwas ist, das nicht `null` ist und beim [Zwingen zu einem numerischen Wert](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) 0 wird (einschließlich `0`, `0n`, `false`, `""`, `"0"`, `new Date(0)`, etc.): `x <= y` ist `true`, während `x < y || x == y` `false` ist.
- Wenn einer von `x` oder `y` `undefined` ist, und der andere entweder `null` oder `undefined` ist: `x <= y` ist `false`, während `x == y` `true` ist.
- Wenn `x` und `y` dasselbe Objekt sind, das nach dem ersten Schritt von [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) `NaN` wird (wie `new Date(NaN)`): `x <= y` ist `false`, während `x == y` `true` ist.
- Wenn `x` und `y` unterschiedliche Objekte sind, die nach dem ersten Schritt von [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) denselben Wert annehmen: `x <= y` ist `true`, während `x < y || x == y` `false` ist.

## Beispiele

### Vergleich von Zeichenkette zu Zeichenkette

```js
"a" <= "b"; // true
"a" <= "a"; // true
"a" <= "3"; // false
```

### Vergleich von Zeichenkette zu Zahl

```js
"5" <= 3; // false
"3" <= 3; // true
"3" <= 5; // true

"hello" <= 5; // false
5 <= "hello"; // false
```

### Vergleich von Zahl zu Zahl

```js
5 <= 3; // false
3 <= 3; // true
3 <= 5; // true
```

### Vergleich von Zahl zu BigInt

```js
5n <= 3; // false
3 <= 3n; // true
3 <= 5n; // true
```

### Vergleich von Boolean, null, undefined, NaN

```js
true <= false; // false
true <= true; // true
false <= true; // true

true <= 0; // false
true <= 1; // true

null <= 0; // true
1 <= null; // false

undefined <= 3; // false
3 <= undefined; // false

3 <= NaN; // false
NaN <= 3; // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Größer als (`>`)](/de/docs/Web/JavaScript/Reference/Operators/Greater_than)
- [Größer oder gleich (`>=`)](/de/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [Kleiner als (`<`)](/de/docs/Web/JavaScript/Reference/Operators/Less_than)
