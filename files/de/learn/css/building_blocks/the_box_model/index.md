---
title: Das Boxmodell
slug: Learn/CSS/Building_blocks/The_box_model
l10n:
  sourceCommit: 033285c99a8e1bc05b646ff19b70d2e8b86dff46
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_layers", "Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks")}}

Alles in CSS hat eine Box um sich herum, und das Verständnis dieser Boxen ist der Schlüssel, um komplexere Layouts mit CSS erstellen oder Elemente mit anderen Elementen ausrichten zu können. In dieser Lektion werfen wir einen Blick auf das CSS _Boxmodell_. Sie erhalten ein Verständnis dafür, wie es funktioniert und welche Fachbegriffe damit zusammenhängen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, HTML-Grundlagen (lernen Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS Erste Schritte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie das CSS-Boxmodell kennen, woraus das Boxmodell besteht und wie
        Sie zum alternativen Modell wechseln können.
      </td>
    </tr>
  </tbody>
</table>

## Block- und Inline-Boxen

In CSS haben wir mehrere Arten von Boxen, die im Allgemeinen in die Kategorien **Block-Boxen** und **Inline-Boxen** fallen. Der Typ bezieht sich darauf, wie sich die Box im Hinblick auf den Seitenfluss und im Verhältnis zu anderen Boxen auf der Seite verhält. Boxen haben einen **inneren Anzeigetyp** und einen **äußeren Anzeigetyp**.

Im Allgemeinen können Sie verschiedene Werte für den Anzeigetyp mit der Eigenschaft {{cssxref("display")}} festlegen, die verschiedene Werte haben kann.

## Äußerer Anzeigetyp

Wenn eine Box einen äußeren Anzeigetyp von `block` hat, dann:

- Die Box wird auf eine neue Zeile umgebrochen.
- Die Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} werden berücksichtigt.
- Padding, Margin und Border werden dazu führen, dass andere Elemente von der Box weggeschoben werden.
- Wenn {{cssxref("width")}} nicht angegeben ist, erstreckt sich die Box in der Inline-Richtung, um den verfügbaren Platz in ihrem Container auszufüllen. In den meisten Fällen wird die Box so breit wie ihr Container werden und 100 % des verfügbaren Platzes einnehmen.

Einige HTML-Elemente, wie `<h1>` und `<p>`, verwenden standardmäßig `block` als ihren äußeren Anzeigetyp.

Wenn eine Box einen äußeren Anzeigetyp von `inline` hat, dann:

- Die Box wird nicht auf eine neue Zeile umgebrochen.
- Die Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} werden nicht angewendet.
- Padding, Margin und Border oben und unten werden angewendet, bewegen jedoch keine anderen Inline-Boxen weg von der Box.
- Padding, Margin und Border links und rechts werden angewendet und veranlassen andere Inline-Boxen, sich von der Box zu entfernen.

Einige HTML-Elemente, wie `<a>`, `<span>`, `<em>` und `<strong>` verwenden standardmäßig `inline` als ihren äußeren Anzeigetyp.

## Innerer Anzeigetyp

Boxen haben auch einen _inneren_ Anzeigetyp, der bestimmt, wie Elemente innerhalb dieser Box angeordnet sind.

Block- und Inline-Layout ist die Standardweise, wie Dinge im Web funktionieren. Standardmäßig und ohne andere Anweisungen werden die Elemente in einer Box auch im **[normalen Fluss](/de/docs/Learn/CSS/CSS_layout/Normal_Flow)** angeordnet und verhalten sich als Block- oder Inline-Boxen.

Sie können den inneren Anzeigetyp ändern, zum Beispiel durch das Setzen von `display: flex;`. Das Element verwendet weiterhin den äußeren Anzeigetyp `block`, aber dies ändert den inneren Anzeigetyp zu `flex`. Alle direkten Kinder dieser Box werden zu Flex-Elementen und verhalten sich gemäß der [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox)-Spezifikation.

Wenn Sie mehr über CSS-Layout im Detail lernen, werden Sie auf [`flex`](/de/docs/Learn/CSS/CSS_layout/Flexbox) und verschiedene andere innere Werte stoßen, die Ihre Boxen haben können, zum Beispiel [`grid`](/de/docs/Learn/CSS/CSS_layout/Grids).

> [!NOTE]
> Um mehr über die Werte des Displays und darüber, wie Boxen in Block- und Inline-Layouts funktionieren, zu erfahren, sehen Sie sich den MDN-Leitfaden [Block- und Inline-Layout](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow) an.

