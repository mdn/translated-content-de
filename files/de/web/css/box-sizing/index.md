---
title: box-sizing
slug: Web/CSS/box-sizing
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`box-sizing`**-Eigenschaft in [CSS](/de/docs/Web/CSS) legt fest, wie die Gesamtbreite und -höhe eines Elements berechnet wird.

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
  background-color: rgba(81, 81, 81, 0.6);
}

#example-element > p {
  margin: 0;
}
```

Standardmäßig im [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) wird die von Ihnen zugewiesene `width` und `height` nur auf die Inhaltsbox eines Elements angewendet. Wenn das Element einen Rand oder eine Polsterung hat, wird diese zur `width` und `height` hinzugefügt, um die Größe der Box zu bestimmen, die auf dem Bildschirm dargestellt wird. Das bedeutet, dass Sie beim Einstellen von `width` und `height` den Wert anpassen müssen, um einen eventuell hinzugefügten Rand oder eine Polsterung zu berücksichtigen. Wenn Sie beispielsweise vier Boxen mit `width: 25%;` haben und eine davon links oder rechts Padding oder einen Rand hat, passen diese standardmäßig nicht in eine Zeile innerhalb der Begrenzungen des übergeordneten Containers.

Die `box-sizing`-Eigenschaft kann verwendet werden, um dieses Verhalten anzupassen:

- `content-box` bietet Ihnen das Standardverhalten der CSS-Box-Berechnung. Wenn Sie die Breite eines Elements auf 100 Pixel setzen, dann wird die Inhaltsbox des Elements 100 Pixel breit sein und die Breite eines Randes oder einer Polsterung wird zur endgültigen gerenderten Breite hinzugefügt, wodurch das Element breiter als 100px wird.
- `border-box` weist den Browser an, jeden Rand und Padding in den von Ihnen angegebenen Werten für die Breite und Höhe eines Elements zu berücksichtigen. Wenn Sie die Breite eines Elements auf 100 Pixel setzen, umfassen diese 100 Pixel jeglichen hinzugefügten Rand oder Padding, und die Inhaltsbox wird verkleinert, um diese zusätzliche Breite aufzunehmen. Dies erleichtert in der Regel das Größenspezifizieren von Elementen erheblich.

  `box-sizing: border-box` ist das Standardstyling der Browser für die {{htmlelement("table")}}, {{htmlelement("select")}}, und {{htmlelement("button")}}-Elemente sowie für {{htmlelement("input")}}-Elemente, deren Typ `{{htmlelement("input/radio", "radio")}}`, `{{htmlelement("input/checkbox", "checkbox")}}`, `{{htmlelement("input/reset", "reset")}}`, `{{htmlelement("input/button", "button")}}`, `{{htmlelement("input/submit", "submit")}}`, `{{htmlelement("input/color", "color")}}`, oder `{{htmlelement("input/search", "search")}}` ist.

> [!NOTE]
> Es ist oft nützlich, `box-sizing` auf `border-box` zu setzen, um Elemente zu layouten. Dies erleichtert den Umgang mit den Größen von Elementen erheblich und beseitigt im Allgemeinen eine Reihe von Fallstricken, auf die Sie beim Layouten Ihres Inhalts stoßen können. Andererseits ermöglicht die Verwendung von `box-sizing: content-box` bei der Verwendung von `position: relative` oder `position: absolute`, dass die Positionswerte relativ zum Inhalt und unabhängig von Änderungen an Rand- und Polsterungsgrößen sind, was manchmal wünschenswert ist.

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

Die `box-sizing`-Eigenschaft wird durch ein einzelnes Schlüsselwort aus der unten stehenden Liste von Werten spezifiziert.

### Werte

- `content-box`

  - : Dies ist der initiale und Standardwert, wie er vom CSS-Standard vorgegeben ist. Die {{Cssxref("width")}}- und {{Cssxref("height")}}-Eigenschaften umfassen den Inhalt, schließen jedoch nicht Padding, Rand oder Margin ein. Zum Beispiel rendert `.box {width: 350px; border: 10px solid black;}` eine Box, die 370px breit ist.

    Hier werden die Dimensionen des Elements berechnet als: _width = Breite des Inhalts_, und _height = Höhe des Inhalts_. (Ränder und Padding sind nicht in der Berechnung enthalten.)

- `border-box`

  - : Die {{Cssxref("width")}}- und {{Cssxref("height")}}-Eigenschaften schließen den Inhalt, Padding und Rand ein, schließen jedoch nicht den Margin ein. Beachten Sie, dass Padding und Rand innerhalb der Box sein werden. Zum Beispiel rendert `.box {width: 350px; border: 10px solid black;}` eine Box, die 350px breit ist, wobei der Bereich für den Inhalt 330px breit ist. Die Inhaltsbox kann nicht negativ werden und wird auf 0 abgerundet, wodurch es unmöglich ist, `border-box` zu verwenden, um das Element verschwinden zu lassen.

    Hier werden die Dimensionen des Elements berechnet als: _width = Rand + Padding + Breite des Inhalts_, und _height = Rand + Padding + Höhe des Inhalts_.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Boxgrößen mit content-box und border-box

Dieses Beispiel zeigt, wie verschiedene `box-sizing`-Werte die gerenderte Größe von zwei ansonsten identischen Elementen verändern.

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
