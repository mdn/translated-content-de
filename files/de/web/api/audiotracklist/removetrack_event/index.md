---
title: "AudioTrackList: removetrack Ereignis"
short-title: removetrack
slug: Web/API/AudioTrackList/removetrack_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef}}

Das `removetrack` Ereignis wird ausgelöst, wenn ein Track aus einer [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) entfernt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("removetrack", (event) => { })

onremovetrack = (event) => { }
```

## Ereignistyp

Ein [`TrackEvent`](/de/docs/Web/API/TrackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TrackEvent")}}

## Ereigniseigenschaften

_`TrackEvent` basiert auf [`Event`](/de/docs/Web/API/Event), sodass Eigenschaften von `Event` auch bei `TrackEvent` Objekten verfügbar sind._

- [`track`](/de/docs/Web/API/TrackEvent/track) {{ReadOnlyInline}}
  - : Das DOM-Track-Objekt, auf das sich das Ereignis bezieht. Wenn es nicht `null` ist, ist dies immer ein Objekt eines der Medientracktypen: [`AudioTrack`](/de/docs/Web/API/AudioTrack), [`VideoTrack`](/de/docs/Web/API/VideoTrack) oder [`TextTrack`](/de/docs/Web/API/TextTrack)).

## Beschreibung

### Auslöser

Das `removetrack` Ereignis wird aufgerufen, wenn immer ein Track aus dem Media-Element entfernt wird, dessen Audiotracks durch das `AudioTrackList` Objekt repräsentiert werden.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergereicht.

### Anwendungsfälle

Sie können dieses Ereignis verwenden, um auf einen neuen Audiotrack zu reagieren, der nicht mehr verfügbar ist. Möglicherweise möchten Sie z. B. Ihre UI-Elemente aktualisieren, um die Auswahl des entfernten Audiotracks für den Benutzer zu verhindern.

## Beispiele

Verwendung von `addEventListener()`:

```js
const videoElement = document.querySelector("video");

videoElement.audioTracks.addEventListener("removetrack", (event) => {
  console.log(`Audio track: ${event.track.label} removed`);
});
```

Verwendung der `onremovetrack` Ereignis-Handler-Eigenschaft:

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
- Dieses Ereignis bei [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) zielt auf: [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)
- Dieses Ereignis bei [`MediaStream`](/de/docs/Web/API/MediaStream) zielt auf: [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
