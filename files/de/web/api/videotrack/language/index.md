---
title: "VideoTrack: language-Eigenschaft"
short-title: language
slug: Web/API/VideoTrack/language
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **[`VideoTrack`](/de/docs/Web/API/VideoTrack)**-Eigenschaft **`language`** gibt einen String zurück, der die im Videospur verwendete Sprache identifiziert.

Für Spuren, die mehrere Sprachen enthalten (wie ein Film auf Englisch, in dem einige Zeilen in anderen Sprachen gesprochen werden), sollte hier die primäre Sprache des Videos angegeben werden.

## Wert

Ein String, der das Sprach-Tag im BCP 47 ({{RFC(5646)}}) Format der primären Sprache der Videospur angibt oder ein leerer String (`""`), wenn die Sprache nicht spezifiziert oder bekannt ist oder wenn die Spur keine Sprache enthält.

Zum Beispiel, wenn die primäre Sprache der Spur amerikanisches Englisch ist, wäre dieser Wert `"en-US"`. Für brasilianisches Portugiesisch wäre der Wert `"pt-BR"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
