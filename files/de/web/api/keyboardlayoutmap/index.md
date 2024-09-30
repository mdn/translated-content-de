---
title: KeyboardLayoutMap
slug: Web/API/KeyboardLayoutMap
l10n:
  sourceCommit: e92950d09467164afc9dfd8b35be9c909b63a8ab
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}

Das **`KeyboardLayoutMap`**-Interface der [Keyboard API](/de/docs/Web/API/Keyboard_API) ist ein schreibgeschütztes Objekt mit Funktionen zum Abrufen des Strings, der mit bestimmten physischen Tasten verknüpft ist.

Eine Instanz von `KeyboardLayoutMap` ist ein schreibgeschütztes [Map-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis), bei dem jeder Schlüssel ein String ist, der die eindeutige physische Taste auf der Tastatur identifiziert (ein "Key-Code"), und der entsprechende Wert ist der zugehörige Schlüsselattributwert (der durch das Tastaturlayout und andere Faktoren beeinflusst werden kann).

Eine Liste gültiger Schlüssel finden Sie in der Spezifikation der [UI Events KeyboardEvent code Values](https://www.w3.org/TR/uievents-code/#key-alphanumeric-writing-system).

## Instanz-Eigenschaften

- [`KeyboardLayoutMap.size`](/de/docs/Web/API/KeyboardLayoutMap/size) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt die Anzahl der Elemente im `KeyboardLayoutMap`-Objekt zurück.

## Instanz-Methoden

- `KeyboardLayoutMap[Symbol.iterator]()` {{experimental_inline}}
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das die Schlüssel/Wert-Paare enthält.
- [`KeyboardLayoutMap.entries()`](/de/docs/Web/API/KeyboardLayoutMap/entries) {{experimental_inline}}
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das die Schlüssel/Wert-Paare enthält.
- [`KeyboardLayoutMap.forEach()`](/de/docs/Web/API/KeyboardLayoutMap/forEach) {{experimental_inline}}
  - : Führt eine bereitgestellte Funktion einmal für jedes Element von `KeyboardLayoutMap` aus.
- [`KeyboardLayoutMap.get()`](/de/docs/Web/API/KeyboardLayoutMap/get) {{experimental_inline}}
  - : Gibt das Element mit dem angegebenen Schlüssel aus dem `KeyboardLayoutMap`-Objekt zurück.
- [`KeyboardLayoutMap.has()`](/de/docs/Web/API/KeyboardLayoutMap/has) {{experimental_inline}}
  - : Gibt einen Boolean zurück, der angibt, ob das `KeyboardLayoutMap`-Objekt ein Element mit dem angegebenen Schlüssel enthält.
- [`KeyboardLayoutMap.keys()`](/de/docs/Web/API/KeyboardLayoutMap/keys) {{experimental_inline}}
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das die Schlüssel für jeden Index im `KeyboardLayoutMap`-Objekt enthält.
- [`KeyboardLayoutMap.values()`](/de/docs/Web/API/KeyboardLayoutMap/values) {{experimental_inline}}
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das die Werte für jeden Index im `KeyboardLayoutMap`-Objekt enthält.

## Beispiele

Das folgende Beispiel zeigt, wie der standort- oder layoutspezifische String abgerufen wird, der mit dem Tastencode übereinstimmt, der der Taste 'W' auf einer englischen QWERTY-Tastatur entspricht.

```js
navigator.keyboard.getLayoutMap().then((keyboardLayoutMap) => {
  const upKey = keyboardLayoutMap.get("KeyW");
  window.alert(`Press ${upKey} to move up.`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
