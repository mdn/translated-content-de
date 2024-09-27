---
title: Formen aus Bildern
slug: Web/CSS/CSS_shapes/Shapes_from_images
l10n:
  sourceCommit: e1b6d7d2d02a07f7e86268c81678713fad4d9a5d
---

{{CSSRef}}

In diesem Leitfaden werden wir uns ansehen, wie wir eine Form aus einer Bilddatei mit einem Alpha-Kanal oder sogar aus einem CSS-Gradienten erstellen können. Dies ist eine sehr flexible Methode zur Erstellung von Formen. Anstatt einen Pfad mit einem komplexen Polygon in CSS zu zeichnen, können Sie die Form in einem Grafikprogramm erstellen und dann den Pfad verwenden, der von den weniger undurchsichtigen Pixeln als einem Schwellenwert erstellt wird.

## Formen aus Bildern erstellen

Um ein Bild zur Erstellung einer Form zu verwenden, muss das Bild einen Alpha-Kanal haben, einen Bereich, der nicht vollständig undurchsichtig ist. Die Eigenschaft {{cssxref("shape-image-threshold")}} wird verwendet, um einen Schwellenwert für diese Deckkraft festzulegen. Pixel, die undurchsichtiger als dieser Wert sind, werden zur Berechnung des Bereichs der Form verwendet.

Im untenstehenden Beispiel gibt es ein Bild eines Sterns mit einem festen roten Bereich und einem vollständig transparenten Bereich. Der Pfad zur Bilddatei wird als Wert für die Eigenschaft {{cssxref("shape-outside")}} verwendet. Der Inhalt umfließt nun die Sternform.

{{EmbedGHLiveSample("css-examples/shapes/image/simple-example.html", '100%', 800)}}

Sie können {{cssxref("shape-margin")}} verwenden, um den Text von der Form wegzubewegen, wodurch ein Abstand um die erstellte Form und den Text herum entsteht.

{{EmbedGHLiveSample("css-examples/shapes/image/margin.html", '100%', 800)}}

## CORS-Kompatibilität

Ein Punkt, den Sie beachten sollten, wenn Sie Formen aus einem Bild erstellen, ist, dass das verwendete Bild [CORS-kompatibel](/de/docs/Web/HTTP/CORS) sein muss. Ein Bild, das in derselben Domain wie Ihre Website gehostet wird, sollte funktionieren. Wenn jedoch Ihre Bilder auf einer anderen Domain, z.B. einem CDN gehostet sind, müssen Sie sicherstellen, dass sie die korrekten Header senden, um sie für Shapes verwenden zu können. Aufgrund dieser Anforderung an CORS-kompatible Bilder wird Ihre Form nicht funktionieren, wenn Sie Ihre Datei lokal ohne einen lokalen Webserver anzeigen.

### Ist es ein CORS-Problem?

DevTools können Ihnen helfen, CORS-Fehler zu identifizieren. In Chrome wird die Konsole Sie auf CORS-Probleme hinweisen. In Firefox werden Sie beim Inspizieren der Eigenschaft darauf hingewiesen, dass das Bild nicht geladen werden konnte. Dies sollte Sie darauf aufmerksam machen, dass Ihr Bild aufgrund von CORS nicht als Quelle einer Form verwendet werden kann.

## Schwellenwert festlegen

Die Eigenschaft {{cssxref("shape-image-threshold")}} ermöglicht die Erstellung von Formen aus Bereichen, die nicht vollständig transparent sind. Wenn der Wert von `shape-image-threshold` `0.0` ist (was der Anfangswert ist), muss der Bereich vollständig transparent sein. Wenn der Wert `1.0` beträgt, ist er vollständig undurchsichtig. Werte dazwischen bedeuten, dass Sie einen halbtransparenten Bereich als definierenden Bereich festlegen können.

Im untenstehenden Beispiel verwende ich ein ähnliches Bild wie im ersten Beispiel, jedoch ist in diesem Bild der Hintergrund des Sterns nicht vollständig transparent, er hat eine Deckkraft von 20 %, wie in meinem Grafikprogramm erstellt. Wenn ich `shape-image-threshold` auf `0.3` einstelle, sehe ich die Form, wenn ich es auf einen Wert kleiner als `0.2` einstelle, bekomme ich die Form nicht.

{{EmbedGHLiveSample("css-examples/shapes/image/threshold.html", '100%', 800)}}

## Verwendung von Bildern mit generiertem Inhalt

Im obigen Beispiel habe ich sowohl das Bild als Wert von {{cssxref("shape-outside")}} verwendet als auch zur Seite hinzugefügt. Viele Demos machen dies, da es hilft, die Form zu zeigen, der wir folgen. Die `shape-outside`-Eigenschaft ist jedoch nicht mit dem Bild verbunden, das auf der Seite angezeigt wird, und daher müssen Sie kein Bild anzeigen, um ein Bild zur Erstellung einer Form zu verwenden.

Sie benötigen etwas zum Umfließen, aber das kann auch generierter Inhalt sein, wie im folgenden Beispiel. Ich lasse generierten Inhalt umfließen und verwende ein größeres Sternbild, um meinen Inhalt zu formen, ohne ein Bild auf der Seite anzuzeigen.

{{EmbedGHLiveSample("css-examples/shapes/image/generated-content.html", '100%', 800)}}

## Formen mit einem Verlauf erstellen

Da ein [CSS-Gradient](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) als Bild behandelt wird, können Sie einen Verlauf verwenden, um eine Form zu erzeugen, indem Sie transparente oder halbtransparente Bereiche als Teil des Gradienten verwenden.

Im nächsten Beispiel wird generierter Inhalt verwendet. Der Inhalt wurde umflossen und ihm wurde ein Hintergrundbild eines linearen Gradienten gegeben. Ich benutze denselben Wert als Wert von {{cssxref("shape-outside")}}. Der lineare Gradienten verläuft von Lila zu transparent. Indem Sie den Wert von {{cssxref("shape-image-threshold")}} ändern, können Sie festlegen, wie transparent die Pixel sein müssen, um die Form zu erstellen. Sie können mit diesem Wert im folgenden Beispiel spielen, um zu sehen, wie sich die diagonale Linie je nach diesem Wert über die Form bewegt.

Sie könnten auch versuchen, das Hintergrundbild vollständig zu entfernen und somit den Gradient ausschließlich zur Erstellung der Form zu verwenden, ohne ihn auf der Seite anzuzeigen.

{{EmbedGHLiveSample("css-examples/shapes/image/gradient.html", '100%', 800)}}

Im nächsten Beispiel wird ein radialer Gradienten mit einer Ellipse verwendet, erneut mit einem transparenten Teil des Gradienten, um die Form zu erstellen.

{{EmbedGHLiveSample("css-examples/shapes/image/radial-gradient.html", '100%', 800)}}

Sie können direkt in diesen Live-Beispielen experimentieren, um zu sehen, wie sich der Gradienten auf den Pfad Ihrer Form auswirkt.
