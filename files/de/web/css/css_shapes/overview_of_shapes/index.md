---
title: Übersicht der Formen
slug: Web/CSS/CSS_shapes/Overview_of_shapes
l10n:
  sourceCommit: b17ca921175c0a92d21c6c4effbc7fa3dc348a8e
---

{{CSSRef}}

Das [CSS Shapes-Modul](/de/docs/Web/CSS/CSS_shapes) beschreibt geometrische Formen in CSS. Dieser Artikel bietet eine Übersicht darüber, wie Sie Formen verwenden können, um Text um gefloatete Elemente zu umbrechen, die nicht unbedingt rechteckig sind.

Wenn Sie ein Element nach links floaten, wird der Text rechts und unten um das Element in rechteckiger Weise umbrochen. Mit CSS-Formen können Sie beispielsweise eine Kreisform anwenden, und der Text wird um die Linie des Kreises herum angezeigt.

Es gibt mehrere Möglichkeiten, diesen Kreis zu erstellen. In diesem Leitfaden werden wir uns ansehen, wie CSS-Formen funktionieren und wie Sie sie verwenden.

## Was definiert die Spezifikation?

Die Spezifikation definiert einige Eigenschaften, darunter:

- {{cssxref("shape-outside")}} — Ermöglicht die Definition von Grundformen.
- {{cssxref("shape-image-threshold")}} — Setzt einen Schwellenwert für die Opazität. Wenn ein Bild zur Definition einer Form verwendet wird, werden nur die Teile des Bildes, die die gleiche oder eine größere Opazität als der Schwellenwert haben, in der Form verwendet. Alle anderen Teile werden ignoriert.
- {{cssxref("shape-margin")}} — Setzt einen Rand um die definierte Form.

## Grundformen definieren

Die `shape-outside`-Eigenschaft ermöglicht es uns, eine Form zu definieren. Sie nimmt eine Vielzahl von Werten an, die unterschiedliche Formen definieren, die im {{cssxref("&lt;basic-shape&gt;")}}-Datentyp angegeben sind.

Im folgenden Beispiel wird ein Bild nach links gefloatet. Wir wenden die `shape-outside`-Eigenschaft mit dem Wert `circle(50%)` an. Das Ergebnis ist, dass der Inhalt nun um die Kreisform herum fließt, anstatt dem Rechteck zu folgen, das durch den Rahmen des Bildes erzeugt wird.

```html live-sample___circle
<div class="box">
  <img
    alt="An orange hot air balloon as seen from below"
    src="https://mdn.github.io/shared-assets/images/examples/round-balloon.png" />
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

```css live-sample___circle
body {
  font: 1.2em / 1.4 sans-serif;
}

img {
  float: left;
  shape-outside: circle(50%);
}
```

{{EmbedLiveSample("circle", "", "280px")}}

Hier haben wir die {{cssxref("basic-shape/circle", "circle()")}}-Funktion verwendet, die von allen modernen Browsern unterstützt wird. Wenn wir einen neueren Formtyp verwenden würden, der nicht voll unterstützt wird, würden Benutzer von nicht unterstützenden Browsern sehen, dass der Inhalt um die Seiten eines Rechtecks fließt, da das Bild gefloatet wird. Formen sind eine visuelle progressive Verbesserung.

### Grundformen

Der Wert `circle(50%)` ist ein Beispiel für eine Grundform. Die Spezifikation definiert mehrere `<basic-shape>`-Werte, darunter:

- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

Drei dieser Funktionen definieren nur Rechtecke. Mit der `inset()`-Funktion definieren Sie vier Versatzwerte und ziehen damit die Linienboxen eines umgebenden Inhalts näher an das Objekt heran, als sie es sonst tun würden. Die `rect()`-Funktion definiert ein Rechteck, indem sie den Abstand von den oberen und linken Kanten des umgebenden Blocks angibt. Die `xywh()`-Funktion funktioniert, indem sie Abstände von den oberen und linken Rändern des Referenzrahmens und die Breite und Höhe des Rechtecks ab diesem Startpunkt angibt.

Wir haben bereits gesehen, wie `circle()` eine Kreisform erzeugt. Eine `ellipse()` ist im Wesentlichen ein gestauchter Kreis. Wenn keine dieser Grundformen ausreicht, können Sie mit der `polygon()`-Funktion komplexere Formen erstellen, die die Definition einer Reihe von Linien ermöglicht. Die `path()`- und `shape()`-Funktionen können verwendet werden, um JEGLICHE Form durch eine Serie von Linien-, Kurven- und Bewegungskommandos zu erstellen.

In unserem [Leitfaden zu Grundformen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) behandeln wir jede der möglichen Grundformen und wie Sie sie erstellen können.

### Formen aus dem Kästchenwert

Formen können auch um den Kästchenwert erstellt werden. Sie könnten also Ihre Form anlegen auf:

- `border-box`
- `padding-box`
- `content-box`
- `margin-box`

Im folgenden Beispiel können Sie den Wert `border-box` auf einen der anderen möglichen Werte ändern, um zu sehen, wie sich die Form näher oder weiter vom Kasten entfernt bewegt.

```html live-sample___box
<div class="box">
  <div class="shape"></div>
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

