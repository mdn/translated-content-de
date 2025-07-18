---
title: Grundformen mit shape-outside
short-title: Verwendung von shape-outside
slug: Web/CSS/CSS_shapes/Basic_shapes
l10n:
  sourceCommit: 03d5115691a7a9fa3df3b6ebd20a0c7eed213252
---

CSS-Formen können mit dem {{cssxref("&lt;basic-shape&gt;")}}-Typ definiert werden. In diesem Leitfaden besprechen wir das Erstellen von Rechtecken, Kreisen, Ellipsen und Polygonen mit der {{cssxref("shape-outside")}}-Eigenschaft. Diese Funktionen sind im [CSS Shapes-Modul](/de/docs/Web/CSS/CSS_shapes) definiert.

Bevor wir uns mit den Formen befassen, ist es hilfreich, zwei Informationen zu verstehen, die zusammenarbeiten, um diese Formen möglich zu machen:

- Der `<basic-shape>`-Typ
- Die Referenzbox

## Der \<basic-shape>-Typ

Der [`<basic-shape>`](/de/docs/Web/CSS/basic-shape)-Typ wird als Wert für alle unsere Grundformen verwendet. Dieser Typ ist eine funktionale Notation: Die Funktionsklammern enthalten Argumente, die die Form beschreiben.

Die akzeptierten Argumente variieren je nach der Form, die Sie erstellen. Wir werden diese in den untenstehenden Beispielen behandeln.

## Die Referenzbox

Das Verständnis der von CSS-Formen verwendeten Referenzbox ist wichtig, wenn Sie Grundformen verwenden, da sie das Koordinatensystem jeder Form definiert. Sie haben die Referenzbox bereits im [Leitfaden zum Erstellen von Formen aus Box-Werten](/de/docs/Web/CSS/CSS_shapes/From_box_values) kennengelernt, der die Referenzbox direkt verwendet, um die Form zu erstellen.

Der Screenshot unten zeigt den Firefox Shapes Inspector, der die Referenzbox eines Kreises anzeigt, der mit `shape-outside: circle(50%)` erstellt wurde. Das Element hat 20 Pixel Polsterung, Rand und Abstand angewendet. Der Shapes Inspector hebt diese Referenzboxen hervor.

![Text, der um einen links fließenden Kreis herumfließt. Der linke Rand des Textes ist kreisförmig und stößt an die abgeschnittene Form außerhalb des Randes, wobei der Rand der Formklipping folgt.](shapes-reference-box.png)

Die Standard-Referenzbox für eine Grundform ist die `margin-box`. Sie können im Screenshot sehen, dass die Form relativ zu diesem Teil des Box-Modells definiert ist.

Während die Standard-Referenzbox `margin-box` ist, kann diese geändert werden. Um eine andere Box als Referenzbox festzulegen, fügen Sie den gewünschten Box-Wert nach Ihrer Grundformdefinition ein.

Diese beiden Deklarationen sind identisch:

```css
shape-outside: circle(50%);
shape-outside: circle(50%) margin-box;
```

Damit Ihre Form eine andere Referenzbox verwendet, geben Sie einen anderen {{cssxref("box-edge")}}-Wert an, z.B. um die Grenze als Referenzbox für unseren Kreis zu verwenden, setzen Sie:

```css
.shape {
  shape-outside: circle(50%) border-box;
}
```

Formen, die über die Margin Box hinausgehen, werden auf die Margin Box beschnitten. Die folgenden Grundformen demonstrieren dies.

## inset()

Die [`inset()`](/de/docs/Web/CSS/basic-shape/inset)-Funktion definiert ein Rechteck. Dies mag nicht sehr nützlich erscheinen, da das Fließen eines Elements, ohne Formen, eine rechteckige Form um es herum erzeugt. Der `inset()`-Typ ermöglicht jedoch die Definition von Offsets und zieht somit den umfließenden Text um das verkleinerte Rechteck über Teile des geflohten Elements.

