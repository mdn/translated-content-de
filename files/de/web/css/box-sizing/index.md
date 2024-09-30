---
title: box-sizing
slug: Web/CSS/box-sizing
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`box-sizing`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie die Gesamtbreite und -höhe eines Elements berechnet werden.

{{EmbedInteractiveExample("pages/css/box-sizing.html")}}

Im [CSS Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) wird die von Ihnen zugewiesene `width` und `height` standardmäßig nur auf die Inhaltsbox eines Elements angewendet. Wenn das Element einen Rahmen oder Innenabstand hat, wird dieser zu `width` und `height` hinzugefügt, um die Größe der Box zu erhalten, die auf dem Bildschirm angezeigt wird. Das bedeutet, dass Sie bei der Festlegung von `width` und `height` den von Ihnen angegebenen Wert anpassen müssen, um den hinzugefügten Rahmen oder Innenabstand zu berücksichtigen. Wenn Sie beispielsweise vier Boxen mit `width: 25%;` haben und eine davon links oder rechts Innenabstand oder einen Rahmen hat, passen sie standardmäßig nicht in eine Zeile innerhalb der Begrenzungen des übergeordneten Containers.

Die `box-sizing`-Eigenschaft kann verwendet werden, um dieses Verhalten anzupassen:

- `content-box` bietet Ihnen das standardmäßige Verhalten der CSS-Boxgrößenbestimmung. Wenn Sie die Breite eines Elements auf 100 Pixel setzen, ist die Inhaltsbox des Elements 100 Pixel breit, und die Breite eines Rahmens oder Innenabstands wird zur endgültigen angezeigten Breite hinzugefügt, wodurch das Element breiter als 100px wird.
- `border-box` weist den Browser an, jeden Rahmen und Innenabstand in den von Ihnen angegebenen Werten für die Breite und Höhe eines Elements zu berücksichtigen. Wenn Sie die Breite eines Elements auf 100 Pixel setzen, beinhalten diese 100 Pixel jeden hinzugefügten Rahmen oder Innenabstand, und die Inhaltsbox wird verkleinert, um die zusätzliche Breite aufzunehmen. Dies macht es in der Regel viel einfacher, Elemente zu dimensionieren.

  `box-sizing: border-box` ist die standardmäßige Gestaltung, die Browser für die {{htmlelement("table")}}, {{htmlelement("select")}}, und {{htmlelement("button")}} Elemente sowie für {{htmlelement("input")}} Elemente verwenden, deren Typ `{{htmlelement("input/radio", "radio")}}`, `{{htmlelement("input/checkbox", "checkbox")}}`, `{{htmlelement("input/reset", "reset")}}`, `{{htmlelement("input/button", "button")}}`, `{{htmlelement("input/submit", "submit")}}`, `{{htmlelement("input/color", "color")}}` oder `{{htmlelement("input/search", "search")}}` ist.

> [!NOTE]
> Es ist oft nützlich, `box-sizing` auf `border-box` zu setzen, um Elemente anzuordnen. Dies erleichtert den Umgang mit den Größen von Elementen erheblich und beseitigt im Allgemeinen eine Reihe von Stolpersteinen, auf die Sie beim Anordnen Ihrer Inhalte stoßen könnten. Andererseits erlaubt die Verwendung von `box-sizing: content-box` in Verbindung mit `position: relative` oder `position: absolute`, dass sich die Positionierungswerte relativ zum Inhalt verhalten und unabhängig von Änderungen der Rahmen- und Innenabstandsgrößen sind, was manchmal wünschenswert ist.

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

Die `box-sizing`-Eigenschaft wird als ein einzelnes Schlüsselwort angegeben, das aus der unten stehenden Liste der Werte ausgewählt wird.

### Werte

- `content-box`

  - : Dies ist der initiale und standardmäßige Wert, wie im CSS-Standard spezifiziert. Die {{Cssxref("width")}} und {{Cssxref("height")}} Eigenschaften umfassen den Inhalt, jedoch nicht den Innenabstand, den Rahmen oder den Rand. Zum Beispiel rendert `.box {width: 350px; border: 10px solid black;}` eine Box, die 370px breit ist.

    Hier werden die Abmessungen des Elements wie folgt berechnet: _width = Breite des Inhalts_, und _height = Höhe des Inhalts_. (Rahmen und Innenabstand sind in der Berechnung nicht enthalten.)

- `border-box`

  - : Die {{Cssxref("width")}} und {{Cssxref("height")}} Eigenschaften umfassen den Inhalt, den Innenabstand und den Rahmen, jedoch nicht den Rand. Beachten Sie, dass Innenabstand und Rahmen innerhalb der Box liegen. Zum Beispiel rendert `.box {width: 350px; border: 10px solid black;}` eine Box, die 350px breit ist, wobei der Bereich für den Inhalt 330px breit ist. Die Inhaltsbox kann nicht negativ sein und wird auf 0 reduziert, wodurch es unmöglich ist, `border-box` zu verwenden, um das Element verschwinden zu lassen.

    Hier werden die Abmessungen des Elements wie folgt berechnet: _width = Rahmen + Innenabstand + Breite des Inhalts_, und _height = Rahmen + Innenabstand + Höhe des Inhalts_.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Boxengrößen mit content-box und border-box

Dieses Beispiel zeigt, wie verschiedene `box-sizing` Werte die gerenderte Größe von zwei ansonsten identischen Elementen verändern.

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
