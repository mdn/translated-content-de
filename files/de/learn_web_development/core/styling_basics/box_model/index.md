---
title: Das Box-Modell
slug: Learn_web_development/Core/Styling_basics/Box_model
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics")}}

Alles in CSS hat eine Umrandung, und das Verstehen dieser Boxen ist der Schlüssel, um komplexere Layouts mit CSS erstellen oder Elemente mit anderen Elementen ausrichten zu können. In dieser Lektion werden wir uns das CSS-_Box-Modell_ ansehen. Sie werden verstehen, wie es funktioniert und die Terminologie, die damit verbunden ist.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes HTML (studieren
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
          <li>Die verschiedenen Boxen, aus denen ein Element besteht, und wie man sie stylt — Inhalt, Rand, Rahmen, Auffüllung.</li>
          <li>Das alternative Box-Modell (zugänglich über <code>box-sizing: border-box</code>) und wie es sich vom regulären Box-Modell unterscheidet.</li>
          <li>Margin-Collapsing.</li>
          <li>Grundlegende Display-Werte und wie sie das Verhalten der Box beeinflussen — <code>block</code>, <code>inline</code>, <code>inline-block</code>, <code>none</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Block- und Inline-Boxen

In CSS haben wir mehrere Arten von Boxen, die im Allgemeinen in die Kategorien **Block-Boxen** und **Inline-Boxen** passen. Der Typ bezieht sich darauf, wie sich die Box im Hinblick auf den Seitenfluss und in Bezug auf andere Boxen auf der Seite verhält. Boxen haben einen **inneren Anzeige-Typ** und einen **äußeren Anzeige-Typ**.

Im Allgemeinen können Sie verschiedene Werte für den Anzeigetyp mit der {{cssxref("display")}}-Eigenschaft festlegen, die verschiedene Werte haben kann.

Wenn eine Box einen Anzeigewert von `block` hat, dann:

- Bricht die Box auf eine neue Zeile um.
- Die Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} werden berücksichtigt.
- Padding, Margin und Border verursachen, dass andere Elemente von der Box weggedrückt werden.
- Wenn {{cssxref("width")}} nicht angegeben ist, wird sich die Box in der Inline-Richtung erstrecken, um den in ihrem Container verfügbaren Platz zu füllen. In den meisten Fällen wird die Box so breit wie ihr Container und füllt 100 % des verfügbaren Platzes aus.

Einige HTML-Elemente, wie `<h1>` und `<p>`, verwenden standardmäßig `block` als äußeren Anzeigetyp.

Wenn eine Box einen Anzeigewert von `inline` hat, dann:

- Bricht die Box nicht auf eine neue Zeile um.
- Die Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} werden nicht angewendet.
- Obere und untere Auffüllung, Ränder und Rahmen werden angewendet, bewirken jedoch nicht, dass sich andere Inline-Boxen von der Box wegbewegen.
- Linke und rechte Auffüllung, Ränder und Rahmen werden angewendet und bewirken, dass sich andere Inline-Boxen von der Box wegbewegen.

Einige HTML-Elemente, wie `<a>`, `<span>`, `<em>` und `<strong>`, verwenden standardmäßig `inline` als äußeren Anzeigetyp.

Block- und Inline-Layout ist die Standardweise, wie Dinge im Web funktionieren. Standardmäßig und ohne weitere Anweisungen werden die Elemente innerhalb einer Box auch im **[normalen Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow)** angeordnet und verhalten sich wie Block- oder Inline-Boxen.

## Innere und äußere Anzeigetypen

`block`- und `inline`-Anzeigewerte werden als **äußere Anzeige**-Typen bezeichnet — sie beeinflussen, wie die Box im Verhältnis zu anderen Boxen um sie herum angeordnet wird. Boxen haben auch einen **inneren Anzeige**-Typ, der bestimmt, wie Elemente innerhalb dieser Box angeordnet werden.

Sie können den inneren Anzeige-Typ ändern, indem Sie einen inneren Anzeige-Wert festlegen, beispielsweise `display: flex;`. Das Element verwendet weiterhin den äußeren Anzeige-Typ `block`, aber dies ändert den inneren Anzeige-Typ in `flex`. Alle direkten Kinder dieser Box werden zu Flex-Elementen und verhalten sich gemäß der [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)-Spezifikation.

