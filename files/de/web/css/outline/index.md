---
title: Umriss
slug: Web/CSS/outline
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`outline`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) setzt die meisten Umriss-Eigenschaften in einer einzigen Deklaration.

{{EmbedInteractiveExample("pages/css/outline.html")}}

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

Die `outline`-Eigenschaft kann mit einem, zwei oder drei der unten aufgeführten Werte angegeben werden. Die Reihenfolge der Werte spielt keine Rolle. Wie bei allen Kurzschreibweise-Eigenschaften werden alle ausgelassenen Teilwerte auf ihren [Initialwert](/de/docs/Web/CSS/initial_value) gesetzt.

> [!NOTE]
> Der Umriss wird für viele Elemente unsichtbar sein, wenn der Stil nicht definiert ist. Dies liegt daran, dass der Stil standardmäßig auf `none` gesetzt ist. Eine bemerkenswerte Ausnahme sind `input`-Elemente, denen von den Browsern eine Standardformatierung zugewiesen wird.

### Werte

- `<'outline-width'>`
  - : Legt die Dicke des Umrisses fest. Standardwert ist `medium`, wenn nicht angegeben. Siehe {{cssxref("outline-width")}}.
- `<'outline-style'>`
  - : Legt den Stil des Umrisses fest. Standardwert ist `none`, wenn nicht angegeben. Siehe {{cssxref("outline-style")}}.
- `<'outline-color'>`
  - : Legt die Farbe des Umrisses fest. Standardwert ist `invert` für unterstützende Browser, `currentcolor` für andere. Siehe {{cssxref("outline-color")}}.

## Beschreibung

Der Umriss ist eine Linie außerhalb des [Rahmens](/de/docs/Web/CSS/border) eines Elements. Im Gegensatz zu anderen Bereichen des Box-Modells nehmen Umrisse keinen Platz ein und beeinflussen daher das Layout des Dokuments in keiner Weise.

Es gibt einige Eigenschaften, die das Erscheinungsbild eines Umrisses beeinflussen. Es ist möglich, den Stil, die Farbe und die Breite mit der `outline`-Eigenschaft zu ändern, den Abstand zum Rahmen mit der {{cssxref("outline-offset")}}-Eigenschaft und die Eckwinkel mit der {{cssxref("border-radius")}}-Eigenschaft.

Ein Umriss muss nicht rechteckig sein: Bei mehrzeiligem Text ziehen einige Browser einen Umriss für jede Textzeile separat, während andere den gesamten Text mit einem einzigen Umriss umschließen.

## Barrierefreiheit

Wenn Sie `outline` den Wert `0` oder `none` zuweisen, wird der standardmäßige Fokus-Stil des Browsers entfernt. Wenn ein Element interaktiv ist, muss es einen sichtbaren Fokus-Indikator haben. Stellen Sie einen klaren Fokus-Stil bereit, wenn der Standard-Fokus-Stil entfernt wird.

- [Wie man nützliche und benutzbare Fokus-Indikatoren gestaltet](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)
- WCAG 2.1: [Verständnis des Erfolgskriteriums 2.4.7: Fokus sichtbar](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

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
