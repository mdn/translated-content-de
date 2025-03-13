---
title: Formen aus Bildern
slug: Web/CSS/CSS_shapes/Shapes_from_images
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{CSSRef}}

In diesem Leitfaden werden wir uns ansehen, wie wir eine Form aus einer Bilddatei mit einem Alphakanal oder sogar aus einem CSS-Gradienten erstellen können. Dies ist eine sehr flexible Methode, Formen zu erstellen. Anstatt einen Pfad mit einem komplexen Polygon in CSS zu zeichnen, können Sie die Form in einem Grafikprogramm erstellen und dann den durch die Pixel erzeugten Pfad verwenden, die weniger undurchsichtig als ein Schwellenwert sind.

## Formen aus Bildern erstellen

Um ein Bild für die Erstellung einer Form zu verwenden, muss das Bild einen Alphakanal haben, einen Bereich, der nicht vollständig undurchsichtig ist. Die Eigenschaft {{cssxref("shape-image-threshold")}} wird verwendet, um einen Schwellenwert für diese Deckkraft festzulegen. Pixel, die undurchsichtiger als dieser Wert sind, werden verwendet, um den Bereich der Form zu berechnen.

Im folgenden Beispiel gibt es ein Bild eines Sterns mit einem soliden roten Bereich und einem Bereich, der vollständig transparent ist. Der Pfad zur Bilddatei wird als Wert für die Eigenschaft {{cssxref("shape-outside")}} verwendet. Der Inhalt umfließt jetzt die Sternform.

```html live-sample___simple-example
<div class="box">
  <img
    alt="A red star"
    src="https://mdn.github.io/shared-assets/images/examples/star-shape.png" />
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

```css live-sample___simple-example
body {
  font: 1.2em / 1.5 sans-serif;
}
img {
  float: left;
  shape-outside: url(https://mdn.github.io/shared-assets/images/examples/star-shape.png);
}
```

{{EmbedLiveSample("simple-example", "", "340px")}}

Sie können {{cssxref("shape-margin")}} verwenden, um den Text von der Form wegzubewegen und einen Rand um die erstellte Form und den Text zu erzeugen.

```html hidden live-sample___margin
<div class="box">
  <img
    alt="A red star"
    src="https://mdn.github.io/shared-assets/images/examples/star-shape.png" />
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

```css live-sample___margin
body {
  font: 1.2em / 1.5 sans-serif;
}

img {
  float: left;
  shape-outside: url(https://mdn.github.io/shared-assets/images/examples/star-shape.png);
  shape-margin: 20px;
}
```

{{EmbedLiveSample("margin", "", "340px")}}

## CORS-Kompatibilität

Ein Problem, auf das Sie stoßen werden, wenn Sie Formen aus einem Bild erstellen, ist, dass das verwendete Bild [CORS-kompatibel](/de/docs/Web/HTTP/Guides/CORS) sein muss. Ein Bild, das auf derselben Domain wie Ihre Website gehostet wird, sollte funktionieren. Wenn Ihre Bilder jedoch auf einer anderen Domain, wie z.B. auf einem CDN, gehostet werden, sollten Sie sicherstellen, dass sie die richtigen Header senden, um sie für Formen verwenden zu können. Aufgrund dieser Anforderung für CORS-kompatible Bilder wird Ihre Form nicht funktionieren, wenn Sie Ihre Datei lokal ohne die Verwendung eines lokalen Webservers Vorschau anzeigen.

### Handelt es sich um ein CORS-Problem?

Die Entwickler-Tools können Ihnen helfen, CORS-Fehler zu identifizieren. In Chrome wird Ihnen die Konsole CORS-Probleme anzeigen. In Firefox, wenn Sie die Eigenschaft inspizieren, werden Sie darauf hingewiesen, dass das Bild nicht geladen werden konnte. Dies sollte Sie darauf aufmerksam machen, dass Ihr Bild aufgrund von CORS nicht als Quelle einer Form verwendet werden kann.

## Einen Schwellenwert festlegen

Die Eigenschaft {{cssxref("shape-image-threshold")}} ermöglicht die Erstellung von Formen aus Bereichen, die nicht vollständig transparent sind. Wenn der Wert von `shape-image-threshold` `0.0` ist (was der Anfangswert ist), muss der Bereich vollständig transparent sein. Wenn der Wert `1.0` ist, ist er vollständig undurchsichtig. Werte dazwischen bedeuten, dass Sie einen halbtransparenten Bereich als definierenden Bereich festlegen können.

Im folgenden Beispiel ist der Hintergrund des Sterns nicht vollständig transparent, er hat eine Deckkraft von 20 %, wie in meinem Grafikprogramm erstellt. Wenn ich `shape-image-threshold` auf `0.2` oder mehr setze, sehe ich die Form, wenn ich es auf einen Wert kleiner als `0.2` setze, erhalte ich die Form nicht.

```html hidden live-sample___threshold
<div class="box">
  <img
    alt="A red star"
    src="https://mdn.github.io/shared-assets/images/examples/star-red-20.png" />
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
  font: 1.2em / 1.5 sans-serif;
}

img {
  float: left;
  shape-outside: url(https://mdn.github.io/shared-assets/images/examples/star-red-20.png);
  shape-image-threshold: 0.2;
}
```

{{EmbedLiveSample("threshold", "", "340px")}}

## Bilder mit generiertem Inhalt verwenden

Im obigen Beispiel habe ich sowohl das Bild als Wert von {{cssxref("shape-outside")}} verwendet als auch zu der Seite hinzugefügt. Viele Demos tun dies, da es hilft, die Form zu zeigen, die wir verfolgen. Die Eigenschaft `shape-outside` bezieht sich jedoch nicht auf das Bild, das auf der Seite angezeigt wird, sodass Sie kein Bild anzeigen müssen, um ein Bild zur Erstellung einer Form zu verwenden.

Sie benötigen etwas zum Floaten, aber das könnte generierter Inhalt sein, wie im folgenden Beispiel. Ich lasse generierten Inhalt floaten und verwende ein größeres Sternbild, um meinen Inhalt zu formen, ohne ein Bild auf der Seite anzuzeigen.

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
  font: 1.2em / 1.5 sans-serif;
}

