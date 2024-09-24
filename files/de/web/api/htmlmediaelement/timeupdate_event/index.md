---
title: "HTMLMediaElement: timeupdate-Ereignis"
short-title: timeupdate
slug: Web/API/HTMLMediaElement/timeupdate_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("HTMLMediaElement")}}

Das `timeupdate`-Ereignis wird ausgelöst, wenn die durch das `currentTime`-Attribut angegebene Zeit aktualisiert wurde.

Die Frequenz des Ereignisses hängt von der Systemauslastung ab, wird aber zwischen etwa 4Hz und 66Hz ausgelöst (vorausgesetzt, die Ereignishandler benötigen nicht länger als 250 ms zur Ausführung). Browser sollten die Frequenz des Ereignisses basierend auf der Systemauslastung und den durchschnittlichen Kosten für die Verarbeitung des Ereignisses anpassen, sodass die UI-Aktualisierungen nicht häufiger sind, als der Browser bequem handhaben kann, während das Video dekodiert wird.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("timeupdate", (event) => {});

ontimeupdate = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Diese Beispiele fügen einen Ereignislistener für das `timeupdate`-Ereignis des HTMLMediaElement hinzu und senden eine Nachricht, wenn dieser Ereignishandler auf das Ereignis reagiert hat. Denken Sie daran, dass die Ereignisfrequenz von der Systemauslastung abhängt.

Verwendung von `addEventListener()`:

```js
const video = document.querySelector("video");

video.addEventListener("timeupdate", (event) => {
  console.log("Das currentTime-Attribut wurde aktualisiert. Noch einmal.");
});
```

Verwendung der `ontimeupdate`-Ereignishandlereigenschaft:

```js
const video = document.querySelector("video");

video.ontimeupdate = (event) => {
  console.log("Das currentTime-Attribut wurde aktualisiert. Noch einmal.");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Verwandte Ereignisse

- Das HTMLMediaElement-{{domxref("HTMLMediaElement.playing_event", 'playing')}}-Ereignis
- Das HTMLMediaElement-{{domxref("HTMLMediaElement.waiting_event", 'waiting')}}-Ereignis
- Das HTMLMediaElement-{{domxref("HTMLMediaElement.seeking_event", 'seeking')}}-Ereignis
- Das HTMLMediaElement-{{domxref("HTMLMediaElement.seeked_event", 'seeked')}}-Ereignis
- Das HTMLMediaElement-{{domxref("HTMLMediaElement.ended_event", 'ended')}}-Ereignis
- Das HTMLMediaElement-{{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}}-Ereignis
- Das HTMLMediaElement-{{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}}-Ereignis
- Das HTMLMediaElement-{{domxref("HTMLMediaElement.canplay_event", 'canplay')}}-Ereignis
- Das HTMLMediaElement-{{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}}-Ereignis
- Das HTMLMediaElement-{{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}}-Ereignis
- Das HTMLMediaElement-{{domxref("HTMLMediaElement.play_event", 'play')}}-Ereignis
- Das HTMLMediaElement-{{domxref("HTMLMediaElement.pause_event", 'pause')}}-Ereignis
- Das HTMLMediaElement-{{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}}-Ereignis
- Das HTMLMediaElement-{{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}}-Ereignis
- Das HTMLMediaElement-{{domxref("HTMLMediaElement.suspend_event", 'suspend')}}-Ereignis
- Das HTMLMediaElement-{{domxref("HTMLMediaElement.emptied_event", 'emptied')}}-Ereignis
- Das HTMLMediaElement-{{domxref("HTMLMediaElement.stalled_event", 'stalled')}}-Ereignis

## Siehe auch

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
