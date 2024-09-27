---
title: "MediaStreamTrack: mute Event"
short-title: mute
slug: Web/API/MediaStreamTrack/mute_event
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Das **`mute`**-Event wird an einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) gesendet, wenn die Quelle des Tracks vorübergehend nicht in der Lage ist, Mediendaten bereitzustellen.

Wenn der Track wieder in der Lage ist, Medienausgaben zu erzeugen, wird ein [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event)-Event gesendet.

Während der Zeit zwischen dem `mute`-Event und dem `unmute`-Event ist der Wert der [`muted`](/de/docs/Web/API/MediaStreamTrack/muted)-Eigenschaft des Tracks `true`.

> [!NOTE]
> Der Zustand, den die meisten Menschen als "stummgeschaltet" betrachten (d. h. ein benutzerdefinierter Zustand, um einen Track zu stummschalten), wird tatsächlich über die [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled)-Eigenschaft verwaltet, für die es keine Events gibt.

Dieses Event ist nicht abbruchbar und bildet keine Blasen.

## Syntax

Verwenden Sie den Eventnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("mute", (event) => {});

onmute = (event) => {};
```

## Eventtyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem Beispiel werden Event-Handler für die `mute`- und [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event)-Events eingerichtet, um zu erkennen, wann die Medien nicht von der Quelle für den [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) referenziert durch `musicTrack` fließen.

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

Mit diesen Event-Handlern, wird, wenn der Track `musicTrack` seinen [`muted`](/de/docs/Web/API/MediaStreamTrack/muted)-Zustand erreicht, das Element mit der ID `timeline-widget` in der Hintergrundfarbe auf `#aaa` geändert. Wenn der Track den stummgeschalteten Zustand verlässt—erkannt durch das Eintreffen eines `unmute`-Events—wird die Hintergrundfarbe auf weiß zurückgesetzt.

Sie können auch die `onmute` Event-Handler-Eigenschaft verwenden, um einen Handler für dieses Event einzurichten; ähnlich ist der [`onunmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) Event-Handler verfügbar, um einen Handler für das `unmute`-Event einzurichten. Das folgende Beispiel zeigt dies:

```js
musicTrack.onmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#aaa";
};

musicTrack.onunmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#fff";
};
```

### Spuren durch Empfänger stummschalten

Das folgende Beispiel zeigt, wie man Spuren über Empfänger stumm schaltet.

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

`transceivers` ist ein Array von [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver), bei dem Sie den gesendeten und empfangenen Audio- oder Videotrack finden können. Weitere Informationen finden Sie im Artikel über die [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) Event
- [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction)
