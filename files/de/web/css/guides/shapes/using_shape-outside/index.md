---
title: Grundformen mit shape-outside
short-title: Verwenden von shape-outside
slug: Web/CSS/Guides/Shapes/Using_shape-outside
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

CSS-Formen können mit dem {{cssxref("&lt;basic-shape&gt;")}}-Typ definiert werden. In diesem Leitfaden besprechen wir die Erstellung von Rechtecken, Kreisen, Ellipsen und Polygonen mit der {{cssxref("shape-outside")}}-Eigenschaft. Diese Funktionen sind im [CSS Shapes Modul](/de/docs/Web/CSS/Guides/Shapes) definiert.

Bevor wir uns die Formen ansehen, ist es wichtig, zwei Informationen zu verstehen, die zusammen die Erstellung dieser Formen ermöglichen:

- Der `<basic-shape>`-Typ
- Der Referenzrahmen

## Der \<basic-shape>-Typ

Der [`<basic-shape>`](/de/docs/Web/CSS/Reference/Values/basic-shape)-Typ wird als Wert für alle Grundformen verwendet. Dieser Typ ist eine funktionale Notation: Die Funktionsklammern enthalten Argumente, die die Form beschreiben.

Die akzeptierten Argumente variieren, je nachdem, welche Form Sie erstellen. Wir werden diese in den folgenden Beispielen behandeln.

## Der Referenzrahmen

Das Verständnis des von CSS-Formen verwendeten Referenzrahmens ist wichtig, wenn Sie Grundformen verwenden, da er das Koordinatensystem jeder Form definiert. Sie haben den Referenzrahmen bereits im [Leitfaden zur Erstellung von Formen aus Box-Werten](/de/docs/Web/CSS/Guides/Shapes/From_box_values) kennengelernt, der direkt den Referenzrahmen zur Erstellung der Form nutzt.

Der folgende Screenshot zeigt den Firefox Shapes Inspector, der den Referenzrahmen eines mit `shape-outside: circle(50%)` erstellten Kreises anzeigt. Das Element hat 20 Pixel Polsterung, Rand und Umrandung angewendet. Der Shapes Inspector hebt diese Referenzrahmen hervor.

![Text, der um einen nach links schwebenden Kreis fließt. Der linke Rand des Textes ist kreisförmig und grenzt an die abgeschnittene Form außerhalb der Umrandung mit der Umrandung, die dem Formenclipping folgt.](shapes-reference-box.png)

Der Standardreferenzrahmen für eine Grundform ist der `margin-box`. Auf dem Screenshot sehen Sie, dass die Form relativ zu diesem Teil des Box-Modells definiert ist.

Während der Standardreferenzrahmen `margin-box` ist, kann dieser modifiziert werden. Um eine andere Box als Referenzrahmen festzulegen, fügen Sie den gewünschten Box-Wert nach Ihrer Grundformdefinition ein.

Diese beiden Deklarationen sind gleich:

```css
shape-outside: circle(50%);
shape-outside: circle(50%) margin-box;
```

Um eine andere Referenzbox für Ihre Form zu verwenden, fügen Sie einen anderen {{cssxref("box-edge")}}-Wert ein, zum Beispiel, um die Umrandung als Referenzrahmen für unseren Kreis zu verwenden:

```css
.shape {
  shape-outside: circle(50%) border-box;
}
```

Erstellte Formen, die über die Margin-Box hinausgehen, werden auf die Margin-Box gestutzt. Die folgenden Grundformen demonstrieren dies.

## inset()

Die [`inset()`](/de/docs/Web/CSS/Reference/Values/basic-shape/inset)-Funktion definiert ein Rechteck. Dies mag nicht sehr nützlich erscheinen, da das Aufschwimmen eines Elements ohne Formen Ihnen eine rechteckige Form um dieses Element gibt. Jedoch ermöglicht der `inset()`-Typ die Definition von Versätzen, wodurch der Text um das verkleinerte Rechteck, über Teile des schwebenden Elements herum, gezogen werden kann.

Die `inset()`-Funktion nimmt bis zu vier Seitenversatzwerte sowie ein optionales `round`-Schlüsselwort gefolgt von einem {{cssxref("border-radius")}}-Wert an. Der folgende CSS-Code erstellt eine rechteckige Form, die 20 Pixel von oben und unten und 10 Pixel von links und rechts vom Referenzrahmen des schwebenden Elements eingefügt ist, mit einem `border-radius`-Wert von 10 Pixeln.

