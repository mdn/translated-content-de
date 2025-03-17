---
title: Number.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toString
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`toString()`** Methode von {{jsxref("Number")}} Werten gibt einen String zurück, der diesen Zahlenwert darstellt.

{{InteractiveExample("JavaScript Demo: Number.prototype.toString()")}}

```js interactive-example
function hexColour(c) {
  if (c < 256) {
    return Math.abs(c).toString(16);
  }
  return 0;
}

console.log(hexColour(233));
// Expected output: "e9"

console.log(hexColour("11"));
// Expected output: "b"
```

## Syntax

```js-nolint
toString()
toString(radix)
```

### Parameter

- `radix` {{optional_inline}}
  - : Ein Integer im Bereich von `2` bis `36`, der die Basis angibt, die zur Darstellung des Zahlenwerts verwendet werden soll. Standardmäßig 10.

### Rückgabewert

Ein String, der den angegebenen Zahlenwert darstellt. Die wissenschaftliche Notation wird verwendet, wenn die Basis 10 ist und die Größenordnung der Zahl (ohne Vorzeichen) größer oder gleich 10<sup>21</sup> oder kleiner als 10<sup>-6</sup> ist.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `radix` kleiner als 2 oder größer als 36 ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn diese Methode auf einem Objekt aufgerufen wird, das kein {{jsxref("Number")}} ist.

## Beschreibung

Das {{jsxref("Number")}}-Objekt überschreibt die `toString`-Methode von {{jsxref("Object")}}; es erbt nicht
{{jsxref("Object.prototype.toString()")}}. Für `Number`-Werte gibt die `toString`-Methode eine String-Darstellung des Werts in der angegebenen Basis zurück.

Für Basen über 10 geben Buchstaben des Alphabets Ziffern größer als 9 an. Zum Beispiel werden für hexadezimale Zahlen (Basis 16) `a` bis `f` verwendet.

Wenn der angegebene Zahlenwert negativ ist, bleibt das Vorzeichen erhalten. Dies gilt auch, wenn die Basis 2 ist; der zurückgegebene String ist die positive Binärdarstellung des Zahlenwerts, der durch ein `-`-Zeichen vorangestellt wird, **nicht** das Zweierkomplement des Zahlenwerts.

Sowohl `0` als auch `-0` haben `"0"` als ihre String-Darstellung. {{jsxref("Infinity")}} gibt `"Infinity"` zurück und {{jsxref("NaN")}} gibt `"NaN"` zurück.

Wenn die Zahl keine ganze Zahl ist, wird der Dezimalpunkt `.` verwendet, um die Dezimalstellen zu trennen. [Wissenschaftliche Notation](/de/docs/Web/JavaScript/Reference/Lexical_grammar#exponential) wird verwendet, wenn die Basis 10 ist und die Größenordnung der Zahl (ohne Vorzeichen) größer oder gleich 10<sup>21</sup> oder kleiner als 10<sup>-6</sup> ist. In diesem Fall gibt der zurückgegebene String immer das Vorzeichen des Exponenten explizit an.

```js
console.log((10 ** 21.5).toString()); // "3.1622776601683794e+21"
console.log((10 ** 21.5).toString(8)); // "526665530627250154000000"
```

Die zugrunde liegende Darstellung für Gleitkommazahlen ist die wissenschaftliche Notation im Basis-2-System (siehe [number encoding](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding)). Allerdings verwendet die `toString()`-Methode nicht direkt diese präziseste Darstellung des Zahlenwerts. Stattdessen benutzt der Algorithmus die geringste Anzahl signifikanter Zahlen, die nötig sind, um die Ausgabe von benachbarten Zahlenwerten zu unterscheiden. Zum Beispiel gibt es bei einer großen Zahl viele gleichwertige String-Darstellungen derselben Gleitkommazahl, und `toString()` wird diejenige mit den meisten 0en rechts wählen (für jede gegebene Basis).

```js
console.log((1000000000000000128).toString()); // "1000000000000000100"
console.log(1000000000000000100 === 1000000000000000128); // true
```

Andererseits erlauben Ihnen {{jsxref("Number.prototype.toFixed()")}} und {{jsxref("Number.prototype.toPrecision()")}}, die Genauigkeit anzugeben und können präziser sein als `toString()`.

Die `toString()`-Methode erfordert, dass ihr `this`-Wert ein `Number`-Primitive oder Wrapper-Objekt ist. Sie löst einen {{jsxref("TypeError")}} für andere `this`-Werte aus, ohne zu versuchen, sie in Zahlenwerte umzuwandeln.

Da `Number` keine Methode [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) hat, ruft JavaScript die `toString()`-Methode automatisch auf, wenn ein `Number`-Objekt in einem Kontext verwendet wird, der einen String erwartet, wie in einem [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals). `Number`-Primitive-Werte konsultieren jedoch nicht die `toString()`-Methode, um in Strings [umgewandelt zu werden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) — vielmehr werden sie direkt mit demselben Algorithmus in Strings umgewandelt wie die ursprüngliche `toString()`-Implementierung.

```js
Number.prototype.toString = () => "Overridden";
console.log(`${1}`); // "1"
console.log(`${new Number(1)}`); // "Overridden"
```

## Beispiele

### Verwendung von toString()

```js
const count = 10;
console.log(count.toString()); // "10"

console.log((17).toString()); // "17"
console.log((17.2).toString()); // "17.2"

const x = 6;
console.log(x.toString(2)); // "110"
console.log((254).toString(16)); // "fe"
console.log((-10).toString(2)); // "-1010"
console.log((-0xff).toString(2)); // "-11111111"
```

### Umwandlung der Basis von Zahlenstrings

Wenn Sie einen String haben, der eine Zahl in einer nicht-dezimale Basis darstellt, können Sie [`parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt) und `toString()` nutzen, um sie in eine andere Basis zu konvertieren.

```js
const hex = "CAFEBABE";
const bin = parseInt(hex, 16).toString(2); // "11001010111111101011101010111110"
```

Seien Sie vorsichtig bei einem Verlust an Genauigkeit: Wenn der ursprüngliche Zahlenstring zu groß ist (zum Beispiel größer als [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)), sollten Sie stattdessen ein [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) verwenden. Der `BigInt`-Konstruktor unterstützt jedoch nur Strings, die Zahlenliterale darstellen (d.h. Strings, die mit `0b`, `0o`, `0x` beginnen). Falls Ihre ursprüngliche Basis nicht binär, oktal, dezimal oder hexadezimal ist, müssen Sie möglicherweise Ihren eigenen Basis-Konverter schreiben oder eine Bibliothek verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
