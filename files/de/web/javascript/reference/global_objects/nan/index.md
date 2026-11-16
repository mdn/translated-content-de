---
title: NaN
slug: Web/JavaScript/Reference/Global_Objects/NaN
l10n:
  sourceCommit: 0c3c464abb1422b0534a5e3f5e81e9bbae13544c
---

Die globale Eigenschaft **`NaN`** ist ein Wert, der „Not-A-Number“ (keine Zahl) repräsentiert.

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

Derselbe Zahlenwert wie {{jsxref("Number.NaN")}}.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

`NaN` ist eine Eigenschaft des _globalen Objekts_. Anders ausgedrückt: Es ist eine Variable im globalen Gültigkeitsbereich.

In modernen Browsern ist `NaN` eine nicht konfigurierbare, schreibgeschützte Eigenschaft. Auch wenn das nicht der Fall ist, sollten Sie sie nicht überschreiben.

Fünf verschiedene Arten von Operationen geben `NaN` zurück:

- Fehlgeschlagene Umwandlungen in eine Zahl (z. B. explizite Umwandlungen wie `parseInt("blabla")` oder `Number(undefined)` sowie implizite Umwandlungen wie `Math.abs(undefined)`)
- Mathematische Operationen, deren Ergebnis keine reelle Zahl ist (z. B. `Math.sqrt(-1)`)
- Unbestimmte Ausdrücke (z. B. `0 * Infinity`, `1 ** Infinity`, `Infinity / Infinity`, `Infinity - Infinity`)
- Methoden oder Ausdrücke, deren Operand `NaN` ist oder in `NaN` umgewandelt wird (z. B. `7 ** NaN`, `7 * "blabla"`) – das bedeutet, dass sich `NaN` weiterverbreitet
- Andere Fälle, in denen ein ungültiger Wert als Zahl dargestellt werden soll (z. B. das Ergebnis von `new Date("blabla").getTime()` für ein ungültiges [Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) oder von `"".charCodeAt(1)`)

`NaN` und sein Verhalten wurden nicht von JavaScript erfunden. Seine Semantik in der Gleitkommaarithmetik (einschließlich `NaN !== NaN`) ist durch [IEEE 754](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) festgelegt. Für `NaN` gilt unter anderem:

- Wenn `NaN` an einer mathematischen Operation beteiligt ist (außer an [bitweisen Operationen](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators)), ist das Ergebnis normalerweise ebenfalls `NaN`. (Siehe das [Gegenbeispiel](#wenn_sich_nan_unbemerkt_nicht_weiterverbreitet) unten.)
- Wenn `NaN` einer der Operanden eines relationalen Vergleichs (`>`, `<`, `>=`, `<=`) ist, ist das Ergebnis immer `false`.
- `NaN` wird bei Vergleichen mit [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality), [`!=`](/de/docs/Web/JavaScript/Reference/Operators/Inequality), [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) und [`!==`](/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality) als ungleich zu jedem anderen Wert bewertet – auch zu einem anderen `NaN`-Wert.

`NaN` gehört in JavaScript außerdem zu den {{Glossary("Falsy", "falsy")}}-Werten.

## Beispiele

### Auf NaN prüfen

Um festzustellen, ob ein Wert `NaN` ist, verwenden Sie am besten {{jsxref("Number.isNaN()")}} oder {{jsxref("isNaN()")}}. Da `NaN` der einzige Wert ist, der im Vergleich mit sich selbst als ungleich bewertet wird, können Sie auch einen Selbstvergleich wie `x !== x` durchführen.

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

Beachten Sie jedoch den Unterschied zwischen `isNaN()` und `Number.isNaN()`: Ersteres gibt `true` zurück, wenn der Wert bereits `NaN` ist oder nach der Umwandlung in eine Zahl `NaN` wäre. Letzteres gibt nur dann `true` zurück, wenn der Wert bereits `NaN` ist:

```js
isNaN("hello world"); // true
Number.isNaN("hello world"); // false
```

Aus demselben Grund führt ein BigInt-Wert bei `isNaN()` zu einem Fehler, bei `Number.isNaN()` hingegen nicht:

```js
isNaN(1n); // TypeError: Conversion from 'BigInt' to 'number' is not allowed.
Number.isNaN(1n); // false
```

Außerdem können manche Array-Methoden `NaN` nicht finden, andere dagegen schon. Die Methoden zur Indexsuche ({{jsxref("Array/indexOf", "indexOf()")}}, {{jsxref("Array/lastIndexOf", "lastIndexOf()")}}) können `NaN` nicht finden, die Methode zur Wertsuche ({{jsxref("Array/includes", "includes()")}}) hingegen schon:

```js
const arr = [2, 4, NaN, 12];
arr.indexOf(NaN); // -1
arr.includes(NaN); // true

// Methods accepting a properly defined predicate can always find NaN
arr.findIndex((n) => Number.isNaN(n)); // 2
```

Weitere Informationen zu `NaN` und Vergleichen damit finden Sie unter [Gleichheitsvergleiche und Gleichheit](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness).

### Unterscheidbare NaN-Werte

Es ist möglich, zwei Gleitkommazahlen mit unterschiedlichen binären Darstellungen zu erzeugen, die beide `NaN` sind. Denn gemäß der [IEEE-754-Kodierung](https://en.wikipedia.org/wiki/NaN#Floating_point) ist jede Gleitkommazahl mit dem Exponenten `0x7ff` und einer von null verschiedenen Mantisse `NaN`. In JavaScript können Sie mithilfe von [typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Operationen auf Bitebene durchführen.

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

### Wenn sich NaN unbemerkt nicht weiterverbreitet

`NaN` verbreitet sich bei mathematischen Operationen weiter. Daher reicht es normalerweise aus, am Ende einer Berechnung einmal auf `NaN` zu prüfen, um Fehlerzustände zu erkennen. Ein Fall, in dem sich `NaN` unbemerkt nicht weiterverbreitet, ist die [Potenzierung](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation) mit dem Exponenten `0`: Sie gibt sofort `1` zurück, ohne den Wert der Basis zu prüfen. Weitere Fälle betreffen Funktionen von {{jsxref("Math")}}, etwa {{jsxref("Math.hypot()")}}, das `Infinity` Vorrang vor `NaN` gibt.

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
