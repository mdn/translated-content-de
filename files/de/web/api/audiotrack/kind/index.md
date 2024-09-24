---
title: "AudioTrack: kind-Eigenschaft"
short-title: kind
slug: Web/API/AudioTrack/kind
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("HTML DOM")}}

Die **`kind`**-Eigenschaft enthält einen
String, der die Kategorie des Audios im
**{{domxref("AudioTrack")}}** angibt.

Der `kind`-Wert kann verwendet werden,
um die Szenarien zu bestimmen, in denen bestimmte Tracks aktiviert oder deaktiviert werden sollten. Siehe
[Audio-Track-Kind-Strings](#audio-track-kind-strings) für eine Liste der verfügbaren Arten von Audiotracks.

## Wert

Ein String, der den Typ des Inhalts angibt, den das Medium darstellt. Der
String gehört zu denen, die unten in [Audio-Track-Kind-Strings](#audio-track-kind-strings) zu finden sind.

## Audio-Track-Kind-Strings

Die für Audiotracks verfügbaren Arten sind:

- `"alternative"`
  - : Eine potenzielle Alternative zum Haupttrack, wie zum Beispiel eine andere Audioaufnahme oder eine
    Version des Soundtracks mit nur Musik und ohne Dialog.
- `"descriptions"`
  - : Ein Audiotrack, der hörbare Beschreibungen der im Videotrack dargestellten Aktion liefert.
- `"main"`
  - : Der primäre Audiotrack.
- `"main-desc"`
  - : Der primäre Audiotrack mit Audiobeschreibungen, die hineingemischt sind.
- `"translation"`
  - : Eine übersetzte Version des primären Audiotracks.
- `"commentary"`
  - : Ein Audiotrack mit einem Kommentar. Dies könnte zum Beispiel verwendet werden, um den Kommentar des Regisseurs auf einem Film zu enthalten.
- `""` (leerer String)
  - : Der Track hat keinen expliziten Typ, oder der vom Track-Metadaten bereitgestellte Typ wird vom {{Glossary("user agent")}} nicht erkannt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
