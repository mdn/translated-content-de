---
title: Number.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toString
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("Number")}}-Werten gibt eine Zeichenkette zurück, die diesen Zahlenwert darstellt.

{{InteractiveExample("JavaScript Demo: Number.toString()")}}

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
  - : Eine ganze Zahl im Bereich von `2` bis `36`, die die Basis angibt, die zur Darstellung des Zahlenwerts verwendet werden soll. Standardwert ist 10.

### Rückgabewert

Eine Zeichenkette, die den angegebenen Zahlenwert darstellt. Wissenschaftliche Notation wird verwendet, wenn `radix` 10 ist und die Größenordnung der Zahl (unabhängig vom Vorzeichen) größer oder gleich 10<sup>21</sup> oder kleiner als 10<sup>-6</sup> ist.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `radix` kleiner als 2 oder größer als 36 ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn diese Methode auf ein Objekt angewendet wird, das kein {{jsxref("Number")}} ist.

## Beschreibung

Das {{jsxref("Number")}}-Objekt überschreibt die `toString`-Methode von {{jsxref("Object")}}; es erbt nicht von
{{jsxref("Object.prototype.toString()")}}. Für `Number`-Werte gibt die `toString`-Methode eine Zeichenketten-Repräsentation des Wertes in der angegebenen Basis zurück.

Für Basen über 10 verwenden die Buchstaben des Alphabets Ziffern größer als 9. Zum Beispiel werden für hexadezimale Zahlen (Basis 16) `a` bis `f` verwendet.

Wenn der angegebene Zahlenwert negativ ist, bleibt das Vorzeichen erhalten. Dies gilt auch, wenn die Basis 2 ist; die zurückgegebene Zeichenkette ist die positive binäre Darstellung des Zahlenwerts, dem ein `-`-Zeichen vorangestellt wird, **nicht** die Zweierkomplement-Darstellung des Zahlenwerts.

Sowohl `0` als auch `-0` haben `"0"` als ihre Zeichenketten-Repräsentation. {{jsxref("Infinity")}} gibt `"Infinity"` zurück und {{jsxref("NaN")}} gibt `"NaN"` zurück.

Wenn die Zahl keine ganze Zahl ist, wird der Dezimalpunkt `.` verwendet, um die Dezimalstellen zu trennen. [Wissenschaftliche Notation](/de/docs/Web/JavaScript/Reference/Lexical_grammar#exponential) wird verwendet, wenn die Basis 10 ist und die Größenordnung der Zahl (unabhängig vom Vorzeichen) größer oder gleich 10<sup>21</sup> oder kleiner als 10<sup>-6</sup> ist. In diesem Fall gibt die zurückgegebene Zeichenkette immer explizit das Vorzeichen des Exponenten an.

```js
console.log((10 ** 21.5).toString()); // "3.1622776601683794e+21"
console.log((10 ** 21.5).toString(8)); // "526665530627250154000000"
```

Die zugrunde liegende Darstellung für Gleitkommazahlen ist wissenschaftliche Notation in Basis-2 (siehe [Zahlenkodierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding)). Die `toString()`-Methode verwendet jedoch nicht direkt diese präziseste Darstellung des Zahlenwerts. Stattdessen verwendet der Algorithmus die geringste Anzahl signifikanter Stellen, die erforderlich ist, um die Ausgabe von benachbarten Zahlenwerten zu unterscheiden. Zum Beispiel, wenn die Zahl groß ist, wird es viele äquivalente Zeichenketten-Repräsentationen derselben Gleitkommazahl geben, und `toString()` wählt diejenige mit den meisten 0en rechts (für eine gegebene Basis).

```js
console.log((1000000000000000128).toString()); // "1000000000000000100"
console.log(1000000000000000100 === 1000000000000000128); // true
```

Auf der anderen Seite erlauben {{jsxref("Number.prototype.toFixed()")}} und {{jsxref("Number.prototype.toPrecision()")}} Ihnen, die Genauigkeit anzugeben, und können genauer sein als `toString()`.

Die `toString()`-Methode erfordert, dass ihr `this`-Wert ein primitiver `Number`-Typ oder ein Wrapper-Objekt ist. Sie wirft einen {{jsxref("TypeError")}}, wenn andere `this`-Werte verwendet werden, ohne zu versuchen, sie in Zahlenwerte umzuwandeln.

Da `Number` keine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)-Methode hat, ruft JavaScript automatisch die `toString()`-Methode auf, wenn ein `Number`-Objekt in einem Kontext verwendet wird, der eine Zeichenkette erwartet, z. B. in einem [template literal](/de/docs/Web/JavaScript/Reference/Template_literals). Primitive `Number`-Werte konsultieren die `toString()`-Methode jedoch nicht, um in Zeichenketten [umgewandelt zu werden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) – stattdessen werden sie direkt unter Verwendung des gleichen Algorithmus wie bei der Initialisierung von `toString()` konvertiert.

```js
Number.prototype.toString = () => "Overridden";
console.log(`${1}`); // "1"
console.log(`${new Number(1)}`); // "Overridden"
```

## Beispiele

### Verwendungsbeispiel von toString()

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

### Konvertierung der Basis von Zahlen-Zeichenketten

Wenn Sie eine Zeichenkette haben, die eine Zahl in einer nicht-dezimalen Basis darstellt, können Sie [`parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt) und `toString()` verwenden, um sie in eine andere Basis umzuwandeln.

```js
const hex = "CAFEBABE";
const bin = parseInt(hex, 16).toString(2); // "11001010111111101011101010111110"
```

Achten Sie auf einen Verlust der Genauigkeit: Wenn die ursprüngliche Zahlen-Zeichenkette zu groß ist (z. B. größer als [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)), sollten Sie stattdessen einen [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) verwenden. Allerdings unterstützt der `BigInt`-Konstruktor nur Zeichenketten, die Zahlenliterale darstellen (d. h. Zeichenketten, die mit `0b`, `0o` oder `0x` beginnen). Falls Ihre ursprüngliche Basis nicht binär, oktal, dezimal oder hexadezimal ist, müssen Sie möglicherweise Ihren eigenen Basis-Konverter programmieren oder eine Bibliothek verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
