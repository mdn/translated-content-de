---
title: TextTrack
slug: Web/API/TextTrack
l10n:
  sourceCommit: e04f4a4a2cb4d0d445793858e257e0539d1d56b4
---

{{APIRef("WebVTT")}}

Das **`TextTrack`** Interface der [WebVTT API](/de/docs/Web/API/WebVTT_API) repräsentiert eine Textspur, die mit einem Medienelement verknüpft ist.

Ein Objekt dieses Typs besitzt die Liste der [`VTTCue`](/de/docs/Web/API/VTTCue)-Objekte, die zu verschiedenen Zeitpunkten über dem Video angezeigt werden.

`TextTrack`-Objekte können einem [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)-Element mit der Methode [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack) hinzugefügt werden, was denselben Effekt hat wie das deklarative Hinzufügen von Textspuren mithilfe von {{htmlelement("track")}}-Elementen innerhalb eines {{htmlelement("video")}} oder {{htmlelement("audio")}}-Elements. Die `TextTrack`-Objekte werden in einer [`TextTrackList`](/de/docs/Web/API/TextTrackList) gespeichert, die über die Eigenschaft [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) abgerufen werden kann.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`TextTrack.activeCues`](/de/docs/Web/API/TextTrack/activeCues) {{ReadOnlyInline}}
  - : Ein [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList)-Objekt, das die derzeit aktive Menge von Text-Spur-Hinweisen auflistet. Spurhinweise sind aktiv, wenn die aktuelle Wiedergabeposition des Mediums zwischen den Start- und Endzeiten der Hinweise liegt. Somit werden bei angezeigten Hinweisen wie Untertiteln die aktiven Hinweise derzeit angezeigt.
- [`TextTrack.cues`](/de/docs/Web/API/TextTrack/cues) {{ReadOnlyInline}}
  - : Eine [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList), die alle Hinweise der Spur enthält.
- [`TextTrack.id`](/de/docs/Web/API/TextTrack/id) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die die Spur identifiziert, falls sie eine hat. Wenn sie keine ID hat, ist dieser Wert eine leere Zeichenfolge (`""`). Wenn das `TextTrack` mit einem {{HTMLElement("track")}}-Element verknüpft ist, stimmt die ID der Spur mit der ID des Elements überein.
- [`TextTrack.inBandMetadataTrackDispatchType`](/de/docs/Web/API/TextTrack/inBandMetadataTrackDispatchType) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die den In-Band-Metadatenspur-Dispatch-Typ der Spur angibt.
- [`TextTrack.kind`](/de/docs/Web/API/TextTrack/kind) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die angibt, um welche Art von Textspur es sich bei dem `TextTrack` handelt. Es muss einer der erlaubten Werte sein.
- [`TextTrack.label`](/de/docs/Web/API/TextTrack/label) {{ReadOnlyInline}}
  - : Eine lesbare Zeichenfolge, die das Label der Textspur enthält, sofern vorhanden; andernfalls ist dies eine leere Zeichenfolge (`""`). In diesem Fall muss möglicherweise ein benutzerdefiniertes Label vom Code generiert werden, indem andere Attribute der Spur verwendet werden, wenn das Label der Spur dem Benutzer angezeigt werden soll.
- [`TextTrack.language`](/de/docs/Web/API/TextTrack/language) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die die Textsprache angibt, in der der Inhalt der Textspur geschrieben ist. Der Wert muss dem in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} spezifizierten Format entsprechen, genau wie das HTML-Attribut [`lang`](/de/docs/Web/HTML/Global_attributes#lang). Zum Beispiel kann dies `"en-US"` für amerikanisches Englisch oder `"pt-BR"` für brasilianisches Portugiesisch sein.
- [`TextTrack.mode`](/de/docs/Web/API/TextTrack/mode)
  - : Eine Zeichenfolge, die den aktuellen Modus der Spur angibt, der einer der erlaubten Werte sein muss. Wenn der Wert dieser Eigenschaft geändert wird, ändert sich der aktuelle Modus der Spur entsprechend. Der Standardwert ist `disabled`, es sei denn, das [`default`](/de/docs/Web/HTML/Element/track#default)-Attribut des {{HTMLElement("track")}}-Elements ist auf `true` gesetzt – in diesem Fall ist der Standardmodus `showing`.
- [`sourceBuffer`](/de/docs/Web/API/TextTrack/sourceBuffer) {{ReadOnlyInline}}
  - : Der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer), der die Spur erstellt hat. Gibt null zurück, wenn die Spur nicht von einem [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) erstellt wurde oder der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) aus den [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers)-Attributen der übergeordneten Medienelementquelle entfernt wurde.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

> [!NOTE]
> Das [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Interface ist eine abstrakte Klasse, die als Elternklasse für andere Cue-Interfaces wie [`VTTCue`](/de/docs/Web/API/VTTCue) dient. Daher wird beim Hinzufügen oder Entfernen eines Hinweis-Typs ein vererbter Typ von `TextTrackCue` übergeben.

- [`TextTrack.addCue()`](/de/docs/Web/API/TextTrack/addCue)
  - : Fügt der Liste der Hinweise der Spur einen Hinweis hinzu (spezifiziert als ein [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Objekt).
- [`TextTrack.removeCue()`](/de/docs/Web/API/TextTrack/removeCue)
  - : Entfernt einen Hinweis (spezifiziert als ein [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Objekt) aus der Liste der Hinweise der Spur.

## Ereignisse

- [`cuechange`](/de/docs/Web/API/TextTrack/cuechange_event)
  - : Wird ausgelöst, wenn Hinweise betreten und verlassen werden. Ein bestimmter Text-Hinweis erscheint, wenn der Hinweis betreten wird, und verschwindet, wenn der Hinweis verlassen wird.
    Ebenfalls verfügbar über die Eigenschaft `oncuechange`.

## Beispiel

Das folgende Beispiel fügt einem Video eine neue `TextTrack`-Spur hinzu und stellt sie dann mit [`TextTrack.mode`](/de/docs/Web/API/TextTrack/mode) auf Anzeige.

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
