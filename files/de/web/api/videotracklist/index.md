---
title: VideoTrackList
slug: Web/API/VideoTrackList
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("HTML DOM")}}

Das **`VideoTrackList`**-Interface wird verwendet, um eine Liste der Videospuren darzustellen, die in einem {{HTMLElement("video")}}-Element enthalten sind. Jede Spur wird durch ein separates [`VideoTrack`](/de/docs/Web/API/VideoTrack)-Objekt in der Liste repräsentiert.

Eine Instanz dieses Objekts kann über [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) abgerufen werden. Auf die einzelnen Spuren kann mit Array-Syntax oder Funktionen wie {{jsxref("Array.forEach", "forEach()")}} zugegriffen werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`length`](/de/docs/Web/API/VideoTrackList/length) {{ReadOnlyInline}}
  - : Die Anzahl der Spuren in der Liste.
- [`selectedIndex`](/de/docs/Web/API/VideoTrackList/selectedIndex) {{ReadOnlyInline}}
  - : Der Index der aktuell ausgewählten Spur, falls vorhanden, oder `−1` andernfalls.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`getTrackById()`](/de/docs/Web/API/VideoTrackList/getTrackById)
  - : Gibt die [`VideoTrack`](/de/docs/Web/API/VideoTrack) zurück, die innerhalb der `VideoTrackList` gefunden wird und deren [`id`](/de/docs/Web/API/VideoTrack/id) mit dem angegebenen String übereinstimmt. Wenn keine Übereinstimmung gefunden wird, wird `null` zurückgegeben.

## Ereignisse

- [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event)
  - : Wird ausgelöst, wenn eine neue Videospur zum Medien-Element hinzugefügt wurde.
    Auch über die `onaddtrack`-Eigenschaft verfügbar.
- [`change`](/de/docs/Web/API/VideoTrackList/change_event)
  - : Wird ausgelöst, wenn eine Videospur aktiv oder inaktiv gemacht wurde.
    Auch über die `onchange`-Eigenschaft verfügbar.
- [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)
  - : Wird ausgelöst, wenn eine neue Videospur aus dem Medien-Element entfernt wurde.
    Auch über die `onremovetrack`-Eigenschaft verfügbar.

## Hinweise zur Verwendung

Zusätzlich zur direkten Zugriffsmöglichkeit auf die vorhandenen Videospuren eines Medien-Elements ermöglicht Ihnen `VideoTrackList`, Ereignishandler für die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event)- und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)-Ereignisse festzulegen, sodass Sie erkennen können, wann Spuren dem Stream des Medien-Elements hinzugefügt oder daraus entfernt werden.

## Beispiele

### Die Videospurliste eines Medien-Elements abrufen

Um die `VideoTrackList` eines Medien-Elements zu erhalten, verwenden Sie die [`videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)-Eigenschaft.

```js
const videoTracks = document.querySelector("video").videoTracks;
```

### Änderung der Anzahl der Spuren überwachen

In diesem Beispiel haben wir eine App, die Informationen über die verfügbare Anzahl der Kanäle anzeigt. Um sie aktuell zu halten, werden Handler für die [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event)- und [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)-Ereignisse eingerichtet.

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
