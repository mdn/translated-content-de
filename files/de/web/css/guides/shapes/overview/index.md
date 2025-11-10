---
title: Übersicht über Formen
short-title: Overview
slug: Web/CSS/Guides/Shapes/Overview
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das [CSS Shapes-Modul](/de/docs/Web/CSS/Guides/Shapes) beschreibt geometrische Formen in CSS. Dieser Artikel bietet einen Überblick darüber, wie Sie Formen verwenden können, um Text um gefloatete Elemente herumzuführen, die nicht unbedingt rechteckig sind.

Wenn Sie ein Element nach links floaten, wird der Text rechteckig um die rechte und untere Seite des Elements geführt. Mit CSS-Formen können Sie beispielsweise eine Kreisform anwenden, und der Text wird entlang der Linie des Kreises geführt.

Es gibt mehrere Möglichkeiten, diesen Kreis zu erstellen. In diesem Leitfaden werden wir uns ansehen, wie CSS-Formen funktionieren und wie man sie verwendet.

## Was definiert die Spezifikation?

Die Spezifikation definiert einige Eigenschaften, einschließlich:

- {{cssxref("shape-outside")}} — Ermöglicht die Definition grundlegender Formen.
- {{cssxref("shape-image-threshold")}} — Legt einen Schwellenwert für die Deckkraft fest. Wenn ein Bild verwendet wird, um eine Form zu definieren, werden nur die Teile des Bildes verwendet, die die gleiche oder eine größere Deckkraft als der Schwellenwert haben. Alle anderen Teile werden ignoriert.
- {{cssxref("shape-margin")}} — Setzt einen Rand um die definierte Form.

## Definition grundlegender Formen

Die `shape-outside`-Eigenschaft ermöglicht es uns, eine Form zu definieren. Sie nimmt eine Vielzahl von Werten an, die unterschiedliche Formen definieren, die im {{cssxref("&lt;basic-shape&gt;")}}-Datentyp spezifiziert sind.

Im folgenden Beispiel wird ein Bild nach links gefloatet. Wir wenden die `shape-outside`-Eigenschaft mit einem `circle(50%)`-Wert an. Das Ergebnis ist, dass der Inhalt jetzt um die kreisförmige Form herum fließt, anstatt dem rechteckigen Bereich zu folgen, der durch die Box des Bildes erstellt wurde.

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

Hier haben wir die {{cssxref("basic-shape/circle", "circle()")}}-Funktion verwendet, die von allen modernen Browsern unterstützt wird. Wenn wir einen neueren Formtyp verwenden würden, der noch nicht vollständig unterstützt wird, würden Benutzer von nicht unterstützenden Browsern den Inhalt um die Seiten eines Rechtecks fließen sehen, da das Bild gefloatet ist. Formen sind eine visuelle progressive Verbesserung.

### Grundlegende Formen

Der Wert `circle(50%)` ist ein Beispiel für eine grundlegende Form. Die Spezifikation definiert mehrere `<basic-shape>`-Werte, einschließlich:

- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

Drei dieser Funktionen definieren nur Rechtecke. Mit der `inset()`-Funktion definieren Sie vier Versatzwerte, wodurch die Linienkästchen eines umfließenden Inhalts näher an das Objekt gezogen werden, als sie es sonst wären. Die `rect()`-Funktion definiert ein Rechteck, indem Sie den Abstand von den oberen und linken Kanten des umgebenden Blocks spezifizieren. Die `xywh()`-Funktion funktioniert, indem Abstände von den oberen und linken Kanten des Referenzkastens angegeben werden und die Breite und Höhe des Rechtecks von diesem Ausgangspunkt aus festgelegt werden.

Wir haben bereits gesehen, wie `circle()` eine kreisförmige Form erstellt. Eine `ellipse()` ist im Wesentlichen ein gedrückter Kreis. Wenn keine dieser grundlegenden Formen ausreicht, können Sie mit der `polygon()`-Funktion komplexere Formen erstellen, die die Definition einer Reihe von Linien ermöglichen. Die `path()`- und `shape()`-Funktionen können verwendet werden, um JEDWEDE Form über eine Serie von Linien-, Kurven- und Bewegungsbefehlen zu erstellen.

In unserem [Leitfaden zu grundlegenden Formen](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside) erkunden wir jede der möglichen grundlegenden Formen und wie man sie erstellt.

### Formen aus dem Boxwert

Formen können auch um den Boxwert herum erstellt werden. Daher könnten Sie Ihre Form auf folgende Weise erstellen:

- `border-box`
- `padding-box`
- `content-box`
- `margin-box`

Im Beispiel unten können Sie den Wert `border-box` in einen der anderen erlaubten Werte ändern, um zu sehen, wie sich die Form näher oder weiter entfernt von der Box bewegt.

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

Um die Boxwerte im Detail zu erkunden, sehen Sie sich unseren Leitfaden zu [Formen aus Boxwerten](/de/docs/Web/CSS/Guides/Shapes/From_box_values) an.

### Formen aus Bildern

