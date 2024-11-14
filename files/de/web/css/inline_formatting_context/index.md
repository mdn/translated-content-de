---
title: Inline-Formatierungskontext
slug: Web/CSS/Inline_formatting_context
l10n:
  sourceCommit: 5755d6dfbac15abc29ddcd924cee110c4139b073
---

{{CSSRef}}

Dieser Artikel erklärt den Inline-Formatierungskontext.

## Grundkonzepte

Der Inline-Formatierungskontext ist Teil der visuellen Darstellung einer Webseite. Inline-Boxen werden nacheinander in der Richtung angeordnet, in der die Sätze im verwendeten Schreibmodus verlaufen:

- In einem horizontalen Schreibmodus werden Boxen horizontal, beginnend von links, angeordnet.
- In einem vertikalen Schreibmodus würden sie vertikal, beginnend am oberen Rand, angeordnet werden.

Im folgenden Beispiel sind die beiden {{HTMLElement("div")}}-Elemente mit den schwarzen Rändern Teil eines [Block-Formatierungskontextes](/de/docs/Web/CSS/CSS_display/Block_formatting_context), während innerhalb jeder Box die Wörter an einem Inline-Formatierungskontext teilnehmen. Die Wörter im horizontale Schreibmodus verlaufen horizontal, während Wörter im vertikalen Schreibmodus vertikal verlaufen.

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

Boxen, die eine Zeile bilden, werden von einem rechteckigen Bereich, genannt "Line Box", umschlossen. Diese Box wird groß genug sein, um alle Inline-Boxen in dieser Zeile zu enthalten; wenn im Inline-Modus kein Platz mehr ist, wird eine weitere Zeile erstellt. Daher ist ein Absatz eine Reihe von Inline-Line-Boxen, die in Blockrichtung gestapelt sind.

Wenn eine Inline-Box geteilt wird, haben Ränder, Rahmen und Abstände dort, wo die Teilung stattfindet, keinen visuellen Effekt. Im nächsten Beispiel gibt es ein {{HTMLElement("span")}}-Element, das eine Reihe von Wörtern umschließt, die auf zwei Zeilen umbrechen. Der Rahmen auf dem `<span>` bricht an der Umbruchstelle.

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

Ränder, Rahmen und Abstände in Inline-Richtung werden berücksichtigt. Im untenstehenden Beispiel können Sie sehen, wie der Rand, der Rahmen und der Abstand auf das Inline-`<span>`-Element angewendet werden.

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
> Ich verwende die logischen, flussrelativen Eigenschaften — {{cssxref("padding-inline-start")}} anstelle von {{cssxref("padding-left")}} — damit sie in der Inline-Dimension funktionieren, unabhängig davon, ob der Text horizontal oder vertikal ist. Lesen Sie mehr über diese Eigenschaften in [Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values).

## Ausrichtung in Blockrichtung

Inline-Boxen können in der Blockrichtung auf verschiedene Weisen ausgerichtet werden, unter Verwendung der {{cssxref("vertical-align")}}-Eigenschaft, die in vertikalen Schreibmodi auf der Blockachse (daher überhaupt nicht vertikal!) ausgerichtet wird. Im untenstehenden Beispiel macht der große Text die Line-Box des ersten Satzes größer, daher kann die `vertical-align`-Eigenschaft verwendet werden, um die Inline-Boxen beiderseits davon auszurichten. Ich habe den Wert `top` verwendet, versuchen Sie ihn auf `middle`, `bottom` oder `baseline` zu ändern.

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

## Ausrichtung in Inline-Richtung

Wenn in Inline-Richtung zusätzlicher Platz vorhanden ist, kann die {{cssxref("text-align")}}-Eigenschaft verwendet werden, um die Inline-Boxen innerhalb ihrer Line-Box auszurichten. Versuchen Sie, den Wert von `text-align` unten auf `end` zu ändern.

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

Line-Boxen haben normalerweise die gleiche Größe in Inline-Richtung, daher die gleiche Breite, wenn im horizontalen Schreibmodus gearbeitet wird, oder Höhe, wenn im vertikalen Schreibmodus gearbeitet wird. Wenn jedoch ein {{cssxref("float")}} innerhalb desselben Block-Formatierungskontextes vorhanden ist, führt das Float dazu, dass die Line-Boxen, die das Float umfließen, kürzer werden.

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

- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)