Die `inset()`-Funktion nimmt bis zu vier Seiten-Offset-Werte, plus ein optionales `round`-Schlüsselwort, gefolgt von einem {{cssxref("border-radius")}}-Wert. Das untenstehende CSS erstellt eine rechteckige Form, die von der Referenzbox des geflohten Elements 20 Pixel von oben und unten und 10 Pixel von links und rechts eingelassen ist, mit einem `border-radius`-Wert von 10 Pixeln.

```css
.shape {
  float: left;
  shape-outside: inset(20px 10px 20px 10px round 10px);
}
```

Die Offset-Werte verwenden die gleichen Regeln wie die {{cssxref("margin")}}-Kurznotation. Vier durch Leerzeichen getrennte Werte definieren die oberen, rechten, unteren und linken Offsets — in dieser Reihenfolge. Sie können auch mehr als einen Offset gleichzeitig setzen:

- Wenn nur ein Wert angegeben ist, gilt er für alle Seiten.
- Wenn zwei Werte angegeben sind, sind die oberen und unteren Offsets auf den ersten Wert gesetzt und die rechten und linken Offsets auf den zweiten.
- Wenn drei Werte angegeben sind, ist die obere auf den ersten Wert gesetzt, die linken und rechten auf den zweiten und die untere auf den dritten.

Die obigen Regeln können daher auch als:

```css
.shape {
  float: left;
  shape-outside: inset(20px 10px round 10px);
}
```

Im folgenden Beispiel haben wir eine `inset()`-Form verwendet, um Inhalt über das geflohene Element zu ziehen. Ändern Sie die Offset-Werte, um zu sehen, wie sich die Form ändert.

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

Sie können auch einen Box-Wert als alternative Referenzbox hinzufügen. Im Beispiel unten, versuchen Sie die Referenzbox von `margin-box` auf `border-box`, `padding-box` oder `content-box` zu ändern, um zu sehen, wie die verwendete Referenzbox als Ausgangspunkt verändert wird, bevor Offsets berechnet werden.

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

Sie können auch Rechtecke basierend auf Abständen von den oberen und linken Kanten der Referenzbox mit der [`rect()`](/de/docs/Web/CSS/basic-shape/rect)-Funktion erstellen oder durch Breite und Höhe mit der [`xywh()`](/de/docs/Web/CSS/basic-shape/xywh)-Funktion; beide unterstützen auch optionale abgerundete Ecken.

## circle()

Der [`circle()`](/de/docs/Web/CSS/basic-shape/circle)-Wert für `shape-outside` kann zwei mögliche Argumente akzeptieren: ein `<shape-radius>`, das die Größe definiert, und die `<position>`, die deren Position definiert.

