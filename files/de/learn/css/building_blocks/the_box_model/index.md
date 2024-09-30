---
title: Das Box-Modell
slug: Learn/CSS/Building_blocks/The_box_model
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_layers", "Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks")}}

Alles in CSS hat eine Box um sich herum, und das Verständnis dieser Boxen ist der Schlüssel, um komplexere Layouts mit CSS zu erstellen oder Elemente mit anderen Elementen auszurichten. In dieser Lektion werfen wir einen Blick auf das CSS-Box-Modell. Sie werden verstehen, wie es funktioniert und welche Fachbegriffe dazu gehören.

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
        >, HTML-Grundlagen (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das CSS-Box-Modell zu verstehen, was es ausmacht und wie man zum alternativen Modell wechselt.
      </td>
    </tr>
  </tbody>
</table>

## Block- und Inline-Boxen

In CSS haben wir verschiedene Box-Typen, die im Allgemeinen in die Kategorien **Block-Boxen** und **Inline-Boxen** passen. Der Typ bezieht sich darauf, wie sich die Box in Bezug auf den Seitenfluss und andere Boxen auf der Seite verhält. Boxen haben einen **inneren Anzeigetyp** und einen **äußeren Anzeigetyp**.

Im Allgemeinen können Sie verschiedene Werte für den Anzeigetyp mit der Eigenschaft {{cssxref("display")}} festlegen, die verschiedene Werte haben kann.

## Äußerer Anzeigetyp

Wenn eine Box einen äußeren Anzeigetyp von `block` hat, dann:

- Die Box wird auf eine neue Zeile verschoben.
- Die Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} werden beachtet.
- Innenabstand, Rand und Rahmen drängen andere Elemente von der Box weg.
- Wenn {{cssxref("width")}} nicht angegeben ist, wird die Box in der Inline-Richtung erweitert, um den verfügbaren Platz im Container zu füllen. In den meisten Fällen wird die Box so breit wie ihr Container und füllt 100% des verfügbaren Platzes aus.

Einige HTML-Elemente wie `<h1>` und `<p>` verwenden standardmäßig `block` als ihren äußeren Anzeigetyp.

Wenn eine Box einen äußeren Anzeigetyp von `inline` hat, dann:

- Die Box wird nicht auf eine neue Zeile verschoben.
- Die Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} gelten nicht.
- Innenabstände, Rand oben und unten sowie Rahmen werden angewendet, bewirken jedoch nicht, dass andere Inline-Boxen von der Box weg bewegt werden.
- Innenabstände, Rand links und rechts sowie Rahmen werden angewendet und bewirken, dass andere Inline-Boxen von der Box weg bewegt werden.

Einige HTML-Elemente wie `<a>`, `<span>`, `<em>` und `<strong>` verwenden standardmäßig `inline` als ihren äußeren Anzeigetyp.

## Innerer Anzeigetyp

Boxen haben auch einen _inneren_ Anzeigetyp, der bestimmt, wie Elemente innerhalb dieser Box angeordnet werden.

Block- und Inline-Layout ist die Standardweise, wie sich Dinge im Web verhalten. Standardmäßig und ohne weitere Anweisungen werden die Elemente innerhalb einer Box ebenfalls im **[normalen Fluss](/de/docs/Learn/CSS/CSS_layout/Normal_Flow)** angeordnet und verhalten sich wie Block- oder Inline-Boxen.

Sie können den inneren Anzeigetyp zum Beispiel ändern, indem Sie `display: flex;` festlegen. Das Element verwendet weiterhin den äußeren Anzeigetyp `block`, aber dies ändert den inneren Anzeigetyp zu `flex`. Alle direkten Kinder dieser Box werden zu Flex-Elementen und verhalten sich gemäß der [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox)-Spezifikation.

