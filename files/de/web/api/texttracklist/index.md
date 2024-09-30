---
title: TextTrackList
slug: Web/API/TextTrackList
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{APIRef("HTML DOM")}}

Die **`TextTrackList`** Schnittstelle wird verwendet, um eine Liste der für das zugehörige <video>- oder <audio>-Element definierten Textspuren darzustellen, wobei jede Spur durch ein separates [`textTrack`](/de/docs/Web/API/TextTrack)-Objekt in der Liste repräsentiert wird.

Textspuren können einem Medienelement deklarativ mithilfe des {{HTMLElement("track")}}-Elements oder programmgesteuert mithilfe der Methode [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack) hinzugefügt werden.

Eine Instanz dieses Objekts kann über die [`textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)-Eigenschaft eines [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekts abgerufen werden.

Für ein gegebenes [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekt _media_ können die einzelnen Spuren wie folgt abgerufen werden:

- `media.TextTracks[n]`, um die n-te Textspur aus der Liste der Textspuren des Objekts zu erhalten
- die Methode [`media.textTracks.getTrackById()`](/de/docs/Web/API/TextTrackList/getTrackById)

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer übergeordneten Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`length`](/de/docs/Web/API/TextTrackList/length) {{ReadOnlyInline}}
  - : Die Anzahl der Spuren in der Liste.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden ihrer übergeordneten Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`getTrackById()`](/de/docs/Web/API/TextTrackList/getTrackById)
  - : Gibt die innerhalb der `TextTrackList` gefundene [`TextTrack`](/de/docs/Web/API/TextTrack) zurück, deren [`id`](/de/docs/Web/API/TextTrack/id) mit dem angegebenen String übereinstimmt. Wenn keine Übereinstimmung gefunden wird, wird `null` zurückgegeben.

## Ereignisse

- [`addtrack`](/de/docs/Web/API/TextTrackList/addtrack_event)
  - : Wird ausgelöst, wenn eine neue Textspur zum Medienelement hinzugefügt wurde.
    Auch über die `onaddtrack`-Eigenschaft verfügbar.
- [`change`](/de/docs/Web/API/TextTrackList/change_event)
  - : Wird ausgelöst, wenn eine Textspur aktiv oder inaktiv gemacht wird.
    Auch über die `onchange`-Eigenschaft verfügbar.
- [`removetrack`](/de/docs/Web/API/TextTrackList/removetrack_event)
  - : Wird ausgelöst, wenn eine neue Textspur aus dem Medienelement entfernt wurde.
    Auch über die `onremovetrack`-Eigenschaft verfügbar.

## Anwendungshinweise

Zusätzlich zur Möglichkeit, direkten Zugriff auf die auf einem Medienelement vorhandenen Textspuren zu erhalten, ermöglicht `TextTrackList` das Setzen von Ereignishandlern für die Ereignisse [`addtrack`](/de/docs/Web/API/TextTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/TextTrackList/removetrack_event), sodass Sie erkennen können, wenn Spuren zum oder vom Stream des Medienelements hinzugefügt oder entfernt werden.

## Beispiele

### Abrufen der Textspurenliste eines Videoelements

Um die `TextTrackList` eines Medienelements zu erhalten, verwenden Sie die [`textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)-Eigenschaft.

```js
const textTracks = document.querySelector("video").textTracks;
```

### Überwachung von Spurenzahlenänderungen

In diesem Beispiel haben wir eine App, die Informationen über die Anzahl der verfügbaren Kanäle anzeigt. Um sie auf dem neuesten Stand zu halten, werden Handler für die Ereignisse [`addtrack`](/de/docs/Web/API/TextTrackList/addtrack_event) und [`removetrack`](/de/docs/Web/API/TextTrackList/removetrack_event) eingerichtet.

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
