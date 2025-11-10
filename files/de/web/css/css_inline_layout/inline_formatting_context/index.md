---
title: Inline-Formatierungskontext
slug: Web/CSS/CSS_inline_layout/Inline_formatting_context
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Dieser Leitfaden erklärt den Inline-Formatierungskontext.

## Grundlegende Konzepte

Der Inline-Formatierungskontext ist Teil der visuellen Darstellung einer Webseite. Inline-Boxen werden nacheinander in der Richtung des Satzverlaufs im verwendeten Schreibmodus angeordnet:

- In einem horizontalen Schreibmodus werden Boxen horizontal, beginnend auf der linken Seite, angeordnet.
- In einem vertikalen Schreibmodus würden sie vertikal, beginnend oben, angeordnet.

Im folgenden Beispiel sind die zwei {{HTMLElement("div")}}-Elemente mit den schwarzen Rändern Teil eines [Block-Formatierungskontexts](/de/docs/Web/CSS/Guides/Display/Block_formatting_context), während innerhalb jeder Box die Wörter an einem Inline-Formatierungskontext teilnehmen. Die Wörter im horizontalen Schreibmodus verlaufen horizontal, während die Wörter im vertikalen Schreibmodus vertikal verlaufen.

```html live-sample___inline
<div class="example horizontal">One Two Three</div>
<div class="example vertical">Four Five Six</div>
```

```css live-sample___inline
body {
  font: 1.2em sans-serif;
}
.example {
  border: 5px solid black;
  margin: 20px;
}

.horizontal {
  writing-mode: horizontal-tb;
}
.vertical {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("inline", "", "220px")}}

Boxen, die eine Linie bilden, sind von einem rechteckigen Bereich, dem sogenannten Linienkasten, umschlossen. Dieser Kasten wird groß genug sein, um alle Inline-Boxen in dieser Linie zu enthalten; wenn im Inline-Dimension kein weiterer Platz ist, wird eine weitere Linie erstellt. Daher ist ein Absatz eine Reihe von Inline-Linienkästen, die in der Block-Dimension gestapelt sind.

Wenn eine Inline-Box geteilt wird, haben Ränder, Rahmen und Abstände dort, wo die Teilung erfolgt, keine visuelle Wirkung. Im nächsten Beispiel gibt es ein {{HTMLElement("span")}}-Element, das eine Reihe von Wörtern umschließt, die sich auf zwei Linien verteilen. Der Rahmen auf dem `<span>` bricht an der Umbruchstelle.

```html live-sample___break
<div class="example">
  Before that night—
  <span
    >a memorable night, as it was to prove— hundreds of millions of people</span
  >
  had watched the rising smoke-wreaths of their fires without drawing any
  special inspiration from the fact.
</div>
```

```css live-sample___break
body {
  font: 1.2em sans-serif;
}
.example {
  border: 5px solid black;
  margin: 20px;
}

span {
  border: 5px solid rebeccapurple;
}
```

{{EmbedLiveSample("break")}}

Ränder, Rahmen und Abstände in der Inline-Dimension werden respektiert. Im folgenden Beispiel können Sie sehen, wie der Rand, der Rahmen und der Abstand auf dem Inline-`<span>`-Element hinzugefügt werden.

```html live-sample___mbp
<div class="example horizontal">One <span>Two</span> Three</div>
<div class="example vertical">Four <span>Five</span> Six</div>
```

```css live-sample___mbp
body {
  font: 1.2em sans-serif;
}

.example {
  border: 5px solid black;
  margin: 20px;
}

span {
  border: 5px solid rebeccapurple;
  padding-inline-start: 20px;
  padding-inline-end: 40px;
  margin-inline-start: 30px;
  margin-inline-end: 10px;
}
.horizontal {
  writing-mode: horizontal-tb;
}

.vertical {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("mbp", "", "340px")}}

> [!NOTE]
> Ich verwende die logischen, flussrelativen Eigenschaften — {{cssxref("padding-inline-start")}} anstelle von {{cssxref("padding-left")}} — damit sie in der Inline-Dimension funktionieren, unabhängig davon, ob der Text horizontal oder vertikal ist. Lesen Sie mehr über diese Eigenschaften in [Logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values).

## Ausrichtung in der Block-Dimension

Inline-Boxen können in der Block-Dimension auf verschiedene Weise ausgerichtet werden, indem die {{cssxref("vertical-align")}}-Eigenschaft verwendet wird, die auf der Block-Achse in vertikalen Schreibmodi ausrichtet (daher überhaupt nicht vertikal!). Im folgenden Beispiel macht der große Text den Linienkasten des ersten Satzes größer, daher kann die `vertical-align`-Eigenschaft verwendet werden, um die Inline-Boxen auf beiden Seiten davon auszurichten. Ich habe den Wert `top` verwendet; versuchen Sie, ihn auf `middle`, `bottom` oder `baseline` zu ändern.

```html live-sample___align
<div class="example horizontal">
  Before that night—<span>a memorable night</span>, as it was to prove—hundreds
  of millions of people had watched the rising smoke-wreaths of their fires
  without drawing any special inspiration from the fact.
</div>

<div class="example vertical">
  Before that night—<span>a memorable night</span>, as it was to prove—hundreds
  of millions of people had watched the rising smoke-wreaths of their fires
  without drawing any special inspiration from the fact.
</div>
```

```css live-sample___align
body {
  font: 1.2em sans-serif;
}

span {
  font-size: 200%;
  vertical-align: top;
}

.example {
  border: 5px solid black;
  margin: 20px;
  inline-size: 400px;
}

.horizontal {
  writing-mode: horizontal-tb;
}

.vertical {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("align", "", "640px")}}

## Ausrichtung in der Inline-Dimension

Falls es zusätzlichen Platz in der Inline-Dimension gibt, kann die {{cssxref("text-align")}}-Eigenschaft verwendet werden, um die Inline-Boxen innerhalb ihres Linienkastens auszurichten. Versuchen Sie, den Wert von `text-align` unten auf `end` zu ändern.

```html live-sample___text-align
<div class="example horizontal">One Two Three</div>
<div class="example vertical">Four Five Six</div>
```

```css hidden live-sample___text-align
body {
  font: 1.2em sans-serif;
}

.example {
  border: 5px solid black;
  margin: 20px;
}

.horizontal {
  writing-mode: horizontal-tb;
}

.vertical {
  writing-mode: vertical-rl;
}
```

```css live-sample___text-align
.example {
  text-align: center;
  inline-size: 250px;
}
```

{{EmbedLiveSample("text-align", "", "350px")}}

## Effekt von Floats

Linienkästen haben normalerweise die gleiche Größe in der Inline-Dimension, daher die gleiche Breite, wenn im horizontalen Schreibmodus gearbeitet wird, oder Höhe, wenn im vertikalen Schreibmodus gearbeitet wird. Wenn jedoch ein {{cssxref("float")}} innerhalb desselben Block-Formatierungskontexts vorhanden ist, führt der Float dazu, dass die Linienkästen, die den Float umschließen, kürzer werden.

```html live-sample___float
<div class="box">
  <div class="float">I am a floated box!</div>
  <p>I am content inside the container.</p>
</div>
```

```css live-sample___float
body {
  font: 1.2em sans-serif;
}

.box {
  background-color: rgb(224 206 247);
  border: 5px solid rebeccapurple;
}

.float {
  float: left;
  width: 250px;
  height: 150px;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("float", "", "200px")}}

## Siehe auch

- [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context)
- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
