---
title: Boolean.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/toString
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Die **`toString()`** Methode von {{jsxref("Boolean")}}-Werten gibt eine Zeichenkette zurück, die den angegebenen booleschen Wert darstellt.

{{EmbedInteractiveExample("pages/js/boolean-tostring.html")}}

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenkette, die den angegebenen booleschen Wert darstellt.

## Beschreibung

Das {{jsxref("Boolean")}}-Objekt überschreibt die `toString`-Methode von {{jsxref("Object")}}; es erbt nicht von
{{jsxref("Object.prototype.toString()")}}. Für `Boolean`-Werte gibt die `toString`-Methode eine Zeichenketten-Darstellung des booleschen Werts zurück, die entweder `"true"` oder `"false"` ist.

Die `toString()`-Methode erfordert, dass ihr `this`-Wert ein `Boolean`-Primitiv oder Wrapper-Objekt ist. Sie löst einen {{jsxref("TypeError")}} aus, wenn andere `this`-Werte ohne den Versuch, sie zu booleschen Werten umzuwandeln, verwendet werden.

Da `Boolean` keine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)-Methode hat, wird die `toString()`-Methode von JavaScript automatisch aufgerufen, wenn ein `Boolean`-Objekt in einem Kontext verwendet wird, der eine Zeichenkette erwartet, wie etwa in einem [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals). Für boolesche _Primitiv_werte wird die `toString()`-Methode jedoch nicht herangezogen, um [in Zeichenketten umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) zu werden — stattdessen werden sie direkt mit demselben Algorithmus wie die ursprüngliche `toString()`-Implementierung konvertiert.

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
