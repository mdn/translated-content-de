---
title: Größer als oder gleich (>=)
slug: Web/JavaScript/Reference/Operators/Greater_than_or_equal
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

Der **Größer als oder gleich (`>=`)** Operator gibt `true` zurück, wenn der linke Operand größer oder gleich dem rechten Operand ist, und `false` andernfalls.

{{EmbedInteractiveExample("pages/js/expressions-greater-than-or-equal.html")}}

## Syntax

```js-nolint
x >= y
```

## Beschreibung

Die Operanden werden mit demselben Algorithmus wie der [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) Operator verglichen, wobei das Ergebnis negiert wird. `x >= y` ist im Allgemeinen äquivalent zu `!(x < y)`, außer in zwei Fällen, bei denen sowohl `x >= y` als auch `x < y` `false` sind:

- Wenn einer der Operanden in einen BigInt konvertiert wird, während der andere in einen String konvertiert wird, der nicht in einen BigInt-Wert umgewandelt werden kann (es wird ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax) ausgelöst, wenn er an [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) übergeben wird).
- Wenn einer der Operanden in `NaN` konvertiert wird. (Zum Beispiel Strings, die nicht in Zahlen konvertiert werden können, oder `undefined`.)

`x >= y` ist im Allgemeinen äquivalent zu `x > y || x == y`, außer in einigen Fällen:

- Wenn einer von `x` oder `y` `null` ist und der andere etwas ist, das nicht `null` ist und bei der [numerischen Konvertierung](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) 0 wird (einschließlich `0`, `0n`, `false`, `""`, `"0"`, `new Date(0)`, etc.): `x >= y` ist `true`, während `x > y || x == y` `false` ist.
- Wenn einer von `x` oder `y` `undefined` ist und der andere `null` oder `undefined` ist: `x >= y` ist `false`, während `x == y` `true` ist.
- Wenn `x` und `y` dasselbe Objekt sind, das nach dem ersten Schritt von [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) `NaN` wird (wie `new Date(NaN)`): `x >= y` ist `false`, während `x == y` `true` ist.
- Wenn `x` und `y` unterschiedliche Objekte sind, die nach dem ersten Schritt von [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) denselben Wert erhalten: `x >= y` ist `true`, während `x > y || x == y` `false` ist.

## Beispiele

### Zeichenfolgenvergleich

```js
"a" >= "b"; // false
"a" >= "a"; // true
"a" >= "3"; // true
```

### Vergleich von Zeichenfolgen und Zahlen

```js
"5" >= 3; // true
"3" >= 3; // true
"3" >= 5; // false

"hello" >= 5; // false
5 >= "hello"; // false
```

### Vergleich von Zahlen

```js
5 >= 3; // true
3 >= 3; // true
3 >= 5; // false
```

### Vergleich von Zahlen und BigInt

```js
5n >= 3; // true
3 >= 3n; // true
3 >= 5n; // false
```

### Vergleich von Booleschen, null, undefined, NaN

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Größer als (`>`)](/de/docs/Web/JavaScript/Reference/Operators/Greater_than)
- [Kleiner als (`<`)](/de/docs/Web/JavaScript/Reference/Operators/Less_than)
- [Kleiner als oder gleich (`<=`)](/de/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
