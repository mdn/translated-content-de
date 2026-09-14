---
title: CSS-Eigenschaft `border`
short-title: border
slug: Web/CSS/Reference/Properties/border
l10n:
  sourceCommit: 6354422058e438a2599e4eab71eaec8eb40850fa
---

Die [CSS](/de/docs/Web/CSS)-[Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)-Eigenschaft **`border`** legt den Rahmen eines Elements fest. Sie setzt die Werte von {{Cssxref("border-width")}}, {{Cssxref("border-style")}} und {{Cssxref("border-color")}}.

{{InteractiveExample("CSS Demo: border")}}

```css interactive-example-choice
border: solid;
```

```css interactive-example-choice
border: dashed red;
```

```css interactive-example-choice
border: 1rem solid;
```

```css interactive-example-choice
border: thick double #32a1ce;
```

```css interactive-example-choice
border: 4mm ridge rgb(211 220 50 / 0.6);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a border around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #eeeeee;
  color: darkmagenta;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("border-width")}}
- {{cssxref("border-style")}}
- {{cssxref("border-color")}}

## Syntax

```css
/* style */
border: solid;

/* width | style */
border: 2px dotted;

/* style | color */
border: outset #ff3333;

/* width | style | color */
border: medium dashed green;

/* Global values */
border: inherit;
border: initial;
border: revert;
border: revert-layer;
border: unset;
```

### Werte

Diese Eigenschaft wird als durch Leerzeichen getrennte Liste aus einem bis drei der folgenden Werte angegeben:

- `<line-width>`
  - : Legt die Dicke des Rahmens fest. Falls nicht angegeben, ist der Standardwert `medium`. Siehe {{Cssxref("border-width")}}.
- {{cssxref("&lt;line-style&gt;")}}
  - : Legt den Stil des Rahmens fest. Falls nicht angegeben, ist der Standardwert `none`. Siehe {{Cssxref("border-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : Legt die Farbe des Rahmens fest. Falls nicht angegeben, ist der Standardwert `currentColor`. Siehe {{Cssxref("border-color")}}.

## Beschreibung

Die Kurzform-Eigenschaft `border` legt die Breite, den Stil und die Farbe aller vier Seiten des Rahmens eines Elements fest. Sie wird mit einem, zwei oder allen drei Werten der Komponenten-Eigenschaften in beliebiger Reihenfolge angegeben.

Alle ausgelassenen Teilwerte werden auf ihren [Initialwert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) gesetzt. Damit ein Rahmen angezeigt wird, muss die Komponente `<line-style>` gesetzt werden, da der Standardwert für den Stil `none` ist.

Wichtig ist, dass `border` nicht verwendet werden kann, um einen benutzerdefinierten Wert für {{cssxref("border-image")}} anzugeben, sondern diesen stattdessen auf seinen Initialwert, also `none`, setzt.

Die Kurzform `border` ist besonders nützlich, wenn alle vier Rahmen gleich sein sollen. Um sie jedoch voneinander zu unterscheiden, können Sie die Langform-Eigenschaften {{Cssxref("border-width")}}, {{Cssxref("border-style")}} und {{Cssxref("border-color")}} verwenden, die für jede Seite unterschiedliche Werte akzeptieren. Alternativ können Sie jeweils einen einzelnen Rahmen mit den physischen (z. B. {{Cssxref("border-top")}}) und logischen (z. B. {{Cssxref("border-block-start")}}) Rahmen-Eigenschaften ansprechen.

### Rahmen im Vergleich zu outlines

Rahmen und [outlines](/de/docs/Web/CSS/Reference/Properties/outline) sind sehr ähnlich. outlines unterscheiden sich jedoch in folgender Hinsicht von Rahmen:

- outlines beanspruchen niemals Platz, da sie außerhalb des Inhalts eines Elements gezeichnet werden.
- Laut Spezifikation müssen outlines nicht rechteckig sein, obwohl sie es normalerweise sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen eines rosa `outset`-Rahmens

#### HTML

```html
<div>I have a border, an outline, and a box shadow! Amazing, isn't it?</div>
```

#### CSS

```css
div {
  border: 0.5rem outset pink;
  outline: 0.5rem solid khaki;
  box-shadow: 0 0 0 2rem skyblue;
  border-radius: 12px;
  font: bold 1rem sans-serif;
  margin: 2rem;
  padding: 1rem;
  outline-offset: 0.5rem;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_a_pink_outset_border')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("border-width")}}
- {{Cssxref("border-style")}}
- {{Cssxref("border-color")}}
- {{Cssxref("outline")}}
- [Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders)
- [CSS lernen: Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
