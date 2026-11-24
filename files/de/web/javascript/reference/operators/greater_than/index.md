---
title: Größer als (>)
slug: Web/JavaScript/Reference/Operators/Greater_than
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der **Größer-als-Operator (`>`)** gibt `true` zurück, wenn der linke Operand größer als der rechte Operand ist, andernfalls `false`.

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

### Parameter

- `x`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 9 (relationale Operatoren) oder höher. Sein Wert wird in einen String, einen BigInt oder eine Zahl umgewandelt.
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 10 (bitweise Verschiebung) oder höher. Sein Wert wird in einen String, einen BigInt oder eine Zahl umgewandelt.

### Rückgabewert

`true`, wenn `x` größer als `y` ist, andernfalls `false`.

## Beschreibung

Die Operanden werden mit demselben Algorithmus wie beim [Kleiner-als-Operator](/de/docs/Web/JavaScript/Reference/Operators/Less_than) verglichen, jedoch in umgekehrter Reihenfolge. `x > y` ist im Allgemeinen gleichbedeutend mit `y < x`. Allerdings wird bei `x > y` zuerst `x` und dann `y` in einen primitiven Wert umgewandelt, während bei `y < x` zuerst `y` und dann `x` umgewandelt wird. Da die Umwandlung Nebeneffekte haben kann, kann die Reihenfolge der Operanden eine Rolle spielen.

## Beispiele

### Vergleich zwischen Strings

```js
"a" > "b"; // false
"a" > "a"; // false
"a" > "3"; // true
```

### Vergleich zwischen einem String und einer Zahl

```js
"5" > 3; // true
"3" > 3; // false
"3" > 5; // false

"hello" > 5; // false
5 > "hello"; // false

"5" > 3n; // true
"3" > 5n; // false
```

### Vergleich zwischen Zahlen

```js
5 > 3; // true
3 > 3; // false
3 > 5; // false
```

### Vergleich zwischen einer Zahl und einem BigInt

```js
5n > 3; // true
3 > 5n; // false
```

### Vergleich von Boolean, null, undefined und NaN

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
