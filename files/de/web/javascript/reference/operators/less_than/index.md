---
title: Kleiner als (<)
slug: Web/JavaScript/Reference/Operators/Less_than
l10n:
  sourceCommit: 5d53607e3645a456fce6564424823169157b74b1
---

Der Operator **Kleiner als (`<`)** gibt `true` zurück, wenn der linke Operand kleiner als der rechte Operand ist, andernfalls `false`.

{{InteractiveExample("JavaScript Demo: Less than (<) operator")}}

```js interactive-example
console.log(5 < 3);
// Expected output: false

console.log(3 < 3);
// Expected output: false

// Compare bigint to number
console.log(3n < 5);
// Expected output: true

console.log("aa" < "ab");
// Expected output: true
```

## Syntax

```js-nolint
x < y
```

## Beschreibung

Die Operanden werden in mehreren Schritten der Typumwandlung verglichen. Der Ablauf lässt sich wie folgt zusammenfassen:

- Zunächst werden Objekte in [primitive Werte umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion). Dazu werden ihre Methoden [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"number"` als Hint), [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) und [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) in dieser Reihenfolge aufgerufen. Der linke Operand wird immer vor dem rechten umgewandelt. Obwohl `[Symbol.toPrimitive]()` mit dem Hint `"number"` aufgerufen wird (das heißt, eine Umwandlung des Objekts in eine Zahl wird leicht bevorzugt), wird der Rückgabewert nicht [in eine Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), da Strings weiterhin gesondert behandelt werden.
- Wenn beide Werte Strings sind, werden sie als Strings verglichen. Maßgeblich sind dabei die Werte der enthaltenen UTF-16-Codeeinheiten (nicht der Unicode-Codepunkte).
- Andernfalls versucht JavaScript, nicht numerische Typen in numerische Werte umzuwandeln:
  - Die booleschen Werte `true` und `false` werden in 1 beziehungsweise 0 umgewandelt.
  - `null` wird in 0 umgewandelt.
  - `undefined` wird in `NaN` umgewandelt.
  - Strings werden anhand ihres Inhalts umgewandelt. Enthalten sie keinen numerischen Wert, werden sie in `NaN` umgewandelt.
- Wenn einer der Werte [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) ist, gibt der Operator `false` zurück.
- Andernfalls werden die Werte als numerische Werte verglichen. BigInt- und Number-Werte können miteinander verglichen werden.

Andere Operatoren, darunter [`>`](/de/docs/Web/JavaScript/Reference/Operators/Greater_than), [`>=`](/de/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal) und [`<=`](/de/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal), verwenden denselben Algorithmus wie `<`. In zwei Fällen geben alle vier Operatoren `false` zurück:

- Wenn einer der Operanden in einen BigInt umgewandelt wird, während der andere in einen String umgewandelt wird, der nicht in einen BigInt-Wert umgewandelt werden kann (und bei der Übergabe an [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) einen [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax) auslöst).
- Wenn einer der Operanden in `NaN` umgewandelt wird. (Dies gilt beispielsweise für Strings, die nicht in Zahlen umgewandelt werden können, oder für `undefined`.)

In allen anderen Fällen gelten für die vier Operatoren die folgenden Beziehungen:

```js
x < y === !(x >= y);
x <= y === !(x > y);
x > y === y < x;
x >= y === y <= x;
```

> [!NOTE]
> Ein beobachtbarer Unterschied zwischen `<` und `>` ist die Reihenfolge der Typumwandlung, insbesondere wenn die Umwandlung in einen primitiven Wert Nebenwirkungen hat. Alle Vergleichsoperatoren wandeln den linken Operanden vor dem rechten um.

## Beispiele

### Vergleich von Strings mit Strings

```js
"a" < "b"; // true
"a" < "a"; // false
"a" < "3"; // false

"\uD855\uDE51" < "\uFF3A"; // true
```

### Vergleich von Strings mit Zahlen

```js
"5" < 3; // false
"3" < 3; // false
"3" < 5; // true

"hello" < 5; // false
5 < "hello"; // false

"5" < 3n; // false
"3" < 5n; // true
```

### Vergleich von Zahlen mit Zahlen

```js
5 < 3; // false
3 < 3; // false
3 < 5; // true
```

### Vergleich von Zahlen mit BigInt-Werten

```js
5n < 3; // false
3 < 5n; // true
```

### Vergleich von booleschen Werten, null, undefined und NaN

```js
true < false; // false
false < true; // true

0 < true; // true
true < 1; // false

null < 0; // false
null < 1; // true

undefined < 3; // false
3 < undefined; // false

3 < NaN; // false
NaN < 3; // false
```

### Vergleich mit Nebenwirkungen

Bei Vergleichen werden die Operanden immer in primitive Werte umgewandelt. Das bedeutet, dass dasselbe Objekt innerhalb eines Vergleichsausdrucks unterschiedliche Werte annehmen kann. Beispielsweise kann jeder von zwei Werten sowohl größer als auch kleiner als der jeweils andere sein.

```js
class Mystery {
  static #coercionCount = -1;
  valueOf() {
    Mystery.#coercionCount++;
    // The left operand is coerced first, so this will return 0
    // Then it returns 1 for the right operand
    return Mystery.#coercionCount % 2;
  }
}

const l = new Mystery();
const r = new Mystery();
console.log(l < r && r < l);
// true
```

> [!WARNING]
> Das kann verwirrend sein. Wenn Ihre Objekte eine eigene Logik zur Umwandlung in primitive Werte bereitstellen, stellen Sie sicher, dass diese _idempotent_ ist: Wiederholte Umwandlungen sollten denselben Wert zurückgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Größer als (`>`)](/de/docs/Web/JavaScript/Reference/Operators/Greater_than)
- [Größer als oder gleich (`>=`)](/de/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [Kleiner als oder gleich (`<=`)](/de/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
