---
title: Verwendung der CSS-Eigenschaft object-view-box
short-title: Verwendung von `object-view-box`
slug: Web/CSS/Guides/Images/Using_object-view-box
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Die {{cssxref("object-view-box")}}-Eigenschaft kann verwendet werden, um einen Viewbox innerhalb von {{Glossary("replaced_elements", "ersetzten Elementen")}} zu definieren, sodass nur ein Abschnitt des ersetzten Inhalts angezeigt wird. Der angezeigte Abschnitt des Elements kann vergrößert, verkleinert oder in Originalgröße dargestellt werden, während das ursprüngliche {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Inhalts beibehalten wird. In diesem Leitfaden untersuchen wir diese Eigenschaft, vergleichen sie mit der ähnlichen {{cssxref("object-fit")}}-Eigenschaft und erforschen ihre Funktionalität durch das Vergrößern, Verkleinern und Verschieben über ein Element.

## Eigen- und Fremdgrößen sowie `object-fit`

Jedes ersetzte Element hat zwei Größen: eine {{Glossary("extrinsic_size", "Fremdgröße")}} und eine {{Glossary("intrinsic_size", "Eigen-Größe")}}.

Die Fremdgröße stellt die Abmessungen des HTML-Elements dar, in dem der Inhalt basierend auf den Box- und visuellen Formatierungsmodellen gerendert wird. Das [Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction) und das [visuelle Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model) bestimmen die Größe der gerenderten Elemente basierend auf Inhalt, HTML-Attributen, CSS, das auf die Elemente und ihre Vorfahren angewendet wird, und der Größe des Ansichtsfensters.

Die Eigen-Größe ist die tatsächliche Größe des Inhalts selbst; die Größe, die das Element hat, wenn keine Stile angewendet werden und ohne Layoutbeschränkungen. Obwohl die Eigen- und Fremdgrößen nicht gleich sein müssen, ist es generell wichtig, das ursprüngliche {{Glossary("aspect_ratio", "Seitenverhältnis")}} eines ersetzten Elements beizubehalten.

## `object-view-box` im Vergleich zu `object-fit`

CSS verfügt über viele Größeneigenschaften. Wenn es darum geht, ersetzte Elemente zu dimensionieren, ermöglicht uns die [`object-fit`](/de/docs/Web/CSS/Reference/Properties/object-fit)-Eigenschaft, bis zu einem gewissen Grad zu kontrollieren, wie ersetzte Elemente innerhalb eines definierten Rahmens gerendert werden. Zum Beispiel im folgenden Screenshot wird ein 1200 x 400 Bild mithilfe eines {{htmlelement("img")}}-Elementes angezeigt. Das `<img>`-Element wird auf 400 x 200 dimensioniert. Der Bildinhalt wird mithilfe der Deklaration `object-fit: none;` positioniert.

![Ein Bild, das die Fremd- und Eigen-Bildgrößen darstellt; der mittlere 400 x 200 Abschnitt eines viel größeren 1200 x 400 Bildes ist im 400 x 200 Ansichtsrahmen sichtbar, der die Größe des Elements ist, das das Bild anzeigt.](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/extrinsic-intrinsic_sizes.jpg)

Die `object-view-box`-Eigenschaft ist flexibler als die `object-fit`-Eigenschaft und kann mehr Dinge tun. Zum Beispiel kann sie zum Zuschneiden, Vergrößern und Verschieben von Bildern verwendet werden. Die Eigenschaft legt den sichtbaren Bereich (Viewbox) fest, der definiert, welcher Teil des Inhalts angezeigt wird und wie er in die Fremdgröße passt. Der Viewbox-Wert enthält ein Rechteck und seine Position relativ zum ursprünglichen Bereich des Inhalts, aber die _physikalische Größe des Viewbox bleibt gleich der Fremdgröße_. Der Viewbox markiert den Bereich im Inhalt, der angezeigt werden soll, und dann wird der Inhaltsbereich transformiert, um den Fremdmaßen zu entsprechen und in das HTML-Element zu passen.

Im folgenden Bild haben wir dasselbe Leopardenbild in einem 400 x 150 Bild-Element. Allerdings haben wir diesmal die `object-view-box`-Eigenschaft verwendet, um den Teil des Bildes zuzuschneiden, der die Augen des Leoparden zeigt.

![Das Leopardenbild wird mithilfe der `object-view-box`-Eigenschaft zugeschnitten, mit einem 400px x 150px Viewbox, der einen nicht skalierten Abschnitt des Bildes anzeigt](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/object-view-box_xywh.jpg)

In diesem Fall, da die Abmessungen des `<img>`-Elements und des durch die `object-view-box`-Eigenschaft definierten Viewbox gleich sind, d.h. 400 x 150 Pixel, sind die Seitenverhältnisse beider gleich, und das ersetzte Element wird weder skaliert noch verzerrt.

Die Beibehaltung des gleichen {{Glossary("aspect_ratio", "Seitenverhältnisses")}} verhindert Bildverzerrungen. Mit `object-view-box` können wir verschiedene Bildoperationen durchführen, während verschiedene Fremd- und Viewbox-Größen verwendet werden, ohne das ersetzte Element zu verzerren, da es skaliert.

## Vergrößern und Verkleinern

Das Reduzieren der Größe des Viewbox, also des Bereichs des ersetzten Elements, der angezeigt wird, erhöht den Effekt des Hineinzoomens, weil kleinerer Inhalt gestreckt wird, um in die Abmessungen des HTML-Elements zu passen. Eine Verminderung der Größe führt zu einem Herauszoom-Effekt.

Dieses Beispiel zeigt, wie die `object-view-box`-Eigenschaft verwendet wird, um einen Abschnitt eines ersetzten Elements in und aus einem statisch dimensionierten HTML-Element zu zoomen. In diesem Fall dient das Auge des Leoparden in einem sehr großen Bild als Brennpunkt des Zoomeffekts.

### HTML

Wir fügen ein {{htmlelement("img")}}-Element und ein [`range`](/de/docs/Web/HTML/Reference/Elements/input/range) {{htmlelement("input")}}-Element mit einem zugehörigen {{htmlelement("label")}} hinzu. Die natürlichen Abmessungen oder die Eigen-Größe des ursprünglichen Leopardenbildes sind `1244px` breit und `416px` hoch, mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} von `3:1`.

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

