---
title: Die CSS-Eigenschaft object-view-box verwenden
short-title: object-view-box verwenden
slug: Web/CSS/Guides/Images/Using_object-view-box
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Mit der Eigenschaft {{cssxref("object-view-box")}} können Sie innerhalb von {{Glossary("replaced_elements", "ersetzten Elementen")}} eine Viewbox definieren, sodass nur ein Ausschnitt des ersetzten Inhalts angezeigt wird. Dieser Ausschnitt kann vergrößert, verkleinert oder in Originalgröße dargestellt werden, wobei das intrinsische {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Inhalts erhalten bleibt. In diesem Leitfaden untersuchen wir die Eigenschaft, vergleichen sie mit der ähnlichen Eigenschaft {{cssxref("object-fit")}} und zeigen, wie sich damit Inhalte vergrößern, verkleinern und verschieben lassen.

## Intrinsische Größe, extrinsische Größe und `object-fit`

Jedes ersetzte Element hat zwei Größen: eine {{Glossary("extrinsic_size", "extrinsische Größe")}} und eine {{Glossary("intrinsic_size", "intrinsische Größe")}}.

Die extrinsische Größe beschreibt die Abmessungen des HTML-Elements, in dem der Inhalt gerendert wird. Sie ergeben sich aus dem Boxmodell und dem visuellen Formatierungsmodell. Das [Boxmodell](/de/docs/Web/CSS/Guides/Box_model/Introduction) und das [visuelle Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model) bestimmen die Größe gerenderter Elemente anhand des Inhalts, der HTML-Attribute, der auf die Elemente und ihre Vorfahren angewendeten CSS-Regeln sowie der Größe des Viewports.

Die intrinsische Größe ist die tatsächliche Größe des Inhalts selbst: die Größe, die das Element ohne angewendete Stile und ohne Layoutbeschränkungen hat. Intrinsische und extrinsische Größe müssen zwar nicht übereinstimmen, in der Regel ist es aber wichtig, das intrinsische {{Glossary("aspect_ratio", "Seitenverhältnis")}} eines ersetzten Elements beizubehalten.

## `object-view-box` im Vergleich zu `object-fit`

CSS bietet viele Eigenschaften zur Größenfestlegung. Bei ersetzten Elementen können Sie mit der Eigenschaft {{cssxref("object-fit")}} bis zu einem gewissen Grad steuern, wie sie innerhalb eines festgelegten Bereichs gerendert werden. Im folgenden Screenshot wird beispielsweise ein Bild mit den Abmessungen 1200 × 400 in einem {{htmlelement("img")}}-Element angezeigt. Das `<img>`-Element ist 400 × 200 groß. Der Bildinhalt wird mit der Deklaration `object-fit: none;` positioniert.

![Ein Bild zur Veranschaulichung der extrinsischen und intrinsischen Bildgröße: Der mittlere Ausschnitt mit den Abmessungen 400 × 200 eines deutlich größeren Bildes mit den Abmessungen 1200 × 400 ist in der 400 × 200 großen Viewbox sichtbar, die der Größe des anzeigenden Elements entspricht.](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/extrinsic-intrinsic_sizes.jpg)

Die Eigenschaft `object-view-box` ist flexibler als `object-fit` und bietet mehr Möglichkeiten. Sie lässt sich beispielsweise zum Zuschneiden, Vergrößern und Verschieben von Bildern verwenden. Die Eigenschaft legt den sichtbaren Bereich (die Viewbox) fest und bestimmt damit, welcher Teil des Inhalts angezeigt und wie er an die extrinsische Größe angepasst wird. Der Wert für die Viewbox enthält ein Rechteck und dessen Position relativ zum intrinsischen Bereich des Inhalts. Die _physische Größe der Viewbox entspricht jedoch weiterhin der extrinsischen Größe_. Die Viewbox markiert den anzuzeigenden Bereich des Inhalts. Dieser Inhaltsbereich wird anschließend so transformiert, dass er in die extrinsischen Abmessungen des HTML-Elements passt.

Im folgenden Bild wird dasselbe Leopardenfoto in einem 400 × 150 großen Bildelement angezeigt. Diesmal wurde jedoch die Eigenschaft `object-view-box` verwendet, um den Bildausschnitt auf die Augen des Leoparden zuzuschneiden.

![Das mit der Eigenschaft object-view-box zugeschnittene Leopardenbild: Eine 400 px × 150 px große Viewbox zeigt einen nicht skalierten Bildausschnitt.](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/object-view-box_xywh.jpg)

Da das `<img>`-Element und die durch `object-view-box` definierte Viewbox in diesem Fall dieselben Abmessungen von 400 × 150 Pixeln haben, stimmen auch ihre Seitenverhältnisse überein. Das ersetzte Element wird daher weder skaliert noch verzerrt.

Ein gleichbleibendes {{Glossary("aspect_ratio", "Seitenverhältnis")}} verhindert, dass Bilder verzerrt werden. Mit `object-view-box` können Sie verschiedene Bildoperationen auch dann ausführen, wenn sich die extrinsische Größe und die Größe der Viewbox unterscheiden, ohne dass das ersetzte Element beim Vergrößern oder Verkleinern verzerrt wird.

## Vergrößern und Verkleinern

Wenn Sie die Viewbox und damit den angezeigten Bereich des ersetzten Elements verkleinern, wird der Inhalt stärker vergrößert: Ein kleinerer Inhaltsbereich wird auf die Abmessungen des HTML-Elements gestreckt. Eine größere Viewbox bewirkt dagegen eine Verkleinerung.

Dieses Beispiel zeigt, wie Sie mit `object-view-box` einen Ausschnitt eines ersetzten Elements innerhalb eines HTML-Elements mit fester Größe vergrößern und verkleinern. Als Mittelpunkt des Zoom-Effekts dient das Auge des Leoparden in einem sehr großen Bild.

### HTML

Wir fügen ein {{htmlelement("img")}}-Element sowie ein {{htmlelement("input")}}-Element vom Typ [`range`](/de/docs/Web/HTML/Reference/Elements/input/range) mit einem zugehörigen {{htmlelement("label")}} hinzu. Die natürlichen Abmessungen beziehungsweise die intrinsische Größe des ursprünglichen Leopardenbildes betragen `1244px` in der Breite und `416px` in der Höhe. Das {{Glossary("aspect_ratio", "Seitenverhältnis")}} beträgt `3:1`.

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

Wir definieren die benutzerdefinierte Eigenschaft `--box-size`, die in der Funktion {{cssxref("basic-shape/xywh", "xywh()")}} für Höhe und Breite verwendet wird. So entsteht eine quadratische Viewbox mit einem Seitenverhältnis von `1:1`. Der Versatzpunkt der Viewbox, der Mittelpunkt unseres Zoom-Effekts, wird für die `x`-Koordinate auf `500px` und für die `y`-Koordinate auf `30px` festgelegt. Das entspricht der linken oberen Ecke des rechten Auges des Leoparden.

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

Wir fügen dem Schieberegler einen Event-Listener hinzu, der den Wert der benutzerdefinierten Eigenschaft `--box-size` aktualisiert, wenn er bedient wird. Damit eine Bewegung des Schiebereglers nach rechts den Inhalt stärker vergrößert, wird sein Wert umgekehrt, indem er von `500px` abgezogen wird: Eine kleinere Viewbox verstärkt den Vergrößerungseffekt.

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

Bewegen Sie den Schieberegler nach rechts, um den Inhalt stärker zu vergrößern, und nach links, um die Vergrößerung zu verringern. Der Schieberegler beeinflusst nur die Abmessungen der Viewbox. Die x- und y-Werte, die den Ursprungspunkt der Viewbox festlegen, bleiben ebenso unverändert wie die Größe des `<img>`-Elements.

## Ein Bild verschieben

Sie können einen Verschiebeeffekt erzeugen, indem Sie die Koordinaten der Viewbox – die Komponenten `x` und `y` der Funktion `xywh()` – ändern, während die Größe des sichtbaren Ausschnitts gleich bleibt. Wenn Sie beispielsweise die Abmessungen der Viewbox beibehalten und nur ihre horizontale Position, also den Parameter `x`, ändern, entsteht ein horizontaler Verschiebeeffekt.

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

{{ EmbedLiveSample("panning_an_image", "", 450) }}

Bewegen Sie den Schieberegler. Beachten Sie, wie das Erhöhen und Verringern des `x`-Werts der Funktion `xywh()` einen Verschiebeeffekt erzeugt.

## Siehe auch

- {{cssxref("object-view-box")}}
- {{cssxref("object-fit")}}
- {{cssxref("object-position")}}
- {{cssxref("background-size")}}
- [Seitenverhältnisse verstehen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
