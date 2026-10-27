---
title: "AudioTrackList: removetrack-Ereignis"
short-title: removetrack
slug: Web/API/AudioTrackList/removetrack_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("HTML DOM")}}

Das `removetrack`-Ereignis wird ausgelöst, wenn ein Track aus einer [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) entfernt wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("removetrack", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) des Interfaces verwenden:

```js-nolint
onremovetrack = (event) => { }
```

## Ereignistyp

Ein [`TrackEvent`](/de/docs/Web/API/TrackEvent). Es erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TrackEvent")}}

## Beschreibung

### Auslöser

Das `removetrack`-Ereignis wird ausgelöst, wenn ein Track aus dem Medienelement entfernt wird, dessen Audio-Tracks durch das `AudioTrackList`-Objekt repräsentiert werden.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht durch die DOM-Hierarchie weitergereicht.

### Anwendungsfälle

Sie können dieses Ereignis verwenden, um darauf zu reagieren, dass ein Audio-Track nicht mehr verfügbar ist. Beispielsweise können Sie Ihre UI-Elemente aktualisieren, damit der entfernte Audio-Track nicht mehr ausgewählt werden kann.

## Beispiele

Mit `addEventListener()`:

```js
const videoElement = document.querySelector("video");

videoElement.audioTracks.addEventListener("removetrack", (event) => {
  console.log(`Audio track: ${event.track.label} removed`);
});
```

Mit der `onremovetrack`-Event-Handler-Eigenschaft (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onremovetrack` hinzugefügte Event-Handler ersetzt werden):

```js
const videoElement = document.querySelector("video");

videoElement.audioTracks.onremovetrack = (event) => {
  console.log(`Audio track: ${event.track.label} removed`);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event), [`change`](/de/docs/Web/API/AudioTrackList/change_event)
- Dieses Ereignis auf [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Objekten: [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)
- Dieses Ereignis auf [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekten: [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
