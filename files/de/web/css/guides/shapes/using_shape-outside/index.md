---
title: Grundlegende Formen mit shape-outside
short-title: Verwendung von shape-outside
slug: Web/CSS/Guides/Shapes/Using_shape-outside
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

CSS-Formen können mit dem {{cssxref("&lt;basic-shape&gt;")}} Typ definiert werden. In diesem Leitfaden besprechen wir die Erstellung von Rechtecken, Kreisen, Ellipsen und Polygonen mit der {{cssxref("shape-outside")}} Eigenschaft. Diese Funktionen sind im [CSS Shapes Modul](/de/docs/Web/CSS/Guides/Shapes) definiert.

Bevor Sie sich die Formen anschauen, ist es sinnvoll, zwei Informationsstücke zu verstehen, die zusammen diese Formen ermöglichen:

- Der `<basic-shape>` Typ
- Die Referenzbox

## Der \<basic-shape> Typ

Der [`<basic-shape>`](/de/docs/Web/CSS/Reference/Values/basic-shape) Typ wird als Wert für alle unsere grundlegenden Formen verwendet. Dieser Typ ist eine Funktionsnotation: Die Klammern der Funktion enthalten Argumente, die die Form beschreiben.

Die akzeptierten Argumente variieren je nachdem, welche Form Sie erstellen. Wir werden diese in den folgenden Beispielen behandeln.

## Die Referenzbox

Das Verständnis der Referenzbox, die von CSS-Formen verwendet wird, ist wichtig, wenn Sie grundlegende Formen verwenden, da sie das Koordinatensystem jeder Form definiert. Sie haben die Referenzbox bereits im [Leitfaden zur Erstellung von Formen aus Boxwerten](/de/docs/Web/CSS/Guides/Shapes/From_box_values) kennengelernt, der die Referenzbox direkt verwendet, um die Form zu erstellen.

Der Screenshot unten zeigt den Firefox Shapes Inspector, der die Referenzbox eines Kreises anzeigt, der mit `shape-outside: circle(50%)` erstellt wurde. Dem Element wurden 20 Pixel Polsterung, Rahmen und Rand zugewiesen. Der Shapes Inspector hebt diese Referenzboxen hervor.

![Text, der sich um einen links schwebenden Kreis legt. Die linke Kante des Textes ist kreisförmig und berührt die abgeschnittene Form an der Außenseite des Randes, wobei der Rand der Form folgt.](shapes-reference-box.png)

Die Standard-Referenzbox für eine grundlegende Form ist die `margin-box`. Sie können im Screenshot sehen, dass die Form relativ zu diesem Teil des Boxmodells definiert ist.

Während die Standard-Referenzbox die `margin-box` ist, kann diese modifiziert werden. Um eine andere Box als Referenzbox festzulegen, geben Sie den gewünschten Boxwert nach Ihrer Definition der grundlegenden Form an.

Diese beiden Deklarationen sind identisch:

```css
shape-outside: circle(50%);
shape-outside: circle(50%) margin-box;
```

Damit Ihre Form eine andere Referenzbox verwendet, geben Sie einen anderen {{cssxref("box-edge")}} Wert an. Zum Beispiel, um den Rahmen als Referenzbox für unseren Kreis zu verwenden, setzen Sie:

```css
.shape {
  shape-outside: circle(50%) border-box;
}
```

Formen, die über die Margin-Box hinausgehen, werden auf die Margin-Box zugeschnitten. Die folgenden grundlegenden Formen demonstrieren dies.

## inset()

Die [`inset()`](/de/docs/Web/CSS/Reference/Values/basic-shape/inset) Funktion definiert ein Rechteck. Dies mag nicht sehr nützlich erscheinen, da das Schweben eines Elements ohne Formen Ihnen eine rechteckige Form um es herum gibt. Jedoch ermöglicht der `inset()` Typ die Definition von Versatzwerten, wodurch der umschließende Text um das verkleinerte Rechteck gezogen wird, über Teilen des schwebenden Elements.

Die `inset()` Funktion akzeptiert bis zu vier Seiten-Versatzwerte sowie ein optionales `round` Schlüsselwort, gefolgt von einem {{cssxref("border-radius")}} Wert. Das folgende CSS erstellt eine rechteckige Form, die 20 Pixel von oben und unten und 10 Pixel von links und rechts von der Referenzbox des schwebenden Elements zurückgesetzt ist, mit einem `border-radius` Wert von 10 Pixel.

