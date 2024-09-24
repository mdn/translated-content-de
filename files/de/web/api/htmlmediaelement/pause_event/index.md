---
title: "HTMLMediaElement: pause-Ereignis"
short-title: pause
slug: Web/API/HTMLMediaElement/pause_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("HTMLMediaElement")}}

Das `pause`-Ereignis wird gesendet, wenn eine Anforderung, eine Aktivität zu pausieren, verarbeitet wird und die Aktivität ihren pausierten Zustand erreicht hat, am häufigsten nachdem das Medium durch einen Aufruf der Methode {{domxref("HTMLMediaElement.pause", "pause()")}} des Elements pausiert wurde.

Das Ereignis wird gesendet, sobald die `pause()`-Methode zurückkehrt und nachdem die {{domxref("HTMLMediaElement.paused", "paused")}}-Eigenschaft des Medienelements auf `true` geändert wurde.

Dieses Ereignis ist nicht abbruchfähig und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("pause", (event) => {});

onpause = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Diese Beispiele fügen einen Ereignis-Listener für das `pause`-Ereignis des HTMLMediaElementes hinzu und senden dann eine Nachricht, wenn dieser Ereignis-Handler auf das Auslösen des Ereignisses reagiert hat.

Verwendung von `addEventListener()`:

```js
const video = document.querySelector("video");

video.addEventListener("pause", (event) => {
  console.log(
    "The Boolean paused property is now 'true'. Either the pause() method was called or the autoplay attribute was toggled.",
  );
});
```

Verwendung der `onpause`-Ereignis-Handler-Eigenschaft:

```js
const video = document.querySelector("video");

video.onpause = (event) => {
  console.log(
    "The Boolean paused property is now 'true'. Either the pause() method was called or the autoplay attribute was toggled.",
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
- Das HTMLMediaElement {{domxref("HTMLMediaElement.play_event", 'play')}}-Ereignis
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
- {{domxref("SpeechSynthesisUtterance")}}
