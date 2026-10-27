---
title: "MediaStreamTrack: unmute-Ereignis"
short-title: unmute
slug: Web/API/MediaStreamTrack/unmute_event
l10n:
  sourceCommit: 500a87094bd8ca5e41a6dab23f733867b9c9570e
---

{{APIRef("Media Capture and Streams")}}

Das **`unmute`**-Ereignis wird an einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) gesendet, wenn die Quelle des Tracks nach einer Unterbrechung wieder Mediendaten bereitstellen kann.

Damit endet der Zustand [`muted`](/de/docs/Web/API/MediaStreamTrack/muted), der mit dem Ereignis [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) begonnen hat.

> [!NOTE]
> Was die meisten Menschen unter „stummgeschaltet“ verstehen – also eine vom Benutzer steuerbare Möglichkeit, einen Track stummzuschalten –, wird tatsächlich über die Eigenschaft [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled) gesteuert. Für Änderungen dieser Eigenschaft gibt es keine Ereignisse.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("unmute", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onunmute = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem Beispiel werden Event-Handler für die Ereignisse [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und `unmute` eingerichtet. So lässt sich erkennen, wann von der Quelle des in der Variablen `musicTrack` gespeicherten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) keine Mediendaten übertragen werden.

```js
musicTrack.addEventListener("mute", (event) => {
  const widget = document.getElementById("timeline-widget");
  widget.style.backgroundColor = "#aaaaaa";
});

musicTrack.addEventListener("unmute", (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "white";
});
```

Mit diesen Event-Handlern wird die Hintergrundfarbe des Elements mit der ID `timeline-widget` auf `#aaaaaa` gesetzt, wenn der Track `musicTrack` in den Zustand [`muted`](/de/docs/Web/API/MediaStreamTrack/muted) wechselt. Verlässt der Track diesen Zustand – erkennbar am Eintreffen eines `unmuted`-Ereignisses –, wird die Hintergrundfarbe wieder auf Weiß gesetzt.

Sie können auch die Event-Handler-Eigenschaft `onunmute` verwenden, um einen Handler für dieses Ereignis einzurichten. Entsprechend steht der Event-Handler [`onmute`](/de/docs/Web/API/MediaStreamTrack/mute_event) für das Ereignis `mute` zur Verfügung. Das folgende Beispiel zeigt dies. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onmute` und `onunmute` hinzugefügte Event-Listener ersetzt werden:

```js
musicTrack.onmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#aaaaaa";
};

musicTrack.onunmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "white";
};
```

### Stummschaltung von Tracks über Receiver aufheben

Das folgende Beispiel zeigt, wie Sie die Stummschaltung von Tracks mithilfe von Receivern aufheben.

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

`transceivers` ist ein Array von [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Objekten, über das Sie die gesendeten und empfangenen Audio- oder Videotracks ermitteln können. Weitere Informationen finden Sie im Artikel zur Eigenschaft [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Ereignis [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event)
