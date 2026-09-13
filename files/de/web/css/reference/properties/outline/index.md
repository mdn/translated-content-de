---
title: "`outline` CSS-Eigenschaft"
short-title: outline
slug: Web/CSS/Reference/Properties/outline
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
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

Die `outline`-Eigenschaft kann mit einem, zwei oder drei der unten aufgeführten Werte angegeben werden. Die Reihenfolge der Werte spielt keine Rolle. Wie bei allen Kurzschreibweise-Eigenschaften werden alle ausgelassenen Teilwerte auf ihren [Standardwert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) gesetzt.

> [!NOTE]
> Die Umrandung wird für viele Elemente unsichtbar sein, wenn ihr Stil nicht definiert ist. Dies liegt daran, dass der Stil standardmäßig `none` ist. Eine bemerkenswerte Ausnahme bilden `input`-Elemente, die von Browsern eine Standardformatierung erhalten.

### Werte

- `<'outline-width'>`
  - : Ein {{cssxref("line-width")}}-Wert, der die Dicke der Umrandung bestimmt. Standardmäßig `medium`, wenn nicht angegeben. Siehe {{cssxref("outline-width")}}.
- `<'outline-style'>`
  - : Legt den Stil der Umrandung fest. Standardmäßig `none`, wenn nicht angegeben. Siehe {{cssxref("outline-style")}}.
- `<'outline-color'>`
  - : Legt die Farbe der Umrandung fest. Standardmäßig `invert` für unterstützende Browser, `currentColor` für andere. Siehe {{cssxref("outline-color")}}.

## Beschreibung

Ein Outline ist eine Linie außerhalb des [Randes](/de/docs/Web/CSS/Reference/Properties/border) eines Elements. Im Gegensatz zu anderen Bereichen der Box nimmt das Outline keinen Raum ein und beeinflusst daher das Layout des Dokuments keineswegs.

Es gibt einige Eigenschaften, die das Erscheinungsbild eines Outlines beeinflussen. Es ist möglich, den Stil, die Farbe und die Breite mit der `outline`-Eigenschaft zu ändern, den Abstand zum Rand mit der {{cssxref("outline-offset")}}-Eigenschaft und die Eckwinkel mit der {{cssxref("border-radius")}}-Eigenschaft.

Ein Outline muss nicht rechteckig sein: Bei mehrzeiligem Text zeichnen einige Browser ein Outline für jedes Linienkasten getrennt, während andere den gesamten Text mit einem einzigen Outline umschließen.

## Barrierefreiheit

Weisen Sie `outline` einen Wert von `0` oder `none` zu, wird der standardmäßige Fokus-Stil des Browsers entfernt. Wenn ein Element interaktiv ist, muss es einen sichtbaren Fokus-Indikator haben. Sorgen Sie für offensichtliches Fokus-Styling, wenn der Standard-Fokus-Stil entfernt wird.

- [Anleitung zur Gestaltung nützlicher und benutzbarer Fokus-Indikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)
- WCAG 2.1: [Verständnis des Erfolgskriteriums 2.4.7: Sichtbarer Fokus](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von Outline zur Festlegung eines Fokus-Stils

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
