---
title: VideoTrack
slug: Web/API/VideoTrack
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("HTML DOM")}}

Das **`VideoTrack`**-Interface repräsentiert eine einzelne Videospur von einem {{HTMLElement("video")}}-Element.

Der häufigste Anwendungsfall für den Zugriff auf ein `VideoTrack`-Objekt ist das Umschalten der {{domxref("VideoTrack.selected", "selected")}}-Eigenschaft, um es zur aktiven Videospur für sein {{HTMLElement("video")}}-Element zu machen.

## Instanz-Eigenschaften

- {{domxref("VideoTrack.selected", "selected")}}
  - : Ein boolescher Wert, der steuert, ob die Videospur aktiv ist oder nicht. Nur eine einzelne Videospur kann zu jeder Zeit aktiv sein. Das Setzen dieser Eigenschaft auf `true` für eine Spur, während eine andere Spur aktiv ist, wird diese andere Spur inaktiv machen.
- {{domxref("VideoTrack.id", "id")}} {{ReadOnlyInline}}
  - : Ein String, der die Spur innerhalb der Medien eindeutig identifiziert. Diese ID kann verwendet werden, um eine spezifische Spur innerhalb einer Videospurliste zu lokalisieren, indem {{domxref("VideoTrackList.getTrackById()")}} aufgerufen wird. Die ID kann auch als Fragmentteil der URL verwendet werden, wenn die Medien das Suchen nach Medienfragmenten gemäß der [Media Fragments URI-Spezifikation](https://www.w3.org/TR/media-frags/) unterstützen.
- {{domxref("VideoTrack.kind", "kind")}} {{ReadOnlyInline}}
  - : Ein String, der die Kategorie angibt, in die die Spur fällt. Zum Beispiel würde die Hauptvideospur einen `kind` von `"main"` haben.
- {{domxref("VideoTrack.label", "label")}} {{ReadOnlyInline}}
  - : Ein String, der eine menschenlesbare Bezeichnung für die Spur bereitstellt. Zum Beispiel könnte eine Spur, deren `kind` `"sign"` ist, ein `label` von `"A sign-language interpretation"` haben. Dieser String ist leer, wenn keine Bezeichnung angegeben ist.
- {{domxref("VideoTrack.language", "language")}} {{ReadOnlyInline}}
  - : Ein String, der die Hauptsprache der Videospur angibt, oder ein leerer String, wenn unbekannt. Die Sprache wird als BCP 47 ({{RFC(5646)}}) Sprachcode angegeben, wie `"en-US"` oder `"pt-BR"`.
- {{domxref("VideoTrack.sourceBuffer", "sourceBuffer")}} {{ReadOnlyInline}}
  - : Der {{domxref("SourceBuffer")}}, der die Spur erstellt hat. Gibt null zurück, wenn die Spur nicht von einem {{domxref("SourceBuffer")}} erstellt wurde oder der {{domxref("SourceBuffer")}} aus dem {{domxref("MediaSource.sourceBuffers")}} Attribut der übergeordneten Medienquelle entfernt wurde.

## Verwendungshinweise

Um ein `VideoTrack` für ein bestimmtes Medienelement zu erhalten, verwenden Sie die {{domxref("HTMLMediaElement.videoTracks", "videoTracks")}}-Eigenschaft des Elements, die ein {{domxref("VideoTrackList")}}-Objekt zurückgibt, aus dem Sie die einzelnen in den Medien enthaltenen Spuren abrufen können:

```js
const el = document.querySelector("video");
const tracks = el.videoTracks;
```

Sie können dann auf die einzelnen Spuren der Medien entweder mit Hilfe der Feldsyntax oder mithilfe von Funktionen wie {{jsxref("Array.forEach", "forEach()")}} zugreifen.

Dieses erste Beispiel erhält die erste Videospur auf den Medien:

```js
const firstTrack = tracks[0];
```

Das nächste Beispiel durchsucht alle Videospuren der Medien und aktiviert die erste Videospur, die in der bevorzugten Sprache des Benutzers ist (die aus einer Variablen `userLanguage` entnommen wird).

```js
for (const track of tracks) {
  if (track.language === userLanguage) {
    track.selected = true;
    break;
  }
}
```

Die {{domxref("VideoTrack.language", "language")}} ist im Standardformat ({{RFC(5646)}}). Für US-Englisch wäre dies zum Beispiel `"en-US"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
