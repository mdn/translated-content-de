---
title: AudioTrack
slug: Web/API/AudioTrack
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("HTML DOM")}}

Das **`AudioTrack`**-Interface repräsentiert einen einzelnen Audiotrack von einem der HTML-Medienelemente, {{HTMLElement("audio")}} oder {{HTMLElement("video")}}.

Der häufigste Verwendungszweck für den Zugriff auf ein `AudioTrack`-Objekt besteht darin, seine [`enabled`](/de/docs/Web/API/AudioTrack/enabled)-Eigenschaft zu ändern, um den Track stummzuschalten oder die Stummschaltung aufzuheben.

## Instanz-Eigenschaften

- [`enabled`](/de/docs/Web/API/AudioTrack/enabled)
  - : Ein boolescher Wert, der steuert, ob der Ton des Audiotracks aktiviert ist oder nicht. Wenn dieser Wert auf `false` gesetzt wird, wird der Ton des Tracks stummgeschaltet.
- [`id`](/de/docs/Web/API/AudioTrack/id) {{ReadOnlyInline}}
  - : Ein String, der den Track innerhalb der Medien eindeutig identifiziert. Diese ID kann verwendet werden, um einen bestimmten Track in einer Audiotrack-Liste zu finden, indem [`AudioTrackList.getTrackById()`](/de/docs/Web/API/AudioTrackList/getTrackById) aufgerufen wird. Die ID kann auch als Fragmentteil der URL verwendet werden, wenn die Medien das Suchen durch Medienfragmente gemäß der [Media Fragments URI-Spezifikation](https://www.w3.org/TR/media-frags/) unterstützen.
- [`kind`](/de/docs/Web/API/AudioTrack/kind) {{ReadOnlyInline}}
  - : Ein String, der die Kategorie angibt, in die der Track fällt. Zum Beispiel hätte der Hauptaudiotrack einen `kind` von `"main"`.
- [`label`](/de/docs/Web/API/AudioTrack/label) {{ReadOnlyInline}}
  - : Ein humanlesbarer String für den Track. Beispielsweise könnte ein Audiokommentartrack für einen Film ein `label` von `"Kommentar mit Regisseur Christopher Nolan und den Schauspielern Leonardo DiCaprio und Elliot Page."` haben. Dieser String ist leer, wenn kein Label angegeben ist.
- [`language`](/de/docs/Web/API/AudioTrack/language) {{ReadOnlyInline}}
  - : Ein String, der die Hauptsprache des Audiotracks angibt, oder ein leerer String, wenn unbekannt. Die Sprache wird als {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}} angegeben, wie `"en-US"` oder `"pt-BR"`.
- [`sourceBuffer`](/de/docs/Web/API/AudioTrack/sourceBuffer) {{ReadOnlyInline}}
  - : Der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer), der den Track erstellt hat. Gibt null zurück, wenn der Track nicht von einem [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) erstellt wurde oder der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) aus dem [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers)-Attribut seiner übergeordneten Medienquelle entfernt wurde.

## Verwendungshinweise

Um ein `AudioTrack` für ein gegebenes Medienelement zu erhalten, verwenden Sie die [`audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)-Eigenschaft des Elements, die ein [`AudioTrackList`](/de/docs/Web/API/AudioTrackList)-Objekt zurückgibt, aus dem Sie die einzelnen Tracks der Medien erhalten können:

```js
const el = document.querySelector("video");
const tracks = el.audioTracks;
```

Sie können dann auf die einzelnen Tracks der Medien entweder mit Array-Syntax oder mit Funktionen wie {{jsxref("Array.forEach", "forEach()")}} zugreifen.

Dieses erste Beispiel erhält den ersten Audiotrack der Medien:

```js
const firstTrack = tracks[0];
```

Das nächste Beispiel durchsucht alle Audiotracks der Medien, aktiviert alle, die in der bevorzugten Sprache des Benutzers sind (übernommen aus einer Variablen `userLanguage`), und deaktiviert alle anderen.

```js
tracks.forEach((track) => {
  track.enabled = track.language === userLanguage;
});
```

Die [`language`](/de/docs/Web/API/AudioTrack/language) wird als ein gültiges {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}} angegeben, zum Beispiel `"en-US"` für amerikanisches Englisch.

## Beispiel

Siehe [`AudioTrack.label`](/de/docs/Web/API/AudioTrack/label#examples) für ein Beispiel, das zeigt, wie man ein Array von Track-Arten und Labels für ein bestimmtes Medienelement erhält, gefiltert nach Art.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
