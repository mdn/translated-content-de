---
title: Fluss-Layout und Schreibrichtungen
slug: Web/CSS/CSS_display/Flow_layout_and_writing_modes
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die CSS 2.1-Spezifikation, die beschreibt, wie der normale Fluss funktioniert, geht von einem horizontalen Schreibrichtung aus. [Layout](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout)-Eigenschaften sollten auf die gleiche Weise in vertikalen Schreibrichtungen funktionieren. In diesem Leitfaden untersuchen wir, wie sich das Fluss-Layout verhält, wenn es mit verschiedenen Dokument-Schreibrichtungen verwendet wird.

Dies ist kein umfassender Leitfaden zur Verwendung von Schreibrichtungen in CSS. Ziel ist es, die Bereiche zu dokumentieren, in denen das Fluss-Layout in möglicherweise unerwarteter Weise mit Schreibrichtungen interagiert. Der Abschnitt [Siehe auch](#siehe_auch) bietet Links zu weiteren Ressourcen über Schreibrichtungen.

## Spezifikation der Schreibrichtungen

Die CSS Writing Modes Level 3 Specification definiert die Auswirkungen, die eine Änderung der Schreibrichtung des Dokuments auf das Fluss-Layout hat. In der Einführung zu den Schreibrichtungen [sagt die Spezifikation](https://drafts.csswg.org/css-writing-modes-3/#text-flow),

> "Eine Schreibrichtung in CSS wird durch die Eigenschaften {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} bestimmt. Sie wird in erster Linie in Bezug auf ihre inlinere Basisrichtung und die Blockflussrichtung definiert."

Die Spezifikation definiert die _inlinere Basisrichtung_ als die Richtung, in der Inhalt auf einer Zeile angeordnet ist. Dies definiert den Anfang und das Ende der Inline-Richtung. Der Anfang ist, wo Sätze beginnen, und das Ende ist, wo eine Textzeile endet, bevor sie auf eine neue Zeile umgebrochen würde.

Die _Blockflussrichtung_ ist die Richtung, in der Kästen, zum Beispiel Absätze, in dieser Schreibrichtung gestapelt werden. Die CSS-Eigenschaft `writing-mode` steuert die Blockflussrichtung. Wenn Sie Ihre Seite oder einen Teil Ihrer Seite auf `vertical-lr` ändern möchten, können Sie auf dem Element `writing-mode: vertical-lr` setzen, und dies wird die Richtung der Blöcke und damit auch die Inline-Richtung ändern.

Während bestimmte Sprachen einen bestimmten Schreibrichtung oder Textausrichtung nutzen, können wir diese Eigenschaften auch für kreative Effekte verwenden, wie zum Beispiel eine Überschrift vertikal laufen zu lassen.

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

Die {{cssxref("writing-mode")}}-Eigenschaft akzeptiert die Werte `horizontal-tb`, `vertical-rl` und `vertical-lr`. Diese Werte steuern die Richtung, in der Blöcke auf der Seite fließen. Der Anfangswert ist `horizontal-tb`, was eine Blockflussrichtung von oben nach unten mit einer horizontalen Inline-Richtung bedeutet. Sprachen von links nach rechts, wie Englisch, und von rechts nach links, wie Arabisch, sind alle `horizontal-tb`.

Das folgende Beispiel zeigt Blöcke mit dem anfänglichen Wert `horizontal-tb` explizit:

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

Vergleichen Sie dies mit dem Wert `vertical-rl`, der Ihnen eine Blockflussrichtung von rechts nach links mit einer vertikalen Inline-Richtung gibt, wie im nächsten Beispiel gezeigt.

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

Das letzte Beispiel zeigt den dritten möglichen Wert für `writing-mode` — `vertical-lr`. Dies gibt Ihnen eine Blockflussrichtung von links nach rechts und eine vertikale Inline-Richtung.

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

Wenn einem verschachtelten Kasten eine andere Schreibrichtung als seinem Elternteil zugewiesen wird, wird ein Inline-Level-Kasten angezeigt, als ob er `display: inline-block` hätte.

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

Ein Block-Level-Kasten wird einen neuen Block-Formatierungskontext etablieren, was bedeutet, dass, wenn sein innerer Anzeigetyp `flow` wäre, er einen berechneten Anzeigetyp von `flow-root` erhält. Das zeigt das nächste Beispiel, in dem der Kasten, der als `horizontal-tb` angezeigt wird, einen Float enthält, der eingeschlossen wird, weil sein Elternteil einen neuen BFC schafft.

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

Ersetzte Elemente wie Bilder werden ihre Ausrichtung nicht basierend auf der `writing-mode`-Eigenschaft ändern. Ersetzte Elemente wie Formularelemente, die Text enthalten, sollten jedoch der verwendeten Schreibrichtung entsprechen.

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

Wenn Sie in anderen Schreibrichtungen als `horizontal-tb` arbeiten, wirken viele der Eigenschaften und Werte, die auf die physischen Abmessungen des Bildschirms abgebildet sind, seltsam. Wenn Sie zum Beispiel einem Kasten eine Breite von 100px geben, würde dies in `horizontal-tb` die Größe in der Inline-Richtung steuern. In `vertical-lr` steuert es die Größe in der Blockrichtung, da es sich nicht mit dem Text dreht.

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

Daher haben wir neue Eigenschaften wie {{cssxref("block-size")}} und {{cssxref("inline-size")}}. Wenn wir unserem Block eine `inline-size` von 100px geben, spielt es keine Rolle, ob wir in einem horizontalen oder vertikalen Schreibrichtung sind. `inline-size` wird immer die Größe in der Inline-Richtung bedeuten.

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

Das [CSS-Modul "logische Eigenschaften und Werte"](/de/docs/Web/CSS/Guides/Logical_properties_and_values) enthält logische Versionen der Eigenschaften, die Randabstände, Abstände und Rahmen steuern sowie andere Zuordnungen für Dinge, die wir normalerweise mit physischen Richtungen spezifizieren.

## Zusammenfassung

In den meisten Fällen funktioniert das Fluss-Layout so, wie Sie es erwarten würden, wenn Sie die Schreibrichtung des Dokuments oder von Teilen des Dokuments ändern. Dies kann verwendet werden, um vertikale Sprachen richtig zu setzen oder aus kreativen Gründen. CSS macht dies durch die Einführung logischer Eigenschaften und Werte einfacher, sodass beim Arbeiten in einer vertikalen Schreibrichtung die Größenänderung basierend auf der Inline- und Blockgröße des Elements erfolgen kann. Dies wird nützlich sein, wenn Komponenten erstellt werden, die in verschiedenen Schreibrichtungen funktionieren können.

## Siehe auch

- [Schreibrichtungen](/de/docs/Web/CSS/Guides/Writing_modes)
- [Schreibrichtungen und CSS-Layout](https://www.smashingmagazine.com/2019/08/writing-modes-layout/) auf Smashing Magazine (2019)
- [CSS Schreibrichtungen](https://24ways.org/2016/css-writing-modes/) auf 24ways.org (2016)
