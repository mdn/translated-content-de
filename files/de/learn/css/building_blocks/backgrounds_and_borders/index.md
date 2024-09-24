---
title: Hintergründe und Rahmen
slug: Learn/CSS/Building_blocks/Backgrounds_and_borders
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks")}}

In dieser Lektion werden wir uns einige der kreativen Möglichkeiten ansehen, die CSS-Hintergründe und Rahmen bieten. Vom Hinzufügen von Verläufen, Hintergrundbildern und abgerundeten Ecken bis hin zu vielen Styling-Fragen sind Hintergründe und Rahmen oft die Antwort in CSS.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, grundlegende Kenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, grundlegende HTML-Kenntnisse (Studieren
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (Studieren
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wie man den Hintergrund und den Rahmen von Boxen stylt.</td>
    </tr>
  </tbody>
</table>

## Hintergründe in CSS stylen

Die CSS-{{cssxref("background")}}-Eigenschaft ist eine Kurzform für eine Reihe von umfangreichen Hintergrundeigenschaften, die wir in dieser Lektion kennenlernen werden. Wenn Sie eine komplexe Hintergrundeigenschaft in einem Stylesheet entdecken, kann es ein wenig schwer verständlich erscheinen, da viele Werte gleichzeitig übergeben werden können.

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

Wir werden später im Tutorial darauf zurückkommen, wie die Kurzform funktioniert, aber zuerst schauen wir uns an, welche verschiedenen Dinge Sie mit Hintergründen in CSS tun können, indem wir die einzelnen Hintergrundeigenschaften betrachten.

### Hintergrundfarben

Die {{cssxref("background-color")}}-Eigenschaft definiert die Hintergrundfarbe eines beliebigen Elements in CSS. Die Eigenschaft akzeptiert jeden gültigen [`<color>`](/de/docs/Web/CSS/color_value). Eine `background-color` erstreckt sich unter den Inhalts- und Padding-Box des Elements.

Im Beispiel unten haben wir verschiedene Farbwerte verwendet, um eine Hintergrundfarbe zur Box, einer Überschrift und einem {{htmlelement("span")}}-Element hinzuzufügen.

**Experimentieren Sie mit diesen, indem Sie jeden verfügbaren [`<color>`](/de/docs/Web/CSS/color_value)-Wert verwenden.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/color.html", '100%', 700)}}

### Hintergrundbilder

Die {{cssxref("background-image")}}-Eigenschaft ermöglicht die Anzeige eines Bildes im Hintergrund eines Elements. Im Beispiel unten haben wir zwei Boxen — eine hat ein Hintergrundbild, das größer als die Box ist ([balloons.jpg](https://mdn.github.io/css-examples/learn/backgrounds-borders/balloons.jpg)). Die andere hat ein kleines Bild eines einzelnen Sterns ([star.png](https://mdn.github.io/css-examples/learn/backgrounds-borders/star.png)).

Dieses Beispiel zeigt zwei Dinge über Hintergrundbilder. Standardmäßig wird das große Bild nicht verkleinert, um in die Box zu passen, sodass wir nur eine kleine Ecke davon sehen, während das kleine Bild gekachelt wird, um die Box zu füllen.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/background-image.html", '100%', 700)}}

**Wenn Sie zusätzlich zu einem Hintergrundbild eine Hintergrundfarbe angeben, wird das Bild über der Farbe angezeigt. Versuchen Sie, dem obigen Beispiel eine `background-color`-Eigenschaft hinzuzufügen, um dies in Aktion zu sehen.**

#### Steuerung des Hintergrund-Wiederholverhaltens

Die {{cssxref("background-repeat")}}-Eigenschaft wird verwendet, um das Kachelverhalten von Bildern zu kontrollieren. Die verfügbaren Werte sind:

- `no-repeat` — verhindert, dass der Hintergrund insgesamt wiederholt wird.
- `repeat-x` — horizontal wiederholen.
- `repeat-y` — vertikal wiederholen.
- `repeat` — die Standardeinstellung; in beide Richtungen wiederholen.
- `space` — wiederholen Sie so oft wie möglich und fügen Sie, wenn zusätzlicher Platz verfügbar ist, Platz zwischen den Bildern hinzu.
- `round` — ähnlich wie `space`, dehnt jedoch die Bilder aus, um den zusätzlichen Platz zu füllen.

**Probieren Sie diese Werte im folgenden Beispiel aus. Wir haben den Wert auf `no-repeat` gesetzt, sodass Sie nur einen Stern sehen werden. Versuchen Sie die verschiedenen Werte — `repeat-x` und `repeat-y` — um zu sehen, welche Effekte sie haben.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/repeat.html", '100%', 600)}}

#### Größenanpassung des Hintergrundbildes

Das _balloons.jpg_-Bild, das im anfänglichen Hintergrundbild-Beispiel verwendet wird, ist ein großes Bild, das aufgrund seiner Größe beschnitten wurde. In diesem Fall könnten wir die {{cssxref("background-size")}}-Eigenschaft verwenden, die {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werte annehmen kann, um das Bild passend zu skalieren.

Sie können auch Schlüsselwörter verwenden:

- `cover` — der Browser macht das Bild gerade groß genug, dass es den gesamten Boxbereich vollständig abdeckt und dabei sein {{glossary("aspect ratio")}} beibehält. In diesem Fall liegt ein Teil des Bildes wahrscheinlich außerhalb der Box.
- `contain` — der Browser macht das Bild so groß, dass es in die Box passt. In diesem Fall erhalten Sie möglicherweise Lücken an den Seiten oder oben und unten im Bild, wenn das Seitenverhältnis des Bildes von dem der Box abweicht.

Im Beispiel unten hat das _balloons.jpg_-Bild Längeneinheiten, die es passend in die Box skalieren. Sie können sehen, dass das Bild verzerrt wurde.

Probieren Sie Folgendes.

- Ändern Sie die Längeneinheiten, die verwendet werden, um die Größe des Hintergrundes zu ändern.
- Entfernen Sie die Längeneinheiten und sehen Sie, was passiert, wenn Sie `background-size: cover` oder `background-size: contain` verwenden.
- Wenn Ihr Bild kleiner als die Box ist, können Sie den Wert von `background-repeat` ändern, um das Bild zu wiederholen.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/size.html", '100%', 800)}}

#### Positionierung des Hintergrundbildes

Die {{cssxref("background-position")}}-Eigenschaft erlaubt es Ihnen, die Position zu wählen, an der das Hintergrundbild in der Box erscheinen soll, auf die es angewendet wird. Dies verwendet ein Koordinatensystem, bei dem die obere linke Ecke der Box `(0,0)` ist, und die Box entlang der horizontalen (`x`) und vertikalen (`y`) Achsen positioniert wird.

> [!NOTE]
> Der Standardwert für `background-position` ist `(0,0)`.

Die häufigsten `background-position`-Werte nehmen zwei einzelne Werte — einen horizontalen Wert gefolgt von einem vertikalen Wert — an.

Sie können Schlüsselwörter wie `top` und `right` verwenden (schlagen Sie die anderen auf der {{cssxref("background-position")}}-Seite nach):

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top center;
}
```

Und {{cssxref("length", "Längen")}}, und {{cssxref("percentage", "Prozentsätze")}}:

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: 20px 10%;
}
```

Sie können auch Schlüsselwortwerte mit Längen oder Prozentsätzen mischen, wobei der erste Wert sich auf die horizontale Position oder Verschiebung beziehen muss und der zweite auf die vertikale. Zum Beispiel:

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: 20px top;
}
```

Schließlich können Sie auch eine 4-Werte-Syntax verwenden, um einen Abstand von bestimmten Kanten der Box anzugeben — die Längeneinheit ist in diesem Fall eine Verschiebung vom vorhergehenden Wert. Im folgenden CSS positionieren wir den Hintergrund 20px von oben und 10px von rechts:

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

**Verwenden Sie das untenstehende Beispiel, um mit diesen Werten zu experimentieren und den Stern innerhalb der Box zu verschieben.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/position.html", '100%', 600)}}

> **Hinweis:** `background-position` ist eine Kurzform für {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}, die es Ihnen ermöglichen, die verschiedenen Achsenpositionen individuell zu setzen.

### Verlaufshintergründe

Ein Verlauf — wenn er für einen Hintergrund verwendet wird — funktioniert wie ein Bild und wird ebenfalls durch die {{cssxref("background-image")}}-Eigenschaft gesetzt.

Weitere Informationen über die verschiedenen Arten von Verläufen und was Sie mit ihnen tun können, finden Sie auf der MDN-Seite für den [`<gradient>`](/de/docs/Web/CSS/gradient)-Datentyp. Eine unterhaltsame Möglichkeit, mit Verläufen zu experimentieren, besteht darin, einen der vielen CSS-Gradientengeneratoren im Web zu verwenden, wie [CSSGradient.io](https://cssgradient.io/). Sie können einen Verlauf erstellen und den Quellcode kopieren und einfügen, der ihn erzeugt.

Probieren Sie einige verschiedene Verläufe im Beispiel unten aus. In den beiden Boxen gibt es jeweils einen linearen Verlauf, der über die gesamte Box gestreckt ist, und einen radialen Verlauf mit einer festgelegten Größe, der daher wiederholt wird.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/gradients.html", '100%', 700)}}

### Mehrere Hintergrundbilder

Es ist auch möglich, mehrere Hintergrundbilder zu haben — Sie geben mehrere `background-image`-Werte in einem einzigen Eigenschaftswert an, wobei jeder durch ein Komma getrennt wird.

Wenn Sie dies tun, können sich die Hintergrundbilder überlappen. Die Hintergründe werden mit dem zuletzt aufgelisteten Hintergrundbild am unteren Ende des Stapels geschichtet, und jedes vorherige Bild stapelt sich auf dem, das ihm im Code folgt.

> [!NOTE]
> Verläufe können problemlos mit regulären Hintergrundbildern gemischt werden.

Die anderen `background-*`-Eigenschaften können ebenfalls kommagetrennte Werte in der gleichen Weise wie `background-image` haben:

```css
background-image: url(image1.png), url(image2.png), url(image3.png),
  url(image4.png);
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

Jeder Wert der verschiedenen Eigenschaften korrespondiert mit den Werten an der gleichen Position in den anderen Eigenschaften. Im obigen Beispiel wird z.B. der `background-repeat`-Wert von `image1` `no-repeat` sein. Was passiert jedoch, wenn verschiedene Eigenschaften unterschiedliche Anzahlen von Werten haben? Die Antwort ist, dass die kleineren Anzahl von Werten zyklisch verwendet werden — im obigen Beispiel gibt es vier Hintergrundbilder, aber nur zwei `background-position`-Werte. Die ersten beiden Positionswerte werden auf die ersten beiden Bilder angewendet, dann werden sie zyklisch wiederholt — `image3` wird der erste Positionswert zugewiesen und `image4` wird der zweite Positionswert zugewiesen.

**Lassen Sie uns spielen. Das untenstehende Beispiel enthält zwei Hintergrundbilder. Um die Stapelreihenfolge zu demonstrieren, versuchen Sie, welches Hintergrundbild zuerst in der Liste kommt, oder spielen Sie mit den anderen Eigenschaften, um die Position, Größe oder Wiederholwerte zu ändern.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/multiple-background-image.html", '100%', 600)}}

### Hintergrund-Anhang

Eine weitere Möglichkeit, die wir für Hintergründe haben, ist die Angabe, wie sie beim Scrollen des Inhalts scrollen. Dies wird mit der {{cssxref("background-attachment")}}-Eigenschaft gesteuert, die folgende Werte annehmen kann:

- `scroll`: bewirkt, dass der Hintergrund des Elements scrollt, wenn die Seite gescrollt wird. Wenn der Inhalt des Elements gescrollt wird, bewegt sich der Hintergrund nicht. Im Wesentlichen ist der Hintergrund an dieselbe Position auf der Seite gebunden, sodass er sich beim Scrollen der Seite bewegt.
- `fixed`: bewirkt, dass der Hintergrund eines Elements an das Ansichtsfenster gebunden ist, sodass er nicht scrollt, wenn die Seite oder der Inhalt des Elements gescrollt wird. Es bleibt immer an derselben Position auf dem Bildschirm.
- `local`: fixiert den Hintergrund an das Element, auf dem er gesetzt ist, sodass der Hintergrund mit ihm scrollt, wenn Sie das Element scrollen.

Die {{cssxref("background-attachment")}}-Eigenschaft hat nur dann eine Wirkung, wenn es Inhalt zum Scrollen gibt, daher haben wir eine Demo erstellt, um die Unterschiede zwischen den drei Werten zu zeigen — sehen Sie sich [background-attachment.html](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html) an (siehe auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/css/styling-boxes/backgrounds) hier).

### Verwendung der Kurzform-Eigenschaft für den Hintergrund

Wie eingangs dieser Lektion erwähnt, werden Sie häufig Hintergründe sehen, die mit der {{cssxref("background")}}-Eigenschaft spezifiziert sind. Diese Kurzform ermöglicht es Ihnen, alle verschiedenen Eigenschaften auf einmal zu setzen.

Wenn Sie mehrere Hintergründe verwenden, müssen Sie alle Eigenschaften für den ersten Hintergrund angeben und dann nach einem Komma den nächsten Hintergrund hinzufügen. Im folgenden Beispiel haben wir einen Verlauf mit einer Größe und einer Position, dann ein Bild-Hintergrund mit `no-repeat` und einer Position, und dann eine Farbe.

Es gibt ein paar Regeln, die beim Schreiben von Kurzform-Hintergrundwerten beachtet werden müssen, z.B.:

- Eine `background-color` darf nur nach dem letzten Komma angegeben werden.
- Der Wert von `background-size` darf nur unmittelbar nach `background-position` aufgenommen werden, getrennt durch das '/'-Zeichen, so: `center/80%`.

Werfen Sie einen Blick auf die MDN-Seite für {{cssxref("background")}}, um alle Überlegungen zu sehen.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/background.html", '100%', 900)}}

### Barrierefreiheitsüberlegungen mit Hintergründen

Wenn Sie Text über einem Hintergrundbild oder einer Farbe platzieren, sollten Sie darauf achten, dass Sie genügend [Kontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) haben, damit der Text für Ihre Besucher lesbar ist. Wenn Sie ein Bild spezifizieren und Text über diesem Bild platziert werden soll, sollten Sie außerdem eine `background-color` angeben, die es dem Text ermöglicht, lesbar zu sein, falls das Bild nicht geladen wird.

Bildschirmleser können Hintergrundbilder nicht lesen; daher sollten sie rein dekorativ sein. Wichtiger Inhalt sollte Teil der HTML-Seite sein und nicht in einem Hintergrundbild enthalten sein.

## Rahmen

Beim Lernen des Box-Modells haben wir entdeckt, wie Rahmen die Größe unserer Box beeinflussen. In dieser Lektion werden wir betrachten, wie man Rahmen kreativ verwendet. Typischerweise fügen wir Rahmen zu einem Element mit CSS hinzu, indem wir eine Kurzform-Eigenschaft verwenden, die die Farbe, Breite und den [Stil](/de/docs/Web/CSS/line-style) des Rahmens in eine Zeile CSS setzt.

Wir können einen Rahmen für alle vier Seiten einer Box mit {{cssxref("border")}} setzen:

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

Die einzelnen Eigenschaften umfassen die Kurzform-Eigenschaften {{cssxref("border-width")}}, {{cssxref("border-style")}}, und {{cssxref("border-color")}}:

```css
.box {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
```

Es gibt umfassende Eigenschaften für die Breite, den Stil und die Farbe für jede der vier Seiten:

```css
.box {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: black;
}
```

> [!NOTE]
> Diese oberen, rechten, unteren und linken Rahmeneigenschaften haben auch zugeordnete [_logische_ Rahmeneigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties), die sich auf den Schreibmodus des Dokuments beziehen (z.B. von links nach rechts oder von rechts nach links, oder von oben nach unten). Wir werden diese in der nächsten Lektion erkunden, die das [Umgehen mit verschiedenen Schreibrichtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions) behandelt.

Es gibt eine Vielzahl von Stilen, die Sie für Rahmen verwenden können. Im Beispiel unten haben wir zwei verschiedene Rahmenstile für die Box und zwei verschiedene Rahmenstile für die Überschrift verwendet. Spielen Sie mit dem Rahmenstil, der Breite und der Farbe, um zu sehen, wie Rahmen funktionieren.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/borders.html", '100%', 800)}}

### Abgerundete Ecken

Das Abrunden von Ecken einer Box wird mit der {{cssxref("border-radius")}}-Eigenschaft und den zugehörigen umfassenden Longhands erreicht, die sich auf jede Ecke der Box beziehen. Zwei Längen oder Prozentsätze können als Wert verwendet werden, wobei der erste Wert den horizontalen Radius definiert und der zweite den vertikalen. In vielen Fällen geben Sie nur einen Wert ein, der für beide verwendet wird.

Zum Beispiel, um alle vier Ecken einer Box mit einem 10px-Radius abzurunden:

```css
.box {
  border-radius: 10px;
}
```

Oder um die obere rechte Ecke mit einem horizontalen Radius von `1em` und einem vertikalen Radius von 10% abzurunden:

```css
.box {
  border-top-right-radius: 1em 10%;
}
```

> [!NOTE]
> Wie bei den oben genannten Rahmeneigenschaften haben auch diese border-radius-Eigenschaften zugeordnete [_logische_ border-radius-Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties).

Wir haben alle vier Ecken im folgenden Beispiel gesetzt und dann die Werte für die obere rechte Ecke verändert, um sie zu unterscheiden. Sie können mit den Werten spielen, um die Ecken zu ändern. Werfen Sie einen Blick auf die Eigenschaftsseite für {{cssxref("border-radius")}}, um die verfügbaren Syntaxoptionen zu sehen. Der [border-radius-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator) kann verwendet werden, um abgerundete Eckenwerte für Sie auszugeben.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/corners.html", '100%', 800)}}

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitergehen — siehe [Testen Sie Ihre Fähigkeiten: Hintergründe und Rahmen](/de/docs/Learn/CSS/Building_blocks/Test_your_skills_backgrounds_and_borders).

## Zusammenfassung

Wir haben hier viel abgedeckt, und Sie können sehen, dass es ziemlich viel beim Hinzufügen eines Hintergrunds oder eines Rahmens zu einer Box gibt. Entdecken Sie die verschiedenen Eigenschaftsseiten, wenn Sie mehr über eines der hier besprochenen Merkmale erfahren möchten. Fast jede Seite auf MDN hat Beispiele, mit denen Sie spielen können, um Ihr Wissen zu erweitern.

Im nächsten Artikel erfahren wir, wie der Schreibmodus Ihres Dokuments mit Ihrem CSS interagiert. Was passiert, wenn der Text nicht von links nach rechts fließt?

{{PreviousMenuNext("Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks")}}
