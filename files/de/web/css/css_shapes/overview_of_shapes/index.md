---
title: Überblick über Formen
short-title: Overview
slug: Web/CSS/CSS_shapes/Overview_of_shapes
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Das [CSS Shapes Modul](/de/docs/Web/CSS/Guides/Shapes) beschreibt geometrische Formen in CSS. Dieser Artikel bietet einen Überblick darüber, wie Sie Formen verwenden können, um Text um gefloatete Elemente zu wickeln, die nicht unbedingt rechteckig sind.

Wenn Sie ein Element nach links fließen lassen, wickelt sich der Text auf rechteckige Weise um die rechte und untere Seite des Elements. Mit CSS-Formen können Sie beispielsweise eine Kreisform anwenden, und der Text wickelt sich um die Linie des Kreises.

Es gibt mehrere Möglichkeiten, diesen Kreis zu erstellen. In diesem Leitfaden schauen wir uns an, wie CSS Shapes funktionieren und wie man sie verwendet.

## Was definiert die Spezifikation?

Die Spezifikation definiert einige Eigenschaften, einschließlich:

- {{cssxref("shape-outside")}} — Ermöglicht die Definition grundlegender Formen.
- {{cssxref("shape-image-threshold")}} — Legt einen Opazitätsschwellenwert fest. Wenn ein Bild zur Definition einer Form verwendet wird, werden nur die Teile des Bildes, die die gleiche Opazität oder höher als der Schwellenwert haben, in der Form verwendet. Alle anderen Teile werden ignoriert.
- {{cssxref("shape-margin")}} — Setzt einen Rand um die definierte Form.

## Grundlegende Formen definieren

Die Eigenschaft `shape-outside` erlaubt es uns, eine Form zu definieren. Sie nimmt verschiedene Werte an, die verschiedene Formen definieren, die im {{cssxref("&lt;basic-shape&gt;")}} Datentyp angegeben sind.

In dem folgenden Beispiel wird ein Bild nach links gefloatet. Wir wenden die Eigenschaft `shape-outside` mit dem Wert `circle(50%)` an. Das Ergebnis ist, dass der Inhalt nun um die Kreisform herum verläuft, anstatt dem Rechteck zu folgen, das durch den Rahmen des Bildes erzeugt wird.

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

Hier haben wir die {{cssxref("basic-shape/circle", "circle()")}} Funktion verwendet, die in allen modernen Browsern unterstützt wird. Wenn wir einen neueren Formtyp verwenden, der nicht vollständig unterstützt wird, würden Benutzer von nicht unterstützten Browsern sehen, wie der Inhalt um die Seiten eines Rechtecks herumfließt, da das Bild gefloatet ist. Formen sind eine visuelle progressive Verbesserung.

### Grundlegende Formen

Der Wert `circle(50%)` ist ein Beispiel für eine grundlegende Form. Die Spezifikation definiert mehrere `<basic-shape>` Werte, darunter:

- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

Drei dieser Funktionen definieren nur Rechtecke. Mit der Funktion `inset()` definieren Sie vier Versatzwerte, wodurch die Linienkästen des umgebenden Inhalts näher an das Objekt herangezogen werden, als sie es sonst wären. Die Funktion `rect()` definiert ein Rechteck, indem Sie den Abstand von den oberen und linken Kanten des enthaltenen Blocks angeben. Die Funktion `xywh()` funktioniert, indem Sie Abstände von den oberen und linken Kanten des Referenzkastens angeben und die Breite und Höhe des Rechtecks von diesem Ausgangspunkt festlegen.

Wir haben bereits gesehen, wie `circle()` eine Kreisform erzeugt. Eine `ellipse()` ist im Wesentlichen ein gestauchter Kreis. Wenn keine dieser grundlegenden Formen ausreicht, können Sie mit der Funktion `polygon()` komplexere Formen erstellen, die die Definition einer Reihe von Linien ermöglichen. Die Funktionen `path()` und `shape()` können verwendet werden, um JEDER Form über eine Serie von Linien-, Kurven- und Bewegungskommandos zu erstellen.

In unserem [Leitfaden zu grundlegenden Formen](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside) erforschen wir jede der möglichen Grundformen und wie man sie erstellt.

### Formen aus dem Box-Wert

Formen können auch um den Box-Wert erstellt werden. Sie könnten Ihre Form daher auf folgendem erstellen:

- `border-box`
- `padding-box`
- `content-box`
- `margin-box`

Im untenstehenden Beispiel können Sie den Wert `border-box` in einen der anderen erlaubten Werte ändern, um zu sehen, wie sich die Form dem Kasten nähert oder weiter entfernt.

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

Um die Box-Werte genauer zu erforschen, siehe unseren Leitfaden über [Formen aus Box-Werten](/de/docs/Web/CSS/Guides/Shapes/From_box_values).

### Formen aus Bildern

Eine interessante Möglichkeit, Ihren Pfad zu erzeugen, besteht darin, ein Bild mit einem Alpha-Kanal zu verwenden — der Text wickelt sich dann um die nicht transparenten Teile des Bildes. Dies ermöglicht das Überlagern von eingewickeltem Inhalt um ein Bild oder die Verwendung eines Bildes, das niemals auf der Seite angezeigt wird, rein als Methode zur Erstellung einer komplexen Form, ohne dass ein Polygon sorgfältig kartiert werden muss.

