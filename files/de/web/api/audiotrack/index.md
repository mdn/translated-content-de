---
title: AudioTrack
slug: Web/API/AudioTrack
l10n:
  sourceCommit: cf41a29c212c730c1beef36d6bf3474ebbfc6162
---

{{APIRef("HTML DOM")}}

Das **`AudioTrack`**-Interface repräsentiert einen einzelnen Audiotrack von einem der HTML-Medienelemente, {{HTMLElement("audio")}} oder {{HTMLElement("video")}}.

Die häufigste Verwendung des Zugriffs auf ein `AudioTrack`-Objekt besteht darin, seine [`enabled`](/de/docs/Web/API/AudioTrack/enabled)-Eigenschaft umzuschalten, um den Track stummzuschalten oder die Stummschaltung aufzuheben.

## Instanzeigenschaften

- [`enabled`](/de/docs/Web/API/AudioTrack/enabled)
  - : Ein Boolescher Wert, der steuert, ob der Ton des Audiotracks aktiviert ist oder nicht. Wenn dieser Wert auf `false` gesetzt wird, wird der Ton des Tracks stummgeschaltet.
- [`id`](/de/docs/Web/API/AudioTrack/id) {{ReadOnlyInline}}
  - : Ein String, der den Track innerhalb des Mediums eindeutig identifiziert. Diese ID kann verwendet werden, um einen bestimmten Track innerhalb einer Audio-Track-Liste zu finden, indem [`AudioTrackList.getTrackById()`](/de/docs/Web/API/AudioTrackList/getTrackById) aufgerufen wird. Die ID kann auch als Fragmentteil der URL verwendet werden, wenn das Medium das Navigieren nach Medienfragment gemäß der [Media Fragments URI-Spezifikation](https://www.w3.org/TR/media-frags/) unterstützt.
- [`kind`](/de/docs/Web/API/AudioTrack/kind) {{ReadOnlyInline}}
  - : Ein String, der die Kategorie angibt, in die der Track fällt. Zum Beispiel hätte der Hauptaudiotrack ein `kind` von `"main"`.
- [`label`](/de/docs/Web/API/AudioTrack/label) {{ReadOnlyInline}}
  - : Ein String, der eine lesbare Bezeichnung für den Track bereitstellt. Zum Beispiel könnte ein Audiokommentartrack zu einem Film ein `label` von `"Commentary with director Elaina A. Madura and actors Voytek Kablowski and Shilpa Seetharanan."` haben. Dieser String ist leer, wenn keine Bezeichnung bereitgestellt wird.
- [`language`](/de/docs/Web/API/AudioTrack/language) {{ReadOnlyInline}}
  - : Ein String, der die Hauptsprache des Audiotracks angibt oder ein leerer String, wenn unbekannt. Die Sprache wird als BCP 47 ({{RFC(5646)}}) Sprachcode angegeben, wie zum Beispiel `"en-US"` oder `"pt-BR"`.
- [`sourceBuffer`](/de/docs/Web/API/AudioTrack/sourceBuffer) {{ReadOnlyInline}}
  - : Der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer), der den Track erstellt hat. Gibt `null` zurück, wenn der Track nicht durch einen [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) erstellt wurde oder der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) aus dem Attribut [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) der übergeordneten MediaSource entfernt wurde.

## Nutzungshinweise

Um ein `AudioTrack` für ein gegebenes Medienelement zu erhalten, verwenden Sie die [`audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)-Eigenschaft des Elements, die ein [`AudioTrackList`](/de/docs/Web/API/AudioTrackList)-Objekt zurückgibt, aus dem Sie die einzelnen Tracks erhalten können, die im Medium enthalten sind:

```js
const el = document.querySelector("video");
const tracks = el.audioTracks;
```

Sie können dann auf die individuellen Tracks des Mediums entweder mit Array-Syntax oder mit Funktionen wie {{jsxref("Array.forEach", "forEach()")}} zugreifen.

Dieses erste Beispiel erhält den ersten Audiotrack im Medium:

```js
const firstTrack = tracks[0];
```

Im nächsten Beispiel werden alle Audiotracks des Mediums durchsucht, wobei alle aktiviert werden, die in der bevorzugten Sprache des Benutzers (aus einer Variablen `userLanguage`) sind, und alle anderen werden deaktiviert.

```js
tracks.forEach((track) => {
  track.enabled = track.language === userLanguage;
});
```

Die [`language`](/de/docs/Web/API/AudioTrack/language) ist im standardisierten ({{RFC(5646)}}) Format. Für US-Englisch wäre das zum Beispiel `"en-US"`.

## Beispiel

Siehe [`AudioTrack.label`](/de/docs/Web/API/AudioTrack/label#examples) für ein Beispiel, das zeigt, wie eine Array von Trackarten und -bezeichnungen für ein bestimmtes Medienelement gefiltert nach Art abgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
