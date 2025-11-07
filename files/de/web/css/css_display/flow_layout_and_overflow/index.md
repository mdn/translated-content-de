---
title: Fließlayout und Überlauf
slug: Web/CSS/CSS_display/Flow_layout_and_overflow
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Wenn mehr Inhalt vorhanden ist, als in einen Container passt, tritt eine Überlaufsituation auf. Das Verständnis, wie Überlauf funktioniert, ist wichtig, um mit jedem Element mit einer eingeschränkten Größe in CSS umzugehen. Dieser Leitfaden erklärt, wie Überlauf funktioniert, wenn Sie mit normalem Fluss arbeiten. Das HTML ist in jedem Beispiel gleich, daher ist es im ersten Abschnitt sichtbar und in anderen aus Gründen der Kürze verborgen.

## Was ist Überlauf?

Einem Element eine feste Höhe und Breite zu geben und dann signifikanten Inhalt zur Box hinzuzufügen, erzeugt ein einfaches Überlaufbeispiel:

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

Der Inhalt geht in die Box. Sobald er die Box füllt, fließt er auf sichtbare Weise über, wobei der Inhalt außerhalb der Box angezeigt wird und möglicherweise unter den nachfolgenden Inhalten sichtbar wird. Die Eigenschaft, die kontrolliert, wie Überlauf funktioniert, ist die [`overflow`](/de/docs/Web/CSS/Reference/Properties/overflow)-Eigenschaft, die einen Anfangswert von `visible` hat. Deshalb können wir den Überlaufinhalt sehen.

## Überlauf steuern

Es gibt andere Werte, die steuern, wie sich der überlaufende Inhalt verhält. Um überlaufenden Inhalt auszublenden, verwenden Sie einen Wert von `hidden`. Dies kann dazu führen, dass ein Teil Ihres Inhalts nicht sichtbar ist.

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

Die Verwendung eines Wertes von `scroll` enthält den Inhalt in seiner Box und fügt Bildlaufleisten hinzu, um ihn anzuzeigen. Bildlaufleisten werden hinzugefügt, auch wenn der Inhalt in die Box passt.

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

Die Verwendung eines Wertes von `auto` zeigt den Inhalt ohne Bildlaufleisten an, wenn der Inhalt in die Box passt. Wenn er nicht passt, werden Bildlaufleisten hinzugefügt. Beim Vergleich des nächsten Beispiels sollten Sie sehen, dass das obige Beispiel `overflow: scroll` horizontale und vertikale Bildlaufleisten hat, auch wenn es nur vertikalen Bildlauf benötigt. Das `auto`-Beispiel unten fügt nur in der Richtung, in die wir scrollen müssen, die Bildlaufleiste hinzu.

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

Wie wir bereits gelernt haben, wird durch die Verwendung eines dieser Werte, mit Ausnahme des Standardwertes `visible`, ein neuer [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) erstellt.

`overflow: clip` verhält sich wie `overflow: hidden`, erlaubt jedoch kein programmatisches Scrollen; die Box wird nicht-scrollbar. Es erstellt auch keinen Block-Formatierungskontext.

In Wirklichkeit ist die Overflow-Eigenschaft eine Kurzform für die [`overflow-x`](/de/docs/Web/CSS/Reference/Properties/overflow-x) und [`overflow-y`](/de/docs/Web/CSS/Reference/Properties/overflow-y) Eigenschaften. Wenn Sie nur einen Wert für den Überlauf angeben, wird dieser Wert für beide Achsen verwendet. Sie können jedoch auch beide Werte angeben, wobei der erste für `overflow-x` und damit die horizontale Richtung und der zweite für `overflow-y` und die vertikale Richtung verwendet wird. Im untenstehenden Beispiel habe ich nur `overflow-y: scroll` angegeben, sodass die unerwünschte horizontale Bildlaufleiste nicht angezeigt wird.

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

## Fluss-relative Eigenschaften

Im Leitfaden zu [Schreibmodi und Fließlayout](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes) haben wir uns die Eigenschaften `block-size` und `inline-size` angesehen, die mehr Sinn machen, wenn man mit verschiedenen Schreibmodi arbeitet, anstatt unser Layout an die physischen Abmessungen des Bildschirms zu binden. Das [CSS Overflow-Modul](/de/docs/Web/CSS/Guides/Overflow) enthält auch fluss-relative Eigenschaften für Überlauf - [`overflow-block`](/de/docs/Web/CSS/Reference/At-rules/@media/overflow-block) und [`overflow-inline`](/de/docs/Web/CSS/Reference/At-rules/@media/overflow-inline). Diese entsprechen `overflow-x` und `overflow-y`, aber die Zuordnung hängt vom Schreibmodus des Dokuments ab.

## Überlauf anzeigen

Im CSS Overflow-Modul gibt es einige Eigenschaften, die helfen können, das Erscheinungsbild von Inhalten in einer Überlaufsituation zu verbessern.

### Inline-Achsen-Überlauf

Die [`text-overflow`](/de/docs/Web/CSS/Reference/Properties/text-overflow)-Eigenschaft befasst sich mit Text, der in der Inline-Richtung überläuft. Sie nimmt einen von zwei Werten `clip` an, wobei der Inhalt abgeschnitten wird, wenn er überläuft, dies ist der Anfangswert und somit das Standardverhalten. Es gibt auch `ellipsis`, das ein Auslassungszeichen rendert, das möglicherweise durch ein besseres Zeichen für die verwendete Sprache oder den Schreibmodus ersetzt wird.

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

Die [Overflow Module Level 4](https://drafts.csswg.org/css-overflow-4/#propdef-block-ellipsis)-Spezifikation fügt eine `block-ellipsis`-Eigenschaft hinzu ([früher `block-overflow` genannt](https://github.com/w3c/csswg-drafts/commit/20b15b4d66b0fdfa8406f1ce28604128f02ee7bb)). Diese Eigenschaft ermöglicht das Hinzufügen eines Auslassungszeichens (oder benutzerdefinierter Zeichenfolgen), wenn Text in der Block-Dimension überläuft, obwohl es zum Zeitpunkt des Schreibens keine Browserunterstützung dafür gibt.

Dies ist nützlich in der Situation, in der Sie eine Liste von Artikeln haben und die Einträge in Kästen mit fester Höhe anzeigen, die nur eine begrenzte Menge Text aufnehmen. Es mag dem Leser nicht offensichtlich sein, dass es mehr Inhalt gibt, durch den er klicken kann, wenn er den Kasten oder den Titel anklickt. Ein Auslassungszeichen zeigt klar an, dass es mehr Inhalt gibt. Die Spezifikation würde das Einfügen einer Zeichenfolge von Inhalten oder eines normalen Auslassungszeichens erlauben.

## Zusammenfassung

Unabhängig davon, ob Sie sich in kontinuierlichen Medien im Internet oder in einem Paged Media-Format wie Druck oder EPUB befinden, ist das Verständnis, wie Inhalte überlaufen, nützlich, wenn Sie mit jeder Layoutmethode arbeiten. Wenn Sie verstehen, wie Überlauf im normalen Fluss funktioniert, sollten Sie die Auswirkungen von Überlaufinhalten in Layoutmethoden wie Grid und Flexbox leichter verstehen.

## Siehe auch

- [Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) Leitfaden
- [CSS Overflow](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS Containment](/de/docs/Web/CSS/Guides/Containment) Modul
