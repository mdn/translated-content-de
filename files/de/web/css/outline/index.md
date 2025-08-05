---
title: outline
slug: Web/CSS/outline
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Die **`outline`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) setzt die meisten Outline-Eigenschaften in einer einzigen Deklaration.

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

## Bestandteile

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

Die `outline`-Eigenschaft kann mit einem, zwei oder drei der unten aufgeführten Werte angegeben werden. Die Reihenfolge der Werte spielt keine Rolle. Wie bei allen Kurzschreibweisen werden alle ausgelassenen Teilwerte auf ihren [Standardwert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) gesetzt.

> [!NOTE]
> Die Kontur wird für viele Elemente unsichtbar sein, wenn ihr Stil nicht definiert ist. Dies liegt daran, dass der Stil standardmäßig auf `none` gesetzt ist. Eine bemerkenswerte Ausnahme sind `input`-Elemente, denen von Browsern eine Standardstilierung zugewiesen wird.

### Werte

- `<'outline-width'>`
  - : Bestimmt die Dicke der Kontur. Standardmäßig `medium`, wenn nicht angegeben. Siehe {{cssxref("outline-width")}}.
- `<'outline-style'>`
  - : Bestimmt den Stil der Kontur. Standardwert ist `none`, wenn nicht angegeben. Siehe {{cssxref("outline-style")}}.
- `<'outline-color'>`
  - : Bestimmt die Farbe der Kontur. Standardmäßig `invert` für unterstützende Browser, `currentColor` für andere. Siehe {{cssxref("outline-color")}}.

## Beschreibung

Eine Kontur ist eine Linie außerhalb des [Rahmens](/de/docs/Web/CSS/border) eines Elements. Im Gegensatz zu anderen Bereichen der Box nehmen Konturen keinen Platz ein und beeinflussen somit das Layout des Dokuments in keiner Weise.

Es gibt einige Eigenschaften, die das Erscheinungsbild einer Kontur beeinflussen. Es ist möglich, den Stil, die Farbe und die Breite mit der `outline`-Eigenschaft zu ändern, den Abstand zum Rahmen mit der {{cssxref("outline-offset")}}-Eigenschaft und die Eckenwinkel mit der {{cssxref("border-radius")}}-Eigenschaft.

Eine Kontur muss nicht rechteckig sein: Bei mehrzeiligem Text zeichnen einige Browser eine Kontur für jede Zeilenbox separat, während andere den gesamten Text mit einer einzigen Kontur umhüllen.

## Barrierefreiheit

Das Zuweisen des Werts `0` oder `none` an `outline` entfernt den Standard-Fokusstil des Browsers. Wenn ein Element interaktiv ist, muss es einen sichtbaren Fokusindikator haben. Sorgen Sie für einen deutlichen Fokusstil, wenn der Standardfokusstil entfernt wird.

- [Wie man nützliche und benutzbare Fokusindikatoren entwirft](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)
- WCAG 2.1: [Erklärung zum Erfolgskriterium 2.4.7: Fokus sichtbar](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von outline für einen Fokus-Stil

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
