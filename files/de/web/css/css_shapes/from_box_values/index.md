---
title: Formen aus Box-Werten
slug: Web/CSS/CSS_shapes/From_box_values
l10n:
  sourceCommit: dbc32052ef186252a1211d296ff60a9b5e3e8d74
---

{{CSSRef}}

Ein einfacher Weg, eine Form zu erstellen, besteht darin, einen Wert aus dem [CSS Box Model](/de/docs/Web/CSS/CSS_box_model)-Modul zu verwenden. Dieser Artikel erklärt, wie das geht.

Die {{cssxref("box-edge")}} Box-Werte, die als Formwert zulässig sind, sind:

- `content-box`
- `padding-box`
- `border-box`
- `margin-box`

Die {{cssxref("border-radius")}}-Werte werden ebenfalls unterstützt. Dies bedeutet, dass Sie einem Element eine gekrümmte Umrandung geben und den Inhalt um die erstellte Form fließen lassen können.

## CSS-Box-Modell

Die oben aufgeführten Werte entsprechen den verschiedenen Teilen des CSS-Box-Modells. Eine Box in CSS hat Inhalte, Innenabstand, Rahmen und Außenabstand.

![Das Box-Modell besteht aus den Margin, Border, Padding und Content-Boxen.](box-model.png)

Durch die Verwendung von Box-Werten für Formen können wir unseren Inhalt um die durch diese Werte definierten Kanten wickeln. In jedem der folgenden Beispiele verwende ich ein Element, das Innenabstand, eine Umrandung und einen Außenabstand definiert hat, damit Sie die unterschiedlichen Wege sehen, wie der Inhalt fließen wird.

### margin-box

Die `margin-box` ist die durch den äußeren Rand definierten Form und umfasst den Eckradius der Form, sollte {{cssxref("border-radius")}} zur Definition des Elements verwendet worden sein.

Im folgenden Beispiel haben wir ein kreisförmiges lila Element, das ein {{htmlelement("div")}} mit Höhe, Breite und Hintergrundfarbe ist. Die Eigenschaft `border-radius` wurde verwendet, um einen Kreis zu erstellen, indem `border-radius: 50%` gesetzt wurde. Da das Element einen Außenabstand hat, können Sie sehen, dass der Inhalt um die kreisförmige Form und den darauf angewendeten Außenabstand herumfließt.

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

Der `border-box`-Wert ist die Form, die durch die äußere Kante des Rahmens definiert wird. Diese Form folgt den normalen Regeln zur Formung von Rahmenradien für die Außenseite des Rahmens. Sie haben weiterhin eine Umrandung, auch wenn Sie die CSS-Eigenschaft {{cssxref("border")}} nicht verwendet haben. In diesem Fall entspricht es der `padding-box`, der Form, die durch die äußere Polsterrand definiert ist.

Im Beispiel unten können Sie sehen, wie der Text jetzt der durch die Umrandung geschaffenen Linie folgt. Ändern Sie die Rahmengröße, und der Inhalt folgt dieser.

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

Der `padding-box`-Wert definiert die durch die äußere Polsterrand eingeschlossene Form. Diese Form folgt den normalen Regeln zur Formung von Rahmenradien für die Innenseite des Rahmens. Wenn Sie keinen Innenabstand haben, ist `padding-box` dasselbe wie `content-box`.

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

Der `content-box`-Wert definiert die durch die äußere Inhaltkante eingeschlossene Form. Jeder Eckradius dieser Box ist der `border-radius` abzüglich der `border-width` und `padding`, oder `0`, je nachdem, welcher Wert größer ist. Das bedeutet, dass es hier unmöglich ist, einen negativen Wert zu haben.

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

Die Verwendung von Box-Werten ist ein einfacher Weg, um Formen zu erstellen; dies funktioniert jedoch naturgemäß nur mit sehr einfachen Formen, die mit der gut unterstützten Eigenschaft `border-radius` definiert werden können. Die oben gezeigten Beispiele zeigen einen solchen Anwendungsfall. Sie können eine kreisförmige Form mit `border-radius` erstellen und dann Text darum herumkrümmen.

Mit dieser einfachen Technik können Sie interessante Effekte erzielen. In meinem letzten Beispiel dieses Abschnitts habe ich zwei Elemente links und rechts ausgerichtet und jedem einen Umkreisradius von 100% in die Richtung, die dem Text am nächsten liegt, gegeben.

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

Für komplexere Formen müssen Sie einen der [Basisformen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes) als Wert verwenden oder Ihre Form aus einem Bild definieren, wie in anderen Leitfäden in diesem Abschnitt behandelt.
