---
title: AudioTrackList
slug: Web/API/AudioTrackList
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("HTML DOM")}}

Die **`AudioTrackList`**-Schnittstelle wird verwendet, um eine Liste der Audiotracks, die in einem bestimmten HTML-Medienelement enthalten sind, darzustellen. Jeder Track wird durch ein separates [`AudioTrack`](/de/docs/Web/API/AudioTrack)-Objekt in der Liste repräsentiert.

Ein Beispielobjekt dieser Schnittstelle erhalten Sie mit [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks). Die einzelnen Tracks können mittels Array-Syntax abgerufen werden.

{{InheritanceDiagram}}

## Instanzen-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`length`](/de/docs/Web/API/AudioTrackList/length) {{ReadOnlyInline}}
  - : Die Anzahl der Tracks in der Liste.

## Instanzen-Methoden

_Diese Schnittstelle erbt auch Methoden von ihrer Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`getTrackById()`](/de/docs/Web/API/AudioTrackList/getTrackById)
  - : Gibt den [`AudioTrack`](/de/docs/Web/API/AudioTrack) zurück, der in der `AudioTrackList` gefunden wird und dessen [`id`](/de/docs/Web/API/AudioTrack/id) mit dem angegebenen String übereinstimmt. Wenn keine Übereinstimmung gefunden wird, wird `null` zurückgegeben.

## Ereignisse

- [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event)
  - : Wird ausgelöst, wenn ein neuer Audiotrack zum Medienelement hinzugefügt wurde.
- [`change`](/de/docs/Web/API/AudioTrackList/change_event)
  - : Wird ausgelöst, wenn ein Track aktiviert oder deaktiviert wurde.
- [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event)
  - : Wird ausgelöst, wenn ein neuer Audiotrack vom Medienelement entfernt wurde.

## Verwendungshinweise

Zusätzlich zur Möglichkeit, direkten Zugriff auf die Audiotracks eines Medienelements zu erhalten, ermöglicht `AudioTrackList` Ihnen, Ereignis-Handler für die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) Ereignisse zu setzen, sodass Sie erkennen können, wann Tracks zum oder vom Stream des Medienelements hinzugefügt oder entfernt werden. Siehe die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) Ereignisse für Details und Beispiele.

## Beispiele

### Abrufen der Audiotrack-Liste eines Medienelements

Um die `AudioTrackList` eines Medienelements zu erhalten, verwenden Sie die [`audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)-Eigenschaft.

```js
const audioTracks = document.querySelector("video").audioTracks;
```

### Überwachen von Änderungen der Track-Anzahl

In diesem Beispiel haben wir eine App, die Informationen über die Anzahl der verfügbaren Kanäle anzeigt. Um diese aktuell zu halten, werden Handler für die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) Ereignisse eingerichtet.

```js
audioTracks.onaddtrack = updateTrackCount;
audioTracks.onremovetrack = updateTrackCount;

function updateTrackCount(event) {
  trackCount = audioTracks.length;
  drawTrackCountIndicator(trackCount);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
