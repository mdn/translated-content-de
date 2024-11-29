---
title: Formen aus Bildern
slug: Web/CSS/CSS_shapes/Shapes_from_images
l10n:
  sourceCommit: dbc32052ef186252a1211d296ff60a9b5e3e8d74
---

{{CSSRef}}

In diesem Leitfaden werden wir uns ansehen, wie wir eine Form aus einer Bilddatei mit einem Alpha-Kanal oder sogar aus einem CSS-Gradienten erstellen können. Dies ist eine sehr flexible Methode, um Formen zu erstellen. Anstatt einen Pfad mit einem komplexen Polygon in CSS zu zeichnen, können Sie die Form in einem Grafikprogramm erstellen und dann den Pfad der Pixel verwenden, die weniger opak sind als ein Schwellenwert.

## Formen aus Bildern erstellen

Um ein Bild zur Erstellung einer Form zu verwenden, muss das Bild einen Alpha-Kanal haben, einen Bereich, der nicht vollständig opak ist. Die Eigenschaft {{cssxref("shape-image-threshold")}} wird verwendet, um einen Schwellenwert für diese Opazität festzulegen. Pixel, die opaker sind als dieser Wert, werden zur Berechnung der Fläche der Form verwendet.

Im folgenden Beispiel gibt es ein Bild von einem Stern mit einem festen roten Bereich und einem vollständig transparenten Bereich. Der Pfad zur Bilddatei wird als Wert für die Eigenschaft {{cssxref("shape-outside")}} verwendet. Der Inhalt wird nun um die Sternform herum umbrochen.

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

Sie können {{cssxref("shape-margin")}} verwenden, um den Text von der Form wegzubewegen und somit einen Abstand zwischen der erstellten Form und dem Text zu schaffen.

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

Ein Problem, das Sie beim Erstellen von Formen aus einem Bild feststellen werden, ist, dass das von Ihnen verwendete Bild [CORS-kompatibel](/de/docs/Web/HTTP/CORS) sein muss. Ein Bild, das auf derselben Domain wie Ihre Seite gehostet wird, sollte funktionieren. Wenn Ihre Bilder jedoch auf einer anderen Domain, z.B. einem CDN, gehostet werden, sollten Sie sicherstellen, dass sie die korrekten Header senden, um sie für Formen verwenden zu können. Aufgrund dieser Anforderung für CORS-kompatible Bilder wird Ihre Form nicht funktionieren, wenn Sie Ihre Datei lokal ohne einen lokalen Webserver in der Vorschau ansehen.

### Ist es ein CORS-Problem?

DevTools können Ihnen bei der Identifizierung von CORS-Fehlern helfen. In Chrome wird die Konsole Sie auf CORS-Probleme hinweisen. In Firefox werden Sie, wenn Sie die Eigenschaft inspizieren, darüber informiert, dass das Bild nicht geladen werden konnte. Dies sollte Sie darauf aufmerksam machen, dass Ihr Bild aufgrund von CORS nicht als Quelle einer Form verwendet werden kann.

## Festlegung eines Schwellenwerts

Die Eigenschaft {{cssxref("shape-image-threshold")}} ermöglicht die Erstellung von Formen aus Bereichen, die nicht vollständig transparent sind. Wenn der Wert von `shape-image-threshold` `0.0` ist (was der Anfangswert ist), muss der Bereich vollständig transparent sein. Wenn der Wert `1.0` ist, ist er vollständig opak. Werte dazwischen bedeuten, dass Sie einen halbtransparenten Bereich als definierenden Bereich festlegen können.

Im Beispiel unten ist der Hintergrund des Sterns nicht vollständig transparent, er hat eine 20%ige Opazität, wie in meinem Grafikprogramm erstellt. Wenn ich `shape-image-threshold` auf `0.2` oder mehr setze, sehe ich die Form. Wenn ich sie auf einen Wert kleiner als `0.2` setze, erhalte ich die Form nicht.

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

Im obigen Beispiel habe ich sowohl das Bild als Wert für {{cssxref("shape-outside")}} verwendet als auch es zur Seite hinzugefügt. Viele Demos tun dies, da es hilft, die Form zu zeigen, der wir folgen. Die `shape-outside`-Eigenschaft ist jedoch nicht mit dem Bild verbunden, das auf der Seite angezeigt wird, und daher müssen Sie kein Bild anzeigen, um ein Bild zur Erstellung einer Form zu verwenden.

Sie benötigen etwas, das schwebt, aber das könnte auch generierter Inhalt sein, wie im folgenden Beispiel. Ich lasse generierten Inhalt schweben und verwende ein größeres Sternbild, um meinen Inhalt zu formen, ohne ein Bild auf der Seite anzuzeigen.

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

## Formen mit einem Verlauf erstellen

Da ein [CSS-Verlauf](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) als Bild behandelt wird, können Sie einen Verlauf verwenden, um eine Form zu erzeugen, indem Sie transparente oder halbtransparente Bereiche als Teil des Verlaufs haben.

Im nächsten Beispiel wird generierter Inhalt verwendet. Der Inhalt wurde zum Schweben gebracht und hat ein Hintergrundbild eines linearen Verlaufs. Ich verwende denselben Wert als Wert für {{cssxref("shape-outside")}}. Der lineare Verlauf geht von lila zu transparent. Durch Ändern des Werts von {{cssxref("shape-image-threshold")}} können Sie entscheiden, wie transparent die Pixel sein müssen, die die Form erzeugen. Sie können diesen Wert im folgenden Beispiel ausprobieren, um zu sehen, wie die diagonale Linie sich je nach Wert über die Form bewegt.

Sie könnten auch versuchen, das Hintergrundbild komplett zu entfernen und so den Verlauf nur zur Erstellung der Form zu verwenden, ohne ihn auf der Seite anzuzeigen.

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

Das nächste Beispiel verwendet einen radialen Verlauf mit einer Ellipse, wobei erneut ein transparenter Teil des Verlaufs verwendet wird, um die Form zu erzeugen.

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

Sie können direkt in diesen Live-Beispielen experimentieren, um zu sehen, wie das Ändern des Verlaufs den Pfad Ihrer Form ändern wird.
