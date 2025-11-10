---
title: Das Boxmodell
short-title: Box model
slug: Learn_web_development/Core/Styling_basics/Box_model
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors", "Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics")}}

Alles in CSS hat eine Box um sich herum, und das Verständnis dieser Boxen ist der Schlüssel dazu, komplexere Layouts mit CSS zu erstellen oder Elemente mit anderen Elementen auszurichten. In dieser Lektion werden wir uns das CSS-_Boxmodell_ ansehen. Sie werden verstehen, wie es funktioniert und mit welchen Begriffen es verbunden ist.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (studieren Sie
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
          <li>Die verschiedenen Boxen, die ein Element ausmachen und wie man sie stylt — Inhalt, Rand, Rahmen, Polsterung.</li>
          <li>Das alternative Boxmodell (zugänglich über <code>box-sizing: border-box</code>) und wie es sich vom regulären Boxmodell unterscheidet.</li>
          <li>Rand-Kollaps.</li>
          <li>Grundlegende Display-Werte und wie sie das Verhalten einer Box beeinflussen — <code>block</code>, <code>inline</code>, <code>inline-block</code>, <code>none</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Block- und Inline-Boxen

In CSS haben wir mehrere Arten von Boxen, die im Allgemeinen in die Kategorien **Block-Boxen** und **Inline-Boxen** passen. Der Typ bezieht sich darauf, wie sich die Box im Hinblick auf den Seitenfluss und in Bezug zu anderen Boxen auf der Seite verhält. Boxen haben einen **inneren Display-Typ** und einen **äußeren Display-Typ**.

Im Allgemeinen können Sie verschiedene Werte für den Display-Typ mit der {{cssxref("display")}}-Eigenschaft festlegen.

Wenn eine Box einen Display-Wert `block` hat, dann:

- Wird die Box auf eine neue Zeile verschoben.
- Die {{cssxref("width")}}- und {{cssxref("height")}}-Eigenschaften werden respektiert.
- Polsterung, Rand und Rahmen bringen andere Elemente dazu, von der Box weggedrückt zu werden.
- Wenn {{cssxref("width")}} nicht angegeben ist, wird die Box in der Inline-Richtung erweitert, um den verfügbaren Platz in ihrem Container zu füllen. In den meisten Fällen wird die Box so breit wie ihr Container, was 100 % des verfügbaren Platzes einnimmt.

Einige HTML-Elemente wie `<h1>` und `<p>` verwenden standardmäßig `block` als äußeren Display-Typ.

Wenn eine Box einen Display-Wert `inline` hat, dann:

- Wird die Box nicht auf eine neue Zeile verschoben.
- Die {{cssxref("width")}}, {{cssxref("height")}} und die oberen und unteren Ränder haben keine Wirkung.
- **Obere und untere** Polsterungen und Rahmen ändern die Größe der Box, ohne die Position des umgebenden Inhalts zu beeinflussen, was zu Überlappungen führen kann.
- **Linke und rechte** Polsterungen, Ränder und Rahmen beeinflussen die Position des umgebenden Inline-Inhalts.

Einige HTML-Elemente, wie `<a>`, `<span>`, `<em>` und `<strong>`, verwenden standardmäßig `inline` als äußeren Display-Typ.

Block- und Inline-Layout ist die Standardweise, in der Dinge im Web funktionieren. Standardmäßig und ohne weitere Anweisungen werden die Elemente in einer Box auch in **[normalem Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow)** angeordnet und verhalten sich wie Block- oder Inline-Boxen.

## Innere und äußere Display-Typen

`block`- und `inline`-Display-Werte werden als **äußere Display**-Typen bezeichnet — sie beeinflussen, wie die Box in Bezug auf andere Boxen um sie herum angeordnet wird. Boxen haben auch einen **inneren Display**-Typ, der bestimmt, wie Elemente innerhalb dieser Box angeordnet sind.

Sie können den inneren Display-Typ ändern, indem Sie einen inneren Display-Wert festlegen, z.B. `display: flex;`. Das Element verwendet weiterhin den äußeren Display-Typ `block`, aber dieser ändert den inneren Display-Typ zu `flex`. Beliebige direkte Kinder dieser Box werden zu Flex-Elementen und verhalten sich gemäß der [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)-Spezifikation.

Wenn Sie sich näher mit der CSS-Layoutgestaltung befassen, stoßen Sie auf [`flex`](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und verschiedene andere innere Werte, die Ihre Boxen haben können, z.B. [`grid`](/de/docs/Learn_web_development/Core/CSS_layout/Grids).

Machen Sie sich zunächst nicht zu viele Gedanken über die innere und äußere Terminologie; das ist das, was intern passiert, und wir erwähnen es hier für den Fall, dass Sie es anderswo antreffen. Im Allgemeinen werden Sie nur mit einzelnen `display`-Werten umgehen und nicht viel darüber nachdenken müssen.

## Beispiele für verschiedene Display-Typen

Das untenstehende Beispiel zeigt drei verschiedene HTML-Elemente, bei denen alle einen äußeren Display-Typ `block` haben.

- Ein Absatz mit einem in CSS hinzugefügten Rahmen. Der Browser rendert dies als Block-Box. Der Absatz beginnt auf einer neuen Zeile und erstreckt sich horizontal, um die gesamte verfügbare Breite zu füllen.

- Eine Liste, die mit `display: flex` angeordnet ist. Dies etabliert das Flex-Layout für die Kinder des Containers, die Flex-Elemente sind, die standardmäßig in einer Reihe angeordnet sind. Die Liste selbst ist eine Block-Box und — wie der Absatz — erstreckt sich über die volle Breite des Containers und bricht auf eine neue Zeile um.

- Ein Block-Absatz, in dem sich zwei `<span>`-Elemente befinden. Diese Elemente wären normalerweise `inline`, jedoch hat eines der Elemente eine Klasse `block` und wird auf `display: block` eingestellt. Dadurch wird dieses einzelne Wort auf einer neuen Zeile gestartet, die sich über die volle Breite seines übergeordneten Elements erstreckt.

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

- Das `<ul>`-Element, das auf `display: inline-flex` eingestellt ist, erzeugt eine Inline-Box, die einige Flex-Elemente enthält.

- Die beiden Absätze sind beide auf `display: inline` eingestellt. Der Inline-Flexcontainer und die Absätze laufen alle auf einer Zeile zusammen, anstatt auf neue Zeilen umgebrochen zu werden (wie sie es tun würden, wenn sie als Block-Elemente dargestellt würden).

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

Wichtig zu beachten ist: Das Ändern des `display`-Eigenschaftswertes kann ändern, ob der äußere Display-Typ einer Box block oder inline ist. Dies ändert, wie sie im Layout neben anderen Elementen angezeigt wird.

## Was ist das CSS-Boxmodell?

Das CSS-Boxmodell in seiner Gesamtheit gilt für Block-Boxen und definiert, wie die verschiedenen Teile einer Box — Rand, Rahmen, Polsterung und Inhalt — zusammenarbeiten, um eine Box zu erstellen, die Sie auf einer Seite sehen können. Inline-Boxen verwenden nur _einen Teil_ des im Boxmodell definierten Verhaltens.

Um es komplex zu machen, gibt es ein Standard- und ein alternatives Boxmodell. Standardmäßig verwenden Browser das Standard-Boxmodell.

### Teile einer Box

Eine Block-Box in CSS besteht aus:

- **Inhaltsbox**: Der Bereich, in dem Ihr Inhalt angezeigt wird; bestimmen Sie die Größe mit Eigenschaften wie {{cssxref("width")}} und {{cssxref("height")}}.
- **Polsterungsbox**: Die Polsterung sitzt als weißer Raum um den Inhalt; bestimmen Sie die Größe mit {{cssxref("padding")}} und verwandten Eigenschaften.
- **Rahmenbox**: Die Rahmenbox umschließt den Inhalt und eine eventuelle Polsterung; bestimmen Sie die Größe mit {{cssxref("border")}} und verwandten Eigenschaften.
- **Randbox**: Der Rand ist die äußerste Schicht, die den Inhalt, die Polsterung und den Rahmen als Leerraum zwischen dieser Box und anderen Elementen umschließt; bestimmen Sie die Größe mit {{cssxref("margin")}} und verwandten Eigenschaften.

Das folgende Diagramm zeigt diese Schichten:

![Diagramm des Boxmodells](box-model.png)

### Das Standard-CSS-Boxmodell

Im Standardboxmodell definieren die Werte, die Sie für die Eigenschaften `width` und `height` einer Box festlegen, die `width` und `height` der _Inhaltsbox_. Jede Polsterung und Rahmen wird dann zu diesen Dimensionen addiert, um die Gesamtgröße der Box zu bestimmen (siehe Bild unten).

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

Der _tatsächliche_ Platz, den die Box einnimmt, beträgt `410px` Breite (350 + 25 + 25 + 5 + 5) und `210px` Höhe (150 + 25 + 25 + 5 + 5).

![Größe der Box bei Verwendung des Standard-Boxmodells.](standard-box-model.png)

> [!NOTE]
> Der Rand zählt nicht zur tatsächlichen Größe der Box — natürlich beeinflusst er den gesamten Platz, den die Box auf der Seite einnimmt, aber nur den Platz außerhalb der Box. Der Bereich der Box endet am Rahmen — er erstreckt sich nicht in den Rand hinein.

### Das alternative CSS-Boxmodell

Im alternativen Boxmodell ist jede Breite die Breite der sichtbaren Box auf der Seite. Die Breite des Inhaltsbereichs ist diese Breite minus der Breite für die Polsterung und den Rahmen (siehe Bild unten). Dies ist praktisch, da es nicht notwendig ist, den Rahmen und die Polsterung zu addieren, um die tatsächliche Größe der Box zu erhalten.

Um das alternative Modell für ein Element einzuschalten, setzen Sie `box-sizing: border-box` darauf:

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

Der _tatsächliche_ Platz, den die Box jetzt einnimmt, wird `350px` in der Inline-Richtung und `150px` in der Block-Richtung sein.

![Größe der Box bei Verwendung des alternativen Boxmodells.](alternate-box-model.png)

Um das alternative Boxmodell für alle Ihre Elemente zu verwenden (was unter Entwicklern eine häufige Wahl ist), setzen Sie die `box-sizing`-Eigenschaft auf das `<html>`-Element, und setzen Sie alle anderen Elemente so ein, dass sie diesen Wert erben:

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

Um die zugrunde liegende Idee zu verstehen, können Sie den [Artikel über box-sizing auf CSS Tricks](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/) lesen.

## Spielen mit Boxmodellen

Im Beispiel unten sehen Sie zwei Boxen. Beide haben eine Klasse `.box`, die ihnen die gleichen `width`, `height`, `margin`, `border` und `padding` zuweist. Der einzige Unterschied besteht darin, dass die zweite Box auf das alternative Boxmodell eingestellt ist.
Können Sie die Größe der zweiten Box ändern (indem Sie CSS zur `.alternate`-Klasse hinzufügen), um sie in Breite und Höhe der ersten Box anzupassen?

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
> Eine Lösung für diese Aufgabe finden Sie [in unserem css-examples-Repo](https://github.com/mdn/css-examples/blob/main/learn/solutions.md#the-box-model).

### Verwendung der Entwicklerwerkzeuge im Browser zur Ansicht des Boxmodells

Ihre [Browser-Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) können das Verständnis des Boxmodells erheblich erleichtern — sie können Ihnen die Größe des Elements plus seinen Rand, seine Polsterung und seinen Rahmen anzeigen. Das Inspektieren eines Elements auf diese Weise ist eine großartige Möglichkeit herauszufinden, ob Ihre Box wirklich die Größe hat, die Sie denken!

![Inspektion des Boxmodells eines Elements mit Firefox DevTools](box-model-devtools.png)

## Ränder, Polsterung und Rahmen

Sie haben bereits die Eigenschaften {{cssxref("margin")}}, {{cssxref("padding")}} und {{cssxref("border")}} im obigen Beispiel gesehen. Die in diesem Beispiel verwendeten Eigenschaften sind **Kurzfassungen** und ermöglichen es uns, alle vier Seiten der Box auf einmal festzulegen. Diese Kurzfassungen haben auch entsprechende Langform-Eigenschaften, die eine individuelle Steuerung der verschiedenen Seiten der Box ermöglichen.

Lassen Sie uns diese Eigenschaften im Detail erkunden.

### Rand

Der Rand ist ein unsichtbarer Raum um Ihre Box. Er drückt andere Elemente von der Box weg. Ränder können positive oder negative Werte haben. Ein negativer Rand auf einer Seite Ihrer Box kann dazu führen, dass sie sich mit anderen Dingen auf der Seite überlappt. Ob Sie das Standard- oder das alternative Boxmodell verwenden, der Rand wird immer nach der Berechnung der Größe der sichtbaren Box hinzugefügt.

Wir können alle Ränder eines Elements auf einmal mit der {{cssxref("margin")}}-Eigenschaft oder jede Seite einzeln mit den entsprechenden Langform-Eigenschaften steuern:

- {{cssxref("margin-top")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}

#### Spielen mit Rändern

Bearbeiten Sie das Beispiel unten. Versuchen Sie die Randwerte zu ändern, um zu sehen, wie die Box durch den Rand an Position verschoben wird, indem Raum geschaffen oder entfernt wird (wenn es ein negativer Rand ist) zwischen diesem Element und dem enthaltenden Element.

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

- Zwei positive Ränder werden kombiniert und ergeben einen Rand, dessen Größe gleich dem größten Einzelrand ist.
- Zwei negative Ränder kollabieren und der kleinste Wert (am weitesten von null entfernt) wird verwendet.
- Wenn ein Rand negativ ist, wird sein Wert vom Gesamtbetrag _abgezogen_.

Im Beispiel unten haben wir zwei Absätze. Der obere Absatz hat einen `margin-bottom` von 50 Pixel, der andere hat einen `margin-top` von 30 Pixel. Die Ränder sind zusammengefallen, sodass der tatsächliche Rand zwischen den Boxen 50 Pixel beträgt und nicht die Summe der beiden Ränder.

Sie können dies testen, indem Sie `margin-top` des zweiten Absatzes auf `0` setzen. Der sichtbare Rand zwischen den beiden Absätzen ändert sich nicht — er behält die 50 Pixel bei, die im `margin-bottom` des ersten Absatzes festgelegt sind. Wenn Sie ihn auf `-10px` setzen, sehen Sie, dass der Gesamt-Rand `40px` beträgt — er wird vom `50px` abgezogen.

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

Eine Reihe von Regeln bestimmen, wann Ränder kollabieren und wann nicht. Für weitere Informationen siehe die detaillierte Seite zum [Meistern des Rand-Kollaps](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing). Die Hauptsache, an die Sie sich erinnern sollten, ist, dass der Rand-Kollaps etwas ist, das passiert, wenn Sie Raum mit Rändern schaffen und nicht den Raum bekommen, den Sie erwarten.

> [!NOTE] > [Lernen Sie Ränder über Flags](https://scrimba.com/frontend-path-c0j/~01e?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba ist eine interaktive Lektion, die einige nützliche Übungen mit Rändern bietet.

### Rahmen

Der Rahmen wird zwischen dem Rand und der Polsterung einer Box gezeichnet. Wenn Sie das Standard-Boxmodell verwenden, wird die Größe des Rahmens zur `width` und `height` der Inhaltsbox hinzugefügt. Wenn Sie das alternative Boxmodell verwenden, wird desto größer der Rahmen ist, desto kleiner die Inhaltsbox, da der Rahmen einen Teil der verfügbaren `width` und `height` des Elemente-Box einnimmt.

Für die Gestaltung von Rahmen gibt es eine Vielzahl von Eigenschaften — es gibt vier Rahmen, und jeder Rahmen hat einen Stil, eine Breite und eine Farbe, die wir möglicherweise manipulieren möchten.

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

#### Spielen mit Rahmen

Im Beispiel unten haben wir verschiedene Kurzfassungen und Langformen verwendet, um Rahmen zu erstellen. Bearbeiten Sie die verschiedenen Eigenschaften, um zu überprüfen, dass Sie verstehen, wie sie funktionieren. Die MDN-Seiten für die Rahmen-Eigenschaften geben Ihnen Informationen über die verschiedenen verfügbaren Rahmenstile.

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

Die Polsterung befindet sich zwischen dem Rahmen und dem Inhaltsbereich und wird verwendet, um den Inhalt vom Rahmen wegzudrücken. Im Gegensatz zu Rändern können Sie keine negative Polsterung haben. Ein beliebiger Hintergrund, der auf Ihr Element angewendet wird, wird hinter der Polsterung angezeigt.

Die {{cssxref("padding")}}-Eigenschaft steuert die Polsterung auf allen Seiten eines Elements. Um jede Seite einzeln zu steuern, verwenden Sie diese Langform-Eigenschaften:

- {{cssxref("padding-top")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}

#### Spielen mit Polsterung

Im Beispiel unten bearbeiten Sie die Werte für die Polsterung der Klasse `.box` und sehen, wie dies ändert, wo der Text in Bezug auf die Box beginnt. Sie können auch die Polsterung auf der Klasse `.container` ändern, um Raum zwischen dem Container und der Box zu schaffen. Sie können die Polsterung auf jedem Element ändern, um Raum zwischen seinem Rahmen und dem, was sich innerhalb des Elements befindet, zu schaffen.

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

All das oben Genannte gilt vollständig für Block-Boxen. Einige der Eigenschaften können auch auf Inline-Boxen angewandt werden, wie sie durch ein `<span>`-Element erstellt werden.

Im Beispiel unten haben wir ein `<span>` in einem Absatz. Wir haben ihm eine `width`, `height`, `margin`, `border` und `padding` zugewiesen. Sie können sehen, dass die Breite, Höhe und die oberen und unteren Ränder das `<span>` nicht beeinflussen. Die oberen und unteren Polsterungen und Rahmen ändern die Größe der Inline-Box, beeinflussen aber nicht die Position des umgebenden Inhalts. Stattdessen überlappen die oberen und unteren Polsterungen und Rahmen andere Wörter im Absatz. Nur die linken und rechten Polsterungen, Ränder und Rahmen beeinflussen die Position des Texts, der das `<span>` umgibt.

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

`display: inline-block` ist ein spezieller Wert von `display`, der einen Mittelweg zwischen `inline` und `block` bietet. Verwenden Sie ihn, wenn Sie nicht möchten, dass ein Element auf eine neue Zeile übergeht, aber es `width` und `height` respektieren soll und das Überlappen, das oben gezeigt wurde, vermeiden möchte.

Ein Element mit `display: inline-block` erledigt einen Teil der Block-Dinge, die wir bereits kennen:

- Die Eigenschaften `width` und `height` werden respektiert.
- `padding`, `margin` und `border` lassen andere Elemente von der Box wegdrücken.

Es bricht jedoch nicht auf eine neue Zeile um und wird nur größer als sein Inhalt, wenn Sie explizit `width` und `height` hinzufügen.

### Spielen mit inline-block

Im nächsten Beispiel haben wir unserem `<span>`-Element `display: inline-block` hinzugefügt. Versuchen Sie, dies auf `display: block` zu ändern oder die Zeile komplett zu entfernen, um die Unterschiede in den Anzeigemodellen zu sehen:

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

Wo dies nützlich sein kann, ist, wenn Sie einem Link einen größeren Trefferbereich geben möchten, indem Sie `padding` hinzufügen. `<a>` ist ein Inline-Element wie `<span>`; Sie können `display: inline-block` verwenden, um es zu erlauben, Polsterung darauf zu setzen, was es für einen Benutzer einfacher macht, den Link anzuklicken.

Sie sehen dies ziemlich häufig in Navigationsleisten. Die untenstehende Navigation wird in einer Reihe mithilfe von Flexbox angezeigt, und wir haben Polsterung zum `<a>`-Element hinzugefügt, da wir die `background-color` ändern möchten, wenn das `<a>`-Element schwebt. Die Polsterung scheint den Rahmen auf dem `<ul>`-Element zu überlappen. Dies liegt daran, dass das `<a>` ein Inline-Element ist.

Fügen Sie `display: inline-block;` zur Regel mit dem `.links-list a`-Selektor hinzu, und Sie werden sehen, wie es dieses Problem behebt, indem es die Polsterung von anderen Elementen respektiert:

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

Das ist das meiste, was Sie über das Boxmodell verstehen müssen. Vielleicht möchten Sie zu dieser Lektion in Zukunft zurückkehren, wenn Sie jemals verwirrt darüber sind, wie groß Boxen in Ihrem Layout sind.

Im nächsten Artikel geben wir Ihnen einige Tests, die Sie nutzen können, um zu überprüfen, wie gut Sie die Informationen über das CSS-Boxmodell verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors", "Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics")}}
