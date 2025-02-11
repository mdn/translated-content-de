---
title: Boolean.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/toString
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("Boolean")}}-Werten gibt einen String zurück, der den angegebenen Boolean-Wert repräsentiert.

{{InteractiveExample("JavaScript Demo: Boolean.toString()")}}

```js interactive-example
const flag1 = new Boolean(true);

console.log(flag1.toString());
// Expected output: "true"

const flag2 = new Boolean(1);

console.log(flag2.toString());
// Expected output: "true"
```

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der den angegebenen Boolean-Wert repräsentiert.

## Beschreibung

Das {{jsxref("Boolean")}}-Objekt überschreibt die `toString`-Methode von {{jsxref("Object")}}; es erbt nicht von {{jsxref("Object.prototype.toString()")}}. Für `Boolean`-Werte gibt die `toString`-Methode eine Zeichenkettenrepräsentation des Boolean-Wertes zurück, entweder `"true"` oder `"false"`.

Die `toString()`-Methode erfordert, dass ihr `this`-Wert ein `Boolean`-Primitivwert oder ein Wrapper-Objekt ist. Sie wirft einen {{jsxref("TypeError")}}, wenn der `this`-Wert andere Werte hat, ohne zu versuchen, diese in Boolean-Werte umzuwandeln.

Da `Boolean` keine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)-Methode besitzt, ruft JavaScript die `toString()`-Methode automatisch auf, wenn ein `Boolean`-Objekt in einem Kontext verwendet wird, der eine Zeichenkette erwartet, wie beispielsweise in einem [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals). Boolean-Primitivwerte konsultieren jedoch nicht die `toString()`-Methode, um in [Zeichenketten umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) zu werden — stattdessen werden sie direkt mit demselben Algorithmus wie bei der initialen `toString()`-Implementierung konvertiert.

```js
Boolean.prototype.toString = () => "Overridden";
console.log(`${true}`); // "true"
console.log(`${new Boolean(true)}`); // "Overridden"
```

## Beispiele

### Verwendung von toString()

```js
const flag = new Boolean(true);
console.log(flag.toString()); // "true"
console.log(false.toString()); // "false"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object.prototype.toString()")}}
