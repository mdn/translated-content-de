---
title: Übersicht über Formen
short-title: Overview
slug: Web/CSS/Guides/Shapes/Overview
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Das [CSS Shapes Modul](/de/docs/Web/CSS/Guides/Shapes) beschreibt geometrische Formen in CSS. Dieser Artikel bietet einen Überblick darüber, wie Sie Formen verwenden können, um Text um gefloatete Elemente zu wickeln, die nicht unbedingt rechteckig sind.

Wenn Sie ein Element nach links floaten, wickelt sich der Text auf rechteckige Weise um die rechte und untere Seite des Elements. Mit CSS-Formen können Sie beispielsweise eine Kreisform anwenden, und der Text wird entlang der Linie des Kreises umflossen.

Es gibt mehrere Möglichkeiten, diesen Kreis zu erstellen. In diesem Leitfaden schauen wir uns an, wie CSS-Formen funktionieren und wie man sie verwendet.

## Was definiert die Spezifikation?

Die Spezifikation definiert einige Eigenschaften, einschließlich:

- {{cssxref("shape-outside")}} — Ermöglicht die Definition von Basisformen.
- {{cssxref("shape-image-threshold")}} — Setzt einen Transparenzschwellenwert. Wenn ein Bild zur Definition einer Form verwendet wird, werden nur die Teile des Bildes, die die gleiche Transparenz oder größer als der Schwellenwert sind, in der Form verwendet. Alle anderen Teile werden ignoriert.
- {{cssxref("shape-margin")}} — Setzt einen Rand um die definierte Form.

## Definition von Basisformen

Die `shape-outside`-Eigenschaft erlaubt es uns, eine Form zu definieren. Sie nimmt eine Vielzahl von Werten an, die verschiedene Formen spezifizieren, die im {{cssxref("basic-shape")}} Datentyp definiert sind.

Im folgenden Beispiel wird ein Bild nach links gefloatet. Wir wenden die `shape-outside`-Eigenschaft mit einem `circle(50%)`-Wert an. Das Ergebnis ist, dass der Inhalt nun um die kreisförmige Form statt um das durch das Bild erzeugte Rechteck fließt.

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
  font: 1.2em / 1.4 sans-serif;
}

img {
  float: left;
  shape-outside: circle(50%);
}
```

{{EmbedLiveSample("circle", "", "280px")}}

Hier verwendeten wir die {{cssxref("basic-shape/circle", "circle()")}} Funktion, die in allen modernen Browsern unterstützt wird. Wenn wir einen neueren Formtyp verwenden würden, der nicht vollständig unterstützt wird, sehen Benutzer nicht unterstützender Browser den Inhalt um die Seiten eines Rechtecks fließen, da das Bild gefloatet ist. Formen sind eine visuelle progressive Verbesserung.

### Basisformen

Der Wert `circle(50%)` ist ein Beispiel für eine Basisform. Die Spezifikation definiert mehrere `<basic-shape>`-Werte, einschließlich:

- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

Drei dieser Funktionen definieren nur Rechtecke. Mit der `inset()`-Funktion definieren Sie vier Versatzwerte und ziehen so die Linienboxen von umflussendem Inhalt näher an das Objekt heran, als sie es sonst tun würden. Die `rect()`-Funktion definiert ein Rechteck, indem sie den Abstand von den oberen und linken Kanten des umgebenden Blocks angibt. Die `xywh()`-Funktion arbeitet, indem sie Abstände von den oberen und linken Kanten des Referenzrahmens angibt und die Breite und Höhe des Rechtecks von diesem Ausgangspunkt aus festlegt.

Wir haben bereits gesehen, wie `circle()` eine kreisförmige Form erstellt. Eine `ellipse()` ist im Wesentlichen ein gedrückter Kreis. Wenn keine dieser Basisformen das gewünschte Ergebnis liefert, können Sie mit der `polygon()`-Funktion komplexere Formen erstellen, die die Definition einer Reihe von Linien erlauben. Die `path()`- und `shape()`-Funktionen können verwendet werden, um JEDE Form über eine Reihe von Linien-, Kurven- und Bewegungskommandos zu erstellen.

In unserem [Leitfaden zu Basisformen](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside) erkunden wir jede der möglichen Basisformen und wie man sie erstellt.

### Formen aus dem Boxwert

Formen können auch um den Boxwert herum erstellt werden. So könnten Sie Ihre Form auf erstellen:

- `border-box`
- `padding-box`
- `content-box`
- `margin-box`

Im Beispiel unten können Sie den Wert `border-box` in einen der anderen erlaubten Werte ändern, um zu sehen, wie die Form näher an oder weiter weg vom Kasten rückt.

```html live-sample___box
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

