---
title: AudioTrack
slug: Web/API/AudioTrack
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{APIRef("HTML DOM")}}

Das **`AudioTrack`**-Interface repräsentiert eine einzelne Audiospur von einem der HTML-Medienelemente, {{HTMLElement("audio")}} oder {{HTMLElement("video")}}.

Der häufigste Anwendungsfall für den Zugriff auf ein `AudioTrack`-Objekt besteht darin, seine [`enabled`](/de/docs/Web/API/AudioTrack/enabled)-Eigenschaft zu toggeln, um die Spur stummzuschalten oder die Stummschaltung aufzuheben.

## Instanz-Eigenschaften

- [`enabled`](/de/docs/Web/API/AudioTrack/enabled)
  - : Ein boolescher Wert, der steuert, ob der Ton der Audiospur aktiviert ist oder nicht. Wenn dieser Wert auf `false` gesetzt wird, wird der Ton der Spur stummgeschaltet.
- [`id`](/de/docs/Web/API/AudioTrack/id) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die die Spur innerhalb des Mediums eindeutig identifiziert. Diese ID kann verwendet werden, um eine bestimmte Spur in einer Liste von Audiospuren durch Aufruf von [`AudioTrackList.getTrackById()`](/de/docs/Web/API/AudioTrackList/getTrackById) zu finden. Die ID kann auch als Fragmentteil der URL verwendet werden, wenn das Medium das Suchen nach Medienfragmenten gemäß der [Media Fragments URI Spezifikation](https://www.w3.org/TR/media-frags/) unterstützt.
- [`kind`](/de/docs/Web/API/AudioTrack/kind) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die die Kategorie angibt, in die die Spur fällt. Zum Beispiel hätte die Haupt-Audiospur ein `kind` von `"main"`.
- [`label`](/de/docs/Web/API/AudioTrack/label) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die eine für Menschen lesbare Bezeichnung für die Spur liefert. Zum Beispiel könnte eine Audiokommentarspur für einen Film ein `label` von `"Commentary with director John Q. Public and actors John Doe and Jane Eod."` haben. Diese Zeichenfolge ist leer, wenn kein Label angegeben wurde.
- [`language`](/de/docs/Web/API/AudioTrack/language) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die die hauptsächliche Sprache der Audiospur angibt, oder eine leere Zeichenfolge, wenn unbekannt. Die Sprache wird als BCP 47 ({{RFC(5646)}}) Sprachcode angegeben, wie `"en-US"` oder `"pt-BR"`.
- [`sourceBuffer`](/de/docs/Web/API/AudioTrack/sourceBuffer) {{ReadOnlyInline}}
  - : Der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer), der die Spur erstellt hat. Gibt null zurück, wenn die Spur nicht von einem [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) erstellt wurde oder der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) aus dem [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers)-Attribut der übergeordneten Medienquelle entfernt wurde.

## Verwendungshinweise

Um ein `AudioTrack` für ein bestimmtes Medienelement zu erhalten, verwenden Sie die [`audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)-Eigenschaft des Elements, die ein [`AudioTrackList`](/de/docs/Web/API/AudioTrackList)-Objekt zurückgibt, aus dem Sie die einzelnen Spuren des Mediums erhalten können:

```js
const el = document.querySelector("video");
const tracks = el.audioTracks;
```

Sie können dann auf die einzelnen Spuren des Mediums entweder mit Array-Syntax oder mit Funktionen wie {{jsxref("Array.forEach", "forEach()")}} zugreifen.

Dieses erste Beispiel erhält die erste Audiospur im Medium:

```js
const firstTrack = tracks[0];
```

Das nächste Beispiel durchsucht alle Audiospuren des Mediums und aktiviert diejenigen, die in der bevorzugten Sprache des Benutzers sind (aus einer Variablen `userLanguage`), und deaktiviert alle anderen.

```js
tracks.forEach((track) => {
  track.enabled = track.language === userLanguage;
});
```

Die [`language`](/de/docs/Web/API/AudioTrack/language) befindet sich in standardisierter ({{RFC(5646)}}) Form. Für US-Englisch wäre dies zum Beispiel `"en-US"`.

## Beispiel

Siehe [`AudioTrack.label`](/de/docs/Web/API/AudioTrack/label#examples) für ein Beispiel, das zeigt, wie man ein Array von Spurarten und -labels für ein angegebenes Medienelement erhält und nach Art filtert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
