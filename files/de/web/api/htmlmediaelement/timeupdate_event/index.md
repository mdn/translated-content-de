---
title: "HTMLMediaElement: timeupdate Ereignis"
short-title: timeupdate
slug: Web/API/HTMLMediaElement/timeupdate_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("HTMLMediaElement")}}

Das `timeupdate`-Ereignis wird ausgelöst, wenn die durch das `currentTime`-Attribut angegebene Zeit aktualisiert wurde.

Die Ereignisfrequenz hängt von der Systemlast ab, liegt jedoch zwischen etwa 4Hz und 66Hz (vorausgesetzt, die Event-Handler benötigen nicht länger als 250ms zum Ausführen). Es wird empfohlen, dass Benutzeragenten die Frequenz des Ereignisses basierend auf der Systemlast und den durchschnittlichen Kosten der Verarbeitung des Ereignisses jedes Mal variieren, damit die Benutzeroberfläche nicht häufiger aktualisiert wird, als der Benutzeragent beim Dekodieren des Videos problemlos bewältigen kann.

Dieses Ereignis ist nicht abbruchfähig und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("timeupdate", (event) => { })

ontimeupdate = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Diese Beispiele fügen einen Event-Listener für das `timeupdate`-Ereignis von HTMLMediaElement hinzu und senden anschließend eine Nachricht, wenn dieser Event-Handler auf das Auslösen des Ereignisses reagiert hat. Denken Sie daran, die Ereignisfrequenz hängt von der Systemlast ab.

Verwendung von `addEventListener()`:

```js
const video = document.querySelector("video");

video.addEventListener("timeupdate", (event) => {
  console.log("The currentTime attribute has been updated. Again.");
});
```

Verwendung der `ontimeupdate`-Event-Handler-Eigenschaft:

```js
const video = document.querySelector("video");

video.ontimeupdate = (event) => {
  console.log("The currentTime attribute has been updated. Again.");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Verwandte Ereignisse

- Das HTMLMediaElement [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event) Ereignis
- Das HTMLMediaElement [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event) Ereignis
- Das HTMLMediaElement [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event) Ereignis
- Das HTMLMediaElement [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event) Ereignis
- Das HTMLMediaElement [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event) Ereignis
- Das HTMLMediaElement [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event) Ereignis
- Das HTMLMediaElement [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event) Ereignis
- Das HTMLMediaElement [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event) Ereignis
- Das HTMLMediaElement [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event) Ereignis
- Das HTMLMediaElement [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event) Ereignis
- Das HTMLMediaElement [`play`](/de/docs/Web/API/HTMLMediaElement/play_event) Ereignis
- Das HTMLMediaElement [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event) Ereignis
- Das HTMLMediaElement [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event) Ereignis
- Das HTMLMediaElement [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event) Ereignis
- Das HTMLMediaElement [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event) Ereignis
- Das HTMLMediaElement [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event) Ereignis
- Das HTMLMediaElement [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event) Ereignis

## Siehe auch

- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
