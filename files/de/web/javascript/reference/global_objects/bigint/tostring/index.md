---
title: BigInt.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/toString
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("BigInt")}}-Werten gibt einen String zurück, der den angegebenen {{jsxref("BigInt")}}-Wert darstellt. Das nachstehende "n" ist nicht Teil des Strings.

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
  - : Ein ganzzahliger Wert im Bereich von 2 bis 36, der die Basis angibt, die für die Darstellung des BigInt-Wertes verwendet werden soll. Standardmäßig 10.

### Rückgabewert

Ein String, der den angegebenen {{jsxref("BigInt")}}-Wert darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `radix` kleiner als 2 oder größer als 36 ist.

## Beschreibung

Das {{jsxref("BigInt")}}-Objekt überschreibt die `toString`-Methode von {{jsxref("Object")}}; es erbt nicht von
{{jsxref("Object.prototype.toString()")}}. Für {{jsxref("BigInt")}}-Werte gibt die `toString()`-Methode eine String-Darstellung des Wertes in der angegebenen Basis zurück.

Für Basen über 10 verwenden Buchstaben des Alphabets Ziffern, die größer als 9 sind. Zum Beispiel werden für hexadezimale Zahlen (Basis 16) `a` bis `f` verwendet.

Wenn der angegebene BigInt-Wert negativ ist, wird das Vorzeichen beibehalten. Dies ist auch der Fall, wenn die Basis 2 ist; der zurückgegebene String ist die positive binäre Darstellung des BigInt-Werts, der durch ein `-`-Zeichen vorangestellt wird, **nicht** das Zweierkomplement des BigInt-Werts.

Die `toString()`-Methode erfordert, dass der `this`-Wert ein `BigInt`-Primitive oder Wrapper-Objekt ist. Sie löst einen {{jsxref("TypeError")}} aus, wenn andere `this`-Werte vorliegen, ohne zu versuchen, sie in BigInt-Werte zu konvertieren.

Da `BigInt` keine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)-Methode hat, ruft JavaScript die `toString()`-Methode automatisch auf, wenn ein `BigInt`-Objekt in einem Kontext verwendet wird, der einen String erwartet, wie in einem [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals). BigInt-Primitive-Werte greifen jedoch nicht auf die `toString()`-Methode zurück, um [in Strings umgewandelt zu werden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) — sie werden direkt mit dem gleichen Algorithmus wie die anfängliche `toString()`-Implementierung konvertiert.

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

### Negative-Null-BigInt

Es gibt kein Negative-Null-`BigInt`, da es keine negativen Nullen bei ganzen Zahlen gibt. `-0.0` ist ein IEEE-Gleitkomma-Konzept, das nur im JavaScript-`Number`-Typ erscheint.

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
