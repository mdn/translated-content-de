---
title: "MediaStreamTrack: unmute Ereignis"
short-title: unmute
slug: Web/API/MediaStreamTrack/unmute_event
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef("Media Capture and Streams")}}

Das **`unmute`** Ereignis wird an ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) gesendet, wenn die Quelle des Tracks nach einer Periode, in der kein Mediendaten bereitgestellt werden konnten, wieder in der Lage ist, Mediendaten bereitzustellen.

Dies beendet den [`muted`](/de/docs/Web/API/MediaStreamTrack/muted) Zustand, der mit dem [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) Ereignis begann.

> [!NOTE]
> Die Bedingung, die die meisten Menschen als "stummgeschaltet" betrachten (d.h. eine benutzerkontrollierte Möglichkeit, einen Track stummzuschalten), wird tatsächlich über die [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled) Eigenschaft verwaltet, für die es keine Ereignisse gibt.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Bubbling aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("unmute", (event) => { })

onunmute = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem Beispiel werden Ereignishandler für die [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und `unmute` Ereignisse eingerichtet, um zu erkennen, wann das Medium nicht von der Quelle für das [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), das in der Variable `musicTrack` gespeichert ist, fließt.

```js
musicTrack.addEventListener(
  "mute",
  (event) => {
    const widget = document.getElementById("timeline-widget");
    widget.style.backgroundColor = "#aaaaaa";
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

Mit diesen Ereignishandlern wird, wenn der Track `musicTrack` in seinen [`muted`](/de/docs/Web/API/MediaStreamTrack/muted) Zustand wechselt, die Hintergrundfarbe des Elements mit der ID `timeline-widget` auf `#aaaaaa` geändert. Wenn der Track den stummgeschalteten Zustand verlässt – erkannt am Eintreffen eines `unmuted` Ereignisses – wird die Hintergrundfarbe auf weiß zurückgesetzt.

Sie können auch die `onunmute` Ereignishandler-Eigenschaft verwenden, um einen Handler für dieses Ereignis einzurichten; ähnlich ist der [`onmute`](/de/docs/Web/API/MediaStreamTrack/mute_event) Ereignishandler verfügbar, um einen Handler für das `mute` Ereignis einzurichten. Das folgende Beispiel zeigt dies:

```js
musicTrack.onmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#aaaaaa";
};

musicTrack.onunmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "white";
};
```

### Tracks durch Empfänger unmutieren

Das folgende Beispiel zeigt, wie Tracks durch Empfänger unmutiert werden.

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
