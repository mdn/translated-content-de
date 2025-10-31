---
title: Verwenden der CSS-Eigenschaft object-view-box
short-title: Verwendung von object-view-box
slug: Web/CSS/CSS_images/Using_object-view-box
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die Eigenschaft {{cssxref("object-view-box")}} kann verwendet werden, um einen Sichtbereich innerhalb von {{Glossary("replaced_elements", "ersetzten Elementen")}} zu definieren, der die Anzeige nur eines Abschnitts des ersetzten Inhalts ermöglicht. Der dargestellte Teil des Elements kann vergrößert, verkleinert oder in ursprünglicher Größe wiedergegeben werden, während das intrinsische {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Inhalts beibehalten wird. In diesem Leitfaden untersuchen wir diese Eigenschaft, vergleichen sie mit der ähnlichen Eigenschaft {{cssxref("object-fit")}} und erforschen ihre Funktionalität durch Vergrößern, Verkleinern und Verschieben innerhalb eines Elements.

## Intrinsische Größe, extrinsische Größe und `object-fit`

Jedes ersetzte Element hat zwei Größen: eine {{Glossary("extrinsic_size", "extrinsische Größe")}} und eine {{Glossary("intrinsic_size", "intrinsische Größe")}}.

Die extrinsische Größe ist die Dimension des HTML-Elements, in dem der Inhalt basierend auf den Box- und visuellen Formatierungsmodellen dargestellt wird. Das [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) und das [visuelle Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model) bestimmen die Größe der dargestellten Elemente basierend auf Inhalt, HTML-Attributen, auf die Elemente und ihre Vorfahren angewendeten CSS und der Größe des Ansichtsfensters.

Die intrinsische Größe ist die tatsächliche Größe des Inhalts selbst; die Größe, die das Element hat, wenn keine Styles angewendet und ohne Layoutbeschränkungen. Während die intrinsischen und extrinsischen Größen nicht gleich sein müssen, ist es im Allgemeinen wichtig, das intrinsische {{Glossary("aspect_ratio", "Seitenverhältnis")}} eines ersetzten Elements beizubehalten.

## `object-view-box` versus `object-fit`

CSS bietet viele Größeneigenschaften. Bei der Größenbestimmung von ersetzten Elementen ermöglicht uns die Eigenschaft [`object-fit`](/de/docs/Web/CSS/Reference/Properties/object-fit), in gewissem Umfang zu kontrollieren, wie ersetzte Elemente innerhalb eines definierten Rahmens dargestellt werden. Zum Beispiel zeigt der folgende Screenshot ein 1200 x 400 großes Bild, das mit einem {{htmlelement("img")}}-Element angezeigt wird. Das `<img>`-Element ist auf 400 x 200 dimensioniert. Der Bildinhalt wird mittels der `object-fit: none;` Deklaration positioniert.

![Ein Bild, das extrinsische und intrinsische Bildgrößen zeigt; der mittlere 400 x 200 Abschnitt eines wesentlich größeren 1200 x 400 Bildes ist in dem 400 x 200 großen Sichtbereich sichtbar, der die Größe des Elements hat, das das Bild anzeigt.](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/extrinsic-intrinsic_sizes.jpg)
Die Eigenschaft `object-view-box` ist flexibler als die Eigenschaft `object-fit` und kann mehr Dinge erledigen. Zum Beispiel kann sie zum Zuschneiden, Zoomen und Verschieben von Bildern verwendet werden. Die Eigenschaft legt den sichtbaren Bereich (Sichtbereich) fest, der bestimmt, welcher Teil des Inhalts angezeigt werden soll und wie er in die extrinsische Größe passt. Der Wert des Sichtbereichs enthält ein Rechteck und seine Position relativ zum intrinsischen Bereich des Inhalts, aber die _physische Größe des Sichtbereichs bleibt gleich der extrinsischen Größe_. Der Sichtbereich markiert den Bereich im Inhalt, der angezeigt werden soll, und dann wird der Inhaltsbereich transformiert, um den extrinsischen Dimensionen zu entsprechen, die in das HTML-Element passen.

Im folgenden Bild haben wir das gleiche Leopardenbild in einem 400 x 150 großen Bild-Element. Dieses Mal haben wir jedoch die Eigenschaft `object-view-box` verwendet, um den Teil des Bildes mit den Augen des Leoparden zuzuschneiden.

![Das Leopardenbild, das mit der Eigenschaft object-view-box zugeschnitten wurde, mit einem 400px mal 150px Sichtbereich, der einen unskalierten Abschnitt des Bildes zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/object-view-box_xywh.jpg)

In diesem Fall sind die Abmessungen des `<img>`-Elements und des durch die `object-view-box`-Eigenschaft definierten Sichtbereichs gleich, d.h. 400 x 150 Pixel, was bedeutet, dass die Seitenverhältnisse beider gleich sind und das ersetzte Element weder skaliert noch verzerrt ist.

Das Beibehalten des gleichen {{Glossary("aspect_ratio", "Seitenverhältnisses")}} verhindert die Verzerrung des Bildes. Mit `object-view-box` können wir verschiedene Bildoperationen durchführen, während unterschiedliche extrinsische und Sichtbereichsgrößen verwendet werden, ohne das ersetzte Element zu verzerren, während es vergrößert und verkleinert wird.

## Vergrößern und Verkleinern

Die Reduzierung der Größe des Sichtbereichs, des angezeigten Bereichs des ersetzten Elements, erhöht den Vergrößerungseffekt, da kleinerer Inhalt gestreckt wird, um in die Dimensionen des HTML-Elements zu passen. Seine Verringerung bewirkt einen Zoom-Out-Effekt.

Dieses Beispiel demonstriert die Verwendung der `object-view-box`-Eigenschaft, um einen Abschnitt eines ersetzten Elements innerhalb eines statischen HTML-Elements zu vergrößern und zu verkleinern. In diesem Fall dient das Auge des Leoparden in einem sehr großen Bild als Schwerpunkt des Zoomeffekts.

### HTML

Wir fügen ein {{htmlelement("img")}}-Element und ein [`range`](/de/docs/Web/HTML/Reference/Elements/input/range) {{htmlelement("input")}}-Element mit einem zugeordneten {{htmlelement("label")}} ein. Die natürlichen Abmessungen oder die intrinsische Größe des ursprünglichen Leopardenbildes betragen `1244px` in der Breite und `416px` in der Höhe, mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} von `3:1`.

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

