---
title: Less than (<)
slug: Web/JavaScript/Reference/Operators/Less_than
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Der **Less than (`<`)** Operator gibt `true` zurück, wenn der linke Operand kleiner als der rechte Operand ist, und `false` andernfalls.

{{EmbedInteractiveExample("pages/js/expressions-less-than.html")}}

## Syntax

```js-nolint
x < y
```

## Beschreibung

Die Operanden werden mit mehreren Runden der Typumwandlung verglichen, die wie folgt zusammengefasst werden können:

- Zuerst werden Objekte [in primitive Daten](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) umgewandelt, indem deren Methoden [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit dem Hinweis `"number"`), [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) und [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString), in dieser Reihenfolge, aufgerufen werden. Der linke Operand wird immer vor dem rechten umgewandelt. Beachten Sie, dass obwohl `[Symbol.toPrimitive]()` mit dem Hinweis `"number"` aufgerufen wird (was bedeutet, dass eine leichte Präferenz besteht, dass das Objekt zu einer Zahl wird), der Rückgabewert nicht [in eine Zahl konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) wird, da Zeichenketten weiterhin speziell behandelt werden.
- Wenn beide Werte Zeichenketten sind, werden sie als Zeichenketten verglichen, basierend auf den Werten der UTF-16-Einheiten (nicht Unicode-Codepunkte), die sie enthalten.
- Andernfalls versucht JavaScript, nicht numerische Typen in numerische Werte umzuwandeln:
  - Boolean-Werte `true` und `false` werden in 1 bzw. 0 umgewandelt.
  - `null` wird in 0 umgewandelt.
  - `undefined` wird in `NaN` umgewandelt.
  - Zeichenketten werden basierend auf den enthaltenen Werten konvertiert und werden als `NaN` konvertiert, wenn sie keine numerischen Werte enthalten.
- Wenn einer der Werte [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) ist, gibt der Operator `false` zurück.
- Ansonsten werden die Werte als numerische Werte verglichen. BigInt und Zahlenwerte können miteinander verglichen werden.

Andere Operatoren, einschließlich [`>`](/de/docs/Web/JavaScript/Reference/Operators/Greater_than), [`>=`](/de/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal) und [`<=`](/de/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal), verwenden denselben Algorithmus wie `<`. Es gibt zwei Fälle, in denen alle vier Operatoren `false` zurückgeben:

- Wenn einer der Operanden in ein BigInt umgewandelt wird, während der andere in eine Zeichenkette umgewandelt wird, die nicht in einen BigInt-Wert konvertiert werden kann (es tritt ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax) auf, wenn an [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) übergeben).
- Wenn einer der Operanden in `NaN` umgewandelt wird. (Zum Beispiel Zeichenketten, die nicht in Zahlen konvertiert werden können, oder `undefined`.)

Für alle anderen Fälle haben die vier Operatoren die folgenden Beziehungen:

```js
x < y === !(x >= y);
x <= y === !(x > y);
x > y === y < x;
x >= y === y <= x;
```

> [!NOTE]
> Ein beobachtbarer Unterschied zwischen `<` und `>` ist die Reihenfolge der Typumwandlung, besonders wenn die Umwandlung in primitive Typen Nebeneffekte hat. Alle Vergleichsoperatoren wandeln den linken Operand vor dem rechten Operand um.

## Beispiele

### Vergleich Zeichenkette zu Zeichenkette

```js
"a" < "b"; // true
"a" < "a"; // false
"a" < "3"; // false

"\uD855\uDE51" < "\uFF3A"; // true
```

### Vergleich Zeichenkette zu Zahl

```js
"5" < 3; // false
"3" < 3; // false
"3" < 5; // true

"hello" < 5; // false
5 < "hello"; // false

"5" < 3n; // false
"3" < 5n; // true
```

### Vergleich Zahl zu Zahl

```js
5 < 3; // false
3 < 3; // false
3 < 5; // true
```

### Vergleich Zahl zu BigInt

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

Vergleiche zwingen ihre Operanden immer dazu, zu primitiven Datentypen umgewandelt zu werden. Das bedeutet, dass dasselbe Objekt innerhalb eines Vergleichsausdrucks unterschiedliche Werte haben kann. Zum Beispiel können Sie zwei Werte haben, die gleichzeitig größer und kleiner als der andere sind.

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
> Dies kann eine Quelle der Verwirrung sein. Wenn Ihre Objekte benutzerdefinierte Logik für die Umwandlung in primitive Daten bereitstellen, stellen Sie sicher, dass sie _idempotent_ ist: Mehrfaches Umwandeln sollte denselben Wert zurückgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Greater than (`>`)](/de/docs/Web/JavaScript/Reference/Operators/Greater_than)
- [Greater than or equal (`>=`)](/de/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [Less than or equal (`<=`)](/de/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