```css
.shape {
  float: left;
  shape-outside: inset(20px 10px 20px 10px round 10px);
}
```

Die Versatzwerte folgen denselben Regeln wie die {{cssxref("margin")}}-Kurzform. Vier durch Leerzeichen getrennte Werte definieren die Versätze oben, rechts, unten und links – in dieser Reihenfolge. Sie können auch mehr als einen Versatz gleichzeitig einstellen:

- Wenn nur ein Wert vorhanden ist, gilt dieser für alle Seiten.
- Wenn zwei Werte vorhanden sind, werden die oberen und unteren Versätze auf den ersten Wert und die rechten und linken Versätze auf den zweiten Wert gesetzt.
- Wenn drei Werte vorhanden sind, wird die obere auf den ersten Wert gesetzt, die linke und rechte auf den zweiten und die untere auf den dritten Wert.

Die obigen Regeln können daher auch so geschrieben werden:

```css
.shape {
  float: left;
  shape-outside: inset(20px 10px round 10px);
}
```

Im folgenden Beispiel haben wir eine `inset()`-Form, um Inhalte über das schwebende Element zu ziehen. Ändern Sie die Versatzwerte, um zu sehen, wie sich die Form ändert.

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

Sie können auch einen Boxwert als alternative Referenzbox hinzufügen. Im Beispiel unten, versuchen Sie, den Referenzrahmen von `margin-box` zu `border-box`, `padding-box` oder `content-box` zu ändern, um zu sehen, wie sich die verwendete Referenzbox ändert, bevor die Versätze berechnet werden.

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

Sie können auch Rechtecke basierend auf Abständen von den oberen und linken Kanten des Referenzrahmens mit der [`rect()`](/de/docs/Web/CSS/Reference/Values/basic-shape/rect)-Funktion oder nach Breite und Höhe mit der [`xywh()`](/de/docs/Web/CSS/Reference/Values/basic-shape/xywh)-Funktion erstellen; beide unterstützen auch optionale abgerundete Ecken.

## circle()

Der [`circle()`](/de/docs/Web/CSS/Reference/Values/basic-shape/circle)-Wert für `shape-outside` kann zwei mögliche Argumente annehmen: einen `<shape-radius>`, der die Größe definiert, und die `<position>`, die dessen Position definiert.

