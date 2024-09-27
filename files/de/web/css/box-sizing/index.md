---
title: box-sizing
slug: Web/CSS/box-sizing
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`box-sizing`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie die Gesamtbreite und -höhe eines Elements berechnet wird.

{{EmbedInteractiveExample("pages/css/box-sizing.html")}}

Im Standard [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) werden die `width` und `height`, die Sie einem Element zuweisen, nur auf die Inhaltsbox des Elements angewendet. Wenn das Element einen Rahmen oder Innenabstand hat, wird dies zur `width` und `height` hinzugefügt, um die Größe der Box zu berechnen, die auf dem Bildschirm gerendert wird. Das bedeutet, dass Sie, wenn Sie `width` und `height` festlegen, den Wert anpassen müssen, den Sie angeben, um den eventuell hinzugefügten Rahmen oder Innenabstand zu berücksichtigen. Wenn beispielsweise vier Boxen mit `width: 25%;` vorhanden sind und eine davon linken oder rechten Innenabstand oder einen linken oder rechten Rahmen hat, passen diese standardmäßig nicht in einer Zeile innerhalb der Begrenzungen des übergeordneten Containers.

Die `box-sizing` Eigenschaft kann verwendet werden, um dieses Verhalten anzupassen:

- `content-box` gibt Ihnen das standardmäßige CSS-BoxSizing-Verhalten. Wenn Sie die Breite eines Elements auf 100 Pixel setzen, wird die Inhaltsbox des Elements 100 Pixel breit sein, und die Breite eines Rahmens oder Innenabstands wird zur endgültigen gerenderten Breite hinzugefügt, wodurch das Element breiter als 100px wird.
- `border-box` weist den Browser an, einen vorhandenen Rahmen und Innenabstand in die Werte einzubeziehen, die Sie für die Breite und Höhe eines Elements angeben. Wenn Sie die Breite eines Elements auf 100 Pixel setzen, umfassen diese 100 Pixel jeden hinzugefügten Rahmen oder Innenabstand, und die Inhaltsbox wird verkleinert, um diese zusätzliche Breite aufzunehmen. Dies erleichtert normalerweise die Größenbestimmung von Elementen erheblich.

  `box-sizing: border-box` ist die standardmäßige Stileinstellung, die Browser für die {{htmlelement("table")}}, {{htmlelement("select")}}, und {{htmlelement("button")}} Elemente verwenden, sowie für {{htmlelement("input")}} Elemente, deren Typ `{{htmlelement("input/radio", "radio")}}`, `{{htmlelement("input/checkbox", "checkbox")}}`, `{{htmlelement("input/reset", "reset")}}`, `{{htmlelement("input/button", "button")}}`, `{{htmlelement("input/submit", "submit")}}`, `{{htmlelement("input/color", "color")}}`, oder `{{htmlelement("input/search", "search")}}` ist.

> [!NOTE]
> Es ist oft nützlich, `box-sizing` auf `border-box` zu setzen, um Elemente zu layouten. Dadurch wird der Umgang mit den Größen von Elementen erheblich erleichtert und beseitigt im Allgemeinen eine Reihe von Fallstricken, auf die Sie beim Layout Ihrer Inhalte stoßen können. Andererseits, wenn `position: relative` oder `position: absolute` verwendet wird, ermöglicht die Verwendung von `box-sizing: content-box`, dass die Positionierungswerte relativ zum Inhalt und unabhängig von Änderungen der Rahmen- und Innenabstandsgrößen sind, was manchmal wünschenswert ist.

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

Die `box-sizing` Eigenschaft wird als einzelnes Schlüsselwort aus der unten stehenden Liste von Werten angegeben.

### Werte

- `content-box`

  - : Dies ist der initiale und standardmäßige Wert, wie er vom CSS-Standard spezifiziert ist. Die {{Cssxref("width")}} und {{Cssxref("height")}} Eigenschaften beinhalten den Inhalt, jedoch nicht den Innenabstand, Rahmen oder Rand. Zum Beispiel rendert `.box {width: 350px; border: 10px solid black;}` eine Box, die 370px breit ist.

    Hier werden die Abmessungen des Elements wie folgt berechnet: _Breite = Breite des Inhalts_, und _Höhe = Höhe des Inhalts_. (Rahmen und Innenabstand sind nicht in der Berechnung enthalten.)

- `border-box`

  - : Die {{Cssxref("width")}} und {{Cssxref("height")}} Eigenschaften beinhalten den Inhalt, Innenabstand und Rahmen, jedoch nicht den Rand. Beachten Sie, dass Innenabstand und Rahmen innerhalb der Box liegen. Zum Beispiel rendert `.box {width: 350px; border: 10px solid black;}` eine Box, die 350px breit ist, wobei der Bereich für den Inhalt 330px breit ist. Die Inhaltsbox kann nicht negativ sein und wird auf 0 abgerundet, was es unmöglich macht, `border-box` zu verwenden, um das Element verschwinden zu lassen.

    Hier werden die Abmessungen des Elements wie folgt berechnet: _Breite = Rahmen + Innenabstand + Breite des Inhalts_, und _Höhe = Rahmen + Innenabstand + Höhe des Inhalts_.

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

- [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
