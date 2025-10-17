---
title: Verwendung der CSS-Eigenschaft object-view-box
short-title: Verwendung von object-view-box
slug: Web/CSS/CSS_images/Using_object-view-box
l10n:
  sourceCommit: b5a6d8bc5fd751032f70b88e7ec1ec61339937de
---

Die {{cssxref("object-view-box")}}-Eigenschaft kann genutzt werden, um einen Viewbox innerhalb von {{Glossary("replaced_elements", "ersetzten Elementen")}} zu definieren, wodurch nur ein Abschnitt des ersetzten Inhalts angezeigt werden kann. Der angezeigte Abschnitt des Elements kann vergrößert, verkleinert oder in Originalgröße dargestellt werden, wobei das intrinsische {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Inhalts beibehalten wird. In diesem Leitfaden untersuchen wir diese Eigenschaft, vergleichen sie mit der ähnlichen {{cssxref("object-fit")}}-Eigenschaft und erkunden ihre Funktionalität durch das Vergrößern und Verkleinern sowie das Verschieben über ein Element.

## Intrinsische Größe, extrinsische Größe und `object-fit`

Jedes ersetzte Element hat zwei Größen: eine {{Glossary("extrinsic_size", "extrinsische Größe")}} und eine {{Glossary("intrinsic_size", "intrinsische Größe")}}.

Die extrinsische Größe ist die Dimension des HTML-Elements, in dem der Inhalt basierend auf den Box- und visuellen Formatierungsmodellen gerendert wird. Das [Box-Modell](/de-DE/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) und das [visuelle Formatierungsmodell](/de-DE/docs/Web/CSS/CSS_display/Visual_formatting_model) bestimmen die Größe der dargestellten Elemente basierend auf Inhalt, HTML-Attributen, CSS, das auf die Elemente und ihre Vorfahren angewendet wird, und der Größe des Viewports.

Die intrinsische Größe ist die tatsächliche Größe des Inhalts selbst; die Größe, die das Element hat, wenn keine Stile angewendet werden und ohne Layoutbeschränkungen. Während die intrinsische und extrinsische Größe nicht gleich sein müssen, ist es im Allgemeinen wichtig, das intrinsische {{Glossary("aspect_ratio", "Seitenverhältnis")}} eines ersetzten Elements beizubehalten.

## `object-view-box` versus `object-fit`

CSS verfügt über viele Größenbestimmungs-Eigenschaften. Bei der Größenbestimmung von ersetzten Elementen ermöglicht uns die [`object-fit`](/de-DE/docs/Web/CSS/object-fit)-Eigenschaft, bis zu einem gewissen Grad zu kontrollieren, wie ersetzte Elemente innerhalb eines definierten Rahmens dargestellt werden. Zum Beispiel wird im folgenden Screenshot ein 1200 x 400 Bild mit einem {{htmlelement("img")}}-Element angezeigt. Das `<img>`-Element ist auf 400 x 200 dimensioniert. Der Bildinhalt wird mit der Deklaration `object-fit: none;` positioniert.

![Ein Bild, das extrinsische und intrinsische Bildgrößen demonstriert; der zentrale 400x200-Abschnitt eines viel größeren 1200x400-Bildes ist in dem 400x200-Viewbox sichtbar, der die Größe des Elements ist, das das Bild darstellt.](extrinsic-intrinsic_sizes.jpg)

Die `object-view-box`-Eigenschaft ist flexibler als die `object-fit`-Eigenschaft und kann mehr Dinge tun. Sie kann zum Beispiel zum Zuschneiden, Vergrößern und Verschieben von Bildern verwendet werden. Die Eigenschaft setzt den sichtbaren Bereich (Viewbox), der definiert, welcher Teil des Inhalts angezeigt werden soll und wie er in die extrinsische Größe passt. Der Viewbox-Wert enthält ein Rechteck und seine Position relativ zum intrinsischen Bereich des Inhalts, aber die _physische Größe der Viewbox bleibt gleich der extrinsischen Größe_. Die Viewbox markiert den Bereich im Inhalt, der angezeigt werden soll, und dann wird der Inhaltsbereich so transformiert, dass er den extrinsischen Dimensionen entspricht, die in das HTML-Element passen.

Im folgenden Bild haben wir das gleiche Leopardenbild in einem 400 x 150 Bild-Element. Diesmal haben wir jedoch die `object-view-box`-Eigenschaft verwendet, um den Teil des Bildes zuzuschneiden, der die Augen des Leoparden zeigt.

![Das Leopardenbild, das mit der object-view-box-Eigenschaft zugeschnitten wurde, mit einer 400px x 150px Viewbox, die einen unvergrößerten Abschnitt des Bildes anzeigt](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/object-view-box_xywh.jpg)

In diesem Fall, da die Dimensionen des `<img>`-Elements und der Viewbox, die durch die `object-view-box`-Eigenschaft definiert werden, gleich sind, d.h. 400 x 150 Pixel, sind die Seitenverhältnisse beider gleich, und das ersetzte Element wird weder skaliert noch verzerrt.

Das Beibehalten des gleichen {{Glossary("aspect_ratio", "Seitenverhältnisses")}} verhindert Bildverzerrungen. Mit `object-view-box` können wir verschiedene Bildoperationen durchführen, während wir unterschiedliche extrinsische und Viewbox-Größen haben, ohne das ersetzte Element zu verzerren, da es vergrößert oder verkleinert wird.

## Vergrößern und Verkleinern

Die Reduzierung der Viewbox-Größe erhöht den Bereich des angezeigten ersetzten Elements, da kleinerer Inhalt gestreckt wird, um die Dimensionen des HTML-Elements zu füllen. Durch Verkleinern erhält es einen Verkleinern-Effekt.

Dieses Beispiel demonstriert die Verwendung der `object-view-box`-Eigenschaft, um einen Abschnitt eines ersetzten Elements in einem statisch dimensionierten HTML-Element zu vergrößern und zu verkleinern. In diesem Fall dient das Auge des Leoparden, innerhalb eines sehr großen Bildes, als Fokuspunkt des Vergrößerungseffekts.

### HTML

Wir fügen ein {{htmlelement("img")}}-Element und ein {{htmlelement("input")}}-Element vom Typ [`range`](/de-DE/docs/Web/HTML/Reference/Elements/input/range) hinzu sowie ein zugehöriges {{htmlelement("label")}}. Die natürlichen Dimensionen oder die intrinsische Größe des ursprünglichen Leopardenbildes sind `1244px` breit und `416px` hoch, mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} von `3:1`.

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

