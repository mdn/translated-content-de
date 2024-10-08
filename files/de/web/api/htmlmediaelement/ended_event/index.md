---
title: "HTMLMediaElement: ended Ereignis"
short-title: ended
slug: Web/API/HTMLMediaElement/ended_event
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{APIRef("HTMLMediaElement")}}

Das `ended` Ereignis wird ausgelöst, wenn die Wiedergabe oder das Streaming gestoppt wurde, weil das Ende der Medien erreicht wurde oder keine weiteren Daten verfügbar sind.

Dieses Ereignis tritt auf, wenn [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) ({{HTMLElement("audio")}} und {{HTMLElement("video")}}) `ended` auslösen, wenn die Wiedergabe das Ende der Medien erreicht.

Dieses Ereignis ist nicht abbruchfähig und wird nicht weitergereicht.

> [!NOTE]
> Das `ended` Ereignis wird nicht ausgelöst, wenn die [`loop`](/de/docs/Web/API/HTMLMediaElement/loop) Eigenschaft `true` ist und [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate) nicht-negativ ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignisbehandlereigenschaft.

```js
addEventListener("ended", (event) => {});

onended = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Diese Beispiele fügen einen Ereignislistener für das `ended` Ereignis des HTMLMediaElement hinzu und geben eine Nachricht aus, wenn dieser Ereignisbehandler auf das ausgelöste Ereignis reagiert hat.

Verwendung von `addEventListener()`:

```js
const video = document.querySelector("video");

video.addEventListener("ended", (event) => {
  console.log(
    "Video stopped either because it has finished playing or no further data is available.",
  );
});
```

Verwendung der `onended` Ereignisbehandlereigenschaft:

```js
const video = document.querySelector("video");

video.onended = (event) => {
  console.log(
    "Video stopped either because it has finished playing or no further data is available.",
  );
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
- Das HTMLMediaElement [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event) Ereignis

## Siehe auch

- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
- [Media Capture and Streams](/de/docs/Web/API/Media_Capture_and_Streams_API)

  - [`MediaStreamTrack`: `ended` Ereignis](/de/docs/Web/API/MediaStreamTrack/ended_event)

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)

  - [Web Audio API: ended Ereignis](/de/docs/Web/API/AudioScheduledSourceNode/ended_event)
