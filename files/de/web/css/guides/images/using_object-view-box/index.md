---
title: Verwendung der CSS-Eigenschaft object-view-box
short-title: Verwendung von object-view-box
slug: Web/CSS/Guides/Images/Using_object-view-box
l10n:
  sourceCommit: ef62db148244eb03c862aa7f1b3865a3f727deaf
---

Die {{cssxref("object-view-box")}}-Eigenschaft kann verwendet werden, um einen Viewbox innerhalb von {{Glossary("replaced_elements", "ersetzten Elementen")}} zu definieren, sodass nur ein Abschnitt des ersetzten Inhalts angezeigt wird. Der angezeigte Unterabschnitt des Elements kann als vergrößert, verkleinert oder in Originalgröße dargestellt werden, während das intrinsische {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Inhalts beibehalten wird. In diesem Leitfaden untersuchen wir diese Eigenschaft, vergleichen sie mit der ähnlichen {{cssxref("object-fit")}}-Eigenschaft und erkunden ihre Funktionalität durch Ein- und Auszoomen sowie Schwenken über ein Element.

## Intrinsische Größe, extrinsische Größe und `object-fit`

Jedes ersetzte Element hat zwei Größen; eine {{Glossary("extrinsic_size", "extrinsische Größe")}} und eine {{Glossary("intrinsic_size", "intrinsische Größe")}}.

Die extrinsische Größe ist die Dimension des HTML-Elements, in dem der Inhalt basierend auf dem Box- und dem visuellen Formatierungsmodell gerendert wird. Das [Boxmodell](/de/docs/Web/CSS/Guides/Box_model/Introduction) und das [visuelle Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model) bestimmen die Größe der gerenderten Elemente basierend auf Inhalt, HTML-Attributen, auf die Elemente angewandtem CSS und deren Vorfahren sowie der Größe des Ansichtsfensters.

Die intrinsische Größe ist die tatsächliche Größe des Inhalts selbst; die Größe, die das Element hat, wenn keine Stile angewandt sind und ohne jegliche Layoutbeschränkungen. Während die intrinsische und extrinsische Größe nicht gleich sein müssen, ist es im Allgemeinen wichtig, das intrinsische {{Glossary("aspect_ratio", "Seitenverhältnis")}} eines ersetzten Elements beizubehalten.

## `object-view-box` versus `object-fit`

CSS hat viele Größenangaben. Wenn es darum geht, ersetzte Elemente zu dimensionieren, ermöglicht uns die {{cssxref("object-fit")}}-Eigenschaft, bis zu einem gewissen Grad zu steuern, wie ersetzte Elemente innerhalb eines definierten Box gerendert werden. Beispielsweise wird auf dem folgenden Screenshot ein 1200 x 400 Bild mithilfe eines {{htmlelement("img")}}-Elements angezeigt. Das `<img>`-Element ist auf 400 x 200 dimensioniert. Der Bildinhalt wird mit der `object-fit: none;`-Deklaration positioniert.

![Ein Bild, das extrinsische und intrinsische Bildgrößen demonstriert; der zentrale 400 mal 200 Abschnitt eines viel größeren 1200 mal 400 Bildes ist in der 400 mal 200 Ansichtbox zu sehen, die die Größe des Elements ist, das das Bild anzeigt.](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/extrinsic-intrinsic_sizes.jpg)
Die `object-view-box`-Eigenschaft ist flexibler als die `object-fit`-Eigenschaft und ist in der Lage, mehr Dinge zu tun. Zum Beispiel kann sie verwendet werden, um Bilder zuzuschneiden, zu zoomen und zu schwenken. Die Eigenschaft legt den sichtbaren Bereich (Viewbox) fest, der definiert, welcher Teil des Inhalts angezeigt werden soll und wie er in die extrinsische Größe passt. Der Viewbox-Wert enthält ein Rechteck und seine Position relativ zum intrinsischen Bereich des Inhalts, aber die _physikalische Größe des Viewbox bleibt gleich der extrinsischen Größe_. Der Viewbox markiert den Bereich im Inhalt, der angezeigt werden soll, und dann wird der Inhaltsbereich so transformiert, dass er den extrinsischen Abmessungen entspricht, die in das HTML-Element passen.

Im folgenden Bild haben wir dasselbe Leopardenbild in einem 400 x 150 Bild-Element. Diesmal haben wir jedoch die `object-view-box`-Eigenschaft verwendet, um den Teil des Bildes freizustellen, der die Augen des Leoparden zeigt.

![Das Leopardenbild, das mit der object-view-box-Eigenschaft zugeschnitten wurde, mit einer 400px mal 150px-Ansichtbox, die einen unskalierten Abschnitt des Bildes anzeigt](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/object-view-box_xywh.jpg)

In diesem Fall sind die Abmessungen des `<img>`-Elements und des durch die `object-view-box`-Eigenschaft definierten Viewbox gleich, d.h. 400 x 150 Pixel, die Seitenverhältnisse beider sind gleich, und das ersetzte Element wird weder skaliert noch verzerrt.

Das Beibehalten des gleichen {{Glossary("aspect_ratio", "Seitenverhältnisses")}} verhindert die Verzerrung von Bildern. Mit `object-view-box` können wir verschiedene Bildoperationen durchführen, während wir unterschiedliche extrinsische und Viewbox-Größen haben, ohne das ersetzte Element zu verzerren, wenn es vergrößert oder verkleinert wird.

## Ein- und Auszoomen

Das Reduzieren der Viewbox-Größe, des Bereichs des ersetzten Elements, das angezeigt wird, erhöht den Zoom-in-Effekt, da kleinerer Inhalt gedehnt wird, um in die Abmessungen des HTML-Elements zu passen. Das Verringern führt zu einem Zoom-out-Effekt.

Dieses Beispiel demonstriert die Verwendung der `object-view-box`-Eigenschaft, um einen Abschnitt eines ersetzten Elements in einem statisch dimensionierten HTML-Element ein- und auszuzoomen. In diesem Fall dient das Auge des Leoparden innerhalb eines sehr großen Bildes als Schwerpunkt des Zoom-Effekts.

### HTML

Wir fügen ein {{htmlelement("img")}}-Element und ein [`range`](/de/docs/Web/HTML/Reference/Elements/input/range) {{htmlelement("input")}}-Element mit einem zugehörigen {{htmlelement("label")}} hinzu. Die natürlichen Abmessungen oder die intrinsische Größe des ursprünglichen Leopardenbildes sind `1244px` breit und `416px` hoch, mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} von `3:1`.

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

