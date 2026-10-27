---
title: "HTMLMediaElement: loadedmetadata-Ereignis"
short-title: loadedmetadata
slug: Web/API/HTMLMediaElement/loadedmetadata_event
l10n:
  sourceCommit: 500a87094bd8ca5e41a6dab23f733867b9c9570e
---

{{APIRef("HTMLMediaElement")}}

Das `loadedmetadata`-Ereignis wird ausgelöst, wenn die Metadaten geladen wurden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("loadedmetadata", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onloadedmetadata = (event) => { }
```

## Ereignistyp

Ein allgemeines [`Event`](/de/docs/Web/API/Event).

## Beispiele

Diese Beispiele fügen einen Event-Listener für das `loadedmetadata`-Ereignis von HTMLMediaElement hinzu und geben eine Meldung aus, sobald der Event-Handler auf das ausgelöste Ereignis reagiert hat.

Mit `addEventListener()`:

```js
const video = document.querySelector("video");

video.addEventListener("loadedmetadata", (event) => {
  console.log(
    "The duration and dimensions of the media and tracks are now known.",
  );
});
```

Mit der Event-Handler-Eigenschaft `onloadedmetadata` (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onloadedmetadata` hinzugefügte Event-Listener ersetzt werden):

```js
const video = document.querySelector("video");

video.onloadedmetadata = (event) => {
  console.log(
    "The duration and dimensions of the media and tracks are now known.",
  );
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Verwandte Ereignisse

- Das HTMLMediaElement-Ereignis [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)
- Das HTMLMediaElement-Ereignis [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
- Das HTMLMediaElement-Ereignis [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
- Das HTMLMediaElement-Ereignis [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
- Das HTMLMediaElement-Ereignis [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
- Das HTMLMediaElement-Ereignis [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
- Das HTMLMediaElement-Ereignis [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
- Das HTMLMediaElement-Ereignis [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
- Das HTMLMediaElement-Ereignis [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
- Das HTMLMediaElement-Ereignis [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
- Das HTMLMediaElement-Ereignis [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)
- Das HTMLMediaElement-Ereignis [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event)
- Das HTMLMediaElement-Ereignis [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
- Das HTMLMediaElement-Ereignis [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
- Das HTMLMediaElement-Ereignis [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
- Das HTMLMediaElement-Ereignis [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
- Das HTMLMediaElement-Ereignis [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)

## Siehe auch

- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
