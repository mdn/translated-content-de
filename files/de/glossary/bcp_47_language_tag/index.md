---
title: BCP 47-Sprachkode
slug: Glossary/BCP_47_language_tag
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Ein **BCP 47-Sprachkode** ist eine Zeichenkette, die eine menschliche Sprache genau bestimmt, in Bezug auf die grundlegende Sprache, aber auch optional das Schriftsystem und den Dialekt. Zum Beispiel spezifiziert `en` Englisch, während `en-GB` und `en-US` genauer Britisches Englisch beziehungsweise Amerikanisches Englisch bezeichnen.

BCP 47-Sprachkodes werden überall auf der Web-Plattform verwendet, wo eine Funktion darauf ausgelegt ist, je nach angegebener Sprache unterschiedliche Ergebnisse auszugeben, um die {{Glossary("internationalization", "Internationalisierung")}} zu unterstützen.

Beispiele beinhalten:

- Das HTML-Attribut [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)
- Das HTML {{htmlelement("track")}} Element
- Das {{jsxref("Temporal")}} Objekt
- Die [`CanvasRenderingContext2D.lang`](/de/docs/Web/API/CanvasRenderingContext2D/lang) Eigenschaft
- Die [Übersetzer- und Spracherkennungs-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs)

## BCP 47-Syntax

Die vollständige BCP 47-Syntax ist in {{rfc("5646")}} spezifiziert. Sie ist in der Lage, extrem spezifische Sprachdialekte zu identifizieren, jedoch ist die meiste Anwendung wesentlich einfacher.

Ein Sprachkode besteht aus durch Bindestriche getrennten _Subtags_, wobei jeder Subtag eine bestimmte Eigenschaft der Sprache angibt. Die drei häufigsten Subtags sind:

- Sprach-Subtag
  - : Ein 2-oder-3-stelliger Code, der die grundlegende Sprache definiert, typischerweise in Kleinbuchstaben geschrieben. Zum Beispiel ist der Sprachcode für Englisch `en`, und der Code für Badeshi ist `bdz`.
- Schrift-Subtag {{optional_inline}}
  - : Dieser Subtag definiert das für die Sprache verwendete Schriftsystem und ist immer 4 Zeichen lang, wobei der erste Buchstabe großgeschrieben ist. Zum Beispiel ist Französisch-in-Braille `fr-Brai` und Japanisch, geschrieben mit dem Katakana-Alphabet, `ja-Kana`.

    > [!NOTE]
    > Wenn die Sprache auf eine sehr typische Weise geschrieben wird, wie Englisch im lateinischen Alphabet, ist es nicht nötig, diesen Subtag zu verwenden.

- Regions-Subtag {{optional_inline}}
  - : Dieser Subtag definiert einen Dialekt der Basissprache aus einem bestimmten Ort und besteht entweder aus zwei Großbuchstaben, die einem Ländercode entsprechen, oder aus drei Zahlen, die einem nicht Land-gebundenen Gebiet entsprechen. Zum Beispiel steht `es-ES` für Spanisch, wie es in Spanien gesprochen wird, und `es-013` für Spanisch, wie es in Mittelamerika gesprochen wird. "Internationales Spanisch" wäre einfach `es`.

Der Schrift-Subtag geht dem Regions-Subtag voraus, wenn beide vorhanden sind — `ru-Cyrl-BY` ist Russisch, geschrieben im kyrillischen Alphabet, wie es in Belarus gesprochen wird.

## Siehe auch

- [Liste der häufigen primären Sprach-Subtags](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags)
- [RFC 5646: Tags for Identifying Languages](https://datatracker.ietf.org/doc/html/rfc5646): wo BCP 47 Sprachkodes spezifiziert sind.
- [Choosing a Language Tag](https://www.w3.org/International/questions/qa-choosing-language-tags): W3C-Leitfaden zum Auswählen des richtigen Sprachkodes.
- [BCP 47 language subtag lookup](https://r12a.github.io/app-subtags/): Nachschlagen von Subtag-Codes für eine Sprache.
