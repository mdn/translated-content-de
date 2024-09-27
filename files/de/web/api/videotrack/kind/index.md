---
title: "VideoTrack: kind-Eigenschaft"
short-title: kind
slug: Web/API/VideoTrack/kind
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("HTML DOM")}}

Die **`kind`**-Eigenschaft enthält eine Zeichenkette, die die Kategorie des Videos in der **[`VideoTrack`](/de/docs/Web/API/VideoTrack)** angibt.

Das `kind` kann verwendet werden, um zu bestimmen, in welchen Szenarien bestimmte Tracks aktiviert oder deaktiviert werden sollten. Siehe [Video-Track-Kind-Strings](#video-track-kind-strings) für eine Liste der für Video-Tracks verfügbaren Arten.

## Wert

Eine Zeichenkette, die den Typ des Inhalts angibt, den das Medium darstellt. Die Zeichenkette ist eine der unten in [Video-Track-Kind-Strings](#video-track-kind-strings) aufgeführten.

## Video-Track-Kind-Strings

Die für Video-Tracks verfügbaren Arten sind:

- `"alternative"`
  - : Eine potenzielle Alternative zum Haupt-Track, wie ein anderer Video-Take oder eine Version des Soundtracks nur mit Musik und ohne Dialog.
- `"captions"`
  - : Eine Version des Haupt-Video-Tracks mit eingebrannten Untertiteln.
- `"main"`
  - : Der primäre Video-Track.
- `"sign"`
  - : Eine Gebärdensprachinterpretation eines Audio-Tracks.
- `"subtitles"`
  - : Eine Version des Haupt-Video-Tracks mit eingebrannten Untertiteln.
- `"commentary"`
  - : Ein Video-Track mit einem Kommentar. Dies könnte z. B. der Regiekommentar eines Films sein.
- `""` (leere Zeichenkette)
  - : Der Track hat kein explizites Kind, oder das vom Track-Metadaten bereitgestellte Kind wird vom [User-Agent](/de/docs/Glossary/user_agent) nicht erkannt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
