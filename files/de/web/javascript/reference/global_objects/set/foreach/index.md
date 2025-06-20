---
title: Set.prototype.forEach()
short-title: forEach()
slug: Web/JavaScript/Reference/Global_Objects/Set/forEach
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`forEach()`**-Methode von {{jsxref("Set")}}-Instanzen führt eine bereitgestellte Funktion für jeden Wert in diesem Set in Einfügereihenfolge aus.

{{InteractiveExample("JavaScript Demo: Set.prototype.forEach()")}}

```js interactive-example
function logSetElements(value1, value2, set) {
  console.log(`s[${value1}] = ${value2}`);
}

new Set(["foo", "bar", undefined]).forEach(logSetElements);

// Expected output: "s[foo] = foo"
// Expected output: "s[bar] = bar"
// Expected output: "s[undefined] = undefined"
```

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callback`
  - : Eine Funktion, die für jeden Eintrag im Set ausgeführt wird. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `value`
      - : Wert jeder Iteration.
    - `key`
      - : Schlüssel jeder Iteration. Dieser ist immer identisch mit `value`.
    - `set`
      - : Das Set, das durchlaufen wird.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die `forEach()`-Methode führt die bereitgestellte
`callback` einmal für jeden Wert aus, der tatsächlich im
`Set`-Objekt existiert. Sie wird nicht für Werte aufgerufen, die gelöscht wurden. Allerdings
wird sie für Werte ausgeführt, die vorhanden sind, aber den Wert `undefined` haben.

`callback` wird mit **drei Argumenten** aufgerufen:

- der **Elementwert**
- der **Elemtschlüssel**
- das **`Set`-Objekt, das durchlaufen wird**

Es gibt keine Schlüssel in `Set`-Objekten, daher sind die ersten beiden Argumente
beide **Werte**, die im {{jsxref("Set")}} enthalten sind. Dies soll es
konsistent mit anderen `forEach()`-Methoden für {{jsxref("Map/foreach", "Map")}} und {{jsxref("Array/forEach", "Array")}} machen.

Wenn ein `thisArg`-Parameter an `forEach()` übergeben wird,
wird er beim Aufruf an `callback` weitergegeben und als
dessen `this`-Wert verwendet. Andernfalls wird der Wert `undefined` für
dessen `this`-Wert verwendet. Der letztendlich durch
`callback` beobachtbare `this`-Wert wird gemäß
[den üblichen Regeln zur Bestimmung des durch eine Funktion sichtbaren `this`](/de/docs/Web/JavaScript/Reference/Operators/this) bestimmt.

Jeder Wert wird einmal besucht, außer wenn er gelöscht und erneut hinzugefügt wurde, bevor
`forEach()` beendet ist. `callback` wird nicht für
Werte aufgerufen, die gelöscht wurden, bevor sie besucht wurden. Neue Werte, die hinzugefügt wurden, bevor `forEach()` beendet ist, werden besucht.

`forEach()` führt die `callback`-Funktion einmal für
jedes Element im `Set`-Objekt aus; sie gibt keinen Wert zurück.

## Beispiele

### Protokollieren des Inhalts eines Set-Objekts

Der folgende Code protokolliert eine Zeile für jedes Element in einem `Set`-Objekt:

```js
function logSetElements(value1, value2, set) {
  console.log(`s[${value1}] = ${value2}`);
}

new Set(["foo", "bar", undefined]).forEach(logSetElements);

// Logs:
// "s[foo] = foo"
// "s[bar] = bar"
// "s[undefined] = undefined"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
