---
title: CanvasPattern
slug: Web/API/CanvasPattern
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`CanvasPattern`**-Schnittstelle repräsentiert ein [opakes Objekt](https://en.wikipedia.org/wiki/Opaque_data_type), das ein Muster beschreibt, basierend auf einem Bild, einer Leinwand oder einem Video, erstellt durch die Methode {{domxref("CanvasRenderingContext2D.createPattern()")}}.

Es kann als {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} oder {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}} verwendet werden.

## Instanzeigenschaften

_Da es sich um ein opakes Objekt handelt, gibt es keine sichtbaren Eigenschaften._

## Instanzmethoden

_Es gibt keine geerbte Methode._

- {{domxref("CanvasPattern.setTransform()")}}
  - : Wendet eine {{domxref("DOMMatrix")}} an, die eine lineare Transformation auf das Muster darstellt.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CanvasRenderingContext2D.createPattern()")}}
- Das {{HTMLElement("canvas")}}-Element und seine zugehörige Schnittstelle, {{domxref("HTMLCanvasElement")}}
