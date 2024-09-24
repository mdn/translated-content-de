---
title: "CanvasCaptureMediaStreamTrack: requestFrame()-Methode"
short-title: requestFrame()
slug: Web/API/CanvasCaptureMediaStreamTrack/requestFrame
l10n:
  sourceCommit: 7fb6ccccf88b71712c1b603bed7092dbb622b698
---

{{APIRef("Media Capture and Streams")}}

Die **`requestFrame()`**-Methode der {{domxref("CanvasCaptureMediaStreamTrack")}}-Schnittstelle fordert, dass ein Rahmen von der Leinwand aufgenommen und an den Stream gesendet wird.

Anwendungen, die das Timing von Rendering und Rahmenaufnahme sorgfältig steuern müssen, können `requestFrame()` verwenden, um direkt anzugeben, wann es Zeit ist, einen Rahmen aufzunehmen.

Um die automatische Aufnahme von Rahmen zu verhindern, damit Rahmen nur dann aufgenommen werden, wenn `requestFrame()` aufgerufen wird, geben Sie einen Wert von 0 für die {{domxref("HTMLCanvasElement.captureStream", "captureStream()")}}-Methode an, wenn Sie den Stream erstellen.

## Syntax

```js-nolint
requestFrame()
```

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Verwendungshinweise

Derzeit gibt es ein im Spezifikationsentwurf markiertes Problem, das darauf hinweist, dass momentan keine Ausnahmen ausgelöst werden, wenn die Leinwand nicht origin-sauber ist. Dies könnte sich in Zukunft ändern, daher wäre es klug, vorauszuplanen und auf Ausnahmen wie `SecurityError` zu achten (obwohl der spezifische Fehler, der ausgelöst werden könnte, in der Spezifikation nicht erwähnt wird, ist dies ein wahrscheinlicher Kandidat).

## Beispiel

```js
// Finden Sie das zu erfassende Leinwandelement
const canvasElt = document.querySelector("canvas");

// Holen Sie den Stream
const stream = canvasElt.captureStream(25); // 25 FPS

// Senden Sie den aktuellen Zustand der Leinwand als Rahmen an den Stream
stream.getVideoTracks()[0].requestFrame();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CanvasCaptureMediaStreamTrack")}}, die Schnittstelle, zu der es gehört.
- {{HTMLElement("canvas")}}
