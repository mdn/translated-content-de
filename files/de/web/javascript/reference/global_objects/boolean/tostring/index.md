---
title: Boolean.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/toString
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("Boolean")}}-Werten gibt eine Zeichenfolge zurück, die den angegebenen booleschen Wert darstellt.

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

Eine Zeichenfolge, die den angegebenen booleschen Wert darstellt.

## Beschreibung

Das {{jsxref("Boolean")}}-Objekt überschreibt die `toString`-Methode von {{jsxref("Object")}}; es erbt nicht von
{{jsxref("Object.prototype.toString()")}}. Für `Boolean`-Werte gibt die `toString`-Methode eine Zeichenfolgenrepräsentation des booleschen Werts zurück, die entweder `"true"` oder `"false"` ist.

Die `toString()`-Methode erfordert, dass ihr `this`-Wert ein `Boolean`-Primärwert oder Wrapper-Objekt ist. Sie löst einen {{jsxref("TypeError")}} für andere `this`-Werte aus, ohne zu versuchen, diese in boolesche Werte zu zwingen.

Da `Boolean` keine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)-Methode besitzt, ruft JavaScript die `toString()`-Methode automatisch auf, wenn ein `Boolean`-Objekt in einem Kontext verwendet wird, der eine Zeichenfolge erwartet, wie z. B. in einem [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals). Boolean-Primitive Werte hingegen konsultieren die `toString()`-Methode nicht, um in Zeichenfolgen [umgewandelt zu werden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) — vielmehr werden sie direkt mithilfe desselben Algorithmus wie die anfängliche `toString()`-Implementierung konvertiert.

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
