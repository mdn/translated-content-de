---
title: "HTMLMediaElement: timeupdate-Ereignis"
short-title: timeupdate
slug: Web/API/HTMLMediaElement/timeupdate_event
l10n:
  sourceCommit: 500a87094bd8ca5e41a6dab23f733867b9c9570e
---

{{APIRef("HTMLMediaElement")}}

Das Ereignis `timeupdate` wird ausgelöst, wenn die vom Attribut `currentTime` angegebene Zeit aktualisiert wurde.

Die Häufigkeit des Ereignisses hängt von der Systemlast ab und liegt zwischen etwa 4 Hz und 66 Hz (vorausgesetzt, die Ausführung der Event-Handler dauert nicht länger als 250 ms). Benutzeragenten sollten die Ereignishäufigkeit an die Systemlast und den durchschnittlichen Verarbeitungsaufwand pro Ereignis anpassen. So wird die Benutzeroberfläche nicht häufiger aktualisiert, als der Benutzeragent während der Videodekodierung problemlos bewältigen kann.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht durch die DOM-Hierarchie weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("timeupdate", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
ontimeupdate = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Diese Beispiele fügen einen Event-Listener für das `timeupdate`-Ereignis von HTMLMediaElement hinzu und geben anschließend eine Meldung aus, wenn der Event-Handler auf das ausgelöste Ereignis reagiert hat. Beachten Sie, dass die Ereignishäufigkeit von der Systemlast abhängt.

Mit `addEventListener()`:

```js
const video = document.querySelector("video");

video.addEventListener("timeupdate", (event) => {
  console.log("The currentTime attribute has been updated. Again.");
});
```

Mit der Event-Handler-Eigenschaft `ontimeupdate` (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `ontimeupdate` hinzugefügte Event-Listener ersetzt werden):

```js
const video = document.querySelector("video");

video.ontimeupdate = (event) => {
  console.log("The currentTime attribute has been updated. Again.");
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
