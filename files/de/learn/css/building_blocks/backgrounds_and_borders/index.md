---
title: Hintergründe und Rahmen
slug: Learn/CSS/Building_blocks/Backgrounds_and_borders
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks")}}

In dieser Lektion werden wir uns einige der kreativen Möglichkeiten ansehen, die Sie mit CSS-Hintergründen und -Rahmen umsetzen können. Von der Hinzufügung von Farbverläufen, Hintergrundbildern und abgerundeten Ecken sind Hintergründe und Rahmen die Antwort auf viele Stilfragen in CSS.

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
      <td>Erlernen, wie man den Hintergrund und den Rahmen von Boxen gestaltet.</td>
    </tr>
  </tbody>
</table>

## Hintergründe in CSS gestalten

Die CSS-{{cssxref("background")}}-Eigenschaft ist eine Kurzform für eine Reihe von Hintergrund-Einzeleigenschaften, die wir in dieser Lektion kennenlernen werden. Wenn Sie eine komplexe Hintergrund-Eigenschaft in einem Stylesheet entdecken, mag es etwas schwer verständlich erscheinen, da viele Werte gleichzeitig übergeben werden können.

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

Wir werden später im Tutorial darauf zurückkommen, wie die Kurzform funktioniert, aber zunächst schauen wir uns die verschiedenen Möglichkeiten an, die Sie mit Hintergründen in CSS haben, indem wir die einzelnen Hintergrund-Eigenschaften ansehen.

### Hintergrundfarben

Die {{cssxref("background-color")}}-Eigenschaft definiert die Hintergrundfarbe eines beliebigen Elements in CSS. Die Eigenschaft akzeptiert jeden gültigen [`<color>`](/de/docs/Web/CSS/color_value). Eine `background-color` erstreckt sich unter den Inhalt und den Padding-Bereich des Elements.

Im folgenden Beispiel haben wir verschiedene Farbwerte verwendet, um eine Hintergrundfarbe zur Box, einer Überschrift und einem {{htmlelement("span")}}-Element hinzuzufügen.

**Spielen Sie mit diesen, indem Sie jeden verfügbaren [`<color>`](/de/docs/Web/CSS/color_value) Wert verwenden.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/color.html", '100%', 700)}}

### Hintergrundbilder

