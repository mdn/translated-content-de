---
title: Übersicht über Formen
slug: Web/CSS/CSS_shapes/Overview_of_shapes
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{CSSRef}}

Das [CSS Shapes Modul](/de/docs/Web/CSS/CSS_shapes) beschreibt geometrische Formen in CSS. Dieser Artikel bietet einen Überblick darüber, wie Sie Formen verwenden können, um Text um gefloatete Elemente zu legen, die nicht unbedingt rechteckig sind.

Wenn Sie ein Element nach links floaten, wird der Text auf rechteckige Weise um die rechte und untere Seite des Elements gelegt. Mit CSS-Formen können Sie beispielsweise eine Kreisform anwenden, und der Text wird um die Linie des Kreises fließen.

Es gibt mehrere Möglichkeiten, diesen Kreis zu erstellen. In diesem Leitfaden werden wir uns ansehen, wie CSS-Formen funktionieren und wie man sie verwendet.

## Was definiert die Spezifikation?

Die Spezifikation definiert einige Eigenschaften, einschließlich:

- {{cssxref("shape-outside")}} — Ermöglicht die Definition grundlegender Formen.
- {{cssxref("shape-image-threshold")}} — Legt einen Opazitätsschwellenwert fest. Wenn ein Bild verwendet wird, um eine Form zu definieren, werden nur die Teile des Bildes, die die gleiche Opazität oder größer als der Schwellenwert sind, in der Form verwendet. Andere Teile werden ignoriert.
- {{cssxref("shape-margin")}} — Legt einen Rand um die definierte Form fest.

## Grundformen definieren

Die Eigenschaft `shape-outside` ermöglicht es uns, eine Form zu definieren. Sie nimmt eine Vielzahl von Werten an, die verschiedene Formen definieren, die im {{cssxref("&lt;basic-shape&gt;")}} Datentyp spezifiziert sind.

Im folgenden Beispiel wird ein Bild nach links gefloatet. Wir wenden die Eigenschaft `shape-outside` mit einem Wert von `circle(50%)` an. Das Ergebnis ist, dass der Inhalt jetzt um die kreisförmige Form herum fließt, anstatt dem Rechteck zu folgen, das durch den Rahmen des Bildes entsteht.

{{EmbedGHLiveSample("css-examples/shapes/overview/circle.html", '100%', 720)}}

Hier haben wir die Funktion {{cssxref("basic-shape/circle", "circle()")}} verwendet, die von allen modernen Browsern unterstützt wird. Wenn wir einen neueren Formtyp verwenden würden, der noch nicht vollständig unterstützt wird, würden Benutzer von nicht unterstützenden Browsern den Inhalt um die Seiten eines rechteckigen sehen, da das Bild gefloatet ist. Formen sind eine visuelle progressive Verbesserung.

### Grundformen

Der Wert `circle(50%)` ist ein Beispiel für eine Grundform. Die Spezifikation definiert mehrere `<basic-shape>` Werte, einschließlich:

- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

Drei dieser Funktionen definieren nur Rechtecke. Mit der `inset()`-Funktion definieren Sie vier Offset-Werte und ziehen so die Linienboxen des umhüllenden Inhalts näher an das Objekt heran, als sie es sonst wären. Die `rect()`-Funktion definiert ein Rechteck, indem sie den Abstand von den oberen und linken Kanten des umgebenden Blocks angibt. Die `xywh()`-Funktion funktioniert, indem sie Abstände von den oberen und linken Kanten des Referenzrahmens angibt und die Breite und Höhe des Rechtecks von diesem Ausgangspunkt aus festlegt.

Wir haben bereits gesehen, wie `circle()` eine kreisförmige Form erstellt. Ein `ellipse()` ist im Wesentlichen ein zusammengedrückter Kreis. Wenn keine dieser einfachen Formen genügt, können Sie mit der `polygon()`-Funktion komplexere Formen erstellen, die die Definition einer Reihe von Linien ermöglichen. Die `path()`- und `shape()`-Funktionen können verwendet werden, um JEDE Form über eine Reihe von Linien-, Kurven- und Bewegungsbefehlen zu erstellen.

In unserem [Leitfaden zu Grundformen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) erkunden wir jede der möglichen Grundformen und wie man sie erstellt.

### Formen aus dem Box-Wert

Formen können auch um den Box-Wert erstellt werden. Daher könnten Sie Ihre Form auf:

- `border-box`
- `padding-box`
- `content-box`
- `margin-box`

erstellen.

Im folgenden Beispiel können Sie den Wert `border-box` in einen der anderen erlaubten Werte ändern, um zu sehen, wie sich die Form näher oder weiter vom Kasten bewegt.

{{EmbedGHLiveSample("css-examples/shapes/overview/box.html", '100%', 810)}}

Um die Box-Werte im Detail zu erkunden, sehen Sie sich unseren Leitfaden zu [Formen aus Box-Werten](/de/docs/Web/CSS/CSS_shapes/From_box_values) an.

### Formen aus Bildern

Eine interessante Möglichkeit, Ihren Pfad zu erzeugen, besteht darin, ein Bild mit einem Alpha-Kanal zu verwenden — der Text wird dann um die nicht-transparenten Teile des Bildes gewickelt. Auf diese Weise können Sie um gewrappten Inhalt um ein Bild überlagern oder ein Bild verwenden, das auf der Seite nie angezeigt wird, nur als Methode, eine komplexe Form zu erstellen, ohne einen Polygon sorgfältig abbilden zu müssen.

Beachten Sie, dass Bilder, die auf diese Weise verwendet werden, [CORS-kompatibel](/de/docs/Web/HTTP/CORS) sein müssen, andernfalls wird `shape-outside` so wirken, als ob `none` als Wert angegeben wurde, und Sie erhalten keine Form.

Im nächsten Beispiel haben wir ein Bild mit einem vollständig transparenten Bereich, und wir verwenden ein Bild als URL-Wert für `shape-outside`. Die Form wird um den undurchsichtigen Bereich — das Bild des Ballons — herum erstellt.

{{EmbedGHLiveSample("css-examples/shapes/overview/image.html", '100%', 800)}}

#### `shape-image-threshold`

Die Eigenschaft `shape-image-threshold` wird verwendet, um den Schwellenwert der Bildtransparenz festzulegen, der zur Definition des Bereichs des Bildes verwendet wird, das für die Form verwendet wird. Wenn der Wert von `shape-image-threshold` `0.0` (was der Anfangswert ist) beträgt, muss der Bereich vollständig transparent sein. Wenn der Wert `1.0` beträgt, ist er vollständig undurchsichtig. Werte dazwischen bedeuten, dass Sie einen halbtransparenten Bereich als definierenden Bereich der Form festlegen können.

Sie können den Schwellenwert in Aktion sehen, wenn wir einen Farbverlauf als Bild verwenden, um unsere Form zu definieren. Im Beispiel unten, wenn Sie den Schwellenwert ändern, ändert sich der Pfad, den die Form nimmt, basierend auf dem ausgewählten Opazitätsgrad.

{{EmbedGHLiveSample("css-examples/shapes/overview/threshold.html", '100%', 820)}}

Um mehr über das Erstellen von Formen aus Bildern zu erfahren, lesen Sie den [Leitfaden zu Formen aus Bildern](/de/docs/Web/CSS/CSS_shapes/Shapes_from_images).

## Die `shape-margin`-Eigenschaft

Die {{cssxref("shape-margin")}}-Eigenschaft fügt `shape-outside` einen Rand hinzu. Dies verkürzt die Linienboxen des umhüllenden Inhalts weiter und drückt es von der Form selbst weg.

Im folgenden Beispiel haben wir einem Grundform `shape-margin` hinzugefügt. Ändern Sie den Rand, um den Text weiter von dem Pfad wegzudrücken, den die Form standardmäßig nehmen würde.

{{EmbedGHLiveSample("css-examples/shapes/overview/shape-margin.html", '100%', 800)}}

## Verwendung generierter Inhalte als gefloatetes Element

In den obigen Beispielen haben wir Bilder oder ein sichtbares Element verwendet, um die Form zu definieren, was bedeutet, dass Sie die Form auf der Seite sehen können. Stattdessen möchten Sie vielleicht, dass ein Text an einer nicht-rechteckigen unsichtbaren Linie entlang fließt. Wir könnten beispielsweise ein leeres gefloatetes {{htmlelement("div")}} oder {{htmlelement("span")}} Element unserem DOM hinzufügen und es unsichtbar machen. Wir können jedoch eine Form nur mit CSS erstellen, indem wir [generierten Inhalt](/de/docs/Learn/CSS/Howto/Generated_content) verwenden und alle unsere Stilfunktionalitäten im CSS behalten.

In diesem Beispiel verwenden wir generierten Inhalt, um ein Element mit einer Höhe und Breite von 150px einzufügen. Wir können dann Grundformen, Box-Werte oder sogar den Alpha-Kanal eines Bildes verwenden, um eine Form zu erstellen, um die der Text herum fließt.

{{EmbedGHLiveSample("css-examples/shapes/overview/generated-content.html", '100%', 850)}}

## Beziehung zu `clip-path`

Die Grundformen und Box-Werte, die zur Erstellung von Formen verwendet werden, sind die gleichen, die als Werte für {{cssxref("clip-path")}} verwendet werden. Wenn Sie also eine Form mit einem Bild erstellen und auch einen Teil dieses Bildes abschneiden möchten, können Sie die gleichen Werte verwenden.

Das Bild unten ist ein quadratisches Bild mit einem blauen Hintergrund. Wir haben eine Form mit `shape-outside: ellipse(40% 50%);` definiert und auch `clip-path: ellipse(40% 50%);` verwendet, um den gleichen Bereich abzuschneiden, den wir verwendet haben, um die Form zu definieren.

{{EmbedGHLiveSample("css-examples/shapes/overview/clip-path.html", '100%', 800)}}

## Entwickler-Tools für Formen

Es gibt einen [Shape Path Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) in den Firefox DevTools. Dieses Tool kann verwendet werden, um die `circle()`, `inset()`, `ellipse()` und `polygon()` Werte zu inspizieren. Wenn Ihr Polygon nicht ganz richtig ist, können Sie den Shapes Editor verwenden, um es anzupassen, und den neuen Wert zurück in Ihr CSS kopieren.

## Weitere CSS-Formen-Features

In diesem Leitfaden haben wir diskutiert, Text um gefloatete Formen zu legen. Sehen Sie sich das [CSS Shapes Modul](/de/docs/Web/CSS/CSS_shapes) an für Links zu allen Moduleigenschaften und zusätzlichen verwandten Funktionen. Dies schließt alle Formenfunktionen und relevante Leitfäden ein.
