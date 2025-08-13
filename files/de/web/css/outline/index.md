---
title: outline
slug: Web/CSS/outline
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`outline`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) setzt die meisten der Outline-Eigenschaften in einer einzigen Deklaration.

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

## Zusammengesetzte Eigenschaften

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

Die `outline`-Eigenschaft kann mithilfe eines, zweier oder dreier der unten aufgeführten Werte angegeben werden. Die Reihenfolge der Werte ist dabei unerheblich. Wie bei allen Kurzschreibweisen werden alle ausgelassenen Unterwerte auf ihren [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) gesetzt.

> [!NOTE]
> Das Outline wird für viele Elemente unsichtbar sein, wenn sein Stil nicht definiert ist. Der Grund dafür ist, dass der Stil standardmäßig auf `none` gesetzt ist. Eine bemerkenswerte Ausnahme bilden `input`-Elemente, die von den Browsern mit einem Standardstil versehen werden.

### Werte

- `<'outline-width'>`
  - : Legt die Dicke des Outlines fest. Standard ist `medium`, wenn nicht angegeben. Siehe {{cssxref("outline-width")}}.
- `<'outline-style'>`
  - : Legt den Stil des Outlines fest. Standard ist `none`, wenn nicht angegeben. Siehe {{cssxref("outline-style")}}.
- `<'outline-color'>`
  - : Legt die Farbe des Outlines fest. Standard ist `invert` für unterstützende Browser, `currentColor` für die anderen. Siehe {{cssxref("outline-color")}}.

## Beschreibung

Ein Outline ist eine Linie außerhalb der [border](/de/docs/Web/CSS/border) eines Elements. Im Gegensatz zu anderen Bereichen der Box nimmt das Outline keinen Platz ein und beeinflusst das Layout des Dokuments in keiner Weise.

Es gibt einige Eigenschaften, die das Erscheinungsbild eines Outlines beeinflussen. Es ist möglich, den Stil, die Farbe und die Breite mit der `outline`-Eigenschaft zu ändern, den Abstand von der Grenze mit der {{cssxref("outline-offset")}}-Eigenschaft und die Eckwinkel mit der {{cssxref("border-radius")}}-Eigenschaft.

Ein Outline muss nicht rechteckig sein: Bei mehrzeiligem Text zeichnen einige Browser für jede Zeilenbox ein eigenes Outline, während andere den gesamten Text mit einem einzigen Outline umhüllen.

## Barrierefreiheit

Die Zuweisung des Wertes `0` oder `none` für `outline` entfernt den Standardfokus-Stil des Browsers. Wenn ein Element interaktiv ist, muss es einen sichtbaren Fokusindikator haben. Stellen Sie einen offensichtlichen Fokus-Stil bereit, wenn der Standardfokus-Stil entfernt wird.

- [Nützliche und benutzbare Fokus-Indikatoren gestalten](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)
- WCAG 2.1: [Erfolgskriterium 2.4.7: Fokus sichtbar verstehen](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von outline, um einen Fokus-Stil festzulegen

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
