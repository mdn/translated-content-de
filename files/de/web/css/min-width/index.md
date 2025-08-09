---
title: min-width
slug: Web/CSS/min-width
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

Die **`min-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Mindestbreite eines Elements fest. Sie verhindert, dass der [benutzte Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) der {{cssxref("width")}} Eigenschaft kleiner wird als der für `min-width` angegebene Wert.

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

Die Breite des Elements wird auf den Wert von `min-width` gesetzt, wenn `min-width` größer ist als {{Cssxref("max-width")}} oder {{Cssxref("width")}}.

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
  - : Der Standardwert. Die Quelle des automatischen Wertes für das spezifizierte Element hängt von seinem Anzeige-Wert ab. Für Blockboxen, Inline-Boxen, Inline-Blöcke und alle Tabellendesign-Boxen löst sich `auto` zu `0` auf.

    Für {{Glossary("Flex_Item", "flex items")}} und Grid-Elemente ist der Minimalbreitenwert entweder die angegebene vorgeschlagene Größe, wie der Wert der `width`-Eigenschaft, die übertragene Größe, berechnet, wenn das Element ein `aspect-ratio` gesetzt hat und die Höhe eine feste Größe ist, ansonsten wird die `min-content` Größe verwendet. Wenn das Flex- oder Grid-Element ein {{Glossary("scroll_container", "scroll container")}} ist oder wenn ein Grid-Element sich über mehr als eine flexible Spaltenbahn erstreckt, ist die automatische Minimalgröße `0`.

- `max-content`
  - : Die intrinsische bevorzugte `min-width`.
- `min-content`
  - : Die intrinsische minimale `min-width`.
- `fit-content`
  - : Verwenden Sie den verfügbaren Platz, aber nicht mehr als [`max-content`](/de/docs/Web/CSS/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die `fit-content`-Formel, wobei der verfügbare Raum durch das angegebene Argument ersetzt wird, d.h. `min(max-content, max(min-content, argument))`.
- `stretch`
  - : Begrenzt die Mindestbreite des [margin box](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) eines Elements auf die Breite seines [enthältenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block). Es versucht, die Margin-Box den verfügbaren Raum im enthältenden Block ausfüllen zu lassen, ähnlich wie bei `100%`, jedoch wird die resultierende Größe auf die Margin-Box und nicht auf die durch [box-sizing](/de/docs/Web/CSS/box-sizing) bestimmte Box angewendet.

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
- [Einführung in das CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) Leitfaden
- [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul
