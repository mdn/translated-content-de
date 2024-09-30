---
title: Hintergründe und Rahmen
slug: Learn/CSS/Building_blocks/Backgrounds_and_borders
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks")}}

In dieser Lektion werden wir einen Blick auf einige der kreativen Möglichkeiten werfen, die Sie mit CSS-Hintergründen und -Rahmen umsetzen können. Vom Hinzufügen von Verläufen, Hintergrundbildern und abgerundeten Ecken bis hin zu den Antworten auf viele Styling-Fragen in CSS.

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
        >), und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS Erste Schritte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen, wie man den Hintergrund und die Umrandung von Boxen gestaltet.</td>
    </tr>
  </tbody>
</table>

## Hintergründe in CSS gestalten

Die CSS-Eigenschaft {{cssxref("background")}} ist eine Kurzform für eine Reihe von Langform-Eigenschaften des Hintergrunds, die wir in dieser Lektion kennenlernen werden. Wenn Sie eine komplexe Hintergrundeigenschaft in einem Stylesheet entdecken, könnte sie ein wenig schwer verständlich erscheinen, da so viele Werte auf einmal übergeben werden können.

```css
.box {
  background:
    linear-gradient(
        105deg,
        rgb(255 255 255 / 20%) 39%,
        rgb(51 56 57 / 100%) 96%
      )
      center center / 400px 200px no-repeat,
    url(big-star.png) center no-repeat,
    rebeccapurple;
}
```

Wir werden später im Tutorial darauf zurückkommen, wie die Kurzform funktioniert, aber zuerst lassen Sie uns einen Blick auf die verschiedenen Dinge werfen, die Sie mit Hintergründen in CSS tun können, indem wir uns die einzelnen Hintergrundeigenschaften ansehen.

### Hintergrundfarben

Die Eigenschaft {{cssxref("background-color")}} definiert die Hintergrundfarbe eines Elements in CSS. Die Eigenschaft akzeptiert jeden gültigen [`<color>`](/de/docs/Web/CSS/color_value). Eine `background-color` erstreckt sich unter dem Inhalt und der Padding-Box des Elements.

Im untenstehenden Beispiel haben wir verschiedene Farbwerte verwendet, um der Box, einer Überschrift und einem {{htmlelement("span")}}-Element eine Hintergrundfarbe hinzuzufügen.

**Experimentieren Sie mit diesen, indem Sie jeden verfügbaren [`<color>`](/de/docs/Web/CSS/color_value) verwenden.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/color.html", '100%', 700)}}

### Hintergrundbilder

