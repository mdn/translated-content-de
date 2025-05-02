---
title: "VideoTrackList: change-Ereignis"
short-title: change
slug: Web/API/VideoTrackList/change_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das `change`-Ereignis wird ausgelöst, wenn ein Video-Track aktiv oder inaktiv gemacht wird, zum Beispiel durch Ändern der [`selected`](/de/docs/Web/API/VideoTrack/selected) Eigenschaft des Tracks.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("change", (event) => { })

onchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne hinzugefügte Eigenschaften.

## Beispiele

Verwendung von `addEventListener()`:

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

Verwendung der `onchange` Event-Handler-Eigenschaft:

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
- Dieses Ereignis auf [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) zielt auf: [`change`](/de/docs/Web/API/AudioTrackList/change_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
