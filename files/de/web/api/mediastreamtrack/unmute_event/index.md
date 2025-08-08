---
title: "MediaStreamTrack: unmute Ereignis"
short-title: unmute
slug: Web/API/MediaStreamTrack/unmute_event
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{APIRef("Media Capture and Streams")}}

Das **`unmute`**-Ereignis wird an einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) gesendet, wenn die Quelle des Tracks nach einer Zeit, in der sie kein Mediendaten bereitstellen konnte, wieder in der Lage ist, Mediendaten zu liefern.

Dies beendet den [`muted`](/de/docs/Web/API/MediaStreamTrack/muted) Zustand, der mit dem [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) Ereignis begann.

> [!NOTE]
> Der Zustand, den die meisten Menschen als "stummgeschaltet" betrachten (das heißt, eine vom Benutzer steuerbare Möglichkeit, einen Track zum Schweigen zu bringen), wird tatsächlich mit der [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled) Eigenschaft verwaltet, für die es keine Ereignisse gibt.

Dieses Ereignis ist nicht abbrechbar und bubblet nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("unmute", (event) => { })

onunmute = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem Beispiel werden Ereignishandler für die [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und `unmute` Ereignisse eingerichtet, um zu erkennen, wann die Medien von der Quelle des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), die in der Variable `musicTrack` gespeichert ist, nicht fließen.

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
    document.getElementById("timeline-widget").style.backgroundColor = "white";
  },
  false,
);
```

Mit diesen Ereignishandlern wird, wenn der Track `musicTrack` in seinen [`muted`](/de/docs/Web/API/MediaStreamTrack/muted) Zustand eintritt, das Hintergrundfarbelement mit der ID `timeline-widget` auf `#aaa` geändert. Wenn der Track den stummgeschalteten Zustand verlässt—erkannt durch das Eintreffen eines `unmute`-Ereignisses—wird die Hintergrundfarbe wieder auf Weiß zurückgesetzt.

Sie können auch die `onunmute`-Ereignishandlereigenschaft verwenden, um einen Handler für dieses Ereignis einzurichten; ebenso ist der [`onmute`](/de/docs/Web/API/MediaStreamTrack/mute_event) Ereignishandler verfügbar, um einen Handler für das `mute`-Ereignis einzurichten. Das folgende Beispiel zeigt dies:

```js
musicTrack.onmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#aaa";
};

musicTrack.onunmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "white";
};
```

### Stummschaltung von Tracks über Receiver aufheben

Das folgende Beispiel zeigt, wie man Tracks über Receiver entsperren kann.

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

`transceivers` ist ein Array von [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver), in dem Sie den gesendeten und empfangenen Audio- oder Videotrack finden können. Weitere Informationen finden Sie im Artikel über [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) Ereignis
