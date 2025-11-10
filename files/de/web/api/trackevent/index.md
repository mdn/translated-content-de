---
title: TrackEvent
slug: Web/API/TrackEvent
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("HTML DOM")}}

Das **`TrackEvent`** Interface der [HTML DOM API](/de/docs/Web/API/HTML_DOM_API) wird für Ereignisse verwendet, die Änderungen an einem Satz verfügbarer Tracks auf einem HTML-Medienelement darstellen; diese Ereignisse sind `addtrack` und `removetrack`.

Es ist wichtig, `TrackEvent` nicht mit dem [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent) Interface zu verwechseln, das für Tracks verwendet wird, die Teil einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) sind.

Ereignisse, die auf `TrackEvent` basieren, werden immer an eine der Medientrack-Listenarten gesendet:

- Ereignisse, die Video-Tracks betreffen, werden immer an die [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) gesendet, die in [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) gefunden wird.
- Ereignisse, die Audio-Tracks betreffen, werden immer an die [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) gesendet, die in [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) angegeben ist.
- Ereignisse, die Text-Tracks betreffen, werden an das [`TextTrackList`](/de/docs/Web/API/TextTrackList) Objekt gesendet, das durch [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) angezeigt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`TrackEvent()`](/de/docs/Web/API/TrackEvent/TrackEvent)
  - : Erstellt und initialisiert ein neues `TrackEvent` Objekt mit dem angegebenen Ereignistyp sowie optionalen zusätzlichen Eigenschaften.

## Instanz-Eigenschaften

_`TrackEvent` basiert auf [`Event`](/de/docs/Web/API/Event), daher stehen die Eigenschaften von `Event` auch auf `TrackEvent` Objekten zur Verfügung._

- [`track`](/de/docs/Web/API/TrackEvent/track) {{ReadOnlyInline}}
  - : Das DOM-Track-Objekt, auf das sich das Ereignis bezieht. Wenn es nicht `null` ist, handelt es sich immer um ein Objekt eines der Medientrack-Typen: [`AudioTrack`](/de/docs/Web/API/AudioTrack), [`VideoTrack`](/de/docs/Web/API/VideoTrack) oder [`TextTrack`](/de/docs/Web/API/TextTrack).

## Instanz-Methoden

_`TrackEvent` hat keine eigenen Methoden; es basiert jedoch auf [`Event`](/de/docs/Web/API/Event), sodass es die Methoden bietet, die auf `Event` Objekten verfügbar sind._

## Beispiel

Dieses Beispiel richtet eine Funktion `handleTrackEvent()` ein, die für jedes `addtrack` oder `removetrack` Ereignis auf das erste {{HTMLElement("video")}} Element im Dokument aufgerufen wird.

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

Der Ereignis-Handler verwendet den JavaScript [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) Operator, um festzustellen, auf welchem Typ Track das Ereignis aufgetreten ist, und gibt dann eine Meldung an die Konsole aus, die angibt, um welche Art von Track es sich handelt und ob es dem Element hinzugefügt oder daraus entfernt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
