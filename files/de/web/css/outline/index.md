---
title: outline
slug: Web/CSS/outline
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`outline`** [CSS](/de/docs/Web/CSS) [Shorthand-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) setzt die meisten der Outline-Eigenschaften in einer einzigen Deklaration.

{{EmbedInteractiveExample("pages/css/outline.html")}}

## Bestandteile der Eigenschaften

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

Die `outline`-Eigenschaft kann mit einem, zwei oder drei der unten aufgeführten Werte angegeben werden. Die Reihenfolge der Werte spielt keine Rolle. Wie bei allen Shorthand-Eigenschaften werden alle ausgelassenen Unterwerte auf ihren [Anfangswert](/de/docs/Web/CSS/initial_value) gesetzt.

> [!NOTE]
> Die Outline wird für viele Elemente unsichtbar sein, wenn ihr Stil nicht definiert ist. Dies liegt daran, dass der Stil standardmäßig auf `none` gesetzt ist. Eine bemerkenswerte Ausnahme sind `<input>`-Elemente, die von den Browsern eine Standardstil erhalten.

### Werte

- `<'outline-width'>`
  - : Legt die Dicke der Outline fest. Standardwert ist `medium`, falls nicht angegeben. Siehe {{cssxref("outline-width")}}.
- `<'outline-style'>`
  - : Legt den Stil der Outline fest. Standardwert ist `none`, falls nicht angegeben. Siehe {{cssxref("outline-style")}}.
- `<'outline-color'>`
  - : Legt die Farbe der Outline fest. Standardwert ist `invert` für unterstützende Browser, `currentcolor` für andere. Siehe {{cssxref("outline-color")}}.

## Beschreibung

Eine Outline ist eine Linie außerhalb des [Rahmens](/de/docs/Web/CSS/border) eines Elements. Anders als andere Bereiche der Box beanspruchen Outlines keinen Platz, sodass sie das Layout des Dokuments in keiner Weise beeinflussen.

Es gibt einige Eigenschaften, die das Erscheinungsbild einer Outline beeinflussen. Es ist möglich, den Stil, die Farbe und die Breite mit der `outline`-Eigenschaft, den Abstand vom Rahmen mit der {{cssxref("outline-offset")}}-Eigenschaft und die Eckenwinkel mit der {{cssxref("border-radius")}}-Eigenschaft zu ändern.

Eine Outline muss nicht rechteckig sein: Beim Umgang mit mehrzeiligem Text zeichnen einige Browser eine Outline für jede Zeilenbox separat, während andere den gesamten Text mit einer einzigen Outline umrahmen.

## Barrierefreiheit

Das Zuweisen eines Wertes von `0` oder `none` zur `outline`-Eigenschaft entfernt den Standardfokus-Stil des Browsers. Wenn ein Element interaktiv ist, muss es einen sichtbaren Fokusindikator haben. Sorgen Sie für offensichtliches Fokus-Styling, wenn der Standardfokus-Stil entfernt wird.

- [Anleitung zur Gestaltung nützlicher und benutzbarer Fokus-Indikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)
- WCAG 2.1: [Verständnis des Erfolgskriteriums 2.4.7: Fokus sichtbar](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von Outline zur Einstellung eines Fokus-Stils

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
