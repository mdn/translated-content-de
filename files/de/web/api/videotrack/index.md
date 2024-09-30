---
title: VideoTrack
slug: Web/API/VideoTrack
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("HTML DOM")}}

Die **`VideoTrack`**-Schnittstelle repräsentiert eine einzelne Videospur aus einem {{HTMLElement("video")}}-Element.

Der häufigste Anwendungsfall für den Zugriff auf ein `VideoTrack`-Objekt ist das Umschalten seiner [`selected`](/de/docs/Web/API/VideoTrack/selected)-Eigenschaft, um es zur aktiven Videospur für sein {{HTMLElement("video")}}-Element zu machen.

## Instanz-Eigenschaften

- [`selected`](/de/docs/Web/API/VideoTrack/selected)
  - : Ein boolescher Wert, der kontrolliert, ob die Videospur aktiv ist oder nicht. Zu einem bestimmten Zeitpunkt kann nur eine einzige Videospur aktiv sein. Wenn Sie also diese Eigenschaft für eine Spur auf `true` setzen, während eine andere Spur aktiv ist, wird diese andere Spur inaktiv.
- [`id`](/de/docs/Web/API/VideoTrack/id) {{ReadOnlyInline}}
  - : Ein string, der die Spur innerhalb des Mediums eindeutig identifiziert. Diese ID kann verwendet werden, um eine spezifische Spur innerhalb einer Videospurliste zu finden, indem [`VideoTrackList.getTrackById()`](/de/docs/Web/API/VideoTrackList/getTrackById) aufgerufen wird. Die ID kann auch als Fragmentteil der URL verwendet werden, wenn das Medium das Suchen nach Medienfragmenten gemäß der [Media Fragments URI-Spezifikation](https://www.w3.org/TR/media-frags/) unterstützt.
- [`kind`](/de/docs/Web/API/VideoTrack/kind) {{ReadOnlyInline}}
  - : Ein string, der die Kategorie angibt, in die die Spur fällt. Zum Beispiel würde die Hauptvideospur ein `kind` von `"main"` haben.
- [`label`](/de/docs/Web/API/VideoTrack/label) {{ReadOnlyInline}}
  - : Ein menschlich lesbares Label für die Spur. Zum Beispiel könnte eine Spur, deren `kind` `"sign"` ist, ein `label` von `"Eine Gebärdensprach-Interpretation"` haben. Dieser string ist leer, wenn kein Label angegeben ist.
- [`language`](/de/docs/Web/API/VideoTrack/language) {{ReadOnlyInline}}
  - : Ein string, der die Hauptsprache der Videospur angibt, oder ein leerer string, wenn unbekannt. Die Sprache wird als BCP 47 ({{RFC(5646)}}) Sprachcode spezifiziert, wie `"en-US"` oder `"pt-BR"`.
- [`sourceBuffer`](/de/docs/Web/API/VideoTrack/sourceBuffer) {{ReadOnlyInline}}
  - : Der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer), der die Spur erstellt hat. Gibt null zurück, wenn die Spur nicht von einem [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) erstellt wurde oder der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) aus dem Attribut [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) seiner übergeordneten Medienquelle entfernt wurde.

## Hinweise zur Nutzung

Um eine `VideoTrack` für ein gegebenes Medienelement zu erhalten, verwenden Sie die [`videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)-Eigenschaft des Elements, die ein [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Objekt zurückgibt, aus dem Sie die einzelnen Spuren im Medium erhalten können:

```js
const el = document.querySelector("video");
const tracks = el.videoTracks;
```

Sie können dann auf die einzelnen Spuren des Mediums entweder mit der Array-Syntax oder mit Funktionen wie {{jsxref("Array.forEach", "forEach()")}} zugreifen.

Dieses erste Beispiel erhält die erste Videospur des Mediums:

```js
const firstTrack = tracks[0];
```

Das nächste Beispiel durchsucht alle Videospuren des Mediums und aktiviert die erste Videospur, die in der vom Benutzer bevorzugten Sprache ist (genommen aus einer Variable `userLanguage`).

```js
for (const track of tracks) {
  if (track.language === userLanguage) {
    track.selected = true;
    break;
  }
}
```

Die [`language`](/de/docs/Web/API/VideoTrack/language) ist im Standardformat ({{RFC(5646)}}). Für US-Englisch wäre dies zum Beispiel `"en-US"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
