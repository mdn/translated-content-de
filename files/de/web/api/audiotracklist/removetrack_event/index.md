---
title: "AudioTrackList: removetrack Ereignis"
short-title: removetrack
slug: Web/API/AudioTrackList/removetrack_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

Das `removetrack` Ereignis wird ausgelöst, wenn ein Track aus einer [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) entfernt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlereigenschaft.

```js-nolint
addEventListener("removetrack", (event) => { })

onremovetrack = (event) => { }
```

## Ereignistyp

Ein [`TrackEvent`](/de/docs/Web/API/TrackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TrackEvent")}}

## Ereigniseigenschaften

_`TrackEvent` basiert auf [`Event`](/de/docs/Web/API/Event), daher sind die Eigenschaften von `Event` auch auf `TrackEvent` Objekten verfügbar._

- [`track`](/de/docs/Web/API/TrackEvent/track) {{ReadOnlyInline}}
  - : Das DOM-Track-Objekt, auf das sich das Ereignis bezieht. Ist es nicht `null`, handelt es sich immer um ein Objekt eines der Medientrack-Typen: [`AudioTrack`](/de/docs/Web/API/AudioTrack), [`VideoTrack`](/de/docs/Web/API/VideoTrack) oder [`TextTrack`](/de/docs/Web/API/TextTrack).

## Beschreibung

### Auslösen

Das `removetrack` Ereignis wird aufgerufen, wenn ein Track aus dem Mediaelement entfernt wird, dessen Audiotracks durch das `AudioTrackList` Objekt dargestellt werden.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergeleitet.

### Anwendungsfälle

Sie können dieses Ereignis verwenden, um auf das Unverfügbarwerden eines neuen Audiotracks zu reagieren. Sie möchten möglicherweise Ihre UI-Elemente aktualisieren, um die Auswahl des entfernten Audiotracks für den Benutzer zu verhindern.

## Beispiele

Verwendung von `addEventListener()`:

```js
const videoElement = document.querySelector("video");

videoElement.audioTracks.addEventListener("removetrack", (event) => {
  console.log(`Audio track: ${event.track.label} removed`);
});
```

Verwendung der `onremovetrack` Ereignisbehandlereigenschaft:

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
- Dieses Ereignis auf [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) zielt auf: [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)
- Dieses Ereignis auf [`MediaStream`](/de/docs/Web/API/MediaStream) zielt auf: [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
