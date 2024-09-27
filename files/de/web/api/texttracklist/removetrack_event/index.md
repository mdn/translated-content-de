---
title: "TextTrackList: removetrack Ereignis"
short-title: removetrack
slug: Web/API/TextTrackList/removetrack_event
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{APIRef}}

Das **`removetrack`** Ereignis wird ausgelöst, wenn ein Track aus einer [`TextTrackList`](/de/docs/Web/API/TextTrackList) entfernt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("removetrack", (event) => {});

onremovetrack = (event) => {};
```

## Ereignistyp

Ein [`TrackEvent`](/de/docs/Web/API/TrackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TrackEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind die Eigenschaften der Elternschnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`track`](/de/docs/Web/API/TrackEvent/track) {{ReadOnlyInline}}
  - : Das [`TextTrack`](/de/docs/Web/API/TextTrack) Objekt, auf das sich das Ereignis bezieht.

## Beispiele

Verwendung von `addEventListener()`:

```js
const mediaElement = document.querySelector("video, audio");

mediaElement.textTracks.addEventListener("removetrack", (event) => {
  console.log(`Text track: ${event.track.label} removed`);
});
```

Verwendung der `onremovetrack` Ereignis-Handler-Eigenschaft:

```js
const mediaElement = document.querySelector("video, audio");

mediaElement.textTracks.onremovetrack = (event) => {
  console.log(`Text track: ${event.track.label} removed`);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event), [`change`](/de/docs/Web/API/VideoTrackList/change_event)
- Dieses Ereignis auf [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) zielt auf: [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)
- Dieses Ereignis auf [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) zielt auf: [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event)
- Dieses Ereignis auf [`MediaStream`](/de/docs/Web/API/MediaStream) zielt auf: [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
