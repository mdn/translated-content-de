---
title: Überblick über Formen
slug: Web/CSS/CSS_shapes/Overview_of_shapes
l10n:
  sourceCommit: d9dea82201bcaeaaa631fd7bb76488ad040881db
---

{{CSSRef}}

Das [CSS Shapes-Modul](/de/docs/Web/CSS/CSS_shapes) beschreibt geometrische Formen in CSS. Dieser Artikel bietet einen Überblick darüber, wie Sie Formen nutzen können, um Text um gefloatete Elemente zu fließen, die nicht unbedingt rechteckig sind.

Wenn Sie ein Element nach links floaten, wird der Text in rechteckiger Form um die rechte und untere Seite des Elements fließen. Mit CSS-Formen können Sie beispielsweise eine Kreisform anwenden, und der Text fließt um die Linie des Kreises herum.

Es gibt mehrere Möglichkeiten, diesen Kreis zu erstellen. In diesem Leitfaden werden wir uns ansehen, wie CSS-Formen funktionieren und wie man sie verwendet.

## Was definiert die Spezifikation?

Die Spezifikation definiert einige Eigenschaften, einschließlich:

- {{cssxref("shape-outside")}} — Ermöglicht die Definition von Grundformen.
- {{cssxref("shape-image-threshold")}} — Legt einen Opazitätsschwellenwert fest. Wenn ein Bild zur Definition einer Form verwendet wird, werden nur die Teile des Bildes verwendet, die die gleiche Opazität oder größer als der Schwellenwert sind. Alle anderen Teile werden ignoriert.
- {{cssxref("shape-margin")}} — Legt einen Rand um die definierte Form fest.

## Grundformen definieren

Die `shape-outside`-Eigenschaft erlaubt es uns, eine Form zu definieren. Sie nimmt eine Vielzahl von Werten an, die verschiedene Formen spezifizieren, die im {{cssxref("&lt;basic-shape&gt;")}} Datentyp festgelegt sind.

Im folgenden Beispiel wird ein Bild nach links gefloatet. Wir wenden die `shape-outside`-Eigenschaft mit einem `circle(50%)`-Wert an. Das Ergebnis ist, dass der Inhalt jetzt um die Kreisform herumläuft, anstatt dem Rechteck zu folgen, das durch den Rahmen des Bildes erstellt wurde.

{{EmbedGHLiveSample("css-examples/shapes/overview/circle.html", '100%', 720)}}

Hier haben wir die {{cssxref("basic-shape/circle", "circle()")}}-Funktion verwendet, die von allen modernen Browsern unterstützt wird. Wenn wir eine neuere Form verwenden würden, die nicht vollständig unterstützt wird, würden Benutzer nicht unterstützender Browser den Inhalt um die Seiten eines Rechtecks fließen sehen, da das Bild gefloatet ist. Formen sind eine visuelle progressive Verbesserung.

### Grundformen

Der Wert `circle(50%)` ist ein Beispiel für eine Grundform. Die Spezifikation definiert mehrere `<basic-shape>`-Werte, einschließlich:

- {{cssxref("basic-shape/circle", "circle()")}}
- {{cssxref("basic-shape/ellipse", "ellipse()")}}
- {{cssxref("basic-shape/inset", "inset()")}}
- {{cssxref("basic-shape/path", "path()")}}
- {{cssxref("basic-shape/polygon", "polygon()")}}
- {{cssxref("basic-shape/rect", "rect()")}}
- {{cssxref("basic-shape/shape", "shape()")}}
- {{cssxref("basic-shape/xywh", "xywh()")}}

Drei dieser Funktionen definieren nur Rechtecke. Mit der `inset()`-Funktion definieren Sie vier Versatzwerte, wodurch die Linienkästen des umwickelnden Inhalts näher an das Objekt herangezogen werden, als sie es sonst wären. Die `rect()`-Funktion definiert ein Rechteck, indem sie den Abstand zu den oberen und linken Kanten des umgebenden Blocks angibt. Die `xywh()`-Funktion funktioniert, indem sie Abstände von den oberen und linken Kanten der Referenzbox angibt und dann die Breite und Höhe des Rechtecks von diesem Startpunkt aus festlegt.

Wir haben bereits gesehen, wie `circle()` eine kreisförmige Gestalt erstellt. Eine `ellipse()` ist im Grunde ein zusammengedrückter Kreis. Wenn keine dieser einfachen Formen das Richtige für Sie ist, können Sie komplexere Formen mit der `polygon()`-Funktion erstellen, die die Definition einer Reihe von Linien erlaubt. Die `path()`- und `shape()`-Funktionen können verwendet werden, um JEGLICHE Form über eine Reihe von Linien-, Kurven- und Bewegungsbefehlen zu erstellen.

In unserem [Leitfaden zu Grundformen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) erkunden wir jede der möglichen Grundformen und wie man sie erstellt.

### Formen aus dem Box-Wert

Formen können auch um den Box-Wert herum erstellt werden. Daher könnten Sie Ihre Form erstellen auf:

- `border-box`
- `padding-box`
- `content-box`
- `margin-box`

Im Beispiel unten können Sie den Wert `border-box` in jeden der anderen erlaubten Werte ändern, um zu sehen, wie sich die Form näher oder weiter von der Box entfernt.

{{EmbedGHLiveSample("css-examples/shapes/overview/box.html", '100%', 810)}}

Um die Box-Werte ausführlicher zu erkunden, sehen Sie sich unseren Leitfaden zu [Formen aus Box-Werten](/de/docs/Web/CSS/CSS_shapes/From_box_values) an.

### Formen aus Bildern

