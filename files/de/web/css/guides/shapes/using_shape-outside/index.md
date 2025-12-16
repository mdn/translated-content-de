---
title: Grundformen mit shape-outside
short-title: Verwendung von shape-outside
slug: Web/CSS/Guides/Shapes/Using_shape-outside
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

CSS-Formen können mithilfe des {{cssxref("basic-shape")}}-Typs definiert werden. In diesem Leitfaden besprechen wir die Erstellung von Rechtecken, Kreisen, Ellipsen und Polygonen mit der {{cssxref("shape-outside")}}-Eigenschaft. Diese sind in dem [CSS-Form-Modul](/de/docs/Web/CSS/Guides/Shapes) definiert.

Bevor wir uns die Formen ansehen, sollten zwei Informationen verstanden werden, die zusammen diese Formen ermöglichen:

- Der `<basic-shape>`-Typ
- Die Referenzbox

## Der \<basic-shape>-Typ

Der {{cssxref("basic-shape")}}-Typ wird als Wert für alle unsere Grundformen verwendet. Dieser Typ ist eine funktionale Notation: Die Klammern der Funktion enthalten Argumente, die zur Beschreibung der Form verwendet werden.

Die akzeptierten Argumente variieren je nach der Form, die Sie erstellen. Diese werden in den unten stehenden Beispielen behandelt.

## Die Referenzbox

Das Verständnis der Referenzbox, die von CSS-Formen verwendet wird, ist wichtig, wenn man Grundformen verwendet, da sie das Koordinatensystem jeder Form definiert. Sie haben die Referenzbox bereits in [dem Leitfaden zur Erstellung von Formen aus Box-Werten](/de/docs/Web/CSS/Guides/Shapes/From_box_values) kennengelernt, der die Referenzbox direkt zur Erstellung der Form nutzt.

Der unten stehende Screenshot zeigt den Firefox Shapes Inspector, der die Referenzbox eines Kreises anzeigt, der mit `shape-outside: circle(50%)` erstellt wurde. Das Element hat 20 Pixel Polsterung, Rand und Abstand angewendet. Der Shapes Inspector hebt diese Referenzboxen hervor.

![Text, der um einen Kreis schlingt, der links schwebt. Die linke Kante des Textes ist kreisförmig und stößt an die beschnittene Form am äußeren Rand der Marge mit der Marge, die der Formkürzung folgt.](shapes-reference-box.png)

Die Standard-Referenzbox für eine Grundform ist die `margin-box`. Im Screenshot können Sie sehen, dass die Form relativ zu diesem Teil des Box-Modells definiert ist.

Während die Standard-Referenzbox die `margin-box` ist, kann dies geändert werden. Um eine andere Box als Referenzbox festzulegen, geben Sie den gewünschten Box-Wert nach Ihrer Grundformdefinition an.

Diese beiden Deklarationen sind identisch:

```css
shape-outside: circle(50%);
shape-outside: circle(50%) margin-box;
```

Damit Ihre Form eine andere Referenzbox verwendet, geben Sie einen anderen {{cssxref("box-edge")}}-Wert an. Beispielsweise verwenden Sie den Rand als Referenzbox für unseren Kreis, indem Sie festlegen:

```css
.shape {
  shape-outside: circle(50%) border-box;
}
```

Formen, die über die Margin-Box hinausgehen, werden auf die Margin-Box zugeschnitten. Die folgenden Grundformen demonstrieren dies.

## inset()

Die [`inset()`](/de/docs/Web/CSS/Reference/Values/basic-shape/inset)-Funktion definiert ein Rechteck. Das mag nicht sehr nützlich erscheinen, da das Schweben eines Elements ohne Formen eine rechteckige Form um dieses herum ergibt. Der `inset()`-Typ ermöglicht jedoch die Definition von Versätzen, sodass der umfließende Text um das verkleinerte Rechteck über Teile des schwebenden Elements herumgezogen wird.

Die `inset()`-Funktion nimmt bis zu vier Seitenversatzwerte, gefolgt von einem optionalen `round`-Schlüsselwort und einem {{cssxref("border-radius")}}-Wert an. Das unten stehende CSS erstellt eine rechteckige Form, die um 20 Pixel nach oben und unten und 10 Pixel nach links und rechts aus der Referenzbox des schwebenden Elements versetzt ist, mit einem `border-radius`-Wert von 10 Pixel.

