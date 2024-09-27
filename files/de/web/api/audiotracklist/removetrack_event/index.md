---
title: "AudioTrackList: removetrack-Ereignis"
short-title: removetrack
slug: Web/API/AudioTrackList/removetrack_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef}}

Das `removetrack`-Ereignis wird ausgelöst, wenn ein Track aus einer [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) entfernt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("removetrack", (event) => { })

onremovetrack = (event) => { }
```

## Ereignistyp

Ein [`TrackEvent`](/de/docs/Web/API/TrackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TrackEvent")}}

## Ereigniseigenschaften

_`TrackEvent` basiert auf dem [`Event`](/de/docs/Web/API/Event), daher sind Eigenschaften von `Event` auch auf `TrackEvent`-Objekten verfügbar._

- [`track`](/de/docs/Web/API/TrackEvent/track) {{ReadOnlyInline}}
  - : Das DOM-Track-Objekt, auf das sich das Ereignis bezieht. Wenn nicht `null`, ist dies immer ein Objekt eines der Medientypen: [`AudioTrack`](/de/docs/Web/API/AudioTrack), [`VideoTrack`](/de/docs/Web/API/VideoTrack) oder [`TextTrack`](/de/docs/Web/API/TextTrack)).

## Beschreibung

### Auslöser

Das `removetrack`-Ereignis wird aufgerufen, wann immer ein Track aus dem Medienelement entfernt wird, dessen Audio-Tracks durch das `AudioTrackList`-Objekt repräsentiert werden.

Dieses Ereignis ist nicht stornierbar und steigt nicht auf.

### Anwendungsfälle

Sie können dieses Ereignis nutzen, um auf einen nicht mehr verfügbaren Audio-Track zu reagieren. Zum Beispiel könnten Sie Ihre UI-Elemente aktualisieren, um die Auswahl des entfernten Audio-Tracks durch den Benutzer zu verhindern.

## Beispiele

Verwendung von `addEventListener()`:

```js
const videoElement = document.querySelector("video");

videoElement.audioTracks.addEventListener("removetrack", (event) => {
  console.log(`Audio track: ${event.track.label} removed`);
});
```

Verwendung der `onremovetrack`-Ereignishandler-Eigenschaft:

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
- Dieses Ereignis auf [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) zielt ab: [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)
- Dieses Ereignis auf [`MediaStream`](/de/docs/Web/API/MediaStream) zielt ab: [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
