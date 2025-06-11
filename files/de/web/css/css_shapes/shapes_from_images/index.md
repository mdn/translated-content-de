---
title: Formen aus Bildern
short-title: Bildbasierte Formen
slug: Web/CSS/CSS_shapes/Shapes_from_images
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

In diesem Leitfaden werden wir uns ansehen, wie wir eine Form aus einer Bilddatei mit einem Alphakanal oder sogar aus einem CSS-Gradienten erstellen können. Dies ist eine sehr flexible Methode, um Formen zu erstellen. Anstatt einen Pfad mit einem komplexen Polygon in CSS zu zeichnen, können Sie die Form in einem Grafikprogramm erstellen und dann den Pfad verwenden, der von den weniger opaken Pixeln als ein Schwellenwert erstellt wird.

## Formen aus Bildern erstellen

Um ein Bild zur Erstellung einer Form zu verwenden, muss das Bild einen Alphakanal haben, einen Bereich, der nicht vollständig opak ist. Die Eigenschaft {{cssxref("shape-image-threshold")}} wird verwendet, um einen Schwellenwert für diese Opazität festzulegen. Pixel, die opaker als dieser Wert sind, werden verwendet, um den Bereich der Form zu berechnen.

Im folgenden Beispiel gibt es ein Bild eines Sterns mit einem soliden roten Bereich und einem Bereich, der vollständig transparent ist. Der Pfad zur Bilddatei wird als Wert für die Eigenschaft {{cssxref("shape-outside")}} verwendet. Der Inhalt fließt nun um die Sternform.

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

Sie können {{cssxref("shape-margin")}} verwenden, um den Text von der Form weg zu bewegen und der erstellten Form sowie dem Text einen Rand zu verleihen.

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

Ein Problem, auf das Sie stoßen werden, wenn Sie Formen aus einem Bild erstellen, ist, dass das verwendete Bild [CORS-kompatibel](/de/docs/Web/HTTP/Guides/CORS) sein muss. Ein Bild, das auf derselben Domain wie Ihre Website gehostet wird, sollte funktionieren. Wenn Ihre Bilder jedoch auf einer anderen Domain, z. B. einem CDN, gehostet werden, müssen Sie sicherstellen, dass sie die richtigen Header senden, um sie für Formen verwenden zu können. Aufgrund dieser Anforderung an CORS-kompatible Bilder wird Ihre Form nicht funktionieren, wenn Sie Ihre Datei lokal ohne Verwendung eines lokalen Webservers anzeigen.

### Ist es ein CORS-Problem?

DevTools kann Ihnen helfen, CORS-Fehler zu identifizieren. In Chrome wird in der Konsole auf CORS-Probleme hingewiesen. In Firefox werden Sie darauf hingewiesen, wenn Sie die Eigenschaft inspizieren, dass das Bild nicht geladen werden konnte. Dies sollte Ihnen zu erkennen geben, dass Ihr Bild aufgrund von CORS nicht als Quelle für eine Form verwendet werden kann.

## Einstellen eines Schwellenwertes

Die Eigenschaft {{cssxref("shape-image-threshold")}} ermöglicht die Erstellung von Formen aus Bereichen, die nicht vollständig transparent sind. Wenn der Wert von `shape-image-threshold` `0.0` (was der Anfangswert ist) beträgt, muss der Bereich vollständig transparent sein. Wenn der Wert `1.0` beträgt, ist er vollständig opak. Werte dazwischen bedeuten, dass Sie einen halbtransparenten Bereich als definierenden Bereich festlegen können.

Im folgenden Beispiel ist der Hintergrund des Sterns nicht vollständig transparent, er hat eine 20%ige Opazität, wie sie in meinem Grafikprogramm erstellt wurde. Wenn ich `shape-image-threshold` auf `0.2` oder größer setze, sehe ich die Form. Wenn ich es auf einen Wert kleiner als `0.2` setze, erhalte ich die Form nicht.

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

## Verwendung von Bildern mit generierten Inhalten

Im obigen Beispiel habe ich sowohl das Bild als Wert von {{cssxref("shape-outside")}} verwendet als auch es zur Seite hinzugefügt. Viele Demos tun dies, da es hilft, die Form zu zeigen, der wir folgen, jedoch hängt die `shape-outside`-Eigenschaft nicht mit dem auf der Seite angezeigten Bild zusammen, und Sie müssen kein Bild anzeigen, um ein Bild zu verwenden, um eine Form zu erstellen.

Sie benötigen etwas zum Umfließen, aber das könnte ein generierter Inhalt sein, wie im folgenden Beispiel. Ich lasse generierten Inhalt umfließen und verwende ein größeres Sternbild, um meinen Inhalt zu formen, ohne ein Bild auf der Seite anzuzeigen.

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

## Formen mit einem Gradient erstellen

Da ein [CSS-Gradient](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) als Bild behandelt wird, können Sie einen Gradient verwenden, um eine Form zu erzeugen, indem Sie transparente oder halbtransparente Bereiche als Teil des Gradienten haben.

Das nächste Beispiel verwendet generierten Inhalt. Der Inhalt wurde umflossen, indem ihm ein Hintergrundbild eines linearen Gradienten gegeben wurde. Ich verwende diesen gleichen Wert als den Wert von {{cssxref("shape-outside")}}. Der lineare Gradient geht von lila zu transparent. Durch Ändern des Wertes von {{cssxref("shape-image-threshold")}} können Sie entscheiden, wie transparent die Pixel sein müssen, die die Form erzeugen. Sie können mit diesem Wert im folgenden Beispiel spielen, um zu sehen, wie die diagonale Linie sich basierend auf diesem Wert über die Form bewegt.

Sie könnten auch versuchen, das Hintergrundbild vollständig zu entfernen und den Gradient rein zur Formenerstellung und nicht zur Anzeige auf der Seite zu verwenden.

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

Das nächste Beispiel verwendet einen radialen Gradient mit einer Ellipse, erneut mit einem transparenten Teil des Gradienten, um die Form zu erstellen.

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
