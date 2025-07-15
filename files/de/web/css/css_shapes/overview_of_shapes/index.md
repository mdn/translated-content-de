---
title: Übersicht über Formen
short-title: Overview
slug: Web/CSS/CSS_shapes/Overview_of_shapes
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das [CSS Shapes Modul](/de/docs/Web/CSS/CSS_shapes) beschreibt geometrische Formen in CSS. Dieser Artikel bietet einen Überblick darüber, wie Sie Formen verwenden können, um Text um gefloatete Elemente zu wälzen, die nicht unbedingt rechteckig sind.

Wenn Sie ein Element nach links floaten, wird der Text in rechteckiger Weise um die rechte und untere Seite des Elements gewickelt. Mit CSS-Formen können Sie beispielsweise eine kreisförmige Form anwenden, und der Text wird entlang der Linie des Kreises gewickelt.

Es gibt mehrere Möglichkeiten, diesen Kreis zu erstellen. In diesem Leitfaden werden wir uns ansehen, wie CSS-Formen funktionieren und wie man sie verwendet.

## Was definiert die Spezifikation?

Die Spezifikation definiert einige Eigenschaften, darunter:

- {{cssxref("shape-outside")}} — Ermöglicht die Definition grundlegender Formen.
- {{cssxref("shape-image-threshold")}} — Setzt einen Opazitätsschwellenwert. Wenn ein Bild zur Definition einer Form verwendet wird, werden nur die Bildteile, die die gleiche Opazität oder größer als der Schwellenwert haben, in der Form verwendet. Alle anderen Teile werden ignoriert.
- {{cssxref("shape-margin")}} — Setzt einen Abstand um die definierte Form.

## Grundlegende Formen definieren

Die Eigenschaft `shape-outside` ermöglicht es uns, eine Form zu definieren. Sie nimmt eine Vielzahl von Werten an, die unterschiedliche Formen definieren, die im {{cssxref("&lt;basic-shape&gt;")}} Datentyp angegeben sind.

Im folgenden Beispiel wird ein Bild nach links gefloatet. Wir verwenden die Eigenschaft `shape-outside` mit einem `circle(50%)`-Wert. Das Ergebnis ist, dass der Inhalt nun um die kreisförmige Form herumläuft, anstatt dem durch den Bildrahmen erstellten Rechteck zu folgen.

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

Hier haben wir die Funktion {{cssxref("basic-shape/circle", "circle()")}} verwendet, die von allen modernen Browsern unterstützt wird. Wenn wir einen neueren Formtyp verwenden würden, der keine vollständige Unterstützung hat, würden Benutzer von nicht unterstützenden Browsern den Inhalt um die Seiten eines Rechtecks fließen sehen, da das Bild gefloatet ist. Formen sind eine visuelle progressive Verbesserung.

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

Drei dieser Funktionen definieren nur Rechtecke. Mit der Funktion `inset()` definieren Sie vier Versatzwerte und ziehen damit die Textzeilenboxen jeglichen umgebenden Inhalts näher an das Objekt heran, als sie es sonst wären. Die Funktion `rect()` definiert ein Rechteck, indem sie den Abstand von den oberen und linken Kanten des umgebenden Blocks angibt. Die Funktion `xywh()` funktioniert, indem sie Abstände von den oberen und linken Kanten des Referenzrahmens angibt und die Breite und Höhe des Rechtecks ab diesem Startpunkt festlegt.

Wir haben bereits gesehen, wie `circle()` eine kreisförmige Form erstellt. Eine `ellipse()` ist im Wesentlichen ein gestauchter Kreis. Wenn keine dieser grundlegenden Formen ausreicht, können Sie mit der Funktion `polygon()` komplexere Formen erstellen, die die Definition einer Reihe von Linien ermöglichen. Die Funktionen `path()` und `shape()` können verwendet werden, um JEDE Form über eine Reihe von Linien-, Kurven- und Bewegungsbefehlen zu erstellen.

In unserem [Leitfaden zu Grundformen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) erkunden wir jede der möglichen Grundformen und wie man sie erstellt.

### Formen aus dem Boxwert

Formen können auch um den Boxwert herum erstellt werden. Daher könnten Sie Ihre Form erstellen auf:

- `border-box`
- `padding-box`
- `content-box`
- `margin-box`

Im untenstehenden Beispiel können Sie den Wert `border-box` auf einen der anderen erlaubten Werte ändern, um zu sehen, wie die Form näher oder weiter vom Rahmen entfernt wird.

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

Um die Boxwerte im Detail zu erkunden, siehe unser Leitfaden über [Formen aus Boxwerten](/de/docs/Web/CSS/CSS_shapes/From_box_values).

### Formen aus Bildern

