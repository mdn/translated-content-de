---
title: Das Box-Modell
short-title: Box model
slug: Learn_web_development/Core/Styling_basics/Box_model
l10n:
  sourceCommit: 6f0bcfb2316085efc3f9704fc0eac46f87c3315c
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors", "Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics")}}

Alles in CSS hat ein Kästchen darum, und das Verständnis dieser Kästchen ist der Schlüssel, um mit CSS komplexere Layouts zu erstellen oder Elemente in Relation zueinander auszurichten. In dieser Lektion werden wir uns das CSS _Box-Modell_ ansehen. Sie werden verstehen, wie es funktioniert und welcher Fachbegriffe damit verbunden sind.

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
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Block- und Inline-Elemente</li>
          <li>Die verschiedenen Kästchen, aus denen ein Element besteht, und wie man sie stilisiert — Inhalt, Rand, Rahmen, Abstand.</li>
          <li>Das alternative Box-Modell (zugänglich über <code>box-sizing: border-box</code>) und wie es sich vom regulären Box-Modell unterscheidet.</li>
          <li>Kollabierende Ränder.</li>
          <li>Grundlegende Anzeigewerte und wie sie das Verhalten von Boxen beeinflussen — <code>block</code>, <code>inline</code>, <code>inline-block</code>, <code>none</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Block- und Inline-Kästchen

In CSS haben wir mehrere Arten von Kästchen, die im Allgemeinen in die Kategorien **Block-Kästchen** und **Inline-Kästchen** passen. Der Typ bezieht sich darauf, wie sich das Kästchen im Seitenfluss und in Bezug zu anderen Kästchen auf der Seite verhält. Kästchen haben einen **inneren Anzeigetyp** und einen **äußeren Anzeigetyp**.

Im Allgemeinen können Sie verschiedene Werte für den Anzeigetyp mit der {{cssxref("display")}} Eigenschaft festlegen.

Wenn ein Kästchen einen Anzeigewert von `block` hat, dann:

- Wird das Kästchen in einer neuen Zeile beginnen.
- Die {{cssxref("width")}} und {{cssxref("height")}} Eigenschaften werden berücksichtigt.
- Abstände, Rand und Rahmen bewirken, dass andere Elemente vom Kästchen weggeschoben werden.
- Wenn {{cssxref("width")}} nicht angegeben ist, wird sich das Kästchen in der Inline-Richtung erstrecken, um den verfügbaren Raum in seinem Container auszufüllen. In den meisten Fällen wird das Kästchen so breit wie sein Container und füllt 100% des verfügbaren Raums aus.

Einige HTML-Elemente, wie `<h1>` und `<p>`, verwenden standardmäßig `block` als ihren äußeren Anzeigetyp.

Wenn ein Kästchen einen Anzeigewert von `inline` hat, dann:

- Wird das Kästchen nicht in einer neuen Zeile beginnen.
- Die {{cssxref("width")}}, {{cssxref("height")}}, und obere und untere Ränder haben keine Wirkung.
- **Oben und unten** Abstände und Rahmen ändern die Größe des Kästchens, ohne die Position des umgebenden Inhalts zu beeinflussen, was zu Überlappungen führen kann.
- **Links und rechts** Abstände, Ränder und Rahmen beeinflussen die Position des umgebenden Inline-Inhalts.

Einige HTML-Elemente, wie `<a>`, `<span>`, `<em>` und `<strong>` verwenden standardmäßig `inline` als ihren äußeren Anzeigetyp.

Block- und Inline-Layout ist die standardmäßige Arbeitsweise im Web. Standardmäßig und ohne weitere Anweisung werden die Elemente innerhalb eines Kästchens auch im **[normalen Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow)** angeordnet und verhalten sich wie Block- oder Inline-Kästchen.

## Innere und äußere Anzeigetypen

`block` und `inline` Anzeigewerte werden als **äußere Anzeigetypen** bezeichnet — sie beeinflussen, wie das Kästchen in Bezug zu anderen Kästchen um es herum angeordnet ist. Kästchen haben auch einen **inneren Anzeigetyp**, der vorschreibt, wie Elemente in diesem Kästchen angeordnet sind.

Sie können den inneren Anzeigetyp ändern, indem Sie einen inneren Anzeigewert festlegen, zum Beispiel `display: flex;`. Das Element verwendet weiterhin den äußeren Anzeigetyp `block`, aber dies ändert den inneren Anzeigetyp zu `flex`. Alle direkten Kinder dieses Kästchens werden zu Flex-Elementen und verhalten sich entsprechend der [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)-Spezifikation.

