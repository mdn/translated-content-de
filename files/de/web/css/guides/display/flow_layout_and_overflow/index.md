---
title: Flusslayout und Überlauf
slug: Web/CSS/Guides/Display/Flow_layout_and_overflow
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Wenn mehr Inhalt vorhanden ist, als in einen Container passt, tritt eine Überlaufsituation auf. Das Verständnis darüber, wie Überlauf funktioniert, ist wichtig im Umgang mit jedem Element mit beschränkter Größe in CSS. Dieser Leitfaden erklärt, wie Überlauf funktioniert, wenn man mit normalem Fluss arbeitet. Das HTML ist in jedem Beispiel dasselbe, daher ist es im ersten Abschnitt sichtbar und in anderen aus Gründen der Kürze verborgen.

## Was ist Überlauf?

Einem Element eine feste Höhe und Breite zu geben und dann signifikanten Inhalt in die Box zu legen, erzeugt ein grundlegendes Überlaufbeispiel:

```html live-sample___overflow
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney.
  </p>
</div>
<p>
  Their names were Stephen and Joseph Montgolfier. They were papermakers by
  trade, and were noted as possessing thoughtful minds and a deep interest in
  all scientific knowledge and new discovery.
</p>
<p>
  Before that night—a memorable night, as it was to prove—hundreds of millions
  of people had watched the rising smoke-wreaths of their fires without drawing
  any special inspiration from the fact.
</p>
```

```css live-sample___overflow
body {
  font: 1.2em / 1.5 sans-serif;
}

.box {
  width: 300px;
  height: 100px;
  border: 5px solid rebeccapurple;
  padding: 10px;
}
```

{{EmbedLiveSample("overflow", "", "370px")}}

Der Inhalt gelangt in die Box. Sobald er die Box füllt, tritt er auf sichtbare Weise hinaus, indem er Inhalt außerhalb der Box anzeigt und möglicherweise unter anderem Inhalt erscheint. Die Eigenschaft, die steuert, wie Überlauf sich verhält, ist die {{cssxref("overflow")}}-Eigenschaft mit einem Anfangswert von `visible`. Deshalb können wir den Überlaufinhalt sehen.

## Überlauf steuern

Es gibt andere Werte, die steuern, wie sich überfließender Inhalt verhält. Um überfließenden Inhalt zu verbergen, verwenden Sie den Wert `hidden`. Dies kann dazu führen, dass ein Teil Ihres Inhalts nicht sichtbar ist.

```html hidden live-sample___hidden
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney.
  </p>
</div>
<p>
  Their names were Stephen and Joseph Montgolfier. They were papermakers by
  trade, and were noted as possessing thoughtful minds and a deep interest in
  all scientific knowledge and new discovery.
</p>
<p>
  Before that night—a memorable night, as it was to prove—hundreds of millions
  of people had watched the rising smoke-wreaths of their fires without drawing
  any special inspiration from the fact.
</p>
```

```css live-sample___hidden
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  width: 300px;
  height: 100px;
  border: 5px solid rebeccapurple;
  padding: 10px;
  overflow: hidden;
}
```

{{EmbedLiveSample("hidden", "", "370px")}}

Die Verwendung des Wertes `scroll` hält den Inhalt in seiner Box und fügt Bildlaufleisten hinzu, um die Anzeige zu ermöglichen. Bildlaufleisten werden hinzugefügt, auch wenn der Inhalt in die Box passt.

```html hidden live-sample___scroll
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney.
  </p>
</div>
<p>
  Their names were Stephen and Joseph Montgolfier; they were papermakers by
  trade and were noted as possessing thoughtful minds and a deep interest in all
  scientific knowledge and new discoveries.
</p>
<p>
  Before that night—a memorable night, as it was to prove—hundreds of millions
  of people had watched the rising smoke-wreaths of their fires without drawing
  any special inspiration from the fact.
</p>
```

```css live-sample___scroll
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  width: 300px;
  height: 100px;
  border: 5px solid rebeccapurple;
  padding: 10px;
  overflow: scroll;
}
```

{{EmbedLiveSample("scroll", "", "370px")}}

Die Verwendung des Wertes `auto` zeigt den Inhalt ohne Bildlaufleisten an, wenn der Inhalt in die Box passt. Wenn er nicht passt, werden Bildlaufleisten hinzugefügt. Vergleicht man das nächste Beispiel, sollte man sehen, dass das `overflow: scroll`-Beispiel oben sowohl horizontale als auch vertikale Bildlaufleisten hat, obwohl es nur vertikales Scrollen benötigt. Das `auto`-Beispiel unten fügt nur die Bildlaufleiste in der Richtung hinzu, in der wir scrollen müssen.

```html hidden live-sample___auto
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney.
  </p>
</div>
<p>
  Their names were Stephen and Joseph Montgolfier, they were papermakers by
  trade, and were noted as possessing thoughtful minds and a deep interest in
  all scientific knowledge and new discovery.
</p>
<p>
  Before that night—a memorable night, as it was to prove—hundreds of millions
  of people had watched the rising smoke-wreaths of their fires without drawing
  any special inspiration from the fact.
</p>
```

```css live-sample___auto
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  width: 300px;
  height: 100px;
  border: 5px solid rebeccapurple;
  padding: 10px;
  overflow: auto;
}
```

{{EmbedLiveSample("auto", "", "370px")}}

Wie wir bereits gelernt haben, wird bei der Verwendung eines dieser Werte, mit Ausnahme des Standardwertes `visible`, ein neuer [Blockformatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) erstellt.

`overflow: clip` verhält sich wie `overflow: hidden`, erlaubt jedoch kein programmatisches Scrollen; die Box wird nicht scrollbar. Es erzeugt auch keinen Blockformatierungskontext.