```css
.shape {
  float: left;
  shape-outside: inset(20px 10px 20px 10px round 10px);
}
```

Die Versatzwerte verwenden die gleichen Regeln wie die {{cssxref("margin")}} Kurzschreibweise. Vier durch Leerzeichen getrennte Werte definieren die Versätze oben, rechts, unten und links – in dieser Reihenfolge. Sie können auch mehr als einen Versatz gleichzeitig festlegen:

- Wenn nur ein Wert vorhanden ist, gilt er für alle Seiten.
- Wenn zwei Werte vorhanden sind, werden die Versätze oben und unten auf den ersten Wert gesetzt, und die rechten und linken Versätze auf den zweiten.
- Wenn drei Werte vorhanden sind, wird oben auf den ersten Wert gesetzt, links und rechts auf den zweiten, und unten auf den dritten.

Die obigen Regeln können daher auch wie folgt geschrieben werden:

```css
.shape {
  float: left;
  shape-outside: inset(20px 10px round 10px);
}
```

Im Beispiel unten haben wir eine `inset()` Form verwendet, um Inhalt über das schwebende Element zu ziehen. Ändern Sie die Versatzwerte, um zu sehen, wie sich die Form ändert.

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

Sie können auch einen Boxwert als alternative Referenzbox hinzufügen. Im nachstehenden Beispiel versuchen Sie, die Referenzbox von `margin-box` zu `border-box`, `padding-box` oder `content-box` zu ändern, um zu sehen, wie sich die verwendete Referenzbox als Ausgangspunkt ändert, bevor Versätze berechnet werden.

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

Sie können auch Rechtecke basierend auf Abständen von den oberen und linken Kanten der Referenzbox mit der [`rect()`](/de/docs/Web/CSS/Reference/Values/basic-shape/rect) Funktion oder nach Breite und Höhe mit der [`xywh()`](/de/docs/Web/CSS/Reference/Values/basic-shape/xywh) Funktion erstellen; beide unterstützen auch optionale abgerundete Ecken.

## circle()

Der [`circle()`](/de/docs/Web/CSS/Reference/Values/basic-shape/circle) Wert für `shape-outside` kann zwei mögliche Argumente akzeptieren: einen `<shape-radius>`, der die Größe definiert, und die `<position>`, die seine Lage bestimmt.

