---
title: AudioTrack
slug: Web/API/AudioTrack
l10n:
  sourceCommit: fa1301aead2cee37516b7ad5a5ec2fb21e004227
---

{{APIRef("HTML DOM")}}

Die **`AudioTrack`**-Schnittstelle repräsentiert einen einzelnen Audiotrack von einem der HTML-Medienelemente, {{HTMLElement("audio")}} oder {{HTMLElement("video")}}.

Die häufigste Verwendung für den Zugriff auf ein `AudioTrack`-Objekt besteht darin, seine {{domxref("AudioTrack.enabled", "enabled")}}-Eigenschaft zu ändern, um den Track stummzuschalten oder die Stummschaltung aufzuheben.

## Instanzeigenschaften

- {{domxref("AudioTrack.enabled", "enabled")}}
  - : Ein boolescher Wert, der steuert, ob der Ton des Audiotracks aktiviert ist oder nicht. Wenn dieser Wert auf `false` gesetzt wird, wird der Audiotrack stummgeschaltet.
- {{domxref("AudioTrack.id", "id")}} {{ReadOnlyInline}}
  - : Eine Zeichenkette, die den Track innerhalb der Medien eindeutig identifiziert. Diese ID kann verwendet werden, um einen bestimmten Track in einer Audiotrack-Liste zu finden, indem {{domxref("AudioTrackList.getTrackById()")}} aufgerufen wird. Die ID kann auch als Fragmentteil der URL verwendet werden, wenn die Medien das Suchen nach Medienfragmenten gemäß der [Media Fragments URI Spezifikation](https://www.w3.org/TR/media-frags/) unterstützen.
- {{domxref("AudioTrack.kind", "kind")}} {{ReadOnlyInline}}
  - : Eine Zeichenkette, die die Kategorie angibt, in die der Track fällt. Zum Beispiel hätte der Hauptaudiotrack eine `kind` von `"main"`.
- {{domxref("AudioTrack.label", "label")}} {{ReadOnlyInline}}
  - : Eine Zeichenkette, die eine lesbare Beschriftung für den Track bietet. Zum Beispiel könnte ein Audiokommentar-Track für einen Film eine `label` von `"Kommentar mit Regisseur John Q. Public und den Schauspielern John Doe und Jane Eod."` haben. Diese Zeichenkette ist leer, wenn keine Beschriftung bereitgestellt wird.
- {{domxref("AudioTrack.language", "language")}} {{ReadOnlyInline}}
  - : Eine Zeichenkette, die die primäre Sprache des Audiotracks angibt, oder eine leere Zeichenkette, wenn unbekannt. Die Sprache wird als BCP 47 ({{RFC(5646)}}) Sprachcode spezifiziert, wie zum Beispiel `"en-US"` oder `"pt-BR"`.
- {{domxref("AudioTrack.sourceBuffer", "sourceBuffer")}} {{ReadOnlyInline}}
  - : Der {{domxref("SourceBuffer")}}, der den Track erstellt hat. Gibt null zurück, wenn der Track nicht von einem {{domxref("SourceBuffer")}} erstellt wurde oder der {{domxref("SourceBuffer")}} aus dem {{domxref("MediaSource.sourceBuffers")}} Attribut der übergeordneten Medienquelle entfernt wurde.

## Nutzungshinweise

Um ein `AudioTrack` für ein bestimmtes Medienelement zu erhalten, verwenden Sie die {{domxref("HTMLMediaElement.audioTracks", "audioTracks")}}-Eigenschaft des Elements, die ein {{domxref("AudioTrackList")}}-Objekt zurückgibt, aus dem Sie die einzelnen in den Medien enthaltenen Tracks erhalten können:

```js
const el = document.querySelector("video");
const tracks = el.audioTracks;
```

Sie können dann auf die einzelnen Tracks der Medien entweder über Arraysyntax oder über Funktionen wie {{jsxref("Array.forEach", "forEach()")}} zugreifen.

Dieses erste Beispiel erhält den ersten Audiotrack der Medien:

```js
const firstTrack = tracks[0];
```

Das nächste Beispiel durchsucht alle Audiotracks der Medien, aktiviert alle, die in der bevorzugten Sprache des Benutzers sind (aus einer Variablen `userLanguage` genommen) und deaktiviert alle anderen.

```js
tracks.forEach((track) => {
  track.enabled = track.language === userLanguage;
});
```

Die {{domxref("AudioTrack.language", "language")}} ist im Standardformat ({{RFC(5646)}}). Für US-Englisch wäre dies zum Beispiel `"en-US"`.

## Beispiel

Sehen Sie sich [`AudioTrack.label`](/de/docs/Web/API/AudioTrack/label#examples) für ein einfaches Beispiel an, das zeigt, wie man ein Array von Track-Arten und Beschriftungen für ein bestimmtes Medienelement erhält, gefiltert nach Art.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
