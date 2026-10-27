---
title: "HTMLMediaElement: waiting-Ereignis"
short-title: waiting
slug: Web/API/HTMLMediaElement/waiting_event
l10n:
  sourceCommit: 500a87094bd8ca5e41a6dab23f733867b9c9570e
---

{{APIRef("HTMLMediaElement")}}

Das `waiting`-Ereignis wird ausgelöst, wenn die Wiedergabe aufgrund eines vorübergehenden Datenmangels angehalten wurde.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht durch die DOM-Hierarchie weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("waiting", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onwaiting = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Diese Beispiele fügen einen Event-Listener für das `waiting`-Ereignis von HTMLMediaElement hinzu und geben eine Meldung aus, wenn der Event-Handler auf das ausgelöste Ereignis reagiert hat.

Mit `addEventListener()`:

```js
const video = document.querySelector("video");

video.addEventListener("waiting", (event) => {
  console.log("Video is waiting for more data.");
});
```

Mit der Event-Handler-Eigenschaft `onwaiting` (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onwaiting` hinzugefügte Event-Listener ersetzt werden):

```js
const video = document.querySelector("video");

video.onwaiting = (event) => {
  console.log("Video is waiting for more data.");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Verwandte Ereignisse

- Das [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)-Ereignis von HTMLMediaElement
- Das [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)-Ereignis von HTMLMediaElement
- Das [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)-Ereignis von HTMLMediaElement
- Das [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)-Ereignis von HTMLMediaElement
- Das [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)-Ereignis von HTMLMediaElement
- Das [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)-Ereignis von HTMLMediaElement
- Das [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)-Ereignis von HTMLMediaElement
- Das [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)-Ereignis von HTMLMediaElement
- Das [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)-Ereignis von HTMLMediaElement
- Das [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)-Ereignis von HTMLMediaElement
- Das [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignis von HTMLMediaElement
- Das [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event)-Ereignis von HTMLMediaElement
- Das [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)-Ereignis von HTMLMediaElement
- Das [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)-Ereignis von HTMLMediaElement
- Das [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)-Ereignis von HTMLMediaElement
- Das [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)-Ereignis von HTMLMediaElement
- Das [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)-Ereignis von HTMLMediaElement

## Siehe auch

- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
