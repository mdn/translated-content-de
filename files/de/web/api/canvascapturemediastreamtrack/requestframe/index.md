---
title: "CanvasCaptureMediaStreamTrack: Methode requestFrame()"
short-title: requestFrame()
slug: Web/API/CanvasCaptureMediaStreamTrack/requestFrame
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("Media Capture and Streams")}}

Die **`requestFrame()`**-Methode der [`CanvasCaptureMediaStreamTrack`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack)-Schnittstelle fordert an, dass ein Frame vom Canvas aufgenommen und an den Stream gesendet wird.

Anwendungen, die das Timing von Rendering und Frame-Erfassung genau steuern müssen, können `requestFrame()` verwenden, um direkt festzulegen, wann es Zeit ist, einen Frame zu erfassen.

Um die automatische Erfassung von Frames zu verhindern, sodass Frames nur erfasst werden, wenn `requestFrame()` aufgerufen wird, geben Sie einen Wert von 0 für die Methode [`captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream) an, wenn Sie den Stream erstellen.

## Syntax

```js-nolint
requestFrame()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Hinweise zur Benutzung

Derzeit gibt es ein in der Spezifikation markiertes Problem, das darauf hinweist, dass derzeit keine Ausnahmen ausgelöst werden, wenn das Canvas nicht origin-clean ist. Dies kann sich in Zukunft ändern, daher wäre es klug, vorauszuplanen und auf Ausnahmen wie `SecurityError` zu achten (obwohl der spezifische Fehler, der möglicherweise ausgelöst wird, nicht in der Spezifikation erwähnt wird, ist dies ein wahrscheinlicher Kandidat).

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
