---
title: Fließlayout und Schreibrichtungen
slug: Web/CSS/CSS_display/Flow_layout_and_writing_modes
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

{{CSSRef}}

Die CSS 2.1-Spezifikation, die beschreibt, wie normaler Fluss funktioniert, geht von einem horizontalen Schreibmodus aus. [Layout]-Eigenschaften (/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow) sollten auf die gleiche Weise in vertikalen Schreibrichtungen funktionieren. In diesem Leitfaden betrachten wir, wie sich das Fließlayout bei Verwendung mit verschiedenen Dokument-Schreibrichtungen verhält.

Dies ist kein umfassender Leitfaden zur Verwendung von Schreibrichtungen in CSS. Ziel ist es hier, die Bereiche zu dokumentieren, in denen das Fließlayout möglicherweise unerwartet mit Schreibrichtungen interagiert. Der Abschnitt [Siehe auch](#siehe_auch) bietet Links zu weiteren Ressourcen zu Schreibrichtungen.

## Spezifikation der Schreibrichtungen

Die CSS Writing Modes Level 3-Spezifikation definiert die Auswirkungen einer Änderung des Dokument-Schreibmodus auf das Fließlayout. In der Einführung zu den Schreibrichtungen [heißt es in der Spezifikation](https://drafts.csswg.org/css-writing-modes-3/#text-flow),

> "Ein Schreibmodus in CSS wird durch die Eigenschaften {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} bestimmt. Er wird hauptsächlich im Hinblick auf seine Inline-Basisrichtung und die Blockflussrichtung definiert."

Die Spezifikation definiert die _Inline-Basisrichtung_ als die Richtung, in der Inhalte in einer Zeile angeordnet sind. Dies definiert den Anfang und das Ende der Inlinerichtung. Der Anfang ist dort, wo Sätze beginnen, und das Ende ist dort, wo eine Textzeile endet, bevor sie in eine neue Zeile umbrochen würde.

Die _Blockflussrichtung_ ist die Richtung, in der Kästen, beispielsweise Absätze, in diesem Schreibmodus gestapelt werden. Die CSS-Eigenschaft `writing-mode` steuert die Blockflussrichtung. Wenn Sie Ihre Seite oder einen Teil Ihrer Seite auf `vertical-lr` ändern möchten, können Sie `writing-mode: vertical-lr` auf dem Element setzen, und dies wird die Richtung der Blöcke und damit auch die Inlinerichtung ändern.

Während bestimmte Sprachen einen bestimmten Schreibmodus oder eine bestimmte Textausrichtung verwenden, können wir diese Eigenschaften auch für kreative Effekte nutzen, wie zum Beispiel das vertikale Darstellen einer Überschrift.

```html live-sample___creative-use
<div class="box">
  <h1>A heading</h1>
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

```css live-sample___creative-use
body {
  font: 1.2em sans-serif;
}
h1 {
  writing-mode: vertical-lr;
  float: left;
}
```

{{EmbedLiveSample("creative-use", "", "220px")}}

## Blockflussrichtung

Die {{cssxref("writing-mode")}}-Eigenschaft akzeptiert die Werte `horizontal-tb`, `vertical-rl` und `vertical-lr`. Diese Werte steuern die Richtung, in der Blöcke auf der Seite fließen. Der Anfangswert ist `horizontal-tb`, was eine von oben nach unten verlaufende Blockflussrichtung mit einer horizontalen Inlinerichtung bedeutet. Links-nach-rechts-Sprachen wie Englisch und rechts-nach-links-Sprachen wie Arabisch sind alle `horizontal-tb`.

Das folgende Beispiel zeigt Blöcke, die den initialen Wert `horizontal-tb` explizit verwenden:

```html live-sample___horizontal-tb
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery.
  </p>
  <p>
    Before that night—a memorable night, as it was to prove—hundreds of millions
    of people had watched the rising smoke-wreaths of their fires without
    drawing any special inspiration from the fact.
  </p>
</div>
```

```css live-sample___horizontal-tb
body {
  font: 1.2em sans-serif;
}
.box {
  writing-mode: horizontal-tb;
}
```

{{EmbedLiveSample("horizontal-tb", "", "240px")}}

Vergleichen Sie dies mit dem Wert `vertical-rl`, der Ihnen eine von rechts nach links verlaufende Blockflussrichtung mit einer vertikalen Inlinerichtung bietet, wie im nächsten Beispiel gezeigt.

```html hidden live-sample___vertical-rl
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery.
  </p>
  <p>
    Before that night—a memorable night, as it was to prove—hundreds of millions
    of people had watched the rising smoke-wreaths of their fires without
    drawing any special inspiration from the fact.
  </p>
</div>
```

```css live-sample___vertical-rl
body {
  font: 1.2em sans-serif;
}
.box {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("vertical-rl", "", "300px")}}

Das letzte Beispiel demonstriert den dritten möglichen Wert für `writing-mode` — `vertical-lr`. Dies bietet Ihnen eine von links nach rechts verlaufende Blockflussrichtung und eine vertikale Inlinerichtung.

```html hidden live-sample___vertical-lr
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery.
  </p>
  <p>
    Before that night—a memorable night, as it was to prove—hundreds of millions
    of people had watched the rising smoke-wreaths of their fires without
    drawing any special inspiration from the fact.
  </p>
</div>
```

```css live-sample___vertical-lr
body {
  font: 1.2em sans-serif;
}
.box {
  writing-mode: vertical-lr;
}
```

{{EmbedLiveSample("vertical-lr", "", "300px")}}

## Verschachtelte Schreibrichtungen

Wenn einer verschachtelten Box ein anderer Schreibmodus als ihrem Elternteil zugewiesen wird, wird eine Inline-Level-Box so angezeigt, als hätte sie `display: inline-block`.

```html live-sample___inline-change-mode
<div class="box">
  <p>
    One <span>November</span> night in the year 1782, so the story runs, two
    brothers sat over their winter fire in the little French town of Annonay,
    watching the grey smoke-wreaths from the hearth curl up the wide chimney.
    Their names were Stephen and Joseph Montgolfier, they were papermakers by
    trade, and were noted as possessing thoughtful minds and a deep interest in
    all scientific knowledge and new discovery.
  </p>
</div>
```

```css live-sample___inline-change-mode
body {
  font: 1.2em sans-serif;
}
.box {
  writing-mode: vertical-rl;
}
.box span {
  writing-mode: horizontal-tb;
  padding: 10px;
  border: 1px solid rebeccapurple;
}
```

{{EmbedLiveSample("inline-change-mode", "", "240px")}}

Eine Block-Level-Box wird einen neuen Blockformatierungskontext etablieren, was bedeutet, dass wenn ihr innerer Anzeigetyp `flow` wäre, sie einen berechneten Anzeigetyp von `flow-root` erhalten würde. Dies wird im nächsten Beispiel gezeigt, wo die Box, die als `horizontal-tb` angezeigt wird, ein Float enthält, das aufgrund seines Elternteils, der einen neuen BFC (Blockformatierungskontext) etabliert, enthalten ist.

```html live-sample___block-change-mode
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney.
  </p>

  <div>
    <div class="float"></div>
    This box should establish a new BFC.
  </div>

  <p>
    Their names were Stephen and Joseph Montgolfier, they were papermakers by
    trade, and were noted as possessing thoughtful minds and a deep interest in
    all scientific knowledge and new discovery.
  </p>
</div>
```

```css live-sample___block-change-mode
body {
  font: 1.2em sans-serif;
}
.box {
  writing-mode: vertical-rl;
}
.box > div {
  writing-mode: horizontal-tb;
  padding: 10px;
  border: 1px solid rebeccapurple;
}
.float {
  width: 100px;
  height: 150px;
  background-color: rebeccapurple;
  float: left;
}
```

{{EmbedLiveSample("block-change-mode", "", "500px")}}

## Ersetzte Elemente

Ersetzte Elemente wie Bilder ändern ihre Ausrichtung nicht basierend auf der `writing-mode` Eigenschaft. Ersetzte Elemente wie Formularelemente, die Text enthalten, sollten jedoch dem verwendeten Schreibmodus entsprechen.

```html live-sample___replaced
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney.
  </p>

  <img
    alt="a colorful hot air balloon against a clear sky"
    src="https://mdn.github.io/shared-assets/images/examples/balloon.jpg" />

  <p>
    Their names were Stephen and Joseph Montgolfier, they were papermakers by
    trade, and were noted as possessing thoughtful minds and a deep interest in
    all scientific knowledge and new discovery.
  </p>
</div>
```

```css live-sample___replaced
body {
  font: 1.2em sans-serif;
}
.box {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("replaced", "", "340px")}}

## Logische Eigenschaften und Werte

Sobald Sie in anderen Schreibrichtungen als `horizontal-tb` arbeiten, erscheinen viele der Eigenschaften und Werte, die den physischen Dimensionen des Bildschirms zugeordnet sind, seltsam. Wenn Sie zum Beispiel einem Kasten eine Breite von 100px geben, würde das in `horizontal-tb` die Größe in der Inlinerichtung steuern. In `vertical-lr` steuert es die Größe in der Blockrichtung, da es sich nicht mit dem Text dreht.

```html live-sample___width
<div class="box">
  <div class="box1">Box 1</div>
  <div class="box2">Box 2</div>
</div>
```

```css live-sample___width
body {
  font: 1.2em sans-serif;
}
.box1 {
  writing-mode: horizontal-tb;
  border: 5px solid rebeccapurple;
  width: 100px;
  margin: 10px;
}
.box2 {
  writing-mode: vertical-lr;
  border: 5px solid rebeccapurple;
  width: 100px;
  margin: 10px;
}
```

{{EmbedLiveSample("width")}}

Daher haben wir neue Eigenschaften von {{cssxref("block-size")}} und {{cssxref("inline-size")}}. Wenn wir unserem Block eine `inline-size` von 100px geben, spielt es keine Rolle, ob wir uns in einem horizontalen oder vertikalen Schreibmodus befinden, `inline-size` wird immer die Größe in der Inlinerichtung bedeuten.

```html live-sample___inline-size
<div class="box">
  <div class="box1">Box 1</div>
  <div class="box2">Box 2</div>
</div>
```

```css live-sample___inline-size
body {
  font: 1.2em sans-serif;
}
.box1 {
  writing-mode: horizontal-tb;
  border: 5px solid rebeccapurple;
  inline-size: 100px;
  margin: 10px;
}
.box2 {
  writing-mode: vertical-lr;
  border: 5px solid rebeccapurple;
  inline-size: 100px;
  margin: 10px;
}
```

{{EmbedLiveSample("inline-size", "", "200px")}}

Das [CSS-Modul für logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) enthält logische Versionen der Eigenschaften, die Ränder, Abstände und Rahmen steuern, sowie andere Zuordnungen für Dinge, die wir typischerweise durch physische Richtungsangaben spezifiziert haben.

## Zusammenfassung

In den meisten Fällen funktioniert das Fließlayout wie erwartet, wenn der Schreibmodus des Dokuments oder von Teilen des Dokuments geändert wird. Dies kann verwendet werden, um vertikale Sprachen korrekt zu setzen oder aus kreativen Gründen. CSS erleichtert dies durch die Einführung von logischen Eigenschaften und Werten, sodass beim Arbeiten in einem vertikalen Schreibmodus die Größenbestimmung auf der Inline- und Blockgröße des Elements basieren kann. Dies wird nützlich sein beim Erstellen von Komponenten, die in verschiedenen Schreibrichtungen funktionieren können.

## Siehe auch

- [Schreibrichtungen](/de/docs/Web/CSS/CSS_writing_modes)
- [Schreibrichtungen und CSS-Layout](https://www.smashingmagazine.com/2019/08/writing-modes-layout/) bei Smashing Magazine (2019)
- [CSS-Schreibrichtungen](https://24ways.org/2016/css-writing-modes/) auf 24ways.org (2016)
