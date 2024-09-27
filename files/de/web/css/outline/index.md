---
title: outline
slug: Web/CSS/outline
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`outline`** [CSS](/de/docs/Web/CSS) [Shorthand-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) setzt die meisten Outline-Eigenschaften in einer einzigen Deklaration.

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

Die `outline`-Eigenschaft kann mit einem, zwei oder drei der unten aufgeführten Werte angegeben werden. Die Reihenfolge der Werte spielt keine Rolle. Wie bei allen Shorthand-Eigenschaften werden alle ausgelassenen Unterwerte auf ihren [Anfangswert](/de/docs/Web/CSS/initial_value) gesetzt.

> [!NOTE]
> Die Umrandung wird bei vielen Elementen unsichtbar sein, wenn ihr Stil nicht definiert ist. Dies liegt daran, dass der Stil standardmäßig auf `none` gesetzt ist. Eine bemerkenswerte Ausnahme sind `input`-Elemente, die von Browsern mit einer Standardformatierung versehen werden.

### Werte

- `<'outline-width'>`
  - : Legt die Dicke der Umrandung fest. Standardwert ist `medium`, wenn nicht angegeben. Siehe {{cssxref("outline-width")}}.
- `<'outline-style'>`
  - : Legt den Stil der Umrandung fest. Standardwert ist `none`, wenn nicht angegeben. Siehe {{cssxref("outline-style")}}.
- `<'outline-color'>`
  - : Legt die Farbe der Umrandung fest. Standardwert ist `invert` für unterstützende Browser, `currentcolor` für andere. Siehe {{cssxref("outline-color")}}.

## Beschreibung

Die Umrandung ist eine Linie außerhalb der [border](/de/docs/Web/CSS/border) des Elements. Anders als andere Bereiche des Rahmens beanspruchen Umrandungen keinen Platz, sodass sie das Layout des Dokuments in keiner Weise beeinflussen.

Es gibt einige Eigenschaften, die das Aussehen einer Umrandung beeinflussen. Es ist möglich, den Stil, die Farbe und die Breite mit der `outline`-Eigenschaft zu ändern, den Abstand vom Rand mit der {{cssxref("outline-offset")}}-Eigenschaft und die Eckenwinkel mit der {{cssxref("border-radius")}}-Eigenschaft.

Eine Umrandung muss nicht rechteckig sein: Bei mehrzeiligem Text zeichnen einige Browser eine Umrandung für jede Zeilenbox separat, während andere den gesamten Text mit einer einzigen Umrandung umschließen.

## Barrierefreiheit

Das Zuweisen eines Werts von `0` oder `none` für `outline` entfernt den Standardstil des Browserfokus. Wenn ein Element interagierbar ist, muss es über einen sichtbaren Fokusindikator verfügen. Stellen Sie einen deutlichen Fokusstil bereit, wenn der Standardfokusstil entfernt wird.

- [Wie man nützliche und benutzbare Fokusindikatoren gestaltet](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)
- WCAG 2.1: [Verständnis des Erfolgskriteriums 2.4.7: Fokus sichtbar](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

## Formale Definition

{{cssinfo}}

## Formaler Syntax

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
