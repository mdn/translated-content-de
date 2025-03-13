---
title: Übersicht über Formen
slug: Web/CSS/CSS_shapes/Overview_of_shapes
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{CSSRef}}

Das [CSS Shapes Modul](/de/docs/Web/CSS/CSS_shapes) beschreibt geometrische Formen in CSS. Dieser Artikel bietet einen Überblick darüber, wie Sie Formen verwenden können, um Text um gefloatete Elemente zu platzieren, die nicht unbedingt rechteckig sind.

Wenn Sie ein Element links floaten lassen, wird der Text auf rechteckige Weise um die rechte und untere Seite des Elements fließen. Mit CSS-Formen können Sie zum Beispiel eine Kreisform anwenden, und der Text wird entlang der Linie des Kreises um diese herumfließen.

Es gibt mehrere Möglichkeiten, diesen Kreis zu erstellen. In diesem Leitfaden werden wir uns ansehen, wie CSS-Formen funktionieren und wie man sie verwendet.

## Was definiert die Spezifikation?

Die Spezifikation definiert einige Eigenschaften, darunter:

- {{cssxref("shape-outside")}} — Ermöglicht die Definition grundlegender Formen.
- {{cssxref("shape-image-threshold")}} — Legt einen Opazitätsschwellenwert fest. Wenn ein Bild zur Definition einer Form verwendet wird, werden nur die Teile des Bildes verwendet, die die gleiche Opazität oder höher als der Schwellenwert sind. Andere Teile werden ignoriert.
- {{cssxref("shape-margin")}} — Setzt einen Rand um die definierte Form.

## Definition grundlegender Formen

Die Eigenschaft `shape-outside` ermöglicht es uns, eine Form zu definieren. Sie nimmt verschiedene Werte an, die unterschiedliche Formen definieren, die im {{cssxref("&lt;basic-shape&gt;")}} Datentyp spezifiziert sind.

Im folgenden Beispiel wird ein Bild nach links gefloatet. Wir wenden die Eigenschaft `shape-outside` mit dem Wert `circle(50%)` an. Das Ergebnis ist, dass der Inhalt jetzt der Kreisform folgt anstatt dem Rechteck, das durch die Box des Bildes erzeugt wurde.

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

Hier haben wir die {{cssxref("basic-shape/circle", "circle()")}} Funktion verwendet, die in allen modernen Browsern unterstützt wird. Wenn wir einen neueren Formtyp verwenden würden, der noch nicht vollständig unterstützt wird, würden Benutzer von nicht unterstützenden Browsern den Inhalt um die Seiten eines Rechtecks fließen sehen, da das Bild gefloatet ist. Formen sind eine visuelle progressive Verbesserung.

### Grundlegende Formen

Der Wert `circle(50%)` ist ein Beispiel für eine grundlegende Form. Die Spezifikation definiert mehrere `<basic-shape>` Werte, einschließlich:

- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

Drei dieser Funktionen definieren nur Rechtecke. Mit der Funktion `inset()` definieren Sie vier Offset-Werte, wodurch die Linienboxen jeglichen umfließenden Inhalts näher an das Objekt herangezogen werden, als sie es sonst wären. Die Funktion `rect()` definiert ein Rechteck, indem die Entfernung von den oberen und linken Rändern des umgebenden Blocks angegeben wird. Die Funktion `xywh()` funktioniert, indem Entfernungen von den oberen und linken Rändern der Referenzbox angegeben und die Breite und Höhe des Rechtecks von diesem Startpunkt aus festgelegt werden.

Wir haben bereits gesehen, wie `circle()` eine kreisförmige Form erstellt. Eine `ellipse()` ist im Wesentlichen ein zusammengedrückter Kreis. Wenn keine dieser grundlegenden Formen geeignet ist, können Sie mit der Funktion `polygon()` komplexere Formen erstellen, die die Definition einer Reihe von Linien ermöglicht. Die Funktionen `path()` und `shape()` können verwendet werden, um JEDWEDE Form über eine Reihe von Linien-, Kurven- und Bewegungsbefehlen zu erstellen.

In unserem [Leitfaden zu Grundlegenden Formen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) erforschen wir jede der möglichen Grundformen und wie man sie erstellt.

### Formen aus dem Kastenwert

Formen können auch um den Kastenwert erstellt werden. Daher könnten Sie Ihre Form auf folgendem erstellen:

- `border-box`
- `padding-box`
- `content-box`
- `margin-box`

Im Beispiel unten können Sie den Wert `border-box` in einen der anderen zulässigen Werte ändern, um zu sehen, wie sich die Form näher oder weiter vom Kasten entfernt bewegt.

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

Um die Kastenwerte im Detail zu erforschen, siehe unseren Leitfaden zu [Formen aus Kastenwerten](/de/docs/Web/CSS/CSS_shapes/From_box_values).

### Formen aus Bildern

