---
title: Größer als (>)
slug: Web/JavaScript/Reference/Operators/Greater_than
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **größer als (`>`)** Operator liefert `true`, wenn der linke Operand größer als der rechte Operand ist, und `false` andernfalls.

{{InteractiveExample("JavaScript Demo: Greater than (>) operator")}}

```js interactive-example
console.log(5 > 3);
// Expected output: true

console.log(3 > 3);
// Expected output: false

// Compare bigint to number
console.log(3n > 5);
// Expected output: false

console.log("ab" > "aa");
// Expected output: true
```

## Syntax

```js-nolint
x > y
```

## Beschreibung

Die Operanden werden nach demselben Algorithmus wie der [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) Operator verglichen, jedoch sind die beiden Operanden vertauscht. `x > y` ist im Allgemeinen äquivalent zu `y < x`, außer dass `x > y` `x` zu einem primitiven Wert zwingt, bevor `y` dazu gezwungen wird, während `y < x` `y` zu einem primitiven Wert zwingt, bevor `x` dazu gezwungen wird. Da die Zwangsumwandlung Nebeneffekte haben kann, kann die Reihenfolge der Operanden von Bedeutung sein.

## Beispiele

### String zu String Vergleich

```js
"a" > "b"; // false
"a" > "a"; // false
"a" > "3"; // true
```

### String zu Nummer Vergleich

```js
"5" > 3; // true
"3" > 3; // false
"3" > 5; // false

"hello" > 5; // false
5 > "hello"; // false

"5" > 3n; // true
"3" > 5n; // false
```

### Nummer zu Nummer Vergleich

```js
5 > 3; // true
3 > 3; // false
3 > 5; // false
```

### Nummer zu BigInt Vergleich

```js
5n > 3; // true
3 > 5n; // false
```

### Vergleich von Boolean, null, undefined, NaN

```js
true > false; // true
false > true; // false

true > 0; // true
true > 1; // false

null > 0; // false
1 > null; // true

undefined > 3; // false
3 > undefined; // false

3 > NaN; // false
NaN > 3; // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Größer gleich (`>=`)](/de/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [Kleiner als (`<`)](/de/docs/Web/JavaScript/Reference/Operators/Less_than)
- [Kleiner gleich (`<=`)](/de/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
