---
title: Flusslayout und Überlauf
slug: Web/CSS/CSS_flow_layout/Flow_layout_and_overflow
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Wenn mehr Inhalt vorhanden ist, als in einen Container passt, tritt eine Überlaufsituation auf. Das Verständnis davon, wie Überlauf funktioniert, ist wichtig, um mit jedem Element mit begrenzter Größe in CSS umzugehen. Dieser Leitfaden erklärt, wie Überlauf funktioniert, wenn Sie mit normalem Fluss arbeiten. Der HTML-Code ist in jedem Beispiel derselbe, daher wird er im ersten Abschnitt angezeigt und in den anderen aus Gründen der Kürze ausgeblendet.

## Was ist Überlauf?

Wenn man einem Element eine feste Höhe und Breite gibt und dann signifikanten Inhalt zur Box hinzufügt, entsteht ein einfaches Überlaufbeispiel:

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

Der Inhalt geht in die Box. Sobald er die Box füllt, beginnt er sichtbar überzufließen, indem er Inhalt außerhalb der Box anzeigt und möglicherweise unter nachfolgendem Inhalt. Die Eigenschaft, die steuert, wie Überlauf sich verhält, ist die [`overflow`](/de/docs/Web/CSS/overflow)-Eigenschaft, die einen Anfangswert von `visible` hat. Deshalb können wir den Überlaufinhalt sehen.

## Überlauf kontrollieren

Es gibt andere Werte, die steuern, wie Überlaufinhalt sich verhält. Um überfließenden Inhalt auszublenden, verwenden Sie den Wert `hidden`. Dies kann dazu führen, dass einige Ihrer Inhalte nicht sichtbar sind.

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

Bei der Verwendung von `scroll` wird der Inhalt in seinem Kasten eingeschlossen und es werden Rollbalken hinzugefügt, um ihn sichtbar zu machen. Rollbalken werden hinzugefügt, selbst wenn der Inhalt in den Kasten passt.

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

Der Wert `auto` zeigt den Inhalt ohne Rollbalken an, wenn der Inhalt in die Box passt. Wenn er nicht passt, werden Rollbalken hinzugefügt. Im Vergleich zum nächsten Beispiel sollten Sie sehen, dass das `overflow: scroll`-Beispiel oben horizontale und vertikale Rollbalken hat, obwohl nur vertikales Scrollen benötigt wird. Das `auto`-Beispiel unten fügt den Rollbalken nur in der Richtung hinzu, in der wir scrollen müssen.

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

Wie wir bereits gelernt haben, wird bei der Verwendung eines dieser Werte, abgesehen von dem Standardwert `visible`, ein neuer [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt.

> [!NOTE]
> In dem [Arbeitsentwurf von Overflow Level 3](https://www.w3.org/TR/css-overflow-3/) gibt es einen zusätzlichen Wert `overflow: clip`. Dieser verhält sich wie `overflow: hidden`, erlaubt jedoch kein programmatisches Scrollen, der Kasten wird nicht scrollbar. Zusätzlich erstellt er keinen Blockformatierungskontext.

Die Überlauf-Eigenschaft ist eigentlich eine Abkürzung für die [`overflow-x`](/de/docs/Web/CSS/overflow-x) und [`overflow-y`](/de/docs/Web/CSS/overflow-y)-Eigenschaften. Wenn Sie nur einen Wert für overflow angeben, wird dieser Wert für beide Achsen verwendet. Sie können jedoch auch beide Werte angeben, wobei der erste Wert für `overflow-x` und somit für die horizontale Richtung verwendet wird, und der zweite für `overflow-y` und die vertikale Richtung. Im untenstehenden Beispiel habe ich nur `overflow-y: scroll` angegeben, damit wir den unerwünschten horizontalen Rollbalken nicht bekommen.

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

## Flussrelative Eigenschaften

Im Leitfaden zu [Schreibmodi und Flusslayout](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes) haben wir die Eigenschaften `block-size` und `inline-size` betrachtet, die mehr Sinn machen, wenn man mit unterschiedlichen Schreibmodi arbeitet, als das Layout an die physischen Bildschirmabmessungen zu binden. Das [CSS Überlaufmodul](/de/docs/Web/CSS/CSS_overflow) enthält ebenfalls flussrelative Eigenschaften für Überlauf - [`overflow-block`](/de/docs/Web/CSS/@media/overflow-block) und [`overflow-inline`](/de/docs/Web/CSS/@media/overflow-inline). Diese entsprechen `overflow-x` und `overflow-y`, aber die Zuordnung hängt vom Schreibmodus des Dokuments ab.

## Überlauf kennzeichnen

Im CSS Überlaufmodul gibt es einige Eigenschaften, die dazu beitragen können, das Aussehen von Inhalt in einer Überlaufsituation zu verbessern.

### Inline-Achsen-Überlauf

Die [`text-overflow`](/de/docs/Web/CSS/text-overflow)-Eigenschaft befasst sich mit Text, der in der Inline-Richtung überläuft. Sie nimmt einen von zwei Werten an: `clip`, wobei der Inhalt abgeschnitten wird, wenn er überläuft, dies ist der Anfangswert und somit das Standardverhalten. Außerdem haben wir `ellipsis`, was ein Auslassungszeichen rendert, das möglicherweise mit einem besseren Zeichen für die verwendete Sprache oder den Schreibmodus ersetzt wird.

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

Die [Overflow Level 3](https://www.w3.org/TR/css-overflow-3/)-Spezifikation fügt eine `block-ellipsis`-Eigenschaft hinzu ([früher `block-overflow` genannt](https://github.com/w3c/csswg-drafts/commit/20b15b4d66b0fdfa8406f1ce28604128f02ee7bb)). Diese Eigenschaft ermöglicht das Hinzufügen eines Auslassungszeichens (oder benutzerdefinierter Zeichenfolgen), wenn Text in der Blockdimension überläuft, obwohl es zum Zeitpunkt des Schreibens dafür noch keine Browserunterstützung gibt.

Dies ist nützlich, wenn Sie eine Liste von Artikeln haben, zum Beispiel, und die Listen in Boxen mit fester Höhe anzeigen, die nur eine begrenzte Menge Text aufnehmen. Es mag für den Leser nicht offensichtlich sein, dass es mehr Inhalt zum Durchklicken gibt, wenn er auf die Box oder den Titel klickt. Ein Auslassungszeichen deutet klar darauf hin, dass es mehr Inhalt gibt. Die Spezifikation würde das Einfügen einer Zeichenfolge oder eines regulären Auslassungszeichens ermöglichen.

## Zusammenfassung

Ob Sie sich nun in kontinuierlichen Medien im Web befinden oder im Paged Media-Format wie Druck oder EPUB, das Verständnis, wie Inhalt überläuft, ist nützlich, wenn Sie mit jeder Layoutmethode arbeiten. Durch das Verständnis, wie Überlauf im normalen Fluss funktioniert, sollten Sie es einfacher finden, die Auswirkungen von Überlaufinhalt in Layoutmethoden wie Grid und Flexbox zu verstehen.

## Siehe auch

- [Leitfaden zu überlaufendem Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
- [CSS Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Containment](/de/docs/Web/CSS/CSS_containment) Modul
