---
title: Grundformen mit shape-outside
slug: Web/CSS/CSS_shapes/Basic_shapes
l10n:
  sourceCommit: 228e636705a4ee39da5711c434c5a88a2c4621a2
---

{{CSSRef}}

CSS Shapes können mithilfe des Typs {{cssxref("&lt;basic-shape&gt;")}} definiert werden. In diesem Leitfaden besprechen wir die Erstellung von Rechtecken, Kreisen, Ellipsen und Polygonen mit der Eigenschaft {{cssxref("shape-outside")}}. Diese Merkmale sind im [CSS Shapes Modul](/de/docs/Web/CSS/CSS_shapes) definiert.

Bevor wir uns Formen ansehen, lohnt es sich, zwei Informationen zu verstehen, die zusammen dieser Formen möglich machen:

- Der `<basic-shape>` Typ
- Die Referenzbox

## Der \<basic-shape> Typ

Der [`<basic-shape>`](/de/docs/Web/CSS/basic-shape) Typ wird als Wert für alle unsere Grundformen verwendet. Dieser Typ ist eine funktionale Notation: Die Funktionsklammern enthalten Argumente, die die Form beschreiben.

Die akzeptierten Argumente variieren je nach der zu erstellenden Form. Wir werden diese in den unten stehenden Beispielen behandeln.

## Die Referenzbox

Das Verständnis der von CSS-Shapes verwendeten Referenzbox ist wichtig, wenn Sie Grundformen verwenden, da es das Koordinatensystem jeder Form definiert. Sie haben die Referenzbox bereits im [Leitfaden zur Erstellung von Formen aus Box-Werten](/de/docs/Web/CSS/CSS_shapes/From_box_values) kennengelernt, welcher direkt die Referenzbox verwendet, um die Form zu erstellen.

Der folgende Screenshot zeigt den Firefox Shapes Inspector, der die Referenzbox einer mit `shape-outside: circle(50%)` erstellten Kreisform anzeigt. Dem Element wurden 20 Pixel Padding, Rahmen und Margin zugewiesen. Der Shapes Inspector hebt diese Referenzboxen hervor.

![Text, der um einen links schwebenden Kreis fließt. Der linke Rand des Textes ist kreisförmig und stößt an die abgeschnittene Form außerhalb des Rands, wobei der Rand der Formabschneidung folgt.](shapes-reference-box.png)

Die Standard-Referenzbox für eine Grundform ist die `margin-box`. Im Screenshot können Sie sehen, dass die Form relativ zu diesem Teil des Box-Modells definiert ist.

Obwohl die Standard-Referenzbox die `margin-box` ist, kann diese modifiziert werden. Um eine andere Box als Referenzbox festzulegen, fügen Sie den gewünschten Box-Wert nach Ihrer Grundform-Definition ein.

Diese zwei Deklarationen sind identisch:

```css
shape-outside: circle(50%);
shape-outside: circle(50%) margin-box;
```

Damit Ihre Form eine andere Referenzbox verwendet, fügen Sie einen anderen {{cssxref("box-edge")}} Wert hinzu, zum Beispiel, um den Rand als Referenzbox für unseren Kreis zu verwenden, setzen Sie:

```css
.shape {
  shape-outside: circle(50%) border-box;
}
```

Formen, die über die Margin-Box hinausgehen, werden an die Margin-Box abgeschnitten. Die folgenden Grundformen demonstrieren dies.

