---
title: "`outline` CSS-Eigenschaft"
short-title: outline
slug: Web/CSS/Reference/Properties/outline
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`outline`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) setzt die meisten Kontur-Eigenschaften in einer einzigen Deklaration.

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

Die `outline`-Eigenschaft kann mit einem, zwei oder drei der unten aufgeführten Werte angegeben werden. Die Reihenfolge der Werte spielt keine Rolle. Wie bei allen Kurzschreibweise-Eigenschaften werden ausgelassene Unterwerte auf ihren [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) gesetzt.

> [!NOTE]
> Die Kontur wird für viele Elemente unsichtbar sein, wenn der Stil nicht definiert ist. Dies liegt daran, dass der Standardstil `none` ist. Eine bemerkenswerte Ausnahme bilden `input`-Elemente, die von Browsern mit einer Standardstil versehen werden.

### Werte

- `<'outline-width'>`
  - : Legt die Dicke der Kontur fest. Falls nicht vorhanden, ist der Standard `medium`. Siehe {{cssxref("outline-width")}}.
- `<'outline-style'>`
  - : Legt den Stil der Kontur fest. Falls nicht vorhanden, ist der Standard `none`. Siehe {{cssxref("outline-style")}}.
- `<'outline-color'>`
  - : Legt die Farbe der Kontur fest. Standard ist `invert` für unterstützende Browser, `currentColor` für die anderen. Siehe {{cssxref("outline-color")}}.

## Beschreibung

Die Kontur ist eine Linie außerhalb des [Rahmens](/de/docs/Web/CSS/Reference/Properties/border) des Elements. Im Gegensatz zu anderen Bereichen der Box nimmt sie keinen Platz ein, sodass sie das Layout des Dokuments in keiner Weise beeinflusst.

Es gibt einige Eigenschaften, die das Erscheinungsbild einer Kontur beeinflussen. Es ist möglich, den Stil, die Farbe und die Breite mit der `outline`-Eigenschaft zu ändern, den Abstand vom Rahmen mit der {{cssxref("outline-offset")}}-Eigenschaft und die Ecken mit der {{cssxref("border-radius")}}-Eigenschaft.

Eine Kontur muss nicht rechteckig sein: Bei mehrzeiligem Text zeichnen einige Browser für jede Zeilenbox eine separate Kontur, während andere den gesamten Text mit einer einzigen Kontur umrahmen.

## Zugänglichkeit

Das Zuweisen des Werts `0` oder `none` zur `outline`-Eigenschaft entfernt den Standardfokus-Stil des Browsers. Wenn ein Element interaktiv ist, muss es über einen sichtbaren Fokusindikator verfügen. Stellen Sie einen deutlichen Fokus-Stil bereit, wenn der Standardfokus-Stil entfernt wird.

- [Nützliche und benutzbare Fokusindikatoren entwerfen (Englisch)](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)
- WCAG 2.1: [Erfolgskriterium 2.4.7: Fokus sichtbar verstehen (Englisch)](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung der Outline zur Festlegung eines Fokus-Stils

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