Wenn Sie beginnen, mehr über CSS-Layout zu lernen, werden Sie auf [`flex`](/de/docs/Learn/CSS/CSS_layout/Flexbox) und verschiedene andere innere Werte stoßen, die Ihre Boxen haben können, zum Beispiel [`grid`](/de/docs/Learn/CSS/CSS_layout/Grids).

> [!NOTE]
> Um mehr über die Werte von display zu lesen und wie Boxen im Block- und Inline-Layout funktionieren, werfen Sie einen Blick auf den MDN-Leitfaden [Block- und Inline-Layout](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow).

## Beispiele für verschiedene Anzeigetypen

Das folgende Beispiel zeigt drei verschiedene HTML-Elemente, die alle einen äußeren Anzeigetyp von `block` haben.

- Ein Absatz mit einem in CSS hinzugefügten Rahmen. Der Browser rendert dies als Block-Box. Der Absatz beginnt auf einer neuen Zeile und erstreckt sich über die gesamte verfügbare Breite.

- Eine Liste, die mit `display: flex` angeordnet wird. Dies stellt Flex-Layout für die Kinder des Containers bereit, die Flex-Elemente sind. Die Liste selbst ist eine Block-Box und – wie der Absatz – erweitert sich über die gesamte Containerbreite und bricht auf eine neue Zeile.

- Ein Block-Absatz, in dem sich zwei `<span>`-Elemente befinden. Diese Elemente wären normalerweise `inline`, aber eines der Elemente hat eine Klasse "block", die auf `display: block` gesetzt ist.

{{EmbedGHLiveSample("css-examples/learn/box-model/block.html", '100%', 1100)}}

Im nächsten Beispiel können Sie sehen, wie `inline`-Elemente sich verhalten.

- Die `<span>`-Elemente im ersten Absatz sind standardmäßig Inline und erzwingen daher keine Zeilenumbrüche.

- Das `<ul>`-Element, das auf `display: inline-flex` gesetzt ist, erstellt eine Inline-Box, die einige Flex-Elemente enthält.

- Die beiden Absätze sind beide auf `display: inline` gesetzt. Der Inline-Flex-Container und die Absätze laufen alle auf einer Zeile zusammen, anstatt neue Zeilen zu erzeugen (wie sie es tun würden, wenn sie als Block-Elemente angezeigt würden).

**Um zwischen den Anzeigemodi zu wechseln, können Sie `display: inline` zu `display: block` oder `display: inline-flex` zu `display: flex` ändern.**

{{EmbedGHLiveSample("css-examples/learn/box-model/inline.html", '100%', 1100)}}

Das wichtigste, was man jetzt im Kopf behalten sollte, ist: Durch das Ändern des Wertes der `display`-Eigenschaft kann sich der äußere Anzeigetyp einer Box ändern, ob Block oder Inline. Dies ändert die Art und Weise, wie sie neben anderen Elementen im Layout angezeigt wird.

## Was ist das CSS-Box-Modell?

Das CSS-Box-Modell als Ganzes bezieht sich auf Block-Boxen und definiert, wie die verschiedenen Teile einer Box — Rand, Rahmen, Innenabstand und Inhalt — zusammenarbeiten, um eine Box zu erstellen, die Sie auf einer Seite sehen können. Inline-Boxen verwenden nur _einige_ der im Box-Modell definierten Verhaltensweisen.

Um Komplexität hinzuzufügen, gibt es ein Standard- und ein alternatives Box-Modell. Standardmäßig verwenden Browser das Standard-Box-Modell.

### Teile einer Box

Eine Block-Box in CSS besteht aus:

- **Inhaltsbox**: Der Bereich, in dem Ihr Inhalt angezeigt wird; Größe wird definiert durch Eigenschaften wie {{cssxref("inline-size")}} und {{cssxref("block-size")}} oder {{cssxref("width")}} und {{cssxref("height")}}.
- **Innenabstandsbox**: Der Innenabstand liegt um den Inhalt herum als Leerraum; Größe wird definiert durch {{cssxref("padding")}} und verwandte Eigenschaften.
- **Rahmenbox**: Die Rahmenbox umschließt den Inhalt und jeden Innenabstand; Größe wird definiert durch {{cssxref("border")}} und verwandte Eigenschaften.
- **Randbox**: Der Rand ist die äußerste Schicht, die den Inhalt, den Innenabstand und den Rahmen als Leerraum zwischen dieser Box und anderen Elementen umgibt; Größe wird definiert durch {{cssxref("margin")}} und verwandte Eigenschaften.

Das untenstehende Diagramm zeigt diese Schichten:

![Diagramm des Box-Modells](box-model.png)

### Das Standard-CSS-Box-Modell

Im Standard-Box-Modell, wenn Sie die Eigenschaften `inline-size` und `block-size` (oder `width` und `height`) für eine Box festlegen, definieren diese Werte die `inline-size` und `block-size` (`width` und `height` in horizontalen Sprachen) der _Inhaltsbox_. Jeder Innenabstand und Rahmen wird dann zu diesen Maßen hinzugefügt, um die Gesamtgröße der von der Box beanspruchten Fläche zu erhalten (siehe unten bild).

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

Der _tatsächliche_ Platz, den die Box beanspruchen wird, beträgt 410px in der Breite (350 + 25 + 25 + 5 + 5) und 210px in der Höhe (150 + 25 + 25 + 5 + 5).

![Zeigt die Größe der Box, wenn das Standard-Box-Modell verwendet wird.](standard-box-model.png)

> [!NOTE]
> Der Rand wird nicht zur tatsächlichen Größe der Box gezählt — sicher, er beeinflusst den gesamten Raum, den die Box auf der Seite einnehmen wird, aber nur den Raum außerhalb der Box. Das Flächenmaß der Box endet am Rahmen — er reicht nicht in den Rand hinein.

### Das alternative CSS-Box-Modell

Im alternativen Box-Modell ist jede Breite die Breite der sichtbaren Box auf der Seite. Die Breite des Inhaltsbereichs ist diese Breite minus der Breite des Innenabstands und des Rahmens (siehe Bild unten). Es ist nicht erforderlich, den Rahmen und den Innenabstand hinzuzufügen, um die tatsächliche Größe der Box zu erhalten.

Um das alternative Modell für ein Element zu aktivieren, setzen Sie `box-sizing: border-box` darauf:

```css
.box {
  box-sizing: border-box;
}
```

Wenn wir annehmen, dass die Box dasselbe CSS wie oben hat:

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

Jetzt beträgt der _tatsächliche_ Platz, den die Box beanspruchen wird, 350px in der Inline-Richtung und 150px in der Block-Richtung.

![Zeigt die Größe der Box, wenn das alternative Box-Modell verwendet wird.](alternate-box-model.png)

Um das alternative Box-Modell für alle Ihre Elemente zu verwenden (was bei Entwicklern eine häufige Wahl ist), setzen Sie die `box-sizing`-Eigenschaft auf das `<html>`-Element und setzen Sie alle anderen Elemente auf diesen Wert erben:

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

Um die zugrunde liegende Idee zu verstehen, können Sie den [Artikel über box-sizing von CSS Tricks](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/) lesen.

## Spielen mit Box-Modellen

Im folgenden Beispiel sehen Sie zwei Boxen. Beide haben eine Klasse von `.box`, die ihnen die gleiche `width`, `height`, `margin`, `border` und `padding` gibt. Der einzige Unterschied besteht darin, dass die zweite Box so eingestellt ist, dass sie das alternative Box-Modell verwendet.

**Können Sie die Größe der zweiten Box ändern (indem Sie CSS zur Klasse `.alternate` hinzufügen), sodass sie der ersten Box in Breite und Höhe entspricht?**

{{EmbedGHLiveSample("css-examples/learn/box-model/box-models.html", '100%', 1100)}}

