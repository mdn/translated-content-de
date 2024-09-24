---
title: box-sizing
slug: Web/CSS/box-sizing
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`box-sizing`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie die Gesamtbreite und -höhe eines Elements berechnet werden.

{{EmbedInteractiveExample("pages/css/box-sizing.html")}}

Im Standard-[CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) wird die von Ihnen einem Element zugewiesene `width` und `height` nur auf den Inhaltsbereich des Elements angewendet. Wenn das Element einen Rand oder eine Polsterung hat, wird dies zur `width` und `height` hinzugefügt, um die Größe des auf dem Bildschirm gerenderten Box zu bestimmen. Das bedeutet, dass Sie bei der Festlegung der `width` und `height` die angegebenen Werte anpassen müssen, um einen eventuellen Rand oder eine Polsterung zu berücksichtigen. Zum Beispiel, wenn Sie vier Boxen mit `width: 25%;` haben, passt mindestens eine von ihnen nicht in eine Zeile innerhalb der Grenzen des übergeordneten Containers, wenn einer der Boxen eine linke oder rechte Polsterung oder einen linken oder rechten Rand hat.

Die `box-sizing`-Eigenschaft kann verwendet werden, um dieses Verhalten anzupassen:

- `content-box` bietet das standardmäßige CSS-Box-Modell-Verhalten. Wenn Sie die Breite eines Elements auf 100 Pixel setzen, ist der Inhaltsbereich des Elements 100 Pixel breit, und die Breite eines Randes oder einer Polsterung wird zur endgültigen gerenderten Breite hinzugefügt, wodurch das Element breiter als 100 Pixel wird.
- `border-box` weist den Browser an, jeden Rand und jede Polsterung in die von Ihnen spezifizierten Werte für Breite und Höhe eines Elements einzubeziehen. Wenn Sie die Breite eines Elements auf 100 Pixel einstellen, umfasst diese 100 Pixel den hinzugefügten Rand und die Polsterung, und der Inhaltsbereich wird verkleinert, um diese zusätzliche Breite aufzunehmen. Dies macht es typischerweise viel einfacher, Elemente zu dimensionieren.

  `box-sizing: border-box` ist das Standardstyling, das Browser für die Elemente {{htmlelement("table")}}, {{htmlelement("select")}} und {{htmlelement("button")}} verwenden, sowie für {{htmlelement("input")}}-Elemente, deren Typ `{{htmlelement("input/radio", "radio")}}`, `{{htmlelement("input/checkbox", "checkbox")}}`, `{{htmlelement("input/reset", "reset")}}`, `{{htmlelement("input/button", "button")}}`, `{{htmlelement("input/submit", "submit")}}`, `{{htmlelement("input/color", "color")}}` oder `{{htmlelement("input/search", "search")}}` ist.

> [!NOTE]
> Es ist oft nützlich, `box-sizing` auf `border-box` zu setzen, um Elemente anzuordnen. Dies erleichtert den Umgang mit den Größen der Elemente erheblich und eliminiert im Allgemeinen eine Reihe von Fallstricken, auf die Sie beim Anordnen Ihrer Inhalte stoßen können. Andererseits ermöglicht die Verwendung von `box-sizing: content-box` bei Verwendung von `position: relative` oder `position: absolute`, dass die Positionswerte relativ zum Inhalt sind und unabhängig von Änderungen der Rand- und Polsterungsgrößen, was manchmal wünschenswert ist.

## Syntax

```css
box-sizing: border-box;
box-sizing: content-box;

/* Globale Werte */
box-sizing: inherit;
box-sizing: initial;
box-sizing: revert;
box-sizing: revert-layer;
box-sizing: unset;
```

Die `box-sizing`-Eigenschaft wird als einzelnes Schlüsselwort aus der untenstehenden Liste von Werten angegeben.

### Werte

- `content-box`

  - : Dies ist der anfängliche und standardmäßige Wert, der vom CSS-Standard angegeben wird. Die Eigenschaften {{Cssxref("width")}} und {{Cssxref("height")}} umfassen den Inhalt, schließen jedoch nicht die Polsterung, den Rand oder den Abstand ein. Zum Beispiel rendert `.box {width: 350px; border: 10px solid black;}` eine Box, die 370 Pixel breit ist.

    Hier werden die Dimensionen des Elements wie folgt berechnet: _width = Breite des Inhalts_, und _height = Höhe des Inhalts_. (Rand und Polsterung sind in der Berechnung nicht enthalten.)

- `border-box`

  - : Die Eigenschaften {{Cssxref("width")}} und {{Cssxref("height")}} umfassen den Inhalt, die Polsterung und den Rand, schließen jedoch den Abstand nicht ein. Beachten Sie, dass Polsterung und Rand innerhalb der Box liegen. Zum Beispiel rendert `.box {width: 350px; border: 10px solid black;}` eine Box, die 350 Pixel breit ist, wobei der Bereich für den Inhalt 330 Pixel breit ist. Der Inhaltsbereich kann nicht negativ sein und wird auf 0 abgerundet, wodurch es unmöglich ist, mit `border-box` das Element verschwinden zu lassen.

    Hier werden die Dimensionen des Elements wie folgt berechnet: _width = Rand + Polsterung + Breite des Inhalts_, und _height = Rand + Polsterung + Höhe des Inhalts_.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Boxgrößen mit content-box und border-box

Dieses Beispiel zeigt, wie verschiedene `box-sizing`-Werte die gerenderte Größe von zwei ansonsten identischen Elementen ändern.

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
  /* Gesamtbreite: 160px + (2 * 20px) + (2 * 8px) = 216px
     Gesamthöhe: 80px + (2 * 20px) + (2 * 8px) = 136px
     Inhaltsboxbreite: 160px
     Inhaltsboxhöhe: 80px */
}

.border-box {
  box-sizing: border-box;
  /* Gesamtbreite: 160px
     Gesamthöhe: 80px
     Inhaltsboxbreite: 160px - (2 * 20px) - (2 * 8px) = 104px
     Inhaltsboxhöhe: 80px - (2 * 20px) - (2 * 8px) = 24px */
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
