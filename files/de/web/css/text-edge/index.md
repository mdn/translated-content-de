---
title: <text-edge>
slug: Web/CSS/text-edge
l10n:
  sourceCommit: 26f9fbee05fb92b584d44fba4359e86796484aa6
---

{{CSSRef}}

Der **`<text-edge>`** {{Glossary("enumerated", "aufgezählte")}} [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) definiert Schlüsselwörter, die Schriftmetrik darstellen, die bestimmte Bereiche an der Block-Startkante und Block-Endkante einer Schrift darstellen. Jedes Schlüsselwort gibt eine Position der oberen und/oder unteren Kante einer Schrift an.

Die `<text-edge>`-Werte werden in der {{cssxref("text-box-edge")}}-Eigenschaft verwendet, um einen Raum anzugeben, der von der Block-Start- und Block-Endkante des Blockcontainers eines Textelements abgeschnitten werden soll.

## Syntax

Der `<text-edge>`-Datentyp besteht aus einem oder zwei Schlüsselwörtern, die spezifische Regionen an der Block-Start- (über) und/oder Block-Endkante (unter) einer Schrift darstellen:

- Wenn ein Wert angegeben wird, wird die Position der oberen und unteren Kante der Schrift mit demselben Schlüsselwort festgelegt.
- Wenn zwei Werte angegeben werden, gibt der erste Wert die Position der oberen Kante der Schrift an, und der zweite Wert gibt die Position der unteren Kante der Schrift an.

### Werte

#### Einzelne Schlüsselwortwerte

- `text`
  - : Die oberen und unteren Kanten der Schrift sind ihre Text-Über-/Text-Unter-Basislinie: Dies schließt die Ober- und Unterlängen der Schrift ein, aber schließt das {{Glossary("Leading", "halbzeilenabstand")}} der Schrift aus.

    > [!NOTE]
    > Der Umfang des halbzeilenabstands, der auf ein Textelement angewendet wird, kann mit der {{cssxref("line-height")}}-Eigenschaft gesteuert werden.

> [!NOTE]
> Die Schlüsselwörter `ideographic` und `ideographic-ink` sind dazu gedacht, über und unter Kantenpositionen spezifisch für [CJK-Sprachzeichen](https://en.wikipedia.org/wiki/CJK_characters) zu spezifizieren. Aktuell wird ihr genaues Verhalten diskutiert und sie werden von keinem Browser unterstützt.

#### Zwei Schlüsselwortwerte

- `alphabetic`
  - : Die untere Kante der Schrift ist ihre alphabetische Basislinie, die der untere Rand ihrer kurzen Kleinbuchstaben (zum Beispiel "m", "n" und "o") oder Großbuchstaben ist.
- `cap`
  - : Die obere Kante der Schrift ist ihre Versalhöhe-Basislinie, die die Oberkante ihrer Großbuchstaben ist.
- `ex`
  - : Die obere Kante der Schrift ist ihre X-Höhe-Basislinie, die die Oberkante ihrer kurzen Kleinbuchstaben ist.
- `text`
  - : Die obere Kante der Schrift ist ihre Text-Über-Basislinie (schließt die Oberlängen der Schrift ein, aber schließt die obere Kante des halbzeilenabstands aus), oder ihre untere Kante ist ihre Text-Unter-Basislinie (schließt die Unterlängen der Schrift ein, aber schließt die untere Kante des halbzeilenabstands aus), abhängig davon, für welche Kante der Wert gesetzt ist.

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
- [CSS Inline-Layout](/de/docs/Web/CSS/CSS_inline_layout) Modul
