---
title: Set.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Set/forEach
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`forEach()`**-Methode von {{jsxref("Set")}}-Instanzen führt eine angegebene Funktion einmal für jeden Wert in diesem Set in Einfügereihenfolge aus.

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
      - : Der Wert jeder Iteration.
    - `key`
      - : Der Schlüssel jeder Iteration. Dies ist immer derselbe wie `value`.
    - `set`
      - : Das Set, das durchlaufen wird.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die Methode `forEach()` führt die angegebene
`callback`-Funktion einmal für jeden Wert aus, der tatsächlich im
`Set`-Objekt existiert. Sie wird nicht für Werte aufgerufen, die gelöscht wurden. Sie wird jedoch für Werte ausgeführt, die vorhanden sind, aber den Wert `undefined` haben.

`callback` wird mit **drei Argumenten** aufgerufen:

- dem **Elementwert**
- dem **Elementschlüssel**
- dem **`Set`-Objekt, das durchlaufen wird**

In `Set`-Objekten gibt es keine Schlüssel, daher sind die ersten beiden Argumente
beide **Werte**, die im {{jsxref("Set")}} enthalten sind. Dies dient dazu, die Konsistenz mit anderen `forEach()`-Methoden, wie etwa {{jsxref("Map/foreach", "Map")}} und {{jsxref("Array/forEach", "Array")}} zu gewährleisten.

Wenn ein `thisArg`-Parameter an `forEach()` übergeben wird,
wird er bei der Ausführung an `callback` übergeben, um als
`this`-Wert verwendet zu werden. Andernfalls wird der Wert `undefined` übergeben, um
als `this`-Wert verwendet zu werden. Der letztlich von
`callback` wahrgenommene `this`-Wert wird gemäß
[den üblichen Regeln zur Ermittlung des von einer Funktion wahrgenommenen `this`](/de/docs/Web/JavaScript/Reference/Operators/this) bestimmt.

Jeder Wert wird einmal besucht, außer in dem Fall, dass er gelöscht und erneut hinzugefügt wurde, bevor
`forEach()` abgeschlossen ist. `callback` wird nicht für
Werte aufgerufen, die vor deren Besuch gelöscht wurden. Neue Werte, die hinzugefügt werden, bevor `forEach()` abgeschlossen ist, werden besucht.

`forEach()` führt die `callback`-Funktion einmal für
jedes Element im `Set`-Objekt aus; sie gibt keinen Wert zurück.

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
