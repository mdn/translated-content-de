---
title: object-view-box
slug: Web/CSS/Reference/Properties/object-view-box
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{CSSRef}}{{SeeCompatTable}}

Die **`object-view-box`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert ein Rechteck als sichtbaren Bereich (viewbox) innerhalb eines {{Glossary("replaced_elements", "replaced element")}}, sodass der Inhalt des ersetzten Elements gezoomt oder verschoben werden kann. Sie funktioniert ähnlich wie das SVG-Attribut {{SVGAttr("viewBox")}}.

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

- [`<basic-shape-rect>`](/de/docs/Web/CSS/Reference/Values/basic-shape#syntax_for_rectangles_basic-shape-rect)
  - : Eine {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/xywh","xywh()")}}, oder {{cssxref("basic-shape/rect","rect()")}} Funktion, die eine Viewbox für ein Element mit natürlichen Abmessungen (ersetzte Elemente) spezifiziert. Andernfalls löst es sich zu `none` auf.

## Beschreibung

Die `object-view-box`-Eigenschaft kann verwendet werden, um {{Glossary("replaced_elements", "ersetzte Elemente")}} wie Bilder und Videos zu zuschneiden oder zu skalieren. Sie funktioniert, indem ein Abschnitt des Inhalts des ersetzten Elements im verfügbaren reservierten Raum für dieses Element angezeigt wird. Der angezeigte Abschnitt des ersetzten Elements wird durch den Wert der Eigenschaft definiert. Der verfügbare reservierte Raum wird durch die Standard-{{Glossary("extrinsic_size", "extrinsische Größe")}} des Elements bestimmt. Der angezeigte Inhaltsabschnitt kann gezoomt, herausgezoomt oder in seiner Originalgröße präsentiert werden, während das intrinsische {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Inhalts beibehalten wird.

Der Eigenschaftswert ist ein `<basic-shape-rect>`, eine der {{cssxref("basic-shape")}} Funktionen, die auf die Definition einer rechteckigen Form beschränkt sind. Zum Beispiel kann der Wert eine {{cssxref("basic-shape/xywh","xywh()")}} Funktion sein:

```css
img {
  object-view-box: xywh(410px 0 400px 150px);
}
```

In diesem Fall ist die obere linke Ecke des angezeigten Bildausschnitts `410px` von der linken Kante und `0` von oben entfernt, wie durch die x- und y-Koordinatenparameter definiert. Die Größe des angezeigten Ausschnitts des Originalbildes beträgt `400px` Breite und `150px` Höhe; dies sind die `w`- und `h`-Komponenten der Funktion. Dieser 400x150-Ausschnitt des Bildes wird im Raum angezeigt, der für das Bild selbst reserviert wurde, als die Seite layoutet wurde. Ob der angezeigte Inhaltsabschnitt seine ursprüngliche intrinsische Größe, herangezoomt oder herausgezoomt ist, hängt davon ab, ob die Viewbox 400px x 150px, kleiner oder größer als die Größe des Bildelements ist.

![Das Leopardenbild, zurechtgeschnitten mit der object-view-box-Eigenschaft, mit einer 400px mal 150px großen Viewbox, die einen unskalierten Teilausschnitt des Bildes anzeigt](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/object-view-box_xywh.jpg)

In diesem Fall, da die durch die `object-view-box`-Eigenschaft definierte rechteckige Viewbox und der rechteckige Bereich des `<img>`-Elements die gleiche Größe haben, d.h. 400 x 150 Pixel, wird das ersetzte Element nicht skaliert.

Verringern Sie die `w`- und `h`-Werte, um einen Heranzoom-Effekt zu erzeugen; da der kleinere Bildausschnitt gedehnt wird, hat er einen herangezoomten Effekt.

Erhöhen Sie die `w`- und `h`-Argumente, um einen Herauszoom-Effekt zu erzeugen; da der größere Bildausschnitt verkleinert wird, hat er einen herausgezoomten Effekt.

Durch Animieren der `x`- und `y`-Koordinaten wird ein Verschiebeeffekt erzeugt, indem die Viewbox des Elements bewegt wird, während das Element selbst an seinem ursprünglichen Ort bleibt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Verwendung und die Auswirkungen der `object-view-box`-Eigenschaft mit Beispielen der drei verschiedenen `<basic-shape-rect>` Funktionen.

#### HTML

Wir haben drei fast identische {{htmlelement("img")}}-Elemente, die in {{htmlelement("figure")}}-Elementen eingebettet sind; der einzige Unterschied sind ihre Klassennamen.

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

Wir gestalten alle Bilder, um die gleiche Breite und Höhe zu haben, und legen dann für jede Klasse und damit für jedes Bild einen anderen `object-view-box`-Wert fest. Die intrinsische Größe des gemalten Handbildes beträgt `298px` mal `332px`. Wir setzen die {{cssxref("height")}} und {{cssxref("width")}}, wodurch die extrinsische Größe auf `200px` mal `200px` festgelegt wird.

```css
img {
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
```

Wir setzen drei verschiedene `object-view-box`-Eigenschaftswerte mit drei verschiedenen Formfunktionen. Der `intrinsic`-Wert des Elements definiert eine {{cssxref("basic-shape/xywh","xywh()")}}-Funktion, die einen `200px` großen quadratischen Abschnitt des Bildinhalts anzeigt, beginnend `70px` von links und `90px` von oben. Der `zoom-in`-Wert des Elements verwendet die {{cssxref("basic-shape/rect","rect()")}}-Funktion, um einen `160px` großen quadratischen Abschnitt des Originalelements anzuzeigen, der von `110px` bis `270px` von der oberen Kante und `90px` bis `250px` von der linken Kante reicht. Der `zoom-out`-Wert des ersetzten Elements verwendet die {{cssxref("basic-shape/inset","inset()")}}-Funktion, um einen `298px` großen quadratischen Abschnitt des Originalelements anzuzeigen; die gesamte Breite des Bildes wird angezeigt, während 17px von oben und unten abgeschnitten werden.

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

Die `intrinsic`-Version zeigt einen unskalierten Abschnitt des Bildes. Die `zoom-in`-Version zeigt einen kleineren Abschnitt (`160px` quadratisch) des Bildes, der auf einen `200px` großen quadratischen Viewbox skaliert wird. Da der Abschnitt gedehnt wird, sieht er herangezoomt aus. Die `zoom-out`-Version zeigt einen größeren (`298px` quadratisch) Abschnitt des Bildes, der auf einen `200px` quadratischen Viewbox skaliert wird. Da der Abschnitt verkleinert wird, sieht er herausgezoomt aus.

### Live-Zoom mit der object-view-box-Eigenschaft

Dieses Beispiel zeigt die Verwendung der `object-view-box`-Eigenschaft, um einen Abschnitt eines ersetzten Elements innerhalb eines statisch dimensionierten HTML-Elements heranzuzoomen und herauszuzoomen. In diesem Fall dient das Auge des Leoparden, innerhalb eines sehr großen Bildes, als Fokuspunkt des Zoom-Effekts.

#### HTML

Wir fügen ein {{htmlelement("img")}}-Element und ein {{htmlelement("input")}}-Element vom Typ [`range`](/de/docs/Web/HTML/Reference/Elements/input/range) mit einem zugehörigen {{htmlelement("label")}} ein. Die natürlichen Abmessungen oder die intrinsische Größe des Originalbildes des Leoparden sind `1244px` breit und `416px` hoch, mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} von `3:1`.

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

Wir definieren eine benutzerdefinierte Eigenschaft `--box-size`, die als Höhe und Breite in der {{cssxref("basic-shape/xywh", "xywh()")}}-Funktion verwendet wird, um eine quadratische Viewbox mit einem Seitenverhältnis von `1:1` zu erstellen. Der Versatzpunkt der Viewbox, der Fokuspunkt in unserem Zoom-Effekt, wird für die `x`-Koordinate auf `500px` und für die `y`-Koordinate auf `30px` gesetzt, was der linken oberen Ecke des rechten Auges des Leoparden entspricht.

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

Wir fügen einen Event-Listener zum Schieberegler hinzu, der den Wert der benutzerdefinierten Eigenschaft `--boxSize` aktualisiert, wenn der Benutzer damit interagiert. Um den Zoom-Effekt zu verstärken, wenn der Schieberegler nach rechts bewegt wird, wird der Wert des Schiebereglers umgekehrt, indem er von `500px` abgezogen wird, da die Reduzierung der Viewbox-Größe den Zoom-Effekt verstärkt.

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

Bewegen Sie den Schieberegler nach rechts, um den Zoom-Effekt zu verstärken, und nach links, um ihn zu reduzieren. Der Schieberegler beeinflusst nur die Dimensionen der Viewbox, während die x- und y-Werte, der Ursprungspunkt der Viewbox, konstant bleiben. Die Größe des `<img>`-Elements ändert sich ebenfalls nicht.

### Panning mit der object-view-box-Eigenschaft

Dieses Beispiel zeigt das Panning eines Bildes durch Animation des `object-view-box`-Eigenschaftswerts.

#### HTML

Das HTML enthält ein einzelnes Bild.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="leopard" />
```

#### CSS

Wir definieren eine Bildgröße und halten die Viewbox-Dimensionen, die `w`- und `h`-Komponenten der `xywh()`-Funktion, konstant, während wir die oberen und linken Positionen animieren, indem wir die Position der `x`- und `y`-Parameter über fünf Sekunden ändern.

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

- [Verwendung der CSS `object-view-box` Eigenschaft](/de/docs/Web/CSS/CSS_images/Using_object-view-box)
- {{cssxref("object-fit")}}
- {{cssxref("object-position")}}
- {{cssxref("background-size")}}
- [Das Verständnis des Seitenverhältnisses](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [CSS-Bilder](/de/docs/Web/CSS/CSS_images) Modul
