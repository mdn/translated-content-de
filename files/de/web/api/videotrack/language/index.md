---
title: "VideoTrack: language-Eigenschaft"
short-title: language
slug: Web/API/VideoTrack/language
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **[`VideoTrack`](/de/docs/Web/API/VideoTrack)**
**`language`** gibt einen String zurück, der die im Videospur verwendete Sprache identifiziert.

Für Spuren, die mehrere Sprachen enthalten
(zum Beispiel ein Film auf Englisch, in dem einige Zeilen in anderen Sprachen gesprochen werden), sollte dies die Hauptsprache des Videos sein.

## Wert

Ein String, der das {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}} der in der Videospur verwendeten Hauptsprache angibt, oder ein leerer String (`""`), wenn die Sprache nicht spezifiziert oder bekannt ist oder wenn die Spur keine Sprache enthält.

Zum Beispiel, wenn die Hauptsprache der Spur US-Englisch ist, wäre dieser Wert `"en-US"`. Für brasilianisches Portugiesisch wäre der Wert `"pt-BR"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
