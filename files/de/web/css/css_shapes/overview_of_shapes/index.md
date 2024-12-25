---
title: Übersicht über Formen
slug: Web/CSS/CSS_shapes/Overview_of_shapes
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Das [CSS Shapes Modul](/de/docs/Web/CSS/CSS_shapes) beschreibt geometrische Formen in CSS. Dieser Artikel bietet einen Überblick darüber, wie Sie Formen nutzen können, um Text um gefloatete Elemente zu platzieren, die nicht unbedingt rechteckig sind.

Wenn Sie ein Element nach links floaten, wird der Text auf der rechten und unteren Seite des Elements in rechteckiger Weise umflossen. Mit CSS-Formen können Sie zum Beispiel eine Kreisform anwenden, und der Text wird um die Linie des Kreises fließen.

Es gibt mehrere Möglichkeiten, diesen Kreis zu erstellen. In diesem Leitfaden werden wir uns ansehen, wie CSS-Formen funktionieren und wie Sie sie verwenden können.

## Was definiert die Spezifikation?

Die Spezifikation definiert einige Eigenschaften, darunter:

- {{cssxref("shape-outside")}} — Erlaubt die Definition grundlegender Formen.
- {{cssxref("shape-image-threshold")}} — Legt einen Opazitätsschwellenwert fest. Wenn ein Bild verwendet wird, um eine Form zu definieren, werden nur die Teile des Bildes, die die gleiche Opazität oder höher als der Schwellenwert haben, in der Form verwendet. Alle anderen Teile werden ignoriert.
- {{cssxref("shape-margin")}} — Setzt einen Rand um die definierte Form.

## Grundformen definieren

Die `shape-outside`-Eigenschaft ermöglicht es uns, eine Form zu definieren. Sie akzeptiert verschiedene Werte, die unterschiedliche im {{cssxref("&lt;basic-shape&gt;")}} Datentyp spezifizierte Formen definieren.

Im folgenden Beispiel wird ein Bild nach links gefloatet. Wir wenden die `shape-outside`-Eigenschaft mit einem `circle(50%)`-Wert an. Das Ergebnis ist, dass der Inhalt nun um die Kreisform herumfließt, anstatt dem Rechteck zu folgen, das durch den Kasten des Bildes erstellt wird.

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

Hier haben wir die {{cssxref("basic-shape/circle", "circle()")}}-Funktion verwendet, die von allen modernen Browsern unterstützt wird. Wenn wir einen neueren Formtyp verwenden, der nicht vollständig unterstützt wird, würden Benutzer von nicht unterstützenden Browsern sehen, dass der Inhalt rechteckig um das Bild herumfließt, da das Bild gefloatet ist. Formen sind eine visuelle progressive Verbesserung.

### Grundformen

Der Wert `circle(50%)` ist ein Beispiel für eine Grundform. Die Spezifikation definiert mehrere `<basic-shape>` Werte, darunter:

- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

Drei dieser Funktionen definieren nur Rechtecke. Mit der `inset()`-Funktion definieren Sie vier Versatzwerte und ziehen damit die Linienkästen des umfließenden Inhalts näher an das Objekt heran, als sie es sonst hätten. Die `rect()`-Funktion definiert ein Rechteck, indem der Abstand von den oberen und linken Kanten des umgebenden Blocks angegeben wird. Die `xywh()`-Funktion arbeitet, indem sie Abstände von den oberen und linken Kanten des Referenzfeldes angibt und die Breite und Höhe des Rechtecks von diesem Ausgangspunkt setzt.

Wir haben bereits gesehen, wie `circle()` eine kreisförmige Form erstellt. Eine `ellipse()` ist im Wesentlichen ein zusammengedrückter Kreis. Wenn keine dieser einfachen Formen die gewünschte Wirkung erzielt, können Sie mit der `polygon()`-Funktion komplexere Formen erstellen, die es erlauben, eine Reihe von Linien zu definieren. Mit den Funktionen `path()` und `shape()` können SIE JEDE Form über eine Reihe von Linien-, Kurven- und Bewegungsbefehlen erstellen.

In unserem [Leitfaden zu Grundformen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) erkunden wir jede der möglichen Grundformen und wie man sie erstellt.

### Formen aus dem Boxwert

Formen können auch um den Boxwert erstellt werden. Daher könnten Sie Ihre Form erstellen auf:

- `border-box`
- `padding-box`
- `content-box`
- `margin-box`

Im folgenden Beispiel können Sie den Wert `border-box` auf einen der anderen erlaubten Werte ändern, um zu sehen, wie sich die Form näher an die Box oder weiter davon entfernt bewegt.

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

Um die Boxwerte genauer zu untersuchen, lesen Sie unseren Leitfaden über [Formen aus Boxwerten](/de/docs/Web/CSS/CSS_shapes/From_box_values).

### Formen aus Bildern

Eine interessante Möglichkeit, Ihre Form zu erstellen, ist die Verwendung eines Bildes mit einem Alphakanal – der Text wird dann um die nicht-transparenten Teile des Bildes fließen. Dies ermöglicht das Überlagern von umflossenem Inhalt um ein Bild oder die Verwendung eines Bildes, das nie auf der Seite angezeigt wird, rein als Methode, um eine komplexe Form zu erstellen, ohne einen Polygon sorgfältig zu kartieren.

Beachten Sie, dass Bilder, die auf diese Weise verwendet werden, [CORS-kompatibel](/de/docs/Web/HTTP/CORS) sein müssen, andernfalls wird `shape-outside` so wirken, als ob `none` als Wert angegeben worden wäre, und Sie werden keine Form erhalten.

Im nächsten Beispiel haben wir ein Bild mit einem vollständig transparenten Bereich, und wir verwenden ein Bild als URL-Wert für `shape-outside`. Die Form wird um den opaken Bereich erstellt – das Bild des Ballons.

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

Die `shape-image-threshold`-Eigenschaft wird verwendet, um den Schwellenwert der Bildtransparenz festzulegen, der zur Definition des Bereichs des Bildes verwendet wird, das für die Form verwendet wird. Ist der Wert von `shape-image-threshold` `0.0` (was der Ausgangswert ist), muss der Bereich vollständig transparent sein. Ist der Wert `1.0`, dann ist er vollständig opak. Werte dazwischen bedeuten, dass Sie einen halbtransparenten Bereich als den definierenden Bereich der Form festlegen können.

Sie können den Schwellenwert in Aktion sehen, wenn wir einen Verlauf als Bild verwenden, um unsere Form zu definieren. Im Beispiel unten ändert sich der Pfad, den die Form nimmt, je nach dem gewählten Grad der Opazität, wenn Sie den Schwellenwert ändern.

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

Um mehr über das Erstellen von Formen aus Bildern zu erfahren, lesen Sie den [Leitfaden zu Formen aus Bildern](/de/docs/Web/CSS/CSS_shapes/Shapes_from_images).

## Die `shape-margin` Eigenschaft

Die {{cssxref("shape-margin")}}-Eigenschaft fügt `shape-outside` einen Rand hinzu. Dies kürzt die Linienkästen jedes um die Form herumlaufenden Inhalts weiter ein und drückt ihn von der Form selbst weg.

Im Beispiel unten haben wir einer Grundform einen `shape-margin` hinzugefügt. Ändern Sie den Rand, um den Text weiter von dem Pfad wegzudrücken, den die Form standardmäßig nehmen würde.

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

## Verwendung erzeugter Inhalte als Gefloatetes Element

In den obigen Beispielen haben wir Bilder oder ein sichtbares Element verwendet, um die Form zu definieren, was bedeutet, dass Sie die Form auf der Seite sehen können. Stattdessen möchten Sie vielleicht, dass Text entlang einer nicht rechteckigen unsichtbaren Linie fließt. Wir könnten beispielsweise ein leeres, gefloatetes {{htmlelement("div")}} oder {{htmlelement("span")}}-Element zu unserem DOM hinzufügen und es unsichtbar machen. Allerdings können wir eine Form nur mit CSS erstellen, indem wir [generierte Inhalte](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content) verwenden und alle unsere Styling-Funktionalitäten in das CSS einfügen.

In diesem Beispiel verwenden wir generierte Inhalte, um ein Element mit einer Höhe und Breite von 150px einzufügen. Wir können dann Grundformen, Boxwerte oder sogar den Alphakanal eines Bildes verwenden, um eine Form zu erstellen, um die der Text fließt.

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

Die Grundformen und Boxwerte, die zur Erzeugung von Formen verwendet werden, sind die gleichen, die auch als Werte für {{cssxref("clip-path")}} verwendet werden. Wenn Sie also eine Form mit einem Bild erstellen und auch einen Teil dieses Bildes ausschneiden möchten, können Sie die gleichen Werte verwenden.

Das Bild unten ist ein quadratisches Bild mit einem blauen Hintergrund. Wir haben eine Form mit `shape-outside: ellipse(40% 50%);` definiert und auch `clip-path: ellipse(40% 50%);` verwendet, um denselben Bereich auszuschneiden, den wir zur Definition der Form verwendet haben.

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

Es gibt einen [Shape Path Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) in den Firefox DevTools. Dieses Tool kann verwendet werden, um die `circle()`, `inset()`, `ellipse()` und `polygon()` Werte zu inspizieren. Wenn Ihr Polygon nicht ganz richtig ist, können Sie den Shapes Editor verwenden, um es anzupassen, und dann den neuen Wert in Ihr CSS kopieren.

## Weitere CSS-Formen-Funktionen

In diesem Leitfaden haben wir über das Umfließen von Text um gefloatete Formen gesprochen. Sehen Sie sich das [CSS Shapes Modul](/de/docs/Web/CSS/CSS_shapes) für Links zu allen Modul-Funktionen sowie zusätzlichen verwandten Funktionen an. Dies schließt alle Formfunktionen und relevante Leitfäden ein.