Die `circle()` und `ellipse()` `shape-outside`-Werte akzeptieren beide [`<shape-radius>`](/de/docs/Web/CSS/basic-shape#shape-radius) als Argument. Dies kann eine {{cssxref("length")}}, ein {{cssxref("percentage")}}, oder eines der Schlüsselwörter `closest-side` oder `farthest-side` sein.

Das `closest-side`-Schlüsselwort verwendet die Länge vom Mittelpunkt der Form zur nächsten Seite der Referenzbox, um die Radiuslänge zu erstellen. Das `farthest-side`-Schlüsselwort verwendet die Länge vom Mittelpunkt der Form zur entferntesten Seite der Referenzbox.

Das zweite Argument ist eine `position`, die einen ein- oder zweischlüsseligen [`<position>`](/de/docs/Web/CSS/position_value)-Wert akzeptiert, um die Position des Mittelpunkts des Kreises anzuzeigen. Dies wird auf die gleiche Weise wie {{cssxref("background-position")}} angegeben; wenn ein oder beide Werte weggelassen werden, ist der Standardwert `center`.

Um einen Kreis zu erstellen, geben wir einen einzelnen Radiuswert an, gefolgt vom Schlüsselwort **at** und einem Positionswert. Dieses Beispiel hat einen Kreis, der auf ein {{htmlelement("img")}} angewendet wird, mit einer `width` und `height` von `210px` und einem `margin` von `20px`. Dies ergibt eine Gesamtbreite für die Referenzbox von `250px`. Der `50%`-Wert für das `<shape-radius>` bedeutet, dass der Radius `125px` beträgt. Der Positionswert ist auf `30%` festgelegt, was `30%` von links und auf der Standard-vertikalen `center` bedeutet.

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

Probieren Sie es aus, die Größe des Kreises zu vergrößern oder zu verkleinern, indem Sie die Größe des Radius ändern, den Kreis mit dem Positionswert verschieben oder eine Referenzbox festlegen, wie wir es bei `inset()` getan haben.

Das folgende Beispiel kombiniert generierten Inhalt mit einer `circle()`-Funktion, die die Schlüsselwörter `top left` für die Position verwendet. Dies erstellt eine Viertelkreisform in der oberen linken Ecke der Seite, um die Texte fließen zu lassen.

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

### Die Form wird durch die Margin Box beschnitten

Wie in den [Referenzboxen](#die_referenzbox) oben erwähnt, wird die `margin-box` die Form beschneiden. Sie können dies sehen, indem Sie das Zentrum unseres Kreises in Richtung Inhalt bewegen, indem die Position auf `60%` gesetzt wird. Das Zentrum des Kreises wird näher am Inhalt sein und der Kreis wird über die Margin-Box hinausreichen. Dies bedeutet, dass die Erweiterung beschnitten und abgeschnitten wird.

```css
img {
  float: left;
  shape-outside: circle(50% at 60%);
}
```

![Die Kreisform wird von der Margin Box beschnitten](shapes-circle-clipped.png)

## ellipse()

Eine Ellipse ist ein zusammengepresster Kreis. Daher funktioniert die [`ellipse()`](/de/docs/Web/CSS/basic-shape/ellipse)-Funktion sehr ähnlich wie `circle()`, außer dass wir zwei Radien angeben müssen, `x` und `y`, in dieser Reihenfolge.

Diese können dann, wie bei `circle()`, von einem oder zwei `<position>`-Werten gefolgt werden, um die Position des Mittelpunkts der Ellipse zu definieren. Im Beispiel unten haben wir eine Ellipse mit einem `x`-Radius von `40%`, einem `y`-Radius von `50%` und der `<position>` auf `left` gesetzt. Das bedeutet, dass sich der Mittelpunkt der Ellipse im Mittelpunkt des linken Randes der Referenzbox befindet. Dies erzeugt eine halbelliptische Form, um die der Text fließen wird. Sie können diese Werte ändern, um zu sehen, wie sich die Ellipse verändert.

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

Die Schlüsselwortwerte von `closest-side` und `farthest-side` sind nützlich, um schnell eine Ellipse basierend auf der Größe der Referenzbox des geflohten Elements zu erstellen.

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

Die [`polygon()`](/de/docs/Web/CSS/basic-shape/polygon)-Funktion ist komplexer und ermöglicht die Erstellung mehrseitiger Polygonformen. Diese Form akzeptiert drei oder mehr Wertepaarungen (ein Polygon muss mindestens ein Dreieck zeichnen). Jedes durch Leerzeichen getrennte Wertpaar wird durch ein Komma getrennt und stellt die Koordinaten eines einzelnen Scheitelpunkts dar, der relativ zur Referenzbox gezeichnet wird. Jedes Wertepaar definiert eine Kante des Polygons, wobei die letzte Kante durch das erste und letzte Koordinatenset definiert wird.

Das folgende Beispiel erstellt eine Form zum Folgen des Textes mit der `polygon()`-Funktion. Versuchen Sie, die Koordinatenwerte zu ändern, um zu sehen, wie sich die Form ändert.

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

Die Funktionen `inset()`, `circle()`, `ellipse()`, und `polygon()` sind inspizierbar und bearbeitbar mit dem Firefox Developer Tools Shape Inspector. Der Screenshot unten zeigt die im Tool hervorgehobene Form.

![Die Polygon-Grundform, hervorgehoben mit dem Shapes Inspector.](shapes-polygon.png)

Eine weitere Ressource ist [Clippy](https://bennettfeely.com/clippy/), ein Tool zum Erstellen von Formen mit Beispielen unter Verwendung der CSS-{{cssxref("clip-path")}}-Eigenschaft, die die gleichen Grundformfunktionen und -werte wie die `shape-outside`-Eigenschaft verwendet.
