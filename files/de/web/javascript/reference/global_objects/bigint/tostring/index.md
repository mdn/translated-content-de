---
title: BigInt.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/toString
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("BigInt")}}-Werten gibt eine Zeichenkette zurück, die den angegebenen {{jsxref("BigInt")}}-Wert repräsentiert. Das abschließende "n" ist nicht Teil der Zeichenkette.

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
  - : Ein ganzzahliger Wert im Bereich von 2 bis 36, der die Basis angibt, die zur Darstellung des BigInt-Wertes verwendet werden soll. Standardmäßig 10.

### Rückgabewert

Eine Zeichenkette, die den angegebenen {{jsxref("BigInt")}}-Wert repräsentiert.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `radix` kleiner als 2 oder größer als 36 ist.

## Beschreibung

Das {{jsxref("BigInt")}}-Objekt überschreibt die `toString`-Methode von {{jsxref("Object")}}; es erbt nicht {{jsxref("Object.prototype.toString()")}}. Für {{jsxref("BigInt")}}-Werte gibt die `toString()`-Methode eine Zeichenkettenrepräsentation des Wertes in der angegebenen Basis zurück.

Für Basen über 10 stehen die Buchstaben des Alphabets für Ziffern größer als 9. Zum Beispiel werden für hexadezimale Zahlen (Basis 16) `a` bis `f` verwendet.

Wenn der angegebene BigInt-Wert negativ ist, bleibt das Vorzeichen erhalten. Dies ist auch dann der Fall, wenn die Basis 2 ist; die zurückgegebene Zeichenkette ist die positive binäre Darstellung des BigInt-Wertes, vorangestellt von einem `-`-Zeichen, **nicht** das Zweierkomplement des BigInt-Wertes.

Die `toString()`-Methode erfordert, dass ihr `this`-Wert ein `BigInt`-Primitive oder Wrapper-Objekt ist. Sie löst einen {{jsxref("TypeError")}} aus für andere `this`-Werte, ohne zu versuchen, diese in BigInt-Werte umzuwandeln.

Da `BigInt` keine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)-Methode hat, ruft JavaScript die `toString()`-Methode automatisch auf, wenn ein `BigInt`-_Objekt_ in einem Kontext verwendet wird, der eine Zeichenkette erwartet, wie in einem [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals). BigInt-_Primitive_-Werte hingegen konsultieren nicht die `toString()`-Methode, um [in Zeichenketten umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) zu werden — sie werden direkt mit demselben Algorithmus wie die ursprüngliche `toString()`-Implementierung konvertiert.

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

### Negative-null BigInt

Es gibt kein negativ-null `BigInt`, da es keine negativen Nullen in Ganzzahlen gibt. `-0.0` ist ein IEEE-Gleitkomma-Konzept, das nur im JavaScript [`Number`](/de/docs/Web/JavaScript/Guide/Data_structures#number_type)-Typ vorkommt.

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
