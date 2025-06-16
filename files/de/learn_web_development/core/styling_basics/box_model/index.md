---
title: Das Box-Modell
short-title: Box model
slug: Learn_web_development/Core/Styling_basics/Box_model
l10n:
  sourceCommit: c9f602a26092661130a031b7148d696a3ac9802e
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics")}}

Alles in CSS hat eine Box darum, und das Verständnis dieser Boxen ist entscheidend, um komplexere Layouts mit CSS erstellen oder Elemente mit anderen Elementen ausrichten zu können. In dieser Lektion werden wir uns das CSS _Box-Modell_ ansehen. Sie erhalten ein Verständnis dafür, wie es funktioniert und die damit zusammenhängende Terminologie.

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
          <li>Die verschiedenen Boxen, die ein Element ausmachen, und wie man sie stylt – Inhalt, Außenabstand, Rand, Innenabstand.</li>
          <li>Das alternative Box-Modell (zugänglich über <code>box-sizing: border-box</code>) und wie es sich vom regulären Box-Modell unterscheidet.</li>
          <li>Außenabstands-Kollision.</li>
          <li>Grundlegende Anzeige-Werte und wie sie das Verhalten der Box beeinflussen – <code>block</code>, <code>inline</code>, <code>inline-block</code>, <code>none</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Block- und Inline-Boxen

In CSS haben wir mehrere Arten von Boxen, die im Allgemeinen in die Kategorien **Block-Boxen** und **Inline-Boxen** passen. Der Typ bezieht sich darauf, wie die Box im Hinblick auf das Seitenflussverhalten und in Beziehung zu anderen Boxen auf der Seite agiert. Boxen haben einen **inneren Anzeigetyp** und einen **äußeren Anzeigetyp**.

Im Allgemeinen können Sie verschiedene Werte für den Anzeigetyp mit der {{cssxref("display")}}-Eigenschaft festlegen.

Wenn eine Box einen Anzeigewert von `block` hat, dann:

- Die Box bricht in eine neue Zeile um.
- Die Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} werden berücksichtigt.
- Innenabstand, Außenabstand und Rand werden andere Elemente von der Box wegdrücken.
- Wenn {{cssxref("width")}} nicht angegeben ist, wird die Box sich in Inline-Richtung ausdehnen, um den verfügbaren Platz in ihrem Container zu füllen. In den meisten Fällen wird die Box so breit wie ihr Container und füllt den gesamten verfügbaren Platz aus.

Einige HTML-Elemente, wie z.B. `<h1>` und `<p>`, verwenden standardmäßig `block` als äußeren Anzeigetyp.

Wenn eine Box einen Anzeigewert von `inline` hat, dann:

- Die Box bricht nicht in eine neue Zeile um.
- Die Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} gelten nicht.
- Innenabstand, Außenabstände oben und unten sowie Ränder gelten, drücken aber andere Inline-Boxen nicht von der Box weg.
- Linker und rechter Innenabstand, Außenabstände und Ränder gelten und veranlassen andere Inline-Boxen, sich von der Box wegzubewegen.

Einige HTML-Elemente, wie z.B. `<a>`, `<span>`, `<em>` und `<strong>`, verwenden standardmäßig `inline` als ihren äußeren Anzeigetyp.

Der Block- und Inline-Layout ist die Standardweise, wie sich Dinge im Web verhalten. Standardmäßig und ohne andere Anweisung werden die Elemente innerhalb einer Box ebenfalls im **[normalen Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow)** angeordnet und verhalten sich wie Block- oder Inline-Boxen.

## Innere und äußere Anzeigetypen

`block` und `inline` Anzeigewerte sind sogenannte **äußere Anzeigetypen** – sie beeinflussen, wie die Box im Verhältnis zu den umliegenden Boxen angeordnet wird. Boxen haben auch einen **inneren Anzeigetyp**, der bestimmt, wie Elemente innerhalb dieser Box angeordnet sind.

Sie können den inneren Anzeigetyp ändern, indem Sie einen inneren Anzeigewert festlegen, zum Beispiel `display: flex;`. Das Element verwendet immer noch den äußeren Anzeigetyp `block`, ändert jedoch den inneren Anzeigetyp in `flex`. Alle direkten Kinder dieser Box werden zu Flexbox-Elementen und verhalten sich gemäß der [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)-Spezifikation.

