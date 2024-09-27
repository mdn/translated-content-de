---
title: Das Box-Modell
slug: Learn/CSS/Building_blocks/The_box_model
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_layers", "Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks")}}

Alles in CSS hat ein Kästchen um sich herum, und das Verständnis dieser Kästchen ist der Schlüssel, um komplexere Layouts mit CSS zu erstellen oder um Elemente mit anderen Elementen auszurichten. In dieser Lektion werfen wir einen Blick auf das CSS _Box-Modell_. Sie werden ein Verständnis dafür erlangen, wie es funktioniert und welche Terminologie damit verbunden ist.

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
          >Arbeiten mit Dateien</a
        >, HTML-Grundlagen (studieren Sie die
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie das CSS-Box-Modell kennen, woraus es besteht und wie Sie zum alternativen Modell wechseln können.
      </td>
    </tr>
  </tbody>
</table>

## Block- und Inline-Kästen

In CSS gibt es mehrere Arten von Kästen, die im Allgemeinen in die Kategorien **Blockkästen** und **Inline-Kästen** passen. Der Typ bezieht sich darauf, wie der Kasten im Hinblick auf den Seitenfluss und in Bezug auf andere Kästen auf der Seite verhält. Kästen haben einen **inneren Anzeigetyp** und einen **äußeren Anzeigetyp**.

Im Allgemeinen können Sie verschiedene Werte für den Anzeigetyp mit der {{cssxref("display")}}-Eigenschaft festlegen, die verschiedene Werte haben kann.

## Äußerer Anzeigetyp

Wenn ein Kasten einen äußeren Anzeigetyp von `block` hat, dann:

- Wird der Kasten auf einer neuen Zeile angezeigt.
- Die Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} werden berücksichtigt.
- Padding, Margin und Border bewirken, dass andere Elemente vom Kasten weggeschoben werden.
- Wenn {{cssxref("width")}} nicht angegeben ist, erstreckt sich der Kasten in der Inline-Richtung, um den in seinem Container verfügbaren Platz auszufüllen. In den meisten Fällen wird der Kasten so breit wie sein Container, indem er 100 % des verfügbaren Platzes ausfüllt.

Einige HTML-Elemente, wie `<h1>` und `<p>`, verwenden standardmäßig `block` als äußeren Anzeigetyp.

Wenn ein Kasten einen äußeren Anzeigetyp von `inline` hat, dann:

- Wird der Kasten nicht auf einer neuen Zeile angezeigt.
- Die Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} sind nicht anwendbar.
- Oben und unten liegende Padding, Margins und Borders werden angewendet, führen jedoch nicht dazu, dass andere Inline-Kästen vom Kasten weggeschoben werden.
- Links und rechts liegende Padding, Margins und Borders werden angewendet und bewirken, dass andere Inline-Kästen vom Kasten weggeschoben werden.

Einige HTML-Elemente wie `<a>`, `<span>`, `<em>` und `<strong>` verwenden standardmäßig `inline` als äußeren Anzeigetyp.

## Innerer Anzeigetyp

Kästen haben auch einen _inneren_ Anzeigetyp, der bestimmt, wie Elemente innerhalb dieses Kastens angeordnet werden.

Block- und Inline-Layout ist die Standardweise, wie sich Dinge im Web verhalten. Standardmäßig und ohne weitere Anweisungen werden die Elemente innerhalb eines Kastens ebenfalls im **[normalen Fluss](/de/docs/Learn/CSS/CSS_layout/Normal_Flow)** angeordnet und verhalten sich als Block- oder Inline-Kästen.

Sie können den inneren Anzeigetyp zum Beispiel ändern, indem Sie `display: flex;` festlegen. Das Element verwendet weiterhin den äußeren Anzeigetyp `block`, aber dies ändert den inneren Anzeigetyp in `flex`. Alle direkten Kinder dieses Kastens werden zu Flex-Elementen und verhalten sich gemäß der [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox)-Spezifikation.

