---
title: Das Box-Modell
short-title: Box model
slug: Learn_web_development/Core/Styling_basics/Box_model
l10n:
  sourceCommit: 237ed1e35898ed5c26017d77157048368f4b5992
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors", "Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics")}}

Alles in CSS hat eine Box um sich herum, und das Verständnis dieser Boxen ist der Schlüssel, um komplexere Layouts mit CSS zu erstellen oder Elemente zueinander auszurichten. In dieser Lektion werfen wir einen Blick auf das CSS _Box-Modell_. Sie werden verstehen, wie es funktioniert und die damit verbundenen Begriffe kennenlernen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Basissyntax von HTML</a
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Block- und Inline-Elemente</li>
          <li>Die verschiedenen Boxen, aus denen ein Element besteht, und wie man sie stylt – Inhalt, Rand (margin), Randlinie (border), Abstand (padding).</li>
          <li>Das alternative Box-Modell (zugänglich über <code>box-sizing: border-box</code>) und wie es sich vom regulären Box-Modell unterscheidet.</li>
          <li>Rand-Kollaps.</li>
          <li>Grundlegende Anzeige-Werte und wie sie das Verhalten der Boxen beeinflussen – <code>block</code>, <code>inline</code>, <code>inline-block</code>, <code>none</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Block- und Inline-Boxen

In CSS gibt es verschiedene Arten von Boxen, die im Allgemeinen in die Kategorien **Block-Boxen** und **Inline-Boxen** passen. Der Typ bezieht sich darauf, wie sich die Box im Hinblick auf den Seitenfluss und in Bezug zu anderen Boxen auf der Seite verhält. Boxen haben einen **inneren Anzeige-Typ** und einen **äußeren Anzeige-Typ**.

Im Allgemeinen können Sie verschiedene Werte für den Anzeige-Typ mit der {{cssxref("display")}}-Eigenschaft festlegen.

Wenn eine Box den Anzeigewert `block` hat, dann:

- Die Box wird auf eine neue Zeile umbrechen.
- Die Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} werden berücksichtigt.
- Abstand, Rand und Randlinie verursachen, dass andere Elemente von der Box weggedrückt werden.
- Wenn {{cssxref("width")}} nicht angegeben ist, wird sich die Box in die Inline-Richtung ausdehnen, um den im Container verfügbaren Platz zu füllen. In den meisten Fällen wird die Box so breit wie ihr Container und füllt 100 % des verfügbaren Platzes aus.

Einige HTML-Elemente, wie `<h1>` und `<p>`, verwenden `block` als ihren äußeren Anzeige-Typ standardmäßig.

Wenn eine Box den Anzeigewert `inline` hat, dann:

- Die Box wird nicht auf eine neue Zeile umbrechen.
- Die Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} werden nicht angewendet.
- Oben- und untenliegende Abstände, Rand und Randlinien werden angewendet, bewirken aber nicht, dass andere Inline-Boxen von der Box weg bewegt werden.
- Links- und rechtsseitige Abstände, Rand und Randlinien werden angewendet und bewirken, dass andere Inline-Boxen von der Box weg bewegt werden.

Einige HTML-Elemente, wie `<a>`, `<span>`, `<em>` und `<strong>`, verwenden `inline` als ihren äußeren Anzeige-Typ standardmäßig.

Block- und Inline-Layout ist die standardmäßige Art, wie sich Dinge im Web verhalten. Standardmäßig und ohne weitere Anweisungen werden die Elemente innerhalb einer Box auch im **[normalen Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow)** angeordnet und verhalten sich als Block- oder Inline-Boxen.

## Innere und äußere Anzeigetypen

`block` und `inline` Anzeigewerte werden als **äußere Anzeige**-Typen bezeichnet — sie beeinflussen, wie die Box in Bezug auf andere Boxen um sie herum angeordnet wird. Boxen haben auch einen **inneren Anzeige**-Typ, der diktiert, wie Elemente innerhalb dieser Box angeordnet sind.

