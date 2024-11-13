---
title: Fließlayout und Überlauf
slug: Web/CSS/CSS_flow_layout/Flow_layout_and_overflow
l10n:
  sourceCommit: c6e02b5aa7c12f9e64f80a62f75ede8f5cb5ec21
---

{{CSSRef}}

Wenn mehr Inhalt vorhanden ist, als in einen Container passt, tritt eine Überlaufsituation auf. Das Verständnis, wie Überlauf funktioniert, ist wichtig beim Umgang mit jedem Element mit begrenzter Größe in CSS. Dieser Leitfaden erklärt, wie Überlauf funktioniert, wenn man mit dem normalen Fluss arbeitet. Das HTML ist in jedem Beispiel dasselbe, daher wird es im ersten Abschnitt angezeigt und in anderen zur Kürze ausgeblendet.

## Was ist Überlauf?

Indem man einem Element eine feste Höhe und Breite gibt und dann beträchtlichen Inhalt zur Box hinzufügt, erhält man ein einfaches Überlaufbeispiel:

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

Der Inhalt gelangt in die Box. Sobald er die Box füllt, läuft er in sichtbarer Weise weiter über, wobei der Inhalt außerhalb der Box angezeigt wird, möglicherweise unter nachfolgendem Inhalt. Die Eigenschaft, die kontrolliert, wie Überlauf sich verhält, ist die [`overflow`](/de/docs/Web/CSS/overflow)-Eigenschaft, die einen initialen Wert von `visible` hat. Deshalb können wir den Überlaufinhalt sehen.

## Überlauf kontrollieren

Es gibt andere Werte, die kontrollieren, wie Überlaufinhalt sich verhält. Um überlaufenden Inhalt zu verbergen, verwenden Sie den Wert `hidden`. Dies kann dazu führen, dass einige Ihrer Inhalte nicht sichtbar sind.

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

Mit dem Wert `scroll` wird der Inhalt in seiner Box gehalten und es werden Bildlaufleisten hinzugefügt, um das Anzeigen zu ermöglichen. Bildlaufleisten werden hinzugefügt, auch wenn der Inhalt in die Box passt.

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

Die Verwendung des Wertes `auto` zeigt den Inhalt ohne Bildlaufleisten an, wenn der Inhalt in die Box passt. Wenn er nicht passt, werden Bildlaufleisten hinzugefügt. Im Vergleich zum nächsten Beispiel sollten Sie sehen, dass das `overflow: scroll`-Beispiel oben horizontale und vertikale Bildlaufleisten hat, obwohl nur vertikales Scrollen erforderlich ist. Das `auto`-Beispiel unten fügt nur die Bildlaufleiste in der Richtung hinzu, in der wir scrollen müssen.

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

Wie wir bereits gelernt haben, wird durch die Verwendung eines dieser Werte, außer dem Standard `visible`, ein neuer [block formatting context](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt.

> [!NOTE]
> Im [Working Draft von Overflow Level 3](https://www.w3.org/TR/css-overflow-3/) gibt es einen zusätzlichen Wert `overflow: clip`. Dieser verhält sich wie `overflow: hidden`, erlaubt jedoch keine programmatische Bildlaufmöglichkeit, die Box wird nichtrukrollbar. Außerdem wird kein Block-Formatierungskontext erzeugt.

Die Überlauf-Eigenschaft ist in Wirklichkeit eine Kurzform für die [`overflow-x`](/de/docs/Web/CSS/overflow-x) und [`overflow-y`](/de/docs/Web/CSS/overflow-y)-Eigenschaften. Wenn Sie nur einen Wert für overflow angeben, wird dieser Wert für beide Achsen verwendet. Sie können jedoch beide Werte angeben, wobei der erste für `overflow-x` und damit für die horizontale Richtung, und der zweite für `overflow-y` und die vertikale Richtung verwendet wird. Im folgenden Beispiel habe ich nur `overflow-y: scroll` angegeben, damit wir nicht die unerwünschte horizontale Bildlaufleiste erhalten.

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

Im Leitfaden zu [Schreibmodi und Fließlayout](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes) haben wir uns die Eigenschaften `block-size` und `inline-size` angesehen, die sinnvoller sind, wenn man mit verschiedenen Schreibmodi arbeitet, als unser Layout an die physischen Abmessungen des Bildschirms zu koppeln. Das [CSS overflow-Modul](/de/docs/Web/CSS/CSS_overflow) enthält auch flussrelative Eigenschaften für Überlauf - [`overflow-block`](/de/docs/Web/CSS/@media/overflow-block) und [`overflow-inline`](/de/docs/Web/CSS/@media/overflow-inline). Diese entsprechen `overflow-x` und `overflow-y`, aber die Zuordnung hängt vom Schreibmodus des Dokuments ab.

## Überlauf anzeigen

Im CSS-Überlaufmodul gibt es einige Eigenschaften, die helfen können, das Aussehen von Inhalt in einer Überlaufsituation zu verbessern.

### Inline-Achsen-Überlauf

Die [`text-overflow`](/de/docs/Web/CSS/text-overflow)-Eigenschaft befasst sich mit dem Überlaufen von Text in der Inline-Richtung. Sie nimmt einen von zwei Werten an, `clip`, wobei der Inhalt abgeschnitten wird, wenn er überläuft. Dies ist der Anfangswert und daher das Standardverhalten. Wir haben auch `ellipsis`, das ein Auslassungszeichen rendert, das möglicherweise durch ein besseres Zeichen für die verwendete Sprache oder den verwendeten Schreibmodus ersetzt wird.

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

Die [Überlauf Level 3](https://www.w3.org/TR/css-overflow-3/)-Spezifikation fügt eine `block-ellipsis`-Eigenschaft hinzu ([früher `block-overflow` genannt](https://github.com/w3c/csswg-drafts/commit/20b15b4d66b0fdfa8406f1ce28604128f02ee7bb)). Diese Eigenschaft ermöglicht es, ein Auslassungszeichen (oder benutzerdefinierte Zeichen) hinzuzufügen, wenn Text in der Block-Dimension überläuft, obwohl es zum Zeitpunkt des Schreibens keine Browserunterstützung dafür gibt.

Dies ist nützlich, wenn Sie beispielsweise eine Auflistung von Artikeln haben und die Auflistungen in Kästchen mit fester Höhe anzeigen, die nur eine begrenzte Menge Text aufnehmen. Es ist möglicherweise nicht offensichtlich für den Leser, dass es mehr Inhalt gibt, auf den durch Klicken auf das Kästchen oder den Titel zugegriffen werden kann. Ein Auslassungszeichen zeigt eindeutig an, dass mehr Inhalt vorhanden ist. Die Spezifikation würde es erlauben, eine Inhaltszeichenfolge oder ein reguläres Auslassungszeichen einzufügen.

## Zusammenfassung

Unabhängig davon, ob Sie sich in kontinuierlichen Medien im Web oder in einem Paged-Media-Format wie Druck oder EPUB befinden, ist das Verständnis, wie Inhalte überlaufen, nützlich bei der Arbeit mit jeder Layoutmethode. Indem Sie verstehen, wie Überlauf im normalen Fluss funktioniert, sollten Sie es einfacher finden, die Auswirkungen von Überlaufinhalten in Layoutmethoden wie Grid und Flexbox zu verstehen.

## Siehe auch

- [Überlaufender Inhalt](/de/docs/Learn/CSS/Building_blocks/Overflowing_content) Leitfaden
- [CSS Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Containment](/de/docs/Web/CSS/CSS_containment) Modul