Die Eigenschaft {{cssxref("background-image")}} ermöglicht die Anzeige eines Bildes im Hintergrund eines Elements. Im Beispiel unten haben wir zwei Boxen — eine hat ein Hintergrundbild, das größer ist als die Box ([balloons.jpg](https://mdn.github.io/css-examples/learn/backgrounds-borders/balloons.jpg)). Die andere hat ein kleines Bild eines einzelnen Sterns ([star.png](https://mdn.github.io/css-examples/learn/backgrounds-borders/star.png)).

Dieses Beispiel zeigt zwei Dinge über Hintergrundbilder. Standardmäßig wird das große Bild nicht verkleinert, um in die Box zu passen, sodass wir nur eine kleine Ecke davon sehen, während das kleine Bild gekachelt wird, um die Box zu füllen.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/background-image.html", '100%', 700)}}

**Wenn Sie neben einem Hintergrundbild auch eine Hintergrundfarbe festlegen, wird das Bild über der Farbe angezeigt. Fügen Sie dem obigen Beispiel eine `background-color`-Eigenschaft hinzu, um dies in der Praxis zu sehen.**

#### Hintergrundwiederholung steuern

Die Eigenschaft {{cssxref("background-repeat")}} wird verwendet, um das Kachelverhalten von Bildern zu steuern. Die verfügbaren Werte sind:

- `no-repeat` — verhindert das Wiederholen des Hintergrunds vollständig.
- `repeat-x` — Wiederholung horizontal.
- `repeat-y` — Wiederholung vertikal.
- `repeat` — der Standard; Wiederholung in beide Richtungen.
- `space` — so oft wie möglich wiederholen und zusätzlichen Platz zwischen den Bildern hinzufügen, wenn zusätzlicher Platz verfügbar ist.
- `round` — ähnlich wie `space`, aber streckt die Bilder, um zusätzlichen Platz zu füllen.

**Probieren Sie diese Werte im untenstehenden Beispiel aus. Wir haben den Wert auf `no-repeat` gesetzt, sodass Sie nur einen Stern sehen werden. Probieren Sie die verschiedenen Werte — `repeat-x` und `repeat-y` — aus, um zu sehen, welche Auswirkungen sie haben.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/repeat.html", '100%', 600)}}

#### Hintergrundbild größenanpassen

Das _balloons.jpg_-Bild, das im anfänglichen Hintergrundbildbeispiel verwendet wurde, ist ein großes Bild, das aufgrund seiner Größe größer als das Element ist, auf dem es als Hintergrund dient, abgeschnitten wurde. In diesem Fall könnten wir die Eigenschaft {{cssxref("background-size")}} verwenden, die {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werte annehmen kann, um das Bild auf eine Größe innerhalb des Hintergrunds zu bringen.

Sie können auch Schlüsselwörter verwenden:

- `cover` — der Browser wird das Bild so groß machen, dass es den gesamten Boxbereich abdeckt, während das [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) beibehalten wird. In diesem Fall wird ein Teil des Bildes wahrscheinlich außerhalb der Box landen.
- `contain` — der Browser wird das Bild auf die richtige Größe bringen, damit es innerhalb der Box passt. In diesem Fall könnten Lücken an den Seiten oder oben und unten im Bild entstehen, wenn das Seitenverhältnis des Bildes von dem der Box abweicht.

Im Beispiel unten hat das _balloons.jpg_-Bild Längeneinheiten gesetzt, um es in der Box zu dimensionieren. Sie können sehen, dass dies das Bild verzerrt hat.

Probieren Sie Folgendes aus:

- Ändern Sie die verwendeten Längeneinheiten, um die Größe des Hintergrunds zu ändern.
- Entfernen Sie die Längeneinheiten und sehen Sie, was passiert, wenn Sie `background-size: cover` oder `background-size: contain` verwenden.
- Wenn Ihr Bild kleiner als die Box ist, können Sie den Wert von `background-repeat` ändern, um das Bild zu wiederholen.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/size.html", '100%', 800)}}

#### Hintergrundbild positionieren

Die Eigenschaft {{cssxref("background-position")}} erlaubt es Ihnen, die Position des Hintergrundbildes auf der Box, auf die es angewendet wird, zu wählen. Dies verwendet ein Koordinatensystem, bei dem die obere linke Ecke der Box `(0,0)` ist, und die Box entlang der horizontalen (`x`) und vertikalen (`y`) Achsen positioniert wird.

> [!NOTE]
> Der Standardwert für `background-position` ist `(0,0)`.

Die häufigsten `background-position`-Werte nehmen zwei einzelne Werte an — einen horizontalen Wert gefolgt von einem vertikalen Wert.

Sie können Stichwörter wie `top` und `right` verwenden (sehen Sie sich die anderen auf der Seite {{cssxref("background-position")}} an):

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top center;
}
```

Und {{cssxref("length", "Längen")}}, sowie {{cssxref("percentage", "Prozentangaben")}}:

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: 20px 10%;
}
```

Sie können auch Stichwortwerte mit Längen oder Prozentsätzen mischen, wobei in diesem Fall der erste Wert sich auf die horizontale Position oder den Offset und der zweite auf die vertikale beziehen muss. Zum Beispiel:

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: 20px top;
}
```

Schließlich können Sie auch eine Vier-Wert-Syntax verwenden, um einen Abstand von bestimmten Kanten der Box anzugeben — die Längeneinheit ist in diesem Fall ein Offset von dem vorausgehenden Wert. In dem untenstehenden CSS positionieren wir den Hintergrund 20px von oben und 10px von rechts:

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

**Verwenden Sie das untenstehende Beispiel, um mit diesen Werten zu experimentieren und den Stern innerhalb der Box zu verschieben.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/position.html", '100%', 600)}}

> **Hinweis:** `background-position` ist eine Kurzform für {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}, die es Ihnen ermöglichen, die Achsenpositionswerte individuell festzulegen.

### Verlaufshintergründe

Ein Verlauf — wenn er für einen Hintergrund verwendet wird — verhält sich wie ein Bild und wird ebenfalls mit der Eigenschaft {{cssxref("background-image")}} gesetzt.

Sie können mehr über die verschiedenen Arten von Verläufen und deren Möglichkeiten auf der MDN-Seite für den [`<gradient>`](/de/docs/Web/CSS/gradient) Datentyp erfahren. Eine unterhaltsame Möglichkeit, mit Verläufen zu experimentieren, besteht darin, einen der vielen auf dem Web verfügbaren CSS-Verlaufsgeneratoren zu verwenden, wie z. B. [CSSGradient.io](https://cssgradient.io/). Sie können einen Verlauf erstellen und den Quellcode kopieren und einfügen, der ihn erstellt.

Probieren Sie einige verschiedene Verläufe im untenstehenden Beispiel aus. In den beiden Boxen haben wir jeweils einen linearen Verlauf, der über die ganze Box gestreckt ist, und einen radialen Verlauf mit einer festgelegten Größe, der sich daher wiederholt.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/gradients.html", '100%', 700)}}

### Mehrere Hintergrundbilder

Es ist auch möglich, mehrere Hintergrundbilder zu haben — Sie geben mehrere `background-image`-Werte in einem einzigen Eigenschaftswert an, wobei Sie jeden mit einem Komma trennen.

Wenn Sie dies tun, überlagern sich möglicherweise Hintergrundbilder. Die Hintergründe werden wie folgt gestapelt: Das zuletzt angegebene Hintergrundbild liegt unten, und jedes vorherige Bild wird über dem folgenden im Code gestapelt.

> [!NOTE]
> Verläufe können problemlos mit regulären Hintergrundbildern gemischt werden.

Die anderen `background-*`-Eigenschaften können ebenfalls komma-separierte Werte auf die gleiche Weise wie `background-image` haben:

```css
background-image: url(image1.png), url(image2.png), url(image3.png),
  url(image4.png);
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

Jeder Wert der verschiedenen Eigenschaften wird den Werten an der gleichen Position in den anderen Eigenschaften entsprechen. Oben wird beispielsweise das `background-repeat`-Wert von `image1` `no-repeat` sein. Aber was passiert, wenn verschiedene Eigenschaften unterschiedliche Anzahlen an Werten haben? Die Antwort ist, dass die kleineren Anzahlen an Werten zirkulieren — im obigen Beispiel gibt es vier Hintergrundbilder, aber nur zwei `background-position`-Werte. Die ersten beiden Positionswerte werden auf die ersten beiden Bilder angewendet, dann kehren sie wieder zurück — `image3` erhält den ersten Positionswert, und `image4` erhält den zweiten Positionswert.

**Spielen wir das mal durch. Das Beispiel unten beinhaltet zwei Hintergrundbilder. Um die Stapelreihenfolge zu demonstrieren, versuchen Sie, zu wechseln, welches Hintergrundbild in der Liste zuerst steht. Oder experimentieren Sie mit den anderen Eigenschaften, um die Position, Größe oder Wiederholungswerte zu ändern.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/multiple-background-image.html", '100%', 600)}}

### Hintergrundbefestigung

Eine andere Möglichkeit, die wir für Hintergründe haben, ist anzugeben, wie sie beim Scrollen der Inhalte scrollen. Dies wird mit der Eigenschaft {{cssxref("background-attachment")}} gesteuert, die die folgenden Werte annehmen kann:

- `scroll`: bewirkt, dass der Hintergrund eines Elements scrollt, wenn die Seite gescrollt wird. Wenn der Inhalt des Elements gescrollt wird, bewegt sich der Hintergrund nicht. Im Effekt ist der Hintergrund auf dieselbe Position auf der Seite fixiert, sodass er scrollt, wenn die Seite scrollt.
- `fixed`: bewirkt, dass der Hintergrund eines Elements am Ansichtsfenster fixiert ist, damit er nicht scrollt, wenn die Seite oder der Inhalt des Elements gescrollt wird. Er bleibt immer an derselben Position auf dem Bildschirm.
- `local`: fixiert den Hintergrund an dem Element, auf dem es gesetzt ist, sodass beim Scrollen des Elements der Hintergrund mit ihm scrollt.

Die Eigenschaft {{cssxref("background-attachment")}} hat nur dann eine Wirkung, wenn es einen Inhalt zum Scrollen gibt, also haben wir eine Demo erstellt, um die Unterschiede zwischen den drei Werten zu demonstrieren — schauen Sie sich [background-attachment.html](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html) an (sehen Sie sich auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/css/styling-boxes/backgrounds) hier an).

