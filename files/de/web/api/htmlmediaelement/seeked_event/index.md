---
title: "HTMLMediaElement: seeked-Ereignis"
short-title: seeked
slug: Web/API/HTMLMediaElement/seeked_event
l10n:
  sourceCommit: 500a87094bd8ca5e41a6dab23f733867b9c9570e
---

{{APIRef("HTMLMediaElement")}}

Das `seeked`-Ereignis wird ausgelöst, wenn ein Suchvorgang abgeschlossen ist, sich die aktuelle Wiedergabeposition geändert hat und das boolesche Attribut `seeking` auf `false` gesetzt wurde.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("seeked", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onseeked = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Diese Beispiele fügen einen Event-Listener für das `seeked`-Ereignis des HTMLMediaElement hinzu und geben eine Meldung aus, wenn der Event-Handler auf das Auslösen des Ereignisses reagiert hat.

Mit `addEventListener()`:

```js
const video = document.querySelector("video");

video.addEventListener("seeked", (event) => {
  console.log("Video found the playback position it was looking for.");
});
```

Mit der Event-Handler-Eigenschaft `onseeked` (beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onseeked` hinzugefügte Event-Listener ersetzt werden):

```js
const video = document.querySelector("video");

video.onseeked = (event) => {
  console.log("Video found the playback position it was looking for.");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Verwandte Ereignisse

- Das [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)-Ereignis des HTMLMediaElement
- Das [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)-Ereignis des HTMLMediaElement
- Das [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)-Ereignis des HTMLMediaElement
- Das [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)-Ereignis des HTMLMediaElement
- Das [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)-Ereignis des HTMLMediaElement
- Das [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)-Ereignis des HTMLMediaElement
- Das [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)-Ereignis des HTMLMediaElement
- Das [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)-Ereignis des HTMLMediaElement
- Das [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)-Ereignis des HTMLMediaElement
- Das [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)-Ereignis des HTMLMediaElement
- Das [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignis des HTMLMediaElement
- Das [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event)-Ereignis des HTMLMediaElement
- Das [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)-Ereignis des HTMLMediaElement
- Das [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)-Ereignis des HTMLMediaElement
- Das [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)-Ereignis des HTMLMediaElement
- Das [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)-Ereignis des HTMLMediaElement
- Das [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)-Ereignis des HTMLMediaElement

## Siehe auch

- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
