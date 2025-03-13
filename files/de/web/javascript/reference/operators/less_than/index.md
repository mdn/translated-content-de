---
title: Kleiner als (<)
slug: Web/JavaScript/Reference/Operators/Less_than
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **Kleiner als (`<`)** Operator gibt `true` zurück, wenn der linke Operand kleiner ist als der rechte Operand, und `false` andernfalls.

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

Die Operanden werden mit mehreren Runden der Typumwandlung verglichen, was wie folgt zusammengefasst werden kann:

- Zuerst werden Objekte [in Primitive konvertiert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) durch Aufrufen ihrer Methoden [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit dem Hinweis `"number"`), [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) und [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString), in der genannten Reihenfolge. Der linke Operand wird immer vor dem rechten umgewandelt. Beachten Sie, dass obwohl `[Symbol.toPrimitive]()` mit dem Hinweis `"number"` aufgerufen wird (was bedeutet, dass eine leichte Präferenz besteht, dass das Objekt zu einer Zahl wird), der Rückgabewert nicht [in eine Zahl konvertiert wird](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), da Strings weiterhin speziell behandelt werden.
- Wenn beide Werte Strings sind, werden sie als Strings verglichen, basierend auf den Werten der UTF-16-Code-Einheiten (nicht Unicode-Codepunkte), die sie enthalten.
- Andernfalls versucht JavaScript, nicht-numerische Typen in numerische Werte zu konvertieren:
  - Boolean-Werte `true` und `false` werden zu 1 bzw. 0 konvertiert.
  - `null` wird zu 0 konvertiert.
  - `undefined` wird zu `NaN` konvertiert.
  - Strings werden basierend auf den Werten, die sie enthalten, konvertiert und als `NaN` konvertiert, wenn sie keine numerischen Werte enthalten.
- Wenn einer der Werte [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) ist, gibt der Operator `false` zurück.
- Andernfalls werden die Werte als numerische Werte verglichen. BigInt- und Zahl-Werte können zusammen verglichen werden.

Andere Operatoren, einschließlich [`>`](/de/docs/Web/JavaScript/Reference/Operators/Greater_than), [`>=`](/de/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal), und [`<=`](/de/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal), verwenden denselben Algorithmus wie `<`. Es gibt zwei Fälle, in denen alle vier Operatoren `false` zurückgeben:

- Wenn einer der Operanden in einen BigInt konvertiert wird, während der andere in einen String konvertiert wird, der nicht in einen BigInt-Wert konvertiert werden kann (es wird ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax) ausgelöst, wenn er an [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) übergeben wird).
- Wenn einer der Operanden in `NaN` konvertiert wird. (Zum Beispiel Strings, die nicht in Zahlen konvertiert werden können, oder `undefined`.)

In allen anderen Fällen haben die vier Operatoren die folgenden Beziehungen:

```js
x < y === !(x >= y);
x <= y === !(x > y);
x > y === y < x;
x >= y === y <= x;
```

> [!NOTE]
> Ein beobachtbarer Unterschied zwischen `<` und `>` ist die Reihenfolge der Typumwandlung, insbesondere wenn die Umwandlung in ein Primärwert Nebeneffekte hat. Alle Vergleichsoperatoren wandeln den linken Operanden vor dem rechten um.

## Beispiele

### String-zu-String-Vergleich

```js
"a" < "b"; // true
"a" < "a"; // false
"a" < "3"; // false

"\uD855\uDE51" < "\uFF3A"; // true
```

### String-zu-Zahl-Vergleich

```js
"5" < 3; // false
"3" < 3; // false
"3" < 5; // true

"hello" < 5; // false
5 < "hello"; // false

"5" < 3n; // false
"3" < 5n; // true
```

### Zahl-zu-Zahl-Vergleich

```js
5 < 3; // false
3 < 3; // false
3 < 5; // true
```

### Zahl-zu-BigInt-Vergleich

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

Vergleiche wandeln ihre Operanden immer in Primitive um. Dies bedeutet, dass dasselbe Objekt innerhalb eines Vergleichsausdrucks unterschiedliche Werte haben kann. Zum Beispiel können Sie zwei Werte haben, die beide größer und kleiner als der andere sind.

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
> Dies kann eine Quelle der Verwirrung sein. Wenn Ihre Objekte benutzerdefinierte Logik für die Umwandlung in Primärwerte bereitstellen, stellen Sie sicher, dass diese _idempotent_ ist: Mehrfache Umwandlungen sollten denselben Wert zurückgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Größer als (`>`)](/de/docs/Web/JavaScript/Reference/Operators/Greater_than)
- [Größer als oder gleich (`>=`)](/de/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [Kleiner als oder gleich (`<=`)](/de/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
