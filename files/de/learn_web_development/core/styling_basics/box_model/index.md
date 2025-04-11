---
title: Das Box-Modell
short-title: Box model
slug: Learn_web_development/Core/Styling_basics/Box_model
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics")}}

Alles in CSS hat ein Kästchen um sich herum, und das Verständnis dieser Kästchen ist der Schlüssel, um komplexere Layouts mit CSS zu erstellen oder Elemente mit anderen Elementen auszurichten. In dieser Lektion werfen wir einen Blick auf das CSS- _Boxmodell_. Sie werden verstehen, wie es funktioniert, und die zugehörige Terminologie kennenlernen.

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
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Block- und Inline-Elemente</li>
          <li>Die verschiedenen Boxen, die ein Element bilden und wie man sie gestaltet — Inhalt, Rand, Rahmen, Auffüllung.</li>
          <li>Das alternative Box-Modell (zugänglich über <code>box-sizing: border-box</code>) und wie es sich vom regulären Box-Modell unterscheidet.</li>
          <li>Zusammenfallen von Rändern.</li>
          <li>Grundlegende Anzeigewerte und wie sie das Verhalten der Box beeinflussen — <code>block</code>, <code>inline</code>, <code>inline-block</code>, <code>none</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Block- und Inline-Boxen

In CSS gibt es verschiedene Arten von Boxen, die im Allgemeinen in die Kategorien **Block-Boxen** und **Inline-Boxen** fallen. Der Typ bezieht sich darauf, wie sich die Box im Seitenfluss in Bezug auf andere Boxen auf der Seite verhält. Boxen haben einen **inneren Anzeigetyp** und einen **äußeren Anzeigetyp**.

Im Allgemeinen können Sie verschiedene Werte für den Anzeigetyp mit der {{cssxref("display")}}-Eigenschaft einstellen, die verschiedene Werte haben kann.

Wenn eine Box einen Anzeigewert von `block` hat, dann:

- Die Box bricht in eine neue Zeile um.
- Die {{cssxref("width")}}- und {{cssxref("height")}}-Eigenschaften werden respektiert.
- Auffüllung, Rand und Rahmen bewirken, dass andere Elemente von der Box weggeschoben werden.
- Wenn {{cssxref("width")}} nicht spezifiziert ist, wird die Box in der Zeilenrichtung erweitert, um den verfügbaren Platz im Container auszufüllen. In den meisten Fällen wird die Box so breit wie ihr Container und füllt 100 % des verfügbaren Raums aus.

Einige HTML-Elemente, wie z.B. `<h1>` und `<p>`, verwenden standardmäßig `block` als ihren äußeren Anzeigetyp.

Wenn eine Box einen Anzeigewert von `inline` hat, dann:

- Die Box bricht nicht in eine neue Zeile um.
- Die {{cssxref("width")}}- und {{cssxref("height")}}-Eigenschaften gelten nicht.
- Auffüllung, Ränder und Rahmen oben und unten gelten, bewirken aber nicht, dass andere Inline-Boxen von der Box wegrücken.
- Auffüllung, Ränder und Rahmen links und rechts gelten und bewirken, dass andere Inline-Boxen von der Box wegrücken.

Einige HTML-Elemente, wie z.B. `<a>`, `<span>`, `<em>` und `<strong>`, verwenden standardmäßig `inline` als ihren äußeren Anzeigetyp.

Block- und Inline-Layout ist die Standardweise, wie sich Dinge im Web verhalten. Standardmäßig und ohne weitere Anweisung werden die Elemente innerhalb einer Box auch im **[normalen Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow)** angeordnet und verhalten sich wie Block- oder Inline-Boxen.

## Innere und äußere Anzeigetypen

`block`- und `inline`-Anzeigewerte werden als **äußere Anzeigetypen** bezeichnet – sie beeinflussen, wie die Box im Verhältnis zu anderen Boxen um sie herum angeordnet wird. Boxen haben auch einen **inneren Anzeigetyp**, der bestimmt, wie Elemente innerhalb dieser Box angeordnet werden.

Sie können den inneren Anzeigetyp ändern, indem Sie einen inneren Anzeigewert festlegen, z.B. `display: flex;`. Das Element verwendet weiterhin den äußeren Anzeigetyp `block`, ändert jedoch den inneren Anzeigetyp auf `flex`. Alle direkten Kinder dieser Box werden Flex-Elemente und verhalten sich entsprechend der [Flexbox]-Spezifikation (/de/docs/Learn_web_development/Core/CSS_layout/Flexbox).