Eine interessante Möglichkeit, Ihren Pfad zu erzeugen, ist die Verwendung eines Bildes mit einem Alphakanal — der Text wird dann um die nicht-transparenten Teile des Bildes gewickelt. Dies ermöglicht die Überlagerung von umwickeltem Inhalt um ein Bild oder die Verwendung eines Bildes, das nie auf der Seite angezeigt wird, rein als Methode zur Erstellung einer komplexen Form, ohne dass ein Polygon sorgfältig abgebildet werden muss.

Beachten Sie, dass Bilder, die auf diese Weise verwendet werden, [CORS-kompatibel](/de/docs/Web/HTTP/Guides/CORS) sein müssen, andernfalls wird `shape-outside` so handeln, als ob `none` als Wert angegeben wurde, und Sie werden keine Form erhalten.

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

Die Eigenschaft `shape-image-threshold` wird verwendet, um die Schwelle der Bildtransparenz festzulegen, die für die Definition des Bereichs des Bildes verwendet wird, der für die Form verwendet wird. Wenn der Wert von `shape-image-threshold` `0.0` ist (das der Anfangswert), dann muss der Bereich vollständig transparent sein. Wenn der Wert `1.0` ist, dann ist er vollständig undurchsichtig. Zwischenwerte bedeuten, dass Sie einen halbtransparenten Bereich als den definierenden Bereich der Form festlegen können.

Sie können die Schwelle in Aktion sehen, wenn wir einen Verlauf als das Bild verwenden, auf dem wir unsere Form definieren. Im untenstehenden Beispiel ändert sich der Pfad, den die Form nimmt, basierend auf dem Level der Opazität, die Sie ausgewählt haben.

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

Um mehr über das Erstellen von Formen aus Bildern zu erfahren, siehe den [Leitfaden zu Formen aus Bildern](/de/docs/Web/CSS/CSS_shapes/Shapes_from_images).

## Die Eigenschaft `shape-margin`

Die {{cssxref("shape-margin")}} Eigenschaft fügt zu `shape-outside` einen Rand hinzu. Dies verkürzt die Zeilenboxen jeglichen um die Form gewickelten Inhalts weiter, indem es diesen vom eigentlichen Umriss der Form wegdrückt.

Im folgenden Beispiel haben wir einer grundlegenden Form einen `shape-margin` hinzugefügt. Ändern Sie den Rand, um den Text weiter weg vom Pfad drücken, den die Form standardmäßig nehmen würde.

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

## Verwendung von generiertem Inhalt als das gefloatete Element

In den obigen Beispielen haben wir Bilder oder ein sichtbares Element verwendet, um die Form zu definieren, was bedeutet, dass Sie die Form auf der Seite sehen können. Stattdessen möchten Sie vielleicht Text entlang einer nicht rechteckigen unsichtbaren Linie fließen lassen. Wir könnten zum Beispiel ein leeres gefloatetes {{htmlelement("div")}} oder {{htmlelement("span")}} Element zu unserem DOM hinzufügen und es unsichtbar machen. Wir können jedoch eine Form nur mit CSS über [generierten Inhalt](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content) erstellen und alle unsere Styling-Funktionen innerhalb des CSS beibehalten.

In diesem Beispiel verwenden wir generierten Inhalt, um ein Element mit einer Höhe und Breite von 150px einzufügen. Wir können dann grundlegende Formen, Boxwerte oder sogar den Alphakanal eines Bildes verwenden, um eine Form zu erstellen, um die der Text gewickelt wird.

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

Die grundlegenden Formen und Boxwerte, die zur Erstellung von Formen verwendet werden, sind die gleichen, die als Werte für {{cssxref("clip-path")}} verwendet werden. Daher, wenn Sie eine Form mit einem Bild erstellen möchten und auch einen Teil dieses Bildes abschneiden möchten, können Sie die gleichen Werte verwenden.

Das untenstehende Bild ist ein quadratisches Bild mit einem blauen Hintergrund. Wir haben eine Form mit `shape-outside: ellipse(40% 50%);` definiert und auch `clip-path: ellipse(40% 50%);` verwendet, um denselben Bereich abzuschneiden, den wir zur Definition der Form verwendet haben.

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

Es gibt einen [Shape Path Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) in den Firefox DevTools. Dieses Tool kann verwendet werden, um die Werte von `circle()`, `inset()`, `ellipse()` und `polygon()` zu inspizieren. Wenn Ihr Polygon nicht ganz richtig ist, können Sie den Shapes Editor verwenden, um es anzupassen, und dann den neuen Wert in Ihr CSS kopieren.

## Weitere CSS Shapes Funktionen

In diesem Leitfaden haben wir das Umwickeln von Text um gefloatete Formen diskutiert. Siehe das [CSS Shapes Modul](/de/docs/Web/CSS/CSS_shapes) für Links zu allen Modulfunktionen sowie zusätzlichen verwandten Funktionen. Dazu gehören alle Formfunktionen und relevante Leitfäden.
