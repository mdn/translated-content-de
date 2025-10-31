---
title: box-sizing
slug: Web/CSS/Reference/Properties/box-sizing
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`box-sizing`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie die gesamte Breite und Höhe eines Elements berechnet wird.

{{InteractiveExample("CSS Demo: box-sizing")}}

```css interactive-example-choice
box-sizing: content-box;
width: 100%;
```

```css interactive-example-choice
box-sizing: content-box;
width: 100%;
border: solid #5b6dcd 10px;
padding: 5px;
```

```css interactive-example-choice
box-sizing: border-box;
width: 100%;
border: solid #5b6dcd 10px;
padding: 5px;
```

```html interactive-example
<section id="default-example">
  <div id="example-element-parent">
    <p>Parent container</p>
    <div class="transition-all" id="example-element">
      <p>Child container</p>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element-parent {
  width: 220px;
  height: 200px;
  border: solid 10px #ffc129;
  margin: 0.8em;
}

#example-element {
  height: 60px;
  margin: 2em auto;
  background-color: rgb(81 81 81 / 0.6);
}

#example-element > p {
  margin: 0;
}
```

Im [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) wird die von Ihnen einem Element zugewiesene `width` und `height` standardmäßig nur auf die Inhaltsbox des Elements angewendet. Wenn das Element einen Rand oder eine Auffüllung hat, wird dies der `width` und `height` hinzugefügt, um die Größe der Box zu erreichen, die auf dem Bildschirm dargestellt wird. Das bedeutet, dass Sie beim Setzen von `width` und `height` den Wert anpassen müssen, um den möglicherweise hinzugefügten Rand oder die Auffüllung zu berücksichtigen. Wenn Sie beispielsweise vier Boxen mit `width: 25%;` haben, wird eine Box mit linker/rechter Auffüllung oder einem linken/rechten Rand standardmäßig nicht innerhalb der Begrenzungen des Elternelements in einer Zeile passen.

Die Eigenschaft `box-sizing` kann verwendet werden, um dieses Verhalten anzupassen:

- `content-box` bietet Ihnen das Standardverhalten der CSS-Box-Größenberechnung. Wenn Sie die Breite eines Elements auf 100 Pixel setzen, ist die Inhaltsbox des Elements 100 Pixel breit und die Breite eines Randes oder einer Auffüllung wird zur endgültigen gerenderten Breite hinzugefügt, wodurch das Element breiter als 100px wird.
- `border-box` sagt dem Browser, dass er jeglichen Rand und Auffüllung in den Werten berücksichtigen soll, die Sie für die Breite und Höhe eines Elements angeben. Wenn Sie die Breite eines Elements auf 100 Pixel setzen, beinhalten diese 100 Pixel jeglichen Rand oder Auffüllung, die Sie hinzugefügt haben, und die Inhaltsbox schrumpft, um diese zusätzliche Breite aufzunehmen. Dies macht es in der Regel viel einfacher, Elemente zu dimensionieren.

  `box-sizing: border-box` ist die Standardstilierung, die Browser für die {{htmlelement("table")}}, {{htmlelement("select")}}, und {{htmlelement("button")}} Elemente verwenden, sowie für {{htmlelement("input")}} Elemente, deren Typ `{{htmlelement("input/radio", "radio")}}`, `{{htmlelement("input/checkbox", "checkbox")}}`, `{{htmlelement("input/reset", "reset")}}`, `{{htmlelement("input/button", "button")}}`, `{{htmlelement("input/submit", "submit")}}`, `{{htmlelement("input/color", "color")}}` oder `{{htmlelement("input/search", "search")}}` ist.

> [!NOTE]
> Es ist oft nützlich, `box-sizing` auf `border-box` zu setzen, um Elemente anzuordnen. Dies macht den Umgang mit den Größen von Elementen viel einfacher und beseitigt im Allgemeinen eine Reihe von Fallstricken, auf die Sie beim Layout Ihrer Inhalte stoßen können. Andererseits, wenn Sie `position: relative` oder `position: absolute` verwenden, ermöglicht die Verwendung von `box-sizing: content-box` dass die Positionierungswerte relativ zum Inhalt sind und unabhängig von Änderungen der Rand- und Auffüllungsgrößen, was manchmal wünschenswert ist.

## Syntax

```css
box-sizing: border-box;
box-sizing: content-box;

/* Global values */
box-sizing: inherit;
box-sizing: initial;
box-sizing: revert;
box-sizing: revert-layer;
box-sizing: unset;
```

Die `box-sizing` Eigenschaft wird als ein einzelnes Schlüsselwort angegeben, das aus der unten aufgeführten Liste von Werten ausgewählt wird.

### Werte

- `content-box`
  - : Dies ist der initiale und Standardwert gemäß den CSS-Standards. Die {{Cssxref("width")}} und {{Cssxref("height")}} Eigenschaften umfassen den Inhalt, jedoch nicht die Auffüllung, den Rand oder den Abstand. Zum Beispiel, `.box {width: 350px; border: 10px solid black;}` rendert eine Box, die 370px breit ist.

    Hier werden die Dimensionen des Elements wie folgt berechnet: _width = Breite des Inhalts_, und _height = Höhe des Inhalts_. (Ränder und Auffüllungen sind in der Berechnung nicht enthalten.)

- `border-box`
  - : Die {{Cssxref("width")}} und {{Cssxref("height")}} Eigenschaften umfassen den Inhalt, die Auffüllung und den Rand, jedoch nicht den Abstand. Beachten Sie, dass die Auffüllung und der Rand innerhalb der Box liegen. Zum Beispiel, `.box {width: 350px; border: 10px solid black;}` rendert eine Box, die 350px breit ist, wobei der Bereich für den Inhalt 330px breit ist. Die Inhaltsbox kann nicht negativ sein und wird auf 0 abgerundet, was es unmöglich macht, `border-box` zu verwenden, um das Element verschwinden zu lassen.

    Hier werden die Dimensionen des Elements wie folgt berechnet: _width = border + padding + Breite des Inhalts_, und _height = border + padding + Höhe des Inhalts_.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Boxgrößen mit content-box und border-box

Dieses Beispiel zeigt, wie unterschiedliche `box-sizing` Werte die gerenderte Größe von zwei ansonsten identischen Elementen verändern.

#### HTML

```html
<div class="content-box">Content box</div>
<br />
<div class="border-box">Border box</div>
```

#### CSS

```css
div {
  width: 160px;
  height: 80px;
  padding: 20px;
  border: 8px solid red;
  background: yellow;
}

.content-box {
  box-sizing: content-box;
  /* Total width: 160px + (2 * 20px) + (2 * 8px) = 216px
     Total height: 80px + (2 * 20px) + (2 * 8px) = 136px
     Content box width: 160px
     Content box height: 80px */
}

.border-box {
  box-sizing: border-box;
  /* Total width: 160px
     Total height: 80px
     Content box width: 160px - (2 * 20px) - (2 * 8px) = 104px
     Content box height: 80px - (2 * 20px) - (2 * 8px) = 24px */
}
```

#### Ergebnis

{{EmbedLiveSample('Box_sizes_with_content-box_and_border-box', 'auto', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
