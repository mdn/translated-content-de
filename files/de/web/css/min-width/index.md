---
title: min-width
slug: Web/CSS/min-width
l10n:
  sourceCommit: 4627deeb339b4d86fadc01199014f0c5385fb851
---

{{CSSRef}}

Die **`min-width`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Mindestbreite eines Elements fest. Sie verhindert, dass der [verwendete Wert](/de/docs/Web/CSS/used_value) der {{cssxref("width")}}-Eigenschaft kleiner wird als der für `min-width` angegebene Wert.

{{EmbedInteractiveExample("pages/css/min-width.html")}}

Die Breite des Elements wird auf den Wert von `min-width` gesetzt, sofern `min-width` größer ist als {{Cssxref("max-width")}} oder {{Cssxref("width")}}.

## Syntax

```css
/* <length> value */
min-width: 3.5em;
min-width: anchor-size(width);
min-width: anchor-size(--myAnchor self-inline, 200%);

/* <percentage> value */
min-width: 10%;

/* Keyword values */
min-width: max-content;
min-width: min-content;
min-width: fit-content;
min-width: fit-content(20em);
min-width: stretch;

/* Global values */
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
  - : Definiert die `min-width` als Prozentsatz der Breite des umschließenden Blocks.
- `auto`

  - : Der Standardwert. Die Quelle des automatischen Werts für das angegebene Element hängt von seinem display-Wert ab. Für Block-Boxen, Inline-Boxen, Inline-Blocks und alle Table-Layout-Boxen löst sich `auto` zu `0` auf.

    Bei [Flex-Items](/de/docs/Glossary/Flex_Item) und Grid-Items ist der minimale Breitenwert entweder die angegebene vorgeschlagene Größe, wie der Wert der `width`-Eigenschaft, die übertragene Größe, berechnet, wenn das Element ein `aspect-ratio` gesetzt hat und die Höhe eine feste Größe ist, ansonsten wird die `min-content`-Größe verwendet. Wenn das Flex- oder Grid-Item ein [Scrollcontainer](/de/docs/Glossary/scroll_container) ist, oder wenn ein Grid-Item mehr als eine flexible Spaltenbahn überspannt, ist die automatische Mindestgröße `0`.

- `max-content`
  - : Die intrinsische bevorzugte `min-width`.
- `min-content`
  - : Die intrinsische minimale `min-width`.
- `fit-content`
  - : Nutzt den verfügbaren Raum, jedoch nicht mehr als [`max-content`](/de/docs/Web/CSS/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die `fit-content`-Formel, wobei der verfügbare Raum durch das angegebene Argument ersetzt wird, d.h. `min(max-content, max(min-content, argument))`.
- `stretch`

  - : Begrenzt die Mindestbreite der [Randbox](/de/docs/Learn/CSS/Building_blocks/The_box_model#parts_of_a_box) des Elements auf die Breite seines [umschließenden Blocks](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block). Es versucht, die Randbox so zu gestalten, dass sie den verfügbaren Raum im umschließenden Block füllt, verhält sich also in gewisser Weise ähnlich wie `100%`, wendet die resultierende Größe jedoch auf die Randbox und nicht auf die Box an, die durch [box-sizing](/de/docs/Web/CSS/box-sizing) bestimmt wird.

    > [!NOTE]
    > Um die von Browsern für den `stretch`-Wert verwendeten Aliase und deren Implementierungsstatus zu überprüfen, siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Mindestbreite eines Elements festlegen

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("width")}}, {{Cssxref("max-width")}}
- Das [Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model), {{Cssxref("box-sizing")}}
