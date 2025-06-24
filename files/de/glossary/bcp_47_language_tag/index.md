---
title: BCP 47 Sprach-Tag
slug: Glossary/BCP_47_language_tag
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{GlossarySidebar}}

Ein **BCP 47 Sprach-Tag** ist eine Zeichenfolge, die eine menschliche Sprache genau spezifiziert, einschließlich der grundlegenden Sprache, aber optional auch des Schriftsystems und des Dialekts. Zum Beispiel spezifiziert `en` Englisch, während `en-GB` und `en-US` genauer Britisches Englisch bzw. Amerikanisches Englisch spezifizieren.

BCP 47 Sprach-Tags werden überall dort auf der Webplattform verwendet, wo eine Funktion designed wurde, um unterschiedliche Ergebnisse je nach angegebener Sprache auszugeben, was die {{Glossary("internationalization", "Internationalisierung")}} unterstützt.

Beispiele umfassen:

- Das HTML-Attribut [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)
- Das HTML-Element {{htmlelement("track")}}
- Das Objekt {{jsxref("Temporal")}}
- Die Eigenschaft [`CanvasRenderingContext2D.lang`](/de/docs/Web/API/CanvasRenderingContext2D/lang)
- Die [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs)

## BCP 47 Syntax

Die vollständige BCP 47 Syntax ist in {{rfc("5646")}} spezifiziert. Sie ist in der Lage, äußerst spezifische Sprachdialekte zu identifizieren, aber die meisten Anwendungen sind viel einfacher.

Ein Sprach-Tag besteht aus durch Bindestriche getrennten _Subtags_, wobei jedes Subtag eine bestimmte Eigenschaft der Sprache angibt. Die drei häufigsten Subtags sind:

- Sprach-Subtag
  - : Ein 2- oder 3-stelliger Code, der die grundlegende Sprache definiert, typischerweise in Kleinbuchstaben geschrieben. Zum Beispiel ist der Sprachcode für Englisch `en`, und der Code für Badeshi ist `bdz`.
- Schrift-Subtag {{optional_inline}}

  - : Dieses Subtag definiert das für die Sprache verwendete Schriftsystem und ist immer 4 Zeichen lang, wobei der erste Buchstabe großgeschrieben ist. Zum Beispiel ist Französisch in Braille `fr-Brai` und Japanisch, geschrieben mit dem Katakana-Alphabet, `ja-Kana`.

    > [!NOTE]
    > Wenn die Sprache auf eine sehr typische Weise geschrieben wird, wie Englisch im lateinischen Alphabet, ist es nicht notwendig, dieses Subtag zu verwenden.

- Regions-Subtag {{optional_inline}}
  - : Dieses Subtag definiert einen Dialekt der Basissprache aus einem bestimmten Ort und besteht entweder aus zwei Großbuchstaben, die einem Ländercode entsprechen, oder drei Zahlen, die einem nicht landgebundenen Gebiet entsprechen. Zum Beispiel steht `es-ES` für Spanisch, wie es in Spanien gesprochen wird, und `es-013` steht für Spanisch, wie es in Zentralamerika gesprochen wird. "Internationales Spanisch" wäre einfach `es`.

Das Schrift-Subtag geht dem Regions-Subtag voraus, wenn beide vorhanden sind — `ru-Cyrl-BY` ist Russisch, geschrieben im kyrillischen Alphabet, wie es in Weißrussland gesprochen wird.

## Siehe auch

- [RFC 5646: Tags for Identifying Languages](https://datatracker.ietf.org/doc/html/rfc5646): wo BCP 47 Sprach-Tags spezifiziert sind.
- [BCP 47 language subtag lookup](https://r12a.github.io/app-subtags/): Suche nach Subtag-Codes für eine Sprache.
