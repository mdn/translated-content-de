---
title: TextTrackList
slug: Web/API/TextTrackList
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{APIRef("HTML DOM")}}

Die **`TextTrackList`**-Schnittstelle wird verwendet, um eine Liste der für das zugehörige Video- oder Audioelement definierten Textspuren darzustellen, wobei jede Spur durch ein separates {{domxref("textTrack")}}-Objekt in der Liste repräsentiert wird.

Textspuren können einem Medienelement deklarativ mithilfe des {{HTMLElement("track")}}-Elements oder programmatisch mit der Methode {{domxref('HTMLMediaElement.addTextTrack()')}} hinzugefügt werden.

Eine Instanz dieses Objekts kann über die {{domxref('HTMLMediaElement.textTracks', 'textTracks')}}-Eigenschaft eines {{domxref('HTMLMediaElement')}}-Objekts abgerufen werden.

Für ein gegebenes {{domxref('HTMLMediaElement')}}-Objekt _media_ können die einzelnen Tracks mit folgenden Methoden aufgerufen werden:

- `media.TextTracks[n]`, um die n-te Textspur aus der Liste der Textspuren des Objekts zu erhalten
- die [`media.textTracks.getTrackById()`](/de/docs/Web/API/TextTrackList/getTrackById) Methode

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer Elternschnittstelle, {{domxref("EventTarget")}}._

- {{domxref("TextTrackList.length", "length")}} {{ReadOnlyInline}}
  - : Die Anzahl der Spuren in der Liste.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihrer Elternschnittstelle, {{domxref("EventTarget")}}._

- {{domxref("TextTrackList.getTrackById", "getTrackById()")}}
  - : Gibt die {{domxref("TextTrack")}} zurück, die innerhalb der `TextTrackList` gefunden wurde und deren {{domxref("TextTrack.id", "id")}} mit dem angegebenen String übereinstimmt. Wenn keine Übereinstimmung gefunden wird, wird `null` zurückgegeben.

## Ereignisse

- [`addtrack`](/de/docs/Web/API/TextTrackList/addtrack_event)
  - : Wird ausgelöst, wenn eine neue Textspur zum Medienelement hinzugefügt wurde.
    Auch über die `onaddtrack`-Eigenschaft verfügbar.
- [`change`](/de/docs/Web/API/TextTrackList/change_event)
  - : Wird ausgelöst, wenn eine Textspur aktiv oder inaktiv gemacht wurde.
    Auch über die `onchange`-Eigenschaft verfügbar.
- [`removetrack`](/de/docs/Web/API/TextTrackList/removetrack_event)
  - : Wird ausgelöst, wenn eine neue Textspur vom Medienelement entfernt wurde.
    Auch über die `onremovetrack`-Eigenschaft verfügbar.

## Anwendungshinweise

Zusätzlich zur direkten Zugänglichkeit der Textspuren auf einem Medienelement ermöglicht `TextTrackList` das Setzen von Ereignis-Handlern für die Ereignisse {{domxref("TextTrackList/addtrack_event", "addtrack")}} und {{domxref("TextTrackList/removetrack_event", "removetrack")}}, damit Sie erkennen können, wann Spuren zum oder vom Datenstrom des Medienelements hinzugefügt oder entfernt werden.

## Beispiele

### Abrufen der Textspurliste eines Videoelements

Um die `TextTrackList` eines Medienelements zu erhalten, verwenden Sie dessen {{domxref("HTMLMediaElement.textTracks", "textTracks")}}-Eigenschaft.

```js
const textTracks = document.querySelector("video").textTracks;
```

### Überwachen von Änderungen der Spuranzahl

In diesem Beispiel haben wir eine App, die Informationen über die Anzahl der verfügbaren Kanäle anzeigt. Um diese aktuell zu halten, werden Handler für die Ereignisse {{domxref("TextTrackList/addtrack_event", "addtrack")}} und {{domxref("TextTrackList/removetrack_event", "removetrack")}} eingerichtet.

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