### Verwendung der Hintergrund-Kurzform

Wie zu Beginn dieser Lektion erwähnt, sehen Sie häufig, dass Hintergründe mit der Eigenschaft {{cssxref("background")}} angegeben werden. Diese Kurzform ermöglicht es Ihnen, alle verschiedenen Eigenschaften auf einmal festzulegen.

Wenn mehrere Hintergründe verwendet werden, müssen Sie alle Eigenschaften für den ersten Hintergrund festlegen und dann nach einem Komma Ihren nächsten Hintergrund hinzufügen. Im untenstehenden Beispiel haben wir einen Verlauf mit einer Größe und Position, dann ein Bildhintergrund mit `no-repeat` und einer Position und dann eine Farbe.

Es gibt ein paar Regeln, die befolgt werden müssen, wenn Kurzwerte für Hintergrundbilder geschrieben werden, z.B.:

- Eine `background-color` darf nur nach dem endgültigen Komma angegeben werden.
- Der Wert von `background-size` darf nur unmittelbar nach `background-position` enthalten sein, getrennt durch das '/'-Zeichen, wie folgt: `center/80%`.

Schauen Sie auf der MDN-Seite für {{cssxref("background")}} nach, um alle Überlegungen zu sehen.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/background.html", '100%', 900)}}

