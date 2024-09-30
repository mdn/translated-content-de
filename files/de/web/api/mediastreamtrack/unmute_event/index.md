---
title: "MediaStreamTrack: unmute Ereignis"
short-title: unmute
slug: Web/API/MediaStreamTrack/unmute_event
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Das **`unmute`** Ereignis wird an ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) gesendet, wenn die Quelle des Tracks nach einer Periode, in der sie keine Mediendaten liefern konnte, wieder in der Lage ist, diese bereitzustellen.

Dies beendet den [`muted`](/de/docs/Web/API/MediaStreamTrack/muted) Zustand, der mit dem [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) Ereignis begann.

> [!NOTE]
> Die Bedingung, die die meisten Menschen als "stummgeschaltet" betrachten (also eine benutzerkontrollierbare Möglichkeit, einen Track stummzuschalten), wird tatsächlich über die [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled) Eigenschaft verwaltet, für die es keine Ereignisse gibt.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Ereignisblase aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlereigenschaft.

```js
addEventListener("unmute", (event) => {});

onunmute = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem Beispiel werden Ereignisbehandler für die [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und `unmute` Ereignisse eingerichtet, um zu erkennen, wann das Medium nicht mehr von der Quelle des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), das in der Variable `musicTrack` gespeichert ist, fließt.

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

Mit diesen Ereignisbehandlern wechselt das Element mit der ID `timeline-widget` seine Hintergrundfarbe zu `#aaa`, wenn der Track `musicTrack` seinen [`muted`](/de/docs/Web/API/MediaStreamTrack/muted) Zustand erreicht. Wenn der Track den stummgeschalteten Zustand verlässt—erkannt durch das Eintreffen eines `unmuted` Ereignisses—wird die Hintergrundfarbe auf Weiß zurückgesetzt.

Sie können auch die `onunmute` Ereignisbehandlereigenschaft verwenden, um einen Behandler für dieses Ereignis einzurichten; ähnlich steht die [`onmute`](/de/docs/Web/API/MediaStreamTrack/mute_event) Ereignisbehandlereigenschaft zur Verfügung, um einen Behandler für das `mute` Ereignis einzurichten. Das folgende Beispiel zeigt dies:

```js
musicTrack.onmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#aaa";
};

musicTrack.onunmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#fff";
};
```

### Tracks über Receiver unmute

Das folgende Beispiel zeigt, wie Sie Tracks mithilfe von Receivern unmute.

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

`transceivers` ist ein Array von [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver), in dem Sie die gesendeten und empfangenen Audio- oder Videospuren finden können. Weitere Informationen finden Sie im [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction) Artikel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) Ereignis
