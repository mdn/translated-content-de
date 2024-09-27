---
title: Überblick über Formen
slug: Web/CSS/CSS_shapes/Overview_of_shapes
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{CSSRef}}

Das [CSS Shapes-Modul](/de/docs/Web/CSS/CSS_shapes) beschreibt geometrische Formen in CSS. Dieser Artikel bietet einen Überblick darüber, wie Sie Formen verwenden können, um Text um schwebende Elemente zu wickeln, die nicht unbedingt rechteckig sind.

Wenn Sie ein Element links schweben lassen, wird der Text auf rechteckige Weise um die rechte und untere Seite des Elements gewickelt. Mit CSS-Formen können Sie beispielsweise eine kreisförmige Form anwenden und der Text wickelt sich entlang der Linie des Kreises.

Es gibt mehrere Möglichkeiten, diesen Kreis zu erstellen. In diesem Leitfaden werden wir uns anschauen, wie CSS-Formen funktionieren und wie man sie verwendet.

## Was definiert die Spezifikation?

Die Spezifikation definiert einige Eigenschaften, darunter:

- {{cssxref("shape-outside")}} — Ermöglicht die Definition grundlegender Formen.
- {{cssxref("shape-image-threshold")}} — Legt einen Opazitäts-Schwellenwert fest. Wenn ein Bild verwendet wird, um eine Form zu definieren, werden nur die Teile des Bildes verwendet, die die gleiche Opazität haben oder größer sind als der Schwellenwert. Alle anderen Teile werden ignoriert.
- {{cssxref("shape-margin")}} — Legt einen Rand um die definierte Form fest.

## Grundlegende Formen definieren

Die Eigenschaft `shape-outside` ermöglicht uns die Definition einer Form. Sie nimmt eine Vielzahl von Werten an, die verschiedene Formen definieren, die im {{cssxref("&lt;basic-shape&gt;")}} Datentyp spezifiziert sind.

Im folgenden Beispiel wird ein Bild nach links geschwebt. Wir wenden die Eigenschaft `shape-outside` mit einem Wert von `circle(50%)` an. Das Ergebnis ist, dass der Inhalt jetzt um die kreisförmige Form hinabfließt, anstatt dem Rechteck zu folgen, das durch das Kästchen des Bildes erstellt wird.

{{EmbedGHLiveSample("css-examples/shapes/overview/circle.html", '100%', 720)}}

Hier haben wir die {{cssxref("basic-shape/circle", "circle()")}}-Funktion verwendet, die von allen modernen Browsern unterstützt wird. Wenn wir einen neueren Formtyp verwenden würden, der noch nicht vollständig unterstützt wird, würden Benutzer von nicht unterstützenden Browsern sehen, dass der Inhalt an den Seiten eines Rechtecks entlang fließt, da das Bild geschwebt ist. Formen sind eine visuelle progressive Verbesserung.

### Grundlegende Formen

Der Wert `circle(50%)` ist ein Beispiel für eine grundlegende Form. Die Spezifikation definiert mehrere `<basic-shape>`-Werte, darunter:

- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

Drei dieser Funktionen definieren nur Rechtecke. Mit der `inset()`-Funktion definieren Sie vier Versatzwerte, wodurch die Linienelemente jedes umwickelten Inhalts näher an das Objekt herangezogen werden, als sie es sonst wären. Die `rect()`-Funktion definiert ein Rechteck, indem der Abstand von den oberen und linken Rändern des umgebenden Blocks spezifiziert wird. Die `xywh()`-Funktion funktioniert, indem Abstände von den oberen und linken Rändern des Referenzkästchens angegeben und die Breite und Höhe des Rechtecks von diesem Ausgangspunkt festgelegt werden.

Wir haben bereits gesehen, wie `circle()` eine kreisförmige Form erstellt. Eine `ellipse()` ist im Grunde ein zerquetschter Kreis. Wenn keine dieser einfachen Formen ausreicht, können Sie mit der `polygon()`-Funktion komplexere Formen erstellen, die die Definition einer Reihe von Linien ermöglicht. Die Funktionen `path()` und `shape()` können verwendet werden, um JEDE Form über eine Reihe von Linien-, Kurven- und Bewegungskommandos zu erstellen.

In unserem [Leitfaden zu Grundformen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) untersuchen wir jede der möglichen Grundformen und wie man sie erstellt.

### Formen aus dem Box-Wert

Formen können auch um den Box-Wert herum erstellt werden. Daher könnten Sie Ihre Form auf folgendem erstellen:

- `border-box`
- `padding-box`
- `content-box`
- `margin-box`

Im folgenden Beispiel können Sie den Wert `border-box` auf einen der anderen erlaubten Werte ändern, um zu sehen, wie sich die Form näher an oder weiter weg vom Kasten bewegt.

{{EmbedGHLiveSample("css-examples/shapes/overview/box.html", '100%', 810)}}

Um die Box-Werte genauer zu erkunden, siehe unseren Leitfaden über [Formen aus Box-Werten](/de/docs/Web/CSS/CSS_shapes/From_box_values).

### Formen aus Bildern

Eine interessante Möglichkeit, Ihren Pfad zu erzeugen, ist die Verwendung eines Bildes mit einem Alphakanal — der Text wird dann um die nicht transparenten Teile des Bildes gewickelt. Dies ermöglicht die Überlagerung von umwickelten Inhalten um ein Bild oder die Verwendung eines Bildes, das nie auf der Seite angezeigt wird, rein als Methode zur Erstellung einer komplexen Form, ohne ein Polygon sorgfältig zu erstellen.

