---
title: Formen aus Bildern
short-title: Bildbasierte Formen
slug: Web/CSS/Guides/Shapes/From_images
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

In diesem Leitfaden schauen wir uns an, wie wir eine Form aus einer Bilddatei mit einem Alphakanal oder sogar aus einem CSS-Gradienten erstellen können. Dies ist eine sehr flexible Methode zur Erstellung von Formen. Anstatt einen Pfad mit einem komplexen Polygon in CSS zu zeichnen, können Sie die Form in einem Grafikprogramm erstellen und dann den Pfad verwenden, der von den weniger opaken Pixeln als einem Schwellenwert erstellt wird.

## Erstellen von Formen aus Bildern

Um ein Bild zur Erstellung einer Form zu verwenden, muss das Bild einen Alphakanal haben, also einen Bereich, der nicht vollständig opak ist. Die Eigenschaft {{cssxref("shape-image-threshold")}} wird verwendet, um einen Schwellenwert für diese Opazität festzulegen. Pixel, die opaker als dieser Wert sind, werden verwendet, um den Bereich der Form zu berechnen.

Im Beispiel unten gibt es ein Bild eines Sterns mit einem soliden roten Bereich und einem vollständig transparenten Bereich. Der Pfad zur Bilddatei wird als Wert für die Eigenschaft {{cssxref("shape-outside")}} verwendet. Der Inhalt umfließt nun die Sternform.

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

Sie können {{cssxref("shape-margin")}} verwenden, um den Text von der Form wegzubewegen und so einen Rand um die erstellte Form und den Text zu geben.

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

Eine Herausforderung, auf die Sie stoßen werden, wenn Sie Formen aus einem Bild erstellen, ist, dass das verwendete Bild [CORS-kompatibel](/de/docs/Web/HTTP/Guides/CORS) sein muss. Ein Bild, das auf derselben Domain wie Ihre Website gehostet wird, sollte funktionieren. Wenn Ihre Bilder jedoch auf einer anderen Domain, wie einem CDN, gehostet werden, sollten Sie sicherstellen, dass diese die richtigen Header senden, um die Verwendung für Formen zu ermöglichen. Aufgrund dieser Anforderung für CORS-kompatible Bilder wird Ihre Form nicht funktionieren, wenn Sie Ihre Datei lokal ohne Webserver-Vorschau ansehen.

### Ist es ein CORS-Problem?

DevTools können Ihnen helfen, CORS-Fehler zu identifizieren. In Chrome wird die Konsole Sie auf CORS-Probleme hinweisen. In Firefox werden Sie beim Inspizieren der Eigenschaft darauf hingewiesen, dass das Bild nicht geladen werden konnte. Dies sollte Sie auf das Problem hinweisen, dass Ihr Bild aufgrund von CORS nicht als Quelle einer Form verwendet werden kann.

## Festlegen eines Schwellenwerts

Die Eigenschaft {{cssxref("shape-image-threshold")}} ermöglicht die Erstellung von Formen aus Bereichen, die nicht vollständig transparent sind. Wenn der Wert von `shape-image-threshold` `0.0` (was der Ausgangswert ist) ist, muss der Bereich vollständig transparent sein. Wenn der Wert `1.0` ist, ist er vollständig opak. Werte dazwischen bedeuten, dass Sie einen halbtransparenten Bereich als definierenden Bereich festlegen können.

Im folgenden Beispiel ist der Hintergrund des Sterns nicht vollständig transparent; er hat in meinem Grafikprogramm eine Opazität von 20 %. Wenn ich `shape-image-threshold` auf `0.2` oder mehr setze, sehe ich die Form, wenn ich es auf einen Wert kleiner als `0.2` setze, sehe ich die Form nicht.

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

## Verwenden von Bildern mit generiertem Inhalt

Im obigen Beispiel habe ich sowohl das Bild als Wert von {{cssxref("shape-outside")}} verwendet als auch es auf der Seite hinzugefügt. Viele Demos tun dies, da es hilft, die Form zu zeigen, der wir folgen. Die `shape-outside`-Eigenschaft ist jedoch nicht mit dem auf der Seite angezeigten Bild verbunden, daher müssen Sie kein Bild anzeigen, um ein Bild zur Erstellung einer Form zu verwenden.

Sie benötigen jedoch etwas, das schwebt, aber das kann auch generierter Inhalt sein, wie im folgenden Beispiel. Ich lasse generierten Inhalt schweben und verwende ein größeres Sternbild, um meinen Inhalt zu formen, ohne ein Bild auf der Seite anzuzeigen.

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

## Erstellen von Formen mit einem Verlauf

Da ein [CSS-Verlauf](/de/docs/Web/CSS/Guides/Images/Using_gradients) als Bild behandelt wird, können Sie einen Verlauf verwenden, um eine Form zu erzeugen, indem Sie transparente oder halbtransparente Bereiche als Teil des Verlaufs haben.

Das nächste Beispiel verwendet generierten Inhalt. Der Inhalt wurde geschwebt und hat ein Hintergrundbild eines linearen Verlaufs. Ich verwende denselben Wert als Wert von {{cssxref("shape-outside")}}. Der lineare Verlauf geht von lila zu transparent. Durch Ändern des Wertes von {{cssxref("shape-image-threshold")}} können Sie entscheiden, wie transparent die Pixel sein müssen, die die Form erzeugen. Sie können mit diesem Wert im untenstehenden Beispiel experimentieren, um zu sehen, wie die diagonale Linie je nach diesem Wert über die Form verläuft.

Sie könnten auch versuchen, das Hintergrundbild komplett zu entfernen und den Verlauf nur zur Erstellung der Form zu verwenden, ohne es auf der Seite anzuzeigen.

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

Das nächste Beispiel verwendet einen radialen Verlauf mit einer Ellipse, wobei erneut ein transparenter Teil des Verlaufs verwendet wird, um die Form zu erstellen.

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

Sie können direkt in diesen Live-Beispielen experimentieren, um zu sehen, wie das Ändern des Verlaufs den Pfad Ihrer Form verändert.
