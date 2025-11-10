---
title: "HTMLMediaElement: durationchange Event"
short-title: durationchange
slug: Web/API/HTMLMediaElement/durationchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("HTMLMediaElement")}}

Das `durationchange`-Ereignis wird ausgelöst, wenn das `duration`-Attribut aktualisiert wurde.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlungseigenschaft.

```js-nolint
addEventListener("durationchange", (event) => { })

ondurationchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Diese Beispiele fügen einen Ereignis-Listener für das `durationchange`-Ereignis des HTMLMediaElements hinzu und senden dann eine Nachricht, wenn der Ereignishandler auf das Auslösen des Ereignisses reagiert hat.

Verwendung von `addEventListener()`:

```js
const video = document.querySelector("video");

video.addEventListener("durationchange", (event) => {
  console.log("Not sure why, but the duration of the video has changed.");
});
```

Verwendung der `ondurationchange`-Ereignisbehandlungseigenschaft:

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

- Das HTMLMediaElement-`playing`-Ereignis ([`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event))
- Das HTMLMediaElement-`waiting`-Ereignis ([`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event))
- Das HTMLMediaElement-`seeking`-Ereignis ([`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event))
- Das HTMLMediaElement-`seeked`-Ereignis ([`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event))
- Das HTMLMediaElement-`ended`-Ereignis ([`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event))
- Das HTMLMediaElement-`loadedmetadata`-Ereignis ([`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event))
- Das HTMLMediaElement-`loadeddata`-Ereignis ([`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event))
- Das HTMLMediaElement-`canplay`-Ereignis ([`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event))
- Das HTMLMediaElement-`canplaythrough`-Ereignis ([`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event))
- Das HTMLMediaElement-`timeupdate`-Ereignis ([`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event))
- Das HTMLMediaElement-`play`-Ereignis ([`play`](/de/docs/Web/API/HTMLMediaElement/play_event))
- Das HTMLMediaElement-`pause`-Ereignis ([`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event))
- Das HTMLMediaElement-`ratechange`-Ereignis ([`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event))
- Das HTMLMediaElement-`volumechange`-Ereignis ([`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event))
- Das HTMLMediaElement-`suspend`-Ereignis ([`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event))
- Das HTMLMediaElement-`emptied`-Ereignis ([`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event))
- Das HTMLMediaElement-`stalled`-Ereignis ([`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event))

## Siehe auch

- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
