---
title: Map.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Map/forEach
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`forEach()`**-Methode von {{jsxref("Map")}}-Instanzen führt eine bereitgestellte Funktion einmal pro Schlüssel/Wert-Paar in dieser Map in der Einfügereihenfolge aus.

{{EmbedInteractiveExample("pages/js/map-prototype-foreach.html")}}

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

Die `forEach`-Methode führt die bereitgestellte `callback`-Funktion einmal für jeden Schlüssel der Map aus, der tatsächlich existiert. Sie wird nicht für Schlüssel aufgerufen, die gelöscht wurden. Sie wird jedoch für Werte ausgeführt, die vorhanden sind, aber den Wert `undefined` haben.

`callback` wird mit **drei Argumenten** aufgerufen:

- dem `value` des Eintrags
- dem `key` des Eintrags
- dem **`Map`-Objekt**, das durchlaufen wird

Wenn ein `thisArg`-Parameter an `forEach` übergeben wird, wird dieser an `callback` weitergegeben, um als dessen `this`-Wert verwendet zu werden. Andernfalls wird der Wert `undefined` übergeben, der als dessen `this`-Wert verwendet wird. Der letztendlich von `callback` beobachtbare `this`-Wert wird gemäß [den üblichen Regeln zur Bestimmung des von einer Funktion gesehenen `this`](/de/docs/Web/JavaScript/Reference/Operators/this) bestimmt.

Jeder Wert wird einmal besucht, es sei denn, er wurde gelöscht und vor dem Abschluss von `forEach` erneut hinzugefügt. `callback` wird nicht für Werte aufgerufen, die gelöscht wurden, bevor sie besucht wurden. Neue Werte, die hinzugefügt werden, bevor `forEach` abgeschlossen ist, werden besucht.

## Beispiele

### Die Inhalte eines Map-Objekts ausgeben

Der folgende Code gibt eine Zeile für jedes Element in einem `Map`-Objekt aus:

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
