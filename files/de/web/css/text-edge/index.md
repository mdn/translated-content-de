---
title: <text-edge>
slug: Web/CSS/text-edge
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Der **`<text-edge>`** {{Glossary("enumerated", "aufgezählte")}} [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) definiert Schlüsselwörter, die Schriftmetriken für bestimmte Bereiche an der Block-Anfangs- und Block-Endkante einer Schriftart repräsentieren. Jedes Schlüsselwort gibt die Position einer Schriftart an der oberen und/oder unteren Kante an.

Die `<text-edge>`-Werte werden in der {{cssxref("text-box-edge")}}-Eigenschaft verwendet, um die Menge an Platz anzugeben, der von der Block-Anfangs- und Block-Endkante des Blockcontainers eines Textelements abgeschnitten werden soll.

## Syntax

Der `<text-edge>`-Datentyp besteht aus einem oder zwei Schlüsselwörtern, die bestimmte Bereiche der Block-Anfangs- (ober) und/oder Block-Endkante (unter) einer Schriftart repräsentieren:

- Wenn ein Wert angegeben wird, wird die Position der oberen und unteren Kante der Schriftart mit demselben Schlüsselwort angegeben.
- Wenn zwei Werte angegeben werden, spezifiziert der erste Wert die Position der oberen Kante der Schriftart, und der zweite Wert spezifiziert die Position der unteren Kante.

### Werte

#### Einzelne Schlüsselwortwerte

- `text`
  - : Die oberen und unteren Kanten der Schriftart sind die Text-ÜberBaseline/Text-UnterBaseline: Dies schließt die Aufhängungen und Absenkungen der Schrift ein, jedoch nicht das {{Glossary("Leading", "Halbfleisch")}}, das auf den Text gesetzt ist.

    > [!NOTE]
    > Die Menge an Halbfleisch, die in einem Textelement enthalten ist, kann mit der {{cssxref("line-height")}}-Eigenschaft gesteuert werden.

> [!NOTE]
> Die Schlüsselwörter `ideographic` und `ideographic-ink` sind dazu gedacht, spezifische obere und untere Kantpositionen für [CJK-Zeichen](https://en.wikipedia.org/wiki/CJK_characters) anzugeben. Derzeit wird ihr genaues Verhalten diskutiert, und sie werden von keinem Browser unterstützt.

#### Zwei Schlüsselwortwerte

- `alphabetic`
  - : Die untere Kante der Schriftart ist ihre alphabetische Basislinie, was der untere Rand ihrer kurzen Kleinbuchstaben (zum Beispiel "m", "n" und "o") oder Großbuchstaben ist.
- `cap`
  - : Die obere Kante der Schriftart ist ihre Kapitälchen-Höhen-Basislinie, was der obere Rand ihrer Großbuchstaben ist.
- `ex`
  - : Die obere Kante der Schriftart ist ihre x-Höhen-Basislinie, was der obere Rand ihrer kurzen Kleinbuchstaben ist.
- `text`
  - : Die obere Kante der Schriftart ist ihre Text-ÜberBaseline (einschließlich der Aufhängungen der Schrift, aber ohne das obere Halbfleisch), oder ihre untere Kante ist ihre Text-UnterBaseline (einschließlich der Absenkungen der Schrift, aber ohne das untere Halbfleisch), abhängig davon, für welche Kante der Wert festgelegt ist.

## Formale Syntax

{{CSSSyntaxRaw(`<text-edge> = [ text | ideographic | ideographic-ink ] | [ text | ideographic | ideographic-ink | cap | ex ] [ text | ideographic | ideographic-ink | alphabetic ]`)}}

## Beispiele

Siehe [`text-box-edge` Beispiele](/de/docs/Web/CSS/Reference/Properties/text-box-edge#examples)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-edge")}}, {{cssxref("text-box-trim")}}
- [CSS-Inline-Layout](/de/docs/Web/CSS/CSS_inline_layout) Modul