```css live-sample___box
body {
  font: 1.2em / 1.4 sans-serif;
}

.shape {
  background-color: rebeccapurple;
  height: 150px;
  width: 150px;
  padding: 20px;
  margin: 20px;
  border-radius: 50%;
  float: left;
  shape-outside: border-box;
}
```

{{EmbedLiveSample("box", "", "320px")}}

Um die Boxwerte im Detail zu erkunden, sehen Sie unseren Leitfaden über [Formen aus Boxwerten](/de/docs/Web/CSS/CSS_shapes/From_box_values).

### Formen aus Bildern

Eine interessante Möglichkeit, Ihren Pfad zu erzeugen, besteht darin, ein Bild mit einem Alphakanal zu verwenden — der Text wird dann um die nicht-transparenten Teile des Bildes herum angezeigt. Dadurch ist es möglich, um das Bild herum umbrochenen Inhalt überlagern oder ein Bild, das niemals auf der Seite angezeigt wird, ausschließlich als Methode zur Erstellung einer komplexen Form zu verwenden, ohne dass ein Polygon sorgfältig abgebildet werden muss.

Beachten Sie, dass Bilder, die auf diese Weise verwendet werden, [CORS-kompatibel](/de/docs/Web/HTTP/CORS) sein müssen, andernfalls wird `shape-outside` so wirken, als wäre `none` als Wert gegeben worden, und Sie erhalten keine Form.

Im nächsten Beispiel haben wir ein Bild mit einem vollständig transparenten Bereich, und wir verwenden ein Bild als URL-Wert für `shape-outside`. Die Form wird um den undurchsichtigen Bereich herum erstellt — das Bild des Ballons.

```html live-sample___image
<div class="box">
  <img
    alt="An orange hot air balloon as seen from below"
    src="https://mdn.github.io/shared-assets/images/examples/round-balloon.png" />
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

```css live-sample___image
body {
  font: 1.2em / 1.4 sans-serif;
}

img {
  float: left;
  shape-outside: url(https://mdn.github.io/shared-assets/images/examples/round-balloon.png);
}
```

{{EmbedLiveSample("image", "", "280px")}}

#### `shape-image-threshold`

Die `shape-image-threshold`-Eigenschaft wird verwendet, um den Schwellenwert der Bildtransparenz festzulegen, der zur Definition des Bereichs des Bildes verwendet wird, um die Form zu bestimmen. Wenn der Wert von `shape-image-threshold` `0.0` ist (was der anfängliche Wert ist), dann muss der Bereich vollständig transparent sein. Wenn der Wert `1.0` ist, ist er vollständig undurchsichtig. Werte dazwischen bedeuten, dass Sie einen halbtransparenten Bereich als den bestimmenden Bereich der Form festlegen können.

Sie können den Schwellenwert in Aktion sehen, wenn wir einen Farbverlauf als Bild zur Definition unserer Form verwenden. Im unteren Beispiel ändert sich der Pfad, den die Form nimmt, basierend auf dem Grad der Opazität, den Sie ausgewählt haben, wenn Sie den Schwellenwert ändern.

```html live-sample___threshold
<div class="box">
  <div class="shape"></div>
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
  font: 1.2em / 1.4 sans-serif;
}

