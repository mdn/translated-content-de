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

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("removetrack", (event) => { })

onremovetrack = (event) => { }
```

## Ereignistyp

Ein {{domxref("TrackEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("TrackEvent")}}

## Eigenschaften des Ereignisses

_`TrackEvent` basiert auf {{domxref("Event")}}, daher sind auch die Eigenschaften von `Event` bei `TrackEvent`-Objekten verfügbar._

- {{domxref("TrackEvent.track", "track")}} {{ReadOnlyInline}}
  - : Das DOM-Track-Objekt, auf das sich das Ereignis bezieht. Wenn nicht `null`, handelt es sich immer um ein Objekt eines der Medientrack-Typen: {{domxref("AudioTrack")}}, {{domxref("VideoTrack")}} oder {{domxref("TextTrack")}}).

## Beschreibung

### Auslöser

Das `removetrack`-Ereignis wird aufgerufen, wann immer ein Track aus dem Media-Element entfernt wird, dessen Audiotracks durch das `AudioTrackList`-Objekt dargestellt werden.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht propagiert.

### Anwendungsfälle

Sie können dieses Ereignis verwenden, um auf das Entfernen eines Audiotracks zu reagieren. Beispielsweise könnten Sie Ihre Benutzeroberflächenelemente aktualisieren, um eine Auswahl des entfernten Audiotracks durch den Benutzer zu verhindern.

## Beispiele

Verwendung von `addEventListener()`:

```js
const videoElement = document.querySelector("video");

videoElement.audioTracks.addEventListener("removetrack", (event) => {
  console.log(`Audio track: ${event.track.label} removed`);
});
```

Verwendung der `onremovetrack`-Ereignis-Handler-Eigenschaft:

```js
const videoElement = document.querySelector("video");

videoElement.audioTracks.onremovetrack = (event) => {
  console.log(`Audio track: ${event.track.label} removed`);
};
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event), [`change`](/de/docs/Web/API/AudioTrackList/change_event)
- Dieses Ereignis auf [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) zielt ab: [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)
- Dieses Ereignis auf [`MediaStream`](/de/docs/Web/API/MediaStream) zielt ab: [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
