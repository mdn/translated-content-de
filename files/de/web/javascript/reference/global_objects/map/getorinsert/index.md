---
title: Map.prototype.getOrInsert()
short-title: getOrInsert()
slug: Web/JavaScript/Reference/Global_Objects/Map/getOrInsert
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`getOrInsert()`** von {{jsxref("Map")}}-Instanzen gibt den Wert zurück, der dem angegebenen Schlüssel in dieser `Map` zugeordnet ist. Ist der Schlüssel nicht vorhanden, fügt sie einen neuen Eintrag mit dem Schlüssel und einem angegebenen Standardwert ein und gibt den eingefügten Wert zurück.

Wenn die Berechnung des Standardwerts aufwendig ist, verwenden Sie stattdessen {{jsxref("Map.prototype.getOrInsertComputed()")}}. Diese Methode erwartet eine Callback-Funktion, die den Standardwert nur dann berechnet, wenn er tatsächlich benötigt wird.

{{InteractiveExample("JavaScript Demo: Map.prototype.getOrInsert()")}}

```js interactive-example
const map = new Map([["bar", "foo"]]);
console.log(map.getOrInsert("bar", "default"));
// Expected output: "foo"

console.log(map.getOrInsert("baz", "default"));
// Expected output: "default"
```

## Syntax

```js-nolint
getOrInsert(key, defaultValue)
```

### Parameter

- `key`
  - : Der Schlüssel des Werts, der aus dem `Map`-Objekt zurückgegeben werden soll. Objektschlüssel werden anhand ihrer {{Glossary("Object_reference", "Referenz")}} verglichen, nicht anhand ihres Werts.
- `defaultValue`
  - : Der Wert, der eingefügt und zurückgegeben wird, wenn der Schlüssel im `Map`-Objekt noch nicht vorhanden ist.

### Rückgabewert

Der Wert, der dem angegebenen Schlüssel im `Map`-Objekt zugeordnet ist. Wenn der Schlüssel nicht gefunden wird, wird `defaultValue` eingefügt und zurückgegeben.

## Beschreibung

Die Methode `getOrInsert()` entspricht Folgendem:

```js
if (map.has(key)) {
  return map.get(key);
}
map.set(key, defaultValue);
return defaultValue;
```

Sie ähnelt auch dem folgenden Muster (das etwas weniger zuverlässig ist, wenn `null` oder `undefined` gültige Werte in Ihrer Map sind):

```js
map.set(key, map.get(key) ?? defaultValue);
```

## Beispiele

### Multimap

In einer Map, in der jedem Schlüssel ein Array von Werten zugeordnet ist, können Sie mit `getOrInsert()` sicherstellen, dass das Array für einen bestimmten Schlüssel existiert, bevor Sie ihm einen neuen Wert hinzufügen.

```js
map.getOrInsert(key, []).push(value);
```

### Standardwerte anwenden

Mit `getOrInsert()` können Sie sicherstellen, dass ein Schlüssel in einer Map vorhanden ist, auch wenn Sie seinen Wert derzeit nicht benötigen. Dies dient üblicherweise dazu, Benutzereingaben zu normalisieren.

Angenommen, Sie haben eine Map mit Benutzereinstellungen und möchten sicherstellen, dass eine bestimmte Einstellung immer einen Standardwert erhält, wenn der Benutzer sie nicht festgelegt hat:

```js
const options = readConfig();
options.getOrInsert("theme", "light");
options.getOrInsert("fontSize", 14);

// Later in your code, you can safely assume these options exist
document.body.dataset.theme = options.get("theme");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Map.prototype.getOrInsert` in `core-js`](https://core-js.io/docs/features/ecmascript/collections#h-map)
- [es-shims-Polyfill für `Map.prototype.getOrInsert`](https://www.npmjs.com/package/map.prototype.getorinsert)
- {{jsxref("Map")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.has()")}}
- {{jsxref("Map.prototype.getOrInsertComputed()")}}