### Barrierefreiheitserwägungen bei Hintergründen

Wenn Sie Text auf einem Hintergrundbild oder einer Hintergrundfarbe platzieren, sollten Sie darauf achten, dass Sie genug [Kontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) haben, damit der Text für Ihre Besucher lesbar ist. Wenn ein Bild angegeben wird und Text auf diesem Bild platziert werden soll, sollten Sie auch eine `background-color` angeben, die den Text lesbar macht, falls das Bild nicht geladen wird.

Screenreader können Hintergrundbilder nicht erkennen; daher sollten sie rein dekorativ sein. Jeglicher wichtiger Inhalt sollte Teil der HTML-Seite sein und nicht in einem Hintergrund enthalten sein.

## Rahmen

Beim Lernen über das Box-Modell haben wir entdeckt, wie Rahmen die Größe unserer Box beeinflussen. In dieser Lektion schauen wir uns an, wie man Rahmen kreativ nutzen kann. Typischerweise verwenden wir eine Kurzform-Eigenschaft, wenn wir Rahmen zu einem Element mit CSS hinzufügen, die die Farbe, Breite und den [Stil](/de/docs/Web/CSS/line-style) des Rahmens in einer CSS-Zeile festlegt.

Wir können einen Rahmen für alle vier Seiten einer Box mit {{cssxref("border")}} festlegen:

