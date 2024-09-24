---
title: Kleiner oder gleich (<=)
slug: Web/JavaScript/Reference/Operators/Less_than_or_equal
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

Der **Kleiner oder gleich (`<=`)** Operator gibt `true` zurück, wenn der linke Operand kleiner oder gleich dem rechten Operand ist, und `false` andernfalls.

{{EmbedInteractiveExample("pages/js/expressions-less-than-or-equal.html")}}

## Syntax

```js-nolint
x <= y
```

## Beschreibung

Die Operanden werden mit demselben Algorithmus wie der [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) Operator verglichen, wobei die Operanden vertauscht und das Ergebnis negiert wird. `x <= y` ist im Allgemeinen gleichwertig mit `!(y < x)`, außer in zwei Fällen, in denen `x <= y` und `x > y` beide `false` sind:

- Wenn einer der Operanden in ein BigInt konvertiert wird, während der andere in einen String konvertiert wird, der nicht in einen BigInt-Wert umgewandelt werden kann (es wird ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax) ausgelöst, wenn er an [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) übergeben wird).
- Wenn einer der Operanden in `NaN` umgewandelt wird. (Zum Beispiel Strings, die nicht in Zahlen konvertiert werden können, oder `undefined`.)

Darüber hinaus wird `x <= y` vor `y` in einen primitiven Wert umgewandelt, während `y < x` `y` vor `x` in einen primitiven Wert umwandelt. Da Umwandlungen Nebenwirkungen haben können, kann die Reihenfolge der Operanden wichtig sein.

`x <= y` ist im Allgemeinen gleichwertig mit `x < y || x == y`, außer in einigen Fällen:

- Wenn eine der beiden `x` oder `y` `null` ist und die andere etwas ist, das nicht `null` ist und bei [numerischer Umwandlung](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) zu 0 wird (einschließlich `0`, `0n`, `false`, `""`, `"0"`, `new Date(0)` etc.): `x <= y` ist `true`, während `x < y || x == y` `false` ist.
- Wenn eine der beiden `x` oder `y` `undefined` ist und die andere `null` oder `undefined` ist: `x <= y` ist `false`, während `x == y` `true` ist.
- Wenn `x` und `y` dasselbe Objekt sind, das nach dem ersten Schritt von [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) zu `NaN` wird (wie `new Date(NaN)`): `x <= y` ist `false`, während `x == y` `true` ist.
- Wenn `x` und `y` unterschiedliche Objekte sind, die nach dem ersten Schritt von [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) denselben Wert annehmen: `x <= y` ist `true`, während `x < y || x == y` `false` ist.

## Beispiele

### String zu String Vergleich

```js
"a" <= "b"; // true
"a" <= "a"; // true
"a" <= "3"; // false
```

### String zu Zahl Vergleich

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
