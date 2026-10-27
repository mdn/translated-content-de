---
title: "AudioTrackList: change-Ereignis"
short-title: change
slug: Web/API/AudioTrackList/change_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("HTML DOM")}}

Das `change`-Ereignis wird ausgelöst, wenn ein Audiotrack aktiviert oder deaktiviert wird, beispielsweise durch Ändern seiner [`enabled`](/de/docs/Web/API/AudioTrack/enabled)-Eigenschaft.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("change", (event) => { })
```

Alternativ können Sie einen Handler der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Mit `addEventListener()`:

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

Mit der `onchange`-Event-Handler-Eigenschaft (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onchange` hinzugefügte Event-Listener ersetzt werden):

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
- Dieses Ereignis für [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Ziele: [`change`](/de/docs/Web/API/VideoTrackList/change_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
