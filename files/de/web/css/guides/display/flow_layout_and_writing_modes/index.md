---
title: Flusslayout und Schreibrichtungen
slug: Web/CSS/Guides/Display/Flow_layout_and_writing_modes
l10n:
  sourceCommit: 32bdfdb82cf91ce9942b694286dec62be2cc20aa
---

Die CSS 2.1-Spezifikation, die beschreibt, wie sich normaler Fluss verhält, geht von einem horizontalen Schreibrichtung-Modus aus. [Layout](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout)-Eigenschaften sollten auf dieselbe Weise in vertikalen Schreibrichtungs-Modi funktionieren. In diesem Leitfaden betrachten wir, wie sich das Flusslayout verhält, wenn es mit verschiedenen Dokumenten-Schreibrichtungen verwendet wird.

Dies ist kein umfassender Leitfaden zur Verwendung von Schreibrichtungen in CSS. Ziel ist es, die Bereiche zu dokumentieren, in denen das Flusslayout möglicherweise auf unerwartete Weise mit Schreibrichtungen interagiert. Der Abschnitt [Siehe auch](#siehe_auch) enthält Links zu weiteren Ressourcen zu Schreibrichtungen.

## Schreibrichtungen-Spezifikation

Die CSS Writing Modes Level 3-Spezifikation definiert den Einfluss, den eine Änderung des Dokument-Schreibrichtung-Modus auf das Flusslayout hat. In der Einführung zu den Schreibrichtungen wird in [der Spezifikation](https://drafts.csswg.org/css-writing-modes-3/#text-flow) gesagt:

> "Ein Schreibrichtung-Modus in CSS wird durch die Eigenschaften {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} bestimmt. Er wird hauptsächlich in Bezug auf seine Inlinerichtungsbasis und Blockflussrichtung definiert."

Die Spezifikation definiert die _Inlinerichtungsbasis_ als die Richtung, in der der Inhalt auf einer Linie angeordnet wird. Dies definiert den Anfang und das Ende der Inlinerichtung. Der Anfang ist dort, wo Sätze beginnen und das Ende ist, wo eine Textzeile endet, bevor sie in eine neue Zeile umgebrochen würde.

Die _Blockflussrichtung_ ist die Richtung, in der sich Boxen, zum Beispiel Absätze, in dieser Schreibrichtung stapeln. Die CSS-Eigenschaft `writing-mode` steuert die Blockflussrichtung. Wenn Sie Ihre Seite oder einen Teil Ihrer Seite auf `vertical-lr` ändern möchten, können Sie `writing-mode: vertical-lr` auf das Element setzen, und dies wird die Richtung der Blöcke und somit auch die Inlinerichtung ändern.

Während bestimmte Sprachen einen bestimmten Schreibmodus oder eine bestimmte Textrichtung verwenden, können wir diese Eigenschaften auch für kreative Effekte nutzen, beispielsweise um eine Überschrift vertikal laufen zu lassen.

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

Die {{cssxref("writing-mode")}}-Eigenschaft akzeptiert die Werte `horizontal-tb`, `vertical-rl` und `vertical-lr`. Diese Werte steuern die Richtung, in der Blöcke auf der Seite fließen. Der Anfangswert ist `horizontal-tb`, was eine von oben nach unten verlaufende Blockflussrichtung mit einer horizontalen Inlinerichtung ist. Links-nach-rechts-Sprachen, wie Englisch, und Rechts-nach-links-Sprachen, wie Arabisch, sind alle `horizontal-tb`.

Das folgende Beispiel zeigt Blöcke, die den anfänglichen Wert `horizontal-tb` explizit verwenden:

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

Vergleichen Sie dies mit dem Wert `vertical-rl`, der Ihnen eine Rechts-nach-links-Blockflussrichtung mit einer vertikalen Inlinerichtung gibt, wie im nächsten Beispiel gezeigt.

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

Das letzte Beispiel demonstriert den dritten möglichen Wert für `writing-mode` — `vertical-lr`. Dies gibt Ihnen eine Links-nach-rechts-Blockflussrichtung und eine vertikale Inlinerichtung.

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

Wenn einer verschachtelten Box eine andere Schreibrichtung als ihrem übergeordneten Element zugewiesen wird, wird eine Inline-Ebene-Box so angezeigt, als hätte sie `display: inline-block`.

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

Eine Blockebene-Box wird einen neuen [Block Formatting Context (BFC)](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) etablieren, was bedeutet, dass, wenn ihr innerer Anzeigetyp `flow` wäre, sie einen berechneten Anzeigetyp von `flow-root` erhalten wird. Dies wird im nächsten Beispiel gezeigt, wo die Box, die als `horizontal-tb` angezeigt wird, einen Float enthält, der aufgrund ihres übergeordneten Elements, das einen neuen BFC etabliert, enthalten ist.

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

Ersetzte Elemente wie Bilder werden ihre Ausrichtung basierend auf der Eigenschaft `writing-mode` nicht ändern. Ersetzte Elemente wie Formularelemente, die Text enthalten, sollten jedoch dem verwendeten Schreibmodus entsprechen.

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

Sobald Sie in anderen Schreibrichtungen als `horizontal-tb` arbeiten, erscheinen viele der Eigenschaften und Werte, die auf die physischen Dimensionen des Bildschirms abgebildet sind, seltsam. Wenn Sie einem Kasten beispielsweise eine Breite von 100px geben, kontrolliert dies in `horizontal-tb` die Größe in der Inlinerichtung. In `vertical-lr` kontrolliert es die Größe in der Blockrichtung, da es sich nicht mit dem Text dreht.

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

Daher haben wir die Eigenschaften {{cssxref("block-size")}} und {{cssxref("inline-size")}}. Wenn wir unserem Block eine `inline-size` von 100px geben, spielt es keine Rolle, ob wir uns in einem horizontalen oder vertikalen Schreibmodus befinden; `inline-size` wird immer die Größe in der Inlinerichtung bedeuten.

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

Das [CSS-Modul für logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) enthält logische Versionen der Eigenschaften, die Ränder, Abstände und Rahmen steuern sowie andere Zuordnungen für Dinge, die wir typischerweise mit physischen Richtungen angegeben haben.

## Zusammenfassung

In den meisten Fällen funktioniert das Flusslayout wie erwartet, wenn Sie den Schreibrichtung-Modus ganzer Dokumente oder einzelner Abschnitte ändern. Dies kann verwendet werden, um vertikale Sprachen korrekt zu setzen oder aus kreativen Gründen. Mit CSS-logischen Eigenschaften und Werten kann die Größe im vertikalen Schreibmodus basierend auf der Inline- und Blockgröße eines Elements festgelegt werden. Dies ist nützlich, um Komponenten zu erstellen, die in verschiedenen Schreibrichtungen funktionieren.

## Siehe auch

- [Schreibrichtungen](/de/docs/Web/CSS/Guides/Writing_modes)
- [Writing modes and CSS layout](https://www.smashingmagazine.com/2019/08/writing-modes-layout/) auf Smashing Magazine (2019)
- [CSS writing modes](https://24ways.org/2016/css-writing-modes/) auf 24ways.org (2016)