Beachten Sie, dass Bilder, die auf diese Weise verwendet werden, [CORS-kompatibel](/de/docs/Web/HTTP/CORS) sein müssen, andernfalls wird `shape-outside` so wirken, als ob `none` als Wert angegeben wurde, und Sie erhalten keine Form.

Im nächsten Beispiel haben wir ein Bild mit einem vollständig transparenten Bereich, und wir verwenden das Bild als URL-Wert für `shape-outside`. Die Form wird um den undurchsichtigen Bereich herum erstellt — das Bild des Ballons.

{{EmbedGHLiveSample("css-examples/shapes/overview/image.html", '100%', 800)}}

#### `shape-image-threshold`

Die Eigenschaft `shape-image-threshold` wird verwendet, um den Schwellenwert für die Bildtransparenz festzulegen, die verwendet wird, um den Bereich des Bildes zu definieren, der für die Form verwendet wird. Wenn der Wert von `shape-image-threshold` `0.0` ist (was der Anfangswert ist), muss der Bereich vollständig transparent sein. Wenn der Wert `1.0` ist, ist er vollständig undurchsichtig. Zwischendurch liegende Werte bedeuten, dass Sie einen halbtransparenten Bereich als definierenden Bereich der Form festlegen können.

Sie können den Schwellenwert in Aktion sehen, wenn wir einen Farbverlauf als Bild verwenden, auf dem unsere Form definiert werden soll. Im folgenden Beispiel, wenn Sie den Schwellenwert ändern, ändert sich der Pfad, den die Form nimmt, basierend auf der von Ihnen gewählten Transparenzstufe.

{{EmbedGHLiveSample("css-examples/shapes/overview/threshold.html", '100%', 820)}}

Um mehr über das Erstellen von Formen aus Bildern zu erfahren, sehen Sie sich den Leitfaden [Formen aus Bildern](/de/docs/Web/CSS/CSS_shapes/Shapes_from_images) an.

## Die `shape-margin` Eigenschaft

Die {{cssxref("shape-margin")}}-Eigenschaft fügt `shape-outside` einen Rand hinzu. Dies wird die Linienelemente jedes umwickelten Inhalts weiter verkürzen und es vom eigentlichen Form wegdrücken.

Im folgenden Beispiel haben wir einer Grundform eine `shape-margin` hinzugefügt. Ändern Sie den Rand, um den Text weiter von dem Pfad zu entfernen, den die Form standardmäßig einnehmen würde.

{{EmbedGHLiveSample("css-examples/shapes/overview/shape-margin.html", '100%', 800)}}

## Verwendung von Generierten Inhalten als das schwebende Elemente

In den obigen Beispielen haben wir Bilder oder ein sichtbares Element verwendet, um die Form zu definieren, was bedeutet, dass Sie die Form auf der Seite sehen können. Stattdessen möchten Sie vielleicht etwas Text entlang einer nicht-rechteckigen unsichtbaren Linie fließen lassen. Wir könnten beispielsweise ein leeres geschwebtes {{htmlelement("div")}}- oder {{htmlelement("span")}}-Element zu unserem DOM hinzufügen und es unsichtbar machen. Allerdings können wir mit nur CSS unter Verwendung von [generierten Inhalten](/de/docs/Learn/CSS/Howto/Generated_content) eine Form erstellen und all unsere Stilfunktionalität innerhalb des CSS halten.

In diesem Beispiel verwenden wir generierten Inhalt, um ein Element mit einer Höhe und Breite von 150px einzufügen. Wir können dann grundlegende Formen, Box-Werte oder sogar den Alphakanal eines Bildes verwenden, um eine Form für den Text zu erstellen, der darum gewickelt wird.

{{EmbedGHLiveSample("css-examples/shapes/overview/generated-content.html", '100%', 850)}}

## Beziehung zu `clip-path`

Die grundlegenden Formen und Box-Werte, die zum Erstellen von Formen verwendet werden, sind die gleichen wie die, die als Werte für {{cssxref("clip-path")}} verwendet werden. Wenn Sie also eine Form mit einem Bild erstellen und auch einen Teil dieses Bildes ausschneiden möchten, können Sie die gleichen Werte verwenden.

Das Bild unten ist ein quadratisches Bild mit einem blauen Hintergrund. Wir haben eine Form mit `shape-outside: ellipse(40% 50%);` definiert und auch `clip-path: ellipse(40% 50%);` verwendet, um den gleichen Bereich auszuschneiden, den wir verwendet haben, um die Form zu definieren.

{{EmbedGHLiveSample("css-examples/shapes/overview/clip-path.html", '100%', 800)}}

## Entwicklerwerkzeuge für Formen

Es gibt einen [Shape Path Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) in den Firefox DevTools. Dieses Tool kann verwendet werden, um die `circle()`, `inset()`, `ellipse()`, und `polygon()` Werte zu inspizieren. Wenn Ihr Polygon nicht ganz richtig ist, können Sie den Shapes Editor verwenden, um es anzupassen, und den neuen Wert dann wieder in Ihr CSS kopieren.

## Weitere CSS-Formeigenschaften

In diesem Leitfaden haben wir über das Umwickeln von Text um schwebende Formen gesprochen. Sehen Sie sich das [CSS Shapes-Modul](/de/docs/Web/CSS/CSS_shapes) für Links zu allen Modulfunktionen plus zusätzliche verwandte Funktionen an. Dazu gehören alle Formfunktionen und relevante Leitfäden.