Eine interessante Möglichkeit, Ihren Pfad zu generieren, ist die Verwendung eines Bildes mit einem Alphakanal – der Text wird dann um die nicht transparenten Teile des Bildes geflossen. Dies ermöglicht die Überlagerung von umfließendem Inhalt um ein Bild oder die Verwendung eines Bildes, das niemals auf der Seite angezeigt wird, rein als Methode, um eine komplexe Form zu erstellen, ohne ein Polygon sorgfältig zu definieren.

Beachten Sie, dass Bilder, die auf diese Weise verwendet werden, [CORS-kompatibel](/de/docs/Web/HTTP/Guides/CORS) sein müssen, andernfalls wird `shape-outside` so wirken, als ob `none` als Wert angegeben wäre, und Sie erhalten keine Form.

Im nächsten Beispiel haben wir ein Bild mit einem vollständig transparenten Bereich, und wir verwenden ein Bild als URL-Wert für `shape-outside`. Die Form wird um den undurchsichtigen Bereich erstellt — das Bild des Ballons.

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

Die `shape-image-threshold`-Eigenschaft wird verwendet, um den Schwellenwert der Bildtransparenz festzulegen, die zur Definition des Bereichs des verwendeten Bildes für die Form verwendet wird. Wenn der Wert von `shape-image-threshold` `0.0` ist (was der Initialwert ist), muss der Bereich vollständig transparent sein. Wenn der Wert `1.0` ist, dann ist er vollständig undurchsichtig. Werte dazwischen bedeuten, dass Sie einen halbtransparenten Bereich als den definierenden Bereich der Form festlegen können.

Sie können den Schwellenwert in Aktion sehen, wenn wir einen Verlauf als Bild verwenden, auf dem wir unsere Form definieren. Im Beispiel unten, wenn Sie den Schwellenwert ändern, ändert sich der Pfad, den die Form nimmt, basierend auf dem von Ihnen ausgewählten Deckungsgrad.

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

Um mehr über die Erstellung von Formen aus Bildern zu erfahren, lesen Sie den [Leitfaden zu Formen aus Bildern](/de/docs/Web/CSS/Guides/Shapes/From_images).

## Die `shape-margin`-Eigenschaft

Die {{cssxref("shape-margin")}}-Eigenschaft fügt zu `shape-outside` einen Rand hinzu. Dadurch werden die Linienkästchen eines um die Form laufenden Inhalts weiter verkürzt und vom Objekt selbst weggedrängt.

Im folgenden Beispiel haben wir einer grundlegenden Form einen `shape-margin` hinzugefügt. Ändern Sie den Rand, um den Text weiter von dem Pfad wegzudrücken, den die Form standardmäßig nehmen würde.

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

In den obigen Beispielen haben wir Bilder oder ein sichtbares Element verwendet, um die Form zu definieren, was bedeutet, dass Sie die Form auf der Seite sehen können. Stattdessen möchten Sie möglicherweise Text entlang einer nicht rechteckigen unsichtbaren Linie fließen lassen. Wir könnten beispielsweise ein leeres, gefloatetes {{htmlelement("div")}}- oder {{htmlelement("span")}}-Element zu unserem DOM hinzufügen und es unsichtbar machen. Allerdings können wir mit nur CSS eine Form mit [generiertem Inhalt](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content) erstellen und unsere gesamte Styling-Funktionalität innerhalb von CSS behalten.

In diesem Beispiel verwenden wir generierten Inhalt, um ein Element mit einer Höhe und Breite von 150px einzufügen. Wir können dann grundlegende Formen, Boxwerte oder sogar den Alphakanal eines Bildes verwenden, um eine Form für den Text zu erstellen, um sie zu umfließen.

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

Die grundlegenden Formen und Boxwerte, die zur Erstellung von Formen verwendet werden, sind die gleichen wie diejenigen, die als Werte für {{cssxref("clip-path")}} verwendet werden. Daher können Sie, wenn Sie eine Form mit einem Bild erstellen und auch einen Teil dieses Bildes abschneiden möchten, die gleichen Werte verwenden.

Das folgende Bild ist ein quadratisches Bild mit einem blauen Hintergrund. Wir haben eine Form mit `shape-outside: ellipse(40% 50%);` definiert und auch `clip-path: ellipse(40% 50%);` verwendet, um denselben Bereich abzuschneiden, den wir zur Definition der Form verwendet haben.

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

Es gibt einen [Shape Path Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) in den Firefox DevTools. Dieses Tool kann verwendet werden, um die `circle()`, `inset()`, `ellipse()` und `polygon()` Werte zu inspizieren. Wenn Ihr Polygon nicht ganz richtig ist, können Sie den Shapes Editor verwenden, um es anzupassen und dann den neuen Wert in Ihr CSS zu kopieren.

## Weitere CSS-Formen-Features

In diesem Leitfaden haben wir das Umfließen von Text um gefloatete Formen besprochen. Siehe das [CSS-Shapes-Modul](/de/docs/Web/CSS/Guides/Shapes) für Links zu allen Modul-Features sowie zusätzliche verwandte Funktionen. Dies beinhaltet alle Formfunktionen und relevante Leitfäden.
