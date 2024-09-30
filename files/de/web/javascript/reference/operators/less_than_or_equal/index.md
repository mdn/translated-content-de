---
title: Less than or equal (<=)
slug: Web/JavaScript/Reference/Operators/Less_than_or_equal
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

Der **Less than or equal (`<=`)** Operator gibt `true` zurück, wenn der linke Operand kleiner oder gleich dem rechten Operand ist, und `false` andernfalls.

{{EmbedInteractiveExample("pages/js/expressions-less-than-or-equal.html")}}

## Syntax

```js-nolint
x <= y
```

## Beschreibung

Die Operanden werden mit demselben Algorithmus verglichen wie beim [Less than](/de/docs/Web/JavaScript/Reference/Operators/Less_than) Operator, wobei die Operanden vertauscht und das Ergebnis negiert werden. `x <= y` ist in der Regel äquivalent zu `!(y < x)`, außer in zwei Fällen, in denen `x <= y` und `x > y` beide `false` sind:

- Wenn einer der Operanden in einen BigInt konvertiert wird, während der andere in einen String konvertiert wird, der nicht in einen BigInt-Wert umgewandelt werden kann (es wird ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax) ausgelöst, wenn er an [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) übergeben wird).
- Wenn einer der Operanden in `NaN` konvertiert wird. (Zum Beispiel Strings, die nicht in Zahlen konvertiert werden können, oder `undefined`.)

Außerdem zwingt `x <= y` `x` dazu, vor `y` in ein primitives Datum umgewandelt zu werden, während `y < x` `y` dazu zwingt, vor `x` in ein primitives Datum umgewandelt zu werden. Da die Umwandlung Nebenwirkungen haben kann, könnte die Reihenfolge der Operanden von Bedeutung sein.

`x <= y` ist im Allgemeinen äquivalent zu `x < y || x == y`, abgesehen von einigen wenigen Fällen:

- Wenn eines von `x` oder `y` `null` ist und das andere etwas ist, das nicht `null` ist und zu 0 wird, wenn es [numerisch erzwungen](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) wird (einschließlich `0`, `0n`, `false`, `""`, `"0"`, `new Date(0)`, etc.): `x <= y` ist `true`, während `x < y || x == y` `false` ist.
- Wenn eines von `x` oder `y` `undefined` ist und das andere eines von `null` oder `undefined` ist: `x <= y` ist `false`, während `x == y` `true` ist.
- Wenn `x` und `y` dasselbe Objekt sind, das nach dem ersten Schritt von [Less than](/de/docs/Web/JavaScript/Reference/Operators/Less_than) zu `NaN` wird (wie `new Date(NaN)`): `x <= y` ist `false`, während `x == y` `true` ist.
- Wenn `x` und `y` verschiedene Objekte sind, die nach dem ersten Schritt von [Less than](/de/docs/Web/JavaScript/Reference/Operators/Less_than) denselben Wert werden: `x <= y` ist `true`, während `x < y || x == y` `false` ist.

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

- [Greater than (`>`)](/de/docs/Web/JavaScript/Reference/Operators/Greater_than)
- [Greater than or equal (`>=`)](/de/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [Less than (`<`)](/de/docs/Web/JavaScript/Reference/Operators/Less_than)
