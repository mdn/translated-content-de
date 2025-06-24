---
title: min-width
slug: Web/CSS/min-width
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`min-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die minimale Breite eines Elements fest. Sie verhindert, dass der [verwendete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) der Eigenschaft {{cssxref("width")}} kleiner wird als der für `min-width` angegebene Wert.

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
  color: #ffffff;
}
```

Die Breite des Elements wird auf den Wert von `min-width` gesetzt, wann immer `min-width` größer ist als {{Cssxref("max-width")}} oder {{Cssxref("width")}}.

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
  - : Definiert die `min-width` als Prozentwert der Breite des umgebenden Blocks.
- `auto`

  - : Der Standardwert. Die Quelle des automatischen Wertes für das angegebene Element hängt von seinem display-Wert ab. Für Block-Boxen, Inline-Boxen, Inline-Blöcke und alle Tabellenlayout-Boxen löst sich `auto` zu `0` auf.

    Für {{Glossary("Flex_Item", "Flex-Elemente")}} und Grid-Elemente ist der Mindestbreitenwert entweder die angegebene vorgeschlagene Größe, wie der Wert der `width` Eigenschaft, die übertragene Größe, berechnet, wenn das Element ein `aspect-ratio` hat und die Höhe eine bestimmte Größe ist, andernfalls wird die `min-content` Größe verwendet. Wenn das Flex- oder Grid-Element ein {{Glossary("scroll_container", "Scroll-Container")}} ist oder wenn ein Grid-Element mehr als eine flexible Spalte überspannt, ist die automatische Mindestgröße `0`.

- `max-content`
  - : Die intrinsische bevorzugte `min-width`.
- `min-content`
  - : Die intrinsische minimale `min-width`.
- `fit-content`
  - : Verwendet den verfügbaren Platz, jedoch nicht mehr als [`max-content`](/de/docs/Web/CSS/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die `fit-content`-Formel mit dem verfügbaren Platz, der durch das angegebene Argument ersetzt wird, d.h. `min(max-content, max(min-content, argument))`.
- `stretch`

  - : Begrenzung der minimalen Breite der [Rand-Box](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements auf die Breite seines [umgebenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block). Es versucht, die Rand-Box so zu gestalten, dass sie den verfügbaren Platz im umgebenden Block ausfüllt, und verhält sich in gewisser Weise ähnlich wie `100%`, wobei jedoch die resultierende Größe auf die Rand-Box und nicht auf die durch [box-sizing](/de/docs/Web/CSS/box-sizing) festgelegte Box angewendet wird.

    > [!NOTE]
    > Um die von Browsern verwendeten Aliase für den `stretch`-Wert und deren Umsetzungsstatus zu prüfen, siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Minimale Breite eines Elements festlegen

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
- [Einführung in das CSS Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) Leitfaden
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
