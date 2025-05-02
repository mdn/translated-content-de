---
title: "VideoTrackList: removetrack-Ereignis"
short-title: removetrack
slug: Web/API/VideoTrackList/removetrack_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das `removetrack`-Ereignis wird ausgelöst, wenn ein Videospur von einer [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) entfernt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("removetrack", (event) => { })

onremovetrack = (event) => { }
```

## Ereignistyp

Ein [`TrackEvent`](/de/docs/Web/API/TrackEvent), das von [`Event`](/de/docs/Web/API/Event) erbt.

{{InheritanceDiagram("TrackEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften von der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`track`](/de/docs/Web/API/TrackEvent/track) {{ReadOnlyInline}}
  - : Die neu entfernte [`VideoTrack`](/de/docs/Web/API/VideoTrack), auf die sich das Ereignis bezieht.

## Beispiele

Verwendung von `addEventListener()`:

```js
const videoElement = document.querySelector("video");

videoElement.videoTracks.addEventListener("removetrack", (event) => {
  console.log(`Video track: ${event.track.label} removed`);
});
```

Verwendung der `onremovetrack`-Ereignis-Handler-Eigenschaft:

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
- Dieses Ereignis auf [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) zielt auf: [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event)
- Dieses Ereignis auf [`MediaStream`](/de/docs/Web/API/MediaStream) zielt auf: [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
