---
title: "`box-sizing` CSS property"
short-title: box-sizing
slug: Web/CSS/Reference/Properties/box-sizing
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

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
  background-color: rgb(81 81 81 / 0.6);
}

#example-element > p {
  margin: 0;
}
```

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

Die `box-sizing` Eigenschaft wird als ein Schlüsselwort angegeben, das aus der folgenden Liste von Werten ausgewählt wird.

### Werte

- `content-box`
  - : Dies ist der anfängliche und Standardwert, wie es vom CSS-Standard spezifiziert wird. Die {{Cssxref("width")}}- und {{Cssxref("height")}}-Eigenschaften beinhalten den Inhalt, schließen aber nicht das `padding`, den `border` oder den `margin` ein. Zum Beispiel, `.box {width: 350px; border: 10px solid black;}` rendert eine Box, die 370px breit ist.

    Hier werden die Abmessungen des Elements wie folgt berechnet: _Breite = Breite des Inhalts_, und _Höhe = Höhe des Inhalts_. (Ränder und Abstände werden nicht in die Berechnung einbezogen.)

- `border-box`
  - : Die {{Cssxref("width")}}- und {{Cssxref("height")}}-Eigenschaften beinhalten den Inhalt, das `padding` und den `border`, schließen aber nicht den `margin` ein. Beachten Sie, dass `padding` und `border` innerhalb der Box liegen. Zum Beispiel, `.box {width: 350px; border: 10px solid black;}` rendert eine Box, die 350px breit ist, wobei der Bereich für den Inhalt 330px breit ist. Die Inhaltsbox kann nicht negativ sein und wird auf 0 abgerundet, was es unmöglich macht, `border-box` zu verwenden, um das Element verschwinden zu lassen.

    Hier werden die Abmessungen des Elements wie folgt berechnet: _Breite = Rand + Abstände + Breite des Inhalts_, und _Höhe = Rand + Abstände + Höhe des Inhalts_.

## Beschreibung

Im Standard-[CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model/Introduction) wird die von Ihnen einem Element zugewiesene `width` und `height` nur auf die Inhaltsbox des Elements angewendet. Wenn das Element einen Rahmen oder einen Abstand hat, wird dies dann zur `width` und `height` hinzugefügt, um die Größe der Box zu ermitteln, die auf dem Bildschirm angezeigt wird. Das bedeutet, dass Sie beim Festlegen von `width` und `height` den Wert so anpassen müssen, dass eventueller Rahmen oder Abstand, der möglicherweise hinzugefügt wird, berücksichtigt wird. Wenn Sie beispielsweise vier Boxen mit `width: 25%;` haben und irgendeine davon einen linken oder rechten Abstand oder einen linken oder rechten Rahmen hat, passen sie standardmäßig nicht in einer Zeile innerhalb der Begrenzungen des übergeordneten Containers.

Die `box-sizing`-Eigenschaft kann verwendet werden, um dieses Verhalten anzupassen:

- `content-box` bietet Ihnen das standardmäßige CSS-Box-Sizing-Verhalten. Wenn Sie die Breite eines Elements auf 100 Pixel setzen, ist die Inhaltsbox des Elements 100 Pixel breit, und die Breite eines Rahmens oder Abstands wird zur endgültigen gerenderten Breite hinzugefügt, wodurch das Element breiter als 100px wird.
- `border-box` weist den Browser an, alle Rahmen und Abstände in die von Ihnen angegebenen Werte für die Breite und Höhe eines Elements einzubeziehen. Wenn Sie die Breite eines Elements auf 100 Pixel setzen, enthalten diese 100 Pixel alle hinzugefügten Rahmen oder Abstände, und die Inhaltsbox verkleinert sich, um diese zusätzliche Breite aufzunehmen. Dies macht es in der Regel viel einfacher, Elemente zu dimensionieren.

  `box-sizing: border-box` ist die Standardstilierung, die Browser für die {{htmlelement("table")}}, {{htmlelement("select")}} und {{htmlelement("button")}}-Elemente verwenden, sowie für {{htmlelement("input")}}-Elemente, deren Typ `{{htmlelement("input/radio", "radio")}}`, `{{htmlelement("input/checkbox", "checkbox")}}`, `{{htmlelement("input/reset", "reset")}}`, `{{htmlelement("input/button", "button")}}`, `{{htmlelement("input/submit", "submit")}}`, `{{htmlelement("input/color", "color")}}` oder `{{htmlelement("input/search", "search")}}` ist.

> [!NOTE]
> Es ist oft nützlich, `box-sizing` auf `border-box` zu setzen, um Elemente zu layouten. Dies macht den Umgang mit den Größen von Elementen viel einfacher und beseitigt im Allgemeinen eine Reihe von Stolpersteinen, auf die Sie beim Layouten Ihrer Inhalte stoßen können. Andererseits erlaubt die Verwendung von `box-sizing: content-box` bei Verwendung von `position: relative` oder `position: absolute`, dass die Positionswerte relativ zum Inhalt sind und unabhängig von Änderungen der Rahmen- und Abstandgrößen, was manchmal wünschenswert ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Box-Größen mit content-box und border-box

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

- [CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model/Introduction)
