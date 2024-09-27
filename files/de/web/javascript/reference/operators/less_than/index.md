---
title: Weniger als (<)
slug: Web/JavaScript/Reference/Operators/Less_than
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Der **Weniger als (`<`)**-Operator gibt `true` zurück, wenn der linke Operand kleiner als der rechte Operand ist, und `false` andernfalls.

{{EmbedInteractiveExample("pages/js/expressions-less-than.html")}}

## Syntax

```js-nolint
x < y
```

## Beschreibung

Die Operanden werden mit mehreren Runden der Konvertierung verglichen, die wie folgt zusammengefasst werden können:

- Zuerst werden Objekte [in Primitive konvertiert](/de/docs/Web/JavaScript/Data_structures#primitive_coercion), indem ihre Methoden [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"number"` als Hinweis), [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) und [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) in dieser Reihenfolge aufgerufen werden. Der linke Operand wird immer vor dem rechten umgewandelt. Beachten Sie, dass obwohl `[Symbol.toPrimitive]()` mit dem Hinweis `"number"` aufgerufen wird (was bedeutet, dass eine leichte Präferenz dafür besteht, dass das Objekt eine Zahl wird), der Rückgabewert nicht [in eine Zahl umgewandelt wird](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), da Zeichenfolgen weiterhin speziell behandelt werden.
- Wenn beide Werte Zeichenfolgen sind, werden sie als Zeichenfolgen verglichen, basierend auf den Werten der UTF-16-Codeeinheiten (nicht Unicode-Codepunkte), die sie enthalten.
- Andernfalls versucht JavaScript, nicht-numerische Typen in numerische Werte zu konvertieren:
  - Boolesche Werte `true` und `false` werden in 1 bzw. 0 umgewandelt.
  - `null` wird in 0 umgewandelt.
  - `undefined` wird in `NaN` umgewandelt.
  - Zeichenfolgen werden basierend auf den von ihnen enthaltenen Werten umgewandelt und als `NaN` umgewandelt, wenn sie keine numerischen Werte enthalten.
- Wenn einer der Werte [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) ist, gibt der Operator `false` zurück.
- Ansonsten werden die Werte als numerische Werte verglichen. BigInt- und Zahlwerte können zusammen verglichen werden.

Andere Operatoren, einschließlich [`>`](/de/docs/Web/JavaScript/Reference/Operators/Greater_than), [`>=`](/de/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal) und [`<=`](/de/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal), verwenden denselben Algorithmus wie `<`. Es gibt zwei Fälle, in denen alle vier Operatoren `false` zurückgeben:

- Wenn einer der Operanden in ein BigInt umgewandelt wird, während der andere in eine Zeichenfolge umgewandelt wird, die nicht in einen BigInt-Wert konvertiert werden kann (er löst einen [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax) aus, wenn er an [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) übergeben wird).
- Wenn einer der Operanden in `NaN` umgewandelt wird. (Zum Beispiel Zeichenfolgen, die nicht in Zahlen umgewandelt werden können, oder `undefined`.)

In allen anderen Fällen haben die vier Operatoren folgende Beziehungen:

```js
x < y === !(x >= y);
x <= y === !(x > y);
x > y === y < x;
x >= y === y <= x;
```

> [!NOTE]
> Ein beobachtbarer Unterschied zwischen `<` und `>` ist die Reihenfolge der Umwandlung, insbesondere wenn die Umwandlung in ein primitives Element Nebeneffekte hat. Alle Vergleichsoperatoren wandeln den linken Operanden vor dem rechten um.

## Beispiele

### Vergleich von Zeichenfolge zu Zeichenfolge

```js
"a" < "b"; // true
"a" < "a"; // false
"a" < "3"; // false

"\uD855\uDE51" < "\uFF3A"; // true
```

### Vergleich von Zeichenfolge zu Zahl

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

Vergleiche zwingen immer ihre Operanden in Primitive um. Dies bedeutet, dass dasselbe Objekt innerhalb eines Vergleichsausdrucks möglicherweise unterschiedliche Werte haben kann. Beispielsweise können Sie zwei Werte haben, die beide größer und kleiner als der andere sind.

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
> Dies kann eine Quelle der Verwirrung sein. Wenn Ihre Objekte benutzerdefinierte Logik zur primitiven Konvertierung bereitstellen, stellen Sie sicher, dass sie _idempotent_ ist: mehrere Umwandlungen sollten denselben Wert zurückgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Größer als (`>`)](/de/docs/Web/JavaScript/Reference/Operators/Greater_than)
- [Größer als oder gleich (`>=`)](/de/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [Kleiner als oder gleich (`<=`)](/de/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
