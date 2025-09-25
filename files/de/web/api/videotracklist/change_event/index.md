---
title: "VideoTrackList: change-Ereignis"
short-title: change
slug: Web/API/VideoTrackList/change_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

Das `change`-Ereignis wird ausgelöst, wenn ein Videospur aktiviert oder deaktiviert wird, zum Beispiel durch Ändern der [`selected`](/de/docs/Web/API/VideoTrack/selected)-Eigenschaft der Spur.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("change", (event) => { })

onchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

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

Verwendung der `onchange`-Ereignis-Handler-Eigenschaft:

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
- Dieses Ereignis bei [`AudioTrackList`](/de/docs/Web/API/AudioTrackList)-Zielen: [`change`](/de/docs/Web/API/AudioTrackList/change_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
