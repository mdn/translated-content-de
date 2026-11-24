---
title: Größer als oder gleich (>=)
slug: Web/JavaScript/Reference/Operators/Greater_than_or_equal
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der Operator **Größer als oder gleich (`>=`)** gibt `true` zurück, wenn der linke Operand größer als oder gleich dem rechten Operanden ist, andernfalls `false`.

{{InteractiveExample("JavaScript Demo: Greater than or equal (>=) operator")}}

```js interactive-example
console.log(5 >= 3);
// Expected output: true

console.log(3 >= 3);
// Expected output: true

// Compare bigint to number
console.log(3n >= 5);
// Expected output: false

console.log("ab" >= "aa");
// Expected output: true
```

## Syntax

```js-nolint
x >= y
```

### Parameter

- `x`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 9 (relationale Operatoren) oder höher. Sein Wert wird entweder in einen String, einen BigInt oder eine Zahl umgewandelt.
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 10 (Bitverschiebung) oder höher. Sein Wert wird entweder in einen String, einen BigInt oder eine Zahl umgewandelt.

### Rückgabewert

`true`, wenn `x` größer als oder gleich `y` ist, andernfalls `false`.

## Beschreibung

Die Operanden werden mit demselben Algorithmus wie beim Operator [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) verglichen, wobei das Ergebnis negiert wird. `x >= y` ist im Allgemeinen gleichbedeutend mit `!(x < y)`, außer in zwei Fällen, in denen sowohl `x >= y` als auch `x < y` `false` ergeben:

- Wenn einer der Operanden in einen BigInt umgewandelt wird, während der andere in einen String umgewandelt wird, der sich nicht in einen BigInt-Wert umwandeln lässt (und bei der Übergabe an [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) einen [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax) auslöst).
- Wenn einer der Operanden in `NaN` umgewandelt wird. (Dies gilt beispielsweise für Strings, die sich nicht in Zahlen umwandeln lassen, oder für `undefined`.)

`x >= y` ist im Allgemeinen gleichbedeutend mit `x > y || x == y`, außer in einigen Fällen:

- Wenn einer der Werte `x` oder `y` `null` ist und der andere nicht `null` ist, aber bei der [Umwandlung in einen numerischen Wert](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) zu 0 wird (darunter `0`, `0n`, `false`, `""`, `"0"`, `new Date(0)` usw.): `x >= y` ergibt `true`, während `x > y || x == y` `false` ergibt.
- Wenn einer der Werte `x` oder `y` `undefined` ist und der andere `null` oder `undefined` ist: `x >= y` ergibt `false`, während `x == y` `true` ergibt.
- Wenn `x` und `y` dasselbe Objekt sind, das nach dem ersten Schritt des [Kleiner-als-Vergleichs](/de/docs/Web/JavaScript/Reference/Operators/Less_than) zu `NaN` wird (etwa `new Date(NaN)`): `x >= y` ergibt `false`, während `x == y` `true` ergibt.
- Wenn `x` und `y` unterschiedliche Objekte sind, die nach dem ersten Schritt des [Kleiner-als-Vergleichs](/de/docs/Web/JavaScript/Reference/Operators/Less_than) zum selben Wert werden: `x >= y` ergibt `true`, während `x > y || x == y` `false` ergibt.

## Beispiele

### Vergleich von Strings

```js
"a" >= "b"; // false
"a" >= "a"; // true
"a" >= "3"; // true
```

### Vergleich eines Strings mit einer Zahl

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

### Vergleich einer Zahl mit einem BigInt

```js
5n >= 3; // true
3 >= 3n; // true
3 >= 5n; // false
```

### Vergleich von Boolean-Werten, null, undefined und NaN

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

- [Größer als (`>`)](/de/docs/Web/JavaScript/Reference/Operators/Greater_than)
- [Kleiner als (`<`)](/de/docs/Web/JavaScript/Reference/Operators/Less_than)
- [Kleiner als oder gleich (`<=`)](/de/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