.shape {
  float: left;
  width: 200px;
  height: 200px;
  background-image: linear-gradient(
    45deg,
    rebeccapurple,
    transparent 80%,
    transparent
  );
  shape-outside: linear-gradient(
    45deg,
    rebeccapurple,
    transparent 80%,
    transparent
  );
  shape-image-threshold: 0.4;
}
```

{{EmbedLiveSample("threshold", "", "280px")}}

Um mehr über das Erstellen von Formen aus Bildern zu erfahren, sehen Sie den Leitfaden [Formen aus Bildern](/de/docs/Web/CSS/CSS_shapes/Shapes_from_images).

## Die `shape-margin`-Eigenschaft

Die {{cssxref("shape-margin")}}-Eigenschaft fügt `shape-outside` einen Rand hinzu. Dies verkürzt die Linienboxen eines jeglichen Inhalts, der die Form umfließt, weiter und schiebt ihn von der Form selbst weg.

Im Beispiel unten haben wir einer Grundform eine `shape-margin` hinzugefügt. Ändern Sie den Rand, um den Text weiter weg von dem Pfad, den die Form nehmen würde, an ihren Standardpunkt zu schieben.

```html live-sample___shape-margin
<div class="box">
  <img
    alt="An orange hot air balloon as seen from below"
    src="https://mdn.github.io/shared-assets/images/examples/round-balloon.png" />
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

```css live-sample___shape-margin
body {
  font: 1.2em / 1.4 sans-serif;
}
img {
  float: left;
  shape-outside: circle(50%);
  shape-margin: 5px;
}
```

{{EmbedLiveSample("shape-margin", "", "280px")}}

## Verwendung von erzeugtem Inhalt als gefloatetes Element

In den obigen Beispielen haben wir Bilder oder ein sichtbares Element verwendet, um die Form zu definieren, was bedeutet, dass Sie die Form auf der Seite sehen können. Stattdessen möchten Sie vielleicht einen Text entlang einer nicht-rechteckigen unsichtbaren Linie fließen lassen. Wir könnten beispielsweise ein leeres gefloatetes {{htmlelement("div")}}- oder {{htmlelement("span")}}-Element zu unserem DOM hinzufügen und es unsichtbar machen. Wir können jedoch eine Form nur mit CSS unter Verwendung von [erzeugtem Inhalt](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content) erstellen und alle unsere Styling-Funktionalitäten innerhalb des CSS belassen.

In diesem Beispiel verwenden wir erzeugten Inhalt, um ein Element mit einer Höhe und Breite von 150px einzufügen. Wir können dann Grundformen, Boxwerte oder sogar den Alphakanal eines Bildes verwenden, um eine Form zu erstellen, um die der Text gewickelt wird.

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
  font: 1.2em sans-serif;
}

.box::before {
  content: "";
  display: block;
  height: 150px;
  width: 150px;
  padding: 20px;
  margin: 20px;
  border-radius: 50%;
  float: left;
  shape-outside: border-box;
}
```

{{EmbedLiveSample("generated-content", "", "260px")}}

## Beziehung zu `clip-path`

Die zur Erstellung von Formen verwendeten Grundformen und Boxwerte sind dieselben, die als Werte für {{cssxref("clip-path")}} verwendet werden. Wenn Sie also mit einem Bild eine Form erstellen und auch einen Teil dieses Bildes ausschneiden möchten, können Sie dieselben Werte verwenden.

Das untenstehende Bild ist ein quadratisches Bild mit einem blauen Hintergrund. Wir haben eine Form definiert mit `shape-outside: ellipse(40% 50%);` und auch `clip-path: ellipse(40% 50%);` verwendet, um denselben Bereich auszuschneiden, den wir zur Definition der Form verwendet haben.

```html live-sample___clip-path
<div class="box">
  <img
    alt="An orange hot air balloon as seen from below"
    src="https://mdn.github.io/shared-assets/images/examples/balloon-small.jpg" />
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

```css live-sample___clip-path
body {
  font: 1.2em / 1.4 sans-serif;
}

img {
  float: left;
  shape-outside: ellipse(40% 50%);
  clip-path: ellipse(40% 50%);
}
```

{{EmbedLiveSample("clip-path", "", "280px")}}

## Entwickler-Tools für Formen

Es gibt einen [Shape Path Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) in den Firefox DevTools. Mit diesem Tool können die `circle()`, `inset()`, `ellipse()` und `polygon()`-Werte inspiziert werden. Wenn Ihr Polygon nicht ganz richtig ist, können Sie den Shapes Editor verwenden, um es zu optimieren und dann den neuen Wert zurück in Ihr CSS zu kopieren.

## Weitere CSS-Formen-Funktionen

In diesem Leitfaden haben wir das Umwickeln von Text um gefloatete Formen besprochen. Sehen Sie das [CSS Shapes-Modul](/de/docs/Web/CSS/CSS_shapes) für Links zu allen Funktionen des Moduls sowie zusätzlichen verwandten Funktionen. Dazu gehören alle Formfunktionen und relevante Leitfäden.
