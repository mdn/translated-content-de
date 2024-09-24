---
title: Number.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toString
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("Number")}}-Werten gibt eine Zeichenkette zurück, die diesen Zahlenwert darstellt.

{{EmbedInteractiveExample("pages/js/number-tostring.html")}}

## Syntax

```js-nolint
toString()
toString(radix)
```

### Parameter

- `radix` {{optional_inline}}
  - : Ein ganzzahliger Wert im Bereich von `2` bis `36`, der die Basis angibt, die zur Darstellung des Zahlenwerts verwendet werden soll. Standardmäßig 10.

### Rückgabewert

Eine Zeichenkette, die den angegebenen Zahlenwert darstellt. Wissenschaftliche Notation wird verwendet, wenn die Basis 10 ist und der Betrag der Zahl (unabhängig vom Vorzeichen) größer als oder gleich 10<sup>21</sup> oder kleiner als 10<sup>-6</sup> ist.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `radix` kleiner als 2 oder größer als 36 ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn diese Methode auf ein Objekt angewendet wird, das kein {{jsxref("Number")}} ist.

## Beschreibung

Das {{jsxref("Number")}}-Objekt überschreibt die `toString`-Methode von {{jsxref("Object")}}; es erbt nicht
{{jsxref("Object.prototype.toString()")}}. Für `Number`-Werte gibt die `toString`-Methode eine Zeichenkettenrepräsentation des Wertes in der angegebenen Basis zurück.

Bei Basen über 10 geben die Buchstaben des Alphabets Ziffern größer als 9 an. Zum Beispiel werden für hexadezimale Zahlen (Basis 16) `a` bis `f` verwendet.

Wenn der angegebene Zahlenwert negativ ist, bleibt das Vorzeichen erhalten. Dies gilt auch dann, wenn die Basis 2 ist; die zurückgegebene Zeichenkette ist die positive Binärdarstellung des Zahlenwerts, die mit einem `-`-Zeichen versehen ist, **nicht** das Zweierkomplement des Zahlenwerts.

Sowohl `0` als auch `-0` haben `"0"` als ihre Zeichenkettenrepräsentation. {{jsxref("Infinity")}} gibt `"Infinity"` zurück und {{jsxref("NaN")}} gibt `"NaN"` zurück.

Wenn die Zahl keine ganze Zahl ist, wird der Dezimalpunkt `.` verwendet, um die Dezimalstellen zu trennen. [Wissenschaftliche Notation](/de/docs/Web/JavaScript/Reference/Lexical_grammar#exponential) wird verwendet, wenn die Basis 10 ist und der Betrag der Zahl (unabhängig vom Vorzeichen) größer als oder gleich 10<sup>21</sup> oder kleiner als 10<sup>-6</sup> ist. In diesem Fall gibt die zurückgegebene Zeichenkette immer das Vorzeichen des Exponenten explizit an.

```js
console.log((10 ** 21.5).toString()); // "3.1622776601683794e+21"
console.log((10 ** 21.5).toString(8)); // "526665530627250154000000"
```

Die zugrunde liegende Darstellung für Gleitkommazahlen ist die Basis-2-Wissenschaftliche Notation (siehe [Zahlenkodierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding)). Allerdings verwendet die `toString()`-Methode nicht direkt diese genaueste Darstellung des Zahlenwertes. Vielmehr verwendet der Algorithmus die geringste Anzahl signifikanter Stellen, die erforderlich sind, um die Ausgabe von benachbarten Zahlenwerten zu unterscheiden. Beispielsweise gibt es bei großen Zahlen viele gleichwertige Zeichenkettenrepräsentationen derselben Gleitkommazahl, und `toString()` wählt diejenige mit den meisten 0en rechts (für eine gegebene Basis).

```js
console.log((1000000000000000128).toString()); // "1000000000000000100"
console.log(1000000000000000100 === 1000000000000000128); // true
```

Im Gegensatz dazu erlauben Ihnen {{jsxref("Number.prototype.toFixed()")}} und {{jsxref("Number.prototype.toPrecision()")}}, die Genauigkeit festzulegen und können präziser sein als `toString()`.

Die `toString()`-Methode erfordert, dass ihr `this`-Wert ein `Number`-Primitiv oder Wrapper-Objekt ist. Für andere `this`-Werte löst sie ohne Versuch, sie in Zahlenwerte umzuwandeln, einen {{jsxref("TypeError")}} aus.

Da `Number` keine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)-Methode hat, ruft JavaScript die `toString()`-Methode automatisch auf, wenn ein `Number`-Objekt in einem Kontext verwendet wird, der eine Zeichenkette erwartet, wie in einem [template literal](/de/docs/Web/JavaScript/Reference/Template_literals). Allerdings konsultieren `Number`-Primitive nicht die `toString()`-Methode, um in [Zeichenketten umgewandelt zu werden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) — vielmehr werden sie direkt unter Verwendung desselben Algorithmus wie die ursprüngliche `toString()`-Implementierung umgewandelt.

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

### Konvertierung der Basis von Zahlenzeichenketten

Wenn Sie eine Zeichenkette haben, die eine Zahl in einer nicht-dezimalen Basis darstellt, können Sie [`parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt) und `toString()` verwenden, um sie in eine andere Basis zu konvertieren.

```js
const hex = "CAFEBABE";
const bin = parseInt(hex, 16).toString(2); // "11001010111111101011101010111110"
```

Achten Sie auf Präzisionsverlust: Wenn die ursprüngliche Zahlenzeichenkette zu groß ist (größer als [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER), zum Beispiel), sollten Sie stattdessen ein [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) verwenden. Der `BigInt`-Konstruktor unterstützt jedoch nur Zeichenketten, die Zahlenliterale darstellen (d. h. Zeichenketten, die mit `0b`, `0o`, `0x` beginnen). Falls Ihre ursprüngliche Basis nicht binär, oktal, dezimal oder hexadezimal ist, müssen Sie möglicherweise Ihren Basis-Konverter selbst schreiben oder eine Bibliothek verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
