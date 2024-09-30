---
title: CanvasPattern
slug: Web/API/CanvasPattern
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Das **`CanvasPattern`**-Interface stellt ein [undurchsichtiges Objekt](https://en.wikipedia.org/wiki/Opaque_data_type) dar, das ein Muster beschreibt, basierend auf einem Bild, einer Leinwand oder einem Video, das durch die Methode [`CanvasRenderingContext2D.createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern) erstellt wurde.

Es kann als [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) oder [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle) verwendet werden.

## Instanzeigenschaften

_Als ein undurchsichtiges Objekt hat dieses keine veröffentlichten Eigenschaften._

## Instanzmethoden

_Es gibt keine vererbten Methoden._

- [`CanvasPattern.setTransform()`](/de/docs/Web/API/CanvasPattern/setTransform)
  - : Wendet eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) an, die eine lineare Transformation auf das Muster darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CanvasRenderingContext2D.createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern)
- Das {{HTMLElement("canvas")}}-Element und dessen zugeordnetes Interface, [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
