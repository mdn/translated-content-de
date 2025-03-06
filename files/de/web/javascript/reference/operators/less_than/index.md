---
title: Kleiner als (<)
slug: Web/JavaScript/Reference/Operators/Less_than
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Operators")}}

Der **kleiner als (`<`)** Operator gibt `true` zurück, wenn der linke Operand kleiner als der rechte Operand ist, und andernfalls `false`.

{{InteractiveExample("JavaScript Demo: Expressions - Less than operator")}}

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

Die Operanden werden mit mehreren Runden von Typumwandlungen verglichen, die wie folgt zusammengefasst werden können:

- Zuerst werden Objekte [in primitive Werte umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), indem ihre Methoden [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"number"` als Hinweis), [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) und [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) in dieser Reihenfolge aufgerufen werden. Der linke Operand wird immer vor dem rechten umgewandelt. Beachten Sie, dass obwohl `[Symbol.toPrimitive]()` mit dem Hinweis `"number"` aufgerufen wird (was bedeutet, dass es eine leichte Präferenz gibt, dass das Objekt eine Zahl wird), der Rückgabewert nicht [in eine Zahl umgewandelt wird](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), da Zeichenketten weiterhin speziell behandelt werden.
- Wenn beide Werte Zeichenketten sind, werden sie als Zeichenketten verglichen, basierend auf den Werten der UTF-16-Code-Einheiten (nicht Unicode-Codepunkte), die sie enthalten.
- Andernfalls versucht JavaScript, Nicht-Zahlentypen in numerische Werte umzuwandeln:
  - Boolesche Werte `true` und `false` werden in 1 bzw. 0 umgewandelt.
  - `null` wird in 0 umgewandelt.
  - `undefined` wird in `NaN` umgewandelt.
  - Zeichenketten werden basierend auf ihren enthaltenen Werten umgewandelt und werden als `NaN` umgewandelt, wenn sie keine numerischen Werte enthalten.
- Wenn einer der Werte [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) ist, gibt der Operator `false` zurück.
- Andernfalls werden die Werte als numerische Werte verglichen. BigInt- und Zahlenwerte können gemeinsam verglichen werden.

Andere Operatoren, einschließlich [`>`](/de/docs/Web/JavaScript/Reference/Operators/Greater_than), [`>=`](/de/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal), und [`<=`](/de/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal), verwenden den gleichen Algorithmus wie `<`. Es gibt zwei Fälle, in denen alle vier Operatoren `false` zurückgeben:

- Wenn einer der Operanden in ein BigInt umgewandelt wird, während der andere in eine Zeichenkette umgewandelt wird, die nicht in einen BigInt-Wert umgewandelt werden kann (es wird ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax) ausgelöst, wenn an [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) übergeben).
- Wenn einer der Operanden in `NaN` umgewandelt wird. (Zum Beispiel Zeichenketten, die nicht in Zahlen umgewandelt werden können, oder `undefined`.)

Für alle anderen Fälle haben die vier Operatoren die folgenden Beziehungen:

```js
x < y === !(x >= y);
x <= y === !(x > y);
x > y === y < x;
x >= y === y <= x;
```

> [!NOTE]
> Ein beobachtbarer Unterschied zwischen `<` und `>` ist die Reihenfolge der Typumwandlung, insbesondere wenn die Umwandlung in primitive Werte Nebeneffekte hat. Alle Vergleichsoperatoren wandeln den linken Operanden vor dem rechten um.

## Beispiele

### Vergleich von Zeichenkette zu Zeichenkette

```js
"a" < "b"; // true
"a" < "a"; // false
"a" < "3"; // false

"\uD855\uDE51" < "\uFF3A"; // true
```

### Vergleich von Zeichenkette zu Zahl

```js
"5" < 3; // false
"3" < 3; // false
"3" < 5; // true

"hello" < 5; // false
5 < "hello"; // false

"5" < 3n; // false
"3" < 5n; // true
```

### Vergleich von Zahl zu Zahl

```js
5 < 3; // false
3 < 3; // false
3 < 5; // true
```

### Vergleich von Zahl zu BigInt

```js
5n < 3; // false
3 < 5n; // true
```

### Vergleich von Boolean, null, undefined, NaN

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

### Vergleich mit Nebeneffekten

Vergleiche wandeln ihre Operanden immer in primitive Werte um. Das bedeutet, dass dasselbe Objekt innerhalb eines Vergleichsausdrucks unterschiedliche Werte haben kann. Zum Beispiel können zwei Werte sowohl größer als auch kleiner als der andere sein.

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
> Dies kann eine Quelle der Verwirrung sein. Wenn Ihre Objekte eigene Logik zur Konvertierung in primitive Werte bereitstellen, stellen Sie sicher, dass diese _idempotent_ ist: Mehrere Umwandlungen sollten denselben Wert zurückgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Größer als (`>`)](/de/docs/Web/JavaScript/Reference/Operators/Greater_than)
- [Größer als oder gleich (`>=`)](/de/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [Kleiner als oder gleich (`<=`)](/de/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
