---
title: Boolean.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`toString()`**-Methode von {{jsxref("Boolean")}}-Werten gibt einen String zurück, der den angegebenen booleschen Wert darstellt.

{{InteractiveExample("JavaScript Demo: Boolean.prototype.toString()")}}

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

Ein String, der den angegebenen booleschen Wert darstellt.

## Beschreibung

Das {{jsxref("Boolean")}}-Objekt überschreibt die `toString`-Methode von {{jsxref("Object")}}; es erbt nicht
{{jsxref("Object.prototype.toString()")}}. Für `Boolean`-Werte gibt die `toString`-Methode eine String-Darstellung des booleschen Wertes zurück, die entweder `"true"` oder `"false"` ist.

Die `toString()`-Methode erfordert, dass ihr `this`-Wert ein `Boolean`-Primitiv oder Wrapper-Objekt ist. Sie löst einen {{jsxref("TypeError")}} für andere `this`-Werte aus, ohne zu versuchen, sie in boolesche Werte zu erzwingen.

Da `Boolean` keine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)-Methode hat, ruft JavaScript die `toString()`-Methode automatisch auf, wenn ein `Boolean`-Objekt in einem Kontext verwendet wird, der einen String erwartet, wie z.B. in einem [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals). Allerdings konsultieren boolesche _Primitive_ die `toString()`-Methode nicht, um in Strings [umgewandelt zu werden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) — vielmehr werden sie direkt mit demselben Algorithmus wie die ursprüngliche `toString()`-Implementierung konvertiert.

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