Wir definieren eine benutzerdefinierte Eigenschaft `--box-size`, die als Höhe und Breite in der {{cssxref("basic-shape/xywh", "xywh()")}}-Funktion verwendet wird, wodurch eine quadratische Viewbox mit einem Seitenverhältnis von `1:1` entsteht. Der Offsetpunkt der Viewbox, der Fokuspunkt in unserem Zoom-Effekt, ist auf `500px` für die `x`-Koordinate und `30px` für die `y`-Koordinate gesetzt, was der oberen linken Ecke des rechten Auges des Leoparden entspricht.

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

Wir fügen einen Event-Listener zum Schieberegler hinzu, der den Wert der benutzerdefinierten Eigenschaft `--boxSize` aktualisiert, wenn der Benutzer damit interagiert. Um den Vergrößerungseffekt zu erhöhen, wenn der Schieberegler nach rechts bewegt wird, wird der Wert des Schiebereglers invertiert, indem er von `500px` abgezogen wird, da die Reduzierung der Viewbox-Größe den Vergrößerungseffekt erhöht.

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

{{ EmbedLiveSample("Vergrößern und Verkleinern", "", 480) }}

Bewegen Sie den Schieberegler nach rechts, um den Vergrößerungseffekt zu erhöhen, und nach links, um ihn zu reduzieren. Der Schieberegler beeinflusst nur die Dimensionen der Viewbox, während die `x`- und `y`-Werte, der Ursprung der Viewbox, konstant bleiben. Die Größe des `<img>`-Elements bleibt ebenfalls konstant.

## Ein Bild verschieben

Wir können einen Verschiebeeffekt erzeugen, indem wir die Koordinaten des Viewbox-Fensters ändern, die `x`- und `y`-Komponenten der `xywh()`-Funktion, während die Größe des sichtbaren Abschnitts konstant bleibt. Zum Beispiel können wir, indem wir die Viewbox-Dimensionen konstant halten und nur die horizontale Position - den `x`-Parameter - ändern, einen horizontalen Verschiebeeffekt erzeugen.

```html hidden
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="leopard" />
<p>
  <label for="position">Left offset: </label>
  <input type="range" id="position" min="0" max="900" value="450" />
</p>
<output></output>
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

{{ EmbedLiveSample("Verschiebeeffekt", "", 450) }}

Bewegen Sie den Schieberegler. Beachten Sie, wie das Erhöhen und Verringern des `x`-Wertes der `xywh()`-Funktion einen Verschiebeeffekt erzeugt.

## Siehe auch

- {{cssxref("object-view-box")}}
- {{cssxref("object-fit")}}
- {{cssxref("object-position")}}
- {{cssxref("background-size")}}
- [Seitenverhältnis verstehen](/de-DE/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
