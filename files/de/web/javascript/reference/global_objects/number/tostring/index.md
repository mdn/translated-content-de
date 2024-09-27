---
title: Number.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toString
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Die **`toString()`** Methode von {{jsxref("Number")}}-Werten gibt eine Zeichenkette zurück, die diesen Zahlenwert darstellt.

{{EmbedInteractiveExample("pages/js/number-tostring.html")}}

## Syntax

```js-nolint
toString()
toString(radix)
```

### Parameter

- `radix` {{optional_inline}}
  - : Eine ganze Zahl im Bereich von `2` bis `36`, die die Basis angibt, die zur Darstellung des Zahlenwerts verwendet werden soll. Standardmäßig ist dies 10.

### Rückgabewert

Eine Zeichenkette, die den angegebenen Zahlenwert darstellt. Wissenschaftliche Notation wird verwendet, wenn der Radix 10 ist und der Betrag der Zahl (ohne das Vorzeichen) größer oder gleich 10<sup>21</sup> oder kleiner als 10<sup>-6</sup> ist.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `radix` kleiner als 2 oder größer als 36 ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn diese Methode auf einem Objekt aufgerufen wird, das kein {{jsxref("Number")}} ist.

## Beschreibung

Das {{jsxref("Number")}}-Objekt überschreibt die `toString`-Methode von {{jsxref("Object")}}; es erbt nicht
{{jsxref("Object.prototype.toString()")}}. Für `Number`-Werte gibt die `toString`-Methode eine Zeichenkettenrepräsentation des Werts in der angegebenen Basis zurück.

Für Basen über 10 geben die Buchstaben des Alphabets Ziffern größer als 9 an. Zum Beispiel werden für Hexadezimalzahlen (Basis 16) `a` bis `f` verwendet.

Wenn der angegebene Zahlenwert negativ ist, bleibt das Vorzeichen erhalten. Dies ist auch der Fall, wenn die Basis 2 ist; die zurückgegebene Zeichenkette ist die positive binäre Darstellung des Zahlenwerts, vorangestellt mit einem `-` Zeichen, **nicht** das Zweierkomplement des Zahlenwerts.

Sowohl `0` als auch `-0` haben `"0"` als ihre Zeichenkettenrepräsentation. {{jsxref("Infinity")}} gibt `"Infinity"` zurück und {{jsxref("NaN")}} gibt `"NaN"` zurück.

Wenn die Zahl keine ganze Zahl ist, wird der Dezimalpunkt `.` verwendet, um die Dezimalstellen zu trennen. [Wissenschaftliche Notation](/de/docs/Web/JavaScript/Reference/Lexical_grammar#exponential) wird verwendet, wenn der Radix 10 ist und der Betrag der Zahl (ohne das Vorzeichen) größer oder gleich 10<sup>21</sup> oder kleiner als 10<sup>-6</sup> ist. In diesem Fall spezifiziert die zurückgegebene Zeichenkette immer explizit das Vorzeichen des Exponenten.

```js
console.log((10 ** 21.5).toString()); // "3.1622776601683794e+21"
console.log((10 ** 21.5).toString(8)); // "526665530627250154000000"
```

Die zugrunde liegende Darstellung für Gleitkommazahlen ist die Basis-2 wissenschaftliche Notation (siehe [Zahlenkodierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding)). Die `toString()`-Methode verwendet jedoch nicht direkt diese genaueste Darstellung des Zahlenwerts. Stattdessen verwendet der Algorithmus die kleinste Anzahl von signifikanten Ziffern, die erforderlich sind, um die Ausgabe von benachbarten Zahlenwerten zu unterscheiden. Zum Beispiel, wenn die Zahl groß ist, wird es viele äquivalente Zeichenkettenrepräsentationen der gleichen Gleitpunktzahl geben, und `toString()` wählt die mit den meisten Nullen rechts aus (für jede gegebene Basis).

```js
console.log((1000000000000000128).toString()); // "1000000000000000100"
console.log(1000000000000000100 === 1000000000000000128); // true
```

Andererseits erlauben {{jsxref("Number.prototype.toFixed()")}} und {{jsxref("Number.prototype.toPrecision()")}} Ihnen, die Genauigkeit anzugeben und können präziser sein als `toString()`.

Die `toString()`-Methode erfordert, dass ihr `this`-Wert ein `Number`-Primitive oder Wrapper-Objekt ist. Sie löst einen {{jsxref("TypeError")}} aus für andere `this`-Werte, ohne zu versuchen, sie in Zahlenwerte zu zwingen.

Da `Number` keine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) Methode hat, ruft JavaScript die `toString()`-Methode automatisch auf, wenn ein `Number`-Objekt in einem Kontext verwendet wird, der eine Zeichenkette erwartet, wie z.B. in einem [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals). Jedoch konsultieren `Number`-Primitive-Werte die `toString()`-Methode nicht, um [zu Zeichenketten gezwungen zu werden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) — stattdessen werden sie direkt unter Verwendung des gleichen Algorithmus wie die anfängliche `toString()`-Implementierung konvertiert.

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

### Umrechnung der Basis von Zahlenzeichenketten

Wenn Sie eine Zeichenkette haben, die eine Zahl in einer nicht-dezimalen Basis darstellt, können Sie [`parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt) und `toString()` verwenden, um sie in eine andere Basis zu konvertieren.

```js
const hex = "CAFEBABE";
const bin = parseInt(hex, 16).toString(2); // "11001010111111101011101010111110"
```

Achten Sie auf den Verlust von Präzision: Wenn die ursprüngliche Zahlenzeichenkette zu groß ist (größer als [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER), zum Beispiel), sollten Sie stattdessen ein [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) verwenden. Allerdings unterstützt der `BigInt`-Konstruktor nur Zeichenketten, die Nummernliterale darstellen (d.h. Zeichenketten, die mit `0b`, `0o`, `0x` beginnen). Falls Ihre ursprüngliche Basis nicht eine der binären, oktalen, dezimalen oder hexadezimalen ist, müssen Sie möglicherweise Ihren eigenen Basisumrechner schreiben oder eine Bibliothek verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
