---
title: "CanvasCaptureMediaStreamTrack: requestFrame() Methode"
short-title: requestFrame()
slug: Web/API/CanvasCaptureMediaStreamTrack/requestFrame
l10n:
  sourceCommit: 7fb6ccccf88b71712c1b603bed7092dbb622b698
---

{{APIRef("Media Capture and Streams")}}

Die **`requestFrame()`**-Methode der [`CanvasCaptureMediaStreamTrack`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack)-Schnittstelle fordert an, dass ein Frame von der Leinwand erfasst und an den Stream gesendet wird.

Anwendungen, die die Zeitsteuerung von Rendering und Frame-Erfassung präzise kontrollieren müssen, können `requestFrame()` verwenden, um direkt festzulegen, wann ein Frame erfasst werden soll.

Um die automatische Erfassung von Frames zu verhindern, so dass Frames nur erfasst werden, wenn `requestFrame()` aufgerufen wird, geben Sie bei der Erstellung des Streams einen Wert von 0 für die [`captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream)-Methode an.

## Syntax

```js-nolint
requestFrame()
```

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Anwendungshinweise

Derzeit gibt es im Spezifikationsentwurf einen Vermerk, der darauf hinweist, dass zum jetzigen Zeitpunkt keine Ausnahmen ausgelöst werden, wenn die Leinwand nicht origin-clean ist. Dies könnte sich in Zukunft ändern, daher wäre es klug, vorauszuplanen und auf Ausnahmen wie `SecurityError` zu achten (obwohl der spezifische Fehler, der möglicherweise ausgelöst wird, in der Spezifikation nicht erwähnt wird, ist dies ein wahrscheinlicher Kandidat).

## Beispiel

```js
// Find the canvas element to capture
const canvasElt = document.querySelector("canvas");

// Get the stream
const stream = canvasElt.captureStream(25); // 25 FPS

// Send the current state of the canvas as a frame to the stream
stream.getVideoTracks()[0].requestFrame();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CanvasCaptureMediaStreamTrack`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack), die Schnittstelle, zu der es gehört.
- {{HTMLElement("canvas")}}
