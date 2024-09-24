---
title: Das Box-Modell
slug: Learn/CSS/Building_blocks/The_box_model
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_layers", "Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks")}}

In CSS hat alles eine Box um sich herum, und das Verständnis dieser Boxen ist der Schlüssel zur Erstellung komplexerer Layouts mit CSS oder zur Ausrichtung von Elementen mit anderen Elementen. In dieser Lektion werden wir uns das CSS _Box-Modell_ ansehen. Sie erhalten ein Verständnis dafür, wie es funktioniert und welche Terminologie damit verbunden ist.

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
        >, HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie das CSS-Box-Modell kennen, was das Box-Modell ausmacht und wie Sie zum alternativen Modell wechseln können.
      </td>
    </tr>
  </tbody>
</table>

## Block- und Inline-Boxen

In CSS haben wir mehrere Box-Typen, die im Allgemeinen in die Kategorien **Block-Boxen** und **Inline-Boxen** passen. Der Typ bezieht sich darauf, wie sich die Box im Hinblick auf den Seitenfluss und in Bezug auf andere Boxen auf der Seite verhält. Boxen haben einen **inneren Anzeige-Typ** und einen **äußeren Anzeige-Typ**.

Im Allgemeinen können Sie verschiedene Werte für den Anzeige-Typ mit der Eigenschaft {{cssxref("display")}} festlegen, die verschiedene Werte haben kann.

## Äußerer Anzeige-Typ

Wenn eine Box einen äußeren Anzeige-Typ von `block` hat, dann:

- Wird die Box auf einer neuen Zeile beginnen.
- Die {{cssxref("width")}}- und {{cssxref("height")}}-Eigenschaften werden beachtet.
- Polsterung, Rand und Rahmen werden dazu führen, dass andere Elemente von der Box weggeschoben werden.
- Wenn {{cssxref("width")}} nicht angegeben ist, wird die Box in der Inline-Richtung erweitert, um den verfügbaren Platz in ihrem Container auszufüllen. In den meisten Fällen wird die Box so breit wie ihr Container und füllt 100 % des verfügbaren Platzes aus.

Einige HTML-Elemente, wie z.B. `<h1>` und `<p>`, verwenden standardmäßig `block` als ihren äußeren Anzeige-Typ.

Wenn eine Box einen äußeren Anzeige-Typ von `inline` hat, dann:

- Wird die Box nicht auf einer neuen Zeile beginnen.
- Die {{cssxref("width")}}- und {{cssxref("height")}}-Eigenschaften werden nicht angewendet.
- Obere und untere Polsterungen, Ränder und Rahmen gelten, werden aber nicht dazu führen, dass sich andere Inline-Boxen von der Box wegbewegen.
- Linke und rechte Polsterungen, Ränder und Rahmen gelten und werden dazu führen, dass sich andere Inline-Boxen von der Box wegbewegen.

Einige HTML-Elemente, wie z.B. `<a>`, `<span>`, `<em>` und `<strong>`, verwenden standardmäßig `inline` als ihren äußeren Anzeige-Typ.

## Innerer Anzeige-Typ

Boxen haben auch einen _inneren_ Anzeige-Typ, der bestimmt, wie Elemente innerhalb dieser Box angeordnet werden.

Block- und Inline-Layout ist die standardmäßige Verhaltensweise im Web. Standardmäßig und ohne weitere Anweisungen werden die Elemente innerhalb einer Box auch im **[normalen Fluss](/de/docs/Learn/CSS/CSS_layout/Normal_Flow)** angeordnet und verhalten sich als Block- oder Inline-Boxen.

Sie können den inneren Anzeige-Typ z.B. durch Setzen von `display: flex;` ändern. Das Element verwendet weiterhin den äußeren Anzeige-Typ `block`, aber dies ändert den inneren Anzeige-Typ zu `flex`. Alle direkten Kinder dieser Box werden Flex-Elemente und verhalten sich gemäß der [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox)-Spezifikation.

Wenn Sie sich näher mit dem CSS-Layout beschäftigen, werden Sie [`flex`](/de/docs/Learn/CSS/CSS_layout/Flexbox) kennenlernen und verschiedene andere innere Werte, die Ihre Boxen haben können, beispielsweise [`grid`](/de/docs/Learn/CSS/CSS_layout/Grids).

> [!NOTE]
> Um mehr über die Werte von Display zu erfahren und wie Boxen im Block- und Inline-Layout arbeiten, werfen Sie einen Blick auf den MDN-Leitfaden [Block und Inline Layout](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow).

