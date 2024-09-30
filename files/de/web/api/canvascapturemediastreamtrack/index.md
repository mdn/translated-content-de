---
title: CanvasCaptureMediaStreamTrack
slug: Web/API/CanvasCaptureMediaStreamTrack
l10n:
  sourceCommit: 7fb6ccccf88b71712c1b603bed7092dbb622b698
---

{{APIRef("Media Capture and Streams")}}

Die Schnittstelle **`CanvasCaptureMediaStreamTrack`** des [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) repräsentiert die Videospur, die in einem [`MediaStream`](/de/docs/Web/API/MediaStream) enthalten ist und von einem {{HTMLElement("canvas")}} generiert wird, nachdem ein Aufruf von [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream) erfolgt ist.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt die Eigenschaften ihres Elternteils, [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)._

- [`CanvasCaptureMediaStreamTrack.canvas`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack/canvas) {{ReadOnlyInline}}
  - : Gibt das [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)-Objekt zurück, dessen Oberfläche in Echtzeit erfasst wird.

## Instanzmethoden

_Diese Schnittstelle erbt die Methoden ihres Elternteils, [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)._

- [`CanvasCaptureMediaStreamTrack.requestFrame()`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack/requestFrame)
  - : Erzwingt manuell, dass ein Rahmen erfasst und an den Stream gesendet wird. Dies ermöglicht es Anwendungen, die die Zeiten für die Rahmenaufnahme direkt angeben möchten, dies zu tun, wenn sie eine `frameRate` von 0 beim Aufruf von [`captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream) angegeben haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream), um mit der Aufnahme von Rahmen aus einem Canvas zu beginnen.