Die {{cssxref("background-image")}}-Eigenschaft ermöglicht die Anzeige eines Bildes im Hintergrund eines Elements. Im folgenden Beispiel haben wir zwei Boxen – eine hat ein Hintergrundbild, das größer als die Box ist ([balloons.jpg](https://mdn.github.io/css-examples/learn/backgrounds-borders/balloons.jpg)). Die andere hat ein kleines Bild eines einzelnen Sterns ([star.png](https://mdn.github.io/css-examples/learn/backgrounds-borders/star.png)).

Dieses Beispiel demonstriert zwei Dinge über Hintergrundbilder. Standardmäßig wird das große Bild nicht verkleinert, um in die Box zu passen, sodass wir nur einen kleinen Ausschnitt davon sehen, während das kleine Bild gekachelt wird, um die Box zu füllen.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/background-image.html", '100%', 700)}}

**Wenn Sie neben einem Hintergrundbild eine Hintergrundfarbe angeben, wird das Bild auf der Farbe angezeigt. Versuchen Sie, dem obigen Beispiel eine `background-color`-Eigenschaft hinzuzufügen, um dies in Aktion zu sehen.**

#### Steuerung des Hintergrund-Wiederholverhaltens

Die {{cssxref("background-repeat")}}-Eigenschaft wird verwendet, um das Kacheln von Bildern zu steuern. Die verfügbaren Werte sind:

- `no-repeat` — verhindert, dass der Hintergrund sich insgesamt wiederholt.
- `repeat-x` — Wiederholung horizontal.
- `repeat-y` — Wiederholung vertikal.
- `repeat` — der Standardwert; Wiederholung in beiden Richtungen.
- `space` — Wiederholt so oft wie möglich unter Hinzufügung von Leerraum zwischen den Bildern, wenn zusätzlicher Raum verfügbar ist.
- `round` — ähnlich wie `space`, streckt aber die Bilder, um zusätzlichen Raum zu füllen

**Probieren Sie diese Werte im folgenden Beispiel aus. Wir haben den Wert auf `no-repeat` gesetzt, sodass Sie nur einen Stern sehen werden. Probieren Sie die verschiedenen Werte – `repeat-x` und `repeat-y` – aus, um zu sehen, welche Auswirkungen sie haben.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/repeat.html", '100%', 600)}}

#### Größe des Hintergrundbilds

Das Bild _balloons.jpg_, das im ersten Beispiel des Hintergrundbilds verwendet wurde, ist ein großes Bild, das aufgrund seiner Größe größer als das Element ist, für das es ein Hintergrund ist. In diesem Fall könnten wir die {{cssxref("background-size")}}-Eigenschaft verwenden, die {{cssxref("length")}} oder {{cssxref("percentage")}}-Werte annehmen kann, um das Bild im Hintergrund anzupassen.

Sie können auch Schlüsselwörter verwenden:

- `cover` — der Browser macht das Bild gerade so groß, dass es den gesamten Box-Bereich vollständig abdeckt, während das [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) erhalten bleibt. In diesem Fall wird ein Teil des Bildes wahrscheinlich außerhalb der Box enden.
- `contain` — der Browser passt die Bildgröße so an, dass es in die Box passt. In diesem Fall können Lücken an den Seiten oder oben und unten des Bildes entstehen, wenn das Seitenverhältnis des Bildes von dem der Box abweicht.

Im folgenden Beispiel hat das Bild _balloons.jpg_ Längeinheiten, die es innerhalb der Box ausdehnen. Sie können sehen, dass dies das Bild verzerrt hat.

Versuchen Sie Folgendes.

- Ändern Sie die verwendeten Längeinheiten, um die Hintergrundgröße zu ändern.
- Entfernen Sie die Längeinheiten und sehen Sie, was passiert, wenn Sie `background-size: cover` oder `background-size: contain` verwenden.
- Wenn Ihr Bild kleiner als die Box ist, können Sie den Wert von `background-repeat` ändern, um das Bild zu wiederholen.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/size.html", '100%', 800)}}

#### Positionierung des Hintergrundbilds

Die {{cssxref("background-position")}}-Eigenschaft ermöglicht Ihnen die Wahl der Position, an der das Hintergrundbild auf der Box erscheint, auf die es angewendet wird. Dies verwendet ein Koordinatensystem, bei dem die obere linke Ecke der Box `(0,0)` ist, und die Box entlang der horizontalen (`x`) und vertikalen (`y`) Achsen positioniert ist.

> [!NOTE]
> Der Standardwert für `background-position` ist `(0,0)`.

Die häufigsten `background-position`-Werte nehmen zwei einzelne Werte an — einen horizontalen Wert gefolgt von einem vertikalen Wert.

Sie können Schlüsselwörter wie `top` und `right` verwenden (sehen Sie sich die anderen auf der Seite {{cssxref("background-position")}} an):

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top center;
}
```

Und {{cssxref("length", "Längen")}}, und {{cssxref("prozent", "Prozentsätze")}}:

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: 20px 10%;
}
```

Sie können auch Schlüsselwortwerte mit Längen oder Prozentsätzen mischen, wobei in diesem Fall der erste Wert sich auf die horizontale Position oder den Versatz bezieht und der zweite vertikal ist. Beispielsweise:

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: 20px top;
}
```

Schließlich können Sie auch eine 4-Werte-Syntax verwenden, um einen Abstand von bestimmten Kanten der Box anzugeben — die Längeinheit ist in diesem Fall ein Versatz von dem vorangehenden Wert. In der folgenden CSS positionieren wir den Hintergrund 20px vom oberen und 10px vom rechten Rand:

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

**Verwenden Sie das folgende Beispiel, um mit diesen Werten zu experimentieren und den Stern innerhalb der Box zu bewegen.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/position.html", '100%', 600)}}

> **Hinweis:** `background-position` ist eine Kurzform für {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}, die es Ihnen ermöglichen, die Werte der Achsenpositionen individuell festzulegen.

### Farbverlaufshintergründe

Ein Farbverlauf – wenn er als Hintergrund verwendet wird – wirkt wie ein Bild und wird ebenfalls mit der {{cssxref("background-image")}}-Eigenschaft festgelegt.

Sie können mehr über die verschiedenen Arten von Farbverläufen und das, was Sie mit ihnen machen können, auf der MDN-Seite zum [`<gradient>`](/de/docs/Web/CSS/gradient) Datentyp lesen. Eine unterhaltsame Möglichkeit, mit Farbverläufen zu experimentieren, ist die Verwendung eines der vielen im Internet verfügbaren CSS-Gradienten-Generatoren, wie [CSSGradient.io](https://cssgradient.io/). Sie können einen Farbverlauf erstellen und den Quellcode kopieren und einfügen, der ihn generiert.

Probieren Sie einige verschiedene Farbverläufe im folgenden Beispiel aus. In den beiden jeweiligen Boxen haben wir einen linearen Farbverlauf, der über die ganze Box gespannt ist, und einen radialen Farbverlauf mit fester Größe, der deshalb wiederholt wird.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/gradients.html", '100%', 700)}}

### Mehrere Hintergrundbilder

Es ist auch möglich, mehrere Hintergrundbilder zu haben – Sie geben mehrere `background-image`-Werte in einem einzelnen Eigenschaftswert an, wobei jeder durch ein Komma getrennt ist.

Wenn Sie dies tun, können Sie mit Hintergrundbildern enden, die sich überlappen. Die Hintergründe legen sich mit dem zuletzt gelisteten Hintergrundbild auf dem unteren Stapel und jedem vorhergehenden Bild, das sich oben auf dem folgenden Bild im Code stapelt.

> [!NOTE]
> Farbverläufe können problemlos mit normalen Hintergrundbildern gemischt werden.

Die anderen `background-*`-Eigenschaften können ebenfalls durch Kommata getrennte Werte auf die gleiche Weise wie `background-image` enthalten:

```css
background-image: url(image1.png), url(image2.png), url(image3.png),
  url(image4.png);
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

