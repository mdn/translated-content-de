---
title: Map.prototype.forEach()
short-title: forEach()
slug: Web/JavaScript/Reference/Global_Objects/Map/forEach
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Die **`forEach()`**-Methode von {{jsxref("Map")}}-Instanzen führt eine bereitgestellte Funktion einmal pro Schlüssel/Wert-Paar in dieser Map in der Einfügereihenfolge aus.

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
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die `forEach`-Methode führt den bereitgestellten `callback` einmal für jeden in der Map tatsächlich vorhandenen Schlüssel aus. Sie wird nicht für Schlüssel aufgerufen, die gelöscht wurden. Sie wird jedoch für Werte ausgeführt, die vorhanden sind, aber den Wert `undefined` haben.

`callback` wird mit **drei Argumenten** aufgerufen:

- dem `value` des Eintrags
- dem `key` des Eintrags
- dem durchlaufenen **`Map`-Objekt**

Wenn ein `thisArg`-Parameter an `forEach` übergeben wird, wird er an `callback` weitergegeben, um als `this`-Wert verwendet zu werden. Andernfalls wird der Wert `undefined` zur Nutzung als `this`-Wert weitergegeben. Der schließlich von `callback` observable `this`-Wert wird gemäß [den üblichen Regeln zur Bestimmung des `this`, das von einer Funktion gesehen wird](/de/docs/Web/JavaScript/Reference/Operators/this) bestimmt.

Jeder Wert wird einmal besucht, außer in dem Fall, dass er gelöscht und wieder hinzugefügt wurde, bevor `forEach` abgeschlossen ist. `callback` wird nicht für Werte aufgerufen, die vor dem Besuch gelöscht wurden. Neue Werte, die hinzugefügt werden, bevor `forEach` abgeschlossen ist, werden besucht.

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
