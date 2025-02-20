---
title: Kleiner-oder-gleich (`<=`)
slug: Web/JavaScript/Reference/Operators/Less_than_or_equal
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **kleiner-oder-gleich (`<=`)** Operator gibt `true` zurück, wenn der linke Operanden kleiner oder gleich dem rechten Operanden ist, und `false` in allen anderen Fällen.

{{InteractiveExample("JavaScript Demo: Expressions - Less than or equal operator")}}

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

Die Operanden werden mit demselben Algorithmus wie beim [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than)-Operator verglichen, allerdings sind die Operanden vertauscht und das Ergebnis wird negiert. `x <= y` ist im Allgemeinen äquivalent zu `!(y < x)`, außer in zwei Fällen, in denen sowohl `x <= y` als auch `x > y` `false` sind:

- Wenn einer der Operanden zu einem BigInt konvertiert wird, während der andere in einen String konvertiert wird, der nicht zu einem BigInt-Wert konvertiert werden kann (dies führt zu einem [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax), wenn er an [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) übergeben wird).
- Wenn einer der Operanden zu `NaN` konvertiert wird (z. B. Strings, die nicht in Zahlen umgewandelt werden können, oder `undefined`).

Zusätzlich konvertiert `x <= y` `x` zuerst in einen primitiven Wert, während `y < x` `y` zuerst in einen primitiven Wert konvertiert. Da diese Konvertierung Seiteneffekte haben kann, kann die Reihenfolge der Operanden von Bedeutung sein.

`x <= y` ist im Allgemeinen äquivalent zu `x < y || x == y`, mit Ausnahme einiger Fälle:

- Wenn einer von `x` oder `y` `null` ist, und der andere ein Wert ist, der nicht `null` ist und beim [numerischen Zwang](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) zu 0 wird (einschließlich `0`, `0n`, `false`, `""`, `"0"`, `new Date(0)` usw.): `x <= y` ist `true`, während `x < y || x == y` `false` ist.
- Wenn einer von `x` oder `y` `undefined` ist, und der andere entweder `null` oder `undefined` ist: `x <= y` ist `false`, während `x == y` `true` ist.
- Wenn `x` und `y` dasselbe Objekt sind, das nach dem ersten Schritt von [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) zu `NaN` wird (z. B. `new Date(NaN)`): `x <= y` ist `false`, während `x == y` `true` ist.
- Wenn `x` und `y` verschiedene Objekte sind, die nach dem ersten Schritt von [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) denselben Wert erhalten: `x <= y` ist `true`, während `x < y || x == y` `false` ist.

## Beispiele

### String-zu-String-Vergleich

```js
"a" <= "b"; // true
"a" <= "a"; // true
"a" <= "3"; // false
```

### String-zu-Zahl-Vergleich

```js
"5" <= 3; // false
"3" <= 3; // true
"3" <= 5; // true

"hello" <= 5; // false
5 <= "hello"; // false
```

### Zahl-zu-Zahl-Vergleich

```js
5 <= 3; // false
3 <= 3; // true
3 <= 5; // true
```

### Zahl-zu-BigInt-Vergleich

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
- [Größer-oder-gleich (`>=`)](/de/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [Kleiner als (`<`)](/de/docs/Web/JavaScript/Reference/Operators/Less_than)
