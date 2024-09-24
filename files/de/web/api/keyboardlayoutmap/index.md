---
title: KeyboardLayoutMap
slug: Web/API/KeyboardLayoutMap
l10n:
  sourceCommit: e92950d09467164afc9dfd8b35be9c909b63a8ab
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}

Das **`KeyboardLayoutMap`** Interface der {{domxref("Keyboard API", "", "", "nocode")}} ist ein schreibgeschütztes Objekt mit Funktionen zum Abrufen des Strings, der bestimmten physischen Tasten zugeordnet ist.

Eine Instanz von `KeyboardLayoutMap` ist ein schreibgeschütztes [Map-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis), wobei jeder Schlüssel ein String ist, der die eindeutige physische Taste auf der Tastatur identifiziert (ein "Tastencode"), und der entsprechende Wert ist der zugeordnete Tastenattributwert (der durch das Tastaturlayout und so weiter beeinflusst werden kann).

Eine Liste gültiger Schlüssel befindet sich in der Spezifikation der [UI Events KeyboardEvent code Values](https://www.w3.org/TR/uievents-code/#key-alphanumeric-writing-system).

## Instanz-Eigenschaften

- {{domxref('KeyboardLayoutMap.size')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt die Anzahl der Elemente im `KeyboardLayoutMap` Objekt zurück.

## Instanz-Methoden

- `KeyboardLayoutMap[Symbol.iterator]()` {{experimental_inline}}
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) Objekt zurück, das die Schlüssel/Wert-Paare enthält.
- {{domxref('KeyboardLayoutMap.entries()')}} {{experimental_inline}}
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) Objekt zurück, das die Schlüssel/Wert-Paare enthält.
- {{domxref('KeyboardLayoutMap.forEach()')}} {{experimental_inline}}
  - : Führt eine bereitgestellte Funktion einmal für jedes Element von `KeyboardLayoutMap` aus.
- {{domxref('KeyboardLayoutMap.get()')}} {{experimental_inline}}
  - : Gibt das Element mit dem gegebenen Schlüssel aus dem `KeyboardLayoutMap` Objekt zurück.
- {{domxref('KeyboardLayoutMap.has()')}} {{experimental_inline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob das `KeyboardLayoutMap` Objekt ein Element mit dem angegebenen Schlüssel hat.
- {{domxref('KeyboardLayoutMap.keys()')}} {{experimental_inline}}
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) Objekt zurück, das die Schlüssel für jeden Index im `KeyboardLayoutMap` Objekt enthält.
- {{domxref('KeyboardLayoutMap.values()')}} {{experimental_inline}}
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) Objekt zurück, das die Werte für jeden Index im `KeyboardLayoutMap` Objekt enthält.

## Beispiele

Das folgende Beispiel zeigt, wie Sie den standort- oder layoutspezifischen String abrufen, der dem Tastencode entspricht, der dem 'W'-Schlüssel auf einer englischen QWERTY-Tastatur entspricht.

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
