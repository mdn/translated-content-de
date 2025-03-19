---
title: Das Box-Modell
short-title: Box model
slug: Learn_web_development/Core/Styling_basics/Box_model
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics")}}

Alles in CSS hat eine Box um sich herum, und das Verständnis dieser Boxen ist entscheidend, um in der Lage zu sein, komplexere Layouts mit CSS zu erstellen oder Elemente mit anderen Elementen auszurichten. In dieser Lektion werden wir das CSS-Box-Modell genauer betrachten. Sie werden ein Verständnis dafür entwickeln, wie es funktioniert und welche Terminologie damit verbunden ist.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (lernen Sie
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
          <li>Die verschiedenen Boxen, die ein Element ausmachen, und wie man sie stylt — Inhalt, Rand, Rahmen, Abstände.</li>
          <li>Das alternative Box-Modell (zugänglich über <code>box-sizing: border-box</code>) und wie es sich vom regulären Box-Modell unterscheidet.</li>
          <li>Zusammenfallen von Rändern.</li>
          <li>Grundlegende Anzeige-Werte und wie sie das Verhalten der Box beeinflussen — <code>block</code>, <code>inline</code>, <code>inline-block</code>, <code>none</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Block- und Inline-Boxen

In CSS gibt es mehrere Arten von Boxen, die im Allgemeinen in die Kategorien **Block-Boxen** und **Inline-Boxen** fallen. Der Typ bezieht sich darauf, wie sich die Box in Bezug auf den Seitenfluss und in Bezug auf andere Boxen auf der Seite verhält. Boxen haben einen **inneren Anzeigetyp** und einen **äußeren Anzeigetyp**.

Im Allgemeinen können Sie verschiedene Werte für den Anzeigetyp mit der Eigenschaft {{cssxref("display")}} festlegen, die verschiedene Werte haben kann.

Wenn eine Box einen Anzeigewert von `block` hat, dann:

- Wird die Box in einer neuen Zeile angezeigt.
- Die Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} werden berücksichtigt.
- Abstände (Padding), Rand und Rahmen verursachen, dass andere Elemente von der Box weggeschoben werden.
- Wenn {{cssxref("width")}} nicht angegeben ist, wird sich die Box in Inline-Richtung ausdehnen, um den verfügbaren Platz in ihrem Container zu füllen. In den meisten Fällen wird die Box so breit wie ihr Container und füllt 100 % des verfügbaren Platzes.

Einige HTML-Elemente wie `<h1>` und `<p>` verwenden standardmäßig `block` als ihren äußeren Anzeigetyp.

Wenn eine Box einen Anzeigetyp von `inline` hat, dann:

- Wird die Box nicht in einer neuen Zeile angezeigt.
- Die Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} gelten nicht.
- Obere und untere Abstände (Padding), Ränder und Rahmen werden angewendet, bewirken jedoch nicht, dass sich andere Inline-Boxen von der Box entfernen.
- Linke und rechte Abstände (Padding), Ränder und Rahmen werden angewendet und führen dazu, dass sich andere Inline-Boxen von der Box entfernen.

Einige HTML-Elemente wie `<a>`, `<span>`, `<em>` und `<strong>` verwenden standardmäßig `inline` als ihren äußeren Anzeigetyp.

Block- und Inline-Layout ist das Standardverhalten im Web. Standardmäßig und ohne andere Anweisungen werden die Elemente innerhalb einer Box auch in **[normalem Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow)** angeordnet und verhalten sich wie Block- oder Inline-Boxen.

## Innere und äußere Anzeigetypen

`block` und `inline` Anzeigewerte werden als **äußere Anzeigetypen** bezeichnet — sie beeinflussen, wie die Box in Bezug auf andere Boxen um sie herum angeordnet wird. Boxen haben auch einen **inneren Anzeigetyp**, der bestimmt, wie Elemente innerhalb dieser Box angeordnet werden.

Sie können den inneren Anzeigetyp ändern, indem Sie einen inneren Anzeigewert festlegen, zum Beispiel `display: flex;`. Das Element wird weiterhin den äußeren Anzeigetyp `block` verwenden, aber dies ändert den inneren Anzeigetyp zu `flex`. Alle direkten Kinder dieser Box werden zu Flex-Elementen und verhalten sich gemäß der [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)-Spezifikation.

