---
title: "MediaStreamTrack: mute-Event"
short-title: mute
slug: Web/API/MediaStreamTrack/mute_event
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef("Media Capture and Streams")}}

Das **`mute`**-Event wird an einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) gesendet, wenn die Quelle des Tracks vorübergehend nicht in der Lage ist, Mediendaten bereitzustellen.

Sobald der Track wieder in der Lage ist, Medienausgaben zu produzieren, wird ein [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event)-Event gesendet.

In der Zeit zwischen dem `mute`-Event und dem `unmute`-Event ist der Wert der [`muted`](/de/docs/Web/API/MediaStreamTrack/muted)-Eigenschaft des Tracks `true`.

> [!NOTE]
> Der Zustand, den die meisten Menschen als "stummgeschaltet" betrachten (d.h. ein benutzerbezogener Zustand, in dem ein Track stummgeschaltet wird), wird tatsächlich über die [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled)-Eigenschaft verwaltet, für die es keine Events gibt.

Dieses Event kann nicht abgebrochen werden und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Eventnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("mute", (event) => { })

onmute = (event) => { }
```

## Event-Typ

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem Beispiel werden Event-Handler für die `mute`- und [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event)-Events eingerichtet, um zu erkennen, wann die Medien nicht von der Quelle für den in `musicTrack` referenzierten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) fließen.

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

Mit diesen Event-Handlern ändert sich die Hintergrundfarbe des Elements mit der ID `timeline-widget` zu `#aaaaaa`, wenn der Track `musicTrack` in seinen [`muted`](/de/docs/Web/API/MediaStreamTrack/muted)-Zustand eintritt. Wenn der Track den stummgeschalteten Zustand verlässt — erkannt durch das Eintreffen eines `unmute`-Events — wird die Hintergrundfarbe wieder auf Weiß gesetzt.

Sie können auch die `onmute`-Event-Handler-Eigenschaft verwenden, um einen Handler für dieses Event einzurichten; ebenso ist der [`onunmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event)-Event-Handler verfügbar, um einen Handler für das `unmute`-Event einzurichten. Das folgende Beispiel zeigt dies:

```js
musicTrack.onmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#aaaaaa";
};

musicTrack.onunmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "white";
};
```

### Tracks über Receiver stummschalten

Das folgende Beispiel zeigt, wie man Tracks mit Receivern stummschaltet.

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

`transceivers` ist ein Array von [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver), in dem Sie den gesendeten und empfangenen Audio- oder Video-Track finden können. Für weitere Informationen siehe den Artikel über [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event)-Event
- [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction)
