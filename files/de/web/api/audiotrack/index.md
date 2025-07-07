---
title: AudioTrack
slug: Web/API/AudioTrack
l10n:
  sourceCommit: 2d19a88d0cc560f031a07585bf57f005fec02670
---

{{APIRef("HTML DOM")}}

Das **`AudioTrack`**-Interface repräsentiert eine einzelne Audiospur von einem der HTML-Medienelemente, {{HTMLElement("audio")}} oder {{HTMLElement("video")}}.

Die häufigste Verwendung eines `AudioTrack`-Objekts besteht darin, seine [`enabled`](/de/docs/Web/API/AudioTrack/enabled)-Eigenschaft umzuschalten, um die Spur stummzuschalten oder die Stummschaltung aufzuheben.

## Instanz-Eigenschaften

- [`enabled`](/de/docs/Web/API/AudioTrack/enabled)
  - : Ein boolescher Wert, der steuert, ob der Ton der Audiospur aktiviert ist oder nicht. Wenn dieser Wert auf `false` gesetzt wird, wird der Ton der Spur stummgeschaltet.
- [`id`](/de/docs/Web/API/AudioTrack/id) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die die Spur innerhalb des Mediums eindeutig identifiziert. Diese ID kann verwendet werden, um eine bestimmte Spur innerhalb einer Audiotrackliste zu finden, indem [`AudioTrackList.getTrackById()`](/de/docs/Web/API/AudioTrackList/getTrackById) aufgerufen wird. Die ID kann auch als Fragmentteil der URL verwendet werden, wenn das Medium das Suchen anhand von Medienfragmenten gemäß der [Media Fragments URI-Spezifikation](https://www.w3.org/TR/media-frags/) unterstützt.
- [`kind`](/de/docs/Web/API/AudioTrack/kind) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die die Kategorie angibt, in die die Spur fällt. Beispielsweise hätte die hauptsächliche Audiospur einen `kind` von `"main"`.
- [`label`](/de/docs/Web/API/AudioTrack/label) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die eine lesbare Beschriftung für die Spur bereitstellt. Beispielsweise könnte eine Audiokommentarspur für einen Film eine `label` von `"Kommentar mit Regisseur Christopher Nolan und den Schauspielern Leonardo DiCaprio und Elliot Page."` haben. Diese Zeichenfolge ist leer, wenn keine Beschriftung angegeben ist.
- [`language`](/de/docs/Web/API/AudioTrack/language) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die die Hauptsprache der Audiospur angibt, oder eine leere Zeichenfolge, wenn sie unbekannt ist. Die Sprache wird als BCP 47 ({{RFC(5646)}}) Sprachcode angegeben, wie zum Beispiel `"en-US"` oder `"pt-BR"`.
- [`sourceBuffer`](/de/docs/Web/API/AudioTrack/sourceBuffer) {{ReadOnlyInline}}
  - : Der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer), der die Spur erstellt hat. Gibt null zurück, wenn die Spur nicht von einem [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) erstellt wurde oder der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) aus dem Attribut [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) seiner übergeordneten Medienquelle entfernt wurde.

## Verwendungshinweise

Um ein `AudioTrack` für ein gegebenes Medienelement zu erhalten, verwenden Sie die [`audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)-Eigenschaft des Elements, die ein [`AudioTrackList`](/de/docs/Web/API/AudioTrackList)-Objekt zurückgibt, aus dem Sie die einzelnen Spuren, die im Medium enthalten sind, erhalten können:

```js
const el = document.querySelector("video");
const tracks = el.audioTracks;
```

Sie können dann die einzelnen Spuren des Mediums entweder mit Hilfe der Arraysyntax oder Funktionen wie {{jsxref("Array.forEach", "forEach()")}} zugreifen.

Dieses erste Beispiel ermittelt die erste Audiospur im Medium:

```js
const firstTrack = tracks[0];
```

Das nächste Beispiel durchsucht alle Audiospuren des Mediums und aktiviert diejenigen, die in der bevorzugten Sprache des Benutzers sind (aus einer Variablen `userLanguage` entnommen), und deaktiviert alle anderen.

```js
tracks.forEach((track) => {
  track.enabled = track.language === userLanguage;
});
```

Die [`language`](/de/docs/Web/API/AudioTrack/language) ist im Standard- ({{RFC(5646)}}) Format. Für US-Englisch wäre dies zum Beispiel `"en-US"`.

## Beispiel

Siehe [`AudioTrack.label`](/de/docs/Web/API/AudioTrack/label#examples) für ein Beispiel, das zeigt, wie man ein Array von Spurarten und Bezeichnungen für ein angegebenes Medienelement erhält, gefiltert nach Art.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
