---
title: Verwenden der CSS-Eigenschaft object-view-box
short-title: Verwendung von object-view-box
slug: Web/CSS/CSS_images/Using_object-view-box
l10n:
  sourceCommit: fafde2d3fdc5dd27f070922e00a22d8dc9b1a3f0
---

Die {{cssxref("object-view-box")}} Eigenschaft kann genutzt werden, um einen Viewbox innerhalb von {{Glossary("replaced_elements", "ersetzten Elementen")}} zu definieren, was die Anzeige nur eines Abschnitts des ersetzten Inhalts ermöglicht. Der angezeigte Unterabschnitt des Elements kann vergrößert, verkleinert oder in Originalgröße angezeigt werden, während das intrinsische {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Inhalts beibehalten wird. In diesem Leitfaden untersuchen wir diese Eigenschaft, vergleichen sie mit der ähnlichen {{cssxref("object-fit")}} Eigenschaft und erforschen ihre Funktionalität durch Vergrößern, Verkleinern und Verschieben innerhalb eines Elements.

## Intrinsische Größe, extrinsische Größe und `object-fit`

Jedes ersetzte Element hat zwei Größen: eine {{Glossary("extrinsic_size", "extrinsische Größe")}} und eine {{Glossary("intrinsic_size", "intrinsische Größe")}}.

Die extrinsische Größe ist die Dimension des HTML-Elements, in dem der Inhalt gerendert wird, basierend auf den Box- und visuellen Formatierungsmodellen. Das [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) und das [visuelle Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model) bestimmen die Größe gerenderter Elemente basierend auf Inhalt, HTML-Attributen, angewendetem CSS auf die Elemente und ihre Vorfahren sowie der Viewport-Größe.

Die intrinsische Größe ist die tatsächliche Größe des Inhalts selbst; die Größe des Elements, wenn keine Stile angewendet werden und ohne Layout-Beschränkungen. Obwohl die intrinsischen und extrinsischen Größen nicht gleich sein müssen, ist es im Allgemeinen wichtig, das intrinsische {{Glossary("aspect_ratio", "Seitenverhältnis")}} eines ersetzten Elements beizubehalten.

## `object-view-box` versus `object-fit`

CSS hat viele Eigenschaft für Größen. Bei der Größenbestimmung von ersetzten Elementen ermöglicht uns die [`object-fit`](/de/docs/Web/CSS/Reference/Properties/object-fit) Eigenschaft, in gewissem Maße zu kontrollieren, wie ersetzte Elemente innerhalb eines definierten Box gerendert werden. Zum Beispiel wird im folgenden Screenshot ein 1200 x 400 Bild unter Verwendung eines {{htmlelement("img")}} Elements angezeigt. Das `<img>` Element ist auf 400 x 200 dimensioniert. Der Bildinhalt wird mit der Deklaration `object-fit: none;` positioniert.

![Ein Bild, das extrinsische und intrinsische Bildgrößen demonstriert; der mittlere 400 x 200 Abschnitt eines viel größeren 1200 x 400 Bildes ist im 400 x 200 Viewbox sichtbar, der die Größe des Elements ist, das das Bild anzeigt.](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/extrinsic-intrinsic_sizes.jpg)

Die `object-view-box` Eigenschaft ist flexibler als die `object-fit` Eigenschaft und in der Lage, mehr Aufgaben zu erledigen. Zum Beispiel kann sie verwendet werden, um Bilder zu zuschneiden, zu zoomen und zu verschieben. Die Eigenschaft legt den sichtbaren Bereich (Viewbox) fest, der definiert, welcher Teil des Inhalts gezeigt werden soll und wie er in die extrinsische Größe passt. Der Viewbox-Wert enthält ein Rechteck und seine Position relativ zum intrinsischen Bereich des Inhalts, aber die _physische Größe des Viewbox bleibt gleich der extrinsischen Größe_. Der Viewbox markiert den Bereich im Inhalt, der angezeigt werden soll, und dann wird der Inhaltsbereich angepasst, um den extrinsischen Abmessungen zu entsprechen, die in das HTML-Element passen.

Im folgenden Bild haben wir dasselbe Leopardenbild in einem 400 x 150 Bild-Element. Diesmal haben wir jedoch die `object-view-box` Eigenschaft verwendet, um den Teil des Bildes zuzuschneiden, der die Augen des Leoparden zeigt.

![Das Leopardenbild, zugeschnitten mit der object-view-box Eigenschaft, mit einem 400px x 150px Viewbox, der einen unvergrößerten Abschnitt des Bildes zeigt.](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/object-view-box_xywh.jpg)

In diesem Fall, da die Abmessungen des `<img>` Elements und des von der `object-view-box` Eigenschaft definierten Viewbox gleich sind, d.h. 400 x 150 Pixel, sind die Seitenverhältnisse gleich, und das ersetzte Element wird weder skaliert noch verzerrt.

Das Beibehalten desselben {{Glossary("aspect_ratio", "Seitenverhältnisses")}} verhindert Bildverzerrungen. Mit `object-view-box` können wir verschiedene Bildoperationen ausführen, während wir unterschiedliche extrinsische und Viewbox-Größen haben, ohne das ersetzte Element zu verzerren, da es sich vergrößert und verkleinert.

## Raus- und Reinzoomen

Das Reduzieren der Größe des Viewbox, des angezeigten Bereichs des ersetzten Elements, erhöht den Zoom-in-Effekt, da kleinerer Inhalt gestreckt wird, um die Abmessungen des HTML-Elements zu füllen. Eine Verringerung erzeugt einen Zoom-out-Effekt.

Dieses Beispiel demonstriert die Verwendung der `object-view-box` Eigenschaft, um einen Abschnitt eines ersetzten Elements in einem statisch dimensionierten HTML-Element hinein- und herauszuzoomen. In diesem Fall dient das Auge des Leoparden in einem sehr großen Bild als Fokuspunkt des Zoom-Effekts.

### HTML

Wir fügen ein {{htmlelement("img")}} Element und ein [`range`](/de/docs/Web/HTML/Reference/Elements/input/range) {{htmlelement("input")}} Element mit einem zugehörigen {{htmlelement("label")}} hinzu. Die natürlichen Abmessungen oder die intrinsische Größe des ursprünglichen Leopardenbildes sind `1244px` breit und `416px` hoch, mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} von `3:1`.

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

