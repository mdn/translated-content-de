---
title: "TextTrackList: addtrack Ereignis"
short-title: addtrack
slug: Web/API/TextTrackList/addtrack_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`addtrack`**-Ereignis wird ausgelöst, wenn ein Track zu einem [`TextTrackList`](/de/docs/Web/API/TextTrackList) hinzugefügt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignishandler-Eigenschaft fest.

```js-nolint
addEventListener("addtrack", (event) => { })

onaddtrack = (event) => { }
```

## Ereignistyp

Ein [`TrackEvent`](/de/docs/Web/API/TrackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TrackEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

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

Verwendung der `onaddtrack` Ereignishandler-Eigenschaft:

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
- Dieses Ereignis in [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) Ziele: [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event)
- Dieses Ereignis in [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) Ziele: [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event)
- Dieses Ereignis in [`MediaStream`](/de/docs/Web/API/MediaStream) Ziele: [`addtrack`](/de/docs/Web/API/MediaStream/addtrack_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