Wenn Sie sich weiter mit CSS-Layout beschäftigen, werden Sie auf [`flex`](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) stoßen und verschiedene andere innere Werte, die Ihre Boxen haben können, zum Beispiel [`grid`](/de/docs/Learn_web_development/Core/CSS_layout/Grids).

Machen Sie sich noch nicht allzu viele Gedanken über die innere und äußere Terminologie; dies ist das, was intern passiert, und wir erwähnen es hier, falls Sie darauf stoßen. Im Allgemeinen werden Sie nur mit einzelnen `display`-Werten umgehen und müssen nicht viel darüber nachdenken.

## Beispiele für verschiedene Anzeigetypen

Das folgende Beispiel enthält drei verschiedene HTML-Elemente, von denen alle einen äußeren Anzeigetyp von `block` haben.

- Ein Absatz mit einem Rahmen, der in CSS hinzugefügt wurde. Der Browser rendert dies als Block-Box. Der Absatz beginnt in einer neuen Zeile und erstreckt sich über die gesamte verfügbare Breite.

- Eine Liste, die mit `display: flex` gestaltet ist. Dies etabliert ein Flex-Layout für die Kinder des Containers, die Flex-Elemente sind. Die Liste selbst ist eine Block-Box und — wie der Absatz — breitet sich über die gesamte Breite des Containers aus und bricht in eine neue Linie um.

- Ein Blockabsatz, in dem sich zwei `<span>`-Elemente befinden. Diese Elemente wären normalerweise `inline`, jedoch hat eines der Elemente die Klasse "block", die auf `display: block` gesetzt wird.

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

- Das `<ul>`-Element, das auf `display: inline-flex` gesetzt ist, erstellt eine Inline-Box, die einige Flex-Elemente enthält.

- Die beiden Absätze sind beide auf `display: inline` gesetzt. Der Inline-Flex-Container und die Absätze laufen alle in einer Zeile zusammen, statt in neue Zeilen umzubrechen (wie sie es täten, wenn sie als Blocklevel-Elemente angezeigt würden).

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

Das Wichtigste, das Sie sich merken sollten, ist: Das Ändern des Wertes der `display`-Eigenschaft kann ändern, ob der äußere Anzeigetyp einer Box block oder inline ist. Dies ändert die Art und Weise, wie es neben anderen Elementen im Layout angezeigt wird.

## Was ist das CSS-Box-Modell?

Das CSS-Box-Modell insgesamt gilt für Block-Boxen und definiert, wie die verschiedenen Teile einer Box — Rand, Rahmen, Abstände und Inhalt — zusammenarbeiten, um eine Box zu erstellen, die Sie auf einer Seite sehen können. Inline-Boxen verwenden nur _einen Teil_ des Verhaltens, das im Box-Modell definiert ist.

Um Komplexität hinzuzufügen, gibt es ein Standard- und ein alternatives Box-Modell. Standardmäßig verwenden Browser das Standard-Box-Modell.

### Teile einer Box

Eine Block-Box in CSS besteht aus:

- **Inhaltsbox**: Der Bereich, in dem Ihr Inhalt angezeigt wird; größenmäßig können Sie ihn mit Eigenschaften wie {{cssxref("width")}} und {{cssxref("height")}} anpassen.
- **Abstandsbox**: Der Abstand umgibt den Inhalt als Leerraum; größenmäßig können Sie ihn mit {{cssxref("padding")}} und verwandten Eigenschaften anpassen.
- **Rahmenbox**: Die Rahmenbox umgibt den Inhalt und jeden Abstand; größenmäßig können Sie ihn mit {{cssxref("border")}} und verwandten Eigenschaften anpassen.
- **Randbox**: Der Rand ist die äußerste Schicht, die den Inhalt, Abstände und Rahmen als Leerraum zwischen dieser Box und anderen Elementen umgibt; größenmäßig können Sie ihn mit {{cssxref("margin")}} und verwandten Eigenschaften anpassen.

Das folgende Diagramm zeigt diese Schichten:

