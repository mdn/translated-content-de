---
title: Formen aus Box-Werten
short-title: Box-value shapes
slug: Web/CSS/CSS_shapes/From_box_values
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Eine einfache Möglichkeit, eine Form zu erstellen, besteht darin, einen Wert aus dem [CSS Box-Modell](/de/docs/Web/CSS/CSS_box_model)-Modul zu verwenden. Dieser Artikel erklärt, wie dies möglich ist.

Die im {{cssxref("box-edge")}} erlaubten Box-Werte als Formwert sind:

- `content-box`
- `padding-box`
- `border-box`
- `margin-box`

Auch die Werte von {{cssxref("border-radius")}} werden unterstützt. Das bedeutet, dass Sie einem Element einen abgerundeten Rand geben können, und Ihren Inhalt um die erstellte Form herumfließen lassen können.

## CSS Box-Modell

Die oben aufgeführten Werte entsprechen den verschiedenen Teilen des CSS Box-Modells. Eine Box in CSS hat Inhalt, Polsterung (Padding), Rahmen (Border) und Abstand (Margin).

![Das Box-Modell besteht aus den Margin-, Border-, Padding- und Content-Boxen.](box-model.png)

Durch die Verwendung von Box-Werten für Formen können wir unseren Inhalt um die durch diese Werte definierten Ränder herumlaufen lassen. In jedem der folgenden Beispiele verwende ich ein Element, das Padding, einen Rahmen und einen Abstand definiert hat, damit Sie die verschiedenen Möglichkeiten sehen können, wie der Inhalt fließen wird.

### margin-box

Die `margin-box` ist die Form, die durch die äußere Randkante definiert wird und den Eckradius der Form einschließt, sofern {{cssxref("border-radius")}} bei der Definition des Elements verwendet wurde.

Im folgenden Beispiel haben wir ein kreisförmiges, lila Element, das ein {{htmlelement("div")}} mit einer Höhe, Breite und Hintergrundfarbe ist. Die Eigenschaft `border-radius` wurde verwendet, um einen Kreis zu erstellen, indem `border-radius: 50%` gesetzt wurde. Da das Element einen Abstand hat, können Sie sehen, dass der Inhalt um die kreisförmige Form und den darauf angewandten Abstand herumfließt.

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

Der `border-box`-Wert ist die Form, die durch die äußere Rahmenkante definiert wird. Diese Form folgt allen normalen Rahmenradius-Formregeln für die Außenseite des Rahmens. Sie haben immer noch einen Rahmen, auch wenn Sie die CSS-Eigenschaft {{cssxref("border")}} nicht verwendet haben. In diesem Fall entspricht er dem `padding-box`, der Form, die durch die äußere Polsterkante definiert wird.

Im folgenden Beispiel können Sie sehen, wie der Text jetzt der durch die Grenze geschaffenen Linie folgt. Ändern Sie die Rahmengröße, und der Inhalt wird ihr folgen.

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

Der `padding-box`-Wert definiert die Form, die durch die äußere Polsterkante eingeschlossen wird. Diese Form folgt allen normalen Rahmenradius-Formregeln für die Innenseite des Rahmens. Wenn Sie keine Polsterung haben, dann ist `padding-box` dasselbe wie `content-box`.

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

Der `content-box`-Wert definiert die Form, die durch die äußere Inhaltkante eingeschlossen wird. Jeder Eckradius dieser Box ist das `border-radius` minus `border-width` und `padding`, oder `0`, je nachdem, welcher Wert größer ist. Das bedeutet, dass es hier unmöglich ist, einen negativen Wert zu haben.

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

## Wann Box-Werte verwenden

Die Verwendung von Box-Werten ist eine Möglichkeit, Formen zu erstellen; dies funktioniert jedoch nur mit sehr grundlegenden Formen, die mit der Eigenschaft `border-radius` definiert werden können. Die oben gezeigten Beispiele zeigen einen solchen Anwendungsfall. Sie können eine kreisförmige Form mit `border-radius` erstellen und dann Text darum herum biegen.

Mit dieser einfachen Technik können Sie einige interessante Effekte erzielen. In meinem letzten Beispiel in diesem Abschnitt habe ich zwei Elemente links und rechts schweben lassen, wobei jedem Element ein Rahmenradius von 100% in die Richtung gegeben wurde, die dem Text am nächsten liegt.

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

Für komplexere Formen müssen Sie einen der [Grundformen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) als Wert verwenden oder Ihre Form aus einem Bild definieren, wie in anderen Leitfäden in diesem Abschnitt behandelt.
