---
title: CanvasGradient
slug: Web/API/CanvasGradient
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`CanvasGradient`**-Schnittstelle repräsentiert ein [undurchsichtiges Objekt](https://en.wikipedia.org/wiki/Opaque_data_type), das einen Farbverlauf beschreibt. Es wird von den Methoden [`CanvasRenderingContext2D.createLinearGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient), [`CanvasRenderingContext2D.createConicGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient) oder [`CanvasRenderingContext2D.createRadialGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient) zurückgegeben.

Es kann als [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) oder [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle) verwendet werden.

## Instanzeigenschaften

_Als ein undurchsichtiges Objekt gibt es keine offengelegte Eigenschaft._

## Instanzmethoden

- [`CanvasGradient.addColorStop()`](/de/docs/Web/API/CanvasGradient/addColorStop)
  - : Fügt dem Farbverlauf einen neuen Stopp hinzu, der durch einen `offset` und eine `color` definiert ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Erstellmethoden in [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D).
- Das {{HTMLElement("canvas")}}-Element und seine zugehörige Schnittstelle, [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement).