Wenn Sie fortfahren, um mehr über CSS-Layouts im Detail zu lernen, werden Sie [`flex`](/de/docs/Learn/CSS/CSS_layout/Flexbox) kennenlernen, sowie verschiedene andere innere Werte, die Ihre Kästen haben können, zum Beispiel [`grid`](/de/docs/Learn/CSS/CSS_layout/Grids).

> [!NOTE]
> Um mehr über die Werte von display und darüber zu erfahren, wie Kästen im Block- und Inline-Layout funktionieren, werfen Sie einen Blick auf den MDN-Leitfaden [Block und Inline Layout](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow).

## Beispiele für verschiedene Anzeigetypen

Das folgende Beispiel zeigt drei verschiedene HTML-Elemente, die alle den äußeren Anzeigetyp `block` haben.

- Ein Absatz mit einem in CSS hinzugefügten Rahmen. Der Browser rendert dies als Block-Kasten. Der Absatz beginnt in einer neuen Zeile und erstreckt sich über die gesamte verfügbare Breite.

- Eine Liste, die mit `display: flex` layoutet wird. Dies etabliert ein Flex-Layout für die Kinder des Containers, die Flex-Elemente sind. Die Liste selbst ist ein Block-Kasten und — wie der Absatz — erweitert sich über die volle Containerbreite und bricht in eine neue Zeile um.

- Ein Block-Level-Absatz, in dem sich zwei `<span>`-Elemente befinden. Diese Elemente wären normalerweise `inline`, jedoch hat eines der Elemente eine Klasse namens "block", die auf `display: block` gesetzt ist.

{{EmbedGHLiveSample("css-examples/learn/box-model/block.html", '100%', 1100)}}

Im nächsten Beispiel sehen wir, wie `inline`-Elemente sich verhalten.

- Die `<span>`-Elemente im ersten Absatz sind standardmäßig inline und erzwingen daher keinen Zeilenumbruch.

- Das `<ul>`-Element, das auf `display: inline-flex` gesetzt ist, erstellt einen Inline-Kasten, der einige Flex-Elemente enthält.

- Die beiden Absätze sind beide auf `display: inline` gesetzt. Der Inline-Flex-Container und die Absätze laufen alle in einer Zeile zusammen, anstatt in neue Zeilen zu brechen (wie sie es tun würden, wenn sie als Block-Level-Elemente angezeigt würden).

**Um zwischen den Anzeigemodi zu wechseln, können Sie `display: inline` in `display: block` oder `display: inline-flex` in `display: flex` ändern.**

{{EmbedGHLiveSample("css-examples/learn/box-model/inline.html", '100%', 1100)}}

Das Wichtigste, an das Sie sich jetzt erinnern sollten, ist: Das Ändern des Wertes der `display`-Eigenschaft kann beeinflussen, ob der äußere Anzeigetyp eines Kastens Block oder Inline ist. Dies ändert die Art und Weise, wie er sich im Layout neben anderen Elementen anzeigt.

## Was ist das CSS-Box-Modell?

Das gesamte CSS-Box-Modell gilt für Block-Kästen und definiert, wie die verschiedenen Teile eines Kastens — Margin, Border, Padding und Inhalt — zusammenarbeiten, um einen Kasten zu schaffen, den Sie auf einer Seite sehen können. Inline-Kästen verwenden nur _einen Teil_ des im Box-Modell definierten Verhaltens.

Um die Komplexität zu erhöhen, gibt es ein Standard- und ein alternatives Box-Modell. Standardmäßig verwenden Browser das Standard-Box-Modell.

### Teile eines Kastens

Ein Block-Kasten in CSS besteht aus:

