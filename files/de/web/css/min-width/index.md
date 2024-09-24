---
title: min-width
slug: Web/CSS/min-width
l10n:
  sourceCommit: 4627deeb339b4d86fadc01199014f0c5385fb851
---

{{CSSRef}}

Die **`min-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die minimale Breite eines Elements fest. Sie verhindert, dass der [verwendete Wert](/de/docs/Web/CSS/used_value) der {{cssxref("width")}}-Eigenschaft kleiner wird als der für `min-width` angegebene Wert.

{{EmbedInteractiveExample("pages/css/min-width.html")}}

Die Breite des Elements wird auf den Wert von `min-width` gesetzt, wann immer `min-width` größer ist als {{Cssxref("max-width")}} oder {{Cssxref("width")}}.

## Syntax

```css
/* <length> Wert */
min-width: 3.5em;
min-width: anchor-size(width);
min-width: anchor-size(--myAnchor self-inline, 200%);

/* <percentage> Wert */
min-width: 10%;

/* Schlüsselwort-Werte */
min-width: max-content;
min-width: min-content;
min-width: fit-content;
min-width: fit-content(20em);
min-width: stretch;

/* Globale Werte */
min-width: inherit;
min-width: initial;
min-width: revert;
min-width: revert-layer;
min-width: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Definiert die `min-width` als absoluten Wert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Definiert die `min-width` als Prozentsatz der Breite des umgebenden Blocks.
- `auto`

  - : Der Standardwert. Die Quelle des automatischen Wertes für das spezifizierte Element hängt von seinem Anzeigewert ab. Für Blockboxen, Inlineboxen, Inline-Blöcke und alle Tabellenlayout-Boxen löst sich `auto` zu `0` auf.

    Für [Flex-Elemente](/de/docs/Glossary/Flex_Item) und Grid-Elemente ist der Mindestbreitenwert entweder die angegebene vorgeschlagene Größe, wie der Wert der `width`-Eigenschaft, die übertragene Größe, berechnet, wenn das Element ein festes `aspect-ratio` hat und die Höhe eine bestimmte Größe ist, ansonsten wird die `min-content` Größe verwendet. Wenn das Flex- oder Grid-Element ein {{glossary("scroll container")}} ist oder wenn ein Grid-Element mehr als eine flexible Spaltenlinie überspannt, beträgt die automatische Mindestgröße `0`.

- `max-content`
  - : Die intrinsische bevorzugte `min-width`.
- `min-content`
  - : Die intrinsische minimale `min-width`.
- `fit-content`
  - : Nutzt den verfügbaren Raum, aber nicht mehr als [`max-content`](/de/docs/Web/CSS/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die `fit-content`-Formel mit dem verfügbaren Raum, ersetzt durch das angegebene Argument, d.h. `min(max-content, max(min-content, argument))`.
- `stretch`

  - : Begrenzung der Mindestbreite des [Margin-Boxes](/de/docs/Learn/CSS/Building_blocks/The_box_model#parts_of_a_box) des Elements auf die Breite seines [umgebenden Blocks](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block). Es versucht, den Margin-Box so zu erweitern, dass der verfügbare Raum im umgebenden Block ausgefüllt wird, ähnlich wie `100%`, wobei die resultierende Größe jedoch auf den Margin-Box angewendet wird, anstatt auf den von [box-sizing](/de/docs/Web/CSS/box-sizing) bestimmten Box.

    > [!NOTE]
    > Um die von Browsern für den `stretch`-Wert verwendeten Aliase und deren Implementierungsstatus zu überprüfen, sehen Sie den Abschnitt [Browser-Kompatibilität](#browserkompatibilität).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Mindestbreite für Elemente festlegen

```css
table {
  min-width: 75%;
}

form {
  min-width: 0;
}
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("width")}}, {{Cssxref("max-width")}}
- Das [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model), {{Cssxref("box-sizing")}}
