---
title: Verwendung der CSS-Eigenschaft object-view-box
short-title: Verwendung von object-view-box
slug: Web/CSS/Guides/Images/Using_object-view-box
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die {{cssxref("object-view-box")}}-Eigenschaft kann verwendet werden, um ein Viewbox innerhalb von {{Glossary("replaced_elements", "ersetzten Elementen")}} zu definieren, wodurch nur ein Abschnitt des ersetzten Inhalts angezeigt wird. Der angezeigte Unterabschnitt des Elements kann im Originalmaßstab, vergrößert oder verkleinert dargestellt werden, während das intrinsische {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Inhalts beibehalten wird. In diesem Leitfaden untersuchen wir diese Eigenschaft, vergleichen sie mit der ähnlichen {{cssxref("object-fit")}}-Eigenschaft und erkunden ihre Funktionalität durch Vergrößern, Verkleinern und Verschieben über ein Element.

## Intrinsische Größe, extrinsische Größe und `object-fit`

Jedes ersetzte Element hat zwei Größen: eine {{Glossary("extrinsic_size", "extrinsische Größe")}} und eine {{Glossary("intrinsic_size", "intrinsische Größe")}}.

Die extrinsische Größe ist die Dimension des HTML-Elements, in dem der Inhalt basierend auf den Box- und visuellen Formatierungsmodellen gerendert wird. Das [Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction) und das [visuelle Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model) bestimmen die Größe der gerenderten Elemente basierend auf dem Inhalt, HTML-Attributen, auf die Elemente und ihre Vorfahren angewendeten CSS und der Viewport-Größe.

Die intrinsische Größe ist die tatsächliche Größe des Inhalts selbst; die Größe, die das Element hat, wenn keine Stile angewendet werden und keine Layout-Einschränkungen vorliegen. Auch wenn die intrinsischen und extrinsischen Größen nicht identisch sein müssen, ist es im Allgemeinen wichtig, das intrinsische {{Glossary("aspect_ratio", "Seitenverhältnis")}} eines ersetzten Elements beizubehalten.

## `object-view-box` versus `object-fit`

CSS verfügt über viele Größenangaben. Bei der Größenbestimmung ersetzter Elemente ermöglicht uns die [`object-fit`](/de/docs/Web/CSS/Reference/Properties/object-fit)-Eigenschaft, in gewissem Maße zu steuern, wie ersetzte Elemente innerhalb eines definierten Rahmens gerendert werden. Zum Beispiel wird im folgenden Screenshot ein 1200 x 400 Bild mithilfe eines {{htmlelement("img")}}-Elements angezeigt. Das `<img>`-Element ist auf 400 x 200 dimensioniert. Der Bildinhalt wird mithilfe der `object-fit: none;` Deklaration positioniert.

![Ein Bild, das extrinsische und intrinsische Bildgrößen zeigt; der zentrale 400 mal 200 Abschnitt eines viel größeren 1200 mal 400 Bildes ist im 400 mal 200 Viewbox sichtbar, die die Größe des Elements hat, das das Bild anzeigt.](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/extrinsic-intrinsic_sizes.jpg)
Die `object-view-box`-Eigenschaft ist flexibler als die `object-fit`-Eigenschaft und kann mehr Dinge tun. Zum Beispiel kann sie verwendet werden, um Bilder zu beschneiden, zu zoomen und zu verschieben. Die Eigenschaft setzt den sichtbaren Bereich (Viewbox), der festlegt, welcher Teil des Inhalts angezeigt werden soll und wie er innerhalb der extrinsischen Größe passt. Der Viewbox-Wert enthält ein Rechteck und dessen Position relativ zum intrinsischen Bereich des Inhalts, aber die _physische Größe des Viewbox bleibt gleich der extrinsischen Größe_. Die Viewbox markiert den im Inhalt anzuzeigenden Bereich, und dann wird der Inhaltsbereich so transformiert, dass er den extrinsischen Dimensionen entspricht, die in das HTML-Element passen.

Im folgenden Bild haben wir das gleiche Leopardenbild in einem 400 x 150 Bild-Element. Diesmal haben wir jedoch die `object-view-box`-Eigenschaft verwendet, um den Abschnitt des Bildes zu beschneiden, der die Augen des Leoparden zeigt.

![Das Leopardenbild, das mit der object-view-box-Eigenschaft beschnitten wurde, mit einem 400px mal 150px Viewbox, der einen unskalierten Abschnitt des Bildes anzeigt](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/object-view-box_xywh.jpg)

In diesem Fall, da die Abmessungen des `<img>`-Elements und des durch die `object-view-box`-Eigenschaft definierten Viewbox gleich sind, also 400 x 150 Pixel, sind die Seitenverhältnisse von beiden gleich und das ersetzte Element wird weder skaliert noch verzerrt.

Das Beibehalten desselben {{Glossary("aspect_ratio", "Seitenverhältnisses")}} verhindert Bildverzerrungen. Mit `object-view-box` können wir verschiedene Bildoperationen durchführen, während wir unterschiedliche extrinsische und Viewbox-Größen haben, ohne das ersetzte Element zu verzerren, wenn es hoch- und runterskaliert wird.

## Vergrößern und Verkleinern

Das Reduzieren der Viewbox-Größe, des Bereichs des angezeigten ersetzten Elements, erhöht den Vergrößerungseffekt, da kleinerer Inhalt gedehnt wird, um in die Dimensionen des HTML-Elements zu passen. Eine Vergrößerung ergibt einen Verkleinerungseffekt.

Dieses Beispiel demonstriert die Verwendung der `object-view-box`-Eigenschaft, um einen Abschnitt eines ersetzten Elements innerhalb eines statisch dimensionierten HTML-Elements zu vergrößern und zu verkleinern. In diesem Fall dient das Auge des Leoparden innerhalb eines sehr großen Bildes als Brennpunkt des Vergrößerungseffekts.

### HTML

Wir fügen ein {{htmlelement("img")}}-Element und ein [`range`](/de/docs/Web/HTML/Reference/Elements/input/range) {{htmlelement("input")}}-Element mit einem zugehörigen {{htmlelement("label")}} ein. Die natürlichen Dimensionen oder intrinsische Größe des ursprünglichen Leopardenbildes sind `1244px` breit und `416px` hoch, mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} von `3:1`.

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

