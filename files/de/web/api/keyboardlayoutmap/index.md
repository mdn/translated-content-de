---
title: KeyboardLayoutMap
slug: Web/API/KeyboardLayoutMap
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}

Die **`KeyboardLayoutMap`**-Schnittstelle der [Keyboard API](/de/docs/Web/API/Keyboard_API) ist ein schreibgeschütztes Objekt mit Funktionen zum Abrufen des mit bestimmten physischen Tasten verknüpften Strings.

Eine `KeyboardLayoutMap`-Instanz ist ein schreibgeschütztes [Map-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis), in dem jeder Schlüssel eine Zeichenkette ist, die die eindeutige physische Taste auf der Tastatur identifiziert (ein "Keycode"), und der entsprechende Wert ist der zugeordnete Tastenattributwert (der möglicherweise durch das Tastaturlayout beeinflusst wird und so weiter).

Eine Liste gültiger Tasten ist in der Spezifikation [UI Events KeyboardEvent code Values](https://w3c.github.io/uievents-code/) zu finden.

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
  - : Gibt einen Boolean zurück, der anzeigt, ob das `KeyboardLayoutMap`-Objekt ein Element mit dem angegebenen Schlüssel enthält.
- [`KeyboardLayoutMap.keys()`](/de/docs/Web/API/KeyboardLayoutMap/keys) {{experimental_inline}}
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das die Schlüssel für jeden Index im `KeyboardLayoutMap`-Objekt enthält.
- [`KeyboardLayoutMap.values()`](/de/docs/Web/API/KeyboardLayoutMap/values) {{experimental_inline}}
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das die Werte für jeden Index im `KeyboardLayoutMap`-Objekt enthält.

## Beispiele

Das folgende Beispiel demonstriert, wie der orts- oder layout-spezifische String abgerufen wird, der dem Tastaturcode entspricht, der der 'W'-Taste auf einer englischen QWERTY-Tastatur entspricht.

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
