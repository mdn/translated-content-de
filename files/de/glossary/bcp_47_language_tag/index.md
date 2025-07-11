---
title: BCP 47 Sprach-Tag
slug: Glossary/BCP_47_language_tag
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **BCP 47 Sprach-Tag** ist eine Zeichenfolge, die eine menschliche Sprache präzise in Bezug auf die Grundsprache, aber optional auch das Schriftsystem und den Dialekt angibt. Zum Beispiel gibt `en` Englisch an, jedoch spezifizieren `en-GB` und `en-US` genauer Britisches Englisch beziehungsweise Amerikanisches Englisch.

BCP 47 Sprach-Tags werden überall auf der Webplattform verwendet, wo eine Funktion so konzipiert wurde, dass sie je nach angegebener Sprache unterschiedliche Ergebnisse ausgibt und somit die {{Glossary("internationalization", "Internationalisierung")}} unterstützt.

Beispiele hierfür sind:

- Das HTML-Attribut [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)
- Das HTML-{{htmlelement("track")}}-Element
- Das {{jsxref("Temporal")}}-Objekt
- Die Eigenschaft [`CanvasRenderingContext2D.lang`](/de/docs/Web/API/CanvasRenderingContext2D/lang)
- Die [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs)

## BCP 47 Syntax

Die vollständige BCP 47 Syntax ist in {{rfc("5646")}} festgelegt. Sie ist in der Lage, äußerst spezifische Sprachdialekte zu identifizieren, jedoch ist der Großteil der Anwendungen wesentlich einfacher.

Ein Sprach-Tag besteht aus durch Bindestriche getrennten _Subtags_, wobei jedes Subtag eine bestimmte Eigenschaft der Sprache angibt. Die drei häufigsten Subtags sind:

- Sprachsubtag
  - : Ein 2- oder 3-stelliger Code, der die Grundsprache definiert, typischerweise in Kleinbuchstaben geschrieben. Zum Beispiel ist der Sprachcode für Englisch `en`, und der Code für Badeshi ist `bdz`.
- Schrift-Subtag {{optional_inline}}
  - : Dieses Subtag definiert das Schriftsystem, das für die Sprache verwendet wird, und ist immer 4 Zeichen lang, wobei der erste Buchstabe großgeschrieben ist. Zum Beispiel ist Französisch in Brailleschrift `fr-Brai` und Japanisch, geschrieben mit dem Katakana-Alphabet, `ja-Kana`.

    > [!NOTE]
    > Falls die Sprache auf eine sehr typische Weise geschrieben wird, wie Englisch mit dem lateinischen Alphabet, besteht keine Notwendigkeit, dieses Subtag zu verwenden.

- Regions-Subtag {{optional_inline}}
  - : Dieses Subtag definiert einen Dialekt der Grundsprache aus einem bestimmten Ort und besteht entweder aus zwei Großbuchstaben, die einem Ländercode entsprechen, oder aus drei Zahlen, die einem nicht ländergebundenen Gebiet entsprechen. Zum Beispiel steht `es-ES` für Spanisch, wie es in Spanien gesprochen wird, und `es-013` für Spanisch, wie es in Zentralamerika gesprochen wird. "Internationales Spanisch" wäre einfach `es`.

Der Schrift-Subtag geht dem Regions-Subtag voraus, falls beide vorhanden sind — `ru-Cyrl-BY` ist Russisch, geschrieben im kyrillischen Alphabet, wie es in Belarus gesprochen wird.

## Siehe auch

- [RFC 5646: Tags for Identifying Languages](https://datatracker.ietf.org/doc/html/rfc5646): wo BCP 47 Sprach-Tags spezifiziert sind.
- [BCP 47 Sprach-Subtag-Nachschlagewerk](https://r12a.github.io/app-subtags/): Nachschlagen von Subtag-Codes für eine Sprache.
