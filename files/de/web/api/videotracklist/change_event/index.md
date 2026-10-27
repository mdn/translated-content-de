---
title: "VideoTrackList: change-Ereignis"
short-title: change
slug: Web/API/VideoTrackList/change_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef("HTML DOM")}}

Das `change`-Ereignis wird ausgelöst, wenn ein Videotrack aktiviert oder deaktiviert wird, beispielsweise durch Ändern seiner [`selected`](/de/docs/Web/API/VideoTrack/selected)-Eigenschaft.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("change", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

Mit `addEventListener()`:

```js
const videoElement = document.querySelector("video");
videoElement.videoTracks.addEventListener("change", (event) => {
  console.log(`'${event.type}' event fired`);
});

// changing the value of `selected` will trigger the `change` event
const toggleTrackButton = document.querySelector(".toggle-track");
toggleTrackButton.addEventListener("click", () => {
  const track = videoElement.videoTracks[0];
  track.selected = !track.selected;
});
```

Mit der Event-Handler-Eigenschaft `onchange` (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onchange` hinzugefügte Event-Listener ersetzt werden):

```js
const videoElement = document.querySelector("video");
videoElement.videoTracks.onchange = (event) => {
  console.log(`'${event.type}' event fired`);
};

// changing the value of `selected` will trigger the `change` event
const toggleTrackButton = document.querySelector(".toggle-track");
toggleTrackButton.addEventListener("click", () => {
  const track = videoElement.videoTracks[0];
  track.selected = !track.selected;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event), [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)
- Dieses Ereignis für Ziele vom Typ [`AudioTrackList`](/de/docs/Web/API/AudioTrackList): [`change`](/de/docs/Web/API/AudioTrackList/change_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
