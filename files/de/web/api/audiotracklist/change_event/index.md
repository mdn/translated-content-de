---
title: "AudioTrackList: change-Ereignis"
short-title: change
slug: Web/API/AudioTrackList/change_event
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef}}

Das `change`-Ereignis wird ausgelöst, wenn ein Audiotrack aktiviert oder deaktiviert wird, beispielsweise durch Ändern der [`enabled`](/de/docs/Web/API/AudioTrack/enabled)-Eigenschaft des Tracks.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("change", (event) => { })

onchange = (event) => { }
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Verwendung von `addEventListener()`:

```js
const videoElement = document.querySelector("video");
videoElement.audioTracks.addEventListener("change", (event) => {
  console.log(`'${event.type}' event fired`);
});

// Das Ändern des Wertes von `enabled` löst das `change`-Ereignis aus
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
});

// Das Ändern des Wertes von `enabled` löst das `change`-Ereignis aus
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
- Dieses Ereignis bei [`VideoTrackList`](/de/docs/Web/API/VideoTrackList): [`change`](/de/docs/Web/API/VideoTrackList/change_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)