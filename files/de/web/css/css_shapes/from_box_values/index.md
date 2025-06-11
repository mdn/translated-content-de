---
title: Formen aus Box-Werten
short-title: Box-Werte für Formen
slug: Web/CSS/CSS_shapes/From_box_values
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Eine einfache Möglichkeit, eine Form zu erstellen, besteht darin, einen Wert aus dem [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model)-Modul zu verwenden. Dieser Artikel erklärt, wie man das macht.

Die erlaubten {{cssxref("box-edge")}} Box-Werte als Formwert sind:

- `content-box`
- `padding-box`
- `border-box`
- `margin-box`

Auch die {{cssxref("border-radius")}} Werte werden unterstützt. Das bedeutet, dass Sie einem Element eine gebogene Grenze geben und Ihren Inhalt um die erstellte Form fließen lassen können.

## CSS-Box-Modell

Die oben aufgeführten Werte entsprechen den verschiedenen Teilen des CSS-Box-Modells. Eine Box in CSS hat Inhalt, Auffüllung (Padding), Rahmen und Rand (Margin).

![Das Box-Modell besteht aus den Rand-, Rahmen-, Auffüllungs- und Inhaltsboxen.](box-model.png)

Durch die Verwendung von Box-Werten für Formen können wir unseren Inhalt um die durch diese Werte definierten Kanten wickeln. In jedem der folgenden Beispiele verwende ich ein Element, das Auffüllung, einen Rahmen und einen Rand definiert hat, damit Sie die verschiedenen Arten sehen können, auf die sich der Inhalt bewegt.

### margin-box

Die `margin-box` ist die Form, die durch die äußere Randkante definiert wird und umfasst den Eckradius der Form, sollte {{cssxref("border-radius")}} bei der Definition des Elements verwendet worden sein.

Im folgenden Beispiel haben wir ein kreisförmiges, violettes Element, das ein {{htmlelement("div")}} mit einer festgelegten Höhe, Breite und Hintergrundfarbe ist. Die `border-radius` Eigenschaft wurde verwendet, um einen Kreis zu erstellen, indem `border-radius: 50%` gesetzt wurde. Da das Element einen Rand (Margin) hat, können Sie sehen, dass der Inhalt um die kreisförmige Form und den darauf angewendeten Rand fließt.

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

Der `border-box` Wert ist die Form, die durch die äußere Rahmenskante definiert wird. Diese Form folgt allen normalen Regeln für die Border-Radius-Formung der Außenkante des Rahmens. Sie haben weiterhin einen Rahmen, selbst wenn Sie nicht die CSS {{cssxref("border")}} Eigenschaft verwendet haben. In diesem Fall entspricht er der `padding-box`, der Form, die durch die äußere Auffüllungskante definiert wird.

Im folgenden Beispiel sehen Sie, wie der Text nun der durch den Rahmen erstellten Linie folgt. Ändern Sie die Rahmengröße, und der Inhalt wird dieser folgen.

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

Der `padding-box` Wert definiert die Form, die durch die äußere Auffüllungskante eingeschlossen wird. Diese Form folgt allen normalen Regeln für die Border-Radius-Formung der Innenkante des Rahmens. Wenn Sie keine Auffüllung haben, entspricht `padding-box` der `content-box`.

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

Der `content-box` Wert definiert die Form, die durch die äußere Inhaltkante eingeschlossen wird. Jeder Eckradius dieser Box ist der `border-radius`, abzüglich `border-width` und `padding`, oder `0`, je nachdem, welcher Wert größer ist. Das bedeutet, dass hier kein negativer Wert möglich ist.

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

## Wann sollten Box-Werte verwendet werden

Die Verwendung von Box-Werten ist eine Möglichkeit, Formen zu erstellen; allerdings funktioniert das natürlich nur mit sehr einfachen Formen, die sich mit der `border-radius` Eigenschaft definieren lassen. Die gezeigten Beispiele oben zeigen einen solchen Anwendungsfall. Sie können eine kreisförmige Form mit `border-radius` erstellen und dann den Text darum herum fließen lassen.

Mit dieser einfachen Technik können Sie einige interessante Effekte erzeugen. In meinem letzten Beispiel in diesem Abschnitt habe ich zwei Elemente links und rechts floaten lassen, wobei ich jedem einen Eckradius von 100% in Richtung des Textes gegeben habe.

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

Für komplexere Formen müssen Sie einen der [Grundformen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) als Wert verwenden oder Ihre Form aus einem Bild definieren, wie es in anderen Leitfäden in diesem Abschnitt behandelt wird.
