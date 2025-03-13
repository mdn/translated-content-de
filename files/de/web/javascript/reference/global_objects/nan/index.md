---
title: NaN
slug: Web/JavaScript/Reference/Global_Objects/NaN
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Objects")}}

Die **`NaN`** globale Eigenschaft repräsentiert einen Wert, der "Nicht-eine-Nummer" darstellt.

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

In modernen Browsern ist `NaN` eine nicht konfigurierbare, nicht beschreibbare Eigenschaft. Selbst wenn dies nicht der Fall ist, vermeiden Sie es, sie zu überschreiben.

Es gibt fünf unterschiedliche Arten von Operationen, die `NaN` zurückgeben:

- Fehlgeschlagene Zahlenumwandlung (z.B. explizite wie `parseInt("blabla")`, `Number(undefined)`, oder implizite wie `Math.abs(undefined)`)
- Mathematische Operation, bei der das Ergebnis keine reale Zahl ist (z.B. `Math.sqrt(-1)`)
- Unbestimmte Form (z.B. `0 * Infinity`, `1 ** Infinity`, `Infinity / Infinity`, `Infinity - Infinity`)
- Eine Methode oder ein Ausdruck, dessen Operanden `NaN` sind oder zu `NaN` gezwungen werden (z.B. `7 ** NaN`, `7 * "blabla"`) — das bedeutet, dass `NaN` ansteckend ist
- Andere Fälle, in denen ein ungültiger Wert als Zahl dargestellt werden soll (z.B. ein ungültiges [Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) `new Date("blabla").getTime()`, `"".charCodeAt(1)`)

`NaN` und dessen Verhaltensweisen wurden nicht von JavaScript erfunden. Seine Semantik in Fließkommaarithmetik (einschließlich, dass `NaN !== NaN`) ist durch [IEEE 754](https://de.wikipedia.org/wiki/IEEE_754) spezifiziert. Zu den Verhaltensweisen von `NaN` zählen:

- Wenn `NaN` an einer mathematischen Operation beteiligt ist (nicht aber bei [bitweisen Operationen](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators)), ist das Ergebnis in der Regel auch `NaN`. (Siehe [Gegenbeispiel](#still_entkommendes_nan) unten.)
- Wenn `NaN` einer der Operanden eines beliebigen Vergleichs ist (`>`, `<`, `>=`, `<=`), ist das Ergebnis immer `false`.
- `NaN` vergleicht sich ungleich (über [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality), [`!=`](/de/docs/Web/JavaScript/Reference/Operators/Inequality), [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality), und [`!==`](/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality)) mit jedem anderen Wert — einschließlich einem anderen `NaN`-Wert.

`NaN` ist auch einer der {{Glossary("Falsy", "falsy")}} Werte in JavaScript.

## Beispiele

### Testen gegen NaN

Um festzustellen, ob ein Wert `NaN` ist, verwenden Sie {{jsxref("Number.isNaN()")}} oder {{jsxref("isNaN()")}}, um am klarsten zu bestimmen, ob ein Wert `NaN` ist — oder, da `NaN` der einzige Wert ist, der sich selbst ungleich ist, können Sie einen Selbstvergleich wie `x !== x` durchführen.

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

Beachten Sie jedoch den Unterschied zwischen `isNaN()` und `Number.isNaN()`: Erstere gibt `true` zurück, wenn der Wert derzeit `NaN` ist oder `NaN` wird, nachdem er in eine Zahl umgewandelt wurde, während Letztere nur `true` zurückgibt, wenn der Wert derzeit `NaN` ist:

```js
isNaN("hello world"); // true
Number.isNaN("hello world"); // false
```

Aus demselben Grund wird die Verwendung eines `BigInt`-Wertes mit `isNaN()` einen Fehler werfen, nicht jedoch mit `Number.isNaN()`:

```js
isNaN(1n); // TypeError: Conversion from 'BigInt' to 'number' is not allowed.
Number.isNaN(1n); // false
```

Zusätzlich können einige Array-Methoden `NaN` nicht finden, während andere dies können. Nämlich die Indexsuchmethoden ({{jsxref("Array/indexOf", "indexOf()")}}, {{jsxref("Array/lastIndexOf", "lastIndexOf()")}}) können `NaN` nicht finden, während die Wertsuchmethoden ({{jsxref("Array/includes", "includes()")}}) dies können:

```js
const arr = [2, 4, NaN, 12];
arr.indexOf(NaN); // -1
arr.includes(NaN); // true

// Methods accepting a properly defined predicate can always find NaN
arr.findIndex((n) => Number.isNaN(n)); // 2
```

Für weitere Informationen über `NaN` und seinen Vergleich siehe [Gleichheitsvergleich und Gleichheit](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness).

### Sichtbar unterschiedliche NaN-Werte

Es ist möglich, zwei Fließkommazahlen mit unterschiedlichen binären Darstellungen zu erzeugen, die beide `NaN` sind, denn in [IEEE 754 Kodierung](https://de.wikipedia.org/wiki/Nicht_eine_Zahl#Flie%C3%9Fkomma) ist jede Fließkommazahl mit dem Exponenten `0x7ff` und einer nicht null Mantisse `NaN`. In JavaScript können Sie Bit-Level-Manipulationen mit [typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) durchführen.

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

### Still entkommendes NaN

`NaN` breitet sich durch mathematische Operationen aus, daher reicht es normalerweise aus, am Ende einer Berechnung auf `NaN` zu prüfen, um Fehlerzustände zu erkennen. Der einzige Fall, in dem `NaN` still entkommt, ist die Verwendung der [Exponential-Operator](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation) mit einem Exponenten von `0`, welcher sofort `1` zurückgibt, ohne den Wert der Basis zu überprüfen.

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
