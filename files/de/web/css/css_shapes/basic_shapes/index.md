---
title: Grundformen mit shape-outside
short-title: Verwendung von shape-outside
slug: Web/CSS/CSS_shapes/Basic_shapes
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

CSS-Formen können mit dem {{cssxref("&lt;basic-shape&gt;")}}-Typ definiert werden. In diesem Leitfaden besprechen wir das Erstellen von Rechtecken, Kreisen, Ellipsen und Polygonen mit der {{cssxref("shape-outside")}}-Eigenschaft. Diese Funktionen sind im [CSS Shapes Module](/de/docs/Web/CSS/CSS_shapes) definiert.

Bevor wir uns die Formen ansehen, ist es wichtig, zwei Informationen zu verstehen, die zusammen diese Formen ermöglichen:

- Der `<basic-shape>`-Typ
- Die Referenzbox

## Der \<basic-shape>-Typ

Der [`<basic-shape>`](/de/docs/Web/CSS/basic-shape) Typ wird als Wert für alle Grundformen verwendet. Dieser Typ ist eine funktionale Notation: Die Klammern der Funktion enthalten Argumente, die die Form beschreiben.

Die akzeptierten Argumente variieren je nach der Form, die Sie erstellen. Diese werden wir in den untenstehenden Beispielen behandeln.

## Die Referenzbox

Das Verständnis der von CSS-Formen verwendeten Referenzbox ist wichtig, wenn Sie Grundformen verwenden, da sie das Koordinatensystem jeder Form definiert. Sie haben die Referenzbox bereits im [Leitfaden zur Erstellung von Formen aus Box-Werten](/de/docs/Web/CSS/CSS_shapes/From_box_values) kennengelernt, der die Referenzbox direkt verwendet, um die Form zu erstellen.

Der untenstehende Screenshot zeigt den Firefox Shapes Inspector, der die Referenzbox eines Kreises anzeigt, der mit `shape-outside: circle(50%)` erstellt wurde. Dem Element wurden 20 Pixel Padding, Border und Margin zugewiesen. Der Shapes Inspector hebt diese Referenzboxen hervor.

![Text, der sich um einen links flotierten Kreis wickelt. Der linke Rand des Textes ist kreisförmig und stößt an die abgeschnittene Form außerhalb des Randes, wobei der Rand der Form plötzlich endet.](shapes-reference-box.png)

Die Standard-Referenzbox für eine Grundform ist die `margin-box`. Im Screenshot sehen Sie, dass die Form relativ zu diesem Teil des Box-Modells definiert ist.

Während die Standard-Referenzbox die `margin-box` ist, kann dies angepasst werden. Um eine andere Box als Referenzbox festzulegen, geben Sie den gewünschten Box-Wert nach Ihrer Grundformdefinition an.

Diese beiden Deklarationen sind gleich:

```css
shape-outside: circle(50%);
shape-outside: circle(50%) margin-box;
```

Um Ihre Form mit einer anderen Referenzbox zu verwenden, geben Sie einen anderen {{cssxref("box-edge")}} Wert an, z. B., um den Rand als Referenzbox für unseren Kreis zu verwenden, setzen Sie:

```css
.shape {
  shape-outside: circle(50%) border-box;
}
```

Formen, die über die Margin-Box hinausgehen, werden auf die Margin-Box beschnitten. Die folgenden Grundformen demonstrieren dies.

