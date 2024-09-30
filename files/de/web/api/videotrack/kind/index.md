---
title: "VideoTrack: kind Eigenschaft"
short-title: kind
slug: Web/API/VideoTrack/kind
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("HTML DOM")}}

Die **`kind`**-Eigenschaft enthält einen
String, der die Kategorie des Videos angibt, das in der
**[`VideoTrack`](/de/docs/Web/API/VideoTrack)** enthalten ist.

Die `kind`-Eigenschaft kann verwendet werden,
um zu bestimmen, in welchen Szenarien bestimmte Tracks aktiviert oder deaktiviert werden sollen. Siehe
[Video-Track-Kind-Strings](#video-track-kind-strings) für eine Liste der für Video-Tracks verfügbaren Arten.

## Wert

Ein String, der den Inhaltstyp darstellt, den das Medium repräsentiert. Der
String ist einer der unten unter [Video-Track-Kind-Strings](#video-track-kind-strings) angegebenen.

## Video-Track-Kind-Strings

Die für Video-Tracks verfügbaren Arten sind:

- `"alternative"`
  - : Eine potenzielle Alternative zum Haupttrack, wie zum Beispiel eine andere Videoaufnahme oder eine
    Version der Tonspur nur mit Musik und ohne Dialog.
- `"captions"`
  - : Eine Version des Hauptvideo-Tracks mit eingebrannten Untertiteln.
- `"main"`
  - : Der primäre Video-Track.
- `"sign"`
  - : Eine Gebärdensprachdolmetschung eines Audiotracks.
- `"subtitles"`
  - : Eine Version des Hauptvideo-Tracks mit eingebrannten Untertiteln.
- `"commentary"`
  - : Ein Video-Track, der einen Kommentar enthält. Dies könnte zum Beispiel die Kommentatorspur des Regisseurs
    in einem Film sein.
- `""` (leerer String)
  - : Der Track hat keine explizite Art, oder die vom Track bereitgestellte Art wird vom [User-Agent](/de/docs/Glossary/user_agent) nicht erkannt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
