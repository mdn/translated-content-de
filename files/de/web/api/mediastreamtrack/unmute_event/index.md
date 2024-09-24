---
title: "MediaStreamTrack: unmute Ereignis"
short-title: unmute
slug: Web/API/MediaStreamTrack/unmute_event
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Das **`unmute`** Ereignis wird an einen {{domxref("MediaStreamTrack")}} gesendet, wenn die Quelle des Tracks nach einer Periode, in der sie keine Mediendaten bereitstellen konnte, wieder in der Lage ist, Daten zu liefern.

Dies beendet den {{domxref("MediaStreamTrack.muted", "muted")}} Zustand, der mit dem {{domxref("MediaStreamTrack/mute_event", "mute")}} Ereignis begonnen hat.

> [!NOTE]
> Der Zustand, den die meisten Personen als "stummgeschaltet" betrachten (also eine benutzerkontrollierbare Möglichkeit, einen Track stummzuschalten), wird tatsächlich über die Eigenschaft {{domxref("MediaStreamTrack.enabled")}} verwaltet, für die es keine Ereignisse gibt.

Dieses Ereignis kann nicht abgebrochen werden und es wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder legen Sie eine Ereignishandler-Eigenschaft fest.

```js
addEventListener("unmute", (event) => {});

onunmute = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

In diesem Beispiel werden Ereignishandler für die {{domxref("MediaStreamTrack/mute_event", "mute")}} und `unmute` Ereignisse eingerichtet, um zu erkennen, wann keine Mediendaten von der Quelle für den {{domxref("MediaStreamTrack")}}, der in der Variablen `musicTrack` gespeichert ist, fließen.

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

Mit diesen Ereignishandlern ändert sich die Hintergrundfarbe des Elements mit der ID `timeline-widget` in `#aaa`, wenn der Track `musicTrack` in seinen {{domxref("MediaStreamTrack.muted", "muted")}} Zustand eintritt. Wenn der Track den stummgeschalteten Zustand verlässt — erfasst durch das Eintreffen eines `unmuted` Ereignisses — wird die Hintergrundfarbe auf weiß zurückgesetzt.

Sie können auch die `onunmute` Ereignishandler-Eigenschaft verwenden, um einen Handler für dieses Ereignis einzurichten; ähnlich ist der {{domxref("MediaStreamTrack.mute_event", "onmute")}} Ereignishandler verfügbar, um einen Handler für das `mute` Ereignis einzurichten. Das folgende Beispiel zeigt dies:

```js
musicTrack.onmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#aaa";
};

musicTrack.onunmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#fff";
};
```

### Entstummung von Tracks über Empfänger

Das folgende Beispiel zeigt, wie man Tracks über Empfänger entstummt.

```js
// Peer 1 (Empfänger)
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

`transceivers` ist ein Array von {{domxref("RTCRtpTransceiver")}}, in dem Sie den gesendeten und empfangenen Audio- oder Video-Track finden können. Weitere Informationen finden Sie im Artikel {{domxref("RTCRtpTransceiver.direction", "direction")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("MediaStreamTrack/mute_event", "mute")}} Ereignis
