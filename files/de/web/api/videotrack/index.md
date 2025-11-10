---
title: VideoTrack
slug: Web/API/VideoTrack
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("HTML DOM")}}

Das **`VideoTrack`**-Interface repräsentiert eine einzelne Video-Spur von einem {{HTMLElement("video")}}-Element.

Der häufigste Grund, auf ein `VideoTrack`-Objekt zuzugreifen, besteht darin, seine [`selected`](/de/docs/Web/API/VideoTrack/selected)-Eigenschaft umzuschalten, um es zur aktiven Video-Spur für das zugehörige {{HTMLElement("video")}}-Element zu machen.

## Instanzeigenschaften

- [`selected`](/de/docs/Web/API/VideoTrack/selected)
  - : Ein Boolescher Wert, der steuert, ob die Video-Spur aktiv ist oder nicht. Zu jedem Zeitpunkt kann nur eine einzige Video-Spur aktiv sein. Wenn diese Eigenschaft für eine Spur auf `true` gesetzt wird, während eine andere Spur aktiv ist, wird die andere Spur inaktiv.
- [`id`](/de/docs/Web/API/VideoTrack/id) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die die Spur innerhalb des Mediums eindeutig identifiziert. Diese ID kann verwendet werden, um eine bestimmte Spur innerhalb einer Video-Spurliste mithilfe des Aufrufs von [`VideoTrackList.getTrackById()`](/de/docs/Web/API/VideoTrackList/getTrackById) zu lokalisieren. Die ID kann auch als Teil des URL-Fragments verwendet werden, wenn das Medium das Suchen nach Medienfragmenten gemäß der [Media Fragments URI-Spezifikation](https://www.w3.org/TR/media-frags/) unterstützt.
- [`kind`](/de/docs/Web/API/VideoTrack/kind) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die die Kategorie angibt, in die die Spur fällt. Zum Beispiel würde die Hauptvideo-Spur eine `kind` von `"main"` haben.
- [`label`](/de/docs/Web/API/VideoTrack/label) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die eine menschenlesbare Bezeichnung für die Spur bereitstellt. Beispielsweise könnte eine Spur mit `kind` `"sign"` ein `label` von `"Eine Gebärdensprache-Interpretation"` haben. Diese Zeichenkette ist leer, wenn keine Bezeichnung bereitgestellt wird.
- [`language`](/de/docs/Web/API/VideoTrack/language) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die die Hauptsprache der Video-Spur angibt oder eine leere Zeichenkette, wenn unbekannt. Die Sprache wird als {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} angegeben, wie zum Beispiel `"en-US"` oder `"pt-BR"`.
- [`sourceBuffer`](/de/docs/Web/API/VideoTrack/sourceBuffer) {{ReadOnlyInline}}
  - : Der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer), der die Spur erstellt hat. Gibt null zurück, wenn die Spur nicht von einem [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) erstellt wurde oder der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) aus dem Attribut [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) der übergeordneten Medienquelle entfernt wurde.

## Nutzungshinweise

Um eine `VideoTrack` für ein gegebenes Media-Element zu erhalten, verwenden Sie die [`videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)-Eigenschaft des Elements. Diese gibt ein [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Objekt zurück, aus dem Sie die einzelnen im Medium enthaltenen Spuren abrufen können:

```js
const el = document.querySelector("video");
const tracks = el.videoTracks;
```

Sie können dann auf die einzelnen Spuren des Mediums mit entweder der Array-Syntax oder mit Funktionen wie {{jsxref("Array.forEach", "forEach()")}} zugreifen.

Dieses erste Beispiel holt die erste Video-Spur im Medium:

```js
const firstTrack = tracks[0];
```

Das nächste Beispiel durchsucht alle Video-Spuren des Mediums und aktiviert die erste Video-Spur, die in der vom Benutzer bevorzugten Sprache ist (die aus einer Variablen `userLanguage` übernommen wird).

```js
for (const track of tracks) {
  if (track.language === userLanguage) {
    track.selected = true;
    break;
  }
}
```

Die [`language`](/de/docs/Web/API/VideoTrack/language) wird als ein gültiges {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} angegeben, zum Beispiel `"en-US"` für amerikanisches Englisch.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
