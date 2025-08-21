---
title: Das Box-Modell
short-title: Box model
slug: Learn_web_development/Core/Styling_basics/Box_model
l10n:
  sourceCommit: 78bdd004c24d256efc8372f18204ea58f83a1b5e
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors", "Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics")}}

Alles in CSS hat einen Kasten um sich herum, und das Verständnis dieser Kästen ist der Schlüssel, um in der Lage zu sein, komplexere Layouts mit CSS zu erstellen oder Elemente mit anderen Elementen auszurichten. In dieser Lektion werden wir einen Blick auf das CSS-_Box-Modell_ werfen. Sie werden ein Verständnis dafür bekommen, wie es funktioniert und welche Terminologie damit zusammenhängt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (Studieren Sie
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
          <li>Die verschiedenen Kästen, aus denen ein Element besteht, und wie man sie stylt — Inhalt, Rand, Rahmen, Innenabstand.</li>
          <li>Das alternative Box-Modell (zugänglich über <code>box-sizing: border-box</code>) und wie es sich vom regulären Box-Modell unterscheidet.</li>
          <li>Margen-Kollaps.</li>
          <li>Grundlegende Anzeige-Werte und wie sie das Verhalten von Kästen beeinflussen – <code>block</code>, <code>inline</code>, <code>inline-block</code>, <code>none</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Block- und Inline-Kästen

In CSS haben wir verschiedene Arten von Kästen, die im Allgemeinen in die Kategorien **Block-Kästen** und **Inline-Kästen** passen. Der Typ bezieht sich darauf, wie sich der Kasten in Bezug auf den Seitenfluss und in Relation zu anderen Kästen auf der Seite verhält. Kästen haben einen **inneren Anzeigetyp** und einen **äußeren Anzeigetyp**.

Im Allgemeinen können Sie verschiedene Werte für den Anzeigetyp mit der {{cssxref("display")}}-Eigenschaft festlegen.

Wenn ein Kasten einen Anzeigewert von `block` hat, dann:

- Der Kasten wird auf einer neuen Zeile beginnen.
- Die Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} werden respektiert.
- Polsterung, Rand und Rahmen sorgen dafür, dass andere Elemente vom Kasten weggeschoben werden.
- Wenn {{cssxref("width")}} nicht angegeben ist, wird der Kasten in der Inline-Richtung erweitert, um den in seinem Container verfügbaren Raum zu füllen. In den meisten Fällen wird der Kasten so breit wie sein Container und füllt 100 % des verfügbaren Raums aus.

Einige HTML-Elemente wie `<h1>` und `<p>` verwenden standardmäßig `block` als ihren äußeren Anzeigetyp.

Wenn ein Kasten einen Anzeigewert von `inline` hat, dann:

- Der Kasten wird nicht auf einer neuen Zeile beginnen.
- Die Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} werden nicht angewendet.
- Obere und untere Polsterung, Ränder und Rahmen werden angewendet, führen jedoch nicht dazu, dass sich andere Inline-Kästen vom Kasten entfernen.
- Linke und rechte Polsterung, Ränder und Rahmen werden angewendet und führen dazu, dass sich andere Inline-Kästen vom Kasten entfernen.

Einige HTML-Elemente wie `<a>`, `<span>`, `<em>` und `<strong>` verwenden standardmäßig `inline` als ihren äußeren Anzeigetyp.

Block- und Inline-Layout ist die Standardeinstellung für das Verhalten im Web. Standardmäßig und ohne weitere Anweisungen werden die Elemente in einem Kasten auch in einem **[normalen Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow)** angeordnet und verhalten sich wie Block- oder Inline-Kästen.

## Innere und äußere Anzeigetypen

`block`- und `inline`-Anzeigewerte werden als **äußere Anzeigen** bezeichnet — sie beeinflussen, wie der Kasten im Hinblick auf andere Kästen um ihn herum angeordnet wird. Kästen haben auch einen **inneren Anzeigetyp**, der diktieren, wie die Elemente innerhalb dieses Kastens angeordnet werden.

Sie können den inneren Anzeigetyp ändern, indem Sie einen inneren Anzeigewert festlegen, z. B. `display: flex;`. Das Element verwendet weiterhin den äußeren Anzeigetyp `block`, ändert jedoch den inneren Anzeigetyp auf `flex`. Alle direkten Kinder dieses Kastens werden zu Flex-Items und verhalten sich gemäß der [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)-Spezifikation.