Wir definieren eine `--box-size`-Benutzereigenschaft, die als Höhe und Breite in der {{cssxref("basic-shape/xywh", "xywh()")}}-Funktion verwendet wird und einen quadratischen Viewbox mit einem Seitenverhältnis von `1:1` erstellt. Der Versatzpunkt des Viewbox, der Brennpunkt unseres Zoomeffekts, wird auf `500px` für die `x`-Koordinate und `30px` für die `y`-Koordinate gesetzt, was der oberen linken Ecke des rechten Auges des Leoparden entspricht.

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

Wir fügen ein Event-Listener zum Schieberegler hinzu, der den Wert der `--boxSize`-Benutzereigenschaft aktualisiert, wenn der Benutzer damit interagiert. Um den Hineinzoom-Effekt zu erhöhen, wenn der Schieberegler nach rechts bewegt wird, wird der Wert des Schiebereglers invertiert, indem er von `500px` abgezogen wird, da die Verkleinerung der Viewbox-Größe den Hineinzoom-Effekt erhöht.

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

Bewegen Sie den Schieberegler nach rechts, um den Hineinzoom-Effekt zu erhöhen, und nach links, um ihn zu verringern. Der Schieberegler beeinflusst nur die Abmessungen des Viewbox, während die x- und y-Werte, der Ursprungspunkt des Viewbox, konstant bleiben. Die Größe des `<img>`-Elements bleibt ebenfalls konstant.

## Verschieben eines Bildes

Wir können einen Verschiebeeffekt erzeugen, indem wir die Koordinaten des Viewbox-Fensters ändern, die `x`- und `y`-Komponenten der `xywh()`-Funktion, während die Größe des sichtbaren Abschnitts konstant bleibt. Zum Beispiel können wir, indem wir die Viewbox-Dimensionen konstant halten und nur die horizontale Position ändern - den `x`-Parameter -, einen horizontalen Verschiebeeffekt erzeugen.

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

{{ EmbedLiveSample("Verschiebungseffekt", "", 450) }}

Bewegen Sie den Schieberegler. Beachten Sie, wie das Erhöhen und Verringern des `x`-Werts der `xywh()`-Funktion einen Verschiebeeffekt erzeugt.

## Siehe auch

- {{cssxref("object-view-box")}}
- {{cssxref("object-fit")}}
- {{cssxref("object-position")}}
- {{cssxref("background-size")}}
- [Verständnis des Seitenverhältnisses](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
