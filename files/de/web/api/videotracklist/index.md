---
title: VideoTrackList
slug: Web/API/VideoTrackList
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("HTML DOM")}}

Die **`VideoTrackList`**-Schnittstelle wird verwendet, um eine Liste der Videospuren darzustellen, die in einem {{HTMLElement("video")}}-Element enthalten sind. Jede Spur wird durch ein separates {{domxref("VideoTrack")}}-Objekt in der Liste dargestellt.

Ein Exemplar dieses Objekts erhalten Sie mit {{domxref('HTMLMediaElement.videoTracks')}}. Die einzelnen Spuren können mittels Array-Syntax oder Funktionen wie {{jsxref("Array.forEach", "forEach()")}} beispielsweise abgerufen werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, {{domxref("EventTarget")}}._

- {{domxref("VideoTrackList.length", "length")}} {{ReadOnlyInline}}
  - : Die Anzahl der Spuren in der Liste.
- {{domxref("VideoTrackList.selectedIndex", "selectedIndex")}} {{ReadOnlyInline}}
  - : Der Index der aktuell ausgewählten Spur, falls vorhanden, oder `−1` andernfalls.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihrer übergeordneten Schnittstelle, {{domxref("EventTarget")}}._

- {{domxref("VideoTrackList.getTrackById", "getTrackById()")}}
  - : Gibt die {{domxref("VideoTrack")}} innerhalb der `VideoTrackList` zurück, deren {{domxref("VideoTrack.id", "id")}} mit der angegebenen Zeichenkette übereinstimmt. Wenn keine Übereinstimmung gefunden wird, wird `null` zurückgegeben.

## Ereignisse

- {{domxref("VideoTrackList/addtrack_event", "addtrack")}}
  - : Wird ausgelöst, wenn eine neue Videospur zum Medienelement hinzugefügt wurde.
    Ebenso verfügbar über die `onaddtrack`-Eigenschaft.
- {{domxref("VideoTrackList.change_event", "change")}}
  - : Wird ausgelöst, wenn eine Videospur aktiv oder inaktiv gemacht wurde.
    Ebenso verfügbar über die `onchange`-Eigenschaft.
- {{domxref("VideoTrackList/removetrack_event", "removetrack")}}
  - : Wird ausgelöst, wenn eine neue Videospur aus dem Medienelement entfernt wurde.
    Ebenso verfügbar über die `onremovetrack`-Eigenschaft.

## Verwendungshinweise

Zusätzlich zum direkten Zugriff auf die im Medienelement vorhandenen Videospuren ermöglicht `VideoTrackList` das Setzen von Ereignis-Handlern für die {{domxref("VideoTrackList/addtrack_event", "addtrack")}}- und {{domxref("VideoTrackList/removetrack_event", "removetrack")}}-Ereignisse, sodass Sie erkennen können, wenn Spuren zum oder vom Medienstrom des Elements hinzugefügt oder entfernt werden.

## Beispiele

### Abrufen der Videospurliste eines Medienelements

Um die `VideoTrackList` eines Medienelements zu erhalten, verwenden Sie dessen {{domxref("HTMLMediaElement.videoTracks", "videoTracks")}}-Eigenschaft.

```js
const videoTracks = document.querySelector("video").videoTracks;
```

### Überwachung von Änderungen der Spurenanzahl

In diesem Beispiel haben wir eine App, die Informationen über die Anzahl der verfügbaren Kanäle anzeigt. Um sie auf dem neuesten Stand zu halten, werden Handler für die {{domxref("VideoTrackList/addtrack_event", "addtrack")}}- und {{domxref("VideoTrackList/removetrack_event", "removetrack")}}-Ereignisse eingerichtet.

```js
videoTracks.onaddtrack = updateTrackCount;
videoTracks.onremovetrack = updateTrackCount;

function updateTrackCount(event) {
  trackCount = videoTracks.length;
  drawTrackCountIndicator(trackCount);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
