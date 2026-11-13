---
title: "VideoTrack: kind-Eigenschaft"
short-title: kind
slug: Web/API/VideoTrack/kind
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`kind`** des [`VideoTrack`](/de/docs/Web/API/VideoTrack)-Interfaces enthält einen String, der die Kategorie des im **[`VideoTrack`](/de/docs/Web/API/VideoTrack)** enthaltenen Videos angibt.

Mit `kind` lässt sich bestimmen, in welchen Situationen bestimmte Tracks aktiviert oder deaktiviert werden sollten. Eine Liste der verfügbaren Arten von Videotracks finden Sie unter [Strings für Videotrack-Arten](#strings_für_videotrack-arten).

## Wert

Ein String, der die Art des Medieninhalts angibt. Der String entspricht einem der unten unter [Strings für Videotrack-Arten](#strings_für_videotrack-arten) aufgeführten Werte.

## Strings für Videotrack-Arten

Für Videotracks sind folgende Arten verfügbar:

- `"alternative"`
  - : Eine mögliche Alternative zum Haupttrack, beispielsweise eine andere Videoaufnahme oder eine Version der Tonspur, die nur Musik und keine Dialoge enthält.
- `"captions"`
  - : Eine Version des Hauptvideotracks mit fest eingeblendeten Untertiteln.
- `"main"`
  - : Der primäre Videotrack.
- `"sign"`
  - : Eine gebärdensprachliche Interpretation eines Audiotracks.
- `"subtitles"`
  - : Eine Version des Hauptvideotracks mit fest eingeblendeten Untertiteln.
- `"commentary"`
  - : Ein Videotrack mit einem Kommentar. Er kann beispielsweise den Regiekommentar zu einem Film enthalten.
- `""` (leerer String)
  - : Für den Track ist keine Art ausdrücklich angegeben, oder die in den Metadaten des Tracks angegebene Art wird vom {{Glossary("user_agent", "User Agent")}} nicht erkannt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
