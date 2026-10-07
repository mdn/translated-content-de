---
title: TrackEvent
slug: Web/API/TrackEvent
l10n:
  sourceCommit: 4bb8f0d1f9cb2d0e23b9e19f798a7ff39ac34a49
---

{{APIRef("HTML DOM")}}

Die **`TrackEvent`**-Schnittstelle der [HTML DOM API](/de/docs/Web/API/HTML_DOM_API) wird für Ereignisse verwendet, die Änderungen an den verfügbaren Tracks eines HTML-Medienelements darstellen. Bei diesen Ereignissen handelt es sich um `addtrack` und `removetrack`.

`TrackEvent` darf nicht mit der [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent)-Schnittstelle verwechselt werden, die für Tracks verwendet wird, die Teil einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) sind.

Ereignisse, die auf `TrackEvent` basieren, werden immer an einen der folgenden Typen von Medien-Track-Listen gesendet:

- Ereignisse, die Video-Tracks betreffen, werden immer an die [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) gesendet, die sich in [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) befindet.
- Ereignisse, die Audio-Tracks betreffen, werden immer an die [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) gesendet, die in [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) angegeben ist.
- Ereignisse, die Text-Tracks betreffen, werden an das [`TextTrackList`](/de/docs/Web/API/TextTrackList)-Objekt gesendet, auf das [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) verweist.

{{InheritanceDiagram}}

## Konstruktor

- [`TrackEvent()`](/de/docs/Web/API/TrackEvent/TrackEvent)
  - : Erstellt und initialisiert ein neues `TrackEvent`-Objekt mit dem angegebenen Ereignistyp sowie optionalen zusätzlichen Eigenschaften.

## Instanzeigenschaften

_`TrackEvent` basiert auf [`Event`](/de/docs/Web/API/Event). Daher sind die Eigenschaften von `Event` auch für `TrackEvent`-Objekte verfügbar._

- [`track`](/de/docs/Web/API/TrackEvent/track) {{ReadOnlyInline}}
  - : Das DOM-Track-Objekt, auf das sich das Ereignis bezieht. Wenn es nicht `null` ist, handelt es sich immer um ein Objekt eines der folgenden Medien-Track-Typen: [`AudioTrack`](/de/docs/Web/API/AudioTrack), [`VideoTrack`](/de/docs/Web/API/VideoTrack) oder [`TextTrack`](/de/docs/Web/API/TextTrack).

## Instanzmethoden

_`TrackEvent` verfügt über keine eigenen Methoden. Da es jedoch auf [`Event`](/de/docs/Web/API/Event) basiert, stellt es die Methoden bereit, die für `Event`-Objekte verfügbar sind._

## Beispiel

In diesem Beispiel wird eine Funktion namens `handleTrackEvent()` eingerichtet, die bei jedem `addtrack`- oder `removetrack`-Ereignis für das erste im Dokument gefundene {{HTMLElement("video")}}-Element aufgerufen wird.

```js
const videoElem = document.querySelector("video");

videoElem.videoTracks.addEventListener("addtrack", handleTrackEvent);
videoElem.videoTracks.addEventListener("removetrack", handleTrackEvent);
videoElem.audioTracks.addEventListener("addtrack", handleTrackEvent);
videoElem.audioTracks.addEventListener("removetrack", handleTrackEvent);
videoElem.textTracks.addEventListener("addtrack", handleTrackEvent);
videoElem.textTracks.addEventListener("removetrack", handleTrackEvent);

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

Der Event-Handler verwendet den JavaScript-Operator [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof), um zu bestimmen, bei welchem Track-Typ das Ereignis aufgetreten ist. Anschließend gibt er in der Konsole eine Meldung aus, die angibt, um welche Art von Track es sich handelt und ob er dem Element hinzugefügt oder daraus entfernt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
