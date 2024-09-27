---
title: TrackEvent
slug: Web/API/TrackEvent
l10n:
  sourceCommit: 3975bcf6caa09c9c5f7fddf2eef2be6c021d00f6
---

{{APIRef("HTML DOM")}}

Die **`TrackEvent`**-Schnittstelle der [HTML DOM API](/de/docs/Web/API/HTML_DOM_API) wird für Ereignisse verwendet, die Änderungen an einer Gruppe von verfügbaren Spuren auf einem HTML-Medienelement darstellen. Diese Ereignisse sind `addtrack` und `removetrack`.

Es ist wichtig, `TrackEvent` nicht mit der [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent)-Schnittstelle zu verwechseln, die für Spuren verwendet wird, die Teil einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) sind.

Ereignisse, die auf `TrackEvent` basieren, werden immer an einen der Medienspur-Listentypen gesendet:

- Ereignisse, die Videospuren betreffen, werden immer an die in [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) gefundene [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) gesendet.
- Ereignisse, die Audiospuren betreffen, werden immer an die in [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) angegebene [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) gesendet.
- Ereignisse, die Textspuren betreffen, werden an das durch [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) angezeigte [`TextTrackList`](/de/docs/Web/API/TextTrackList)-Objekt gesendet.

{{InheritanceDiagram}}

## Konstruktor

- [`TrackEvent()`](/de/docs/Web/API/TrackEvent/TrackEvent)
  - : Erstellt und initialisiert ein neues `TrackEvent`-Objekt mit dem angegebenen Ereignistyp sowie optionalen zusätzlichen Eigenschaften.

## Instanz-Eigenschaften

_`TrackEvent` basiert auf [`Event`](/de/docs/Web/API/Event), daher sind Eigenschaften von `Event` auch auf `TrackEvent`-Objekten verfügbar._

- [`track`](/de/docs/Web/API/TrackEvent/track) {{ReadOnlyInline}}
  - : Das DOM-Track-Objekt, auf das sich das Ereignis bezieht. Wenn es nicht `null` ist, ist dies immer ein Objekt eines der Medienspur-Typen: [`AudioTrack`](/de/docs/Web/API/AudioTrack), [`VideoTrack`](/de/docs/Web/API/VideoTrack) oder [`TextTrack`](/de/docs/Web/API/TextTrack).

## Instanz-Methoden

_`TrackEvent` hat keine eigenen Methoden; es basiert jedoch auf [`Event`](/de/docs/Web/API/Event), sodass es die auf `Event`-Objekten verfügbaren Methoden bereitstellt._

## Beispiel

Dieses Beispiel richtet eine Funktion `handleTrackEvent()` ein, die für jedes `addtrack`- oder `removetrack`-Ereignis auf dem ersten im Dokument gefundenen {{HTMLElement("video")}}-Element aufgerufen wird.

```js
const videoElem = document.querySelector("video");

videoElem.videoTracks.addEventListener("addtrack", handleTrackEvent, false);
videoElem.videoTracks.addEventListener("removetrack", handleTrackEvent, false);
videoElem.audioTracks.addEventListener("addtrack", handleTrackEvent, false);
videoElem.audioTracks.addEventListener("removetrack", handleTrackEvent, false);
videoElem.textTracks.addEventListener("addtrack", handleTrackEvent, false);
videoElem.textTracks.addEventListener("removetrack", handleTrackEvent, false);

function handleTrackEvent(event) {
  let trackKind;

  if (event.target instanceof VideoTrackList) {
    trackKind = "video";
  } else if (event.target instanceof AudioTrackList) {
    trackKind = "audio";
  } else if (event.target instanceof TextTrackList) {
    trackKind = "text";
  } else {
    trackKind = "unknown";
  }

  switch (event.type) {
    case "addtrack":
      console.log(`Added a ${trackKind} track`);
      break;
    case "removetrack":
      console.log(`Removed a ${trackKind} track`);
      break;
  }
}
```

Der Ereignishandler verwendet den JavaScript-Operator [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof), um zu bestimmen, auf welchem Spurtyp das Ereignis aufgetreten ist. Dann gibt er eine Nachricht in der Konsole aus, die angibt, um welche Art von Spur es sich handelt und ob sie dem Element hinzugefügt oder daraus entfernt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
