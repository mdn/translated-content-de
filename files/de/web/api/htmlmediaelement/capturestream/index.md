---
title: "HTMLMediaElement: captureStream()-Methode"
short-title: captureStream()
slug: Web/API/HTMLMediaElement/captureStream
l10n:
  sourceCommit: 7fb6ccccf88b71712c1b603bed7092dbb622b698
---

{{APIRef("Media Capture and Streams")}}

Die **`captureStream()`**-Methode der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Schnittstelle gibt ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt zurück, das eine Echtzeitaufnahme des Inhalts streamt, der im Medien-Element wiedergegeben wird.

Dies kann beispielsweise als Quelle für eine [WebRTC](/de/docs/Web/API/WebRTC_API)-[`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden.

## Syntax

```js-nolint
captureStream()
```

### Parameter

Keine.

### Rückgabewert

Ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt, das von anderem Medienverarbeitungscode als Quelle für Audio- und/oder
Videodaten verwendet werden kann, oder als Quelle für [WebRTC](/de/docs/Glossary/WebRTC).

## Beispiele

In diesem Beispiel wird ein Ereignishandler eingerichtet, sodass beim Klicken auf einen Button die Inhalte eines Medien-Elements mit der ID `"playback"` in einen
[`MediaStream`](/de/docs/Web/API/MediaStream) aufgenommen werden. Der Stream kann dann für andere Zwecke genutzt werden - wie z.B. als Quelle
für das Streamen über WebRTC, um vorab aufgenommene Videos während eines Videoanrufs mit einer anderen Person zu teilen.

```js
document.querySelector(".playAndRecord").addEventListener("click", () => {
  const playbackElement = document.getElementById("playback");
  const captureStream = playbackElement.captureStream();
  playbackElement.play();
});
```

Sehen Sie sich [Aufnahme eines Medien-Elements](/de/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element) für ein längeres und komplexeres Beispiel und Erklärung an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Firefox-spezifische Hinweise

Vor Firefox 51 konnte `captureStream()` nicht auf ein Medien-Element angewendet werden, dessen Quelle selbst ein [`MediaStream`](/de/docs/Web/API/MediaStream) ist (wie ein {{HTMLElement("video")}}-Element, das einen Stream über eine
[`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) empfängt). Ab Firefox 51 funktioniert dies. Das bedeutet, dass Sie einen Stream aus dem Video-Element erfassen und mit [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) aufnehmen können. Siehe [Firefox Bug 1259788](https://bugzil.la/1259788) für Details.

Allerdings ist `captureStream()` in Firefox weiterhin als `mozCaptureStream()` mit einem Präfix versehen, aus gutem Grund: Es gibt einige Eigenheiten in der
aktuellen Implementierung, die beachtet werden sollten:

- Die Firefox-Implementierung funktioniert derzeit nur wie in der Spezifikation beschrieben, wenn die Quelle des Medien-Elements selbst ein [`MediaStream`](/de/docs/Web/API/MediaStream) ist.
- Wenn die Quelle des Medien-Elements kein `MediaStream` ist, entspricht die Ausgabe dieser Methode nicht der Spezifikation, und wenn Sie die Quelle nach Beginn der Aufnahme ändern, kann der erfasste Stream die neuen Quelldaten aufgrund dieser Inkompatibilität nicht akzeptieren, sodass keine [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)s aus der neuen Quelle
  `MediaStream` dem erfassten Stream hinzugefügt werden, was zu einer Ausgabe führt, die die aktualisierte Quelle nicht erfasst.
- Wenn die Quelle wieder auf ein `MediaStream` umgeschaltet wird, werden die Tracks zum Stream zurückgeführt und es funktioniert wieder wie erwartet.
- Ein Aufruf von `mozCaptureMediaStream()` auf einem Element mit einer `MediaStream`-Quelle gibt einen Stream zurück, der nur Tracks enthält, während das
  Element ein `MediaStream` abspielt.
- Wenn Sie `mozCaptureMediaStream()` auf einem Medien-Element ohne Quellenmedien aufrufen, wird der Kompatibilitätsmodus auf der ersten hinzugefügten Quelle basieren; zum Beispiel, wenn es ein `MediaStream` ist, wird der erfasste Stream nur mit `MediaStream`-Quellen ab dann funktionieren.
- Dieses spezielle Verhalten wird entfernt, sobald die Unterstützung für Nicht-`MediaStream`-Quellen auf den Spezifikationsstand gebracht und die Methode nicht mehr mit einem Präfix versehen ist. Siehe
  [Firefox Bug 1259788](https://bugzil.la/1259788) für Details.

## Siehe auch

- [Aufnahme eines Medien-Elements](/de/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element)
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream)
- [`MediaStream`](/de/docs/Web/API/MediaStream)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
