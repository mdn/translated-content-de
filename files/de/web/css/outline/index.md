---
title: outline
slug: Web/CSS/outline
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Die **`outline`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) definiert die meisten Outline-Eigenschaften in einer einzigen Deklaration.

{{EmbedInteractiveExample("pages/css/outline.html")}}

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

Die Eigenschaft `outline` kann mit einem, zwei oder drei der unten aufgeführten Werte angegeben werden. Die Reihenfolge der Werte spielt keine Rolle. Wie bei allen Kurzform-Eigenschaften werden alle ausgelassenen Teilwerte auf ihren [Initialwert](/de/docs/Web/CSS/CSS_cascade/initial_value) gesetzt.

> [!NOTE]
> Die Outline wird für viele Elemente unsichtbar sein, wenn ihr Stil nicht definiert ist. Das liegt daran, dass der Standardstil `none` ist. Eine bemerkenswerte Ausnahme bilden `input`-Elemente, die von den Browsern mit einem Standardstil versehen werden.

### Werte

- `<'outline-width'>`
  - : Legt die Dicke der Outline fest. Standardwert ist `medium`, falls nicht angegeben. Siehe {{cssxref("outline-width")}}.
- `<'outline-style'>`
  - : Legt den Stil der Outline fest. Standardwert ist `none`, falls nicht angegeben. Siehe {{cssxref("outline-style")}}.
- `<'outline-color'>`
  - : Legt die Farbe der Outline fest. Standardwert ist `invert` bei unterstützenden Browsern, ansonsten `currentcolor`. Siehe {{cssxref("outline-color")}}.

## Beschreibung

Die Outline ist eine Linie außerhalb des [border](/de/docs/Web/CSS/border) eines Elements. Im Gegensatz zu anderen Bereichen der Box nimmt die Outline keinen Platz ein und beeinflusst somit das Layout des Dokuments in keiner Weise.

Es gibt einige Eigenschaften, die das Erscheinungsbild einer Outline beeinflussen. Der Stil, die Farbe und die Breite können mit der `outline`-Eigenschaft geändert werden, der Abstand vom Rand mit der {{cssxref("outline-offset")}}-Eigenschaft und die Eckenwinkel mit der {{cssxref("border-radius")}}-Eigenschaft.

Eine Outline muss nicht rechteckig sein: Bei mehrzeiligem Text zeichnen einige Browser für jede Zeilenbox separat eine Outline, während andere den gesamten Text mit einer einzigen Outline umrahmen.

## Barrierefreiheit

Das Zuweisen des Wertes `0` oder `none` zur Eigenschaft `outline` entfernt den Standard-Fokus-Stil des Browsers. Wenn ein Element interaktiv ist, muss es einen sichtbaren Fokus-Indikator haben. Sorgen Sie für deutliche Fokus-Stilierungen, falls der Standard-Fokus-Stil entfernt wird.

- [Anleitung zur Gestaltung nützlicher und benutzerfreundlicher Fokus-Indikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)
- WCAG 2.1: [Verständnis des Erfolgskriteriums 2.4.7: Fokus sichtbar](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von Outline, um einen Fokus-Stil zu setzen

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
