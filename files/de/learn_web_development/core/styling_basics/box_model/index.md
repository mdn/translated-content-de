---
title: Das Box-Modell
short-title: Box model
slug: Learn_web_development/Core/Styling_basics/Box_model
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics")}}

Alles in CSS hat ein Kästchen um sich herum, und das Verständnis dieser Kästchen ist der Schlüssel, um komplexere Layouts mit CSS erstellen oder Elemente miteinander ausrichten zu können. In dieser Lektion werden wir das CSS _Box-Modell_ untersuchen. Sie werden verstehen, wie es funktioniert und die Terminologie, die sich darauf bezieht.

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
          <li>Die verschiedenen Kästchen, die ein Element bilden und wie man sie stylt — Inhalt, Rand, Rahmen, Polsterung.</li>
          <li>Das alternative Box-Modell (über <code>box-sizing: border-box</code> zugänglich) und wie es sich vom regulären Box-Modell unterscheidet.</li>
          <li>Randkollaps.</li>
          <li>Grundlegende Anzeige-Werte und wie sie das Verhalten der Box beeinflussen — <code>block</code>, <code>inline</code>, <code>inline-block</code>, <code>none</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Block- und Inline-Kästchen

In CSS haben wir mehrere Arten von Kästchen, die im Allgemeinen in die Kategorien **Block-Kästchen** und **Inline-Kästchen** passen. Der Typ bezieht sich darauf, wie sich das Kästchen im Hinblick auf den Seitenfluss und in Bezug auf andere Kästchen auf der Seite verhält. Kästchen haben einen **inneren Anzeigetyp** und einen **äußeren Anzeigetyp**.

Im Allgemeinen können Sie verschiedene Werte für den Anzeigetyp mithilfe der {{cssxref("display")}}-Eigenschaft festlegen, die verschiedene Werte haben kann.

Wenn ein Kästchen einen Anzeigewert von `block` hat, dann:

- Bricht das Kästchen auf eine neue Zeile um.
- Die {{cssxref("width")}}- und {{cssxref("height")}}-Eigenschaften werden respektiert.
- Polsterung, Rand und Rahmen verursachen, dass andere Elemente vom Kästchen weggeschoben werden.
- Wenn {{cssxref("width")}} nicht angegeben ist, dehnt sich das Kästchen in Richtung der Inline-Achse aus, um den in seinem Container verfügbaren Platz auszufüllen. In den meisten Fällen wird das Kästchen so breit wie sein Container und füllt 100% des verfügbaren Platzes aus.

Einige HTML-Elemente, wie `<h1>` und `<p>`, verwenden standardmäßig `block` als ihren äußeren Anzeigetyp.

Wenn ein Kästchen einen Anzeigentyp von `inline` hat, dann:

- Bricht das Kästchen nicht auf eine neue Zeile um.
- Die {{cssxref("width")}}- und {{cssxref("height")}}-Eigenschaften werden nicht angewendet.
- Obere und untere Polsterungen, Ränder und Rahmen werden angewendet, schieben jedoch andere Inline-Kästchen nicht vom Kästchen weg.
- Linke und rechte Polsterungen, Ränder und Rahmen werden angewendet und bewirken, dass andere Inline-Kästchen vom Kästchen weggeschoben werden.

Einige HTML-Elemente, wie `<a>`, `<span>`, `<em>` und `<strong>` verwenden standardmäßig `inline` als ihren äußeren Anzeigetyp.

Block- und Inline-Layout ist die Standardverhaltensweise im Web. Standardmäßig und ohne weitere Anweisungen werden auch die Elemente innerhalb eines Kästchens in einem **[normalen Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow)** angeordnet und verhalten sich wie Block- oder Inline-Kästchen.

## Innere und äußere Anzeigetypen

`block` und `inline` Anzeigewerte werden als **äußere Anzeigetypen** bezeichnet — sie beeinflussen, wie das Kästchen im Verhältnis zu anderen Kästchen um es herum angeordnet wird. Kästchen haben auch einen **inneren Anzeigetyp**, der diktiert, wie Elemente innerhalb dieses Kästchens angeordnet werden.

Sie können den inneren Anzeigetyp ändern, indem Sie einen inneren Anzeigewert festlegen, zum Beispiel `display: flex;`. Das Element verwendet weiterhin den äußeren Anzeigetyp `block`, aber dies ändert den inneren Anzeigetyp zu `flex`. Alle direkten Kinder dieses Kästchens werden zu Flex-Elementen und verhalten sich gemäß der [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)-Spezifikation.

