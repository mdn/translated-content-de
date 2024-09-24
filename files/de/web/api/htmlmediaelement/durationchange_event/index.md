---
title: "HTMLMediaElement: durationchange Ereignis"
short-title: durationchange
slug: Web/API/HTMLMediaElement/durationchange_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("HTMLMediaElement")}}

Das `durationchange` Ereignis wird ausgelöst, wenn das `duration` Attribut aktualisiert wurde.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignisbehandler-Eigenschaft.

```js
addEventListener("durationchange", (event) => {});

ondurationchange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Diese Beispiele fügen einen Ereignis-Listener für das `durationchange` Ereignis des HTMLMediaElement hinzu und senden dann eine Nachricht, wenn dieser Ereignisbehandler auf das Ereignisauslösen reagiert hat.

Verwendung von `addEventListener()`:

```js
const video = document.querySelector("video");

video.addEventListener("durationchange", (event) => {
  console.log("Not sure why, but the duration of the video has changed.");
});
```

Verwendung der `ondurationchange` Ereignisbehandler-Eigenschaft:

```js
const video = document.querySelector("video");

video.ondurationchange = (event) => {
  console.log("Not sure why, but the duration of the video has changed.");
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
- Das HTMLMediaElement {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.play_event", 'play')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.pause_event", 'pause')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.suspend_event", 'suspend')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.emptied_event", 'emptied')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.stalled_event", 'stalled')}} Ereignis

## Siehe auch

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
