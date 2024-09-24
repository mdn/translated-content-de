---
title: "HTMLMediaElement: play-Ereignis"
short-title: play
slug: Web/API/HTMLMediaElement/play_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("HTMLMediaElement")}}

Das `play`-Ereignis wird ausgelöst, wenn die `paused`-Eigenschaft aufgrund der `play`-Methode oder des `autoplay`-Attributs von `true` auf `false` geändert wird.

Dieses Ereignis kann nicht abgebrochen werden und es gibt keine Ereignisweiterleitung.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("play", (event) => {});

onplay = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Diese Beispiele fügen einen Ereignis-Listener für das `play`-Ereignis des HTMLMediaElement hinzu und senden eine Nachricht, wenn der Ereignis-Handler auf das Ereignis reagiert hat.

Verwendung von `addEventListener()`:

```js
const video = document.querySelector("video");

video.addEventListener("play", (event) => {
  console.log(
    "Die boolesche paused-Eigenschaft ist jetzt 'false'. Entweder wurde die play()-Methode aufgerufen oder das autoplay-Attribut wurde umgeschaltet.",
  );
});
```

Verwendung der `onplay`-Ereignis-Handler-Eigenschaft:

```js
const video = document.querySelector("video");

video.onplay = (event) => {
  console.log(
    "Die boolesche paused-Eigenschaft ist jetzt 'false'. Entweder wurde die play()-Methode aufgerufen oder das autoplay-Attribut wurde umgeschaltet.",
  );
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Verwandte Ereignisse

- Das HTMLMediaElement {{domxref("HTMLMediaElement.playing_event", 'playing')}}-Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.waiting_event", 'waiting')}}-Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.seeking_event", 'seeking')}}-Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.seeked_event", 'seeked')}}-Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.ended_event", 'ended')}}-Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}}-Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}}-Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.canplay_event", 'canplay')}}-Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}}-Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}}-Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}}-Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.pause_event", 'pause')}}-Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}}-Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}}-Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.suspend_event", 'suspend')}}-Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.emptied_event", 'emptied')}}-Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.stalled_event", 'stalled')}}-Ereignis

## Siehe auch

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
