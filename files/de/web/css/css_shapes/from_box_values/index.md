---
title: Formen aus Box-Werten
slug: Web/CSS/CSS_shapes/From_box_values
l10n:
  sourceCommit: b17ca921175c0a92d21c6c4effbc7fa3dc348a8e
---

{{CSSRef}}

Eine einfache Möglichkeit, eine Form zu erstellen, ist die Verwendung eines Wertes aus dem [CSS Box Model](/de/docs/Web/CSS/CSS_box_model)-Modul. Dieser Artikel erklärt, wie das gemacht wird.

Die im {{cssxref("box-edge")}} als Formwert zulässigen Box-Werte sind:

- `content-box`
- `padding-box`
- `border-box`
- `margin-box`

Auch die {{cssxref("border-radius")}}-Werte werden unterstützt. Das bedeutet, dass Sie einem Element eine gekrümmte Grenze geben und Ihren Inhalt um die entstandene Form herumfließen lassen können.

## CSS-Box-Modell

Die oben aufgeführten Werte entsprechen den verschiedenen Teilen des CSS Box Models. Eine Box in CSS hat Inhalt, Auffüllung, Rahmen und Rand.

![Das Box-Modell besteht aus den Margin-, Border-, Padding- und Content-Boxen.](box-model.png)

Durch die Verwendung von Box-Werten für Formen können wir unseren Inhalt um die durch diese Werte definierten Kanten fließen lassen. In jedem der unten stehenden Beispiele verwende ich ein Element, das Auffüllung, einen Rahmen und einen Rand definiert hat, damit Sie die verschiedenen Möglichkeiten sehen können, wie Inhalte fließen.

### margin-box

Die `margin-box` ist die Form, die durch den Außenrand definiert wird und den Eckradius der Form einschließt, falls {{cssxref("border-radius")}} zur Definition des Elements verwendet wurde.

Im untenstehenden Beispiel haben wir ein zirkuläres lila Element, das ein {{htmlelement("div")}} mit einer Höhe, Breite und Hintergrundfarbe ist. Die `border-radius`-Eigenschaft wurde verwendet, um einen Kreis durch die Einstellung `border-radius: 50%` zu erstellen. Da das Element einen Rand hat, sehen Sie, dass der Inhalt um die kreisförmige Form und den darauf angewendeten Rand fließt.

```html live-sample___margin-box
<div class="box">
  <div class="shape"></div>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery.
  </p>
</div>
```

```css live-sample___margin-box
body {
  font: 1.2em sans-serif;
}

.shape {
  background-color: rebeccapurple;
  height: 80px;
  width: 80px;
  padding: 20px;
  margin: 20px;
  border: 10px solid black;
  border-radius: 50%;
  float: left;
  shape-outside: margin-box;
}
```

{{EmbedLiveSample("margin-box", "", "200px")}}

### border-box

Der `border-box`-Wert ist die Form, die durch die Außenkante des Rahmens definiert wird. Diese Form folgt allen normalen Formregeln des äußeren Randradius. Sie haben weiterhin einen Rahmen, selbst wenn Sie die CSS-Eigenschaft {{cssxref("border")}} nicht verwendet haben. In diesem Fall ist sie identisch mit `padding-box`, der Form, die durch die äußere Auffüllungskante definiert wird.

Im untenstehenden Beispiel können Sie sehen, wie der Text nun der vom Rahmen erstellten Linie folgt. Ändern Sie die Rahmengröße, und der Inhalt wird ihr folgen.

```html hidden live-sample___border-box
<div class="box">
  <div class="shape"></div>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery.
  </p>
</div>
```

```css live-sample___border-box
body {
  font: 1.2em sans-serif;
}
.box {
  width: 70%;
}

.shape {
  background-color: rebeccapurple;
  height: 80px;
  width: 80px;
  padding: 20px;
  margin: 20px;
  border: 10px solid black;
  border-radius: 50%;
  float: left;
  shape-outside: border-box;
}
```

{{EmbedLiveSample("border-box", "", "240px")}}

### padding-box

Der `padding-box`-Wert definiert die Form, die durch die äußere Auffüllungskante eingeschlossen wird. Diese Form folgt allen normalen Formregeln des inneren Randradius. Wenn Sie keine Auffüllung haben, ist `padding-box` identisch mit `content-box`.

```html hidden live-sample___padding-box
<div class="box">
  <div class="shape"></div>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery.
  </p>
</div>
```

```css live-sample___padding-box
body {
  font: 1.2em / 1.2 sans-serif;
}
.box {
  width: 70%;
}

.shape {
  background-color: rebeccapurple;
  height: 80px;
  width: 80px;
  padding: 20px;
  margin: 20px;
  border: 10px solid black;
  border-radius: 50%;
  float: left;
  shape-outside: padding-box;
}
```

{{EmbedLiveSample("padding-box", "", "260px")}}

### content-box

Der `content-box`-Wert definiert die Form, die durch die äußere Kanten des Inhalts eingeschlossen wird. Jeder Eckradius dieser Box ist der `border-radius` minus `border-width` und `padding`, oder `0`, je nachdem, welcher Wert größer ist. Dies bedeutet, dass es unmöglich ist, hier einen negativen Wert zu haben.

```html hidden live-sample___content-box
<div class="box">
  <div class="shape"></div>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery.
  </p>
</div>
```

```css live-sample___content-box
body {
  font: 1.2em / 1.2 sans-serif;
}
.box {
  width: 70%;
}

.shape {
  background-color: rebeccapurple;
  height: 80px;
  width: 80px;
  padding: 20px;
  margin: 20px;
  border: 10px solid black;
  border-radius: 50%;
  float: left;
  shape-outside: content-box;
}
```

{{EmbedLiveSample("content-box", "", "250px")}}

## Wann Box-Werte verwendet werden sollten

Die Verwendung von Box-Werten ist eine Möglichkeit, Formen zu erstellen; dies funktioniert jedoch von Natur aus nur mit sehr einfachen Formen, die mit der Eigenschaft `border-radius` definiert werden können. Die oben gezeigten Beispiele zeigen einen solchen Anwendungsfall. Sie können eine kreisförmige Form mit `border-radius` erstellen und dann Text darum herum krümmen.

Mit dieser einfachen Technik können Sie einige interessante Effekte erzielen. In meinem letzten Beispiel in diesem Abschnitt habe ich zwei Elemente links und rechts schweben lassen, wobei jedes einen Borderradius von 100 % in Richtung des dem Text am nächsten gelegenen Bereichs hat.

```html live-sample___bottom-margin-box
<div class="box">
  <div class="shape-left"></div>
  <div class="shape-right"></div>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery.
  </p>
</div>
```

```css live-sample___bottom-margin-box
body {
  font: 1.2em / 1.5 sans-serif;
}

.box {
  text-align: justify;
}

.shape-left,
.shape-right {
  height: 100px;
  width: 100px;
}

.shape-left {
  margin: 0 20px 20px 0;
  border-bottom-right-radius: 100%;
  float: left;
  shape-outside: margin-box;
}
.shape-right {
  margin: 0 20px 20px;
  border-bottom-left-radius: 100%;
  float: right;
  shape-outside: margin-box;
}
```

{{EmbedLiveSample("bottom-margin-box", "", "240px")}}

Für komplexere Formen müssen Sie einen der [grundlegenden Formen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) als Wert verwenden oder Ihre Form aus einem Bild definieren, wie es in anderen Leitfäden in diesem Abschnitt behandelt wird.
