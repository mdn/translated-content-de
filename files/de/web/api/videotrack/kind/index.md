---
title: "VideoTrack: kind-Eigenschaft"
short-title: kind
slug: Web/API/VideoTrack/kind
l10n:
  sourceCommit: 87adaa5384b1015690f3435ce0ba64ac097764eb
---

{{APIRef("HTML DOM")}}

Die **`kind`**-Eigenschaft enthält einen
String, der die Kategorie des Video-Typs beschreibt, der in der **[`VideoTrack`](/de/docs/Web/API/VideoTrack)** enthalten ist.

Der `kind` kann verwendet werden,
um die Szenarien zu bestimmen, in denen bestimmte Spuren aktiviert oder deaktiviert werden sollten. Eine Liste der verfügbaren Arten für Videospuren finden Sie unter [Video track kind strings](#video_track_kind_strings).

## Wert

Ein String, der den Inhaltstyp des Mediums angibt. Der
String ist einer der unten aufgeführten [Video track kind strings](#video_track_kind_strings).

## Video track kind strings

Die für Videospuren verfügbaren Arten sind:

- `"alternative"`
  - : Eine mögliche Alternative zur Hauptspur, wie z. B. ein anderer Video-Take oder eine
    Version der Tonspur nur mit Musik und ohne Dialog.
- `"captions"`
  - : Eine Version der Hauptvideospur mit eingebrannten Untertiteln.
- `"main"`
  - : Die primäre Videospur.
- `"sign"`
  - : Eine Gebärdensprachübersetzung einer Tonspur.
- `"subtitles"`
  - : Eine Version der Hauptvideospur mit eingebrannten Untertiteln.
- `"commentary"`
  - : Eine Videospur, die einen Kommentar enthält. Dies könnte beispielsweise die Kommentarspur des Regisseurs eines Films enthalten.
- `""` (leerer String)
  - : Die Spur hat keinen expliziten Typ, oder der Typ, der durch die Metadaten der Spur bereitgestellt wird, wird vom {{Glossary("user_agent", "User-Agent")}} nicht erkannt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
