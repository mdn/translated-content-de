---
title: min-height
slug: Web/CSS/Reference/Properties/min-height
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`min-height`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Mindesthöhe eines Elements fest. Sie verhindert, dass der [benutzte Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) der {{cssxref("height")}} Eigenschaft kleiner wird als der für `min-height` angegebene Wert.

{{InteractiveExample("CSS Demo: min-height")}}

```css interactive-example-choice
min-height: 150px;
```

```css interactive-example-choice
min-height: 7em;
```

```css interactive-example-choice
min-height: 75%;
```

```css interactive-example-choice
min-height: 10px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box where you can change the minimum height. <br />If there is
    more content than the minimum the box will grow to the height needed by the
    content.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  justify-content: center;
  color: white;
}
```

Die Höhe des Elements wird auf den Wert von `min-height` gesetzt, wann immer `min-height` größer ist als {{cssxref("max-height")}} oder {{cssxref("height")}}.

## Syntax

```css
/* <length> value */
min-height: 3.5em;
min-height: anchor-size(height);
min-height: anchor-size(--my-anchor block, 200px);

/* <percentage> value */
min-height: 10%;

/* Keyword values */
min-height: max-content;
min-height: min-content;
min-height: fit-content;
min-height: fit-content(20em);
min-height: stretch;

/* Global values */
min-height: inherit;
min-height: initial;
min-height: revert;
min-height: revert-layer;
min-height: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Definiert die `min-height` als absoluten Wert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Definiert die `min-height` als Prozentsatz der Höhe des umschließenden Blocks.
- `auto`
  - : Der Browser berechnet und wählt eine `min-height` für das angegebene Element aus.
- {{cssxref("max-content")}}
  - : Die intrinsische bevorzugte `min-height`.
- {{cssxref("min-content")}}
  - : Die intrinsische minimale `min-height`.
- {{cssxref("fit-content")}}
  - : Verwendet den verfügbaren Platz, aber nicht mehr als [max-content](/de/docs/Web/CSS/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- [`fit-content(<length-percentage>)`](/de/docs/Web/CSS/fit-content_function)
  - : Verwendet die `fit-content`-Formel mit dem verfügbaren Raum, ersetzt durch das angegebene Argument, d.h. `min(max-content, max(min-content, argument))`.
- `stretch`
  - : Begrenzen Sie die Mindesthöhe der [Randbox](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements auf die Höhe seines [umschließenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block). Es versucht, die Randbox so zu gestalten, dass sie den verfügbaren Raum im umschließenden Block ausfüllt, und verhält sich in gewissem Sinne ähnlich wie `100%`, jedoch wird die resultierende Größe auf die Randbox angewandt und nicht auf die Box, die durch [box-sizing](/de/docs/Web/CSS/Reference/Properties/box-sizing) bestimmt wird.

    > [!NOTE]
    > Um zu prüfen, welche Aliasnamen von Browsern für den `stretch`-Wert verwendet werden und wie der Implementierungsstatus ist, sehen Sie sich den Abschnitt zur [Browser-Kompatibilität](#browser-kompatibilität) an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung der min-height

```css
table {
  min-height: 75%;
}

form {
  min-height: 0;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("max-height")}}
- {{Cssxref("height")}}
- {{cssxref("min-inline-size")}}
- {{cssxref("min-block-size")}}
- {{cssxref("box-sizing")}}
- [Einführung in das CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) Leitfaden
- [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul
