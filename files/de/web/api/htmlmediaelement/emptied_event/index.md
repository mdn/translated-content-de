---
title: "HTMLMediaElement: emptied-Ereignis"
short-title: emptied
slug: Web/API/HTMLMediaElement/emptied_event
l10n:
  sourceCommit: 500a87094bd8ca5e41a6dab23f733867b9c9570e
---

{{APIRef("HTMLMediaElement")}}

Das `emptied`-Ereignis wird ausgelöst, wenn das Medium leer geworden ist. Dies geschieht beispielsweise, wenn das Medium bereits vollständig oder teilweise geladen wurde und die Methode `load()` aufgerufen wird, um es erneut zu laden.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("emptied", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onemptied = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Diese Beispiele fügen einen Event-Listener für das `emptied`-Ereignis des HTMLMediaElement hinzu und geben eine Meldung aus, sobald der Event-Handler auf das Ereignis reagiert hat.

Mit `addEventListener()`:

```js
const video = document.querySelector("video");

video.addEventListener("emptied", (event) => {
  console.log("Uh oh. The media is empty. Did you call load()?");
});
```

Mit der Event-Handler-Eigenschaft `onemptied` (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onemptied` hinzugefügte Event-Listener ersetzt werden):

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

- Das HTMLMediaElement-Ereignis [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)
- Das HTMLMediaElement-Ereignis [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
- Das HTMLMediaElement-Ereignis [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
- Das HTMLMediaElement-Ereignis [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
- Das HTMLMediaElement-Ereignis [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
- Das HTMLMediaElement-Ereignis [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
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
- Das HTMLMediaElement-Ereignis [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)

## Siehe auch

- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
