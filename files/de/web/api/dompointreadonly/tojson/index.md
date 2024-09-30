---
title: "DOMPointReadOnly: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/DOMPointReadOnly/toJSON
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die Methode `toJSON()` von [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) gibt ein Objekt zurück, das die [JSON](/de/docs/Glossary/JSON)-Form des Punktobjekts liefert.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt, dessen Eigenschaften auf die Werte im `DOMPoint` oder `DOMPointReadOnly` gesetzt sind, auf dem die Methode aufgerufen wurde.

## Beispiele

Dieses Beispiel erstellt ein [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt, das die obere linke Ecke des aktuellen Fensters in Bildschirmkoordinaten darstellt, und konvertiert dieses dann in JSON.

```js
const topLeft = new DOMPoint(window.screenX, window.screenY);

const pointJSON = topLeft.toJSON();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
