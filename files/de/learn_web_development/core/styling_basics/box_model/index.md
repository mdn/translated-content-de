---
title: Das Box-Modell
short-title: Box model
slug: Learn_web_development/Core/Styling_basics/Box_model
l10n:
  sourceCommit: 57bc2729e3963907c0b54158ae1a31318a2ebbd1
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors", "Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics")}}

Alles in CSS hat ein Kästchen um sich herum, und das Verständnis dieser Kästchen ist der Schlüssel, um mit CSS komplexere Layouts zu erstellen oder um Elemente miteinander auszurichten. In dieser Lektion werden wir uns das CSS _Box-Modell_ ansehen. Sie werden verstehen, wie es funktioniert und die zugehörige Terminologie kennenlernen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Block- und Inline-Elemente</li>
          <li>Die verschiedenen Boxen, die ein Element bilden, und wie man sie stylt — Inhalt, Rand, Rahmen, Polsterung.</li>
          <li>Das alternative Box-Modell (zugänglich über <code>box-sizing: border-box</code>) und seine Unterschiede zum regulären Box-Modell.</li>
          <li>Rand-Kollaps.</li>
          <li>Grundlegende Anzeigewerte und wie sie das Box-Verhalten beeinflussen — <code>block</code>, <code>inline</code>, <code>inline-block</code>, <code>none</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Block- und Inline-Boxen

In CSS gibt es mehrere Arten von Boxen, die im Allgemeinen in die Kategorien **Block-Boxen** und **Inline-Boxen** passen. Der Typ bezieht sich darauf, wie sich die Box im Seitenfluss verhält und in Bezug auf andere Boxen auf der Seite. Boxen haben einen **inneren Anzeigentyp** und einen **äußeren Anzeigentyp**.

Im Allgemeinen können Sie verschiedene Werte für den Anzeigentyp mithilfe der {{cssxref("display")}}-Eigenschaft festlegen.

Wenn eine Box einen Anzeigewert von `block` hat, dann:

- Die Box bricht in eine neue Zeile um.
- Die {{cssxref("width")}}- und {{cssxref("height")}}-Eigenschaften werden berücksichtigt.
- Polsterung, Rand und Rahmen sorgen dafür, dass andere Elemente von der Box weggeschoben werden.
- Wenn {{cssxref("width")}} nicht angegeben ist, dehnt sich die Box in der Inline-Richtung aus, um den verfügbaren Platz in ihrem Container auszufüllen. In den meisten Fällen wird die Box so breit wie ihr Container und füllt 100 % des verfügbaren Raums aus.

Einige HTML-Elemente, wie z.B. `<h1>` und `<p>`, verwenden standardmäßig `block` als ihren äußeren Anzeigentyp.

Wenn eine Box einen Anzeigewert von `inline` hat, dann:

- Die Box bricht nicht in eine neue Zeile um.
- Die {{cssxref("width")}}, {{cssxref("height")}} und obere sowie untere Ränder haben keine Auswirkungen.
- **Obere und untere** Polsterung und Rahmen ändern die Größe der Box, ohne die Position des umgebenden Inhalts zu beeinflussen, was zu Überlappungen führen kann.
- **Linke und rechte** Polsterungen, Ränder und Rahmen beeinflussen die Position des umliegenden Inline-Inhalts.

Einige HTML-Elemente, wie z.B. `<a>`, `<span>`, `<em>` und `<strong>`, verwenden standardmäßig `inline` als ihren äußeren Anzeigentyp.

Das Block- und Inline-Layout ist die Standardeinstellung für das Verhalten im Web. Standardmäßig und ohne weitere Anweisungen werden die Elemente innerhalb einer Box auch im **[Normalen Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow)** angeordnet und verhalten sich wie Block- oder Inline-Boxen.

## Innere und äußere Anzeigentypen

`block` und `inline` Anzeigewerte werden als **äußere Anzeige**-Typen bezeichnet — sie beeinflussen, wie die Box im Verhältnis zu anderen Boxen um sie herum angeordnet wird. Boxen haben auch einen **inneren Anzeige**-Typ, der bestimmt, wie Elemente innerhalb dieser Box angeordnet werden.

Sie können den inneren Anzeigentyp ändern, indem Sie einen inneren Anzeigewert festlegen, zum Beispiel `display: flex;`. Das Element verwendet weiterhin den äußeren Anzeigentyp `block`, aber dies ändert den inneren Anzeigentyp zu `flex`. Alle direkten Kinder dieser Box werden zu Flex-Elementen und verhalten sich entsprechend der [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)-Spezifikation.