## Beispiele für verschiedene Anzeigetypen

Im folgenden Beispiel gibt es drei verschiedene HTML-Elemente, die alle einen äußeren Anzeige-Typ von `block` haben.

- Ein Absatz mit einem Rahmen, der in CSS hinzugefügt wurde. Der Browser rendert dies als Block-Box. Der Absatz beginnt auf einer neuen Zeile und erstreckt sich über die gesamte verfügbare Breite.

- Eine Liste, die mit `display: flex` angelegt ist. Dies schafft ein Flex-Layout für die Kinder des Containers, die Flex-Elemente sind. Die Liste selbst ist eine Block-Box und – wie der Absatz – erweitert sich auf die volle Containerbreite und springt auf eine neue Zeile.

- Ein Block-Absatz, in dem sich zwei `<span>` Elemente befinden. Diese Elemente wären normalerweise `inline`, jedoch hat eines der Elemente eine Klasse von "block", die auf `display: block` gesetzt wird.

{{EmbedGHLiveSample("css-examples/learn/box-model/block.html", '100%', 1100)}}

Im nächsten Beispiel können Sie sehen, wie `inline` Elemente sich verhalten.

- Die `<span>` Elemente im ersten Absatz sind standardmäßig Inline und erzwingen daher keine Zeilenumbrüche.

- Das `<ul>` Element, das auf `display: inline-flex` gesetzt ist, erstellt eine Inline-Box, die einige Flex-Elemente enthält.

- Die beiden Absätze sind beide auf `display: inline` gesetzt. Der Inline-Flex-Container und die Absätze laufen alle in einer Zeile anstatt auf neue Zeilen zu brechen (wie sie es tun würden, wenn sie als Block-Elemente angezeigt würden).

**Um zwischen den Anzeigemodi zu wechseln, können Sie `display: inline` in `display: block` oder `display: inline-flex` in `display: flex` ändern.**

{{EmbedGHLiveSample("css-examples/learn/box-model/inline.html", '100%', 1100)}}

Das Wichtigste, das Sie sich merken sollten, ist: Das Ändern des `display`-Eigenschaftswerts kann ändern, ob der äußere Anzeige-Typ einer Box Block oder Inline ist. Dies ändert die Art und Weise, wie es im Layout neben anderen Elementen angezeigt wird.

## Was ist das CSS-Box-Modell?

Das CSS-Box-Modell als Ganzes gilt für Block-Boxen und definiert, wie die verschiedenen Teile einer Box — Rand, Rahmen, Polsterung und Inhalt — zusammenspielen, um eine Box zu schaffen, die Sie auf einer Seite sehen können. Inline-Boxen verwenden nur _einige_ der im Box-Modell definierten Verhaltensweisen.

Um die Komplexität zu erhöhen, gibt es ein Standard- und ein alternatives Box-Modell. Standardmäßig verwenden Browser das Standard-Box-Modell.

### Teile einer Box

Eine Block-Box in CSS besteht aus:

- **Inhaltsbox**: Der Bereich, in dem Ihr Inhalt angezeigt wird; dimensionieren Sie ihn mithilfe von Eigenschaften wie {{cssxref("inline-size")}} und {{cssxref("block-size")}} oder {{cssxref("width")}} und {{cssxref("height")}}.
- **Polsterungsbox**: Die Polsterung sitzt als Weißraum um den Inhalt herum; dimensionieren Sie ihn mithilfe von {{cssxref("padding")}} und verwandten Eigenschaften.
- **Rahmenbox**: Die Rahmenbox umschließt den Inhalt und jegliche Polsterung; dimensionieren Sie ihn mithilfe von {{cssxref("border")}} und verwandten Eigenschaften.
- **Randbox**: Der Rand ist die äußerste Schicht, die den Inhalt, die Polsterung und den Rahmen als Leerraum zwischen dieser Box und anderen Elementen umschließt; dimensionieren Sie ihn mithilfe von {{cssxref("margin")}} und verwandten Eigenschaften.

Das folgende Diagramm zeigt diese Schichten:

![Diagramm des Box-Modells](box-model.png)

### Das Standard-CSS-Box-Modell

Im Standard-Box-Modell, wenn Sie `inline-size` und `block-size` (oder `width` und `height`) Eigenschaftswerte für eine Box setzen, definieren diese Werte die `inline-size` und `block-size` (`width` und `height` in horizontalen Sprachen) der _Inhaltsbox_. Jegliche Polsterung und Rahmen werden dann zu diesen Abmessungen hinzuaddiert, um die Gesamtgröße der Box zu erhalten (siehe Bild unten).