Wir definieren eine `--box-size` benutzerdefinierte Eigenschaft, die als Höhe und Breite in der {{cssxref("basic-shape/xywh", "xywh()")}} Funktion verwendet wird und eine quadratische Viewbox mit einem Seitenverhältnis von `1:1` erstellt. Der Ausgleichspunkt des Viewbox, der Brennpunkt in unserem Zoom-Effekt, ist auf `500px` für die `x` Koordinate und `30px` für die `y` Koordinate eingestellt, was der oberen linken Ecke des rechten Auges des Leoparden entspricht.

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

Wir fügen einen Ereignislistener zu dem Schieberegler hinzu, der den Wert der `--boxSize` benutzerdefinierten Eigenschaft aktualisiert, wenn der Benutzer damit interagiert. Um den Zoom-in-Effekt zu erhöhen, wenn der Schieberegler nach rechts bewegt wird, wird der Wert des Schiebereglers invertiert, indem er von `500px` abgezogen wird, da das Reduzieren der Viewbox-Größe den Zoom-in-Effekt erhöht.

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

{{ EmbedLiveSample("Raus- und Reinzoomen", "", 480) }}

Bewegen Sie den Schieberegler nach rechts, um den Zoom-in-Effekt zu erhöhen, und nach links, um ihn zu verringern. Der Schieberegler beeinflusst nur die Abmessungen des Viewbox, während die x- und y-Werte, der Ursprungspunkt des Viewbox, konstant bleiben. Die Größe des `<img>` Elements bleibt ebenfalls konstant.

## Panning eines Bildes

Wir können einen Pan-Effekt erzeugen, indem wir die Koordinaten des Viewbox-Fensters ändern, die `x` und `y` Komponenten der `xywh()` Funktion, während die Größe des sichtbaren Abschnitts konstant bleibt. Zum Beispiel, indem wir die Viewbox-Abmessungen konstant halten und nur die horizontale Position - den `x` Parameter - ändern, können wir einen horizontalen Pan-Effekt erzeugen.

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

{{ EmbedLiveSample("Pan-Effekt", "", 450) }}

Bewegen Sie den Schieberegler. Beachten Sie, wie das Erhöhen und Verringern des `x`-Werts der `xywh()` Funktion einen Pan-Effekt erzeugt.

## Siehe auch

- {{cssxref("object-view-box")}}
- {{cssxref("object-fit")}}
- {{cssxref("object-position")}}
- {{cssxref("background-size")}}
- [Verständnis des Seitenverhältnisses](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
