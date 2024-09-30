---
title: Boolean.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/toString
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Die **`toString()`** Methode von {{jsxref("Boolean")}} Werten gibt eine Zeichenkette zurück, die den angegebenen booleschen Wert darstellt.

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

Das {{jsxref("Boolean")}} Objekt überschreibt die `toString` Methode von {{jsxref("Object")}}; es erbt nicht
{{jsxref("Object.prototype.toString()")}}. Für `Boolean` Werte gibt die `toString` Methode eine Zeichenkettendarstellung des booleschen Werts zurück, die entweder `"true"` oder `"false"` ist.

Die `toString()` Methode erfordert, dass ihr `this` Wert ein `Boolean`-Primitiv oder -Wrapper-Objekt ist. Sie löst einen {{jsxref("TypeError")}} aus, wenn andere `this`-Werte verwendet werden, ohne zu versuchen, sie in boolesche Werte umzuwandeln.

Da `Boolean` keine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) Methode hat, ruft JavaScript automatisch die `toString()` Methode auf, wenn ein `Boolean` _Objekt_ in einem Kontext verwendet wird, der eine Zeichenkette erwartet, wie z.B. in einem [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals). Allerdings konsultieren boolesche _primitive_ Werte nicht die `toString()` Methode, um in Zeichenketten [umgewandelt zu werden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) — stattdessen werden sie direkt mit demselben Algorithmus umgewandelt wie bei der ursprünglichen `toString()` Implementierung.

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
