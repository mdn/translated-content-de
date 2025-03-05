---
title: <text-edge>
slug: Web/CSS/text-edge
l10n:
  sourceCommit: b6dacb9087010826a5a7d5b2d7c428e89d8135cf
---

{{CSSRef}}

Der **`<text-edge>`** {{Glossary("enumerated", "aufgezählte")}} [Datentyp](/de/docs/Web/CSS/CSS_Types) definiert Schlüsselwörter, die Schriftmetriken angeben, die bestimmte Bereiche an der Block-Anfangskante und Block-Endkante einer Schrift repräsentieren. Jedes Schlüsselwort spezifiziert eine Position der oberen und/oder unteren Kante einer Schrift.

Die `<text-edge>` Werte werden in der {{cssxref("text-box-edge")}} Eigenschaft verwendet, um einen Betrag von Raum festzulegen, der von der Block-Anfangskante und Block-Endkante des Blockcontainers eines Textelements abzuziehen ist.

## Syntax

```css
<text-edge> =
  [ text | ideographic | ideographic-ink ] |
  [ text | ideographic | ideographic-ink | cap | ex ] [ text | ideographic | ideographic-ink | alphabetic ]
```

> [!NOTE]
> Die `ideographic` und `ideographic-ink` Schlüsselwörter sind dafür vorgesehen, obere und untere Kantenpositionen spezifisch für [CJK-Schriftzeichen](https://en.wikipedia.org/wiki/CJK_characters) anzugeben. Derzeit wird ihr genaues Verhalten diskutiert und sie werden von keinem Browser unterstützt.

## Werte

Der `<text-edge>` Datentyp besteht aus einem oder zwei Schlüsselwörtern, die spezielle Bereiche an der Block-Anfangskante (oben) und/oder Block-Endkante (unten) einer Schrift darstellen:

- Wenn ein Wert angegeben ist, wird die Position der oberen und unteren Kante der Schrift mit demselben Schlüsselwort angegeben.
- Wenn zwei Werte angegeben sind, gibt der erste Wert die Position der oberen Kante der Schrift an, und der zweite Wert gibt die Position der unteren Kante der Schrift an.

### Einzelne Schlüsselwort-Werte

- `text`

  - : Die oberen und unteren Kanten der Schrift entsprechen der Text-über-Baseline/Text-unter-Baseline: dies schließt die Ascender und Descender der Schrift ein, jedoch ohne das {{Glossary("Leading", "Halbführungszeichen")}}, das auf den Text eingestellt ist.

    > [!NOTE]
    > Die Menge des auf ein Textelement angewendeten Halbführungszeichens kann mit der {{cssxref("line-height")}} Eigenschaft gesteuert werden.

### Zwei Schlüsselwort-Werte

- `alphabetic`
  - : Die untere Kante der Schrift ist ihre alphabetische Baseline, was der untere Bereich ihrer kurzen Kleinbuchstaben (zum Beispiel "m", "n" und "o") oder Großbuchstaben ist.
- `cap`
  - : Die obere Kante der Schrift ist ihre Cap-Höhen-Baseline, was der obere Bereich ihrer Großbuchstaben ist.
- `ex`
  - : Die obere Kante der Schrift ist ihre x-Höhen-Baseline, was der obere Bereich ihrer kurzen Kleinbuchstaben ist.
- `text`
  - : Die obere Kante der Schrift ist ihre Text-über-Baseline (einschließlich der Ascender der Schrift, jedoch ohne die obere Kante Halbführungszeichen), oder ihre untere Kante ist ihre Text-unter-Baseline (einschließlich der Descender der Schrift, jedoch ohne die untere Kante Halbführungszeichen), abhängig davon, für welche Kante der Wert festgelegt ist.

## Beispiele

Siehe [`text-box-edge` Beispiele](/de/docs/Web/CSS/text-box-edge#examples)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-edge")}}, {{cssxref("text-box-trim")}}
- [CSS Inline-Layout](/de/docs/Web/CSS/CSS_inline_layout) Modul
