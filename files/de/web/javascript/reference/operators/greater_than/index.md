---
title: Größer als (>)
slug: Web/JavaScript/Reference/Operators/Greater_than
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **"größer als" (`>`)** Operator gibt `true` zurück, wenn der linke Operanden größer ist als der rechte Operand, und andernfalls `false`.

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

Die Operanden werden mit dem gleichen Algorithmus wie beim [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) Operator verglichen, mit dem Unterschied, dass die beiden Operanden vertauscht werden. `x > y` entspricht im Allgemeinen `y < x`, außer dass `x > y` `x` vor `y` zu einem primitiven Wert coerziert, während `y < x` `y` vor `x` zu einem primitiven Wert coerziert. Da die Typumwandlung Nebeneffekte haben kann, könnte die Reihenfolge der Operanden von Bedeutung sein.

## Beispiele

### Zeichenfolgenvergleich

```js
"a" > "b"; // false
"a" > "a"; // false
"a" > "3"; // true
```

### Zeichenfolge-zu-Zahl-Vergleich

```js
"5" > 3; // true
"3" > 3; // false
"3" > 5; // false

"hello" > 5; // false
5 > "hello"; // false

"5" > 3n; // true
"3" > 5n; // false
```

### Zahlenvergleich

```js
5 > 3; // true
3 > 3; // false
3 > 5; // false
```

### Vergleich von Zahl zu BigInt

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

- [Größer als oder gleich (`>=`)](/de/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [Kleiner als (`<`)](/de/docs/Web/JavaScript/Reference/Operators/Less_than)
- [Kleiner als oder gleich (`<=`)](/de/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