Wenn Sie lernen, sich mit CSS-Layout im Detail zu befassen, werden Sie auf [`flex`](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) stoßen, sowie auf verschiedene andere innere Werte, die Ihre Kästchen haben können, zum Beispiel [`grid`](/de/docs/Learn_web_development/Core/CSS_layout/Grids).

Machen Sie sich jetzt noch keine großen Sorgen über die innere und äußere Terminologie; dies ist das, was intern passiert, und wir erwähnen es hier, falls Sie es anderswo sehen. Im Allgemeinen werden Sie nur mit einzelnen `display`-Werten umgehen, und es wird nicht notwendig sein, viel darüber nachzudenken.

## Beispiele für verschiedene Anzeigetypen

Das Beispiel unten hat drei verschiedene HTML-Elemente, die alle einen äußeren Anzeigetyp von `block` haben.

- Ein Absatz mit einem Rahmen, der in CSS hinzugefügt wurde. Der Browser rendert dies als Block-Kästchen. Der Absatz beginnt in einer neuen Zeile und erstreckt sich horizontal, um die gesamte verfügbare Breite auszufüllen.

- Eine Liste, die mit `display: flex` layoutet ist. Dies etabliert ein Flex-Layout für die Kinder des Containers, die Flex-Elemente sind, die standardmäßig in einer Reihe angeordnet sind. Die Liste selbst ist ein Block-Kästchen und — wie der Absatz — erweitert sie sich auf die volle Containerbreite und bricht in eine neue Zeile um.

- Ein Block-Absatz, in dem sich zwei `<span>` Elemente befinden. Diese Elemente wären normalerweise `inline`, jedoch hat eines der Elemente eine Klasse von `block` und wird auf `display: block` gesetzt. Dadurch beginnt dieses einzelne Wort in einer neuen Zeile, die sich über die volle Breite seines Eltern-Elements erstreckt.

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

- Die `<span>` Elemente im ersten Absatz sind standardmäßig inline und erzwingen daher keine Zeilenumbrüche.

- Das `<ul>` Element, das auf `display: inline-flex` gesetzt ist, erstellt ein Inline-Kästchen, das einige Flex-Elemente enthält.

- Die beiden Absätze sind beide auf `display: inline` gesetzt. Der Inline-Flex-Container und die Absätze laufen alle in einer Zeile zusammen, anstatt eine neue Zeile zu brechen (wie sie es tun würden, wenn sie als Block-Elemente angezeigt werden würden).

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

Der wichtigste Punkt, den Sie sich merken sollten, ist: Die Änderung des Wertes der `display`-Eigenschaft kann ändern, ob der äußere Anzeigetyp eines Kästchens block oder inline ist. Dies ändert die Art und Weise, wie es zusammen mit anderen Elementen im Layout angezeigt wird.

## Was ist das CSS-Box-Modell?

Das CSS-Box-Modell als Ganzes betrifft Block-Kästchen und definiert, wie die verschiedenen Teile eines Kästchens — Rand, Rahmen, Abstand und Inhalt — zusammenarbeiten, um ein Kästchen zu erstellen, das Sie auf einer Seite sehen können. Inline-Kästchen verwenden nur _einen Teil_ des im Box-Modell definierten Verhaltens.

Um die Komplexität zu erhöhen, gibt es ein Standard- und ein alternatives Box-Modell. Standardmäßig verwenden Browser das Standard-Box-Modell.

### Teile eines Kästchens

Das CSS-Block-Kästchen besteht aus:

- **Inhaltskästchen**: Der Bereich, in dem Ihr Inhalt angezeigt wird; er wird mit Eigenschaften wie {{cssxref("width")}} und {{cssxref("height")}} dimensioniert.
- **Abstandskästchen**: Der Abstand sitzt als Freiraum um den Inhalt herum; bearbeiten Sie ihn mit {{cssxref("padding")}} und verwandten Eigenschaften.
- **Rahmenkästchen**: Der Rahmen umgibt den Inhalt und jeden Abstand; dimensionieren Sie ihn mit {{cssxref("border")}} und verwandten Eigenschaften.
- **Randkästchen**: Der Rand ist die äußerste Schicht, die den Inhalt, Abstand und Rahmen umgibt, als Weißraum zwischen diesem Kästchen und anderen Elementen; dimensionieren Sie ihn mit {{cssxref("margin")}} und verwandten Eigenschaften.

Das untenstehende Diagramm zeigt diese Schichten:

![Diagramm des Box-Modells](box-model.png)

### Das Standard-CSS-Box-Modell