Sie können den inneren Anzeige-Typ ändern, indem Sie einen inneren Anzeigewert festlegen, z.B. `display: flex;`. Das Element verwendet weiterhin den äußeren Anzeige-Typ `block`, aber dies ändert den inneren Anzeige-Typ zu `flex`. Alle direkten Kinder dieser Box werden Flex-Elemente und verhalten sich gemäß der [Flexbox]-Spezifikation(/de/docs/Learn_web_development/Core/CSS_layout/Flexbox).

Wenn Sie sich näher mit CSS-Layout befassen, werden Sie [`flex`](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und verschiedene andere innere Werte treffen, die Ihre Boxen haben können, z.B. [`grid`](/de/docs/Learn_web_development/Core/CSS_layout/Grids).

Machen Sie sich nicht zu viele Gedanken über die innere und äußere Terminologie im Moment; dies geschieht intern, und wir erwähnen es hier, falls Sie darauf an anderer Stelle stoßen. Im Allgemeinen werden Sie nur mit einzelnen `display`-Werten umgehen und nicht viel darüber nachdenken müssen.

## Beispiele für verschiedene Anzeigetypen

Das folgende Beispiel hat drei verschiedene HTML-Elemente, die alle einen äußeren Anzeigetyp von `block` haben.

- Ein Absatz mit einer in CSS hinzugefügten Randlinie. Der Browser rendert dies als Block-Box. Der Absatz beginnt in einer neuen Zeile und erstreckt sich horizontal über die gesamte verfügbare Breite.

- Eine Liste, die mit `display: flex` gestaltet ist. Dies stellt ein Flex-Layout für die Kinder des Containers her, die Flex-Elemente sind, die standardmäßig in einer Reihe angeordnet sind. Die Liste selbst ist eine Block-Box und – wie der Absatz – breitet sich auf die gesamte Containerbreite aus und wird in einer neuen Zeile umgebrochen.

- Ein Block-Absatz, in dem sich zwei `<span>`-Elemente befinden. Diese Elemente wären normalerweise `inline`, jedoch hat eines der Elemente eine Klasse `block` und wird auf `display: block` gesetzt. Dadurch beginnt dieses einzelne Wort in einer neuen Zeile, die sich über die volle Breite seines Elternteils erstreckt.

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

Im nächsten Beispiel können wir sehen, wie sich `inline`-Elemente verhalten.

- Die `<span>`-Elemente im ersten Absatz sind standardmäßig inline und erzwingen daher keine Zeilenumbrüche.

- Das `<ul>`-Element, das auf `display: inline-flex` gesetzt ist, erzeugt eine Inline-Box, die einige Flex-Elemente enthält.

- Die beiden Absätze sind beide auf `display: inline` gesetzt. Der Inline-Flex-Container und die Absätze laufen alle zusammen auf einer Linie, anstatt in neue Zeilen zu brechen (wie sie es tun würden, wenn sie als Block-Elemente angezeigt würden).

Um zwischen den Anzeigemodi zu wechseln, können Sie `display: inline` zu `display: block` oder `display: inline-flex` zu `display: flex` ändern:

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

Die wesentliche Sache, an die man sich jetzt erinnern sollte, ist: Das Ändern des Werts der `display`-Eigenschaft kann ändern, ob der äußere Anzeigetyp einer Box block oder inline ist. Dies ändert die Art und Weise, wie sie im Layout neben anderen Elementen angezeigt wird.

## Was ist das CSS-Box-Modell?

Das CSS-Box-Modell als Ganzes gilt für Block-Boxen und definiert, wie die verschiedenen Teile einer Box – Rand (margin), Randlinie (border), Abstand (padding) und Inhalt – zusammenarbeiten, um eine Box zu erstellen, die Sie auf einer Seite sehen können. Inline-Boxen nutzen nur _einen Teil_ des im Box-Modell definierten Verhaltens.

Zur Komplexität gibt es ein Standard- und ein alternatives Box-Modell. Standardmäßig verwenden Browser das Standard-Box-Modell.

### Teile einer Box

Das CSS-Block-Modell besteht aus den folgenden Teilen:

- **Inhaltsbox**: Der Bereich, in dem Ihr Inhalt angezeigt wird; Größe kann über Eigenschaften wie {{cssxref("width")}} und {{cssxref("height")}} bestimmt werden.
- **Abstandsbox (Padding)**: Der Abstand sitzt als weißer Raum um den Inhalt herum; Größe kann über {{cssxref("padding")}} und verwandte Eigenschaften bestimmt werden.
- **Randlinien-Box (Border)**: Die Randlinienbox umgibt den Inhalt und jeden Abstand; Größe kann über {{cssxref("border")}} und verwandte Eigenschaften bestimmt werden.
- **Randbox (Margin)**: Der Rand ist die äußerste Schicht, die den Inhalt, den Abstand und die Randlinien als Weißraum zwischen dieser Box und anderen Elementen umgibt; Größe kann über {{cssxref("margin")}} und verwandte Eigenschaften bestimmt werden.

Das folgende Diagramm zeigt diese Schichten:

![Diagramm des Box-Modells](box-model.png)

### Das Standard-CSS-Box-Modell

Im Standard-Box-Modell definieren die Werte der Eigenschaften `width` und `height` einer Box die `width` und `height` der _Inhaltsbox_. Jede Abstände und Randlinien werden dann zu diesen Dimensionen hinzugefügt, um die gesamte Größe der Box zu erhalten, die den Platz einnimmt (siehe das Bild unten).

Wenn wir annehmen, dass eine Box folgende CSS hat:

```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

Der _tatsächliche_ Platz, den die Box einnimmt, wird `410px` breit (350 + 25 + 25 + 5 + 5) und `210px` hoch (150 + 25 + 25 + 5 + 5) sein.

![Bild der Größe der Box, wenn das Standard-Box-Modell verwendet wird.](standard-box-model.png)

> [!NOTE]
> Der Rand wird nicht zur tatsächlichen Größe der Box gezählt — natürlich beeinflusst er den gesamten Platz, den die Box auf der Seite einnimmt, aber nur den Raum außerhalb der Box. Der Bereich der Box endet an der Randlinie — er erstreckt sich nicht in den Rand hinein.

### Das alternative CSS-Box-Modell

Im alternativen Box-Modell ist jede Breite die Breite der sichtbaren Box auf der Seite. Die Inhaltsbereichsbreite ist diese Breite minus der Breite für den Abstand und die Randlinie (siehe Bild unten). Dies ist praktisch, da es nicht nötig ist, die Randlinie und den Abstand zu addieren, um die tatsächliche Größe der Box zu erhalten.

Um das alternative Modell für ein Element zu aktivieren, setzen Sie `box-sizing: border-box` darauf:

```css
.box {
  box-sizing: border-box;
}
```

Wenn wir annehmen, dass die Box die gleiche CSS wie oben hat:

```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

Der _tatsächliche_ Platz, den die Box einnimmt, wird jetzt `350px` in der Inline-Richtung und `150px` in der Block-Richtung sein.

![Bild der Größe der Box, wenn das alternative Box-Modell verwendet wird.](alternate-box-model.png)

Um das alternative Box-Modell für alle Ihre Elemente zu verwenden (was eine häufige Wahl unter Entwicklern ist), setzen Sie die `box-sizing`-Eigenschaft auf das `<html>`-Element und setzen Sie alle anderen Elemente so, dass sie diesen Wert erben:

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

Um das zugrunde liegende Konzept zu verstehen, können Sie den [CSS Tricks-Artikel zum Box-Sizing](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/) lesen.

## Spielen mit Box-Modellen

Im Beispiel unten können Sie zwei Boxen sehen. Beide haben eine Klasse `.box`, die ihnen die gleiche `width`, `height`, `margin`, `border` und `padding` gibt. Der einzige Unterschied ist, dass die zweite Box so eingestellt wurde, dass sie das alternative Box-Modell verwendet.
Können Sie die Größe der zweiten Box ändern (indem Sie CSS zur `.alternate`-Klasse hinzufügen), sodass sie in Breite und Höhe der ersten Box entspricht?

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
> Eine Lösung für diese Aufgabe finden Sie [in unserem css-examples Repo](https://github.com/mdn/css-examples/blob/main/learn/solutions.md#the-box-model).

### Verwenden der DevTools des Browsers zur Anzeige des Box-Modells

Ihre [Entwickler-Tools des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) können das Verständnis des Box-Modells erheblich erleichtern — sie können Ihnen die Größe des Elements plus seinen Rand, Abstand und Randlinie anzeigen. Das Inspektieren eines Elements auf diese Weise ist eine großartige Möglichkeit herauszufinden, ob Ihre Box wirklich die Größe hat, die Sie denken!

![Das Box-Modell eines Elements mit Firefox DevTools inspizieren](box-model-devtools.png)

## Ränder, Abstände und Randlinien

Sie haben bereits die Eigenschaften {{cssxref("margin")}}, {{cssxref("padding")}} und {{cssxref("border")}} in der obigen Beispiel gesehen. Die in diesem Beispiel verwendeten Eigenschaften sind **Shorthands** und ermöglichen es uns, alle vier Seiten der Box auf einmal festzulegen. Diese Shorthand-Eigenschaften haben auch gleichwertige Langform-Eigenschaften, die die Steuerung über die verschiedenen Seiten der Box einzeln ermöglichen.

Lassen Sie uns diese Eigenschaften im Detail erkunden.

### Rand

Der Rand ist ein unsichtbarer Raum um Ihre Box. Er drückt andere Elemente von der Box weg. Ränder können positive oder negative Werte haben. Das Setzen eines negativen Rands auf einer Seite der Box kann dazu führen, dass sie sich über andere Dinge auf der Seite überlappt. Ob Sie das Standard- oder das alternative Box-Modell verwenden, der Rand wird immer nach der Berechnung der Größe der sichtbaren Box hinzugefügt.

Wir können alle Ränder eines Elements auf einmal mit der {{cssxref("margin")}}-Eigenschaft steuern oder jede Seite einzeln mit den entsprechenden Langform-Eigenschaften:

- {{cssxref("margin-top")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}

#### Spielen mit Rändern

Bearbeiten Sie das untenstehende Beispiel. Versuchen Sie, die Randwerte zu ändern, um zu sehen, wie die Box herumgeschoben wird, da der Rand Raum erschafft oder entfernt (wenn es sich um einen negativen Rand handelt) zwischen diesem Element und dem was es enthält.

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

#### Rand-Kollaps

Abhängig davon, ob zwei Elemente, deren Ränder sich berühren, positive oder negative Ränder haben, werden die Ergebnisse unterschiedlich sein:

- Zwei positive Ränder werden kombiniert, um einen Rand zu werden. Seine Größe wird gleich dem größten individuellen Rand sein.
- Zwei negative Ränder werden zusammenfallen und der kleinste (am weitesten von null entfernt) Wert wird verwendet.
- Wenn ein Rand negativ ist, wird sein Wert von dem Gesamtwert _subtrahiert_.

Im folgenden Beispiel haben wir zwei Absätze. Der obere Absatz hat einen `margin-bottom` von 50 Pixel, der andere hat einen `margin-top` von 30 Pixel. Die Ränder sind zusammengefallen, so dass der tatsächliche Rand zwischen den Boxen 50 Pixel ist und nicht die Summe der beiden Ränder.

Sie können dies testen, indem Sie den `margin-top` des zweiten Absatzes auf `0` setzen. Der sichtbare Rand zwischen den beiden Absätzen wird sich nicht ändern — er behält die 50 Pixel, die im `margin-bottom` des ersten Absatzes festgelegt sind. Wenn Sie ihn auf `-10px` setzen, werden Sie sehen, dass der Gesamtrand `40px` wird — er subtrahiert von den `50px`.

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

Eine Anzahl von Regeln bestimmt, wann Ränder kollabieren und wann nicht. Für weitere Informationen siehe die detaillierte Seite über [Beherrschen des Randkollapses](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing). Die Hauptsache, an die man sich erinnern sollte, ist, dass Randkollaps eine Sache ist, die passiert, wenn Sie Raum mit Rändern erstellen und nicht den Raum erhalten, den Sie erwarten.

### Randlinien

Die Randlinie wird zwischen dem Rand und dem Abstand einer Box gezeichnet. Wenn Sie das Standard-Box-Modell verwenden, wird die Größe der Randlinie zur `width` und `height` der Inhaltsbox hinzugefügt. Wenn Sie das alternative Box-Modell verwenden, dann wird die Inhaltsbox umso kleiner, je größer die Randlinie ist, da die Randlinie einen Teil dieser verfügbaren `width` und `height` der Elementbox einnimmt.

Zum Stylen von Randlinien gibt es eine große Anzahl von Eigenschaften — es gibt vier Randlinien, und jede Randlinie hat einen Stil, eine Breite und eine Farbe, die wir manipulieren möchten.

Sie können die Breite, den Stil oder die Farbe aller vier Randlinien auf einmal mit der {{cssxref("border")}}-Eigenschaft festlegen.

Um die Eigenschaften jeder Seite einzeln festzulegen, verwenden Sie:

- {{cssxref("border-top")}}
- {{cssxref("border-right")}}
- {{cssxref("border-bottom")}}
- {{cssxref("border-left")}}

Um die Breite, den Stil oder die Farbe aller Seiten festzulegen, verwenden Sie:

- {{cssxref("border-width")}}
- {{cssxref("border-style")}}
- {{cssxref("border-color")}}

Um die Breite, den Stil oder die Farbe einer einzelnen Seite festzulegen, verwenden Sie eine der detaillierteren Langform-Eigenschaften:

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

#### Spielen mit Randlinien

Im Beispiel unten haben wir verschiedene Shorthands und Langhands verwendet, um Randlinien zu erstellen. Bearbeiten Sie die verschiedenen Eigenschaften, um zu überprüfen, dass Sie verstehen, wie sie funktionieren. Die MDN-Seiten für die Randlinieneigenschaften geben Ihnen Informationen über die verschiedenen verfügbaren Randlinienstile.

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

### Abstand (Padding)

Der Abstand befindet sich zwischen der Randlinie und dem Inhaltsbereich und wird verwendet, um den Inhalt von der Randlinie weg zu verschieben. Im Gegensatz zu Rändern können Sie keine negativen Abstände haben. Jeder auf Ihr Element angewendete Hintergrund wird hinter dem Abstand angezeigt.

Die {{cssxref("padding")}}-Eigenschaft steuert den Abstand auf allen Seiten eines Elements. Um jede Seite einzeln zu steuern, verwenden Sie diese Langform-Eigenschaften:

- {{cssxref("padding-top")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}

#### Spielen mit Abständen

Im Beispiel unten bearbeiten Sie die Werte für den Abstand der Klasse `.box` und sehen Sie, wie dies ändert, wo der Text im Verhältnis zur Box beginnt. Sie können auch den Abstand der Klasse `.container` ändern, um Platz zwischen dem Container und der Box zu schaffen. Sie können den Abstand eines beliebigen Elements ändern, um Platz zwischen seiner Randlinie und dem darzustellen, was sich im Inneren des Elements befindet.

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

All das oben Gesagte gilt vollständig für Block-Boxen. Einige der Eigenschaften können auch auf Inline-Boxen angewendet werden, wie diejenigen, die durch ein `<span>`-Element erstellt werden.

Im folgenden Beispiel haben wir ein `<span>` innerhalb eines Absatzes. Wir haben ihm eine `width`, `height`, `margin`, `border` und `padding` zugewiesen. Sie können sehen, dass die Breite, Höhe und vertikalen Ränder das `<span>` nicht beeinflussen. Der vertikale Abstand und die Randlinie ändern die Größe der Inline-Box, beeinträchtigen aber nicht die Position des umgebenden Inhalts. Stattdessen überlappen der vertikale Abstand und die Randlinie andere Wörter im Absatz. Nur der horizontale Abstand, die Ränder und die Randlinien beeinflussen die Position des Texts, der das `<span>` umgibt.

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
  margin: 20px 30px;
  padding: 10px 20px;
  width: 80px;
  height: 150px;
  background-color: lightblue;
  border: solid blue;
  border-width: 7px 1px;
}
```

{{EmbedLiveSample("inline-box-model")}}

## Verwendung von display: inline-block

`display: inline-block` ist ein spezieller Wert von `display`, der einen Mittelweg zwischen `inline` und `block` bietet. Verwenden Sie ihn, wenn Sie nicht möchten, dass ein Element in eine neue Zeile bricht, aber möchten, dass es `width` und `height` respektiert und das Überlappen wie oben vermieden wird.

Ein Element mit `display: inline-block` macht einen Teil der blockartigen Dinge, die wir bereits kennen:

- Die Eigenschaften `width` und `height` werden respektiert.
- `padding`, `margin` und `border` werden bewirken, dass andere Elemente von der Box weggeschoben werden.

Es bricht jedoch nicht in eine neue Zeile und wird nur größer als sein Inhalt, wenn Sie explizit `width` und `height`-Eigenschaften hinzufügen.

### Spielen mit inline-block

Im nächsten Beispiel haben wir `display: inline-block` zu unserem `<span>`-Element hinzugefügt. Versuchen Sie, dies in `display: block` zu ändern oder die Zeile komplett zu entfernen, um den Unterschied in den Anzeigemodellen zu sehen:

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

Wo dies nützlich sein kann, ist, wenn Sie einen Linkbereich durch Hinzufügen von `padding` vergrößern möchten. `<a>` ist ein Inline-Element wie `<span>`; Sie können `display: inline-block` verwenden, um das Hinzufügen von Abstand zu ermöglichen, was das Klicken des Links für den Benutzer erleichtert.

Sie sehen dies ziemlich häufig in Navigationsleisten. Die untenstehende Navigation wird in einer Reihe mit Flexbox angezeigt und wir haben dem `<a>`-Element Abstand hinzugefügt, da wir die `background-color` ändern möchten, wenn das `<a>`-Element überfahren wird. Der Abstand scheint die Randlinie des `<ul>`-Elements zu überlappen. Dies liegt daran, dass das `<a>` ein Inline-Element ist.

Fügen Sie `display: inline-block;` zur Regel mit dem `.links-list a`-Selektor hinzu, und Sie werden sehen, wie dies das Problem durch das Respektieren des Abstands durch andere Elemente behebt:

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

## Zusammenfassung

Das ist das meiste, was Sie über das Box-Modell wissen müssen. Sie können in Zukunft zu dieser Lektion zurückkehren, wenn Sie sich jemals verwirrt fühlen, wie groß Boxen in Ihrem Layout sind.

Im nächsten Artikel geben wir Ihnen einige Tests, die Sie verwenden können, um zu überprüfen, wie gut Sie die Informationen, die wir Ihnen über das CSS-Box-Modell gegeben haben, verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors", "Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics")}}
