---
title: object-view-box
slug: Web/CSS/object-view-box
l10n:
  sourceCommit: 01e9f29edc82da8df6d01009d79bf50616ea43f4
---

{{CSSRef}}{{SeeCompatTable}}

Die **`object-view-box`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert ein Rechteck als sichtbaren Bereich (Viewbox) innerhalb eines {{Glossary("replaced_elements", "ersetzten Elements")}} und ermöglicht, dass der Inhalt des ersetzten Elements gezoomt oder verschoben werden kann. Sie funktioniert ähnlich wie das SVG-Attribut {{SVGAttr("viewBox")}}.

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
  border: 2px dotted #888;
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
/* keywords */
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

- [`<basic-shape-rect>`](/de/docs/Web/CSS/basic-shape#basic-shape-rect)
  - : Eine {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/xywh","xywh()")}} oder {{cssxref("basic-shape/rect","rect()")}} Funktion, die eine Viewbox für ein Element mit natürlichen Abmessungen (ersetzte Elemente) spezifiziert. Löst sich sonst in `none` auf.

## Beschreibung

Die `object-view-box` Eigenschaft kann verwendet werden, um {{Glossary("replaced_elements", "ersetzte Elemente")}}, einschließlich Bildern und Videos, zuzuschneiden oder zu skalieren. Sie funktioniert, indem ein Abschnitt des Inhalts des ersetzten Elements im verfügbaren Raum angezeigt wird, der für dieses Element reserviert ist. Der Abschnitt des ersetzten Elements, der angezeigt wird, wird durch den Wert der Eigenschaft definiert. Der verfügbare reservierte Raum wird durch die Standard-{{Glossary("extrinsic_size", "extrinsische Größe")}} des Elements bestimmt. Der angezeigte Inhaltsabschnitt kann gezoomt, herausgezoomt oder in seiner ursprünglichen Größe präsentiert werden, während das intrinsische {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Inhalts beibehalten wird.

Der Eigenschaftswert ist ein `<basic-shape-rect>`, eine der {{cssxref("basic-shape")}} Funktionen, die auf die Definition einer rechteckigen Form begrenzt ist. Zum Beispiel kann der Wert eine {{cssxref("basic-shape/xywh","xywh()")}} Funktion sein:

```css
img {
  object-view-box: xywh(410px 0 400px 150px);
}
```

In diesem Fall ist die obere linke Ecke des Abschnitts des Bildes, das angezeigt wird, `410px` vom linken Rand und `0` vom oberen Rand entfernt, wie durch die x- und y-Koordinatenparameter definiert. Die Größe des Abschnitts des Originalbildes, das angezeigt wird, ist `400px` breit und `150px` hoch; die `w` und `h` Komponenten der Funktion. Dieser 400x150-Abschnitt des Bildes wird in dem Raum angezeigt, der für das Bild selbst reserviert war, als die Seite gestaltet wurde. Ob der angezeigte Inhaltsabschnitt seine ursprüngliche intrinsische Größe hat, hereingezoomt oder herausgezoomt wird, hängt davon ab, ob die Viewbox 400px x 150px, kleiner oder größer als die Bildgröße des Elements ist.

![Das Leopardenbild, das mit der object-view-box Eigenschaft zugeschnitten wurde, mit einer 400px mal 150px Viewbox, die einen nicht skalierten Abschnitt des Bildes zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/object-view-box_xywh.jpg)

In diesem Fall, da die durch die `object-view-box` Eigenschaft definierte rechteckige Viewbox und der rechteckige Bereich des `<img>` Elements die gleiche Größe haben, d.h. 400 x 150 Pixel, wird das ersetzte Element nicht skaliert.

Reduzieren Sie die `w` und `h` Werte, um einen Hineinzoomeffekt zu erzeugen; da der kleinere Bildabschnitt gestreckt wird, hat er einen Hineinzoomeffekt.

Erhöhen Sie die Werte der `w` und `h` Argumente, um einen Herauszoomeffekt zu erzeugen; da der größere Bildabschnitt verkleinert wird, hat er einen Herauszoomeffekt.

Das Animieren der `x` und `y` Koordinaten erzeugt einen Schwenkeffekt, indem die Viewbox des Elements bewegt wird, während das Element selbst an seinem ursprünglichen Ort bleibt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Verwendung und die Effekte der `object-view-box` Eigenschaft, mit Beispielen unter Verwendung der drei verschiedenen `<basic-shape-rect>` Funktionen.

#### HTML

Wir haben drei fast identische {{htmlelement("img")}} Elemente, die in {{htmlelement("figure")}} Elemente eingeschlossen sind; der einzige Unterschied sind ihre Klassennamen.

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

Wir gestalten alle Bilder so, dass sie die gleiche Breite und Höhe haben, und setzen dann für jede Klasse, und damit für jedes Bild, einen anderen `object-view-box` Wert. Die intrinsische Größe des bemalten Handbildes ist `298px` mal `332px`. Wir legen die {{cssxref("height")}} und {{cssxref("width")}} fest und setzen die extrinsische Größe auf `200px` mal `200px`.

```css
img {
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
```

Wir setzen drei verschiedene `object-view-box` Eigenschaftswerte unter Verwendung von drei verschiedenen Formfunktionen. Der `intrinsic` Wert der {{cssxref("basic-shape/xywh","xywh()")}} Funktion des Elements zeigt einen `200px` großen quadratischen Abschnitt des Bildinhalts, beginnend `70px` vom linken und `90px` vom oberen Rand. Die `zoom-in` Funktion des {{cssxref("basic-shape/rect","rect()")}} Elements zeigt einen `160px` großen quadratischen Abschnitt des ursprünglichen Elements, der sich von `110px` bis `270px` vom oberen Rand und `90px` bis `250px` vom linken Rand erstreckt. Die `zoom-out` Funktion des ersetzten Elements {{cssxref("basic-shape/inset","inset()")}} zeigt einen `298px` großen quadratischen Abschnitt des ursprünglichen Elements und zeigt die gesamte Breite des Bildes, während oben und unten 17px abgeschnitten werden.

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

{{ EmbedLiveSample("Grundlegende Verwendung", "", "300") }}

Die `intrinsic` Version zeigt einen nicht skalierten Abschnitt des Bildes. Die `zoom-in` Version zeigt einen kleineren Abschnitt (`160px` Quadrat) des Bildes, der hochskaliert wird, um die `200px` quadratische Viewbox zu füllen. Da der Abschnitt gestreckt wird, sieht er hereingezoomt aus. Die `zoom-out` Version zeigt einen größeren (`298px` Quadrat) Abschnitt des Bildes, der herunterskaliert wird, um die `200px` quadratische Viewbox zu füllen. Da der Abschnitt verkleinert wird, sieht er herausgezoomt aus.

### Live-Zoom-in mit der object-view-box Eigenschaft

Dieses Beispiel zeigt die Verwendung der `object-view-box` Eigenschaft, um einen Abschnitt eines ersetzten Elements innerhalb eines statisch dimensionierten HTML-Elements hereinzuzoomen und herauszuzoomen. In diesem Fall dient das Auge des Leoparden innerhalb eines sehr großen Bildes als Brennpunkt des Zoom-Effekts.

#### HTML

Wir fügen ein {{htmlelement("img")}} Element und ein [`range`](Web/HTML/Reference/Elements/input/range) {{htmlelement("input")}} Element mit einem zugehörigen {{htmlelement("label")}} ein. Die natürlichen Abmessungen oder die intrinsische Größe des ursprünglichen Leopardenbildes sind `1244px` breit und `416px` hoch, mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} von `3:1`.

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

Wir definieren eine `--box-size` benutzerdefinierte Eigenschaft, die als Höhe und Breite in der {{cssxref("basic-shape/xywh", "xywh()")}} Funktion verwendet wird und eine quadratische Viewbox mit einem Seitenverhältnis von `1:1` erstellt. Der Offset-Punkt der Viewbox, der Brennpunkt unseres Zoom-Effekts, wird für die `x` Koordinate auf `500px` und die `y` Koordinate auf `30px` gesetzt, was der oberen linken Ecke des rechten Auges des Leoparden entspricht.

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

Wir fügen einen Event-Listener zum Schieberegler hinzu, der den Wert der `--boxSize` benutzerdefinierten Eigenschaft aktualisiert, wenn der Benutzer damit interagiert. Um den Vergrößerungseffekt zu erhöhen, wenn der Schieberegler nach rechts bewegt wird, wird der Wert des Schiebereglers invertiert, indem er von `500px` subtrahiert wird, da eine Reduzierung der Größe der Viewbox den Vergrößerungseffekt erhöht.

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

{{ EmbedLiveSample("Live-Zoom-in mit der object-view-box Eigenschaft", "", 480) }}

Bewegen Sie den Schieberegler nach rechts, um den Vergrößerungseffekt zu erhöhen, und nach links, um ihn zu verringern. Der Schieberegler beeinflusst nur die Dimensionen der Viewbox, während die x- und y-Werte, der Ursprungspunkt der Viewbox, konstant bleiben. Die Größe des `<img>` Elements ändert sich ebenfalls nicht.

### Schwenken mit der object-view-box Eigenschaft

Dieses Beispiel zeigt das Schwenken eines Bildes durch animieren des `object-view-box` Eigenschaftswerts.

#### HTML

Das HTML enthält ein einzelnes Bild.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="leopard" />
```

#### CSS

Wir definieren eine Bildgröße und halten die Viewbox-Dimensionen, die `w` und `h` Komponenten der `xywh()` Funktion, konstant, während wir die obere und linke Position animieren und die Position der `x` und `y` Parameter über fünf Sekunden ändern.

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

{{ EmbedLiveSample("Schwenken mit der object-view-box Eigenschaft", "", 400) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der CSS `object-view-box` Eigenschaft](/de/docs/Web/CSS/CSS_images/Using_object-view-box)
- {{cssxref("object-fit")}}
- {{cssxref("object-position")}}
- {{cssxref("background-size")}}
- [Das Seitenverhältnis verstehen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [CSS-Bilder](/de/docs/Web/CSS/CSS_images) Modul