Wenn Sie lernen, CSS-Layout im Detail zu verstehen, werden Sie auf [`flex`](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) und verschiedene andere innere Werte stoßen, die Ihre Boxen haben können, beispielsweise [`grid`](/de/docs/Learn_web_development/Core/CSS_layout/Grids).

Machen Sie sich keine Sorgen um die innere und äußere Terminologie; dies geschieht intern und wir erwähnten es hier für den Fall, dass Sie darauf anderswo stoßen. Im Allgemeinen werden Sie nur mit einzelnen `display`-Werten arbeiten und müssen nicht viel darüber nachdenken.

## Beispiele für verschiedene Anzeigetypen

Das folgende Beispiel hat drei verschiedene HTML-Elemente, die alle einen äußeren Anzeigetyp von `block` haben.

- Ein Absatz mit einer in CSS hinzugefügten Umrandung. Der Browser rendert dies als Block-Box. Der Absatz beginnt in einer neuen Zeile und erstreckt sich über die gesamte verfügbare Breite.

- Eine Liste, die mit `display: flex` angeordnet ist. Dies legt das Flex-Layout für die Kinder des Containers fest, die Flex-Elemente sind. Die Liste selbst ist eine Block-Box und bricht wie der Absatz auf eine neue Zeile und auf die volle Container-Breite um.

- Ein Block-Absatz, in dem sich zwei `<span>`-Elemente befinden. Diese Elemente wären normalerweise `inline`, allerdings hat eines der Elemente eine Klasse von "block", die auf `display: block` gesetzt ist.

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

- Die beiden Absätze sind beide auf `display: inline` gesetzt. Der Inline-Flex-Container und die Absätze laufen alle zusammen auf einer Zeile, anstatt auf neue Zeilen umzubrechen (wie sie es tun würden, wenn sie als Block-Elemente dargestellt würden).

Um zwischen den Anzeige-Modi zu wechseln, können Sie `display: inline` in `display: block` oder `display: inline-flex` in `display: flex` ändern:

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

Das wichtigste, was man beachten sollte: Ändern des Wertes der `display`-Eigenschaft kann ändern, ob der äußere Anzeigetyp einer Box ein Block oder Inline ist. Dies ändert die Art und Weise, wie es zusammen mit anderen Elementen im Layout angezeigt wird.

## Was ist das CSS-Box-Modell?

Das gesamte CSS-Box-Modell gilt für Block-Boxen und definiert, wie die verschiedenen Teile einer Box — Rand, Rahmen, Auffüllung und Inhalt — zusammenarbeiten, um eine Box zu erstellen, die Sie auf einer Seite sehen können. Inline-Boxen verwenden nur _einen Teil_ des Verhaltens, das im Box-Modell definiert ist.

Um die Komplexität zu erhöhen, gibt es ein Standard- und ein alternatives Box-Modell. Standardmäßig verwenden Browser das Standard-Box-Modell.

### Teile einer Box

Eine Block-Box in CSS besteht aus:

- **Inhalts-Box**: Der Bereich, in dem Ihr Inhalt angezeigt wird; Größe damit Eigenschaften wie {{cssxref("width")}} und {{cssxref("height")}}.
- **Auffüllungs-Box**: Die Auffüllung sitzt um den Inhalt als Weißraum; Größe damit {{cssxref("padding")}} und verwandte Eigenschaften.
- **Rahmen-Box**: Die Rahmen-Box umschließt den Inhalt und etwaige Auffüllungen; Größe damit {{cssxref("border")}} und verwandte Eigenschaften.
- **Rand-Box**: Der Rand ist die äußerste Schicht, die den Inhalt, die Auffüllung und den Rahmen als Weißraum zwischen dieser Box und anderen Elementen umgibt; Größe damit {{cssxref("margin")}} und verwandte Eigenschaften.

Das untenstehende Diagramm zeigt diese Schichten:

![Diagramm des Box-Modells](box-model.png)

### Das Standard-CSS-Box-Modell

Im Standard-Box-Modell, wenn Sie `width` und `height` Eigenschaftswerte auf eine Box setzen, definieren diese Werte die `width` und `height` der _Inhalts-Box_. Jegliche Auffüllungen und Rahmen werden dann zu diesen Abmessungen hinzugefügt, um die gesamte Größe der Box zu erhalten (siehe Bild unten).

