---
title: Ablauf-Layout und Überlauf
slug: Web/CSS/Guides/Display/Flow_layout_and_overflow
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Wenn mehr Inhalte vorhanden sind, als in einen Container passen, tritt eine Überlaufsituation auf. Das Verständnis, wie Überlauf funktioniert, ist wichtig, um mit jedem Element mit eingeschränkter Größe in CSS umzugehen. Dieser Leitfaden erklärt, wie Überlauf funktioniert, wenn er im normalen Ablauf verwendet wird. Das HTML ist in jedem Beispiel dasselbe, daher ist es im ersten Abschnitt sichtbar und in anderen der Kürze halber verborgen.

## Was ist Überlauf?

Wenn Sie einem Element eine feste Höhe und Breite geben und dann erheblichen Inhalt zur Box hinzufügen, entsteht ein einfaches Überlaufbeispiel:

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

Der Inhalt geht in die Box. Sobald er die Box füllt, fließt er auf sichtbare Weise über und zeigt Inhalte außerhalb der Box an, möglicherweise auch unter nachfolgendem Inhalt. Die Eigenschaft, die steuert, wie Überlauf sich verhält, ist die [`overflow`](/de/docs/Web/CSS/Reference/Properties/overflow)-Eigenschaft, die den Anfangswert `visible` hat. Deshalb können wir den Überlaufinhalt sehen.

## Steuerung des Überlaufs

Es gibt andere Werte, die steuern, wie sich Überlauf Inhalt verhält. Um überfließenden Inhalt zu verbergen, verwenden Sie den Wert `hidden`. Dies kann dazu führen, dass einige Ihrer Inhalte nicht sichtbar sind.

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

Bei Verwendung des Wertes `scroll` wird der Inhalt in seiner Box enthalten und Scrollleisten hinzugefügt, um den Inhalt anzuzeigen. Scrollleisten werden hinzugefügt, auch wenn der Inhalt in die Box passt.

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

Mit einem Wert von `auto` wird der Inhalt ohne Scrollleisten angezeigt, wenn der Inhalt in die Box passt. Wenn er nicht passt, werden Scrollleisten hinzugefügt. Beim Vergleich des nächsten Beispiels sollten Sie sehen, dass das `overflow: scroll`-Beispiel oben sowohl horizontale als auch vertikale Scrollleisten hat, auch wenn es nur vertikales Scrollen benötigt. Das `auto`-Beispiel unten fügt die Scrollleiste nur in der Richtung hinzu, in der wir scrollen müssen.

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

Wie wir bereits gelernt haben, führt die Verwendung eines dieser Werte, außer dem Standardwert `visible`, dazu, dass ein neuer [Blockformatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) erstellt wird.

`overflow: clip` verhält sich wie `overflow: hidden`, erlaubt jedoch kein programmatisches Scrollen; die Box wird nicht scrollbar. Es erstellt auch keinen Blockformatierungskontext.

Die `overflow`-Eigenschaft ist in Wirklichkeit eine Abkürzung für die [`overflow-x`](/de/docs/Web/CSS/Reference/Properties/overflow-x) und [`overflow-y`](/de/docs/Web/CSS/Reference/Properties/overflow-y)-Eigenschaften. Wenn Sie nur einen Wert für `overflow` angeben, wird dieser Wert für beide Achsen verwendet. Sie können jedoch beide Werte angeben, wobei der erste für `overflow-x` und damit die horizontale Richtung verwendet wird, und der zweite für `overflow-y` und die vertikale Richtung. Im untenstehenden Beispiel habe ich nur `overflow-y: scroll` angegeben, sodass wir die unerwünschte horizontale Scrollleiste nicht haben.

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

Im Leitfaden zum [Schreibmodus und Flusslayout](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes) haben wir die `block-size` und `inline-size` Eigenschaften betrachtet, die mehr Sinn machen, wenn Sie mit verschiedenen Schreibmodi arbeiten, als das Layout an die physischen Abmessungen des Bildschirms zu binden. Das [CSS-Überlaufmodul](/de/docs/Web/CSS/Guides/Overflow) enthält auch flussbezogene Eigenschaften für Überlauf - [`overflow-block`](/de/docs/Web/CSS/Reference/At-rules/@media/overflow-block) und [`overflow-inline`](/de/docs/Web/CSS/Reference/At-rules/@media/overflow-inline). Diese entsprechen `overflow-x` und `overflow-y`, aber die Zuordnung hängt vom Schreibmodus des Dokuments ab.

## Anzeige des Überlaufs

Im CSS-Überlaufmodul gibt es einige Eigenschaften, die helfen können, das Aussehen von Inhalten in einer Überlaufsituation zu verbessern.

### Überlauf in der Inline-Achse

Die [`text-overflow`](/de/docs/Web/CSS/Reference/Properties/text-overflow)-Eigenschaft befasst sich mit Text, der in der Inline-Richtung überläuft. Sie nimmt einen von zwei Werten an: `clip`, wobei der Inhalt abgeschnitten wird, wenn er überläuft - dies ist der Anfangswert und daher das Standardverhalten. Es gibt auch `ellipsis`, das ein Auslassungszeichen rendert, das durch ein besseres Zeichen für die verwendete Sprache oder den Schreibmodus ersetzt werden kann.

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

### Überlauf in der Block-Achse

Die [Überlaufmodul Stufe 4](https://drafts.csswg.org/css-overflow-4/#propdef-block-ellipsis) Spezifikation fügt eine `block-ellipsis`-Eigenschaft hinzu ([früher `block-overflow` genannt](https://github.com/w3c/csswg-drafts/commit/20b15b4d66b0fdfa8406f1ce28604128f02ee7bb)). Diese Eigenschaft ermöglicht das Hinzufügen eines Auslassungspunkts (oder benutzerdefinierter Zeichenfolgen), wenn Text in der Block-Dimension überläuft, obwohl es derzeit keine Browserunterstützung dafür gibt.

Dies ist nützlich in einer Situation, in der Sie beispielsweise eine Auflistung von Artikeln haben und die Auflistungen in festgelegten Höhenboxen anzeigen, die nur eine begrenzte Menge an Text aufnehmen können. Es ist möglicherweise nicht offensichtlich für den Leser, dass es mehr Inhalte zum Durchklicken gibt, wenn er die Box oder den Titel anklickt. Ein Auslassungspunkt weist klar darauf hin, dass es mehr Inhalte gibt. Die Spezifikation würde es ermöglichen, eine Zeichenkette von Inhalten oder einen regulären Auslassungspunkt einzufügen.

## Zusammenfassung

Egal, ob Sie in kontinuierlichen Medien im Web arbeiten oder in einem Paged-Media-Format wie Druck oder EPUB, das Verständnis von Überlauf ist nützlich, wenn Sie mit jeder Layout-Methode umgehen. Durch das Verständnis, wie Überlauf im normalen Ablauf funktioniert, sollten Sie es einfacher finden, die Auswirkungen von Überlaufinhalten in Layoutmethoden wie Grid und Flexbox zu verstehen.

## Siehe auch

- [Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) Leitfaden
- [CSS Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS Enthalten](/de/docs/Web/CSS/Guides/Containment) Modul
