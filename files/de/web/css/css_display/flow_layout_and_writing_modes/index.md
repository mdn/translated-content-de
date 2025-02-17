---
title: Flusslayout und Schreibrichtungen
slug: Web/CSS/CSS_display/Flow_layout_and_writing_modes
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

Die CSS 2.1-Spezifikation, die beschreibt, wie der normale Fluss funktioniert, geht von einem horizontalen Schreibrichtung-Modus aus. [Layout](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)-Eigenschaften sollten in vertikalen Schreibrichtungs-Modi auf die gleiche Weise funktionieren. In diesem Leitfaden sehen wir uns an, wie sich das Flusslayout in unterschiedlichen Dokumenten-Schreibrichtungs-Modi verhält.

Dies ist kein umfassender Leitfaden zur Verwendung von Schreibrichtungen in CSS. Ziel ist es, die Bereiche zu dokumentieren, in denen das Flusslayout mit Schreibrichtungs-Modi auf möglicherweise unerwartete Weise interagiert. Der Abschnitt [Siehe auch](#siehe_auch) bietet Links zu weiteren Ressourcen zu Schreibrichtungen.

## Spezifikation zu Schreibrichtungen

Die Spezifikation CSS Writing Modes Level 3 definiert die Auswirkungen einer Änderung des Dokument-Schreibrichtungs-Modus auf das Flusslayout. In der Einleitung zu Schreibrichtungen heißt es in [der Spezifikation](https://drafts.csswg.org/css-writing-modes-3/#text-flow):

> "Ein Schreibrichtungs-Modus in CSS wird durch die Eigenschaften {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} bestimmt. Er wird in erster Linie in Bezug auf die Inline-Basisrichtung und die Blockflussrichtung definiert."

Die Spezifikation definiert die _Inline-Basisrichtung_ als die Richtung, in der Inhalte auf einer Zeile angeordnet werden. Dies definiert den Start- und Endpunkt der Inline-Richtung. Der Start ist der Punkt, an dem Sätze beginnen, und das Ende ist dort, wo eine Textzeile endet, bevor sie auf eine neue Zeile umbricht.

Die _Blockflussrichtung_ ist die Richtung, in der Boxen, beispielsweise Absätze, in diesem Schreibrichtungs-Modus gestapelt werden. Die CSS-Eigenschaft `writing-mode` steuert die Blockflussrichtung. Wenn Sie beispielsweise Ihre Seite oder Teile Ihrer Seite auf `vertical-lr` ändern möchten, können Sie `writing-mode: vertical-lr` auf das Element anwenden. Dadurch ändern sich die Richtung der Blöcke und damit auch die Inline-Richtung.

Während bestimmte Sprachen einen bestimmten Schreibrichtungs-Modus oder eine Textausrichtung verwenden, können wir diese Eigenschaften auch kreativ einsetzen, beispielsweise, um eine Überschrift vertikal darzustellen.

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

Die Eigenschaft {{cssxref("writing-mode")}} akzeptiert die Werte `horizontal-tb`, `vertical-rl` und `vertical-lr`. Diese Werte steuern die Richtung, in der sich Blöcke auf der Seite bewegen. Der Standardwert ist `horizontal-tb`, was eine Blockflussrichtung von oben nach unten mit einer horizontalen Inline-Richtung bedeutet. Links-nach-rechts-Sprachen wie Englisch und Rechts-nach-links-Sprachen wie Arabisch verwenden alle `horizontal-tb`.

Das folgende Beispiel zeigt Blöcke, die explizit den Startwert `horizontal-tb` verwenden:

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

Vergleichen Sie dies mit dem Wert `vertical-rl`, der eine Blockflussrichtung von rechts nach links und eine vertikale Inline-Richtung ergibt, wie im nächsten Beispiel gezeigt.

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

Das letzte Beispiel zeigt den dritten möglichen Wert für `writing-mode` — `vertical-lr`. Dies ergibt eine Blockflussrichtung von links nach rechts und eine vertikale Inline-Richtung.

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

## Verschachtelte Schreibrichtungs-Modi

Wenn einer verschachtelten Box ein anderer Schreibrichtungs-Modus als ihrem übergeordneten Element zugewiesen wird, wird eine Inline-Box so dargestellt, als hätte sie `display: inline-block`.

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

Eine Block-Box wird einen neuen Blockformatierungskontext (BFC) erstellen. Das bedeutet, wenn der innere Anzeigetyp `flow` wäre, wird er als berechneter Anzeigetyp zu `flow-root`. Dies wird im nächsten Beispiel gezeigt, wo die Box, die als `horizontal-tb` dargestellt wird, einen Float enthält, der durch das übergeordnete Element eingeschlossen wird, da es einen neuen BFC erstellt.

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

Ersetzte Elemente wie Bilder ändern ihre Ausrichtung nicht basierend auf der Eigenschaft `writing-mode`. Ersetzte Elemente wie Formularelemente, die Text enthalten, sollten jedoch mit dem verwendeten Schreibrichtungs-Modus übereinstimmen.

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

Sobald Sie in Schreibrichtungs-Modi arbeiten, die nicht `horizontal-tb` sind, erscheinen viele der Eigenschaften und Werte, die an die physischen Dimensionen des Bildschirms gebunden sind, merkwürdig. Wenn Sie beispielsweise einer Box eine Breite von 100px geben, würde dies in `horizontal-tb` die Größe in der Inline-Richtung steuern. In `vertical-lr` steuert es die Größe in der Blockrichtung, da es sich nicht mit dem Text dreht.

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

Daher haben wir neue Eigenschaften wie {{cssxref("block-size")}} und {{cssxref("inline-size")}}. Wenn wir unserer Box eine `inline-size` von 100px geben, ist es unabhängig davon, ob wir uns in einem horizontalen oder vertikalen Schreibrichtungs-Modus befinden: `inline-size` bedeutet immer die Größe in der Inline-Richtung.

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

Das Modul [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values) enthält logische Versionen der Eigenschaften, die Ränder, Innenabstände und Rahmen steuern, sowie andere Zuordnungen für Elemente, bei denen wir typischerweise physische Richtungen verwendet haben.

## Zusammenfassung

In den meisten Fällen funktioniert das Flusslayout wie erwartet, wenn der Schreibrichtungs-Modus des Dokuments oder eines Teils des Dokuments geändert wird. Dies kann verwendet werden, um vertikale Sprachen korrekt zu setzen oder für kreative Zwecke. CSS erleichtert dies durch die Einführung logischer Eigenschaften und Werte, sodass bei der Arbeit in einem vertikalen Schreibrichtungs-Modus die Größenanpassung basierend auf den Inline- und Blockgrößen eines Elements erfolgen kann. Dies wird hilfreich sein, um Komponenten zu erstellen, die in verschiedenen Schreibrichtungs-Modi arbeiten können.

## Siehe auch

- [Schreibrichtungen](/de/docs/Web/CSS/CSS_writing_modes)
- [Schreibrichtungen und CSS-Layout](https://www.smashingmagazine.com/2019/08/writing-modes-layout/) auf Smashing Magazine (2019)
- [CSS-Schreibrichtungen](https://24ways.org/2016/css-writing-modes/) auf 24ways.org (2016)
