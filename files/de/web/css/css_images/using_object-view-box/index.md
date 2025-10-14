---
title: Verwendung der CSS-Eigenschaft object-view-box
short-title: Verwendung von object-view-box
slug: Web/CSS/CSS_images/Using_object-view-box
l10n:
  sourceCommit: 3b8cbcef38a3470c1e61b2d57af8bf92957ce834
---

Die {{cssxref("object-view-box")}}-Eigenschaft kann verwendet werden, um einen Viewbox innerhalb von {{Glossary("replaced_elements", "ersetzten Elementen")}} zu definieren, sodass nur ein Abschnitt des ersetzten Inhalts angezeigt wird. Der angezeigte Abschnitt des Elements kann vergrößert, verkleinert oder in ursprünglicher Größe dargestellt werden, wobei das intrinsische {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Inhalts beibehalten wird. In diesem Leitfaden untersuchen wir diese Eigenschaft, vergleichen sie mit der ähnlichen {{cssxref("object-fit")}}-Eigenschaft und erforschen ihre Funktionalität durch Vergrößern und Verkleinern sowie Schwenken über ein Element.

## Intrinsische Größe, extrinsische Größe und `object-fit`

Jedes ersetzte Element hat zwei Größen: eine {{Glossary("extrinsic_size", "extrinsische Größe")}} und eine {{Glossary("intrinsic_size", "intrinsische Größe")}}.

Die extrinsische Größe ist die Dimension des HTML-Elements, in dem der Inhalt basierend auf den Box- und visuellen Formatierungsmodellen gerendert wird. Das [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) und das [visuelle Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model) bestimmen die Größe der gerenderten Elemente basierend auf Inhalt, HTML-Attributen, CSS, das auf die Elemente und deren Vorfahren angewendet wird, und der Viewport-Größe.

Die intrinsische Größe ist die tatsächliche Größe des Inhalts selbst; die Größe, die das Element hat, wenn keine Stile angewendet werden und keine Layoutbeschränkungen bestehen. Auch wenn sich die intrinsischen und extrinsischen Größen unterscheiden können, ist es im Allgemeinen wichtig, das intrinsische {{Glossary("aspect_ratio", "Seitenverhältnis")}} eines ersetzten Elements beizubehalten.

## `object-view-box` versus `object-fit`

CSS hat viele Größeneigenschaften. Bei der Größenanpassung von ersetzten Elementen ermöglicht die [`object-fit`](/de/docs/Web/CSS/object-fit)-Eigenschaft uns, bis zu einem gewissen Grad zu steuern, wie ersetzte Elemente innerhalb eines definierten Rahmens gerendert werden. Beispielsweise wird im folgenden Screenshot ein 1200 x 400 Bild mit einem {{htmlelement("img")}}-Element angezeigt. Das `<img>`-Element ist auf 400 x 200 dimensioniert. Der Bildinhalt wird mit der Deklaration `object-fit: none;` positioniert.

![Ein Bild, das extrinsische und intrinsische Bildgrößen zeigt; der mittlere 400 x 200 Abschnitt eines viel größeren 1200 x 400 Bildes ist in dem 400 x 200 Viewbox sichtbar, das die Größe des Elements darstellt, das das Bild anzeigt.](extrinsic-intrinsic_sizes.jpg)

Die `object-view-box`-Eigenschaft ist flexibler als die `object-fit`-Eigenschaft und kann mehr Dinge tun. Zum Beispiel kann sie verwendet werden, um Bilder zuzuschneiden, zu zoomen und zu verschieben. Die Eigenschaft setzt den sichtbaren Bereich (Viewbox), der bestimmt, welcher Teil des Inhalts gezeigt werden soll und wie er innerhalb der extrinsischen Größe angepasst wird. Der Viewbox-Wert enthält ein Rechteck und seine Position relativ zum intrinsischen Bereich des Inhalts, aber die _physische Größe des Viewboxes bleibt gleich der extrinsischen Größe_. Der Viewbox markiert den anzuzeigenden Bereich im Inhalt, und dann wird der Inhaltsbereich so transformiert, dass er den extrinsischen Abmessungen entspricht, die in das HTML-Element passen.

Im folgenden Bild haben wir dasselbe Leopardenbild in einem 400 x 150 Bild-Element. Diesmal haben wir jedoch die `object-view-box`-Eigenschaft verwendet, um den Abschnitt des Bildes zuzuschneiden, der die Augen des Leoparden zeigt.

![Das Leopardenbild, zugeschnitten mit der object-view-box-Eigenschaft, mit einem 400px x 150px Viewbox, der einen unskalierten Abschnitt des Bildes anzeigt](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/object-view-box_xywh.jpg)

In diesem Fall sind die Dimensionen des `<img>`-Elements und des durch die `object-view-box`-Eigenschaft definierten Viewboxes identisch, d.h., 400 x 150 Pixel, die Seitenverhältnisse sind gleich, und das ersetzte Element wird weder skaliert noch verzerrt.

Das Beibehalten eines gleichen {{Glossary("aspect_ratio", "Seitenverhältnisses")}} verhindert Bildverzerrungen. Mit `object-view-box` können wir verschiedene Bildoperationen durchführen, während wir unterschiedliche extrinsische und Viewbox-Größen haben, ohne das ersetzte Element beim Vergrößern und Verkleinern zu verzerren.

## Zoomen

Das Reduzieren der Viewbox-Größe, des angezeigten Bereichs des ersetzten Elements, erhöht den Zoom-in-Effekt, da ein kleinerer Inhalt gestreckt wird, um die Dimensionen des HTML-Elements zu füllen. Eine Verkleinerung führt zu einem Zoom-out-Effekt.

Dieses Beispiel zeigt, wie die `object-view-box`-Eigenschaft verwendet wird, um einen Abschnitt eines ersetzten Elements innerhalb eines statisch dimensionierten HTML-Elements zu vergrößern und zu verkleinern. In diesem Fall dient das Auge des Leoparden in einem sehr großen Bild als Brennpunkt des Zoomeffekts.

### HTML

Wir fügen ein {{htmlelement("img")}}-Element und ein [`range`](Web/HTML/Reference/Elements/input/range) {{htmlelement("input")}}-Element mit einem zugehörigen {{htmlelement("label")}} hinzu. Die natürlichen Abmessungen oder die intrinsische Größe des ursprünglichen Leopardenbildes sind `1244px` breit und `416px` hoch, mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} von `3:1`.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="leopard" />
<p>
  <label for="box-size">Zoom-in: </label>
  <input type="range" id="box-size" min="115" max="380" value="150" />
</p>
<output></output>
```

### CSS

Wir definieren eine `--box-size` benutzerdefinierte Eigenschaft, die als Höhe und Breite in der {{cssxref("basic-shape/xywh", "xywh()")}}-Funktion verwendet wird, um einen quadratischen Viewbox mit einem Seitenverhältnis von `1:1` zu erstellen. Der Versatzpunkt des Viewboxes, also der Brennpunkt unseres Zoomeffekts, wird auf `500px` für die `x`-Koordinate und `30px` für die `y`-Koordinate gesetzt, was der oberen linken Ecke des rechten Auges des Leoparden entspricht.

```css hidden
input {
  width: 350px;
}

output {
  text-align: center;
  background-color: #dedede;
  font-family: monospace;
  padding: 5px;
  display: block;
}

@supports not (object-view-box: none) {
  body::before {
    content: "Your browser does not support the 'object-view-box' property.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}
```

```css
img {
  width: 350px;
  height: 350px;
  border: 2px solid red;

  --box-size: 150px;
  object-view-box: xywh(500px 30px var(--box-size) var(--box-size));
}
```

### JavaScript

Wir fügen einen Ereignislistener zum Schieberegler hinzu, der den Wert der benutzerdefinierten `--boxSize`-Eigenschaft aktualisiert, wenn der Benutzer damit interagiert. Um den Zoom-in-Effekt zu verstärken, wenn der Schieberegler nach rechts bewegt wird, wird der Wert des Schiebereglers invertiert, indem er von `500px` subtrahiert wird, da das Reduzieren der Viewbox-Größe den Zoom-in-Effekt erhöht.

```js
const img = document.querySelector("img");
const zoom = document.getElementById("box-size");
const output = document.querySelector("output");

function update() {
  const size = 500 - zoom.value;
  img.style.setProperty("--box-size", `${size}px`);
  output.innerText = `object-view-box: xywh(500px 30px ${size}px ${size}px);`;
}

zoom.addEventListener("input", update);
update();
```

### Ergebnis

{{ EmbedLiveSample("Zooming in and out", "", 480) }}

Bewegen Sie den Schieberegler nach rechts, um den Zoom-in-Effekt zu verstärken, und nach links, um ihn zu reduzieren. Der Schieberegler beeinflusst nur die Dimensionen des Viewboxes, während die x- und y-Werte, der Ursprungspunkt des Viewboxes, konstant bleiben. Die Größe des `<img>`-Elements bleibt ebenfalls konstant.

## Schwenken eines Bildes

Wir können einen Schwenkeffekt erzeugen, indem wir die Koordinaten des Viewbox-Fensters, die `x`- und `y`-Komponenten der `xywh()`-Funktion, ändern und die Größe des sichtbaren Abschnitts konstant halten. Zum Beispiel können wir durch Beibehalten der Viewbox-Dimensionen und Änderung nur der horizontalen Position - des `x`-Parameters - einen horizontalen Schwenkeffekt erzeugen.

```html hidden
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="leopard" />
<p>
  <label for="position">Left offset: </label>
  <input type="range" id="position" min="0" max="900" value="450" />
  <output>
</p>
```

```css hidden
input {
  width: 350px;
}

@supports not (object-view-box: none) {
  body::before {
    content: "Your browser does not support the 'object-view-box' property.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}
output {
  text-align: center;
  background-color: #dedede;
  font-family: monospace;
  padding: 5px;
  display: block;
}

img {
  width: 350px;
  height: 350px;

  --x-position: 0;
  object-view-box: xywh(var(--x-position) 30px 350px 350px);
}
```

```js hidden
const img = document.querySelector("img");
const position = document.getElementById("position");
const output = document.querySelector("output");

function update() {
  img.style.setProperty("--x-position", `${position.value}px`);
  output.innerText = `xywh(${position.value}px 30px 350px 350px);`;
}

position.addEventListener("input", update);
update();
```

{{ EmbedLiveSample("Panning effect", "", 450) }}

Bewegen Sie den Schieberegler. Beachten Sie, wie das Erhöhen und Verringern des `x`-Werts der `xywh()`-Funktion einen Schwenkeffekt erzeugt.

## Siehe auch

- {{cssxref("object-view-box")}}
- {{cssxref("object-fit")}}
- {{cssxref("object-position")}}
- {{cssxref("background-size")}}
- [Verständnis des Seitenverhältnisses](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
