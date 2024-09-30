---
title: NaN
slug: Web/JavaScript/Reference/Global_Objects/NaN
l10n:
  sourceCommit: 915c9519f3cca1c616c2f554d5ad9e1483bbb170
---

{{jsSidebar("Objects")}}

Die **`NaN`** globale Eigenschaft ist ein Wert, der Nicht-eine-Nummer repräsentiert.

{{EmbedInteractiveExample("pages/js/globalprops-nan.html")}}

## Wert

Der gleiche Zahlenwert wie {{jsxref("Number.NaN")}}.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

`NaN` ist eine Eigenschaft des _globalen Objekts_. Mit anderen Worten, es ist eine Variable im globalen Gültigkeitsbereich.

In modernen Browsern ist `NaN` eine nicht konfigurierbare, nicht beschreibbare Eigenschaft. Auch wenn das nicht der Fall ist, vermeiden Sie es, sie zu überschreiben.

Es gibt fünf verschiedene Arten von Operationen, die `NaN` zurückgeben:

- Fehlgeschlagene Zahlenkonvertierung (z. B. explizit wie `parseInt("blabla")`, `Number(undefined)`, oder implizit wie `Math.abs(undefined)`)
- Mathematische Operationen, bei denen das Ergebnis keine reelle Zahl ist (z. B. `Math.sqrt(-1)`)
- Unbestimmte Form (z. B. `0 * Infinity`, `1 ** Infinity`, `Infinity / Infinity`, `Infinity - Infinity`)
- Eine Methode oder ein Ausdruck, dessen Operand `NaN` ist oder zu `NaN` gezwungen wird (z. B. `7 ** NaN`, `7 * "blabla"`) — das bedeutet, `NaN` ist ansteckend
- Andere Fälle, in denen ein ungültiger Wert als Zahl dargestellt werden soll (z. B. ein ungültiges [Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) `new Date("blabla").getTime()`, `"".charCodeAt(1)`)

`NaN` und sein Verhalten wurden nicht von JavaScript erfunden. Seine Semantik in der Gleitkommaarithmetik (einschließlich, dass `NaN !== NaN`) wird von [IEEE 754](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) spezifiziert. Zu den Verhaltensweisen von `NaN` gehören:

- Wenn `NaN` an einer mathematischen Operation beteiligt ist (aber nicht an [bitweisen Operationen](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators)), ist das Ergebnis normalerweise auch `NaN`. (Siehe [Gegenbeispiel](#stilles_entkommen_von_nan) unten.)
- Wenn `NaN` einer der Operanden eines relationalen Vergleichs (`>`, `<`, `>=`, `<=`) ist, ist das Ergebnis immer `false`.
- `NaN` wird bei Vergleichen (mit [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality), [`!=`](/de/docs/Web/JavaScript/Reference/Operators/Inequality), [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality), und [`!==`](/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality)) zu jedem anderen Wert ungleich bewertet — einschließlich einem anderen `NaN` Wert.

`NaN` ist auch einer der [falsy](/de/docs/Glossary/Falsy) Werte in JavaScript.

## Beispiele

### Testen auf NaN

Um festzustellen, ob ein Wert `NaN` ist, verwenden Sie {{jsxref("Number.isNaN()")}} oder {{jsxref("isNaN()")}}, um am klarsten zu bestimmen, ob ein Wert `NaN` ist — oder, da `NaN` der einzige Wert ist, der ungleich zu sich selbst ist, Sie können einen Selbstvergleich wie `x !== x` durchführen.

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

Beachten Sie jedoch den Unterschied zwischen `isNaN()` und `Number.isNaN()`: Ersteres gibt `true` zurück, wenn der Wert derzeit `NaN` ist, oder wenn er `NaN` sein wird, nachdem er zu einer Zahl gezwungen wurde, während Letzteres `true` nur zurückgibt, wenn der Wert derzeit `NaN` ist:

```js
isNaN("hello world"); // true
Number.isNaN("hello world"); // false
```

Aus demselben Grund wird bei Verwendung eines BigInt-Werts ein Fehler mit `isNaN()` ausgelöst und nicht mit `Number.isNaN()`:

```js
isNaN(1n); // TypeError: Conversion from 'BigInt' to 'number' is not allowed.
Number.isNaN(1n); // false
```

Zusätzlich können einige Array-Methoden `NaN` nicht finden, während andere dies können. Nämlich, die Index-finden-Methoden ({{jsxref("Array/indexOf", "indexOf()")}}, {{jsxref("Array/lastIndexOf", "lastIndexOf()")}}) können `NaN` nicht finden, während die Wert-finden-Methoden ({{jsxref("Array/includes", "includes()")}}) dies können:

```js
const arr = [2, 4, NaN, 12];
arr.indexOf(NaN); // -1
arr.includes(NaN); // true

// Methods accepting a properly defined predicate can always find NaN
arr.findIndex((n) => Number.isNaN(n)); // 2
```

Für weitere Informationen über `NaN` und dessen Vergleich, siehe [Vergleich auf Gleichheit und Gleichartigkeit](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness).

### Sichtbar unterschiedliche NaN-Werte

Es ist möglich, zwei Gleitkommazahlen mit unterschiedlichen Binärdarstellungen zu erzeugen, die beide `NaN` sind, da in [IEEE 754-Codierung](https://en.wikipedia.org/wiki/NaN#Floating_point) jede Gleitkommazahl mit dem Exponenten `0x7ff` und einer nicht-null Mantisse `NaN` ist. In JavaScript können Sie bitweise Manipulation mit [typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) durchführen.

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

### Stilles Entkommen von NaN

`NaN` pflanzt sich durch mathematische Operationen fort, daher reicht es normalerweise aus, einmal am Ende der Berechnung auf `NaN` zu testen, um Fehlerbedingungen zu erkennen. Der einzige Fall, in dem `NaN` stillschweigend entkommt, ist bei Verwendung der [Exponentiation](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation) mit einem Exponenten von `0`, die sofort `1` zurückgibt, ohne den Basiswert zu testen.

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
