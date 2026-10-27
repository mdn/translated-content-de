---
title: "VideoTrackList: addtrack-Ereignis"
short-title: addtrack
slug: Web/API/VideoTrackList/addtrack_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef("HTML DOM")}}

Das `addtrack`-Ereignis wird ausgelöst, wenn einer [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) eine Videospur hinzugefügt wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("addtrack", (event) => { })
```

Alternativ können Sie ihn der [Ereignisbehandlungseigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onaddtrack = (event) => { }
```

## Ereignistyp

Ein [`TrackEvent`](/de/docs/Web/API/TrackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TrackEvent")}}

## Beispiele

Mit `addEventListener()`:

```js
const videoElement = document.querySelector("video");

videoElement.videoTracks.addEventListener("addtrack", (event) => {
  console.log(`Video track: ${event.track.label} added`);
});
```

Mit der Ereignisbehandlungseigenschaft `onaddtrack` (beachten Sie jedoch, dass dadurch andere gegebenenfalls über `onaddtrack` hinzugefügte Ereignis-Listener ersetzt werden):

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
- Dieses Ereignis bei [`AudioTrackList`](/de/docs/Web/API/AudioTrackList)-Objekten: [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event)
- Dieses Ereignis bei [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekten: [`addtrack`](/de/docs/Web/API/MediaStream/addtrack_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
