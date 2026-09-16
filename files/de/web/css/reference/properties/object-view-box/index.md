---
title: "`object-view-box` CSS property"
short-title: object-view-box
slug: Web/CSS/Reference/Properties/object-view-box
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`object-view-box`** definiert ein Rechteck als sichtbaren Bereich (Viewbox) innerhalb eines {{Glossary("replaced_elements", "ersetzten Elements")}}, wodurch der Inhalt des ersetzten Elements gezoomt oder verschoben werden kann. Sie funktioniert ähnlich wie das SVG-Attribut {{SVGAttr("viewBox")}}.

{{InteractiveExample("CSS Demo: object-view-box")}}

```css interactive-example-choice
object-view-box: inset(0 0);
```

```css interactive-example-choice
object-view-box: inset(20%);
```

```css interactive-example-choice
object-view-box: xywh(95px 20px 60px 60px);
```

```css interactive-example-choice
object-view-box: rect(110px 120px 200px 45px);
```

```css interactive-example-choice
object-view-box: none;
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/plumeria-146x200.jpg"
    alt="A close-up of red flowers and buds on a branch." />
</section>
```

```css interactive-example
#example-element {
  height: 100%;
  width: 100%;
  border: 2px dotted #888888;
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

## Syntax

```css
/* Keyword value */
object-view-box: none;

/* <basic-shape-rect> functions */
object-view-box: inset(20%);
object-view-box: inset(20% 30%);
object-view-box: inset(10px 0 25px 33px);
object-view-box: xywh(95px 20px 60px 60px);
object-view-box: rect(10px 30px 30px 10px);

/* Global values */
object-view-box: inherit;
object-view-box: initial;
object-view-box: revert;
object-view-box: revert-layer;
object-view-box: unset;
```

### Werte

- `none`
  - : Das Element hat keine Viewbox. Dies ist der Standardwert.

- [`<basic-shape-rect>`](/de/docs/Web/CSS/Reference/Values/basic-shape#syntax_for_rectangles_basic-shape-rect)
  - : Eine Funktion {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/xywh","xywh()")}} oder {{cssxref("basic-shape/rect","rect()")}}, die eine Viewbox für ein Element mit natürlichen Abmessungen (ersetzte Elemente) angibt. Andernfalls wird zu `none` aufgelöst.

## Beschreibung

Die Eigenschaft `object-view-box` kann verwendet werden, um {{Glossary("replaced_elements", "ersetzte Elemente")}}, einschließlich Bilder und Videos, zuzuschneiden oder ihre Größe zu ändern. Sie funktioniert, indem ein Abschnitt des Inhalts des ersetzten Elements in dem für dieses Element verfügbaren reservierten Platz angezeigt wird. Der angezeigte Abschnitt des ersetzten Elements wird durch den Wert der Eigenschaft definiert. Der verfügbare reservierte Platz wird durch die standardmäßige {{Glossary("extrinsic_size", "extrinsische Größe")}} des Elements bestimmt. Der angezeigte Teilabschnitt des Inhalts kann vergrößert, verkleinert oder in seiner ursprünglichen Größe dargestellt werden, wobei das intrinsische {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Inhalts beibehalten wird.

Der Eigenschaftswert ist ein `<basic-shape-rect>`, eine der auf die Definition einer rechteckigen Form beschränkten {{cssxref("basic-shape")}}-Funktionen. Beispielsweise kann der Wert eine Funktion {{cssxref("basic-shape/xywh","xywh()")}} sein:

```css
img {
  object-view-box: xywh(410px 0 400px 150px);
}
```

In diesem Fall liegt die obere linke Ecke des angezeigten Bildabschnitts, wie durch die x- und y-Koordinatenparameter definiert, `410px` vom linken Rand und `0` vom oberen Rand entfernt. Die Größe des angezeigten Abschnitts des Originalbildes beträgt `400px` Breite und `150px` Höhe; dies sind die Komponenten `w` und `h` der Funktion. Dieser 400 × 150 große Bildabschnitt wird in dem Platz angezeigt, der beim Layout der Seite für das Bild selbst reserviert wurde. Ob der angezeigte Inhaltsabschnitt seine ursprüngliche intrinsische Größe hat, vergrößert oder verkleinert wird, hängt davon ab, ob die Viewbox jeweils 400px × 150px groß, kleiner oder größer als die Größe des Bildelements ist.

![Das Leopardenbild, zugeschnitten mit der Eigenschaft object-view-box, mit einer 400px mal 150px großen Viewbox, die einen unskalierten Bildabschnitt anzeigt](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/object-view-box_xywh.jpg)

Da in diesem Fall die durch die Eigenschaft `object-view-box` definierte rechteckige Viewbox und der rechteckige Bereich des `<img>`-Elements gleich groß sind, also 400 × 150 Pixel, wird das ersetzte Element nicht skaliert.

Verringern Sie die Werte `w` und `h`, um einen Vergrößerungseffekt zu erzeugen; da der kleinere Bildabschnitt gestreckt wird, entsteht ein Vergrößerungseffekt.

Erhöhen Sie die Argumentwerte `w` und `h`, um einen Verkleinerungseffekt zu erzeugen; da der größere Bildabschnitt verkleinert wird, entsteht ein Verkleinerungseffekt.

Das Animieren der Koordinaten `x` und `y` erzeugt einen Verschiebungseffekt, indem die Viewbox des Elements bewegt wird, während das Element selbst an seiner ursprünglichen Position bleibt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel demonstriert die grundlegende Verwendung und die Auswirkungen der Eigenschaft `object-view-box` mit Beispielen, die die drei verschiedenen `<basic-shape-rect>`-Funktionen verwenden.

#### HTML

Wir haben drei nahezu identische {{htmlelement("img")}}-Elemente, die in {{htmlelement("figure")}}-Elemente eingeschlossen sind; der einzige Unterschied sind ihre Klassennamen.

```html
<figure>
  <img
    class="intrinsic"
    src="https://mdn.github.io/shared-assets/images/examples/painted-hand.jpg"
    alt="Original scale section of a painted hand" />
  <figcaption>intrinsic</figcaption>
