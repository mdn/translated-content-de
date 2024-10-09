---
title: min-width
slug: Web/CSS/min-width
l10n:
  sourceCommit: 9a3940b0231838338f65ae1c37d5b874439a3d43
---

{{CSSRef}}

Die **`min-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Mindestbreite eines Elements fest. Sie verhindert, dass der [verwendete Wert](/de/docs/Web/CSS/used_value) der {{cssxref("width")}}-Eigenschaft kleiner wird als der für `min-width` angegebene Wert.

{{EmbedInteractiveExample("pages/css/min-width.html")}}

Die Breite des Elements wird auf den Wert von `min-width` gesetzt, wenn `min-width` größer ist als {{Cssxref("max-width")}} oder {{Cssxref("width")}}.

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
  - : Definiert die `min-width` als Prozentsatz der Breite des umgebenden Blocks.
- `auto`

  - : Der Standardwert. Die Quelle des automatischen Wertes für das angegebene Element hängt von seinem Anzeige-Wert ab. Bei Blockboxen, Inline-Boxen, Inline-Blöcken und allen Tabellen-Layout-Boxen wird `auto` zu `0`.

    Für {{Glossary("Flex_Item", "Flex-Elemente")}} und Grid-Elemente ist der Mindestbreitenwert entweder die angegebene vorgeschlagene Größe, wie der Wert der `width`-Eigenschaft, die übertragene Größe, berechnet, wenn das Element ein `aspect-ratio` gesetzt hat und die Höhe eine feste Größe ist, andernfalls wird die `min-content` Größe verwendet. Wenn das Flex- oder Grid-Element ein {{Glossary("scroll_container", "Scroll-Container")}} ist oder wenn ein Grid-Element mehr als eine flexible Spaltenbahn überspannt, beträgt die automatische Mindestgröße `0`.

- `max-content`
  - : Die intrinsisch bevorzugte `min-width`.
- `min-content`
  - : Die intrinsische Mindestbreite `min-width`.
- `fit-content`
  - : Verwenden Sie den verfügbaren Platz, aber nicht mehr als [`max-content`](/de/docs/Web/CSS/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die `fit-content`-Formel mit dem verfügbaren Platz, der durch das angegebene Argument ersetzt wird, d.h. `min(max-content, max(min-content, argument))`.
- `stretch`

  - : Begrenzt die Mindestbreite der [margin box](/de/docs/Learn/CSS/Building_blocks/The_box_model#parts_of_a_box) des Elements auf die Breite seines [enthältenden Blocks](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block). Es wird versucht, die Margin-Box so zu gestalten, dass sie den verfügbaren Platz im enthältenden Block ausfüllt, also auf eine Weise ähnlich wie `100%`, aber die resultierende Größe auf die Margin-Box anwendend, anstatt auf die Box, die durch [box-sizing](/de/docs/Web/CSS/box-sizing) bestimmt wird.

    > [!NOTE]
    > Um die von Browsern verwendeten Aliase für den `stretch` Wert und dessen Implementierungsstatus zu überprüfen, siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität).

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

- {{Cssxref("max-width")}}
- {{Cssxref("width")}}
- {{cssxref("min-inline-size")}}
- {{cssxref("min-block-size")}}
- {{cssxref("box-sizing")}}
- [Einführung in das grundlegende CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul
