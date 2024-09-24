---
title: Map.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Map/forEach
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`forEach()`**-Methode von {{jsxref("Map")}}-Instanzen führt eine bereitgestellte Funktion einmal pro Schlüssel/Wert-Paar in dieser Map in Einfügereihenfolge aus.

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
      - : Die zu durchlaufende Map.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die Methode `forEach` führt das bereitgestellte `callback` einmal für jeden existierenden Schlüssel der Map aus. Sie wird nicht für gelöschte Schlüssel aufgerufen. Sie wird jedoch für vorhandene Werte ausgeführt, die den Wert `undefined` haben.

`callback` wird mit **drei Argumenten** aufgerufen:

- dem `value` des Eintrags
- dem `key` des Eintrags
- dem **`Map`-Objekt**, das durchlaufen wird

Wenn ein `thisArg`-Parameter an `forEach` übergeben wird, wird er an `callback` übergeben, um als sein `this`-Wert verwendet zu werden. Andernfalls wird der Wert `undefined` als `this`-Wert übergeben. Der letztendlich von `callback` beobachtbare `this`-Wert wird gemäß
[den üblichen Regeln zur Bestimmung des von einer Funktion gesehenen `this`](/de/docs/Web/JavaScript/Reference/Operators/this) bestimmt.

Jeder Wert wird einmal besucht, außer im Fall, dass er gelöscht und erneut hinzugefügt wurde, bevor `forEach` abgeschlossen ist. `callback` wird nicht für Werte aufgerufen, die vor dem Besuch gelöscht wurden. Neue Werte, die hinzugefügt werden, bevor `forEach` abgeschlossen ist, werden besucht.

## Beispiele

### Der Inhalt eines Map-Objekts ausgeben

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
// Protokolliert:
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
