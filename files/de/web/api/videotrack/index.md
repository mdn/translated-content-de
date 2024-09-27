---
title: VideoTrack
slug: Web/API/VideoTrack
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("HTML DOM")}}

Das **`VideoTrack`**-Interface repräsentiert einen einzelnen Videotrack aus einem {{HTMLElement("video")}}-Element.

Die häufigste Verwendung für den Zugriff auf ein `VideoTrack`-Objekt besteht darin, seine [`selected`](/de/docs/Web/API/VideoTrack/selected)-Eigenschaft umzuschalten, um es zum aktiven Videotrack für sein {{HTMLElement("video")}}-Element zu machen.

## Instanz-Eigenschaften

- [`selected`](/de/docs/Web/API/VideoTrack/selected)
  - : Ein Boolean-Wert, der steuert, ob der Videotrack aktiv ist oder nicht. Zu jedem Zeitpunkt kann nur ein Videotrack aktiv sein, daher macht das Setzen dieser Eigenschaft auf `true` für einen Track, während ein anderer Track aktiv ist, diesen anderen Track inaktiv.
- [`id`](/de/docs/Web/API/VideoTrack/id) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die den Track innerhalb der Medien eindeutig identifiziert. Diese ID kann verwendet werden, um einen bestimmten Track innerhalb einer Videotrackliste zu finden, indem [`VideoTrackList.getTrackById()`](/de/docs/Web/API/VideoTrackList/getTrackById) aufgerufen wird. Die ID kann auch als Fragmentteil der URL verwendet werden, wenn die Medien das Suchen durch Medienfragmente gemäß der [Media Fragments URI-Spezifikation](https://www.w3.org/TR/media-frags/) unterstützen.
- [`kind`](/de/docs/Web/API/VideoTrack/kind) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die die Kategorie angibt, in die der Track fällt. Beispielsweise hätte der Hauptvideotrack einen `kind` von `"main"`.
- [`label`](/de/docs/Web/API/VideoTrack/label) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die ein menschenlesbares Label für den Track bereitstellt. Zum Beispiel könnte ein Track, dessen `kind` `"sign"` ist, ein `label` von `"A sign-language interpretation"` haben. Diese Zeichenfolge ist leer, wenn kein Label vorhanden ist.
- [`language`](/de/docs/Web/API/VideoTrack/language) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die die Primärsprache des Videotracks angibt oder eine leere Zeichenfolge, falls unbekannt. Die Sprache wird als BCP 47 ({{RFC(5646)}}) Sprachenkode angegeben, wie zum Beispiel `"en-US"` oder `"pt-BR"`.
- [`sourceBuffer`](/de/docs/Web/API/VideoTrack/sourceBuffer) {{ReadOnlyInline}}
  - : Der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer), der den Track erstellt hat. Gibt null zurück, wenn der Track nicht von einem [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) erstellt wurde oder der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) aus dem [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers)-Attribut seiner übergeordneten Medienquelle entfernt wurde.

## Nutzungshinweise

Um einen `VideoTrack` für ein gegebenes Medienelement zu erhalten, verwenden Sie die [`videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)-Eigenschaft des Elements. Sie gibt ein [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Objekt zurück, aus dem Sie die einzelnen Tracks innerhalb der Medien erhalten können:

```js
const el = document.querySelector("video");
const tracks = el.videoTracks;
```

Sie können dann auf die einzelnen Tracks des Mediums entweder mit Array-Syntax oder Funktionen wie {{jsxref("Array.forEach", "forEach()")}} zugreifen.

Dieses erste Beispiel erhält den ersten Videotrack im Medium:

```js
const firstTrack = tracks[0];
```

Das nächste Beispiel durchsucht alle Videotracks des Mediums und aktiviert den ersten Videotrack, der in der bevorzugten Sprache des Nutzers vorliegt (von einer Variablen `userLanguage` übernommen).

```js
for (const track of tracks) {
  if (track.language === userLanguage) {
    track.selected = true;
    break;
  }
}
```

Die [`language`](/de/docs/Web/API/VideoTrack/language) ist im Standardformat ({{RFC(5646)}}). Für US-Englisch wäre dies beispielsweise `"en-US"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