> [!NOTE]
> Sie können eine Lösung für diese Aufgabe [hier](https://github.com/mdn/css-examples/blob/main/learn/solutions.md#the-box-model) finden.

### Verwenden von Browser-DevTools zur Anzeige des Box-Modells

Ihre [Entwicklerwerkzeuge des Browsers](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) können das Verständnis des Box-Modells erheblich erleichtern. Wenn Sie ein Element in den Firefox-DevTools inspizieren, können Sie die Größe des Elements plus seinen Rand, Innenabstand und Rahmen sehen. Das Inspizieren eines Elements auf diese Weise ist eine großartige Methode, um herauszufinden, ob Ihre Box wirklich die von Ihnen erwartete Größe hat!

![Inspektion des Box-Modells eines Elements mit Firefox DevTools](box-model-devtools.png)

## Ränder, Innenabstände und Rahmen

Sie haben die Eigenschaften {{cssxref("margin")}}, {{cssxref("padding")}} und {{cssxref("border")}} bereits in dem obigen Beispiel gesehen. Diese Eigenschaften sind **Kurzschreibweisen** und erlauben uns, alle vier Seiten der Box gleichzeitig einzustellen. Diese Kurzschreibweisen haben auch äquivalente Langschreibweise-Eigenschaften, die eine individuelle Steuerung der verschiedenen Seiten der Box ermöglichen.

Lassen Sie uns diese Eigenschaften im Detail erkunden.

### Rand

Der Rand ist ein unsichtbarer Raum um Ihre Box. Er drängt andere Elemente von der Box weg. Ränder können positive oder negative Werte haben. Das Setzen eines negativen Randes auf einer Seite Ihrer Box kann dazu führen, dass sie sich mit anderen Dingen auf der Seite überlappt. Egal ob Sie das Standard- oder alternative Box-Modell verwenden, der Rand wird immer nach der Berechnung der sichtbaren Boxgröße hinzugefügt.

Wir können alle Ränder eines Elements gleichzeitig mit der {{cssxref("margin")}}-Eigenschaft steuern oder jede Seite einzeln mit den äquivalenten Langschreibweise-Eigenschaften:

- {{cssxref("margin-top")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}

**Im folgenden Beispiel versuchen Sie, die Randwerte zu ändern, um zu sehen, wie die Box durch den Rand verschoben wird, da dieser Raum schafft oder entfernt (wenn es sich um einen negativen Rand handelt) zwischen diesem Element und dem umgebenden Element.**

{{EmbedGHLiveSample("css-examples/learn/box-model/margin.html", '100%', 800)}}

#### Randkollaps

Abhängig davon, ob zwei Elemente, deren Ränder sich berühren, positive oder negative Ränder haben, werden die Ergebnisse unterschiedlich sein:

- Zwei positive Ränder werden zu einem Rand kombiniert. Seine Größe entspricht dem größten individuellen Rand.
- Zwei negative Ränder werden zusammenfallen, und der kleinste (am weitesten von null entfernt) Wert wird verwendet.
- Wenn ein Rand negativ ist, wird sein Wert von der Gesamtsumme _subtrahiert_.

Im folgenden Beispiel haben wir zwei Absätze. Der obere Absatz hat einen `margin-bottom` von 50 Pixeln, der andere hat einen `margin-top` von 30 Pixeln. Die Ränder sind zusammengefallen, sodass der tatsächliche Abstand zwischen den Boxen 50 Pixel beträgt und nicht die Summe der beiden Ränder.

**Sie können dies testen, indem Sie den `margin-top` des zweiten Absatzes auf 0 setzen. Der sichtbare Rand zwischen den beiden Absätzen ändert sich nicht – er behält die 50 Pixel bei, die in der `margin-bottom` des ersten Absatzes gesetzt wurden. Wenn Sie ihn auf -10px setzen, sehen Sie, dass der Gesamtrand 40px beträgt – er wird von den 50px abgezogen.**

{{EmbedGHLiveSample("css-examples/learn/box-model/margin-collapse.html", '100%', 800)}}

Eine Reihe von Regeln bestimmen, wann Ränder zusammenfallen und wann nicht. Für weitere Informationen siehe die detaillierte Seite über [Mastering Margin Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing). Das wichtigste, was man sich merken sollte, ist, dass Randkollaps eine Sache ist, die passiert, wenn Sie mit Rändern Raum schaffen und nicht den erwarteten Raum erhalten.

### Rahmen

Der Rahmen wird zwischen dem Rand und dem Innenabstand einer Box gezeichnet. Wenn Sie das Standard-Box-Modell verwenden, wird die Größe des Rahmens zur `width` und `height` der Inhaltsbox hinzugezählt. Wenn Sie das alternative Box-Modell verwenden, je größer der Rahmen ist, desto kleiner ist die Inhaltsbox, da der Rahmen einen Teil der verfügbaren `width` und `height` der Elementbox einnimmt.

Zum Styling der Rahmen gibt es eine große Anzahl von Eigenschaften – es gibt vier Rahmen, und jeder Rahmen hat einen Stil, eine Breite und eine Farbe, die wir manipulieren könnten.

Sie können die Breite, den Stil oder die Farbe aller vier Rahmen gleichzeitig mit der {{cssxref("border")}}-Eigenschaft festlegen.

Um die Eigenschaften jeder Seite einzeln festzulegen, verwenden Sie:

- {{cssxref("border-top")}}
- {{cssxref("border-right")}}
- {{cssxref("border-bottom")}}
- {{cssxref("border-left")}}

Um die Breite, den Stil oder die Farbe aller Seiten festzulegen, verwenden Sie:

- {{cssxref("border-width")}}
- {{cssxref("border-style")}}
- {{cssxref("border-color")}}

Um die Breite, den Stil oder die Farbe einer einzelnen Seite festzulegen, verwenden Sie eine der mehr granularen Langschreibweise-Eigenschaften:

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

Im folgenden Beispiel haben wir verschiedene Kurz- und Langschreibweisen verwendet, um Rahmen zu erstellen. Spielen Sie mit den verschiedenen Eigenschaften, um zu überprüfen, ob Sie verstehen, wie sie funktionieren. Die MDN-Seiten für Rahmen-Eigenschaften geben Ihnen Informationen über die verschiedenen verfügbaren Rahmenstile.

{{EmbedGHLiveSample("css-examples/learn/box-model/border.html", '100%', 700)}}

### Innenabstand

Der Innenabstand liegt zwischen dem Rahmen und dem Inhaltsbereich und wird verwendet, um den Inhalt vom Rahmen wegzudrücken. Im Gegensatz zu Rändern können Sie keinen negativen Innenabstand haben. Jeder Hintergrund, der auf Ihr Element angewendet wird, wird hinter dem Innenabstand angezeigt.

Die {{cssxref("padding")}}-Eigenschaft steuert den Innenabstand auf allen Seiten eines Elements. Um jede Seite einzeln zu steuern, verwenden Sie diese Langschreibweise-Eigenschaften:

- {{cssxref("padding-top")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}

Im folgenden Beispiel können Sie die Werte für den Innenabstand der Klasse `.box` ändern, um zu sehen, dass sich dadurch der Text-Anfang in Bezug auf die Box ändert. Sie können auch den Innenabstand der Klasse `.container` ändern, um Platz zwischen dem Container und der Box zu schaffen. Sie können den Innenabstand eines beliebigen Elements ändern, um Platz zwischen seinem Rahmen und dem, was sich innerhalb des Elements befindet, zu schaffen.

{{EmbedGHLiveSample("css-examples/learn/box-model/padding.html", '100%', 700)}}

## Das Box-Modell und Inline-Boxen

Alles oben Gesagte gilt vollständig für Block-Boxen. Einige der Eigenschaften können auch auf Inline-Boxen angewendet werden, wie sie z.B. durch ein `<span>`-Element erstellt werden.

Im folgenden Beispiel haben wir ein `<span>` innerhalb eines Absatzes. Wir haben ihm eine `width`, `height`, `margin`, `border` und `padding` zugewiesen. Sie können sehen, dass die Breite und Höhe ignoriert werden. Der obere und untere Rand, Innenabstand und Rahmen werden beachtet, ändern jedoch nicht die Beziehung anderer Inhalte zu unserer Inline-Box. Der Innenabstand und Rahmen überlappen andere Wörter im Absatz. Der linke und rechte Innenabstand, Ränder und Rahmen verschieben andere Inhalte weg von der Box.

{{EmbedGHLiveSample("css-examples/learn/box-model/inline-box-model.html", '100%', 700)}}

## Die Verwendung von display: inline-block

`display: inline-block` ist ein spezieller Wert des `display`, der einen Mittelweg zwischen `inline` und `block` bietet. Verwenden Sie es, wenn Sie nicht möchten, dass ein Element auf eine neue Zeile wechselt, es aber `width` und `height` respektieren soll und die Überlappung vermeiden soll, die oben gesehen wurde.

Ein Element mit `display: inline-block` macht einen Teil der Block-Dinge, die wir bereits kennen:

- Die Eigenschaften `width` und `height` werden beachtet.
- `padding`, `margin` und `border` bewirken, dass andere Elemente von der Box weggeschoben werden.

Es wechselt jedoch nicht auf eine neue Zeile und wird nur größer als sein Inhalt, wenn Sie ausdrücklich die Eigenschaften `width` und `height` hinzufügen.

**Im nächsten Beispiel haben wir unserem `<span>`-Element `display: inline-block` hinzugefügt. Versuchen Sie, dies zu `display: block` zu ändern oder die Zeile vollständig zu entfernen, um den Unterschied in den Darstellungsmodellen zu sehen.**

{{EmbedGHLiveSample("css-examples/learn/box-model/inline-block.html", '100%', 800)}}

Dies kann nützlich sein, wenn Sie einem Link eine größere Trefferfläche geben möchten, indem Sie `padding` hinzufügen. `<a>` ist ein Inline-Element wie `<span>`; Sie können `display: inline-block` verwenden, um das Hinzufügen von Innenabständen darauf zu ermöglichen, was es für einen Benutzer einfacher macht, auf den Link zu klicken.

Sie sehen dies ziemlich häufig in Navigationsleisten. Die untenstehende Navigation wird in einer Zeile mit Flexbox angezeigt und wir haben dem `<a>`-Element Innenabstände hinzugefügt, da wir die `background-color` ändern möchten, wenn das `<a>`-Element schwebt. Der Innenabstand scheint den Rahmen auf dem `<ul>`-Element zu überlappen. Dies liegt daran, dass das `<a>` ein Inline-Element ist.

**Fügen Sie `display: inline-block` zur Regel mit dem `.links-list a`-Selektor hinzu, und Sie werden sehen, wie es dieses Problem behebt, indem es den Innenabstand von anderen Elementen respektieren lässt.**

{{EmbedGHLiveSample("css-examples/learn/box-model/inline-block-nav.html", '100%', 700)}}

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen verinnerlicht haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Das Box-Modell](/de/docs/Learn/CSS/Building_blocks/Box_Model_Tasks).

## Zusammenfassung

Das ist das meiste, was Sie über das Box-Modell verstehen müssen. Möglicherweise möchten Sie in Zukunft zu dieser Lektion zurückkehren, falls Sie jemals verwirrt sind über die Größe von Boxen in Ihrem Layout.

Im nächsten Artikel werden wir uns ansehen, wie [Hintergründe und Ränder](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders) verwendet werden können, um Ihre einfachen Boxen interessanter aussehen zu lassen.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_layers", "Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks")}}