Jeder Wert der verschiedenen Eigenschaften wird mit den Werten in der gleichen Position in den anderen Eigenschaften abgeglichen. Zum Beispiel wird `image1`'s `background-repeat`-Wert `no-repeat` sein. Was passiert jedoch, wenn unterschiedliche Eigenschaften unterschiedliche Anzahlen an Werten haben? Die Antwort ist, dass die kleinere Anzahl von Werten zyklisch verwendet wird – im obigen Beispiel gibt es vier Hintergrundbilder, aber nur zwei `background-position`-Werte. Die ersten beiden Positionswerte werden auf die ersten beiden Bilder angewendet, dann werden sie zyklisch verwendet – `image3` wird der erste Positionswert zugewiesen und `image4` der zweite Positionswert.

**Lassen Sie uns spielen. Das folgende Beispiel enthält zwei Hintergrundbilder. Um die Stapelreihenfolge zu demonstrieren, versuchen Sie, welches Hintergrundbild zuerst in der Liste kommt. Oder spielen Sie mit den anderen Eigenschaften, um die Position, Größe oder Wiederholungswerte zu ändern.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/multiple-background-image.html", '100%', 600)}}

### Hintergrund-Anhang

Eine weitere Option, die wir für Hintergründe zur Verfügung haben, ist die Angabe, wie sie sich scrollen, wenn sich der Inhalt scrollt. Dies wird durch die {{cssxref("background-attachment")}}-Eigenschaft gesteuert, die die folgenden Werte annehmen kann:

