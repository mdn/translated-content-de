---
title: "AudioTrack: kind-Eigenschaft"
short-title: kind
slug: Web/API/AudioTrack/kind
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`kind`** der [`AudioTrack`](/de/docs/Web/API/AudioTrack)-Schnittstelle enthält eine Zeichenfolge, die die Kategorie der im **[`AudioTrack`](/de/docs/Web/API/AudioTrack)** enthaltenen Audiodaten angibt.

Anhand von `kind` lässt sich bestimmen, in welchen Situationen bestimmte Tracks aktiviert oder deaktiviert werden sollten. Eine Liste der verfügbaren Arten von Audiotracks finden Sie unter [Zeichenfolgen für Audiotrack-Arten](#zeichenfolgen_für_audiotrack-arten).

## Wert

Eine Zeichenfolge, die den Typ des Medieninhalts angibt. Sie entspricht einem der unten unter [Zeichenfolgen für Audiotrack-Arten](#zeichenfolgen_für_audiotrack-arten) aufgeführten Werte.

## Zeichenfolgen für Audiotrack-Arten

Für Audiotracks sind folgende Arten verfügbar:

- `"alternative"`
  - : Eine mögliche Alternative zum Haupttrack, etwa eine andere Audioaufnahme oder eine Version der Tonspur, die nur Musik und keine Dialoge enthält.
- `"descriptions"`
  - : Ein Audiotrack mit hörbaren Beschreibungen des Geschehens in einem Videotrack.
- `"main"`
  - : Der primäre Audiotrack.
- `"main-desc"`
  - : Der primäre Audiotrack mit eingemischten Audiobeschreibungen.
- `"translation"`
  - : Eine übersetzte Version des primären Audiotracks.
- `"commentary"`
  - : Ein Audiotrack mit einem Kommentar, beispielsweise dem Regiekommentar zu einem Film.
- `""` (leere Zeichenfolge)
  - : Für den Track wurde keine Art ausdrücklich angegeben, oder die in den Metadaten des Tracks angegebene Art wird vom {{Glossary("user_agent", "User Agent")}} nicht erkannt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
