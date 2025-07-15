---
title: Formen aus Bildern
short-title: Bildbasierte Formen
slug: Web/CSS/CSS_shapes/Shapes_from_images
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

In diesem Leitfaden werfen wir einen Blick darauf, wie wir eine Form aus einer Bilddatei mit einem Alphakanal oder sogar aus einem CSS-Gradienten erstellen können. Dies ist eine sehr flexible Möglichkeit, Formen zu erstellen. Anstatt einen Pfad mit einem komplexen Polygon in CSS zu zeichnen, können Sie die Form in einem Grafikprogramm erstellen und dann den Pfad verwenden, der durch die Pixel erstellt wurde, die weniger deckend als ein Schwellenwert sind.

## Formen aus Bildern erstellen

Um ein Bild zur Erstellung einer Form zu verwenden, muss das Bild einen Alphakanal haben, einen Bereich, der nicht vollständig deckend ist. Die Eigenschaft {{cssxref("shape-image-threshold")}} wird verwendet, um einen Schwellenwert für diese Deckkraft festzulegen. Pixel, die deckender als dieser Wert sind, werden verwendet, um den Bereich der Form zu berechnen.

Im folgenden Beispiel gibt es ein Bild eines Sterns mit einem festen roten Bereich und einem Bereich, der vollständig transparent ist. Der Pfad zur Bilddatei wird als Wert für die Eigenschaft {{cssxref("shape-outside")}} verwendet. Der Inhalt umfließt nun die Sternform.

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
  shape-outside: url(https://mdn.github.io/shared-assets/images/examples/star-shape.png);
  shape-margin: 20px;
}
```

{{EmbedLiveSample("margin", "", "340px")}}

## CORS-Kompatibilität

Ein Aspekt, dem Sie begegnen werden, wenn Sie Formen aus einem Bild erstellen, ist, dass das verwendete Bild [CORS-kompatibel](/de/docs/Web/HTTP/Guides/CORS) sein muss. Ein Bild, das auf derselben Domain wie Ihre Website gehostet wird, sollte funktionieren. Wenn Ihre Bilder jedoch auf einer anderen Domain, wie etwa auf einem CDN, gehostet werden, sollten Sie sicherstellen, dass sie die korrekten Header senden, damit sie für Formen verwendet werden können. Aufgrund dieser Anforderung an CORS-kompatible Bilder wird Ihre Form nicht funktionieren, wenn Sie Ihre Datei lokal ohne einen lokalen Webserver betrachten.

### Ist es ein CORS-Problem?

DevTools können Ihnen helfen, CORS-Fehler zu identifizieren. In Chrome wird die Konsole Sie auf CORS-Probleme hinweisen. In Firefox werden Sie darauf aufmerksam gemacht, dass das Bild nicht geladen werden konnte, wenn Sie die Eigenschaft inspizieren. Dies sollte Sie darauf hinweisen, dass Ihr Bild aufgrund von CORS nicht als Quelle für eine Form verwendet werden kann.

## Einen Schwellenwert festlegen

Die Eigenschaft {{cssxref("shape-image-threshold")}} ermöglicht die Erstellung von Formen aus Bereichen, die nicht vollständig transparent sind. Wenn der Wert von `shape-image-threshold` `0.0` ist (was der Ausgangswert ist), muss der Bereich vollständig transparent sein. Wenn der Wert `1.0` ist, ist er vollständig deckend. Werte dazwischen bedeuten, dass Sie einen halbtransparenten Bereich als definierenden Bereich festlegen können.

Im folgenden Beispiel ist der Hintergrund des Sterns nicht vollständig transparent, er hat eine Deckkraft von 20%, wie in meinem Grafikprogramm erstellt. Wenn ich `shape-image-threshold` auf `0.2` oder höher setze, sehe ich die Form. Wenn ich es auf etwas kleiner als `0.2` setze, erhalte ich die Form nicht.

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

## Verwendung von Bildern mit generiertem Inhalt

Im obigen Beispiel habe ich sowohl das Bild als Wert von {{cssxref("shape-outside")}} verwendet als auch auf die Seite hinzugefügt. Viele Demos tun dies, da es hilft, die Form zu zeigen, der wir folgen. Die `shape-outside`-Eigenschaft ist jedoch nicht mit dem auf der Seite angezeigten Bild verbunden, und Sie müssen kein Bild anzeigen, um ein Bild zu verwenden, um eine Form zu erstellen.

Sie benötigen etwas, das floated, aber das könnte auch generierter Inhalt sein, wie im folgenden Beispiel. Ich lasse generierten Inhalt floaten und verwende ein größeres Sternbild, um meinen Inhalt zu formen, ohne ein Bild auf der Seite anzuzeigen.

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

Das nächste Beispiel verwendet generierten Inhalt. Der Inhalt wurde gefloatet und hat ein Hintergrundbild eines linearen Gradienten. Ich verwende denselben Wert als Wert von {{cssxref("shape-outside")}}. Der lineare Gradient verläuft von Lila zu Transparent. Durch Ändern des Wertes von {{cssxref("shape-image-threshold")}} können Sie entscheiden, wie transparent die Pixel sein müssen, die die Form erzeugen. Sie können mit diesem Wert im untenstehenden Beispiel spielen, um zu sehen, wie sich die diagonale Linie über die Form bewegt, je nach diesem Wert.

Sie könnten auch versuchen, das Hintergrundbild vollständig zu entfernen, sodass der Gradient nur verwendet wird, um die Form zu erzeugen und nicht auf der Seite dargestellt wird.

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

Das nächste Beispiel verwendet einen radialen Gradient mit einer Ellipse, wobei erneut ein transparenter Teil des Gradienten verwendet wird, um die Form zu erstellen.

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

Sie können direkt in diesen Live-Beispielen experimentieren, um zu sehen, wie das Ändern des Gradienten den Pfad Ihrer Form beeinflussen wird.
