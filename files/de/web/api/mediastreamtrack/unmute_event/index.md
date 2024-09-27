---
title: "MediaStreamTrack: unmute-Ereignis"
short-title: unmute
slug: Web/API/MediaStreamTrack/unmute_event
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Das **`unmute`**-Ereignis wird an ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) gesendet, wenn die Quelle des Tracks wieder in der Lage ist, Mediendaten bereitzustellen, nachdem sie für eine Weile nicht dazu in der Lage war.

Dies beendet den [`muted`](/de/docs/Web/API/MediaStreamTrack/muted)-Zustand, der mit dem [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event)-Ereignis begann.

> [!NOTE]
> Der Zustand, den die meisten Leute als "stummgeschaltet" betrachten (das heißt, eine benutzerkontrollierte Methode, um einen Track stummzuschalten), wird tatsächlich durch die [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled)-Eigenschaft verwaltet, für die es keine Ereignisse gibt.

Dieses Ereignis ist nicht abbrichtbar und wird nicht propagiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("unmute", (event) => {});

onunmute = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem Beispiel werden Ereignishandler für die [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event)- und `unmute`-Ereignisse eingerichtet, um zu erkennen, wann die Medien nicht mehr von der Quelle des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) fließen, das in der Variablen `musicTrack` gespeichert ist.

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

Mit diesen Ereignishandlern ändert sich beim Eintritt in den [`muted`](/de/docs/Web/API/MediaStreamTrack/muted)-Zustand des Tracks `musicTrack` die Hintergrundfarbe des Elements mit der ID `timeline-widget` auf `#aaa`. Wenn der Track den stummgeschalteten Zustand verlässt – erkannt durch das Eintreffen eines `unmute`-Ereignisses – wird die Hintergrundfarbe wieder auf Weiß zurückgesetzt.

Sie können auch die `onunmute`-Ereignishandler-Eigenschaft verwenden, um einen Handler für dieses Ereignis einzurichten; ähnlich ist die [`onmute`](/de/docs/Web/API/MediaStreamTrack/mute_event)-Ereignishandlereigenschaft verfügbar, um einen Handler für das `mute`-Ereignis einzurichten. Das folgende Beispiel zeigt dies:

```js
musicTrack.onmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#aaa";
};

musicTrack.onunmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#fff";
};
```

### Tracks durch Empfänger unmute

Das folgende Beispiel zeigt, wie Tracks mit Hilfe von Empfängern unmute werden.

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

`transceivers` ist ein Array von [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver), in dem Sie den gesendeten und empfangenen Audio- oder Videotrack finden können. Weitere Informationen finden Sie im Artikel über die [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event)-Ereignis
