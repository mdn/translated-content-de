---
title: BigInt.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/toString
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Die **`toString()`** Methode von {{jsxref("BigInt")}} Werten gibt eine Zeichenkette zurück, die den angegebenen {{jsxref("BigInt")}} Wert darstellt. Das abschließende "n" ist nicht Teil der Zeichenkette.

{{EmbedInteractiveExample("pages/js/bigint-tostring.html")}}

## Syntax

```js-nolint
toString()
toString(radix)
```

### Parameter

- `radix` {{optional_inline}}
  - : Eine ganze Zahl im Bereich von 2 bis 36, die die Basis angibt, die zur Darstellung des BigInt-Werts verwendet werden soll. Standard ist 10.

### Rückgabewert

Eine Zeichenkette, die den angegebenen {{jsxref("BigInt")}} Wert darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `radix` kleiner als 2 oder größer als 36 ist.

## Beschreibung

Das {{jsxref("BigInt")}} Objekt überschreibt die `toString` Methode von {{jsxref("Object")}}; es erbt nicht die
{{jsxref("Object.prototype.toString()")}}. Für {{jsxref("BigInt")}}-Werte gibt die `toString()`-Methode eine Zeichenketten-Darstellung des Werts in der angegebenen Basis zurück.

Für Basen über 10 geben die Buchstaben des Alphabets Ziffern größer als 9 an. Zum Beispiel werden für hexadezimale Zahlen (Basis 16) `a` bis `f` verwendet.

Wenn der angegebene BigInt-Wert negativ ist, bleibt das Vorzeichen erhalten. Dies ist der Fall, selbst wenn die Basis 2 ist; die zurückgegebene Zeichenkette ist die positive binäre Darstellung des BigInt-Werts, gefolgt von einem `-` Zeichen, **nicht** das Zweierkomplement des BigInt-Werts.

Die `toString()`-Methode erfordert, dass ihr `this` Wert ein `BigInt`-Primitiv oder Wrapper-Objekt ist. Sie löst einen {{jsxref("TypeError")}} für andere `this`-Werte aus, ohne zu versuchen, sie in BigInt-Werte zu konvertieren.

Da `BigInt` keine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)-Methode hat, ruft JavaScript die `toString()`-Methode automatisch auf, wenn ein `BigInt` _Objekt_ in einem Kontext verwendet wird, der eine Zeichenkette erwartet, wie z.B. in einem [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals). BigInt _primitive_ Werte konsultieren jedoch nicht die `toString()`-Methode, um in [Zeichenketten umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) zu werden — vielmehr werden sie direkt mit demselben Algorithmus wie die ursprüngliche `toString()`-Implementierung konvertiert.

```js
BigInt.prototype.toString = () => "Overridden";
console.log(`${1n}`); // "1"
console.log(`${Object(1n)}`); // "Overridden"
```

## Beispiele

### Verwendung von toString()

```js
17n.toString(); // "17"
66n.toString(2); // "1000010"
254n.toString(16); // "fe"
(-10n).toString(2); // "-1010"
(-0xffn).toString(2); // "-11111111"
```

### Negative-Null BigInt

Es gibt kein negative-Null `BigInt`, da es in Ganzzahlen keine negativen Nullen gibt. `-0.0` ist ein IEEE Gleitkommakonzept, das nur im JavaScript [`Number`](/de/docs/Web/JavaScript/Data_structures#number_type) Typ erscheint.

```js
(-0n).toString(); // "0"
BigInt(-0).toString(); // "0"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("BigInt.prototype.toLocaleString()")}}
- {{jsxref("BigInt.prototype.valueOf()")}}
- {{jsxref("Number.prototype.toString()")}}
