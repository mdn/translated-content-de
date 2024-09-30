---
title: "MediaStreamTrack: mute Ereignis"
short-title: mute
slug: Web/API/MediaStreamTrack/mute_event
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Das **`mute`** Ereignis wird an ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) gesendet, wenn die Quelle des Tracks vorübergehend nicht in der Lage ist, Mediendaten bereitzustellen.

Wenn der Track wieder in der Lage ist, Medienausgabe zu erzeugen, wird ein [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) Ereignis gesendet.

Während der Zeit zwischen dem `mute` Ereignis und dem `unmute` Ereignis ist der Wert der [`muted`](/de/docs/Web/API/MediaStreamTrack/muted) Eigenschaft des Tracks `true`.

> [!NOTE]
> Der Zustand, den die meisten Menschen als "stummgeschaltet" betrachten (d.h. ein vom Benutzer umgeschalteter Zustand des Stummschaltens eines Tracks), wird tatsächlich mit der [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled) Eigenschaft verwaltet, für die es keine Ereignisse gibt.

Dieses Ereignis kann nicht abgebrochen werden und es wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("mute", (event) => {});

onmute = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem Beispiel werden Ereignishandler für die `mute` und [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) Ereignisse eingerichtet, um zu erkennen, wann das Medium nicht von der Quelle des referenzierten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) `musicTrack` fließt.

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

Mit diesen Ereignishandlern wird, wenn der Track `musicTrack` seinen [`muted`](/de/docs/Web/API/MediaStreamTrack/muted) Zustand betritt, das Element mit der ID `timeline-widget` in seiner Hintergrundfarbe auf `#aaa` geändert. Wenn der Track den stummgeschalteten Zustand verlässt—erkannt durch das Eintreffen eines `unmute` Ereignisses—wird die Hintergrundfarbe wieder auf Weiß gesetzt.

Sie können auch die `onmute` Ereignishandler-Eigenschaft verwenden, um einen Handler für dieses Ereignis einzurichten; ähnlich ist der [`onunmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) Ereignishandler verfügbar, um einen Handler für das `unmute` Ereignis einzurichten. Das folgende Beispiel zeigt dies:

```js
musicTrack.onmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#aaa";
};

musicTrack.onunmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#fff";
};
```

### Stummschalten von Tracks über Empfänger

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

`transceivers` ist ein Array von [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver), in dem Sie das gesendete und empfangene Audio- oder Video-Track finden können. Für weitere Informationen siehe den Artikel über [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) Ereignis
- [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction)
