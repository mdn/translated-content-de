---
title: "MediaStreamTrack: mute-Ereignis"
short-title: mute
slug: Web/API/MediaStreamTrack/mute_event
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("Media Capture and Streams")}}

Das **`mute`**-Ereignis wird an ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) gesendet, wenn die Quelle des Tracks vorübergehend nicht in der Lage ist, Mediendaten bereitzustellen.

Sobald der Track wieder in der Lage ist, Medienausgabe zu erzeugen, wird ein [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event)-Ereignis gesendet.

Während der Zeit zwischen dem `mute`-Ereignis und dem `unmute`-Ereignis ist der Wert der [`muted`](/de/docs/Web/API/MediaStreamTrack/muted)-Eigenschaft des Tracks `true`.

> [!NOTE]
> Der Zustand, den die meisten Menschen als "stummgeschaltet" betrachten (das heißt, ein benutzergesteuerter Zustand der Stummschaltung eines Tracks), wird tatsächlich über die [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled)-Eigenschaft verwaltet, für die es keine Ereignisse gibt.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("mute", (event) => { })

onmute = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem Beispiel werden Ereignishandler für die `mute`- und [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event)-Ereignisse eingerichtet, um zu erkennen, wann das Medium nicht von der Quelle des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) mit dem Namen `musicTrack` stammt.

```js
musicTrack.addEventListener("mute", (event) => {
  const widget = document.getElementById("timeline-widget");
  widget.style.backgroundColor = "#aaaaaa";
});

musicTrack.addEventListener("unmute", (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "white";
});
```

Mit diesen Ereignishandlern erhält das Element mit der ID `timeline-widget` seine Hintergrundfarbe auf `#aaaaaa` geändert, wenn der Track `musicTrack` in seinen [`muted`](/de/docs/Web/API/MediaStreamTrack/muted)-Zustand eintritt. Wenn der Track den stummgeschalteten Zustand verlässt - erkannt durch das Eintreffen eines `unmute`-Ereignisses - wird die Hintergrundfarbe wieder auf Weiß gesetzt.

Sie können auch die `onmute`-Ereignishandler-Eigenschaft verwenden, um einen Handler für dieses Ereignis einzurichten; ähnlich steht die [`onunmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event)-Ereignishandler-Eigenschaft zur Verfügung, um einen Handler für das `unmute`-Ereignis einzurichten. Das folgende Beispiel zeigt dies:

```js
musicTrack.onmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#aaaaaa";
};

musicTrack.onunmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "white";
};
```

### Tracks über Empfänger stummschalten

Das folgende Beispiel zeigt, wie man Tracks mithilfe von Empfängern stummschaltet.

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

`transceivers` ist ein Array von [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver), in dem Sie den gesendeten und empfangenen Audio- oder Videotrack finden können. Für weitere Informationen siehe den Artikel zu [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) Ereignis
- [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction)
