---
title: outline
slug: Web/CSS/Reference/Properties/outline
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`outline`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) setzt die meisten Outline-Eigenschaften in einer einzigen Deklaration.

{{InteractiveExample("CSS Demo: outline")}}

```css interactive-example-choice
outline: solid;
```

```css interactive-example-choice
outline: dashed red;
```

```css interactive-example-choice
outline: 1rem solid;
```

```css interactive-example-choice
outline: thick double #32a1ce;
```

```css interactive-example-choice
outline: 8px ridge rgb(170 50 220 / 0.6);
border-radius: 2rem;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with an outline around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  padding: 0.75rem;
  width: 80%;
  height: 100px;
}
```

## Bestandteile der Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("outline-width")}}
- {{cssxref("outline-style")}}
- {{cssxref("outline-color")}}

## Syntax

```css
/* style */
outline: solid;

/* style | color */
outline: dashed #ff6666;

/* width | style */
outline: thick inset;

/* width | style | color*/
outline: 3px solid green;

/* Global values */
outline: inherit;
outline: initial;
outline: revert;
outline: revert-layer;
outline: unset;
```

Die `outline`-Eigenschaft kann mit einem, zwei oder drei der unten aufgeführten Werte spezifiziert werden. Die Reihenfolge der Werte ist dabei unerheblich. Wie bei allen Kurzschreibweisen werden alle ausgelassenen Unterwerte auf ihren [Initialwert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) gesetzt.

> [!NOTE]
> Das Outline wird für viele Elemente unsichtbar sein, wenn dessen Stil nicht definiert ist. Dies liegt daran, dass der Stil standardmäßig auf `none` gesetzt ist. Eine bemerkenswerte Ausnahme sind `input`-Elemente, denen von den Browsern eine Standardstilistik gegeben wird.

### Werte

- `<'outline-width'>`
  - : Setzt die Dicke des Outlines. Standard ist `medium`, falls nicht angegeben. Siehe {{cssxref("outline-width")}}.
- `<'outline-style'>`
  - : Setzt den Stil des Outlines. Standard ist `none`, falls nicht angegeben. Siehe {{cssxref("outline-style")}}.
- `<'outline-color'>`
  - : Setzt die Farbe des Outlines. Standard ist `invert` für Browser, die dies unterstützen, `currentColor` für die anderen. Siehe {{cssxref("outline-color")}}.

## Beschreibung

Outline ist eine Linie außerhalb des [Rahmens](/de/docs/Web/CSS/Reference/Properties/border) eines Elements. Im Gegensatz zu anderen Bereichen der Box nehmen Outlines keinen Platz ein, sodass sie das Layout des Dokuments in keiner Weise beeinflussen.

Es gibt einige Eigenschaften, die das Erscheinungsbild eines Outlines beeinflussen. Es ist möglich, den Stil, die Farbe und die Breite mit der `outline`-Eigenschaft zu ändern, den Abstand zum Rahmen mit der {{cssxref("outline-offset")}}-Eigenschaft und die Eckenwinkel mit der {{cssxref("border-radius")}}-Eigenschaft.

Ein Outline muss nicht rechteckig sein: Bei mehrzeiligem Text ziehen einige Browser ein Outline für jede Line-Box separat, während andere den gesamten Text mit einem einzigen Outline umschließen.

## Barrierefreiheit

Einem Outline den Wert `0` oder `none` zuzuweisen, entfernt den Standard-Fokusstil des Browsers. Wenn ein Element interaktiv ist, muss es einen sichtbaren Fokusindikator haben. Sorgen Sie für einen offensichtlichen Fokusstil, wenn der Standard-Fokusstil entfernt wird.

- [Tipps zum Entwerfen nützlicher und gebrauchstauglicher Fokusindikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)
- WCAG 2.1: [Verständnis des Erfolgskriteriums 2.4.7: Fokus sichtbar](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwenden von Outline, um einen Fokusstil festzulegen

#### HTML

```html
<a href="#">This link has a special focus style.</a>
```

#### CSS

```css
a {
  border: 1px solid;
  border-radius: 3px;
  display: inline-block;
  margin: 10px;
  padding: 5px;
}

a:focus {
  outline: 4px dotted #ee7733;
  outline-offset: 4px;
  background: #ffffaa;
}
```

#### Ergebnis

{{EmbedLiveSample("Using_outline_to_set_a_focus_style", "100%", 85)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("outline-width")}}
- {{cssxref("outline-style")}}
- {{cssxref("outline-color")}}
- {{Cssxref("border")}}
