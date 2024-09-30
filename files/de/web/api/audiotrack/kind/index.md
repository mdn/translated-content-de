---
title: "AudioTrack: kind-Eigenschaft"
short-title: kind
slug: Web/API/AudioTrack/kind
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("HTML DOM")}}

Die **`kind`**-Eigenschaft enthält einen
String, der die Kategorie des in der **[`AudioTrack`](/de/docs/Web/API/AudioTrack)**
enthaltenen Audios angibt.

Die `kind`-Eigenschaft kann verwendet werden, um die Szenarien zu bestimmen, in denen bestimmte Tracks aktiviert oder deaktiviert werden sollen. Siehe [Audio-Track-Kind-Strings](#audio-track-kind-strings) für eine Liste der für Audiotracks verfügbaren Arten.

## Wert

Ein String, der den Inhaltstyp darstellt, den das Medium repräsentiert. Der String ist einer derjenigen, die unten in [Audio-Track-Kind-Strings](#audio-track-kind-strings) zu finden sind.

## Audio-Track-Kind-Strings

Die für Audiotracks verfügbaren Arten sind:

- `"alternative"`
  - : Eine potenzielle Alternative zum Haupttrack, wie zum Beispiel eine andere Audioaufnahme oder eine Version des Soundtracks nur mit Musik und ohne Dialog.
- `"descriptions"`
  - : Ein Audiotrack, der hörbare Beschreibungen der im Videotrack dargestellten Aktionen bietet.
- `"main"`
  - : Der primäre Audiotrack.
- `"main-desc"`
  - : Der primäre Audiotrack mit hineingemischten Audiobeschreibungen.
- `"translation"`
  - : Eine übersetzte Version des primären Audiotracks.
- `"commentary"`
  - : Ein Audiotrack, der einen Kommentar enthält. Dies könnte beispielsweise der Kommentar des Regisseurs auf einer Filmspur sein.
- `""` (leerer String)
  - : Der Track hat keine explizite Art, oder die vom Track-Metadaten bereitgestellte Art wird nicht durch den [user agent](/de/docs/Glossary/user_agent) erkannt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
