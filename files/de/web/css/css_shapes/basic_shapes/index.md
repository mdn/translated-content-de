---
title: Grundformen mit shape-outside
short-title: Verwendung von shape-outside
slug: Web/CSS/CSS_shapes/Basic_shapes
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

CSS-Formen können mit dem {{cssxref("&lt;basic-shape&gt;")}}-Typ definiert werden. In diesem Leitfaden besprechen wir das Erstellen von Rechtecken, Kreisen, Ellipsen und Polygonen mit der {{cssxref("shape-outside")}}-Eigenschaft. Diese Funktionen sind im [CSS shapes module](/de/docs/Web/CSS/CSS_shapes) definiert.

Bevor Sie sich mit den Formen beschäftigen, ist es wichtig, zwei Informationen zu verstehen, die zusammen diese Formen ermöglichen:

- Der `<basic-shape>`-Typ
- Die Referenzbox

## Der \<basic-shape>-Typ

Der [`<basic-shape>`](/de/docs/Web/CSS/basic-shape)-Typ wird als Wert für alle unsere Grundformen verwendet. Dieser Typ ist eine Funktionsnotation: Die Funktionsklammern enthalten Argumente zur Beschreibung der Form.

Die akzeptierten Argumente variieren je nach zu erstellender Form. Wir werden diese in den folgenden Beispielen behandeln.

## Die Referenzbox

Das Verständnis der von CSS-Formen verwendeten Referenzbox ist wichtig, wenn Grundformen verwendet werden, da sie das Koordinatensystem jeder Form definiert. Sie haben die Referenzbox bereits im [Leitfaden zum Erstellen von Formen aus Boxwerten](/de/docs/Web/CSS/CSS_shapes/From_box_values) kennengelernt, der die Referenzbox direkt zur Erstellung der Form verwendet.

Der Screenshot unten zeigt den Firefox Shapes Inspector, der die Referenzbox eines mit `shape-outside: circle(50%)` erstellten Kreises anzeigt. Das Element hat 20 Pixel Polsterung, Rand und Begrenzung angewendet. Der Shapes Inspector hebt diese Referenzboxen hervor.

![Text umfließt einen nach links geflohten Kreis. Die linke Kante des Textes ist kreisförmig, die um die außen am Rand abgeschnittene Form anliegt, wobei sich der Rand dem Formabschnitt anpasst.](shapes-reference-box.png)

Die Standardreferenzbox für eine Grundform ist die `margin-box`. Sie können im Screenshot sehen, dass die Form relativ zu diesem Teil des Box-Modells definiert ist.

Obwohl die Standardreferenzbox die `margin-box` ist, kann dies modifiziert werden. Um eine andere Box als Referenzbox festzulegen, fügen Sie den gewünschten Boxwert nach Ihrer Grundformdefinition hinzu.

Diese beiden Deklarationen sind identisch:

```css
shape-outside: circle(50%);
shape-outside: circle(50%) margin-box;
```

Um für Ihre Form eine andere Referenzbox zu verwenden, fügen Sie einen anderen {{cssxref("box-edge")}}-Wert hinzu, beispielsweise um die Begrenzung als Referenzbox für unseren Kreis zu verwenden:

```css
.shape {
  shape-outside: circle(50%) border-box;
}
```

Formen, die über die Randbox hinausreichen, werden auf die Randbox beschnitten. Die folgenden Grundformen demonstrieren dies.

