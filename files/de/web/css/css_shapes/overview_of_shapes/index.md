---
title: Überblick über Formen
short-title: Overview
slug: Web/CSS/CSS_shapes/Overview_of_shapes
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Das [CSS Shapes Modul](/de/docs/Web/CSS/CSS_shapes) beschreibt geometrische Formen in CSS. Dieser Artikel bietet einen Überblick darüber, wie Sie Formen verwenden können, um Text um gefloatete Elemente zu wickeln, die nicht unbedingt rechteckig sind.

Wenn Sie ein Element nach links floaten, wird der Text um die rechte und untere Seite des Elements in rechteckiger Weise gewickelt. Mit CSS-Formen können Sie zum Beispiel eine Kreisform anwenden und der Text wickelt sich um die Linie des Kreises.

Es gibt mehrere Möglichkeiten, diesen Kreis zu erstellen. In diesem Leitfaden werden wir uns ansehen, wie CSS-Formen funktionieren und wie man sie verwendet.

## Was definiert die Spezifikation?

Die Spezifikation definiert einige Eigenschaften, einschließlich:

- {{cssxref("shape-outside")}} — Ermöglicht die Definition grundlegender Formen.
- {{cssxref("shape-image-threshold")}} — Setzt einen Opazitätsschwellenwert. Wenn ein Bild verwendet wird, um eine Form zu definieren, werden nur die Teile des Bildes verwendet, die die gleiche Opazität oder mehr als der Schwellenwert besitzen. Alle anderen Teile werden ignoriert.
- {{cssxref("shape-margin")}} — Legt einen Abstand um die definierte Form fest.

## Grundlegende Formen definieren

Die Eigenschaft `shape-outside` erlaubt es uns, eine Form zu definieren. Sie nimmt eine Vielzahl von Werten an, die verschiedene Formen aus dem {{cssxref("&lt;basic-shape&gt;")}} Datentyp beschreiben.

Im folgenden Beispiel wird ein Bild nach links gefloatet. Wir wenden die Eigenschaft `shape-outside` mit einem Wert von `circle(50%)` an. Das Ergebnis ist, dass der Inhalt jetzt um die kreisförmige Form herumkurvt, anstatt dem Rechteck zu folgen, das durch den Kasten des Bildes erstellt wird.

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

Hier haben wir die {{cssxref("basic-shape/circle", "circle()")}} Funktion verwendet, die in allen modernen Browsern unterstützt wird. Wenn wir eine neuere Form verwenden, die nicht vollständig unterstützt wird, sehen Benutzer von nicht unterstützenden Browsern den Inhalt um die Seiten eines rechteckigen Bereichs fließen, da das Bild gefloatet ist. Formen sind eine visuelle progressive Verbesserung.

### Grundlegende Formen

Der Wert `circle(50%)` ist ein Beispiel für eine grundlegende Form. Die Spezifikation definiert mehrere `<basic-shape>` Werte, einschließlich:

- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

Drei dieser Funktionen definieren nur Rechtecke. Mit der `inset()` Funktion definieren Sie vier Offset-Werte, die die Zeilenboxen eines zu umwickelnden Inhalts näher an das Objekt heranziehen, als sie es sonst tun würden. Die `rect()` Funktion definiert ein Rechteck, indem sie den Abstand von den oberen und linken Rändern des enthaltenden Blocks angibt. Die `xywh()` Funktion funktioniert, indem sie Abstände von den oberen und linken Rändern des Referenzrahmens angibt und die Breite und Höhe des Rechtecks von diesem Startpunkt aus festlegt.

Wir haben bereits gesehen, wie `circle()` eine kreisförmige Form erstellt. Eine `ellipse()` ist im Wesentlichen ein gestauchter Kreis. Wenn keine dieser grundlegenden Formen ausreicht, können Sie komplexere Formen mit der `polygon()` Funktion erstellen, die die Definition einer Reihe von Linien ermöglicht. Die `path()` und `shape()` Funktionen können verwendet werden, um mittels einer Reihe von Linien-, Kurven- und Verschiebungsbefehlen JEDE Form zu erstellen.

In unserem [Leitfaden zu grundlegenden Formen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) erkunden wir jede der möglichen grundlegenden Formen und wie man sie erstellt.

### Formen aus dem Box-Wert

Formen können auch um den Box-Wert herum erstellt werden. Daher könnten Sie Ihre Form auf folgenden Werten basieren:

- `border-box`
- `padding-box`
- `content-box`
- `margin-box`

Im untenstehenden Beispiel können Sie den Wert `border-box` in einen der anderen zulässigen Werte ändern, um zu sehen, wie sich die Form näher an oder weiter weg vom Kasten bewegt.

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

Um die Box-Werte im Detail zu erkunden, sehen Sie sich unseren Leitfaden zu [Formen aus Box-Werten](/de/docs/Web/CSS/CSS_shapes/From_box_values) an.

### Formen aus Bildern

