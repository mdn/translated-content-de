---
title: box-sizing
slug: Web/CSS/box-sizing
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

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

Standardmäßig im [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) wird die `width` und `height`, die Sie einem Element zuweisen, nur auf das Inhaltsfeld des Elements angewendet. Wenn das Element einen Rahmen oder Abstand enthält, wird dieser zur `width` und `height` hinzugefügt, um die Größe des auf dem Bildschirm dargestellten Kastens zu ermitteln. Dies bedeutet, dass Sie den Wert anpassen müssen, den Sie setzen, um mögliche Ränder oder Abstände zu berücksichtigen. Zum Beispiel, wenn Sie vier Kästen mit `width: 25%;` haben, passen diese standardmäßig nicht in eine Zeile innerhalb der Bedingungen des Elternelements, falls irgendeiner linken oder rechten Abstand oder einen linken oder rechten Rahmen hat.

Die `box-sizing` Eigenschaft kann verwendet werden, um dieses Verhalten anzupassen:

- `content-box` bietet das Standardverhalten des CSS-Box-Modells. Wenn Sie die Breite eines Elements auf 100 Pixel setzen, wird die Inhaltsfläche des Elements 100 Pixel breit, und die Breite jedes Rahmens oder Abstands wird zur endgültigen Breite hinzugefügt, wodurch das Element breiter als 100px wird.
- `border-box` weist den Browser an, jede Grenze und jeden Abstand in die von Ihnen angegebenen Werte für die Breite und Höhe eines Elements einzubeziehen. Wenn Sie die Breite eines Elements auf 100 Pixel setzen, werden diese 100 Pixel alle hinzugefügten Rahmen oder Abstände enthalten, und der Inhaltsbereich wird schrumpfen, um diese zusätzliche Breite aufzunehmen. Das macht es typischerweise viel einfacher, Elemente zu dimensionieren.

  `box-sizing: border-box` ist die Standardstilierung, die Browser für die {{htmlelement("table")}}, {{htmlelement("select")}}, und {{htmlelement("button")}} Elemente verwenden, sowie für {{htmlelement("input")}} Elemente, deren Typ `{{htmlelement("input/radio", "radio")}}`, `{{htmlelement("input/checkbox", "checkbox")}}`, `{{htmlelement("input/reset", "reset")}}`, `{{htmlelement("input/button", "button")}}`, `{{htmlelement("input/submit", "submit")}}`, `{{htmlelement("input/color", "color")}}`, oder `{{htmlelement("input/search", "search")}}` ist.

> [!NOTE]
> Es ist oft nützlich, `box-sizing` auf `border-box` zu setzen, um Elemente zu layouten. Dies macht die Handhabung der Größen von Elementen viel einfacher und beseitigt im Allgemeinen viele Stolpersteine, auf die Sie beim Layouten Ihres Inhalts stoßen können. Andererseits, wenn `position: relative` oder `position: absolute` verwendet wird, erlaubt die Verwendung von `box-sizing: content-box` den Positionswerten, relativ zum Inhalt zu sein und unabhängig von Änderungen an Rahmen- und Abstandgrößen, was manchmal wünschenswert ist.

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

Die `box-sizing` Eigenschaft wird als ein einzelnes Schlüsselwort angegeben, das aus der unten stehenden Liste von Werten ausgewählt wird.

### Werte

- `content-box`
  - : Dies ist der initiale und standardmäßige Wert, wie er vom CSS-Standard spezifiziert wird. Die {{Cssxref("width")}} und {{Cssxref("height")}} Eigenschaften beinhalten den Inhalt, schließen aber den Abstand, Rahmen oder die Marge nicht ein. Zum Beispiel rendert `.box {width: 350px; border: 10px solid black;}` eine Box, die 370px breit ist.

    Hier werden die Dimensionen des Elements wie folgt berechnet: _width = Breite des Inhalts_, und _height = Höhe des Inhalts_. (Ränder und Abstände sind nicht in der Berechnung enthalten.)

- `border-box`
  - : Die {{Cssxref("width")}} und {{Cssxref("height")}} Eigenschaften beinhalten den Inhalt, den Abstand und den Rahmen, schließen jedoch die Marge nicht ein. Beachten Sie, dass der Abstand und der Rahmen innerhalb der Box liegen werden. Zum Beispiel rendert `.box {width: 350px; border: 10px solid black;}` eine Box, die 350px breit ist, wobei der Bereich für den Inhalt 330px breit ist. Die Inhaltsfläche kann nicht negativ sein und wird auf 0 abgerundet, was es unmöglich macht, `border-box` zu verwenden, um das Element unsichtbar zu machen.

    Hier werden die Dimensionen des Elements berechnet als: _width = Rahmen + Abstand + Breite des Inhalts_, und _height = Rahmen + Abstand + Höhe des Inhalts_.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Box-Größen mit content-box und border-box

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
