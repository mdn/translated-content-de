---
title: Greater than or equal (>=)
slug: Web/JavaScript/Reference/Operators/Greater_than_or_equal
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

Der **größer als oder gleich (`>=`)** Operator gibt `true` zurück, wenn der linke Operand größer oder gleich dem rechten Operand ist, und `false` andernfalls.

{{EmbedInteractiveExample("pages/js/expressions-greater-than-or-equal.html")}}

## Syntax

```js-nolint
x >= y
```

## Beschreibung

Die Operanden werden mit demselben Algorithmus verglichen wie beim [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) Operator, mit negiertem Ergebnis. `x >= y` ist im Allgemeinen äquivalent zu `!(x < y)`, außer in zwei Fällen, in denen sowohl `x >= y` als auch `x < y` `false` sind:

- Wenn einer der Operanden in ein BigInt umgewandelt wird, während der andere in einen String umgewandelt wird, der nicht in einen BigInt-Wert umgewandelt werden kann (es wird ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax) ausgelöst, wenn er an [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) übergeben wird).
- Wenn einer der Operanden in `NaN` umgewandelt wird. (Zum Beispiel Strings, die nicht in Zahlen umgewandelt werden können, oder `undefined`.)

`x >= y` ist im Allgemeinen äquivalent zu `x > y || x == y`, außer in einigen Fällen:

- Wenn einer von `x` oder `y` `null` ist und der andere etwas ist, das nicht `null` ist und bei [Zwang zu einer Zahl](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) zu 0 wird (einschließlich `0`, `0n`, `false`, `""`, `"0"`, `new Date(0)`, etc.): `x >= y` ist `true`, während `x > y || x == y` `false` ist.
- Wenn einer von `x` oder `y` `undefined` ist und der andere entweder `null` oder `undefined` ist: `x >= y` ist `false`, während `x == y` `true` ist.
- Wenn `x` und `y` dasselbe Objekt sind, das nach dem ersten Schritt von [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) `NaN` wird (wie `new Date(NaN)`): `x >= y` ist `false`, während `x == y` `true` ist.
- Wenn `x` und `y` verschiedene Objekte sind, die nach dem ersten Schritt von [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) denselben Wert haben: `x >= y` ist `true`, während `x > y || x == y` `false` ist.

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
