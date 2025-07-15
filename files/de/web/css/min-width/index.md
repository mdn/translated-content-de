---
title: min-width
slug: Web/CSS/min-width
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
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
  color: #ffffff;
}
```

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
  - : Der Standardwert. Die Quelle des automatischen Wertes für das angegebene Element hängt von seinem Anzeigewert ab. Für Blockboxen, Inlineboxen, Inlineblöcke und alle Tabellenlayoutboxen wird `auto` zu `0`.

    Für {{Glossary("Flex_Item", "Flex-Elemente")}} und Grid-Elemente ist der Mindestbreitenwert entweder die angegebene vorgeschlagene Größe, wie der Wert der `width` Eigenschaft, die übertragene Größe, berechnet, falls das Element ein festgelegtes `aspect-ratio` besitzt und die Höhe eine feste Größe ist, andernfalls wird die `min-content` Größe verwendet. Wenn das Flex- oder Grid-Element ein {{Glossary("scroll_container", "Scroll-Container")}} ist oder wenn ein Grid-Element mehr als einen flexiblen Spalten-Track überspannt, ist die automatische Mindestgröße `0`.

- `max-content`
  - : Die intrinsisch bevorzugte `min-width`.
- `min-content`
  - : Die intrinsische minimale `min-width`.
- `fit-content`
  - : Nutzt den verfügbaren Platz, jedoch nicht mehr als [`max-content`](/de/docs/Web/CSS/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die `fit-content`-Formel mit dem verfügbaren Raum, der durch das angegebene Argument ersetzt wird, d.h. `min(max-content, max(min-content, argument))`.
- `stretch`
  - : Begrenzt die Mindestbreite der [Margin-Box](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements auf die Breite seines [umgebenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block). Es versucht, die Margin-Box zu füllen und so den verfügbaren Raum im umgebenden Block zu nutzen. In gewisser Weise verhält es sich ähnlich wie `100%`, aber es wird die resultierende Größe auf die Margin-Box angewendet und nicht auf die Box, die durch [box-sizing](/de/docs/Web/CSS/box-sizing) bestimmt wird.

    > [!NOTE]
    > Um die von Browsern verwendeten Aliase für den `stretch` Wert und deren Implementierungsstatus zu überprüfen, siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität).

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
- [Einführung in das CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) Leitfaden
- [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul
