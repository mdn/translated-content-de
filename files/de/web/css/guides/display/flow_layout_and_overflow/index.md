---
title: Flusslayout und Überlauf
slug: Web/CSS/Guides/Display/Flow_layout_and_overflow
l10n:
  sourceCommit: 32bdfdb82cf91ce9942b694286dec62be2cc20aa
---

Wenn mehr Inhalt vorhanden ist, als in einen Container passt, tritt eine Überlaufsituation ein. Das Verständnis, wie Überlauf funktioniert, ist wichtig beim Umgang mit beliebigen Elementen mit eingeschränkter Größe in CSS. Dieser Leitfaden erklärt, wie Überlauf funktioniert, wenn man mit normalem Fluss arbeitet. Das HTML ist in jedem Beispiel dasselbe, daher ist es im ersten Abschnitt sichtbar und in anderen aus Gründen der Kürze ausgeblendet.

## Was ist Überlauf?

Indem Sie einem Element eine feste Höhe und Breite geben und dann erheblichen Inhalt in das Kästchen hinzufügen, entsteht ein grundlegendes Überlaufbeispiel:

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

Der Inhalt gelangt in das Kästchen. Sobald es das Kästchen füllt, läuft es weiterhin sichtbar über und zeigt den Inhalt außerhalb des Kästchens an, möglicherweise unter anschließendem Inhalt. Die Eigenschaft, die steuert, wie Überlauf sich verhält, ist die {{cssxref("overflow")}}-Eigenschaft, die einen initialen Wert von `visible` hat. Dies ist der Grund, warum wir den Überlaufinhalt sehen können.

## Überlauf steuern

Es gibt andere Werte, die steuern, wie sich Überlaufinhalte verhalten. Um überlaufenden Inhalt auszublenden, verwenden Sie einen Wert von `hidden`. Dies kann dazu führen, dass ein Teil Ihres Inhalts nicht sichtbar ist.

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

Die Verwendung eines Wertes von `scroll` enthält den Inhalt in seinem Kästchen und fügt Scrollleisten hinzu, um ihn anzuzeigen. Scrollleisten werden auch hinzugefügt, wenn der Inhalt in das Kästchen passt.

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

Bei der Verwendung eines Wertes von `auto` wird der Inhalt ohne Scrollleisten angezeigt, wenn der Inhalt in das Kästchen passt. Wenn er nicht passt, werden Scrollleisten hinzugefügt. Im Vergleich zum nächsten Beispiel sollten Sie sehen, dass das `overflow: scroll`-Beispiel oben horizontale und vertikale Scrollleisten hat, obwohl nur das vertikale Scrollen erforderlich ist. Das `auto`-Beispiel unten fügt nur in der Richtung, in der gescrollt werden muss, die Scrollleiste hinzu.

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

Wie wir bereits gelernt haben, wird bei der Verwendung eines dieser Werte, abgesehen vom Standardwert `visible`, ein neuer [Blockformatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) erstellt.

`overflow: clip` verhält sich wie `overflow: hidden`, erlaubt jedoch kein programmgesteuertes Scrollen; das Kästchen wird nicht scrollbar. Es erstellt auch keinen Blockformatierungskontext.

Die overflow-Eigenschaft ist in Wirklichkeit eine Kurzform für die {{cssxref("overflow-x")}}- und {{cssxref("overflow-y")}}-Eigenschaften. Wenn Sie nur einen Wert für overflow angeben, wird dieser Wert für beide Achsen verwendet. Sie können jedoch beide Werte angeben, wobei der erste für `overflow-x` und damit die horizontale Richtung und der zweite für `overflow-y` und die vertikale Richtung verwendet wird. Im untenstehenden Beispiel habe ich nur `overflow-y: scroll` angegeben, sodass wir die unerwünschte horizontale Scrollleiste nicht erhalten.

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

## Fließbezogene Eigenschaften

Im Leitfaden zu [Schreibmodi und Flusslayout](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes) haben wir uns die Eigenschaften `block-size` und `inline-size` angesehen, die mehr Sinn machen, wenn mit unterschiedlichen Schreibmodi gearbeitet wird, als unsere Layouts an die physischen Abmessungen des Bildschirms zu binden. Das [CSS-Überlaufsmodul](/de/docs/Web/CSS/Guides/Overflow) enthält auch fließbezogene Eigenschaften für Überlauf - [`overflow-block`](/de/docs/Web/CSS/Reference/At-rules/@media/overflow-block) und [`overflow-inline`](/de/docs/Web/CSS/Reference/At-rules/@media/overflow-inline). Diese entsprechen `overflow-x` und `overflow-y`, aber die Zuordnung hängt vom Schreibmodus des Dokuments ab.

## Überlauf anzeigen

Im CSS-Überlaufsmodul gibt es einige Eigenschaften, die helfen können, das Erscheinungsbild von Inhalten in Überlaufsituationen zu verbessern.

### Inline-Achsen-Überlauf

Die {{cssxref("text-overflow")}}-Eigenschaft befasst sich mit Text, der in der Inline-Richtung überläuft. Sie nimmt einen von zwei Werten ein: `clip`, in diesem Fall wird der Inhalt abgeschnitten, wenn er überläuft, dies ist der initiale Wert und somit das Standardverhalten. Wir haben auch `ellipsis`, was ein Auslassungszeichen darstellt, welches möglicherweise durch ein besseres Zeichen für die verwendete Sprache oder den Schreibmodus ersetzt wird.

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

Die [Overflow Module Level 4](https://drafts.csswg.org/css-overflow-4/#propdef-block-ellipsis) Spezifikation fügt eine `block-ellipsis`-Eigenschaft hinzu ([zuvor `block-overflow` genannt](https://github.com/w3c/csswg-drafts/commit/20b15b4d66b0fdfa8406f1ce28604128f02ee7bb)). Diese Eigenschaft ermöglicht es, ein Auslassungszeichen (oder benutzerdefinierte Zeichenfolgen) hinzuzufügen, wenn Text in der Blockdimension überläuft, obwohl es zum Zeitpunkt des Schreibens noch keine Browserunterstützung dafür gibt.

Dies ist nützlich in der Situation, in der Sie eine Liste von Artikeln haben und die Listen in Kästchen mit fester Höhe anzeigen, die nur eine begrenzte Textmenge aufnehmen. Es ist möglicherweise für den Leser nicht offensichtlich, dass es mehr Inhalte gibt, auf die geklickt werden kann, wenn auf das Kästchen oder den Titel geklickt wird. Ein Auslassungszeichen deutet klar darauf hin, dass es weitere Inhalte gibt. Die Spezifikation würde erlauben, eine Zeichenkette von Inhalten oder ein reguläres Auslassungszeichen einzufügen.

## Zusammenfassung

Ob Sie sich im kontinuierlichen Medium im Web oder in einem seitenbasierten Medienformat wie Druck oder EPUB befinden, das Verständnis, wie Inhalte überfließen, ist nützlich beim Umgang mit jeder Layoutmethode. Das Verständnis, wie Überlauf im normalen Fluss funktioniert, ermöglicht ein größeres Verständnis der Auswirkungen von Überlaufinhalten in Layoutmethoden wie Raster und Flexbox.

## Siehe auch

- [Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) Leitfaden
- [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS Containment](/de/docs/Web/CSS/Guides/Containment) Modul
