---
title: "HTMLMediaElement: captureStream() Methode"
short-title: captureStream()
slug: Web/API/HTMLMediaElement/captureStream
l10n:
  sourceCommit: 7fb6ccccf88b71712c1b603bed7092dbb622b698
---

{{APIRef("Media Capture and Streams")}}

Die **`captureStream()`** Methode der {{domxref("HTMLMediaElement")}} Schnittstelle gibt ein {{domxref('MediaStream')}} Objekt zurück, welches eine Echtzeitaufnahme des Inhalts streamt, der im Media-Element wiedergegeben wird.

Dies kann zum Beispiel als Quelle für eine [WebRTC](/de/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}} verwendet werden.

## Syntax

```js-nolint
captureStream()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref('MediaStream')}} Objekt, das als Quelle für Audio- und/oder Videodaten von anderen Medienverarbeitungscodes oder als Quelle für [WebRTC](/de/docs/Glossary/WebRTC) verwendet werden kann.

## Beispiele

In diesem Beispiel wird ein Ereignishandler eingerichtet, der beim Klicken auf eine Schaltfläche mit der Aufnahme der Inhalte eines Media-Elements mit der ID `"playback"` in einen {{domxref("MediaStream")}} beginnt. Der Stream kann dann für andere Zwecke verwendet werden, z.B. als Quelle für das Streaming über WebRTC, um eine vorab aufgezeichnete Videowiedergabe mit einer anderen Person während eines Videoanrufs zu teilen.

```js
document.querySelector(".playAndRecord").addEventListener("click", () => {
  const playbackElement = document.getElementById("playback");
  const captureStream = playbackElement.captureStream();
  playbackElement.play();
});
```

Siehe [Aufzeichnung eines Media-Elements](/de/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element) für ein längeres und aufwendigeres Beispiel und Erklärung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Firefox-spezifische Hinweise

Vor Firefox 51 konnten Sie `captureStream()` nicht auf ein Media-Element anwenden, dessen Quelle selbst ein {{domxref("MediaStream")}} ist (wie ein {{HTMLElement("video")}} Element, das einen Stream über eine {{domxref("RTCPeerConnection")}} wiedergibt). Ab Firefox 51 funktioniert das. Das bedeutet, dass Sie einen Stream vom Videoelement erfassen und {{domxref("MediaRecorder")}} verwenden können, um ihn aufzunehmen. Siehe [Firefox Bug 1259788](https://bugzil.la/1259788) für Details.

Allerdings ist `captureStream()` immer noch als `mozCaptureStream()` in Firefox mit einem Präfix versehen, und das aus gutem Grund: Es gibt einige Eigenheiten in der aktuellen Implementierung, die beachtenswert sind:

- Die Firefox-Implementierung funktioniert nur wie in der Spezifikation beschrieben, wenn die Quelle des Media-Elements selbst ein {{domxref("MediaStream")}} ist.
- Wenn die Quelle des Media-Elements kein `MediaStream` ist, ist die Ausgabe dieser Methode nicht kompatibel mit der Spezifikation, und wenn Sie die Quelle nach Beginn der Aufnahme ändern, kann der Ausgabeaufnahme-Stream die neuen Quelldaten aufgrund dieser Inkompatibilität nicht akzeptieren, sodass keine {{domxref("MediaStreamTrack")}}s aus der neuen Quelle dem aufgenommenen Stream hinzugefügt werden, was zu einer Ausgabe führt, die die aktualisierte Quelle nicht erfasst.
- Wird die Quelle wieder auf einen `MediaStream` umgeschaltet, werden Spuren wieder zum Stream hinzugefügt und es funktioniert erneut erwartungsgemäß.
- Ein Aufruf von `mozCaptureMediaStream()` auf einem Element mit einer `MediaStream`-Quelle gibt einen Stream zurück, der nur während der Wiedergabe eines `MediaStream`-Elements Spuren enthält.
- Wenn Sie `mozCaptureMediaStream()` auf ein Media-Element ohne Quellmedien aufrufen, basiert der Kompatibilitätsmodus auf der ersten hinzugefügten Quelle; wenn es z.B. ein `MediaStream` ist, wird der Aufnahmestrom nur mit `MediaStream`-Quellen arbeiten von da an.
- Dieses spezielle Verhalten wird entfernt, sobald die Unterstützung für Nicht-`MediaStream`-Quellen gemäß der Spezifikation umgesetzt und die Methode nicht mehr mit einem Präfix versehen ist. Details finden Sie im [Firefox Bug 1259788](https://bugzil.la/1259788).

## Siehe auch

- [Aufzeichnung eines Media-Elements](/de/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element)
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- {{domxref("HTMLCanvasElement.captureStream()")}}
- {{domxref("MediaStream")}}
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
