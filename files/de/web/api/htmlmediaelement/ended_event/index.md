---
title: "HTMLMediaElement: ended-Ereignis"
short-title: ended
slug: Web/API/HTMLMediaElement/ended_event
l10n:
  sourceCommit: 500a87094bd8ca5e41a6dab23f733867b9c9570e
---

{{APIRef("HTMLMediaElement")}}

Das `ended`-Ereignis wird ausgelöst, wenn die Wiedergabe oder das Streaming beendet wurde, weil das Ende des Mediums erreicht wurde oder keine weiteren Daten verfügbar sind.

Dieses Ereignis wird bei [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) ({{HTMLElement("audio")}} und {{HTMLElement("video")}}) ausgelöst, wenn die Wiedergabe das Ende des Mediums erreicht.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergegeben.

> [!NOTE]
> Das `ended`-Ereignis wird nicht ausgelöst, wenn die Eigenschaft [`loop`](/de/docs/Web/API/HTMLMediaElement/loop) den Wert `true` hat und [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate) nicht negativ ist.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("ended", (event) => { })
```

Alternativ können Sie ihn der [Ereignisbehandlungs-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onended = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Diese Beispiele fügen einen Ereignis-Listener für das `ended`-Ereignis von HTMLMediaElement hinzu und geben eine Meldung aus, wenn der Ereignis-Handler auf das Auslösen des Ereignisses reagiert hat.

Mit `addEventListener()`:

```js
const video = document.querySelector("video");

video.addEventListener("ended", (event) => {
  console.log(
    "Video stopped either because it has finished playing or no further data is available.",
  );
});
```

Mit der Ereignisbehandlungs-Eigenschaft `onended` (beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onended` hinzugefügte Ereignis-Listener ersetzt werden):

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

- Das HTMLMediaElement-Ereignis [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)
- Das HTMLMediaElement-Ereignis [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
- Das HTMLMediaElement-Ereignis [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
- Das HTMLMediaElement-Ereignis [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
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
- Das HTMLMediaElement-Ereignis [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
- Das HTMLMediaElement-Ereignis [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)

## Siehe auch

- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
- [Medienerfassung und Streams](/de/docs/Web/API/Media_Capture_and_Streams_API)
  - [`MediaStreamTrack`: `ended`-Ereignis](/de/docs/Web/API/MediaStreamTrack/ended_event)

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
  - [Web Audio API: ended-Ereignis](/de/docs/Web/API/AudioScheduledSourceNode/ended_event)