Wenn wir annehmen, dass eine Box den folgenden CSS hat:

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

![Zeigt die Größe der Box, wenn das Standard-Box-Modell verwendet wird.](standard-box-model.png)

> [!NOTE]
> Der Rand wird nicht zur tatsächlichen Größe der Box gerechnet — sicher, er beeinflusst den gesamten Raum, den die Box auf der Seite einnehmen wird, aber nur den Raum außerhalb der Box. Der Bereich der Box endet an der Grenze — er erstreckt sich nicht in den Rand hinein.

### Das alternative CSS-Box-Modell

Im alternativen Box-Modell ist jede Breite die Breite der sichtbaren Box auf der Seite. Die Breite des Inhaltsbereichs ist diese Breite minus die Breite für die Auffüllung und den Rahmen (siehe Bild unten). Es ist nicht nötig, den Rahmen und die Auffüllung zu addieren, um die tatsächliche Größe der Box zu erhalten.

Um das alternative Modell für ein Element zu aktivieren, setzen Sie `box-sizing: border-box` darauf:

```css
.box {
  box-sizing: border-box;
}
```

Wenn wir annehmen, dass die Box den gleichen CSS wie oben hat:

```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

Nun wird der _tatsächliche_ Raum, den die Box einnimmt, 350px in der Inline-Richtung und 150px in der Block-Richtung sein.

![Zeigt die Größe der Box, wenn das alternative Box-Modell verwendet wird.](alternate-box-model.png)

Um das alternative Box-Modell für alle Ihre Elemente zu verwenden (was eine übliche Wahl unter Entwicklern ist), setzen Sie die `box-sizing`-Eigenschaft auf das `<html>`-Element und setzen Sie alle anderen Elemente auf diesen Wert auf erben:

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

Um die zugrundeliegende Idee zu verstehen, können Sie den [CSS Tricks Artikel über box-sizing](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/) lesen.

## Spielen mit Box-Modellen

Im untenstehenden Beispiel können Sie zwei Boxen sehen. Beide haben eine Klasse von `.box`, die ihnen die gleiche `width`, `height`, `margin`, `border` und `padding` gibt. Der einzige Unterschied ist, dass die zweite Box auf das alternative Box-Modell gesetzt wurde.
Können Sie die Größe der zweiten Box ändern (indem Sie CSS zur `.alternate`-Klasse hinzufügen), um sie an die erste Box in Breite und Höhe anzupassen?

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

### Verwenden Sie die Entwicklerwerkzeuge des Browsers, um das Box-Modell anzuzeigen

Ihre [Entwicklerwerkzeuge des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) können das Verständnis des Box-Modells erheblich erleichtern — sie können Ihnen die Größe des Elements sowie seine Rand-, Auffüllungs- und Rahmenmaße anzeigen. Das Inspizieren eines Elements auf diese Weise ist eine großartige Möglichkeit herauszufinden, ob Ihre Box wirklich die Größe hat, die Sie denken!

![Untersuchung des Box-Modells eines Elements mit den Firefox-Entwicklerwerkzeugen](box-model-devtools.png)

## Ränder, Auffüllungen und Rahmen

Sie haben die {{cssxref("margin")}}, {{cssxref("padding")}}, und {{cssxref("border")}}-Eigenschaften bereits im obigen Beispiel gesehen. Die in diesem Beispiel verwendeten Eigenschaften sind **Kurzschreibweisen** und ermöglichen es uns, alle vier Seiten der Box gleichzeitig festzulegen. Diese Kurzschreibweisen haben auch äquivalente Langschreib-Eigenschaften, die es erlauben, die verschiedenen Seiten der Box individuell zu steuern.

Lassen Sie uns diese Eigenschaften im Detail erkunden.

### Rand

Der Rand ist ein unsichtbarer Raum um Ihre Box. Er drückt andere Elemente von der Box weg. Ränder können positive oder negative Werte haben. Das Setzen eines negativen Randes auf einer Seite Ihrer Box kann dazu führen, dass sie andere Dinge auf der Seite überlappt. Ob Sie das Standard- oder das alternative Box-Modell verwenden, der Rand wird immer nach der Größe der sichtbaren Box berechnet.

Wir können alle Ränder eines Elements gleichzeitig mit der {{cssxref("margin")}}-Eigenschaft kontrollieren, oder jede Seite individuell mit den äquivalenten Langschreib-Eigenschaften:

- {{cssxref("margin-top")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}

Im folgenden Beispiel versuchen Sie, die Randwerte zu ändern, um zu sehen, wie die Box aufgrund des Randes verschoben wird oder Raum (wenn es ein negativer Rand ist) zwischen diesem Element und dem enthaltenden Element entfernt wird.

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

#### Margin-Collapsing

Abhängig davon, ob zwei Elemente, deren Ränder sich berühren, positive oder negative Ränder haben, werden die Ergebnisse unterschiedlich sein:

- Zwei positive Ränder werden zu einem Rand kombiniert. Seine Größe entspricht dem größten einzelnen Rand.
- Zwei negative Ränder werden kollabieren und der kleinste (vom Nullpunkt entfernteste) Wert wird verwendet.
- Wenn ein Rand negativ ist, wird sein Wert vom Gesamtwert _abgezogen_.

Im folgenden Beispiel haben wir zwei Absätze. Der obere Absatz hat ein `margin-bottom` von 50 Pixeln, der andere hat ein `margin-top` von 30 Pixeln. Die Ränder sind so zusammengebrochen, dass der tatsächliche Rand zwischen den Boxen 50 Pixel beträgt und nicht die Summe der beiden Ränder.

Sie können dies testen, indem Sie das `margin-top` des zweiten Absatzes auf `0` setzen. Der sichtbare Rand zwischen den beiden Absätzen wird sich nicht ändern — er bleibt bei den 50 Pixeln, die im `margin-bottom` des ersten Absatzes festgelegt sind. Wenn Sie ihn auf `-10px` setzen, werden Sie sehen, dass der Gesamtrand `40px` beträgt — er wird von den `50px` abgezogen.

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

Eine Reihe von Regeln bestimmt, wann Ränder kollabieren und wann nicht. Für weitere Informationen siehe die detaillierte Seite über das [Meistern von Margin-Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing). Die Hauptsache, die man sich merken sollte, ist, dass Margin-Collapsing eine Sache ist, die passiert, wenn Sie Raum mit Rändern erzeugen und nicht den erwarteten Raum erhalten.

### Rahmen

Der Rahmen wird zwischen dem Rand und der Auffüllung einer Box gezeichnet. Wenn Sie das Standard-Box-Modell verwenden, wird die Größe des Rahmens zur `width` und `height` der Inhalts-Box hinzugefügt. Wenn Sie das alternative Box-Modell verwenden, wird der Inhaltsbereich kleiner, je größer der Rahmen ist, da der Rahmen einen Teil des verfügbaren `width` und `height` des Element-Box einnimmt.

Zum Styling von Rahmen gibt es eine große Anzahl von Eigenschaften — es gibt vier Rahmen, und jeder Rahmen hat einen Stil, eine Breite und eine Farbe, die wir manipulieren möchten.

Sie können die Breite, den Stil oder die Farbe aller vier Rahmen auf einmal mit der {{cssxref("border")}}-Eigenschaft setzen.

Um die Eigenschaften jeder Seite individuell einzustellen, verwenden Sie:

- {{cssxref("border-top")}}
- {{cssxref("border-right")}}
- {{cssxref("border-bottom")}}
- {{cssxref("border-left")}}

Um die Breite, den Stil oder die Farbe aller Seiten zu setzen, verwenden Sie:

- {{cssxref("border-width")}}
- {{cssxref("border-style")}}
- {{cssxref("border-color")}}

Um die Breite, den Stil oder die Farbe einer einzelnen Seite zu setzen, verwenden Sie eine der feineren Langschreib-Eigenschaften:

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

Im folgenden Beispiel haben wir verschiedene Kurz- und Langschreibweisen verwendet, um Rahmen zu erstellen. Experimentieren Sie mit den verschiedenen Eigenschaften, um zu überprüfen, ob Sie verstehen, wie sie funktionieren. Die MDN-Seiten zu den Randeigenschaften geben Ihnen Informationen über die verschiedenen verfügbaren Randstile.

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

Die Auffüllung sitzt zwischen dem Rahmen und dem Inhaltsbereich und wird verwendet, um den Inhalt vom Rahmen weg zu drücken. Im Gegensatz zu Rändern können Sie keine negative Auffüllung haben. Jeder Hintergrund, der auf Ihr Element angewendet wird, wird hinter der Auffüllung angezeigt.

Die {{cssxref("padding")}}-Eigenschaft steuert die Auffüllung auf allen Seiten eines Elements. Um jede Seite individuell zu steuern, verwenden Sie diese Langschreib-Eigenschaften:

- {{cssxref("padding-top")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}

Im folgenden Beispiel können Sie die Werte für die Auffüllung auf der Klasse `.box` ändern, um zu sehen, dass sich dadurch ändert, wo der Text im Verhältnis zur Box beginnt. Sie können auch die Auffüllung auf der Klasse `.container` ändern, um Raum zwischen dem Container und der Box zu schaffen. Sie können die Auffüllung auf jedem Element ändern, um Raum zwischen seinem Rahmen und dem, was im Element enthalten ist, zu schaffen.

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

All das gilt vollständig für Block-Boxen. Einige der Eigenschaften können auch auf Inline-Boxen angewendet werden, wie die, die durch ein `<span>`-Element erstellt werden.

Im folgenden Beispiel haben wir ein `<span>` innerhalb eines Absatzes. Wir haben ihm eine `width`, `height`, `margin`, `border` und `padding` zugewiesen. Sie können sehen, dass die Breite und Höhe ignoriert werden. Die oberen und unteren Abstände, Auffüllungen und Rahmen werden respektiert, ändern jedoch nicht das Verhältnis anderer Inhalte zu unserer Inline-Box. Die Auffüllung und die Umrandung überlappen sich mit anderen Wörtern im Absatz. Die linken und rechten Auffüllungen, Ränder und Umrandungen bewegen andere Inhalte von der Box weg.

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

`display: inline-block` ist ein besonderer Wert von `display`, der einen Mittelweg zwischen `inline` und `block` bietet. Verwenden Sie ihn, wenn Sie nicht möchten, dass ein Element auf eine neue Zeile umbricht, es aber trotzdem `width` und `height` respektieren soll und das Überlappen, wie oben gesehen, vermieden werden soll.

Ein Element mit `display: inline-block` macht einen Teil der Block-Dinge, die wir bereits kennen:

- Die Eigenschaften `width` und `height` werden respektiert.
- `padding`, `margin` und `border` sorgen dafür, dass andere Elemente von der Box weggedrückt werden.

Es bricht jedoch nicht auf eine neue Zeile um und wird nur größer als sein Inhalt, wenn Sie explizit `width` und `height`-Eigenschaften hinzufügen.

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

Wo dies nützlich sein kann, ist, wenn Sie einem Link eine größere anklickbare Fläche geben möchten, indem Sie `padding` hinzufügen. `<a>` ist ein Inline-Element wie `<span>`; Sie können `display: inline-block` verwenden, um die Auffüllung darauf zu setzen und es für einen Benutzer einfacher zu machen, auf den Link zu klicken.

Sie sehen dies ziemlich häufig in Navigationsleisten. Die untenstehende Navigation wird in einer Zeile mit Flexbox angezeigt und wir haben dem `<a>`-Element eine Auffüllung hinzugefügt, da wir die `background-color` ändern möchten, wenn das `<a>`-Element gehängt wird. Die Auffüllung scheint den Rahmen auf dem `<ul>`-Element zu überlappen. Dies liegt daran, dass das `<a>`-Element ein Inline-Element ist.

Fügen Sie der Regel mit dem Selektor `.links-list a` die Eigenschaft `display: inline-block;` hinzu und Sie werden sehen, wie dies das Problem löst, indem die Auffüllung von anderen Elementen respektiert wird:

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_Model_Tasks).

## Zusammenfassung

Das ist das meiste, was Sie über das Box-Modell verstehen müssen. Vielleicht möchten Sie zu dieser Lektion in der Zukunft zurückkehren, wenn Sie sich jemals unsicher über die Größe von Boxen in Ihrem Layout sind.

Im nächsten Artikel werfen wir einen Blick darauf, wie CSS Konflikte behandelt — wenn mehrere Regeln dasselbe Element auswählen, welche Stile werden angewendet?

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics")}}
