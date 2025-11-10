---
title: "MediaStreamTrack: mute Ereignis"
short-title: mute
slug: Web/API/MediaStreamTrack/mute_event
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef("Media Capture and Streams")}}

Das **`mute`** Ereignis wird an einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) gesendet, wenn die Quelle des Tracks vorübergehend nicht in der Lage ist, Mediendaten bereitzustellen.

Wenn der Track wieder in der Lage ist, Medien auszugeben, wird ein [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) Ereignis gesendet.

Während der Zeit zwischen dem `mute` Ereignis und dem `unmute` Ereignis ist der Wert der [`muted`](/de/docs/Web/API/MediaStreamTrack/muted) Eigenschaft des Tracks `true`.

> [!NOTE]
> Der Zustand, den die meisten Menschen als "stummgeschaltet" betrachten (d.h. ein vom Benutzer umgeschalteter Zustand zum Stummschalten eines Tracks), wird tatsächlich mithilfe der [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled) Eigenschaft verwaltet, für die es keine Ereignisse gibt.

Dieses Ereignis ist nicht abbruchfähig und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("mute", (event) => { })

onmute = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem Beispiel werden Event-Handler für die `mute` und [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) Ereignisse eingerichtet, um zu erkennen, wann die Medienquelle für den [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), auf den `musicTrack` verweist, nicht fließt.

```js
musicTrack.addEventListener("mute", (event) => {
  const widget = document.getElementById("timeline-widget");
  widget.style.backgroundColor = "#aaaaaa";
});

musicTrack.addEventListener("unmute", (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "white";
});
```

Mit diesen Event-Handlern wird, wenn der Track `musicTrack` in seinen [`muted`](/de/docs/Web/API/MediaStreamTrack/muted) Zustand eintritt, das Hintergrundfarbelement mit der ID `timeline-widget` auf `#aaaaaa` geändert. Wenn der Track den stummgeschalteten Zustand verlässt—erkennbar durch das Eintreffen eines `unmute` Ereignisses—wird die Hintergrundfarbe wieder auf Weiß zurückgesetzt.

Sie können auch die `onmute` Event-Handler-Eigenschaft verwenden, um einen Handler für dieses Ereignis einzurichten; ähnlich ist die [`onunmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) Event-Handler-Eigenschaft verfügbar, um einen Handler für das `unmute` Ereignis einzurichten. Das folgende Beispiel zeigt dies:

```js
musicTrack.onmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#aaaaaa";
};

musicTrack.onunmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "white";
};
```

### Tracks über Empfänger stummschalten

Das folgende Beispiel zeigt, wie Tracks mit Hilfe von Empfängern stummgeschaltet werden.

```js
// Peer 1 (Sender)
const transceivers = peer.getTransceivers();

const audioTrack = transceivers[0];
audioTrack.direction = "recvonly";

const videoTrack = transceivers[1];
videoTrack.direction = "recvonly";

// Peer 2 (Receiver)
audioTrack.addEventListener("mute", (event) => {
  // Do something in UI
});

videoTrack.addEventListener("mute", (event) => {
  // Do something in UI
});
```

`transceivers` ist ein Array von [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver), in dem Sie den gesendeten und empfangenen Audio- oder Video-Track finden können. Für weitere Informationen siehe den Artikel über [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) Ereignis
- [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction)
