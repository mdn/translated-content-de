---
title: TextTrack
slug: Web/API/TextTrack
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{APIRef("WebVTT")}}

Das **`TextTrack`**-Interface der [WebVTT-API](/de/docs/Web/API/WebVTT_API) repräsentiert eine Textspur, die mit einem Medienelement verknüpft ist.

Ein Objekt dieses Typs besitzt die Liste von [`VTTCue`](/de/docs/Web/API/VTTCue)-Objekten, die zu verschiedenen Zeitpunkten über dem Video angezeigt werden.

`TextTrack`-Objekte können einem [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) mithilfe der [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack)-Methode hinzugefügt werden, was den gleichen Effekt hat wie das deklarative Hinzufügen von Textspuren mit {{htmlelement("track")}}-Elementen innerhalb eines {{htmlelement("video")}} oder {{htmlelement("audio")}}-Elements. Die `TextTrack`-Objekte werden in einer [`TextTrackList`](/de/docs/Web/API/TextTrackList) gespeichert, die über die [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks)-Eigenschaft abgerufen werden kann.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`TextTrack.activeCues`](/de/docs/Web/API/TextTrack/activeCues) {{ReadOnlyInline}}
  - : Ein [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList)-Objekt, das die aktuell aktive Menge von Texttrack-Hinweisen auflistet. Track-Hinweise sind aktiv, wenn die aktuelle Wiedergabeposition des Mediums zwischen den Start- und Endzeiten der Hinweise liegt. Daher werden für angezeigte Hinweise wie Untertitel oder Bildunterschriften die aktiven Hinweise derzeit angezeigt.
- [`TextTrack.cues`](/de/docs/Web/API/TextTrack/cues) {{ReadOnlyInline}}
  - : Ein [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList), das alle Hinweise der Spur enthält.
- [`TextTrack.id`](/de/docs/Web/API/TextTrack/id) {{ReadOnlyInline}}
  - : Ein String, der die Spur identifiziert, falls sie eine hat. Wenn sie keine ID hat, ist dieser Wert ein leerer String (`""`). Falls das `TextTrack` mit einem {{HTMLElement("track")}}-Element verknüpft ist, stimmt die ID der Spur mit der ID des Elements überein.
- [`TextTrack.inBandMetadataTrackDispatchType`](/de/docs/Web/API/TextTrack/inBandMetadataTrackDispatchType) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den in-band Metadata Track Dispatch-Typ der Spur angibt.
- [`TextTrack.kind`](/de/docs/Web/API/TextTrack/kind) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der angibt, welche Art von Texttrack das `TextTrack` beschreibt. Es muss einer der erlaubten Werte sein.
- [`TextTrack.label`](/de/docs/Web/API/TextTrack/label) {{ReadOnlyInline}}
  - : Ein menschenlesbarer String, der die Bezeichnung der Textspur enthält, falls vorhanden; andernfalls ist dies ein leerer String (`""`), in welchem Fall ein benutzerdefiniertes Etikett von Ihrem Code unter Verwendung anderer Attribute der Spur generiert werden muss, falls das Etikett der Spur dem Benutzer angezeigt werden muss.
- [`TextTrack.language`](/de/docs/Web/API/TextTrack/language) {{ReadOnlyInline}}
  - : Ein String, der die Textsprache angibt, in der der Inhalt der Textspur geschrieben ist. Der Wert muss dem in {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}} angegebenen Format entsprechen, genau wie das HTML-Attribut [`lang`](/de/docs/Web/HTML/Global_attributes/lang). Zum Beispiel kann dies `"en-US"` für US-Englisch oder `"pt-BR"` für brasilianisches Portugiesisch sein.
- [`TextTrack.mode`](/de/docs/Web/API/TextTrack/mode)
  - : Ein String, der den aktuellen Modus der Spur angibt, der einer der erlaubten Werte sein muss. Wenn der Wert dieser Eigenschaft geändert wird, wird der aktuelle Modus der Spur entsprechend geändert. Standardmäßig ist er `disabled`, es sei denn, das [`default`](/de/docs/Web/HTML/Element/track#default)-boolesche Attribut des {{HTMLElement("track")}}-Elements ist auf `true` gesetzt — in diesem Fall ist der Standardmodus `showing`.
- [`sourceBuffer`](/de/docs/Web/API/TextTrack/sourceBuffer) {{ReadOnlyInline}}
  - : Der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer), der die Spur erstellt hat. Gibt `null` zurück, falls die Spur nicht von einem [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) erstellt wurde oder der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) aus den [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers)-Attributen seiner übergeordneten Medienquelle entfernt wurde.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

> [!NOTE]
> Das Interface [`TextTrackCue`](/de/docs/Web/API/TextTrackCue) ist eine abstrakte Klasse, die als Elternteil für andere Hinweis-Interfaces wie [`VTTCue`](/de/docs/Web/API/VTTCue) dient. Daher werden beim Hinzufügen oder Entfernen eines Hinweises einer der Hinweis-Typen übergeben, die von `TextTrackCue` erben.

- [`TextTrack.addCue()`](/de/docs/Web/API/TextTrack/addCue)
  - : Fügt der Liste der Hinweise der Spur einen Hinweis (spezifiziert als [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Objekt) hinzu.
- [`TextTrack.removeCue()`](/de/docs/Web/API/TextTrack/removeCue)
  - : Entfernt einen Hinweis (spezifiziert als [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Objekt) aus der Liste der Hinweise der Spur.

## Ereignisse

- [`cuechange`](/de/docs/Web/API/TextTrack/cuechange_event)
  - : Wird ausgelöst, wenn Hinweise betreten und verlassen werden. Ein bestimmter Text-Hinweis erscheint, wenn der Hinweis betreten wird und verschwindet, wenn der Hinweis verlassen wird.
    Auch verfügbar über die `oncuechange`-Eigenschaft.

## Beispiel

Das folgende Beispiel fügt einem Video eine neue `TextTrack`-Spur hinzu und stellt sie zur Anzeige mit [`TextTrack.mode`](/de/docs/Web/API/TextTrack/mode) ein.

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
