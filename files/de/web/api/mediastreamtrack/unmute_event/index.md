---
title: "MediaStreamTrack: unmute Ereignis"
short-title: unmute
slug: Web/API/MediaStreamTrack/unmute_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Media Capture and Streams")}}

Das **`unmute`** Ereignis wird an ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) gesendet, wenn die Quelle des Tracks nach einer Phase der Unfähigkeit, Mediendaten bereitzustellen, wieder in der Lage ist, diese zu liefern.

Dies beendet den [`muted`](/de/docs/Web/API/MediaStreamTrack/muted) Zustand, der mit dem [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) Ereignis begann.

> [!NOTE]
> Der Zustand, den die meisten Menschen als "stummgeschaltet" empfinden (also eine benutzerkontrollierbare Möglichkeit, einen Track stummzuschalten), wird tatsächlich mithilfe der [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled) Eigenschaft verwaltet, für die es keine Ereignisse gibt.

Dieses Ereignis ist nicht abbrechbar und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("unmute", (event) => { })

onunmute = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem Beispiel werden Ereignishandler für die [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und `unmute` Ereignisse eingerichtet, um zu erkennen, wann die Medienquelle des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), das in der Variable `musicTrack` gespeichert ist, keine Daten liefert.

```js
musicTrack.addEventListener(
  "mute",
  (event) => {
    document.getElementById("timeline-widget").style.backgroundColor = "#aaa";
  },
  false,
);

musicTrack.addEventListener(
  "unmute",
  (event) => {
    document.getElementById("timeline-widget").style.backgroundColor = "#fff";
  },
  false,
);
```

Mit diesen Ereignishandlern wird, wenn der Track `musicTrack` in seinen [`muted`](/de/docs/Web/API/MediaStreamTrack/muted) Zustand übergeht, das Hintergrundfarbe des Elements mit der ID `timeline-widget` auf `#aaa` geändert. Wenn der Track den stummgeschalteten Zustand verlässt—erkannt durch das Eintreffen eines `unmute` Ereignisses—wird die Hintergrundfarbe auf Weiß zurückgesetzt.

Sie können auch die `onunmute` Ereignishandler-Eigenschaft verwenden, um einen Handler für dieses Ereignis einzurichten; ähnlich steht der [`onmute`](/de/docs/Web/API/MediaStreamTrack/mute_event) Ereignishandler zum Einrichten eines Handlers für das `mute` Ereignis zur Verfügung. Das folgende Beispiel zeigt dies:

```js
musicTrack.onmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#aaa";
};

musicTrack.onunmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#fff";
};
```

### Tracks über Empfänger wieder aktivieren

Das folgende Beispiel zeigt, wie Tracks über Empfänger wieder aktiviert werden.

```js
// Peer 1 (Receiver)
audioTrack.addEventListener("unmute", (event) => {
  // Do something in UI
});

videoTrack.addEventListener("unmute", (event) => {
  // Do something in UI
});

// Peer 2 (Sender)
const transceivers = peer.getTransceivers();

const audioTrack = transceivers[0];
audioTrack.direction = "sendrecv";

const videoTrack = transceivers[1];
videoTrack.direction = "sendrecv";
```

`transceivers` ist ein Array von [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver), in dem Sie die gesendete und empfangene Audio- oder Videospur finden können. Weitere Informationen finden Sie im Artikel über [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) Ereignis
