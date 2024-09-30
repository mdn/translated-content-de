---
title: "HTMLMediaElement: timeupdate Ereignis"
short-title: timeupdate
slug: Web/API/HTMLMediaElement/timeupdate_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("HTMLMediaElement")}}

Das `timeupdate` Ereignis wird ausgelöst, wenn die durch das `currentTime` Attribut angegebene Zeit aktualisiert wurde.

Die Häufigkeit des Ereignisses hängt von der Systemlast ab, wird jedoch zwischen etwa 4Hz und 66Hz ausgelöst (vorausgesetzt, die Ereignishandler benötigen nicht länger als 250ms zur Ausführung). Es wird empfohlen, dass Benutzeragenten die Frequenz des Ereignisses abhängig von der Systemlast und den durchschnittlichen Kosten der Ereignisverarbeitung jedes Mal variieren, sodass die UI-Aktualisierungen nicht häufiger erfolgen, als es der Benutzeragent beim Dekodieren des Videos bequem handhaben kann.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("timeupdate", (event) => {});

ontimeupdate = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Diese Beispiele fügen einen Ereignislistener für das `timeupdate` Ereignis des HTMLMediaElement hinzu und senden dann eine Nachricht, wenn dieser Ereignishandler auf das Erscheinen des Ereignisses reagiert hat. Denken Sie daran, dass die Frequenz des Ereignisses von der Systemlast abhängt.

Verwendung von `addEventListener()`:

```js
const video = document.querySelector("video");

video.addEventListener("timeupdate", (event) => {
  console.log("The currentTime attribute has been updated. Again.");
});
```

Verwendung der `ontimeupdate` Event-Handler-Eigenschaft:

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
