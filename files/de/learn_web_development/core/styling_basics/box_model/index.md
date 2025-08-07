---
title: Das Box Modell
short-title: Box Modell
slug: Learn_web_development/Core/Styling_basics/Box_model
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics")}}

Alles in CSS hat ein Kästchen um sich herum, und das Verständnis dieser Kästchen ist der Schlüssel, um komplexere Layouts mit CSS erstellen zu können oder um Elemente mit anderen Elementen auszurichten. In dieser Lektion werfen wir einen Blick auf das CSS-_Box-Modell_. Sie werden verstehen, wie es funktioniert und die Terminologie, die sich darauf bezieht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (lernen Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >die grundlegende HTML-Syntax</a
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Block- und Inline-Elemente</li>
          <li>Die verschiedenen Boxen, aus denen ein Element besteht und wie sie gestaltet werden — Inhalt, Rand, Rahmen, Innenabstand.</li>
          <li>Das alternative Box-Modell (zugänglich über <code>box-sizing: border-box</code>) und wie es sich vom regulären Box-Modell unterscheidet.</li>
          <li>Randüberlappung.</li>
          <li>Grundlegende Anzeige-Werte und wie sie das Verhalten der Box beeinflussen — <code>block</code>, <code>inline</code>, <code>inline-block</code>, <code>none</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Block- und Inline-Boxen

In CSS gibt es mehrere Arten von Boxen, die im Allgemeinen in die Kategorien **Block-Boxen** und **Inline-Boxen** passen. Der Typ bezieht sich darauf, wie sich die Box in Bezug auf den Seitenfluss und im Verhältnis zu anderen Boxen auf der Seite verhält. Boxen haben einen **inneren Anzeigetyp** und einen **äußeren Anzeigetyp**.

Im Allgemeinen können Sie verschiedene Werte für den Anzeigetyp mit der {{cssxref("display")}}-Eigenschaft festlegen.

Wenn eine Box einen Anzeigewert von `block` hat, dann:

- Wird die Box auf einer neuen Zeile angezeigt.
- Die Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} werden beachtet.
- Polsterung, Rand und Rahmen sorgen dafür, dass andere Elemente von der Box weggeschoben werden.
- Wenn {{cssxref("width")}} nicht angegeben ist, wird die Box in der Inline-Richtung erweitert, um den verfügbaren Platz in ihrem Container auszufüllen. In den meisten Fällen wird die Box so breit wie ihr Container und füllt 100% des verfügbaren Raums aus.

Einige HTML-Elemente wie `<h1>` und `<p>` verwenden standardmäßig `block` als äußeren Anzeigetyp.

Wenn eine Box einen Anzeigewert von `inline` hat, dann:

- Wird die Box nicht auf einer neuen Zeile angezeigt.
- Die Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} gelten nicht.
- Die obere und untere Polsterung, Ränder und Ränder gelten, aber sie werden nicht dazu führen, dass sich andere Inline-Boxen von der Box wegbewegen.
- Die linke und rechte Polsterung, Ränder und Ränder gelten und bewirken, dass sich andere Inline-Boxen von der Box wegbewegen.

Einige HTML-Elemente wie `<a>`, `<span>`, `<em>` und `<strong>` verwenden standardmäßig `inline` als äußeren Anzeigetyp.

Block- und Inline-Layout ist die Standardverhaltensweise im Web. Standardmäßig und ohne weitere Anweisungen werden die Elemente in einer Box ebenfalls im **[normalen Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow)** angeordnet und verhalten sich wie Block- oder Inline-Boxen.

## Innere und äußere Anzeigetypen

`block` und `inline` Anzeigewerte werden als **äußere Anzeigetypen** betrachtet — sie beeinflussen, wie die Box im Verhältnis zu anderen Boxen um sie herum angeordnet ist. Boxen haben auch einen **inneren Anzeigetyp**, der bestimmt, wie Elemente innerhalb dieser Box angeordnet sind.

Sie können den inneren Anzeigetyp ändern, indem Sie einen inneren Anzeigewert festlegen, beispielsweise `display: flex;`. Das Element verwendet weiterhin den äußeren Anzeigetyp `block`, ändert jedoch den inneren Anzeigetyp in `flex`. Alle direkten Kinder dieser Box werden zu Flex-Elementen und verhalten sich entsprechend der [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)-Spezifikation.