Eine interessante Möglichkeit, Ihren Pfad zu erstellen, ist die Verwendung eines Bildes mit einem Alphakanal — der Text wird dann um die nicht-transparenten Teile des Bildes gewickelt. Dies ermöglicht die Überlagerung von umwickelten Inhalten um ein Bild oder die Verwendung eines Bildes, das nie auf der Seite angezeigt wird, nur als Methode zum Erstellen einer komplexen Form, ohne dass ein Polygon sorgfältig abgebildet werden muss.

Beachten Sie, dass Bilder, die auf diese Weise verwendet werden, [CORS-kompatibel](/de/docs/Web/HTTP/Guides/CORS) sein müssen, andernfalls wird `shape-outside` so wirken, als wäre `none` als Wert angegeben worden, und Sie erhalten keine Form.

Im nächsten Beispiel haben wir ein Bild mit einem vollständig transparenten Bereich und verwenden ein Bild als URL-Wert für `shape-outside`. Die Form wird um den opaken Bereich — das Bild des Ballons — erstellt.

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

Die Eigenschaft `shape-image-threshold` wird verwendet, um den Schwellenwert der Bildtransparenz festzulegen, der zur Definition des Bereichs des Bildes verwendet wird, der für die Form genutzt wird. Wenn der Wert von `shape-image-threshold` `0.0` (was der Anfangswert ist) beträgt, muss der Bereich vollständig transparent sein. Wenn der Wert `1.0` beträgt, ist er vollständig opak. Werte dazwischen bedeuten, dass Sie einen halbtransparenten Bereich als den definierenden Bereich der Form festlegen können.

Sie können den Schwellenwert in Aktion sehen, wenn wir einen Farbverlauf als Bild verwenden, auf dem wir unsere Form definieren. Im untenstehenden Beispiel, wenn Sie den Schwellenwert ändern, ändert sich der Pfad, den die Form nimmt, basierend auf dem Opazitätslevel, das Sie ausgewählt haben.

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

Um mehr über die Erstellung von Formen aus Bildern zu erfahren, siehe den [Leitfaden über Formen aus Bildern](/de/docs/Web/CSS/CSS_shapes/Shapes_from_images).

## Die `shape-margin` Eigenschaft

Die {{cssxref("shape-margin")}} Eigenschaft fügt `shape-outside` einen Abstand hinzu. Dies verkürzt die Zeilenboxen jedes Inhalts, der die Form umgibt, weiter und stößt ihn weiter von der Form selbst ab.

Im untenstehenden Beispiel haben wir einer grundlegenden Form einen `shape-margin` hinzugefügt. Ändern Sie den Abstand, um den Text weiter von dem Pfad abzustoßen, den die Form standardmäßig nehmen würde.

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

## Verwenden von generiertem Inhalt als gefloatetes Element

In den obigen Beispielen haben wir Bilder oder sichtbare Elemente verwendet, um die Form zu definieren, was bedeutet, dass Sie die Form auf der Seite sehen können. Stattdessen möchten Sie vielleicht, dass Text entlang einer nicht-rechteckigen unsichtbaren Linie fließt. Wir könnten zum Beispiel ein leeres gefloatetes {{htmlelement("div")}} oder {{htmlelement("span")}} Element zu unserem DOM hinzufügen und es unsichtbar machen. Allerdings können wir mit nur CSS eine Form mit [generiertem Inhalt](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content) erstellen und alle unsere Stil-Funktionalität innerhalb des CSS beibehalten.

In diesem Beispiel verwenden wir generierten Inhalt, um ein Element mit einer Höhe und Breite von 150px einzufügen. Wir können dann grundlegende Formen, Box-Werte oder sogar den Alphakanal eines Bildes verwenden, um eine Form zu erstellen, um die der Text gewickelt wird.

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

Die zur Erstellung von Formen verwendeten grundlegenden Formen und Box-Werte sind dieselben, die als Werte für {{cssxref("clip-path")}} verwendet werden. Deshalb, wenn Sie eine Form mit einem Bild erstellen möchten und auch einen Teil dieses Bildes abschneiden möchten, können Sie dieselben Werte verwenden.

Das untenstehende Bild ist ein quadratisches Bild mit einem blauen Hintergrund. Wir haben eine Form definiert mit `shape-outside: ellipse(40% 50%);` und auch `clip-path: ellipse(40% 50%);` verwendet, um denselben Bereich abzuschneiden, den wir zur Definition der Form verwendet haben.

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

Es gibt einen [Shape Path Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) in den Firefox DevTools. Dieses Tool kann verwendet werden, um die `circle()`, `inset()`, `ellipse()`, und `polygon()` Werte zu inspizieren. Wenn Ihr Polygon nicht ganz richtig ist, können Sie den Formen-Editor verwenden, um es anzupassen und dann den neuen Wert in Ihr CSS zurückzukopieren.

## Weitere CSS-Formen-Funktionen

In diesem Leitfaden haben wir das Umwickeln von Text um gefloatete Formen besprochen. Sehen Sie das [CSS Shapes Modul](/de/docs/Web/CSS/CSS_shapes) für Links zu allen Modulfunktionen sowie zusätzlichen verwandten Funktionen. Dies beinhaltet alle Formfunktionen und relevante Leitfäden.
