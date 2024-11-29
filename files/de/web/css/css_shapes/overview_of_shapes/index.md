---
title: Überblick über Formen
slug: Web/CSS/CSS_shapes/Overview_of_shapes
l10n:
  sourceCommit: dbc32052ef186252a1211d296ff60a9b5e3e8d74
---

{{CSSRef}}

Das [CSS-Formenmodul](/de/docs/Web/CSS/CSS_shapes) beschreibt geometrische Formen in CSS. Dieser Artikel bietet einen Überblick darüber, wie Sie Formen verwenden können, um Text um gefloatete Elemente zu fließen, die nicht unbedingt rechteckig sind.

Wenn Sie ein Element links ausrichten, wird der Text rechts und unten in rechteckiger Weise um das Element fließen. Mit CSS-Formen können Sie beispielsweise eine Kreisform anwenden und der Text wird um die Linie des Kreises fließen.

Es gibt mehrere Möglichkeiten, diesen Kreis zu erstellen. In diesem Leitfaden werden wir uns ansehen, wie CSS-Formen funktionieren und wie Sie sie verwenden können.

## Was definiert die Spezifikation?

Die Spezifikation definiert einige Eigenschaften, darunter:

- {{cssxref("shape-outside")}} — Ermöglicht die Definition grundlegender Formen.
- {{cssxref("shape-image-threshold")}} — Legt einen Opazitätsschwellenwert fest. Wenn ein Bild verwendet wird, um eine Form zu definieren, werden nur die Teile des Bildes verwendet, die die gleiche Opazität oder höher als der Schwellenwert haben. Andere Teile werden ignoriert.
- {{cssxref("shape-margin")}} — Legt einen Rand um die definierte Form fest.

## Grundlegende Formen definieren

Die Eigenschaft `shape-outside` ermöglicht es uns, eine Form zu definieren. Sie nimmt eine Vielzahl von Werten an, die verschiedene in dem {{cssxref("&lt;basic-shape&gt;")}} Datentyp spezifizierte Formen definieren.

Im folgenden Beispiel wird ein Bild nach links gefloatet. Wir wenden die Eigenschaft `shape-outside` mit einem Wert von `circle(50%)` an. Das Ergebnis ist, dass der Inhalt jetzt um die kreisförmige Form fließt, anstatt dem Rechteck zu folgen, das durch die Box des Bildes entsteht.

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

Hier verwendeten wir die Funktion {{cssxref("basic-shape/circle", "circle()")}}, die in allen modernen Browsern unterstützt wird. Wenn wir eine neuere Formart verwendeten, die nicht vollständig unterstützt wird, würden Benutzer von nicht unterstützten Browsern den Inhalt um die Seiten eines Rechtecks fließen sehen, da das Bild gefloatet wurde. Formen sind eine visuelle progressive Verbesserung.

### Grundlegende Formen

Der Wert `circle(50%)` ist ein Beispiel für eine grundlegende Form. Die Spezifikation definiert mehrere `<basic-shape>` Werte, darunter:

- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

Drei dieser Funktionen definieren nur Rechtecke. Mit der Funktion `inset()` definieren Sie vier Versatzwerte und ziehen so die Zeilenboxen von jeglichem umgebenden Inhalt näher an das Objekt heran, als sie es sonst wären. Die Funktion `rect()` definiert ein Rechteck, indem der Abstand von den oberen und linken Kanten des enthaltenen Blocks spezifiziert wird. Die Funktion `xywh()` funktioniert, indem die Abstände von den oberen und linken Kanten des Referenzkastens sowie die Breite und Höhe des Rechtecks von diesem Ausgangspunkt aus festgelegt werden.

Wir haben bereits gesehen, wie `circle()` eine kreisförmige Form erstellt. Eine `ellipse()` ist im Wesentlichen ein zusammengedrückter Kreis. Wenn keine dieser einfachen Formen ausreicht, können Sie mit der Funktion `polygon()` komplexere Formen erstellen, die die Definition einer Reihe von Linien ermöglicht. Die Funktionen `path()` und `shape()` können verwendet werden, um JEDERLEI Form über eine Serie von Linien-, Kurven- und Bewegungsbefehlen zu erstellen.

In unserem [Leitfaden zu grundlegenden Formen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) erkunden wir jede der möglichen grundlegenden Formen und wie man sie erstellt.

### Formen aus dem Box-Wert

Formen können auch um den Box-Wert herum erstellt werden. Daher könnten Sie Ihre Form auf folgenden Boxen erstellen:

- `border-box`
- `padding-box`
- `content-box`
- `margin-box`

Im folgenden Beispiel können Sie den Wert `border-box` in einen der anderen erlaubten Werte ändern, um zu sehen, wie sich die Form näher an oder weiter weg von der Box bewegt.

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

Um die Box-Werte im Detail zu erkunden, sehen Sie sich unseren Leitfaden über [Formen aus Box-Werten](/de/docs/Web/CSS/CSS_shapes/From_box_values) an.

### Formen aus Bildern

