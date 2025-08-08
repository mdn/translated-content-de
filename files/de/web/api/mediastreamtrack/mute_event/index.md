---
title: "MediaStreamTrack: mute-Ereignis"
short-title: mute
slug: Web/API/MediaStreamTrack/mute_event
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{APIRef("Media Capture and Streams")}}

Das **`mute`**-Ereignis wird an ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) gesendet, wenn die Quelle des Tracks vorübergehend nicht in der Lage ist, Mediendaten bereitzustellen.

Sobald der Track wieder in der Lage ist, Media-Ausgabe zu erzeugen, wird ein [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event)-Ereignis gesendet.

Während der Zeit zwischen dem `mute`-Ereignis und dem `unmute`-Ereignis ist der Wert der [`muted`](/de/docs/Web/API/MediaStreamTrack/muted)-Eigenschaft des Tracks `true`.

> [!NOTE]
> Die Bedingung, die die meisten als "stummgeschaltet" betrachten (d.h. ein vom Benutzer umgeschalteter Zustand zum Stummschalten eines Tracks), wird tatsächlich mit der [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled)-Eigenschaft verwaltet, für die es keine Ereignisse gibt.

Dieses Ereignis kann nicht abgebrochen werden und es wird nicht durch das DOM geleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("mute", (event) => { })

onmute = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem Beispiel werden Ereignishandler für die Ereignisse `mute` und [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) eingerichtet, um zu erkennen, wann der Medienfluss von der Quelle des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), auf den durch `musicTrack` verwiesen wird, unterbrochen ist.

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

Mit diesen Ereignishandlern wird, wenn der Track `musicTrack` seinen [`muted`](/de/docs/Web/API/MediaStreamTrack/muted)-Status erreicht, die Hintergrundfarbe des Elements mit der ID `timeline-widget` in `#aaa` geändert. Wenn der Track den stummgeschalteten Zustand verlässt - erkennbar durch das Eintreffen eines `unmute`-Ereignisses - wird die Hintergrundfarbe auf Weiß zurückgesetzt.

Sie können auch die `onmute`-Ereignishandler-Eigenschaft verwenden, um einen Handler für dieses Ereignis einzurichten; ähnlich steht der [`onunmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) Ereignishandler für die Einrichtung eines Handlers für das `unmute`-Ereignis zur Verfügung. Das folgende Beispiel zeigt dies:

```js
musicTrack.onmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#aaa";
};

musicTrack.onunmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "white";
};
```

### Tracks über Empfänger stummschalten

Das folgende Beispiel zeigt, wie Tracks über Empfänger stummgeschaltet werden können.

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

`transceivers` ist ein Array von [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver), in dem Sie den gesendeten und empfangenen Audio- oder Videotrack finden können. Weitere Informationen finden Sie im Artikel über [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) Ereignis
- [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction)
