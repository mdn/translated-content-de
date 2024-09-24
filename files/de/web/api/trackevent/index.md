---
title: TrackEvent
slug: Web/API/TrackEvent
l10n:
  sourceCommit: 3975bcf6caa09c9c5f7fddf2eef2be6c021d00f6
---

{{APIRef("HTML DOM")}}

Die **`TrackEvent`**-Schnittstelle der [HTML DOM API](/de/docs/Web/API/HTML_DOM_API) wird für Ereignisse verwendet, die Änderungen an einem Satz verfügbarer Spuren auf einem HTML-Medienelement darstellen; diese Ereignisse sind `addtrack` und `removetrack`.

Es ist wichtig, `TrackEvent` nicht mit der {{domxref("RTCTrackEvent")}}-Schnittstelle zu verwechseln, die für Spuren verwendet wird, die Teil einer {{domxref("RTCPeerConnection")}} sind.

Auf `TrackEvent` basierende Ereignisse werden immer an einen der Medienspurenlisten-Typen gesendet:

- Ereignisse, die Videospuren betreffen, werden immer an die {{domxref("VideoTrackList")}} gesendet, die in {{domxref("HTMLMediaElement.videoTracks")}} zu finden ist.
- Ereignisse, die Audiospuren betreffen, werden immer an die {{domxref("AudioTrackList")}} gesendet, die in {{domxref("HTMLMediaElement.audioTracks")}} angegeben ist.
- Ereignisse, die Textspuren betreffen, werden an das {{domxref("TextTrackList")}}-Objekt gesendet, das durch {{domxref("HTMLMediaElement.textTracks")}} angezeigt wird.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("TrackEvent.TrackEvent", "TrackEvent()")}}
  - : Erstellt und initialisiert ein neues `TrackEvent`-Objekt mit dem angegebenen Ereignistyp sowie optionalen zusätzlichen Eigenschaften.

## Instanz-Eigenschaften

_`TrackEvent` basiert auf {{domxref("Event")}}, daher sind Eigenschaften von `Event` auch auf `TrackEvent`-Objekten verfügbar._

- {{domxref("TrackEvent.track", "track")}} {{ReadOnlyInline}}
  - : Das DOM-Spurobjekt, auf das sich das Ereignis bezieht. Wenn es nicht `null` ist, ist dies immer ein Objekt eines der Medienspurtypen: {{domxref("AudioTrack")}}, {{domxref("VideoTrack")}}, oder {{domxref("TextTrack")}}).

## Instanz-Methoden

_`TrackEvent` hat keine eigenen Methoden; es basiert jedoch auf {{domxref("Event")}}, sodass es die über `Event`-Objekte verfügbaren Methoden bereitstellt._

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

Der Ereignishandler verwendet den JavaScript-Operator [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof), um festzustellen, auf welchem Typ von Spur das Ereignis aufgetreten ist, und gibt dann eine Nachricht an die Konsole aus, die angibt, um welche Art von Spur es sich handelt und ob sie dem Element hinzugefügt oder davon entfernt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
