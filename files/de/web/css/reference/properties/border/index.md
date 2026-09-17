---
title: CSS-Eigenschaft `border`
short-title: border
slug: Web/CSS/Reference/Properties/border
l10n:
  sourceCommit: 3f221b9845703eb21db70cdc321f843d5c1c072b
---

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`border`** legt den Rahmen eines Elements fest. Sie setzt die Werte von {{Cssxref("border-width")}}, {{Cssxref("border-style")}} und {{Cssxref("border-color")}}.

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

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("border-width")}}
- {{cssxref("border-style")}}
- {{cssxref("border-color")}}

### Nur-zurücksetzende Untereigenschaften

Diese Eigenschaft setzt die folgenden CSS-Eigenschaften auf ihre Anfangswerte zurück:

- {{cssxref("border-image-outset")}}
- {{cssxref("border-image-repeat")}}
- {{cssxref("border-image-slice")}}
- {{cssxref("border-image-source")}}
- {{cssxref("border-image-width")}}

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

Die Kurzschreibweise `border` legt die Breite, den Stil und die Farbe aller vier Seiten des Rahmens eines Elements fest. Sie wird mit einem, zwei oder allen drei Werten der Komponenteneigenschaften in beliebiger Reihenfolge angegeben.

Alle ausgelassenen Teilwerte werden auf ihren [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) gesetzt. Damit ein Rahmen angezeigt wird, muss die Komponente `<line-style>` festgelegt sein, da der Stil standardmäßig `none` ist.

Wichtig ist, dass `border` nicht verwendet werden kann, um einen benutzerdefinierten Wert für {{cssxref("border-image")}} anzugeben, sondern diesen stattdessen auf seinen Anfangswert, also `none`, setzt.

Die Kurzschreibweise `border` ist besonders nützlich, wenn alle vier Rahmen gleich sein sollen. Um sie jedoch voneinander zu unterscheiden, können Sie die Langschreibweisen {{Cssxref("border-width")}}, {{Cssxref("border-style")}} und {{Cssxref("border-color")}} verwenden, die unterschiedliche Werte für jede Seite akzeptieren. Alternativ können Sie jeweils einen Rahmen mit den physischen (z. B. {{Cssxref("border-top")}}) und logischen (z. B. {{Cssxref("border-block-start")}}) Rahmeneigenschaften ansprechen.

### Rahmen im Vergleich zu Umrissen

Rahmen und [Umrisse](/de/docs/Web/CSS/Reference/Properties/outline) sind sehr ähnlich. Umrisse unterscheiden sich jedoch von Rahmen auf folgende Weise:

- Umrisse nehmen niemals Platz ein, da sie außerhalb des Inhalts eines Elements gezeichnet werden.
- Gemäß der Spezifikation müssen Umrisse nicht rechteckig sein, obwohl sie es gewöhnlich sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen eines rosafarbenen `outset`-Rahmens

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
