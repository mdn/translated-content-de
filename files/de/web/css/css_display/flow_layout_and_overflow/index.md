---
title: Flusslayout und Überlauf
slug: Web/CSS/CSS_display/Flow_layout_and_overflow
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

Wenn es mehr Inhalt gibt, als in einen Container passt, tritt eine Überlaufsituation auf. Zu verstehen, wie Überlauf funktioniert, ist wichtig, um mit jedem Element mit begrenzter Größe in CSS umzugehen. Dieser Leitfaden erklärt, wie Überlauf funktioniert, wenn man mit normalem Fluss arbeitet. Das HTML ist in jedem Beispiel dasselbe, daher ist es im ersten Abschnitt sichtbar und in den anderen der Übersichtlichkeit halber ausgeblendet.

## Was ist Überlauf?

Einem Element eine feste Höhe und Breite zu geben und dann erheblichen Inhalt in die Box hinzuzufügen, schafft ein einfaches Überlaufbeispiel:

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

Der Inhalt geht in die Box. Sobald die Box gefüllt ist, überläuft der Inhalt auf sichtbare Weise, indem er über die Box hinaus angezeigt wird und möglicherweise unter nachfolgendem Inhalt erscheint. Die Eigenschaft, die steuert, wie Überlauf verhält, ist die [`overflow`](/de/docs/Web/CSS/overflow)-Eigenschaft, die den Standardwert `visible` hat. Aus diesem Grund können wir den überlaufenden Inhalt sehen.

## Überlauf kontrollieren

Es gibt weitere Werte, die steuern, wie überlaufender Inhalt sich verhält. Um überlaufenden Inhalt zu verbergen, verwenden Sie den Wert `hidden`. Dies kann dazu führen, dass einige Ihrer Inhalte nicht sichtbar sind.

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

Die Verwendung des Wertes `scroll` hält den Inhalt in seiner Box und fügt Bildlaufleisten hinzu, um ihn anzeigen zu können. Bildlaufleisten werden hinzugefügt, auch wenn der Inhalt in die Box passt.

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

Die Verwendung des Wertes `auto` zeigt den Inhalt ohne Bildlaufleisten an, wenn der Inhalt in die Box passt. Wenn er nicht passt, werden Bildlaufleisten hinzugefügt. Verglichen mit dem folgenden Beispiel hat `overflow: scroll` oben horizontale und vertikale Bildlaufleisten, obwohl nur vertikales Scrollen benötigt wird. Das `auto`-Beispiel unten fügt nur die Bildlaufleiste in die Richtung hinzu, in der wir scrollen müssen.

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

Wie bereits gelernt, erzeugt die Verwendung eines dieser Werte, außer dem Standardwert `visible`, einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context).

> [!NOTE]
> Im [Working Draft of Overflow Level 3](https://www.w3.org/TR/css-overflow-3/) gibt es einen zusätzlichen Wert `overflow: clip`. Dieser verhält sich wie `overflow: hidden`, erlaubt jedoch kein programmgesteuertes Scrollen - die Box wird nicht scrollbar. Zusätzlich erzeugt er keinen Blockformatierungskontext.

Die Eigenschaft `overflow` ist tatsächlich eine Abkürzung für die Eigenschaften [`overflow-x`](/de/docs/Web/CSS/overflow-x) und [`overflow-y`](/de/docs/Web/CSS/overflow-y). Wenn Sie nur einen Wert für `overflow` angeben, wird dieser Wert für beide Achsen verwendet. Sie können jedoch beide Werte angeben, wobei der erste für `overflow-x` und damit für die horizontale Richtung und der zweite für `overflow-y` und die vertikale Richtung verwendet wird. Im unten stehenden Beispiel habe ich nur `overflow-y: scroll` angegeben, sodass wir die unerwünschte horizontale Bildlaufleiste nicht erhalten.

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

Im Leitfaden zu [Schreibrichtungen und Flusslayout](/de/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes) haben wir uns die Eigenschaften `block-size` und `inline-size` angesehen, die in verschiedenen Schreibrichtungen sinnvoller sind, als unser Layout an die physikalischen Abmessungen des Bildschirms zu binden. Das [CSS-Überlaufmodul](/de/docs/Web/CSS/CSS_overflow) enthält auch flussbezogene Eigenschaften für Überlauf – [`overflow-block`](/de/docs/Web/CSS/@media/overflow-block) und [`overflow-inline`](/de/docs/Web/CSS/@media/overflow-inline). Diese entsprechen `overflow-x` und `overflow-y`, jedoch hängt die Zuordnung vom Schreibrichtungsmodus des Dokuments ab.

## Überlauf anzeigen

Im CSS-Überlaufmodul gibt es einige Eigenschaften, die helfen können, das Aussehen von überlaufendem Inhalt zu verbessern.

### Inline-Achsen-Überlauf

Die [`text-overflow`](/de/docs/Web/CSS/text-overflow)-Eigenschaft behandelt überlaufenden Text in der Inline-Richtung. Sie nimmt einen von zwei Werten an: `clip`, wobei der Inhalt abgeschnitten wird, wenn er überläuft – dies ist der Standardwert und damit das Standardverhalten. Es gibt auch `ellipsis`, das ein Auslassungszeichen rendert, das möglicherweise durch ein besseres Zeichen für die verwendete Sprache oder Schreibrichtung ersetzt wird.

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

Die [Overflow Level 3](https://www.w3.org/TR/css-overflow-3/)-Spezifikation fügt eine `block-ellipsis`-Eigenschaft hinzu ([ehemals als `block-overflow` bezeichnet](https://github.com/w3c/csswg-drafts/commit/20b15b4d66b0fdfa8406f1ce28604128f02ee7bb)). Diese Eigenschaft ermöglicht das Hinzufügen eines Auslassungszeichens (oder benutzerdefinierter Zeichenketten), wenn Text in der Blockdimension überläuft, obwohl es zum Zeitpunkt des Schreibens noch keine Browserunterstützung dafür gibt.

Dies ist nützlich in Situationen, in denen Sie z. B. eine Liste von Artikeln haben und die Einträge in Boxen mit fester Höhe anzeigen, die nur eine begrenzte Menge Text aufnehmen können. Es ist möglicherweise nicht offensichtlich für den Leser, dass es mehr Inhalt gibt, auf den er klicken kann, wenn er die Box oder den Titel anklickt. Ein Auslassungszeichen zeigt deutlich an, dass es mehr Inhalt gibt. Die Spezifikation würde es ermöglichen, eine Zeichenkette oder ein reguläres Auslassungszeichen einzufügen.

## Zusammenfassung

Ob in kontinuierlichen Medien im Web oder in einem Paged Media-Format wie Druck oder EPUB - zu verstehen, wie Inhalte überlaufen, ist nützlich, wenn es darum geht, mit Layoutmethoden jeder Art umzugehen. Wenn Sie verstehen, wie Überlauf im normalen Fluss funktioniert, sollten Sie die Auswirkungen von überlaufendem Inhalt in Layoutmethoden wie Grid und Flexbox leichter verstehen.

## Siehe auch

- [Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)-Leitfaden
- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow)-Modul
- [CSS-Containment](/de/docs/Web/CSS/CSS_containment)-Modul
