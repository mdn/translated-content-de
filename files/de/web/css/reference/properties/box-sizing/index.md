---
title: box-sizing
slug: Web/CSS/Reference/Properties/box-sizing
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
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

Die Eigenschaft `box-sizing` wird als ein einziges Schlüsselwort festgelegt, das aus der unten stehenden Werte-Liste ausgewählt wird.

### Werte

- `content-box`
  - : Dies ist der initiale und Standardwert gemäß dem CSS-Standard. Die Eigenschaften {{Cssxref("width")}} und {{Cssxref("height")}} umfassen den Inhalt, schließen jedoch nicht das `padding`, den `border` oder `margin` ein. Zum Beispiel rendert `.box {width: 350px; border: 10px solid black;}` eine Box, die 370px breit ist.

    Hier werden die Abmessungen des Elements wie folgt berechnet: _Breite = Breite des Inhalts_, und _Höhe = Höhe des Inhalts_. (Ränder und Polsterungen sind in der Berechnung nicht enthalten.)

- `border-box`
  - : Die Eigenschaften {{Cssxref("width")}} und {{Cssxref("height")}} umfassen den Inhalt, Polsterung und Rand, schließen jedoch nicht den `margin` ein. Beachten Sie, dass Polsterung und Rand innerhalb der Box sein werden. Zum Beispiel rendert `.box {width: 350px; border: 10px solid black;}` eine Box, die 350px breit ist, wobei der Bereich für den Inhalt 330px breit ist. Die Inhaltsbox kann nicht negativ sein und wird auf 0 abgerundet, was es unmöglich macht, `border-box` zu verwenden, um das Element verschwinden zu lassen.

    Hier werden die Abmessungen des Elements wie folgt berechnet: _Breite = Rand + Polsterung + Breite des Inhalts_, und _Höhe = Rand + Polsterung + Höhe des Inhalts_.

## Beschreibung

Im Standardfall des [CSS-Box-Modells](/de/docs/Web/CSS/Guides/Box_model/Introduction) wird die zugewiesene `width` und `height` eines Elements nur auf die Inhaltsbox des Elements angewendet. Wenn das Element einen Rand oder eine Polsterung hat, wird dies der `width` und `height` hinzugefügt, um die Größe der auf dem Bildschirm dargestellten Box zu erhalten. Das bedeutet, dass wenn Sie `width` und `height` festlegen, Sie den angegebenen Wert anpassen müssen, um jegliche hinzugefügte Ränder oder Polsterungen zu berücksichtigen. Zum Beispiel, wenn Sie vier Boxen mit `width: 25%;` haben, passen diese nicht standardmäßig in eine Zeile innerhalb der Einschränkungen des übergeordneten Containers, wenn sie links oder rechts mit Polsterung oder Rand versehen sind.

Die Eigenschaft `box-sizing` kann verwendet werden, um dieses Verhalten anzupassen:

- `content-box` gibt Ihnen das Standardverhalten des CSS-Box-Modells. Wenn Sie die Breite eines Elements auf 100 Pixel setzen, wird die Inhaltsbox des Elements 100 Pixel breit sein, und die Breite jedes hinzugefügten Randes oder Polsterung wird zur endgültigen Darstellungsbreite hinzugefügt, wodurch das Element breiter als 100px wird.
- `border-box` teilt dem Browser mit, dass jeder hinzugefügte Rand und jede Polsterung in den von Ihnen spezifizierten Werten für die Breite und Höhe eines Elements berücksichtigt werden soll. Wenn Sie die Breite eines Elements auf 100 Pixel setzen, werden diese 100 Pixel jeden hinzugefügten Rand oder Polsterung einschließen, und die Inhaltsbox wird sich zusammenziehen, um diese zusätzliche Breite aufzunehmen. Dies macht es in der Regel viel einfacher, Elemente zu dimensionieren.

  `box-sizing: border-box` ist die standardmäßige Formatierung, die Browser für die {{htmlelement("table")}}, {{htmlelement("select")}}, und {{htmlelement("button")}} Elemente und für {{htmlelement("input")}} Elemente deren Typen `{{htmlelement("input/radio", "radio")}}`, `{{htmlelement("input/checkbox", "checkbox")}}`, `{{htmlelement("input/reset", "reset")}}`, `{{htmlelement("input/button", "button")}}`, `{{htmlelement("input/submit", "submit")}}`, `{{htmlelement("input/color", "color")}}` oder `{{htmlelement("input/search", "search")}}` sind, verwenden.

> [!NOTE]
> Es ist oft nützlich, `box-sizing` auf `border-box` einzustellen, um Elemente zu layouten. Dies macht den Umgang mit den Größen von Elementen viel einfacher und beseitigt im Allgemeinen eine Reihe von Fallstricken, auf die Sie beim Layouten Ihres Inhalts stoßen können. Auf der anderen Seite ermöglicht die Verwendung von `position: relative` oder `position: absolute` und `box-sizing: content-box` dass die Positionierungswerte relativ zum Inhalt sind und unabhängig von Änderungen an Rand- und Polsterungsgrößen, was manchmal wünschenswert ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Boxgrößen mit content-box und border-box

Dieses Beispiel zeigt, wie unterschiedliche `box-sizing` Werte die gerenderte Größe von zwei ansonsten identischen Elementen ändern.

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

- [CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction)