Beachten Sie, dass Bilder, die auf diese Weise verwendet werden, [CORS-kompatibel](/de/docs/Web/HTTP/Guides/CORS) sein müssen, andernfalls wird `shape-outside` so behandelt, als wäre `none` als Wert angegeben worden, und Sie erhalten keine Form.

In diesem nächsten Beispiel haben wir ein Bild mit einem vollständig transparenten Bereich und verwenden ein Bild als URL-Wert für `shape-outside`. Die Form wird um den opaken Bereich — das Bild des Ballons — erstellt.

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
  shape-outside: url("https://mdn.github.io/shared-assets/images/examples/round-balloon.png");
}
```

{{EmbedLiveSample("image", "", "280px")}}

#### `shape-image-threshold`

Die Eigenschaft `shape-image-threshold` wird verwendet, um den Schwellenwert der Bildtransparenz festzulegen, der zur Definition des Bereichs des Bildes verwendet wird, der für die Form verwendet wird. Wenn der Wert von `shape-image-threshold` `0.0` (der Initialwert) ist, muss der Bereich vollständig transparent sein. Wenn der Wert `1.0` ist, ist er vollständig opak. Werte dazwischen bedeuten, dass Sie einen halbtransparenten Bereich als den definierenden Bereich der Form festlegen können.

Sie können den Schwellenwert in Aktion sehen, wenn wir einen Verlauf als das Bild verwenden, auf dem wir unsere Form definieren. Im untenstehenden Beispiel, wenn Sie den Schwellenwert ändern, ändert sich der Pfad, den die Form nimmt, basierend auf dem von Ihnen ausgewählten Grad an Opazität.

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

Um mehr über das Erstellen von Formen aus Bildern zu erfahren, lesen Sie den [Leitfaden Formen aus Bildern](/de/docs/Web/CSS/Guides/Shapes/From_images).

## Die `shape-margin` Eigenschaft

Die {{cssxref("shape-margin")}} Eigenschaft fügt dem `shape-outside` einen Rand hinzu. Dies verkürzt weiter die Linienkästen jedes Inhalts, der die Form umgibt, und drückt ihn von der Form selbst weg.

Im untenstehenden Beispiel haben wir einem Basic Shape eine `shape-margin` hinzugefügt. Ändern Sie den Rand, um den Text weiter von dem Pfad wegzudrücken, den die Form normalerweise nehmen würde.

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

## Generierter Inhalt als das gefloatetem Element verwenden

In den obigen Beispielen haben wir Bilder oder ein sichtbares Element verwendet, um die Form zu definieren, was bedeutet, dass Sie die Form auf der Seite sehen können. Stattdessen möchten Sie möglicherweise einen Text entlang einer nicht-rechteckigen unsichtbaren Linie fließen lassen. Wir könnten beispielsweise ein leeres, gefloatetes {{htmlelement("div")}} oder {{htmlelement("span")}} Element zu unserem DOM hinzufügen und es unsichtbar machen. Wir können jedoch eine Form ausschließlich mit CSS unter Verwendung von [generiertem Inhalt](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content) erstellen und alle unsere Stylings-Funktionalität innerhalb des CSS beibehalten.

In diesem Beispiel verwenden wir generierten Inhalt, um ein Element mit einer Höhe und Breite von 150px einzufügen. Wir können dann grundlegende Formen, Box-Werte oder sogar den Alpha-Kanal eines Bildes verwenden, um eine Form zu erstellen, um die der Text sich wickelt.

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

Die grundlegenden Formen und Box-Werte, die zur Erstellung von Formen verwendet werden, sind die gleichen wie die, die als Werte für {{cssxref("clip-path")}} verwendet werden. Daher, wenn Sie eine Form unter Verwendung eines Bildes erstellen und auch einen Teil dieses Bildes ausschneiden möchten, können Sie die gleichen Werte verwenden.

Das untenstehende Bild ist ein quadratisches Bild mit einem blauen Hintergrund. Wir haben eine Form mit `shape-outside: ellipse(40% 50%);` definiert und auch `clip-path: ellipse(40% 50%);` verwendet, um den gleichen Bereich auszuschneiden, den wir verwendet haben, um die Form zu definieren.

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

## Entwicklerwerkzeuge für Formen

Es gibt einen [Shape Path Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) in den Firefox DevTools. Dieses Werkzeug kann verwendet werden, um die `circle()`, `inset()`, `ellipse()`, und `polygon()` Werte zu inspizieren. Wenn Ihr Polygon nicht ganz richtig ist, können Sie den Shapes Editor verwenden, um es anzupassen und dann den neuen Wert zurück in Ihr CSS kopieren.

## Weitere CSS Shapes Funktionen

In diesem Leitfaden haben wir das Einwickeln von Text um gefloatete Formen besprochen. Sehen Sie sich das [CSS Shapes Modul](/de/docs/Web/CSS/Guides/Shapes) an, um Links zu allen Modul-Funktionen sowie zusätzliche verwandte Funktionen zu finden. Dazu gehören alle Formenfunktionen und relevante Leitfäden.
