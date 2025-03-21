---
title: outline
slug: Web/CSS/outline
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
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
outline: 8px ridge rgba(170, 50, 220, 0.6);
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

## Zusammenhängende Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

Die `outline`-Eigenschaft kann mit einem, zwei oder drei der unten aufgeführten Werte angegeben werden. Die Reihenfolge der Werte spielt keine Rolle. Wie bei allen Kurzschreibweisen werden alle ausgelassenen Unterwerte auf ihren [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial-value) gesetzt.

> [!NOTE]
> Die Outline wird für viele Elemente unsichtbar sein, wenn ihr Stil nicht definiert ist. Dies liegt daran, dass der Stil standardmäßig auf `none` gesetzt ist. Eine bemerkenswerte Ausnahme sind `input`-Elemente, die von den Browsern mit einer Standardgestaltung versehen werden.

### Werte

- `<'outline-width'>`
  - : Legt die Dicke der Outline fest. Standard ist `medium`, wenn nicht angegeben. Siehe {{cssxref("outline-width")}}.
- `<'outline-style'>`
  - : Legt den Stil der Outline fest. Standard ist `none`, wenn nicht angegeben. Siehe {{cssxref("outline-style")}}.
- `<'outline-color'>`
  - : Legt die Farbe der Outline fest. Standard ist `invert` für unterstützende Browser, `currentcolor` für die anderen. Siehe {{cssxref("outline-color")}}.

## Beschreibung

Das Outline ist eine Linie außerhalb des [Randes](/de/docs/Web/CSS/border) eines Elements. Anders als andere Bereiche der Box nimmt das Outline keinen Platz ein und beeinflusst somit nicht das Layout des Dokuments.

Es gibt einige Eigenschaften, die das Erscheinungsbild eines Outlines beeinflussen. Es ist möglich, den Stil, die Farbe und die Breite über die `outline`-Eigenschaft zu ändern, den Abstand zum Rand mit der {{cssxref("outline-offset")}}-Eigenschaft und die Eckenwinkel mit der {{cssxref("border-radius")}}-Eigenschaft.

Ein Outline muss nicht rechteckig sein: Bei mehrzeiligem Text zeichnen einige Browser ein Outline für jede separate Zeilenbox, während andere den gesamten Text mit einem einzigen Outline umschließen.

## Barrierefreiheit

Ein `outline`-Wert von `0` oder `none` entfernt den standardmäßigen Fokus-Stil des Browsers. Wenn ein Element interaktiv ist, muss es einen sichtbaren Fokus-Indikator haben. Sorgen Sie für eine offensichtliche Fokus-Gestaltung, wenn der Standardfokus-Stil entfernt wurde.

- [How to Design Useful and Usable Focus Indicators](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)
- WCAG 2.1: [Understanding Success Criterion 2.4.7: Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von Outline, um einen Fokus-Stil festzulegen

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