Wir definieren eine `--box-size`-benutzerdefinierte Eigenschaft, die als Höhe und Breite in der {{cssxref("basic-shape/xywh", "xywh()")}}-Funktion verwendet wird, wodurch ein quadratischer Viewbox mit einem Seitenverhältnis von `1:1` entsteht. Der Offsetpunkt des Viewbox, der Brennpunkt in unserem Vergrößerungseffekt, wird auf `500px` für die `x`-Koordinate und `30px` für die `y`-Koordinate gesetzt, was der oberen linken Ecke des rechten Auges des Leoparden entspricht.

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

Wir fügen einen Ereignislistener zum Schieberegler hinzu, der den Wert der `--boxSize`-benutzerdefinierten Eigenschaft aktualisiert, wenn der Benutzer damit interagiert. Um den Vergrößerungseffekt zu erhöhen, wenn der Schieberegler nach rechts bewegt wird, wird der Wert des Schiebereglers invertiert, indem er von `500px` subtrahiert wird, da die Verringerung der Viewbox-Größe den Vergrößerungseffekt erhöht.

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

Bewegen Sie den Schieberegler nach rechts, um den Vergrößerungseffekt zu erhöhen, und nach links, um ihn zu verringern. Der Schieberegler beeinflusst nur die Dimensionen des Viewbox, während die x- und y-Werte, der Ursprungspunkt der Viewbox, konstant bleiben. Die Größe des `<img>`-Elements bleibt ebenfalls konstant.

## Schwenken eines Bildes

Wir können einen Schwenkeffekt erzeugen, indem wir die Koordinaten des Viewbox-Fensters ändern, die `x`- und `y`-Komponenten der `xywh()`-Funktion, während wir die Größe des sichtbaren Abschnitts konstant halten. Zum Beispiel können wir, indem wir die Dimensionen des Viewbox konstant halten und nur die horizontale Position - den `x`-Parameter - ändern, einen horizontalen Schwenkeffekt erzeugen.

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

Bewegen Sie den Schieberegler. Beachten Sie, wie das Erhöhen und Verringern des `x`-Werts der `xywh()`-Funktion einen Schwenkeffekt erzeugt.

## Siehe auch

- {{cssxref("object-view-box")}}
- {{cssxref("object-fit")}}
- {{cssxref("object-position")}}
- {{cssxref("background-size")}}
- [Seitenverhältnis verstehen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