</figure>
<figure>
  <img
    class="zoom-in"
    src="https://mdn.github.io/shared-assets/images/examples/painted-hand.jpg"
    alt="Zoomed in section of a painted hand" />
  <figcaption>zoomed in</figcaption>
</figure>
<figure>
  <img
    class="zoom-out"
    src="https://mdn.github.io/shared-assets/images/examples/painted-hand.jpg"
    alt="Zoomed out section of a painted hand" />
  <figcaption>zoomed out</figcaption>
</figure>
```

#### CSS

Wir formatieren alle Bilder mit derselben Breite und Höhe und legen dann für jede Klasse und damit für jedes Bild einen anderen Wert für `object-view-box` fest. Die intrinsische Größe des Bildes der bemalten Hand beträgt `298px` mal `332px`. Wir setzen {{cssxref("height")}} und {{cssxref("width")}} und legen damit die extrinsische Größe auf `200px` mal `200px` fest.

```css
img {
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
```

Wir legen drei verschiedene Eigenschaftswerte für `object-view-box` mithilfe von drei verschiedenen Formfunktionen fest. Der Wert der Funktion {{cssxref("basic-shape/xywh","xywh()")}} des Elements `intrinsic` zeigt einen quadratischen Abschnitt von `200px` des Bildinhalts an, beginnend bei `70px` vom linken und `90px` vom oberen Rand. Die Funktion {{cssxref("basic-shape/rect","rect()")}} des Elements `zoom-in` zeigt einen quadratischen Abschnitt von `160px` des ursprünglichen Elements an, der vom oberen Rand bei `110px` bis `270px` und vom linken Rand bei `90px` bis `250px` reicht. Die Funktion {{cssxref("basic-shape/inset","inset()")}} des ersetzten Elements `zoom-out` zeigt einen quadratischen Abschnitt von `298px` des ursprünglichen Elements an; sie zeigt die gesamte Breite des Bildes, während oben und unten jeweils 17px abgeschnitten werden.

```css
.intrinsic {
  object-view-box: xywh(70px 90px 200px 200px);
}

.zoom-in {
  object-view-box: rect(110px 250px 270px 90px);
}

.zoom-out {
  object-view-box: inset(17px 0 17px 0);
}
```

```css hidden
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

figure {
  display: inline-block;
  margin: 0;
}

figcaption {
  text-align: center;
}
```

#### Ergebnisse

{{ EmbedLiveSample("Basic usage", "", "300") }}

Die Version `intrinsic` zeigt einen unskalierten Abschnitt des Bildes. Die Version `zoom-in` zeigt einen kleineren quadratischen Abschnitt (`160px`) des Bildes, der vergrößert wird, um in die quadratische Viewbox von `200px` zu passen. Da der Abschnitt gestreckt wird, wirkt er vergrößert. Die Version `zoom-out` zeigt einen größeren quadratischen Abschnitt (`298px`) des Bildes, der verkleinert wird, um in die quadratische Viewbox von `200px` zu passen. Da der Abschnitt verkleinert wird, wirkt er verkleinert.

### Live-Vergrößerung mit der Eigenschaft object-view-box

Dieses Beispiel demonstriert die Verwendung der Eigenschaft `object-view-box`, um einen Abschnitt eines ersetzten Elements innerhalb eines HTML-Elements mit statischer Größe zu vergrößern und zu verkleinern. In diesem Fall dient das Auge des Leoparden innerhalb eines sehr großen Bildes als Brennpunkt des Vergrößerungseffekts.

#### HTML

Wir fügen ein {{htmlelement("img")}}-Element und ein {{htmlelement("input")}}-Element vom Typ [`range`](/de/docs/Web/HTML/Reference/Elements/input/range) mit einem zugehörigen {{htmlelement("label")}} hinzu. Die natürlichen Abmessungen beziehungsweise die intrinsische Größe des ursprünglichen Leopardenbildes betragen `1244px` Breite und `416px` Höhe, mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} von `3:1`.

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

#### CSS

Wir definieren eine benutzerdefinierte Eigenschaft `--box-size`, die als Höhe und Breite in der Funktion {{cssxref("basic-shape/xywh", "xywh()")}} verwendet wird, wodurch eine quadratische Viewbox mit einem Seitenverhältnis von `1:1` entsteht. Der Versatzpunkt der Viewbox, der Brennpunkt unseres Vergrößerungseffekts, wird für die Koordinate `x` auf `500px` und für die Koordinate `y` auf `30px` gesetzt. Dies entspricht der oberen linken Ecke des rechten Auges des Leoparden.

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

#### JavaScript

Wir fügen dem Schieberegler einen Event-Listener hinzu, der den Wert der benutzerdefinierten Eigenschaft `--boxSize` aktualisiert, wenn die Benutzerin oder der Benutzer damit interagiert. Um den Vergrößerungseffekt zu erhöhen, wenn der Schieberegler nach rechts bewegt wird, wird der Wert des Schiebereglers invertiert, indem er von `500px` subtrahiert wird, da eine Verringerung der Viewbox-Größe den Vergrößerungseffekt verstärkt.

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

#### Ergebnis

{{ EmbedLiveSample("Live zoom in using object-view-box property", "", 480) }}

Bewegen Sie den Schieberegler nach rechts, um den Vergrößerungseffekt zu verstärken, und nach links, um ihn zu verringern. Der Schieberegler beeinflusst nur die Abmessungen der Viewbox, während die x- und y-Werte, der Ursprungspunkt der Viewbox, konstant bleiben. Auch die Größe des `<img>`-Elements ändert sich nicht.

### Verschieben mit der Eigenschaft object-view-box

Dieses Beispiel demonstriert das Verschieben eines Bildes durch das Animieren des Eigenschaftswerts `object-view-box`.

#### HTML

Das HTML enthält ein einzelnes Bild.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="leopard" />
```

#### CSS

Wir definieren eine Bildgröße und halten die Abmessungen der Viewbox, die Komponenten `w` und `h` der Funktion `xywh()`, konstant, während wir die oberen und linken Positionen animieren und die Position der Parameter `x` und `y` über fünf Sekunden hinweg ändern.

```css
img {
  width: 350px;
  height: 350px;

  object-view-box: xywh(0 30px 400px 400px);

  animation: panning 5s linear infinite alternate;
}

@keyframes panning {
  from {
    object-view-box: xywh(0 -50px 400px 400px);
  }
  to {
    object-view-box: xywh(800px 68px 400px 400px);
  }
}
```

```css hidden
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

#### Ergebnis

{{ EmbedLiveSample("Panning using the object-view-box property", "", 400) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der CSS-Eigenschaft `object-view-box`](/de/docs/Web/CSS/Guides/Images/Using_object-view-box)
- {{cssxref("object-fit")}}
- {{cssxref("object-position")}}
- {{cssxref("background-size")}}
- [Seitenverhältnisse verstehen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- Modul [CSS images](/de/docs/Web/CSS/Guides/Images)
