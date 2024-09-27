---
title: "DOMPointReadOnly: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/DOMPointReadOnly/toJSON
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)-Methode `toJSON()` gibt ein Objekt zurück, das die [JSON](/de/docs/Glossary/JSON)-Form des Punktobjekts darstellt.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt, dessen Eigenschaften auf die Werte des `DOMPoint` oder `DOMPointReadOnly`, auf dem die Methode aufgerufen wurde, gesetzt sind.

## Beispiele

Dieses Beispiel erstellt ein [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt, das die obere linke Ecke des aktuellen Fensters in Bildschirmkoordinaten darstellt, und wandelt dieses dann in JSON um.

```js
const topLeft = new DOMPoint(window.screenX, window.screenY);

const pointJSON = topLeft.toJSON();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
