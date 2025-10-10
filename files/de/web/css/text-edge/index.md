---
title: <text-edge>
slug: Web/CSS/text-edge
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Der **`<text-edge>`** {{Glossary("enumerated", "enumerierte")}} [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) definiert Schlüsselwörter, die Schriftmetriken spezifizieren, die bestimmte Bereiche am Blockanfang und Blockende einer Schriftart darstellen. Jedes Schlüsselwort gibt eine Position des oberen und/oder unteren Randes einer Schriftart an.

Die `<text-edge>`-Werte werden in der {{cssxref("text-box-edge")}}-Eigenschaft verwendet, um eine Menge an Platz anzugeben, die vom Blockanfang und Blockende des Blockcontainers eines Textelements abgeschnitten werden soll.

## Syntax

Der `<text-edge>`-Datentyp besteht aus einem oder zwei Schlüsselwörtern, die bestimmte Bereiche am Blockanfang (oben) und/oder Blockende (unten) einer Schriftart darstellen:

- Wenn ein Wert angegeben ist, wird die Position des oberen und unteren Rands der Schriftart mit demselben Schlüsselwort angegeben.
- Wenn zwei Werte angegeben sind, gibt der erste Wert die Position des oberen Rands der Schriftart an, und der zweite Wert gibt die Position des unteren Rands an.

### Werte

#### Einzelne Schlüsselwortwerte

- `text`
  - : Die oberen und unteren Ränder der Schriftart sind die Text-über-Basislinie/Text-unter-Basislinie: Dies schließt die Auf- und Abstriche der Schriftart ein, schließt jedoch das {{Glossary("Leading", "halbe Führungsmaß")}} aus, das auf dem Text festgelegt ist.

    > [!NOTE]
    > Die Menge an halbem Führungsmaß, die auf einem Textelement enthalten ist, kann mit der {{cssxref("line-height")}}-Eigenschaft gesteuert werden.

> [!NOTE]
> Die Schlüsselwörter `ideographic` und `ideographic-ink` sollen spezifische obere und untere Randpositionen für [CJK-Zeichen](https://en.wikipedia.org/wiki/CJK_characters) angeben. Derzeit wird ihr genaues Verhalten noch diskutiert und sie werden von keinem Browser unterstützt.

#### Zwei Schlüsselwortwerte

- `alphabetic`
  - : Der untere Rand der Schriftart ist ihre alphabetische Basislinie, die der untere Rand ihrer kurzen Kleinbuchstaben (zum Beispiel "m", "n" und "o") oder Großbuchstaben ist.
- `cap`
  - : Der obere Rand der Schriftart ist die obere Höhe ihrer Großbuchstaben.
- `ex`
  - : Der obere Rand der Schriftart ist die x-Höhe, die die obere Höhe ihrer kurzen Kleinbuchstaben ist.
- `text`
  - : Der obere Rand der Schriftart ist die Text-über-Basislinie (schließt die Aufstriche der Schriftart ein, schließt jedoch das obere Rand halbe Führungsmaß aus), oder der untere Rand ist die Text-unter-Basislinie (schließt die Abstriche der Schriftart ein, schließt jedoch das untere Rand halbe Führungsmaß aus), abhängig davon, für welchen Rand der Wert festgelegt ist.

## Formale Syntax

{{CSSSyntaxRaw(`<text-edge> = [ text | ideographic | ideographic-ink ] | [ text | ideographic | ideographic-ink | cap | ex ] [ text | ideographic | ideographic-ink | alphabetic ]`)}}

## Beispiele

Siehe [`text-box-edge`-Beispiele](/de/docs/Web/CSS/text-box-edge#examples)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-edge")}}, {{cssxref("text-box-trim")}}
- [CSS-Inline-Layout](/de/docs/Web/CSS/CSS_inline_layout) Modul