- `scroll`: bewirkt, dass der Hintergrund des Elements scrollt, wenn die Seite gescrollt wird. Wenn der Elementinhalt gescrollt wird, bewegt sich der Hintergrund nicht. Effektiv wird der Hintergrund an derselben Position auf der Seite fixiert, sodass er sich beim Scrollen der Seite mitbewegt.
- `fixed`: bewirkt, dass der Hintergrund eines Elements am Viewport fixiert wird, sodass er sich nicht bewegt, wenn die Seite oder der Elementinhalt gescrollt wird. Er bleibt immer an derselben Position auf dem Bildschirm.
- `local`: fixiert den Hintergrund an dem Element, auf das er gesetzt ist, sodass, wenn Sie das Element scrollen, der Hintergrund mit ihm scrollt.

Die {{cssxref("background-attachment")}}-Eigenschaft hat nur Auswirkungen, wenn es Inhalt zum Scrollen gibt, daher haben wir eine Demo erstellt, um die Unterschiede zwischen den drei Werten zu demonstrieren – schauen Sie sich [background-attachment.html](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html) (auch [sehen Sie den Quellcode](https://github.com/mdn/learning-area/tree/main/css/styling-boxes/backgrounds) hier) an.

### Verwendung der Hintergrund-Kurzform

Wie zu Beginn dieser Lektion erwähnt, werden Hintergründe oft mit der {{cssxref("background")}}-Eigenschaft spezifiziert. Diese Kurzform ermöglicht es, alle verschiedenen Eigenschaften auf einmal festzulegen.

Wenn Sie mehrere Hintergründe verwenden, müssen Sie alle Eigenschaften für den ersten Hintergrund angeben und dann nach einem Komma den nächsten Hintergrund hinzufügen. Im folgenden Beispiel haben wir einen Farbverlauf mit einer Größe und Position, dann ein Bildhintergrund mit `no-repeat` und einer Position, dann eine Farbe.

Es gibt einige Regeln, die befolgt werden müssen, wenn Sie Werte in der Kurzform des Hintergrundbildes schreiben, zum Beispiel:

- Eine `background-color` darf nur nach dem letzten Komma angegeben werden.
- Der Wert von `background-size` darf nur unmittelbar nach `background-position` enthalten sein und muss mit dem '/'-Zeichen getrennt werden, so: `center/80%` sein.

Schauen Sie sich die MDN-Seite für {{cssxref("background")}} an, um alle Überlegungen zu sehen.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/background.html", '100%', 900)}}

### Barrierefreiheitserwägungen bei Hintergründen

Wenn Sie Text auf einem Hintergrundbild oder einer Hintergrundfarbe platzieren, sollten Sie darauf achten, dass ausreichend [Kontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) vorhanden ist, damit der Text für Ihre Besucher lesbar ist. Wenn Sie ein Bild spezifizieren und Text darauf platziert wird, sollten Sie auch eine `background-color` angeben, damit der Text lesbar ist, falls das Bild nicht lädt.

Bildschirmschreiber können keine Hintergrundbilder interpretieren; daher sollten diese rein dekorativ sein. Jeglich wichtiger Inhalt sollte Teil der HTML-Seite sein und nicht in einem Hintergrund enthalten sein.

## Rahmen

Beim Lernen über das Box-Modell haben wir entdeckt, wie Rahmen die Größe unserer Box beeinflussen. In dieser Lektion werden wir uns ansehen, wie man Rahmen kreativ verwendet. In der Regel, wenn wir Rahmen zu einem Element mit CSS hinzufügen, verwenden wir eine Kurzformeigenschaft, die die Farbe, Breite und den [Stil](/de/docs/Web/CSS/line-style) des Rahmens in einer CSS-Zeile festlegt.

Wir können einen Rahmen für alle vier Seiten einer Box mit {{cssxref("border")}} festlegen:

```css
.box {
  border: 1px solid black;
}
```

Oder wir können ein jeden Rand der Box gezielt ansprechen, zum Beispiel:

```css
.box {
  border-top: 1px solid black;
}
```

Die einzelnen Eigenschaften umfassen die {{cssxref("border-width")}}, {{cssxref("border-style")}}, und {{cssxref("border-color")}} Kurzformeigenschaften:

```css
.box {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
```

Es gibt Langformeigenschaften für Breite, Stil und Farbe für jede der vier Seiten:

```css
.box {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: black;
}
```

> [!NOTE]
> Diese Oben-, Rechts-, Unten- und Linken-Rahmeneigenschaften haben auch zugeordnete [_logische_ Rahmen-Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties), die sich auf den Schreibrichtung der Dokument beziehen (z.B. links-nach-rechts oder rechts-nach-links Text, oder oben-nach-unten). Wir werden dies in der nächsten Lektion erkunden, die das [Umgehen unterschiedlicher Text-Richtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions) abdeckt.

Es gibt eine Vielzahl von Stilen, die Sie für Rahmen verwenden können. Im folgenden Beispiel haben wir zwei verschiedene Rahmenstile für die Box und zwei verschiedene Rahmenstile für die Überschrift verwendet. Spielen Sie mit dem Rahmen-Stil, der Breite und Farbe, um zu sehen, wie Rahmen funktionieren.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/borders.html", '100%', 800)}}

### Abgerundete Ecken

Das Abrunden von Ecken an einer Box wird mittels der {{cssxref("border-radius")}}-Eigenschaft und zugeordneten Langformen erreicht, die sich auf jede Ecke der Box beziehen. Zwei Längen oder Prozentsätze können als Wert angegeben werden, wobei der erste Wert den horizontalen Radius und der zweite den vertikalen Radius definiert. In vielen Fällen geben Sie nur einen Wert an, der dann für beide verwendet wird.

Beispielsweise, um alle vier Ecken einer Box mit einem 10px Radius zu versehen:

```css
.box {
  border-radius: 10px;
}
```

Oder um der oberen rechten Ecke einen horizontalen Radius von `1em` und einen vertikalen Radius von 10% zu geben:

```css
.box {
  border-top-right-radius: 1em 10%;
}
```

> [!NOTE]
> Wie bei den obengenannten Rahmeneigenschaften haben diese border-radius-Eigenschaften auch zugeordnete [_logische_ border-radius-Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties).

Wir haben alle vier Ecken im folgenden Beispiel gesetzt und dann die Werte für die obere rechte Ecke geändert, um es anders zu machen. Sie können mit den Werten spielen, um die Ecken zu ändern. Sehen Sie sich die Eigenschaftsseite für {{cssxref("border-radius")}} an, um die verfügbaren Syntaxoptionen zu sehen. Der [border-radius-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator) kann verwendet werden, um Ihnen abgerundete Eckwerte auszugeben.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/corners.html", '100%', 800)}}

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren – siehe [Testen Sie Ihre Fähigkeiten: Hintergründe und Rahmen](/de/docs/Learn/CSS/Building_blocks/Test_your_skills_backgrounds_and_borders).

## Zusammenfassung

Wir haben hier einiges abgedeckt, und Sie können sehen, dass es eine Menge zu beachten gibt, wenn man einem Box einen Hintergrund oder einen Rahmen hinzufügt. Erkunden Sie die verschiedenen Eigenschaftsseiten, wenn Sie mehr über eines der hier besprochenen Features erfahren möchten. Fast jede Seite auf MDN hat Beispiele, mit denen Sie Ihr Wissen erweitern können.

Im nächsten Artikel erfahren wir, wie die Schreibrichtung Ihres Dokuments mit Ihrem CSS interagiert. Was passiert, wenn der Text nicht von links nach rechts fließt?

{{PreviousMenuNext("Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks")}}