Die `circle()`- und `ellipse()`-`shape-outside`-Werte akzeptieren beide [`<shape-radius>`](/de/docs/Web/CSS/Reference/Values/basic-shape#shape-radius) als Argument. Dies kann eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder eines der Schlüsselwörter `closest-side` oder `farthest-side` sein.

Das `closest-side`-Schlüsselwort verwendet die Länge vom Mittelpunkt der Form zur nächsten Seite des Referenzrahmens, um die Radiuslänge zu erstellen. Das `farthest-side`-Schlüsselwort verwendet die Länge vom Mittelpunkt der Form zur am weitesten entfernten Seite des Referenzrahmens.

Das zweite Argument ist `position`, das einen ein- oder zweistelligen [`<position>`](/de/docs/Web/CSS/Reference/Values/position_value)-Wert akzeptiert, um die Position des Zentrums des Kreises anzugeben. Dies wird auf dieselbe Weise wie {{cssxref("background-position")}} angegeben; wenn einer oder beide Werte weggelassen werden, sind die Standardwerte `center`.

Um einen Kreis zu erstellen, fügen wir einen einzelnen Radiuswert ein, optional gefolgt vom Schlüsselwort **at** gefolgt von einem Positionswert. Dieses Beispiel hat einen Kreis, der auf ein {{htmlelement("img")}} angewendet wird mit einer `width` und `height` von `210px` und einem `margin` von `20px`. Dies ergibt eine Gesamtbreite für den Referenzrahmen von `250px`. Der `50%`-Wert für den `<shape-radius>` bedeutet, dass der Radius `125px` beträgt. Der Positionswert ist auf `30%` gesetzt, was bedeutet, dass es `30%` von der linken Seite und auf dem Standardwert vertikal `center` ist.

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

Spielen Sie mit der Vergrößerung oder Verkleinerung der Kreisgröße, indem Sie die Größe des Radius ändern, den Kreis mit dem Positionswert verschieben oder einen Referenzrahmen einstellen, wie wir es bei `inset()` getan haben.

Das folgende Beispiel kombiniert generierte Inhalte mit einer `circle()`-Funktion, die die Schlüsselwörter `top left` für die Position verwendet. Dies schafft eine Viertelkreisform in der oberen linken Ecke der Seite, um den Text herumfließen zu lassen.

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

Wie bei den [Referenzrahmen](#der_referenzrahmen) oben erwähnt, wird die `margin-box` die Form abschneiden. Sie können dies sehen, indem Sie das Zentrum unseres Kreises in Richtung des Inhalts verschieben, indem Sie die Position auf `60%` setzen. Das Zentrum des Kreises wird näher am Inhalt sein und der Kreis wird über die Margin-Box hinausreichen. Dies bedeutet, dass die Erweiterung abgeschnitten und quadratisch wird.

```css
img {
  float: left;
  shape-outside: circle(50% at 60%);
}
```

![Die Kreisform wird durch die Margin-Box abgeschnitten](shapes-circle-clipped.png)

## ellipse()

Eine Ellipse ist ein zusammengedrückter Kreis. Als solche funktioniert die [`ellipse()`](/de/docs/Web/CSS/Reference/Values/basic-shape/ellipse)-Funktion ganz ähnlich wie `circle()`, mit dem Unterschied, dass wir zwei Radien, `x` und `y`, in dieser Reihenfolge angeben müssen.

Diesen Werten können dann ein oder zwei `<position>`-Werte, wie bei `circle()`, zur Definition des Standorts des Mittelpunkts der Ellipse folgen. Im nachfolgenden Beispiel haben wir eine Ellipse mit `x`-Radius von `40%`, einem `y`-Radius von `50%` und die `<position>` ist auf `left` gesetzt. Das bedeutet, dass sich der Mittelpunkt der Ellipse am Zentrum des linken Randes des Referenzrahmens befindet. Es entsteht eine halbe Ellipsenform, um die sich der Text wickeln wird. Sie können diese Werte ändern, um zu sehen, wie sich die Ellipse ändert.

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

Die Schlüsselwortwerte `closest-side` und `farthest-side` sind nützlich, um eine schnelle Ellipse basierend auf der Größe des Referenzrahmens des schwebenden Elements zu erstellen.

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

Die [`polygon()`](/de/docs/Web/CSS/Reference/Values/basic-shape/polygon)-Funktion ist komplexer und ermöglicht die Erstellung von Polygonen mit mehreren Seiten. Diese Form akzeptiert drei oder mehr Wertepaarungen (ein Polygon muss mindestens ein Dreieck zeichnen). Jedes durch Leerzeichen getrennte Wertepaar wird durch ein Komma getrennt und repräsentiert die Koordinaten eines einzelnen Eckpunktes, der relativ zum Referenzrahmen gezeichnet wird. Jedes Koordinatenpaar definiert eine Kante des Polygons, wobei die letzte Kante durch den ersten und letzten Satz von Koordinaten definiert wird.

Das nachfolgende Beispiel erstellt eine Form, der der Text mit der `polygon()`-Funktion folgen wird. Versuchen Sie, die Koordinatenwerte zu ändern, um zu sehen, wie sich die Form ändert.

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

Um noch komplexere Formen zu erstellen, können Sie die Umrisse jeder Form mit den [`path()`](/de/docs/Web/CSS/Reference/Values/basic-shape/path) oder [`shape()`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape)-Funktionen definieren.

Die `inset()`, `circle()`, `ellipse()` und `polygon()` sind mit dem Firefox Developer Tools Shape Inspector inspizierbar und bearbeitbar. Der folgende Screenshot zeigt die im Tool hervorgehobene Form.

![Das Polygon-Grundform, hervorgehoben mit dem Shapes Inspector.](shapes-polygon.png)

Eine weitere Ressource ist [Clippy](https://bennettfeely.com/clippy/), ein Tool zum Erstellen von Formen mit Beispielen, die die CSS {{cssxref("clip-path")}}-Eigenschaft verwenden, die dieselben Grundformfunktionen und -werte wie die `shape-outside`-Eigenschaft nutzt.
