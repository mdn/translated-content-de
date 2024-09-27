---
title: CanvasCaptureMediaStreamTrack
slug: Web/API/CanvasCaptureMediaStreamTrack
l10n:
  sourceCommit: 7fb6ccccf88b71712c1b603bed7092dbb622b698
---

{{APIRef("Media Capture and Streams")}}

Das **`CanvasCaptureMediaStreamTrack`** Interface der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) repräsentiert den Videotrack, der in einem [`MediaStream`](/de/docs/Web/API/MediaStream) erzeugt wird, das von einem {{HTMLElement("canvas")}} nach einem Aufruf von [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream) generiert wird.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt die Eigenschaften seines Elternteils, [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)._

- [`CanvasCaptureMediaStreamTrack.canvas`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack/canvas) {{ReadOnlyInline}}
  - : Gibt das [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) Objekt zurück, dessen Oberfläche in Echtzeit erfasst wird.

## Instanz-Methoden

_Dieses Interface erbt die Methoden seines Elternteils, [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)._

- [`CanvasCaptureMediaStreamTrack.requestFrame()`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack/requestFrame)
  - : Erzwingt manuell die Erfassung und das Senden eines Frames an den Stream. Dies ermöglicht Anwendungen, die direkt die Zeitpunkte der Frame-Erfassung angeben möchten, dies zu tun, wenn sie beim Aufruf von [`captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream) eine `frameRate` von 0 angegeben haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream) um die Erfassung von Frames von einem Canvas zu starten
