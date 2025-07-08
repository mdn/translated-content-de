---
title: Weniger als oder gleich (<=)
slug: Web/JavaScript/Reference/Operators/Less_than_or_equal
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **Weniger als oder gleich (`<=`)** Operator gibt `true` zurück, wenn der linke Operand kleiner oder gleich dem rechten Operand ist, und `false` andernfalls.

{{InteractiveExample("JavaScript Demo: Weniger als oder gleich (<=) Operator")}}

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

Die Operanden werden unter Verwendung desselben Algorithmus wie der [Weniger als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) Operator verglichen, wobei die Operanden vertauscht und das Ergebnis negiert wird. `x <= y` ist im Allgemeinen gleichbedeutend mit `!(y < x)`, außer in zwei Fällen, in denen `x <= y` und `x > y` beide `false` sind:

- Wenn einer der Operanden zu einem BigInt konvertiert wird, während der andere zu einem String konvertiert wird, der nicht in einen BigInt-Wert umgewandelt werden kann (es tritt ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax) auf, wenn er an [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) übergeben wird).
- Wenn einer der Operanden in `NaN` umgewandelt wird. (Zum Beispiel Strings, die nicht in Zahlen umgewandelt werden können, oder `undefined`.)

Außerdem zwingt `x <= y` `x`, vor `y` zu einem primitiven Wert zu werden, während `y < x` `y` zwingt, vor `x` zu einem primitiven Wert zu werden. Da eine Typumwandlung Nebenwirkungen haben kann, kann die Reihenfolge der Operanden wichtig sein.

`x <= y` ist im Allgemeinen gleichbedeutend mit `x < y || x == y`, bis auf ein paar Ausnahmen:

- Wenn eines der `x` oder `y` `null` ist, und das andere etwas, das nicht `null` ist und zu 0 wird, wenn es [zu einem numerischen Wert umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) wird (einschließlich `0`, `0n`, `false`, `""`, `"0"`, `new Date(0)`, usw.): `x <= y` ist `true`, während `x < y || x == y` `false` ist.
- Wenn eines der `x` oder `y` `undefined`, ist, und das andere eines von `null` oder `undefined` ist: `x <= y` ist `false`, während `x == y` `true` ist.
- Wenn `x` und `y` dasselbe Objekt sind, das nach dem ersten Schritt von [Weniger als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) zu `NaN` wird (wie `new Date(NaN)`): `x <= y` ist `false`, während `x == y` `true` ist.
- Wenn `x` und `y` verschiedene Objekte sind, die nach dem ersten Schritt von [Weniger als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) den gleichen Wert erhalten: `x <= y` ist `true`, während `x < y || x == y` `false` ist.

## Beispiele

### Vergleich von String zu String

```js
"a" <= "b"; // true
"a" <= "a"; // true
"a" <= "3"; // false
```

### Vergleich von String zu Zahl

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
- [Größer als oder gleich (`>=`)](/de/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [Weniger als (`<`)](/de/docs/Web/JavaScript/Reference/Operators/Less_than)
