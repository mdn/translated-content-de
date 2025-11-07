---
title: <text-edge>
slug: Web/CSS/Reference/Values/text-edge
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Der **`<text-edge>`** {{Glossary("enumerated", "aufzählbare")}} [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) definiert Schlüsselwörter, die Schriftmetriken beschreiben, welche spezifische Regionen an der Start- und Endkante eines Schriftblocks repräsentieren. Jedes Schlüsselwort bestimmt eine Position an der oberen und/oder unteren Kante einer Schrift.

Die `<text-edge>`-Werte werden in der {{cssxref("text-box-edge")}}-Eigenschaft verwendet, um die Menge an Platz zu bestimmen, die an der Start- und Endkante des Blockcontainers eines Textelements abgeschnitten werden soll.

## Syntax

Der `<text-edge>`-Datentyp besteht aus einem oder zwei Schlüsselwörtern, die spezifische Regionen an einer Schriftblock-Startkante (oben) und/oder Block-Endkante (unten) repräsentieren:

- Wenn ein Wert angegeben ist, wird die Position der oberen und unteren Kante der Schrift mit demselben Schlüsselwort angegeben.
- Wenn zwei Werte angegeben sind, gibt der erste Wert die Position der oberen Kante der Schrift an, und der zweite Wert gibt die Position der unteren Kante der Schrift an.

### Werte

#### Einzelne Schlüsselwortwerte

- `text`
  - : Die oberen und unteren Kanten der Schrift sind die Text-über-Basislinie/Text-unter-Basislinie: Dies schließt die Aufschwünge und Abschwünge der Schrift ein, jedoch nicht das auf den Text gesetzte {{Glossary("Leading", "Halb-Leading")}}.

    > [!NOTE]
    > Die Menge des auf ein Textelement angewendeten Halb-Leading kann mit der {{cssxref("line-height")}}-Eigenschaft gesteuert werden.

> [!NOTE]
> Die Schlüsselwörter `ideographic` und `ideographic-ink` sollen über- und unterkantenspezifische Positionen für [CJK-Zeichen](https://en.wikipedia.org/wiki/CJK_characters) angeben. Derzeit wird ihr genaues Verhalten noch diskutiert und sie werden von keinem Browser unterstützt.

#### Zwei-Schlüsselwort-Werte

- `alphabetic`
  - : Die untere Kante der Schrift ist ihre alphabetische Basislinie, welche der Unterseite der kleinen Buchstaben (zum Beispiel "m", "n" und "o") oder Großbuchstaben entspricht.
- `cap`
  - : Die obere Kante der Schrift ist ihre Kapitälchenhöhe-Basislinie, welche die Oberseite der Großbuchstaben ist.
- `ex`
  - : Die obere Kante der Schrift ist ihre x-Höhen-Basislinie, welche die Oberseite der kleinen Buchstaben ist.
- `text`
  - : Die obere Kante der Schrift ist ihre Text-über-Basislinie (schließt die Aufschwünge der Schrift ein, jedoch nicht die obere Halb-Leading-Kante), oder ihre untere Kante ist ihre Text-unter-Basislinie (schließt die Abschwünge der Schrift ein, jedoch nicht die untere Halb-Leading-Kante), abhängig davon, für welche Kante der Wert gesetzt wird.

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
- Modul [CSS inline layout](/de/docs/Web/CSS/CSS_inline_layout)
