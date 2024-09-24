---
title: "HTMLMediaElement: Stalled-Ereignis"
short-title: stalled
slug: Web/API/HTMLMediaElement/stalled_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("HTMLMediaElement")}}

Das `stalled`-Ereignis wird ausgelöst, wenn der Benutzeragent versucht, Mediendaten abzurufen, die Daten jedoch unerwartet ausbleiben.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("stalled", (event) => {});

onstalled = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Diese Beispiele fügen einen Ereignis-Listener für das `stalled`-Ereignis des HTMLMediaElements hinzu und senden eine Nachricht, wenn der Ereignis-Handler auf das Auslösen des Ereignisses reagiert hat.

Verwendung von `addEventListener()`:

```js
const video = document.querySelector("video");

video.addEventListener("stalled", (event) => {
  console.log("Failed to fetch data, but trying.");
});
```

Verwendung der `onstalled`-Ereignis-Handler-Eigenschaft:

```js
const video = document.querySelector("video");

video.onstalled = (event) => {
  console.log("Failed to fetch data, but trying.");
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
- Das HTMLMediaElement {{domxref("HTMLMediaElement.play_event", 'play')}}-Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.pause_event", 'pause')}}-Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}}-Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}}-Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.suspend_event", 'suspend')}}-Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.emptied_event", 'emptied')}}-Ereignis

## Siehe auch

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
