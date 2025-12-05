---
title: Verwenden der CSS-Eigenschaft object-view-box
short-title: Verwenden von object-view-box
slug: Web/CSS/Guides/Images/Using_object-view-box
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die {{cssxref("object-view-box")}} Eigenschaft kann verwendet werden, um ein Viewbox innerhalb von {{Glossary("replaced_elements", "ersetzten Elementen")}} zu definieren, wodurch nur ein Abschnitt des ersetzten Inhalts angezeigt wird. Der angezeigte Abschnitt des Elements kann vergrößert, verkleinert oder in Originalgröße dargestellt werden, während das natürliche {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Inhalts erhalten bleibt. In diesem Leitfaden untersuchen wir diese Eigenschaft, vergleichen sie mit der ähnlichen {{cssxref("object-fit")}} Eigenschaft und erforschen ihre Funktionalität durch Vergrößern und Verkleinern sowie das Verschieben über ein Element.

## Natürliche Größe, extrinsische Größe und `object-fit`

Jedes ersetzte Element hat zwei Größen; eine {{Glossary("extrinsic_size", "extrinsische Größe")}} und eine {{Glossary("intrinsic_size", "natürliche Größe")}}.

Die extrinsische Größe ist die Dimension des HTML-Elements, in dem der Inhalt basierend auf dem Box- und dem visuellen Formatierungsmodell gerendert wird. Das [Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction) und das [visuelle Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model) bestimmen die Größe der gerenderten Elemente basierend auf dem Inhalt, den HTML-Attributen, den auf die Elemente und ihre Vorfahren angewendeten CSS-Regeln und der Größe des Ansichtsfensters.

Die natürliche Größe ist die tatsächliche Größe des Inhalts selbst; die Größe, die das Element hat, wenn keine Stile angewendet werden und ohne Layoutbeschränkungen. Während die natürliche und die extrinsische Größe nicht gleich sein müssen, ist es im Allgemeinen wichtig, das natürliche {{Glossary("aspect_ratio", "Seitenverhältnis")}} eines ersetzten Elements beizubehalten.

## `object-view-box` versus `object-fit`

CSS bietet viele Größenanpassungseigenschaften. Bei der Größenanpassung ersetzter Elemente ermöglicht uns die {{cssxref("object-fit")}} Eigenschaft, in gewissem Maße zu steuern, wie ersetzte Elemente innerhalb eines definierten Rahmens gerendert werden. Zum Beispiel wird im folgenden Screenshot ein 1200 x 400 Bild mittels eines {{htmlelement("img")}} Elements angezeigt. Das `<img>` Element hat die Größe 400 x 200. Der Bildinhalt wird unter Verwendung der Deklaration `object-fit: none;` positioniert.

![Ein Bild, das extrinsische und intrinsische Bildgrößen zeigt; der zentrale 400 x 200 Abschnitt eines viel größeren 1200 x 400 Bildes ist im 400 x 200 Sichtfenster sichtbar, das der Größe des Elements entspricht, das das Bild anzeigt.](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/extrinsic-intrinsic_sizes.jpg)
Die `object-view-box` Eigenschaft ist flexibler als die `object-fit` Eigenschaft und ist in der Lage, mehr Dinge zu tun. Beispielsweise kann sie zum Zuschneiden, Zoomen und Verschieben von Bildern verwendet werden. Die Eigenschaft legt den sichtbaren Bereich (Viewbox) fest, welcher definiert, welcher Teil des Inhalts angezeigt werden soll und wie er innerhalb der extrinsischen Größe angepasst werden soll. Der Viewbox-Wert enthält ein Rechteck und seine Position relativ zur natürlichen Fläche des Inhalts, aber die _physische Größe der Viewbox bleibt gleich der extrinsischen Größe_. Die Viewbox markiert den Bereich im Inhalt, der angezeigt werden soll, und dann wird der Inhaltsbereich transformiert, um den extrinsischen Dimensionen des HTML-Elements zu entsprechen.

Im folgenden Bild haben wir dasselbe Leopardenbild in einem 400 x 150 Bildelement. Dieses Mal haben wir jedoch die `object-view-box` Eigenschaft verwendet, um den Teil des Bildes zuzuschneiden, der die Augen des Leoparden zeigt.

![Das Leopardenbild, das mit der object-view-box-Eigenschaft zugeschnitten wurde, mit einer 400px mal 150px Viewbox, die einen unskalierten Abschnitt des Bildes anzeigt](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/object-view-box_xywh.jpg)

In diesem Fall sind, da die Abmessungen des `<img>` Elements und der von der `object-view-box` Eigenschaft definierten Viewbox gleich sind, d.h. 400 x 150 Pixel, die Seitenverhältnisse beider gleich, und das ersetzte Element wird weder skaliert noch verzerrt.

Das Beibehalten desselben {{Glossary("aspect_ratio", "Seitenverhältnisses")}} verhindert Bildverzerrung. Mit `object-view-box` können wir verschiedene Bildoperationen ausführen, während unterschiedliche extrinsische und Viewbox-Größen vorhanden sind, ohne das ersetzte Element zu verzerren, wenn es vergrößert oder verkleinert wird.

## Hinein- und Herauszoomen

Durch Verringern der Viewbox-Größe, d.h. des angezeigten Bereichs des ersetzten Elements, wird der Zoom-in-Effekt verstärkt, da kleinerer Inhalt gestreckt wird, um die Dimensionen des HTML-Elements auszufüllen. Eine Verringerung führt zu einem Zoom-out-Effekt.

Dieses Beispiel zeigt die Verwendung der `object-view-box` Eigenschaft, um einen Abschnitt eines ersetzten Elements innerhalb eines statisch dimensionierten HTML-Elements hineinzuzoomen oder herauszuzoomen. In diesem Fall dient das Auge des Leoparden, innerhalb eines sehr großen Bildes, als Fokuspunkt des Zoom-Effekts.

### HTML

Wir fügen ein {{htmlelement("img")}} Element und ein [`range`](/de/docs/Web/HTML/Reference/Elements/input/range) {{htmlelement("input")}} Element mit einem zugeordneten {{htmlelement("label")}} ein. Die natürlichen Dimensionen oder die natürliche Größe des ursprünglichen Leopardenbildes sind `1244px` breit und `416px` hoch, mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} von `3:1`.

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

