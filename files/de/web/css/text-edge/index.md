---
title: <text-edge>
slug: Web/CSS/text-edge
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`<text-edge>`** {{Glossary("enumerated", "aufgezählte")}} [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) definiert Schlüsselwörter, die Schriftmetrik angeben, die bestimmte Bereiche an der Blockanfangskante und Blockendkanten eines Schriftblocks repräsentieren. Jedes Schlüsselwort legt eine Position der Über- und/oder Unterkante einer Schriftart fest.

Die `<text-edge>`-Werte werden in der {{cssxref("text-box-edge")}}-Eigenschaft verwendet, um die Menge des Abstands anzugeben, der von der Blockanfangs- und Blockendkante des Blockcontainers eines Textelements abgeschnitten werden soll.

## Syntax

Der `<text-edge>`-Datentyp besteht aus einem oder zwei Schlüsselwörtern, die spezifische Bereiche an der Blockanfangskante (über) und/oder Blockendkante (unter) einer Schriftart repräsentieren:

- Wenn ein Wert angegeben wird, werden die Positionen der Überkante und Unterkante der Schriftart mithilfe dieses gleichen Schlüsselworts angegeben.
- Wenn zwei Werte angegeben werden, spezifiziert der erste Wert die Position der Überkante der Schriftart, und der zweite Wert spezifiziert die Position der Unterkante.

### Werte

#### Einzelne Schlüsselwortwerte

- `text`
  - : Die Über- und Unterkanten der Schriftart sind ihre Textüber-Basislinie/Textunter-Basislinie: Dies schließt die Auf- und Abstriche der Schriftart ein, jedoch nicht die für den Text festgelegte {{Glossary("Leading", "Halbführung")}}.

    > [!NOTE]
    > Die im Textelement enthaltene Menge an Halbführung kann mit der {{cssxref("line-height")}}-Eigenschaft gesteuert werden.

> [!NOTE]
> Die Schlüsselwörter `ideographic` und `ideographic-ink` sind dazu gedacht, Über- und Unterkantenpositionen festzulegen, die spezifisch für [CJK-Sprachzeichen](https://en.wikipedia.org/wiki/CJK_characters) sind. Derzeit wird ihr genaues Verhalten diskutiert, und sie werden von keinem Browser unterstützt.

#### Zwei Schlüsselwortwerte

- `alphabetic`
  - : Die Unterkante der Schriftart ist ihre alphabetische Basislinie, die der Boden ihrer kurzen Kleinbuchstaben (z.B. "m", "n" und "o") oder Großbuchstaben ist.
- `cap`
  - : Die Überkante der Schriftart ist ihre Versalhöhe-Basislinie, die die Oberkante ihrer Großbuchstaben ist.
- `ex`
  - : Die Überkante der Schriftart ist ihre x-Höhen-Basislinie, die die Oberkante ihrer kurzen Kleinbuchstaben ist.
- `text`
  - : Die Überkante der Schriftart ist ihre Textüber-Basislinie (schließt die Aufstriche der Schriftart ein, aber die Überkanten-Halbführung aus), oder ihre Unterkante ist ihre Textunter-Basislinie (schließt die Abstriche der Schriftart ein, aber die Unterkanten-Halbführung aus), je nach dem, für welche Kante der Wert festgelegt ist.

## Formale Syntax

{{CSSSyntaxRaw(`<text-edge> = [ text | ideographic | ideographic-ink ] | [ text | ideographic | ideographic-ink | cap | ex ] [ text | ideographic | ideographic-ink | alphabetic ]`)}}

## Beispiele

Siehe [Beispiele zu `text-box-edge`](/de/docs/Web/CSS/text-box-edge#examples)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-edge")}}, {{cssxref("text-box-trim")}}
- [Modul CSS-Inline-Layout](/de/docs/Web/CSS/CSS_inline_layout)
