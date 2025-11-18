---
title: <text-edge>
slug: Web/CSS/Reference/Values/text-edge
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`<text-edge>`** {{Glossary("enumerated", "aufgeführte")}} [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) definiert Schlüsselwörter, die Schriftmetrikbereiche repräsentieren, die bestimmte Regionen an einem Schriftsatz von Blockanfangskante und Blockendekante darstellen. Jedes Schlüsselwort spezifiziert eine Position der oberen und/oder unteren Kante eines Schriftsatzes.

Die `<text-edge>`-Werte werden in der {{cssxref("text-box-edge")}}-Eigenschaft verwendet, um eine Menge von Raum zu spezifizieren, die vom Blockanfang und der Blockende eines Blockcontainers eines Textelements abgetrennt werden soll.

## Syntax

Der `<text-edge>` Datentyp besteht aus einem oder zwei Schlüsselwörtern, die spezifische Regionen an der Blockanfangskante (über) und/oder Blockendekante (unter) eines Schriftsatzes darstellen:

- Wenn ein Wert angegeben wird, ist die Position der oberen und unteren Kante des Schriftsatzes mit demselben Schlüsselwort festgelegt.
- Wenn zwei Werte angegeben werden, spezifiziert der erste Wert die Position der oberen Kante des Schriftsatzes, und der zweite Wert spezifiziert die Position der unteren Kante des Schriftsatzes.

### Werte

#### Einzelne Schlüsselwortwerte

- `text`
  - : Die oberen und unteren Kanten des Schriftsatzes sind seine Textoberlinie/Textunterlinie: Dies schließt die An- und Abstriche des Schriftsatzes ein, schließt jedoch das {{Glossary("Leading", "Halblattlinie")}}, das auf den Text gesetzt wird, aus.

    > [!NOTE]
    > Die Menge an Halblattlinie, die in ein Textelement eingeschlossen ist, kann mit der {{cssxref("line-height")}}-Eigenschaft gesteuert werden.

> [!NOTE]
> Die Schlüsselwörter `ideographic` und `ideographic-ink` sind dazu gedacht, Positionen der oberen und unteren Kante spezifisch für [CJK-Zeichen](https://en.wikipedia.org/wiki/CJK_characters) zu spezifizieren. Derzeit wird ihr genaues Verhalten diskutiert, und sie werden von keinem Browser unterstützt.

#### Zwei Schlüsselwortwerte

- `alphabetic`
  - : Die untere Kante des Schriftsatzes ist seine alphabetische Grundlinie, die der untere Bereich seiner kurzen Kleinbuchstaben (z. B. "m", "n" und "o") oder Großbuchstaben ist.
- `cap`
  - : Die obere Kante des Schriftsatzes ist seine Kapitälchenhöhe, die die Oberseite seiner Großbuchstaben ist.
- `ex`
  - : Die obere Kante des Schriftsatzes ist seine x-Höhe, die die Oberseite seiner kurzen Kleinbuchstaben ist.
- `text`
  - : Die obere Kante des Schriftsatzes ist seine Textoberlinie (schließt die Anstriche des Schriftsatzes ein, schließt jedoch die obere Kante Halblattlinie aus) oder seine untere Kante ist seine Textunterlinie (schließt die Abstriche des Schriftsatzes ein, schließt jedoch die untere Kante Halblattlinie aus), abhängig davon, für welche Kante der Wert festgelegt wird.

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
- [CSS in lineares Layout](/de/docs/Web/CSS/Guides/Inline_layout) Modul