```css live-sample___box
body {
  font: 1.2em / 1.4 sans-serif;
}

.shape {
  background-color: rebeccapurple;
  height: 150px;
  width: 150px;
  padding: 20px;
  margin: 20px;
  border-radius: 50%;
  float: left;
  shape-outside: border-box;
}
```

{{EmbedLiveSample("box", "", "320px")}}

Um die Boxwerte genauer zu erkunden, schauen Sie sich unseren Leitfaden zu [Formen aus Boxwerten](/de/docs/Web/CSS/Guides/Shapes/From_box_values) an.

### Formen aus Bildern

Eine interessante Möglichkeit, Ihren Pfad zu generieren, besteht darin, ein Bild mit einem Alphakanal zu verwenden – der Text wird dann um die nicht-transparenten Teile des Bildes gewickelt. Dies ermöglicht das Overlay von umfließendem Inhalt um ein Bild oder die Verwendung eines Bildes, das nie auf der Seite angezeigt wird, rein als Methode zur Erstellung einer komplexen Form, ohne sorgfältig ein Polygon abbilden zu müssen.

Beachten Sie, dass Bilder, die auf diese Weise verwendet werden, [CORS-kompatibel](/de/docs/Web/HTTP/Guides/CORS) sein müssen, andernfalls verhält sich `shape-outside`, als wäre `none` als Wert angegeben, und Sie erhalten keine Form.

Im nächsten Beispiel haben wir ein Bild mit einem vollständig transparenten Bereich, und wir verwenden ein Bild als URL-Wert für `shape-outside`. Die Form wird um den undurchsichtigen Bereich herum erstellt – das Bild des Ballons.

```html live-sample___image
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

```css live-sample___image
body {
  font: 1.2em / 1.4 sans-serif;
}

img {
  float: left;
  shape-outside: url("https://mdn.github.io/shared-assets/images/examples/round-balloon.png");
}
```

{{EmbedLiveSample("image", "", "280px")}}

#### `shape-image-threshold`

Die `shape-image-threshold`-Eigenschaft wird verwendet, um den Schwellenwert der Bildtransparenz festzulegen, der den Bereich des Bildes definiert, der für die Form verwendet wird. Wenn der Wert von `shape-image-threshold` `0.0` ist (was der Anfangswert ist), dann muss der Bereich vollständig transparent sein. Wenn der Wert `1.0` ist, dann ist er vollständig undurchsichtig. Werte dazwischen bedeuten, dass Sie einen semitransparenten Bereich als den Bereich der Form festlegen können.

Sie können den Schwellenwert in Aktion sehen, wenn wir einen Verlauf als das Bild verwenden, auf dem unsere Form definiert wird. Im folgenden Beispiel ändert sich der Pfad, den die Form nimmt, basierend auf der von Ihnen gewählten Transparenzstufe, wenn Sie den Schwellenwert ändern.

```html live-sample___threshold
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

```css live-sample___threshold
body {
  font: 1.2em / 1.4 sans-serif;
}

.shape {
  float: left;
  width: 200px;
  height: 200px;
  background-image: linear-gradient(
    45deg,
    rebeccapurple,
    transparent 80%,
    transparent
  );
  shape-outside: linear-gradient(
    45deg,
    rebeccapurple,
    transparent 80%,
    transparent
  );
  shape-image-threshold: 0.4;
}
```

{{EmbedLiveSample("threshold", "", "280px")}}

Um mehr darüber zu erfahren, wie man Formen aus Bildern erstellt, sehen Sie sich den [Leitfaden zu Formen aus Bildern](/de/docs/Web/CSS/Guides/Shapes/From_images) an.

## Die `shape-margin` Eigenschaft