.box::before {
  content: "";
  float: left;
  width: 400px;
  height: 300px;
  shape-outside: url(https://mdn.github.io/shared-assets/images/examples/star-shape.png);
  shape-image-threshold: 0.3;
}
```

{{EmbedLiveSample("generated-content", "", "420px")}}

## Formen mit einem Gradienten erstellen

Da ein [CSS-Gradient](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) als Bild behandelt wird, können Sie einen Gradienten verwenden, um eine Form zu erzeugen, indem Sie transparente oder halbtransparente Bereiche als Teil des Gradienten verwenden.

Das nächste Beispiel verwendet generierten Inhalt. Der Inhalt wurde gefloatet und hat ihm ein Hintergrundbild aus einem linearen Gradienten gegeben. Ich verwende denselben Wert als Wert von {{cssxref("shape-outside")}}. Der lineare Gradient verläuft von lila zu transparent. Durch Ändern des Wertes von {{cssxref("shape-image-threshold")}} können Sie entscheiden, wie transparent die Pixel sein müssen, die die Form erzeugen. Sie können mit diesem Wert im folgenden Beispiel spielen, um zu sehen, wie sich die diagonale Linie je nach Wert über die Form bewegt.

Sie könnten auch versuchen, das Hintergrundbild vollständig zu entfernen, um den Gradienten nur zur Erstellung der Form zu verwenden und ihn nicht auf der Seite anzuzeigen.

```html live-sample___gradient
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

```css live-sample___gradient
body {
  font: 1.2em / 1.5 sans-serif;
}

.box::before {
  content: "";
  float: left;
  height: 250px;
  width: 400px;
  background-image: linear-gradient(
    to bottom right,
    rebeccapurple,
    transparent
  );
  shape-outside: linear-gradient(to bottom right, rebeccapurple, transparent);
  shape-image-threshold: 0.3;
}
```

{{EmbedLiveSample("gradient", "", "400px")}}

Das nächste Beispiel verwendet einen radialen Gradienten mit einer Ellipse und nutzt erneut einen transparenten Teil des Gradienten, um die Form zu erstellen.

```html hidden live-sample___radial-gradient
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

```css live-sample___radial-gradient
body {
  font: 1.2em / 1.5 sans-serif;
}

.box::before {
  content: "";
  float: left;
  height: 250px;
  width: 400px;
  background-image: radial-gradient(
    ellipse closest-side,
    rebeccapurple,
    blue 50%,
    transparent
  );
  shape-outside: radial-gradient(
    ellipse closest-side,
    rebeccapurple,
    blue 50%,
    transparent
  );
  shape-image-threshold: 0.3;
}
```

{{EmbedLiveSample("radial-gradient", "", "400px")}}

Sie können direkt in diesen Live-Beispielen experimentieren, um zu sehen, wie das Ändern des Gradienten den Pfad Ihrer Form verändert.
