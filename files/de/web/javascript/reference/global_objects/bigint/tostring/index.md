---
title: BigInt.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/toString
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`toString()`** Methode von {{jsxref("BigInt")}} Werten gibt einen String zurück, der den angegebenen {{jsxref("BigInt")}} Wert darstellt. Das abschließende "n" ist nicht Teil des Strings.

{{InteractiveExample("JavaScript Demo: BigInt.prototype.toString()")}}

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
  - : Ein Ganzzahlwert im Bereich von 2 bis 36, der die Basis angibt, die zur Darstellung des BigInt-Wertes verwendet werden soll. Standard ist 10.

### Rückgabewert

Ein String, der den angegebenen {{jsxref("BigInt")}} Wert darstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `radix` kleiner als 2 oder größer als 36 ist.

## Beschreibung

Das {{jsxref("BigInt")}} Objekt überschreibt die `toString` Methode von {{jsxref("Object")}}; es erbt nicht {{jsxref("Object.prototype.toString()")}}. Für {{jsxref("BigInt")}} Werte gibt die `toString()` Methode eine String-Darstellung des Wertes in der angegebenen Basis zurück.

Für Basen über 10 geben die Buchstaben des Alphabets Ziffern größer als 9 an. Zum Beispiel werden für hexadezimale Zahlen (Basis 16) die Buchstaben `a` bis `f` verwendet.

Ist der angegebene BigInt-Wert negativ, bleibt das Vorzeichen erhalten. Dies ist sogar dann der Fall, wenn die Basis 2 ist; der zurückgegebene String ist die positive Binärdarstellung des BigInt-Wertes, dem ein `-` Zeichen vorangestellt ist, **nicht** der Zweierkomplement des BigInt-Wertes.

Die `toString()` Methode erfordert, dass ihr `this` Wert ein `BigInt`-Prinzipal oder Wrapper-Objekt ist. Sie löst einen {{jsxref("TypeError")}} für andere `this` Werte aus, ohne zu versuchen, sie in BigInt-Werte zu konvertieren.

Da `BigInt` keine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) Methode hat, ruft JavaScript die `toString()` Methode automatisch auf, wenn ein `BigInt` _Objekt_ in einem Kontext verwendet wird, der einen String erwartet, wie zum Beispiel in einem [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals). BigInt _primitive_ Werte konsultieren die `toString()` Methode jedoch nicht, um [in Strings umgewandelt zu werden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) — stattdessen werden sie direkt mit dem gleichen Algorithmus wie die ursprüngliche `toString()` Implementierung umgewandelt.

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

### Negative-Zero BigInt

Es gibt kein Negative-Zero `BigInt`, da es bei ganzen Zahlen kein negatives Null gibt. `-0.0` ist ein IEEE-Gleitpunktkonzept, das nur im JavaScript [`Number`](/de/docs/Web/JavaScript/Guide/Data_structures#number_type) Typ vorkommt.

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
