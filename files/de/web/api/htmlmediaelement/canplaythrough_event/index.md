---
title: "HTMLMediaElement: canplaythrough-Event"
short-title: canplaythrough
slug: Web/API/HTMLMediaElement/canplaythrough_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("HTMLMediaElement")}}

Das `canplaythrough`-Event wird ausgelöst, wenn der Benutzeragent das Medium abspielen kann und schätzt, dass genug Daten geladen wurden, um das Medium bis zum Ende abzuspielen, ohne für weiteres Puffern anhalten zu müssen.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("canplaythrough", (event) => { })

oncanplaythrough = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Diese Beispiele fügen einen Ereignis-Listener für das `canplaythrough`-Event des HTMLMediaElement hinzu und geben eine Nachricht aus, wenn der Event-Handler auf das Auslösen des Ereignisses reagiert hat.

Verwendung von `addEventListener()`:

```js
const video = document.querySelector("video");

video.addEventListener("canplaythrough", (event) => {
  console.log(
    "I think I can play through the entire video without having to stop to buffer.",
  );
});
```

Verwendung der `oncanplaythrough`-Ereignis-Handler-Eigenschaft:

```js
const video = document.querySelector("video");

video.oncanplaythrough = (event) => {
  console.log(
    "I think I can play through the entire video without having to stop to buffer.",
  );
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Verwandte Ereignisse

- Das HTMLMediaElement [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)-Event
- Das HTMLMediaElement [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)-Event
- Das HTMLMediaElement [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)-Event
- Das HTMLMediaElement [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)-Event
- Das HTMLMediaElement [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)-Event
- Das HTMLMediaElement [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)-Event
- Das HTMLMediaElement [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)-Event
- Das HTMLMediaElement [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)-Event
- Das HTMLMediaElement [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)-Event
- Das HTMLMediaElement [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)-Event
- Das HTMLMediaElement [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Event
- Das HTMLMediaElement [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event)-Event
- Das HTMLMediaElement [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)-Event
- Das HTMLMediaElement [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)-Event
- Das HTMLMediaElement [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)-Event
- Das HTMLMediaElement [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)-Event
- Das HTMLMediaElement [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)-Event

## Siehe auch

- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
