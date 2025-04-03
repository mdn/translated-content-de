---
title: NaN
slug: Web/JavaScript/Reference/Global_Objects/NaN
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("Objects")}}

Die globale Eigenschaft **`NaN`** ist ein Wert, der Nicht-eine-Zahl (Not-A-Number) darstellt.

{{InteractiveExample("JavaScript Demo: NaN")}}

```js interactive-example
function sanitize(x) {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}

console.log(sanitize("1"));
// Expected output: "1"

console.log(sanitize("NotANumber"));
// Expected output: NaN
```

## Wert

Der gleiche Zahlenwert wie {{jsxref("Number.NaN")}}.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

`NaN` ist eine Eigenschaft des _globalen Objekts_. Mit anderen Worten, es ist eine Variable im globalen Gültigkeitsbereich.

In modernen Browsern ist `NaN` eine nicht konfigurierbare, nicht schreibbare Eigenschaft. Auch wenn dies nicht der Fall ist, sollten Sie es vermeiden, sie zu überschreiben.

Es gibt fünf verschiedene Arten von Operationen, die `NaN` zurückgeben:

- Fehlgeschlagene Zahlenkonvertierung (z.B. explizite wie `parseInt("blabla")`, `Number(undefined)` oder implizite wie `Math.abs(undefined)`)
- Mathematische Operation, bei der das Ergebnis keine reelle Zahl ist (z.B. `Math.sqrt(-1)`)
- Unbestimmte Form (z.B. `0 * Infinity`, `1 ** Infinity`, `Infinity / Infinity`, `Infinity - Infinity`)
- Eine Methode oder ein Ausdruck, dessen Operanden `NaN` sind oder zu `NaN` umgewandelt werden (z.B. `7 ** NaN`, `7 * "blabla"`) — das bedeutet, `NaN` ist ansteckend
- Andere Fälle, wo ein ungültiger Wert als Zahl dargestellt werden soll (z.B. ein ungültiges [Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) `new Date("blabla").getTime()`, `"".charCodeAt(1)`)

`NaN` und sein Verhalten wurden nicht von JavaScript erfunden. Seine Semantik in der Gleitkommaarithmetik (einschließlich, dass `NaN !== NaN`) wird von [IEEE 754](https://de.wikipedia.org/wiki/Gleitkommazahl) spezifiziert. Zu den Verhaltensweisen von `NaN` gehören:

- Wenn `NaN` in eine mathematische Operation involviert ist (aber nicht in [bitweise Operationen](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators)), ist das Ergebnis normalerweise auch `NaN`. (Siehe [Gegenbeispiel](#stillschweigendes_entkommen_von_nan) unten.)
- Wenn `NaN` einer der Operanden eines relationalen Vergleichs (`>`, `<`, `>=`, `<=`) ist, ist das Ergebnis immer `false`.
- `NaN` vergleicht ungleich (via [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality), [`!=`](/de/docs/Web/JavaScript/Reference/Operators/Inequality), [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) und [`!==`](/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality)) mit jedem anderen Wert — einschließlich eines anderen `NaN`-Werts.

`NaN` ist auch einer der {{Glossary("Falsy", "Falsy")}} Werte in JavaScript.

## Beispiele

### Testen gegen NaN

Um festzustellen, ob ein Wert `NaN` ist, verwenden Sie {{jsxref("Number.isNaN()")}} oder {{jsxref("isNaN()")}}, um am klarsten zu bestimmen, ob ein Wert `NaN` ist — oder, da `NaN` der einzige Wert ist, der ungleich zu sich selbst ist, können Sie einen Selbstvergleich wie `x !== x` durchführen.

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

Beachten Sie jedoch den Unterschied zwischen `isNaN()` und `Number.isNaN()`: Ersteres gibt `true` zurück, wenn der Wert derzeit `NaN` ist oder wenn er zu `NaN` wird, nachdem er zu einer Zahl umgewandelt wurde, während letzteres nur `true` zurückgibt, wenn der Wert derzeit `NaN` ist:

```js
isNaN("hello world"); // true
Number.isNaN("hello world"); // false
```

Aus dem gleichen Grund wird die Verwendung eines BigInt-Werts mit `isNaN()` einen Fehler auslösen, jedoch nicht mit `Number.isNaN()`:

```js
isNaN(1n); // TypeError: Conversion from 'BigInt' to 'number' is not allowed.
Number.isNaN(1n); // false
```

Darüber hinaus können einige Array-Methoden `NaN` nicht finden, während andere dies können. Namentlich können die Index-finden-Methoden ({{jsxref("Array/indexOf", "indexOf()")}}, {{jsxref("Array/lastIndexOf", "lastIndexOf()")}}) `NaN` nicht finden, während die Wert-finden-Methoden ({{jsxref("Array/includes", "includes()")}}) dies können:

```js
const arr = [2, 4, NaN, 12];
arr.indexOf(NaN); // -1
arr.includes(NaN); // true

// Methods accepting a properly defined predicate can always find NaN
arr.findIndex((n) => Number.isNaN(n)); // 2
```

Weitere Informationen zu `NaN` und dessen Vergleich finden Sie unter [Gleichheitsvergleich und Gleichheit](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness).

### Beobachtbar unterschiedliche NaN-Werte

Es ist möglich, zwei Gleitkommazahlen mit unterschiedlichen binären Repräsentationen zu erzeugen, die beide `NaN` sind, da in [IEEE 754 Encoding](https://de.wikipedia.org/wiki/NaN#Gleitkomma) jede Gleitkommazahl mit Exponent `0x7ff` und einer nicht nullen Mantisse `NaN` ist. In JavaScript können Sie Bit-Level-Manipulationen mit [typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) durchführen.

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

### Stillschweigendes Entkommen von NaN

`NaN` wird durch mathematische Operationen weitergereicht, sodass es normalerweise ausreicht, am Ende der Berechnung einmal auf `NaN` zu testen, um Fehlerbedingungen zu erkennen. Der einzige Fall, in dem `NaN` stillschweigend entkommt, ist die Verwendung der [Potenzierung](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation) mit einem Exponenten von `0`, die sofort `1` zurückgibt, ohne den Basiswert zu überprüfen.

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