Wenn Sie detaillierter über CSS-Layout lernen, werden Sie auf [`flex`](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und verschiedene andere innere Werte stoßen, die Ihre Boxen haben können, beispielsweise [`grid`](/de/docs/Learn_web_development/Core/CSS_layout/Grids).

Machen Sie sich jetzt noch keine zu großen Sorgen über die innere und äußere Terminologie; dies ist das, was intern passiert, und wir haben es hier erwähnt, falls Sie darauf an anderer Stelle stoßen. Generell werden Sie nur mit einzelnen `display`-Werten arbeiten, und müssen nicht viel darüber nachdenken.

## Beispiele für verschiedene Anzeigetypen

Das folgende Beispiel hat drei verschiedene HTML-Elemente, die alle einen äußeren Anzeigetyp von `block` haben.

- Ein Absatz mit einem in CSS hinzugefügten Rahmen. Der Browser stellt dies als Block-Box dar. Der Absatz beginnt auf einer neuen Zeile und erstreckt sich horizontal, um die gesamte verfügbare Breite auszufüllen.

- Eine Liste, die mit `display: flex` angeordnet ist. Dies legt das Flex-Layout für die Kinder des Containers fest, die standardmäßig in einer Reihe angeordnet sind. Die Liste selbst ist eine Block-Box und — wie der Absatz — breitet sich über die gesamte Containerbreite aus und bricht in eine neue Zeile um.

- Ein blockweiser Absatz, in dem sich zwei `<span>`-Elemente befinden. Diese Elemente wären normalerweise `inline`, jedoch hat eines der Elemente eine Klasse `block` und wird auf `display: block` gesetzt. Dadurch beginnt dieses einzelne Wort auf einer neuen Zeile, die sich über die gesamte Breite des Elternteils erstreckt.

```html live-sample___block
<p>I am a paragraph. A short one.</p>
<ul>
  <li>Item One</li>
  <li>Item Two</li>
  <li>Item Three</li>
</ul>
<p>
  I am another paragraph. Some of the <span class="block">words</span> have been
  wrapped in a <span>span element</span>.
</p>
```

```css live-sample___block
body {
  font-family: sans-serif;
}
p,
ul {
  border: 2px solid rebeccapurple;
  padding: 0.2em;
}

.block,
li {
  border: 2px solid blue;
  padding: 0.2em;
}

ul {
  display: flex;
  list-style: none;
}

.block {
  display: block;
}
```

{{EmbedLiveSample("block", "", "220px")}}

Im nächsten Beispiel können wir sehen, wie sich `inline` Elemente verhalten.

- Die `<span>`-Elemente im ersten Absatz sind standardmäßig inline und erzwingen daher keine Zeilenumbrüche.

- Das `<ul>`-Element, das auf `display: inline-flex` gesetzt ist, erstellt eine Inline-Box, die einige Flex-Elemente enthält.

- Die beiden Absätze sind beide auf `display: inline` gesetzt. Der Inline-Flex-Container und die Absätze laufen alle in einer Zeile zusammen, anstatt sich in neue Zeilen umzubrechen (wie sie es tun würden, wenn sie als Block-Elemente angezeigt würden).

Um zwischen den Anzeigemodi zu wechseln, können Sie `display: inline` in `display: block` oder `display: inline-flex` in `display: flex` ändern:

```html live-sample___inline
<p>
  I am a paragraph. Some of the
  <span>words</span> have been wrapped in a <span>span element</span>.
</p>
<ul>
  <li>Item One</li>
  <li>Item Two</li>
  <li>Item Three</li>
</ul>
<p class="inline">I am a paragraph. A short one.</p>
<p class="inline">I am another paragraph. Also a short one.</p>
```

```css live-sample___inline
body {
  font-family: sans-serif;
}
p,
ul {
  border: 2px solid rebeccapurple;
}

span,
li {
  border: 2px solid blue;
}

ul {
  display: inline-flex;
  list-style: none;
  padding: 0;
}

.inline {
  display: inline;
}
```

{{EmbedLiveSample("inline")}}

Das Wichtige, was Sie sich jetzt merken sollten, ist: Das Ändern des Werts der `display`-Eigenschaft kann ändern, ob der äußere Anzeigetyp einer Box block oder inline ist. Dies ändert die Art und Weise, wie es zusammen mit anderen Elementen im Layout angezeigt wird.

## Was ist das CSS-Box-Modell?

Das gesamte CSS-Box-Modell gilt für Block-Boxen und definiert, wie die verschiedenen Teile einer Box — Rand, Rahmen, Innenabstand und Inhalt — zusammenarbeiten, um eine Box zu erstellen, die Sie auf einer Seite sehen können. Inline-Boxen verwenden nur _einige_ der im Box-Modell definierten Verhaltensweisen.

Um die Komplexität zu erhöhen, gibt es ein Standard- und ein alternatives Box-Modell. Standardmäßig verwenden Browser das Standard-Box-Modell.

### Teile einer Box

Zum Aufbau einer Block-Box in CSS gehören:

- **Inhaltsbox**: Der Bereich, in dem Ihr Inhalt angezeigt wird; dimensionieren Sie ihn mit Eigenschaften wie {{cssxref("width")}} und {{cssxref("height")}}.
- **Innenabstandsbox**: Der Innenabstand sitzt als Leerraum um den Inhalt herum; dimensionieren Sie ihn mit {{cssxref("padding")}} und verwandten Eigenschaften.
- **Rahmenbox**: Die Rahmenbox umgibt den Inhalt und jeden Innenabstand; dimensionieren Sie ihn mit {{cssxref("border")}} und verwandten Eigenschaften.
- **Randbox**: Der Rand ist die äußerste Schicht und umgibt den Inhalt, den Innenabstand und den Rahmen als Leerraum zwischen dieser Box und anderen Elementen; dimensionieren Sie ihn mit {{cssxref("margin")}} und verwandten Eigenschaften.

Das folgende Diagramm zeigt diese Schichten:

![Diagramm des Box-Modells](box-model.png)

### Das Standard-CSS-Box-Modell

Im Standard-Box-Modell, wenn Sie `width` und `height` Eigenschaftswerte auf einer Box festlegen, definieren diese Werte die `width` und `height` der _Inhaltsbox_. Jeder Innenabstand und Rahmen wird dann zu diesen Abmessungen hinzugefügt, um die Gesamtabmessungen der Box zu bestimmen (siehe das Bild unten).

Angenommen, eine Box hat das folgende CSS:

```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

Der _tatsächliche_ Platz, den die Box beansprucht, ist `410px` breit (350 + 25 + 25 + 5 + 5) und `210px` hoch (150 + 25 + 25 + 5 + 5).

![Die Größe der Box, wenn das Standard-Box-Modell verwendet wird.](standard-box-model.png)

> [!NOTE]
> Der Rand wird nicht zur tatsächlichen Größe der Box gezählt — sicherlich beeinflusst er den gesamten Raum, den die Box auf der Seite einnimmt, aber nur den Raum außerhalb der Box. Der Bereich der Box endet am Rahmen — er erstreckt sich nicht in den Rand.

### Das alternative CSS-Box-Modell

Im alternativen Box-Modell ist jede Breite die Breite der sichtbaren Box auf der Seite. Die Breite des Inhaltsbereichs ist diese Breite minus der Breite für den Innenabstand und den Rahmen (siehe Bild unten). Dies ist praktisch, da es nicht notwendig ist, den Rahmen und den Innenabstand hinzuzufügen, um die tatsächliche Größe der Box zu erhalten.

Um das alternative Modell für ein Element zu aktivieren, setzen Sie `box-sizing: border-box` darauf:

```css
.box {
  box-sizing: border-box;
}
```

Wenn wir annehmen, dass die Box das gleiche CSS wie oben hat:

```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

Der _tatsächliche_ Platz, den die Box jetzt einnimmt, beträgt `350px` in der Inline-Richtung und `150px` in der Block-Richtung.

![Die Größe der Box, wenn das alternative Box-Modell verwendet wird.](alternate-box-model.png)

Um das alternative Box-Modell für alle Ihre Elemente zu verwenden (was eine übliche Wahl unter Entwicklern ist), setzen Sie die `box-sizing`-Eigenschaft auf das `<html>`-Element und alle anderen Elemente auf Wert übernehmen:

```css
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
```

Um die Grundidee zu verstehen, können Sie den [CSS Tricks-Artikel zu box-sizing](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/) lesen.

## Spielen mit Box-Modellen

Im Beispiel unten sehen Sie zwei Boxen. Beide haben eine Klasse von `.box`, die ihnen die gleichen `width`, `height`, `margin`, `border` und `padding` gibt. Der einzige Unterschied ist, dass die zweite Box auf das alternative Box-Modell gesetzt wurde.
Können Sie die Größe der zweiten Box ändern (indem Sie CSS zur Klasse `.alternate` hinzufügen), sodass sie die gleiche Breite und Höhe wie die erste Box hat?

```html live-sample___box-models
<div class="box">I use the standard box model.</div>
<div class="box alternate">I use the alternate box model.</div>
```

```css live-sample___box-models
.box {
  border: 5px solid rebeccapurple;
  background-color: lightgray;
  padding: 40px;
  margin: 40px;
  width: 300px;
  height: 150px;
}

.alternate {
  box-sizing: border-box;
}
```

{{EmbedLiveSample("box-models", "", "400px")}}

> [!NOTE]
> Sie können eine Lösung für diese Aufgabe [in unserem css-examples-Repo](https://github.com/mdn/css-examples/blob/main/learn/solutions.md#the-box-model) finden.

### Verwendung von Browser-DevTools zur Ansicht des Box-Modells

Ihre [Browser-Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) können das Verständnis des Box-Modells wesentlich erleichtern — sie können Ihnen die Größe des Elements plus seinen Rand, Innenabstand und Rahmen anzeigen. Das Untersuchen eines Elements auf diese Weise ist eine großartige Möglichkeit, herauszufinden, ob Ihre Box wirklich die Größe hat, die Sie denken, dass sie es tut!

![Untersuchen des Box-Modells eines Elements mit Firefox DevTools](box-model-devtools.png)

## Ränder, Innenabstände und Rahmen

Sie haben bereits die Eigenschaften {{cssxref("margin")}}, {{cssxref("padding")}} und {{cssxref("border")}} im obigen Beispiel gesehen. Die in diesem Beispiel verwendeten Eigenschaften sind **Kurzformen** und ermöglichen es uns, alle vier Seiten der Box auf einmal zu setzen. Diese Kurzformen haben auch entsprechende Langformen, die es ermöglichen, die verschiedenen Seiten der Box individuell zu kontrollieren.

Lassen Sie uns diese Eigenschaften genauer erkunden.

### Rand

Der Rand ist ein unsichtbarer Raum um Ihre Box. Er schiebt andere Elemente von der Box weg. Ränder können positive oder negative Werte haben. Das Setzen eines negativen Randes auf einer Seite Ihrer Box kann dazu führen, dass diese andere Dinge auf der Seite überlappt. Egal ob Sie das Standard- oder alternative Box-Modell verwenden, der Rand wird immer nach der Bestimmung der Größe der sichtbaren Box hinzugefügt.

Wir können alle Ränder eines Elements auf einmal mit der Eigenschaft {{cssxref("margin")}} steuern oder jede Seite individuell mit den entsprechenden Langform-Eigenschaften:

- {{cssxref("margin-top")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}

#### Spielen mit Rändern

Bearbeiten Sie das Beispiel unten. Versuchen Sie, die Randwerte zu ändern, um zu sehen, wie die Box durch den Rand verschoben wird, der Platz zwischen diesem Element und dem enthaltenden Element schafft oder entfernt (wenn es ein negativer Rand ist).

```html live-sample___margin
<div class="container">
  <div class="box">Change my margin.</div>
</div>
```

```css live-sample___margin
.container {
  border: 5px solid blue;
  margin: 40px;
}

.box {
  border: 5px solid rebeccapurple;
  background-color: lightgray;
  padding: 10px;
  height: 100px;
  /* try changing the margin properties: */
  margin-top: -40px;
  margin-right: 30px;
  margin-bottom: 40px;
  margin-left: 4em;
}
```

{{EmbedLiveSample("margin", "", "220px")}}

#### Randüberlappung

Je nachdem, ob zwei Elemente, deren Ränder sich berühren, positive oder negative Ränder haben, fallen die Ergebnisse unterschiedlich aus:

- Zwei positive Ränder werden zu einem Rand kombiniert. Seine Größe entspricht dem größten individuellen Rand.
- Zwei negative Ränder werden kollabieren und der kleinste (am weitesten von null entfernt) Wert wird verwendet.
- Wenn ein Rand negativ ist, wird sein Wert von der Gesamtsumme _subtrahiert_.

Im Beispiel unten haben wir zwei Absätze. Der obere Absatz hat einen `margin-bottom` von 50 Pixeln, der andere hat einen `margin-top` von 30 Pixeln. Die Ränder sind zusammengebrochen, sodass der tatsächliche Abstand zwischen den Boxen 50 Pixel beträgt und nicht die Summe der beiden Ränder.

Sie können dies testen, indem Sie den `margin-top` des zweiten Absatzes auf `0` setzen. Der sichtbare Abstand zwischen den beiden Absätzen ändert sich nicht — er behält die 50 Pixel, die im `margin-bottom` des ersten Absatzes eingestellt sind. Wenn Sie ihn auf `-10px` setzen, sehen Sie, dass der gesamte Rand `40px` wird — er wird von den `50px` abgezogen.

```html live-sample___margin-collapse
<div class="container">
  <p class="one">I am paragraph one.</p>
  <p class="two">I am paragraph two.</p>
</div>
```

```css live-sample___margin-collapse
.container {
  border: 5px solid blue;
  margin: 40px;
}

p {
  border: 5px solid rebeccapurple;
  background-color: lightgray;
  padding: 10px;
}
.one {
  margin-bottom: 50px;
}

.two {
  margin-top: 30px;
}
```

{{EmbedLiveSample("margin-collapse", "", "280px")}}

Eine Reihe von Regeln bestimmt, wann Ränder kollabieren und wann nicht. Für weitere Informationen siehe die detaillierte Seite über [Beherrschung der Randüberlappung](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing). Das Hauptsache, an das Sie sich erinnern sollten, ist, dass Randüberlappung eine Sache ist, die passiert, wenn Sie mit Rändern Platz schaffen und nicht den erwarteten Raum erhalten.

### Rahmen

Der Rahmen wird zwischen dem Rand und dem Innenabstand einer Box gezeichnet. Wenn Sie das Standard-Box-Modell verwenden, wird die Größe des Rahmens zur `width` und `height` der Inhaltsbox hinzugefügt. Wenn Sie das alternative Box-Modell verwenden, wird die Inhaltsbox umso kleiner, je größer der Rahmen ist, da der Rahmen einen Teil dieser verfügbaren `width` und `height` der Elementbox in Anspruch nimmt.

Es gibt eine große Anzahl von Eigenschaften zur Gestaltung von Rahmen — es gibt vier Rahmen, und jeder Rahmen hat einen Stil, eine Breite und eine Farbe, die wir manipulieren möchten.

Sie können die Breite, den Stil oder die Farbe aller vier Rahmen auf einmal mit der Eigenschaft {{cssxref("border")}} setzen.

Um die Eigenschaften jeder Seite individuell zu setzen, verwenden Sie:

- {{cssxref("border-top")}}
- {{cssxref("border-right")}}
- {{cssxref("border-bottom")}}
- {{cssxref("border-left")}}

Um die Breite, den Stil oder die Farbe aller Seiten zu setzen, verwenden Sie:

- {{cssxref("border-width")}}
- {{cssxref("border-style")}}
- {{cssxref("border-color")}}

Um die Breite, den Stil oder die Farbe einer einzigen Seite zu setzen, verwenden Sie eine der detaillierteren Langform-Eigenschaften:

- {{cssxref("border-top-width")}}
- {{cssxref("border-top-style")}}
- {{cssxref("border-top-color")}}
- {{cssxref("border-right-width")}}
- {{cssxref("border-right-style")}}
- {{cssxref("border-right-color")}}
- {{cssxref("border-bottom-width")}}
- {{cssxref("border-bottom-style")}}
- {{cssxref("border-bottom-color")}}
- {{cssxref("border-left-width")}}
- {{cssxref("border-left-style")}}
- {{cssxref("border-left-color")}}

#### Spielen mit Rahmen

Im folgenden Beispiel haben wir verschiedene Kurz- und Langformen verwendet, um Rahmen zu erstellen. Bearbeiten Sie die verschiedenen Eigenschaften, um zu überprüfen, ob Sie verstehen, wie sie funktionieren. Die MDN-Seiten zu den Rahmeneigenschaften geben Ihnen Informationen über die verschiedenen verfügbaren Rahmenstile.

```html live-sample___border
<div class="container">
  <div class="box">Change my borders.</div>
</div>
```

```css live-sample___border
body {
  font-family: sans-serif;
}
.container {
  margin: 40px;
  padding: 20px;
  border-top: 5px dotted green;
  border-right: 1px solid black;
  border-bottom: 20px double rgb(23 45 145);
}

.box {
  padding: 20px;
  background-color: lightgray;
  border: 1px solid #333333;
  border-top-style: dotted;
  border-right-width: 20px;
  border-bottom-color: hotpink;
}
```

{{EmbedLiveSample("border", "", "220px")}}

### Innenabstand

Der Innenabstand sitzt zwischen dem Rahmen und dem Inhaltsbereich und wird verwendet, um den Inhalt vom Rahmen wegzuschieben. Im Gegensatz zu Rändern können Sie keinen negativen Innenabstand haben. Jeder auf Ihr Element angewendete Hintergrund wird hinter dem Innenabstand angezeigt.

Die {{cssxref("padding")}}-Eigenschaft steuert den Innenabstand auf allen Seiten eines Elements. Um jede Seite individuell zu steuern, verwenden Sie diese Langform-Eigenschaften:

- {{cssxref("padding-top")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}

#### Spielen mit Innenabstand

Im folgenden Beispiel bearbeiten Sie die Werte für den Innenabstand auf der Klasse `.box` und sehen, wie sich dies darauf auswirkt, wo der Text in Bezug auf die Box beginnt. Sie können auch den Innenabstand auf der Klasse `.container` ändern, um Platz zwischen dem Container und der Box zu schaffen. Sie können den Innenabstand eines beliebigen Elements ändern, um Platz zwischen seinem Rahmen und allem, was sich im Element befindet, zu schaffen.

```html live-sample___padding
<div class="container">
  <div class="box">Change my padding.</div>
</div>
```

```css live-sample___padding
body {
  font-family: sans-serif;
}
.box {
  border: 5px solid rebeccapurple;
  background-color: lightgray;
  padding-top: 0;
  padding-right: 30px;
  padding-bottom: 40px;
  padding-left: 4em;
}

.container {
  border: 5px solid blue;
  margin: 40px;
  padding: 20px;
}
```

{{EmbedLiveSample("padding", "", "220px")}}

## Das Box-Modell und Inline-Boxen

All das oben Gesagte gilt vollständig für Block-Boxen. Einige der Eigenschaften können auch auf Inline-Boxen angewendet werden, wie die durch ein `<span>`-Element erzeugten.

Im folgenden Beispiel haben wir ein `<span>` innerhalb eines Absatzes. Wir haben Breite, Höhe, Rand, Rahmen und Innenabstand darauf angewendet. Sie können sehen, dass Breite und Höhe ignoriert werden. Der obere und untere Rand, Innenabstand und Rahmen werden beachtet, ändern jedoch nicht die Beziehung anderer Inhalte zu unserer Inline-Box. Der Innenabstand und der Rahmen überlappen andere Wörter im Absatz. Die linke und rechte Polsterung, Ränder und Rahmen bewegen andere Inhalte von der Box weg.

```html live-sample___inline-box-model
<p>
  I am a paragraph and this is a <span>span</span> inside that paragraph. A span
  is an inline element and so does not respect width and height.
</p>
```

```css live-sample___inline-box-model
body {
  font-family: sans-serif;
}
p {
  border: 2px solid rebeccapurple;
  width: 200px;
}
span {
  margin: 20px;
  padding: 20px;
  width: 80px;
  height: 150px;
  background-color: lightblue;
  border: 2px solid blue;
}
```

{{EmbedLiveSample("inline-box-model")}}

## Verwendung von display: inline-block

`display: inline-block` ist ein spezieller Wert von `display`, der einen Mittelweg zwischen `inline` und `block` bietet. Verwenden Sie ihn, wenn Sie nicht möchten, dass ein Element auf eine neue Zeile umbricht, aber möchten, dass es `width` und `height` respektiert und das im vorherigen Abschnitt beschriebene Überlappen vermieden wird.

Ein Element mit `display: inline-block` führt eine Teilmenge der Block-Dinge aus, die wir bereits kennen:

- Die Eigenschaften `width` und `height` werden beachtet.
- `padding`, `margin` und `border` werden dazu führen, dass andere Elemente von der Box weggeschoben werden.

Es bricht jedoch nicht auf eine neue Zeile um und wird nur dann größer als sein Inhalt, wenn Sie ausdrücklich `width` und `height` Eigenschaften hinzufügen.

### Spielen mit inline-block

Im nächsten Beispiel haben wir `display: inline-block` zu unserem `<span>`-Element hinzugefügt. Versuchen Sie, dies in `display: block` zu ändern oder die Zeile vollständig zu entfernen, um den Unterschied in den Anzeigemodellen zu sehen:

```html live-sample___inline-block
<p>
  I am a paragraph and this is a <span>span</span> inside that paragraph. A span
  is an inline element and so does not respect width and height.
</p>
```

```css live-sample___inline-block
body {
  font-family: sans-serif;
}
p {
  border: 2px solid rebeccapurple;
  width: 300px;
}

span {
  margin: 20px;
  padding: 20px;
  width: 80px;
  height: 50px;
  background-color: lightblue;
  border: 2px solid blue;
  display: inline-block;
}
```

{{EmbedLiveSample("inline-block", "", "240px")}}

Wo dies nützlich sein kann, ist, wenn Sie einem Link ein größeres Treffziel geben möchten, indem Sie Innenabstände hinzufügen. `<a>` ist ein Inline-Element wie `<span>`; Sie können `display: inline-block` verwenden, um die Einstellung des Innenabstands zuzulassen, wodurch es Benutzern erleichtert wird, auf den Link zu klicken.

Sie sehen dies recht häufig in Navigationsleisten. Die nachfolgende Navigation wird in einer Reihe mit Flexbox angezeigt und wir haben Innenabstände zum `<a>`-Element hinzugefügt, da wir wollen, dass sich die `background-color` ändert, wenn das `<a>`-Element überfahren wird. Die Innenabstände scheinen den Rahmen auf dem `<ul>`-Element zu überlappen. Dies liegt daran, dass das `<a>`-Element ein Inline-Element ist.

Fügen Sie `display: inline-block;` zur Regel mit dem `.links-list a`-Selektor hinzu, und Sie werden sehen, wie es dieses Problem behebt, indem es dazu führt, dass die Innenabstände von anderen Elementen respektiert werden:

```html live-sample___inline-block-nav
<nav>
  <ul class="links-list">
    <li><a href="">Link one</a></li>
    <li><a href="">Link two</a></li>
    <li><a href="">Link three</a></li>
  </ul>
</nav>
```

```css live-sample___inline-block-nav
ul {
  font-family: sans-serif;
  display: flex;
  list-style: none;
  border: 1px solid black;
}

li {
  margin: 5px;
}

.links-list a {
  background-color: rgb(179 57 81);
  color: white;
  text-decoration: none;
  padding: 1em 2em;
}

.links-list a:hover {
  background-color: rgb(66 28 40);
  color: white;
}
```

{{EmbedLiveSample("inline-block-nav")}}

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model).

## Zusammenfassung

Das ist das Wichtigste, was Sie über das Box-Modell wissen müssen. Möglicherweise möchten Sie in Zukunft zu dieser Lektion zurückkehren, wenn Sie jemals verwirrt darüber sind, wie groß Boxen in Ihrem Layout sind.

Im nächsten Artikel werden wir uns damit befassen, wie CSS Konflikte handhabt — wenn mehrere Regeln dasselbe Element auswählen, welche Stile werden angewendet?

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics")}}
