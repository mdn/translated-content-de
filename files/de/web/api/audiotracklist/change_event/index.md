---
title: "AudioTrackList: change event"
short-title: change
slug: Web/API/AudioTrackList/change_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

Das `change`-Ereignis wird ausgelöst, wenn ein Audiotrack aktiviert oder deaktiviert wird, zum Beispiel durch Ändern der [`enabled`](/de/docs/Web/API/AudioTrack/enabled)-Eigenschaft des Tracks.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("change", (event) => { })

onchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Verwendung von `addEventListener()`:

```js
const videoElement = document.querySelector("video");
videoElement.audioTracks.addEventListener("change", (event) => {
  console.log(`'${event.type}' event fired`);
});

// changing the value of `enabled` will trigger the `change` event
const toggleTrackButton = document.querySelector(".toggle-track");
toggleTrackButton.addEventListener("click", () => {
  const track = videoElement.audioTracks[0];
  track.enabled = !track.enabled;
});
```

Verwendung der `onchange`-Ereignis-Handler-Eigenschaft:

```js
const videoElement = document.querySelector("video");
videoElement.audioTracks.onchange = (event) => {
  console.log(`'${event.type}' event fired`);
};

// changing the value of `enabled` will trigger the `change` event
const toggleTrackButton = document.querySelector(".toggle-track");
toggleTrackButton.addEventListener("click", () => {
  const track = videoElement.audioTracks[0];
  track.enabled = !track.enabled;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event), [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event)
- Dieses Ereignis auf [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) Ziele: [`change`](/de/docs/Web/API/VideoTrackList/change_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
