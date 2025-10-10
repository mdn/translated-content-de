---
title: TextTrackList
slug: Web/API/TextTrackList
l10n:
  sourceCommit: 0eff6caa0378d6dabf24d8f5c42665a8f98c9b92
---

{{APIRef("HTML DOM")}}

Das **`TextTrackList`**-Interface wird verwendet, um eine Liste der für das zugehörige Video- oder Audioelement definierten Textspuren darzustellen. Jede Spur wird dabei durch ein separates [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt in der Liste repräsentiert.

Textspuren können einem Medienelement deklarativ mit dem {{HTMLElement("track")}}-Element oder programmatisch mit der Methode [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack) hinzugefügt werden.

Eine Instanz dieses Objekts kann über die [`textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)-Eigenschaft eines [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekts abgerufen werden.

Für ein gegebenes [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekt _media_ können die einzelnen Spuren wie folgt abgerufen werden:

- `media.TextTracks[n]`, um die n-te Textspur aus der Liste der Textspuren des Objekts zu erhalten
- mit der Methode [`media.textTracks.getTrackById()`](/de/docs/Web/API/TextTrackList/getTrackById)

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem übergeordneten Interface [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`length`](/de/docs/Web/API/TextTrackList/length) {{ReadOnlyInline}}
  - : Die Anzahl der Spuren in der Liste.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem übergeordneten Interface [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`getTrackById()`](/de/docs/Web/API/TextTrackList/getTrackById)
  - : Gibt die [`TextTrack`](/de/docs/Web/API/TextTrack) zurück, die innerhalb der `TextTrackList` gefunden wird, deren [`id`](/de/docs/Web/API/TextTrack/id) mit dem angegebenen String übereinstimmt. Wenn keine Übereinstimmung gefunden wird, wird `null` zurückgegeben.

## Ereignisse

- [`addtrack`](/de/docs/Web/API/TextTrackList/addtrack_event)
  - : Wird ausgelöst, wenn eine neue Textspur dem Medienelement hinzugefügt wurde.
    Auch über die `onaddtrack`-Eigenschaft verfügbar.
- [`change`](/de/docs/Web/API/TextTrackList/change_event)
  - : Wird ausgelöst, wenn eine Textspur aktiv oder inaktiv gemacht wurde.
    Auch über die `onchange`-Eigenschaft verfügbar.
- [`removetrack`](/de/docs/Web/API/TextTrackList/removetrack_event)
  - : Wird ausgelöst, wenn eine neue Textspur vom Medienelement entfernt wurde.
    Auch über die `onremovetrack`-Eigenschaft verfügbar.

## Verwendungsnotizen

Zusätzlich dazu, direkten Zugriff auf die auf einem Medienelement vorhandenen Textspuren zu erhalten, erlaubt `TextTrackList` das Setzen von Ereignis-Handlern für die [`addtrack`](/de/docs/Web/API/TextTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/TextTrackList/removetrack_event) Ereignisse, sodass Sie erkennen können, wann Spuren zum Stream des Medienelements hinzugefügt oder davon entfernt werden.

## Beispiele

### Abrufen der Textspur-Liste eines Videoelements

Um die `TextTrackList` eines Medienelements zu erhalten, verwenden Sie seine [`textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)-Eigenschaft.

```js
const textTracks = document.querySelector("video").textTracks;
```

### Überwachung von Änderungen der Spurenanzahl

In diesem Beispiel haben wir eine App, die Informationen über die Anzahl der verfügbaren Kanäle anzeigt. Um sie aktuell zu halten, werden Handler für die [`addtrack`](/de/docs/Web/API/TextTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/TextTrackList/removetrack_event) Ereignisse eingerichtet.

```js
textTracks.onaddtrack = updateTrackCount;
textTracks.onremovetrack = updateTrackCount;

function updateTrackCount(event) {
  trackCount = textTracks.length;
  drawTrackCountIndicator(trackCount);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
