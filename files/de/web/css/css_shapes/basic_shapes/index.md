---
title: Grundlegende Formen mit shape-outside
slug: Web/CSS/CSS_shapes/Basic_shapes
l10n:
  sourceCommit: 228e636705a4ee39da5711c434c5a88a2c4621a2
---

{{CSSRef}}

CSS-Formen können mit dem {{cssxref("&lt;basic-shape&gt;")}}-Typ definiert werden. In diesem Leitfaden besprechen wir das Erstellen von Rechtecken, Kreisen, Ellipsen und Polygonen mit der {{cssxref("shape-outside")}}-Eigenschaft. Diese sind im [CSS-Formen-Modul](/de/docs/Web/CSS/CSS_shapes) definiert.

Bevor wir uns die Formen ansehen, ist es wichtig, zwei Informationen zu verstehen, die zusammen diese Formen ermöglichen:

- Der `<basic-shape>`-Typ
- Die Referenzbox

## Der \<basic-shape>-Typ

Der [`<basic-shape>`](/de/docs/Web/CSS/basic-shape)-Typ wird als Wert für alle unsere grundlegenden Formen verwendet. Dieser Typ ist eine funktionale Notation: Die Funktionsklammern enthalten Argumente zur Beschreibung der Form.

Die akzeptierten Argumente variieren je nach der Form, die Sie erstellen. Wir werden diese in den untenstehenden Beispielen behandeln.

## Die Referenzbox

Das Verständnis der Referenzbox, die von CSS-Formen verwendet wird, ist wichtig, wenn grundlegende Formen verwendet werden, da sie das Koordinatensystem jeder Form definiert. Sie haben die Referenzbox bereits im [Leitfaden zum Erstellen von Formen aus Box-Werten](/de/docs/Web/CSS/CSS_shapes/From_box_values) kennengelernt, der die Referenzbox direkt verwendet, um die Form zu erstellen.

Der untenstehende Screenshot zeigt den Firefox Shapes Inspector, der die Referenzbox eines mit `shape-outside: circle(50%)` erzeugten Kreises anzeigt. Das Element hat 20 Pixel Padding, Rand und Margin angewendet. Der Shapes Inspector hebt diese Referenzboxen hervor.

![Text, der um einen nach links fließenden Kreis gewickelt ist. Der linke Rand des Textes ist kreisförmig und stößt auf die zugeschnittene Form außerhalb des Randes mit dem Rand, der dem Formzuschnitt folgt.](shapes-reference-box.png)

Die Standard-Referenzbox für eine grundlegende Form ist die `margin-box`. Sie können im Screenshot sehen, dass die Form relativ zu diesem Teil des Box-Modells definiert ist.

Obwohl die Standard-Referenzbox die `margin-box` ist, kann diese modifiziert werden. Um eine andere Box als Referenzbox festzulegen, fügen Sie den gewünschten Box-Wert nach Ihrer Grundformdefinition hinzu.

Diese beiden Deklarationen sind identisch:

```css
shape-outside: circle(50%);
shape-outside: circle(50%) margin-box;
```

Damit Ihre Form eine andere Referenzbox verwendet, fügen Sie einen anderen {{cssxref("box-edge")}}-Wert hinzu, z. B. um den Rand als Referenzbox für unseren Kreis zu verwenden, setzen Sie:

```css
.shape {
  shape-outside: circle(50%) border-box;
}
```

Formen, die über die Margin-Box hinausgehen, werden an der Margin-Box abgeschnitten. Die folgenden Grundformen demonstrieren dies.

