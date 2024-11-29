---
title: Grundlegende Formen mit shape-outside
slug: Web/CSS/CSS_shapes/Basic_shapes
l10n:
  sourceCommit: dbc32052ef186252a1211d296ff60a9b5e3e8d74
---

{{CSSRef}}

CSS Formen können mithilfe des {{cssxref("&lt;basic-shape&gt;")}} Typs definiert werden. In diesem Leitfaden besprechen wir das Erstellen von Rechtecken, Kreisen, Ellipsen und Polygonen mit der {{cssxref("shape-outside")}} Eigenschaft. Diese Funktionen sind im [CSS shapes module](/de/docs/Web/CSS/CSS_shapes) definiert.

Bevor wir uns mit Formen beschäftigen, ist es wichtig, zwei Informationen zu verstehen, die zusammen diese Formen ermöglichen:

- Der `<basic-shape>` Typ
- Das Referenzfeld

## Der \<basic-shape> Typ

Der [`<basic-shape>`](/de/docs/Web/CSS/basic-shape) Typ wird als Wert für alle unsere grundlegenden Formen verwendet. Dieser Typ ist eine funktionelle Notation: Die Funktionsklammern enthalten Argumente, die zur Beschreibung der Form verwendet werden.

Die akzeptierten Argumente variieren je nach der Form, die Sie erstellen. Diese werden in den untenstehenden Beispielen behandelt.

## Das Referenzfeld

Das Verständnis des von CSS Formen verwendeten Referenzfeldes ist wichtig bei der Verwendung grundlegender Formen, da es das Koordinatensystem jeder Form definiert. Sie haben das Referenzfeld bereits im [Leitfaden über das Erstellen von Formen aus Box-Werten](/de/docs/Web/CSS/CSS_shapes/From_box_values) behandelt, welches das Referenzfeld direkt verwendet, um die Form zu erstellen.

Der untenstehende Screenshot zeigt den Firefox Shapes Inspector, der das Referenzfeld eines mit `shape-outside: circle(50%)` erstellten Kreises anzeigt. Dem Element wurden 20 Pixel Polsterung, Rand und Abstand angewendet. Der Shapes Inspector hebt diese Referenzfelder hervor.

![Text um einen links schwebenden Kreis. Der linke Rand des Textes ist kreisförmig und stößt an die abgeschnittene Form an der Außenseite des Abstands an, wobei der Abstand der Formabschneidung folgt.](shapes-reference-box.png)

Das Standard-Referenzfeld für eine Grundform ist die `margin-box`. Sie können im Screenshot sehen, dass die Form relativ zu diesem Teil des Box-Modells definiert ist.

Obwohl das Standard-Referenzfeld `margin-box` ist, kann dies modifiziert werden. Um eine andere Box als Referenzfeld einzustellen, fügen Sie den gewünschten Box-Wert nach Ihrer Grundformdefinition ein.

Diese beiden Deklarationen sind identisch:

```css
shape-outside: circle(50%);
shape-outside: circle(50%) margin-box;
```

Um eine andere Box als Referenzfeld für Ihre Form zu verwenden, fügen Sie einen anderen {{cssxref("box-edge")}} Wert ein, beispielsweise um den Rand als Referenzfeld für unseren Kreis zu verwenden, setzen Sie:

```css
.shape {
  shape-outside: circle(50%) border-box;
}
```

Formen, die über die margin-box hinausgehen, werden auf die margin-box beschnitten. Die folgenden Grundformen zeigen dies.

