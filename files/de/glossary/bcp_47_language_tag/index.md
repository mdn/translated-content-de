---
title: BCP 47 Sprach-Tag
slug: Glossary/BCP_47_language_tag
l10n:
  sourceCommit: da2997666dd2ac0186ebaaaf55bb7abbaa328f79
---

{{GlossarySidebar}}

Ein **BCP 47 Sprach-Tag** ist eine Zeichenfolge, die eine menschliche Sprache präzise in Bezug auf die Grundsprache und optional auch das Schriftsystem und den Dialekt angibt. Zum Beispiel spezifiziert `en` Englisch, aber `en-GB` und `en-US` geben präziser Britisches Englisch bzw. Amerikanisches Englisch an.

BCP 47 Sprach-Tags werden überall auf der Webplattform verwendet, wo ein Feature so gestaltet ist, dass es unterschiedliche Ergebnisse abhängig von der angegebenen Sprache ausgibt, um {{Glossary("internationalization", "Internationalisierung")}} zu unterstützen.

Beispiele umfassen:

- Das HTML-Attribut [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)
- Das HTML-{{htmlelement("track")}}-Element
- Das {{jsxref("Temporal")}}-Objekt
- Die [`CanvasRenderingContext2D.lang`](/de/docs/Web/API/CanvasRenderingContext2D/lang)-Eigenschaft
- Die [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs)

## BCP 47 Syntax

Die vollständige BCP 47 Syntax ist in {{rfc("5646")}} spezifiziert. Sie ist in der Lage, äußerst spezifische Sprachdialekte zu identifizieren, aber die meisten Anwendungsfälle sind viel einfacher.

Ein Sprach-Tag besteht aus durch Bindestriche getrennten _Subtags_, wobei jeder Subtag eine bestimmte Eigenschaft der Sprache angibt. Die drei häufigsten Subtags sind:

- Sprach-Subtag
  - : Ein 2-oder-3-Zeichen-Code, der die Grundsprache definiert, typischerweise in Kleinbuchstaben geschrieben. Zum Beispiel ist der Sprachcode für Englisch `en`, und der Code für Badeshi ist `bdz`.
- Schrift-Subtag {{optional_inline}}

  - : Dieser Subtag definiert das für die Sprache verwendete Schriftsystem und ist immer 4 Zeichen lang, wobei der erste Buchstabe großgeschrieben wird. Zum Beispiel ist Französisch in Braille `fr-Brai` und Japanisch, geschrieben mit dem Katakana-Alphabet, `ja-Kana`.

    > [!NOTE]
    > Wenn die Sprache in einer sehr typischen Weise geschrieben wird, wie Englisch im lateinischen Alphabet, ist es nicht notwendig, diesen Subtag zu verwenden.

- Region-Subtag {{optional_inline}}
  - : Dieser Subtag definiert einen Dialekt der Grundsprache aus einem bestimmten Ort und besteht entweder aus zwei Großbuchstaben, die einem Ländercode entsprechen, oder aus drei Zahlen, die einem Nicht-Länder-Bereich entsprechen. Zum Beispiel steht `es-ES` für Spanisch, wie es in Spanien gesprochen wird, und `es-013` für Spanisch, wie es in Zentralamerika gesprochen wird. "Internationales Spanisch" wäre einfach `es`.

Das Schrift-Subtag geht dem Regions-Subtag voraus, wenn beide vorhanden sind — `ru-Cyrl-BY` ist Russisch, geschrieben im kyrillischen Alphabet, wie es in Belarus gesprochen wird.

## Siehe auch

- [RFC 5646: Tags for Identifying Languages](https://datatracker.ietf.org/doc/html/rfc5646): wo BCP 47 Sprach-Tags spezifiziert sind.
- [BCP 47 language subtag lookup](https://r12a.github.io/app-subtags/): Suche nach Subtag-Codes für eine Sprache.