Im Standard-Box-Modell definieren, wenn Sie `width`- und `height`-Eigenschaften auf einem Kästchen setzen, diese Werte die `width` und `height` des _Inhaltskästchens_. Jeder Abstand und Rahmen wird dann zu diesen Abmessungen hinzugefügt, um die Gesamtgröße des vom Kästchen eingenommenen Raums zu erhalten (siehe Bild unten).

Wenn wir annehmen, dass ein Kästchen das folgende CSS hat:

```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

Der _tatsächliche_ Platz, den das Kästchen einnimmt, wird `410px` breit (350 + 25 + 25 + 5 + 5) und `210px` hoch (150 + 25 + 25 + 5 + 5) sein.

![Zeigt die Größe des Kästchens, wenn das Standard-Box-Modell verwendet wird.](standard-box-model.png)

> [!NOTE]
> Der Rand wird nicht zur tatsächlichen Größe des Kästchens gezählt — sicher, er beeinflusst den gesamten Raum, den das Kästchen auf der Seite einnehmen wird, aber nur den Raum außerhalb des Kästchens. Der Bereich des Kästchens endet am Rahmen — er erstreckt sich nicht in den Rand.

### Das alternative CSS-Box-Modell

Im alternativen Box-Modell ist jede Breite die Breite des sichtbaren Kästchens auf der Seite. Die Breite des Inhaltsbereichs ist jene Breite minus der Breite für den Abstand und den Rahmen (siehe Bild unten). Dies ist praktisch, da es nicht nötig ist, Rahmen und Abstand zusammenzuzählen, um die tatsächliche Größe des Kästchens zu erhalten.

Um das alternative Modell für ein Element einzuschalten, setzen Sie `box-sizing: border-box` darauf:

```css
.box {
  box-sizing: border-box;
}
```

Wenn wir annehmen, das Kästchen hat dasselbe CSS wie oben:

```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

Der _tatsächliche_ Raum, den das Kästchen jetzt einnimmt, wird in der Inline-Richtung `350px` und in der Block-Richtung `150px` sein.

![Zeigt die Größe des Kästchens, wenn das alternative Box-Modell verwendet wird.](alternate-box-model.png)

Um das alternative Box-Modell für alle Ihre Elemente zu verwenden (was eine gängige Wahl unter Entwicklern ist), setzen Sie die `box-sizing` Eigenschaft auf das `<html>` Element und alle anderen Elemente erben diesen Wert:

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

Um die zugrunde liegende Idee zu verstehen, können Sie [den Artikel auf CSS Tricks über box-sizing](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/) lesen.

## Mit Box-Modellen spielen

