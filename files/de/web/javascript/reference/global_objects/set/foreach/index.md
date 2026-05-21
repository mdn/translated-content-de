---
title: Set.prototype.forEach()
short-title: forEach()
slug: Web/JavaScript/Reference/Global_Objects/Set/forEach
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

Die **`forEach()`**-Methode von {{jsxref("Set")}}-Instanzen führt eine bereitgestellte Funktion einmal pro Wert in diesem Set in der Einfügereihenfolge aus.

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
      - : Schlüssel jeder Iteration. Dieser ist immer gleich dem `value`.
    - `set`
      - : Das Set, das durchlaufen wird.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die `forEach()`-Methode führt die bereitgestellte
`callback`-Funktion einmal für jeden Wert aus, der tatsächlich im
`Set`-Objekt existiert. Sie wird nicht für Werte aufgerufen, die gelöscht wurden. Sie wird jedoch für Werte, die vorhanden sind, aber den Wert `undefined` haben, ausgeführt.

`callback` wird mit **drei Argumenten** aufgerufen:

- dem **Elementwert**
- dem **Elementschlüssel**
- dem **durchlaufenen `Set`-Objekt**

Es gibt keine Schlüssel in `Set`-Objekten, daher sind die ersten beiden Argumente
beide **Werte**, die im {{jsxref("Set")}} enthalten sind. Dies dient der Konsistenz mit anderen `forEach()`-Methoden für {{jsxref("Map/forEach", "Map")}} und {{jsxref("Array/forEach", "Array")}}.

Wenn ein `thisArg`-Parameter an `forEach()` übergeben wird,
wird er an `callback` weitergegeben, wenn es aufgerufen wird, zur Verwendung als dessen
`this`-Wert. Andernfalls wird der Wert `undefined` zur Verwendung als dessen
`this`-Wert weitergegeben. Der letztlich von `callback` beobachtbare `this`-Wert wird gemäß
[den üblichen Regeln zur Bestimmung des von einer Funktion gesehenen `this`](/de/docs/Web/JavaScript/Reference/Operators/this) bestimmt.

Jeder Wert wird einmal besucht, außer im Fall, dass er gelöscht und vor
Beendigung von `forEach()` erneut hinzugefügt wurde. `callback` wird nicht für
Werte aufgerufen, die vor dem Besuch gelöscht wurden. Neue Werte, die vor Beendigung von `forEach()` hinzugefügt werden, werden besucht.

`forEach()` führt die `callback`-Funktion einmal für jedes Element im `Set`-Objekt aus; es gibt keinen Wert zurück.

## Beispiele

### Das Protokollieren des Inhalts eines Set-Objekts

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
