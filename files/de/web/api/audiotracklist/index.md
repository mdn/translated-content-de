---
title: AudioTrackList
slug: Web/API/AudioTrackList
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("HTML DOM")}}

Die **`AudioTrackList`**-Schnittstelle wird verwendet, um eine Liste der Audiospuren darzustellen, die in einem bestimmten HTML-Medienelement enthalten sind, wobei jede Spur durch ein separates {{domxref("AudioTrack")}}-Objekt in der Liste repräsentiert wird.

Holen Sie sich eine Instanz dieses Objekts mit {{domxref('HTMLMediaElement.audioTracks')}}. Die einzelnen Spuren können mit Array-Syntax zugegriffen werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle {{domxref("EventTarget")}}._

- {{domxref("AudioTrackList.length", "length")}} {{ReadOnlyInline}}
  - : Die Anzahl der Spuren in der Liste.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihrer übergeordneten Schnittstelle {{domxref("EventTarget")}}._

- {{domxref("AudioTrackList.getTrackById", "getTrackById()")}}
  - : Gibt die {{domxref("AudioTrack")}} zurück, die in der `AudioTrackList` gefunden wurde und deren {{domxref("AudioTrack.id", "id")}} mit dem angegebenen String übereinstimmt. Wenn keine Übereinstimmung gefunden wird, wird `null` zurückgegeben.

## Ereignisse

- [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event)
  - : Wird ausgelöst, wenn eine neue Audiospur zum Medienelement hinzugefügt wurde.
- [`change`](/de/docs/Web/API/AudioTrackList/change_event)
  - : Wird ausgelöst, wenn eine Spur aktiviert oder deaktiviert wurde.
- [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event)
  - : Wird ausgelöst, wenn eine neue Audiospur aus dem Medienelement entfernt wurde.

## Nutzungshinweise

Zusätzlich zur Möglichkeit, direkten Zugriff auf die im Medienelement vorhandenen Audiospuren zu erhalten, können Sie mit `AudioTrackList` Ereignishandler auf die Ereignisse {{domxref("AudioTrackList/addtrack_event", "addtrack")}} und {{domxref("AudioTrackList/removetrack_event", "removetrack")}} setzen, sodass Sie erkennen können, wann Spuren zum oder vom Stream des Medienelements hinzugefügt beziehungsweise entfernt werden. Siehe die Ereignisse {{domxref("AudioTrackList/addtrack_event", "addtrack")}} und {{domxref("AudioTrackList/removetrack_event", "removetrack")}} für Details und Beispiele.

## Beispiele

### Erhalten der Audiospurliste eines Medienelements

Um die `AudioTrackList` eines Medienelements zu erhalten, verwenden Sie die {{domxref("HTMLMediaElement.audioTracks", "audioTracks")}}-Eigenschaft.

```js
const audioTracks = document.querySelector("video").audioTracks;
```

### Überwachen von Spurzähleränderungen

In diesem Beispiel haben wir eine App, die Informationen über die Anzahl der verfügbaren Kanäle anzeigt. Um sie aktuell zu halten, werden Handler für die Ereignisse {{domxref("AudioTrackList/addtrack_event", "addtrack")}} und {{domxref("AudioTrackList/removetrack_event", "removetrack")}} eingerichtet.

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
