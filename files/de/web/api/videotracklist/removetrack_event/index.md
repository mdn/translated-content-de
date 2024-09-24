---
title: "VideoTrackList: removetrack Ereignis"
short-title: removetrack
slug: Web/API/VideoTrackList/removetrack_event
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef}}

Das `removetrack`-Ereignis wird ausgelöst, wenn ein Videospur aus einer [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) entfernt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("removetrack", (event) => {});

onremovetrack = (event) => {};
```

## Ereignistyp

Ein {{domxref("TrackEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("TrackEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften stehen auch Eigenschaften der übergeordneten Schnittstelle {{domxref("Event")}} zur Verfügung._

- {{domxref("TrackEvent.track", "track")}} {{ReadOnlyInline}}
  - : Die neu entfernte {{domxref("VideoTrack")}}, auf die sich das Ereignis bezieht.

## Beispiele

Verwendung von `addEventListener()`:

```js
const videoElement = document.querySelector("video");

videoElement.videoTracks.addEventListener("removetrack", (event) => {
  console.log(`Video track: ${event.track.label} removed`);
});
```

Verwendung der `onremovetrack` Ereignis-Handler-Eigenschaft:

```js
const videoElement = document.querySelector("video");

videoElement.videoTracks.onremovetrack = (event) => {
  console.log(`Video track: ${event.track.label} removed`);
};
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event), [`change`](/de/docs/Web/API/VideoTrackList/change_event)
- Dieses Ereignis bei [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) Ziele: [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event)
- Dieses Ereignis bei [`MediaStream`](/de/docs/Web/API/MediaStream) Ziele: [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
