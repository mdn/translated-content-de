---
title: CSS-Eigenschaft `outline`
short-title: outline
slug: Web/CSS/Reference/Properties/outline
l10n:
  sourceCommit: d1cf7346516383565b51a125c064ae3d5d893526
---

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`outline`** legt Stil, Farbe und Breite der Kontur eines Elements fest.

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

## Bestandteileigenschaften

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

### Werte

Diese Eigenschaft wird als ein, zwei oder drei Werte aus der folgenden Liste angegeben:

- `<'outline-width'>`
  - : Ein {{cssxref("line-width")}}-Wert, der die Dicke der Kontur festlegt. Falls nicht angegeben, ist der Standardwert `medium`. Siehe {{cssxref("outline-width")}}.
- `<'outline-style'>`
  - : Legt den Stil der Kontur fest. Falls nicht angegeben, ist der Standardwert `none`. Siehe {{cssxref("outline-style")}}.
- `<'outline-color'>`
  - : Legt die Farbe der Kontur fest. Der Standardwert ist `invert` für Browser, die diesen Wert unterstützen, und `currentColor` für die anderen. Siehe {{cssxref("outline-color")}}.

## Beschreibung

Die Kurzschreibweise `outline` legt Stil, Farbe und Breite der Kontur eines Elements fest. Sie kann mit einem, zwei oder drei Werten angegeben werden. Die Reihenfolge der Werte spielt keine Rolle. Nicht angegebene Teilwerte werden auf ihren [Initialwert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) gesetzt.

Die Kontur ist bei vielen Elementen unsichtbar, wenn ihr Stil nicht definiert ist. Das liegt daran, dass der Stil standardmäßig `none` ist. Eine bemerkenswerte Ausnahme bilden `input`-Elemente, denen Browser ein Standard-Styling zuweisen.

Eine Kontur ist eine Linie außerhalb des [Rahmens](/de/docs/Web/CSS/Reference/Properties/border) eines Elements. Anders als andere Bereiche der Box nehmen Konturen keinen Platz ein und beeinflussen daher das Layout des Dokuments in keiner Weise.

Einige Eigenschaften beeinflussen das Erscheinungsbild einer Kontur. Stil, Farbe und Breite können mit der Eigenschaft `outline` geändert werden, der Abstand zum Rahmen mit der Eigenschaft {{cssxref("outline-offset")}} und die Eckwinkel mit der Eigenschaft {{cssxref("border-radius")}}.

Eine Kontur muss nicht rechteckig sein: Bei mehrzeiligem Text zeichnen einige Browser für jede Zeilenbox eine separate Kontur, während andere den gesamten Text mit einer einzigen Kontur umschließen.

## Barrierefreiheit

Das Zuweisen des Werts `0` oder `none` zu `outline` entfernt den standardmäßigen Fokusstil des Browsers. Wenn mit einem Element interagiert werden kann, muss es einen sichtbaren Fokusindikator haben. Stellen Sie eine deutliche Fokusformatierung bereit, wenn der standardmäßige Fokusstil entfernt wird.

- [Anleitung zum Entwerfen hilfreicher und nutzbarer Fokusindikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)
- WCAG 2.1: [Erfolgskriterium 2.4.7 verstehen: Fokus sichtbar](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### `outline` verwenden, um einen Fokusstil festzulegen

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
