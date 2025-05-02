---
title: "HTMLMediaElement: stalled event"
short-title: stalled
slug: Web/API/HTMLMediaElement/stalled_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("HTMLMediaElement")}}

Das `stalled`-Ereignis wird ausgelöst, wenn der Benutzeragent versucht, Mediendaten zu laden, aber die Daten unerwartet nicht bereitgestellt werden.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("stalled", (event) => { })

onstalled = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Diese Beispiele fügen einen Ereignis-Listener für das `stalled`-Ereignis des HTMLMediaElements hinzu und geben eine Meldung aus, wenn der Ereignis-Handler auf das Auslösen des Ereignisses reagiert hat.

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

- Das HTMLMediaElement [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event) Ereignis
- Das HTMLMediaElement [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event) Ereignis
- Das HTMLMediaElement [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event) Ereignis
- Das HTMLMediaElement [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event) Ereignis
- Das HTMLMediaElement [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event) Ereignis
- Das HTMLMediaElement [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event) Ereignis
- Das HTMLMediaElement [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event) Ereignis
- Das HTMLMediaElement [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event) Ereignis
- Das HTMLMediaElement [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event) Ereignis
- Das HTMLMediaElement [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event) Ereignis
- Das HTMLMediaElement [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event) Ereignis
- Das HTMLMediaElement [`play`](/de/docs/Web/API/HTMLMediaElement/play_event) Ereignis
- Das HTMLMediaElement [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event) Ereignis
- Das HTMLMediaElement [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event) Ereignis
- Das HTMLMediaElement [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event) Ereignis
- Das HTMLMediaElement [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event) Ereignis
- Das HTMLMediaElement [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event) Ereignis

## Siehe auch

- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
