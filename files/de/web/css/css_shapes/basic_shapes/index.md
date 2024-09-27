---
title: Grundlegende Formen mit shape-outside
slug: Web/CSS/CSS_shapes/Basic_shapes
l10n:
  sourceCommit: 228e636705a4ee39da5711c434c5a88a2c4621a2
---

{{CSSRef}}

CSS Shapes können mit dem Typ {{cssxref("&lt;basic-shape&gt;")}} definiert werden. In diesem Leitfaden besprechen wir, wie man Rechtecke, Kreise, Ellipsen und Polygone mit der Eigenschaft {{cssxref("shape-outside")}} erstellt. Diese Eigenschaften sind im [CSS Shapes Modul](/de/docs/Web/CSS/CSS_shapes) definiert.

Bevor wir uns den Formen widmen, sollten Sie zwei Informationen verstehen, die zusammenkommen, um diese Formen zu ermöglichen:

- Der `<basic-shape>` Typ
- Die Referenzbox

## Der \<basic-shape> Typ

Der [`<basic-shape>`](/de/docs/Web/CSS/basic-shape) Typ wird als Wert für all unsere grundlegenden Formen verwendet. Dieser Typ ist eine funktionale Notation: Die Funktionsklammern enthalten Argumente, die die Form beschreiben.

Die akzeptierten Argumente variieren je nach der Form, die Sie erstellen. Wir behandeln diese in den folgenden Beispielen.

## Die Referenzbox

Das Verständnis der von CSS Shapes verwendeten Referenzbox ist wichtig bei der Verwendung grundlegender Formen, da sie das Koordinatensystem jeder Form definiert. Sie haben die Referenzbox bereits im [Leitfaden zur Erzeugung von Formen aus Box-Werten](/de/docs/Web/CSS/CSS_shapes/From_box_values) kennengelernt, der die Referenzbox direkt verwendet, um die Form zu erstellen.

Der folgende Screenshot zeigt den Firefox Shapes Inspector, der die Referenzbox eines Kreises anzeigt, der mit `shape-outside: circle(50%)` erstellt wurde. Das Element hat 20 Pixel Padding, Rand und Abstand angewandt. Der Shapes Inspector hebt diese Referenzboxen hervor.

![Text, der um einen nach links geflohten Kreis herumfließt. Die linke Kante des Textes ist kreisförmig und tangiert die abgeschnittene Form außerhalb des Randes, wobei der Rand der Form folgt.](shapes-reference-box.png)

Die Standard-Referenzbox für eine grundlegende Form ist die `margin-box`. Sie können im Screenshot sehen, dass die Form relativ zu diesem Teil des Box-Modells definiert ist.

Während die Standard-Referenzbox die `margin-box` ist, kann diese modifiziert werden. Um für Ihre Grundform eine andere Box als Referenzbox festzulegen, fügen Sie den gewünschten Box-Wert nach Ihrer Grundformdefinition hinzu.

Diese beiden Deklarationen sind gleich:

```css
shape-outside: circle(50%);
shape-outside: circle(50%) margin-box;
```

Damit Ihre Form eine andere Referenzbox verwendet, fügen Sie einen anderen {{cssxref("box-edge")}} Wert hinzu, beispielsweise um den Rand als Referenzbox für unseren Kreis zu verwenden, setzen Sie:

```css
.shape {
  shape-outside: circle(50%) border-box;
}
```

Formen, die die Margin-Box überschreiten, werden auf die Margin-Box abgeschnitten. Die folgenden Grundformen demonstrieren dies.