```css
.shape {
  float: left;
  shape-outside: inset(20px 10px 20px 10px round 10px);
}
```

Die Versatzwerte verwenden die gleichen Regeln wie die {{cssxref("margin")}}-Kurzform. Vier durch Leerzeichen getrennte Werte definieren die Versätze oben, rechts, unten und links — in dieser Reihenfolge. Sie können auch mehr als einen Versatz gleichzeitig festlegen:

- Wenn es nur einen Wert gibt, gilt er für alle Seiten.
- Wenn es zwei Werte gibt, werden die oberen und unteren Versätze auf den ersten Wert gesetzt und die rechten und linken Versätze auf den zweiten.
- Wenn es drei Werte gibt, wird der obere Wert auf den ersten Wert gesetzt, die linken und rechten auf den zweiten und der untere auf den dritten.

Die obigen Regeln können daher auch wie folgt geschrieben werden:

```css
.shape {
  float: left;
  shape-outside: inset(20px 10px round 10px);
}
```

Im folgenden Beispiel haben wir eine `inset()`-Form, um Inhalte über das schwebende Element zu ziehen. Ändern Sie die Versatzwerte, um zu sehen, wie sich die Form verändert.

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

Sie können auch einen Box-Wert als alternative Referenzbox hinzufügen. Im folgenden Beispiel versuchen Sie, die Referenzbox von `margin-box` auf `border-box`, `padding-box` oder `content-box` zu ändern, um zu sehen, wie die verwendete Referenzbox als Ausgangspunkt Änderungen erfährt, bevor die Versätze berechnet werden.

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

Sie können auch Rechtecke basierend auf Abständen von den oberen und linken Kanten der Referenzbox mit der [`rect()`](/de/docs/Web/CSS/Reference/Values/basic-shape/rect)-Funktion oder durch Breite und Höhe mit der [`xywh()`](/de/docs/Web/CSS/Reference/Values/basic-shape/xywh)-Funktion erstellen; beide unterstützen auch optionale abgerundete Ecken.

## circle()

Der [`circle()`](/de/docs/Web/CSS/Reference/Values/basic-shape/circle)-Wert für `shape-outside` kann zwei mögliche Argumente akzeptieren: ein `<shape-radius>`, das die Größe definiert, und die `<position>`, die den Ort definiert.

