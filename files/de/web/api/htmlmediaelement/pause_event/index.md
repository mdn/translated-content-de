---
title: "HTMLMediaElement: pause event"
short-title: pause
slug: Web/API/HTMLMediaElement/pause_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("HTMLMediaElement")}}

Das `pause`-Ereignis wird gesendet, wenn eine Anfrage zum Anhalten einer Aktivität verarbeitet wird und die Aktivität in den angehaltenen Zustand übergegangen ist, am häufigsten nachdem das Medium durch einen Aufruf der [`pause()`](/de/docs/Web/API/HTMLMediaElement/pause)-Methode des Elements pausiert wurde.

Das Ereignis wird gesendet, sobald die `pause()`-Methode zurückkehrt und nachdem die [`paused`](/de/docs/Web/API/HTMLMediaElement/paused)-Eigenschaft des Medienelements auf `true` geändert wurde.

Dieses Ereignis ist nicht abbruchfähig und wird nicht propagiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("pause", (event) => {});

onpause = (event) => {};
```

## Ereignistyp

Ein generisches [`Ereignis`](/de/docs/Web/API/Event).

## Beispiele

Diese Beispiele fügen einen Ereignis-Listener für das `pause`-Ereignis des HTMLMediaElements hinzu und senden dann eine Nachricht, wenn dieser Ereignis-Handler auf das Auslösen des Ereignisses reagiert hat.

Mit `addEventListener()`:

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

- Das HTMLMediaElement [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)-Ereignis
- Das HTMLMediaElement [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)-Ereignis
- Das HTMLMediaElement [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)-Ereignis
- Das HTMLMediaElement [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)-Ereignis
- Das HTMLMediaElement [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)-Ereignis
- Das HTMLMediaElement [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)-Ereignis
- Das HTMLMediaElement [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)-Ereignis
- Das HTMLMediaElement [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)-Ereignis
- Das HTMLMediaElement [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)-Ereignis
- Das HTMLMediaElement [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)-Ereignis
- Das HTMLMediaElement [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)-Ereignis
- Das HTMLMediaElement [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignis
- Das HTMLMediaElement [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)-Ereignis
- Das HTMLMediaElement [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)-Ereignis
- Das HTMLMediaElement [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)-Ereignis
- Das HTMLMediaElement [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)-Ereignis
- Das HTMLMediaElement [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)-Ereignis

## Siehe auch

- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
- [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)
