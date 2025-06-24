---
title: <text-edge>
slug: Web/CSS/text-edge
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Der **`<text-edge>`** {{Glossary("enumerated", "aufzählbare")}} [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) definiert Schlüsselwörter, die Schriftmetriken spezifizieren, die bestimmte Bereiche auf der Block-Startkante und Block-Endkante einer Schrift repräsentieren. Jedes Schlüsselwort legt eine Position der Über- und/oder Unterkante einer Schrift fest.

Die `<text-edge>` Werte werden in der {{cssxref("text-box-edge")}} Eigenschaft verwendet, um eine Menge Platz zu definieren, die von der Block-Start- und Block-Endkante des Block-Containers eines Textelements abgeschnitten werden soll.

## Syntax

```css
<text-edge> =
  [ text | ideographic | ideographic-ink ] |
  [ text | ideographic | ideographic-ink | cap | ex ] [ text | ideographic | ideographic-ink | alphabetic ]
```

> [!NOTE]
> Die Schlüsselwörter `ideographic` und `ideographic-ink` sollen Über- und Unterkantenpositionen spezifizieren, die speziell für [CJK Sprachzeichen](https://en.wikipedia.org/wiki/CJK_characters) relevant sind. Derzeit wird ihr genaues Verhalten diskutiert und sie werden von keinem Browser unterstützt.

## Werte

Der `<text-edge>` Datentyp besteht aus einem oder zwei Schlüsselwörtern, die bestimmte Bereiche auf der Block-Start (Über-)Kante und/oder Block-End (Unter-)Kante einer Schrift repräsentieren:

- Wenn ein Wert angegeben wird, wird die Position der Über- und Unterkante der Schrift mit demselben Schlüsselwort spezifiziert.
- Wenn zwei Werte angegeben werden, spezifiziert der erste Wert die Position der Überkante der Schrift, und der zweite Wert spezifiziert die Position der Unterkante der Schrift.

### Einzelne Schlüsselwortwerte

- `text`

  - : Die Über- und Unterkanten der Schrift sind die Baseline über/unter des Textes: Dies umfasst die Aufstriche und Abstriche der Schrift, schließt jedoch das {{Glossary("Leading", "halbe Durchschuss")}} aus, das auf den Text gesetzt ist.

    > [!NOTE]
    > Die Menge der im Textelement enthaltenen halben Durchschuss kann mit der {{cssxref("line-height")}} Eigenschaft gesteuert werden.

### Zwei Schlüsselwortwerte

- `alphabetic`
  - : Die Unterkante der Schrift ist ihre alphabetische Baseline, was der untere Teil ihrer kurzen Kleinbuchstaben (z.B. "m", "n" und "o") oder Großbuchstaben ist.
- `cap`
  - : Die Überkante der Schrift ist ihre Versalhöhe-Baseline, was der obere Teil ihrer Großbuchstaben ist.
- `ex`
  - : Die Überkante der Schrift ist ihre x-Höhe-Baseline, was der obere Teil ihrer kurzen Kleinbuchstaben ist.
- `text`
  - : Die Überkante der Schrift ist ihre Baseline über dem Text (umfasst die Aufstriche der Schrift, schließt jedoch den überkanten Durchschuss aus), oder ihre Unterkante ist ihre Baseline unter dem Text (umfasst die Abstriche der Schrift, schließt jedoch den unterkanten Durchschuss aus), abhängig davon, für welche Kante der Wert festgelegt wird.

## Beispiele

Siehe [`text-box-edge` Beispiele](/de/docs/Web/CSS/text-box-edge#examples)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-edge")}}, {{cssxref("text-box-trim")}}
- [CSS Inline-Layout](/de/docs/Web/CSS/CSS_inline_layout) Modul
