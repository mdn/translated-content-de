---
title: TextTrack
slug: Web/API/TextTrack
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("WebVTT")}}

Das **`TextTrack`**-Interface der [WebVTT API](/de/docs/Web/API/WebVTT_API) repräsentiert eine Textspur, die mit einem Medienelement verknüpft ist.

Ein Objekt dieses Typs enthält die Liste von [`VTTCue`](/de/docs/Web/API/VTTCue)-Objekten, die zu verschiedenen Zeitpunkten über dem Video angezeigt werden.

`TextTrack`-Objekte können einem [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) oder [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) Element mithilfe der Methode [`HTMLMediaElement.addTextTrack()`](/de/docs/Web/API/HTMLMediaElement/addTextTrack) hinzugefügt werden, was den gleichen Effekt hat wie das deklarative Hinzufügen von Textspuren durch Verwendung von {{htmlelement("track")}}-Elementen innerhalb eines {{htmlelement("video")}}- oder {{htmlelement("audio")}}-Elements. Die `TextTrack`-Objekte werden in einer [`TextTrackList`](/de/docs/Web/API/TextTrackList) gespeichert, die über die Eigenschaft [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) abgerufen werden kann.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`TextTrack.activeCues`](/de/docs/Web/API/TextTrack/activeCues) {{ReadOnlyInline}}
  - : Ein [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList)-Objekt, das die aktuell aktiven Textspurkriterien auflistet. Spur-Kriterien sind aktiv, wenn die aktuelle Wiedergabeposition des Mediums zwischen den Start- und Endzeiten der Kriterien liegt. Für angezeigte Kriterien wie Untertitel oder Untertitelungen werden die aktiven Kriterien derzeit angezeigt.
- [`TextTrack.cues`](/de/docs/Web/API/TextTrack/cues) {{ReadOnlyInline}}
  - : Eine [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList), die alle Kriterien der Spur enthält.
- [`TextTrack.id`](/de/docs/Web/API/TextTrack/id) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die die Spur identifiziert, falls sie eine besitzt. Wenn sie keine ID besitzt, ist dieser Wert eine leere Zeichenkette (`""`). Wenn das `TextTrack` mit einem {{HTMLElement("track")}}-Element verknüpft ist, stimmt die Spur-ID mit der ID des Elements überein.
- [`TextTrack.inBandMetadataTrackDispatchType`](/de/docs/Web/API/TextTrack/inBandMetadataTrackDispatchType) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den In-Band-Metadaten-Spurdispatch-Typ der Spur angibt.
- [`TextTrack.kind`](/de/docs/Web/API/TextTrack/kind) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die die Art der Textspur beschreibt, die das `TextTrack` darstellt. Es muss einer der zulässigen Werte sein.
- [`TextTrack.label`](/de/docs/Web/API/TextTrack/label) {{ReadOnlyInline}}
  - : Eine menschenlesbare Zeichenkette, die das Label der Textspur enthält, falls vorhanden; ansonsten ist dies eine leere Zeichenkette (`""`), in welchem Fall möglicherweise ein benutzerdefiniertes Label von Ihrem Code unter Verwendung anderer Attribute der Spur generiert werden muss, falls das Label der Spur dem Benutzer angezeigt werden muss.
- [`TextTrack.language`](/de/docs/Web/API/TextTrack/language) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die die Sprache angibt, in der der Inhalt der Textspur verfasst ist. Der Wert muss dem in {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}} spezifizierten Format entsprechen, genauso wie das HTML-[`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut. Zum Beispiel kann dies `"en-US"` für US-Englisch oder `"pt-BR"` für brasilianisches Portugiesisch sein.
- [`TextTrack.mode`](/de/docs/Web/API/TextTrack/mode)
  - : Eine Zeichenkette, die den aktuellen Modus der Spur angibt, der einer der zulässigen Werte sein muss. Die Änderung des Wertes dieser Eigenschaft ändert den aktuellen Modus der Spur entsprechend. Der Standardwert ist `disabled`, es sei denn, das [`default`](/de/docs/Web/HTML/Reference/Elements/track#default)-Boolean-Attribut des {{HTMLElement("track")}}-Elements ist auf `true` gesetzt — in diesem Fall ist der Standardmodus `showing`.
- [`sourceBuffer`](/de/docs/Web/API/TextTrack/sourceBuffer) {{ReadOnlyInline}}
  - : Der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer), der die Spur erstellt hat. Gibt `null` zurück, wenn die Spur nicht von einem [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) erstellt wurde oder wenn der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) aus dem [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers)-Attribut seiner übergeordneten Medienquelle entfernt wurde.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

> [!NOTE]
> Das Interface [`TextTrackCue`](/de/docs/Web/API/TextTrackCue) ist eine abstrakte Klasse, die als Elternteil für andere Kriterien-Interfaces wie [`VTTCue`](/de/docs/Web/API/VTTCue) dient. Daher werden bei der Hinzufügung oder Entfernung eines Kriteriums eine der Kriterienarten übergeben, die von `TextTrackCue` erben.

- [`TextTrack.addCue()`](/de/docs/Web/API/TextTrack/addCue)
  - : Fügt ein Kriterium (als [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Objekt angegeben) zur Liste der Kriterien der Spur hinzu.
- [`TextTrack.removeCue()`](/de/docs/Web/API/TextTrack/removeCue)
  - : Entfernt ein Kriterium (als [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Objekt angegeben) aus der Liste der Kriterien der Spur.

## Ereignisse

- [`cuechange`](/de/docs/Web/API/TextTrack/cuechange_event)
  - : Wird ausgelöst, wenn Kriterien betreten und verlassen werden. Ein bestimmtes Text-Kriterium erscheint, wenn das Kriterium betreten wird, und verschwindet, wenn das Kriterium verlassen wird. Auch über die `oncuechange`-Eigenschaft verfügbar.

## Beispiel

Das folgende Beispiel fügt einem Video eine neue `TextTrack`-Spur hinzu und stellt sie dann zur Anzeige über [`TextTrack.mode`](/de/docs/Web/API/TextTrack/mode) ein.

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
