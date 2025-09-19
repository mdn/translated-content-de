---
title: BCP 47-Sprach-Tag
slug: Glossary/BCP_47_language_tag
l10n:
  sourceCommit: 98183ef36c82def3a60a729100ab6aa2983aeed3
---

Ein **BCP 47-Sprach-Tag** ist eine Zeichenfolge, die eine menschliche Sprache präzise in Bezug auf die Grundsprache, aber auch optional das Schriftsystem und den Dialekt, angibt. Zum Beispiel spezifiziert `en` Englisch, aber `en-GB` und `en-US` spezifizieren genauer britisches Englisch bzw. amerikanisches Englisch.

BCP 47-Sprach-Tags werden überall auf der Webplattform verwendet, wo eine Funktion entworfen wurde, um unterschiedliche Ergebnisse je nach festgelegter Sprache auszugeben, wodurch die Unterstützung der {{Glossary("internationalization", "Internationalisierung")}} ermöglicht wird.

Beispiele umfassen:

- Das HTML-[`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut
- Das HTML-{{htmlelement("track")}}-Element
- Das {{jsxref("Temporal")}}-Objekt
- Die [`CanvasRenderingContext2D.lang`](/de/docs/Web/API/CanvasRenderingContext2D/lang)-Eigenschaft
- Die [Translator und Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs)

## BCP 47-Syntax

Die vollständige BCP 47-Syntax ist in {{rfc("5646")}} spezifiziert. Sie ist in der Lage, äußerst spezifische Sprachdialekte zu identifizieren, aber der meiste Gebrauch ist viel einfacher.

Ein Sprach-Tag besteht aus mit Bindestrichen getrennten _Subtags_, wobei jeder Subtag eine bestimmte Eigenschaft der Sprache angibt. Die drei häufigsten Subtags sind:

- Sprach-Subtag
  - : Ein 2- oder 3-Zeichen-Code, der die Grundsprache definiert, typischerweise in Kleinbuchstaben geschrieben. Zum Beispiel ist der Sprachcode für Englisch `en` und der Code für Badeshi ist `bdz`.
- Skript-Subtag {{optional_inline}}
  - : Dieser Subtag definiert das Schriftsystem, das für die Sprache verwendet wird und besteht immer aus 4 Zeichen, wobei der erste Buchstabe großgeschrieben wird. Zum Beispiel ist Französisch-in-Braille `fr-Brai` und Japanisch, geschrieben mit dem Katakana-Alphabet, ist `ja-Kana`.

    > [!NOTE]
    > Wenn die Sprache in einer sehr typischen Weise geschrieben wird, wie Englisch im lateinischen Alphabet, muss dieser Subtag nicht verwendet werden.

- Regions-Subtag {{optional_inline}}
  - : Dieser Subtag definiert einen Dialekt der Basissprache von einem bestimmten Ort und besteht entweder aus zwei Großbuchstaben, die einem Ländercode entsprechen, oder drei Zahlen, die einem Gebiet entsprechen, das kein Land ist. Zum Beispiel ist `es-ES` für Spanisch, wie es in Spanien gesprochen wird, und `es-013` ist Spanisch, wie es in Mittelamerika gesprochen wird. „Internationales Spanisch“ wäre einfach `es`.

Der Skript-Subtag geht dem Regions-Subtag voraus, wenn beide vorhanden sind — `ru-Cyrl-BY` ist Russisch, geschrieben im kyrillischen Alphabet, wie es in Weißrussland gesprochen wird.

## Siehe auch

- [RFC 5646: Tags for Identifying Languages](https://datatracker.ietf.org/doc/html/rfc5646): wo BCP 47-Sprach-Tags spezifiziert sind.
- [Choosing a Language Tag](https://www.w3.org/International/questions/qa-choosing-language-tags): W3C-Leitfaden zur Auswahl des richtigen Sprach-Tags.
- [BCP 47 language subtag lookup](https://r12a.github.io/app-subtags/): nach Subtag-Codes für eine Sprache suchen.