Wenn Sie sich eingehender mit dem CSS-Layout beschäftigen, werden Sie auf [`flex`](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und verschiedene andere innere Werte stoßen, die Ihre Boxen haben können, zum Beispiel [`grid`](/de/docs/Learn_web_development/Core/CSS_layout/Grids).

Machen Sie sich jetzt nicht zu viele Gedanken über die Begriffe innerer und äußerer Anzeigentyp; dies ist das, was intern passiert, und wir erwähnen es hier, falls Sie anderswo darüber stolpern. Im Allgemeinen arbeiten Sie nur mit einzelnen `display`-Werten und müssen sich nicht viel darum kümmern.

## Beispiele für verschiedene Anzeigentypen

Das Beispiel unten hat drei verschiedene HTML-Elemente, die alle einen äußeren Anzeigentyp von `block` haben.

- Ein Absatz mit einem Rahmen, der in CSS hinzugefügt wurde. Der Browser rendert dies als Block-Box. Der Absatz beginnt in einer neuen Zeile und erstreckt sich horizontal über die gesamte verfügbare Breite.

- Eine Liste, die mit `display: flex` layoutet ist. Dadurch wird für die Kinder des Containers ein Flex-Layout erstellt, die aufgrund der Standardeinstellung in einer Reihe angeordnet sind. Die Liste selbst ist eine Block-Box und — wie der Absatz — breitet sich über die gesamte Containerbreite aus und bricht in eine neue Zeile um.

- Ein Block-Absatz, in dem sich zwei `<span>`-Elemente befinden. Diese Elemente würden normalerweise `inline` sein, jedoch hat eines der Elemente eine Klasse von `block` und wird auf `display: block` gesetzt. Dadurch beginnt dieses einzelne Wort in einer neuen Zeile, die sich über die gesamte Breite seines Elternelements erstreckt.

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

- Die `<span>`-Elemente im ersten Absatz sind standardmäßig Inline und erzwingen daher keine Zeilenumbrüche.

- Das `<ul>`-Element, das auf `display: inline-flex` gesetzt ist, erstellt eine Inline-Box, die einige Flex-Elemente enthält.

- Die beiden Absätze sind beide auf `display: inline` gesetzt. Der Inline-Flex-Container und die Absätze verlaufen alle in einer Zeile, anstatt auf neue Zeilen umzubrechen (wie sie es tun würden, wenn sie als Block-Elemente angezeigt würden).

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

Das Wichtige, das Sie sich jetzt merken sollten, ist: Eine Änderung des Wertes der `display`-Eigenschaft kann ändern, ob der äußere Anzeigentyp einer Box block oder inline ist. Dies ändert die Art und Weise, wie es neben anderen Elementen im Layout angezeigt wird.

## Was ist das CSS-Box-Modell?

Das gesamte CSS-Box-Modell gilt für Block-Boxen und definiert, wie die verschiedenen Teile einer Box — Rand, Rahmen, Polsterung und Inhalt — zusammenarbeiten, um eine Box zu erstellen, die Sie auf einer Seite sehen können. Inline-Boxen verwenden nur _einige_ der im Box-Modell definierten Verhaltensweisen.

Um die Komplexität zu erhöhen, gibt es ein Standard- und ein alternatives Box-Modell. Standardmäßig verwenden Browser das Standard-Box-Modell.

### Teile einer Box

Ein Block-Box in CSS besteht aus:

- **Inhaltsbox**: Der Bereich, in dem Ihr Inhalt angezeigt wird; größenmäßig bestimmen durch Eigenschaften wie {{cssxref("width")}} und {{cssxref("height")}}.
- **Polsterungsbox**: Die Polsterung befindet sich als Weißraum um den Inhalt; größenmäßig bestimmt durch {{cssxref("padding")}} und zugehörige Eigenschaften.
- **Rahmenbox**: Die Rahmenbox umgibt den Inhalt und die Polsterung; größenmäßig bestimmt durch {{cssxref("border")}} und zugehörige Eigenschaften.
- **Randbox**: Der Rand ist die äußerste Schicht, die den Inhalt, die Polsterung und den Rahmen als Weißraum zwischen dieser Box und anderen Elementen umgibt; größenmäßig bestimmt durch {{cssxref("margin")}} und zugehörige Eigenschaften.

Das untenstehende Diagramm zeigt diese Schichten:

![Diagramm des Box-Modells](box-model.png)

### Das standardmäßige CSS-Box-Modell

Im Standard-Box-Modell, wenn Sie `width`- und `height`-Eigenschaften auf einer Box festlegen, definieren diese Werte die `width` und `height` der _Inhaltsbox_. Jede Polsterung und Rahmen wird dann zu diesen Dimensionen hinzugefügt, um die Gesamtgröße zu erhalten, die die Box einnimmt (siehe das Bild unten).

Wenn wir annehmen, dass eine Box folgende CSS-Eigenschaften hat:

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

![Anzeige der Größe der Box, wenn das standardmäßige Box-Modell verwendet wird.](standard-box-model.png)

> [!NOTE]
> Der Rand wird nicht zur tatsächlichen Größe der Box gezählt — natürlich beeinflusst er den Gesamtplatz, den die Box auf der Seite einnehmen wird, aber nur den Raum außerhalb der Box. Der Bereich der Box endet an der Grenze — er erstreckt sich nicht in den Rand hinein.

### Das alternative CSS-Box-Modell

Im alternativen Box-Modell ist die Breite die Breite der sichtbaren Box auf der Seite. Die Inhaltsbereichsbreite ist diese Breite minus die Breite für die Polsterung und den Rahmen (siehe Bild unten). Dies ist praktisch, da es nicht erforderlich ist, Rahmen und Polsterung zu summieren, um die tatsächliche Größe der Box zu erhalten.

Um das alternative Modell für ein Element zu aktivieren, setzen Sie `box-sizing: border-box` darauf:

```css
.box {
  box-sizing: border-box;
}
```

Wenn wir annehmen, dass die Box das gleiche CSS wie oben besitzt:

```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

Der _tatsächliche_ Platz, den die Box jetzt einnimmt, wird in Inline-Richtung `350px` und in Blockrichtung `150px` betragen.

![Anzeige der Größe der Box, wenn das alternative Box-Modell verwendet wird.](alternate-box-model.png)

Um das alternative Box-Modell für alle Ihre Elemente zu verwenden (was eine häufige Wahl unter Entwicklern ist), setzen Sie die `box-sizing`-Eigenschaft auf das `<html>`-Element und lassen Sie alle anderen Elemente diesen Wert erben:

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

Um die zugrunde liegende Idee zu verstehen, können Sie den [CSS-Tricks-Artikel über box-sizing](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/) lesen.

## Spielen mit Box-Modellen

Im Beispiel unten sehen Sie zwei Boxen. Beide haben eine Klasse von `.box`, die ihnen dieselbe `width`, `height`, `margin`, `border` und `padding` gibt. Der einzige Unterschied besteht darin, dass die zweite Box auf das alternative Box-Modell eingestellt ist.
Können Sie die Größe der zweiten Box ändern (indem Sie CSS zur `.alternate`-Klasse hinzufügen), sodass sie der ersten Box in Breite und Höhe entspricht?

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
> Eine Lösung für diese Aufgabe finden Sie im [css-examples Repo](https://github.com/mdn/css-examples/blob/main/learn/solutions.md#the-box-model).

### Verwendung der Browser-Entwicklertools zur Anzeige des Box-Modells

Ihre [Browser-Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) können das Verständnis des Box-Modells viel einfacher machen — sie können Ihnen die Größe des Elements sowie seinen Rand, seine Polsterung und seinen Rahmen anzeigen. Das Untersuchen eines Elements auf diese Weise ist eine großartige Möglichkeit herauszufinden, ob Ihre Box wirklich die Größe hat, die Sie denken!

![Untersuchen des Box-Modells eines Elements mit den Firefox-Entwicklertools](box-model-devtools.png)

## Ränder, Polsterungen und Rahmen

Sie haben die {{cssxref("margin")}}, {{cssxref("padding")}}- und {{cssxref("border")}}-Eigenschaften bereits in dem obigen Beispiel gesehen. Die in diesem Beispiel verwendeten Eigenschaften sind **Kurzschreibweisen** und ermöglichen es uns, alle vier Seiten der Box gleichzeitig festzulegen. Diese Kurzschreibweisen haben auch gleichwertige ausführliche Eigenschaften, die eine individuelle Steuerung über die verschiedenen Seiten der Box bieten.

Lassen Sie uns diese Eigenschaften im Detail erkunden.

### Rand

Der Rand ist ein unsichtbarer Raum um Ihre Box. Er drückt andere Elemente von der Box weg. Ränder können positive oder negative Werte haben. Das Festlegen eines negativen Rands auf einer Seite Ihrer Box kann dazu führen, dass sie sich mit anderen Dingen auf der Seite überlappt. Unabhängig davon, ob Sie das Standard- oder das alternative Box-Modell verwenden, wird der Rand immer nach der Größe der sichtbaren Box berechnet.

Wir können alle Ränder eines Elements gleichzeitig mit der {{cssxref("margin")}}-Eigenschaft steuern oder jede Seite einzeln mit den entsprechenden ausführlichen Eigenschaften:

- {{cssxref("margin-top")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}

#### Spielen mit Rändern

Bearbeiten Sie das unten stehende Beispiel. Versuchen Sie, die Randwerte zu ändern, um zu sehen, wie die Box durch den Rand verschoben wird und Raum geschaffen oder entfernt wird (wenn es sich um einen negativen Rand handelt) zwischen diesem Element und dem enthaltenen Element.

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

Je nachdem, ob zwei Elemente, deren Ränder sich berühren, positive oder negative Ränder haben, werden die Ergebnisse unterschiedlich sein:

- Zwei positive Ränder werden zu einem Rand kombiniert. Seine Größe wird gleich dem größten individuellen Rand sein.
- Zwei negative Ränder werden kollabieren und der kleinste (am weitesten von Null entfernte) Wert wird verwendet.
- Wenn ein Rand negativ ist, wird sein Wert _vom Gesamten abgezogen_.

Im folgenden Beispiel haben wir zwei Absätze. Der obere Absatz hat einen `margin-bottom` von 50 Pixeln, der andere hat einen `margin-top` von 30 Pixeln. Die Ränder sind zusammengefallen, sodass der tatsächliche Rand zwischen den Boxen 50 Pixel und nicht die Summe der beiden Ränder beträgt.

Sie können dies testen, indem Sie den `margin-top` des zweiten Absatzes auf `0` setzen. Der sichtbare Abstand zwischen den beiden Absätzen ändert sich nicht — es bleibt die 50 Pixel, die im `margin-bottom` des ersten Absatzes festgelegt sind. Wenn Sie es auf `-10px` setzen, werden Sie sehen, dass der Gesamtabstand `40px` wird — es wird vom `50px` abgezogen.

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

Eine Reihe von Regeln bestimmen, wann Ränder kollabieren und wann nicht. Weitere Informationen finden Sie auf der detaillierten Seite über das [Meistern des Rand-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing). Das Wichtigste, daran zu denken, ist, dass der Rand-Kollaps eine Sache ist, die passiert, wenn Sie Raum mit Rändern schaffen und nicht den erwarteten Raum erhalten.

> [!NOTE]
> [Lernen Sie Margen über Flags](https://scrimba.com/frontend-path-c0j/~01e?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba ist eine interaktive Lektion, die einige nützliche Übungen zu Rändern bietet.

### Ränder

Der Rahmen wird zwischen dem Rand und der Polsterung einer Box gezeichnet. Wenn Sie das Standard-Box-Modell verwenden, wird die Größe des Rahmens zur `width` und `height` der Inhaltsbox hinzugefügt. Wenn Sie das alternative Box-Modell verwenden, ist die Inhaltsbox umso kleiner, je größer der Rahmen ist, da der Rahmen einen Teil der verfügbaren `width` und `height` der Elementbox einnimmt.

Zum Styling von Rahmen gibt es eine Vielzahl von Eigenschaften — es gibt vier Rahmen, und jeder Rahmen hat einen Stil, eine Breite und eine Farbe, die wir möglicherweise manipulieren möchten.

Sie können die Breite, den Stil oder die Farbe aller vier Rahmen gleichzeitig mit der {{cssxref("border")}}-Eigenschaft festlegen.

Um die Eigenschaften jeder Seite einzeln festzulegen, verwenden Sie:

- {{cssxref("border-top")}}
- {{cssxref("border-right")}}
- {{cssxref("border-bottom")}}
- {{cssxref("border-left")}}

Um die Breite, den Stil oder die Farbe aller Seiten festzulegen, verwenden Sie:

- {{cssxref("border-width")}}
- {{cssxref("border-style")}}
- {{cssxref("border-color")}}

Um die Breite, den Stil oder die Farbe einer einzelnen Seite festzulegen, verwenden Sie eine der detaillierteren Longhand-Eigenschaften:

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

Im untenstehenden Beispiel haben wir verschiedene Kurz- und Langhandschriften verwendet, um Rahmen zu erstellen. Bearbeiten Sie die verschiedenen Eigenschaften, um zu überprüfen, ob Sie verstehen, wie sie funktionieren. Die MDN-Seiten für die Rahmen-Eigenschaften bieten Ihnen Informationen über die verschiedenen verfügbaren Rahmenstile.

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

### Polsterung

Die Polsterung sitzt zwischen dem Rahmen und dem Inhaltsbereich und wird verwendet, um den Inhalt vom Rahmen wegzudrücken. Im Gegensatz zu Rändern können Sie keine negative Polsterung haben. Jeder auf Ihr Element angewendete Hintergrund wird hinter der Polsterung angezeigt.

Die {{cssxref("padding")}}-Eigenschaft steuert die Polsterung auf allen Seiten eines Elements. Um jede Seite einzeln zu steuern, verwenden Sie diese Longhand-Eigenschaften:

- {{cssxref("padding-top")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}

#### Spielen mit Polsterung

Im Beispiel unten bearbeiten Sie die Werte für die Polsterung in der Klasse `.box` und sehen, wie sich dadurch die Position des Textes in Bezug auf die Box ändert. Sie können auch die Polsterung in der Klasse `.container` ändern, um Platz zwischen dem Container und der Box zu schaffen. Sie können die Polsterung jedes Elements ändern, um Platz zwischen seinem Rahmen und dem Inhalt des Elements zu schaffen.

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

All das oben Gesagte gilt voll und ganz für Block-Boxen. Einige der Eigenschaften können auch auf Inline-Boxen angewendet werden, wie diejenigen, die durch ein `<span>`-Element erstellt werden.

Im folgenden Beispiel haben wir ein `<span>` in einem Absatz. Wir haben eine `width`, `height`, `margin`, `border` und `padding` darauf angewendet. Sie können sehen, dass die Breite, Höhe und die oberen und unteren Ränder das `<span>` nicht beeinflussen. Die oberen und unteren Polsterungen und Rahmen verändern die Größe der Inline-Box, beeinflussen jedoch nicht die Position des umliegenden Inhalts. Stattdessen überlappen die oberen und unteren Polsterungen und Rahmen andere Wörter im Absatz. Nur die linken und rechten Polsterungen, Ränder und Rahmen beeinflussen die Position des Textes, der das `<span>` umgibt.

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

`display: inline-block` ist ein spezieller Wert von `display`, der einen Mittelweg zwischen `inline` und `block` bietet. Verwenden Sie es, wenn Sie nicht möchten, dass ein Element in eine neue Zeile umbricht, aber dennoch `width` und `height` respektieren möchten und Überlappungen vermeiden wollen, wie oben gesehen.

Ein Element mit `display: inline-block` übernimmt einen Teil der bereits bekannten Block-Sachen:

- Die `width`- und `height`-Eigenschaften werden beachtet.
- `padding`, `margin` und `border` führen dazu, dass andere Elemente von der Box weggeschoben werden.

Es bricht jedoch nicht in eine neue Zeile und wird nur größer als sein Inhalt, wenn Sie explizit `width` und `height`-Eigenschaften hinzufügen.

### Spielen mit inline-block

Im nächsten Beispiel haben wir `display: inline-block` zu unserem `<span>`-Element hinzugefügt. Versuchen Sie, dies in `display: block` zu ändern oder die Zeile vollständig zu entfernen, um den Unterschied in den Anzeige-Modellen zu sehen:

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

Wo dies nützlich sein kann, ist, wenn Sie einem Link eine größere Klickfläche geben möchten, indem Sie `padding` hinzufügen. `<a>` ist ein Inline-Element wie `<span>`; Sie können `display: inline-block` verwenden, um es zu ermöglichen, Polsterung darauf zu setzen, wodurch es für einen Benutzer einfacher wird, auf den Link zu klicken.

Dies sehen Sie ziemlich häufig in Navigationsleisten. Die untenstehende Navigation wird in einer Reihe mithilfe von Flexbox angezeigt und wir haben Polsterung zu dem `<a>`-Element hinzugefügt, da wir die `background-color` ändern möchten, wenn das `<a>` gehövt wird. Die Polsterung scheint den Rahmen auf dem `<ul>`-Element zu überlappen. Dies liegt daran, dass das `<a>` ein Inline-Element ist.

Fügen Sie `display: inline-block;` zur Regel mit dem Selektor `.links-list a` hinzu, und Sie werden sehen, wie es dieses Problem behebt, indem es bewirkt, dass die Polsterung von anderen Elementen respektiert wird:

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

Das ist das meiste, was Sie über das Box-Modell verstehen müssen. Möglicherweise möchten Sie in Zukunft zu dieser Lektion zurückkehren, wenn Sie sich jemals über die Größe von Boxen in Ihrem Layout wundern.

Im nächsten Artikel werden wir Ihnen einige Tests geben, die Sie verwenden können, um zu überprüfen, wie gut Sie die bereitgestellten Informationen zum CSS-Box-Modell verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors", "Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics")}}
