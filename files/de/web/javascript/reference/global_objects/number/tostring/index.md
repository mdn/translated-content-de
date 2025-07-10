---
title: Number.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`toString()`** Methode von {{jsxref("Number")}}-Werten gibt eine Zeichenkette zurück, die diesen Zahlenwert darstellt.

{{InteractiveExample("JavaScript Demo: Number.prototype.toString()")}}

```js interactive-example
function hexColor(c) {
  if (c < 256) {
    return Math.abs(c).toString(16);
  }
  return 0;
}

console.log(hexColor(233));
// Expected output: "e9"

console.log(hexColor("11"));
// Expected output: "b"
```

## Syntax

```js-nolint
toString()
toString(radix)
```

### Parameter

- `radix` {{optional_inline}}
  - : Eine ganze Zahl im Bereich von `2` bis `36`, die die Basis angibt, die zum Darstellen des Zahlenwerts verwendet werden soll. Standardmäßig ist dies 10.

### Rückgabewert

Eine Zeichenkette, die den angegebenen Zahlenwert darstellt. Wissenschaftliche Notation wird verwendet, wenn der Radix 10 ist und der Betrag der Zahl (unabhängig vom Vorzeichen) größer oder gleich 10<sup>21</sup> oder kleiner als 10<sup>-6</sup> ist.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `radix` kleiner als 2 oder größer als 36 ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn diese Methode auf einem Objekt aufgerufen wird, das kein {{jsxref("Number")}} ist.

## Beschreibung

Das {{jsxref("Number")}}-Objekt überschreibt die `toString`-Methode von {{jsxref("Object")}}; es erbt nicht von
{{jsxref("Object.prototype.toString()")}}. Für `Number`-Werte gibt die `toString`-Methode eine Zeichenkettenrepräsentation des Wertes im angegebenen Radix zurück.

Für Radixe über 10 geben die Buchstaben des Alphabets Ziffern größer als 9 an. Zum Beispiel werden für hexadezimale Zahlen (Basis 16) `a` bis `f` verwendet.

Wenn der angegebene Zahlenwert negativ ist, bleibt das Vorzeichen erhalten. Dies ist auch der Fall, wenn der Radix 2 ist; die zurückgegebene Zeichenkette ist die positive Binärdarstellung des Zahlenwerts, der von einem `-`-Vorzeichen vorangestellt ist, **nicht** das Zweierkomplement des Zahlenwerts.

Sowohl `0` als auch `-0` haben `"0"` als Zeichenkettenrepräsentation. {{jsxref("Infinity")}} gibt `"Infinity"` zurück und {{jsxref("NaN")}} gibt `"NaN"` zurück.

Wenn die Zahl keine ganze Zahl ist, wird der Dezimalpunkt `.` verwendet, um die Dezimalstellen zu trennen. [Wissenschaftliche Notation](/de/docs/Web/JavaScript/Reference/Lexical_grammar#exponential) wird verwendet, wenn der Radix 10 ist und der Betrag der Zahl (unabhängig vom Vorzeichen) größer oder gleich 10<sup>21</sup> oder kleiner als 10<sup>-6</sup> ist. In diesem Fall gibt die zurückgegebene Zeichenkette immer das Vorzeichen des Exponenten explizit an.

```js
console.log((10 ** 21.5).toString()); // "3.1622776601683794e+21"
console.log((10 ** 21.5).toString(8)); // "526665530627250154000000"
```

Die zugrunde liegende Darstellung für Fließkommazahlen ist die wissenschaftliche Basis-2-Notation (siehe [Zahlenkodierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding)). Die `toString()`-Methode verwendet jedoch nicht direkt diese genaueste Darstellung des Zahlenwerts. Stattdessen verwendet der Algorithmus die geringste Anzahl signifikanter Zahlen, die erforderlich sind, um die Ausgabe von benachbarten Zahlenwerten zu unterscheiden. Zum Beispiel, wenn die Zahl groß ist, gibt es viele gleichwertige Zeichenkettenrepräsentationen derselben Fließkommazahl, und `toString()` wählt diejenige mit den meisten 0en rechts (für einen gegebenen Radix).

```js
console.log((1000000000000000128).toString()); // "1000000000000000100"
console.log(1000000000000000100 === 1000000000000000128); // true
```

Andererseits ermöglichen {{jsxref("Number.prototype.toFixed()")}} und {{jsxref("Number.prototype.toPrecision()")}}, die Genauigkeit anzugeben und können präziser sein als `toString()`.

Die `toString()`-Methode erfordert, dass ihr `this`-Wert ein `Number`-Primitiv oder Wrapper-Objekt ist. Sie löst einen {{jsxref("TypeError")}} aus, wenn andere `this`-Werte ohne Versuch, sie in Zahlenwerte zu zwingen, auftreten.

Da `Number` keine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) Methode hat, ruft JavaScript automatisch die `toString()`-Methode auf, wenn ein `Number`-Objekt in einem Kontext verwendet wird, der eine Zeichenkette erwartet, wie zum Beispiel in einem [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals). Bei Number-Primitivwerten wird die `toString()`-Methode jedoch nicht konsultiert, um [in Zeichenketten umgewandelt zu werden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) — vielmehr werden sie direkt mit demselben Algorithmus wie die anfängliche `toString()`-Implementierung konvertiert.

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

### Konvertieren des Radix von Zahlzeichenketten

Wenn Sie eine Zeichenkette haben, die eine Zahl in einem nicht-dezimalen Radix darstellt, können Sie [`parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt) und `toString()` verwenden, um sie in einen anderen Radix zu konvertieren.

```js
const hex = "CAFEBABE";
const bin = parseInt(hex, 16).toString(2); // "11001010111111101011101010111110"
```

Achten Sie auf Präzisionsverlust: Wenn die ursprüngliche Zahlzeichenkette zu groß ist (größer als [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER), zum Beispiel), sollten Sie stattdessen einen [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) verwenden. Der `BigInt`-Konstruktor unterstützt jedoch nur Zeichenketten, die Zahlenliterale darstellen (d.h. Zeichenketten, die mit `0b`, `0o`, `0x` beginnen). Falls Ihr ursprünglicher Radix nicht einer von binär, oktal, dezimal oder hexadezimal ist, müssen Sie möglicherweise Ihren Radix-Konverter von Hand schreiben oder eine Bibliothek verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
