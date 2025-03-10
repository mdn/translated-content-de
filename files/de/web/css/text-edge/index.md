---
title: <text-edge>
slug: Web/CSS/text-edge
l10n:
  sourceCommit: f731452fabde211bee55aedd39fc83d60c4e4918
---

{{CSSRef}}

Der **`<text-edge>`** {{Glossary("enumerated", "aufzählbare")}} [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) definiert Schlüsselwörter, die Schriftmetrik repräsentieren und bestimmte Regionen am Block-Start- und Block-Ende-Rand einer Schriftart angeben. Jedes Schlüsselwort spezifiziert eine Position der oberen und/oder unteren Kante einer Schriftart.

Die `<text-edge>`-Werte werden in der {{cssxref("text-box-edge")}}-Eigenschaft verwendet, um einen Bereich zu spezifizieren, der vom Block-Start- und Block-Ende-Rand des Blockcontainers eines Textelements abgeschnitten werden soll.

## Syntax

```css
<text-edge> =
  [ text | ideographic | ideographic-ink ] |
  [ text | ideographic | ideographic-ink | cap | ex ] [ text | ideographic | ideographic-ink | alphabetic ]
```

> [!NOTE]
> Die Schlüsselwörter `ideographic` und `ideographic-ink` dienen dazu, spezifische obere und untere Kantenpositionen für [CJK-Sprachzeichen](https://en.wikipedia.org/wiki/CJK_characters) zu spezifizieren. Derzeit wird ihr genaues Verhalten noch diskutiert und sie werden von keinem Browser unterstützt.

## Werte

Der `<text-edge>`-Datentyp besteht aus einem oder zwei Schlüsselwörtern, die bestimmte Regionen am Block-Start (oben) und/oder Block-Ende (unten) einer Schriftart repräsentieren:

- Wenn ein Wert angegeben wird, werden die Positionen der oberen und unteren Kante der Schriftart mit demselben Schlüsselwort spezifiziert.
- Wenn zwei Werte angegeben werden, spezifiziert der erste Wert die Position der oberen Kante der Schriftart, und der zweite Wert spezifiziert die Position der unteren Kante der Schriftart.

### Einzelne Schlüsselwort-Werte

- `text`

  - : Die oberen und unteren Kanten der Schriftart sind die Text-Über-Baseline/Text-Unter-Baseline: Dies schließt die Aufschwünge und Abstiege der Schriftart ein, jedoch nicht das auf den Text gesetzte {{Glossary("Leading", "Halb-Zeilenabstand")}}.

    > [!NOTE]
    > Die Menge des halbierten Zeilenabstands, die auf ein Textelement angewendet wird, kann mit der {{cssxref("line-height")}}-Eigenschaft gesteuert werden.

### Zwei-Schlüsselwort-Werte

- `alphabetic`
  - : Die untere Kante der Schriftart ist ihre alphabetische Basislinie, das ist der Boden ihrer kurzen Kleinbuchstaben (zum Beispiel "m", "n" und "o") oder Großbuchstaben.
- `cap`
  - : Die obere Kante der Schriftart ist ihre Versalhöhe-Basislinie, das ist der obere Abschluss ihrer Großbuchstaben.
- `ex`
  - : Die obere Kante der Schriftart ist ihre x-Höhe-Basislinie, das ist der obere Abschluss ihrer kurzen Kleinbuchstaben.
- `text`
  - : Die obere Kante der Schriftart ist ihre Text-Über-Baseline (schließt die Aufschwünge der Schriftart ein, aber nicht das obere Kanten-Halb-Führungs-Ein), oder ihre untere Kante ist ihre Text-Unter-Baseline (schließt die Abstiege der Schriftart ein, aber nicht das untere Kanten-Halb-Führungs-Ein), abhängig davon, für welche Kante der Wert festgelegt ist.

## Beispiele

Siehe [`text-box-edge`-Beispiele](/de/docs/Web/CSS/text-box-edge#examples)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-edge")}}, {{cssxref("text-box-trim")}}
- [CSS Inline-Layout](/de/docs/Web/CSS/CSS_inline_layout) Modul
