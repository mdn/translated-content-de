---
title: Map.prototype.forEach()
short-title: forEach()
slug: Web/JavaScript/Reference/Global_Objects/Map/forEach
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`forEach()`**-Methode von {{jsxref("Map")}}-Instanzen führt eine bereitgestellte Funktion einmal pro Schlüssel/Wert-Paar in dieser Map aus, und zwar in Einfügereihenfolge.

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
      - : Wert der jeweiligen Iteration.
    - `key`
      - : Schlüssel der jeweiligen Iteration.
    - `map`
      - : Die zu durchlaufende Map.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die `forEach`-Methode führt den bereitgestellten `callback` einmal für jeden tatsächlich existierenden Schlüssel der Map aus. Sie wird nicht für gelöschte Schlüssel aufgerufen. Sie wird jedoch für Werte ausgeführt, die vorhanden sind, aber den Wert `undefined` haben.

`callback` wird mit **drei Argumenten** aufgerufen:

- dem Eintrags-`value`
- dem Eintrags-`key`
- dem durchlaufenden **`Map`-Objekt**

Wenn ein `thisArg`-Parameter an `forEach` übergeben wird, wird dieser an `callback` übergeben, um als dessen `this`-Wert verwendet zu werden. Andernfalls wird der Wert `undefined` übergeben, um als dessen `this`-Wert verwendet zu werden. Der schließlich von `callback` beobachtbare `this`-Wert wird gemäß [den üblichen Regeln zur Bestimmung des von einer Funktion gesehenen `this`](/de/docs/Web/JavaScript/Reference/Operators/this) bestimmt.

Jeder Wert wird einmal besucht, außer wenn er gelöscht und neu hinzugefügt wurde, bevor `forEach` beendet ist. `callback` wird nicht für Werte aufgerufen, die vor dem Besuch gelöscht wurden. Neue Werte, die hinzugefügt wurden, bevor `forEach` beendet ist, werden besucht.

## Beispiele

### Den Inhalt eines Map-Objekts ausgeben

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
