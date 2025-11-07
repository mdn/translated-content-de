---
title: Grundformen mit shape-outside
short-title: Verwendung von shape-outside
slug: Web/CSS/CSS_shapes/Basic_shapes
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

CSS-Formen können mit dem Typ {{cssxref("&lt;basic-shape&gt;")}} definiert werden. In diesem Leitfaden besprechen wir die Erstellung von Rechtecken, Kreisen, Ellipsen und Polygonen mit der Eigenschaft {{cssxref("shape-outside")}}. Diese sind in dem [CSS-Shape-Modul](/de/docs/Web/CSS/CSS_shapes) definiert.

Bevor wir uns den Formen zuwenden, ist es sinnvoll, zwei Informationen zu verstehen, die zusammen diese Formen möglich machen:

- Der `<basic-shape>`-Typ
- Die Referenzbox

## Der \<basic-shape> Typ

Der Typ [`<basic-shape>`](/de/docs/Web/CSS/Reference/Values/basic-shape) wird als Wert für alle unsere Grundformen verwendet. Dieser Typ ist eine funktionale Notation: Die Funktionsklammern enthalten Argumente, die verwendet werden, um die Form zu beschreiben.

Die akzeptierten Argumente variieren je nach Form, die Sie erstellen. Wir werden diese in den untenstehenden Beispielen behandeln.

## Die Referenzbox

Das Verständnis der von CSS-Formen verwendeten Referenzbox ist wichtig, wenn Sie Grundformen verwenden, da sie das Koordinatensystem jeder Form definiert. Sie haben die Referenzbox bereits im [Leitfaden zum Erstellen von Formen aus Boxwerten](/de/docs/Web/CSS/CSS_shapes/From_box_values) kennengelernt, der die Referenzbox direkt verwendet, um die Form zu erstellen.

Der untenstehende Screenshot zeigt den Firefox Shapes Inspector, der die Referenzbox eines Kreises anzeigt, der mit `shape-outside: circle(50%)` erstellt wurde. Dem Element wurden 20 Pixel Padding, Border und Margin angewendet. Der Shapes Inspector hebt diese Referenzboxen hervor.

![Text, der sich um einen nach links geflohten Kreis windet. Der linke Rand des Textes ist kreisförmig und stößt gegen die beschnittene Form auf der Außenseite des Rands, wobei der Rand der Form folgt.](shapes-reference-box.png)

Die Standard-Referenzbox für eine Grundform ist die `margin-box`. Im Screenshot können Sie sehen, dass die Form relativ zu diesem Teil des Boxmodells definiert ist.

Während die Standard-Referenzbox `margin-box` ist, kann diese geändert werden. Um eine andere Box als Referenzbox festzulegen, fügen Sie den gewünschten Boxwert nach Ihrer Grundformdefinition hinzu.

Diese beiden Deklarationen sind gleich:

```css
shape-outside: circle(50%);
shape-outside: circle(50%) margin-box;
```

Damit Ihre Form eine andere Referenzbox verwendet, fügen Sie einen anderen {{cssxref("box-edge")}}-Wert hinzu. Um beispielsweise den Rand als Referenzbox für unseren Kreis zu verwenden, setzen Sie:

```css
.shape {
  shape-outside: circle(50%) border-box;
}
```

Formen, die über die Randbox hinausgehen, werden auf die Randbox beschnitten. Die folgenden Grundformen demonstrieren dies.

## inset()

Die Funktion [`inset()`](/de/docs/Web/CSS/Reference/Values/basic-shape/inset) definiert ein Rechteck. Dies mag nicht sehr nützlich erscheinen, da das Schweben eines Elements ohne Formen Ihnen eine rechteckige Form darum herum geben wird. Allerdings ermöglicht der Typ `inset()` die Definition von Offsets und zieht somit den umgebenden Text um das verkleinerte Rechteck über Teile des geschwommenen Elements herum.

Die Funktion `inset()` nimmt bis zu vier Seitenoffsetwerte an, gefolgt von einem optionalen `round`-Schlüsselwort und einem {{cssxref("border-radius")}}-Wert. Das untenstehende CSS erstellt eine rechteckige Form, die 20 Pixel vom oberen und unteren Rand sowie 10 Pixel vom linken und rechten Rand von der Referenzbox des geschwommenen Elements abgesetzt ist, mit einem `border-radius`-Wert von 10 Pixeln.