![Diagramm des Box-Modells](box-model.png)

### Das Standard-CSS-Box-Modell

Im Standard-Box-Modell definieren die Werte für die Eigenschaften `width` und `height` einer Box die `width` und `height` der _Inhaltsbox_. Jeder Abstand und Rahmen wird dann zu diesen Dimensionen hinzugefügt, um die Gesamtgröße der Box zu bestimmen (siehe Bild unten).

Nehmen wir an, eine Box hat das folgende CSS:

```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

Der _tatsächliche_ Raum, den die Box einnimmt, wird 410px breit (350 + 25 + 25 + 5 + 5) und 210px hoch (150 + 25 + 25 + 5 + 5) sein.

![Die Größe der Box, wenn das Standard-Box-Modell verwendet wird.](standard-box-model.png)

> [!NOTE]
> Der Rand wird nicht zur tatsächlichen Größe der Box gezählt — sicher, er beeinflusst den Gesamtbereich, den die Box auf der Seite einnimmt, aber nur den Raum außerhalb der Box. Die Fläche der Box endet an der Grenze — sie erstreckt sich nicht in den Rand hinein.

### Das alternative CSS-Box-Modell

Im alternativen Box-Modell ist jede Breite die Breite der sichtbaren Box auf der Seite. Die Breite des Inhaltsbereichs ist die Breite minus der Breite für Abstände und Rahmen (siehe Bild unten). Es ist nicht notwendig, Rahmen und Abstände zusammenzurechnen, um die tatsächliche Größe der Box zu erhalten.

Um das alternative Modell für ein Element zu aktivieren, setzen Sie `box-sizing: border-box` darauf:

```css
.box {
  box-sizing: border-box;
}
```

Nehmen wir an, die Box hat das gleiche CSS wie oben:

```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

Nun wird der _tatsächliche_ Raum, den die Box einnimmt, 350px in Inline-Richtung und 150px in Block-Richtung betragen.

![Die Größe der Box, wenn das alternative Box-Modell verwendet wird.](alternate-box-model.png)

Um das alternative Box-Modell für alle Ihre Elemente zu verwenden (was eine gängige Wahl unter Entwicklern ist), setzen Sie die `box-sizing`-Eigenschaft auf das `<html>`-Element und setzen alle anderen Elemente darauf, diesen Wert zu erben:

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

## Mit Box-Modellen spielen

Im folgenden Beispiel sehen Sie zwei Boxen. Beide haben eine Klasse von `.box`, die ihnen das gleiche `width`, `height`, `margin`, `border` und `padding` gibt. Der einzige Unterschied ist, dass die zweite Box so eingestellt ist, dass sie das alternative Box-Modell verwendet.
Können Sie die Größe der zweiten Box ändern (indem Sie CSS zur `.alternate`-Klasse hinzufügen), um sie in Breite und Höhe an die erste Box anzupassen?

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

### Verwenden Sie die DevTools des Browsers, um das Box-Modell anzuzeigen

Ihre [Browser-Entwickler-Tools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) können das Verständnis des Box-Modells erheblich erleichtern — sie können Ihnen die Größe des Elements sowie dessen Rand, Abstände und Rahmen zeigen. Das Inspizieren eines Elements auf diese Weise ist eine großartige Möglichkeit zu überprüfen, ob Ihre Box wirklich die Größe hat, die Sie denken!

![Inspektion des Box-Modells eines Elements mit den Firefox DevTools](box-model-devtools.png)

## Ränder, Abstände und Rahmen

Sie haben die Eigenschaften {{cssxref("margin")}}, {{cssxref("padding")}} und {{cssxref("border")}} bereits im obigen Beispiel gesehen. Die in diesem Beispiel verwendeten Eigenschaften sind **Shorthands** und erlauben es uns, alle vier Seiten der Box auf einmal festzulegen. Diese Shorthands haben auch entsprechende Langform-Eigenschaften, die die Steuerung der verschiedenen Seiten der Box einzeln ermöglichen.

Lassen Sie uns diese Eigenschaften genauer erkunden.

### Rand

