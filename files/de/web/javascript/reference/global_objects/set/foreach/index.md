---
title: Set.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Set/forEach
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

Die **`forEach()`**-Methode von {{jsxref("Set")}}-Instanzen führt eine bereitgestellte Funktion einmal für jeden Wert in diesem Set in der Einfügereihenfolge aus.

{{EmbedInteractiveExample("pages/js/set-prototype-foreach.html")}}

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
      - : Schlüssel jeder Iteration. Dies ist immer derselbe wie `value`.
    - `set`
      - : Das Set, das durchlaufen wird.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` bei der Ausführung von `callbackFn` verwendet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die `forEach()`-Methode führt den bereitgestellten
`callback` einmal für jeden Wert aus, der tatsächlich im
`Set`-Objekt existiert. Sie wird nicht für Werte aufgerufen, die gelöscht wurden. Sie wird jedoch für Werte ausgeführt, die vorhanden sind, aber den Wert `undefined` haben.

`callback` wird mit **drei Argumenten** aufgerufen:

- dem **Elementwert**
- dem **Elementschlüssel**
- dem **durchlaufenen `Set`-Objekt**

Es gibt jedoch keine Schlüssel in `Set`-Objekten, daher sind die ersten beiden Argumente beide **Werte**, die im {{jsxref("Set")}} enthalten sind. Dies dient der Konsistenz mit anderen `forEach()`-Methoden für {{jsxref("Map/foreach", "Map")}} und {{jsxref("Array/forEach", "Array")}}.

Wenn ein `thisArg`-Parameter an `forEach()` übergeben wird,
wird er bei Aufruf an `callback` übergeben, um ihn als
`this`-Wert zu verwenden. Andernfalls wird der Wert `undefined` zum
Verwenden als `this`-Wert übergeben. Der letztlich von `callback` beobachtbare
`this`-Wert wird gemäß
[den üblichen Regeln zur Bestimmung des `this`, das von einer Funktion gesehen wird](/de/docs/Web/JavaScript/Reference/Operators/this) bestimmt.

Jeder Wert wird einmal besucht, außer im Fall, dass er gelöscht und wieder hinzugefügt wurde, bevor `forEach()` abgeschlossen ist. `callback` wird nicht für
Werte aufgerufen, die vor dem Besuch gelöscht wurden. Neue Werte, die hinzugefügt wurden, bevor `forEach()` abgeschlossen ist, werden besucht.

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

// Protokolle:
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