Ein interessanter Weg, um Ihren Pfad zu erstellen, ist die Verwendung eines Bildes mit einem Alphakanal—der Text wird dann um die nicht transparenten Teile des Bildes fließen. Dies ermöglicht das Überlagern von umfließendem Inhalt um ein Bild oder die Verwendung eines Bildes, das nie auf der Seite angezeigt wird, rein als Methode zur Erstellung einer komplexen Form ohne die Notwendigkeit, ein Polygon sorgfältig zu erstellen.

Beachtern Sie, dass Bilder, die auf diese Weise verwendet werden, [CORS-kompatibel](/de/docs/Web/HTTP/Guides/CORS) sein müssen, andernfalls wird `shape-outside` so agieren, als ob `none` als Wert angegeben wurde, und Sie werden keine Form erhalten.

Im nächsten Beispiel haben wir ein Bild mit einem vollständig transparenten Bereich, und wir verwenden ein Bild als URL-Wert für `shape-outside`. Die Form wird um den undurchsichtigen Bereich — das Bild des Ballons — erstellt.

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

Die Eigenschaft `shape-image-threshold` wird verwendet, um den Schwellenwert der im Bild verwendeten Transparenz zu setzen, um den Bereich des Bildes zu definieren, der für die Form verwendet wird. Wenn der Wert von `shape-image-threshold` `0.0` (was der Anfangswert ist) beträgt, muss der Bereich vollständig transparent sein. Wenn der Wert `1.0` ist, dann ist er völlig undurchsichtig. Werte dazwischen bedeuten, dass Sie einen halbtransparenten Bereich als definierenden Bereich der Form festlegen können.

Sie können den Schwellenwert in Aktion sehen, wenn wir einen Verlauf als Bild verwenden, auf dem wir unsere Form definieren. Im Beispiel unten, wenn Sie den Schwellenwert ändern, ändert sich der Pfad, den die Form nimmt, basierend auf dem von Ihnen ausgewählten Opazitätsniveau.

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

Um mehr über das Erstellen von Formen aus Bildern zu erfahren, sehen Sie den [Leitfaden zu Formen aus Bildern](/de/docs/Web/CSS/CSS_shapes/Shapes_from_images).

## Die `shape-margin` Eigenschaft

Die {{cssxref("shape-margin")}} Eigenschaft fügt `shape-outside` einen Rand hinzu. Dies wird die Linienboxen jeglichen umfließenden Inhalts weiter verkürzen und vom eigentlichen Pfad der Form wegschieben.

Im Beispiel unten haben wir einer grundlegenden Form eine `shape-margin` hinzugefügt. Ändern Sie den Rand, um den Text weiter von dem Pfad entfernt zu schieben, den die Form standardmäßig nehmen würde.

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

## Verwendung generierter Inhalte als gefloatetes Element

In den obigen Beispielen haben wir Bilder oder ein sichtbares Element verwendet, um die Form zu definieren, was bedeutet, dass Sie die Form auf der Seite sehen können. Stattdessen möchten Sie vielleicht etwas Text entlang einer nicht-rechteckigen, unsichtbaren Linie fließen lassen. Wir könnten zum Beispiel ein leeres gefloatetes {{htmlelement("div")}} oder {{htmlelement("span")}} Element zu unserem DOM hinzufügen und es unsichtbar machen. Wir können jedoch eine Form nur mit CSS unter Verwendung von [generierten Inhalten](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content) erstellen und alle unsere Stilfunktionen innerhalb des CSS belassen.

In diesem Beispiel verwenden wir generierte Inhalte, um ein Element mit einer Höhe und Breite von 150px einzufügen. Wir können dann grundlegende Formen, Kastenwerte oder sogar den Alphakanal eines Bildes verwenden, um eine Form zu erstellen, um welche der Text herumfließt.

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

Die zum Erstellen von Formen verwendeten grundlegenden Formen und Kastenwerte sind die gleichen wie die, die als Werte für {{cssxref("clip-path")}} verwendet werden. Wenn Sie also eine Form mit einem Bild erstellen und auch einen Teil dieses Bildes ausschneiden möchten, können Sie die gleichen Werte verwenden.

Das Bild unten ist ein quadratisches Bild mit einem blauen Hintergrund. Wir haben eine Form definiert, indem wir `shape-outside: ellipse(40% 50%);` und auch `clip-path: ellipse(40% 50%);` verwendet haben, um denselben Bereich auszuschneiden, den wir zur Definition der Form verwendet haben.

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

## Entwickler-Tools für Formen

Es gibt einen [Shape Path Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) in den Firefox DevTools. Dieses Tool kann verwendet werden, um die Werte von `circle()`, `inset()`, `ellipse()`, und `polygon()` zu inspizieren. Wenn Ihr Polygon nicht ganz korrekt ist, können Sie den Shape-Editor verwenden, um es zu optimieren und dann den neuen Wert in Ihr CSS zu kopieren.

## Weitere CSS-Formenfunktionen

In diesem Leitfaden haben wir das Umfließen von Text um gefloatete Formen diskutiert. Siehe das [CSS-Shapes-Modul](/de/docs/Web/CSS/CSS_shapes) für Links zu allen Modulmerkmalen plus zusätzlichen verwandten Funktionen. Dies schließt alle Formfunktionen und relevante Leitfäden ein.