Die {{cssxref("shape-margin")}}-Eigenschaft fügt einen Rand zu `shape-outside` hinzu. Dies verkürzt die Linienboxen von jeglichem Inhalt, der die Form umfließt, weiter und drängt sie von der Form selbst weg.

Im Beispiel unten haben wir einer Basisform einen `shape-margin` hinzugefügt. Ändern Sie den Rand, um den Text weiter von dem Pfad wegzuschieben, den die Form standardmäßig nehmen würde.

```html live-sample___shape-margin
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

```css live-sample___shape-margin
body {
  font: 1.2em / 1.4 sans-serif;
}
img {
  float: left;
  shape-outside: circle(50%);
  shape-margin: 5px;
}
```

{{EmbedLiveSample("shape-margin", "", "280px")}}

## Verwendung von generiertem Inhalt als gefloatetes Element

In den obigen Beispielen haben wir Bilder oder ein sichtbares Element verwendet, um die Form zu definieren, wobei die Form auf der Seite sichtbar ist. Möglicherweise möchten Sie stattdessen Text entlang einer nicht-rechteckigen unsichtbaren Linie fließen lassen. Wir könnten beispielsweise ein leeres gefloatetes {{htmlelement("div")}}- oder {{htmlelement("span")}}-Element zu unserem DOM hinzufügen und es unsichtbar machen. Jedoch können wir mit [generiertem Inhalt](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content) eine Form nur mit CSS erstellen und all unsere Stilfunktionalität im CSS behalten.

In diesem Beispiel verwenden wir generierten Inhalt, um ein Element mit einer Höhe und Breite von 150px einzufügen. Wir können dann Basisformen, Boxwerte oder sogar den Alphakanal eines Bildes verwenden, um eine Form zu erstellen, um die der Text gewickelt wird.

```html live-sample___generated-content
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

```css live-sample___generated-content
body {
  font: 1.2em sans-serif;
}

.box::before {
  content: "";
  display: block;
  height: 150px;
  width: 150px;
  padding: 20px;
  margin: 20px;
  border-radius: 50%;
  float: left;
  shape-outside: border-box;
}
```

{{EmbedLiveSample("generated-content", "", "260px")}}

## Beziehung zu `clip-path`

Die Basisformen und Boxwerte, die zur Erstellung von Formen verwendet werden, sind die gleichen wie die für {{cssxref("clip-path")}} verwendeten Werte. Daher können Sie, wenn Sie eine Form mit einem Bild erstellen und auch einen Teil dieses Bildes ausschneiden möchten, die gleichen Werte verwenden.

Das Bild unten ist ein quadratisches Bild mit einem blauen Hintergrund. Wir haben eine Form mit `shape-outside: ellipse(40% 50%);` definiert und auch `clip-path: ellipse(40% 50%);` verwendet, um den gleichen Bereich auszuschneiden, den wir zur Definition der Form verwendet haben.

```html live-sample___clip-path
<div class="box">
  <img
    alt="An orange hot air balloon as seen from below"
    src="https://mdn.github.io/shared-assets/images/examples/balloon-small.jpg" />
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

```css live-sample___clip-path
body {
  font: 1.2em / 1.4 sans-serif;
}

img {
  float: left;
  shape-outside: ellipse(40% 50%);
  clip-path: ellipse(40% 50%);
}
```

{{EmbedLiveSample("clip-path", "", "280px")}}

## Entwicklerwerkzeuge für Formen

Es gibt einen [Shape Path Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) in den Firefox DevTools. Dieses Tool kann verwendet werden, um die Werte von `circle()`, `inset()`, `ellipse()` und `polygon()` zu inspizieren. Wenn Ihr Polygon nicht ganz passt, können Sie den Shape Editor verwenden, um es zu ändern, und dann den neuen Wert zurück in Ihr CSS kopieren.

## Weitere CSS Shapes-Funktionen

In diesem Leitfaden haben wir das Umfließen von Text um gefloatete Formen diskutiert. Sehen Sie sich das [CSS Shapes Modul](/de/docs/Web/CSS/Guides/Shapes) für Links zu allen Modul-Funktionen plus zusätzlichen verwandten Funktionen an. Dies schließt alle Formfunktionen und relevante Leitfäden ein.
