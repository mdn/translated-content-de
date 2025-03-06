---
title: Kleiner oder gleich (<=)
slug: Web/JavaScript/Reference/Operators/Less_than_or_equal
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Operators")}}

Der **kleiner oder gleich (`<=`)** Operator gibt `true` zurück, wenn der linke Operand kleiner oder gleich dem rechten Operand ist, und `false` andernfalls.

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

Die Operanden werden mit demselben Algorithmus wie beim [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) Operator verglichen, wobei die Operanden vertauscht und das Ergebnis negiert werden. `x <= y` ist im Allgemeinen äquivalent zu `!(y < x)`, mit Ausnahme von zwei Fällen, in denen sowohl `x <= y` als auch `x > y` `false` sind:

- Wenn einer der Operanden in einen BigInt konvertiert wird, während der andere in eine Zeichenkette konvertiert wird, die nicht in einen BigInt Wert konvertiert werden kann (dies führt zu einem [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax), wenn er an [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) übergeben wird).
- Wenn einer der Operanden in `NaN` konvertiert wird. (Zum Beispiel Zeichenketten, die nicht in Zahlen konvertiert werden können, oder `undefined`.)

Zudem zwingt `x <= y` `x` vor `y` in einen primitiven Wert, während `y < x` `y` vor `x` in einen primitiven Wert zwingt. Da diese Typumwandlung Nebeneffekte haben kann, kann die Reihenfolge der Operanden wichtig sein.

`x <= y` ist im Allgemeinen äquivalent zu `x < y || x == y`, außer in einigen wenigen Fällen:

- Wenn einer der Werte `x` oder `y` `null` ist und der andere etwas, das nicht `null` ist und zu 0 wird, wenn es [in eine Zahl gezwungen](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) wird (einschließlich `0`, `0n`, `false`, `""`, `"0"`, `new Date(0)`, etc.): `x <= y` ist `true`, während `x < y || x == y` `false` ist.
- Wenn einer der Werte `x` oder `y` `undefined` ist und der andere `null` oder `undefined` ist: `x <= y` ist `false`, während `x == y` `true` ist.
- Wenn `x` und `y` dasselbe Objekt sind, das nach dem ersten Schritt des [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) Vergleichs `NaN` wird (wie z.B. `new Date(NaN)`): `x <= y` ist `false`, während `x == y` `true` ist.
- Wenn `x` und `y` unterschiedliche Objekte sind, die nach dem ersten Schritt des [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) Vergleichs denselben Wert ergeben: `x <= y` ist `true`, während `x < y || x == y` `false` ist.

## Beispiele

### Zeichenkette zu Zeichenkette Vergleich

```js
"a" <= "b"; // true
"a" <= "a"; // true
"a" <= "3"; // false
```

### Zeichenkette zu Zahl Vergleich

```js
"5" <= 3; // false
"3" <= 3; // true
"3" <= 5; // true

"hello" <= 5; // false
5 <= "hello"; // false
```

### Zahl zu Zahl Vergleich

```js
5 <= 3; // false
3 <= 3; // true
3 <= 5; // true
```

### Zahl zu BigInt Vergleich

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
