---
title: "AudioTrackList: removetrack Ereignis"
short-title: removetrack
slug: Web/API/AudioTrackList/removetrack_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("HTML DOM")}}

Das `removetrack` Ereignis wird ausgelöst, wenn ein Track von einer [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) entfernt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder legen Sie eine Ereignisbehandlungs-Eigenschaft fest.

```js-nolint
addEventListener("removetrack", (event) => { })

onremovetrack = (event) => { }
```

## Ereignistyp

Ein [`TrackEvent`](/de/docs/Web/API/TrackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TrackEvent")}}

## Beschreibung

### Auslöser

Das `removetrack` Ereignis wird jedes Mal aufgerufen, wenn ein Track von dem Media-Element entfernt wird, dessen Audio-Tracks durch das `AudioTrackList` Objekt dargestellt werden.

Dieses Ereignis ist nicht abbrechbar und wird nicht gebubbelt.

### Anwendungsfälle

Sie können dieses Ereignis verwenden, um auf ein nicht mehr verfügbares Audio-Track zu reagieren. Sie könnten z.B. Ihre UI-Elemente aktualisieren, um die Auswahl des entfernten Audio-Tracks für den Benutzer zu verhindern.

## Beispiele

Verwendung von `addEventListener()`:

```js
const videoElement = document.querySelector("video");

videoElement.audioTracks.addEventListener("removetrack", (event) => {
  console.log(`Audio track: ${event.track.label} removed`);
});
```

Verwendung der `onremovetrack` Ereignisbehandlungs-Eigenschaft:

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
- Dieses Ereignis für [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) zielt auf: [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)
- Dieses Ereignis für [`MediaStream`](/de/docs/Web/API/MediaStream) zielt auf: [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
