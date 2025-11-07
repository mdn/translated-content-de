---
title: Formen aus Bildern
short-title: Bildbasierte Formen
slug: Web/CSS/CSS_shapes/Shapes_from_images
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

In diesem Leitfaden werden wir uns ansehen, wie wir eine Form aus einer Bilddatei mit einem Alpha-Kanal oder sogar aus einem CSS-Gradienten erstellen können. Dies ist eine sehr flexible Möglichkeit, Formen zu erstellen. Anstatt einen Pfad mit einem komplexen Polygon in CSS zu zeichnen, können Sie die Form in einem Grafikprogramm erstellen und dann den Pfad verwenden, der durch die weniger opaken Pixel als ein Schwellenwert erstellt wird.

## Formen aus Bildern erstellen

Um ein Bild zur Erstellung einer Form zu verwenden, muss das Bild einen Alpha-Kanal haben, einen Bereich, der nicht vollständig opak ist. Die Eigenschaft {{cssxref("shape-image-threshold")}} wird verwendet, um einen Schwellenwert für diese Opazität festzulegen. Pixel, die opaker als dieser Wert sind, werden zur Berechnung der Fläche der Form verwendet.

Im folgenden Beispiel gibt es ein Bild eines Sterns mit einem soliden roten Bereich und einem Bereich, der vollständig transparent ist. Der Pfad zur Bilddatei wird als Wert für die Eigenschaft {{cssxref("shape-outside")}} verwendet. Der Inhalt fließt nun um die Sternform herum.

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
  shape-outside: url("https://mdn.github.io/shared-assets/images/examples/star-shape.png");
}
```

{{EmbedLiveSample("simple-example", "", "340px")}}

Sie können {{cssxref("shape-margin")}} verwenden, um den Text von der Form wegzubewegen und einen Rand um die erstellte Form und den Text zu schaffen.

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
  shape-outside: url("https://mdn.github.io/shared-assets/images/examples/star-shape.png");
  shape-margin: 20px;
}
```

{{EmbedLiveSample("margin", "", "340px")}}

## CORS-Kompatibilität

Ein Problem, auf das Sie stoßen werden, wenn Sie Formen aus einem Bild erstellen, ist, dass das verwendete Bild [CORS-kompatibel](/de/docs/Web/HTTP/Guides/CORS) sein muss. Ein Bild, das auf derselben Domain wie Ihre Seite gehostet wird, sollte funktionieren. Wenn Ihre Bilder jedoch auf einer anderen Domain, wie beispielsweise einem CDN, gehostet werden, sollten Sie sicherstellen, dass sie die richtigen Header senden, um sie für Formen verwenden zu können. Aufgrund dieser Anforderung an CORS-kompatible Bilder wird Ihre Form nicht funktionieren, wenn Sie Ihre Datei lokal ohne einen lokalen Webserver in der Vorschau anzeigen.

### Ist es ein CORS-Problem?

DevTools können Ihnen helfen, CORS-Fehler zu identifizieren. In Chrome wird die Konsole Sie auf CORS-Probleme hinweisen. In Firefox, wenn Sie die Eigenschaft inspizieren, werden Sie darauf hingewiesen, dass das Bild nicht geladen werden konnte. Dies sollte Sie darauf hinweisen, dass Ihr Bild aufgrund von CORS nicht als Quelle einer Form verwendet werden kann.

## Einen Schwellenwert festlegen

Die Eigenschaft {{cssxref("shape-image-threshold")}} ermöglicht die Erstellung von Formen aus Bereichen, die nicht vollständig transparent sind. Wenn der Wert von `shape-image-threshold` `0.0` beträgt (was der Anfangswert ist), muss der Bereich vollständig transparent sein. Wenn der Wert `1.0` beträgt, ist er vollständig opak. Werte dazwischen bedeuten, dass Sie einen halbdurchsichtigen Bereich als bestimmenden Bereich festlegen können.

Im folgenden Beispiel ist der Hintergrund des Sterns nicht vollständig transparent, er hat eine 20%ige Opazität, wie in meinem Grafikprogramm erstellt. Wenn ich `shape-image-threshold` auf `0.2` oder größer setze, sehe ich die Form, wenn ich es kleiner als `0.2` setze, bekomme ich die Form nicht.

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
  shape-outside: url("https://mdn.github.io/shared-assets/images/examples/star-red-20.png");
  shape-image-threshold: 0.2;
}
```

{{EmbedLiveSample("threshold", "", "340px")}}

## Verwendung von Bildern mit generiertem Inhalt

Im obigen Beispiel habe ich sowohl das Bild als Wert von {{cssxref("shape-outside")}} verwendet als auch es zur Seite hinzugefügt. Viele Demos tun dies, da es hilft, die Form zu zeigen, der wir folgen, jedoch ist die Eigenschaft `shape-outside` nicht mit dem Bild verbunden, das auf der Seite angezeigt wird, und Sie müssen kein Bild anzeigen, um ein Bild zu verwenden, um eine Form zu erstellen.

Sie benötigen etwas, das schwebt, aber dies könnte auch generierter Inhalt sein, wie im folgenden Beispiel. Ich lasse generierten Inhalt schweben und verwende ein größeres Sternbild, um meinen Inhalt zu formen, ohne ein Bild auf der Seite anzuzeigen.

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
  shape-outside: url("https://mdn.github.io/shared-assets/images/examples/star-shape.png");
  shape-image-threshold: 0.3;
}
```

{{EmbedLiveSample("generated-content", "", "420px")}}

## Formen mit einem Gradienten erstellen

Da ein [CSS-Gradient](/de/docs/Web/CSS/Guides/Images/Using_gradients) als Bild behandelt wird, können Sie einen Gradienten verwenden, um eine Form zu erzeugen, indem Sie transparente oder halbtransparente Bereiche als Teil des Gradienten haben.

Das nächste Beispiel verwendet generierten Inhalt. Der Inhalt wurde geschwebt und hat ein Hintergrundbild eines linearen Gradienten. Ich verwende denselben Wert als Wert von {{cssxref("shape-outside")}}. Der lineare Gradient geht von lila zu transparent. Durch Ändern des Wertes von {{cssxref("shape-image-threshold")}} können Sie entscheiden, wie transparent die Pixel sein müssen, die die Form erstellen. Sie können mit diesem Wert im folgenden Beispiel spielen, um zu sehen, wie sich die diagonale Linie je nach diesem Wert über die Form bewegt.

Sie könnten auch versuchen, das Hintergrundbild vollständig zu entfernen und den Gradienten somit nur zum Erstellen der Form zu verwenden, ohne ihn überhaupt auf der Seite anzuzeigen.

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

Das nächste Beispiel verwendet einen radialen Gradient mit einer Ellipse, wieder einmal wird ein transparenter Teil des Gradienten verwendet, um die Form zu erstellen.

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

Sie können direkt in diesen Live-Beispielen experimentieren, um zu sehen, wie das Ändern des Gradienten den Pfad Ihrer Form verändern wird.