```css
.box {
  border: 1px solid black;
}
```

Oder wir können eine Kante der Box anvisieren, zum Beispiel:

```css
.box {
  border-top: 1px solid black;
}
```

Die einzelnen Eigenschaften umfassen die Kurzformeigenschaften {{cssxref("border-width")}}, {{cssxref("border-style")}} und {{cssxref("border-color")}}:

```css
.box {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
```

Es gibt Langform-Eigenschaften für Breite, Stil und Farbe für jede der vier Seiten:

```css
.box {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: black;
}
```

> [!NOTE]
> Diese oberen, rechten, unteren und linken Rahmen-Eigenschaften haben auch zugeordnete [_logische_ Rahmen-Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties), die sich auf den Schreibmodus des Dokuments beziehen (z.B. Links-nach-Rechts oder Rechts-nach-Links Text, oder oben-nach-unten). Wir werden diese im nächsten Unterricht erkunden, der [die Handhabung verschiedener Textausrichtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions) behandelt.

Es gibt eine Vielzahl von Stilen, die Sie für Rahmen verwenden können. Im Beispiel unten haben wir zwei verschiedene Rahmenstile für die Box und zwei verschiedene Rahmenstile für die Überschrift verwendet. Spielen Sie mit dem Rahmenstil, der Breite und der Farbe, um zu sehen, wie Rahmen funktionieren.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/borders.html", '100%', 800)}}

### Abgerundete Ecken

Das Abrunden von Ecken an einer Box wird durch die Eigenschaft {{cssxref("border-radius")}} und die zugehörigen Langformatspezifikationen, die sich auf jede Ecke der Box beziehen, erreicht. Zwei Längen oder Prozentangaben können als Wert verwendet werden, wobei der erste Wert den horizontalen Radius und der zweite den vertikalen Radius definiert. In vielen Fällen geben Sie nur einen Wert ein, der für beide verwendet wird.

Zum Beispiel, um alle vier Ecken einer Box mit einem 10px-Radius zu versehen:

```css
.box {
  border-radius: 10px;
}
```

Oder um die obere rechte Ecke mit einem horizontalen Radius von `1em` und einem vertikalen Radius von 10% zu versehen:

```css
.box {
  border-top-right-radius: 1em 10%;
}
```

> [!NOTE]
> Wie bei den Rahmen-Eigenschaften oben, haben diese border-radius-Eigenschaften auch zugeordnete [_logische_ border-radius-Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties).

Wir haben alle vier Ecken im untenstehenden Beispiel gesetzt und dann die Werte für die obere rechte Ecke geändert, um sie unterschiedlich zu machen. Sie können mit den Werten spielen, um die Ecken zu ändern. Sehen Sie sich die Eigenschaftsseite von {{cssxref("border-radius")}} an, um die verfügbaren Syntaxoptionen zu sehen. Der [border-radius-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator) kann verwendet werden, um Werte für abgerundete Ecken für Sie auszugeben.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/corners.html", '100%', 800)}}

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Hintergründe und Rahmen](/de/docs/Learn/CSS/Building_blocks/Test_your_skills_backgrounds_and_borders).

## Zusammenfassung

Wir haben hier ziemlich viel behandelt, und Sie können sehen, dass es ganz schön viel ist, einem Kasten einen Hintergrund oder einen Rahmen hinzuzufügen. Erkunden Sie die verschiedenen Eigenschaftsseiten, wenn Sie mehr über eine der hier diskutierten Funktionen erfahren möchten. Fast jede Seite auf MDN hat Beispiele, mit denen Sie Ihr Wissen erweitern können.

Im nächsten Artikel werden wir herausfinden, wie der Schreibmodus Ihres Dokuments mit Ihrem CSS interagiert. Was passiert, wenn der Text nicht von links nach rechts fließt?

{{PreviousMenuNext("Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks")}}