Die `circle()` und `ellipse()` `shape-outside`-Werte akzeptieren beide [`<shape-radius>`](/de/docs/Web/CSS/Reference/Values/basic-shape#shape-radius) als Argument. Dies kann eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder eines der Schlüsselwörter `closest-side` oder `farthest-side` sein.

Der `closest-side`-Schlüsselwortwert verwendet die Länge vom Mittelpunkt der Form zur nächstgelegenen Seite der Referenzbox, um die Radiuslänge zu erzeugen. Der `farthest-side`-Schlüsselwortwert verwendet die Länge vom Mittelpunkt der Form zur am weitesten entfernten Seite der Referenzbox.

Das zweite Argument ist eine `position`, die einen ein- oder zwei-Schlüsselwörter {{cssxref("&lt;position&gt;")}}-Wert akzeptiert, um die Position des Mittelpunkts des Kreises anzugeben. Dies wird auf die gleiche Weise wie {{cssxref("background-position")}} angegeben; wenn ein oder beide Werte weggelassen werden, setzen sich die Werte auf `center` zurück.

Um einen Kreis zu erstellen, enthalten wir einen einzigen Radiuswert, gefolgt von dem optionalen Schlüsselwort **at** und einem Positionswert. Dieses Beispiel hat einen Kreis, der auf ein {{htmlelement("img")}} mit einer `width` und `height` von `210px` und einem `margin` von `20px` angewendet wird. Dies ergibt eine Gesamtbreite der Referenzbox von `250px`. Der `50%`-Wert für den `<shape-radius>` bedeutet, dass der Radius `125px` beträgt. Der Positionswert ist auf `30%` festgelegt, was `30%` von links und auf dem Standard `center` vertikal ist.

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

Spielen Sie mit der Vergrößerung oder Verkleinerung der Größe des Kreises, indem Sie die Größe des Radius ändern, den Kreis mit dem Positionswert verschieben oder eine Referenzbox festlegen, wie wir es für `inset()` getan haben.

Das folgende Beispiel kombiniert generierten Inhalt mit einer `circle()`-Funktion, die die Schlüsselwörter `top left` für die Position verwendet. Dies erzeugt eine viertelkreisförmige Form in der oberen linken Ecke der Seite, um die der Text fließt.

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

### Die Form wird von der Margin-Box beschnitten

Wie oben bei den [Referenzboxen](#die_referenzbox) erwähnt, wird die `margin-box` die Form abschneiden. Sie können dies sehen, indem Sie das Zentrum unseres Kreises in Richtung des Inhalts bewegen, indem Sie die Position auf `60%` setzen. Das Zentrum des Kreises wird näher am Inhalt sein und der Kreis wird über die Margin-Box hinausgehen. Dies bedeutet, dass die Verlängerung abgeschnitten und quadratisch wird.

```css
img {
  float: left;
  shape-outside: circle(50% at 60%);
}
```

![Die Kreisform wird von der Margin-Box abgeschnitten](shapes-circle-clipped.png)

## ellipse()

Eine Ellipse ist ein zusammengeschobener Kreis. Die [`ellipse()`](/de/docs/Web/CSS/Reference/Values/basic-shape/ellipse)-Funktion funktioniert auf sehr ähnliche Weise wie `circle()`, es müssen jedoch zwei Radien, `x` und `y`, in dieser Reihenfolge angegeben werden.

Diese können dann wie bei `circle()` von einem oder zwei `<position>`-Werten gefolgt werden, um die Position des Mittelpunkts der Ellipse zu definieren. Im folgenden Beispiel haben wir eine Ellipse mit einem `x`-Radius von `40%`, einem `y`-Radius von `50%` und die `<position>` ist auf `left` gesetzt. Dies bedeutet, dass der Mittelpunkt der Ellipse am Zentrum der linken Kante der Referenzbox liegt. Dies schafft eine halb-elliptische Form, um die der Text fließen wird. Sie können diese Werte ändern, um zu sehen, wie sich die Ellipse verändert.

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

Mit der [`polygon()`](/de/docs/Web/CSS/Reference/Values/basic-shape/polygon)-Funktion können Sie komplexere, mehrseitige Polygonformen erstellen. Diese Form akzeptiert drei oder mehr Wertepaarungen (ein Polygon muss mindestens ein Dreieck zeichnen). Jedes durch Leerzeichen getrennte Wertepaar ist durch ein Komma getrennt und repräsentiert die Koordinaten eines einzelnen Scheitelpunkts, der relativ zur Referenzbox gezeichnet wird. Jedes Koordinatenpaar definiert eine Kante des Polygons, wobei die letzte Kante durch das erste und letzte Koordinatenpaar definiert wird.

Das unten stehende Beispiel erstellt eine Form, der der Text mit der `polygon()`-Funktion folgen soll. Versuchen Sie, die Koordinatenwerte zu ändern, um zu sehen, wie sich die Form verändert.

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

Um noch komplexere Formen zu erstellen, können Sie die Umrisse jeder Form mit den [`path()`](/de/docs/Web/CSS/Reference/Values/basic-shape/path)- oder [`shape()`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape)-Funktionen definieren.

Die `inset()`, `circle()`, `ellipse()`, und `polygon()` sind inspizierbar und bearbeitbar mit dem Shape Inspector der Firefox Developer Tools. Der unten stehende Screenshot zeigt die Form, die im Tool hervorgehoben ist.

![Die Polygon-Grundform, hervorgehoben mit dem Shapes Inspector.](shapes-polygon.png)

Eine weitere Ressource ist [Clippy](https://bennettfeely.com/clippy/), ein Tool zur Erstellung von Formen mit Beispielen unter Verwendung der CSS {{cssxref("clip-path")}}-Eigenschaft, die dieselben Grundform-Funktionen und Werte wie die `shape-outside`-Eigenschaft verwendet.