- **Inhaltsbereich**: Der Bereich, in dem Ihr Inhalt angezeigt wird; Größe durch Eigenschaften wie {{cssxref("inline-size")}} und {{cssxref("block-size")}} oder {{cssxref("width")}} und {{cssxref("height")}} ändern.
- **Padding-Bereich**: Der Padding-Bereich umgibt den Inhalt als Leerraum; Größe durch {{cssxref("padding")}} und verwandte Eigenschaften ändern.
- **Border-Bereich**: Der Border-Bereich umschließt den Inhalt und jedes Padding; Größe durch {{cssxref("border")}} und verwandte Eigenschaften ändern.
- **Margin-Bereich**: Der Margin-Bereich ist die äußerste Schicht, umgibt den Inhalt, Padding und Border als Leerraum zwischen diesem Kasten und anderen Elementen; Größe durch {{cssxref("margin")}} und verwandte Eigenschaften ändern.

Das untenstehende Diagramm zeigt diese Schichten:

![Diagramm des Box-Modells](box-model.png)

### Das Standard-CSS-Box-Modell

Im Standard-Box-Modell definieren die gesetzten Werte für `inline-size` und `block-size` (oder `width` und `height`) die `inline-size` und `block-size` (`width` und `height` in horizontalen Sprachen) des _Inhaltsbereichs_. Jedwedes Padding und Border werden dann zu diesen Dimensionen hinzugerechnet, um die Gesamtgröße des Kastens zu erhalten (siehe Bild unten).

Wenn wir davon ausgehen, dass ein Kasten folgendes CSS hat:

```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

Der _tatsächliche_ Platz, den der Kasten einnimmt, wird 410px breit (350 + 25 + 25 + 5 + 5) und 210px hoch (150 + 25 + 25 + 5 + 5) sein.

![Größe des Kastens, wenn das Standard-Boxmodell verwendet wird.](standard-box-model.png)

> [!NOTE]
> Die Margin wird nicht zur tatsächlichen Größe des Kastens hinzugezählt — sie beeinflusst zwar den gesamten Platz, den der Kasten auf der Seite einnimmt, aber nur den Raum außerhalb des Kastens. Der Bereich des Kastens endet an der Border — er erstreckt sich nicht in die Margin.

### Das alternative CSS-Box-Modell

Im alternativen Box-Modell ist jede Breite die Breite des sichtbaren Kastens auf der Seite. Die Breite des Inhaltsbereichs ist diese Breite abzüglich der Breite für Padding und Border (siehe Bild unten). Kein Bedarf, die Border und das Padding zu addieren, um die tatsächliche Größe des Kastens zu erhalten.

Um das alternative Modell für ein Element zu aktivieren, setzen Sie `box-sizing: border-box` darauf:

```css
.box {
  box-sizing: border-box;
}
```

Wenn wir davon ausgehen, dass der Kasten dasselbe CSS wie oben hat:

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

Nun beträgt der _tatsächliche_ Platz, den der Kasten einnimmt, 350px in der Inline-Richtung und 150px in der Block-Richtung.

![Größe des Kastens, wenn das alternative Boxmodell verwendet wird.](alternate-box-model.png)

Um das alternative Box-Modell für alle Ihre Elemente zu verwenden (was eine gängige Wahl unter Entwicklern ist), setzen Sie die `box-sizing`-Eigenschaft auf das `<html>`-Element und setzen Sie alle anderen Elemente, diesen Wert zu erben:

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

Um die zugrunde liegende Idee zu verstehen, können Sie den [CSS Tricks Artikel über box-sizing](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/) lesen.

## Arbeit mit Boxmodellen

Im folgenden Beispiel sehen Sie zwei Kästen. Beide haben eine Klasse von `.box`, die ihnen dieselbe `width`, `height`, `margin`, `border` und `padding` gibt. Der einzige Unterschied ist, dass der zweite Kasten so eingestellt wurde, dass er das alternative Boxmodell verwendet.

**Können Sie die Größe des zweiten Kastens ändern (indem Sie CSS zur `.alternate` Klasse hinzufügen), um seiner Breite und Höhe dem ersten Kasten anzupassen?**

{{EmbedGHLiveSample("css-examples/learn/box-model/box-models.html", '100%', 1100)}}

> [!NOTE]
> Eine Lösung für diese Aufgabe finden Sie [hier](https://github.com/mdn/css-examples/blob/main/learn/solutions.md#the-box-model).

### Verwendung von DevTools im Browser, um das Boxmodell zu betrachten

Ihre [Browser-Entwicklungstools](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) können das Verständnis des Boxmodells erheblich erleichtern. Wenn Sie ein Element in den Firefox-DevTools inspizieren, können Sie die Größe des Elements plus dessen Margin, Padding und Border sehen. Ein Element auf diese Weise zu inspizieren ist eine großartige Methode, um herauszufinden, ob Ihr Kasten wirklich die Größe hat, die Sie denken, dass er hat!

![Inspektion des Boxmodells eines Elements mithilfe der Firefox-DevTools](box-model-devtools.png)

## Margen-, Polster- und Rahmen

Sie haben bereits die {{cssxref("margin")}}, {{cssxref("padding")}} und {{cssxref("border")}} Eigenschaften im obigen Beispiel gesehen. Die in diesem Beispiel verwendeten Eigenschaften sind **Kurzschreibweisen** und erlauben es uns, alle vier Seiten des Kastens gleichzeitig zu setzen. Diese Kurzschreibweisen haben auch entsprechende Langschreibweisen, die es Ihnen ermöglichen, die verschiedenen Seiten des Kastens einzeln zu kontrollieren.

Lassen Sie uns diese Eigenschaften im Detail erkunden.

### Margin

Die Margin ist ein unsichtbarer Raum um Ihren Kasten. Sie stößt andere Elemente vom Kasten weg. Margins können positive oder negative Werte haben. Eine negative Margin auf einer Seite Ihres Kastens zu setzen, kann dazu führen, dass er andere Dinge auf der Seite überlappt. Unabhängig davon, ob Sie das Standard- oder das alternative Boxmodell verwenden, wird die Margin immer nach der Berechnung der Größe des sichtbaren Kastens hinzugefügt.

Wir können alle Margins eines Elements gleichzeitig mit der {{cssxref("margin")}}-Eigenschaft steuern oder jede Seite einzeln mit den entsprechenden Langschreibweisen:

- {{cssxref("margin-top")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}

**Im folgenden Beispiel versuchen Sie, die Margin-Werte zu ändern, um zu sehen, wie der Kasten aufgrund der Margin, die Raum schafft oder entfernt (falls es sich um eine negative Margin handelt), verschoben wird, zwischen diesem Element und dem umgebenden Element.**

{{EmbedGHLiveSample("css-examples/learn/box-model/margin.html", '100%', 800)}}

#### Margin-Kollaps

Abhängig davon, ob zwei Elemente, deren Margins sich berühren, positive oder negative Margins haben, werden die Ergebnisse unterschiedlich sein:

- Zwei positive Margins werden kombiniert, um eine Margin zu werden. Ihre Größe entspricht der größten individuellen Margin.
- Zwei negative Margins werden kollabieren, und der kleinste (am weitesten von null entfernte) Wert wird verwendet.
- Wenn eine Margin negativ ist, wird ihr Wert _subtrahiert_ von der Gesamtmenge.

Im folgenden Beispiel haben wir zwei Absätze. Der obere Absatz hat eine `margin-bottom` von 50 Pixeln, der andere hat eine `margin-top` von 30 Pixeln. Die Margins sind zusammengeschrumpft, sodass die tatsächliche Margin zwischen den Kästen 50 Pixel und nicht die Summe der beiden Margins beträgt.

**Sie können dies testen, indem Sie die `margin-top` des zweiten Absatzes auf 0 setzen. Die sichtbare Margin zwischen den beiden Absätzen wird sich nicht ändern — sie bleibt bei den 50 Pixeln, die in der `margin-bottom` des ersten Absatzes festgelegt sind. Wenn Sie sie auf -10px setzen, sehen Sie, dass die Gesamtmargin auf 40px schrumpft — sie wird von den 50px subtrahiert.**

{{EmbedGHLiveSample("css-examples/learn/box-model/margin-collapse.html", '100%', 800)}}

Eine Reihe von Regeln bestimmen, wann Margins schrumpfen und wann nicht. Für weitere Informationen siehe die detaillierte Seite über [Margin-Kollaps meistern](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing). Das Hauptsache, die Sie sich merken sollten, ist, dass Margin-Kollaps ein Ding ist, das passiert, wenn Sie Raum mit Margins schaffen und nicht den Raum bekommen, den Sie erwarten.

### Borders

Der Border wird zwischen der Margin und dem Padding eines Kastens gezeichnet. Wenn Sie das Standard-Boxmodell verwenden, wird die Größe des Borders sowohl zur Breite als auch zur Höhe des Inhaltsbereichs hinzuaddiert. Wenn Sie das alternative Boxmodell verwenden, wird der Inhaltbereich umso kleiner, je größer der Border ist, da der Border einen Teil dieser verfügbaren Breite und Höhe des Elementkastens einnimmt.

Für die Gestaltung von Borders gibt es eine Vielzahl von Eigenschaften — es gibt vier Borders und jeder Border kann einen Stil, eine Breite und eine Farbe haben, die wir manipulieren möchten.

Sie können die Breite, den Stil oder die Farbe aller vier Borders auf einmal mit der {{cssxref("border")}}-Eigenschaft einstellen.

Um die Eigenschaften jeder Seite einzeln festzulegen, verwenden Sie:

- {{cssxref("border-top")}}
- {{cssxref("border-right")}}
- {{cssxref("border-bottom")}}
- {{cssxref("border-left")}}

Um die Breite, den Stil oder die Farbe aller Seiten einzustellen, verwenden Sie:

- {{cssxref("border-width")}}
- {{cssxref("border-style")}}
- {{cssxref("border-color")}}

Um die Breite, den Stil oder die Farbe einer einzigen Seite einzustellen, verwenden Sie eine der detaillierteren Langschreibweisen:

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

Im folgenden Beispiel haben wir verschiedene Kurz- und Langschreibweisen verwendet, um Borders zu erstellen. Experimentieren Sie mit den verschiedenen Eigenschaften, um zu überprüfen, dass Sie verstehen, wie sie funktionieren. Die MDN-Seiten für die Border-Eigenschaften geben Ihnen Informationen über die verschiedenen verfügbaren Border-Stile.

{{EmbedGHLiveSample("css-examples/learn/box-model/border.html", '100%', 700)}}

### Padding

Der Padding-Bereich liegt zwischen dem Border und dem Inhaltsbereich und wird verwendet, um den Inhalt von dem Border wegzudrücken. Im Gegensatz zu Margins können Sie keine negativen Padding-Werte haben. Jeglicher auf Ihr Element angewendeter Hintergrund wird hinter dem Padding angezeigt.

Die {{cssxref("padding")}}-Eigenschaft steuert das Padding auf allen Seiten eines Elements. Um jede Seite einzeln zu kontrollieren, verwenden Sie diese Langschreibweisen:

- {{cssxref("padding-top")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}

Im folgenden Beispiel können Sie die Werte für Padding auf der Klasse `.box` ändern, um zu sehen, dass dies ändert, wo der Text in Bezug auf den Kasten beginnt. Sie können auch das Padding auf der Klasse `.container` ändern, um Raum zwischen dem Container und dem Kasten zu schaffen. Sie können das Padding auf jedem Element ändern, um Raum zwischen seinem Border und allem, was innerhalb des Elements ist, zu schaffen.

{{EmbedGHLiveSample("css-examples/learn/box-model/padding.html", '100%', 700)}}

## Das Boxmodell und Inline-Kästen

Alles oben Genannte gilt vollständig für Block-Kästen. Einige der Eigenschaften können auch auf Inline-Kästen angewendet werden, wie sie beispielsweise von einem `<span>`-Element erstellt werden.

Im folgenden Beispiel haben wir ein `<span>` innerhalb eines Absatzes. Wir haben ihm eine `width`, `height`, `margin`, `border` und `padding` gegeben. Sie können sehen, dass Breite und Höhe ignoriert werden. Die obere und untere Margin, Padding und Border werden berücksichtigt, ändern jedoch nicht die Beziehung der anderen Inhalte zu unserem Inline-Kasten. Padding und Border überlappen andere Wörter im Absatz. Die linken und rechten Padding, Margins und Borders bewegen andere Inhalte vom Kasten weg.

{{EmbedGHLiveSample("css-examples/learn/box-model/inline-box-model.html", '100%', 700)}}

## Verwendung von display: inline-block

`display: inline-block` ist ein spezieller Wert von `display`, der einen Mittelweg zwischen `inline` und `block` bietet. Verwenden Sie es, wenn Sie nicht möchten, dass ein Element auf eine neue Zeile bricht, es jedoch `width` und `height` respektieren soll und das Überlappen wie oben vermeiden soll.

Ein Element mit `display: inline-block` tut einige der Block-Dinge, die wir bereits kennen:

- Die Eigenschaften `width` und `height` werden berücksichtigt.
- `padding`, `margin` und `border` bewirken, dass andere Elemente vom Kasten weggeschoben werden.

Es bricht jedoch nicht in eine neue Zeile und wird nur größer als sein Inhalt, wenn Sie explizit `width` und `height`-Eigenschaften hinzufügen.

**Im nächsten Beispiel haben wir `display: inline-block` zu unserem `<span>`-Element hinzugefügt. Versuchen Sie, dies zu `display: block` zu ändern oder die Zeile vollständig zu entfernen, um die Unterschiede in den Anzeigemodellen zu sehen.**

{{EmbedGHLiveSample("css-examples/learn/box-model/inline-block.html", '100%', 800)}}

Dies kann nützlich sein, wenn Sie einem Link ein größeres `Hit-Gebiet` geben möchten, indem Sie `padding` hinzufügen. `<a>` ist ein Inline-Element wie `<span>`; Sie können `display: inline-block` verwenden, um Padding darauf zu setzen, wodurch es einfacher für einen Benutzer wird, auf den Link zu klicken.

Sie sehen dies ziemlich häufig in Navigationsleisten. Die Navigation unten wird in einer Reihe mit Flexbox angezeigt und wir haben `padding` für das `<a>`-Element hinzugefügt, da wir möchten, dass sich die `background-color` ändert, wenn das `<a>`-Element schwebt. Das Padding scheint den Rand des `<ul>`-Elements zu überlappen. Dies liegt daran, dass das `<a>` ein Inline-Element ist.

**Fügen Sie `display: inline-block` zur Regel mit dem Selektor `.links-list a` hinzu, und Sie werden sehen, wie dies das Problem behebt, indem es bewirkt, dass das Padding von anderen Elementen respektiert wird.**

{{EmbedGHLiveSample("css-examples/learn/box-model/inline-block-nav.html", '100%', 700)}}

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Das Box-Modell](/de/docs/Learn/CSS/Building_blocks/Box_Model_Tasks).

## Zusammenfassung

Das ist fast alles, was Sie über das Boxmodell verstehen müssen. Vielleicht möchten Sie in Zukunft zu dieser Lektion zurückkehren, wenn Sie jemals verwirrt darüber sind, wie groß Kästen in Ihrem Layout sind.

Im nächsten Artikel werden wir uns ansehen, wie [Hintergründe und Rahmen](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders) verwendet werden können, um Ihre einfachen Kästen interessanter aussehen zu lassen.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_layers", "Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks")}}