Wir definieren eine `--box-size` benutzerdefinierte Eigenschaft, die als Höhe und Breite in der {{cssxref("basic-shape/xywh", "xywh()")}}-Funktion verwendet wird, um eine quadratische Viewbox mit einem Seitenverhältnis von `1:1` zu erstellen. Der Offset-Punkt der Viewbox, der Brennpunkt in unserem Zoom-Effekt, ist auf `500px` für die `x`-Koordinate und auf `30px` für die `y`-Koordinate gesetzt, was der oberen linken Ecke des rechten Auges des Leoparden entspricht.

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

Wir fügen dem Schieberegler einen Ereignis-Listener hinzu, der den Wert der benutzerdefinierten Eigenschaft `--box-size` aktualisiert, wenn der Benutzer damit interagiert. Um den Zoom-in-Effekt zu erhöhen, wenn der Schieberegler nach rechts bewegt wird, wird der Wert des Schiebereglers umgekehrt, indem er von `500px` subtrahiert wird, da das Reduzieren der Viewbox-Größe den Zoom-in-Effekt erhöht.

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

Bewegen Sie den Schieberegler nach rechts, um den Zoom-in-Effekt zu erhöhen, und nach links, um ihn zu verringern. Der Schieberegler beeinflusst nur die Abmessungen der Viewbox, während die x- und y-Werte, der Ursprungspunkt des Viewbox, konstant bleiben. Die Größe des `<img>`-Elements bleibt ebenfalls konstant.

## Panoramabewegung eines Bildes

Wir können einen Panoramabewegungs-Effekt erzeugen, indem wir die Koordinaten des Viewbox-Fensters, die `x`- und `y`-Komponenten der `xywh()`-Funktion, ändern, während die Größe des sichtbaren Abschnitts konstant bleibt. Zum Beispiel, indem wir die Viewbox-Abmessungen konstant halten und nur die horizontale Position ändern - den `x`-Parameter - können wir einen horizontalen Panoramabewegungs-Effekt erzeugen.

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

Bewegen Sie den Schieberegler. Beachten Sie, wie das Erhöhen und Verringern des `x`-Wertes der `xywh()`-Funktion einen Panoramabewegungs-Effekt erzeugt.

## Siehe auch

- {{cssxref("object-view-box")}}
- {{cssxref("object-fit")}}
- {{cssxref("object-position")}}
- {{cssxref("background-size")}}
- [Verständnis des Seitenverhältnisses](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
