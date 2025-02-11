---
title: Größer als (>)
slug: Web/JavaScript/Reference/Operators/Greater_than
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **größer als (`>`)**-Operator gibt `true` zurück, wenn der linke Operand größer als der rechte Operand ist, und ansonsten `false`.

{{InteractiveExample("JavaScript Demo: Expressions - Greater than operator")}}

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

Die Operanden werden mit demselben Algorithmus wie beim [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than)-Operator verglichen, mit der Ausnahme, dass die beiden Operanden vertauscht werden. `x > y` ist im Allgemeinen äquivalent zu `y < x`, außer dass `x > y` `x` vor `y` in eine primitive Form umwandelt, während `y < x` zuerst `y` in eine primitive Form umwandelt. Aufgrund möglicher Nebeneffekte der Umwandlung kann die Reihenfolge der Operanden von Bedeutung sein.

## Beispiele

### Vergleich von String mit String

```js
"a" > "b"; // false
"a" > "a"; // false
"a" > "3"; // true
```

### Vergleich von String mit Zahl

```js
"5" > 3; // true
"3" > 3; // false
"3" > 5; // false

"hello" > 5; // false
5 > "hello"; // false

"5" > 3n; // true
"3" > 5n; // false
```

### Vergleich von Zahl mit Zahl

```js
5 > 3; // true
3 > 3; // false
3 > 5; // false
```

### Vergleich von Zahl mit BigInt

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

- [Größer oder gleich (`>=`)](/de/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [Kleiner als (`<`)](/de/docs/Web/JavaScript/Reference/Operators/Less_than)
- [Kleiner oder gleich (`<=`)](/de/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