Wir definieren eine benutzerdefinierte Eigenschaft `--box-size`, die als Höhe und Breite in der {{cssxref("basic-shape/xywh", "xywh()")}} Funktion verwendet wird und eine quadratische Viewbox mit einem Seitenverhältnis von `1:1` erstellt. Der Offsetpunkt der Viewbox, der Fokuspunkt in unserem Zoom-Effekt, wird auf `500px` für die `x` Koordinate und `30px` für die `y` Koordinate gesetzt, was der oberen linken Ecke des rechten Auges des Leoparden entspricht.

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

Wir fügen einen Ereignis-Listener zum Schieberegler hinzu, der den Wert der benutzerdefinierten Eigenschaft `--boxSize` aktualisiert, wenn der Benutzer damit interagiert. Um den Zoom-in-Effekt zu verstärken, wenn der Schieberegler nach rechts bewegt wird, wird der Wert des Schiebereglers invertiert, indem er von `500px` subtrahiert wird, da das Reduzieren der Viewbox-Größe den Zoom-in-Effekt verstärkt.

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

Bewegen Sie den Schieberegler nach rechts, um den Zoom-in-Effekt zu erhöhen, und nach links, um ihn zu verringern. Der Schieberegler beeinflusst nur die Dimensionen der Viewbox, während die x- und y-Werte, der Ursprungspunkt der Viewbox, konstant bleiben. Die Größe des `<img>` Elements bleibt ebenfalls konstant.

## Verschieben eines Bildes

Wir können einen Verschiebeeffekt erzeugen, indem wir die Koordinaten des Viewbox-Fensters ändern, die `x` und `y` Komponenten der `xywh()` Funktion, während wir die Größe des sichtbaren Abschnitts konstant halten. Zum Beispiel können wir durch das konstante Halten der Viewbox-Dimensionen und das Ändern nur der horizontalen Position - des `x` Parameters - einen horizontalen Verschiebeeffekt erzeugen.

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

{{ EmbedLiveSample("Panning effect", "", 450) }}

Bewegen Sie den Schieberegler. Achten Sie darauf, wie das Erhöhen und Verringern des `x` Wertes der `xywh()` Funktion einen Verschiebeeffekt erzeugt.

## Siehe auch

- {{cssxref("object-view-box")}}
- {{cssxref("object-fit")}}
- {{cssxref("object-position")}}
- {{cssxref("background-size")}}
- [Verständnis für das Seitenverhältnis](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
