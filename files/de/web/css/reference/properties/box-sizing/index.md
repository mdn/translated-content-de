---
title: box-sizing
slug: Web/CSS/Reference/Properties/box-sizing
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`box-sizing`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, wie die Gesamtbreite und -höhe eines Elements berechnet wird.

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

Im [CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model/Introduction) wird standardmäßig die von Ihnen einem Element zugewiesene `width` und `height` nur auf das Inhaltsfeld des Elements angewendet. Hat das Element einen Rand oder eine Auffüllung, wird diese zur `width` und `height` hinzugefügt, um die auf dem Bildschirm gerenderte Boxgröße zu erreichen. Das bedeutet, dass Sie beim Festlegen von `width` und `height` den Wert anpassen müssen, den Sie angeben, um eventuelle Ränder oder Auffüllungen zu berücksichtigen, die hinzugefügt werden könnten. Wenn Sie zum Beispiel vier Boxen mit `width: 25%;` haben und eine davon eine linke oder rechte Auffüllung oder einen linken oder rechten Rand hat, passen sie standardmäßig nicht in eine Zeile innerhalb der Einschränkungen des übergeordneten Containers.

Die `box-sizing`-Eigenschaft kann verwendet werden, um dieses Verhalten anzupassen:

- `content-box` bietet das standardmäßige CSS-Box-Sizing-Verhalten. Wenn Sie die Breite eines Elements auf 100 Pixel setzen, dann ist das Inhaltsfeld des Elements 100 Pixel breit und die Breite jedes Randes oder jeder Auffüllung wird zur endgültigen gerenderten Breite hinzugefügt, was das Element breiter als 100px macht.
- `border-box` weist den Browser an, jeden Rand und jede Auffüllung in den von Ihnen angegebenen Werten für die Breite und Höhe eines Elements zu berücksichtigen. Wenn Sie die Breite eines Elements auf 100 Pixel festlegen, dann beinhalten diese 100 Pixel jeden hinzugefügten Rand oder jede Auffüllung, und das Inhaltsfeld wird verkleinert, um diese zusätzliche Breite aufzunehmen. Dadurch wird es in der Regel viel einfacher, Elemente zu dimensionieren.

  `box-sizing: border-box` ist das Standard-Styling, das Browser für die {{htmlelement("table")}}, {{htmlelement("select")}} und {{htmlelement("button")}}-Elemente verwenden, und für {{htmlelement("input")}}-Elemente, deren Typ `{{htmlelement("input/radio", "radio")}}`, `{{htmlelement("input/checkbox", "checkbox")}}`, `{{htmlelement("input/reset", "reset")}}`, `{{htmlelement("input/button", "button")}}`, `{{htmlelement("input/submit", "submit")}}`, `{{htmlelement("input/color", "color")}}` oder `{{htmlelement("input/search", "search")}}` ist.

> [!NOTE]
> Es ist oft nützlich, `box-sizing` auf `border-box` zu setzen, um Elemente zu layouten. Dies erleichtert den Umgang mit den Größen von Elementen erheblich und beseitigt im Allgemeinen eine Reihe von Fallstricken, auf die man bei der Gestaltung Ihres Inhalts stoßen kann. Andererseits kann die Verwendung von `box-sizing: content-box` bei Verwendung von `position: relative` oder `position: absolute` dazu führen, dass die Positionierungswerte relativ zum Inhalt sind und unabhängig von Änderungen der Größen von Rand und Auffüllung, was manchmal erwünscht ist.

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

Die `box-sizing`-Eigenschaft wird als ein einzelnes Schlüsselwort angegeben, das aus der unten stehenden Liste von Werten ausgewählt wird.

### Werte

- `content-box`
  - : Dies ist der initiale und standardmäßige Wert, wie er im CSS-Standard angegeben ist. Die {{Cssxref("width")}} und {{Cssxref("height")}}-Eigenschaften umfassen den Inhalt, jedoch nicht die Auffüllung, den Rand oder den Abstand. Zum Beispiel rendert `.box {width: 350px; border: 10px solid black;}` eine Box, die 370px breit ist.

    Hier werden die Abmessungen des Elements berechnet als: _width = Breite des Inhalts_ und _height = Höhe des Inhalts_. (Ränder und Auffüllungen werden in die Berechnung nicht einbezogen.)

- `border-box`
  - : Die {{Cssxref("width")}} und {{Cssxref("height")}}-Eigenschaften umfassen den Inhalt, die Auffüllung und den Rand, jedoch nicht den Abstand. Beachten Sie, dass Auffüllung und Rand innerhalb der Box liegen. Zum Beispiel rendert `.box {width: 350px; border: 10px solid black;}` eine Box, die 350px breit ist, wobei der Bereich für den Inhalt 330px breit ist. Das Inhaltsfeld kann nicht negativ sein und wird auf 0 abgerundet, was es unmöglich macht, `border-box` zu verwenden, um das Element verschwinden zu lassen.

    Hier werden die Abmessungen des Elements berechnet als: _width = Rand + Auffüllung + Breite des Inhalts_ und _height = Rand + Auffüllung + Höhe des Inhalts_.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Boxgrößen mit content-box und border-box

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

- [CSS Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction)
