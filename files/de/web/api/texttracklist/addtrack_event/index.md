---
title: "TextTrackList: addtrack Event"
short-title: addtrack
slug: Web/API/TextTrackList/addtrack_event
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef}}

Das **`addtrack`**-Ereignis wird ausgelöst, wenn ein Track zu einer [`TextTrackList`](/de/docs/Web/API/TextTrackList) hinzugefügt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder legen Sie eine Ereignis-Handler-Eigenschaft fest.

```js
addEventListener("addtrack", (event) => {});

onaddtrack = (event) => {};
```

## Ereignistyp

Ein [`TrackEvent`](/de/docs/Web/API/TrackEvent), das von [`Event`](/de/docs/Web/API/Event) erbt.

{{InheritanceDiagram("TrackEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind Eigenschaften aus der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`track`](/de/docs/Web/API/TrackEvent/track) {{ReadOnlyInline}}
  - : Das [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt, auf das sich das Ereignis bezieht.

## Beispiele

Verwendung von `addEventListener()`:

```js
const mediaElement = document.querySelector("video, audio");

mediaElement.textTracks.addEventListener("addtrack", (event) => {
  console.log(`Text track: ${event.track.label} added`);
});
```

Verwendung der `onaddtrack`-Ereignis-Handler-Eigenschaft:

```js
const mediaElement = document.querySelector("video, audio");

mediaElement.textTracks.onaddtrack = (event) => {
  console.log(`Text track: ${event.track.label} added`);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event), [`change`](/de/docs/Web/API/VideoTrackList/change_event)
- Dieses Ereignis bei [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) zielt auf: [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event)
- Dieses Ereignis bei [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) zielt auf: [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event)
- Dieses Ereignis bei [`MediaStream`](/de/docs/Web/API/MediaStream) zielt auf: [`addtrack`](/de/docs/Web/API/MediaStream/addtrack_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
