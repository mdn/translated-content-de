---
title: BigInt.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/toString
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`toString()`** von {{jsxref("BigInt")}}-Werten gibt eine Zeichenkette zurück, die den angegebenen {{jsxref("BigInt")}}-Wert darstellt. Das abschließende "n" ist nicht Teil der Zeichenkette.

{{InteractiveExample("JavaScript Demo: BigInt.toString()")}}

```js interactive-example
console.log(1024n.toString());
// Expected output: "1024"

console.log(1024n.toString(2));
// Expected output: "10000000000"

console.log(1024n.toString(16));
// Expected output: "400"
```

## Syntax

```js-nolint
toString()
toString(radix)
```

### Parameter

- `radix` {{optional_inline}}
  - : Eine Ganzzahl im Bereich von 2 bis 36, die die Basis für die Darstellung des BigInt-Wertes angibt. Standardmäßig wird Basis 10 verwendet.

### Rückgabewert

Eine Zeichenkette, die den angegebenen {{jsxref("BigInt")}}-Wert darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `radix` kleiner als 2 oder größer als 36 ist.

## Beschreibung

Das {{jsxref("BigInt")}}-Objekt überschreibt die `toString`-Methode von {{jsxref("Object")}}; es erbt nicht von
{{jsxref("Object.prototype.toString()")}}. Für {{jsxref("BigInt")}}-Werte gibt die Methode `toString()` eine Zeichenkettenrepräsentation des Wertes in der angegebenen Basis zurück.

Für Basen (radix) größer als 10 zeigen die Buchstaben des Alphabets Ziffern größer als 9 an. Beispielsweise werden für hexadezimale Zahlen (Basis 16) die Buchstaben `a` bis `f` verwendet.

Wenn der angegebene BigInt-Wert negativ ist, bleibt das Vorzeichen erhalten. Dies ist auch dann der Fall, wenn die Basis 2 (binär) ist; die zurückgegebene Zeichenkette ist die positive binäre Darstellung des BigInt-Wertes, vorangestellt von einem `-`-Zeichen, **nicht** die Zweierkomplement-Darstellung des BigInt-Wertes.

Die `toString()`-Methode erfordert, dass ihr `this`-Wert ein `BigInt`-Primitive oder Wrapper-Objekt ist. Sie löst einen {{jsxref("TypeError")}} aus, wenn andere `this`-Werte verwendet werden, ohne zu versuchen, sie in BigInt-Werte umzuwandeln.

Da `BigInt` keine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)-Methode hat, ruft JavaScript die `toString()`-Methode automatisch auf, wenn ein `BigInt`-Objekt in einem Kontext verwendet wird, der eine Zeichenkette erwartet, wie etwa in einem [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals). BigInt-Primitive-Werte konsultieren jedoch nicht die `toString()`-Methode, um in [Zeichenketten umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) zu werden — stattdessen werden sie direkt mithilfe des gleichen Algorithmus wie bei der anfänglichen `toString()`-Implementierung konvertiert.

```js
BigInt.prototype.toString = () => "Overridden";
console.log(`${1n}`); // "1"
console.log(`${Object(1n)}`); // "Overridden"
```

## Beispiele

### Benutzung von toString()

```js
17n.toString(); // "17"
66n.toString(2); // "1000010"
254n.toString(16); // "fe"
(-10n).toString(2); // "-1010"
(-0xffn).toString(2); // "-11111111"
```

### Negative-Null-BigInt

Es gibt keine negative Null bei `BigInt`, da es keine negativen Nullen in Ganzzahlen gibt. `-0.0` ist ein Konzept des IEEE-Gleitkommaformats, das nur im JavaScript-`Number`-Typ vorkommt.

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
