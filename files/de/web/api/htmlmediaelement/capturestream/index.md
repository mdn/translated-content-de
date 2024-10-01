---
title: "HTMLMediaElement: captureStream()-Methode"
short-title: captureStream()
slug: Web/API/HTMLMediaElement/captureStream
l10n:
  sourceCommit: 7fb6ccccf88b71712c1b603bed7092dbb622b698
---

{{APIRef("Media Capture and Streams")}}

Die **`captureStream()`**-Methode der Schnittstelle [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) gibt ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt zurück, das eine Echtzeitaufnahme des Inhalts streamt, der im Media-Element gerendert wird.

Dies kann beispielsweise als Quelle für eine [WebRTC](/de/docs/Web/API/WebRTC_API) [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden.

## Syntax

```js-nolint
captureStream()
```

### Parameter

Keine.

### Rückgabewert

Ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt, das als Quelle für Audio- und/oder Videodaten durch andere Medienverarbeitungsprogramme oder als Quelle für {{Glossary("WebRTC", "WebRTC")}} verwendet werden kann.

## Beispiele

In diesem Beispiel wird ein Ereignishandler eingerichtet, sodass durch Klicken auf eine Schaltfläche die Inhalte eines Media-Elements mit der ID `"playback"` in ein [`MediaStream`](/de/docs/Web/API/MediaStream) erfasst werden. Der Stream kann dann für andere Zwecke genutzt werden, z. B. als Quelle für das Streaming über WebRTC, um vorab aufgezeichnete Videos während eines Videoanrufs mit einer anderen Person zu teilen.

```js
document.querySelector(".playAndRecord").addEventListener("click", () => {
  const playbackElement = document.getElementById("playback");
  const captureStream = playbackElement.captureStream();
  playbackElement.play();
});
```

Siehe [Aufnehmen eines Media-Elements](/de/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element) für ein längeres und komplexeres Beispiel und Erklärung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Firefox-spezifische Hinweise

Vor Firefox 51 konnten Sie `captureStream()` nicht auf einem Media-Element verwenden, dessen Quelle selbst ein [`MediaStream`](/de/docs/Web/API/MediaStream) ist (wie ein {{HTMLElement("video")}}-Element, das einen Stream zeigt, der über eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) empfangen wird). Ab Firefox 51 funktioniert dies. Dies bedeutet, dass Sie einen Stream aus dem Videoelement erfassen und diesen mit [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) aufzeichnen können. Weitere Details finden Sie unter [Firefox-Bug 1259788](https://bugzil.la/1259788).

Allerdings ist `captureStream()` in Firefox aus gutem Grund weiterhin als `mozCaptureStream()` vorangestellt: Es gibt einige Eigenheiten in der derzeitigen Implementierung, die beachtet werden sollten:

- Die Implementierung in Firefox funktioniert aktuell nur wie in der Spezifikation beschrieben, wenn die Quelle des Media-Elements selbst ein [`MediaStream`](/de/docs/Web/API/MediaStream) ist.
- Wenn die Quelle des Media-Elements kein `MediaStream` ist, ist die Ausgabe dieser Methode nicht spezifikationskonform, und wenn Sie die Quelle nach dem Start der Erfassung ändern, kann der erfasste Stream die neuen Quelldaten aufgrund dieser Inkompatibilität nicht akzeptieren, sodass keine [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)s aus der neuen Quelle zum erfassten Stream hinzugefügt werden, was zu einer Ausgabe führt, die nicht die aktualisierte Quelle erfasst.
- Das Zurückschalten der Quelle auf ein `MediaStream` fügt wieder Spuren zum Stream hinzu, und es funktioniert wieder wie erwartet.
- Wenn Sie `mozCaptureMediaStream()` auf einem Element mit einer `MediaStream`-Quelle aufrufen, gibt es einen Stream zurück, der nur während der Wiedergabe eines `MediaStream` Tracks enthält.
- Wenn Sie `mozCaptureMediaStream()` auf ein Media-Element mit keiner Quellmedien aufrufen, basiert der Kompatibilitätsmodus auf der ersten hinzugefügten Quelle; wenn es beispielsweise ein `MediaStream` ist, funktioniert der erfasste Stream dann nur mit `MediaStream`-Quellen.
- Dieses spezielle Verhalten wird entfernt, sobald die Unterstützung für Nicht-`MediaStream`-Quellen spezifikationsgemäß ist und die Methode ohne Präfix ist. Siehe [Firefox-Bug 1259788](https://bugzil.la/1259788) für Details.

## Siehe auch

- [Aufnehmen eines Media-Elements](/de/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element)
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream)
- [`MediaStream`](/de/docs/Web/API/MediaStream)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
