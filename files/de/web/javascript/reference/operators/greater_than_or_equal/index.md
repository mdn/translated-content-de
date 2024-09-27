---
title: Greater than or equal (>=)
slug: Web/JavaScript/Reference/Operators/Greater_than_or_equal
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

Der **"greater than or equal" (`>=`)** Operator gibt `true` zurück, wenn der linke Operand größer oder gleich dem rechten Operand ist, und `false` andernfalls.

{{EmbedInteractiveExample("pages/js/expressions-greater-than-or-equal.html")}}

## Syntax

```js-nolint
x >= y
```

## Beschreibung

Die Operanden werden nach demselben Algorithmus verglichen wie beim [Less than](/de/docs/Web/JavaScript/Reference/Operators/Less_than) Operator, wobei das Ergebnis negiert wird. `x >= y` ist im Allgemeinen gleichbedeutend mit `!(x < y)`, mit Ausnahme von zwei Fällen, in denen sowohl `x >= y` als auch `x < y` `false` sind:

- Wenn einer der Operanden in einen BigInt konvertiert wird, während der andere in einen String konvertiert wird, der nicht in einen BigInt-Wert umgewandelt werden kann (es wird ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax) ausgelöst, wenn es an [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) übergeben wird).
- Wenn einer der Operanden in `NaN` konvertiert wird. (Beispielsweise Strings, die nicht in Zahlen konvertiert werden können, oder `undefined`.)

`x >= y` ist im Allgemeinen gleichbedeutend mit `x > y || x == y`, mit Ausnahme einiger weniger Fälle:

- Wenn eines von `x` oder `y` `null` ist und das andere etwas ist, das nicht `null` ist und bei [Zwang zur numerischen Form](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) 0 wird (einschließlich `0`, `0n`, `false`, `""`, `"0"`, `new Date(0)`, etc.): `x >= y` ist `true`, während `x > y || x == y` `false` ist.
- Wenn eines von `x` oder `y` `undefined` ist und das andere `null` oder `undefined` ist: `x >= y` ist `false`, während `x == y` `true` ist.
- Wenn `x` und `y` dasselbe Objekt sind, das nach dem ersten Schritt von [Less than](/de/docs/Web/JavaScript/Reference/Operators/Less_than) `NaN` wird (wie `new Date(NaN)`): `x >= y` ist `false`, während `x == y` `true` ist.
- Wenn `x` und `y` unterschiedliche Objekte sind, die nach dem ersten Schritt von [Less than](/de/docs/Web/JavaScript/Reference/Operators/Less_than) denselben Wert ergeben: `x >= y` ist `true`, während `x > y || x == y` `false` ist.

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

- [Greater than (`>`)](/de/docs/Web/JavaScript/Reference/Operators/Greater_than)
- [Less than (`<`)](/de/docs/Web/JavaScript/Reference/Operators/Less_than)
- [Less than or equal (`<=`)](/de/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
