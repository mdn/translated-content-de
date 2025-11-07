---
title: Flow-Layout und Schriftsysteme
slug: Web/CSS/Guides/Display/Flow_layout_and_writing_modes
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die CSS 2.1-Spezifikation, die beschreibt, wie der normale Fluss funktioniert, geht von einem horizontalen Schriftsystem aus. [Layout](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout)-Eigenschaften sollten in vertikalen Schriftsystemen auf die gleiche Weise funktionieren. In diesem Leitfaden betrachten wir, wie sich der Flow-Layout verhält, wenn er mit unterschiedlichen Schriftsystemen des Dokuments verwendet wird.

Dies ist kein umfassender Leitfaden zur Verwendung von Schriftsystemen in CSS. Ziel ist es, die Bereiche zu dokumentieren, in denen der Flow-Layout mit Schriftsystemen auf möglicherweise unerwartete Weise interagiert. Der Abschnitt [Siehe auch](#siehe_auch) bietet Links zu weiteren Ressources zum Thema Schriftsysteme.

## Spezifikation der Schriftsysteme

Die Spezifikation CSS Writing Modes Level 3 definiert die Auswirkungen, die eine Änderung des Schriftsystems des Dokuments auf den Flow-Layout hat. In der Einführung zu Schriftsystemen sagt [die Spezifikation](https://drafts.csswg.org/css-writing-modes-3/#text-flow),

> „Ein Schriftsystem in CSS wird durch die Eigenschaften {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} bestimmt. Es wird hauptsächlich in Bezug auf seine inline Basisausrichtung und Blockflussrichtung definiert.“

Die Spezifikation definiert die _inline Basisausrichtung_ als die Richtung, in der der Inhalt auf einer Linie angeordnet ist. Dies definiert den Anfang und das Ende der Inline-Richtung. Der Anfang ist dort, wo Sätze beginnen, und das Ende ist dort, wo eine Textzeile endet, bevor sie in eine neue Zeile umgebrochen würde.

Die _Blockflussrichtung_ ist die Richtung, in der sich Boxen, wie z.B. Absätze, in diesem Schriftsystem stapeln. Die CSS-Eigenschaft `writing-mode` steuert die Blockflussrichtung. Wenn Sie Ihre Seite oder einen Teil davon auf `vertical-lr` ändern möchten, können Sie `writing-mode: vertical-lr` auf das Element setzen, wodurch sich die Richtung der Blöcke und damit auch die Inline-Richtung ändert.

Während bestimmte Sprachen ein bestimmtes Schriftsystem oder eine bestimmte Textausrichtung verwenden, können wir diese Eigenschaften auch für kreative Effekte nutzen, wie beispielsweise die vertikale Anordnung einer Überschrift.

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

Die {{cssxref("writing-mode")}}-Eigenschaft akzeptiert die Werte `horizontal-tb`, `vertical-rl` und `vertical-lr`. Diese Werte steuern die Richtung, in der Blöcke auf der Seite fließen. Der Anfangswert ist `horizontal-tb`, was eine Blockflussrichtung von oben nach unten mit einer horizontalen Inline-Richtung darstellt. Links-nach-rechts-Sprachen wie Englisch und Rechts-nach-links-Sprachen wie Arabisch sind alle `horizontal-tb`.

Das folgende Beispiel zeigt Blöcke, die explizit den Anfangswert `horizontal-tb` verwenden:

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

Das letzte Beispiel demonstriert den dritten möglichen Wert für `writing-mode` — `vertical-lr`. Dies ergibt eine Links-nach-rechts-Blockflussrichtung und eine vertikale Inline-Richtung.

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

## Verschachtelte Schriftsysteme

Wenn einer verschachtelten Box ein anderes Schriftsystem als ihrem übergeordneten Element zugewiesen wird, wird eine Box auf Inline-Ebene so angezeigt, als hätte sie `display: inline-block`.

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

Eine Block-Level-Box wird einen neuen Blockformatierungskontext etablieren, was bedeutet, dass sie, wenn ihr innerer Anzeigetyp `flow` wäre, einen berechneten Anzeigetyp von `flow-root` erhalten wird. Dies wird im nächsten Beispiel gezeigt, bei dem die Box, die als `horizontal-tb` angezeigt wird, ein Float enthält, der aufgrund Ihres Elternteils, der einen neuen BFC etabliert, eingeschlossen ist.

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

Ersetzte Elemente wie Bilder ändern ihre Ausrichtung nicht basierend auf der `writing-mode`-Eigenschaft. Allerdings sollten ersetzte Elemente wie Formularelemente, die Text enthalten, dem verwendeten Schriftsystem entsprechen.

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

Sobald Sie in anderen Schriftsystemen als `horizontal-tb` arbeiten, erscheinen viele der Eigenschaften und Werte, die auf die physischen Abmessungen des Bildschirms abgebildet sind, seltsam. Wenn Sie beispielsweise einer Box eine Breite von 100px geben, würde das in `horizontal-tb` die Größe in der Inline-Richtung steuern. In `vertical-lr` steuert es die Größe in der Blockrichtung, da es sich nicht mit dem Text dreht.

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

Daher haben wir neue Eigenschaften wie {{cssxref("block-size")}} und {{cssxref("inline-size")}}. Wenn wir unserem Block eine `inline-size` von 100px geben, spielt es keine Rolle, ob wir in einem horizontalen oder vertikalen Schriftsystem sind, `inline-size` wird immer die Größe in der Inline-Richtung bedeuten.

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

Das Modul [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) enthält logische Versionen der Eigenschaften, die Ränder, Auffüllungen und Rahmen steuern, sowie andere Zuordnungen für Dinge, die wir typischerweise mit physischen Richtungen angegeben haben.

## Zusammenfassung

In den meisten Fällen funktioniert der Flow-Layout wie erwartet, wenn das Schriftsystem des Dokuments oder Teile des Dokuments geändert werden. Dies kann genutzt werden, um vertikale Sprachen richtig zu setzen oder aus kreativen Gründen. CSS macht dies durch die Einführung logischer Eigenschaften und Werte einfacher, sodass beim Arbeiten in einem vertikalen Schriftsystem die Größenbildung auf der Inline- und Blockgröße des Elements basieren kann. Dies wird nützlich sein, wenn Komponenten erstellt werden, die in verschiedenen Schriftsystemen funktionieren können.

## Siehe auch

- [Schriftsysteme](/de/docs/Web/CSS/Guides/Writing_modes)
- [Schriftsysteme und CSS-Layout](https://www.smashingmagazine.com/2019/08/writing-modes-layout/) auf Smashing Magazine (2019)
- [CSS Schriftsysteme](https://24ways.org/2016/css-writing-modes/) auf 24ways.org (2016)
