---
title: AudioTrackList
slug: Web/API/AudioTrackList
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("HTML DOM")}}

Die **`AudioTrackList`** Schnittstelle wird verwendet, um eine Liste der Audiotracks in einem gegebenen HTML-Medienelement darzustellen, wobei jeder Track durch ein separates [`AudioTrack`](/de/docs/Web/API/AudioTrack) Objekt in der Liste repräsentiert wird.

Eine Instanz dieses Objekts kann mit [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) abgerufen werden. Auf die einzelnen Tracks kann mit Array-Syntax zugegriffen werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer Elternelement-Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`length`](/de/docs/Web/API/AudioTrackList/length) {{ReadOnlyInline}}
  - : Die Anzahl der Tracks in der Liste.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihrer Elternelement-Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`getTrackById()`](/de/docs/Web/API/AudioTrackList/getTrackById)
  - : Gibt den [`AudioTrack`](/de/docs/Web/API/AudioTrack) zurück, der in der `AudioTrackList` gefunden wurde und dessen [`id`](/de/docs/Web/API/AudioTrack/id) mit dem angegebenen String übereinstimmt. Wenn keine Übereinstimmung gefunden wird, wird `null` zurückgegeben.

## Ereignisse

- [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event)
  - : Wird ausgelöst, wenn ein neuer Audiotrack zum Medienelement hinzugefügt wurde.
- [`change`](/de/docs/Web/API/AudioTrackList/change_event)
  - : Wird ausgelöst, wenn ein Track aktiviert oder deaktiviert wurde.
- [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event)
  - : Wird ausgelöst, wenn ein Audiotrack aus dem Medienelement entfernt wurde.

## Nutzungshinweise

Zusätzlich zur Möglichkeit, direkten Zugriff auf die im Medienelement vorhandenen Audiotracks zu erhalten, erlaubt `AudioTrackList` das Setzen von Ereignis-Handlern für die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) Ereignisse, sodass Sie erkennen können, wann Tracks zum oder vom Stream des Medienelements hinzugefügt oder entfernt werden. Siehe die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) Ereignisse für Details und Beispiele.

## Beispiele

### Abrufen der Audiotrack-Liste eines Medienelements

Um die `AudioTrackList` eines Medienelements zu erhalten, verwenden Sie dessen [`audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) Eigenschaft.

```js
const audioTracks = document.querySelector("video").audioTracks;
```

### Überwachung von Änderungen der Track-Anzahl

In diesem Beispiel haben wir eine App, die Informationen über die Anzahl der verfügbaren Kanäle anzeigt. Um sicherzustellen, dass diese Informationen aktuell bleiben, werden Handler für die [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event) Ereignisse eingerichtet.

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
