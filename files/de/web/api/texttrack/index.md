---
title: TextTrack
slug: Web/API/TextTrack
l10n:
  sourceCommit: e04f4a4a2cb4d0d445793858e257e0539d1d56b4
---

{{APIRef("WebVTT")}}

Das **`TextTrack`**-Interface der [WebVTT API](/de/docs/Web/API/WebVTT_API) repräsentiert eine Textspur, die einem Media-Element zugeordnet ist.

Ein Objekt dieses Typs besitzt die Liste von [`VTTCue`](/de/docs/Web/API/VTTCue)-Objekten, die zu verschiedenen Zeitpunkten über dem Video angezeigt werden.

`TextTrack`-Objekte können mit der Methode [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack) zu einem [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) hinzugefügt werden, was den gleichen Effekt hat wie das deklarative Hinzufügen von Textspuren mit {{htmlelement("track")}}-Elementen innerhalb eines {{htmlelement("video")}}- oder {{htmlelement("audio")}}-Elements. Die `TextTrack`-Objekte werden in einer [`TextTrackList`](/de/docs/Web/API/TextTrackList) gespeichert, die über die Eigenschaft [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) abgerufen werden kann.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`TextTrack.activeCues`](/de/docs/Web/API/TextTrack/activeCues) {{ReadOnlyInline}}
  - : Ein [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList)-Objekt, das die aktuell aktive Menge an Textspur-Cues auflistet. Spur-Cues sind aktiv, wenn die aktuelle Wiedergabeposition des Mediums zwischen den Start- und Endzeiten der Cues liegt. Für angezeigte Cues wie Untertitel sind die aktiven Cues also die derzeit angezeigten.
- [`TextTrack.cues`](/de/docs/Web/API/TextTrack/cues) {{ReadOnlyInline}}
  - : Eine [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList), die alle Cues der Spur enthält.
- [`TextTrack.id`](/de/docs/Web/API/TextTrack/id) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die die Spur identifiziert, falls vorhanden. Hat sie keine ID, dann ist dieser Wert eine leere Zeichenkette (`""`). Ist das `TextTrack` mit einem {{HTMLElement("track")}}-Element verknüpft, dann stimmt die ID der Spur mit der ID des Elements überein.
- [`TextTrack.inBandMetadataTrackDispatchType`](/de/docs/Web/API/TextTrack/inBandMetadataTrackDispatchType) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den In-Band-Metadaten-Track-Dispatch-Typ der Spur angibt.
- [`TextTrack.kind`](/de/docs/Web/API/TextTrack/kind) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die angibt, welche Art von Textspur das `TextTrack` beschreibt. Es muss einer der erlaubten Werte sein.
- [`TextTrack.label`](/de/docs/Web/API/TextTrack/label) {{ReadOnlyInline}}
  - : Eine menschenlesbare Zeichenkette, die das Etikett der Textspur enthält, falls vorhanden; ansonsten ist diese eine leere Zeichenkette (`""`). In diesem Fall sollte möglicherweise ein benutzerdefiniertes Etikett durch Ihren Code generiert werden, indem andere Attribute der Spur verwendet werden, falls das Etikett der Spur dem Benutzer angezeigt werden muss.
- [`TextTrack.language`](/de/docs/Web/API/TextTrack/language) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die die Textsprache angibt, in der der Inhalt der Textspur geschrieben ist. Der Wert muss dem in {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}} spezifizierten Format entsprechen, so wie das HTML-Attribut [`lang`](/de/docs/Web/HTML/Global_attributes#lang). Zum Beispiel kann dies `"en-US"` für amerikanisches Englisch oder `"pt-BR"` für brasilianisches Portugiesisch sein.
- [`TextTrack.mode`](/de/docs/Web/API/TextTrack/mode)
  - : Eine Zeichenkette, die den aktuellen Modus der Spur angibt, der einer der erlaubten Werte sein muss. Ändern dieses Eigenschaftswerts ändert den aktuellen Modus der Spur entsprechend. Der Standardwert ist `disabled`, es sei denn, das boolesche Attribut [`default`](/de/docs/Web/HTML/Element/track#default) des {{HTMLElement("track")}}-Elements ist auf `true` gesetzt — in diesem Fall ist der Standardmodus `showing`.
- [`sourceBuffer`](/de/docs/Web/API/TextTrack/sourceBuffer) {{ReadOnlyInline}}
  - : Der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer), der die Spur erstellt hat. Gibt `null` zurück, wenn die Spur nicht durch einen [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) erstellt wurde oder der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) aus dem Attribut [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) der übergeordneten Mediendatenquelle entfernt wurde.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

> [!NOTE]
> Das Interface [`TextTrackCue`](/de/docs/Web/API/TextTrackCue) ist eine abstrakte Klasse, die als Elternklasse für andere Cue-Interfaces wie [`VTTCue`](/de/docs/Web/API/VTTCue) dient. Daher wird beim Hinzufügen oder Entfernen eines Cues einer der Cue-Typen übergeben, die von `TextTrackCue` erben.

- [`TextTrack.addCue()`](/de/docs/Web/API/TextTrack/addCue)
  - : Fügt der Liste der Cues der Spur einen Cue hinzu (angegeben als ein [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Objekt).
- [`TextTrack.removeCue()`](/de/docs/Web/API/TextTrack/removeCue)
  - : Entfernt einen Cue (angegeben als ein [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Objekt) aus der Liste der Cues der Spur.

## Ereignisse

- [`cuechange`](/de/docs/Web/API/TextTrack/cuechange_event)
  - : Wird ausgelöst, wenn Cues betreten und verlassen werden. Ein bestimmter Text-Cue wird angezeigt, wenn der Cue betreten wird, und verschwindet, wenn der Cue verlassen wird.
    Auch über die Eigenschaft `oncuechange` verfügbar.

## Beispiel

Das folgende Beispiel fügt einem Video eine neue `TextTrack` hinzu und stellt es dann zur Anzeige ein, indem [`TextTrack.mode`](/de/docs/Web/API/TextTrack/mode) verwendet wird.

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
