---
title: Flow-Layout und Überlauf
slug: Web/CSS/CSS_display/Flow_layout_and_overflow
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Wenn mehr Inhalt vorhanden ist, als in einen Container passt, tritt eine Überlaufsituation auf. Das Verstehen des Verhaltens von Überläufen ist wichtig, wenn Sie mit einem Element mit begrenzter Größe in CSS arbeiten. Dieser Leitfaden erklärt, wie Überlauf funktioniert, wenn Sie mit normalem Fluss arbeiten. Das HTML ist in jedem Beispiel dasselbe, daher ist es im ersten Abschnitt sichtbar und in anderen aus Gründen der Kürze versteckt.

## Was ist Überlauf?

Wenn Sie einem Element eine feste Höhe und Breite geben und dann erheblichen Inhalt in die Box einfügen, entsteht ein grundlegendes Überlaufbeispiel:

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

Der Inhalt wird in die Box eingefügt. Sobald er die Box füllt, fließt er in sichtbarer Weise über, zeigt Inhalte außerhalb der Box an und kann möglicherweise unter nachfolgendem Inhalt angezeigt werden. Die Eigenschaft, die kontrolliert, wie der Überlauf sich verhält, ist die [`overflow`](/de/docs/Web/CSS/overflow)-Eigenschaft, die einen Anfangswert von `visible` hat. Deshalb können wir den Überlauf-Inhalt sehen.

## Überlauf steuern

Es gibt andere Werte, die steuern, wie sich Überlauf-Inhalt verhält. Um überlaufenden Inhalt zu verbergen, verwenden Sie den Wert `hidden`. Dadurch kann jedoch ein Teil Ihres Inhalts nicht sichtbar sein.

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

Die Verwendung eines Wertes von `scroll` enthält den Inhalt in seiner Box und fügt Scrollleisten hinzu, um das Anzeigen zu ermöglichen. Scrollleisten werden auch dann hinzugefügt, wenn der Inhalt in die Box passt.

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

Die Verwendung eines Wertes von `auto` zeigt den Inhalt ohne Scrollleisten an, wenn der Inhalt in die Box passt. Wenn er nicht passt, werden Scrollleisten hinzugefügt. Beim Vergleich des nächsten Beispiels sollten Sie sehen, dass das `overflow: scroll`-Beispiel oben horizontale und vertikale Scrollleisten hat, obwohl es nur vertikales Scrollen benötigt. Das `auto`-Beispiel unten fügt die Scrollleiste nur in der Richtung hinzu, in der wir scrollen müssen.

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

Wie wir bereits gelernt haben, erzeugt die Verwendung eines dieser Werte, mit Ausnahme des Standardwertes `visible`, einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context).

`overflow: clip` wirkt wie `overflow: hidden`, erlaubt jedoch kein programmgesteuertes Scrollen; die Box wird nicht scrollbar. Es erzeugt auch keinen Blockformatierungskontext.

In Wirklichkeit ist die Überlauf-Eigenschaft eine Kurzform für die Eigenschaften [`overflow-x`](/de/docs/Web/CSS/overflow-x) und [`overflow-y`](/de/docs/Web/CSS/overflow-y). Wenn Sie nur einen Wert für `overflow` angeben, wird dieser Wert für beide Achsen verwendet. Sie können jedoch auch beide Werte angeben, wobei der erste für `overflow-x` und somit die horizontale Richtung verwendet wird und der zweite für `overflow-y` und die vertikale Richtung. Im untenstehenden Beispiel habe ich nur `overflow-y: scroll` angegeben, sodass wir die unerwünschte horizontale Scrollleiste nicht bekommen.

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

## Flow-Relative Eigenschaften

Im Leitfaden zu [Schreibmodi und Flusslayout](/de/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes) haben wir uns die Eigenschaften `block-size` und `inline-size` angesehen, die bei der Arbeit mit verschiedenen Schreibmodi mehr Sinn machen als die Festlegung unseres Layouts auf die physischen Abmessungen des Bildschirms. Das [CSS overflow-Modul](/de/docs/Web/CSS/CSS_overflow) umfasst auch fluss-Relative Eigenschaften für Überlauf - [`overflow-block`](/de/docs/Web/CSS/@media/overflow-block) und [`overflow-inline`](/de/docs/Web/CSS/@media/overflow-inline). Diese entsprechen `overflow-x` und `overflow-y`, aber die Zuordnung hängt vom Schreibmodus des Dokuments ab.

## Überlauf anzeigen

Im CSS overflow-Modul gibt es einige Eigenschaften, die helfen können, das Erscheinungsbild von Inhalten in einer Überlaufsituation zu verbessern.

### Inline-Achsen-Überlauf

Die [`text-overflow`](/de/docs/Web/CSS/text-overflow)-Eigenschaft befasst sich mit dem Überlaufen von Text in der Inline-Richtung. Sie nimmt einen von zwei Werten an: `clip`, wobei der Inhalt abgeschnitten wird, wenn er überläuft; dies ist der Anfangswert und daher das Standardverhalten. Wir haben auch `ellipsis`, das ein Auslassungszeichen rendert, welches durch ein besseres Zeichen für die verwendete Sprache oder den verwendeten Schreibmodus ersetzt werden kann.

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

Die [Overflow Modul Level 4](https://drafts.csswg.org/css-overflow-4/#propdef-block-ellipsis)-Spezifikation fügt eine `block-ellipsis`-Eigenschaft hinzu ([zuvor `block-overflow` genannt](https://github.com/w3c/csswg-drafts/commit/20b15b4d66b0fdfa8406f1ce28604128f02ee7bb)). Diese Eigenschaft ermöglicht das Hinzufügen eines Auslassungszeichens (oder benutzerdefinierter Zeichenfolgen), wenn der Text in der Blockdimension überläuft, obwohl es zum Zeitpunkt des Schreibens keine Browserunterstützung dafür gibt.

Dies ist nützlich in der Situation, in der Sie eine Liste von Artikeln haben, die Sie in Boxen mit fester Höhe anzeigen, die nur eine begrenzte Textmenge aufnehmen. Es ist möglicherweise nicht offensichtlich für den Leser, dass es mehr Inhalt gibt, um weiterzuklicken, wenn er die Box oder den Titel anklickt. Ein Auslassungszeichen zeigt deutlich an, dass es mehr Inhalt gibt. Die Spezifikation würde das Einfügen einer Zeichenfolge von Inhalten oder eines regulären Auslassungszeichens erlauben.

## Zusammenfassung

Egal, ob Sie in kontinuierlichen Medien im Web oder in einem paginierten Medienformat wie Druck oder EPUB arbeiten, das Verstehen, wie Inhalte überlaufen, ist nützlich, wenn Sie mit jeder Layoutmethode umgehen. Indem Sie verstehen, wie Überlauf im normalen Fluss funktioniert, sollten Sie es einfacher finden, die Auswirkungen von Überlauf-Inhalten in Layoutmethoden wie Grid und Flexbox zu verstehen.

## Siehe auch

- [Leitfaden zum Überlaufenden Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
- [CSS overflow](/de/docs/Web/CSS/CSS_overflow)-Modul
- [CSS containment](/de/docs/Web/CSS/CSS_containment) Moduls
