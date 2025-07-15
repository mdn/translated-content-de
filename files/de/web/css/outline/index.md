---
title: outline
slug: Web/CSS/outline
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`outline`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt die meisten Outline-Eigenschaften in einer einzigen Deklaration fest.

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

## Bestandteile der Eigenschaft

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

Die `outline`-Eigenschaft kann mit einem, zwei oder drei der unten aufgeführten Werte angegeben werden. Die Reihenfolge der Werte spielt dabei keine Rolle. Wie bei allen Kurzform-Eigenschaften werden alle ausgelassenen Teilwerte auf ihren [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) gesetzt.

> [!NOTE]
> Die Umrandung wird bei vielen Elementen unsichtbar sein, wenn ihr Stil nicht definiert ist. Dies liegt daran, dass der Stil standardmäßig `none` ist. Eine bemerkenswerte Ausnahme sind `input`-Elemente, denen von Browsern standardmäßig ein Stil zugewiesen wird.

### Werte

- `<'outline-width'>`
  - : Legt die Dicke der Umrandung fest. Wenn nicht vorhanden, ist der Standardwert `medium`. Siehe {{cssxref("outline-width")}}.
- `<'outline-style'>`
  - : Bestimmt den Stil der Umrandung. Wenn nicht vorhanden, ist der Standardwert `none`. Siehe {{cssxref("outline-style")}}.
- `<'outline-color'>`
  - : Legt die Farbe der Umrandung fest. Standardmäßig `invert` für unterstützende Browser, `currentcolor` für die anderen. Siehe {{cssxref("outline-color")}}.

## Beschreibung

Die Umrandung ist eine Linie außerhalb des [Randes](/de/docs/Web/CSS/border) des Elements. Im Gegensatz zu anderen Bereichen des Kastens nimmt die Umrandung keinen Platz ein, sodass sie das Layout des Dokuments in keiner Weise beeinflusst.

Es gibt einige Eigenschaften, die das Aussehen einer Umrandung beeinflussen. Es ist möglich, den Stil, die Farbe und die Breite mit der `outline`-Eigenschaft zu ändern, den Abstand vom Rand mit der {{cssxref("outline-offset")}}-Eigenschaft und die Eckwinkel mit der {{cssxref("border-radius")}}-Eigenschaft.

Eine Umrandung muss nicht rechteckig sein: Bei mehrzeiligem Text zeichnen einige Browser eine Umrandung um jede Zeilenbox separat, während andere den gesamten Text mit einer einzigen Umrandung umschließen.

## Barrierefreiheit

Das Zuweisen von `outline` mit einem Wert von `0` oder `none` entfernt den standardmäßigen Fokus-Stil des Browsers. Wenn ein Element interaktiv ist, muss es einen sichtbaren Fokusindikator haben. Stellen Sie einen offensichtlichen Fokus-Stil bereit, wenn der Standardfokus-Stil entfernt wird.

- [Wie man nützliche und benutzerfreundliche Fokus-Indikatoren entwirft](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)
- WCAG 2.1: [Verständnis des Erfolgs-Kriteriums 2.4.7: Sichtbarer Fokus](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

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