Eine interessante Möglichkeit, Ihren Pfad zu erzeugen, besteht darin, ein Bild mit einem Alphakanal zu verwenden – der Text wird dann um die nichttransparenten Teile des Bildes herum fließen. Dies ermöglicht die Überlagerung von umwickeltem Inhalt um ein Bild oder die Verwendung eines Bildes, das niemals auf der Seite angezeigt wird, lediglich als Methode zur Erstellung einer komplexen Form, ohne dass ein Polygon genau kartiert werden muss.

Beachten Sie, dass Bilder, die auf diese Weise verwendet werden, [CORS-kompatibel](/de/docs/Web/HTTP/CORS) sein müssen, andernfalls wird `shape-outside` so wirken, als ob `none` als Wert gegeben wurde, und Sie erhalten keine Form.

In diesem nächsten Beispiel haben wir ein Bild mit einem vollständig transparenten Bereich, und wir verwenden ein Bild als URL-Wert für `shape-outside`. Die Form wird um den undurchsichtigen Bereich herum erstellt — das Bild des Ballons.

{{EmbedGHLiveSample("css-examples/shapes/overview/image.html", '100%', 800)}}

#### `shape-image-threshold`

Die `shape-image-threshold`-Eigenschaft wird verwendet, um den Schwellenwert der Bildtransparenz festzulegen, der verwendet wird, um den Bereich des Bildes zu definieren, der für die Form verwendet wird. Wenn der Wert von `shape-image-threshold` `0.0` ist (der Anfangswert), muss der Bereich vollständig transparent sein. Wenn der Wert `1.0` ist, ist er vollständig undurchsichtig. Zwischenwerte bedeuten, dass Sie einen halbtransparenten Bereich als den definierenden Bereich der Form festlegen können.

Sie können den Schwellenwert in Aktion sehen, wenn wir einen Verlauf als das Bild verwenden, auf dem wir unsere Form definieren. Im Beispiel unten, wenn Sie den Schwellenwert ändern, ändert sich der Pfad, den die Form nimmt, basierend auf dem gewählten Opazitätsgrad.

{{EmbedGHLiveSample("css-examples/shapes/overview/threshold.html", '100%', 820)}}

Um mehr über das Erstellen von Formen aus Bildern zu erfahren, siehe den Leitfaden zu [Formen aus Bildern](/de/docs/Web/CSS/CSS_shapes/Shapes_from_images).

## Die `shape-margin`-Eigenschaft

Die {{cssxref("shape-margin")}}-Eigenschaft fügt zu `shape-outside` einen Rand hinzu. Dies wird die Linienkästen eines um die Form fließenden Inhalts weiter verkürzen und es vom eigentlichen Form wegdrängen.

Im Beispiel unten haben wir eine `shape-margin` zu einer Grundform hinzugefügt. Ändern Sie die Margin, um den Text weiter vom Pfad zu entfernen, den die Form standardmäßig nehmen würde.

{{EmbedGHLiveSample("css-examples/shapes/overview/shape-margin.html", '100%', 800)}}

## Verwendung von generiertem Inhalt als gefloatetes Element

In den obigen Beispielen haben wir Bilder oder ein sichtbares Element verwendet, um die Form zu definieren, was bedeutet, dass Sie die Form auf der Seite sehen können. Stattdessen möchten Sie vielleicht, dass ein Text entlang einer nicht rechteckigen unsichtbaren Linie fließt. Wir könnten beispielsweise ein leeres gefloatetes {{htmlelement("div")}}- oder {{htmlelement("span")}}-Element zu unserem DOM hinzufügen und es unsichtbar machen. Wir können jedoch eine Form nur mit CSS erstellen, indem wir [generierten Inhalt](/de/docs/Learn/CSS/Howto/Generated_content) verwenden und alle unsere Styling-Funktionen im CSS behalten.

In diesem Beispiel verwenden wir generierten Inhalt, um ein Element mit einer Höhe und Breite von 150px zu erstellen. Wir können dann Grundformen, Box-Werte oder sogar den Alphakanal eines Bildes verwenden, um eine Form zu erstellen, um die der Text fließt.

{{EmbedGHLiveSample("css-examples/shapes/overview/generated-content.html", '100%', 850)}}

## Verhältnis zu `clip-path`

Die für die Erstellung von Formen verwendeten Grundformen und Box-Werte sind die gleichen wie die, die als Werte für {{cssxref("clip-path")}} verwendet werden. Wenn Sie also eine Form mit einem Bild erstellen und auch einen Teil des Bildes wegschneiden möchten, können Sie die gleichen Werte verwenden.

Das unten abgebildete Bild ist ein quadratisches Bild mit einem blauen Hintergrund. Wir haben eine Form mit `shape-outside: ellipse(40% 50%);` definiert und auch `clip-path: ellipse(40% 50%);` verwendet, um den gleichen Bereich wegzuschneiden, den wir verwendet haben, um die Form zu definieren.

{{EmbedGHLiveSample("css-examples/shapes/overview/clip-path.html", '100%', 800)}}

## Entwickler-Tools für Formen

Es gibt einen [Shape Path Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) in den Firefox DevTools. Dieses Werkzeug kann verwendet werden, um die Werte `circle()`, `inset()`, `ellipse()` und `polygon()` zu inspizieren. Wenn Ihr Polygon nicht ganz richtig ist, können Sie den Shapes Editor verwenden, um es anzupassen und dann den neuen Wert zurück in Ihr CSS zu kopieren.

## Weitere CSS-Formen Funktionen

In diesem Leitfaden haben wir das Umfließen von Text um gefloatete Formen besprochen. Sehen Sie sich das [CSS Shapes-Modul](/de/docs/Web/CSS/CSS_shapes) für Links zu allen Funktionen des Moduls sowie zu weiteren verwandten Funktionen an. Dies umfasst alle Formfunktionen und relevante Anleitungen.