Wenn Sie detaillierter über CSS-Layout lernen, werden Sie auf [`flex`](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und verschiedene andere innere Werte stoßen, die Ihre Boxen haben können, z.B. [`grid`](/de/docs/Learn_web_development/Core/CSS_layout/Grids).

Machen Sie sich keine allzu großen Sorgen über die innere und äußere Terminologie für den Moment; dies ist, was intern passiert, und wir haben es hier erwähnt, falls Sie es anderswo antreffen. Generell werden Sie nur mit einzelnen `display`-Werten umgehen und nicht viel darüber nachdenken müssen.

## Beispiele für verschiedene Anzeigetypen

Das folgende Beispiel enthält drei verschiedene HTML-Elemente, die alle einen äußeren Anzeigetyp von `block` haben.

- Ein Absatz mit einem hinzugefügten Rahmen in CSS. Der Browser rendert dies als Block-Box. Der Absatz beginnt in einer neuen Zeile und erstreckt sich über die gesamte verfügbare Breite.

- Eine Liste, die mit `display: flex` angeordnet ist. Dies legt das Flex-Layout für die Kinder des Containers fest, die Flex-Elemente sind. Die Liste selbst ist eine Block-Box und — ähnlich wie der Absatz — erweitert sich auf die volle Containerbreite und bricht in eine neue Zeile um.

- Ein Block-Abschnitt, in dem sich zwei `<span>`-Elemente befinden. Diese Elemente wären normalerweise `inline`, jedoch hat eines der Elemente die Klasse "block", die auf `display: block` gesetzt wird.

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

- Die beiden Absätze sind beide auf `display: inline` gesetzt. Der inline Flex-Container und die Absätze laufen alle zusammen in einer Linie, anstatt in neue Zeilen umgebrochen zu werden (wie sie es tun würden, wenn sie als Block-Elemente dargestellt würden).

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

Die wichtigste Sache, die Sie sich jetzt merken sollten: Das Ändern des Wertes der `display`-Eigenschaft kann ändern, ob der äußere Anzeigetyp einer Box Block oder Inline ist. Dadurch ändert sich die Art und Weise, wie sie zusammen mit anderen Elementen im Layout angezeigt wird.

## Was ist das CSS-Boxmodell?

Das CSS-Boxmodell als Ganzes gilt für Block-Boxen und definiert, wie die verschiedenen Teile einer Box — Rand, Rahmen, Auffüllung und Inhalt — zusammenarbeiten, um eine Box auf einer Seite sichtbar zu machen. Inline-Boxen nutzen nur _einige_ der im Boxmodell definierten Verhaltensweisen.

Um Komplexität hinzuzufügen, gibt es ein Standard- und ein alternatives Boxmodell. Standardmäßig nutzen Browser das Standard-Boxmodell.

### Teile einer Box

Eine Block-Box in CSS besteht aus:

- **Inhaltsfeld**: Der Bereich, in dem Ihr Inhalt angezeigt wird; seine Größe können Sie mit Eigenschaften wie {{cssxref("width")}} und {{cssxref("height")}} festlegen.
- **Auffüllungsfeld**: Die Auffüllung sitzt als Leerraum um den Inhalt herum; ihre Größe können Sie mit {{cssxref("padding")}} und verwandten Eigenschaften festlegen.
- **Rahmenfeld**: Das Rahmenfeld umschließt den Inhalt und jegliche Auffüllung; seine Größe können Sie mit {{cssxref("border")}} und verwandten Eigenschaften festlegen.
- **Randfeld**: Der Rand ist die äußerste Schicht, die Inhalt, Auffüllung und Rahmen als Leerraum zwischen dieser Box und anderen Elementen umschließt; seine Größe können Sie mit {{cssxref("margin")}} und verwandten Eigenschaften festlegen.

Das folgende Diagramm zeigt diese Schichten:

![Diagramm des Boxmodells](box-model.png)

### Das Standard-CSS-Boxmodell

Im Standard-Boxmodell, wenn Sie `width`- und `height`-Eigenschaftswerte auf einer Box festlegen, definieren diese Werte die `width` und `height` des _Inhaltsfelds_. Jegliche Auffüllungen und Rahmen werden dann zu diesen Dimensionen hinzugefügt, um die Gesamtgröße zu erhalten, die die Box einnimmt (siehe das Bild unten).

Wenn wir davon ausgehen, dass eine Box das folgende CSS hat:

```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

Der _tatsächlich_ von der Box genutzte Raum beträgt 410px in der Breite (350 + 25 + 25 + 5 + 5) und 210px in der Höhe (150 + 25 + 25 + 5 + 5).

![Zeigt die Größe der Box, wenn das Standard-Boxmodell verwendet wird.](standard-box-model.png)

> [!NOTE]
> Der Rand wird nicht zur tatsächlichen Größe der Box hinzugerechnet — sicher, er beeinflusst den gesamten Raum, den die Box auf der Seite einnimmt, aber nur den Raum außerhalb der Box. Der Bereich der Box endet am Rahmen — er erstreckt sich nicht in den Rand hinein.

### Das alternative CSS-Boxmodell

Im alternativen Boxmodell ist jede Breite die Breite der sichtbaren Box auf der Seite. Die Breite des Inhaltsbereichs ist diese Breite minus der Breite für Auffüllung und Rahmen (siehe Bild unten). Es ist nicht nötig, den Rahmen und die Auffüllung zusammenzuzählen, um die tatsächliche Größe der Box zu erhalten.

Um das alternative Modell für ein Element zu aktivieren, setzen Sie `box-sizing: border-box` darauf:

```css
.box {
  box-sizing: border-box;
}
```

Wenn wir davon ausgehen, dass die Box das gleiche CSS wie oben hat:

```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

Jetzt beträgt der _tatsächlich_ von der Box genutzte Raum 350px in der Inline-Richtung und 150px in der Block-Richtung.

![Zeigt die Größe der Box, wenn das alternative Boxmodell verwendet wird.](alternate-box-model.png)

Um das alternative Boxmodell für alle Ihre Elemente zu verwenden (was unter Entwicklern eine gängige Wahl ist), setzen Sie die `box-sizing`-Eigenschaft beim `<html>`-Element und alle anderen Elemente auf den Wert vererben:

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

Um die zugrundeliegende Idee zu verstehen, können Sie den [CSS-Tricks-Artikel über box-sizing](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/) lesen.

## Spielen mit Boxmodellen

Im folgenden Beispiel sehen Sie zwei Boxen. Beide haben eine Klasse von `.box`, die ihnen die gleiche `width`, `height`, `margin`, `border` und `padding` gibt. Der einzige Unterschied ist, dass die zweite Box so eingestellt wurde, dass das alternative Boxmodell verwendet wird.
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
> Sie können hier eine Lösung für diese Aufgabe finden: [hier](https://github.com/mdn/css-examples/blob/main/learn/solutions.md#the-box-model).

### Verwenden Sie die Browser-Entwicklertools, um das Boxmodell anzuzeigen

Ihre [Browser-Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) können das Verständnis des Boxmodells wesentlich erleichtern — sie können Ihnen die Größe des Elements sowie dessen Rand, Auffüllung und Rahmen anzeigen. Ein Element auf diese Weise zu inspizieren ist eine großartige Möglichkeit, herauszufinden, ob Ihre Box wirklich die Größe hat, die Sie denken, dass sie es ist!

![Inspektion des Boxmodells eines Elements mit den Firefox-Entwicklertools](box-model-devtools.png)

## Ränder, Auffüllung und Rahmen

Sie haben die Eigenschaften {{cssxref("margin")}}, {{cssxref("padding")}}, und {{cssxref("border")}} bereits im obigen Beispiel gesehen. Die in diesem Beispiel verwendeten Eigenschaften sind **Kurzformen** und ermöglichen es uns, alle vier Seiten der Box auf einmal festzulegen. Diese Kurzformen haben auch entsprechende Langformen, die eine individuelle Kontrolle über die verschiedenen Seiten der Box ermöglichen.

Lassen Sie uns diese Eigenschaften im Detail erkunden.

### Rand

Der Rand ist ein unsichtbarer Raum um Ihre Box. Er stößt andere Elemente von der Box weg. Ränder können positive oder negative Werte haben. Wenn Sie einen negativen Rand auf einer Seite Ihrer Box setzen, kann dies dazu führen, dass sie andere Dinge auf der Seite überlappt. Egal, ob Sie das Standard- oder das alternative Boxmodell verwenden, der Rand wird immer nach der Berechnung der Größe der sichtbaren Box hinzugefügt.

Wir können alle Ränder eines Elements mit der {{cssxref("margin")}}-Eigenschaft auf einmal kontrollieren oder jede Seite einzeln mit den entsprechenden Langform-Eigenschaften:

- {{cssxref("margin-top")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}

Im folgenden Beispiel können Sie die Randwerte ändern, um zu sehen, wie die Box durch den Rand verschoben wird, der Raum schafft oder entfernt (falls es ein negativer Rand ist) zwischen diesem Element und dem enthaltenen Element.

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

Je nachdem, ob zwei Elemente, deren Ränder sich berühren, positive oder negative Ränder haben, sind die Ergebnisse unterschiedlich:

- Zwei positive Ränder werden kombiniert und ergeben einen Rand. Seine Größe wird gleich dem größten individuellen Rand sein.
- Zwei negative Ränder werden zusammenfallen und der kleinste (am weitesten von Null entfernte) Wert wird verwendet.
- Wenn ein Rand negativ ist, wird sein Wert _vom Gesamtwert subtrahiert_.

Im folgenden Beispiel haben wir zwei Absätze. Der obere Absatz hat einen `margin-bottom` von 50 Pixeln, der andere hat einen `margin-top` von 30 Pixeln. Die Ränder sind zusammengefallen, sodass der tatsächliche Rand zwischen den Boxen 50 Pixel und nicht die Summe der beiden Ränder beträgt.

Sie können dies testen, indem Sie den `margin-top` des zweiten Absatzes auf `0` setzen. Der sichtbare Rand zwischen den beiden Absätzen ändert sich nicht — er behält die 50 Pixel, die im `margin-bottom` des ersten Absatzes festgelegt sind. Wenn Sie ihn auf `-10px` setzen, sehen Sie, dass der Gesamtwert auf `40px` reduziert wird — er subtrahiert vom `50px`.

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

Eine Reihe von Regeln bestimmt, wann Ränder zusammenfallen und wann nicht. Für weitere Informationen siehe die detaillierte Seite über [Zusammenfallende Ränder meistern](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing). Das Wichtigste, woran Sie sich erinnern sollten, ist, dass Zusammenfallen von Rändern passiert, wenn Sie Raum mit Rändern schaffen und nicht den Raum erhalten, den Sie erwarten.

### Rahmen

Der Rahmen wird zwischen dem Rand und der Auffüllung einer Box gezogen. Wenn Sie das Standard-Boxmodell verwenden, wird die Größe des Rahmens zur `width` und `height` des Inhaltsfelds hinzugefügt. Wenn Sie das alternative Boxmodell verwenden, wird das Inhaltsfeld umso kleiner, je größer der Rahmen ist, da der Rahmen einen Teil der verfügbaren `width` und `height` des Elementfelds einnimmt.

Zum Gestalten von Rahmen gibt es eine große Anzahl von Eigenschaften — es gibt vier Rahmen, und jeder Rahmen hat einen Stil, eine Breite und eine Farbe, die wir manipulieren möchten.

Sie können die Breite, den Stil oder die Farbe aller vier Rahmen auf einmal mit der {{cssxref("border")}}-Eigenschaft einstellen.

Um die Eigenschaften jeder Seite individuell festzulegen, verwenden Sie:

- {{cssxref("border-top")}}
- {{cssxref("border-right")}}
- {{cssxref("border-bottom")}}
- {{cssxref("border-left")}}

Um die Breite, den Stil oder die Farbe aller Seiten festzulegen, verwenden Sie:

- {{cssxref("border-width")}}
- {{cssxref("border-style")}}
- {{cssxref("border-color")}}

Um die Breite, den Stil oder die Farbe einer einzelnen Seite festzulegen, verwenden Sie eine der spezifischeren Langform-Eigenschaften:

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

Im folgenden Beispiel haben wir verschiedene Kurzformen und Langformen verwendet, um Rahmen zu erstellen. Spielen Sie mit den verschiedenen Eigenschaften, um zu überprüfen, ob Sie verstehen, wie sie funktionieren. Die MDN-Seiten zu den Rahmen-Eigenschaften geben Ihnen Informationen über die verschiedenen verfügbaren Rahmenstile.

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

### Auffüllung

Die Auffüllung sitzt zwischen dem Rahmen und dem Inhaltsbereich und wird verwendet, um den Inhalt vom Rahmen weg zu schieben. Anders als Ränder können Sie keine negative Auffüllung haben. Jeder auf Ihr Element angewendete Hintergrund wird hinter der Auffüllung angezeigt.

Die {{cssxref("padding")}}-Eigenschaft kontrolliert die Auffüllung auf allen Seiten eines Elements. Um jede Seite einzeln zu kontrollieren, verwenden Sie diese Langformen:

- {{cssxref("padding-top")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}

Im folgenden Beispiel können Sie die Werte für die Auffüllung auf der Klasse `.box` ändern, um zu sehen, dass dies ändert, wo der Text in Bezug auf die Box beginnt. Sie können auch die Auffüllung auf der Klasse `.container` ändern, um Raum zwischen dem Container und der Box zu schaffen. Sie können die Auffüllung auf jedem Element ändern, um Raum zwischen seinem Rahmen und dem Inhalt des Elements zu schaffen.

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

All das oben Gesagte gilt vollständig für Block-Boxen. Einige der Eigenschaften können auch auf Inline-Boxen angewendet werden, wie z.B. die durch ein `<span>`-Element erstellten.

Im folgenden Beispiel haben wir ein `<span>`-Element innerhalb eines Absatzes. Wir haben ihm eine `width`, `height`, `margin`, `border` und `padding` zugewiesen. Sie können sehen, dass die Breite und Höhe ignoriert werden. Der obere und untere Rand, die Auffüllung und der Rahmen werden respektiert, ändern jedoch nicht die Beziehung anderer Inhalte zu unserer Inline-Box. Die Auffüllung und der Rahmen überlappen sich mit anderen Wörtern im Absatz. Die linke und rechte Auffüllung, die Ränder und Rahmen bewegen andere Inhalte von der Box weg.

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

`display: inline-block` ist ein spezieller Wert für `display`, der einen Mittelweg zwischen `inline` und `block` bietet. Verwenden Sie ihn, wenn Sie nicht möchten, dass ein Element in eine neue Zeile umbricht, aber möchten, dass `width` und `height` respektiert werden und das Überlappen, das oben gesehen wurde, vermieden wird.

Ein Element mit `display: inline-block` macht einen Teil der Block-Sachen, die wir bereits kennen:

- Die Eigenschaften `width` und `height` werden respektiert.
- `padding`, `margin` und `border` werden dazu führen, dass andere Elemente von der Box weggeschoben werden.

Es bricht jedoch nicht in eine neue Zeile um und wird nur größer als sein Inhalt, wenn Sie explizit `width` und `height`-Eigenschaften hinzufügen.

Im nächsten Beispiel haben wir `display: inline-block` auf unser `<span>`-Element hinzugefügt. Versuchen Sie, dies in `display: block` zu ändern oder die Zeile vollständig zu entfernen, um den Unterschied in den Anzeigemodellen zu sehen:

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

Wo dies nützlich sein kann, ist, wenn Sie einem Link einen größeren Trefferbereich geben möchten, indem Sie `padding` hinzufügen. `<a>` ist ein Inline-Element wie `<span>`; Sie können `display: inline-block` verwenden, um die Auffüllung darauf einstellen zu können, was es einem Benutzer erleichtert, den Link zu klicken.

Dies sehen Sie ziemlich häufig in Navigationsleisten. Die unten stehende Navigation wird in einer Reihe mit Flexbox angezeigt, und wir haben dem `<a>`-Element Auffüllung hinzugefügt, da wir die `background-color` ändern möchten, wenn der `<a>`-Element angehoben wird. Die Auffüllung scheint sich mit dem Rahmen auf dem `<ul>`-Element zu überlappen. Dies liegt daran, dass `<a>` ein Inline-Element ist.

Fügen Sie `display: inline-block;` der Regel mit dem `.links-list a` Selektor hinzu, und Sie werden sehen, wie es dieses Problem behebt, indem die Auffüllung von anderen Elementen respektiert wird:

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Das Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model).

## Zusammenfassung

Das ist das meiste, was Sie über das Boxmodell verstehen müssen. Möglicherweise möchten Sie in der Zukunft zu dieser Lektion zurückkehren, wenn Sie jemals verwirrt darüber sind, wie groß Boxen in Ihrem Layout sind.

Im nächsten Artikel werden wir uns damit befassen, wie CSS Konflikte handhabt — wenn mehrere Regeln dasselbe Element auswählen, welche Stile werden angewendet?

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics")}}