## Beispiele für verschiedene Anzeigetypen

Das folgende Beispiel hat drei verschiedene HTML-Elemente, die alle einen äußeren Anzeigetyp von `block` haben.

- Ein Absatz mit einem in CSS hinzugefügten Rahmen. Der Browser stellt dies als Block-Box dar. Der Absatz beginnt in einer neuen Zeile und erstreckt sich über die gesamte verfügbare Breite.

- Eine Liste, die mit `display: flex` dargestellt ist. Dies legt das Flex-Layout für die Kinder des Containers fest, die Flex-Elemente sind. Die Liste selbst ist eine Block-Box und - wie der Absatz - dehnt sich auf die volle Containerbreite aus und bricht in eine neue Zeile um.

- Ein Block-Ebenen-Absatz, in dem sich zwei `<span>`-Elemente befinden. Diese Elemente wären normalerweise `inline`, jedoch hat eines der Elemente eine Klasse von "block", die auf `display: block` gesetzt wird.

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

Im nächsten Beispiel sehen wir, wie sich `inline`-Elemente verhalten.

- Die `<span>`-Elemente im ersten Absatz sind standardmäßig inline und erzwingen daher keinen Zeilenumbruch.

- Das `<ul>`-Element, das auf `display: inline-flex` gesetzt ist, erzeugt eine Inline-Box, die einige Flex-Elemente enthält.

- Die beiden Absätze sind beide auf `display: inline` gesetzt. Der Inline-Flex-Container und die Absätze werden alle zusammen auf einer Zeile angezeigt, anstatt auf neue Zeilen umzubrechen (wie es der Fall wäre, wenn sie als Block-Ebenen-Elemente angezeigt würden).

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

Das Wichtige, das Sie sich jetzt merken sollten, ist: Durch Ändern des Werts der `display`-Eigenschaft kann sich ändern, ob der äußere Anzeigetyp einer Box Block oder Inline ist. Dies ändert die Art und Weise, wie es neben anderen Elementen im Layout angezeigt wird.

## Was ist das CSS-Boxmodell?

Das CSS-Boxmodell als Ganzes gilt für Block-Boxen und definiert, wie die verschiedenen Teile einer Box – Rand (margin), Rahmen (border), Innenabstand (padding) und Inhalt – zusammenwirken, um eine Box zu erstellen, die Sie auf einer Seite sehen können. Inline-Boxen nutzen nur _einen Teil_ des im Boxmodell definierten Verhaltens.

Um es komplexer zu machen, gibt es ein Standard- und ein alternatives Boxmodell. Standardmäßig verwenden Browser das Standard-Boxmodell.

### Teile einer Box

Um eine Block-Box in CSS zu erstellen, haben wir die:

- **Inhaltsbox**: Der Bereich, in dem Ihr Inhalt angezeigt wird; Größe es durch Eigenschaften wie {{cssxref("inline-size")}} und {{cssxref("block-size")}} oder {{cssxref("width")}} und {{cssxref("height")}}.
- **Innenabstandsbox**: Der Innenabstand liegt um den Inhalt als Leerraum; Größe es durch {{cssxref("padding")}} und verwandte Eigenschaften.
- **Rahmenbox**: Die Rahmenbox umschließt den Inhalt und jeden Innenabstand; Größe es durch {{cssxref("border")}} und verwandte Eigenschaften.
- **Randbox**: Der Rand ist die äußerste Schicht, die den Inhalt, Innenabstand und Rahmen als Leerraum zwischen dieser Box und anderen Elementen umschließt; Größe es durch {{cssxref("margin")}} und verwandte Eigenschaften.

Das folgende Diagramm zeigt diese Schichten:

![Diagramm des Boxmodells](box-model.png)

### Das Standard-CSS-Boxmodell

Im Standard-Boxmodell, wenn Sie `inline-size` und `block-size` (oder `width` und `height`) Eigenschaften auf einer Box einstellen, definieren diese Werte die `inline-size` und `block-size` (`width` und `height` in horizontalen Sprachen) der _Inhaltsbox_. Jeder Innenabstand und Rahmen wird dann zu diesen Dimensionen hinzugefügt, um die Gesamtgröße zu erhalten, die von der Box eingenommen wird (siehe das Bild unten).

Wenn wir annehmen, dass eine Box das folgende CSS hat:

