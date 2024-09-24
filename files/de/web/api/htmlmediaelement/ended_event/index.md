---
title: "HTMLMediaElement: ended Ereignis"
short-title: ended
slug: Web/API/HTMLMediaElement/ended_event
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{APIRef("HTMLMediaElement")}}

Das `ended` Ereignis wird ausgelöst, wenn die Wiedergabe oder das Streaming gestoppt wurde, weil das Ende der Medien erreicht wurde oder keine weiteren Daten verfügbar sind.

Dieses Ereignis tritt auf basierend auf {{domxref("HTMLMediaElement")}} ({{HTMLElement("audio")}} und {{HTMLElement("video")}}) und löst `ended` aus, wenn die Wiedergabe das Ende der Medien erreicht.

Dieses Ereignis ist nicht abbruchsicher und propagiert nicht.

> [!NOTE]
> Das `ended` Ereignis wird nicht ausgelöst, wenn die [`loop`](/de/docs/Web/API/HTMLMediaElement/loop) Eigenschaft `true` ist und [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate) nicht negativ ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("ended", (event) => {});

onended = (event) => {};
```

## Eventtyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Diese Beispiele fügen einen Ereignislistener für das `ended` Ereignis des HTMLMediaElements hinzu und geben dann eine Nachricht aus, wenn dieser Ereignishandler auf das Auslösen des Ereignisses reagiert hat.

Verwendung von `addEventListener()`:

```js
const video = document.querySelector("video");

video.addEventListener("ended", (event) => {
  console.log(
    "Video angehalten, entweder weil es zu Ende abgespielt wurde oder keine weiteren Daten verfügbar sind.",
  );
});
```

Verwendung der `onended` Event-Handler-Eigenschaft:

```js
const video = document.querySelector("video");

video.onended = (event) => {
  console.log(
    "Video angehalten, entweder weil es zu Ende abgespielt wurde oder keine weiteren Daten verfügbar sind.",
  );
};
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Verwandte Ereignisse

- Das HTMLMediaElement {{domxref("HTMLMediaElement.playing_event", 'playing')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.waiting_event", 'waiting')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.seeking_event", 'seeking')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.seeked_event", 'seeked')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.canplay_event", 'canplay')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.play_event", 'play')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.pause_event", 'pause')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.suspend_event", 'suspend')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.emptied_event", 'emptied')}} Ereignis
- Das HTMLMediaElement {{domxref("HTMLMediaElement.stalled_event", 'stalled')}} Ereignis

## Siehe auch

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
- [Media Capture and Streams](/de/docs/Web/API/Media_Capture_and_Streams_API)

  - [`MediaStreamTrack`: `ended` event](/de/docs/Web/API/MediaStreamTrack/ended_event)

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)

  - [Web audio API: ended event](/de/docs/Web/API/AudioScheduledSourceNode/ended_event)
