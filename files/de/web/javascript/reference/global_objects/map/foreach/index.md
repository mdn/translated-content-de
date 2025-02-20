---
title: Map.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Map/forEach
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`forEach()`**-Methode von {{jsxref("Map")}}-Instanzen führt eine bereitgestellte Funktion einmal pro Schlüssel/Wert-Paar in dieser Map in Einfügereihenfolge aus.

{{InteractiveExample("JavaScript Demo: Map.prototype.forEach()")}}

```js interactive-example
function logMapElements(value, key, map) {
  console.log(`m[${key}] = ${value}`);
}

new Map([
  ["foo", 3],
  ["bar", {}],
  ["baz", undefined],
]).forEach(logMapElements);

// Expected output: "m[foo] = 3"
// Expected output: "m[bar] = [object Object]"
// Expected output: "m[baz] = undefined"
```

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jeden Eintrag in der Map ausgeführt wird. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `value`
      - : Wert jeder Iteration.
    - `key`
      - : Schlüssel jeder Iteration.
    - `map`
      - : Die Map, die durchlaufen wird.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die `forEach`-Methode führt den bereitgestellten `callback` einmal für jeden vorhandenen Schlüssel der Map aus. Sie wird nicht für Schlüssel aufgerufen, die gelöscht wurden. Sie wird jedoch für Werte ausgeführt, die vorhanden sind, aber den Wert `undefined` haben.

`callback` wird mit **drei Argumenten** aufgerufen:

- dem `value` des Eintrags
- dem `key` des Eintrags
- dem **`Map`-Objekt**, das durchlaufen wird

Wenn ein `thisArg`-Parameter an `forEach` übergeben wird, wird er an `callback` übergeben, wenn es aufgerufen wird, um als dessen `this`-Wert zu dienen. Andernfalls wird der Wert `undefined` übergeben, um als `this`-Wert zu dienen. Der schließlich von `callback` sichtbare `this`-Wert wird gemäß [den üblichen Regeln zur Bestimmung des `this`, das durch eine Funktion sichtbar ist](/de/docs/Web/JavaScript/Reference/Operators/this) ermittelt.

Jeder Wert wird einmal besucht, außer in dem Fall, dass er vor dem Abschluss von `forEach` gelöscht und erneut hinzugefügt wurde. `callback` wird nicht für Werte aufgerufen, die vor dem Besuch gelöscht wurden. Neue Werte, die vor dem Abschluss von `forEach` hinzugefügt werden, werden besucht.

## Beispiele

### Inhalte eines Map-Objekts ausgeben

Der folgende Code protokolliert eine Zeile für jedes Element in einem `Map`-Objekt:

```js
function logMapElements(value, key, map) {
  console.log(`map.get('${key}') = ${value}`);
}
new Map([
  ["foo", 3],
  ["bar", {}],
  ["baz", undefined],
]).forEach(logMapElements);
// Logs:
// "map.get('foo') = 3"
// "map.get('bar') = [object Object]"
// "map.get('baz') = undefined"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}
