---
title: "HTMLMediaElement: emptied Ereignis"
short-title: emptied
slug: Web/API/HTMLMediaElement/emptied_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("HTMLMediaElement")}}

Das `emptied` Ereignis wird ausgelöst, wenn das Medium leer geworden ist; zum Beispiel, wenn das Medium bereits geladen (oder teilweise geladen) ist und die `load()` Methode aufgerufen wird, um es neu zu laden.

Dieses Ereignis ist nicht abbruchbar und es wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignisbehandlungseigenschaft.

```js
addEventListener("emptied", (event) => {});

onemptied = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Diese Beispiele fügen einen Ereignislistener für das `emptied` Ereignis des HTMLMediaElement hinzu und geben eine Nachricht aus, wenn dieser Ereignishandler auf das Ereignis reagiert hat.

Verwendung von `addEventListener()`:

```js
const video = document.querySelector("video");

video.addEventListener("emptied", (event) => {
  console.log("Uh oh. The media is empty. Did you call load()?");
});
```

Verwendung der `onemptied` Ereignishandlereigenschaft:

```js
const video = document.querySelector("video");

video.onemptied = (event) => {
  console.log("Uh oh. The media is empty. Did you call load()?");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Verwandte Ereignisse

- Das HTMLMediaElement {{domxref("HTMLMediaElement.playing_event", 'playing')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.waiting_event", 'waiting')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.seeking_event", 'seeking')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.seeked_event", 'seeked')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.ended_event", 'ended')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.canplay_event", 'canplay')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.play_event", 'play')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.pause_event", 'pause')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.suspend_event", 'suspend')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.stalled_event", 'stalled')}} Ereignis

## Siehe auch

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
