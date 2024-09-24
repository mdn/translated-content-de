---
title: "VideoTrack: kind-Eigenschaft"
short-title: kind
slug: Web/API/VideoTrack/kind
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("HTML DOM")}}

Die **`kind`**-Eigenschaft enthält einen
String, der die Kategorie des Videos angibt, das in der
**{{domxref("VideoTrack")}}** enthalten ist.

Der `kind`-Wert kann verwendet werden, um die Szenarien zu bestimmen, in denen bestimmte Tracks aktiviert oder deaktiviert werden sollten. Siehe [Video-Track-Kategorie-Strings](#video-track-kategorie-strings) für eine Liste der verfügbaren Kategorien für Video-Tracks.

## Wert

Ein String, der den Typ des Inhalts angibt, den das Medium repräsentiert. Der
String ist einer derjenigen, die in [Video-Track-Kategorie-Strings](#video-track-kategorie-strings) unten zu finden sind.

## Video-Track-Kategorie-Strings

Die für Video-Tracks verfügbaren Kategorien sind:

- `"alternative"`
  - : Eine potenzielle Alternative zum Haupt-Track, wie eine andere Videoaufnahme oder eine
    Version des Soundtracks nur mit Musik ohne Dialog.
- `"captions"`
  - : Eine Version des Haupt-Videotracks mit eingebrannten Untertiteln.
- `"main"`
  - : Der primäre Videotrack.
- `"sign"`
  - : Eine Gebärdensprachinterpretation eines Audiotracks.
- `"subtitles"`
  - : Eine Version des Haupt-Videotracks mit eingebrannten Untertiteln.
- `"commentary"`
  - : Ein Videotrack mit einem Kommentar. Dieser könnte beispielsweise den Kommentar des Regisseurs
    bei einem Film enthalten.
- `""` (Leerstring)
  - : Der Track hat keine explizite Art, oder die vom Track bereitgestellte Art wird vom {{Glossary("user agent")}} nicht erkannt.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
