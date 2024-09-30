---
title: Formen aus Bildern
slug: Web/CSS/CSS_shapes/Shapes_from_images
l10n:
  sourceCommit: e1b6d7d2d02a07f7e86268c81678713fad4d9a5d
---

{{CSSRef}}

In diesem Leitfaden werfen wir einen Blick darauf, wie Sie eine Form aus einer Bilddatei mit einem Alphakanal oder sogar einem CSS-Gradienten erstellen können. Dies ist eine sehr flexible Methode zur Erstellung von Formen. Anstatt einen Pfad mit einem komplexen Polygon in CSS zu zeichnen, können Sie die Form in einem Grafikprogramm erstellen und dann den Pfad verwenden, der durch die Pixel entsteht, die weniger als ein Schwellenwert undurchsichtig sind.

## Formen aus Bildern erstellen

Um ein Bild zur Erstellung einer Form zu verwenden, muss das Bild einen Alphakanal haben, einen Bereich, der nicht vollständig durchscheinend ist. Die Eigenschaft {{cssxref("shape-image-threshold")}} wird verwendet, um einen Schwellenwert für diese Opazität festzulegen. Pixel, die undurchsichtiger als dieser Wert sind, werden zur Berechnung des Bereichs der Form verwendet.

Im untenstehenden Beispiel gibt es ein Bild eines Sterns mit einem festen roten Bereich und einem Bereich, der vollständig transparent ist. Der Pfad zur Bilddatei wird als Wert für die Eigenschaft {{cssxref("shape-outside")}} verwendet. Der Inhalt umfließt nun die Sternform.

{{EmbedGHLiveSample("css-examples/shapes/image/simple-example.html", '100%', 800)}}

Sie können {{cssxref("shape-margin")}} verwenden, um den Text von der Form zu entfernen, indem Sie einen Rand um die erstellte Form und den Text schaffen.

{{EmbedGHLiveSample("css-examples/shapes/image/margin.html", '100%', 800)}}

## CORS-Kompatibilität

Ein Aspekt, dem Sie begegnen werden, wenn Sie Formen aus einem Bild erstellen, ist, dass das von Ihnen verwendete Bild [CORS-kompatibel](/de/docs/Web/HTTP/CORS) sein muss. Ein auf derselben Domain wie Ihre Website gehostetes Bild sollte funktionieren, jedoch sollten Sie, wenn Ihre Bilder auf einer anderen Domain, wie zum Beispiel auf einem CDN, gehostet werden, sicherstellen, dass die korrekten Header gesendet werden, damit sie für Formen verwendet werden können. Aufgrund dieser Anforderung an CORS-kompatible Bilder funktioniert Ihre Form nicht, wenn Sie Ihre Datei lokal ohne lokalen Webserver anzeigen.

### Ist es ein CORS-Problem?

Die DevTools können Ihnen helfen, CORS-Fehler zu identifizieren. In Chrome wird die Konsole Sie auf CORS-Probleme hinweisen. In Firefox werden Sie, wenn Sie die Eigenschaft inspizieren, darauf hingewiesen, dass das Bild nicht geladen werden konnte. Dies sollte Sie darauf aufmerksam machen, dass Ihr Bild aufgrund von CORS nicht als Quelle einer Form verwendet werden kann.

## Einen Schwellenwert festlegen

Die Eigenschaft {{cssxref("shape-image-threshold")}} ermöglicht die Erstellung von Formen aus Bereichen, die nicht vollständig transparent sind. Wenn der Wert von `shape-image-threshold` `0.0` ist (was der Ausgangswert ist), muss der Bereich vollständig transparent sein. Wenn der Wert `1.0` ist, dann ist er vollständig undurchsichtig. Werte dazwischen bedeuten, dass Sie einen halbtransparenten Bereich als definierenden Bereich festlegen können.

Im untenstehenden Beispiel verwende ich ein ähnliches Bild wie im Anfangsbeispiel. In diesem Bild ist der Hintergrund des Sterns jedoch nicht vollständig transparent, sondern hat eine 20%ige Opazität, wie in meinem Grafikprogramm erstellt. Wenn ich `shape-image-threshold` auf `0.3` setze, sehe ich die Form, wenn ich es auf etwas kleiner als `0.2` setze, erhalte ich die Form nicht.

{{EmbedGHLiveSample("css-examples/shapes/image/threshold.html", '100%', 800)}}

## Verwendung von Bildern mit generiertem Inhalt

Im obigen Beispiel habe ich sowohl das Bild als Wert von {{cssxref("shape-outside")}} verwendet als auch es auf der Seite hinzugefügt. Viele Demos machen dies, da es hilft, die Form zu zeigen, der wir folgen; allerdings ist die Eigenschaft `shape-outside` nicht mit dem auf der Seite angezeigten Bild verknüpft, und Sie müssen kein Bild anzeigen, um ein Bild zur Erstellung einer Form zu verwenden.

Sie benötigen etwas, das schwebt, aber das könnte ein generierter Inhalt sein, wie im untenstehenden Beispiel. Ich lasse generierten Inhalt schweben und verwende ein größeres Sternbild, um meinen Inhalt zu formen, ohne ein Bild auf der Seite anzuzeigen.

{{EmbedGHLiveSample("css-examples/shapes/image/generated-content.html", '100%', 800)}}

## Formen mit einem Verlauf erstellen

Da ein [CSS-Gradient](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) wie ein Bild behandelt wird, können Sie einen Verlauf verwenden, um eine Form zu erzeugen, indem Sie transparente oder halbtransparente Bereiche als Teil des Verlaufs haben.

Das nächste Beispiel verwendet generierten Inhalt. Der Inhalt wurde mit einem Hintergrundbild eines linearen Verlaufs versehen. Ich verwende diesen selben Wert als Wert von {{cssxref("shape-outside")}}. Der lineare Verlauf geht von lila zu transparent. Durch Ändern des Wertes von {{cssxref("shape-image-threshold")}} können Sie bestimmen, wie transparent die Pixel sein müssen, die die Form erzeugen. Sie können mit diesem Wert im folgenden Beispiel spielen, um zu sehen, wie sich die diagonale Linie in der Form abhängig von diesem Wert bewegt.

Sie könnten auch versuchen, das Hintergrundbild vollständig zu entfernen und den Gradienten ausschließlich zur Erstellung der Form zu verwenden, ohne ihn auf der Seite anzuzeigen.

{{EmbedGHLiveSample("css-examples/shapes/image/gradient.html", '100%', 800)}}

Das nächste Beispiel verwendet einen radialen Verlauf mit einer Ellipse, wobei erneut ein transparenter Teil des Verlaufs verwendet wird, um die Form zu erzeugen.

{{EmbedGHLiveSample("css-examples/shapes/image/radial-gradient.html", '100%', 800)}}

Sie können direkt in diesen Live-Beispielen experimentieren, um zu sehen, wie sich der Verlauf und der Pfad Ihrer Form ändert.
