---
title: "DOMQuad: toJSON() Methode"
short-title: toJSON()
slug: Web/API/DOMQuad/toJSON
l10n:
  sourceCommit: 30c67624659d33887ea64cb8e08766fed55b2491
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die [`DOMQuad`](/de/docs/Web/API/DOMQuad) Methode
`toJSON()` gibt eine
{{Glossary("JSON", "JSON")}} Darstellung des `DOMQuad`-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt, dessen Eigenschaften den Werten des `DOMQuad` entsprechen, auf dem die Methode aufgerufen wurde.

## Beispiele

Dieses Beispiel erstellt ein [`DOMQuad`](/de/docs/Web/API/DOMQuad) mit vier [`DOMPoint`](/de/docs/Web/API/DOMPoint) Objekten, die die Ecken des aktuellen Fensters in Bildschirmkoordinaten darstellen, und konvertiert dies dann in JSON.

```js
const topLeft = new DOMPoint(window.screenX, window.screenY);
const topRight = new DOMPoint(
  window.screenX + window.innerWidth,
  window.screenY,
);
const bottomLeft = new DOMPoint(
  window.screenX,
  window.screenY + window.innerHeight,
);
const bottomRight = new DOMPoint(
  window.screenX + window.innerWidth,
  window.screenY + window.innerHeight,
);

const quad = new DOMQuad(topLeft, topRight, bottomRight, bottomLeft);

const quadJSON = quad.toJSON();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
