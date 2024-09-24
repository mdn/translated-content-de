---
title: "MediaStreamTrack: mute Ereignis"
short-title: mute
slug: Web/API/MediaStreamTrack/mute_event
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Das **`mute`** Ereignis wird an einen {{domxref("MediaStreamTrack")}} gesendet, wenn die Quelle des Tracks vorübergehend nicht in der Lage ist, Mediendaten bereitzustellen.

Wenn der Track wieder in der Lage ist, Medienausgabe zu erzeugen, wird ein {{domxref("MediaStreamTrack/unmute_event", "unmute")}} Ereignis gesendet.

Während der Zeit zwischen dem `mute` Ereignis und dem `unmute` Ereignis ist der Wert der {{domxref("MediaStreamTrack.muted", "muted")}} Eigenschaft des Tracks `true`.

> [!NOTE]
> Der Zustand, den die meisten Menschen als "stummgeschaltet" betrachten (d.h. ein vom Benutzer umgeschalteter Zustand zur Stummschaltung eines Tracks), wird tatsächlich mit der {{domxref("MediaStreamTrack.enabled")}} Eigenschaft verwaltet, für die es keine Ereignisse gibt.

Dieses Ereignis kann nicht abgebrochen werden und propagiert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("mute", (event) => {});

onmute = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

In diesem Beispiel werden Ereignishandler für die `mute` und {{domxref("MediaStreamTrack.unmute_event", "unmute")}} Ereignisse eingerichtet, um zu erkennen, wann die Medien nicht mehr von der Quelle für den {{domxref("MediaStreamTrack")}} fließen, auf den `musicTrack` verweist.

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

Mit diesen Ereignishandlern wird, wenn der Track `musicTrack` seinen {{domxref("MediaStreamTrack.muted", "muted")}} Zustand erreicht, das Element mit der ID `timeline-widget` in der Hintergrundfarbe auf `#aaa` geändert. Wenn der Track den stummgeschalteten Zustand verlässt — erkannt durch das Eintreffen eines `unmute` Ereignisses — wird die Hintergrundfarbe auf Weiß zurückgesetzt.

Sie können auch die `onmute` Ereignishandler-Eigenschaft verwenden, um einen Handler für dieses Ereignis einzurichten; ähnlich steht der {{domxref("MediaStreamTrack.unmute_event", "onunmute")}} Ereignishandler zur Verfügung, um einen Handler für das `unmute` Ereignis einzurichten. Das folgende Beispiel zeigt dies:

```js
musicTrack.onmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#aaa";
};

musicTrack.onunmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#fff";
};
```

### Tracks über Receiver stumm schalten

Das folgende Beispiel zeigt, wie Tracks über Receiver stummgeschaltet werden können.

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

`transceivers` ist ein Array von {{domxref("RTCRtpTransceiver")}}, in dem Sie den gesendeten und empfangenen Audio- oder Videotrack finden können. Für weitere Informationen siehe den Artikel {{domxref("RTCRtpTransceiver.direction", "direction")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("MediaStreamTrack/unmute_event", "unmute")}} Ereignis
- {{domxref("RTCRtpTransceiver.direction", "direction")}}
