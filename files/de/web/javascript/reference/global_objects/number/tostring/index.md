---
title: Number.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toString
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("Number")}}-Werten gibt eine Zeichenkette zurück, die diesen Zahlenwert repräsentiert.

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
  - : Ein Ganzzahlwert im Bereich von `2` bis `36`, der die Basis angibt, die zur Darstellung des Zahlenwerts verwendet werden soll. Standardmäßig ist dies 10.

### Rückgabewert

Eine Zeichenkette, die den angegebenen Zahlenwert repräsentiert. Wissenschaftliche Notation wird verwendet, wenn `radix` 10 ist und die Größe der Zahl (unabhängig vom Vorzeichen) größer oder gleich 10<sup>21</sup> oder kleiner als 10<sup>-6</sup> ist.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `radix` kleiner als 2 oder größer als 36 ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn diese Methode auf einem Objekt aufgerufen wird, das keine {{jsxref("Number")}} ist.

## Beschreibung

Das {{jsxref("Number")}}-Objekt überschreibt die `toString`-Methode von {{jsxref("Object")}}; es erbt nicht von {{jsxref("Object.prototype.toString()")}}. Für `Number`-Werte gibt die `toString`-Methode eine Zeichenkettenrepräsentation des Werts in der angegebenen Basis zurück.

Für Basen über 10 geben die Buchstaben des Alphabets Ziffern an, die größer als 9 sind. Zum Beispiel werden für hexadezimale Zahlen (Basis 16) `a` bis `f` verwendet.

Wenn der angegebene Zahlenwert negativ ist, bleibt das Vorzeichen erhalten. Dies gilt auch, wenn die Basis 2 ist; die zurückgegebene Zeichenkette ist die positive binäre Darstellung des Zahlenwerts, dem ein `-` Zeichen vorangestellt ist, **nicht** das Zweierkomplement des Zahlenwerts.

Sowohl `0` als auch `-0` haben `"0"` als ihre Zeichenkettenrepräsentation. {{jsxref("Infinity")}} gibt `"Infinity"` zurück und {{jsxref("NaN")}} gibt `"NaN"` zurück.

Wenn die Zahl keine ganze Zahl ist, wird der Dezimalpunkt `.` verwendet, um die Dezimalstellen zu trennen. [Wissenschaftliche Notation](/de/docs/Web/JavaScript/Reference/Lexical_grammar#exponential) wird verwendet, wenn die Basis 10 ist und die Größe der Zahl (unabhängig vom Vorzeichen) größer oder gleich 10<sup>21</sup> oder kleiner als 10<sup>-6</sup> ist. In diesem Fall gibt die zurückgegebene Zeichenkette das Vorzeichen des Exponenten immer explizit an.

```js
console.log((10 ** 21.5).toString()); // "3.1622776601683794e+21"
console.log((10 ** 21.5).toString(8)); // "526665530627250154000000"
```

Die zugrunde liegende Darstellung für Gleitkommazahlen ist die Basis-2-Wissenschaftliche Notation (siehe [Nummerncodierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding)). Die `toString()`-Methode verwendet jedoch nicht direkt diese präziseste Darstellung des Zahlenwerts. Stattdessen verwendet der Algorithmus die geringste Anzahl signifikanter Ziffern, die notwendig sind, um die Ausgabe von benachbarten Zahlenwerten zu unterscheiden. Zum Beispiel, wenn die Zahl groß ist, gibt es viele äquivalente Zeichenkettenrepräsentationen derselben Gleitkommazahl, und `toString()` wird diejenige mit den meisten 0en rechts wählen (für eine gegebene Basis).

```js
console.log((1000000000000000128).toString()); // "1000000000000000100"
console.log(1000000000000000100 === 1000000000000000128); // true
```

Andererseits ermöglichen es {{jsxref("Number.prototype.toFixed()")}} und {{jsxref("Number.prototype.toPrecision()")}}, die Genauigkeit anzugeben und präziser als `toString()` zu sein.

Die `toString()`-Methode erfordert, dass ihr `this`-Wert ein `Number`-Primitiv oder Wrapper-Objekt ist. Sie löst einen {{jsxref("TypeError")}} für andere `this`-Werte aus, ohne zu versuchen, sie in Zahlenwerte zu konvertieren.

Da `Number` keine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)-Methode hat, ruft JavaScript die `toString()`-Methode automatisch auf, wenn ein `Number`-Objekt in einem Kontext verwendet wird, der eine Zeichenkette erwartet, wie z.B. in einem [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals). Allerdings konsultieren `Number`-primitive Werte die `toString()`-Methode nicht, um in [Zeichenketten umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) zu werden — sie werden direkt mit demselben Algorithmus wie die anfängliche `toString()`-Implementierung konvertiert.

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

### Umwandlung der Basis von Zahlenzeichenketten

Wenn Sie eine Zeichenkette haben, die eine Zahl in einer nicht-dezimalen Basis darstellt, können Sie [`parseInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt) und `toString()` verwenden, um sie in eine andere Basis zu konvertieren.

```js
const hex = "CAFEBABE";
const bin = parseInt(hex, 16).toString(2); // "11001010111111101011101010111110"
```

Achten Sie auf den Verlust von Präzision: Wenn die ursprüngliche Zahlenzeichenkette zu groß ist (größer als [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER), zum Beispiel), sollten Sie stattdessen einen [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) verwenden. Der `BigInt`-Konstruktor unterstützt jedoch nur Zeichenketten, die Zahlenliterale darstellen (d.h. Zeichenketten, die mit `0b`, `0o`, `0x` beginnen). Falls Ihre ursprüngliche Basis nicht binär, oktal, dezimal oder hexadezimal ist, müssen Sie möglicherweise Ihren Radix-Konverter selbst schreiben oder eine Bibliothek verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
