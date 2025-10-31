---
title: Fluss-Layout und Überlauf
slug: Web/CSS/CSS_display/Flow_layout_and_overflow
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Wenn mehr Inhalt vorhanden ist, als in einen Container passt, tritt eine Überlaufsituation auf. Das Verständnis, wie Überlauf funktioniert, ist wichtig beim Umgang mit jedem Element mit begrenzter Größe in CSS. Dieser Leitfaden erklärt, wie Überlauf funktioniert, wenn Sie mit normalem Fluss arbeiten.
Das HTML ist in jedem Beispiel dasselbe, daher ist es im ersten Abschnitt sichtbar und in anderen aus Gründen der Kürze verborgen.

## Was ist Überlauf?

Einem Element eine feste Höhe und Breite zu geben und dann signifikanten Inhalt zum Kasten hinzuzufügen, erstellt ein grundlegendes Überlaufbeispiel:

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

Der Inhalt gelangt in den Kasten. Sobald er den Kasten füllt, läuft er in sichtbarer Weise über, zeigt Inhalt außerhalb des Kastens an und möglicherweise unter dem nachfolgenden Inhalt. Die Eigenschaft, die steuert, wie Überlauf sich verhält, ist die [`overflow`](/de/docs/Web/CSS/Reference/Properties/overflow)-Eigenschaft, die einen Anfangswert von `visible` hat. Deshalb können wir den Überlaufinhalt sehen.

## Überlauf steuern

Es gibt andere Werte, die steuern, wie Überlaufinhalt sich verhält. Um überlaufenden Inhalt zu verbergen, verwenden Sie einen Wert von `hidden`. Dies kann dazu führen, dass ein Teil Ihres Inhalts nicht sichtbar ist.

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

Die Verwendung eines Wertes von `scroll` hält den Inhalt im Kasten und fügt Scrollleisten hinzu, um ihn anzuzeigen. Scrollleisten werden hinzugefügt, selbst wenn der Inhalt in den Kasten passt.

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

Die Verwendung eines Wertes von `auto` zeigt den Inhalt ohne Scrollleisten an, falls der Inhalt in den Kasten passt. Wenn er nicht passt, werden Scrollleisten hinzugefügt. Im nächsten Beispiel sollten Sie sehen, dass das `overflow: scroll`-Beispiel oben horizontale und vertikale Scrollleisten hat, auch wenn es nur vertikales Scrollen benötigt. Das `auto`-Beispiel unten fügt die Scrollleiste nur in der Richtung hinzu, in der wir scrollen müssen.

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

Wie wir bereits gelernt haben, wird bei Verwendung eines dieser Werte, außer dem Standardwert `visible`, ein neuer [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt.

`overflow: clip` wirkt wie `overflow: hidden`, erlaubt jedoch kein programmmatisches Scrollen; der Kasten wird nicht scrollbar. Es erstellt auch keinen Block-Formatierungskontext.

Die Überlaufeigenschaft ist eigentlich eine Kurzform für die [`overflow-x`](/de/docs/Web/CSS/Reference/Properties/overflow-x) und [`overflow-y`](/de/docs/Web/CSS/Reference/Properties/overflow-y) Eigenschaften. Wenn Sie nur einen Wert für Überlauf angeben, wird dieser Wert für beide Achsen verwendet. Sie können jedoch beide Werte angeben, in diesem Fall wird der erste Wert für `overflow-x` und somit die horizontale Richtung verwendet, und der zweite für `overflow-y` und die vertikale Richtung. Im nachstehenden Beispiel habe ich nur `overflow-y: scroll` angegeben, damit wir nicht die unerwünschte horizontale Scrollleiste erhalten.

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

Im Leitfaden zu [Schreibmodi und Fluss-Layout](/de/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes) haben wir uns die `block-size` und `inline-size` Eigenschaften angesehen, die mehr Sinn machen, wenn man mit verschiedenen Schreibmodi arbeitet, als unser Layout an die physischen Dimensionen des Bildschirms zu binden. Das [CSS-Überlaufmodul](/de/docs/Web/CSS/CSS_overflow) umfasst auch flussbezogene Eigenschaften für Überlauf - [`overflow-block`](/de/docs/Web/CSS/@media/overflow-block) und [`overflow-inline`](/de/docs/Web/CSS/@media/overflow-inline). Diese entsprechen `overflow-x` und `overflow-y`, aber die Zuordnung hängt vom Schreibmodus des Dokuments ab.

## Überlauf anzeigen

Im CSS-Überlaufmodul gibt es einige Eigenschaften, die helfen können, das Aussehen von Inhalten in einer Überlaufsituation zu verbessern.

### Überlauf in der Inline-Achse

Die [`text-overflow`](/de/docs/Web/CSS/Reference/Properties/text-overflow)-Eigenschaft bezieht sich auf das Überlaufen von Text in der Inline-Richtung. Sie nimmt einen von zwei Werten an: `clip`, wobei der Inhalt abgeschnitten wird, wenn er überläuft, dieser ist der Anfangswert und daher das Standardverhalten. Wir haben auch `ellipsis`, das ein Auslassungszeichen rendert, welches möglicherweise durch ein besseres Zeichen für die verwendete Sprache oder den Schreibmodus ersetzt werden kann.

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

Die [Overflow Module Level 4](https://drafts.csswg.org/css-overflow-4/#propdef-block-ellipsis) Spezifikation fügt eine `block-ellipsis` Eigenschaft hinzu ([zuvor als `block-overflow` bezeichnet](https://github.com/w3c/csswg-drafts/commit/20b15b4d66b0fdfa8406f1ce28604128f02ee7bb)). Diese Eigenschaft ermöglicht das Hinzufügen eines Auslassungszeichens (oder benutzerdefinierter Zeichenfolgen), wenn Text in der Block-Dimension überläuft, obwohl es zum Zeitpunkt des Schreibens keine Browserunterstützung dafür gibt.

Dies ist nützlich in der Situation, in der Sie eine Auflistung von Artikeln haben, z.B. und Sie die Auflistungen in Boxen fester Höhe anzeigen, die nur eine begrenzte Menge Text aufnehmen. Es kann für den Leser nicht offensichtlich sein, dass es mehr Inhalt zum Klicken gibt, wenn der Kasten oder der Titel angeklickt werden. Ein Auslassungszeichen zeigt deutlich an, dass es mehr Inhalt gibt. Die Spezifikation würde erlauben, eine Zeichenfolge von Inhalten oder ein reguläres Auslassungszeichen einzufügen.

## Zusammenfassung

Egal, ob Sie im kontinuierlichen Medium im Web oder in einem Seiten-Medium-Format wie Druck oder EPUB arbeiten, das Verständnis, wie Inhalte überlaufen, ist nützlich, wenn Sie mit jeder Layout-Methode umgehen. Durch das Verständnis, wie Überlauf im normalen Fluss funktioniert, sollten Sie es einfacher finden, die Auswirkungen von überlaufenden Inhalten in Layout-Methoden wie Grid und Flexbox zu verstehen.

## Siehe auch

- [Überlaufende Inhalte](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) Leitfaden
- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS-Eindämmung](/de/docs/Web/CSS/CSS_containment) Modul