```css
.shape {
  float: left;
  shape-outside: inset(20px 10px 20px 10px round 10px);
}
```

Die Offsetwerte verwenden dieselben Regeln wie die {{cssxref("margin")}}-Kurzform. Vier durch Leerzeichen getrennte Werte definieren die Offsetwerte oben, rechts, unten und links – in dieser Reihenfolge. Sie können auch mehr als einen Offset gleichzeitig setzen:

- Wenn nur ein Wert vorhanden ist, gilt er für alle Seiten.
- Wenn zwei Werte vorhanden sind, werden die oberen und unteren Offsets auf den ersten Wert und die rechten und linken Offsets auf den zweiten Wert gesetzt.
- Wenn drei Werte vorhanden sind, wird der obere Wert auf den ersten Wert gesetzt, die linken und rechten Werte auf den zweiten, und der untere Wert auf den dritten.

Die obigen Regeln können daher auch wie folgt geschrieben werden:

```css
.shape {
  float: left;
  shape-outside: inset(20px 10px round 10px);
}
```

Im untenstehenden Beispiel wird eine `inset()`-Form verwendet, um Inhalte über das geschwommene Element zu ziehen. Ändern Sie die Offsetwerte, um zu sehen, wie sich die Form verändert.

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

Sie können auch einen Boxwert als alternative Referenzbox hinzufügen. Im untenstehenden Beispiel versuchen Sie, die Referenzbox von `margin-box` auf `border-box`, `padding-box` oder `content-box` zu ändern, um zu sehen, wie sich die als Ausgangspunkt verwendete Referenzbox ändert, bevor Offsets berechnet werden.

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

Sie können auch Rechtecke basierend auf Entfernungen von den oberen und linken Rändern der Referenzbox mit der Funktion [`rect()`](/de/docs/Web/CSS/Reference/Values/basic-shape/rect) oder durch Breite und Höhe mit der Funktion [`xywh()`](/de/docs/Web/CSS/Reference/Values/basic-shape/xywh) erstellen; beide unterstützen auch optionale abgerundete Ecken.

## circle()

Der Wert [`circle()`](/de/docs/Web/CSS/Reference/Values/basic-shape/circle) für `shape-outside` kann zwei mögliche Argumente annehmen: ein `<shape-radius>`, der die Größe definiert, und `<position>`, das den Standort definiert.

