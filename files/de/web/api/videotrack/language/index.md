---
title: "VideoTrack: language-Eigenschaft"
short-title: language
slug: Web/API/VideoTrack/language
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **[`VideoTrack`](/de/docs/Web/API/VideoTrack)**
Eigenschaft **`language`** gibt eine Zeichenkette zurück, die die
Sprache identifiziert, die im Video-Track verwendet wird.

Bei Spuren, die mehrere Sprachen umfassen
(zum Beispiel ein Film auf Englisch, in dem einige Zeilen in anderen Sprachen gesprochen werden), sollte dies die Hauptsprache des Videos sein.

## Wert

Eine Zeichenkette, die den BCP 47 ({{RFC(5646)}}) Format-Sprach-Tag der
Hauptsprache angibt, die im Video-Track verwendet wird, oder eine leere Zeichenkette (`""`), wenn die Sprache nicht angegeben oder unbekannt ist, oder wenn der Track keine Sprache enthält.

Zum Beispiel, wenn die Hauptsprache des Tracks US-Englisch ist, würde dieser
Wert `"en-US"` sein. Für brasilianisches Portugiesisch wäre der Wert
`"pt-BR"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
