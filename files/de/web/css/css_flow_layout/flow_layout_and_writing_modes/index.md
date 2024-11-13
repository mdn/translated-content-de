---
title: Flusslayout und Schreibrichtungen
slug: Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes
l10n:
  sourceCommit: c6e02b5aa7c12f9e64f80a62f75ede8f5cb5ec21
---

{{CSSRef}}

Die CSS 2.1-Spezifikation, die beschreibt, wie der normale Fluss funktioniert, geht von einem horizontalen Schreibmodus aus. [Layout](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow) Eigenschaften sollten in vertikalen Schreibrichtungen auf die gleiche Weise funktionieren. In diesem Leitfaden betrachten wir, wie sich das Flusslayout verhält, wenn es mit verschiedenen Dokumentenschreibrichtungen verwendet wird.

Dies ist kein umfassender Leitfaden zur Verwendung von Schreibrichtungen in CSS, das Ziel hier ist es, die Bereiche zu dokumentieren, in denen das Flusslayout möglicherweise unerwartet mit Schreibrichtungen interagiert. Der Abschnitt [Siehe auch](#siehe_auch) bietet Links zu weiteren Ressourcen über Schreibrichtungen.

## Schreibrichtungsspezifikation

Die CSS Writing Modes Level 3 Specification definiert die Auswirkungen, die eine Änderung der Dokumentenschreibrichtung auf das Flusslayout hat. In der Einführung der Schreibrichtungen sagt [die Spezifikation](https://drafts.csswg.org/css-writing-modes-3/#text-flow),

> "Eine Schreibrichtung in CSS wird durch die Eigenschaften {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} bestimmt. Sie wird hauptsächlich in Bezug auf ihre Inline-Basisrichtung und Blockflussrichtung definiert."

Die Spezifikation definiert die _Inline-Basisrichtung_ als die Richtung, in der der Inhalt in einer Zeile angeordnet ist. Dies definiert den Anfang und das Ende der Inline-Richtung. Der Start ist dort, wo Sätze beginnen, und das Ende ist dort, wo eine Textzeile endet, bevor sie auf eine neue Zeile umbricht.

Die _Blockflussrichtung_ ist die Richtung, in der Boxen, beispielsweise Paragraphen, in dieser Schreibrichtung gestapelt werden. Die CSS-Eigenschaft `writing-mode` steuert die Blockflussrichtung. Wenn Sie Ihre Seite oder einen Teil Ihrer Seite auf `vertical-lr` ändern möchten, können Sie `writing-mode: vertical-lr` auf das Element setzen, und dies ändert die Richtung der Blöcke und somit auch die Inline-Richtung.

Während bestimmte Sprachen einen bestimmten Schreibmodus oder eine Textausrichtung verwenden, können wir diese Eigenschaften auch kreativ nutzen, zum Beispiel um eine Überschrift vertikal laufen zu lassen.

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

Die {{cssxref("writing-mode")}} Eigenschaft akzeptiert die Werte `horizontal-tb`, `vertical-rl` und `vertical-lr`. Diese Werte steuern die Richtung, in der Blöcke auf der Seite fließen. Der Anfangswert ist `horizontal-tb`, was eine von oben nach unten gerichtete Blockflussrichtung mit einer horizontalen Inline-Richtung ist. Links-nach-rechts-Sprachen, wie Englisch, und Rechts-nach-links-Sprachen, wie Arabisch, sind alle `horizontal-tb`.

Das folgende Beispiel zeigt Blöcke, die den Anfangswert `horizontal-tb` explizit verwenden:

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

Vergleichen Sie dies mit dem Wert `vertical-rl`, der Ihnen eine von rechts-nach-links gerichtete Blockflussrichtung mit einer vertikalen Inline-Richtung gibt, wie im nächsten Beispiel gezeigt.

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

Das letzte Beispiel demonstriert den dritten möglichen Wert für `writing-mode` — `vertical-lr`. Dies gibt Ihnen eine von links-nach-rechts gerichtete Blockflussrichtung und eine vertikale Inline-Richtung.

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

## Verschachtelte Schriebmodi

Wenn einer verschachtelten Box eine andere Schreibrichtung als ihrem übergeordneten Element zugewiesen wird, wird eine Inline-Level-Box so angezeigt, als hätte sie `display: inline-block`.

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

Eine Block-Level-Box wird einen neuen Block-Formatierungskontext etablieren, was bedeutet, dass, wenn ihr innerer Anzeigetyp `flow` wäre, sie einen berechneten Anzeigetyp von `flow-root` erhalten wird. Dies wird im nächsten Beispiel gezeigt, bei dem die Box, die als `horizontal-tb` angezeigt wird, ein Float enthält, das aufgrund ihres übergeordneten Elements einen neuen BFC etabliert.

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

Ersetzte Elemente wie Bilder werden ihre Ausrichtung basierend auf der `writing-mode` Eigenschaft nicht ändern. Ersetzte Elemente, wie Formularelemente, die Text enthalten, sollten jedoch mit der verwendeten Schreibrichtung übereinstimmen.

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

Sobald Sie in anderen Schreibrichtungen als `horizontal-tb` arbeiten, erscheinen viele der Eigenschaften und Werte, die auf die physischen Dimensionen des Bildschirms abgebildet sind, seltsam. Wenn Sie zum Beispiel einer Box eine Breite von 100px geben, kontrolliert das in `horizontal-tb` die Größe in der Inline-Richtung. In `vertical-lr` kontrolliert es die Größe in der Blockrichtung, weil es sich nicht mit dem Text dreht.

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

Daher haben wir neue Eigenschaften von {{cssxref("block-size")}} und {{cssxref("inline-size")}}. Wenn wir unserem Block eine `inline-size` von 100px geben, ist es egal, ob wir in einem horizontalen oder einem vertikalen Schreibmodus sind, `inline-size` bedeutet immer die Größe in der Inline-Richtung.

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

Das Modul [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) enthält logische Versionen der Eigenschaften, die Ränder, Abstände und Ränder sowie andere Zuordnungen steuern, für die wir typischerweise physische Richtungen angegeben haben.

## Zusammenfassung

In den meisten Fällen funktioniert das Flusslayout so, wie Sie es erwarten würden, wenn Sie die Schreibrichtung des Dokuments oder Teile des Dokuments ändern. Dies kann verwendet werden, um vertikale Sprachen richtig zu setzen oder aus kreativen Gründen. CSS macht dies einfacher, indem logische Eigenschaften und Werte eingeführt werden, sodass bei der Arbeit in einem vertikalen Schreibmodus die Größenzuordnung auf der Inline- und Blockgröße des Elements basieren kann. Dies wird nützlich sein, wenn Sie Komponenten erstellen, die in verschiedenen Schreibrichtungen funktionieren können.

## Siehe auch

- [Schreibrichtungen](/de/docs/Web/CSS/CSS_writing_modes)
- [Schreibrichtungen und CSS-Layout](https://www.smashingmagazine.com/2019/08/writing-modes-layout/) bei Smashing Magazine (2019)
- [CSS Schreibrichtungen](https://24ways.org/2016/css-writing-modes/) bei 24ways.org (2016)
