---
title: outline
slug: Web/CSS/Reference/Properties/outline
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

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

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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

Die `outline`-Eigenschaft kann mit einem, zwei oder drei der unten aufgeführten Werte angegeben werden. Die Reihenfolge der Werte spielt keine Rolle. Wie bei allen Kurzschreibweisen werden alle weggelassenen Teilwerte auf ihren [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) gesetzt.

> [!NOTE]
> Die Umrandung wird bei vielen Elementen unsichtbar sein, wenn ihr Stil nicht definiert ist. Dies liegt daran, dass der Stil standardmäßig auf `none` gesetzt ist. Eine bemerkenswerte Ausnahme sind `input`-Elemente, die von Browsern standardmäßig formatiert werden.

### Werte

- `<'outline-width'>`
  - : Legt die Dicke der Umrandung fest. Standardwert ist `medium`, wenn nicht angegeben. Siehe {{cssxref("outline-width")}}.
- `<'outline-style'>`
  - : Legt den Stil der Umrandung fest. Standardwert ist `none`, wenn nicht angegeben. Siehe {{cssxref("outline-style")}}.
- `<'outline-color'>`
  - : Legt die Farbe der Umrandung fest. Standardwert ist `invert` für Browser, die es unterstützen, `currentColor` für die anderen. Siehe {{cssxref("outline-color")}}.

## Beschreibung

Eine Umrandung ist eine Linie außerhalb des [Randes](/de/docs/Web/CSS/Reference/Properties/border) eines Elements. Im Gegensatz zu anderen Bereichen der Box nimmt die Umrandung keinen Platz ein und beeinflusst daher das Layout des Dokuments in keiner Weise.

Es gibt einige Eigenschaften, die das Aussehen einer Umrandung beeinflussen. Es ist möglich, den Stil, die Farbe und die Breite mit der `outline`-Eigenschaft zu ändern, den Abstand zum Rand mit der {{cssxref("outline-offset")}}-Eigenschaft und die Eckwinkel mit der {{cssxref("border-radius")}}-Eigenschaft.

Eine Umrandung muss nicht rechteckig sein: Bei mehrzeiligem Text zeichnen einige Browser eine Umrandung für jede Zeilenbox separat, während andere den gesamten Text mit einer einzigen Umrandung umgeben.

## Barrierefreiheit

Wenn `outline` ein Wert von `0` oder `none` zugewiesen wird, wird der Standard-Fokus-Stil des Browsers entfernt. Wenn ein Element interaktiv ist, muss es einen sichtbaren Fokus-Indikator haben. Sorgen Sie für einen eindeutigen Fokus-Stil, wenn der Standard-Fokus-Stil entfernt wird.

- [Anleitung zur Gestaltung hilfreicher und benutzbarer Fokus-Indikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)
- WCAG 2.1: [Verständnis des Erfolgskriteriums 2.4.7: Fokus sichtbar](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Fokus-Stil mit outline festlegen

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
