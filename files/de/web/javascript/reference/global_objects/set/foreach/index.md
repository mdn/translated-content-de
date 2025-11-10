---
title: Set.prototype.forEach()
short-title: forEach()
slug: Web/JavaScript/Reference/Global_Objects/Set/forEach
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`forEach()`** Methode von {{jsxref("Set")}}-Instanzen führt eine bereitgestellte Funktion einmal für jeden Wert in dieser Menge in der Einfügereihenfolge aus.

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
  - : Eine Funktion, die für jeden Eintrag in der Menge ausgeführt wird. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `value`
      - : Wert jeder Iteration.
    - `key`
      - : Schlüssel jeder Iteration. Dies ist immer identisch mit `value`.
    - `set`
      - : Die Menge, die durchlaufen wird.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die `forEach()`-Methode führt die bereitgestellte `callback`-Funktion einmal für jeden Wert aus, der tatsächlich im `Set`-Objekt vorhanden ist. Sie wird nicht für bereits gelöschte Werte aufgerufen. Sie wird jedoch für Werte ausgeführt, die vorhanden sind, aber den Wert `undefined` haben.

`callback` wird mit **drei Argumenten** aufgerufen:

- der **Elementwert**
- der **Elementschlüssel**
- das durchlaufene **`Set`-Objekt**

In `Set`-Objekten gibt es keine Schlüssel, daher sind die ersten beiden Argumente beide **Werte**, die im {{jsxref("Set")}} enthalten sind. Dies dient der Konsistenz mit anderen `forEach()`-Methoden für {{jsxref("Map/foreach", "Map")}} und {{jsxref("Array/forEach", "Array")}}.

Wenn ein `thisArg`-Parameter an `forEach()` übergeben wird, wird er an `callback` übergeben, wenn diese aufgerufen wird, um als `this`-Wert verwendet zu werden. Andernfalls wird der Wert `undefined` zur Verwendung als `this`-Wert übergeben. Der letztendlich durch `callback` beobachtbare `this`-Wert wird gemäß [den üblichen Regeln zur Bestimmung des `this`-Werts einer Funktion](/de/docs/Web/JavaScript/Reference/Operators/this) bestimmt.

Jeder Wert wird einmal besucht, außer wenn er gelöscht und vor dem Abschluss von `forEach()` wieder hinzugefügt wurde. `callback` wird nicht für vor dem Besuch gelöschte Werte aufgerufen. Neue Werte, die vor dem Abschluss von `forEach()` hinzugefügt wurden, werden besucht.

`forEach()` führt die `callback`-Funktion einmal für jedes Element im `Set`-Objekt aus; es gibt keinen Rückgabewert.

## Beispiele

### Inhalte eines Set-Objekts protokollieren

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