Die Überlauf-Eigenschaft ist in Wirklichkeit eine Kurzform für die {{cssxref("overflow-x")}}- und {{cssxref("overflow-y")}}-Eigenschaften. Wenn Sie nur einen Wert für den Überlauf angeben, wird dieser Wert auf beide Achsen angewendet. Sie können jedoch auch beide Werte angeben, wobei der erste für `overflow-x` und damit für die horizontale Richtung und der zweite für `overflow-y` und die vertikale Richtung verwendet wird. Im unten stehenden Beispiel habe ich nur `overflow-y: scroll` angegeben, sodass wir die unerwünschte horizontale Bildlaufleiste nicht bekommen.

```html hidden live-sample___overflow-y
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney.
  </p>
</div>
<p>
  Their names were Stephen and Joseph Montgolfier, they were papermakers by
  trade, and were noted as possessing thoughtful minds and a deep interest in
  all scientific knowledge and new discovery.
</p>
<p>
  Before that night—a memorable night, as it was to prove—hundreds of millions
  of people had watched the rising smoke-wreaths of their fires without drawing
  any special inspiration from the fact.
</p>
```

```css live-sample___overflow-y
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  width: 300px;
  height: 100px;
  border: 5px solid rebeccapurple;
  padding: 10px;
  overflow-y: scroll;
}
```

{{EmbedLiveSample("overflow-y", "", "370px")}}

## Flussbezogene Eigenschaften

Im Leitfaden zu [Schreibmodi und Flusslayout](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes) haben wir uns die `block-size`- und `inline-size`-Eigenschaften angesehen, die mehr Sinn machen, wenn man mit verschiedenen Schreibmodi arbeitet, als unser Layout an die physikalischen Abmessungen des Bildschirms zu binden. Das [CSS-Überlaufmodul](/de/docs/Web/CSS/Guides/Overflow) enthält auch flussbezogene Eigenschaften für Überlauf - [`overflow-block`](/de/docs/Web/CSS/Reference/At-rules/@media/overflow-block) und [`overflow-inline`](/de/docs/Web/CSS/Reference/At-rules/@media/overflow-inline). Diese entsprechen `overflow-x` und `overflow-y`, aber die Zuordnung hängt vom Schreibmodus des Dokuments ab.

## Überlauf anzeigen

Im CSS-Überlaufmodul gibt es einige Eigenschaften, die dazu beitragen können, das Aussehen von Inhalten in einer Überlaufsituation zu verbessern.

### Inline-Achsen-Überlauf

Die {{cssxref("text-overflow")}}-Eigenschaft befasst sich mit dem Überlauf von Text in der Inline-Richtung. Sie nimmt einen von zwei Werten `clip`, wobei der Inhalt abgeschnitten wird, wenn er überläuft. Dies ist der Anfangswert und daher das Standardverhalten. Es gibt auch `ellipsis`, das ein Auslassungszeichen rendert, das möglicherweise durch ein besseres Zeichen für die verwendete Sprache oder den verwendeten Schreibmodus ersetzt wird.

```html hidden live-sample___text-overflow
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney.
  </p>

  <p>
    Their names were Stephen and Joseph Montgolfier, they were papermakers by
    trade, and were noted as possessing thoughtful minds and a deep interest in
    all scientific knowledge and new discovery.
  </p>
  <p>
    Before that night—a memorable night, as it was to prove—hundreds of millions
    of people had watched the rising smoke-wreaths of their fires without
    drawing any special inspiration from the fact.
  </p>
</div>
```

```css live-sample___text-overflow
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  width: 300px;
  border: 5px solid rebeccapurple;
  padding: 10px;
}

.box p {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
```

{{EmbedLiveSample("text-overflow", "", "220px")}}

### Block-Achsen-Überlauf

Die [Overflow Module Level 4](https://drafts.csswg.org/css-overflow-4/#propdef-block-ellipsis)-Spezifikation fügt eine `block-ellipsis`-Eigenschaft hinzu ([zuvor `block-overflow` genannt](https://github.com/w3c/csswg-drafts/commit/20b15b4d66b0fdfa8406f1ce28604128f02ee7bb)). Diese Eigenschaft ermöglicht es, ein Auslassungszeichen (oder benutzerdefinierte Zeichenfolgen) hinzuzufügen, wenn Text in der Blockdimension überläuft, obwohl es zum Zeitpunkt des Schreibens keine Browserunterstützung dafür gibt.

Dies ist nützlich in Situationen, in denen Sie beispielsweise eine Liste von Artikeln haben und die Auflistungen in Kästen mit fester Höhe anzeigen, die nur eine begrenzte Menge Text aufnehmen können. Es ist möglicherweise nicht offensichtlich für den Leser, dass es mehr Inhalt gibt, durch den man klicken kann, wenn man auf den Kasten oder den Titel klickt. Ein Auslassungszeichen zeigt klar an, dass es mehr Inhalt gibt. Die Spezifikation würde erlauben, eine Zeichenfolge aus Inhalt oder ein reguläres Auslassungszeichen einzufügen.

## Zusammenfassung

Ob Sie im kontinuierlichen Medienformat im Web oder in einem format wie Print oder EPUB im Paged Media-Format arbeiten, das Verständnis davon, wie Inhalte überlaufen, ist nützlich im Umgang mit jeder Layoutmethode. Indem Sie verstehen, wie Überlauf im normalen Fluss funktioniert, sollten Sie es einfacher finden, die Auswirkungen von Überlaufinhalten in Layoutmethoden wie Grid und Flexbox zu verstehen.

## Siehe auch

- [Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) Leitfaden
- [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS-Eindämmung](/de/docs/Web/CSS/Guides/Containment) Modul