Der Rand ist ein unsichtbarer Raum um Ihre Box. Er drückt andere Elemente von der Box weg. Ränder können positive oder negative Werte haben. Wenn Sie eine negative Rand auf einer Seite Ihrer Box einstellen, kann es dazu führen, dass sie sich mit anderen Dingen auf der Seite überlappt. Egal, ob Sie das Standard- oder das alternative Box-Modell verwenden, der Rand wird immer nach der Größe der sichtbaren Box hinzugefügt.

Wir können alle Ränder eines Elements auf einmal mit der {{cssxref("margin")}}-Eigenschaft steuern oder jede Seite einzeln mit den entsprechenden Langform-Eigenschaften:

- {{cssxref("margin-top")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}

Im folgenden Beispiel versuchen Sie, die Randwerte zu ändern, um zu sehen, wie die Box durch den Rand verschoben wird oder Raum entfernt wird (wenn es ein negativer Rand ist) zwischen diesem Element und dem umgebenden Element.

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

Abhängig davon, ob zwei Elemente, deren Ränder sich berühren, positive oder negative Ränder haben, sind die Ergebnisse unterschiedlich:

- Zwei positive Ränder werden kombiniert und zu einem Rand. Seine Größe entspricht dem größten einzelnen Rand.
- Zwei negative Ränder werden zusammenfallen und der kleinste (am weitesten von Null entfernt) Wert wird verwendet.
- Wenn ein Rand negativ ist, wird sein Wert von der Gesamtsumme _subtrahiert_.

Im folgenden Beispiel haben wir zwei Absätze. Der obere Absatz hat einen `margin-bottom` von 50 Pixeln, der andere einen `margin-top` von 30 Pixeln. Die Ränder sind zusammengefallen, sodass der tatsächliche Rand zwischen den Boxen 50 Pixel beträgt und nicht die Summe der beiden Ränder.

Sie können dies testen, indem Sie den `margin-top` des zweiten Absatzes auf `0` setzen. Der sichtbare Rand zwischen den beiden Absätzen ändert sich nicht — es behält die 50 Pixel bei, die im `margin-bottom` des ersten Absatzes gesetzt wurden. Wenn Sie ihn auf `-10px` setzen, sehen Sie, dass der Gesamtrand `40px` beträgt — er wird von den `50px` subtrahiert.

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

Eine Reihe von Regeln bestimmen, wann Ränder zusammenfallen und wann nicht. Für weitere Informationen siehe die detaillierte Seite zum [Meistern des Zusammenfalls von Rändern](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing). Das Wichtigste, das Sie sich merken sollten, ist, dass das Zusammenfallen von Rändern ein Phänomen ist, das passiert, wenn Sie mit Rändern Platz schaffen und nicht den Raum erhalten, den Sie erwarten.

### Rahmen

Der Rahmen wird zwischen dem Rand und den Abständen einer Box gezeichnet. Wenn Sie das Standard-Box-Modell verwenden, wird die Größe des Rahmens zur `width` und `height` der Inhaltsbox hinzugefügt. Wenn Sie das alternative Box-Modell verwenden, dann wird die Inhaltsbox umso kleiner, je größer der Rahmen ist, da der Rahmen einen Teil der verfügbaren `width` und `height` des Element-Box beansprucht.

Zum Stylen von Rahmen gibt es eine Vielzahl von Eigenschaften — es gibt vier Rahmen, und jeder Rahmen hat einen Stil, eine Breite und eine Farbe, die wir manipulieren möchten.

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

Im folgenden Beispiel haben wir verschiedene Shorthands und Langformen verwendet, um Rahmen zu erstellen. Spielen Sie mit den verschiedenen Eigenschaften, um zu testen, dass Sie verstehen, wie sie funktionieren. Die MDN-Seiten zu den Rahmeneigenschaften geben Ihnen Informationen über die verschiedenen verfügbaren Rahmenstile.

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

### Abstände

Die Abstände befinden sich zwischen dem Rahmen und dem Inhaltsbereich und werden verwendet, um den Inhalt vom Rahmen wegzuschieben. Im Gegensatz zu Rändern können Sie keine negativen Abstände haben. Jeder auf Ihr Element angewendete Hintergrund wird hinter den Abständen angezeigt.

Die {{cssxref("padding")}}-Eigenschaft steuert die Abstände auf allen Seiten eines Elements. Um jede Seite einzeln zu steuern, verwenden Sie diese Langform-Eigenschaften:

- {{cssxref("padding-top")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}

Im folgenden Beispiel können Sie die Werte für Abstände an der Klasse `.box` ändern, um zu sehen, dass dies ändert, wo der Text beginnt in Bezug auf die Box. Sie können auch die Abstände an der Klasse `.container` ändern, um Platz zwischen dem Container und der Box zu schaffen. Sie können die Abstände an jedem Element ändern, um Platz zwischen seinem Rahmen und was auch immer im Element ist, zu schaffen.

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

All das oben Genannte gilt vollständig für Block-Boxen. Einige der Eigenschaften können auch auf Inline-Boxen angewendet werden, wie die, die durch ein `<span>`-Element erstellt werden.

Im folgenden Beispiel haben wir ein `<span>` innerhalb eines Absatzes. Wir haben eine `width`, `height`, `margin`, `border` und `padding` darauf angewendet. Sie können sehen, dass Breite und Höhe ignoriert werden. Die oberen und unteren Ränder, Abstände und Rahmen werden berücksichtigt, ändern jedoch nicht die Beziehung anderen Inhalts zu unserer Inline-Box. Die Abstände und Rahmen überlappen andere Wörter im Absatz. Die linken und rechten Abstände, Ränder und Rahmen bewegen anderen Inhalt von der Box weg.

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

`display: inline-block` ist ein Spezialwert von `display`, der einen Mittelweg zwischen `inline` und `block` bietet. Verwenden Sie es, wenn Sie nicht möchten, dass ein Element in eine neue Zeile umbricht, aber möchten, dass es `width` und `height` respektiert und das Überlappen oben vermieden wird.

Ein Element mit `display: inline-block` tut einen Teil der Block-Dinge, die wir bereits kennen:

- Die Eigenschaften `width` und `height` werden berücksichtigt.
- `padding`, `margin` und `border` bewirken, dass andere Elemente von der Box weggeschoben werden.

Es bricht jedoch nicht in eine neue Zeile um und wird nur größer als sein Inhalt, wenn Sie explizit `width` und `height` hinzufügen.

Im nächsten Beispiel haben wir `display: inline-block` zu unserem `<span>`-Element hinzugefügt. Versuchen Sie, dies zu `display: block` zu ändern oder die Zeile komplett zu entfernen, um den Unterschied in den Anzeigemodellen zu sehen:

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

Wo dies nützlich sein kann, ist, wenn Sie einem Link eine größere Trefferfläche geben möchten, indem Sie `padding` hinzufügen. `<a>` ist ein Inline-Element wie `<span>`; Sie können `display: inline-block` verwenden, um `padding` darauf zu setzen, wodurch es für einen Benutzer einfacher wird, den Link zu klicken.

Sie sehen dies ziemlich häufig in Navigationsleisten. Die folgende Navigation wird in einer Reihe mit Flexbox angezeigt und wir haben `padding` zum `<a>`-Element hinzugefügt, weil wir in der Lage sein möchten, die `background-color` zu ändern, wenn das `<a>` gehoben wird. Der Abstand scheint den Rahmen auf dem `<ul>`-Element zu überlappen. Dies liegt daran, dass das `<a>` ein Inline-Element ist.

Fügen Sie `display: inline-block;` zur Regel mit dem Selektor `.links-list a` hinzu, und Sie werden sehen, wie es dieses Problem löst, indem es bewirkt, dass der Abstand von anderen Elementen respektiert wird:

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

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Können: Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_Model_Tasks).

## Zusammenfassung

Das ist das meiste, was Sie über das Box-Modell wissen müssen. Möglicherweise möchten Sie zu dieser Lektion zurückkehren, wenn Sie jemals verwirrt darüber sind, wie groß Boxen in Ihrem Layout sind.

Im nächsten Artikel werden wir uns ansehen, wie CSS Konflikte behandelt — wenn mehrere Regeln dasselbe Element auswählen, welche Stile werden dann angewendet?

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics")}}
