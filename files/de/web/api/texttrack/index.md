---
title: TextTrack
slug: Web/API/TextTrack
l10n:
  sourceCommit: e04f4a4a2cb4d0d445793858e257e0539d1d56b4
---

{{APIRef("WebVTT")}}

Die **`TextTrack`**-Schnittstelle der [WebVTT-API](/de/docs/Web/API/WebVTT_API) repräsentiert einen Text-Track, der mit einem Media-Element assoziiert ist.

Ein Objekt dieses Typs besitzt die Liste von {{domxref("VTTCue")}}-Objekten, die zu verschiedenen Zeitpunkten über das Video angezeigt werden.

`TextTrack`-Objekte können einem {{domxref("HTMLVideoElement")}} oder {{domxref("HTMLAudioElement")}}-Element mithilfe der {{domxref("HTMLMediaElement.addTextTrack()")}}-Methode hinzugefügt werden, was den gleichen Effekt hat wie das deklarative Hinzufügen von Text-Tracks mit {{htmlelement("track")}}-Elementen innerhalb eines {{htmlelement("video")}}- oder {{htmlelement("audio")}}-Elements. Die `TextTrack`-Objekte werden in einer {{domxref("TextTrackList")}} gespeichert, die über die {{domxref("HTMLMediaElement.textTracks")}}-Eigenschaft abgerufen werden kann.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von {{domxref("EventTarget")}}._

- {{domxref("TextTrack.activeCues")}} {{ReadOnlyInline}}
  - : Ein {{domxref("TextTrackCueList")}}-Objekt, das die aktuell aktive Menge von Text-Track-Cues auflistet. Track-Cues sind aktiv, wenn die aktuelle Wiedergabeposition des Mediums zwischen den Start- und Endzeiten der Cues liegt. Bei angezeigten Cues wie Untertiteln oder Kommentaren werden die aktiven Cues derzeit angezeigt.
- {{domxref("TextTrack.cues")}} {{ReadOnlyInline}}
  - : Ein {{domxref("TextTrackCueList")}}, das alle Cues des Tracks enthält.
- {{domxref("TextTrack.id")}} {{ReadOnlyInline}}
  - : Eine Zeichenkette, die den Track identifiziert, sofern er eine hat. Wenn er keine ID hat, ist dieser Wert eine leere Zeichenkette (`""`). Wenn der `TextTrack` mit einem {{HTMLElement("track")}}-Element verknüpft ist, stimmt die ID des Tracks mit der ID des Elements überein.
- {{domxref("TextTrack.inBandMetadataTrackDispatchType")}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den In-Band-Metadaten-Track-Dispatch-Typ des Tracks angibt.
- {{domxref("TextTrack.kind")}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die angibt, welche Art von Text-Track der `TextTrack` beschreibt. Es muss einer der erlaubten Werte sein.
- {{domxref("TextTrack.label")}} {{ReadOnlyInline}}
  - : Eine menschenlesbare Zeichenkette, die das Label des Text-Tracks enthält, falls vorhanden; andernfalls ist dies eine leere Zeichenkette (`""`), in welchem Fall ein benutzerdefiniertes Label durch Ihren Code mit Hilfe anderer Attribute des Tracks generiert werden muss, wenn das Label des Tracks dem Benutzer angezeigt werden soll.
- {{domxref("TextTrack.language")}} {{ReadOnlyInline}}
  - : Eine Zeichenkette, die die Textsprache angibt, in der der Inhalt des Text-Tracks geschrieben ist. Der Wert muss dem im {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} festgelegten Format folgen, genau wie das HTML-Attribut [`lang`](/de/docs/Web/HTML/Global_attributes#lang). Beispielweise kann dies `"en-US"` für US-amerikanisches Englisch oder `"pt-BR"` für brasilianisches Portugiesisch sein.
- {{domxref("TextTrack.mode")}}
  - : Eine Zeichenkette, die den aktuellen Modus des Tracks angibt, der einer der erlaubten Werte sein muss. Eine Änderung des Wertes dieser Eigenschaft ändert den aktuellen Modus des Tracks entsprechend. Der Standardwert ist `disabled`, es sei denn, das boolesche Attribut [`default`](/de/docs/Web/HTML/Element/track#default) des {{HTMLElement("track")}}-Elements ist auf `true` gesetzt — in diesem Fall ist der Standardmodus `showing`.
- {{domxref("TextTrack.sourceBuffer", "sourceBuffer")}} {{ReadOnlyInline}}
  - : Der {{domxref("SourceBuffer")}}, der den Track erstellt hat. Gibt null zurück, wenn der Track nicht von einem {{domxref("SourceBuffer")}} erstellt wurde oder der {{domxref("SourceBuffer")}} aus dem {{domxref("MediaSource.sourceBuffers")}}-Attribut der übergeordneten Media-Quelle entfernt wurde.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von {{domxref("EventTarget")}}._

> [!NOTE]
> Die {{domxref("TextTrackCue")}}-Schnittstelle ist eine abstrakte Klasse, die als Elternklasse für andere Cue-Schnittstellen wie {{domxref("VTTCue")}} dient. Wenn Sie also einen Cue hinzufügen oder entfernen, übergeben Sie einen der Cue-Typen, die von `TextTrackCue` erben.

- {{domxref("TextTrack.addCue()")}}
  - : Fügt dem Cue-Track eine Cue (spezifiziert als {{domxref("TextTrackCue")}}-Objekt) hinzu.
- {{domxref("TextTrack.removeCue()")}}
  - : Entfernt eine Cue (spezifiziert als {{domxref("TextTrackCue")}}-Objekt) aus der Liste der Cues des Tracks.

## Ereignisse

- [`cuechange`](/de/docs/Web/API/TextTrack/cuechange_event)
  - : Wird ausgelöst, wenn Cues ein- und ausgeblendet werden. Ein bestimmter Text-Cue erscheint, wenn der Cue aktiviert wird und verschwindet, wenn der Cue deaktiviert wird.
    Wird auch über die `oncuechange`-Eigenschaft verfügbar gemacht.

## Beispiel

Das folgende Beispiel fügt einem Video einen neuen `TextTrack` hinzu und stellt dann die Darstellung mit {{domxref("TextTrack.mode")}} ein.

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
- {{domxref("TextTrackCueList")}}
- {{domxref("VTTCue")}}
- {{HTMLElement("track")}}
- {{domxref("HTMLTrackElement")}}