Wenn Sie sich ausführlicher mit CSS-Layouts befassen, werden Sie auf [`flex`](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und verschiedene andere innere Werte stoßen, die Ihre Kästen haben können, z. B. [`grid`](/de/docs/Learn_web_development/Core/CSS_layout/Grids).

Machen Sie sich momentan nicht zu viele Gedanken über die innere und äußere Terminologie; dies geschieht intern, und wir erwähnen es hier, falls Sie es anderswo antreffen. Im Allgemeinen werden Sie nur mit einzelnen `display`-Werten umgehen und nicht viel darüber nachdenken müssen.

## Beispiele für verschiedene Anzeigetypen

Das Beispiel unten hat drei verschiedene HTML-Elemente, die alle einen äußeren Anzeigetyp von `block` haben.

- Ein Absatz mit einem in CSS hinzugefügten Rahmen. Der Browser rendert dies als Blockkasten. Der Absatz beginnt auf einer neuen Zeile und erstreckt sich horizontal, um die gesamte verfügbare Breite auszufüllen.

- Eine Liste, die mit `display: flex` angeordnet ist. Dies etabliert ein Flex-Layout für die Kinder des Containers, die Flex-Elemente sind, die standardmäßig in einer Reihe angeordnet sind. Die Liste selbst ist ein Blockkasten und — wie der Absatz — erweitert sich auf die volle Containerbreite und bricht auf eine neue Zeile.

- Ein Block-Absatz, in dem sich zwei `<span>`-Elemente befinden. Diese Elemente wären normalerweise `inline`, allerdings hat eines der Elemente eine Klasse `block` und wird auf `display: block` gesetzt. Dadurch beginnt dieses einzelne Wort auf einer neuen Zeile, die sich über die gesamte Breite des übergeordneten Elements erstreckt.

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

- Die `<span>`-Elemente im ersten Absatz sind standardmäßig inline und erzwingen daher keine Zeilenumbrüche.

- Das `<ul>`-Element, das auf `display: inline-flex` gesetzt ist, erstellt einen Inline-Kasten mit einigen Flex-Elementen.

- Die beiden Absätze sind beide auf `display: inline` gesetzt. Der Inline-Flex-Container und die Absätze laufen zusammen auf einer Zeile, anstatt auf neue Zeilen umzubrechen (wie sie es tun würden, wenn sie als Block-Elemente angezeigt würden).

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

Für den Moment sollten Sie sich daran erinnern: Die Änderung des Werts der `display`-Eigenschaft kann ändern, ob der äußere Anzeigetyp eines Kastens Block oder Inline ist. Dies ändert die Art und Weise, wie es neben anderen Elementen im Layout angezeigt wird.

## Was ist das CSS-Box-Modell?

Das CSS-Box-Modell als Ganzes bezieht sich auf Block-Kästen und definiert, wie die verschiedenen Teile eines Kastens — Rand, Rahmen, Innenabstand und Inhalt — zusammenarbeiten, um einen Kasten zu bilden, den Sie auf einer Seite sehen können. Inline-Kästen verwenden nur _einige_ der im Box-Modell definierten Verhaltensweisen.

Um es komplizierter zu machen, gibt es ein Standard- und ein alternatives Box-Modell. Standardmäßig verwenden Browser das Standard-Box-Modell.

### Teile eines Kastens

Ein Block-Kasten in CSS besteht aus:

- **Inhaltskasten**: Der Bereich, in dem Ihr Inhalt angezeigt wird; definieren Sie ihn mithilfe von Eigenschaften wie {{cssxref("width")}} und {{cssxref("height")}}.
- **Innenabstandskasten**: Der Innenabstand sitzt als Leerraum um den Inhalt herum; definieren Sie ihn mithilfe von {{cssxref("padding")}} und verwandten Eigenschaften.
- **Rahmenkasten**: Der Rahmenkasten umschließt den Inhalt und jeden Innenabstand; definieren Sie ihn mithilfe von {{cssxref("border")}} und verwandten Eigenschaften.
- **Randkasten**: Der Rand ist die äußerste Schicht, die den Inhalt, den Innenabstand und den Rahmen als Leerraum zwischen diesem Kasten und anderen Elementen umschließt; definieren Sie ihn mithilfe von {{cssxref("margin")}} und verwandten Eigenschaften.

Das untenstehende Diagramm zeigt diese Schichten:

![Diagramm des Box-Modells](box-model.png)

### Das Standard-CSS-Box-Modell

Im Standard-Box-Modell, wenn Sie `width`- und `height`-Eigenschaften auf einen Kasten setzen, definieren diese Werte die `width` und `height` des _Inhaltskastens_. Jeder Innenabstand und Rahmen wird dann zu diesen Dimensionen hinzugefügt, um die Gesamtgröße des Kastens zu ermitteln (siehe Bild unten).

Wenn wir annehmen, dass ein Kasten das folgende CSS hat:

```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

Der _tatsächliche_ Platz, den der Kasten einnimmt, wird `410px` breit (350 + 25 + 25 + 5 + 5) und `210px` hoch (150 + 25 + 25 + 5 + 5) sein.

![Das Box-Modell im Standard-CSS-Box-Modell](standard-box-model.png)

> [!NOTE]
> Der Rand wird nicht zur tatsächlichen Größe des Kastens gerechnet — sicherlich beeinflusst er den gesamten Raum, den der Kasten auf der Seite einnehmen wird, sondern nur den Raum außerhalb des Kastens. Die Fläche des Kastens endet am Rahmen — sie erstreckt sich nicht bis in den Rand hinein.

### Das alternative CSS-Box-Modell

Im alternativen Box-Modell ist jede Breite die Breite des auf der Seite sichtbaren Kastens. Die Breite des Inhaltsbereichs ist diese Breite minus der Breite für den Innenabstand und den Rahmen (siehe Bild unten). Dies ist praktisch, da es nicht erforderlich ist, den Rahmen und die Innenabstände zusammenzuzählen, um die reale Größe des Kastens zu ermitteln.

Um das alternative Modell für ein Element zu aktivieren, setzen Sie `box-sizing: border-box` darauf:

```css
.box {
  box-sizing: border-box;
}
```

Wenn wir davon ausgehen, dass der Kasten das gleiche CSS wie oben hat:

```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

Der _tatsächliche_ Platz, den der Kasten einnimmt, wird jetzt `350px` in der Inline-Richtung und `150px` in der Block-Richtung betragen.

![Das Box-Modell im alternativen CSS-Box-Modell](alternate-box-model.png)

Um das alternative Box-Modell für alle Ihre Elemente zu verwenden (was eine häufige Wahl unter Entwicklern ist), setzen Sie die Eigenschaft `box-sizing` auf das `<html>`-Element und setzen Sie alle anderen Elemente so, dass sie diesen Wert erben:

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

Um die zugrunde liegende Idee zu verstehen, können Sie den [CSS Tricks-Artikel über box-sizing](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/) lesen.

## Spielen mit Box-Modellen

Im folgenden Beispiel sehen Sie zwei Kästen. Beide haben eine Klasse von `.box`, die ihnen die gleichen `width`, `height`, `margin`, `border` und `padding` gibt. Der einzige Unterschied besteht darin, dass der zweite Kasten so eingestellt ist, dass er das alternative Box-Modell verwendet. Können Sie die Größe des zweiten Kastens ändern (indem Sie CSS zur `.alternate`-Klasse hinzufügen), damit er sich in Breite und Höhe dem ersten Kasten anpasst?

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
> Sie finden eine Lösung für diese Aufgabe [in unserem css-examples Repo](https://github.com/mdn/css-examples/blob/main/learn/solutions.md#the-box-model).

### Verwenden von Browser-DevTools zum Anzeigen des Box-Modells

Ihre [Browser-Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) können das Verständnis des Box-Modells erheblich erleichtern — sie können Ihnen die Größe des Elements plus seinen Rand, Innenabstand und Rahmen anzeigen. Das Inspizieren eines Elements auf diese Weise ist eine großartige Möglichkeit herauszufinden, ob Ihr Kasten wirklich die Größe hat, von der Sie denken, dass er sie hat!

![Das Inspizieren des Box-Modells eines Elements mit Firefox DevTools](box-model-devtools.png)

## Abstände, Innenabstände und Rahmen

Sie haben die Eigenschaften {{cssxref("margin")}}, {{cssxref("padding")}} und {{cssxref("border")}} bereits in den obigen Beispielen gesehen. Die in diesem Beispiel verwendeten Eigenschaften sind **Kurzhandschriften** und ermöglichen es uns, alle vier Seiten des Kastens auf einmal festzulegen. Diese Kurzhandschriften haben auch äquivalente Langhand-Eigenschaften, die es ermöglichen, die verschiedenen Seiten des Kastens einzeln zu steuern.

Lassen Sie uns diese Eigenschaften im Detail erkunden.

### Rand

Der Rand ist ein unsichtbarer Raum um Ihren Kasten herum. Er drängt andere Elemente von dem Kasten weg. Ränder können positive oder negative Werte haben. Das Festlegen eines negativen Randes auf einer Seite Ihres Kastens kann dazu führen, dass er sich mit anderen Dingen auf der Seite überlappt. Ob Sie das Standard- oder das alternative Box-Modell verwenden, der Rand wird immer hinzugefügt, nachdem die Größe des sichtbaren Kastens berechnet wurde.

Wir können alle Ränder eines Elements auf einmal mit der Eigenschaft {{cssxref("margin")}} steuern oder jede Seite einzeln mit den entsprechenden Langhand-Eigenschaften:

- {{cssxref("margin-top")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}

#### Spielen mit Rändern

Bearbeiten des Beispiels unten. Versuchen Sie, die Randwerte zu ändern, um zu sehen, wie der Kasten aufgrund des Randes verschoben wird, der Raum schafft oder entfernt (wenn es sich um einen negativen Rand handelt) zwischen diesem Element und dem umgebenden Element.

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

#### Margen-Kollaps

Abhängig davon, ob zwei Elemente, deren Ränder sich berühren, positive oder negative Ränder haben, werden die Ergebnisse unterschiedlich sein:

- Zwei positive Ränder werden zu einem Rand kombiniert. Die Größe wird gleich dem größten einzelnen Rand sein.
- Zwei negative Ränder kollabieren und der kleinste (am weitesten von Null entfernt) Wert wird verwendet.
- Wenn ein Rand negativ ist, wird sein Wert _von der Summe_ abgezogen.

Im folgenden Beispiel haben wir zwei Absätze. Der obere Absatz hat einen `margin-bottom` von 50 Pixeln, der andere einen `margin-top` von 30 Pixeln. Die Ränder sind so zusammengebrochen, dass der tatsächliche Abstand zwischen den Kästen 50 Pixel beträgt und nicht die Summe der beiden Ränder.

Sie können dies testen, indem Sie den `margin-top` des zweiten Absatzes auf `0` setzen. Der sichtbare Rand zwischen den beiden Absätzen ändert sich nicht — er behält die 50 Pixel bei, die im `margin-bottom` von Absatz eins festgelegt sind. Wenn Sie ihn auf `-10px` setzen, sehen Sie, dass der gesamte Rand `40px` wird — er zieht sie von den `50px` ab.

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

Eine Reihe von Regeln bestimmt, wann Ränder kollabieren und wann nicht. Für weitere Informationen schauen Sie sich die detaillierte Seite zum [Meistern von Margen-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) an. Das Wichtigste, was Sie im Hinterkopf behalten sollten, ist, dass Margen-Kollaps passiert, wenn Sie Raum mit Rändern schaffen und Sie nicht den erwarteten Raum erhalten.

### Rahmen

Der Rahmen wird zwischen dem Rand und dem Innenabstand eines Kastens gezogen. Wenn Sie das Standard-Box-Modell verwenden, wird die Größe des Rahmens zur `width` und `height` des Inhaltskastens hinzugefügt. Wenn Sie das alternative Box-Modell verwenden, wird durch einen größeren Rahmen der Inhaltskasten kleiner, da der Rahmen einen Teil der verfügbaren `width` und `height` des Elementkastens einnimmt.

Zum Stylen von Rahmen gibt es eine große Anzahl von Eigenschaften — es gibt vier Rahmen, und jeder Rahmen hat einen Stil, eine Breite und eine Farbe, die wir manipulieren möchten.

Sie können die Breite, den Stil oder die Farbe aller vier Rahmen gleichzeitig mit der {{cssxref("border")}}-Eigenschaft festlegen.

Um die Eigenschaften jeder Seite individuell festzulegen, verwenden Sie:

- {{cssxref("border-top")}}
- {{cssxref("border-right")}}
- {{cssxref("border-bottom")}}
- {{cssxref("border-left")}}

Um die Breite, den Stil oder die Farbe aller Seiten festzulegen, verwenden Sie:

- {{cssxref("border-width")}}
- {{cssxref("border-style")}}
- {{cssxref("border-color")}}

Um die Breite, den Stil oder die Farbe einer einzelnen Seite festzulegen, verwenden Sie eine der granulareren Langhand-Eigenschaften:

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

Im folgenden Beispiel haben wir verschiedene Kurz- und Langformen verwendet, um Rahmen zu erstellen. Bearbeiten Sie die verschiedenen Eigenschaften, um zu überprüfen, dass Sie verstehen, wie sie funktionieren. Die MDN-Seiten zu den Rahmen-Eigenschaften geben Ihnen Informationen über die verschiedenen verfügbaren Rahmenstile.

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

Der Innenabstand befindet sich zwischen dem Rahmen und dem Inhaltsbereich und wird verwendet, um den Inhalt vom Rahmen wegzuschieben. Anders als Ränder können Sie keinen negativen Innenabstand haben. Jeder angewendete Hintergrund auf Ihr Element wird hinter dem Innenabstand angezeigt.

Die {{cssxref("padding")}}-Eigenschaft steuert den Innenabstand auf allen Seiten eines Elements. Um jede Seite einzeln zu steuern, verwenden Sie diese Langhand-Eigenschaften:

- {{cssxref("padding-top")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}

#### Spielen mit Innenabständen

Im folgenden Beispiel bearbeiten Sie die Werte für den Innenabstand in der Klasse `.box` und sehen, wie sich dies darauf auswirkt, wo der Text in Bezug auf den Kasten beginnt. Sie können auch den Innenabstand in der Klasse `.container` ändern, um Raum zwischen dem Container und dem Kasten zu schaffen. Sie können den Innenabstand auf jedem Element ändern, um Raum zwischen seinem Rahmen und dem, was sich im Inneren des Elements befindet, zu schaffen.

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

## Das Box-Modell und Inline-Kästen

All das Obige gilt vollständig für Block-Kästen. Einige der Eigenschaften können auch auf Inline-Kästen angewendet werden, wie sie zum Beispiel durch ein `<span>`-Element erstellt werden.

Im Beispiel unten haben wir ein `<span>` innerhalb eines Absatzes. Wir haben eine `width`, eine `height`, einen Rand, einen Rahmen und einen Innenabstand darauf angewendet. Sie können sehen, dass die Breite und Höhe ignoriert werden. Der obere und untere Rand, Innenabstand und Rahmen werden respektiert, ändern jedoch nicht die Beziehung des übrigen Inhalts zu unserem Inline-Kasten. Der Innenabstand und der Rahmen überlappen andere Wörter im Absatz. Der linke und rechte Innenabstand, Rand und Rahmen bewegen den anderen Inhalt vom Kasten weg.

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

`display: inline-block` ist ein spezieller Wert von `display`, der einen Mittelweg zwischen `inline` und `block` bietet. Verwenden Sie ihn, wenn Sie nicht möchten, dass ein Element auf eine neue Zeile umbricht, aber trotzdem möchten, dass es `width` und `height` respektiert und das Überlappen, das oben gesehen wurde, vermeidet.

Ein Element mit `display: inline-block` führt einige der Block-Dinge aus, die wir bereits kennen:

- Die Eigenschaften `width` und `height` werden respektiert.
- `padding`, `margin` und `border` werden dazu führen, dass andere Elemente vom Kasten weggestoßen werden.

Es bricht jedoch nicht auf eine neue Zeile um, und wird nur größer als sein Inhalt, wenn Sie explizit `width` und `height`-Eigenschaften hinzufügen.

### Spielen mit inline-block

In diesem nächsten Beispiel haben wir `display: inline-block` auf unser `<span>`-Element angewendet. Versuchen Sie, dies in `display: block` zu ändern oder die Zeile vollständig zu entfernen, um den Unterschied in den Anzeigemodellen zu sehen:

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

Wo dies nützlich sein kann, ist, wenn Sie einem Link einen größeren Trefferbereich geben möchten, indem Sie `padding` hinzufügen. `<a>` ist ein Inline-Element wie `<span>`; Sie können `display: inline-block` verwenden, um die Einstellung von Polsterungen darauf zu ermöglichen, was es einem Benutzer erleichtert, den Link zu klicken.

Dies sieht man recht häufig in Navigationsleisten. Die folgende Navigation wird in einer Reihe mit Flexbox dargestellt und wir haben dem `<a>`-Element einen Innenabstand hinzugefügt, da wir in der Lage sein möchten, die `background-color` zu ändern, wenn das `<a>` umfahren wird. Der Innenabstand scheint den Rahmen auf dem `<ul>`-Element zu überlappen. Das liegt daran, dass das `<a>` ein Inline-Element ist.

Fügen Sie `display: inline-block;` zu der Regel mit dem `.links-list a`-Selektor hinzu, und Sie werden sehen, wie es dieses Problem behebt, indem der Innenabstand von anderen Elementen respektiert wird:

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

Das ist größtenteils, was Sie über das Box-Modell wissen müssen. Möglicherweise möchten Sie zukünftig zu dieser Lektion zurückkehren, wenn Sie jemals verwirrt darüber sind, wie groß Kästen in Ihrem Layout sind.

Im nächsten Artikel geben wir Ihnen einige Tests, mit denen Sie überprüfen können, wie gut Sie die von uns bereitgestellten Informationen zum CSS-Box-Modell verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors", "Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics")}}
