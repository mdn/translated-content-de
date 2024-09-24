---
title: "AudioTrackList: addtrack Ereignis"
short-title: addtrack
slug: Web/API/AudioTrackList/addtrack_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef}}

Das `addtrack` Ereignis wird ausgelöst, wenn eine Spur zu einer [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) hinzugefügt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("addtrack", (event) => { })

onaddtrack = (event) => { }
```

## Ereignistyp

Ein {{domxref("TrackEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("TrackEvent")}}

## Ereigniseigenschaften

_`TrackEvent` basiert auf {{domxref("Event")}}, daher sind auch die Eigenschaften von `Event` auf `TrackEvent` Objekten verfügbar._

- {{domxref("TrackEvent.track", "track")}} {{ReadOnlyInline}}
  - : Das DOM-Track-Objekt, auf das sich das Ereignis bezieht. Wenn nicht `null`, ist dies immer ein Objekt eines der Medientrack-Typen: {{domxref("AudioTrack")}}, {{domxref("VideoTrack")}}, oder {{domxref("TextTrack")}}).

## Beschreibung

### Auslöser

Das `addtrack` Ereignis wird aufgerufen, wenn immer eine neue Spur zu dem Medien-Element hinzugefügt wird, dessen Audio-Tracks durch das `AudioTrackList` Objekt dargestellt werden. Dies geschieht, wenn Spuren zu dem Element hinzugefügt werden, sobald das Medium erstmals an das Element angeschlossen wird; ein `addtrack` Ereignis tritt für jede Audiospur in der Medienressource auf.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Bubble aus.

### Anwendungsfälle

Sie können dieses Ereignis verwenden, um auf eine neue verfügbare Audiospur zu reagieren. Möglicherweise möchten Sie Ihre UI-Elemente aktualisieren, um die Auswahl der neuen Audiospur durch den Benutzer zu ermöglichen.

## Beispiele

Verwendung von `addEventListener()`:

```js
const videoElement = document.querySelector("video");

videoElement.audioTracks.addEventListener("addtrack", (event) => {
  console.log(`Audio track: ${event.track.label} added`);
});
```

Verwendung der `onaddtrack` Ereignis-Handler-Eigenschaft:

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
- Dieses Ereignis auf [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) Ziele: [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event)
- Dieses Ereignis auf [`MediaStream`](/de/docs/Web/API/MediaStream) Ziele: [`addtrack`](/de/docs/Web/API/MediaStream/addtrack_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
