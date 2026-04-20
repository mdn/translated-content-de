---
title: "`<text-edge>` CSS-Typ"
short-title: <text-edge>
slug: Web/CSS/Reference/Values/text-edge
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Der **`<text-edge>`** {{Glossary("enumerated", "enumerierte")}} [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) definiert Schlüsselwörter, die Schriftmetrik angeben, die spezifische Bereiche an der Blockanfangskante und Blockendkante einer Schrift darstellen. Jedes Schlüsselwort spezifiziert eine Position der Über- und/oder Unterkante einer Schrift.

Die `<text-edge>`-Werte werden in der {{cssxref("text-box-edge")}}-Eigenschaft verwendet, um eine Menge an Raum anzugeben, die von der Blockanfangskante und Blockendkante eines Textelements des Blockcontainers abgeschnitten werden soll.

## Syntax

Der `<text-edge>`-Datentyp besteht aus einem oder zwei Schlüsselwörtern, die spezifische Bereiche auf der Blockanfangskante (über) und/oder Blockendkante (unter) einer Schrift darstellen:

- Wenn ein Wert angegeben wird, wird die Position der Über- und Unterkante der Schrift mit demselben Schlüsselwort spezifiziert.
- Wenn zwei Werte angegeben werden, spezifiziert der erste Wert die Position der Überkante der Schrift und der zweite Wert die Position der Unterkante.

### Werte

#### Einzelne Schlüsselwortwerte

- `text`
  - : Die Über- und Unterkanten der Schrift sind die text-over-Basislinie/text-under-Basislinie: Dies schließt die Auf- und Abstriche der Schrift ein, jedoch nicht das {{Glossary("Leading", "half-leading")}}, das auf den Text gesetzt ist.

    > [!NOTE]
    > Die Menge an half-leading, die auf ein Textelement angewendet wird, kann mit der Eigenschaft {{cssxref("line-height")}} gesteuert werden.

> [!NOTE]
> Die Schlüsselwörter `ideographic` und `ideographic-ink` sollen Positionen der Über- und Unterkanten spezifizieren, die spezifisch für [CJK-Zeichen](https://en.wikipedia.org/wiki/CJK_characters) sind. Derzeit wird ihr genaues Verhalten noch diskutiert und sie werden von keinem Browser unterstützt.

#### Zwei Schlüsselwortwerte

- `alphabetic`
  - : Die Unterkante der Schrift ist ihre alphabetische Basislinie, was das Ende ihrer kurzen Kleinbuchstaben (zum Beispiel "m", "n" und "o") oder Großbuchstaben ist.
- `cap`
  - : Die Überkante der Schrift ist ihre Versalhöhe-Basislinie, was die Oberkante ihrer Großbuchstaben ist.
- `ex`
  - : Die Überkante der Schrift ist ihre x-Höhe-Basislinie, was die Oberkante ihrer kurzen Kleinbuchstaben ist.
- `text`
  - : Die Überkante der Schrift ist ihre text-over-Basislinie (schließt die Aufstriche der Schrift ein, jedoch nicht das halbe Überkantenabstand), oder ihre Unterkante ist ihre text-under-Basislinie (schließt die Abstriche der Schrift ein, jedoch nicht das halbe Unterkantenabstand), je nachdem, für welche Kante der Wert gesetzt wird.

## Formale Syntax

{{CSSSyntaxRaw(`<text-edge> = [ text | ideographic | ideographic-ink ] | [ text | ideographic | ideographic-ink | cap | ex ] [ text | ideographic | ideographic-ink | alphabetic ]`)}}

## Beispiele

Siehe [Beispiele zu `text-box-edge`](/de/docs/Web/CSS/Reference/Properties/text-box-edge#examples)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-edge")}}, {{cssxref("text-box-trim")}}
- [CSS-Inline-Layout](/de/docs/Web/CSS/Guides/Inline_layout)-Modul
