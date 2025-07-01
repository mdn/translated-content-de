---
title: outline
slug: Web/CSS/outline
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`outline`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt die meisten Outline-Eigenschaften in einer einzigen Deklaration fest.

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

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("outline-width")}}
- {{cssxref("outline-style")}}
- {{cssxref("outline-color")}}

## Syntax

```css
/* style */
outline: solid;

/* style | color */
outline: dashed #f66;

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

Die `outline`-Eigenschaft kann mit einem, zwei oder drei der unten aufgeführten Werte angegeben werden. Die Reihenfolge der Werte spielt keine Rolle. Wie bei allen Kurzformen werden alle ausgelassenen Unterwerte auf ihren [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) gesetzt.

> [!NOTE]
> Das Outline wird bei vielen Elementen unsichtbar sein, wenn der Stil nicht definiert ist. Das liegt daran, dass der Stil standardmäßig auf `none` gesetzt ist. Eine bemerkenswerte Ausnahme sind `input`-Elemente, die von den Browsern eine Standardstilierung erhalten.

### Werte

- `<'outline-width'>`
  - : Legt die Dicke des Outlines fest. Standardwert ist `medium`, wenn nicht angegeben. Siehe {{cssxref("outline-width")}}.
- `<'outline-style'>`
  - : Legt den Stil des Outlines fest. Standardwert ist `none`, wenn nicht angegeben. Siehe {{cssxref("outline-style")}}.
- `<'outline-color'>`
  - : Legt die Farbe des Outlines fest. Standardwert ist `invert` bei unterstützenden Browsern, `currentcolor` bei den anderen. Siehe {{cssxref("outline-color")}}.

## Beschreibung

Ein Outline ist eine Linie außerhalb des [Rahmens](/de/docs/Web/CSS/border) eines Elements. Im Gegensatz zu anderen Bereichen der Box nehmen Outlines keinen Platz ein, sodass sie das Layout des Dokuments in keiner Weise beeinflussen.

Es gibt einige Eigenschaften, die das Erscheinungsbild eines Outlines beeinflussen. Es ist möglich, den Stil, die Farbe und die Breite mit der `outline`-Eigenschaft zu ändern, den Abstand vom Rahmen mit der {{cssxref("outline-offset")}}-Eigenschaft und die Eckenwinkel mit der {{cssxref("border-radius")}}-Eigenschaft anzupassen.

Ein Outline muss nicht rechteckig sein: Bei mehrzeiligem Text zeichnen einige Browser für jede Zeilenbox ein separates Outline, während andere den gesamten Text mit einem einzigen Outline umfassen.

## Barrierefreiheit

Das Zuweisen des Werts `0` oder `none` zur `outline`-Eigenschaft entfernt den standardmäßigen Fokus-Stil des Browsers. Wenn ein Element interaktiv ist, muss es einen sichtbaren Fokus-Indikator haben. Sorgen Sie für eine eindeutige Fokus-Stilierung, wenn der Standardfokusstil entfernt wird.

- [Wie man nützliche und benutzerfreundliche Fokus-Indikatoren entwirft](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)
- WCAG 2.1: [Verstehen des Erfolgskriteriums 2.4.7: Fokus sichtbar](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von outline zur Festlegung eines Fokus-Stils

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
  outline: 4px dotted #e73;
  outline-offset: 4px;
  background: #ffa;
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
