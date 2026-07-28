---
title: "AudioTrackList: addtrack-Ereignis"
short-title: addtrack
slug: Web/API/AudioTrackList/addtrack_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("HTML DOM")}}

Das `addtrack`-Ereignis wird ausgelöst, wenn eine Spur zu einer [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) hinzugefügt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("addtrack", (event) => { })

onaddtrack = (event) => { }
```

## Ereignistyp

Ein [`TrackEvent`](/de/docs/Web/API/TrackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TrackEvent")}}

## Beschreibung

### Auslöser

Das `addtrack`-Ereignis wird jedes Mal aufgerufen, wenn eine neue Spur zu dem Medienelement hinzugefügt wird, dessen Audiospuren durch das `AudioTrackList`-Objekt dargestellt werden. Dies geschieht, wenn Spuren zum Element hinzugefügt werden, wenn die Medien zum ersten Mal an das Element angehängt werden; für jede Audiospur in der Medienressource tritt ein `addtrack`-Ereignis auf.

Dieses Ereignis ist nicht abbrechbar und wird nicht gebubbelt.

### Anwendungsfälle

Sie können dieses Ereignis verwenden, um auf das Verfügbarwerden einer neuen Audiospur zu reagieren. Sie möchten möglicherweise Ihre UI-Elemente aktualisieren, um beispielsweise die Benutzerwahl der neuen Audiospur zu ermöglichen.

## Beispiele

Verwendung von `addEventListener()`:

```js
const videoElement = document.querySelector("video");

videoElement.audioTracks.addEventListener("addtrack", (event) => {
  console.log(`Audio track: ${event.track.label} added`);
});
```

Verwendung der `onaddtrack`-Event-Handler-Eigenschaft:

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
- Dieses Ereignis bei [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) Zielen: [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event)
- Dieses Ereignis bei [`MediaStream`](/de/docs/Web/API/MediaStream) Zielen: [`addtrack`](/de/docs/Web/API/MediaStream/addtrack_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
