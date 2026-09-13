---
title: "`min-width` CSS property"
short-title: min-width
slug: Web/CSS/Reference/Properties/min-width
l10n:
  sourceCommit: 3fb9ea0187429234b47cb0385a9515a69757fe63
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`min-width`** legt die Mindestbreite eines Elements fest. Sie verhindert, dass der [verwendete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) der Eigenschaft {{cssxref("width")}} kleiner als der für `min-width` angegebene Wert wird.

Die Breite des Elements wird auf den Wert von `min-width` gesetzt, wenn `min-width` größer als {{Cssxref("max-width")}} oder {{Cssxref("width")}} ist.

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
  - : Definiert `min-width` als absoluten Wert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Definiert `min-width` als Prozentsatz der Breite des enthaltenden Blocks.
- `auto`
  - : Der Standardwert. Die Quelle des automatischen Werts für das angegebene Element hängt von dessen display-Wert ab. Für Blockboxen, Inline-Boxen, Inline-Blöcke und alle Tabellenlayout-Boxen wird `auto` zu `0` aufgelöst.

    Für {{Glossary("Flex_Item", "Flex-Elemente")}} und Grid-Elemente ist der Mindestbreitenwert entweder die angegebene vorgeschlagene Größe, beispielsweise der Wert der Eigenschaft `width`, die übertragene Größe, die berechnet wird, wenn für das Element ein `aspect-ratio` festgelegt ist und die Höhe eine bestimmte Größe hat; andernfalls wird die Größe `min-content` verwendet. Wenn das Flex- oder Grid-Element ein {{Glossary("scroll_container", "Scroll-Container")}} ist oder wenn ein Grid-Element mehr als einen flexiblen Spalten-Track überspannt, beträgt die automatische Mindestgröße `0`.

- {{cssxref("max-content")}}
  - : Die intrinsisch bevorzugte `min-width`.
- {{cssxref("min-content")}}
  - : Die intrinsische minimale `min-width`.
- {{cssxref("fit-content")}}
  - : Verwendet den verfügbaren Platz, jedoch nicht mehr als {{cssxref("max-content")}}, d.h. `min(max-content, max(min-content, stretch))`.
- [`fit-content(<length-percentage>)`](/de/docs/Web/CSS/Reference/Values/fit-content_function)
  - : Verwendet die Formel `fit-content`, wobei der verfügbare Platz durch das angegebene Argument ersetzt wird, d.h. `min(max-content, max(min-content, argument))`.
- `stretch`
  - : Beschränkt die Mindestbreite der [Margin-Box](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements auf die Breite seines [enthaltenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block#identifying_the_containing_block). Es wird versucht, die Margin-Box den verfügbaren Platz im enthaltenden Block ausfüllen zu lassen, wodurch sich das Verhalten in gewisser Weise ähnlich wie bei `100%` verhält, die resultierende Größe jedoch auf die Margin-Box statt auf die durch [box-sizing](/de/docs/Web/CSS/Reference/Properties/box-sizing) bestimmte Box angewendet wird.

    > [!NOTE]
    > Informationen zu den von Browsern für den Wert `stretch` verwendeten Aliasnamen und zu dessen Implementierungsstatus finden Sie im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Mindestbreite von Elementen festlegen

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
- Leitfaden [Einführung in das CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction)
- Modul [CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model)
