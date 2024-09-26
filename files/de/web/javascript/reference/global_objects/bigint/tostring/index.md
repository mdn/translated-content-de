---
title: BigInt.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/toString
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Die **`toString()`** Methode von {{jsxref("BigInt")}} Werten gibt einen String zurück, der den angegebenen {{jsxref("BigInt")}}-Wert darstellt. Das abschließende "n" ist nicht Teil des Strings.

{{EmbedInteractiveExample("pages/js/bigint-tostring.html")}}

## Syntax

```js-nolint
toString()
toString(radix)
```

### Parameter

- `radix` {{optional_inline}}
  - : Eine ganze Zahl im Bereich von 2 bis 36, die die Basis angibt, die zur Darstellung des BigInt-Wertes verwendet werden soll. Standardmäßig 10.

### Rückgabewert

Ein String, der den angegebenen {{jsxref("BigInt")}}-Wert darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `radix` kleiner als 2 oder größer als 36 ist.

## Beschreibung

Das {{jsxref("BigInt")}}-Objekt überschreibt die `toString`-Methode von {{jsxref("Object")}}; es erbt nicht von {{jsxref("Object.prototype.toString()")}}. Bei {{jsxref("BigInt")}}-Werten gibt die `toString()`-Methode eine Stringdarstellung des Wertes in der angegebenen Basis zurück.

Für Basen über 10 geben die Buchstaben des Alphabets Ziffern an, die größer als 9 sind. Zum Beispiel werden für hexadezimale Zahlen (Basis 16) die Buchstaben `a` bis `f` verwendet.

Wenn der angegebene BigInt-Wert negativ ist, wird das Vorzeichen beibehalten. Dies ist der Fall, selbst wenn die Basis 2 ist; der zurückgegebene String ist die positive binäre Darstellung des BigInt-Wertes, dem ein `-`-Zeichen vorangestellt ist, und **nicht** das Zweierkomplement des BigInt-Wertes.

Die `toString()`-Methode erfordert, dass ihr `this`-Wert ein `BigInt`-Primitiv oder Wrapper-Objekt ist. Sie löst einen {{jsxref("TypeError")}} aus, wenn andere `this`-Werte ohne Versuch ihrer Umwandlung in BigInt-Werte vorliegen.

Da `BigInt` keine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) Methode hat, ruft JavaScript die `toString()`-Methode automatisch auf, wenn ein `BigInt` _Objekt_ in einem Kontext verwendet wird, der einen String erwartet, wie z.B. in einem [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals). Allerdings konsultieren BigInt _primitive_ Werte nicht die `toString()`-Methode, um in Strings [umgewandelt zu werden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) — vielmehr werden sie direkt mit demselben Algorithmus wie bei der initialen `toString()`-Implementierung konvertiert.

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

### Negative Null BigInt

Es gibt keine negative Null `BigInt`, da es keine negativen Nullen bei Ganzzahlen gibt. `-0.0` ist ein Konzept des IEEE-Fließkommas, das nur im JavaScript [`Number`](/de/docs/Web/JavaScript/Data_structures#number_type) Typ auftaucht.

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