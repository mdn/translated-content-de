---
title: Flusslayout und Schreibmodi
slug: Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes
l10n:
  sourceCommit: b692821c494fd3a25dd883b6fe14998fa2621f7b
---

{{CSSRef}}

Die CSS 2.1-Spezifikation, die beschreibt, wie der normale Fluss funktioniert, geht von einem horizontalen Schreibmodus aus. [Layout-](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)Eigenschaften sollten in vertikalen Schreibmodi auf die gleiche Weise funktionieren. In diesem Leitfaden betrachten wir, wie sich das Flusslayout verhält, wenn es mit verschiedenen Dokumentenschreibmodi verwendet wird.

Dies ist kein umfassender Leitfaden zur Verwendung von Schreibmodi in CSS. Ziel ist es, die Bereiche zu dokumentieren, in denen das Flusslayout möglicherweise auf unvorhergesehene Weise mit Schreibmodi interagiert. Der Abschnitt [Siehe auch](#siehe_auch) bietet Links zu weiteren Ressourcen zu Schreibmodi.

## Spezifikation der Schreibmodi

Die CSS Writing Modes Level 3 Specification definiert die Auswirkungen, die eine Änderung des Dokumentenschreibmodus auf das Flusslayout hat. In der Einführung zu Schreibmodi [sagt die Spezifikation](https://drafts.csswg.org/css-writing-modes-3/#text-flow),

> "Ein Schreibmodus in CSS wird durch die Eigenschaften {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} bestimmt. Er wird hauptsächlich in Bezug auf seine Inline-Basisrichtung und Blockflussrichtung definiert."

Die Spezifikation definiert die _Inline-Basisrichtung_ als die Richtung, in der der Inhalt auf einer Zeile angeordnet ist. Dies definiert den Anfang und das Ende der Inline-Richtung. Der Anfang ist dort, wo Sätze beginnen, und das Ende ist dort, wo eine Textzeile endet, bevor sie in eine neue Zeile umgebrochen würde.

Die _Blockflussrichtung_ ist die Richtung, in der Kästen, zum Beispiel Absätze, in diesem Schreibmodus gestapelt werden. Die CSS-Eigenschaft `writing-mode` steuert die Blockflussrichtung. Wenn Sie Ihre Seite oder einen Teil Ihrer Seite in `vertical-lr` ändern möchten, können Sie `writing-mode: vertical-lr` auf das Element setzen, und dies ändert die Richtung der Blöcke und damit auch die Inline-Richtung.

Während bestimmte Sprachen einen bestimmten Schreibmodus oder eine bestimmte Textrichtung verwenden, können wir diese Eigenschaften auch kreativ einsetzen, beispielsweise um eine Überschrift vertikal zu gestalten.

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

Die Eigenschaft {{cssxref("writing-mode")}} akzeptiert die Werte `horizontal-tb`, `vertical-rl` und `vertical-lr`. Diese Werte steuern die Richtung, in der sich Blöcke auf der Seite bewegen. Der Anfangswert ist `horizontal-tb`, was eine von oben nach unten gerichtete Blockflussrichtung mit einer horizontalen Inline-Richtung ist. Links-nach-rechts-Sprachen wie Englisch und Rechts-nach-links-Sprachen wie Arabisch sind alle `horizontal-tb`.

Das folgende Beispiel zeigt, wie Blöcke explizit den Anfangswert `horizontal-tb` verwenden:

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

Vergleichen Sie dies mit dem Wert `vertical-rl`, der Ihnen eine Rechts-nach-links-Blockflussrichtung mit einer vertikalen Inline-Richtung gibt, wie im nächsten Beispiel gezeigt.

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

Das letzte Beispiel zeigt den dritten möglichen Wert für `writing-mode` — `vertical-lr`. Dies gibt Ihnen eine Links-nach-rechts-Blockflussrichtung und eine vertikale Inline-Richtung.

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

## Verschachtelte Schreibmodi

Wenn einem verschachtelten Kasten ein anderer Schreibmodus als seinem übergeordneten Kasten zugewiesen wird, wird ein Inline-level-Kasten so angezeigt, als hätte er `display: inline-block`.

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

Ein Block-Level-Kasten wird einen neuen Blockformatierungs-Kontext schaffen, was bedeutet, dass, wenn der innere Anzeigetyp `flow` wäre, er einen berechneten Anzeigetyp von `flow-root` erhalten wird. Dies wird im nächsten Beispiel gezeigt, wo der Kasten, der als `horizontal-tb` angezeigt wird, ein Float enthält, das aufgrund seines übergeordneten Kastens, der einen neuen BFC schafft, eingeschlossen wird.

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

Ersetzte Elemente wie Bilder ändern ihre Ausrichtung nicht basierend auf der Eigenschaft `writing-mode`. Ersetzte Elemente wie Formularelemente, die Text enthalten, sollten jedoch dem verwendeten Schreibmodus entsprechen.

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

Sobald Sie in anderen Schreibmodi als `horizontal-tb` arbeiten, wirken viele der Eigenschaften und Werte, die den physischen Abmessungen des Bildschirms zugeordnet sind, seltsam. Wenn Sie einem Kasten beispielsweise eine Breite von 100px geben, würde dies in `horizontal-tb` die Größe in der Inline-Richtung steuern. In `vertical-lr` steuert es die Größe in der Blockrichtung, da es sich nicht mit dem Text dreht.

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

Daher haben wir neue Eigenschaften von {{cssxref("block-size")}} und {{cssxref("inline-size")}}. Wenn wir unserem Block eine `inline-size` von 100px geben, spielt es keine Rolle, ob wir in einem horizontalen oder vertikalen Schreibmodus sind, `inline-size` wird immer die Größe in der Inline-Richtung bedeuten.

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

Das Modul [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) enthält logische Versionen der Eigenschaften, die Ränder, Abstände und Rahmen steuern, sowie andere Zuordnungen für Dinge, die wir typischerweise physikalische Richtungen verwendet haben, um zu spezifizieren.

## Zusammenfassung

In den meisten Fällen funktioniert das Flusslayout wie erwartet, wenn der Schreibmodus des Dokuments oder von Teilen des Dokuments geändert wird. Dies kann verwendet werden, um vertikale Sprachen korrekt zu setzen oder aus kreativen Gründen. CSS macht dies durch die Einführung logischer Eigenschaften und Werte einfacher, sodass beim Arbeiten in einem vertikalen Schreibmodus die Größe basierend auf der Inline- und Blockgröße des Elements erfolgen kann. Dies wird nützlich sein, wenn Komponenten erstellt werden, die in verschiedenen Schreibmodi funktionieren können.

## Siehe auch

- [Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes)
- [Schreibmodi und CSS-Layout](https://www.smashingmagazine.com/2019/08/writing-modes-layout/) auf Smashing Magazine (2019)
- [CSS-Schreibmodi](https://24ways.org/2016/css-writing-modes/) auf 24ways.org (2016)
