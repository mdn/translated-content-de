---
title: outline
slug: Web/CSS/outline
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`outline`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) setzt die meisten Outline-Eigenschaften in einer einzigen Deklaration.

{{EmbedInteractiveExample("pages/css/outline.html")}}

## Bestehende Eigenschaften

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

Die `outline`-Eigenschaft kann mit einem, zwei oder drei der unten aufgeführten Werte angegeben werden. Die Reihenfolge der Werte spielt keine Rolle. Wie bei allen Kurzform-Eigenschaften werden alle ausgelassenen Teilwerte auf ihren [Anfangswert](/de/docs/Web/CSS/CSS_cascade/initial_value) gesetzt.

> [!NOTE]
> Der Umriss wird für viele Elemente unsichtbar sein, wenn sein Stil nicht definiert ist. Das liegt daran, dass der Stil standardmäßig auf `none` gesetzt ist. Eine bemerkenswerte Ausnahme sind `input` Elemente, die von Browsern mit einem Standardstil versehen werden.

### Werte

- `<'outline-width'>`
  - : Legt die Dicke des Umrisses fest. Standardmäßig `medium`, wenn nicht vorhanden. Siehe {{cssxref("outline-width")}}.
- `<'outline-style'>`
  - : Legt den Stil des Umrisses fest. Standardmäßig `none`, wenn nicht vorhanden. Siehe {{cssxref("outline-style")}}.
- `<'outline-color'>`
  - : Legt die Farbe des Umrisses fest. Standardmäßig `invert` für unterstützende Browser, `currentcolor` für die anderen. Siehe {{cssxref("outline-color")}}.

## Beschreibung

Der Umriss ist eine Linie außerhalb des [Rahmens](/de/docs/Web/CSS/border) eines Elements. Anders als andere Bereiche der Box beanspruchen Umrisse keinen Platz, sie beeinflussen das Layout des Dokuments also in keiner Weise.

Es gibt einige Eigenschaften, die das Erscheinungsbild eines Umrisses beeinflussen. Es ist möglich, den Stil, die Farbe und die Breite mit der `outline`-Eigenschaft zu ändern, den Abstand vom Rahmen mit der {{cssxref("outline-offset")}}-Eigenschaft und die Eckenwinkel mit der {{cssxref("border-radius")}}-Eigenschaft.

Ein Umriss muss nicht rechteckig sein: Bei mehrzeiligem Text zeichnen einige Browser einen Umriss für jede Zeilenbox separat, während andere den gesamten Text mit einem einzigen Umriss umgeben.

## Barrierefreiheit

Das Zuweisen eines `outline`-Wertes von `0` oder `none` entfernt den Standardfokusstil des Browsers. Wenn ein Element interaktiv ist, muss es einen sichtbaren Fokusindikator haben. Stellen Sie einen offensichtlichen Fokusstil bereit, wenn der Standardfokusstil entfernt wird.

- [Nützliche und benutzbare Fokus-Indikatoren entwerfen](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)
- WCAG 2.1: [Verständnis des Erfolgskriteriums 2.4.7: Fokus sichtbar](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwenden von Umrissen, um einen Fokusstil festzulegen

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
