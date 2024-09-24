---
title: Kleiner als (<)
slug: Web/JavaScript/Reference/Operators/Less_than
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Der **kleiner als (`<`)** Operator gibt `true` zurück, wenn der linke Operand kleiner als der rechte Operand ist, andernfalls `false`.

{{EmbedInteractiveExample("pages/js/expressions-less-than.html")}}

## Syntax

```js-nolint
x < y
```

## Beschreibung

Die Operanden werden mit mehreren Runden der Typumwandlung verglichen, die wie folgt zusammengefasst werden können:

- Zuerst werden Objekte durch Aufrufen ihrer [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"number"` als Hinweis), [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) und [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) Methoden zu Primitiven [konvertiert](/de/docs/Web/JavaScript/Data_structures#primitive_coercion), in dieser Reihenfolge. Der linke Operand wird immer vor dem rechten umgewandelt. Beachten Sie, dass, obwohl `[Symbol.toPrimitive]()` mit dem Hinweis `"number"` aufgerufen wird (was bedeutet, dass eine leichte Präferenz für die Darstellung als Zahl besteht), der Rückgabewert nicht in eine Zahl umgewandelt wird, da Zeichenfolgen weiterhin speziell behandelt werden.
- Wenn beide Werte Zeichenfolgen sind, werden sie als solche verglichen, basierend auf den Werten der UTF-16 Code-Einheiten (nicht der Unicode-Code-Punkte), die sie enthalten.
- Andernfalls versucht JavaScript, nicht-numerische Typen in numerische Werte zu konvertieren:
  - Boolesche Werte `true` und `false` werden in 1 und 0 umgewandelt.
  - `null` wird in 0 umgewandelt.
  - `undefined` wird in `NaN` umgewandelt.
  - Zeichenfolgen werden basierend auf den Werten, die sie enthalten, umgewandelt und werden in `NaN` konvertiert, wenn sie keine numerischen Werte enthalten.
- Wenn einer der Werte [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) ist, gibt der Operator `false` zurück.
- Andernfalls werden die Werte als numerische Werte verglichen. BigInt- und Zahlwerte können miteinander verglichen werden.

Andere Operatoren, einschließlich [`>`](/de/docs/Web/JavaScript/Reference/Operators/Greater_than), [`>=`](/de/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal) und [`<=`](/de/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal), verwenden denselben Algorithmus wie `<`. Es gibt zwei Fälle, in denen alle vier Operatoren `false` zurückgeben:

- Wenn einer der Operanden in einen BigInt umgewandelt wird, während der andere in eine Zeichenfolge umgewandelt wird, die nicht in einen BigInt-Wert konvertiert werden kann (dies führt zu einem [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax), wenn er an [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) übergeben wird).
- Wenn einer der Operanden in `NaN` umgewandelt wird. (Zum Beispiel Zeichenfolgen, die nicht in Zahlen umgewandelt werden können, oder `undefined`.)

Für alle anderen Fälle haben die vier Operatoren die folgenden Beziehungen:

```js
x < y === !(x >= y);
x <= y === !(x > y);
x > y === y < x;
x >= y === y <= x;
```

> [!NOTE]
> Ein beobachtbarer Unterschied zwischen `<` und `>` ist die Reihenfolge der Typumwandlung, insbesondere wenn die Typumwandlung zu Primitiven Nebenwirkungen hat. Alle Vergleichsoperatoren wandeln den linken Operand vor dem rechten Operand um.

## Beispiele

### Zeichenfolgen-Vergleich

```js
"a" < "b"; // true
"a" < "a"; // false
"a" < "3"; // false

"\uD855\uDE51" < "\uFF3A"; // true
```

### Vergleich von Zeichenfolgen und Zahlen

```js
"5" < 3; // false
"3" < 3; // false
"3" < 5; // true

"hello" < 5; // false
5 < "hello"; // false

"5" < 3n; // false
"3" < 5n; // true
```

### Vergleich von Zahlen

```js
5 < 3; // false
3 < 3; // false
3 < 5; // true
```

### Vergleich von Zahlen und BigInt

```js
5n < 3; // false
3 < 5n; // true
```

### Vergleich von Booleschen Werten, null, undefined, NaN

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

### Vergleich mit Seiteneffekten

Vergleiche wandeln immer ihre Operanden zu Primitiven um. Das bedeutet, dass dasselbe Objekt innerhalb eines Vergleichsausdrucks unterschiedliche Werte haben kann. Zum Beispiel können Sie zwei Werte haben, bei denen jeder größer und kleiner als der andere ist.

```js
class Mystery {
  static #coercionCount = -1;
  valueOf() {
    Mystery.#coercionCount++;
    // Der linke Operand wird zuerst umgewandelt, daher wird dies 0 zurückgeben
    // Dann gibt es für den rechten Operand 1 zurück
    return Mystery.#coercionCount % 2;
  }
}

const l = new Mystery();
const r = new Mystery();
console.log(l < r && r < l);
// true
```

> [!WARNING]
> Dies kann eine Quelle der Verwirrung sein. Wenn Ihre Objekte benutzerdefinierte Logik zur Umwandlung in Primitive bereitstellen, stellen Sie sicher, dass sie _idempotent_ ist: Mehrfache Umwandlungen sollten denselben Wert zurückgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Größer als (`>`)](/de/docs/Web/JavaScript/Reference/Operators/Greater_than)
- [Größer oder gleich (`>=`)](/de/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [Kleiner oder gleich (`<=`)](/de/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
