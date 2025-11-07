---
title: min-width
slug: Web/CSS/Reference/Properties/min-width
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`min-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Mindestbreite eines Elements fest. Sie verhindert, dass der [verwendete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) der {{cssxref("width")}}-Eigenschaft kleiner wird als der Wert, der für `min-width` angegeben ist.

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
  - : Definiert die `min-width` als Prozentsatz der Breite des umgebenden Blocks.
- `auto`

  - : Der Standardwert. Die Quelle des automatischen Werts für das angegebene Element hängt von dessen Anzeigeeigenschaft ab. Für Blockboxen, Inline-Boxen, Inline-Blöcke und alle Tabellenlayoutboxen wird `auto` mit `0` aufgelöst.

    Für {{Glossary("Flex_Item", "Flex-Elemente")}} und Grid-Elemente ist der Mindestbreitenwert entweder die angegebene Vorschlagsgröße, wie der Wert der `width` Eigenschaft, die übertragene Größe, berechnet, wenn das Element ein `aspect-ratio` gesetzt hat und die Höhe eine feste Größe ist, andernfalls wird die `min-content` Größe verwendet. Falls das Flex- oder Grid-Element ein {{Glossary("scroll_container", "Scroll-Container")}} ist oder ein Grid-Element mehr als eine flexible Spaltenbahn überspannt, beträgt die automatische Mindestgröße `0`.

- {{cssxref("max-content")}}
  - : Die intrinsische bevorzugte `min-width`.
- {{cssxref("min-content")}}
  - : Die intrinsische minimale `min-width`.
- {{cssxref("fit-content")}}
  - : Nutzt den verfügbaren Platz, jedoch nicht mehr als [`max-content`](/de/docs/Web/CSS/Reference/Values/max-content), also `min(max-content, max(min-content, stretch))`.
- [`fit-content(<length-percentage>)`](/de/docs/Web/CSS/Reference/Values/fit-content_function)
  - : Verwendet die `fit-content`-Formel mit dem verfügbaren Raum, ersetzt durch das angegebene Argument, also `min(max-content, max(min-content, argument))`.
- `stretch`

  - : Begrenzung der Mindestbreite des [Margin-Box](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements auf die Breite seines [umschließenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block#identifying_the_containing_block). Es versucht, die Margin-Box so auszufüllen, dass sie den verfügbaren Platz im umschließenden Block ausfüllt, und verhält sich somit ähnlich wie `100%`, wobei die resultierende Größe auf die Margin-Box und nicht auf die durch [box-sizing](/de/docs/Web/CSS/Reference/Properties/box-sizing) bestimmte Box angewendet wird.

    > [!NOTE]
    > Um die von Browsern verwendeten Aliase für den `stretch`-Wert und dessen Implementierungsstatus zu überprüfen, siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität).

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
- [Einführung in das CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model/Introduction) Leitfaden
- [CSS Boxmodel](/de/docs/Web/CSS/Guides/Box_model) Modul