Wenn wir annehmen, dass eine Box die folgende CSS hat:

```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

Der _tatsächliche_ Platz, den die Box einnimmt, wird 410px breit (350 + 25 + 25 + 5 + 5) und 210px hoch (150 + 25 + 25 + 5 + 5) sein.

![Zeigt die Größe der Box, wenn das Standard-Box-Modell verwendet wird.](standard-box-model.png)

> [!NOTE]
> Der Rand wird nicht zur tatsächlichen Größe der Box gezählt - sicher, er beeinflusst den gesamten Platz, den die Box auf der Seite einnehmen wird, aber nur den Raum außerhalb der Box. Der Bereich der Box endet am Rahmen - er erstreckt sich nicht in den Rand hinein.

### Das alternative CSS-Box-Modell

Im alternativen Box-Modell ist jede Breite die Breite der sichtbaren Box auf der Seite. Die Breite des Inhaltsbereichs ist diese Breite minus der Breite für die Polsterung und den Rahmen (siehe Bild unten). Es ist nicht notwendig, den Rahmen und die Polsterung zu der tatsächlichen Größe der Box hinzuzufügen.

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

Jetzt wird der _tatsächliche_ Platz, den die Box einnimmt, 350px in der Inline-Richtung und 150px in der Block-Richtung betragen.

![Zeigt die Größe der Box, wenn das alternative Box-Modell verwendet wird.](alternate-box-model.png)

Um das alternative Box-Modell für alle Ihre Elemente zu verwenden (was eine häufige Wahl unter Entwicklern ist), setzen Sie die `box-sizing`-Eigenschaft auf das `<html>` Element und setzen Sie alle anderen Elemente darauf, diesen Wert zu erben:

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

## Mit Box-Modellen spielen

Im folgenden Beispiel können Sie zwei Boxen sehen. Beide haben eine Klasse `.box`, die ihnen die gleiche `width`, `height`, `margin`, `border`, und `padding` gibt. Der einzige Unterschied besteht darin, dass die zweite Box so eingestellt wurde, dass sie das alternative Box-Modell verwendet.

**Können Sie die Größe der zweiten Box ändern (indem Sie CSS zur `.alternate` Klasse hinzufügen), um sie an die erste Box in Breite und Höhe anzugleichen?**

{{EmbedGHLiveSample("css-examples/learn/box-model/box-models.html", '100%', 1100)}}

> [!NOTE]
> Eine Lösung für diese Aufgabe finden Sie [hier](https://github.com/mdn/css-examples/blob/main/learn/solutions.md#the-box-model).

### Verwenden Sie die DevTools des Browsers, um das Box-Modell zu betrachten

Ihre [Browser-Entwicklertools](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) können das Verständnis des Box-Modells erheblich vereinfachen. Wenn Sie ein Element in Firefox's DevTools inspizieren, können Sie die Größe des Elements sowie dessen Rand, Polsterung und Rahmen sehen. Bei der Inspektion eines Elements auf diese Weise ist es eine großartige Möglichkeit, herauszufinden, ob Ihre Box wirklich die Größe hat, die Sie denken, dass sie hat!

![Inspektion des Box-Modells eines Elements mit Firefox DevTools](box-model-devtools.png)

## Ränder, Polsterungen und Rahmen

Sie haben bereits die Eigenschaften {{cssxref("margin")}}, {{cssxref("padding")}} und {{cssxref("border")}} im obigen Beispiel in Aktion gesehen. Die in diesem Beispiel verwendeten Eigenschaften sind **Kurzformen** und ermöglichen es uns, alle vier Seiten der Box auf einmal festzulegen. Diese Kurzformen haben auch gleichwertige Langform-Eigenschaften, die die individuelle Kontrolle über die verschiedenen Seiten der Box ermöglichen.

Lassen Sie uns diese Eigenschaften im Detail erkunden.

### Rand

Der Rand ist ein unsichtbarer Raum um Ihre Box. Er schiebt andere Elemente von der Box weg. Ränder können positive oder negative Werte haben. Wenn Sie einen negativen Rand auf einer Seite Ihrer Box setzen, kann dies dazu führen, dass diese sich über andere Dinge auf der Seite überlappt. Unabhängig davon, ob Sie das Standard- oder das alternative Box-Modell verwenden, wird der Rand immer nach der Größe der sichtbaren Box hinzuaddiert.

Wir können alle Ränder eines Elements auf einmal mit der {{cssxref("margin")}}-Eigenschaft steuern oder jede Seite individuell mit den entsprechenden Langform-Eigenschaften:

- {{cssxref("margin-top")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}

**Im folgenden Beispiel versuchen Sie, die Randwerte zu ändern, um zu sehen, wie die Box aufgrund des Rands durch das Erstellen oder Entfernen von Leerraum (wenn es ein negativer Rand ist) zwischen diesem Element und dem enthaltenen Element verschoben wird.**

{{EmbedGHLiveSample("css-examples/learn/box-model/margin.html", '100%', 800)}}

#### Rand-Kollaps

Je nachdem, ob zwei Elemente, deren Ränder sich berühren, positive oder negative Ränder haben, werden die Ergebnisse unterschiedlich sein:

- Zwei positive Ränder werden sich zu einem Rand verbinden. Seine Größe wird gleich dem größten einzelnen Rand sein.
- Zwei negative Ränder werden kollabieren und der kleinste (am weitesten von null entfernt) Wert wird verwendet.
- Wenn ein Rand negativ ist, wird sein Wert von der gesamten Linie _abgezogen_.

Im folgenden Beispiel haben wir zwei Absätze. Der obere Absatz hat einen `margin-bottom` von 50 Pixeln, der andere hat einen `margin-top` von 30 Pixeln. Die Ränder sind zusammengefallen, sodass der tatsächliche Rand zwischen den Boxen 50 Pixel beträgt und nicht die Summe der beiden Ränder.

**Sie können dies testen, indem Sie den `margin-top` des zweiten Absatzes auf 0 setzen. Der sichtbare Rand zwischen den beiden Absätzen wird sich nicht ändern - er behält die 50 Pixel bei, die im `margin-bottom` des ersten Absatzes eingestellt sind. Wenn Sie ihn auf -10px einstellen, werden Sie feststellen, dass der gesamte Rand 40px wird - es wird von den 50px abgezogen.**

{{EmbedGHLiveSample("css-examples/learn/box-model/margin-collapse.html", '100%', 800)}}

Eine Reihe von Regeln bestimmt, wann Ränder kollabieren und wann nicht. Weitere Informationen finden Sie auf der detaillierten Seite über [das Beherrschen des Rand-Kollapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing). Das Wichtigste, das Sie sich merken sollten, ist, dass der Rand-Kollaps eine Technik ist, die auftritt, wenn Sie Platz mit Rändern erstellen und den gewünschten Raum nicht erhalten.

### Rahmen

Der Rahmen wird zwischen dem Rand und der Polsterung einer Box gezeichnet. Wenn Sie das Standard-Box-Modell verwenden, wird die Größe des Rahmens zur `width` und `height` der Inhaltsbox hinzuaddiert. Wenn Sie das alternative Box-Modell verwenden, dann je größer der Rahmen ist, desto kleiner wird die Inhaltsbox, da der Rahmen einen Teil der verfügbaren `width` und `height` der Elementbox einnimmt.

Zum Stylen von Rahmen gibt es eine große Anzahl von Eigenschaften — es gibt vier Rahmen, und jeder Rahmen hat einen Stil, eine Breite und eine Farbe, die wir möglicherweise manipulieren möchten.

Sie können die Breite, den Stil oder die Farbe aller vier Rahmen auf einmal mit der {{cssxref("border")}}-Eigenschaft festlegen.

Um die Eigenschaften jeder Seite individuell festzulegen, verwenden Sie:

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

Im Beispiel unten haben wir verschiedene Kurzformen und Langformen verwendet, um Rahmen zu erstellen. Spielen Sie mit den verschiedenen Eigenschaften herum, um sicherzustellen, dass Sie verstehen, wie sie funktionieren. Die MDN-Seiten für die Rahmen-Eigenschaften geben Ihnen Informationen über die verschiedenen verfügbaren Rahmenstile.

{{EmbedGHLiveSample("css-examples/learn/box-model/border.html", '100%', 700)}}

### Polsterung

Die Polsterung sitzt zwischen dem Rahmen und dem Inhaltsbereich und wird verwendet, um den Inhalt vom Rahmen wegzudrücken. Im Gegensatz zu Rändern können Sie keine negative Polsterung haben. Ein auf Ihr Element angewendeter Hintergrund wird hinter der Polsterung angezeigt.

Die {{cssxref("padding")}}-Eigenschaft steuert die Polsterung auf allen Seiten eines Elements. Um jede Seite individuell zu steuern, verwenden Sie diese Langform-Eigenschaften:

- {{cssxref("padding-top")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}

Im Beispiel unten können Sie die Werte für die Polsterung der Klasse `.box` ändern, um zu sehen, dass dies den Anfang des Textes in Bezug auf die Box ändert. Sie können auch die Polsterung auf der Klasse `.container` ändern, um Platz zwischen dem Container und der Box zu schaffen. Sie können die Polsterung auf jedem Element ändern, um Raum zwischen seinem Rahmen und dem, was sich im Inneren des Elements befindet, zu schaffen.

{{EmbedGHLiveSample("css-examples/learn/box-model/padding.html", '100%', 700)}}

## Das Box-Modell und Inline-Boxen

All das Obige gilt vollständig für Block-Boxen. Einige der Eigenschaften können auch auf Inline-Boxen angewendet werden, wie z.B. diejenigen, die durch ein `<span>` Element erstellt werden.

Im Beispiel unten haben wir ein `<span>` in einem Absatz. Wir haben diesem eine `width`, `height`, `margin`, `border` und `padding` zugewiesen. Sie können sehen, dass die Breite und Höhe ignoriert werden. Die obere und untere Rand, Polsterung und Rahmen werden respektiert, ändern jedoch nicht die Beziehung anderer Inhalte zu unserer Inline-Box. Die Polsterung und der Rahmen überlappen andere Wörter im Absatz. Die linke und rechte Polsterung, Ränder und Rahmen bewegen andere Inhalte von der Box weg.

{{EmbedGHLiveSample("css-examples/learn/box-model/inline-box-model.html", '100%', 700)}}

## Verwendung von display: inline-block

`display: inline-block` ist ein spezieller Wert von `display`, der einen Mittelweg zwischen `inline` und `block` bietet. Verwenden Sie ihn, wenn Sie nicht möchten, dass ein Element auf eine neue Zeile umbricht, aber Sie möchten, dass es `width` und `height` respektiert und das Überlappen vermeidet, das oben gesehen wurde.

Ein Element mit `display: inline-block` führt einen Teil der Block-Dinge aus, die wir bereits kennen:

- Die Eigenschaften `width` und `height` werden respektiert.
- `padding`, `margin` und `border` werden dazu führen, dass andere Elemente von der Box weggeschoben werden.

Es bricht jedoch nicht auf eine neue Zeile und wird nur dann größer als sein Inhalt, wenn Sie explizit `width` und `height`-Eigenschaften hinzufügen.

**Im nächsten Beispiel haben wir `display: inline-block` zu unserem `<span>` Element hinzugefügt. Versuchen Sie, dies in `display: block` zu ändern oder die Zeile vollständig zu entfernen, um den Unterschied in den Anzeigemodellen zu sehen.**

{{EmbedGHLiveSample("css-examples/learn/box-model/inline-block.html", '100%', 800)}}

Wo dies nützlich sein kann, ist, wenn Sie einem Link einen größeren Trefferbereich geben möchten, indem Sie `padding` hinzufügen. `<a>` ist ein Inline-Element wie `<span>`; Sie können `display: inline-block` verwenden, um das Setzen von Polsterungen darauf zu ermöglichen, wodurch es für einen Benutzer einfacher wird, den Link zu klicken.

Dies sehen Sie ziemlich häufig in Navigationsleisten. Die Navigationsleiste unten wird in einer Reihe mit Flexbox angezeigt, und wir haben padding zum `<a>` Element hinzugefügt, da wir die `background-color` ändern möchten, wenn das `<a>` übergefahren wird. Die Polsterung scheint den Rahmen des `<ul>` Elements zu überlappen. Dies liegt daran, dass das `<a>` ein Inline-Element ist.

**Fügen Sie `display: inline-block` zu der Regel mit dem `.links-list a` Selektor hinzu, und Sie werden sehen, wie dies dieses Problem behebt, indem es dazu führt, dass die Polsterung von anderen Elementen respektiert wird.**

{{EmbedGHLiveSample("css-examples/learn/box-model/inline-block-nav.html", '100%', 700)}}

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — sehen Sie sich [Testen Sie Ihre Fähigkeiten: Das Box-Modell](/de/docs/Learn/CSS/Building_blocks/Box_Model_Tasks) an.

## Zusammenfassung

Das ist das meiste, was Sie über das Box-Modell verstehen müssen. Möglicherweise möchten Sie irgendwann auf diese Lektion zurückkommen, wenn Sie sich jemals unsicher sind, wie groß Boxen in Ihrem Layout sind.

Im nächsten Artikel werden wir uns ansehen, wie [Hintergründe und Rahmen](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders) verwendet werden können, um Ihre einfachen Boxen interessanter zu gestalten.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_layers", "Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks")}}
