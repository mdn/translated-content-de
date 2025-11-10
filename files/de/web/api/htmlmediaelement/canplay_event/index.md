---
title: "HTMLMediaElement: canplay Ereignis"
short-title: canplay
slug: Web/API/HTMLMediaElement/canplay_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("HTMLMediaElement")}}

Das `canplay` Ereignis wird ausgelöst, wenn der Benutzeragent in der Lage ist, die Medien abzuspielen, aber schätzt, dass nicht genügend Daten geladen wurden, um die Medien bis zum Ende abzuspielen, ohne für weiteres Puffern anhalten zu müssen.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlereigenschaft.

```js-nolint
addEventListener("canplay", (event) => { })

oncanplay = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Diese Beispiele fügen einen Ereignislistener für das `canplay` Ereignis des HTMLMediaElement hinzu und senden dann eine Nachricht, wenn dieser Ereignis-Handler auf das Auslösen des Ereignisses reagiert hat.

Verwendung von `addEventListener()`:

```js
const video = document.querySelector("video");

video.addEventListener("canplay", (event) => {
  console.log("Video can start, but not sure it will play through.");
});
```

Verwendung der `oncanplay` Ereignis-Handler-Eigenschaft:

```js
const video = document.querySelector("video");

video.oncanplay = (event) => {
  console.log("Video can start, but not sure it will play through.");
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
- Das HTMLMediaElement [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event) Ereignis
- Das HTMLMediaElement [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event) Ereignis
- Das HTMLMediaElement [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event) Ereignis
- Das HTMLMediaElement [`play`](/de/docs/Web/API/HTMLMediaElement/play_event) Ereignis
- Das HTMLMediaElement [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event) Ereignis
- Das HTMLMediaElement [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event) Ereignis
- Das HTMLMediaElement [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event) Ereignis
- Das HTMLMediaElement [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event) Ereignis
- Das HTMLMediaElement [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event) Ereignis
- Das HTMLMediaElement [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event) Ereignis

## Siehe auch

- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
