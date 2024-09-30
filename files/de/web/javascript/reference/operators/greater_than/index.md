---
title: Greater than (>)
slug: Web/JavaScript/Reference/Operators/Greater_than
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

Der **greater than (`>`)** Operator gibt `true` zurück, wenn der linke Operand größer als der rechte Operand ist, und `false` andernfalls.

{{EmbedInteractiveExample("pages/js/expressions-greater-than.html")}}

## Syntax

```js-nolint
x > y
```

## Beschreibung

Die Operanden werden mit demselben Algorithmus verglichen wie beim [Less than](/de/docs/Web/JavaScript/Reference/Operators/Less_than) Operator, außer dass die beiden Operanden vertauscht sind. `x > y` ist im Allgemeinen gleichbedeutend mit `y < x`, mit der Ausnahme, dass `x > y` `x` vor `y` in ein primitives Element umwandelt, während `y < x` `y` vor `x` in ein primitives Element umwandelt. Da die Umwandlung Nebeneffekte haben kann, kann die Reihenfolge der Operanden von Bedeutung sein.

## Beispiele

### Vergleich von String zu String

```js
"a" > "b"; // false
"a" > "a"; // false
"a" > "3"; // true
```

### Vergleich von String zu Number

```js
"5" > 3; // true
"3" > 3; // false
"3" > 5; // false

"hello" > 5; // false
5 > "hello"; // false

"5" > 3n; // true
"3" > 5n; // false
```

### Vergleich von Number zu Number

```js
5 > 3; // true
3 > 3; // false
3 > 5; // false
```

### Vergleich von Number zu BigInt

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

- [Greater than or equal (`>=`)](/de/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [Less than (`<`)](/de/docs/Web/JavaScript/Reference/Operators/Less_than)
- [Less than or equal (`<=`)](/de/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
