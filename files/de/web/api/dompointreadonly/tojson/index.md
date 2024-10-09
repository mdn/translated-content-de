---
title: "DOMPointReadOnly: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/DOMPointReadOnly/toJSON
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die Methode `toJSON()` der [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) gibt ein Objekt zurück, das die {{Glossary("JSON", "JSON")}}-Form des Punktobjekts liefert.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt, dessen Eigenschaften auf die Werte im `DOMPoint` oder `DOMPointReadOnly`, auf dem die Methode aufgerufen wurde, gesetzt sind.

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
