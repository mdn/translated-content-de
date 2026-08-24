---
title: "`box-sizing` CSS property"
short-title: box-sizing
slug: Web/CSS/Reference/Properties/box-sizing
l10n:
  sourceCommit: 737b931225e92e0cba47e57a150878b1a78ee45a
---

Die **`box-sizing`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie die Gesamtbreite und -höhe eines Elements berechnet wird.

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

### Werte

Diese Eigenschaft wird als eines der folgenden Schlüsselwort-Werte spezifiziert:

- `content-box`
  - : Dies ist der initiale und Standardwert, wie im CSS-Standard angegeben. Die {{Cssxref("width")}}- und {{Cssxref("height")}}-Eigenschaften umfassen den Inhalt, schließen jedoch nicht das Padding, den Rahmen oder den Rand ein. Zum Beispiel rendert `.box {width: 350px; border: 10px solid black;}` eine Box, die 370px breit ist.

    Hier werden die Abmessungen des Elements berechnet als: _Breite = Breite des Inhalts_ und _Höhe = Höhe des Inhalts_. (Rahmen und Padding sind nicht in der Berechnung enthalten.)

- `border-box`
  - : Die {{Cssxref("width")}}- und {{Cssxref("height")}}-Eigenschaften umfassen den Inhalt, das Padding und den Rahmen, schließen jedoch den Rand nicht ein. Beachten Sie, dass Padding und Rahmen innerhalb der Box liegen. Zum Beispiel rendert `.box {width: 350px; border: 10px solid black;}` eine Box, die 350px breit ist, wobei der Bereich für den Inhalt 330px breit ist. Der Inhaltsbereich kann nicht negativ sein und wird auf 0 gerundet, was es unmöglich macht, `border-box` zu verwenden, um das Element verschwinden zu lassen.

    Hier werden die Abmessungen des Elements berechnet als: _Breite = Rahmen + Padding + Breite des Inhalts_ und _Höhe = Rahmen + Padding + Höhe des Inhalts_.

## Beschreibung

Im Standard-CSS-Boxmodell wird die von Ihnen einem Element zugewiesene `width` und `height` nur auf das Inhaltsfeld des Elements angewendet. Wenn das Element einen Rahmen oder ein Padding hat, wird dies dann zur `width` und `height` hinzugefügt, um die Größe der auf dem Bildschirm angezeigten Box zu bestimmen. Dies bedeutet, dass, wenn Sie `width` und `height` festlegen, Sie den angegebenen Wert anpassen müssen, um jedwedes hinzugefügte Padding oder den Rahmen zu berücksichtigen. Wenn Sie beispielsweise vier Boxen mit `width: 25%;` haben und eine von ihnen hat links oder rechts Padding oder einen linken oder rechten Rahmen, passen sie nicht standardmäßig in einer Zeile innerhalb der Einschränkungen des übergeordneten Containers.

Die `box-sizing`-Eigenschaft kann verwendet werden, um dieses Verhalten anzupassen:

- `content-box` bietet Ihnen das standardmäßige CSS-Box-Sizing-Verhalten. Wenn Sie die Breite eines Elements auf 100 Pixel setzen, wird das Inhaltsfeld des Elements 100 Pixel breit sein, und die Breite eines Rahmens oder Paddings wird zur endgültigen Breite hinzugefügt, was das Element breiter als 100px macht.
- `border-box` teilt dem Browser mit, dass er einen Rahmen und Padding in den von Ihnen festgelegten Werten für die Breite und Höhe eines Elements berücksichtigen soll. Wenn Sie die Breite eines Elements auf 100 Pixel setzen, umfassen diese 100 Pixel jedwedes hinzugefügte Padding oder Rahmen, und das Inhaltsfeld wird verkleinert, um diese zusätzliche Breite aufzunehmen. Dies macht es in der Regel viel einfacher, Elemente zu dimensionieren.

  `box-sizing: border-box` ist die Standard-Stilvorgabe, die Browser für die {{htmlelement("table")}}, {{htmlelement("select")}} und {{htmlelement("button")}} Elemente verwenden, sowie für {{htmlelement("input")}}-Elemente, deren Typ `{{htmlelement("input/radio", "radio")}}`, `{{htmlelement("input/checkbox", "checkbox")}}`, `{{htmlelement("input/reset", "reset")}}`, `{{htmlelement("input/button", "button")}}`, `{{htmlelement("input/submit", "submit")}}`, `{{htmlelement("input/color", "color")}}` oder `{{htmlelement("input/search", "search")}}` ist.

> [!NOTE]
> Es ist oft nützlich, `box-sizing` auf `border-box` zu setzen, um Elemente auszurichten. Dies erleichtert das Arbeiten mit den Größen von Elementen erheblich und beseitigt in der Regel eine Reihe von Fallen, auf die Sie stoßen können, während Sie den Inhalt ausrichten. Andererseits erlaubt die Verwendung von `box-sizing: content-box` in Kombination mit `position: relative` oder `position: absolute`, dass sich die Positionierungswerte relativ zum Inhalt verhalten und unabhängig von Änderungen der Rahmen- und Padding-Größen sind, was manchmal wünschenswert ist.

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

- [CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction)
