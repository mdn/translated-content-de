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
      - : Die iterierte Map.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die Methode `forEach` führt die bereitgestellte `callback` einmal für jeden vorhandenen Schlüssel der Map aus. Sie wird nicht für gelöschte Schlüssel aufgerufen. Sie wird jedoch für Werte ausgeführt, die vorhanden sind, aber den Wert `undefined` haben.

`callback` wird mit **drei Argumenten** aufgerufen:

- dem `value` des Eintrags
- dem `key` des Eintrags
- dem durchlaufenen **`Map`-Objekt**

Wenn ein `thisArg`-Parameter an `forEach` übergeben wird, wird er beim Aufruf an `callback` übergeben und als dessen `this`-Wert verwendet. Andernfalls wird der Wert `undefined` als `this`-Wert verwendet. Der letztlich von `callback` beobachtbare `this`-Wert wird gemäß [den üblichen Regeln zur Bestimmung des `this`-Werts einer Funktion](/de/docs/Web/JavaScript/Reference/Operators/this) bestimmt.

Jeder Wert wird einmal besucht, es sei denn, er wurde gelöscht und erneut hinzugefügt, bevor `forEach` abgeschlossen ist. `callback` wird nicht für Werte aufgerufen, die vor ihrem Besuch gelöscht wurden. Vor Abschluss von `forEach` hinzugefügte neue Werte werden besucht.

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