Für eine ausführlichere Erklärung der Referenzboxen, wie sie für CSS Shapes gelten, siehe [Verständnis von Referenzboxen für CSS Shapes](http://razvancaliman.com/writing/css-shapes-reference-boxes/).

## inset()

Die [`inset()`](/de/docs/Web/CSS/basic-shape/inset) Funktion definiert ein Rechteck. Dies mag nicht sehr nützlich erscheinen, da das Flotten eines Elements ohne Formen Ihnen eine rechteckige Form um das Element herum gibt. Der `inset()` Typ ermöglicht jedoch die Definition von Versätzen und zieht den Text um das verkleinerte Rechteck über Teile des gefloteten Elements.

Die `inset()` Funktion akzeptiert bis zu vier Versatzwerte für die Seiten sowie optional das Schlüsselwort `round`, gefolgt von einem {{cssxref("border-radius")}} Wert. Das untenstehende CSS erstellt eine rechteckige Form, die 20 Pixel vom oberen und unteren Rand und 10 Pixel vom linken und rechten Rand eingezogen ist, mit einem `border-radius` Wert von 10 Pixeln.

```css
.shape {
  float: left;
  shape-outside: inset(20px 10px 20px 10px round 10px);
}
```

Die Versatzwerte verwenden dieselben Regeln wie die {{cssxref("margin")}} Kurzform. Vier durch Leerzeichen getrennte Werte definieren die Versätze oben, rechts, unten und links — in dieser Reihenfolge. Sie können auch mehr als einen Versatz gleichzeitig festlegen:

- Wenn nur ein Wert angegeben wird, gilt er für alle Seiten.
- Wenn zwei Werte angegeben werden, sind die Versätze oben und unten auf den ersten Wert gesetzt und die Versätze rechts und links auf den zweiten.
- Wenn drei Werte angegeben werden, wird oben auf den ersten Wert gesetzt, links und rechts auf den zweiten und unten auf den dritten.

Die obigen Regeln können daher auch folgendermaßen geschrieben werden:

```css
.shape {
  float: left;
  shape-outside: inset(20px 10px round 10px);
}
```

Im untenstehenden Beispiel verwenden wir eine `inset()` Form, um Inhalt über das geflotete Element zu ziehen. Ändern Sie die Versatzwerte, um zu sehen, wie sich die Form ändert.

```html live-sample___inset
<div class="box">
  <div class="shape"></div>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___inset
body {
  font: 1.2em sans-serif;
}

.shape {
  float: left;
  width: 150px;
  height: 100px;
  shape-outside: inset(20px 50px 10px 0 round 50px);
  background-color: rebeccapurple;
  border: 2px solid black;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
}
```

{{EmbedLiveSample("inset", "", "250px")}}

Sie können auch einen Box-Wert als alternative Referenzbox hinzufügen. Im untenstehenden Beispiel versuchen Sie, die Referenzbox von `margin-box` auf `border-box`, `padding-box` oder `content-box` zu ändern, um zu sehen, wie sich die verwendete Referenzbox als Ausgangspunkt ändert, bevor die Versätze berechnet werden.

```html hidden live-sample___inset-box
<div class="box">
  <div class="shape"></div>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___inset-box
body {
  font: 1.2em sans-serif;
}

.shape {
  float: left;
  width: 150px;
  height: 100px;
  shape-outside: inset(20px 50px 10px 0 round 50px) margin-box;
  background-color: rebeccapurple;
  border: 2px solid black;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
}
```

{{EmbedLiveSample("inset-box", "", "250px")}}

Sie können auch Rechtecke basierend auf Entfernungen von den oberen und linken Kanten der Referenzbox mit der [`rect()`](/de/docs/Web/CSS/basic-shape/rect) Funktion oder nach Breite und Höhe mit der [`xywh()`](/de/docs/Web/CSS/basic-shape/xywh) Funktion erstellen; beide unterstützen auch optionale abgerundete Ecken.

## circle()

Der [`circle()`](/de/docs/Web/CSS/basic-shape/circle) Wert für `shape-outside` kann zwei mögliche Argumente akzeptieren: einen `<shape-radius>`, der die Größe definiert, und die `<position>`, die ihren Standort definiert.

Die `circle()` und `ellipse()` `shape-outside` Werte akzeptieren beide [`<shape-radius>`](/de/docs/Web/CSS/basic-shape#shape-radius) als Argument. Dies kann eine {{cssxref("length")}}, ein {{cssxref("percentage")}}, oder eines der Schlüsselwörter `closest-side` oder `farthest-side` sein.

Der `closest-side` Schlüsselwortwert verwendet die Länge vom Zentrum der Form zur nächsten Seite der Referenzbox, um die Radienlänge zu erstellen. Der `farthest-side` Schlüsselwortwert verwendet die Länge vom Zentrum der Form zur entferntesten Seite der Referenzbox.

Das zweite Argument ist eine `position`, die einen ein- oder zweischlüsseligen [`<position>`](/de/docs/Web/CSS/position_value) Wert akzeptiert, um die Position des Mittelpunkts des Kreises anzugeben. Dies wird auf die gleiche Weise wie {{cssxref("background-position")}} spezifiziert; wenn einer oder beide Werte weggelassen werden, sind die Standardwerte `center`.

Um einen Kreis zu erstellen, geben Sie einen einzelnen Radiuswert an, optional gefolgt vom Schlüsselwort **at**, gefolgt von einem Positionswert. Dieses Beispiel hat einen Kreis, der auf ein {{htmlelement("img")}} mit einer `width` und `height` von `210px` und einem `margin` von `20px` angewendet wird. Dies ergibt eine Gesamtbreite für die Referenzbox von `250px`. Der `50%` Wert für den `<shape-radius>` bedeutet, dass der Radius `125px` beträgt. Der Positionswert wird auf `30%` gesetzt, was `30%` von links und in der vertikalen Standardeinstellung `center` liegt.

```html live-sample___circle
<div class="box">
  <img
    alt="An orange hot air balloon as seen from below"
    src="https://mdn.github.io/shared-assets/images/examples/round-balloon.png" />
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___circle
body {
  font: 1.2em sans-serif;
}

img {
  float: left;
  shape-outside: circle(50% at 30%);
  margin: 20px;
}
```

{{EmbedLiveSample("circle", "", "250px")}}

Spielen Sie damit, die Größe des Kreises zu vergrößern oder zu verkleinern, indem Sie die Größe des Radius ändern, den Kreis mit dem Positionswert bewegen oder eine Referenzbox festlegen, wie wir es bei `inset()` gemacht haben.

Das untenstehende Beispiel kombiniert generierten Inhalt mit einer `circle()` Funktion, die die Schlüsselwörter `top left` für die Position verwendet. Dies erstellt eine Viertelkreisform in der oberen linken Ecke der Seite, um die der Text fließt.

```html live-sample___circle-generated
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___circle-generated
body {
  font: 1.2em sans-serif;
}

.box::before {
  content: "";
  float: left;
  width: 250px;
  height: 250px;
  shape-outside: circle(50% at top left);
}
```

{{EmbedLiveSample("circle-generated", "", "300px")}}

### Die Form wird durch die Margin-Box beschnitten

Wie oben in den [Referenzboxen](#die_referenzbox) erwähnt, wird die `margin-box` die Form abschneiden. Sie können dies sehen, indem Sie das Zentrum unseres Kreises in Richtung des Inhalts bewegen, indem Sie die Position auf `60%` setzen. Das Zentrum des Kreises wird näher am Inhalt sein und der Kreis wird über die Margin-Box hinausgehen. Dies bedeutet, dass die Erweiterung abgeschnitten und quadratisch abgerundet wird.

```css
img {
  float: left;
  shape-outside: circle(50% at 60%);
}
```

![Die Kreisform wird durch die Margin-Box beschnitten](shapes-circle-clipped.png)

## ellipse()

Eine Ellipse ist ein gestauchter Kreis. Daher verhält sich die [`ellipse()`](/de/docs/Web/CSS/basic-shape/ellipse) Funktion sehr ähnlich wie `circle()`, außer dass wir zwei Radien angeben müssen, `x` und `y`, in dieser Reihenfolge.

Diese können dann wie bei `circle()` von einem oder zwei `<position>` Werten gefolgt werden, um den Standort des Mittelpunkts der Ellipse zu definieren. Im untenstehenden Beispiel haben wir eine Ellipse mit einem `x` Radius von `40%`, einem `y` Radius von `50%` und die `<position>` auf `left` gesetzt. Das bedeutet, dass der Mittelpunkt der Ellipse an der Mitte der linken Kante der Referenzbox liegt. Dies schafft eine halbe Ellipsenform, um die sich der Text wickeln wird. Sie können diese Werte ändern, um zu sehen, wie sich die Ellipse verändert.

```html live-sample___ellipse
<div class="box">
  <div class="shape"></div>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___ellipse
body {
  font: 1.2em sans-serif;
}
.shape {
  float: left;
  shape-outside: ellipse(40% 50% at left);
  margin: 20px;
  width: 100px;
  height: 200px;
}
```

{{EmbedLiveSample("ellipse", "", "300px")}}

Die Schlüsselwortwerte `closest-side` und `farthest-side` sind nützlich, um eine schnelle Ellipse basierend auf der Größe der Referenzbox des gefloteten Elements zu erstellen.

```html hidden live-sample___ellipse-keywords
<div class="box">
  <div class="shape"></div>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___ellipse-keywords
body {
  font: 1.2em sans-serif;
}

.shape {
  float: left;
  shape-outside: ellipse(closest-side farthest-side at 30%);
  margin: 20px;
  width: 100px;
  height: 140px;
}
```

{{EmbedLiveSample("ellipse-keywords", "", "250px")}}

## polygon()

Die [`polygon()`](/de/docs/Web/CSS/basic-shape/polygon) Funktion ist komplexer und ermöglicht die Erstellung von polygonalen Formen mit mehreren Seiten. Diese Form akzeptiert drei oder mehr Wertepaarungen (ein Polygon muss mindestens ein Dreieck bilden). Jedes durch Leerzeichen getrennte Wertepaar wird mit einem Komma getrennt und repräsentiert die Koordinaten eines einzelnen Vertex, der relativ zur Referenzbox gezeichnet wird. Jedes Koordinatenpaar definiert eine Kante des Polygons, wobei die letzte Kante durch das erste und letzte Satz von Koordinaten definiert wird.

Das untenstehende Beispiel erstellt eine Form, der der Text mit der `polygon()` Funktion folgen soll. Versuchen Sie, die Koordinatenwerte zu ändern, um zu sehen, wie sich die Form ändert.

```html hidden live-sample___polygon
<div class="box">
  <div class="shape"></div>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___polygon
body {
  font: 1.2em sans-serif;
}

.shape {
  float: left;
  shape-outside: polygon(
    0px 0px,
    0px 189px,
    100.48% 94.71%,
    200px 120px,
    80.67% 37.17%
  );
  width: 200px;
  height: 200px;
}
```

{{EmbedLiveSample("polygon", "", "250px")}}

Um noch komplexere Formen zu erstellen, können Sie die Umrisse jeder Form mit den Funktionen [`path()`](/de/docs/Web/CSS/basic-shape/path) oder [`shape()`](/de/docs/Web/CSS/basic-shape/shape) definieren.

Die `inset()`, `circle()`, `ellipse()`, und `polygon()` Formen sind mit dem Firefox Developer Tools Shape Inspector überprüfbar und bearbeitbar. Der untenstehende Screenshot zeigt die im Werkzeug hervorgehobene Form.

![Die Polygon-Grundform, hervorgehoben mit dem Shapes Inspector.](shapes-polygon.png)

Ein weiteres Hilfsmittel ist [Clippy](https://bennettfeely.com/clippy/), ein Werkzeug zum Erstellen von Formen mit Beispielen unter Verwendung der CSS {{cssxref("clip-path")}} Eigenschaft, die dieselben Grundformfunktionen und Werte wie die `shape-outside` Eigenschaft verwendet.
