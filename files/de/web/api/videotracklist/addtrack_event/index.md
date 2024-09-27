---
title: "VideoTrackList: addtrack-Ereignis"
short-title: addtrack
slug: Web/API/VideoTrackList/addtrack_event
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef}}

Das `addtrack`-Ereignis wird ausgelöst, wenn ein Videospur zu einer [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) hinzugefügt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("addtrack", (event) => {});

onaddtrack = (event) => {};
```

## Ereignistyp

Ein [`TrackEvent`](/de/docs/Web/API/TrackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TrackEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind die Eigenschaften der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`track`](/de/docs/Web/API/TrackEvent/track) {{ReadOnlyInline}}
  - : Die neu hinzugefügte [`VideoTrack`](/de/docs/Web/API/VideoTrack), auf die sich das Ereignis bezieht.

## Beispiele

Verwendung von `addEventListener()`:

```js
const videoElement = document.querySelector("video");

videoElement.videoTracks.addEventListener("addtrack", (event) => {
  console.log(`Video track: ${event.track.label} added`);
});
```

Verwendung der `onaddtrack` Ereignis-Handler-Eigenschaft:

```js
const videoElement = document.querySelector("video");

videoElement.videoTracks.onaddtrack = (event) => {
  console.log(`Video track: ${event.track.label} added`);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event), [`change`](/de/docs/Web/API/VideoTrackList/change_event)
- Dieses Ereignis in [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) zielt auf: [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event)
- Dieses Ereignis in [`MediaStream`](/de/docs/Web/API/MediaStream) zielt auf: [`addtrack`](/de/docs/Web/API/MediaStream/addtrack_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
