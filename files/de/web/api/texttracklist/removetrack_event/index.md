---
title: "TextTrackList: removetrack-Ereignis"
short-title: removetrack
slug: Web/API/TextTrackList/removetrack_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef("HTML DOM")}}

Das **`removetrack`**-Ereignis wird ausgelöst, wenn ein Track aus einer [`TextTrackList`](/de/docs/Web/API/TextTrackList) entfernt wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("removetrack", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onremovetrack = (event) => { }
```

## Ereignistyp

Ein [`TrackEvent`](/de/docs/Web/API/TrackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TrackEvent")}}

## Beispiele

Mit `addEventListener()`:

```js
const mediaElement = document.querySelector("video, audio");

mediaElement.textTracks.addEventListener("removetrack", (event) => {
  console.log(`Text track: ${event.track.label} removed`);
});
```

Mit der Event-Handler-Eigenschaft `onremovetrack` (beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onremovetrack` hinzugefügte Ereignis-Listener ersetzt werden):

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
- Dieses Ereignis bei [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Zielen: [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)
- Dieses Ereignis bei [`AudioTrackList`](/de/docs/Web/API/AudioTrackList)-Zielen: [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event)
- Dieses Ereignis bei [`MediaStream`](/de/docs/Web/API/MediaStream)-Zielen: [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
