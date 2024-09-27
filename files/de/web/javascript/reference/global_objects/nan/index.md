---
title: NaN
slug: Web/JavaScript/Reference/Global_Objects/NaN
l10n:
  sourceCommit: 915c9519f3cca1c616c2f554d5ad9e1483bbb170
---

{{jsSidebar("Objects")}}

Die **`NaN`**-Globaleigenschaft ist ein Wert, der "Not-A-Number" repräsentiert.

{{EmbedInteractiveExample("pages/js/globalprops-nan.html")}}

## Wert

Der gleiche Zahlenwert wie {{jsxref("Number.NaN")}}.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

`NaN` ist eine Eigenschaft des _globalen Objekts_. Mit anderen Worten, es ist eine Variable im globalen Gültigkeitsbereich.

In modernen Browsern ist `NaN` eine nicht konfigurierbare und unveränderliche Eigenschaft. Auch wenn dies nicht der Fall ist, sollte eine Überschreibung vermieden werden.

Es gibt fünf verschiedene Arten von Operationen, die `NaN` zurückgeben:

- Fehlgeschlagene Zahlenumwandlung (z.B. explizite wie `parseInt("blabla")`, `Number(undefined)` oder implizite wie `Math.abs(undefined)`)
- Mathematische Operationen, bei denen das Ergebnis keine reale Zahl ist (z.B. `Math.sqrt(-1)`)
- Unbestimmte Form (z.B. `0 * Infinity`, `1 ** Infinity`, `Infinity / Infinity`, `Infinity - Infinity`)
- Eine Methode oder ein Ausdruck, dessen Operand `NaN` ist oder in `NaN` umgewandelt wird (z.B. `7 ** NaN`, `7 * "blabla"`) — das bedeutet, `NaN` ist ansteckend
- Andere Fälle, in denen ein ungültiger Wert als Zahl dargestellt werden soll (z.B. ein ungültiges [Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) `new Date("blabla").getTime()`, `"".charCodeAt(1)`)

`NaN` und sein Verhalten wurden nicht von JavaScript erfunden. Seine Semantik in der Fließkommaarithmetik (einschließlich dass `NaN !== NaN`) wird von [IEEE 754](https://de.wikipedia.org/wiki/Double_precision_floating-point_format) spezifiziert. Zu den Verhaltensweisen von `NaN` gehören:

- Wenn `NaN` an einer mathematischen Operation beteiligt ist (aber nicht bei [bitweise Operationen](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators)), ist das Ergebnis normalerweise ebenfalls `NaN`. (Siehe [Gegenbeispiel](#still_entweichende_nan) unten.)
- Wenn `NaN` einer der Operanden eines relationalen Vergleichs (`>`, `<`, `>=`, `<=`) ist, ist das Ergebnis immer `false`.
- `NaN` vergleicht ungleich (über [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality), [`!=`](/de/docs/Web/JavaScript/Reference/Operators/Inequality), [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) und [`!==`](/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality)) mit einem anderen Wert — einschließlich eines anderen `NaN`-Wertes.

`NaN` ist auch einer der [falsy](/de/docs/Glossary/Falsy) Werte in JavaScript.

## Beispiele

### Testen gegen NaN

Um zu bestimmen, ob ein Wert `NaN` ist, verwenden Sie {{jsxref("Number.isNaN()")}} oder {{jsxref("isNaN()")}}, um am klarsten festzustellen, ob ein Wert `NaN` ist — oder, da `NaN` der einzige Wert ist, der ungleich zu sich selbst vergleicht, können Sie einen Selbstvergleich wie `x !== x` ausführen.

```js
NaN === NaN; // false
Number.NaN === NaN; // false
isNaN(NaN); // true
isNaN(Number.NaN); // true
Number.isNaN(NaN); // true

function valueIsNaN(v) {
  return v !== v;
}
valueIsNaN(1); // false
valueIsNaN(NaN); // true
valueIsNaN(Number.NaN); // true
```

Beachten Sie jedoch den Unterschied zwischen `isNaN()` und `Number.isNaN()`: Ersteres gibt `true` zurück, wenn der Wert derzeit `NaN` ist oder wenn er `NaN` sein wird, nachdem er in eine Zahl umgewandelt wurde, während Letzteres `true` nur zurückgibt, wenn der Wert derzeit `NaN` ist:

```js
isNaN("hello world"); // true
Number.isNaN("hello world"); // false
```

Aus dem gleichen Grund führt die Verwendung eines BigInt-Wertes zu einem Fehler bei `isNaN()` und nicht bei `Number.isNaN()`:

```js
isNaN(1n); // TypeError: Conversion from 'BigInt' to 'number' is not allowed.
Number.isNaN(1n); // false
```

Zusätzlich können einige Array-Methoden `NaN` nicht finden, während andere dies können. Insbesondere die Methoden zur Indexfindung ({{jsxref("Array/indexOf", "indexOf()")}}, {{jsxref("Array/lastIndexOf", "lastIndexOf()")}}) können `NaN` nicht finden, während die Methoden zur Wertfindung ({{jsxref("Array/includes", "includes()")}}) dies können:

```js
const arr = [2, 4, NaN, 12];
arr.indexOf(NaN); // -1
arr.includes(NaN); // true

// Methods accepting a properly defined predicate can always find NaN
arr.findIndex((n) => Number.isNaN(n)); // 2
```

Weitere Informationen zu `NaN` und dessen Vergleich finden Sie unter [Gleichheitsvergleich und Gleichheit](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness).

### Beobachtbar unterschiedliche NaN-Werte

Es ist möglich, zwei Fließkommazahlen mit unterschiedlichen Binärdarstellungen, die beide `NaN` sind, zu erzeugen, da in der [IEEE 754 Kodierung](https://de.wikipedia.org/wiki/NaN#Floating_point) jede Fließkommazahl mit Exponent `0x7ff` und einer ungleich Null Mantisse `NaN` ist. In JavaScript können Sie Bitmanipulationen mit [Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) durchführen.

```js
const f2b = (x) => new Uint8Array(new Float64Array([x]).buffer);
const b2f = (x) => new Float64Array(x.buffer)[0];
// Get a byte representation of NaN
const n = f2b(NaN);
const m = f2b(NaN);
// Change the sign bit, which doesn't matter for NaN
n[7] += 2 ** 7;
// n[0] += 2**7; for big endian processors
const nan2 = b2f(n);
console.log(nan2); // NaN
console.log(Object.is(nan2, NaN)); // true
console.log(f2b(NaN)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 127]
console.log(f2b(nan2)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 255]
// Change the first bit, which is the least significant bit of the mantissa and doesn't matter for NaN
m[0] = 1;
// m[7] = 1; for big endian processors
const nan3 = b2f(m);
console.log(nan3); // NaN
console.log(Object.is(nan3, NaN)); // true
console.log(f2b(NaN)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 127]
console.log(f2b(nan3)); // Uint8Array(8) [1, 0, 0, 0, 0, 0, 248, 127]
```

### Still entweichende NaN

`NaN` propagiert durch mathematische Operationen, daher ist es normalerweise ausreichend, `NaN` einmal am Ende der Berechnung zu testen, um Fehlerbedingungen zu erkennen. Der einzige Fall, in dem `NaN` still entweicht, ist bei der Verwendung der [Exponentiation](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation) mit einem Exponenten von `0`, der sofort `1` zurückgibt, ohne den Wert der Basis zu testen.

```js
NaN ** 0 === 1; // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Number.NaN")}}
- {{jsxref("Number.isNaN()")}}
- {{jsxref("isNaN()")}}
