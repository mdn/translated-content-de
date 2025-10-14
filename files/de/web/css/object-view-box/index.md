---
title: object-view-box
slug: Web/CSS/object-view-box
l10n:
  sourceCommit: 3b8cbcef38a3470c1e61b2d57af8bf92957ce834
---

{{CSSRef}}

Die **`object-view-box`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert ein Rechteck als sichtbaren Bereich (Viewbox) innerhalb eines {{Glossary("replaced_elements", "ersetzten Elements")}}, wodurch der Inhalt des ersetzten Elements gezoomt oder verschoben werden kann. Diese Eigenschaft funktioniert ähnlich wie das SVG-Attribut {{SVGAttr("viewBox")}}.

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
  - : Eine {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/xywh","xywh()")}}, oder {{cssxref("basic-shape/rect","rect()")}} Funktion, die eine Viewbox für ein Element mit natürlichen Abmessungen (ersetzte Elemente) angibt. Andernfalls wird `none` aufgelöst.

## Beschreibung

Die Eigenschaft `object-view-box` kann verwendet werden, um {{Glossary("replaced_elements", "ersetzte Elemente")}} wie Bilder und Videos zuzuschneiden oder zu skalieren. Sie funktioniert, indem ein Abschnitt des Inhalts des ersetzten Elements im verfügbaren Raum angezeigt wird, der für dieses Element reserviert wurde. Der angezeigte Abschnitt des ersetzten Elements wird durch den Wert der Eigenschaft definiert. Der verfügbare reservierte Raum wird durch die Standard- {{Glossary("extrinsic_size", "extrinsische Größe")}} des Elements bestimmt. Der dargestellte Abschnitt des Inhalts kann vergrößert, verkleinert oder in seiner Originalgröße präsentiert werden, während das intrinsische {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Inhalts beibehalten wird.

Der Eigenschaftswert ist ein `<basic-shape-rect>`, eine der {{cssxref("basic-shape")}} Funktionen, die auf die Definition einer rechteckigen Form beschränkt sind. Zum Beispiel kann der Wert eine {{cssxref("basic-shape/xywh","xywh()")}} Funktion sein:

```css
img {
  object-view-box: xywh(410px 0 400px 150px);
}
```

In diesem Fall befindet sich die linke obere Ecke des Abschnitts des Bildes, der angezeigt wird, `410px` vom linken Rand und `0` von oben entfernt, wie durch die x- und y-Koordinatenparameter definiert. Die Größe des Abschnitts des Originalbildes, der angezeigt wird, beträgt `400px` in der Breite und `150px` in der Höhe; die `w`- und `h`-Komponenten der Funktion. Dieser 400x150 Abschnitt des Bildes wird in dem Raum angezeigt, der ursprünglich für das Bild selbst reserviert war, als die Seite layoutet wurde. Ob der angezeigte Inhaltsabschnitt seine ursprüngliche Größe hat, vergrößert oder verkleinert ist, hängt davon ab, ob die Viewbox 400x150 Pixel, kleiner oder größer als die Bildgröße des Elements ist.

![Das Leopard-Bild, zugeschnitten mit der Eigenschaft object-view-box, mit einer 400px mal 150px großen Viewbox, die einen unveränderten Abschnitt des Bildes anzeigt](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/object-view-box_xywh.jpg)

In diesem Fall, da die durch die `object-view-box` Eigenschaft definierte rechteckige Viewbox und der rechteckige Bereich des `<img>`-Elements die gleiche Größe haben, das heißt 400 x 150 Pixel, wird das ersetzte Element nicht skaliert.

Reduzieren Sie die `w`- und `h`-Werte, um einen Vergrößerungseffekt zu erzeugen; da der kleinere Bildabschnitt gestreckt wird, hat er einen Vergrößerungseffekt.

Erhöhen Sie die `w`- und `h`-Wertargumente, um einen Verkleinerungseffekt zu erzeugen; da der größere Bildabschnitt verkleinert wird, hat er einen Verkleinerungseffekt.

Durch das Animieren der `x`- und `y`-Koordinaten wird ein Verschiebeeffekt erzeugt, indem die Viewbox des Elements bewegt wird, während das Element selbst an seinem ursprünglichen Ort bleibt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel demonstriert die grundlegende Nutzung und die Auswirkungen der `object-view-box` Eigenschaft, mit Beispielen, die die drei verschiedenen `<basic-shape-rect>` Funktionen verwenden.

#### HTML

Wir haben drei fast identische {{htmlelement("img")}} Elemente, die in {{htmlelement("figure")}} Elemente eingebunden sind; der einzige Unterschied sind ihre Klassennamen.

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

Wir gestalten alle Bilder so, dass sie die gleiche Breite und Höhe haben, und setzen dann jede Klasse und damit jedes Bild so, dass es einen anderen `object-view-box` Wert hat. Die intrinsische Größe des gemalten Handbildes beträgt `298px` mal `332px`. Wir setzen die {{cssxref("height")}} und {{cssxref("width")}}, wodurch die extrinsische Größe auf `200px` mal `200px` eingestellt wird.

```css
img {
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
```

Wir setzen drei verschiedene `object-view-box` Eigenschaftswerte unter Verwendung von drei verschiedenen Formfunktionen. Der {{cssxref("basic-shape/xywh","xywh()")}} Funktionswert des `intrinsic` Elements zeigt einen `200px` großen quadratischen Abschnitt des Bildinhalts an, beginnend `70px` von links und `90px` von oben. Die {{cssxref("basic-shape/rect","rect()")}} Funktion des `zoom-in` Elements zeigt einen `160px` großen quadratischen Abschnitt des Originalelements an, von `110px` bis `270px` von der oberen Kante und `90px` bis `250px` von der linken Kante. Die {{cssxref("basic-shape/inset","inset()")}} Funktion des `zoom-out` ersetzten Elements zeigt einen `298px` großen quadratischen Abschnitt des Originalelements an; zeigt die gesamte Breite des Bildes, während 17px von oben und unten abgeschnitten werden.

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

Die `intrinsic` Version zeigt einen nicht skalierten Abschnitt des Bildes. Die `zoom-in` Version zeigt einen kleineren Abschnitt (`160px` Quadrat) des Bildes, skaliert auf die `200px` quadratische Viewbox. Da der Abschnitt gestreckt wird, sieht er vergrößert aus. Die `zoom-out` Version zeigt einen größeren (`298px` Quadrat) Abschnitt des Bildes, skaliert auf die `200px` quadratische Viewbox. Da der Abschnitt verkleinert wird, sieht er verkleinert aus.

### Live Zoom-in mit der object-view-box Eigenschaft

Dieses Beispiel zeigt die Verwendung der `object-view-box` Eigenschaft, um einen Abschnitt eines ersetzten Elements in einer statisch dimensionierten HTML-Element hinein- und herauszuzoomen. In diesem Fall dient das Auge des Leoparden, innerhalb eines sehr großen Bildes, als Brennpunkt des Zoom-Effekts.

#### HTML

Wir fügen ein {{htmlelement("img")}} Element und ein [`range`](Web/HTML/Reference/Elements/input/range) {{htmlelement("input")}} Element ein, mit einem zugehörigen {{htmlelement("label")}}. Die natürlichen Dimensionen oder die intrinsische Größe des Originalleopardbildes beträgt `1244px` in der Breite und `416px` in der Höhe, mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} von `3:1`.

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

Wir definieren eine `--box-size` benutzerdefinierte Eigenschaft, die als Höhe und Breite in der {{cssxref("basic-shape/xywh", "xywh()")}} Funktion verwendet wird, um eine quadratische Viewbox mit einem Seitenverhältnis von `1:1` zu erstellen. Der Versatzpunkt der Viewbox, der Fokus in unserem Zoom-Effekt, ist auf `500px` für die `x`-Koordinate und `30px` für die `y`-Koordinate eingestellt, die der oberen linken Ecke des rechten Auges des Leoparden entspricht.

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

Wir fügen dem Schieberegler einen Ereignislistener hinzu, der den Wert der benutzerdefinierten Eigenschaft `--boxSize` aktualisiert, wenn der Benutzer damit interagiert. Um den Zoom-Effekt zu erhöhen, wenn der Schieberegler nach rechts bewegt wird, wird der Wert des Schiebereglers umgekehrt, indem er von `500px` subtrahiert wird, da das Reduzieren der Viewbox-Größe den Zoom-Effekt erhöht.

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

Bewegen Sie den Schieberegler nach rechts, um den Zoom-Effekt zu verstärken, und nach links, um ihn zu reduzieren. Der Schieberegler beeinflusst nur die Dimensionen der Viewbox, während die x- und y-Werte, der Ursprungspunkt der Viewbox, konstant bleiben. Die Größe des `<img>` Elements ändert sich ebenfalls nicht.

### Panning mit der object-view-box Eigenschaft

Dieses Beispiel zeigt das Schwenken eines Bildes durch Animieren des `object-view-box` Eigenschaftswertes.

#### HTML

Das HTML enthält ein einzelnes Bild.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="leopard" />
```

#### CSS

Wir definieren eine Bildgröße und halten die Viewbox-Dimensionen, die `w`- und `h`-Komponenten der `xywh()` Funktion, konstant, während wir die oberen und linken Positionen animieren, um die Position der `x`- und `y`-Parameter über fünf Sekunden zu ändern.

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
- [Verständnis des Seitenverhältnisses](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- Das [CSS images](/de/docs/Web/CSS/CSS_images)-Modul