Im Beispiel unten können Sie zwei Kästchen sehen. Beide haben eine Klasse von `.box`, die ihnen dieselbe `width`, `height`, `margin`, `border`, und `padding` gibt. Der einzige Unterschied ist, dass das zweite Kästchen auf das alternative Box-Modell gesetzt wurde.
Können Sie die Größe des zweiten Kästchens ändern (indem Sie CSS zur `.alternate`-Klasse hinzufügen), um es in Breite und Höhe dem ersten Kästchen anzupassen?

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
> Sie können eine Lösung für diese Aufgabe [in unserem css-examples Repo](https://github.com/mdn/css-examples/blob/main/learn/solutions.md#the-box-model) finden.

### Verwenden von Browser DevTools, um das Box-Modell anzuzeigen

Ihre [Entwickler-Tools des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) können das Verständnis des Box-Modells erheblich erleichtern — sie können Ihnen die Größe des Elements plus dessen Rand, Abstand und Rahmen anzeigen. Das Inspektieren eines Elements auf diese Weise ist eine großartige Möglichkeit, herauszufinden, ob Ihr Kästchen wirklich die Größe hat, die Sie glauben, dass es hat!

![Inspektion des Box-Modells eines Elements mit Firefox DevTools](box-model-devtools.png)

## Ränder, Abstände und Rahmen

Sie haben bereits die Eigenschaften {{cssxref("margin")}}, {{cssxref("padding")}}, und {{cssxref("border")}} in Aktion im obigen Beispiel gesehen. Die in diesem Beispiel verwendeten Eigenschaften sind **Kurzschreibweisen** und ermöglichen es uns, alle vier Seiten des Kästchens auf einmal einzustellen. Diese Kurzschreibformen haben auch entsprechende Langschreibformen, die die Kontrolle über die verschiedenen Seiten des Kästchens einzeln ermöglichen.

Lassen Sie uns diese Eigenschaften im Detail erkunden.

### Rand

Der Rand ist ein unsichtbarer Raum um Ihr Kästchen. Er schiebt andere Elemente vom Kästchen weg. Ränder können positive oder negative Werte haben. Das Setzen eines negativen Rands auf eine Seite Ihres Kästchens kann dazu führen, dass es über andere Dinge auf der Seite überlappt. Unabhängig davon, ob Sie das Standard- oder das alternative Box-Modell verwenden, wird der Rand immer nach der Berechnung der Größe des sichtbaren Kästchens hinzugefügt.

Wir können alle Ränder eines Elements auf einmal mit der {{cssxref("margin")}} Eigenschaft steuern oder jede Seite einzeln mit den entsprechenden Langschreib-Eigenschaften:

- {{cssxref("margin-top")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}

#### Mit Rändern spielen

Bearbeiten Sie das Beispiel unten. Versuchen Sie, die Randwerte zu ändern, um zu sehen, wie das Kästchen aufgrund des Rands umhergeschoben wird, der Platz schafft oder entfernt (falls es sich um einen negativen Rand handelt) zwischen diesem Element und dem enthaltenen Element.

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

- Zwei positive Ränder werden kombiniert zu einem einzigen Rand. Seine Größe entspricht dem größten individuellen Rand.
- Zwei negative Ränder werden kollabieren und der kleinste (am weitesten von null entfernt) Wert wird verwendet.
- Wenn ein Rand negativ ist, wird sein Wert von der Gesamtgröße _abgezogen_.

Im Beispiel unten haben wir zwei Absätze. Der obere Absatz hat einen `margin-bottom` von 50 Pixeln, der andere hat einen `margin-top` von 30 Pixeln. Die Ränder sind kollabiert, sodass der tatsächliche Abstand zwischen den Kästchen 50 Pixel beträgt und nicht die Summe der beiden Ränder.

Sie können dies testen, indem Sie den `margin-top` des zweiten Absatzes auf `0` setzen. Der sichtbare Rand zwischen den beiden Absätzen wird sich nicht ändern — er behält die in `margin-bottom` des ersten Absatzes festgelegten 50 Pixel bei. Wenn Sie ihn auf `-10px` setzen, werden Sie sehen, dass der Gesamtabstand `40px` beträgt — er zieht von den `50px` ab.

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

Eine Reihe von Regeln diktieren, wann Ränder kollabieren und wann nicht. Für weitere Informationen siehe die detaillierte Seite über [das Beherrschen des Rand-Kollapses](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing). Das Wichtigste, an das man sich erinnern sollte, ist, dass Margin collapsing eine Sache ist, die passiert, wenn man mit Rändern Platz schafft und nicht den erwarteten Raum bekommt.

### Rahmen

Der Rahmen wird zwischen dem Rand und dem Abstand eines Kästchens gezeichnet. Wenn Sie das Standard-Box-Modell verwenden, wird die Größe des Rahmens zur `width` und `height` des Inhaltskästchens hinzugefügt. Wenn Sie das alternative Box-Modell verwenden, dann je größer der Rahmen ist, desto kleiner ist das Inhaltskästchen, da der Rahmen einen Teil dieser verfügbaren `width` und `height` des Elemente-Kästchens einnimmt.

Für das Styling von Rahmen gibt es eine große Anzahl von Eigenschaften — es gibt vier Rahmen, und jeder Rahmen hat einen Stil, eine Breite und eine Farbe, die wir möglicherweise manipulieren möchten.

Sie können die Breite, den Stil oder die Farbe aller vier Rahmen auf einmal mit der {{cssxref("border")}} Eigenschaft festlegen.

Um die Eigenschaften jeder Seite einzeln festzulegen, verwenden Sie:

- {{cssxref("border-top")}}
- {{cssxref("border-right")}}
- {{cssxref("border-bottom")}}
- {{cssxref("border-left")}}

Um die Breite, den Stil oder die Farbe aller Seiten festzulegen, verwenden Sie:

- {{cssxref("border-width")}}
- {{cssxref("border-style")}}
- {{cssxref("border-color")}}

Um die Breite, den Stil oder die Farbe einer einzelnen Seite festzulegen, verwenden Sie eine der detaillierteren Langschreib-Eigenschaften:

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

#### Mit Rahmen spielen

Im Beispiel unten haben wir verschiedene Kurz- und Langschreibweisen verwendet, um Rahmen zu erstellen. Bearbeiten Sie die verschiedenen Eigenschaften, um zu überprüfen, ob Sie verstehen, wie sie funktionieren. Die MDN-Seiten zu den Rahmen-Eigenschaften geben Ihnen Informationen über die verschiedenen verfügbaren Rahmenstile.

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

### Abstand

Der Abstand sitzt zwischen dem Rahmen und dem Inhaltsbereich und wird verwendet, um den Inhalt vom Rahmen wegzuschieben. Im Gegensatz zu Rändern können Sie keinen negativen Abstand haben. Jeder Hintergrund, der auf Ihr Element angewendet wird, wird hinter dem Abstand angezeigt.

Die {{cssxref("padding")}}-Eigenschaft kontrolliert den Abstand auf allen Seiten eines Elements. Um jede Seite einzeln zu kontrollieren, verwenden Sie diese Langschreib-Eigenschaften:

- {{cssxref("padding-top")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}

#### Mit Abständen spielen

Im Beispiel unten bearbeiten Sie die Werte für den Abstand der Klasse `.box` und sehen, wie dies ändert, wo der Text in Bezug auf das Kästchen beginnt. Sie können auch den Abstand auf der Klasse `.container` ändern, um Platz zwischen dem Container und dem Kästchen zu schaffen. Sie können den Abstand auf jedem Element ändern, um Platz zwischen dessen Rahmen und dem, was sich im Inneren des Elements befindet, zu schaffen.

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

All das oben Gesagte gilt vollständig für Block-Kästchen. Einige der Eigenschaften können auch auf Inline-Kästchen angewendet werden, wie sie durch ein `<span>`-Element erstellt werden.

Im Beispiel unten haben wir ein `<span>`-Element innerhalb eines Absatzes. Wir haben eine `width`, `height`, `margin`, `border` und `padding` darauf angewendet. Sie können sehen, dass die Breite, Höhe und die oberen und unteren Ränder das `<span>` nicht beeinflussen. Die oberen und unteren Abstände und Rahmen verändern die Größe des Inline-Kästchens, aber beeinflussen nicht die Position des umgebenden Inhalts. Stattdessen überlappen die oberen und unteren Abstände und Rahmen andere Wörter im Absatz. Nur die linken und rechten Abstände, Ränder und Rahmen beeinflussen die Position des Textes, der das `<span>` umgibt.

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

`display: inline-block` ist ein spezieller Wert von `display`, der einen Mittelweg zwischen `inline` und `block` bietet. Verwenden Sie es, wenn Sie nicht möchten, dass ein Element in einer neuen Zeile beginnt, aber trotzdem `width` und `height` respektiert werden sollen und Sie die oben gesehene Überlappung vermeiden möchten.

Ein Element mit `display: inline-block` tut ein Teil der Block-Dinge, die wir bereits kennen:

- Die `width`- und `height`-Eigenschaften werden respektiert.
- `padding`, `margin`, und `border` werden andere Elemente vom Kästchen wegschieben.

Es bricht jedoch nicht in eine neue Zeile um und wird nur größer als sein Inhalt, wenn Sie ausdrücklich `width` und `height`-Eigenschaften hinzufügen.

### Mit Inline-Block spielen

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

Dies kann nützlich sein, wenn Sie einem Link eine größere Trefferfläche geben möchten, indem Sie `padding` hinzufügen. `<a>` ist ein Inline-Element wie `<span>`; Sie können `display: inline-block` verwenden, um den Abstand darauf festlegen zu können, was es für einen Benutzer einfacher macht, auf den Link zu klicken.

Sie sehen dies ziemlich häufig in Navigationsleisten. Die folgende Navigation wird in einer Zeile mit Flexbox angezeigt, und wir haben dem `<a>`-Element einen Abstand hinzugefügt, da wir die `background-color` ändern möchten, wenn das `<a>` überfahren wird. Der Abstand scheint sich über den Rahmen des `<ul>`-Elements zu überlappen. Dies liegt daran, dass das `<a>` ein Inline-Element ist.

Fügen Sie `display: inline-block;` zur Regel mit dem Selektor `.links-list a` hinzu, und Sie werden sehen, wie dies das Problem behebt, indem es den Abstand von anderen Elementen respektieren lässt:

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

Das ist das meiste, was Sie über das Box-Modell verstehen müssen. Möglicherweise möchten Sie zu dieser Lektion zurückkehren, falls Sie jemals verwirrt darüber sind, wie groß Kästchen in Ihrem Layout sind.

Im nächsten Artikel werden wir Ihnen einige Tests geben, die Sie verwenden können, um zu überprüfen, wie gut Sie die Informationen über das CSS-Box-Modell verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors", "Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics")}}
