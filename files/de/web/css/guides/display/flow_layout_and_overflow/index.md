---
title: Flusslayout und Überlauf
slug: Web/CSS/Guides/Display/Flow_layout_and_overflow
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Wenn mehr Inhalt vorhanden ist, als in einen Container passt, tritt eine Überlaufsituation auf. Das Verständnis, wie Überlauf sich verhält, ist wichtig, wenn Sie mit jedem Element arbeiten, das in CSS eine begrenzte Größe hat. Dieser Leitfaden erklärt, wie Überlauf funktioniert, wenn Sie mit normalem Fluss arbeiten. Das HTML ist in jedem Beispiel gleich, also ist es im ersten Abschnitt sichtbar und in anderen aus Gründen der Kürze ausgeblendet.

## Was ist Überlauf?

Einem Element eine feste Höhe und Breite zu geben und dann signifikanten Inhalt in das Kästchen hinzuzufügen, erstellt ein grundlegendes Überlaufbeispiel:

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

Der Inhalt gelangt in das Kästchen. Sobald es das Kästchen füllt, überfließt es weiter auf sichtbare Weise und zeigt Inhalt außerhalb des Kästchens an, möglicherweise unter anschließendem Inhalt. Die Eigenschaft, die steuert, wie Überlauf sich verhält, ist die [`overflow`](/de/docs/Web/CSS/Reference/Properties/overflow)-Eigenschaft, die einen Initialwert von `visible` hat. Deshalb können wir den übergreifenden Inhalt sehen.

## Überlauf steuern

Es gibt andere Werte, die steuern, wie Überlauf-Inhalt sich verhält. Um übergreifenden Inhalt zu verbergen, verwenden Sie den Wert `hidden`. Dies kann dazu führen, dass einige Ihrer Inhalte nicht sichtbar sind.

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

Mit einem Wert von `scroll` wird der Inhalt im Kästchen enthalten und Scrollleisten hinzugefügt, um ihn anzuzeigen. Scrollleisten werden auch hinzugefügt, wenn der Inhalt in das Kästchen passt.

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

Verwenden eines Werts von `auto` wird den Inhalt ohne Scrollleisten anzeigen, wenn der Inhalt in das Kästchen passt. Wenn er nicht passt, werden Scrollleisten hinzugefügt. Vergleichen Sie das nächste Beispiel, Sie sollten sehen, dass das `overflow: scroll`-Beispiel oben horizontale und vertikale Scrollleisten hat, obwohl es nur vertikales Scrollen benötigt. Das `auto`-Beispiel unten fügt die Scrollleiste nur in der Richtung hinzu, in der wir scrollen müssen.

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

Wie wir bereits gelernt haben, wird durch die Verwendung eines dieser Werte, außer dem Standardwert `visible`, ein neuer [Blockformatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) erstellt.

`overflow: clip` verhält sich wie `overflow: hidden`, erlaubt jedoch kein programmatisches Scrollen; das Kästchen wird nicht scrollbar. Es erstellt auch keinen Blockformatierungskontext.

Die Überlauf-Eigenschaft ist eigentlich eine Kurzform für die [`overflow-x`](/de/docs/Web/CSS/Reference/Properties/overflow-x) und [`overflow-y`](/de/docs/Web/CSS/Reference/Properties/overflow-y)-Eigenschaften. Wenn Sie nur einen Wert für den Überlauf angeben, wird dieser Wert für beide Achsen verwendet. Sie können jedoch beide Werte angeben, in diesem Fall wird der erste für `overflow-x` und damit für die horizontale Richtung verwendet, und der zweite für `overflow-y` und die vertikale Richtung. Im folgenden Beispiel habe ich nur `overflow-y: scroll` angegeben, sodass wir die unerwünschte horizontale Scrollleiste nicht erhalten.

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

## Flussverwandte Eigenschaften

Im Leitfaden zu [Schreibmodi und Flusslayout](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes) haben wir uns die Eigenschaften `block-size` und `inline-size` angesehen, die mehr Sinn machen, wenn Sie mit verschiedenen Schreibmodi arbeiten, als unser Layout an die physischen Dimensionen des Bildschirms zu binden. Das [CSS-Überlaufmodul](/de/docs/Web/CSS/Guides/Overflow) umfasst auch flussverwandte Eigenschaften für Überlauf - [`overflow-block`](/de/docs/Web/CSS/Reference/At-rules/@media/overflow-block) und [`overflow-inline`](/de/docs/Web/CSS/Reference/At-rules/@media/overflow-inline). Diese entsprechen `overflow-x` und `overflow-y`, aber die Zuordnung hängt vom Schreibmodus des Dokuments ab.

## Überlauf anzeigen

Im CSS-Überlaufmodul gibt es einige Eigenschaften, die das Erscheinungsbild von Inhalt in einer Überlaufsituation verbessern können.

### Überlauf in der Inlinerichtung

Die [`text-overflow`](/de/docs/Web/CSS/Reference/Properties/text-overflow)-Eigenschaft befasst sich mit Textüberlauf in der Inlinerichtung. Sie nimmt einen von zwei Werten an: `clip`, in welchem Fall der Inhalt abgeschnitten wird, wenn er überläuft, das ist der Anfangswert und daher das Standardverhalten. Wir haben auch `ellipsis`, das ein Auslassungszeichen rendert, das möglicherweise durch ein besseres Zeichen für die verwendete Sprache oder den verwendeten Schreibmodus ersetzt wird.

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

### Überlauf in Blockrichtung

Die [Overflow Module Level 4](https://drafts.csswg.org/css-overflow-4/#propdef-block-ellipsis) Spezifikation fügt eine `block-ellipsis`-Eigenschaft hinzu ([zuvor `block-overflow` genannt](https://github.com/w3c/csswg-drafts/commit/20b15b4d66b0fdfa8406f1ce28604128f02ee7bb)). Diese Eigenschaft ermöglicht das Hinzufügen eines Auslassungszeichens (oder benutzerdefinierter Zeichenfolgen), wenn Text in der Blockdimension überläuft, obwohl es zum Zeitpunkt des Schreibens keine Browserunterstützung dafür gibt.

Dies ist in der Situation nützlich, in der Sie eine Liste von Artikeln haben, und Sie die Auflistungen in Kästchen fester Höhe anzeigen, die nur eine begrenzte Menge an Text aufnehmen. Es mag dem Leser nicht offensichtlich sein, dass es mehr Inhalt gibt, um den er durch Klicken auf das Kästchen oder den Titel erkunden kann. Ein Auslassungszeichen weist deutlich darauf hin, dass es mehr Inhalt gibt. Die Spezifikation würde erlauben, eine Zeichenfolge oder ein reguläres Auslassungszeichen einzufügen.

## Zusammenfassung

Ob Sie sich in kontinuierlichen Medien im Web oder in einem Seitisierten Medienformat wie Druck oder EPUB befinden, das Verständnis, wie Inhalt überläuft, ist nützlich, wenn Sie mit jeder Layoutmethode arbeiten. Durch das Verständnis, wie Überlauf im normalen Fluss funktioniert, sollten Sie es einfacher finden, die Auswirkungen von überlaufendem Inhalt in Layoutmethoden wie Grid und Flexbox zu verstehen.

## Siehe auch

- [Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) Leitfaden
- [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS-Einschränkung](/de/docs/Web/CSS/Guides/Containment) Modul
