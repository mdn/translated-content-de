---
title: "AudioTrackList: addtrack-Ereignis"
short-title: addtrack
slug: Web/API/AudioTrackList/addtrack_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef}}

Das `addtrack`-Ereignis wird ausgelöst, wenn ein Track zu einer [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) hinzugefügt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("addtrack", (event) => { })

onaddtrack = (event) => { }
```

## Ereignistyp

Ein [`TrackEvent`](/de/docs/Web/API/TrackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TrackEvent")}}

## Ereigniseigenschaften

_`TrackEvent` basiert auf [`Event`](/de/docs/Web/API/Event), daher sind die Eigenschaften von `Event` auch bei `TrackEvent`-Objekten verfügbar._

- [`track`](/de/docs/Web/API/TrackEvent/track) {{ReadOnlyInline}}
  - : Das DOM-Track-Objekt, auf das sich das Ereignis bezieht. Wenn nicht `null`, handelt es sich hierbei immer um ein Objekt eines der Medientrack-Typen: [`AudioTrack`](/de/docs/Web/API/AudioTrack), [`VideoTrack`](/de/docs/Web/API/VideoTrack) oder [`TextTrack`](/de/docs/Web/API/TextTrack).

## Beschreibung

### Auslöser

Das `addtrack`-Ereignis wird aufgerufen, sobald ein neuer Track zum Medienelement hinzugefügt wird, dessen Audiotracks durch das `AudioTrackList`-Objekt dargestellt werden. Dies geschieht, wenn Tracks hinzugefügt werden, wenn das Medium erstmals an das Element angehängt wird; für jeden Audiotrack in der Medienressource tritt ein `addtrack`-Ereignis auf.

Dieses Ereignis ist nicht abzubrechen und breitet sich nicht aus.

### Anwendungsfälle

Sie können dieses Ereignis verwenden, um auf einen neuen verfügbaren Audiotrack zu reagieren. Beispielsweise könnten Sie Ihre UI-Elemente aktualisieren, um dem Benutzer die Auswahl des neuen Audiotracks zu ermöglichen.

## Beispiele

Verwendung von `addEventListener()`:

```js
const videoElement = document.querySelector("video");

videoElement.audioTracks.addEventListener("addtrack", (event) => {
  console.log(`Audio track: ${event.track.label} added`);
});
```

Verwendung der `onaddtrack`-Ereignishandlereigenschaft:

```js
const videoElement = document.querySelector("video");

videoElement.audioTracks.onaddtrack = (event) => {
  console.log(`Audio track: ${event.track.label} added`);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event), [`change`](/de/docs/Web/API/AudioTrackList/change_event)
- Dieses Ereignis für [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) zielt ab auf: [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event)
- Dieses Ereignis für [`MediaStream`](/de/docs/Web/API/MediaStream) zielt ab auf: [`addtrack`](/de/docs/Web/API/MediaStream/addtrack_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
