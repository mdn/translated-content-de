---
title: VideoTrackList
slug: Web/API/VideoTrackList
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("HTML DOM")}}

Die **`VideoTrackList`** Schnittstelle wird verwendet, um eine Liste der Videospuren darzustellen, die in einem {{HTMLElement("video")}} Element enthalten sind, wobei jede Spur durch ein separates [`VideoTrack`](/de/docs/Web/API/VideoTrack) Objekt in der Liste repräsentiert wird.

Rufen Sie eine Instanz dieses Objekts mit [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) ab. Die einzelnen Spuren können beispielsweise mit Arraysyntax oder Funktionen wie {{jsxref("Array.forEach", "forEach()")}} zugegriffen werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`length`](/de/docs/Web/API/VideoTrackList/length) {{ReadOnlyInline}}
  - : Die Anzahl der Spuren in der Liste.
- [`selectedIndex`](/de/docs/Web/API/VideoTrackList/selectedIndex) {{ReadOnlyInline}}
  - : Der Index der aktuell ausgewählten Spur, falls vorhanden, oder `−1` andernfalls.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihrer Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`getTrackById()`](/de/docs/Web/API/VideoTrackList/getTrackById)
  - : Gibt die [`VideoTrack`](/de/docs/Web/API/VideoTrack) zurück, die innerhalb der `VideoTrackList` gefunden wurde und deren [`id`](/de/docs/Web/API/VideoTrack/id) mit der angegebenen Zeichenkette übereinstimmt. Wenn keine Übereinstimmung gefunden wird, wird `null` zurückgegeben.

## Ereignisse

- [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event)
  - : Wird ausgelöst, wenn eine neue Videospur zum Medienelement hinzugefügt wurde.
    Auch über die Eigenschaft `onaddtrack` verfügbar.
- [`change`](/de/docs/Web/API/VideoTrackList/change_event)
  - : Wird ausgelöst, wenn eine Videospur aktiv oder inaktiv gemacht wurde.
    Auch über die Eigenschaft `onchange` verfügbar.
- [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)
  - : Wird ausgelöst, wenn eine neue Videospur aus dem Medienelement entfernt wurde.
    Auch über die Eigenschaft `onremovetrack` verfügbar.

## Hinweise zur Verwendung

Zusätzlich zur direkten Zugriffsmöglichkeit auf die Videospuren eines Medienelements ermöglicht `VideoTrackList` das Setzen von Ereignis-Handlern für die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event) Ereignisse, sodass Sie erkennen können, wann Spuren zum oder vom Medienstrom des Elements hinzugefügt oder entfernt werden.

## Beispiele

### Abrufen der Videospurenliste eines Medienelements

Um die `VideoTrackList` eines Medienelements zu erhalten, verwenden Sie dessen [`videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) Eigenschaft.

```js
const videoTracks = document.querySelector("video").videoTracks;
```

### Überwachung von Änderungen der Spuranzahl

In diesem Beispiel haben wir eine App, die Informationen über die Anzahl der verfügbaren Kanäle anzeigt. Um sie auf dem neuesten Stand zu halten, werden Handler für die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event) Ereignisse eingerichtet.

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
