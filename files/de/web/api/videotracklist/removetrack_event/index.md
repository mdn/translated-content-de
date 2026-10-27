---
title: "VideoTrackList: removetrack-Ereignis"
short-title: removetrack
slug: Web/API/VideoTrackList/removetrack_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef("HTML DOM")}}

Das Ereignis `removetrack` wird ausgelöst, wenn eine Videospur aus einer [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) entfernt wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("removetrack", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onremovetrack = (event) => { }
```

## Ereignistyp

Ein [`TrackEvent`](/de/docs/Web/API/TrackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TrackEvent")}}

## Beispiele

Verwendung von `addEventListener()`:

```js
const videoElement = document.querySelector("video");

videoElement.videoTracks.addEventListener("removetrack", (event) => {
  console.log(`Video track: ${event.track.label} removed`);
});
```

Verwendung der Event-Handler-Eigenschaft `onremovetrack` (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onremovetrack` hinzugefügte Event-Listener ersetzt werden):

```js
const videoElement = document.querySelector("video");

videoElement.videoTracks.onremovetrack = (event) => {
  console.log(`Video track: ${event.track.label} removed`);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event), [`change`](/de/docs/Web/API/VideoTrackList/change_event)
- Dieses Ereignis auf [`AudioTrackList`](/de/docs/Web/API/AudioTrackList)-Zielen: [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event)
- Dieses Ereignis auf [`MediaStream`](/de/docs/Web/API/MediaStream)-Zielen: [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