Eine ausführlichere Erklärung der Referenzboxen in Bezug auf CSS-Formen finden Sie unter [Understanding reference boxes for CSS shapes](http://razvancaliman.com/writing/css-shapes-reference-boxes/).

## inset()

Die [`inset()`](/de/docs/Web/CSS/basic-shape/inset)-Funktion definiert ein Rechteck. Dies erscheint vielleicht nicht sehr nützlich, da das Floaten eines Elements ohne Formen Ihnen eine rechteckige Form darum herum gibt. Der `inset()`-Typ ermöglicht jedoch die Definition von Versätzen und zieht damit den umgebenden Text um das verkleinerte Rechteck über Teile des gefloateten Elements herum.

Die `inset()`-Funktion nimmt bis zu vier Seitenversatzwerte plus ein optionales `round`-Schlüsselwort gefolgt von einem {{cssxref("border-radius")}}-Wert. Der untenstehende CSS-Code erstellt eine rechteckige Form, die 20 Pixel von oben und unten und 10 Pixel von links und rechts von der Referenzbox des gefloateten Elements eingebettet ist, mit einem `border-radius`-Wert von 10 Pixeln.

```css
.shape {
  float: left;
  shape-outside: inset(20px 10px 20px 10px round 10px);
}
```

Die Versatzwerte verwenden dieselben Regeln wie die {{cssxref("margin")}}-Kurzform. Vier durch Leerzeichen getrennte Werte definieren die oberen, rechten, unteren und linken Versätze - in dieser Reihenfolge. Sie können auch mehr als einen Versatz gleichzeitig setzen:

- Wenn es nur einen Wert gibt, gilt dieser für alle Seiten.
- Bei zwei Werten werden der obere und untere Versatz auf den ersten Wert gesetzt und der rechte und linke Versatz auf den zweiten.
- Bei drei Werten wird der obere Wert auf den ersten Wert gesetzt, der linke und rechte Wert auf den zweiten und der untere Wert auf den dritten.

Die obigen Regeln können daher auch wie folgt geschrieben werden:

```css
.shape {
  float: left;
  shape-outside: inset(20px 10px round 10px);
}
```

Im Beispiel unten haben wir eine `inset()`-Form verwendet, um Inhalte über das gefloatete Element zu ziehen. Ändern Sie die Versatzwerte, um zu sehen, wie sich die Form ändert.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/inset.html", '100%', 800)}}

Sie können auch einen Box-Wert als alternative Referenzbox hinzufügen. Im Beispiel unten, versuchen Sie, die Referenzbox von `margin-box` zu `border-box`, `padding-box` oder `content-box` zu ändern, um zu sehen, wie sich die Referenzbox geändert hat, bevor die Versätze berechnet werden.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/inset-box.html", '100%', 800)}}

Sie können auch Rechtecke basierend auf Abständen von den oberen und linken Kanten der Referenzbox mit der [`rect()`](/de/docs/Web/CSS/basic-shape/rect)-Funktion oder durch Breite und Höhe mit der [`xywh()`](/de/docs/Web/CSS/basic-shape/xywh)-Funktion erstellen; beide unterstützen auch optionale abgerundete Ecken.

## circle()

Der [`circle()`](/de/docs/Web/CSS/basic-shape/circle)-Wert für `shape-outside` kann zwei mögliche Argumente akzeptieren: einen `<shape-radius>`, der die Größe definiert, und eine `<position>`, die seine Position definiert.

Der `circle()`- und `ellipse()`-`shape-outside`-Wert akzeptiert beide [`<shape-radius>`](/de/docs/Web/CSS/basic-shape#shape-radius) als Argument. Dies kann eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder eines der Schlüsselwörter `closest-side` oder `farthest-side` sein.

Der Schlüsselwortwert `closest-side` verwendet die Länge vom Zentrum der Form bis zur nächsten Seite der Referenzbox, um die Radiuslänge zu erstellen. Der Schlüsselwortwert `farthest-side` verwendet die Länge vom Zentrum der Form bis zur am weitesten entfernten Seite der Referenzbox.

Das zweite Argument ist eine `position`, die einen ein- oder zwei-Schlüsselwort [`<position>`](/de/docs/Web/CSS/position_value)-Wert akzeptiert, um die Position des Kreismittelpunkts anzugeben. Dies wird genauso angegeben wie {{cssxref("background-position")}}; wenn ein oder beide Werte ausgelassen werden, werden die Werte standardmäßig auf `center` gesetzt.

Um einen Kreis zu erstellen, geben wir einen einzelnen Radiuswert an, gefolgt vom Schlüsselwort **at** und einem Positionswert. In diesem Beispiel wird auf ein {{htmlelement("img")}} ein Kreis mit einer `width` und `height` von `210px` und einem `margin` von `20px` angewendet. Dies ergibt eine Gesamtbreite für die Referenzbox von `250px`. Der Wert `50%` für den `<shape-radius>` bedeutet, dass der Radius `125px` beträgt. Der Positionswert ist auf `30%` gesetzt, was `30%` von links und in der Standardvertikalen `mitte` bedeutet.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/circle.html", '100%', 800)}}

Spielen Sie damit, die Größe des Kreises zu vergrößern oder zu verkleinern, indem Sie die Größe des Radius ändern, den Kreis mit dem Positionswert verschieben oder eine Referenzbox festlegen, wie wir es bei `inset()` gemacht haben.

Im Beispiel unten wird generierter Inhalt mit einer `circle()`-Funktion kombiniert, die die Schlüsselwörter `top left` für die Position verwendet. Dies erzeugt eine Viertelkreisform in der oberen linken Ecke der Seite, um die der Text herumfließen wird.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/circle-generated.html", '100%', 700)}}

### Die Form wird durch die Margin-Box abgeschnitten

Wie oben bei den [Referenzboxen](#die_referenzbox) erwähnt, wird die `margin-box` die Form abschneiden. Sie können dies sehen, indem Sie das Zentrum unseres Kreises näher zum Inhalt bewegen, indem Sie die Position auf `60%` setzen. Das Zentrum des Kreises wird näher am Inhalt sein und der Kreis wird über die Margin-Box hinausgehen. Das bedeutet, dass die Erweiterung abgeschnitten und abgeflacht wird.

```css
img {
  float: left;
  shape-outside: circle(50% at 60%);
}
```

![Die Kreisform wird durch die Margin-Box abgeschnitten](shapes-circle-clipped.png)

## ellipse()

Eine Ellipse ist ein zusammengedrückter Kreis. Daher funktioniert die [`ellipse()`](/de/docs/Web/CSS/basic-shape/ellipse)-Funktion auf sehr ähnliche Weise wie `circle()`, außer dass wir zwei Radien, `x` und `y`, in dieser Reihenfolge angeben müssen.

Diese können dann, wie bei `circle()`, von einem oder zwei `<position>`-Werten gefolgt werden, um die Lage des Mittelpunkts der Ellipse zu definieren. Im folgenden Beispiel haben wir eine Ellipse mit einem `x`-Radius von `40%`, einem `y`-Radius von `50%` und die `<position>` ist auf `left` gesetzt. Dies bedeutet, dass der Mittelpunkt der Ellipse im Zentrum des linken Randes der Referenzbox liegt. Dies erzeugt eine halbe Ellipsenform, um die der Text herumfließen wird. Sie können diese Werte ändern, um zu sehen, wie sich die Ellipse verändert.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/ellipse.html", '100%', 800)}}

Die Schlüsselwortwerte `closest-side` und `farthest-side` sind nützlich, um schnell eine Ellipse basierend auf der Größe der Referenzbox des gefloateten Elements zu erstellen.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/ellipse-keywords.html", '100%', 800)}}

## polygon()

Die [`polygon()`](/de/docs/Web/CSS/basic-shape/polygon)-Funktion ist komplexer und ermöglicht die Erstellung von Polygonformen mit mehreren Seiten. Diese Form akzeptiert drei oder mehr Wertepaaren (ein Polygon muss zumindest ein Dreieck zeichnen). Jedes durch Leerzeichen getrennte Wertepaar wird mit einem Komma getrennt und repräsentiert die Koordinaten eines einzelnen Scheitelpunkts, der relativ zur Referenzbox gezeichnet wird. Jedes Koordinatenpaar definiert eine Kante des Polygons, wobei die letzte Kante durch die erste und letzte Koordinate definiert wird.

Das folgende Beispiel erstellt eine Form, der der Text folgen kann, indem die `polygon()`-Funktion verwendet wird. Versuchen Sie, die Koordinatenwerte zu ändern, um zu sehen, wie sich die Form ändert.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/polygon.html", '100%', 800)}}

Um noch komplexere Formen zu erstellen, können Sie das Umriss einer beliebigen Form mit den Funktionen [`path()`](/de/docs/Web/CSS/basic-shape/path) oder [`shape()`](/de/docs/Web/CSS/basic-shape/shape) definieren.

Die Funktionen `inset()`, `circle()`, `ellipse()` und `polygon()` sind mit dem Firefox Developer Tools Shape Inspector inspizierbar und bearbeitbar. Der untenstehende Screenshot zeigt die im Tool hervorgehobene Form.

![Die Polygon-Grundform, hervorgehoben mit dem Shapes Inspector.](shapes-polygon.png)

Eine weitere Ressource ist [Clippy](https://bennettfeely.com/clippy/), ein Tool zum Erstellen von Formen mit Beispielen, die die CSS-{{cssxref("clip-path")}}-Eigenschaft verwenden, welche dieselben Grundformen-Funktionen und -Werte verwendet wie die `shape-outside`-Eigenschaft.
