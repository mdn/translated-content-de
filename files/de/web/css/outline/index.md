---
title: outline
slug: Web/CSS/outline
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{CSSRef}}

Die **`outline`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt die meisten der Outline-Eigenschaften in einer einzigen Deklaration fest.

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
outline: 8px ridge rgba(170, 50, 220, 0.6);
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

## Ausführende Eigenschaften

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

Die `outline`-Eigenschaft kann mit einem, zwei oder drei der unten aufgeführten Werte angegeben werden. Die Reihenfolge der Werte spielt keine Rolle. Wie bei allen Kurzschreibweisen werden ausgelassene Unterwerte auf ihren [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) gesetzt.

> [!NOTE]
> Die Outline ist für viele Elemente unsichtbar, wenn ihr Stil nicht definiert ist. Dies liegt daran, dass der Stil standardmäßig `none` ist. Eine bemerkenswerte Ausnahme sind `input`-Elemente, denen von den Browsern ein Standardstil zugewiesen wird.

### Werte

- `<'outline-width'>`
  - : Legt die Dicke der Outline fest. Standardmäßig `medium`, wenn nicht angegeben. Siehe {{cssxref("outline-width")}}.
- `<'outline-style'>`
  - : Legt den Stil der Outline fest. Standardmäßig `none`, wenn nicht angegeben. Siehe {{cssxref("outline-style")}}.
- `<'outline-color'>`
  - : Legt die Farbe der Outline fest. Standardmäßig `invert` für unterstützende Browser, `currentcolor` für andere. Siehe {{cssxref("outline-color")}}.

## Beschreibung

Ein Outline ist eine Linie außerhalb des [Rahmens](/de/docs/Web/CSS/border) eines Elements. Im Gegensatz zu anderen Bereichen der Box nimmt eine Outline keinen Raum ein und beeinflusst daher das Layout des Dokuments in keiner Weise.

Es gibt einige Eigenschaften, die das Erscheinungsbild einer Outline beeinflussen. Es ist möglich, den Stil, die Farbe und die Breite mithilfe der `outline`-Eigenschaft zu ändern, den Abstand vom Rahmen mit der {{cssxref("outline-offset")}}-Eigenschaft und die Eckwinkel mit der {{cssxref("border-radius")}}-Eigenschaft.

Eine Outline muss nicht rechteckig sein: Bei mehrzeiligem Text zeichnen einige Browser eine Outline für jede Zeilenbox separat, während andere den gesamten Text mit einer einzigen Outline umschließen.

## Barrierefreiheit

Wenn `outline` auf einen Wert von `0` oder `none` gesetzt wird, wird der Standardfokusstil des Browsers entfernt. Wenn ein Element interaktiv ist, muss es einen sichtbaren Fokusanzeiger haben. Stellen Sie offensichtliche Fokusstile bereit, wenn der Standardfokusstil entfernt wird.

- [Anleitung zur Gestaltung nützlicher und benutzbarer Fokusanzeigen](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)
- WCAG 2.1: [Verständnis des Erfolgskriteriums 2.4.7: Fokus sichtbar](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von Outline, um einen Fokusstil festzulegen

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
