---
title: min-width
slug: Web/CSS/Reference/Properties/min-width
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`min-width`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt die Mindestbreite eines Elements. Sie verhindert, dass der [benutzte Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) der {{cssxref("width")}} Eigenschaft kleiner wird als der für `min-width` angegebene Wert.

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
  - : Der Standardwert. Die Quelle des automatischen Werts für das angegebene Element hängt von seinem Anzeige-Wert ab. Für Block-Boxen, Inline-Boxen, Inline-Blöcke und alle Tabellenlayout-Boxen wird `auto` zu `0`.

    Für {{Glossary("Flex_Item", "Flex-Elemente")}} und Rasterelemente ist der Mindestbreitenwert entweder die angegebene vorgeschlagene Größe, wie der Wert der `width` Eigenschaft, die übertragene Größe, berechnet, wenn das Element ein `aspect-ratio` gesetzt hat und die Höhe eine feste Größe ist; andernfalls wird die `min-content` Größe verwendet. Wenn das Flex- oder Rasterelement ein {{Glossary("scroll_container", "Scroll-Container")}} ist oder wenn ein Rasterelement mehr als eine flexible Spaltenbahn überspannt, ist die automatische Mindestgröße `0`.

- {{cssxref("max-content")}}
  - : Die intrinsische bevorzugte `min-width`.
- {{cssxref("min-content")}}
  - : Die intrinsische minimale `min-width`.
- {{cssxref("fit-content")}}
  - : Verwendet den verfügbaren Platz, aber nicht mehr als {{cssxref("max-content")}}, d.h. `min(max-content, max(min-content, stretch))`.
- [`fit-content(<length-percentage>)`](/de/docs/Web/CSS/Reference/Values/fit-content_function)
  - : Verwendet die `fit-content`-Formel mit dem verfügbaren Raum, ersetzt durch das angegebene Argument, d.h. `min(max-content, max(min-content, argument))`.
- `stretch`
  - : Beschränkt die Mindestbreite der [Margin-Box](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements auf die Breite seines [umgebenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block#identifying_the_containing_block). Es wird versucht, die Margin-Box so zu erweitern, dass sie den verfügbaren Platz im umgebenden Block ausfüllt, verhält sich also in gewisser Weise ähnlich wie `100%`, wendet die resultierende Größe jedoch auf die Margin-Box an, anstatt auf die Box, die durch [box-sizing](/de/docs/Web/CSS/Reference/Properties/box-sizing) bestimmt wird.

    > [!NOTE]
    > Um Aliase zu überprüfen, die von Browsern für den `stretch`-Wert verwendet werden und deren Implementierungsstatus, siehe den Abschnitt [Browser-Kompatibilität](#browser_kompatibilität).

## Formal definition

{{cssinfo}}

## Formal syntax

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
- [Einführung in das CSS-Boxenmodell](/de/docs/Web/CSS/Guides/Box_model/Introduction) Leitfaden
- [CSS-Boxenmodell](/de/docs/Web/CSS/Guides/Box_model) Modul
