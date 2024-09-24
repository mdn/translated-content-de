---
title: CanvasCaptureMediaStreamTrack
slug: Web/API/CanvasCaptureMediaStreamTrack
l10n:
  sourceCommit: 7fb6ccccf88b71712c1b603bed7092dbb622b698
---

{{APIRef("Media Capture and Streams")}}

Das **`CanvasCaptureMediaStreamTrack`**-Interface der {{domxref("Media Capture and Streams API", "", "", "nocode")}} repräsentiert den Videotrack, der in einem {{domxref("MediaStream")}} enthalten ist, das von einem {{HTMLElement("canvas")}} erzeugt wird, nachdem ein Aufruf von {{domxref("HTMLCanvasElement.captureStream()")}} erfolgt ist.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt die Eigenschaften seines Elternteils, {{domxref("MediaStreamTrack")}}._

- {{domxref("CanvasCaptureMediaStreamTrack.canvas")}} {{ReadOnlyInline}}
  - : Gibt das {{domxref("HTMLCanvasElement")}}-Objekt zurück, dessen Oberfläche in Echtzeit erfasst wird.

## Instanz-Methoden

_Dieses Interface erbt die Methoden seines Elternteils, {{domxref("MediaStreamTrack")}}._

- {{domxref("CanvasCaptureMediaStreamTrack.requestFrame()")}}
  - : Erzwingt manuell, dass ein Frame erfasst und an den Stream gesendet wird. Dies ermöglicht es Anwendungen, die die Frame-Erfassungszeiten direkt spezifizieren möchten, dies zu tun, wenn sie einen `frameRate` von 0 beim Aufruf von {{domxref("HTMLCanvasElement.captureStream", "captureStream()")}} angegeben haben.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLCanvasElement.captureStream()")}} um mit der Erfassung von Frames von einem Canvas zu beginnen
