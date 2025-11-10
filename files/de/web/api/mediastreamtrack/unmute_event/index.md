---
title: "MediaStreamTrack: unmute Ereignis"
short-title: unmute
slug: Web/API/MediaStreamTrack/unmute_event
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef("Media Capture and Streams")}}

Das **`unmute`** Ereignis wird an einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) gesendet, wenn die Quelle des Tracks nach einer Zeitspanne, in der sie keine Mediendaten bereitstellen konnte, wieder in der Lage ist, Mediendaten zu liefern.

Dies beendet den [`muted`](/de/docs/Web/API/MediaStreamTrack/muted) Zustand, der mit dem [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) Ereignis begann.

> [!NOTE]
> Der Zustand, den die meisten Menschen als "stumm" betrachten (das heißt, eine vom Benutzer kontrollierbare Möglichkeit, einen Track stummzuschalten), wird tatsächlich über die [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled) Eigenschaft verwaltet, für die es keine Ereignisse gibt.

Dieses Ereignis ist nicht abbrichbar und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("unmute", (event) => { })

onunmute = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem Beispiel werden Ereignis-Handler für die [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und `unmute` Ereignisse eingerichtet, um zu erkennen, wann die Medien von der Quelle für den [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), die in der Variablen `musicTrack` gespeichert ist, nicht fließen.

```js
musicTrack.addEventListener("mute", (event) => {
  const widget = document.getElementById("timeline-widget");
  widget.style.backgroundColor = "#aaaaaa";
});

musicTrack.addEventListener("unmute", (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "white";
});
```

Mit diesen Ereignis-Handlern wird, wenn der Track `musicTrack` in seinen [`muted`](/de/docs/Web/API/MediaStreamTrack/muted) Zustand wechselt, das Hintergrundfarbelement mit der ID `timeline-widget` auf `#aaaaaa` geändert. Wenn der Track den stummgeschalteten Zustand verlässt – was durch das Eintreffen eines `unmuted` Ereignisses erkannt wird – wird die Hintergrundfarbe wieder auf Weiß zurückgesetzt.

Sie können auch die `onunmute` Ereignis-Handler-Eigenschaft verwenden, um einen Handler für dieses Ereignis einzurichten; ähnlich ist die [`onmute`](/de/docs/Web/API/MediaStreamTrack/mute_event) Ereignis-Handler-Eigenschaft verfügbar, um einen Handler für das `mute` Ereignis einzurichten. Das folgende Beispiel zeigt dies:

```js
musicTrack.onmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#aaaaaa";
};

musicTrack.onunmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "white";
};
```

### Tracks über Receiver freischalten

Das folgende Beispiel zeigt, wie man Tracks mit Receivern freischalten kann.

```js
// Peer 1 (Sender)
const transceivers = peer.getTransceivers();

const audioTrack = transceivers[0];
audioTrack.direction = "sendrecv";

const videoTrack = transceivers[1];
videoTrack.direction = "sendrecv";

// Peer 2 (Receiver)
audioTrack.addEventListener("unmute", (event) => {
  // Do something in UI
});

videoTrack.addEventListener("unmute", (event) => {
  // Do something in UI
});
```

`transceivers` ist ein Array von [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver), wo Sie den gesendeten und empfangenen Audio- oder Video-Track finden können. Für weitere Informationen siehe den Artikel über [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) Ereignis