Für eine umfassendere Erklärung der Referenzboxen, wie sie auf CSS Shapes angewendet werden, siehe [Understanding reference boxes for CSS shapes](http://razvancaliman.com/writing/css-shapes-reference-boxes/).

## inset()

Die [`inset()`](/de/docs/Web/CSS/basic-shape/inset) Funktion definiert ein Rechteck. Dies mag nicht sehr nützlich erscheinen, da ein schwebendes Element ohne Formen eine rechteckige Form um sich herum erzeugen würde. Der `inset()` Typ ermöglicht jedoch die Definition von Versatzzahlen, sodass der umliegende Text um das verkleinerte Rechteck gezogen wird und Teile des schwebenden Elements überlagert.

Die `inset()` Funktion nimmt bis zu vier Versatzwerte für die Seiten, gefolgt von dem optionalen Schlüsselwort `round` und einem {{cssxref("border-radius")}} Wert. Das unten stehende CSS erstellt eine rechteckige Form, die in die Referenzbox des schwebenden Elements um 20 Pixel von oben und unten sowie 10 Pixel von links und rechts eingezogen ist, mit einem `border-radius` von 10 Pixeln.

```css
.shape {
  float: left;
  shape-outside: inset(20px 10px 20px 10px round 10px);
}
```

Die Versatzwerte verwenden die gleichen Regeln wie die {{cssxref("margin")}} Kurzform. Vier durch Leerzeichen getrennte Werte definieren die Versätze für oben, rechts, unten und links – in dieser Reihenfolge. Sie können auch mehr als einen Versatz gleichzeitig einstellen:

- Wenn nur ein Wert angegeben wird, gilt dieser für alle Seiten.
- Wenn zwei Werte angegeben werden, werden die Versätze oben und unten auf den ersten Wert und die rechten und linken auf den zweiten festgelegt.
- Wenn drei Werte angegeben werden, wird der obere auf den ersten Wert festgelegt, links und rechts auf den zweiten und unten auf den dritten.

Die obigen Regeln können daher auch so geschrieben werden:

```css
.shape {
  float: left;
  shape-outside: inset(20px 10px round 10px);
}
```

Im folgenden Beispiel haben wir eine `inset()` Form verwendet, um Inhalte über das schwebende Element zu ziehen. Ändern Sie die Versatzwerte, um zu sehen, wie sich die Form ändert.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/inset.html", '100%', 800)}}

Sie können auch einen Box-Wert als alternative Referenzbox hinzufügen. Im folgenden Beispiel versuchen Sie, die Referenzbox von `margin-box` zu `border-box`, `padding-box` oder `content-box` zu ändern, um zu sehen, wie sich die verwendete Referenzbox ändert, bevor die Versätze berechnet werden.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/inset-box.html", '100%', 800)}}

Sie können auch Rechtecke basierend auf Abständen von der oberen und linken Kante der Referenzbox mit der Funktion [`rect()`](/de/docs/Web/CSS/basic-shape/rect), oder durch Breite und Höhe mit der Funktion [`xywh()`](/de/docs/Web/CSS/basic-shape/xywh) erstellen; beide unterstützen auch optionale abgerundete Ecken.

## circle()

Der [`circle()`](/de/docs/Web/CSS/basic-shape/circle) Wert für `shape-outside` kann zwei mögliche Argumente annehmen: einen `<shape-radius>`, der die Größe definiert, und die `<position>`, die seinen Ort definiert.

Sowohl die `circle()` als auch die `ellipse()` Werte von `shape-outside` akzeptieren [`<shape-radius>`](/de/docs/Web/CSS/basic-shape#shape-radius) als Argument. Dies kann eine {{cssxref("length")}}, ein {{cssxref("percentage")}}, oder eines der Schlüsselwörter `closest-side` oder `farthest-side` sein.

Der `closest-side` Schlüsselwortwert verwendet die Länge vom Zentrum der Form zur nächstgelegenen Seite der Referenzbox, um die Radiuslänge zu erstellen. Der `farthest-side` Schlüsselwortwert verwendet die Länge vom Zentrum der Form zur am weitesten entfernten Seite der Referenzbox.

Das zweite Argument ist eine `position`, die einen ein- oder zweischlüsselwortigen [`<position>`](/de/docs/Web/CSS/position_value) Wert akzeptiert, um die Position des Mittelpunkts des Kreises anzugeben. Dies wird genauso angegeben wie {{cssxref("background-position")}}; wenn einer oder beide Werte weggelassen werden, wird als Standardwert `center` angenommen.

Um einen Kreis zu erstellen, geben wir einen einzelnen Radiuswert an, optional gefolgt vom Schlüsselwort **at**, gefolgt von einem Positionswert. Dieses Beispiel hat einen Kreis, der auf ein {{htmlelement("img")}} angewendet wird mit einer `width` und `height` von `210px` und einem `margin` von `20px`. Dies ergibt eine Gesamtbreite der Referenzbox von `250px`. Der `50%` Wert für den `<shape-radius>` bedeutet, dass der Radius `125px` beträgt. Der Positionswert ist auf `30%` gesetzt, was `30%` von links und beim Standardvertikal `center` entspricht.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/circle.html", '100%', 800)}}

Spielen Sie mit dem Vergrößern oder Verkleinern der Kreisgröße, indem Sie die Größe des Radius ändern, den Kreis mit dem Positionswert verschieben, oder eine Referenzbox festlegen, wie wir es für `inset()` getan haben.

Das folgende Beispiel kombiniert generierten Inhalt mit einer `circle()` Funktion, die die Schlüsselwörter `top left` für die Position verwendet. Dies erstellt eine Viertelkreisform in der oberen linken Ecke der Seite, um die Texte fließen können.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/circle-generated.html", '100%', 700)}}

### Die Form wird von der Margin-Box abgeschnitten

Wie oben in [Referenzboxen](#die_referenzbox) erwähnt, wird die `margin-box` die Form abschneiden. Sie können dies sehen, indem Sie den Mittelpunkt unseres Kreises näher an den Inhalt bringen, indem Sie die Position auf `60%` setzen. Der Mittelpunkt des Kreises wird näher an den Inhalt und der Kreis wird über die margin-box hinausgehen. Dies bedeutet, dass die Erweiterung abgeschnitten und abgeflacht wird.

```css
img {
  float: left;
  shape-outside: circle(50% at 60%);
}
```

![Die Kreisform wird von der Margin-Box abgeschnitten](shapes-circle-clipped.png)

## ellipse()

Eine Ellipse ist ein gedrückter Kreis. Daher funktioniert die [`ellipse()`](/de/docs/Web/CSS/basic-shape/ellipse) Funktion sehr ähnlich wie `circle()`, außer dass wir zwei Radien angeben müssen, `x` und `y` in dieser Reihenfolge.

Diese können dann durch einen oder zwei `<position>` Werte gefolgt werden, wie bei `circle()`, um den Ort des Mittelpunkts der Ellipse zu definieren. Im folgenden Beispiel haben wir eine Ellipse mit einem `x` Radius von `40%`, einem `y` Radius von `50%` und die `<position>` ist auf `left` gesetzt. Das bedeutet, dass der Mittelpunkt der Ellipse am Mittelpunkt der linken Kante der Referenzbox liegt. Dies erstellt eine halbe Ellipsenform, um die der Text fließen wird. Sie können diese Werte ändern, um zu sehen, wie sich die Ellipse verändert.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/ellipse.html", '100%', 800)}}

Die Schlüsselwortwerte `closest-side` und `farthest-side` sind nützlich, um schnell eine Ellipse basierend auf der Größe der Referenzbox des schwebenden Elements zu erstellen.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/ellipse-keywords.html", '100%', 800)}}

## polygon()

Die [`polygon()`](/de/docs/Web/CSS/basic-shape/polygon) Funktion ist komplexer und ermöglicht die Erstellung von mehreckigen Polygonformen. Diese Form akzeptiert drei oder mehr Wertpaare (ein Polygon muss mindestens ein Dreieck zeichnen). Jedes durch Leerzeichen getrennte Wertpaar wird durch ein Komma getrennt und stellt die Koordinaten eines einzelnen Punktes dar, der relativ zur Referenzbox gezeichnet wird. Jedes Koordinatenpaar definiert eine Kante des Polygons, wobei die letzte Kante durch das erste und das letzte Koordinatenpaar definiert wird.

Das folgende Beispiel erstellt eine Form, der der Text folgen soll, mithilfe der `polygon()` Funktion. Ändern Sie die Koordinatenwerte, um zu sehen, wie sich die Form ändert.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/polygon.html", '100%', 800)}}

Um noch komplexere Formen zu erstellen, können Sie die Kontur einer beliebigen Form mit den Funktionen [`path()`](/de/docs/Web/CSS/basic-shape/path) oder [`shape()`](/de/docs/Web/CSS/basic-shape/shape) definieren.

Die `inset()`, `circle()`, `ellipse()`, und `polygon()` sind mithilfe des Shape-Inspectors der Firefox Developer Tools inspizierbar und bearbeitbar. Der folgende Screenshot zeigt die im Tool hervorgehobene Form.

![Die Polygon-Grundform, hervorgehoben mit dem Shapes Inspector.](shapes-polygon.png)

Eine weitere Ressource ist [Clippy](https://bennettfeely.com/clippy/), ein Werkzeug zur Erstellung von Formen mit Beispielen anhand der CSS {{cssxref("clip-path")}} Eigenschaft, die die gleichen Grundformfunktionen und -werte wie die `shape-outside` Eigenschaft verwendet.
