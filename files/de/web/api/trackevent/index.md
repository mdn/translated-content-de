---
title: TrackEvent
slug: Web/API/TrackEvent
l10n:
  sourceCommit: 3975bcf6caa09c9c5f7fddf2eef2be6c021d00f6
---

{{APIRef("HTML DOM")}}

Die **`TrackEvent`**-Schnittstelle der [HTML DOM API](/de/docs/Web/API/HTML_DOM_API) wird für Ereignisse verwendet, die Änderungen an einer Gruppe von verfügbaren Spuren auf einem HTML-Medienelement darstellen; diese Ereignisse sind `addtrack` und `removetrack`.

Es ist wichtig, `TrackEvent` nicht mit der [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent)-Schnittstelle zu verwechseln, die für Spuren verwendet wird, die Teil einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) sind.

Ereignisse, die auf `TrackEvent` basieren, werden immer an einen der Medienspur-Listentypen gesendet:

- Ereignisse, die Videospuren betreffen, werden immer an die [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) gesendet, die in [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) zu finden ist.
- Ereignisse, die Audiospuren betreffen, werden immer an die [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) gesendet, die in [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) angegeben ist.
- Ereignisse, die Textspuren betreffen, werden an das [`TextTrackList`](/de/docs/Web/API/TextTrackList)-Objekt gesendet, das durch [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) angezeigt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`TrackEvent()`](/de/docs/Web/API/TrackEvent/TrackEvent)
  - : Erstellt und initialisiert ein neues `TrackEvent`-Objekt mit dem angegebenen Ereignistyp, sowie optionalen zusätzlichen Eigenschaften.

## Instanz-Eigenschaften

_`TrackEvent` basiert auf [`Event`](/de/docs/Web/API/Event), daher sind die Eigenschaften von `Event` auch auf `TrackEvent`-Objekten verfügbar._

- [`track`](/de/docs/Web/API/TrackEvent/track) {{ReadOnlyInline}}
  - : Das DOM-Spurobjekt, auf das sich das Ereignis bezieht. Wenn nicht `null`, ist dies immer ein Objekt eines der Medienspurtypen: [`AudioTrack`](/de/docs/Web/API/AudioTrack), [`VideoTrack`](/de/docs/Web/API/VideoTrack) oder [`TextTrack`](/de/docs/Web/API/TextTrack).

## Instanz-Methoden

_`TrackEvent` hat keine eigenen Methoden; es basiert jedoch auf [`Event`](/de/docs/Web/API/Event), sodass es die Methoden bereitstellt, die auf `Event`-Objekten verfügbar sind._

## Beispiel

Dieses Beispiel richtet eine Funktion `handleTrackEvent()` ein, die für jedes `addtrack`- oder `removetrack`-Ereignis des ersten {{HTMLElement("video")}}-Elements im Dokument aufgerufen wird.

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

Der Ereignishandler verwendet den JavaScript-Operator [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof), um zu bestimmen, welcher Typ von Spur das Ereignis aufgetreten ist, und gibt dann eine Nachricht an die Konsole aus, die anzeigt, um welche Art von Spur es sich handelt und ob sie zum Element hinzugefügt oder davon entfernt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
