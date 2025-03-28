---
title: <text-edge>
slug: Web/CSS/text-edge
l10n:
  sourceCommit: 49bbddc34034e59a63c0b2cda79e45c94ea9daa9
---

{{CSSRef}}

Der **`<text-edge>`** {{Glossary("enumerated", "aufgezählte")}} [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) definiert Schlüsselwörter, die Schriftmetriken angeben, die spezifische Bereiche an der Block-Startkante und Block-Endkante einer Schriftart repräsentieren. Jedes Schlüsselwort spezifiziert eine Position der oberen und/oder unteren Kante einer Schrift.

Die `<text-edge>`-Werte werden in der {{cssxref("text-box-edge")}}-Eigenschaft verwendet, um die Menge an Raum anzugeben, die von der Block-Startkante und der Block-Endkante eines Text-Elementblockcontainers abgeschnitten werden soll.

## Syntax

```css
<text-edge> =
  [ text | ideographic | ideographic-ink ] |
  [ text | ideographic | ideographic-ink | cap | ex ] [ text | ideographic | ideographic-ink | alphabetic ]
```

> [!NOTE]
> Die Schlüsselwörter `ideographic` und `ideographic-ink` sollen obere und untere Randpositionen angeben, die spezifisch für [CJK-Sprachzeichen](https://en.wikipedia.org/wiki/CJK_characters) sind. Derzeit wird über ihr genaues Verhalten diskutiert und sie werden von keinem Browser unterstützt.

## Werte

Der `<text-edge>`-Datentyp besteht aus einem oder zwei Schlüsselwörtern, die spezifische Bereiche an der Block-Startkante (oben) und/oder Block-Endkante (unten) einer Schriftart repräsentieren:

- Wenn ein Wert angegeben ist, wird die Position der oberen und unteren Kante der Schrift mit demselben Schlüsselwort angegeben.
- Wenn zwei Werte angegeben sind, gibt der erste Wert die Position der oberen Kante der Schrift an, und der zweite Wert gibt die Position der unteren Kante der Schrift an.

### Einzelne Schlüsselwortwerte

- `text`

  - : Die oberen und unteren Kanten der Schrift sind ihre Text-über-Baseline/Text-unter-Baseline: dies umfasst die Aufstriche und Abstriche der Schrift, aber schließt den {{Glossary("Leading", "Halb-Lead")}} ein, der im Text festgelegt ist.

    > [!NOTE]
    > Die Menge des in einem Textelement enthaltenen Halb-Leads kann mit der {{cssxref("line-height")}}-Eigenschaft gesteuert werden.

### Zwei Schlüsselwortwerte

- `alphabetic`
  - : Die untere Kante der Schrift ist ihre alphabetische Baseline, die den unteren Rand ihrer kurzen Kleinbuchstaben (zum Beispiel „m“, „n“ und „o“) oder Großbuchstaben bildet.
- `cap`
  - : Die obere Kante der Schrift ist ihre Kapitälchenhöhe-Baseline, die den oberen Rand ihrer Großbuchstaben bildet.
- `ex`
  - : Die obere Kante der Schrift ist ihre x-Höhe-Baseline, die den oberen Rand ihrer kurzen Kleinbuchstaben bildet.
- `text`
  - : Die obere Kante der Schrift ist ihre Text-über-Baseline (umfasst die Aufstriche der Schrift, aber schließt den oberen Kantenhalb-Lead aus), oder die untere Kante ist ihre Text-unter-Baseline (umfasst die Abstriche der Schrift, aber schließt den unteren Kantenhalb-Lead aus), abhängig davon, für welche Kante der Wert festgelegt ist.

## Beispiele

Siehe [`text-box-edge`-Beispiele](/de/docs/Web/CSS/text-box-edge#examples)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-edge")}}, {{cssxref("text-box-trim")}}
- [CSS Inline-Layout](/de/docs/Web/CSS/CSS_inline_layout) Modul
