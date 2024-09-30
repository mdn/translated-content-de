---
title: AudioTrack
slug: Web/API/AudioTrack
l10n:
  sourceCommit: fa1301aead2cee37516b7ad5a5ec2fb21e004227
---

{{APIRef("HTML DOM")}}

Das **`AudioTrack`**-Interface repräsentiert einen einzelnen Audiotrack von einem der HTML-Medienelemente, {{HTMLElement("audio")}} oder {{HTMLElement("video")}}.

Die häufigste Verwendung zum Zugriff auf ein `AudioTrack`-Objekt besteht darin, seine [`enabled`](/de/docs/Web/API/AudioTrack/enabled)-Eigenschaft umzuschalten, um den Track stumm zu schalten oder die Stummschaltung aufzuheben.

## Instanz-Eigenschaften

- [`enabled`](/de/docs/Web/API/AudioTrack/enabled)
  - : Ein Boolescher Wert, der steuert, ob der Audiotrack aktiviert ist oder nicht. Wenn dieser Wert auf `false` gesetzt wird, wird der Ton des Tracks stummgeschaltet.
- [`id`](/de/docs/Web/API/AudioTrack/id) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die den Track innerhalb der Medien eindeutig identifiziert. Diese ID kann verwendet werden, um einen spezifischen Track innerhalb einer Audiotrackliste zu lokalisieren, indem [`AudioTrackList.getTrackById()`](/de/docs/Web/API/AudioTrackList/getTrackById) aufgerufen wird. Die ID kann auch als Fragmentteil der URL verwendet werden, wenn das Medium laut der [Media Fragments URI-Spezifikation](https://www.w3.org/TR/media-frags/) das Suchen nach Medienfragmenten unterstützt.
- [`kind`](/de/docs/Web/API/AudioTrack/kind) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die die Kategorie angibt, in die der Track fällt. Beispielsweise hätte der Hauptaudiotrack `kind` den Wert `"main"`.
- [`label`](/de/docs/Web/API/AudioTrack/label) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die eine für Menschen lesbare Bezeichnung für den Track bereitstellt. Beispielsweise könnte ein Audiokommentar-Track für einen Film ein `label` mit dem Wert `"Kommentar mit Regisseur John Q. Public und den Schauspielern John Doe und Jane Eod."` haben. Diese Zeichenkette ist leer, wenn keine Bezeichnung angegeben wird.
- [`language`](/de/docs/Web/API/AudioTrack/language) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die die Primärsprache des Audiotracks angibt, oder eine leere Zeichenkette, wenn unbekannt. Die Sprache wird als BCP 47 ({{RFC(5646)}}) Sprachcode angegeben, wie `"en-US"` oder `"pt-BR"`.
- [`sourceBuffer`](/de/docs/Web/API/AudioTrack/sourceBuffer) {{ReadOnlyInline}}
  - : Der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer), der den Track erstellt hat. Gibt null zurück, wenn der Track nicht von einem [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) erstellt wurde oder der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) aus dem [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers)-Attribut seiner übergeordneten Medienquelle entfernt wurde.

## Nutzungshinweise

Um ein `AudioTrack` für ein bestimmtes Medienelement zu erhalten, verwenden Sie die [`audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)-Eigenschaft des Elements, die ein [`AudioTrackList`](/de/docs/Web/API/AudioTrackList)-Objekt zurückgibt, aus dem Sie die einzelnen Tracks, die im Medium enthalten sind, abrufen können:

```js
const el = document.querySelector("video");
const tracks = el.audioTracks;
```

Sie können dann auf die einzelnen Tracks des Mediums entweder mit Array-Syntax oder Funktionen wie {{jsxref("Array.forEach", "forEach()")}} zugreifen.

Dieses erste Beispiel erhält den ersten Audiotrack des Mediums:

```js
const firstTrack = tracks[0];
```

Das nächste Beispiel durchsucht alle Audiotracks des Mediums, aktiviert diejenigen, die in der vom Benutzer bevorzugten Sprache sind (aus einer Variablen `userLanguage` übernommen) und deaktiviert alle anderen.

```js
tracks.forEach((track) => {
  track.enabled = track.language === userLanguage;
});
```

Die [`language`](/de/docs/Web/API/AudioTrack/language) ist im standardmäßigen ({{RFC(5646)}}) Format. Für US-Englisch wäre dies beispielsweise `"en-US"`.

## Beispiel

Siehe [`AudioTrack.label`](/de/docs/Web/API/AudioTrack/label#examples) für ein einfaches Beispiel, das zeigt, wie man ein Array von Track-Arten und Bezeichnungen für ein bestimmtes Medienelement erhält, gefiltert nach Art.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
