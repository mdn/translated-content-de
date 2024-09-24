---
title: "VideoTrack: language-Eigenschaft"
short-title: language
slug: Web/API/VideoTrack/language
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **{{domxref("VideoTrack")}}**-Eigenschaft **`language`** gibt eine Zeichenfolge zurück, die die im Videospur verwendete Sprache identifiziert.

Bei Spuren, die mehrere Sprachen enthalten (wie ein Film auf Englisch, in dem einige Zeilen in anderen Sprachen gesprochen werden), sollte dies die primäre Sprache des Videos sein.

## Wert

Eine Zeichenfolge, die das Sprach-Tag im BCP 47 ({{RFC(5646)}}) Format der primären Sprache angibt, die in der Videospur verwendet wird, oder eine leere Zeichenfolge (`""`), wenn die Sprache nicht angegeben oder bekannt ist oder wenn die Spur keine Sprache enthält.

Zum Beispiel, wenn die primäre Sprache in der Spur amerikanisches Englisch ist, wäre dieser Wert `"en-US"`. Für brasilianisches Portugiesisch wäre der Wert `"pt-BR"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
