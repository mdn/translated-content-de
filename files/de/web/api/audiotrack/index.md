---
title: AudioTrack
slug: Web/API/AudioTrack
l10n:
  sourceCommit: fa1301aead2cee37516b7ad5a5ec2fb21e004227
---

{{APIRef("HTML DOM")}}

Das **`AudioTrack`**-Interface repräsentiert einen einzelnen Audiotrack aus einem der HTML-Medienelemente, {{HTMLElement("audio")}} oder {{HTMLElement("video")}}.

Die häufigste Verwendung eines `AudioTrack`-Objekts besteht darin, seine [`enabled`](/de/docs/Web/API/AudioTrack/enabled)-Eigenschaft zu ändern, um den Track stumm zu schalten oder die Stummschaltung aufzuheben.

## Instanz-Eigenschaften

- [`enabled`](/de/docs/Web/API/AudioTrack/enabled)
  - : Ein Boolean-Wert, der steuert, ob der Sound des Audiotracks aktiviert ist oder nicht. Wenn dieser Wert auf `false` gesetzt wird, wird der Sound des Tracks stummgeschaltet.
- [`id`](/de/docs/Web/API/AudioTrack/id) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die den Track innerhalb des Mediums eindeutig identifiziert. Diese ID kann verwendet werden, um einen bestimmten Track innerhalb einer Audio-Track-Liste zu finden, indem [`AudioTrackList.getTrackById()`](/de/docs/Web/API/AudioTrackList/getTrackById) aufgerufen wird. Die ID kann auch als Fragement-Teil der URL verwendet werden, wenn das Medium das Suchen mittels Medienfragment gemäß der [Media Fragments URI specification](https://www.w3.org/TR/media-frags/) unterstützt.
- [`kind`](/de/docs/Web/API/AudioTrack/kind) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die die Kategorie beschreibt, in die der Track fällt. Beispielsweise würde der Haupt-Audiotrack einen `kind` von `"main"` haben.
- [`label`](/de/docs/Web/API/AudioTrack/label) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die eine menschenlesbare Bezeichnung für den Track liefert. Beispielsweise könnte ein Audiokommentar-Track für einen Film ein `label` von `"Commentary with director John Q. Public and actors John Doe and Jane Eod."` haben. Diese Zeichenfolge ist leer, wenn kein Label angegeben ist.
- [`language`](/de/docs/Web/API/AudioTrack/language) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die die Hauptsprache des Audiotracks angibt, oder ein leerer String, wenn unbekannt. Die Sprache ist als BCP 47 ({{RFC(5646)}}) Sprachcode angegeben, wie `"en-US"` oder `"pt-BR"`.
- [`sourceBuffer`](/de/docs/Web/API/AudioTrack/sourceBuffer) {{ReadOnlyInline}}
  - : Der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer), der den Track erstellt hat. Gibt null zurück, wenn der Track nicht von einem [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) erstellt wurde oder der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) aus dem [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers)-Attribut seiner übergeordneten Medienquelle entfernt wurde.

## Verwendungshinweise

Um einen `AudioTrack` für ein gegebenes Medienelement zu erhalten, verwenden Sie die [`audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)-Eigenschaft des Elements, welche ein [`AudioTrackList`](/de/docs/Web/API/AudioTrackList)-Objekt zurückgibt, aus dem Sie die einzelnen in den Medien enthaltenen Tracks erhalten können:

```js
const el = document.querySelector("video");
const tracks = el.audioTracks;
```

Sie können dann auf die einzelnen Tracks der Medien entweder mit der Array-Syntax oder mit Funktionen wie {{jsxref("Array.forEach", "forEach()")}} zugreifen.

Dieses erste Beispiel erhält den ersten Audiotrack des Mediums:

```js
const firstTrack = tracks[0];
```

Das nächste Beispiel durchsucht alle Audiotracks des Mediums und aktiviert alle, die in der bevorzugten Sprache des Benutzers (abgeleitet von einer Variablen `userLanguage`) sind, und deaktiviert alle anderen.

```js
tracks.forEach((track) => {
  track.enabled = track.language === userLanguage;
});
```

Die [`language`](/de/docs/Web/API/AudioTrack/language) ist im standardisierten ({{RFC(5646)}}) Format. Für US-Englisch wäre dies beispielsweise `"en-US"`.

## Beispiel

Siehe [`AudioTrack.label`](/de/docs/Web/API/AudioTrack/label#examples) für ein einfaches Beispiel, das zeigt, wie man ein Array von Track-Typen und Labels für ein angegebenes Medienelement, gefiltert nach Art, erhält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