Für eine ausführlichere Erklärung der Referenzboxen, wie sie bei CSS-Formen angewendet werden, siehe [Verstehen von Referenzboxen für CSS-Formen](http://razvancaliman.com/writing/css-shapes-reference-boxes/).

## inset()

Die [`inset()`](/de/docs/Web/CSS/basic-shape/inset)-Funktion definiert ein Rechteck. Das mag nicht sehr nützlich erscheinen, da das Fließen eines Elements ohne Formen bereits eine rechteckige Form erzeugen würde. Aber der `inset()`-Typ ermöglicht die Definition von Offsets, wodurch der umfließende Text um das verkleinerte Rechteck herumgezogen wird, über Teile des geflohten Elements hinweg.

Die `inset()`-Funktion nimmt bis zu vier Seiten-Offset-Werte auf, gefolgt von einem optionalen `round`-Schlüsselwort und einem {{cssxref("border-radius")}}-Wert. Der untenstehende CSS-Code erstellt eine rechteckige Form, die von der Referenzbox des geflohten Elements um 20 Pixel von oben und unten sowie 10 Pixel von links und rechts versetzt ist, mit einem `border-radius` von 10 Pixeln.

```css
.shape {
  float: left;
  shape-outside: inset(20px 10px 20px 10px round 10px);
}
```

Die Offset-Werte verwenden die gleichen Regeln wie die Kurzschrift für {{cssxref("margin")}}. Vier durch Leerzeichen getrennte Werte definieren die Offsets oben, rechts, unten und links — in dieser Reihenfolge. Sie können auch mehr als einen Offset gleichzeitig setzen:

- Wenn nur ein Wert vorhanden ist, gilt er für alle Seiten.
- Wenn es zwei Werte gibt, werden die Offsets oben und unten auf den ersten Wert eingestellt und die Offsets rechts und links auf den zweiten.
- Wenn es drei Werte gibt, wird der erste Wert oben angewendet, der zweite links und rechts, und der dritte unten.

Die obigen Regeln können daher auch so geschrieben werden:

```css
.shape {
  float: left;
  shape-outside: inset(20px 10px round 10px);
}
```

Im folgenden Beispiel verwenden wir eine `inset()`-Form, um Inhalt über das geflohene Element zu ziehen. Ändern Sie die Offset-Werte, um zu sehen, wie sich die Form ändert.

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

Sie können auch einen Boxwert als alternative Referenzbox hinzufügen. Im nachstehenden Beispiel versuchen Sie, die Referenzbox von `margin-box` zu `border-box`, `padding-box` oder `content-box` zu ändern, um zu sehen, wie sich die verwendete Referenzbox als Ausgangspunkt ändert, bevor die Offsets berechnet werden.

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

Sie können auch Rechtecke basierend auf Abständen von den oberen und linken Kanten der Referenzbox mit der [`rect()`](/de/docs/Web/CSS/basic-shape/rect)-Funktion oder durch Breite und Höhe mit der [`xywh()`](/de/docs/Web/CSS/basic-shape/xywh)-Funktion erstellen; beide unterstützen auch optionale abgerundete Ecken.

## circle()

Der [`circle()`](/de/docs/Web/CSS/basic-shape/circle)-Wert für `shape-outside` kann zwei mögliche Argumente annehmen: einen `<shape-radius>`, der die Größe definiert, und die `<position>`, die seine Position bestimmt.

Die `circle()`- und `ellipse()`-`shape-outside`-Werte akzeptieren beide [`<shape-radius>`](/de/docs/Web/CSS/basic-shape#shape-radius) als Argument. Dies kann eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder eines der Schlüsselwörter `closest-side` oder `farthest-side` sein.

Der `closest-side`-Schlüsselwert verwendet die Länge vom Zentrum der Form zur nächstgelegenen Seite der Referenzbox, um die Radiuslänge zu erzeugen. Der `farthest-side`-Schlüsselwert verwendet die Länge vom Zentrum der Form zur am weitesten entfernten Seite der Referenzbox.

Das zweite Argument ist eine `position`, die einen ein- oder zwei-Schlüsselwort [`<position>`](/de/docs/Web/CSS/position_value)-Wert akzeptiert, um die Position des Kreismittelpunkts anzugeben. Dies wird auf die gleiche Weise wie {{cssxref("background-position")}} angegeben; wenn ein oder beide Werte weggelassen werden, sind die Standardwerte `center`.

Um einen Kreis zu erstellen, fügen wir einen einzigen Radiuswert hinzu, gefolgt von optional dem Schlüsselwort **at** und einem Positionswert. Dieses Beispiel hat einen Kreis, der auf ein {{htmlelement("img")}} mit einer `width` und `height` von `210px` und einem `margin` von `20px` angewendet wurde. Dies ergibt eine Gesamtbreite der Referenzbox von `250px`. Der `50%`-Wert für den `<shape-radius>` bedeutet, dass der Radius `125px` beträgt. Der Positionswert ist auf `30%` gesetzt, was `30%` von links und auf das Standard-vertikale `center` bedeutet.

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

Probieren Sie aus, die Größe des Kreises zu vergrößern oder zu verkleinern, indem Sie die Größe des Radius ändern, den Kreis mit dem Positionswert verschieben oder eine Referenzbox festlegen, wie wir es für `inset()` getan haben.

Das untenstehende Beispiel kombiniert generierten Inhalt mit einer `circle()`-Funktion, die die Schlüsselwörter `top left` für die Position verwendet. Dies erzeugt eine Viertelkreisform in der oberen linken Ecke der Seite, um den der Text fließen wird.

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

Wie in [Referenzboxen](#die_referenzbox) oben erwähnt, wird die `margin-box` die Form beschneiden. Sie können dies sehen, indem Sie das Zentrum unseres Kreises in Richtung des Inhalts bewegen, indem Sie die Position auf `60%` setzen. Das Zentrum des Kreises wird näher am Inhalt liegen und der Kreis wird über die Randbox hinausragen. Dies bedeutet, dass die Erweiterung beschnitten und quadratisch abgeschnitten wird.

```css
img {
  float: left;
  shape-outside: circle(50% at 60%);
}
```

![Die Kreisform wird von der Randbox beschnitten](shapes-circle-clipped.png)

## ellipse()

Eine Ellipse ist ein zusammengedrückter Kreis. Daher funktioniert die [`ellipse()`](/de/docs/Web/CSS/basic-shape/ellipse)-Funktion sehr ähnlich wie `circle()`, außer dass wir zwei Radien, `x` und `y` in dieser Reihenfolge angeben müssen.

Diese können dann wie bei `circle()` von einem oder zwei `<position>`-Werten gefolgt werden, um die Position des Zentrums der Ellipse zu definieren. Im untenstehenden Beispiel haben wir eine Ellipse mit einem `x`-Radius von `40%`, einem `y`-Radius von `50%` und der `<position>` auf `left` gesetzt. Dadurch befindet sich das Zentrum der Ellipse in der Mitte der linken Kante der Referenzbox. Dies erzeugt eine halbelliptische Form, um die der Text fließt. Sie können diese Werte ändern, um zu sehen, wie sich die Ellipse verändert.

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

Die Schlüsselwerten `closest-side` und `farthest-side` sind nützlich, um schnell eine Ellipse basierend auf der Größe der geflohten Element-Referenzbox zu erstellen.

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

Die [`polygon()`](/de/docs/Web/CSS/basic-shape/polygon)-Funktion ist komplexer und ermöglicht die Erstellung von mehrseitigen Polygonformen. Diese Form akzeptiert drei oder mehr Wertepaarungen (ein Polygon muss mindestens ein Dreieck zeichnen). Jedes durch Leerzeichen getrennte Paar von Werten wird mit einem Komma getrennt und stellt die Koordinaten eines einzelnen Scheitelpunkts dar, der relativ zur Referenzbox gezeichnet wird. Jedes Koordinatenpaar definiert eine Kante des Polygons, wobei die letzte Kante durch das erste und letzte Set von Koordinaten definiert wird.

Im folgenden Beispiel wird mit der `polygon()`-Funktion eine Form erstellt, der der Text folgt. Versuchen Sie, die Koordinatenwerte zu ändern, um zu sehen, wie sich die Form verändert.

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

Um noch komplexere Formen zu erstellen, können Sie die Umrisse einer beliebigen Form mit den Funktionen [`path()`](/de/docs/Web/CSS/basic-shape/path) oder [`shape()`](/de/docs/Web/CSS/basic-shape/shape) definieren.

Die Funktionen `inset()`, `circle()`, `ellipse()` und `polygon()` sind mithilfe des Firefox Developer Tools Shape Inspector überprüfbar und bearbeitbar. Der untenstehende Screenshot zeigt die im Tool hervorgehobene Form.

![Die Polygon-Grundform, hervorgehoben mit dem Shapes Inspector.](shapes-polygon.png)

Eine weitere Ressource ist [Clippy](https://bennettfeely.com/clippy/), ein Tool zur Erstellung von Formen mit Beispielen, die die CSS {{cssxref("clip-path")}}-Eigenschaft verwenden, welche die gleichen Grundformfunktionen und -werte wie die `shape-outside`-Eigenschaft verwendet.