Wenn Sie detaillierter über CSS-Layout lernen, werden Sie [`flex`](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und verschiedene andere innere Werte kennenlernen, die Ihre Kästchen haben können, z. B. [`grid`](/de/docs/Learn_web_development/Core/CSS_layout/Grids).

Machen Sie sich keine allzu großen Sorgen um die innere und äußere Terminologie; dies ist, was intern passiert, und wir haben es hier erwähnt, falls Sie es anderswo antreffen. Im Allgemeinen werden Sie nur mit einzelnen `display`-Werten arbeiten und müssen nicht viel darüber nachdenken.

## Beispiele für verschiedene Anzeigetypen

Das Beispiel unten hat drei verschiedene HTML-Elemente, die alle einen äußeren Anzeigetyp von `block` haben.

- Ein Absatz mit einem in CSS hinzugefügten Rahmen. Der Browser rendert dies als Block-Kästchen. Der Absatz beginnt auf einer neuen Zeile und erstreckt sich über die gesamte verfügbare Breite.

- Eine Liste, die mit `display: flex` angeordnet wird. Dies etabliert ein Flex-Layout für die Kinder des Containers, die Flex-Elemente sind. Die Liste selbst ist ein Block-Kästchen und — wie der Absatz — erweitert sich auf die volle Containerbreite und bricht auf eine neue Zeile um.

- Ein Block-Ebene-Absatz, in dem zwei `<span>`-Elemente enthalten sind. Diese Elemente würden normalerweise `inline` sein, jedoch hat eins der Elemente eine Klasse von "block", die auf `display: block` gesetzt wird.

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

Im nächsten Beispiel können wir sehen, wie `inline`-Elemente sich verhalten.

- Die `<span>`-Elemente im ersten Absatz sind standardmäßig inline und erzwingen daher keine Zeilenumbrüche.

- Das `<ul>`-Element, das auf `display: inline-flex` gesetzt ist, erstellt ein Inline-Kästchen, das einige Flex-Elemente enthält.

- Die beiden Absätze sind beide auf `display: inline` gesetzt. Der Inline-Flex-Container und Absätze werden alle zusammen auf einer Linie angezeigt, anstatt auf neue Zeilen umzubrechen (wie sie es tun würden, wenn sie als Block-Ebene-Elemente angezeigt würden).

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

Das wichtigste, was Sie sich merken sollten, ist: Das Ändern des Wertes der `display`-Eigenschaft kann beeinflussen, ob der äußere Anzeigetyp eines Kästchens Block oder Inline ist. Dies ändert die Art und Weise, wie es neben anderen Elementen im Layout angezeigt wird.

## Was ist das CSS-Box-Modell?

Das CSS-Box-Modell als Ganzes gilt für Block-Kästchen und definiert, wie die verschiedenen Teile eines Kästchens — Rand, Rahmen, Polsterung und Inhalt — zusammenarbeiten, um ein Kästchen zu erstellen, das Sie auf einer Seite sehen können. Inline-Kästchen verwenden nur _einige_ der im Box-Modell definierten Verhaltensweisen.

Um die Komplexität zu erhöhen, gibt es ein Standard- und ein alternatives Box-Modell. Standardmäßig verwenden Browser das Standard-Box-Modell.

### Teile eines Kästchens

Ein Block-Kästchen in CSS setzt sich zusammen aus:

- **Inhaltskästchen**: Der Bereich, in dem Ihr Inhalt angezeigt wird; Größe anpassen mit Eigenschaften wie {{cssxref("width")}} und {{cssxref("height")}}.
- **Polsterungskästchen**: Die Polsterung sitzt als Leerraum um den Inhalt herum; Größe anpassen mit {{cssxref("padding")}} und zugehörigen Eigenschaften.
- **Rahmenkästchen**: Das Rahmenkästchen umschließt den Inhalt und alle Polsterungen; Größe anpassen mit {{cssxref("border")}} und zugehörigen Eigenschaften.
- **Randkästchen**: Der Rand ist die äußerste Schicht, die den Inhalt, die Polsterung und den Rahmen als Leerraum zwischen diesem Kästchen und anderen Elementen umhüllt; Größe anpassen mit {{cssxref("margin")}} und zugehörigen Eigenschaften.

Das untenstehende Diagramm zeigt diese Ebenen:

![Diagramm des Box-Modells](box-model.png)

### Das Standard-CSS-Box-Modell

Im Standard-Box-Modell, wenn Sie `width`- und `height`-Eigenschaftswerte auf ein Kästchen setzen, definieren diese Werte die `width` und `height` des _Inhaltskästchens_. Alle Polsterungen und Rahmen werden dann zu diesen Dimensionen hinzugefügt, um die Gesamtgröße des durch das Kästchen eingenommenen Raums zu erhalten (siehe das Bild unten).

Wenn wir annehmen, dass ein Kästchen den folgenden CSS-Code hat:

```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

Der _tatsächliche_ Platz, den das Kästchen einnimmt, wird 410px breit (350 + 25 + 25 + 5 + 5) und 210px hoch (150 + 25 + 25 + 5 + 5) sein.

![Zeigt die Größe des Kästchens bei Verwendung des Standard-Box-Modells.](standard-box-model.png)

> [!NOTE]
> Der Rand wird nicht zur tatsächlichen Größe des Kästchens gezählt — er beeinflusst zwar den Gesamtraum, den das Kästchen auf der Seite einnimmt, aber nur den Raum außerhalb des Kästchens. Der Bereich des Kästchens endet am Rahmen — er erstreckt sich nicht in den Rand hinein.

### Das alternative CSS-Box-Modell

Im alternativen Box-Modell ist jede Breite die Breite des sichtbaren Kästchens auf der Seite. Die Breite des Inhaltsbereichs ist diese Breite abzüglich der Breite der Polsterung und des Rahmens (siehe Bild unten). Es ist nicht notwendig, den Rahmen und die Polsterung zu addieren, um die tatsächliche Größe des Kästchens zu erhalten.

Um das alternative Modell für ein Element zu aktivieren, setzen Sie `box-sizing: border-box` darauf:

```css
.box {
  box-sizing: border-box;
}
```

Wenn wir annehmen, dass das Kästchen den gleichen CSS-Code wie oben hat:

```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

Nun wird der _tatsächliche_ Platz, den das Kästchen einnimmt, 350px in der Inline-Richtung und 150px in der Block-Richtung sein.

![Zeigt die Größe des Kästchens bei Verwendung des alternativen Box-Modells.](alternate-box-model.png)

Um das alternative Box-Modell für all Ihre Elemente zu verwenden (was eine häufige Wahl bei Entwicklern ist), setzen Sie die `box-sizing`-Eigenschaft auf das `<html>`-Element und setzen alle anderen Elemente so, dass sie diesen Wert erben:

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

Um das zugrunde liegende Konzept zu verstehen, können Sie den [CSS-Tricks-Artikel über box-sizing](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/) lesen.

## Experimentieren mit Box-Modellen

Im Beispiel unten sehen Sie zwei Kästchen. Beide haben eine Klasse von `.box`, die ihnen die gleiche `width`, `height`, `margin`, `border` und `padding` gibt. Der einzige Unterschied ist, dass das zweite Kästchen so eingestellt ist, dass es das alternative Box-Modell verwendet.
Können Sie die Größe des zweiten Kästchens ändern (indem Sie CSS zur Klasse `.alternate` hinzufügen), um es in Breite und Höhe an das erste Kästchen anzupassen?

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
> Eine Lösung für diese Aufgabe finden Sie [in unserem css-examples-Repository](https://github.com/mdn/css-examples/blob/main/learn/solutions.md#the-box-model).

### Verwenden Sie DevTools des Browsers, um das Box-Modell anzuzeigen

Ihre [Entwickler-Tools des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) können das Verständnis des Box-Modells erheblich erleichtern — sie können Ihnen die Größe des Elements sowie seinen Rand, seine Polsterung und seinen Rahmen anzeigen. Das Inspizieren eines Elements auf diese Weise ist eine großartige Möglichkeit festzustellen, ob Ihr Kästchen wirklich die Größe hat, von der Sie denken, dass es sie hat!

![Inspektion des Box-Modells eines Elements mit den Firefox DevTools](box-model-devtools.png)

## Ränder, Polsterungen und Rahmen

Sie haben bereits die {{cssxref("margin")}}, {{cssxref("padding")}} und {{cssxref("border")}}-Eigenschaften in dem obigen Beispiel im Einsatz gesehen. Die in diesem Beispiel verwendeten Eigenschaften sind **Kurzfassungen** und erlauben es uns, alle vier Seiten des Kästchens auf einmal einzustellen. Diese Kurzfassungen haben auch entsprechende Langhand-Eigenschaften, die es ermöglichen, die verschiedenen Seiten des Kästchens individuell zu steuern.

Lassen Sie uns diese Eigenschaften im Detail erkunden.

### Rand

Der Rand ist ein unsichtbarer Raum um Ihr Kästchen. Er drängt andere Elemente vom Kästchen weg. Ränder können positive oder negative Werte haben. Das Setzen eines negativen Rands an einer Seite Ihres Kästchens kann dazu führen, dass es sich mit anderen Dingen auf der Seite überlappt. Unabhängig davon, ob Sie das Standard- oder das alternative Box-Modell verwenden, wird der Rand immer nach der Berechnung der Größe des sichtbaren Kästchens hinzugefügt.

Wir können alle Ränder eines Elements auf einmal mit der {{cssxref("margin")}}-Eigenschaft steuern oder jede Seite individuell mit den entsprechenden Langhand-Eigenschaften:

- {{cssxref("margin-top")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}

Im Beispiel unten, versuchen Sie, die Randwerte zu ändern, um zu sehen, wie das Kästchen durch den Rand herumgeschoben wird, indem es Raum schafft oder entfernt (wenn es ein negativer Rand ist) zwischen diesem Element und dem enthaltenen Element.

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

#### Randkollaps

Je nachdem, ob zwei Elemente, deren Ränder sich berühren, positive oder negative Ränder haben, werden die Ergebnisse unterschiedlich sein:

- Zwei positive Ränder werden zu einem Rand kombiniert. Seine Größe wird gleich dem größten Einzelrand sein.
- Zwei negative Ränder werden kollabieren und der kleinste (am weitesten von Null entfernte) Wert wird verwendet.
- Wenn ein Rand negativ ist, wird sein Wert _vom Gesamtwert abgezogen_.

Im Beispiel unten haben wir zwei Absätze. Der obere Absatz hat einen `margin-bottom` von 50 Pixel, der andere hat einen `margin-top` von 30 Pixel. Die Ränder sind zusammengefallen, sodass der tatsächliche Abstand zwischen den Kästchen 50 Pixel und nicht die Summe der beiden Ränder beträgt.

Sie können dies testen, indem Sie den `margin-top` des zweiten Absatzes auf `0` setzen. Der sichtbare Abstand zwischen den beiden Absätzen ändert sich nicht — er behält die 50 Pixel, die in dem `margin-bottom` des ersten Absatzes festgelegt sind. Wenn Sie ihn auf `-10px` setzen, werden Sie sehen, dass der Gesamtabstand `40px` wird — er wird von den `50px` abgezogen.

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

Eine Reihe von Regeln bestimmen, wann Ränder kollabieren und wann nicht. Für weitere Informationen siehe die detaillierte Seite über [das Beherrschen des Randkollapses](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing). Das Wichtigste, was Sie sich merken sollten, ist, dass der Randkollaps ein Phänomen ist, das auftritt, wenn Sie mit Rändern Raum schaffen und nicht den erwarteten Raum erhalten.

### Rahmen

Der Rahmen wird zwischen dem Rand und der Polsterung eines Kästchens gezeichnet. Wenn Sie das Standard-Box-Modell verwenden, wird die Größe des Rahmens zur `width` und `height` des Inhaltskästchens hinzugerechnet. Wenn Sie das alternative Box-Modell verwenden, dann gilt: Je größer der Rahmen ist, desto kleiner ist das Inhaltskästchen, da der Rahmen einen Teil der verfügbaren `width` und `height` des Elementboxen einnimmt.

Für das Styling von Rahmen gibt es eine große Anzahl an Eigenschaften — es gibt vier Rahmen, und jeder Rahmen hat einen Stil, eine Breite und eine Farbe, die wir möglicherweise manipulieren möchten.

Sie können die Breite, den Stil oder die Farbe aller vier Rahmen auf einmal mit der {{cssxref("border")}}-Eigenschaft festlegen.

Um die Eigenschaften jeder Seite einzeln festzulegen, verwenden Sie:

- {{cssxref("border-top")}}
- {{cssxref("border-right")}}
- {{cssxref("border-bottom")}}
- {{cssxref("border-left")}}

Um die Breite, den Stil oder die Farbe aller Seiten festzulegen, verwenden Sie:

- {{cssxref("border-width")}}
- {{cssxref("border-style")}}
- {{cssxref("border-color")}}

Um die Breite, den Stil oder die Farbe einer einzelnen Seite festzulegen, verwenden Sie eine der detaillierteren Langhand-Eigenschaften:

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

Im Beispiel unten haben wir verschiedene Kurz- und Langfassungen verwendet, um Rahmen zu erstellen. Spielen Sie mit den verschiedenen Eigenschaften herum, um sicherzustellen, dass Sie verstehen, wie sie funktionieren. Die MDN-Seiten für die Rahmeneigenschaften geben Ihnen Informationen über die verschiedenen verfügbaren Rahmenstile.

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

Die Polsterung befindet sich zwischen dem Rahmen und dem Inhaltsbereich und wird verwendet, um den Inhalt vom Rahmen wegzudrücken. Im Gegensatz zu Rändern können Sie keine negative Polsterung haben. Jeder Hintergrund, der auf Ihr Element angewendet wird, wird hinter der Polsterung angezeigt.

Die {{cssxref("padding")}}-Eigenschaft steuert die Polsterung aller Seiten eines Elements. Um jede Seite einzeln zu steuern, verwenden Sie diese Langhand-Eigenschaften:

- {{cssxref("padding-top")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}

Im Beispiel unten können Sie die Werte für die Polsterung auf der Klasse `.box` ändern, um zu sehen, dass dies ändert, wo der Text im Verhältnis zum Kästchen beginnt. Sie können auch die Polsterung auf der Klasse `.container` ändern, um Raum zwischen dem Container und dem Kästchen zu schaffen. Sie können die Polsterung auf jedem Element ändern, um Raum zwischen seinem Rahmen und allem, was im Inneren des Elements ist, zu schaffen.

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

## Das Box-Modell und Inline-Kästchen

All das oben genannte trifft vollständig auf Block-Kästchen zu. Einige der Eigenschaften können auch auf Inline-Kästchen angewendet werden, wie z. B. diejenigen, die durch ein `<span>`-Element erstellt werden.

Im Beispiel unten haben wir ein `<span>` in einem Absatz. Wir haben ihm eine `width`, `height`, `margin`, `border` und `padding` zugewiesen. Sie können sehen, dass die Breite und Höhe ignoriert werden. Der obere und untere Rand, die Polsterungen und die Rahmen werden respektiert, ändern jedoch nicht die Beziehung anderer Inhalte zu unserem Inline-Kästchen. Die Polsterung und der Rahmen überlappen andere Wörter im Absatz. Die linke und rechte Polsterung, Ränder und Rahmen bewegen anderen Inhalt vom Kästchen weg.

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

`display: inline-block` ist ein besonderer Wert von `display`, der einen Mittelweg zwischen `inline` und `block` bietet. Verwenden Sie ihn, wenn Sie nicht möchten, dass ein Element auf eine neue Zeile umbricht, es jedoch `width` und `height` respektieren und das Überlappen wie oben vermeiden soll.

Ein Element mit `display: inline-block` erledigt einige der Block-Dinge, die wir schon über Blöcke wissen:

- Die `width`- und `height`-Eigenschaften werden respektiert.
- `padding`, `margin` und `border` bewirken, dass andere Elemente vom Kästchen weggeschoben werden.

Es bricht jedoch nicht auf eine neue Zeile um und wird nur größer als sein Inhalt, wenn Sie explizit `width`- und `height`-Eigenschaften hinzufügen.

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

Hierbei ist es nützlich, wenn Sie einem Link eine größere Trefferfläche geben möchten, indem Sie `padding` hinzufügen. `<a>` ist ein Inline-Element wie `<span>`; Sie können `display: inline-block` verwenden, um `padding` darauf zu setzen, sodass es für einen Benutzer einfacher ist, auf den Link zu klicken.

Sie sehen dies ziemlich häufig in Navigationsleisten. Die untenstehende Navigation wird in einer Zeile mit Flexbox angezeigt und wir haben `padding` auf das `<a>`-Element hinzugefügt, da wir die `background-color` ändern möchten, wenn mit der Maus über das `<a>`-Element gefahren wird. Die Polsterung scheint sich mit dem Rahmen auf dem `<ul>`-Element zu überlappen. Dies liegt daran, dass das `<a>` ein Inline-Element ist.

Fügen Sie die Regel `display: inline-block;` mit dem Selektor `.links-list a` hinzu, und Sie werden sehen, wie dies dieses Problem behebt, indem es bewirkt, dass die Polsterung von anderen Elementen respektiert wird:

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

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Wissen: Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model).

## Zusammenfassung

Das ist das Meiste, was Sie über das Box-Modell wissen müssen. Sie könnten in Zukunft zu dieser Lektion zurückkehren wollen, wenn Sie jemals verwirrt darüber sind, wie groß Kästchen in Ihrem Layout sind.

Im nächsten Artikel werden wir uns ansehen, wie CSS Konflikte behandelt — wenn mehrere Regeln dasselbe Element auswählen, welche Stile werden angewendet?

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics")}}
