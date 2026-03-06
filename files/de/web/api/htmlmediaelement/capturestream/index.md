---
title: "HTMLMediaElement: captureStream() Methode"
short-title: captureStream()
slug: Web/API/HTMLMediaElement/captureStream
l10n:
  sourceCommit: eccbe7d0f6b2f5ddd9b40f91324f4da394d1f1a0
---

{{APIRef("Media Capture and Streams")}}

Die **`captureStream()`**-Methode des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Interfaces gibt ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt zurück, das einen Echtzeit-Stream der Inhalte erfasst, die im Medienelement gerendert werden.

Dies kann beispielsweise als Quelle für eine [WebRTC](/de/docs/Web/API/WebRTC_API) [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden.

## Syntax

```js-nolint
captureStream()
```

### Parameter

Keine.

### Rückgabewert

Ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt, das als Quelle für Audio- und/oder Videodaten von anderem Medienverarbeitungscode verwendet werden kann oder als Quelle für {{Glossary("WebRTC", "WebRTC")}}.

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel wird ein Event-Handler eingerichtet, sodass beim Klicken auf einen Button die Inhalte eines Medienelements mit der ID `"playback"` in einen [`MediaStream`](/de/docs/Web/API/MediaStream) aufgenommen werden.
Der Stream kann dann für andere Zwecke genutzt werden, wie z. B. einen WebRTC-Stream, um aufgezeichnete Videos mit einer anderen Person während eines Videoanrufs zu teilen.

```js
document.querySelector(".playAndRecord").addEventListener("click", () => {
  const playbackElement = document.getElementById("playback");
  const captureStream = playbackElement.captureStream();
  playbackElement.play();
});
```

Siehe [Aufzeichnen eines Medienelements](/de/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element) für ein längeres und komplizierteres Beispiel und eine Erklärung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Aufzeichnen eines Medienelements](/de/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element)
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream)
- [`MediaStream`](/de/docs/Web/API/MediaStream)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