Ein interessanter Weg, Ihren Pfad zu erzeugen, ist die Verwendung eines Bildes mit einem Alphakanal—der Text wird dann um die nicht-transparenten Teile des Bildes fließen. Dies ermöglicht die Überlagerung des umfließenden Inhalts um ein Bild oder die Verwendung eines Bildes, das nie auf der Seite angezeigt wird, rein als Methode, um eine komplexe Form zu erstellen, ohne ein Polygon sorgfältig abbilden zu müssen.

Beachten Sie, dass Bilder, die auf diese Weise verwendet werden, [CORS-kompatibel](/de/docs/Web/HTTP/CORS) sein müssen, da andernfalls `shape-outside` so wirken wird, als ob `none` als Wert angegeben wurde, und Sie keine Form erhalten.

In diesem nächsten Beispiel haben wir ein Bild mit einem vollständig transparenten Bereich, und wir verwenden das Bild als URL-Wert für `shape-outside`. Die Form wird um den undurchsichtigen Bereich herum erstellt — das Bild des Ballons.

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
  shape-outside: url(https://mdn.github.io/shared-assets/images/examples/round-balloon.png);
}
```

{{EmbedLiveSample("image", "", "280px")}}

#### `shape-image-threshold`

Die Eigenschaft `shape-image-threshold` wird verwendet, um den Schwellenwert der Bildtransparenz festzulegen, der zur Definition des Bereichs des Bildes, der für die Form verwendet wird, verwendet wird. Wenn der Wert von `shape-image-threshold` `0.0` beträgt (was der Anfangswert ist), muss der Bereich vollständig transparent sein. Wenn der Wert `1.0` beträgt, ist er vollständig undurchsichtig. Zwischenwerte bedeuten, dass Sie einen halbtransparenten Bereich als definierenden Bereich der Form festlegen können.

Sie können den Schwellenwert in Aktion sehen, wenn wir einen Verlauf als Bild verwenden, auf dem wir unsere Form definieren. Im folgenden Beispiel, wenn Sie den Schwellenwert ändern, ändert der Pfad, den die Form nimmt, basierend auf dem von Ihnen ausgewählten Opazitätsniveau.

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

Um mehr über das Erstellen von Formen aus Bildern zu erfahren, sehen Sie sich den [Leitfaden zu Formen aus Bildern](/de/docs/Web/CSS/CSS_shapes/Shapes_from_images) an.

## Die Eigenschaft `shape-margin`

Die {{cssxref("shape-margin")}} Eigenschaft fügt `shape-outside` einen Rand hinzu. Dies wird die Zeilenboxen jedes um die Form fließenden Inhalts weiter verkürzen, indem es ihn von der Form selbst wegdrückt.

Im folgenden Beispiel haben wir einer grundlegenden Form einen `shape-margin` hinzugefügt. Ändern Sie den Rand, um den Text weiter weg von dem Pfad zu schieben, den die Form standardmäßig nehmen würde.

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

In den oben stehenden Beispielen haben wir Bilder oder ein sichtbares Element verwendet, um die Form zu definieren, was bedeutet, dass Sie die Form auf der Seite sehen können. Sie könnten stattdessen Text entlang einer nicht-rechteckigen unsichtbaren Linie fließen lassen. Wir könnten beispielsweise ein leeres gefloatetes {{htmlelement("div")}} oder {{htmlelement("span")}} Element zu unserem DOM hinzufügen und es unsichtbar machen. Wir können jedoch eine Form nur mit CSS mithilfe von [generiertem Inhalt](/de/docs/Learn/CSS/Howto/Generated_content) erstellen und alle unsere Styling-Funktionen innerhalb des CSS behalten.

In diesem Beispiel verwenden wir generierten Inhalt, um ein Element mit einer Höhe und Breite von 150px einzufügen. Wir können dann grundlegende Formen, Box-Werte oder sogar den Alpha-Kanal eines Bildes verwenden, um eine Form zu erstellen, um die der Text fließen soll.

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

Die grundlegenden Formen und Box-Werte, die zur Erstellung von Formen verwendet werden, sind die gleichen wie die, die als Werte für {{cssxref("clip-path")}} verwendet werden. Wenn Sie daher eine Form mit einem Bild erstellen und auch Teile dieses Bildes ausschneiden möchten, können Sie die gleichen Werte verwenden.

Das Bild unten ist ein Quadratbild mit einem blauen Hintergrund. Wir haben eine Form mit `shape-outside: ellipse(40% 50%);` definiert und auch `clip-path: ellipse(40% 50%);` verwendet, um denselben Bereich wegzuschneiden, den wir zur Definition der Form verwendet haben.

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

Es gibt einen [Shape Path Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) in den Firefox DevTools. Dieses Tool kann verwendet werden, um die Werte `circle()`, `inset()`, `ellipse()` und `polygon()` zu inspizieren. Wenn Ihr Polygon nicht ganz stimmt, können Sie den Shapes Editor verwenden, um es zu optimieren, und dann den neuen Wert in Ihr CSS zurückkopieren.

## Weitere Funktionen von CSS-Formen

In diesem Leitfaden haben wir das Umfließen von Text um gefloatete Formen diskutiert. Sehen Sie sich das [CSS-Formenmodul](/de/docs/Web/CSS/CSS_shapes) an, um Links zu allen Modulfunktionen sowie zusätzliche verwandte Funktionen zu finden. Dazu gehören alle Formfunktionen und relevante Leitfäden.