Für eine ausführlichere Erklärung der Referenzboxen, wie sie auf CSS Shapes angewendet werden, siehe [Understanding reference boxes for CSS shapes](http://razvancaliman.com/writing/css-shapes-reference-boxes/).

## inset()

Die [`inset()`](/de/docs/Web/CSS/basic-shape/inset) Funktion definiert ein Rechteck. Dies mag nicht sehr nützlich erscheinen, da das Umfließen eines Elements ohne Formen Ihnen eine rechteckige Form um das Element herum gibt. Allerdings ermöglicht der `inset()` Typ die Definition von Versätzen, wodurch der umfließende Text um das verkleinerte Rechteck über Teile des gefloateten Elements gezogen wird.

Die `inset()` Funktion nimmt bis zu vier seitliche Versatzwerte an, gefolgt vom optionalen Schlüsselwort `round` und einem {{cssxref("border-radius")}} Wert. Das untenstehende CSS erstellt eine rechteckige Form, die 20 Pixel von oben und unten und 10 Pixel von links und rechts von der Referenzbox des gefloateten Elements versetzt ist, mit einem `border-radius` Wert von 10 Pixeln.

```css
.shape {
  float: left;
  shape-outside: inset(20px 10px 20px 10px round 10px);
}
```

Die Versatzwerte verwenden die gleichen Regeln wie die {{cssxref("margin")}} Kurzform. Vier durch Leerzeichen getrennte Werte definieren die Versätze für oben, rechts, unten und links – in dieser Reihenfolge. Sie können auch mehr als einen Versatz gleichzeitig festlegen:

- Wenn nur ein Wert angegeben ist, gilt er für alle Seiten.
- Wenn zwei Werte angegeben sind, werden die oberen und unteren Versätze auf den ersten Wert gesetzt und die rechten und linken Versätze auf den zweiten.
- Wenn drei Werte angegeben sind, wird der obere auf den ersten Wert gesetzt, die linken und rechten auf den zweiten Wert und der untere auf den dritten.

Die obigen Regeln können daher auch so geschrieben werden:

```css
.shape {
  float: left;
  shape-outside: inset(20px 10px round 10px);
}
```

Im folgenden Beispiel haben wir eine `inset()` Form verwendet, um Inhalte über das gefloatete Element zu ziehen. Ändern Sie die Versatzwerte, um zu sehen, wie sich die Form ändert.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/inset.html", '100%', 800)}}

Sie können auch einen Box-Wert als alternative Referenzbox hinzufügen. Ändern Sie im folgenden Beispiel die Referenzbox von `margin-box` zu `border-box`, `padding-box` oder `content-box`, um zu sehen, wie sich die Referenzbox als Ausgangspunkt ändert, bevor Versätze berechnet werden.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/inset-box.html", '100%', 800)}}

Sie können auch Rechtecke basierend auf Abständen von den oberen und linken Kanten der Referenzbox mit der [`rect()`](/de/docs/Web/CSS/basic-shape/rect) Funktion oder durch Breite und Höhe mit der [`xywh()`](/de/docs/Web/CSS/basic-shape/xywh) Funktion erstellen; beide unterstützen auch optionale abgerundete Ecken.

## circle()

Der [`circle()`](/de/docs/Web/CSS/basic-shape/circle) Wert für `shape-outside` kann zwei mögliche Argumente annehmen: einen `<shape-radius>`, der die Größe definiert, und `<position>`, das seine Position angibt.

Die `circle()` und `ellipse()` Werte für `shape-outside` akzeptieren beide [`<shape-radius>`](/de/docs/Web/CSS/basic-shape#shape-radius) als Argument. Dies kann eine {{cssxref("length")}}, ein {{cssxref("percentage")}}, oder eines der Schlüsselwörter `closest-side` oder `farthest-side` sein.

Der `closest-side` Schlüsselwortwert verwendet die Länge vom Mittelpunkt der Form zur nächsten Seite der Referenzbox, um die Radiuslänge zu erstellen. Der `farthest-side` Schlüsselwortwert verwendet die Länge vom Mittelpunkt der Form zur entferntesten Seite der Referenzbox.

Das zweite Argument ist eine `position`, die einen oder zwei Schlüsselwörter umfassende [`<position>`](/de/docs/Web/CSS/position_value) Werte annimmt, um die Position des Kreismittelpunkts anzugeben. Dies wird auf die gleiche Weise spezifiziert wie {{cssxref("background-position")}}; wenn einer oder beide Werte ausgelassen werden, sind die Standardwerte `center`.

Um einen Kreis zu erstellen, geben wir einen einzelnen Radiuswert an, gefolgt vom optionalen Schlüsselwort **at** und einem Positionswert. In diesem Beispiel wurde ein Kreis auf ein {{htmlelement("img")}} angewandt, das eine `width` und `height` von `210px` und einen `margin` von `20px` hat. Dies ergibt eine Gesamtbreite der Referenzbox von `250px`. Der `50%` Wert für den `<shape-radius>` bedeutet, dass der Radius `125px` ist. Der Positionswert ist auf `30%` gesetzt, was `30%` von links und auf der Standardhöhe `center` bedeutet.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/circle.html", '100%', 800)}}

Spielen Sie mit der Vergrößerung oder Verkleinerung des Kreises, indem Sie die Größe des Radius ändern, den Kreis mit dem Positionswert verschieben oder eine Referenzbox setzen, wie wir es für `inset()` getan haben.

Das folgende Beispiel kombiniert generierten Inhalt mit einer `circle()` Funktion, die die Schlüsselwörter `top left` für die Position verwendet. Dies erzeugt eine Viertelkreisform in der oberen linken Ecke der Seite, um die der Text fließt.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/circle-generated.html", '100%', 700)}}

### Die Form wird von der Margin-Box abgeschnitten

Wie bei den [Referenzboxen](#die_referenzbox) oben erwähnt, wird die `margin-box` die Form abschneiden. Sie können dies sehen, indem Sie das Zentrum unseres Kreises Richtung Inhalt verschieben, indem Sie die Position auf `60%` setzen. Das Zentrum des Kreises wird näher beim Inhalt liegen und der Kreis wird sich über die Margin-Box hinaus erstrecken. Dies bedeutet, dass die Erweiterung abgeschnitten und quadratisch gestaltet wird.

```css
img {
  float: left;
  shape-outside: circle(50% at 60%);
}
```

![Die Kreisform wird von der Margin-Box abgeschnitten](shapes-circle-clipped.png)

## ellipse()

Eine Ellipse ist ein gedrückter Kreis. Als solches funktioniert die [`ellipse()`](/de/docs/Web/CSS/basic-shape/ellipse) Funktion sehr ähnlich wie `circle()`, außer dass wir zwei Radien, `x` und `y`, in dieser Reihenfolge angeben müssen.

Diesen können dann wie bei `circle()` ein oder zwei `<position>` Werte folgen, um die Position des Mittelpunkts der Ellipse zu definieren. Im folgenden Beispiel haben wir eine Ellipse mit einem `x` Radius von `40%`, einem `y` Radius von `50%` und das `<position>` ist auf `left` gesetzt. Dies bedeutet, dass das Zentrum der Ellipse im Zentrum der linken Kante der Referenzbox liegt. Dies erzeugt eine Halbellipse, um die der Text fließen wird. Sie können diese Werte ändern, um zu sehen, wie sich die Ellipse verändert.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/ellipse.html", '100%', 800)}}

Die Schlüsselwortwerte `closest-side` und `farthest-side` sind nützlich, um schnell eine Ellipse basierend auf der Größe der gefloateten Element-Referenzbox zu erstellen.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/ellipse-keywords.html", '100%', 800)}}

## polygon()

Die [`polygon()`](/de/docs/Web/CSS/basic-shape/polygon) Funktion ist komplexer und ermöglicht die Erstellung von Polygonformen mit mehreren Seiten. Diese Form akzeptiert drei oder mehr Paare von Werten (ein Polygon muss mindestens ein Dreieck zeichnen). Jedes durch Leerzeichen getrennte Wertepaar wird durch ein Komma getrennt und stellt die Koordinaten eines einzelnen Scheitelpunkts dar, der relativ zur Referenzbox gezeichnet wird. Jedes Wertepaar definiert eine Kante des Polygons, die letzte Kante wird durch das erste und letzte Satz von Koordinaten definiert.

Das untenstehende Beispiel erstellt eine Form, der der Text mit der `polygon()` Funktion folgt. Ändern Sie die Koordinatenwerte, um zu sehen, wie sich die Form ändert.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/polygon.html", '100%', 800)}}

Um noch komplexere Formen zu erstellen, können Sie die Umrisse jeder Form mit den Funktionen [`path()`](/de/docs/Web/CSS/basic-shape/path) oder [`shape()`](/de/docs/Web/CSS/basic-shape/shape) definieren.

Die Funktionen `inset()`, `circle()`, `ellipse()` und `polygon()` sind mit dem Firefox Developer Tools Shape Inspector inspizierbar und bearbeitbar. Der folgende Screenshot zeigt die hervorgehobene Form in dem Tool.

![Die Polygon-Grundform, hervorgehoben mit dem Shapes Inspector.](shapes-polygon.png)

Eine weitere Ressource ist [Clippy](https://bennettfeely.com/clippy/), ein Tool zum Erstellen von Formen mit Beispielen unter Verwendung der CSS {{cssxref("clip-path")}} Eigenschaft, die dieselben grundlegenden Formfunktionen und -werte wie die Eigenschaft `shape-outside` verwendet.
