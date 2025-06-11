---
title: Flusslayout und Überlauf
slug: Web/CSS/CSS_display/Flow_layout_and_overflow
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{CSSRef}}

Wenn mehr Inhalt vorhanden ist, als in einen Container passt, tritt eine Überlaufsituation auf. Zu verstehen, wie Überlauf sich verhält, ist wichtig im Umgang mit jedem Element mit begrenzter Größe in CSS. Dieser Leitfaden erklärt, wie Überlauf funktioniert, wenn man mit normalem Fluss arbeitet.
Das HTML ist in jedem Beispiel dasselbe, daher ist es im ersten Abschnitt sichtbar und in anderen aus Platzgründen verborgen.

## Was ist Überlauf?

Einem Element eine feste Höhe und Breite zu geben und dann signifikanten Inhalt in die Box hinzuzufügen, schafft ein grundlegendes Beispiel für Überlauf:

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

Der Inhalt geht in die Box. Sobald er die Box füllt, läuft er sichtbar über und wird möglicherweise unter nachfolgendem Inhalt angezeigt. Die Eigenschaft, die steuert, wie Überlauf sich verhält, ist die [`overflow`](/de/docs/Web/CSS/overflow)-Eigenschaft, die einen Anfangswert von `visible` hat. Deshalb können wir den Überlaufinhalt sehen.

## Überlauf steuern

Es gibt andere Werte, die steuern, wie sich Überlaufinhalt verhält. Um überlaufenden Inhalt auszublenden, verwenden Sie den Wert `hidden`. Dies kann dazu führen, dass ein Teil Ihres Inhalts nicht sichtbar ist.

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

Die Verwendung des Werts `scroll` enthält den Inhalt in seiner Box und fügt Bildlaufleisten hinzu, um ihn anzuzeigen. Bildlaufleisten werden hinzugefügt, auch wenn der Inhalt in die Box passt.

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

Die Verwendung des Werts `auto` wird den Inhalt ohne Bildlaufleisten anzeigen, wenn der Inhalt in die Box passt. Wenn er nicht passt, werden Bildlaufleisten hinzugefügt. Beim Vergleich des nächsten Beispiels sollten Sie sehen, dass das Beispiel `overflow: scroll` oben horizontale und vertikale Bildlaufleisten hat, obwohl nur vertikales Scrollen benötigt wird. Das unten stehende `auto`-Beispiel fügt die Bildlaufleiste nur in der Richtung hinzu, in die wir scrollen müssen.

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

Wie wir bereits gelernt haben, erzeugt die Verwendung eines dieser Werte, außer dem Standardwert `visible`, einen neuen [Block-Formatierungs-Kontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context).

`overflow: clip` funktioniert wie `overflow: hidden`, erlaubt aber kein programmatisches Scrollen; die Box wird nicht scrollbar. Es erstellt auch keinen Block-Formatierungs-Kontext.

Die Überlauf-Eigenschaft ist in Wirklichkeit eine Abkürzung für die [`overflow-x`](/de/docs/Web/CSS/overflow-x)- und [`overflow-y`](/de/docs/Web/CSS/overflow-y)-Eigenschaften. Wenn Sie nur einen Wert für Überlauf angeben, wird dieser Wert für beide Achsen verwendet. Sie können jedoch auch beide Werte angeben, wobei der erste für `overflow-x` und damit für die horizontale Richtung und der zweite für `overflow-y` und die vertikale Richtung verwendet wird. Im untenstehenden Beispiel habe ich nur `overflow-y: scroll` angegeben, sodass wir die unerwünschte horizontale Bildlaufleiste nicht erhalten.

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

Im Leitfaden zu [Schreibmodi und Flusslayout](/de/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes) haben wir uns die Eigenschaften `block-size` und `inline-size` angesehen, die mehr Sinn machen, wenn man mit verschiedenen Schreibmodi arbeitet, als unser Layout an die physischen Abmessungen des Bildschirms zu binden. Das [CSS-Überlauf-Modul](/de/docs/Web/CSS/CSS_overflow) enthält auch flussbezogene Eigenschaften für Überlauf - [`overflow-block`](/de/docs/Web/CSS/@media/overflow-block) und [`overflow-inline`](/de/docs/Web/CSS/@media/overflow-inline). Diese entsprechen `overflow-x` und `overflow-y`, aber die Zuordnung hängt vom Schreibmodus des Dokuments ab.

## Überlauf anzeigen

Im CSS-Überlauf-Modul gibt es einige Eigenschaften, die dazu beitragen können, das Aussehen von Inhalten in einer Überlaufsituation zu verbessern.

### Inline-Achsen-Überlauf

Die [`text-overflow`](/de/docs/Web/CSS/text-overflow)-Eigenschaft befasst sich mit Überlauf von Text in der Inline-Richtung. Sie nimmt einen von zwei Werten `clip`, bei dem der Inhalt abgeschnitten wird, wenn er überläuft, das ist der Anfangswert und daher das Standardverhalten. Wir haben auch `ellipsis`, das eine Ellipse rendert, die möglicherweise für die verwendete Sprache oder den Schreibmodus durch ein besseres Zeichen ersetzt wird.

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

Die [Overflow Module Level 4](https://drafts.csswg.org/css-overflow-4/#propdef-block-ellipsis)-Spezifikation fügt eine `block-ellipsis`-Eigenschaft hinzu ([zuvor `block-overflow` genannt](https://github.com/w3c/csswg-drafts/commit/20b15b4d66b0fdfa8406f1ce28604128f02ee7bb)). Diese Eigenschaft ermöglicht das Hinzufügen einer Ellipse (oder benutzerdefinierter Zeichenfolgen), wenn Text in der Block-Dimension überläuft, obwohl es zum Zeitpunkt des Schreibens keine Unterstützung durch Browser gibt.

Dies ist nützlich in Situationen, in denen Sie eine Liste von Artikeln haben und die Einträge in Boxen mit fester Höhe anzeigen, die nur eine begrenzte Menge Text aufnehmen. Es ist möglicherweise nicht offensichtlich für den Leser, dass mehr Inhalt zum Anklicken vorhanden ist, wenn er auf die Box oder den Titel klickt. Eine Ellipse zeigt deutlich an, dass noch mehr Inhalt vorhanden ist. Die Spezifikation würde erlauben, eine Zeichenfolge oder eine normale Ellipse einzufügen.

## Zusammenfassung

Ob Sie sich in kontinuierlichen Medien im Web oder in einem Paged-Media-Format wie Druck oder EPUB befinden, das Verständnis, wie Inhalte überlaufen, ist nützlich, wenn Sie mit jedem Layout-Verfahren arbeiten. Indem Sie verstehen, wie Überlauf im normalen Fluss funktioniert, sollte es Ihnen leichter fallen, die Auswirkungen von Überlauf-Inhalten in Layout-Methoden wie Grid und Flexbox zu verstehen.

## Siehe auch

- [Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)-Leitfaden
- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow)-Modul
- [CSS-Eindämmung](/de/docs/Web/CSS/CSS_containment)-Modul
