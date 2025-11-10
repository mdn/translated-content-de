---
title: Formen aus Box-Werten
short-title: Box-Wert Formen
slug: Web/CSS/Guides/Shapes/From_box_values
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Eine einfache Methode, eine Form zu erstellen, ist die Verwendung eines Werts aus dem [CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model) Modul. Dieser Artikel erklärt, wie das funktioniert.

Die als Formwert zulässigen {{cssxref("box-edge")}} Box-Werte sind:

- `content-box`
- `padding-box`
- `border-box`
- `margin-box`

Die {{cssxref("border-radius")}} Werte werden ebenfalls unterstützt. Das bedeutet, dass Sie einem Element eine abgerundete Grenze geben können und Ihren Inhalt um die erstellte Form fließen lassen können.

## CSS-Boxmodell

Die oben aufgeführten Werte entsprechen den verschiedenen Teilen des CSS-Boxmodells. Ein Kasten in CSS hat Inhalt, Polsterung, Rand und Abstand.

![Das Boxmodell besteht aus den Margin-, Border-, Padding- und Content-Boxen.](box-model.png)

Durch die Verwendung von Box-Werten für Formen können wir unseren Inhalt um die durch diese Werte definierten Kanten wickeln. In jedem der untenstehenden Beispiele benutze ich ein Element, das Polsterung, einen Rand und einen Abstand definiert hat, damit Sie die verschiedenen Möglichkeiten sehen können, wie sich der Inhalt bewegt.

### margin-box

Die `margin-box` ist die Form, die durch den äußeren Margenrand definiert wird und den Eckradius der Form einschließt, sollte {{cssxref("border-radius")}} bei der Definition des Elements verwendet worden sein.

Im Beispiel unten haben wir ein kreisförmiges lila Element, das ein {{htmlelement("div")}} mit einer Höhe, Breite und Hintergrundfarbe ist. Die `border-radius` Eigenschaft wurde verwendet, um einen Kreis zu erstellen, indem `border-radius: 50%` gesetzt wurde. Da das Element einen Abstand hat, können Sie sehen, dass der Inhalt um die kreisförmige Form und den darauf angewandten Abstand herumfließt.

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

Der `border-box` Wert ist die Form, die durch den äußeren Rändernrand definiert wird. Diese Form folgt allen normalen Gestaltungsregeln für die äußere Ränderform. Sie haben immer einen Rand, auch wenn Sie nicht die CSS-{{cssxref("border")}} Eigenschaft verwendet haben. In diesem Fall wird es dasselbe sein wie `padding-box`, die Form, die durch den äußeren Polsterrand definiert wird.

Im Beispiel unten können Sie sehen, wie der Text jetzt der durch den Rand erstellten Linie folgt. Ändern Sie die Randgröße, und der Inhalt wird ihr folgen.

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

Der `padding-box` Wert definiert die Form, die durch den äußeren Polsterrand eingeschlossen wird. Diese Form folgt allen normalen Gestaltungsregeln für den inneren Rändernrand. Wenn Sie keine Polsterung haben, ist `padding-box` dasselbe wie `content-box`.

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

Der `content-box` Wert definiert die Form, die durch den äußeren Inhaltsrand eingeschlossen wird. Jeder Eckradius dieser Box ist der `border-radius` minus der `border-width` und `padding`, oder `0`, je nachdem, welcher größer ist. Das bedeutet, dass es hier unmöglich ist, einen negativen Wert zu haben.

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

## Wann man Box-Werte verwenden sollte

Die Verwendung von Box-Werten ist eine Möglichkeit, Formen zu erstellen; das funktioniert natürlich nur mit sehr grundlegenden Formen, die mit der `border-radius` Eigenschaft definiert werden können. Die oben gezeigten Beispiele zeigen einen solchen Anwendungsfall. Sie können eine kreisförmige Form mit `border-radius` erstellen und dann den Text um sie herum krümmen.

Mit dieser einfachen Technik können Sie einige interessante Effekte erzielen. In meinem letzten Beispiel dieses Abschnitts habe ich zwei Elemente links und rechts schweben gelassen und jedem einen Border-Radius von 100% in Richtung des Textes gegeben.

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

Für komplexere Formen müssen Sie einen der [Grundformen](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside) als Wert verwenden oder Ihre Form aus einem Bild definieren, wie es in anderen Leitfäden in diesem Abschnitt behandelt wird.
