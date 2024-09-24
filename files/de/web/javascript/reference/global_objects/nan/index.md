---
title: NaN
slug: Web/JavaScript/Reference/Global_Objects/NaN
l10n:
  sourceCommit: 915c9519f3cca1c616c2f554d5ad9e1483bbb170
---

{{jsSidebar("Objects")}}

Die **`NaN`** globale Eigenschaft ist ein Wert, der Nicht-eine-Zahl (Not-A-Number) darstellt.

{{EmbedInteractiveExample("pages/js/globalprops-nan.html")}}

## Wert

Der gleiche Zahlenwert wie {{jsxref("Number.NaN")}}.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

`NaN` ist eine Eigenschaft des _globalen Objekts_. Mit anderen Worten, es ist eine Variable im globalen Gültigkeitsbereich.

In modernen Browsern ist `NaN` eine nicht konfigurierbare, nicht beschreibbare Eigenschaft. Selbst wenn dies nicht der Fall ist, sollte eine Überschreibung vermieden werden.

Es gibt fünf verschiedene Arten von Operationen, die `NaN` zurückgeben:

- Fehlgeschlagene Zahlenkonvertierung (z. B. explizite wie `parseInt("blabla")`, `Number(undefined)`, oder implizite wie `Math.abs(undefined)`)
- Mathematische Operationen, bei denen das Ergebnis keine reale Zahl ist (z. B. `Math.sqrt(-1)`)
- Unbestimmte Form (z. B. `0 * Infinity`, `1 ** Infinity`, `Infinity / Infinity`, `Infinity - Infinity`)
- Eine Methode oder Ausdruck, dessen Operand `NaN` ist oder zu `NaN` gezwungen wird (z. B. `7 ** NaN`, `7 * "blabla"`) — das bedeutet, dass `NaN` ansteckend ist
- Andere Fälle, in denen ein ungültiger Wert als Zahl dargestellt werden soll (z. B. ein ungültiges [Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) `new Date("blabla").getTime()`, `"".charCodeAt(1)`)

`NaN` und sein Verhalten wurden nicht von JavaScript erfunden. Seine Semantik in der Fließkommaarithmetik (einschließlich der Tatsache, dass `NaN !== NaN`) wird von [IEEE 754](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) spezifiziert. `NaN`s Verhaltensweisen umfassen:

- Wenn `NaN` an einer mathematischen Operation beteiligt ist (aber nicht an [bitweisen Operationen](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators)), ist das Ergebnis normalerweise auch `NaN`. (Siehe [Gegenbeispiel](#nan_unauffällig_umgehen) unten.)
- Wenn `NaN` einer der Operanden eines relationalen Vergleichs (`>`, `<`, `>=`, `<=`) ist, ist das Ergebnis immer `false`.
- `NaN` vergleicht ungleich (über [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality), [`!=`](/de/docs/Web/JavaScript/Reference/Operators/Inequality), [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality), und [`!==`](/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality)) mit jedem anderen Wert — einschließlich einem anderen `NaN`-Wert.

`NaN` ist auch einer der [falsy](/de/docs/Glossary/Falsy) Werte in JavaScript.

## Beispiele

### Testen auf NaN

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

Beachten Sie jedoch den Unterschied zwischen `isNaN()` und `Number.isNaN()`: Ersteres gibt `true` zurück, wenn der Wert derzeit `NaN` ist oder wenn er nach einer Umwandlung in eine Zahl `NaN` ist, während Letzteres nur `true` zurückgibt, wenn der Wert derzeit `NaN` ist:

```js
isNaN("hello world"); // true
Number.isNaN("hello world"); // false
```

Aus dem gleichen Grund wird mit einem `BigInt`-Wert ein Fehler bei `isNaN()` ausgelöst, jedoch nicht bei `Number.isNaN()`:

```js
isNaN(1n); // TypeError: Conversion from 'BigInt' to 'number' is not allowed.
Number.isNaN(1n); // false
```

Zusätzlich können einige Array-Methoden `NaN` nicht finden, während andere dies können. Insbesondere die Index-suchenden ({{jsxref("Array/indexOf", "indexOf()")}}, {{jsxref("Array/lastIndexOf", "lastIndexOf()")}}) können `NaN` nicht finden, während die Wert-suchenden ({{jsxref("Array/includes", "includes()")}}) es können:

```js
const arr = [2, 4, NaN, 12];
arr.indexOf(NaN); // -1
arr.includes(NaN); // true

// Methoden, die ein korrekt definiertes Prädikat akzeptieren, können immer NaN finden
arr.findIndex((n) => Number.isNaN(n)); // 2
```

Für mehr Informationen über `NaN` und seine Vergleiche, siehe [Gleichheitsvergleich und Gleichheit](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness).

### Beobachtbar unterschiedliche NaN-Werte

Es ist möglich, zwei Fließkommazahlen mit unterschiedlichen Binärdarstellungen zu erzeugen, die beide `NaN` sind, da in der [IEEE 754-Kodierung](https://en.wikipedia.org/wiki/NaN#Floating_point) jede Fließkommazahl mit einem Exponenten von `0x7ff` und einer nicht-null Mantisse `NaN` ist. In JavaScript können Sie Bit-Manipulationen mit [typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) durchführen.

```js
const f2b = (x) => new Uint8Array(new Float64Array([x]).buffer);
const b2f = (x) => new Float64Array(x.buffer)[0];
// Erhalten einer Byte-Darstellung von NaN
const n = f2b(NaN);
const m = f2b(NaN);
// Ändern des Vorzeichenbits, das für NaN keine Rolle spielt
n[7] += 2 ** 7;
// n[0] += 2**7; für big-endian Prozessoren
const nan2 = b2f(n);
console.log(nan2); // NaN
console.log(Object.is(nan2, NaN)); // true
console.log(f2b(NaN)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 127]
console.log(f2b(nan2)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 255]
// Ändern des ersten Bits, das das am wenigsten signifikante Bit der Mantisse ist und für NaN keine Rolle spielt
m[0] = 1;
// m[7] = 1; für big-endian Prozessoren
const nan3 = b2f(m);
console.log(nan3); // NaN
console.log(Object.is(nan3, NaN)); // true
console.log(f2b(NaN)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 127]
console.log(f2b(nan3)); // Uint8Array(8) [1, 0, 0, 0, 0, 0, 248, 127]
```

### NaN unauffällig umgehen

`NaN` breitet sich durch mathematische Operationen aus, daher ist es in der Regel ausreichend, `NaN` einmal am Ende der Berechnung zu testen, um Fehlerbedingungen zu erkennen. Der einzige Fall, in dem `NaN` unauffällig umgangen wird, ist bei Verwendung von [Exponentiation](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation) mit einem Exponenten von `0`, das sofort `1` zurückgibt, ohne den Wert der Basis zu testen.

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
