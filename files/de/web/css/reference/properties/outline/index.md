---
title: "`outline` CSS-Eigenschaft"
short-title: outline
slug: Web/CSS/Reference/Properties/outline
l10n:
  sourceCommit: e9c03ba87f9ff4123150d8f7dc457bd546bdab83
---

Die **`outline`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt die meisten der Outline-Eigenschaften in einer einzigen Deklaration fest.

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

Die `outline`-Eigenschaft kann mit einem, zwei oder drei der unten aufgeführten Werte angegeben werden. Die Reihenfolge der Werte spielt keine Rolle. Wie bei allen Kurzschreibweisen werden ausgelassene Teilwerte auf ihren [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) gesetzt.

> [!NOTE]
> Die Umrandung wird für viele Elemente unsichtbar sein, wenn ihr Stil nicht definiert ist, da der Standardstil `none` ist. Eine bemerkenswerte Ausnahme sind `input`-Elemente, die von Browsern eine Standardstil erhalten.

### Werte

- `<'outline-width'>`
  - : Ein {{cssxref("line-width")}}-Wert, der die Dicke der Umrandung festlegt. Wird auf `medium` gesetzt, falls nicht vorhanden. Siehe {{cssxref("outline-width")}}.
- `<'outline-style'>`
  - : Legt den Stil der Umrandung fest. Wird auf `none` gesetzt, falls nicht vorhanden. Siehe {{cssxref("outline-style")}}.
- `<'outline-color'>`
  - : Legt die Farbe der Umrandung fest. Standardmäßig `invert` für unterstützende Browser, `currentColor` für andere. Siehe {{cssxref("outline-color")}}.

## Beschreibung

Ein Outline ist eine Linie außerhalb des [Rahmens](/de/docs/Web/CSS/Reference/Properties/border) eines Elements. Im Gegensatz zu anderen Bereichen der Box nehmen Outlines keinen Platz ein, sodass sie das Layout des Dokuments in keiner Weise beeinflussen.

Es gibt einige Eigenschaften, die das Erscheinungsbild einer Umrandung beeinflussen. Es ist möglich, den Stil, die Farbe und die Breite mithilfe der `outline`-Eigenschaft zu ändern, den Abstand vom Rahmen mithilfe der {{cssxref("outline-offset")}}-Eigenschaft und Eckwinkel mithilfe der {{cssxref("border-radius")}}-Eigenschaft.

Eine Umrandung muss nicht rechteckig sein: Bei mehrzeiligem Text wird von einigen Browsern für jede Zeilenbox eine Umrandung gezeichnet, während andere den gesamten Text mit einer einzigen Umrandung umschließen.

## Barrierefreiheit

Das Zuweisen eines Werts von `0` oder `none` an `outline` entfernt den Standardfokusstil des Browsers. Wenn mit einem Element interagiert werden kann, muss es einen sichtbaren Fokusindikator haben. Sorgen Sie für eine offensichtliche Fokusgestaltung, wenn der Standardfokusstil entfernt wird.

- [Anleitung zur Gestaltung nützlicher und benutzbarer Fokusindikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)
- WCAG 2.1: [Erklärung des Erfolgskriteriums 2.4.7: Fokus sichtbar](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwenden von outline, um einen Fokusstil zu setzen

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
