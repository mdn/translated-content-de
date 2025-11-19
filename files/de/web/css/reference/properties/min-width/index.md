---
title: min-width
slug: Web/CSS/Reference/Properties/min-width
l10n:
  sourceCommit: 7b291dab974ec1ceb97c83f45ce76c3afada2e63
---

Die **`min-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die minimale Breite eines Elements fest. Sie verhindert, dass der [verwendete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) der {{cssxref("width")}} Eigenschaft kleiner als der für `min-width` angegebene Wert wird.

{{InteractiveExample("CSS Demo: min-width")}}

```css interactive-example-choice
min-width: 150px;
```

```css interactive-example-choice
min-width: 20em;
```

```css interactive-example-choice
min-width: 75%;
```

```css interactive-example-choice
min-width: 40ch;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Change the minimum width.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  height: 80%;
  justify-content: center;
  color: white;
}
```

Die Breite des Elements wird auf den Wert von `min-width` gesetzt, wenn `min-width` größer als {{Cssxref("max-width")}} oder {{Cssxref("width")}} ist.

## Syntax

```css
/* <length> value */
min-width: 3.5em;
min-width: anchor-size(width);
min-width: anchor-size(--my-anchor self-inline, 200%);

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
  - : Definiert die `min-width` als Prozentsatz der Breite des enthaltenden Blocks.
- `auto`
  - : Der Standardwert. Die Quelle des automatischen Wertes für das angegebene Element hängt von seinem Display-Wert ab. Für Block-Boxen, Inline-Boxen, Inline-Blöcke und alle Tabellengestaltungs-Boxen löst sich `auto` auf `0` auf.

    Für {{Glossary("Flex_Item", "flex items")}} und Grid-Items ist der Mindestbreitenwert entweder die angegebene vorgeschlagene Größe, wie der Wert der `width` Eigenschaft, die übertragene Größe, berechnet, wenn das Element ein `aspect-ratio` gesetzt hat und die Höhe eine bestimmte Größe ist, andernfalls wird die `min-content` Größe verwendet. Wenn das Flex- oder Grid-Item ein {{Glossary("scroll_container", "scroll container")}} ist oder wenn ein Grid-Item mehr als eine flexible Spaltenbahn umfasst, ist die automatische Mindestgröße `0`.

- {{cssxref("max-content")}}
  - : Die intrinsisch bevorzugte `min-width`.
- {{cssxref("min-content")}}
  - : Die intrinsisch minimale `min-width`.
- {{cssxref("fit-content")}}
  - : Verwendet den verfügbaren Raum, aber nicht mehr als [`max-content`](/de/docs/Web/CSS/Reference/Values/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- [`fit-content(<length-percentage>)`](/de/docs/Web/CSS/Reference/Values/fit-content_function)
  - : Verwendet die `fit-content`-Formel mit dem verfügbaren Raum, der durch das angegebene Argument ersetzt wird, d.h. `min(max-content, max(min-content, argument))`.
- `stretch`
  - : Begrenzt die Mindestbreite der [Margin-Box](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements auf die Breite seines [enthaltenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block#identifying_the_containing_block). Es versucht, die Margin-Box an den verfügbaren Raum im enthaltenden Block anzupassen, indem es in gewissem Maße ähnlich zu `100%` funktioniert, jedoch die resultierende Größe auf die Margin-Box anwendet statt auf die Box, die durch [box-sizing](/de/docs/Web/CSS/Reference/Properties/box-sizing) bestimmt wird.

    > [!NOTE]
    > Um die von Browsern verwendeten Aliase für den `stretch`-Wert und dessen Implementierungsstatus zu überprüfen, siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität).

## Formal definition

{{cssinfo}}

## Formal syntax

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
- [Einführung in das CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model/Introduction) Leitfaden
- [CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model) Modul
