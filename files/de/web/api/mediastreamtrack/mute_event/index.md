---
title: "MediaStreamTrack: mute-Ereignis"
short-title: mute
slug: Web/API/MediaStreamTrack/mute_event
l10n:
  sourceCommit: 500a87094bd8ca5e41a6dab23f733867b9c9570e
---

{{APIRef("Media Capture and Streams")}}

Das **`mute`**-Ereignis wird an einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) gesendet, wenn die Quelle des Tracks vorübergehend keine Mediendaten bereitstellen kann.

Sobald der Track wieder Medien ausgeben kann, wird ein [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event)-Ereignis gesendet.

Zwischen dem `mute`- und dem `unmute`-Ereignis hat die Eigenschaft [`muted`](/de/docs/Web/API/MediaStreamTrack/muted) des Tracks den Wert `true`.

> [!NOTE]
> Der Zustand, den die meisten Menschen als „stummgeschaltet“ bezeichnen – also das Stummschalten eines Tracks durch den Benutzer –, wird tatsächlich über die Eigenschaft [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled) gesteuert. Für diese Eigenschaft gibt es keine Ereignisse.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("mute", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onmute = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem Beispiel werden Event-Handler für die Ereignisse `mute` und [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) eingerichtet. Damit lässt sich erkennen, wann die Quelle des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), auf den `musicTrack` verweist, keine Mediendaten liefert.

```js
musicTrack.addEventListener("mute", (event) => {
  const widget = document.getElementById("timeline-widget");
  widget.style.backgroundColor = "#aaaaaa";
});

musicTrack.addEventListener("unmute", (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "white";
});
```

Mit diesen Event-Handlern ändert sich die Hintergrundfarbe des Elements mit der ID `timeline-widget` zu `#aaaaaa`, sobald der Track `musicTrack` in den Zustand [`muted`](/de/docs/Web/API/MediaStreamTrack/muted) wechselt. Verlässt der Track diesen Zustand – erkennbar am Eintreffen eines `unmute`-Ereignisses –, wird die Hintergrundfarbe wieder auf Weiß gesetzt.

Sie können auch die Event-Handler-Eigenschaft `onmute` verwenden, um einen Handler für dieses Ereignis einzurichten. Entsprechend steht der Event-Handler [`onunmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) für das `unmute`-Ereignis zur Verfügung. Das folgende Beispiel zeigt dies. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onmute` und `onunmute` hinzugefügte Event-Listener ersetzt werden:

```js
musicTrack.onmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#aaaaaa";
};

musicTrack.onunmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "white";
};
```

### Tracks über Receiver stummschalten

Das folgende Beispiel zeigt, wie Sie Tracks mithilfe von Receivern stummschalten.

```js
// Peer 1 (Sender)
const transceivers = peer.getTransceivers();

const audioTrack = transceivers[0];
audioTrack.direction = "recvonly";

const videoTrack = transceivers[1];
videoTrack.direction = "recvonly";

// Peer 2 (Receiver)
audioTrack.addEventListener("mute", (event) => {
  // Do something in UI
});

videoTrack.addEventListener("mute", (event) => {
  // Do something in UI
});
```

`transceivers` ist ein Array von [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Objekten, über die Sie den gesendeten und empfangenen Audio- oder Videotrack finden können. Weitere Informationen finden Sie im Artikel zu [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event)-Ereignis
- [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction)
