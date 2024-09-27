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
**[`AudioTrack`](/de/docs/Web/API/AudioTrack)** angibt.

Der `kind`-Wert kann verwendet werden,
um zu bestimmen, in welchen Szenarien bestimmte Spuren aktiviert oder deaktiviert werden sollen. Siehe
[Audio-Track-Kind-Strings](#audio-track-kind-strings) für eine Liste der verfügbaren Arten für Audio-Tracks.

## Wert

Ein String, der den Typ des Inhalts angibt, den das Medium darstellt. Der
String ist einer der in den untenstehenden [Audio-Track-Kind-Strings](#audio-track-kind-strings) aufgeführten.

## Audio-Track-Kind-Strings

Die verfügbaren Arten für Audio-Tracks sind:

- `"alternative"`
  - : Eine mögliche Alternative zum Haupt-Track, wie zum Beispiel eine andere Audio-Aufnahme oder eine
    Version des Soundtracks nur mit Musik und ohne Dialog.
- `"descriptions"`
  - : Ein Audio-Track, der hörbare Beschreibungen der im Video-Track dargestellten Handlung liefert.
- `"main"`
  - : Der primäre Audio-Track.
- `"main-desc"`
  - : Der primäre Audio-Track mit integrierten Audiobeschreibungen.
- `"translation"`
  - : Eine übersetzte Version des primären Audio-Tracks.
- `"commentary"`
  - : Ein Audio-Track mit Kommentaren. Dies könnte zum Beispiel die Kommentarspur des Regisseurs bei einem Film sein.
- `""` (leerer String)
  - : Der Track hat keine explizite Art, oder die vom Track-Metadaten bereitgestellte Art wird vom [User Agent](/de/docs/Glossary/user_agent) nicht erkannt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
