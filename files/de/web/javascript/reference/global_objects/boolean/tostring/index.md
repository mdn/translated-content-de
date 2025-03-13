---
title: Boolean.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/toString
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`toString()`** Methode von {{jsxref("Boolean")}} Werten gibt einen String zurück, der den angegebenen Boolean-Wert repräsentiert.

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

Ein String, der den angegebenen Boolean-Wert repräsentiert.

## Beschreibung

Das {{jsxref("Boolean")}} Objekt überschreibt die `toString` Methode von {{jsxref("Object")}}; es erbt nicht von
{{jsxref("Object.prototype.toString()")}}. Bei `Boolean` Werten gibt die `toString` Methode eine String-Repräsentation des Boolean-Wertes zurück, die entweder `"true"` oder `"false"` ist.

Die `toString()` Methode erfordert, dass ihr `this` Wert ein `Boolean`-Basiswert oder Wrapper-Objekt ist. Sie wirft einen {{jsxref("TypeError")}}, wenn andere `this` Werte verwendet werden, ohne zu versuchen, sie in Boolean-Werte zu konvertieren.

Da `Boolean` keine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) Methode hat, ruft JavaScript die `toString()` Methode automatisch auf, wenn ein `Boolean`-Objekt in einem Kontext verwendet wird, der einen String erwartet, wie zum Beispiel in einer [Template-Zeichenkette](/de/docs/Web/JavaScript/Reference/Template_literals). Allerdings konsultieren primitive Boolean-Werte die `toString()` Methode nicht, um in Strings [umgewandelt zu werden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) — vielmehr werden sie direkt unter Verwendung desselben Algorithmus wie bei der ursprünglichen `toString()` Implementierung konvertiert.

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