Wenn Sie sich detaillierter mit CSS-Layouts befassen, werden Ihnen [`flex`](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und verschiedene andere innere Werte begegnen, die Ihre Boxen haben können, zum Beispiel [`grid`](/de/docs/Learn_web_development/Core/CSS_layout/Grids).

Machen Sie sich jetzt nicht zu viele Sorgen über die Begriffe inner und outer; das ist, was intern passiert und wir haben es hier erwähnt, falls Sie darauf an anderer Stelle stoßen. Im Allgemeinen werden Sie nur mit einzelnen `display`-Werten umgehen, und müssen sich nicht viel Gedanken darüber machen.

## Beispiele für verschiedene Anzeigetypen

Das folgende Beispiel enthält drei unterschiedliche HTML-Elemente, die alle einen äußeren Anzeigetyp von `block` haben.

- Ein Absatz mit einem Rand, der in CSS hinzugefügt wurde. Der Browser rendert dies als Block-Box. Der Absatz beginnt in einer neuen Zeile und erstreckt sich horizontal, um die gesamte verfügbare Breite auszufüllen.

- Eine Liste, die mit `display: flex` angeordnet ist. Dies richtet die Flex-Layout für die Kinder des Containers ein, welche zu Flex-Elementen werden, die standardmäßig in einer Reihe angeordnet sind. Die Liste selbst ist eine Block-Box und – ebenso wie der Absatz – dehnt sie sich auf die volle Containerbreite aus und bricht auf eine neue Zeile um.

- Ein blockierter Absatz, in dem sich zwei `<span>`-Elemente befinden. Diese Elemente wären normalerweise `inline`, jedoch hat eines der Elemente eine Klasse von `block` und wird auf `display: block` gesetzt. Infolgedessen beginnt dieses einzelne Wort auf einer neuen Zeile, die sich über die gesamte Breite ihres Eltern-Elements erstreckt.

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

- Das `<ul>`-Element, das auf `display: inline-flex` gesetzt ist, erstellt eine Inline-Box, die einige Flex-Elemente enthält.

- Die beiden Absätze sind beide auf `display: inline` gesetzt. Der Inline-Flex-Container und die Absätze laufen alle zusammen in einer Zeile, anstatt auf neue Zeilen umzubrechen (wie sie es tun würden, wenn sie als Block-Elemente angezeigt würden).

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

Die wichtigste Erkenntnis für jetzt ist: Die Änderung des Wertes der `display`-Eigenschaft kann bewirken, dass der äußere Anzeigetyp einer Box sich von Block auf Inline ändert oder umgekehrt. Dies ändert, wie es zusammen mit anderen Elementen im Layout angezeigt wird.

## Was ist das CSS-Box-Modell?

Das CSS-Box-Modell als Ganzes gilt für Block-Boxen und definiert, wie die verschiedenen Teile einer Box – Außenabstand, Rand, Innenabstand und Inhalt – zusammenarbeiten, um eine Box zu erstellen, die Sie auf einer Seite sehen können. Inline-Boxen verwenden nur _einige_ der im Box-Modell definierten Verhaltensweisen.

Um die Sache zu verkomplizieren, gibt es ein Standard- und ein alternatives Box-Modell. Standardmäßig verwenden die Browser das Standard-Box-Modell.

### Teile einer Box

Ein Block trifft im CSS auf die:

- **Inhaltsbox**: Der Bereich, in dem Ihr Inhalt angezeigt wird; dimensionieren Sie ihn mit Eigenschaften wie {{cssxref("width")}} und {{cssxref("height")}}.
- **Polsterungsbox**: Die Polsterung sitzt rund um den Inhalt als Weißraum; dimensionieren Sie sie mit {{cssxref("padding")}} und verwandten Eigenschaften.
- **Randbox**: Die Randbox umschließt den Inhalt und jede Polsterung; dimensionieren Sie sie mit {{cssxref("border")}} und verwandten Eigenschaften.
- **Außenabstandsbox**: Der Außenabstand ist die äußerste Schicht und umgibt den Inhalt, die Polsterung und den Rand als Leerraum zwischen dieser Box und anderen Elementen; dimensionieren Sie ihn mit {{cssxref("margin")}} und verwandten Eigenschaften.

Das untenstehende Diagramm zeigt diese Schichten:

![Diagramm des Box-Modells](box-model.png)

### Das Standard-CSS-Box-Modell

Im Standard-Box-Modell definieren die festgelegten `width`- und `height`-Eigenschaftswerte einer Box die `width` und `height` der _Inhaltsbox_. Jede Polsterung und Rand werden dann zu diesen Abmessungen hinzugefügt, um die gesamte von der Box eingenommene Größe zu erhalten (siehe das Bild unten).

Wenn wir davon ausgehen, dass eine Box folgendes CSS hat:

```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

Der _tatsächliche_ Raum, der von der Box eingenommen wird, wird `410px` breit (350 + 25 + 25 + 5 + 5) und `210px` hoch (150 + 25 + 25 + 5 + 5) sein.

![Anzeige der Größe der Box, wenn das standardmäßige Box-Modell verwendet wird.](standard-box-model.png)

> [!NOTE]
> Die Außmaße werden nicht auf die tatsächliche Größe der Box angerechnet – sie beeinflussen zwar den gesamten Raum, den die Box auf der Seite einnimmt, jedoch nur den Raum außerhalb der Box. Die Fläche der Box endet am Rand – sie erstreckt sich nicht bis in den Außenabstand hinein.

### Das alternative CSS-Box-Modell

Im alternativen Box-Modell ist jede Breite die Breite der sichtbaren Box auf der Seite. Die Breite des Inhaltsbereichs ist dieses Breite minus der Breite für die Polsterung und den Rand (siehe Bild unten). Dies ist praktisch, da es nicht erforderlich ist, den Rand und die Polsterung zusammenzuzählen, um die tatsächliche Größe der Box zu erhalten.

Um das alternative Modell für ein Element zu aktivieren, setzen Sie `box-sizing: border-box`:

```css
.box {
  box-sizing: border-box;
}
```

Wenn wir davon ausgehen, dass die Box dasselbe CSS wie oben hat:

```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

Der _tatsächliche_ Raum, den die Box jetzt einnimmt, wird `350px` in der Inline-Richtung und `150px` in der Blockrichtung betragen.

![Anzeige der Größe der Box, wenn das alternative Box-Modell verwendet wird.](alternate-box-model.png)

Um das alternative Box-Modell für alle Ihre Elemente zu nutzen (was bei Entwicklern eine häufige Wahl ist), setzen Sie die `box-sizing`-Eigenschaft auf das `<html>`-Element und setzen alle anderen Elemente so, dass sie diesen Wert erben:

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

Um die zugrunde liegende Idee zu verstehen, können Sie den [Artikel auf CSS Tricks über box-sizing](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/) lesen.

## Spielen mit Box-Modellen

Im folgenden Beispiel sehen Sie zwei Boxen. Beide haben eine Klasse von `.box`, die ihnen dieselbe `width`, `height`, `margin`, `border`, und `padding` gibt. Der einzige Unterschied ist, dass die zweite Box so eingestellt wurde, dass sie das alternative Box-Modell verwendet.
Können Sie die Größe der zweiten Box ändern (indem Sie CSS zur Klasse `.alternate` hinzufügen), um sie in Breite und Höhe an die erste Box anzupassen?

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

Ihre [Browser-Entwicklungstools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) können das Verständnis des Box-Modells erheblich erleichtern – sie können Ihnen die Größe des Elements, zusätzlich zu seinem Außenabstand, Polsterung und Rand anzeigen. Die Inspektion eines Elements auf diese Weise ist eine großartige Möglichkeit herauszufinden, ob Ihre Box wirklich die Größe hat, die Sie glauben, dass sie es hat!

![Inspektion des Box-Modells eines Elements mit Firefox DevTools](box-model-devtools.png)

## Außenabstände, Innenabstände und Ränder

Sie haben bereits die Eigenschaften {{cssxref("margin")}}, {{cssxref("padding")}}, und {{cssxref("border")}} im obigen Beispiel gesehen. Die in diesem Beispiel verwendeten Eigenschaften sind **Kurzschriften** und ermöglichen es uns, alle vier Seiten der Box auf einmal festzulegen. Diese Kurzschriften haben auch entsprechende Langschriften, die eine Kontrolle über die unterschiedlichen Seiten der Box einzeln ermöglichen.

Lassen Sie uns diese Eigenschaften im Detail erkunden.

### Außenabstand

Der Außenabstand ist ein unsichtbarer Raum um Ihre Box. Es schiebt andere Elemente von der Box weg. Außenabstände können positive oder negative Werte haben. Wenn Sie auf einer Seite Ihrer Box einen negativen Außenabstand setzen, kann es mit anderen Dingen auf der Seite überlappen. Egal, ob Sie das Standard- oder das alternative Box-Modell verwenden, der Außenabstand wird immer nach der Größe der sichtbaren Box hinzugefügt.

Wir können alle Außenabstände eines Elements auf einmal mit der {{cssxref("margin")}}-Eigenschaft steuern oder jede Seite einzeln mit den entsprechenden Langschrift-Eigenschaften:

- {{cssxref("margin-top")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}

#### Spielen mit Außenabständen

Bearbeiten Sie das Beispiel unten. Versuchen Sie, die Außenabstandswerte zu ändern, um zu sehen, wie die Box aufgrund des Außenabstands nach Raum sucht oder Raum freigibt (wenn es ein negativer Außenabstand ist) zwischen diesem Element und dem umgebenden Element.

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

#### Außenabstands-Kollision

Abhängig davon, ob zwei Elemente, deren Außenabstände sich berühren, positive oder negative Außenabstände aufweisen, werden die Ergebnisse unterschiedlich sein:

- Zwei positive Außenabstände werden kombiniert und werden zu einem Außenabstand. Seine Größe wird gleich dem größten einzelnen Außenabstand sein.
- Zwei negative Außenabstände werden kollabieren und der kleinste (am weitesten von Null entfernte) Wert wird verwendet.
- Wenn ein Außenabstand negativ ist, wird sein Wert _vom_ Gesamtwert subtrahiert.

Im folgenden Beispiel haben wir zwei Absätze. Der obere Absatz hat einen `margin-bottom` von 50 Pixel, der andere hat einen `margin-top` von 30 Pixel. Die Außenabstände sind zusammengefallen, so dass der tatsächliche Abstand zwischen den Boxen 50 Pixel beträgt und nicht die Summe der beiden Außenabstände.

Sie können dies testen, indem Sie den `margin-top` von Absatz zwei auf `0` setzen. Der sichtbare Abstand zwischen den beiden Absätzen ändert sich nicht – er behält die 50 Pixel bei, die im `margin-bottom` des ersten Absatzes festgelegt sind. Wenn Sie ihn auf `-10px` setzen, sehen Sie, dass der Gesamtabstand auf `40px` reduziert wird – es subtrahiert diesen Wert von den `50px`.

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

Eine Anzahl von Regeln diktiert, wann Außenabstände kollabieren und wann nicht. Weitere Informationen finden Sie auf der ausführlichen Seite über [Meisterung der Außenabstandskollision](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing). Das Wichtigste zu beachten ist, dass Außenabstandskollisionen eine Sache sind, die passieren, wenn Sie Raum mit Außenabständen schaffen und nicht den erwarteten Raum erhalten.

### Ränder

Der Rand wird zwischen dem Außenabstand und der Polsterung einer Box gezogen. Wenn Sie das Standard-Box-Modell verwenden, wird die Größe des Randes zur `width` und `height` der Inhaltsbox hinzugefügt. Wenn Sie das alternative Box-Modell verwenden, dann wird die Inhaltsbox umso kleiner, je größer der Rand ist, da der Rand einen Teil dieser verfügbaren `width` und `height` des Elementkastens einnimmt.

Beim Styling von Rändern gibt es eine große Anzahl an Eigenschaften – es gibt vier Ränder, und jeder Rand hat einen Stil, eine Breite und eine Farbe, die wir möglicherweise manipulieren möchten.

Sie können die Breite, den Stil oder die Farbe aller vier Ränder gleichzeitig mit der {{cssxref("border")}}-Eigenschaft festlegen.

Um die Eigenschaften jeder Seite einzeln festzulegen, verwenden Sie:

- {{cssxref("border-top")}}
- {{cssxref("border-right")}}
- {{cssxref("border-bottom")}}
- {{cssxref("border-left")}}

Um die Breite, den Stil oder die Farbe aller Seiten festzulegen, verwenden Sie:

- {{cssxref("border-width")}}
- {{cssxref("border-style")}}
- {{cssxref("border-color")}}

Um die Breite, den Stil oder die Farbe einer einzelnen Seite festzulegen, verwenden Sie eine der granulareren Langschrift-Eigenschaften:

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

#### Spielen mit Rändern

Im Beispiel unten haben wir verschiedene Kurzschriften und Langschriften verwendet, um Ränder zu erstellen. Bearbeiten Sie die verschiedenen Eigenschaften, um zu überprüfen, ob Sie verstehen, wie sie funktionieren. Die MDN-Seiten zu den Rand-Eigenschaften bieten Informationen zu den verschiedenen verfügbaren Rand-Stilen.

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

Der Innenabstand sitzt zwischen dem Rand und dem Inhaltsbereich und wird verwendet, um den Inhalt vom Rand weg zu schieben. Im Gegensatz zu Außenabständen können Sie keinen negativen Innenabstand haben. Jeder auf Ihr Element angewendete Hintergrund wird hinter dem Innenabstand angezeigt.

Die {{cssxref("padding")}}-Eigenschaft steuert den Innenabstand auf allen Seiten eines Elements. Um jede Seite einzeln zu steuern, verwenden Sie diese Langschrift-Eigenschaften:

- {{cssxref("padding-top")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}

#### Spielen mit Innenabständen

Im Beispiel unten bearbeiten Sie die Innenabstandswerte für die Klasse `.box` und sehen, wie sich dadurch ändert, wo der Text in Bezug auf die Box beginnt. Sie können auch den Innenabstand bei der Klasse `.container` ändern, um Raum zwischen dem Container und der Box zu schaffen. Sie können den Innenabstand bei jedem Element ändern, um Raum zwischen seinem Rand und allem, was sich in diesem Element befindet, zu schaffen.

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

Alles oben Genannte gilt voll und ganz für Block-Boxen. Einige der Eigenschaften können sich auch auf Inline-Boxen beziehen, wie sie durch ein `<span>` Element erstellt werden.

Im folgenden Beispiel haben wir ein `<span>` innerhalb eines Absatzes. Wir haben ihm eine `width`, `height`, einen `margin`, einen `border` und einen `padding` zugewiesen. Sie können sehen, dass die Breite und Höhe ignoriert werden. Der obere und untere Außenabstand, Innenabstand und Rand werden respektiert, aber ändern nicht die Beziehung des anderen Inhalts zu unserer Inline-Box. Der Innenabstand und der Rand überlappen andere Wörter im Absatz. Die linken und rechten Innenabstände, Außenabstände und Ränder bewegen andere Inhalte von der Box weg.

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

`display: inline-block` ist ein spezieller Wert von `display`, der einen Mittelweg zwischen `inline` und `block` bietet. Verwenden Sie es, wenn Sie nicht möchten, dass ein Element auf eine neue Zeile umbricht, aber möchten, dass es `width` und `height` respektiert und den oben gesehenen Überlappungen vermeidet.

Ein Element mit `display: inline-block` erfüllt einen Teil der Block-Dinge, die wir bereits kennen:

- Die Eigenschaften `width` und `height` werden respektiert.
- `padding`, `margin` und `border` führen dazu, dass andere Elemente von der Box weg gedrückt werden.

Es bricht jedoch nicht auf eine neue Zeile, und wird nur größer als sein Inhalt, wenn Sie explizit `width` und `height`-Eigenschaften hinzufügen.

### Spielen mit inline-block

Im nächsten Beispiel haben wir `display: inline-block` zu unserem `<span>`-Element hinzugefügt. Versuchen Sie es in `display: block` zu ändern oder die Zeile komplett zu entfernen, um den Unterschied in den Anzeigemodellen zu sehen:

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

Wo dies nützlich sein kann, ist, wenn Sie einem Link ein größeres Zielgebiet hinzufügen möchten, indem Sie `padding` hinzufügen. `<a>` ist ein Inline-Element wie `<span>`; Sie können `display: inline-block` verwenden, um es zu ermöglichen, dass ein Innenabstand festgelegt wird, was es für einen Benutzer einfacher macht, auf den Link zu klicken.

Sie sehen dies ziemlich häufig in Navigationsleisten. Die nachfolgende Navigation wird in einer Zeile mit Flexbox angezeigt und wir haben einen Innenabstand zum `<a>`-Element hinzugefügt, da wir in der Lage sein möchten, die `background-color` zu ändern, wenn das `<a>`-Element hovered wird. Der Innenabstand scheint den Rand auf dem `<ul>`-Element zu überlappen. Das liegt daran, dass das `<a>`-Element ein Inline-Element ist.

Fügen Sie `display: inline-block;` zur Regel mit dem `.links-list a`-Selektor hinzu, und Sie werden sehen, wie es dieses Problem löst, indem der Innenabstand von anderen Elementen respektiert wird:

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model).

## Zusammenfassung

Das ist das meiste, was Sie über das Box-Modell verstehen müssen. Möglicherweise möchten Sie zu dieser Lektion zurückkehren, wenn Sie jemals verwirrt sind, wie groß Boxen in Ihrem Layout sind.

Im nächsten Artikel werden wir uns ansehen, wie CSS Konflikte behandelt – wenn mehrere Regeln dasselbe Element auswählen, welche Stile werden angewendet?

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics")}}