Die Werte `circle()` und `ellipse()` für `shape-outside` akzeptieren beide [`<shape-radius>`](/de/docs/Web/CSS/Reference/Values/basic-shape#shape-radius) als Argument. Dies kann eine {{cssxref("length")}}, ein {{cssxref("percentage")}}, oder eines der Schlüsselwörter `closest-side` oder `farthest-side` sein.

Der Schlüsselwortwert `closest-side` verwendet die Länge von der Mitte der Form bis zur nächsten Seite der Referenzbox, um die Radiuslänge zu erstellen. Der Schlüsselwortwert `farthest-side` verwendet die Länge von der Mitte der Form bis zur weitesten Seite der Referenzbox.

Das zweite Argument ist eine `position`, die einen ein- oder zweischlüsseligen [`<position>`](/de/docs/Web/CSS/Reference/Values/position_value) Wert akzeptiert, um die Position des Mittelpunkts des Kreises anzuzeigen. Dies wird auf die gleiche Weise wie {{cssxref("background-position")}} angegeben; wenn ein oder beide Werte weggelassen werden, sind die Standardwerte `center`.

Um einen Kreis zu erstellen, fügen wir einen einzelnen Radiuswert hinzu, gefolgt von dem Schlüsselwort **at** und einem Positionswert. Dieses Beispiel hat einen Kreis, der auf ein {{htmlelement("img")}} mit einer `width` und `height` von `210px` und einem `margin` von `20px` angewendet wird. Dies ergibt eine Gesamtbreite für die Referenzbox von `250px`. Der Wert von `50%` für `<shape-radius>` bedeutet, dass der Radius `125px` beträgt. Der Positionswert ist auf `30%` gesetzt, was bedeutet, dass er `30%` vom linken Rand und im vertikalen Standard-`center` ist.

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

Spielen Sie mit der Vergrößerung oder Verkleinerung der Größe des Kreises, indem Sie die Größe des Radius ändern, den Kreis mit dem Positionswert verschieben oder eine Referenzbox wie bei `inset()` festlegen.

Das untenstehende Beispiel kombiniert generierten Inhalt mit einer `circle()`-Funktion, die die Schlüsselwörter `top left` für die Position verwendet. Dies erstellt eine Viertelkreisform in der oberen linken Ecke der Seite, um die der Text fließt.

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

### Die Form wird von der Randbox beschnitten

Wie oben in [Referenzboxen](#die_referenzbox) erwähnt, wird die `margin-box` die Form abschneiden. Sie können dies sehen, indem Sie das Zentrum unseres Kreises in Richtung des Inhalts bewegen, indem Sie die Position auf `60%` setzen. Das Zentrum des Kreises wird näher am Inhalt sein und der Kreis wird über die Randbox hinausgehen. Das bedeutet, dass die Erweiterung abgeschnitten und quadratisch abgeschnitten wird.

```css
img {
  float: left;
  shape-outside: circle(50% at 60%);
}
```

![Der Kreisform wird von der Randbox abgeschnitten](shapes-circle-clipped.png)

## ellipse()

Eine Ellipse ist ein gestauchter Kreis. Daher funktioniert die Funktion [`ellipse()`](/de/docs/Web/CSS/Reference/Values/basic-shape/ellipse) sehr ähnlich wie `circle()`, außer dass wir zwei Radien angeben müssen, `x` und `y`, in dieser Reihenfolge.

Diese können dann wie bei `circle()` von einem oder zwei `<position>`-Werten gefolgt werden, um den Standort des Mittelpunkts der Ellipse zu definieren. Im untenstehenden Beispiel haben wir eine Ellipse mit einem `x`-Radius von `40%`, einem `y`-Radius von `50%` und die `<position>` ist auf `left` gesetzt. Dies bedeutet, dass der Mittelpunkt der Ellipse am Zentrum der linken Kante der Referenzbox liegt. Dies erzeugt eine Halbellipsenform, um die der Text gewickelt wird. Sie können diese Werte ändern, um zu sehen, wie sich die Ellipse verändert.

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

Die Schlüsselwortwerte `closest-side` und `farthest-side` sind nützlich, um schnell eine Ellipse basierend auf der Größe des geschwommenen Elementreferenzkastens zu erstellen.

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

Die Funktion [`polygon()`](/de/docs/Web/CSS/Reference/Values/basic-shape/polygon) ist komplexer und ermöglicht die Erstellung von mehrseitigen Polygonformen. Diese Form akzeptiert drei oder mehr Wertepaarungen (ein Polygon muss mindestens ein Dreieck zeichnen). Jedes durch Leerzeichen getrennte Wertepaar wird mit einem Komma getrennt und stellt die Koordinaten eines einzelnen Scheitelpunkts dar, der relativ zur Referenzbox gezeichnet wird. Jedes Koordinatenpaar definiert eine Seite des Polygons, mit der letzten Kante, die durch das erste und letzte Koordinatenpaar definiert wird.

Das untenstehende Beispiel erstellt eine Form, der der Text mit der Funktion `polygon()` folgt. Versuchen Sie, die Koordinatenwerte zu ändern, um zu sehen, wie sich die Form verändert.

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

Um noch komplexere Formen zu erstellen, können Sie die Umrisse einer beliebigen Form mit den Funktionen [`path()`](/de/docs/Web/CSS/Reference/Values/basic-shape/path) oder [`shape()`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape) festlegen.

Die Funktionen `inset()`, `circle()`, `ellipse()` und `polygon()` sind mit dem Firefox Developer Tools Shape Inspector inspizierbar und bearbeitbar. Der untenstehende Screenshot zeigt die im Werkzeug hervorgehobene Form.

![Die Polygon-Grundform, hervorgehoben mit dem Shapes Inspector.](shapes-polygon.png)

Eine weitere Ressource ist [Clippy](https://bennettfeely.com/clippy/), ein Tool zum Erstellen von Formen mit Beispielen unter Verwendung der CSS {{cssxref("clip-path")}}-Eigenschaft, die dieselben Grundformfunktionen und -werte wie die `shape-outside`-Eigenschaft verwendet.
