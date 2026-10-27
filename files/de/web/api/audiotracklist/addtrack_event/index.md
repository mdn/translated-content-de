---
title: "AudioTrackList: addtrack-Ereignis"
short-title: addtrack
slug: Web/API/AudioTrackList/addtrack_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("HTML DOM")}}

Das Ereignis `addtrack` wird ausgelöst, wenn einer [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) ein Track hinzugefügt wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("addtrack", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onaddtrack = (event) => { }
```

## Ereignistyp

Ein [`TrackEvent`](/de/docs/Web/API/TrackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TrackEvent")}}

## Beschreibung

### Auslöser

Das Ereignis `addtrack` wird jedes Mal ausgelöst, wenn dem Medienelement, dessen Audio-Tracks durch das `AudioTrackList`-Objekt repräsentiert werden, ein neuer Track hinzugefügt wird. Dies geschieht auch, wenn beim ersten Verknüpfen eines Mediums mit dem Element dessen Tracks hinzugefügt werden. Für jeden Audio-Track der Medienressource wird dann ein `addtrack`-Ereignis ausgelöst.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

### Anwendungsfälle

Sie können dieses Ereignis nutzen, um auf die Verfügbarkeit eines neuen Audio-Tracks zu reagieren. Beispielsweise können Sie Ihre Benutzeroberfläche aktualisieren, damit Benutzer den neuen Audio-Track auswählen können.

## Beispiele

Mit `addEventListener()`:

```js
const videoElement = document.querySelector("video");

videoElement.audioTracks.addEventListener("addtrack", (event) => {
  console.log(`Audio track: ${event.track.label} added`);
});
```

Mit der Event-Handler-Eigenschaft `onaddtrack` (beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onaddtrack` hinzugefügte Event-Listener ersetzt werden):

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
- Dieses Ereignis für [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Objekte: [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event)
- Dieses Ereignis für [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekte: [`addtrack`](/de/docs/Web/API/MediaStream/addtrack_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
