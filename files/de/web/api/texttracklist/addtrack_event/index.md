---
title: "TextTrackList: addtrack-Ereignis"
short-title: addtrack
slug: Web/API/TextTrackList/addtrack_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef("HTML DOM")}}

Das **`addtrack`**-Ereignis wird ausgelöst, wenn einer [`TextTrackList`](/de/docs/Web/API/TextTrackList) ein Track hinzugefügt wird.

## Syntax

Verwenden Sie den Ereignisnamen mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("addtrack", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onaddtrack = (event) => { }
```

## Ereignistyp

Ein [`TrackEvent`](/de/docs/Web/API/TrackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TrackEvent")}}

## Beispiele

Mit `addEventListener()`:

```js
const mediaElement = document.querySelector("video, audio");

mediaElement.textTracks.addEventListener("addtrack", (event) => {
  console.log(`Text track: ${event.track.label} added`);
});
```

Mit der Event-Handler-Eigenschaft `onaddtrack` (beachten Sie jedoch, dass dies andere über `onaddtrack` hinzugefügte Event-Listener ersetzt, sofern vorhanden):

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
- Dieses Ereignis bei [`VideoTrackList`](/de/docs/Web/API/VideoTrackList): [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event)
- Dieses Ereignis bei [`AudioTrackList`](/de/docs/Web/API/AudioTrackList): [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event)
- Dieses Ereignis bei [`MediaStream`](/de/docs/Web/API/MediaStream): [`addtrack`](/de/docs/Web/API/MediaStream/addtrack_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
