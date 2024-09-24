---
title: Formen aus Bildern
slug: Web/CSS/CSS_shapes/Shapes_from_images
l10n:
  sourceCommit: e1b6d7d2d02a07f7e86268c81678713fad4d9a5d
---

{{CSSRef}}

In diesem Leitfaden werden wir untersuchen, wie wir eine Form aus einer Bilddatei mit einem Alphakanal oder sogar aus einem CSS-Gradienten erstellen können. Dies ist eine sehr flexible Möglichkeit, Formen zu erstellen. Anstatt einen Pfad mit einem komplexen Polygon in CSS zu zeichnen, können Sie die Form in einem Grafikprogramm erstellen und dann den Pfad verwenden, der durch die weniger opaken Pixel als ein Schwellenwert erstellt wird.

## Formen aus Bildern erstellen

Um ein Bild zur Erstellung einer Form zu verwenden, muss das Bild einen Alphakanal haben, einen Bereich, der nicht vollständig opak ist. Die {{cssxref("shape-image-threshold")}}-Eigenschaft wird verwendet, um einen Schwellenwert für diese Opazität festzulegen. Pixel, die opaker als dieser Wert sind, werden verwendet, um den Bereich der Form zu berechnen.

Im folgenden Beispiel gibt es ein Bild eines Sterns mit einem soliden roten Bereich und einem vollständig transparenten Bereich. Der Pfad zur Bilddatei wird als Wert für die {{cssxref("shape-outside")}}-Eigenschaft verwendet. Der Inhalt fließt nun um die Sternform herum.

{{EmbedGHLiveSample("css-examples/shapes/image/simple-example.html", '100%', 800)}}

Sie können {{cssxref("shape-margin")}} verwenden, um den Text von der Form weg zu bewegen und einen Rand um die erstellte Form und den Text zu geben.

{{EmbedGHLiveSample("css-examples/shapes/image/margin.html", '100%', 800)}}

## CORS-Kompatibilität

Bei der Erstellung von Formen aus einem Bild werden Sie feststellen, dass das verwendete Bild [CORS-kompatibel](/de/docs/Web/HTTP/CORS) sein muss. Ein Bild, das auf derselben Domain wie Ihre Website gehostet wird, sollte funktionieren. Wenn Ihre Bilder jedoch auf einer anderen Domain wie auf einem CDN gehostet werden, sollten Sie sicherstellen, dass sie die richtigen Header senden, um sie für Formen zu verwenden. Aufgrund dieser Anforderung für CORS-kompatible Bilder wird Ihre Form nicht funktionieren, wenn Sie Ihre Datei lokal ohne einen lokalen Webserver in der Vorschau anzeigen.

### Ist es ein CORS-Problem?

DevTools kann Ihnen helfen, CORS-Fehler zu identifizieren. In Chrome wird die Konsole Sie auf CORS-Probleme hinweisen. In Firefox werden Sie benachrichtigt, dass das Bild nicht geladen werden konnte, wenn Sie die Eigenschaft überprüfen. Dies sollte Sie darauf aufmerksam machen, dass Ihr Bild aufgrund von CORS nicht als Quelle für eine Form verwendet werden kann.

## Einen Schwellenwert festlegen

Die {{cssxref("shape-image-threshold")}}-Eigenschaft ermöglicht die Erstellung von Formen aus Bereichen, die nicht vollständig transparent sind. Wenn der Wert von `shape-image-threshold` `0.0` ist (was der Anfangswert ist), muss der Bereich vollständig transparent sein. Wenn der Wert `1.0` ist, dann ist er vollständig opak. Werte dazwischen bedeuten, dass Sie einen halbtransparenten Bereich als definierenden Bereich festlegen können.

Im folgenden Beispiel verwende ich ein ähnliches Bild wie im ersten Beispiel. In diesem Bild ist der Hintergrund des Sterns jedoch nicht vollständig transparent; er hat eine Opazität von 20 %, wie in meinem Grafikprogramm erstellt. Wenn ich `shape-image-threshold` auf `0.3` setze, sehe ich die Form, wenn ich sie auf etwas unterhalb von `0.2` setze, erhalte ich die Form nicht.

{{EmbedGHLiveSample("css-examples/shapes/image/threshold.html", '100%', 800)}}

## Bilder mit generiertem Inhalt verwenden

Im obigen Beispiel habe ich sowohl das Bild als Wert von {{cssxref("shape-outside")}} verwendet als auch auf der Seite hinzugefügt. Viele Demos tun dies, da es hilft, die Form zu zeigen, der wir folgen, jedoch ist die `shape-outside`-Eigenschaft nicht mit dem Bild verbunden, das auf der Seite angezeigt wird, und daher müssen Sie kein Bild anzeigen, um ein Bild zur Erstellung einer Form zu verwenden.

Sie benötigen etwas zum „Floaten“, aber das könnte generierter Inhalt sein, wie im folgenden Beispiel. Ich lasse generierten Inhalt schweben und verwende ein größeres Sternbild, um meinen Inhalt zu formen, ohne ein Bild auf der Seite anzuzeigen.

{{EmbedGHLiveSample("css-examples/shapes/image/generated-content.html", '100%', 800)}}

## Formen mit einem Verlauf erstellen

Da ein [CSS-Verlauf](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) als Bild behandelt wird, können Sie einen Verlauf verwenden, um eine Form zu erzeugen, indem Sie transparente oder halbtransparente Bereiche als Teil des Verlaufs verwenden.

Das nächste Beispiel verwendet generierten Inhalt. Der Inhalt wurde gefloatet, indem ihm ein Hintergrundbild eines linearen Verlaufs gegeben wurde. Ich verwende diesen gleichen Wert als Wert von {{cssxref("shape-outside")}}. Der lineare Verlauf reicht von lila zu transparent. Durch Ändern des Wertes von {{cssxref("shape-image-threshold")}} können Sie entscheiden, wie transparent die Pixel sein müssen, die die Form erstellen. Sie können mit diesem Wert im folgenden Beispiel spielen, um zu sehen, wie die diagonale Linie sich je nach diesem Wert über die Form bewegt.

Sie könnten auch versuchen, das Hintergrundbild vollständig zu entfernen und somit den Verlauf nur zur Erstellung der Form zu verwenden, ohne ihn auf der Seite anzuzeigen.

{{EmbedGHLiveSample("css-examples/shapes/image/gradient.html", '100%', 800)}}

Das nächste Beispiel verwendet einen radialen Verlauf mit einer Ellipse und nutzt erneut einen transparenten Teil des Verlaufs, um die Form zu erstellen.

{{EmbedGHLiveSample("css-examples/shapes/image/radial-gradient.html", '100%', 800)}}

Sie können direkt in diesen Live-Beispielen experimentieren, um zu sehen, wie sich ein Ändern des Verlaufs auf den Pfad Ihrer Form auswirkt.
