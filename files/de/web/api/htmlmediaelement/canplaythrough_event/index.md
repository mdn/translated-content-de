---
title: "HTMLMediaElement: canplaythrough Ereignis"
short-title: canplaythrough
slug: Web/API/HTMLMediaElement/canplaythrough_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("HTMLMediaElement")}}

Das `canplaythrough`-Ereignis wird ausgelöst, wenn der Benutzeragent das Medium abspielen kann und schätzt, dass genug Daten geladen wurden, um das Medium bis zum Ende abzuspielen, ohne für weiteres Puffern des Inhalts anhalten zu müssen.

Dieses Ereignis ist nicht abbruchfähig und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("canplaythrough", (event) => {});

oncanplaythrough = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Diese Beispiele fügen einen Ereignislistener für das `canplaythrough`-Ereignis des HTMLMediaElements hinzu und geben eine Nachricht aus, wenn dieser Ereignishandler auf das Auslösen des Ereignisses reagiert.

Verwendung von `addEventListener()`:

```js
const video = document.querySelector("video");

video.addEventListener("canplaythrough", (event) => {
  console.log(
    "I think I can play through the entire video without having to stop to buffer.",
  );
});
```

Verwendung der `oncanplaythrough`-Ereignishandler-Eigenschaft:

```js
const video = document.querySelector("video");

video.oncanplaythrough = (event) => {
  console.log(
    "I think I can play through the entire video without having to stop to buffer.",
  );
};
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

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
- Das HTMLMediaElement-{{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}}-Ereignis
- Das HTMLMediaElement-{{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}}-Ereignis
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
