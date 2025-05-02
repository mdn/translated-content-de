---
title: "MediaStreamTrack: mute Ereignis"
short-title: mute
slug: Web/API/MediaStreamTrack/mute_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Media Capture and Streams")}}

Das **`mute`** Ereignis wird an ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) gesendet, wenn die Quelle des Tracks vorübergehend nicht in der Lage ist, Mediendaten bereitzustellen.

Wenn der Track wieder in der Lage ist, Medienausgaben zu erzeugen, wird ein [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) Ereignis gesendet.

In der Zeit zwischen dem `mute` Ereignis und dem `unmute` Ereignis ist der Wert der [`muted`](/de/docs/Web/API/MediaStreamTrack/muted) Eigenschaft des Tracks `true`.

> [!NOTE]
> Der Zustand, den die meisten Menschen als "stummschalten" betrachten (d.h. ein vom Benutzer ausgelöster Zustand des Stummschaltens eines Tracks), wird tatsächlich mit der [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled) Eigenschaft verwaltet, für die es keine Ereignisse gibt.

Dieses Ereignis ist nicht abbruchfähig und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("mute", (event) => { })

onmute = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem Beispiel werden Ereignishandler für die `mute` und [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) Ereignisse eingerichtet, um zu erkennen, wann die Medienquelle für das [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), das durch `musicTrack` referenziert wird, keine Daten liefert.

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

Mit diesen Ereignishandlern wird, wenn der Track `musicTrack` in seinen [`muted`](/de/docs/Web/API/MediaStreamTrack/muted) Zustand wechselt, die Hintergrundfarbe des Elements mit der ID `timeline-widget` auf `#aaa` geändert. Wenn der Track den stummgeschalteten Zustand verlässt – erkannt durch das Eintreffen eines `unmute` Ereignisses – wird die Hintergrundfarbe auf Weiß zurückgesetzt.

Sie können auch die `onmute` Ereignishandler-Eigenschaft verwenden, um einen Handler für dieses Ereignis einzurichten; ebenso ist der [`onunmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) Ereignishandler verfügbar, um einen Handler für das `unmute` Ereignis einzurichten. Das folgende Beispiel zeigt dies:

```js
musicTrack.onmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#aaa";
};

musicTrack.onunmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#fff";
};
```

### Stummschalten von Tracks über Receiver

Das folgende Beispiel zeigt, wie Sie Tracks mithilfe von Receiver stummschalten können.

```js
// Peer 1 (Receiver)
audioTrack.addEventListener("mute", (event) => {
  // Do something in UI
});

videoTrack.addEventListener("mute", (event) => {
  // Do something in UI
});

// Peer 2 (Sender)
const transceivers = peer.getTransceivers();

const audioTrack = transceivers[0];
audioTrack.direction = "recvonly";

const videoTrack = transceivers[1];
videoTrack.direction = "recvonly";
```

`transceivers` ist ein Array von [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver), in dem Sie den gesendeten und empfangenen Audio- oder Video-Track finden können. Weitere Informationen finden Sie im Artikel [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) Ereignis
- [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction)
