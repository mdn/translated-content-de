---
title: min-width
slug: Web/CSS/min-width
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Die **`min-width`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt die minimale Breite eines Elements fest. Sie verhindert, dass der [genutzte Wert](/de/docs/Web/CSS/CSS_cascade/used_value) der {{cssxref("width")}}-Eigenschaft kleiner wird als der für `min-width` angegebene Wert.

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

  - : Der Standardwert. Die Quelle des automatischen Wertes für das angegebene Element hängt von dessen Anzeige-Wert ab. Für Block-Boxen, Inline-Boxen, Inline-Blöcke und alle Layout-Boxen von Tabellen wird `auto` zu `0` aufgelöst.

    Für {{Glossary("Flex_Item", "Flex-Elemente")}} und Grid-Elemente ist der Minimalbreitenwert entweder die angegebene vorgeschlagene Größe, wie der Wert der `width`-Eigenschaft, die übertragene Größe, berechnet, wenn das Element ein `aspect-ratio` festgelegt hat und die Höhe eine bestimmte Größe ist, andernfalls wird die `min-content`-Größe verwendet. Falls das Flex- oder Grid-Element ein {{Glossary("scroll_container", "Scroll-Container")}} ist oder ein Grid-Element mehr als eine flexible Spalte überspannt, liegt die automatische Mindestgröße bei `0`.

- `max-content`
  - : Die intrinsisch bevorzugte `min-width`.
- `min-content`
  - : Die intrinsisch minimale `min-width`.
- `fit-content`
  - : Verwendet den verfügbaren Platz, aber nicht mehr als [`max-content`](/de/docs/Web/CSS/max-content), also `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die `fit-content`-Formel, wobei der verfügbare Platz durch das angegebene Argument ersetzt wird, also `min(max-content, max(min-content, argument))`.
- `stretch`

  - : Begrenzt die minimale Breite der [Margin-Box](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements auf die Breite seines [umgebenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block). Es versucht, die Margin-Box an den verfügbaren Platz im umgebenden Block anzupassen, verhält sich in gewisser Weise ähnlich wie `100%`, wendet die resultierende Größe jedoch auf die Margin-Box anstatt auf die Box an, die durch [box-sizing](/de/docs/Web/CSS/box-sizing) bestimmt wird.

    > [!NOTE]
    > Um die von Browsern verwendeten Aliase für den `stretch`-Wert und dessen Implementierungsstatus zu überprüfen, sehen Sie sich den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Minimale Elementbreite festlegen

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
- [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model)-Modul
