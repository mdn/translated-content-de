---
title: TextTrack
slug: Web/API/TextTrack
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("WebVTT")}}

Das **`TextTrack`**-Interface der [WebVTT API](/de/docs/Web/API/WebVTT_API) repräsentiert eine Textspur, die mit einem Medienelement verknüpft ist.

Ein Objekt dieses Typs besitzt die Liste von [`VTTCue`](/de/docs/Web/API/VTTCue)-Objekten, die zu verschiedenen Zeitpunkten über dem Video angezeigt werden.

`TextTrack`-Objekte können einem [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)-Element hinzugefügt werden, indem die Methode [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack) verwendet wird. Dies hat den gleichen Effekt wie das deklarative Hinzufügen von Textspuren mit {{htmlelement("track")}}-Elementen innerhalb eines {{htmlelement("video")}}- oder {{htmlelement("audio")}}-Elements. Die `TextTrack`-Objekte werden in einer [`TextTrackList`](/de/docs/Web/API/TextTrackList) gespeichert, die über die Eigenschaft [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) abgerufen werden kann.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`TextTrack.activeCues`](/de/docs/Web/API/TextTrack/activeCues) {{ReadOnlyInline}}
  - : Ein [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList)-Objekt, das die aktuell aktive Menge von Texttrack-Cues auflistet. Track-Cues sind aktiv, wenn die aktuelle Wiedergabeposition des Mediums zwischen den Start- und Endzeiten der Cues liegt. Für angezeigte Cues wie Untertitel oder Beschriftungen werden die aktiven Cues derzeit angezeigt.
- [`TextTrack.cues`](/de/docs/Web/API/TextTrack/cues) {{ReadOnlyInline}}
  - : Eine [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList), die alle Cues der Spur enthält.
- [`TextTrack.id`](/de/docs/Web/API/TextTrack/id) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die die Spur identifiziert, falls sie eine hat. Falls sie keine ID hat, ist dieser Wert eine leere Zeichenkette (`""`). Wenn das `TextTrack` mit einem {{HTMLElement("track")}}-Element verknüpft ist, entspricht die ID der Spur der ID des Elements.
- [`TextTrack.inBandMetadataTrackDispatchType`](/de/docs/Web/API/TextTrack/inBandMetadataTrackDispatchType) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den In-Band-Metadaten-Spurdaten-Typ der Spur anzeigt.
- [`TextTrack.kind`](/de/docs/Web/API/TextTrack/kind) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die anzeigt, welche Art von Textspur das `TextTrack` beschreibt. Es muss einer der erlaubten Werte sein.
- [`TextTrack.label`](/de/docs/Web/API/TextTrack/label) {{ReadOnlyInline}}
  - : Eine menschenlesbare Zeichenkette, die das Label der Textspur enthält, falls vorhanden; andernfalls ist dies eine leere Zeichenkette (`""`). In diesem Fall muss möglicherweise ein benutzerdefiniertes Label von Ihrem Code generiert werden, indem andere Attribute der Spur verwendet werden, wenn das Label der Spur dem Benutzer angezeigt werden muss.
- [`TextTrack.language`](/de/docs/Web/API/TextTrack/language) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die die Sprache spezifiziert, in der der Inhalt der Textspur geschrieben ist. Der Wert muss ein gültiger {{Glossary("BCP_47_language_tag", "BCP 47-Sprachcode")}} sein, zum Beispiel `"en-US"` für Englisch (USA) oder `"pt-BR"` für brasilianisches Portugiesisch.
- [`TextTrack.mode`](/de/docs/Web/API/TextTrack/mode)
  - : Eine Zeichenkette, die den aktuellen Modus der Spur angibt, der einer der erlaubten Werte sein muss. Durch Ändern des Wertes dieser Eigenschaft wird der aktuelle Modus der Spur entsprechend angepasst. Der Standard ist `disabled`, es sei denn, das [`default`](/de/docs/Web/HTML/Reference/Elements/track#default)-Boolean-Attribut des {{HTMLElement("track")}}-Elements ist auf `true` gesetzt — in diesem Fall ist der Standardmodus `showing`.
- [`sourceBuffer`](/de/docs/Web/API/TextTrack/sourceBuffer) {{ReadOnlyInline}}
  - : Der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer), der die Spur erstellt hat. Gibt `null` zurück, wenn die Spur nicht von einem [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) erstellt wurde oder wenn der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) aus dem [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers)-Attribut seiner übergeordneten Medienquelle entfernt wurde.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

> [!NOTE]
> Das [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Interface ist eine abstrakte Klasse, die als Elternteil für andere Cue-Interfaces wie [`VTTCue`](/de/docs/Web/API/VTTCue) verwendet wird. Beim Hinzufügen oder Entfernen eines Cues wird daher einer der Cue-Typen, die von `TextTrackCue` erben, übergeben.

- [`TextTrack.addCue()`](/de/docs/Web/API/TextTrack/addCue)
  - : Fügt der Liste der Cues der Spur einen Cue hinzu (spezifiziert als [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Objekt).
- [`TextTrack.removeCue()`](/de/docs/Web/API/TextTrack/removeCue)
  - : Entfernt einen Cue (spezifiziert als [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Objekt) aus der Liste der Cues der Spur.

## Ereignisse

- [`cuechange`](/de/docs/Web/API/TextTrack/cuechange_event)
  - : Wird ausgelöst, wenn Cues einen- und wieder austreten. Ein bestimmter Text-Cue erscheint, wenn der Cue eintritt, und verschwindet, wenn der Cue austritt.
    Auch verfügbar über die `oncuechange`-Eigenschaft.

## Beispiel

Das folgende Beispiel fügt einem Video eine neue `TextTrack` hinzu und stellt dann die Anzeige mit [`TextTrack.mode`](/de/docs/Web/API/TextTrack/mode) ein.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVTT](/de/docs/Web/API/WebVTT_API)
- [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList)
- [`VTTCue`](/de/docs/Web/API/VTTCue)
- {{HTMLElement("track")}}
- [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)