Für eine ausführlichere Erklärung der Referenzfelder, wie sie auf CSS Formen angewendet werden, siehe [Understanding reference boxes for CSS shapes](http://razvancaliman.com/writing/css-shapes-reference-boxes/).

## inset()

Die [`inset()`](/de/docs/Web/CSS/basic-shape/inset) Funktion definiert ein Rechteck. Dies mag nicht sehr nützlich erscheinen, da ein schwebendes Element ohne Formen eine rechteckige Form darum erzeugt. Allerdings ermöglicht der `inset()` Typ das Definieren von Versätzen und zieht somit den umfließenden Text um das verkleinerte Rechteck über Teile des schwebenden Elements.

Die `inset()` Funktion akzeptiert bis zu vier Versatzwerte, plus ein optionales `round` Schlüsselwort, gefolgt von einem {{cssxref("border-radius")}} Wert. Das untenstehende CSS erzeugt eine rechteckige Form, die 20 Pixel von oben und unten und 10 Pixel von links und rechts vom Referenzfeld des schwebenden Elements zurückliegt, mit einem `border-radius` Wert von 10 Pixeln.

```css
.shape {
  float: left;
  shape-outside: inset(20px 10px 20px 10px round 10px);
}
```

Die Versatzwerte verwenden die gleichen Regeln wie die {{cssxref("margin")}} Kurzschrift. Vier durch Leerzeichen getrennte Werte definieren die Versätze für oben, rechts, unten und links — in dieser Reihenfolge. Sie können auch mehr als einen Versatz gleichzeitig setzen:

- Wenn es nur einen Wert gibt, gilt er für alle Seiten.
- Wenn es zwei Werte gibt, werden die oberen und unteren Versätze auf den ersten Wert gesetzt und die rechten und linken Versätze auf den zweiten.
- Wenn es drei Werte gibt, wird der obere auf den ersten Wert gesetzt, die linken und rechten auf den zweiten und der untere auf den dritten.

Die obigen Regeln können daher auch wie folgt geschrieben werden:

```css
.shape {
  float: left;
  shape-outside: inset(20px 10px round 10px);
}
```

Im folgenden Beispiel haben wir eine `inset()` Form, die verwendet wird, um Inhalt über das schwebende Element zu ziehen. Ändern Sie die Versatzwerte, um zu sehen, wie sich die Form verändert.

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

Sie können auch einen Box-Wert als alternatives Referenzfeld hinzufügen. Im unten stehenden Beispiel versuchen Sie, das Referenzfeld von `margin-box` zu `border-box`, `padding-box` oder `content-box` zu ändern, um zu sehen, wie sich das verwendete Referenzfeld als Ausgangspunkt ändert, bevor die Versätze berechnet werden.

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

Sie können auch Rechtecke basierend auf Abständen von den oberen und linken Kanten des Referenzfeldes mit der [`rect()`](/de/docs/Web/CSS/basic-shape/rect) Funktion oder nach Breite und Höhe mit der [`xywh()`](/de/docs/Web/CSS/basic-shape/xywh) Funktion erstellen; beide unterstützen auch optional abgerundete Ecken.

## circle()

Der [`circle()`](/de/docs/Web/CSS/basic-shape/circle) Wert für `shape-outside` kann zwei mögliche Argumente akzeptieren: einen `<shape-radius>`, der die Größe definiert, und die `<position>`, die seinen Standort definiert.

Die `circle()` und `ellipse()` `shape-outside` Werte akzeptieren beide [`<shape-radius>`](/de/docs/Web/CSS/basic-shape#shape-radius) als Argument. Dies kann eine {{cssxref("length")}}, ein {{cssxref("percentage")}}, oder eines der Schlüsselwörter `closest-side` oder `farthest-side` sein.

Der `closest-side` Schlüsselwortwert verwendet die Länge von der Mitte der Form zur nächsten Seite des Referenzfeldes, um die Radienlänge zu erzeugen. Der `farthest-side` Schlüsselwortwert verwendet die Länge von der Mitte der Form zur entferntesten Seite des Referenzfeldes.

Das zweite Argument ist eine `position`, die einen ein- oder zweischlüsseligen [`<position>`](/de/docs/Web/CSS/position_value) Wert akzeptiert, um die Position des Kreiszentrums anzuzeigen. Dies wird auf die gleiche Weise wie {{cssxref("background-position")}} angegeben; wenn ein oder beide Werte weggelassen werden, sind die Standardwerte `center`.

Um einen Kreis zu erstellen, fügen wir einen einzelnen Radiuswert ein, gefolgt von dem Schlüsselwort **at** und einem Positionswert. Dieses Beispiel hat einen Kreis, der auf ein {{htmlelement("img")}} angewendet wird, mit einer `width` und `height` von `210px` und einem `margin` von `20px`. Dies ergibt eine Gesamtbreite für das Referenzfeld von `250px`. Der `50%` Wert für den `<shape-radius>` bedeutet, dass der Radius `125px` ist. Der Positionswert ist auf `30%` gesetzt, also `30%` von links und in der Standardposition vertikaler `center`.

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

Spielen Sie mit der Vergrößerung oder Verkleinerung der Kreisgröße, indem Sie die Größe des Radius ändern, den Kreis mit dem Positionswert verschieben oder ein Referenzfeld festlegen, wie wir es für `inset()` getan haben.

Das untenstehende Beispiel kombiniert generierte Inhalte mit einer `circle()` Funktion, die die Schlüsselwörter `top left` für die Position verwendet. Dies erzeugt eine Viertelkreisform in der oberen linken Ecke der Seite, um die der Text fließt.

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

### Die Form wird durch die margin-box beschnitten

Wie oben bei den [Referenzfeldern](#das_referenzfeld) erwähnt, wird die `margin-box` die Form abschneiden. Sie können dies sehen, indem Sie das Zentrum unseres Kreises in Richtung des Inhalts bewegen, indem Sie die Position auf `60%` setzen. Das Zentrum des Kreises wird näher am Inhalt sein und der Kreis wird über die margin-box hinausgehen. Dies bedeutet, dass die Erweiterung abgeschnitten und abgeschrägt wird.

```css
img {
  float: left;
  shape-outside: circle(50% at 60%);
}
```

![Die Kreisform wird durch die margin-box beschnitten](shapes-circle-clipped.png)

## ellipse()

Eine Ellipse ist ein gequetschter Kreis. Daher funktioniert die [`ellipse()`](/de/docs/Web/CSS/basic-shape/ellipse) Funktion sehr ähnlich wie `circle()`, außer dass wir zwei Radien, `x` und `y`, in dieser Reihenfolge angeben müssen.

Diese können dann genau wie bei `circle()` von ein oder zwei `<position>` Werten gefolgt werden, um die Lage des Ellipsenzentrums zu definieren. Im untenstehenden Beispiel haben wir eine Ellipse mit einem `x` Radius von `40%`, einem `y` Radius von `50%` und die `<position>` ist auf `left` festgelegt. Dies bedeutet, dass das Zentrum der Ellipse im Zentrum der linken Kante des Referenzfeldes liegt. Dies schafft eine halbe Ellipsenform, um die sich der Text wickeln wird. Sie können diese Werte ändern, um zu sehen, wie sich die Ellipse verändert.

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

Die Schlüsselwortwerte von `closest-side` und `farthest-side` sind nützlich, um schnell eine Ellipse basierend auf der Größe des schwebenden Element-Referenzfeldes zu erstellen.

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

Die [`polygon()`](/de/docs/Web/CSS/basic-shape/polygon) Funktion ist komplexer und ermöglicht die Erstellung von polygonalen Formen mit mehreren Seiten. Diese Form akzeptiert drei oder mehr Wertepaarungen (ein Polygon muss mindestens ein Dreieck zeichnen). Jedes durch Leerzeichen getrennte Wertepaar wird durch ein Komma getrennt und stellt die Koordinaten eines einzigen Eckpunkts dar, der relativ zum Referenzfeld gezeichnet wird. Jedes Koordinatenpaar definiert eine Kante des Polygons, wobei die letzte Kante durch das erste und letzte Koordinatenpaar definiert wird.

Das untenstehende Beispiel erstellt eine Form, der der Text mit der `polygon()` Funktion folgt. Versuchen Sie, die Koordinatenwerte zu ändern, um zu sehen, wie sich die Form ändert.

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

Um noch komplexere Formen zu erstellen, können Sie die Kontur jeder Form mit den Funktionen [`path()`](/de/docs/Web/CSS/basic-shape/path) oder [`shape()`](/de/docs/Web/CSS/basic-shape/shape) definieren.

Die Funktionen `inset()`, `circle()`, `ellipse()`, und `polygon()` sind mit den Firefox Developer Tools Shape Inspector untersuchbar und editierbar. Der untenstehende Screenshot zeigt die im Tool hervorgehobene Form.

![Die polygonale Grundform, hervorgehoben mit dem Shapes Inspector.](shapes-polygon.png)

Eine weitere Ressource ist [Clippy](https://bennettfeely.com/clippy/), ein Tool zum Erstellen von Formen mit Beispielen, die die CSS {{cssxref("clip-path")}} Eigenschaft verwenden, welche die gleichen grundlegenden Formfunktionen und Werte wie die `shape-outside` Eigenschaft verwendet.
