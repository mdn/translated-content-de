---
title: min-width
slug: Web/CSS/Reference/Properties/min-width
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`min-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die minimale Breite eines Elements fest. Sie verhindert, dass der [verwendete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) der {{cssxref("width")}} Eigenschaft kleiner wird als der für `min-width` angegebene Wert.

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
  - : Definiert die `min-width` als Prozentsatz der Breite des umschließenden Blocks.
- `auto`
  - : Der Standardwert. Die Quelle des automatischen Werts für das angegebene Element hängt von seinem Display-Wert ab. Für Block-Boxen, Inline-Boxen, Inline-Blöcke und alle Tabellen-Layout-Boxen wird `auto` zu `0` aufgelöst.

    Für {{Glossary("Flex_Item", "Flex-Elemente")}} und Grid-Elemente ist der minimale Breitenwert entweder die speziell vorgeschlagene Größe, wie der Wert der `width` Eigenschaft, die übertragene Größe, berechnet, wenn das Element ein `aspect-ratio` hat und die Höhe eine definierte Größe ist, andernfalls wird die `min-content` Größe verwendet. Wenn das Flex- oder Grid-Element ein {{Glossary("scroll_container", "Scroll-Container")}} ist oder wenn ein Grid-Element mehr als eine flexible Spaltenbahn überspannt, ist die automatische Mindestgröße `0`.

- {{cssxref("max-content")}}
  - : Die intrinsische bevorzugte `min-width`.
- {{cssxref("min-content")}}
  - : Die intrinsische minimale `min-width`.
- {{cssxref("fit-content")}}
  - : Nutzt den verfügbaren Platz, aber nicht mehr als [`max-content`](/de/docs/Web/CSS/max-content), d.h., `min(max-content, max(min-content, stretch))`.
- [`fit-content(<length-percentage>)`](/de/docs/Web/CSS/fit-content_function)
  - : Verwendet die `fit-content`-Formel mit dem verfügbaren Raum, ersetzt durch das angegebene Argument, d.h., `min(max-content, max(min-content, argument))`.
- `stretch`
  - : Begrenzt die minimale Breite der [Margin-Box](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements auf die Breite seines [umschließenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block). Es versucht, die Margin-Box den verfügbaren Raum im umschließenden Block ausfüllen zu lassen, verhält sich also in gewisser Weise ähnlich wie `100%`, wendet die resultierende Größe jedoch auf die Margin-Box an, statt auf die durch [box-sizing](/de/docs/Web/CSS/Reference/Properties/box-sizing) bestimmte Box.

    > [!NOTE]
    > Um zu überprüfen, welche Aliase von Browsern für den `stretch`-Wert und dessen Implementierungsstatus verwendet werden, sehen Sie sich den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Mindestbreite für ein Element festlegen

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
- [Einführung in das CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) Leitfaden
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
