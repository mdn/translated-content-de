---
title: <text-edge>
slug: Web/CSS/text-edge
l10n:
  sourceCommit: c037c6870bb89d81ccd9204809b06c92677c3a9a
---

{{CSSRef}}

Der **`<text-edge>`** {{Glossary("enumerated", "enumerierte")}} [Datentyp](/de/docs/Web/CSS/CSS_Types) definiert Schlüsselwörter, die Schriftmetrik kennzeichnen, welche spezifische Bereiche an der Block-Startkante und Block-Endkante einer Schrift repräsentieren. Jedes Schlüsselwort spezifiziert eine Position der Über- und/oder Unterkante einer Schrift.

Die `<text-edge>`-Werte werden in der {{cssxref("text-box-edge")}}-Eigenschaft verwendet, um einen Raumanteil anzugeben, der von der Block-Start- und Block-Endkante des Blockcontainers eines Textelements abgeschnitten werden soll.

## Syntax

```css
<text-edge> =
  [ text | ideographic | ideographic-ink ] |
  [ text | ideographic | ideographic-ink | cap | ex ] [ text | ideographic | ideographic-ink | alphabetic ]
```

> [!NOTE]
> Die Schlüsselwörter `ideographic` und `ideographic-ink` sollen Über- und Unterkantenpositionen spezifisch für [CJK-Zeichen](https://en.wikipedia.org/wiki/CJK_characters) angeben. Derzeit wird über ihr genaues Verhalten noch diskutiert und sie werden von keinem Browser unterstützt.

## Werte

Der `<text-edge>`-Datentyp besteht aus einem oder zwei Schlüsselwörtern, die spezifische Bereiche an der Block-Startkante (Überkante) und/oder Block-Endkante (Unterkante) einer Schrift repräsentieren:

- Wenn ein Wert angegeben ist, werden die Position der Über- und Unterkante der Schrift mit demselben Schlüsselwort angegeben.
- Wenn zwei Werte angegeben sind, spezifiziert der erste Wert die Position der Überkante und der zweite Wert die Position der Unterkante der Schrift.

### Einzelne Schlüsselwortwerte

- `text`

  - : Die Über- und Unterkanten der Schrift sind ihre Text-Über-Basislinie/Text-Unter-Basislinie: dies schließt die Auf- und Abstriche der Schrift mit ein, aber nicht den {{Glossary("Leading", "Halbzeilenabstand")}}, der auf den Text angewendet wird.

    > [!NOTE]
    > Die Menge an Halbzeilenabstand, die auf ein Textelement angewendet wird, kann mit der {{cssxref("line-height")}}-Eigenschaft gesteuert werden.

### Zwei Schlüsselwortwerte

- `alphabetic`
  - : Die Unterkante der Schrift ist ihre alphabetische Basislinie, die der untere Rand ihrer kleinen Kleinbuchstaben (zum Beispiel „m“, „n“ und „o“) oder Großbuchstaben ist.
- `cap`
  - : Die Überkante der Schrift ist ihre Kapitälchenhöhe-Basislinie, die der obere Rand ihrer Großbuchstaben ist.
- `ex`
  - : Die Überkante der Schrift ist ihre x-Höhen-Basislinie, die der obere Rand ihrer kleinen Kleinbuchstaben ist.
- `text`
  - : Die Überkante der Schrift ist ihre Text-Über-Basislinie (schließt die Aufstriche der Schrift ein, aber nicht den Überkanten-Halbzeilenabstand) oder ihre Unterkante ist ihre Text-Unter-Basislinie (schließt die Abstriche der Schrift ein, aber nicht den Unterkanten-Halbzeilenabstand), abhängig davon, für welche Kante der Wert gesetzt ist.

## Beispiele

Siehe [`text-box-edge` Beispiele](/de/docs/Web/CSS/text-box-edge#examples)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-edge")}}, {{cssxref("text-box-trim")}}
- [CSS Inline-Layout](/de/docs/Web/CSS/CSS_inline_layout) Modul
