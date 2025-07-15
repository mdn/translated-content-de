---
title: box-sizing
slug: Web/CSS/box-sizing
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`box-sizing`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie die Gesamtbreite und -höhe eines Elements berechnet wird.

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

Standardmäßig im [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) wird die `width` und `height`, die Sie einem Element zuweisen, nur auf die Inhaltsbox des Elements angewendet. Wenn das Element einen Rahmen oder eine Auffüllung hat, wird dies dann zur `width` und `height` hinzugefügt, um die auf dem Bildschirm angezeigte Größe der Box zu bestimmen. Das bedeutet, dass Sie beim Setzen von `width` und `height` den Wert anpassen müssen, um einen möglichen Rahmen oder eine Auffüllung zu berücksichtigen. Wenn Sie zum Beispiel vier Boxen mit `width: 25%;` haben, wird bei jeglicher links oder rechts vorhandener Auffüllung oder Rahmen diese standardmäßig nicht in einer Zeile innerhalb der Begrenzungen des übergeordneten Containers passen.

Die `box-sizing`-Eigenschaft kann verwendet werden, um dieses Verhalten anzupassen:

- `content-box` bietet Ihnen das standardmäßige Box-Modell-Verhalten von CSS. Wenn Sie die Breite eines Elements auf 100 Pixel setzen, wird die Inhaltsbox des Elements 100 Pixel breit sein und die Breite jedes Rahmens oder jeder Auffüllung wird zur endgültigen Breite hinzugefügt, wodurch das Element breiter als 100px wird.
- `border-box` weist den Browser an, jeden Rahmen und jede Auffüllung bei den Werten, die Sie für Breite und Höhe eines Elements angeben, zu berücksichtigen. Wenn Sie die Breite eines Elements auf 100 Pixel setzen, beinhalten diese 100 Pixel jede hinzugefügte Auffüllung oder jeden Rahmen, und die Inhaltsbox wird sich anpassen, um diese zusätzliche Breite aufzunehmen. Dies erleichtert in der Regel die Größenanpassung von Elementen erheblich.

  `box-sizing: border-box` ist die Standardstilvorgabe, die Browser für die {{htmlelement("table")}}, {{htmlelement("select")}} und {{htmlelement("button")}}-Elemente sowie für {{htmlelement("input")}}-Elemente verwenden, deren Typ `{{htmlelement("input/radio", "radio")}}`, `{{htmlelement("input/checkbox", "checkbox")}}`, `{{htmlelement("input/reset", "reset")}}`, `{{htmlelement("input/button", "button")}}`, `{{htmlelement("input/submit", "submit")}}`, `{{htmlelement("input/color", "color")}}` oder `{{htmlelement("input/search", "search")}}` ist.

> [!NOTE]
> Es kann oft nützlich sein, `box-sizing` auf `border-box` zu setzen, um Elemente zu layouten. Dadurch wird der Umgang mit den Größen von Elementen erheblich vereinfacht und generell werden eine Reihe von Fallstricken beseitigt, auf die Sie beim Layouten Ihrer Inhalte stoßen könnten. Auf der anderen Seite ermöglicht die Verwendung von `box-sizing: content-box` bei `position: relative` oder `position: absolute`, dass die Positionswerte relativ zum Inhalt und unabhängig von Änderungen an Rand- und Auffüllgrößen sind, was manchmal wünschenswert ist.

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

Die `box-sizing`-Eigenschaft wird als einzelnes Schlüsselwort aus der unten stehenden Liste von Werten angegeben.

### Werte

- `content-box`
  - : Dies ist der Anfangs- und Standardwert, wie er durch den CSS-Standard festgelegt ist. Die {{Cssxref("width")}} und {{Cssxref("height")}}-Eigenschaften beinhalten den Inhalt, jedoch nicht die Auffüllung, den Rahmen oder den Abstand. Zum Beispiel rendert `.box {width: 350px; border: 10px solid black;}` eine Box, die 370px breit ist.

    Hier werden die Dimensionen des Elements berechnet als: _breite = Breite des Inhalts_ und _höhe = Höhe des Inhalts_. (Rahmen und Auffüllungen sind in der Berechnung nicht enthalten.)

- `border-box`
  - : Die {{Cssxref("width")}} und {{Cssxref("height")}}-Eigenschaften beinhalten den Inhalt, die Auffüllung und den Rahmen, jedoch nicht den Abstand. Beachten Sie, dass Auffüllung und Rahmen innerhalb der Box sind. Zum Beispiel rendert `.box {width: 350px; border: 10px solid black;}` eine Box, die 350px breit ist, wobei der Bereich für Inhalte 330px breit ist. Die Inhaltsbox kann nicht negativ sein und wird auf 0 abgerundet, was es unmöglich macht, `border-box` zu verwenden, um das Element verschwinden zu lassen.

    Hier werden die Dimensionen des Elements berechnet als: _breite = Rahmen + Auffüllung + Breite des Inhalts_ und _höhe = Rahmen + Auffüllung + Höhe des Inhalts_.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Box-Größen mit content-box und border-box

Dieses Beispiel zeigt, wie unterschiedliche `box-sizing`-Werte die gerenderte Größe von zwei ansonsten identischen Elementen verändern.

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
