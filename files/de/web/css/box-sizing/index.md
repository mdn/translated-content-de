---
title: box-sizing
slug: Web/CSS/box-sizing
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`box-sizing`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie die Gesamtbreite und -höhe eines Elements berechnet wird.

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

Standardmäßig im [CSS Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) wird die `width` und `height`, die Sie einem Element zuweisen, nur auf das Inhaltselement angewendet. Wenn das Element einen Rahmen oder eine Auffüllung (Padding) hat, wird dies zur `width` und `height` hinzugefügt, um die Größe des auf dem Bildschirm gerenderten Rahmens zu erhalten. Das bedeutet, dass Sie beim Festlegen von `width` und `height` den Wert anpassen müssen, um eventuelle hinzukommende Ränder oder Auffüllungen zu berücksichtigen. Wenn Sie beispielsweise vier Rahmen mit `width: 25%;` haben, passen diese nicht standardmäßig auf eine Zeile innerhalb der Grenzen des übergeordneten Containers, wenn einer davon eine linke oder rechte Auffüllung oder einen linken oder rechten Rand hat.

Die `box-sizing`-Eigenschaft kann verwendet werden, um dieses Verhalten anzupassen:

- `content-box` gibt Ihnen das standardmäßige CSS Box-Sizing-Verhalten. Wenn Sie die Breite eines Elements auf 100 Pixel setzen, wird die Inhaltsbox des Elements 100 Pixel breit sein, und die Breite eines Rahmens oder einer Auffüllung wird zur endgültigen Breite hinzugefügt, wodurch das Element breiter als 100px wird.
- `border-box` weist den Browser an, jeden Rahmen und jede Auffüllung in die von Ihnen angegebenen Werte für die Breite und Höhe eines Elements einzubeziehen. Wenn Sie die Breite eines Elements auf 100 Pixel setzen, werden diese 100 Pixel jeden hinzugefügten Rahmen oder jede Auffüllung umfassen, und die Inhaltsbox schrumpft, um diese zusätzliche Breite aufzunehmen. Dies macht es in der Regel viel einfacher, Elemente zu dimensionieren.

  `box-sizing: border-box` ist die Standardformatierung, die Browser für die {{htmlelement("table")}}, {{htmlelement("select")}} und {{htmlelement("button")}} Elemente verwenden, und für {{htmlelement("input")}} Elemente, deren Typ `{{htmlelement("input/radio", "radio")}}`, `{{htmlelement("input/checkbox", "checkbox")}}`, `{{htmlelement("input/reset", "reset")}}`, `{{htmlelement("input/button", "button")}}`, `{{htmlelement("input/submit", "submit")}}`, `{{htmlelement("input/color", "color")}}` oder `{{htmlelement("input/search", "search")}}` ist.

> [!NOTE]
> Es ist oft nützlich, `box-sizing` auf `border-box` zu setzen, um Elemente zu layouten. Dies macht den Umgang mit den Größen von Elementen wesentlich einfacher und beseitigt im Allgemeinen eine Reihe von Fallstricken, auf die Sie beim Layouten Ihres Inhalts stoßen können. Andererseits ermöglicht die Verwendung von `box-sizing: content-box` bei Verwendung von `position: relative` oder `position: absolute`, dass die Positionierungswerte relativ zum Inhalt und unabhängig von Änderungen der Rahmen- und Auffüllungsgrößen sind, was manchmal wünschenswert ist.

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

Die `box-sizing` Eigenschaft wird als einzelnes Schlüsselwort angegeben, das aus der unten stehenden Liste von Werten ausgewählt wird.

### Werte

- `content-box`

  - : Dies ist der initiale und standardmäßige Wert, wie er vom CSS-Standard angegeben wird. Die {{Cssxref("width")}} und {{Cssxref("height")}} Eigenschaften beinhalten den Inhalt, jedoch nicht die Auffüllung, den Rahmen oder den Rand. Zum Beispiel rendert `.box {width: 350px; border: 10px solid black;}` einen Rahmen, der 370px breit ist.

    Hier werden die Dimensionen des Elements wie folgt berechnet: _width = Breite des Inhalts_, und _height = Höhe des Inhalts_. (Rahmen und Auffüllung sind nicht in der Berechnung enthalten.)

- `border-box`

  - : Die {{Cssxref("width")}} und {{Cssxref("height")}} Eigenschaften beinhalten den Inhalt, die Auffüllung und den Rahmen, jedoch nicht den Rand. Beachten Sie, dass Auffüllung und Rahmen innerhalb des Rahmens liegen. Zum Beispiel rendert `.box {width: 350px; border: 10px solid black;}` einen Rahmen, der 350px breit ist, mit einem Inhaltsbereich von 330px Breite. Die Inhaltsbox kann nicht negativ sein und wird auf 0 gerundet, wodurch es unmöglich ist, mit `border-box` das Element verschwinden zu lassen.

    Hier werden die Dimensionen des Elements wie folgt berechnet: _width = Rahmen + Auffüllung + Breite des Inhalts_, und _height = Rahmen + Auffüllung + Höhe des Inhalts_.

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

- [CSS Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
