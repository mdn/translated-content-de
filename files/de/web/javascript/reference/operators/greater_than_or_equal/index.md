---
title: Größer oder gleich (>=)
slug: Web/JavaScript/Reference/Operators/Greater_than_or_equal
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **größer oder gleich (`>=`)** Operator gibt `true` zurück, wenn der linke Operand größer oder gleich dem rechten Operand ist, und `false` andernfalls.

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

Die Operanden werden unter Verwendung desselben Algorithmus wie beim [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) Operator verglichen, mit negiertem Ergebnis. `x >= y` ist im Allgemeinen äquivalent zu `!(x < y)`, außer in zwei Fällen, in denen `x >= y` und `x < y` beide `false` sind:

- Wenn einer der Operanden in einen BigInt konvertiert wird, während der andere in einen String umgewandelt wird, der nicht in einen BigInt-Wert konvertiert werden kann (es wird ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax) ausgelöst, wenn er an [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) übergeben wird).
- Wenn einer der Operanden in `NaN` umgewandelt wird. (Zum Beispiel Strings, die nicht in Zahlen konvertiert werden können, oder `undefined`.)

`x >= y` ist im Allgemeinen äquivalent zu `x > y || x == y`, außer in einigen Fällen:

- Wenn eines von `x` oder `y` `null` ist und das andere etwas ist, das nicht `null` ist und bei einer [Zwangsumwandlung zu Zahlen](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) 0 wird (einschließlich `0`, `0n`, `false`, `""`, `"0"`, `new Date(0)`, etc.): `x >= y` ist `true`, während `x > y || x == y` `false` ist.
- Wenn eines von `x` oder `y` `undefined` ist und das andere eines von `null` oder `undefined`: `x >= y` ist `false`, während `x == y` `true` ist.
- Wenn `x` und `y` dasselbe Objekt sind, das nach dem ersten Schritt von [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) `NaN` wird (wie `new Date(NaN)`): `x >= y` ist `false`, während `x == y` `true` ist.
- Wenn `x` und `y` verschiedene Objekte sind, die nach dem ersten Schritt von [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) denselben Wert erhalten: `x >= y` ist `true`, während `x > y || x == y` `false` ist.

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
