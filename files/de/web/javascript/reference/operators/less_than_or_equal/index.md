---
title: Kleiner oder gleich (<=)
slug: Web/JavaScript/Reference/Operators/Less_than_or_equal
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der Operator **Kleiner oder gleich (`<=`)** gibt `true` zurück, wenn der linke Operand kleiner oder gleich dem rechten Operanden ist, andernfalls `false`.

{{InteractiveExample("JavaScript Demo: Less than or equal (<=) operator")}}

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

### Parameter

- `x`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 9 (relationale Operatoren) oder höher. Sein Wert wird entweder in einen String, einen BigInt oder eine Zahl umgewandelt.
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 10 (bitweise Verschiebung) oder höher. Sein Wert wird entweder in einen String, einen BigInt oder eine Zahl umgewandelt.

### Rückgabewert

`true`, wenn `x` kleiner oder gleich `y` ist, andernfalls `false`.

## Beschreibung

Die Operanden werden mit demselben Algorithmus wie beim Operator [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) verglichen, wobei die Operanden vertauscht und das Ergebnis negiert werden. `x <= y` ist im Allgemeinen gleichbedeutend mit `!(y < x)`, außer in zwei Fällen, in denen sowohl `x <= y` als auch `x > y` `false` ergeben:

- Wenn einer der Operanden in einen BigInt umgewandelt wird, während der andere in einen String umgewandelt wird, der sich nicht in einen BigInt-Wert umwandeln lässt (bei der Übergabe an [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) wird ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax) ausgelöst).
- Wenn einer der Operanden in `NaN` umgewandelt wird. (Beispielsweise bei Strings, die sich nicht in Zahlen umwandeln lassen, oder bei `undefined`.)

Außerdem wandelt `x <= y` zuerst `x` und dann `y` in einen primitiven Wert um, während `y < x` zuerst `y` und dann `x` umwandelt. Da Umwandlungen Nebenwirkungen haben können, kann die Reihenfolge der Operanden eine Rolle spielen.

`x <= y` ist im Allgemeinen gleichbedeutend mit `x < y || x == y`, außer in einigen Fällen:

- Wenn entweder `x` oder `y` `null` ist und der jeweils andere Wert nicht `null` ist, aber bei der [Umwandlung in einen numerischen Wert](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) zu 0 wird (darunter `0`, `0n`, `false`, `""`, `"0"`, `new Date(0)` usw.): `x <= y` ergibt `true`, während `x < y || x == y` `false` ergibt.
- Wenn entweder `x` oder `y` `undefined` ist und der jeweils andere Wert `null` oder `undefined` ist: `x <= y` ergibt `false`, während `x == y` `true` ergibt.
- Wenn `x` und `y` dasselbe Objekt sind, das nach dem ersten Schritt des Vergleichs mit [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) zu `NaN` wird (beispielsweise `new Date(NaN)`): `x <= y` ergibt `false`, während `x == y` `true` ergibt.
- Wenn `x` und `y` verschiedene Objekte sind, die nach dem ersten Schritt des Vergleichs mit [Kleiner als](/de/docs/Web/JavaScript/Reference/Operators/Less_than) denselben Wert ergeben: `x <= y` ergibt `true`, während `x < y || x == y` `false` ergibt.

## Beispiele

### Vergleich von String mit String

```js
"a" <= "b"; // true
"a" <= "a"; // true
"a" <= "3"; // false
```

### Vergleich von String mit Zahl

```js
"5" <= 3; // false
"3" <= 3; // true
"3" <= 5; // true

"hello" <= 5; // false
5 <= "hello"; // false
```

### Vergleich von Zahl mit Zahl

```js
5 <= 3; // false
3 <= 3; // true
3 <= 5; // true
```

### Vergleich von Zahl mit BigInt

```js
5n <= 3; // false
3 <= 3n; // true
3 <= 5n; // true
```

### Vergleich von Boolean, null, undefined und NaN

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
