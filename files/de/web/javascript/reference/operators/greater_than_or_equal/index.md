---
title: Größer als oder gleich (>=)
slug: Web/JavaScript/Reference/Operators/Greater_than_or_equal
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **größer als oder gleich (`>=`)** Operator gibt `true` zurück, wenn der linke Operand größer oder gleich dem rechten Operand ist, und `false` andernfalls.

{{InteractiveExample("JavaScript Demo: Greater than or equal (>=) operator")}}

```js interactive-example
console.log(5 >= 3);
// Expected output: true

console.log(3 >= 3);
// Expected output: true

// Compare bigint to number
console.log(3n >= 5);
// Expected output: false

console.log("ab" >= "aa");
// Expected output: true
```

## Syntax

```js-nolint
x >= y
```

## Beschreibung

Die Operanden werden mit demselben Algorithmus verglichen wie der [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) Operator, jedoch mit negiertem Ergebnis. `x >= y` ist im Allgemeinen gleichbedeutend mit `!(x < y)`, außer in zwei Fällen, in denen `x >= y` und `x < y` beide `false` sind:

- Wenn einer der Operanden in einen BigInt konvertiert wird, während der andere in einen String konvertiert wird, der nicht in einen BigInt-Wert umgewandelt werden kann (es wird ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax) geworfen, wenn er an [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) übergeben wird).
- Wenn einer der Operanden in `NaN` konvertiert wird. (Zum Beispiel Strings, die nicht in Nummern konvertiert werden können, oder `undefined`.)

`x >= y` ist im Allgemeinen gleichbedeutend mit `x > y || x == y`, außer in einigen Fällen:

- Wenn eines von `x` oder `y` `null` ist und das andere etwas ist, das nicht `null` ist und zu 0 wird, wenn es [in numerische Werte umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) wird (einschließlich `0`, `0n`, `false`, `""`, `"0"`, `new Date(0)`, etc.): `x >= y` ist `true`, während `x > y || x == y` `false` ist.
- Wenn eines von `x` oder `y` `undefined` ist und das andere eines von `null` oder `undefined` ist: `x >= y` ist `false`, während `x == y` `true` ist.
- Wenn `x` und `y` dasselbe Objekt sind, das nach dem ersten Schritt von [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) `NaN` wird (wie `new Date(NaN)`): `x >= y` ist `false`, während `x == y` `true` ist.
- Wenn `x` und `y` verschiedene Objekte sind, die nach dem ersten Schritt von [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) denselben Wert ergeben: `x >= y` ist `true`, während `x > y || x == y` `false` ist.

## Beispiele

### String zu String Vergleich

```js
"a" >= "b"; // false
"a" >= "a"; // true
"a" >= "3"; // true
```

### String zu Zahl Vergleich

```js
"5" >= 3; // true
"3" >= 3; // true
"3" >= 5; // false

"hello" >= 5; // false
5 >= "hello"; // false
```

### Zahl zu Zahl Vergleich

```js
5 >= 3; // true
3 >= 3; // true
3 >= 5; // false
```

### Zahl zu BigInt Vergleich

```js
5n >= 3; // true
3 >= 3n; // true
3 >= 5n; // false
```

### Vergleich von Boolean, null, undefined, NaN

```js
true >= false; // true
true >= true; // true
false >= true; // false

true >= 0; // true
true >= 1; // true

null >= 0; // true
1 >= null; // true

undefined >= 3; // false
3 >= undefined; // false

3 >= NaN; // false
NaN >= 3; // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Größer als (`>`)](/de/docs/Web/JavaScript/Reference/Operators/Greater_than)
- [Kleiner als (`<`)](/de/docs/Web/JavaScript/Reference/Operators/Less_than)
- [Kleiner oder gleich (`<=`)](/de/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