Die `circle()` und `ellipse()` `shape-outside` Werte akzeptieren beide [`<shape-radius>`](/de/docs/Web/CSS/Reference/Values/basic-shape#shape-radius) als Argument. Dies kann eine {{cssxref("length")}}, ein {{cssxref("percentage")}}, oder eines der Schlüsselwörter `closest-side` oder `farthest-side` sein.

Das Schlüsselwort `closest-side` verwendet die Länge vom Mittelpunkt der Form zur nächsten Seite der Referenzbox, um die Radiuslänge zu erstellen. Das Schlüsselwort `farthest-side` verwendet die Länge vom Mittelpunkt der Form zur weitesten Seite der Referenzbox.

Das zweite Argument ist eine `position`, die einen ein- oder zwei Schlüsselwörter umfassenden [`<position>`](/de/docs/Web/CSS/Reference/Values/position_value) Wert akzeptiert, um die Position des Mittelpunkts des Kreises anzugeben. Dies wird auf die gleiche Weise wie {{cssxref("background-position")}} spezifiziert; wenn einer oder beide Werte weggelassen werden, sind die Standardwerte `center`.

Um einen Kreis zu erstellen, fügen wir einen einzelnen Radiuswert hinzu, gefolgt vom Schlüsselwort **at** mit einem Positionswert. Dieses Beispiel hat einen auf ein {{htmlelement("img")}} angewendeten Kreis mit einer `width` und `height` von `210px` und einem `margin` von `20px`. Dies gibt eine Gesamtbreite für die Referenzbox von `250px`. Der `50%` Wert für den `<shape-radius>` bedeutet, dass der Radius `125px` ist. Der Positionswert ist auf `30%` gesetzt, was `30%` von links und bei der standardmäßigen vertikalen `center`.

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

Spielen Sie mit der Vergrößerung oder Verkleinerung des Kreises, indem Sie die Größe des Radius ändern, den Kreis mit dem Positionswert verschieben oder eine Referenzbox festlegen, wie wir es für `inset()` getan haben.

Das nachstehende Beispiel kombiniert generierten Inhalt mit einer `circle()` Funktion, die die Schlüsselwörter `top left` für die Position verwendet. Dies erzeugt eine Viertelkreisform in der oberen linken Ecke der Seite, um die sich der Text legt.

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

### Die Form wird durch die Margin-Box abgeschnitten

Wie oben in [Referenzboxen](#die_referenzbox) erwähnt, wird die `margin-box` die Form abschneiden. Sie können dies sehen, indem Sie den Mittelpunkt unseres Kreises näher an den Inhalt bewegen, indem Sie die Position auf `60%` setzen. Der Mittelpunkt des Kreises wird näher am Inhalt sein und der Kreis wird über die `margin-box` hinausreichen. Das bedeutet, dass die Erweiterung abgeschnitten und abgerundet wird.

```css
img {
  float: left;
  shape-outside: circle(50% at 60%);
}
```

![Die Kreisform wird von der Margin-Box abgeschnitten](shapes-circle-clipped.png)

## ellipse()

Eine Ellipse ist ein verzerrter Kreis. Daher funktioniert die [`ellipse()`](/de/docs/Web/CSS/Reference/Values/basic-shape/ellipse) Funktion auf sehr ähnliche Weise wie `circle()`, außer dass wir zwei Radien spezifizieren müssen, `x` und `y` in dieser Reihenfolge.

Diese können dann, wie bei `circle()`, von einem oder zwei `<position>` Werten gefolgt werden, um die Lage des Mittelpunkts der Ellipse zu definieren. Im nachstehenden Beispiel haben wir eine Ellipse mit einem `x`-Radius von `40%`, einem `y`-Radius von `50%` und dem `<position>` auf `left` gesetzt. Dies bedeutet, dass der Mittelpunkt der Ellipse in der Mitte der linken Kante der Referenzbox liegt. Dies erzeugt eine Halbellipse, um die sich der Text wickeln wird. Sie können diese Werte ändern, um zu sehen, wie sich die Ellipse ändert.

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

Die Schlüsselwortwerte `closest-side` und `farthest-side` sind nützlich, um schnell eine Ellipse basierend auf der Größe der Referenzbox des schwebenden Elements zu erstellen.

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

Die [`polygon()`](/de/docs/Web/CSS/Reference/Values/basic-shape/polygon) Funktion ist komplexer und ermöglicht die Erstellung mehrseitiger Polygonformen. Diese Form akzeptiert drei oder mehr Wertepaar-Paare (ein Polygon muss mindestens ein Dreieck zeichnen). Jedes paarweise durch Leerzeichen getrennte Wertepaar wird durch ein Komma getrennt und stellt die Koordinaten eines einzelnen Scheitelpunkts dar, der relativ zur Referenzbox gezeichnet wird. Jedes Koordinatenpaar definiert eine Kante des Polygons, wobei die letzte Kante durch das erste und letzte Koordinatenpaar festgelegt wird.

Das Beispiel unten erstellt eine Form, der der Text mit der `polygon()` Funktion folgt. Versuchen Sie, die Koordinatenwerte zu ändern, um zu sehen, wie sich die Form ändert.

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

Um noch komplexere Formen zu erstellen, können Sie den Umriss einer beliebigen Form mit den Funktionen [`path()`](/de/docs/Web/CSS/Reference/Values/basic-shape/path) oder [`shape()`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape) definieren.

Die `inset()`, `circle()`, `ellipse()`, und `polygon()` können mit dem Firefox Developer Tools Shape Inspector inspiziert und bearbeitet werden. Der Screenshot unten zeigt die im Tool hervorgehobene Form.

![Die Polygon-Grundform, hervorgehoben mit dem Shapes Inspector.](shapes-polygon.png)

Eine weitere Ressource ist [Clippy](https://bennettfeely.com/clippy/), ein Tool zum Erstellen von Formen mit Beispielen, das die CSS {{cssxref("clip-path")}} Eigenschaft verwendet, die dieselben Grundformfunktionen und -werte wie die `shape-outside` Eigenschaft nutzt.
