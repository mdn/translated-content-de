---
title: "MediaStreamTrack: unmute-Event"
short-title: unmute
slug: Web/API/MediaStreamTrack/unmute_event
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("Media Capture and Streams")}}

Das **`unmute`**-Ereignis wird an ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) gesendet, wenn die Quelle des Tracks nach einer Phase der Unfähigkeit, Mediendaten bereitzustellen, wieder dazu in der Lage ist.

Dies beendet den [`muted`](/de/docs/Web/API/MediaStreamTrack/muted)-Zustand, der mit dem [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event)-Ereignis begann.

> [!NOTE]
> Die Bedingung, die die meisten Menschen als "stummgeschaltet" betrachten (d.h. eine vom Benutzer steuerbare Methode zum Stummschalten eines Tracks), wird tatsächlich über die [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled)-Eigenschaft verwaltet, für die es keine Ereignisse gibt.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignisbehandlungs-Eigenschaft.

```js-nolint
addEventListener("unmute", (event) => { })

onunmute = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem Beispiel werden Ereignisbehandler für die [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event)- und `unmute`-Ereignisse eingerichtet, um zu erkennen, wann die Medien von der Quelle des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) im Variablen `musicTrack` nicht fließen.

```js
musicTrack.addEventListener("mute", (event) => {
  const widget = document.getElementById("timeline-widget");
  widget.style.backgroundColor = "#aaaaaa";
});

musicTrack.addEventListener("unmute", (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "white";
});
```

Mit diesen Ereignisbehandlern wird, wenn der Track `musicTrack` in den [`muted`](/de/docs/Web/API/MediaStreamTrack/muted)-Zustand eintritt, das Hintergrundfarbelement mit der ID `timeline-widget` auf `#aaaaaa` geändert. Wenn der Track den stummgeschalteten Zustand verlässt, erkannt durch das Eintreffen eines `unmuted`-Ereignisses, wird die Hintergrundfarbe wieder auf Weiß gesetzt.

Sie können auch die `onunmute`-Ereignisbehandlungs-Eigenschaft verwenden, um einen Behandler für dieses Ereignis einzurichten; ähnlich ist die [`onmute`](/de/docs/Web/API/MediaStreamTrack/mute_event)-Ereignisbehandlungs-Eigenschaft verfügbar, um einen Behandler für das `mute`-Ereignis einzurichten. Das folgende Beispiel zeigt dies:

```js
musicTrack.onmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#aaaaaa";
};

musicTrack.onunmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "white";
};
```

### Tracks durch Empfänger wieder aktivieren

Das folgende Beispiel zeigt, wie Tracks mithilfe von Empfängern aktiviert werden können.

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

`transceivers` ist ein Array von [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver), wo Sie den gesendeten und empfangenen Audio- oder Videotrack finden können. Für weitere Informationen siehe den Artikel zu [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event)-Ereignis