Wir definieren eine benutzerdefinierte Eigenschaft `--box-size`, die als Höhe und Breite in der {{cssxref("basic-shape/xywh", "xywh()")}}-Funktion verwendet wird, um einen quadratischen Sichtbereich mit einem Seitenverhältnis von `1:1` zu erstellen. Der Ausgangspunkt des Sichtbereichs, der Brennpunkt unseres Zoomeffekts, wird für die `x`-Koordinate auf `500px` und für die `y`-Koordinate auf `30px` gesetzt, was der oberen linken Ecke des rechten Auges des Leoparden entspricht.

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

Wir fügen dem Schieberegler einen Ereignislistener hinzu, der den Wert der benutzerdefinierten Eigenschaft `--boxSize` aktualisiert, wenn der Benutzer damit interagiert. Um den Vergrößerungseffekt zu erhöhen, wenn der Schieberegler nach rechts verschoben wird, wird der Wert des Schiebereglers invertiert, indem er von `500px` subtrahiert wird, da das Reduzieren der Sichtbereichsgröße den Vergrößerungseffekt erhöht.

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

Bewegen Sie den Schieberegler nach rechts, um den Vergrößerungseffekt zu erhöhen und nach links, um ihn zu verringern. Der Schieberegler beeinflusst nur die Größe des Sichtbereichs, während die x- und y-Werte, der Ursprungspunkt des Sichtbereichs, konstant bleiben. Auch die Größe des `<img>`-Elements bleibt konstant.

## Verschieben eines Bildes

Wir können einen Verschiebungseffekt erzeugen, indem wir die Koordinaten des Sichtbereichsfensters, die `x`- und `y`-Komponenten der `xywh()`-Funktion, ändern, während die Größe des sichtbaren Abschnitts konstant bleibt. Zum Beispiel können wir durch Beibehalten der Dimensionen des Sichtbereichs und Ändern nur der horizontalen Position - des `x`-Parameters - einen horizontalen Verschiebungseffekt erzeugen.

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

Bewegen Sie den Schieberegler. Beachten Sie, wie das Erhöhen und Verringern des `x`-Wertes der `xywh()`-Funktion einen Verschiebungseffekt erzeugt.

## Siehe auch

- {{cssxref("object-view-box")}}
- {{cssxref("object-fit")}}
- {{cssxref("object-position")}}
- {{cssxref("background-size")}}
- [Verstehen des Seitenverhältnisses](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