```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

Der _tatsächliche_ Platz, der von der Box eingenommen wird, wird 410px breit (350 + 25 + 25 + 5 + 5) und 210px hoch (150 + 25 + 25 + 5 + 5) sein.

![Zeigt die Größe der Box, wenn das Standard-Boxmodell verwendet wird.](standard-box-model.png)

> [!NOTE]
> Der Rand (margin) wird nicht zur tatsächlichen Größe der Box gezählt – sicher, er beeinflusst den gesamten Platz, den die Box auf der Seite einnimmt, aber nur den Raum außerhalb der Box. Der Bereich der Box endet am Rand — er erstreckt sich nicht in den Rand.

### Das alternative CSS-Boxmodell

Im alternativen Boxmodell ist jede Breite die Breite der sichtbaren Box auf der Seite. Die Breite des Inhaltsbereichs ist diese Breite minus der Breite für Innenabstand und Rahmen (siehe Bild unten). Es ist nicht nötig, Rahmen und Innenabstand zusammenzuzählen, um die tatsächliche Größe der Box zu erhalten.

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
  inline-size: 350px;
  height: 150px;
  block-size: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

Nun wird der _tatsächliche_ Platz, den die Box einnimmt, in der Inline-Richtung 350px und in der Block-Richtung 150px betragen.

![Zeigt die Größe der Box, wenn das alternative Boxmodell verwendet wird.](alternate-box-model.png)

Um das alternative Boxmodell für alle Ihre Elemente zu verwenden (was eine häufige Wahl unter Entwicklern ist), setzen Sie die `box-sizing`-Eigenschaft auf das `<html>`-Element und setzen Sie alle anderen Elemente so, dass sie diesen Wert erben:

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

Um das zugrunde liegende Konzept zu verstehen, können Sie den [Artikel auf CSS Tricks über box-sizing](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/) lesen.

## Spielen mit Boxmodellen

Im folgenden Beispiel sehen Sie zwei Boxen. Beide haben eine Klasse von `.box`, die ihnen die gleiche `width`, `height`, `margin`, `border` und `padding` gibt. Der einzige Unterschied besteht darin, dass die zweite Box so eingestellt wurde, dass das alternative Boxmodell verwendet wird. Können Sie die Größe der zweiten Box ändern (indem Sie CSS zur Klasse `.alternate` hinzufügen), um sie in Breite und Höhe der ersten Box anzupassen?

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
> Sie können eine Lösung für diese Aufgabe [hier](https://github.com/mdn/css-examples/blob/main/learn/solutions.md#the-box-model) finden.

### Verwenden Sie die Entwicklerwerkzeuge des Browsers, um das Boxmodell anzuzeigen

Ihre [Entwicklerwerkzeuge des Browsers](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) können das Verständnis des Boxmodells erheblich erleichtern. Wenn Sie ein Element in den Firefox-Entwicklerwerkzeugen inspizieren, können Sie die Größe des Elements sowie dessen Rand, Innenabstand und Rahmen sehen. Das Inspizieren eines Elements auf diese Weise ist eine großartige Möglichkeit herauszufinden, ob Ihre Box wirklich die Größe hat, von der Sie glauben, dass sie es ist!

![Untersuchen des Boxmodells eines Elements mit Firefox DevTools](box-model-devtools.png)

## Ränder, Innenabstände und Rahmen

Sie haben die Eigenschaften {{cssxref("margin")}}, {{cssxref("padding")}} und {{cssxref("border")}} bereits im obigen Beispiel gesehen. Die in diesem Beispiel verwendeten Eigenschaften sind **Kurzschrift** und ermöglichen es uns, alle vier Seiten der Box auf einmal einzustellen. Diese Kurzschriften haben auch entsprechende Langschrift-Eigenschaften, die es erlauben, die verschiedenen Seiten der Box individuell zu steuern.

Lassen Sie uns diese Eigenschaften im Detail erkunden.

### Rand

Der Rand ist ein unsichtbarer Raum um Ihre Box. Er drückt andere Elemente von der Box weg. Ränder können positive oder negative Werte haben. Das Setzen eines negativen Randes auf einer Seite Ihrer Box kann dazu führen, dass sie sich mit anderen Dingen auf der Seite überschneidet. Ob Sie das Standard- oder alternative Boxmodell verwenden, der Rand wird immer nach der Größe der sichtbaren Box berechnet.

Wir können alle Ränder eines Elements auf einmal mit der Eigenschaft {{cssxref("margin")}} steuern oder jede Seite individuell mit den entsprechenden Langschrift-Eigenschaften:

- {{cssxref("margin-top")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}

Im folgenden Beispiel versuchen Sie, die Randwerte zu ändern, um zu sehen, wie sich die Box aufgrund des Randes bewegt, der Raum schafft oder entfernt (wenn es ein negativer Rand ist) zwischen diesem Element und dem umschließenden Element.

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

#### Zusammenfallen von Rändern

Abhängig davon, ob zwei Elemente, deren Ränder sich berühren, positive oder negative Ränder haben, werden die Ergebnisse unterschiedlich sein:

- Zwei positive Ränder werden kombiniert, um einen Rand zu bilden. Seine Größe entspricht dem größten individuellen Rand.
- Zwei negative Ränder werden zusammenfallen, und der kleinste (am weitesten von null entfernt) Wert wird verwendet.
- Wenn ein Rand negativ ist, wird sein Wert vom Gesamtwert _abgezogen_.

Im folgenden Beispiel haben wir zwei Absätze. Der obere Absatz hat einen `margin-bottom` von 50 Pixeln, der andere einen `margin-top` von 30 Pixeln. Die Ränder sind zusammengeschmolzen, sodass der tatsächliche Rand zwischen den Boxen 50 Pixel beträgt und nicht die Summe der beiden Ränder.

Sie können dies testen, indem Sie den `margin-top` des zweiten Absatzes auf `0` setzen. Der sichtbare Rand zwischen den beiden Absätzen ändert sich nicht — er behält die 50 Pixel bei, die im `margin-bottom` des ersten Absatzes festgelegt sind. Wenn Sie ihn auf `-10px` setzen, sehen Sie, dass der gesamte Rand `40px` beträgt — er wird von den `50px` abgezogen.

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

Eine Reihe von Regeln bestimmt, wann Ränder zusammenfallen und wann nicht. Für weitere Informationen siehe die detaillierte Seite über das [Meistern des Zusammenfallens von Rändern](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing). Das Wichtigste, das Sie sich merken sollten, ist, dass das Zusammenfallen von Rändern eine Sache ist, die passiert, wenn Sie mit Rändern Platz schaffen und nicht den erwarteten Platz erhalten.

### Rahmen

Der Rahmen wird zwischen dem Rand und dem Innenabstand einer Box gezeichnet. Wenn Sie das Standard-Boxmodell verwenden, wird die Größe des Rahmens zur `width` und `height` der Inhaltsbox hinzugefügt. Wenn Sie das alternative Boxmodell verwenden, wird der Inhaltsbereich umso kleiner, je größer der Rahmen ist, da der Rahmen einen Teil der verfügbaren `width` und `height` der Box einnimmt.

Zum Stylen von Rahmen gibt es eine Vielzahl von Eigenschaften — es gibt vier Rahmen, und jeder Rahmen hat einen Stil, eine Breite und eine Farbe, die wir manipulieren möchten.

Sie können die Breite, den Stil oder die Farbe aller vier Rahmen auf einmal mit der Eigenschaft {{cssxref("border")}} einstellen.

Um die Eigenschaften jeder Seite individuell einzustellen, verwenden Sie:

- {{cssxref("border-top")}}
- {{cssxref("border-right")}}
- {{cssxref("border-bottom")}}
- {{cssxref("border-left")}}

Um die Breite, den Stil oder die Farbe aller Seiten einzustellen, verwenden Sie:

- {{cssxref("border-width")}}
- {{cssxref("border-style")}}
- {{cssxref("border-color")}}

Um die Breite, den Stil oder die Farbe einer einzelnen Seite einzustellen, verwenden Sie eine der feineren Langschrifteigenschaften:

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

Im folgenden Beispiel haben wir verschiedene Kurz- und Langschriften verwendet, um Rahmen zu erstellen. Spielen Sie mit den verschiedenen Eigenschaften, um zu überprüfen, ob Sie verstehen, wie sie funktionieren. Die MDN-Seiten zu den Rahmen-Eigenschaften geben Ihnen Informationen über die verschiedenen verfügbaren Rahmenstile.

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

Der Innenabstand liegt zwischen dem Rahmen und dem Inhaltsbereich und wird verwendet, um den Inhalt vom Rahmen wegzuschieben. Anders als bei Rändern können Sie keinen negativen Innenabstand haben. Jeder auf Ihr Element angewandte Hintergrund wird hinter dem Innenabstand angezeigt.

Die Eigenschaft {{cssxref("padding")}} steuert den Innenabstand auf allen Seiten eines Elements. Um jede Seite individuell zu steuern, verwenden Sie diese Langschrifteigenschaften:

- {{cssxref("padding-top")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}

Im folgenden Beispiel können Sie die Werte für den Innenabstand auf der Klasse `.box` ändern, um zu sehen, wie sich dies ändert, wo der Text im Verhältnis zur Box beginnt. Sie können auch den Innenabstand auf der Klasse `.container` ändern, um Platz zwischen dem Container und der Box zu schaffen. Sie können den Innenabstand auf jedem Element ändern, um Platz zwischen seinem Rahmen und dem, was sich im Element befindet, zu schaffen.

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

## Das Boxmodell und Inline-Boxen

Alles oben genannte gilt vollständig für Block-Boxen. Einige der Eigenschaften können auch auf Inline-Boxen angewendet werden, wie zum Beispiel auf eine Box, die durch ein `<span>`-Element erstellt wird.

Im folgenden Beispiel haben wir ein `<span>` in einem Absatz. Wir haben ihm eine `width`, `height`, `margin`, `border` und `padding` gegeben. Sie sehen, dass die `width` und `height` ignoriert werden. Der obere und untere Rand, Innenabstand und Rahmen werden respektiert, aber ändern nicht die Beziehung anderer Inhalte zu unserer Inline-Box. Der Innenabstand und der Rahmen überlappen andere Wörter im Absatz. Der linke und rechte Innenabstand, Ränder und Rahmen bewegen andere Inhalte von der Box weg.

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

`display: inline-block` ist ein spezieller Wert von `display`, das eine Zwischenlösung zwischen `inline` und `block` bietet. Verwenden Sie es, wenn Sie nicht möchten, dass ein Element auf eine neue Zeile umbricht, aber die `width` und `height` respektiert werden und das Überlappen wie oben vermieden wird.

Ein Element mit `display: inline-block` führt einen Teil der Block-Dinge aus, die wir bereits kennen:

- Die Eigenschaften `width` und `height` werden respektiert.
- `padding`, `margin` und `border` veranlassen andere Elemente, von der Box weggeschoben zu werden.

Es bricht jedoch nicht auf eine neue Zeile um, und wird nur größer als sein Inhalt, wenn Sie explizit `width` und `height` Eigenschaften hinzufügen.

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

Wo dies nützlich sein kann, ist, wenn Sie einem Link einen größeren Klickbereich geben möchten, indem Sie `padding` hinzufügen. `<a>` ist ein Inline-Element wie `<span>`; Sie können `display: inline-block` verwenden, um den Innenabstand darauf einzustellen und es einem Benutzer zu erleichtern, den Link zu klicken.

Sie sehen dies ziemlich häufig in Navigationsleisten. Die folgende Navigation wird in einer Zeile mit Flexbox angezeigt und wir haben Innenabstand zum `<a>`-Element hinzugefügt, da wir in der Lage sein wollen, die `background-color` zu ändern, wenn das `<a>`-Element schwebt. Der Innenabstand scheint den Rahmen auf dem `<ul>`-Element zu überlappen. Dies liegt daran, dass das `<a>` ein Inline-Element ist.

Fügen Sie `display: inline-block;` zur Regel mit dem `.links-list a`-Selektor hinzu, und Sie werden sehen, wie dies das Problem behebt, indem der Innenabstand von anderen Elementen respektiert wird:

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
  border: 1px solid #000;
}

li {
  margin: 5px;
}

.links-list a {
  background-color: rgb(179 57 81);
  color: #fff;
  text-decoration: none;
  padding: 1em 2em;
}

.links-list a:hover {
  background-color: rgb(66 28 40);
  color: #fff;
}
```

{{EmbedLiveSample("inline-block-nav")}}

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Das Boxmodell](/de/docs/Learn/CSS/Building_blocks/Box_Model_Tasks).

## Zusammenfassung

Das ist fast alles, was Sie über das Boxmodell verstehen müssen. Vielleicht möchten Sie in Zukunft zu dieser Lektion zurückkehren, wenn Sie jemals verwirrt sind, wie groß Boxen in Ihrem Layout sind.

Im nächsten Artikel werden wir uns ansehen, wie [Hintergründe und Rahmen](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders) verwendet werden können, um Ihre einfachen Boxen interessanter zu gestalten.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_layers", "Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks")}}
