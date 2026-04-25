---
title: "`min-width` CSS property"
short-title: min-width
slug: Web/CSS/Reference/Properties/min-width
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`min-width`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt die Mindestbreite eines Elements fest. Sie verhindert, dass der [verwendete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) der {{cssxref("width")}}-Eigenschaft kleiner wird als der Wert, der für `min-width` angegeben ist.

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

Die Breite des Elements wird auf den Wert von `min-width` gesetzt, wann immer `min-width` größer ist als {{Cssxref("max-width")}} oder {{Cssxref("width")}}.

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
  - : Der Standardwert. Die Quelle des automatischen Wertes für das angegebene Element hängt von seinem Display-Wert ab. Für Blockboxen, Inline-Boxen, Inline-Blöcke und alle Tabellenlayout-Boxen löst sich `auto` zu `0` auf.

    Für {{Glossary("Flex_Item", "Flex-Elemente")}} und Grid-Elemente ist der minimale Breitenwert entweder die angegebene vorgeschlagene Größe, wie der Wert der `width`-Eigenschaft, die übertragene Größe, berechnet, wenn das Element ein festgelegtes `aspect-ratio` hat und die Höhe eine feste Größe ist, andernfalls wird die `min-content`-Größe verwendet. Wenn das Flex- oder Grid-Element ein {{Glossary("scroll_container", "Scroll-Container")}} ist oder wenn ein Grid-Element mehr als eine flexible Spaltenstrecke überspannt, beträgt die automatische Mindestgröße `0`.

- {{cssxref("max-content")}}
  - : Die intrinsisch bevorzugte `min-width`.
- {{cssxref("min-content")}}
  - : Die intrinsisch minimale `min-width`.
- {{cssxref("fit-content")}}
  - : Verwendet den verfügbaren Platz, aber nicht mehr als {{cssxref("max-content")}}, d.h. `min(max-content, max(min-content, stretch))`.
- [`fit-content(<length-percentage>)`](/de/docs/Web/CSS/Reference/Values/fit-content_function)
  - : Verwendet die `fit-content`-Formel mit dem verfügbaren Raum, ersetzt durch das angegebene Argument, d.h. `min(max-content, max(min-content, argument))`.
- `stretch`
  - : Begrenzt die Mindestbreite der [Außenabstandsebene](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) eines Elements auf die Breite seines [umgebenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block#identifying_the_containing_block). Es versucht, die Außenabstandsebene in den verfügbaren Raum des umgebenden Blocks zu füllen, so dass es sich in gewisser Weise ähnlich wie `100%` verhält, aber die resultierende Größe auf die Außenabstandsebene anwendet, anstatt auf die Box, die durch [box-sizing](/de/docs/Web/CSS/Reference/Properties/box-sizing) bestimmt wird.

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
- [CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model) Modul
