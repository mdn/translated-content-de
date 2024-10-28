---
title: Hintergründe und Rahmen
slug: Learn/CSS/Building_blocks/Backgrounds_and_borders
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks")}}

In dieser Lektion werfen wir einen Blick auf einige der kreativen Dinge, die Sie mit CSS-Hintergründen und Rahmen tun können. Von der Hinzufügung von Verläufen, Hintergrundbildern und abgerundeten Ecken bis hin zu vielen weiteren Styling-Fragen in CSS bieten Hintergründe und Rahmen die Antwort.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, grundlegendes Wissen über
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >den Umgang mit Dateien</a
        >, HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) sowie ein Verständnis davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS Erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>Erlernen, wie man den Hintergrund und den Rahmen von Boxen gestaltet.</td>
    </tr>
  </tbody>
</table>

## Styling von Hintergründen in CSS

Die CSS-Eigenschaft {{cssxref("background")}} ist eine Kurzform für eine Reihe von Hintergrund-Langform-Eigenschaften, die wir in dieser Lektion kennenlernen werden. Wenn Sie eine komplexe Hintergrund-Eigenschaft in einem Stylesheet entdecken, kann es zunächst schwierig erscheinen, diese zu verstehen, da so viele Werte gleichzeitig übergeben werden können.

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

Wir werden später im Tutorial darauf zurückkommen, wie die Kurzform funktioniert, aber zuerst schauen wir uns an, was Sie mit Hintergründen in CSS machen können, indem wir uns die einzelnen Hindergrund-Eigenschaften ansehen.

### Hintergrundfarben

Die Eigenschaft {{cssxref("background-color")}} definiert die Hintergrundfarbe eines beliebigen Elements in CSS. Die Eigenschaft akzeptiert jeden gültigen [`<color>`](/de/docs/Web/CSS/color_value). Eine `background-color` erstreckt sich unterhalb der Inhalts- und Polsterbox des Elements.

Im folgenden Beispiel haben wir verschiedene Farbwerte verwendet, um der Box, einer Überschrift und einem `<span>`-Element einen Hintergrund hinzuzufügen.

**Experimentieren Sie mit diesen, indem Sie jeden verfügbaren [`<color>`](/de/docs/Web/CSS/color_value) Wert verwenden.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/color.html", '100%', 700)}}

### Hintergrundbilder

Die Eigenschaft {{cssxref("background-image")}} ermöglicht die Anzeige eines Bildes im Hintergrund eines Elements. Im folgenden Beispiel haben wir zwei Boxen — eine hat ein Hintergrundbild, das größer als die Box ist ([balloons.jpg](https://mdn.github.io/css-examples/learn/backgrounds-borders/balloons.jpg)). Die andere hat ein kleines Bild eines einzelnen Sterns ([star.png](https://mdn.github.io/css-examples/learn/backgrounds-borders/star.png)).

Dieses Beispiel zeigt zwei Dinge über Hintergrundbilder. Standardmäßig wird das große Bild nicht verkleinert, um in die Box zu passen, sodass wir nur eine kleine Ecke davon sehen, während das kleine Bild gekachelt wird, um die Box zu füllen.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/background-image.html", '100%', 700)}}

**Wenn Sie zusätzlich zu einem Hintergrundbild eine Hintergrundfarbe angeben, dann wird das Bild über der Farbe angezeigt. Versuchen Sie, der obigen Beispiel ein `background-color`-Eigenschaft hinzuzufügen, um das in Aktion zu sehen.**

#### Steuerung von background-repeat

Die Eigenschaft {{cssxref("background-repeat")}} wird verwendet, um das Kachelverhalten von Bildern zu steuern. Die verfügbaren Werte sind:

- `no-repeat` — verhindert, dass sich der Hintergrund wiederholt.
- `repeat-x` — wiederholt horizontal.
- `repeat-y` — wiederholt vertikal.
- `repeat` — der Standard; wiederholt in beide Richtungen.
- `space` — wiederholt so oft wie möglich und fügt zusätzlichen Platz zwischen den Bildern hinzu, wenn mehr Platz verfügbar ist.
- `round` — ähnlich wie `space`, aber dehnt die Bilder, um jeden zusätzlichen Platz auszufüllen.

**Probieren Sie diese Werte im folgenden Beispiel aus. Wir haben den Wert auf `no-repeat` eingestellt, sodass Sie nur einen Stern sehen. Experimentieren Sie mit den verschiedenen Werten — `repeat-x` und `repeat-y` — um zu sehen, welche Effekte sie haben.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/repeat.html", '100%', 600)}}

#### Größenanpassung des Hintergrundbilds

Das _balloons.jpg_-Bild, das im ursprünglichen Hintergrundbildbeispiel verwendet wurde, ist ein großes Bild, das abgeschnitten wurde, da es größer als das Element ist, dessen Hintergrund es bildet. In diesem Fall könnten wir die Eigenschaft {{cssxref("background-size")}} verwenden, die {{cssxref("length")}} oder {{cssxref("percentage")}} Werte annehmen kann, um das Bild auf die Größe des Hintergrunds anzupassen.

Sie können auch Schlüsselwörter verwenden:

- `cover` — der Browser macht das Bild gerade groß genug, um den Boxbereich vollständig zu bedecken, wobei das {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehalten wird. In diesem Fall wird ein Teil des Bildes wahrscheinlich außerhalb der Box landen.
- `contain` — der Browser bringt das Bild auf die richtige Größe, um es in die Box einzupassen. In diesem Fall können Sie Lücken auf beiden Seiten oder oben und unten am Bild haben, wenn das Seitenverhältnis des Bildes von dem der Box abweicht.

Im folgenden Beispiel sind für das _balloons.jpg_-Bild Längeneinheiten eingestellt, um es innerhalb der Box zu skalieren. Sie können sehen, dass das Bild dadurch verzerrt wurde.

Versuchen Sie Folgendes.

- Ändern Sie die verwendeten Längeneinheiten, um die Größe des Hintergrunds zu ändern.
- Entfernen Sie die Längeneinheiten und sehen Sie, was passiert, wenn Sie `background-size: cover` oder `background-size: contain` verwenden.
- Wenn Ihr Bild kleiner als die Box ist, können Sie den Wert von `background-repeat` ändern, um das Bild zu wiederholen.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/size.html", '100%', 800)}}

#### Positionierung des Hintergrundbilds

Die Eigenschaft {{cssxref("background-position")}} ermöglicht es Ihnen, die Position zu wählen, in der das Hintergrundbild auf der entsprechenden Box erscheint. Es wird ein Koordinatensystem verwendet, bei dem die obere linke Ecke der Box `(0,0)` ist, und die Box entlang der horizontalen (`x`) und vertikalen (`y`) Achsen positioniert wird.

> [!NOTE]
> Der Standardwert für `background-position` ist `(0,0)`.

Die häufigsten `background-position`-Werte bestehen aus zwei Einzelwerten — einem horizontalen Wert, gefolgt von einem vertikalen Wert.

Sie können Schlüsselwörter wie `top` und `right` verwenden (lesen Sie die anderen auf der Seite {{cssxref("background-position")}} nach):

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top center;
}
```

Und {{cssxref("length", "lengths")}}, sowie {{cssxref("percentage", "percentages")}}:

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: 20px 10%;
}
```

Sie können auch Schlüsselwörter mit Längen oder Prozenten mischen, wobei der erste Wert die horizontale Position oder der Versatz und der zweite die vertikale betrifft. Zum Beispiel:

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: 20px top;
}
```

Schließlich können Sie eine 4-Wert-Syntax verwenden, um einen Abstand von bestimmten Rändern der Box anzugeben — die Längeneinheit ist in diesem Fall ein Versatz vom vorhergehenden Wert. In dem folgenden CSS positionieren wir den Hintergrund 20px von oben und 10px von rechts:

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

**Verwenden Sie das folgende Beispiel, um mit diesen Werten zu experimentieren und den Stern in der Box zu bewegen.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/position.html", '100%', 600)}}

> **Hinweis:** `background-position` ist eine Kurzform für {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}, die es Ihnen ermöglichen, die Werte der verschiedenen Achsenpositionen individuell festzulegen.

### Verlaufshintergründe

Ein Verlauf — wenn er für einen Hintergrund verwendet wird — verhält sich wie ein Bild und wird ebenfalls mit der Eigenschaft {{cssxref("background-image")}} festgelegt.

Sie können mehr über die verschiedenen Arten von Verläufen und deren Anwendung auf der MDN-Seite für den [`<gradient>`](/de/docs/Web/CSS/gradient) Datentyp lesen. Eine unterhaltsame Möglichkeit, mit Verläufen zu experimentieren, besteht darin, einen der vielen im Web verfügbaren CSS-Gradienten-Generatoren zu verwenden, wie zum Beispiel [CSSGradient.io](https://cssgradient.io/). Sie können einen Verlauf erstellen und den Quellcode kopieren und einfügen, der ihn erzeugt.

Probieren Sie einige verschiedene Verläufe im folgenden Beispiel aus. In den jeweiligen Boxen haben wir einen linearen Verlauf, der sich über die gesamte Box erstreckt, und einen radialen Verlauf mit einer festen Größe, der daher wiederholt wird.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/gradients.html", '100%', 700)}}

### Mehrere Hintergrundbilder

Es ist auch möglich, mehrere Hintergrundbilder zu haben — Sie geben mehrere `background-image` Werte in einem einzigen Eigenschaftswert an, wobei jeder durch ein Komma getrennt wird.

Wenn Sie dies tun, können Sie am Ende Hintergrundbilder überlappen lassen. Die Hintergründe werden mit dem zuletzt aufgelisteten Hintergrundbild unten im Stapel gestapelt, und jedes vorhergehende Bild wird über dem Bild gestapelt, das ihm im Code folgt.

> [!NOTE]
> Verläufe können problemlos mit regulären Hintergrundbildern gemischt werden.

Die anderen `background-*` Eigenschaften können ebenfalls mit durch Kommas getrennten Werten in derselben Weise wie `background-image` verwendet werden:

```css
background-image: url(image1.png), url(image2.png), url(image3.png),
  url(image4.png);
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

Jeder Wert der verschiedenen Eigenschaften wird mit den an der gleichen Position in den anderen Eigenschaften befindlichen Werten abgeglichen. Im obigen Beispiel hat `image1` beispielsweise den `background-repeat` Wert `no-repeat`. Aber was passiert, wenn verschiedene Eigenschaften unterschiedliche Anzahlen von Werten haben? Die Antwort ist, dass die kleineren Mengen an Werten zyklisch gelesen werden — im obigen Beispiel gibt es vier Hintergrundbilder, aber nur zwei `background-position` Werte. Die ersten beiden Positionswerte werden auf die ersten beiden Bilder angewendet, dann werden sie wieder von vorne angefangen — `image3` erhält den ersten Positionswert und `image4` erhält den zweiten Positionswert.

**Lassen Sie uns spielen. Das folgende Beispiel enthält zwei Hintergrundbilder. Um die Stapelreihenfolge zu demonstrieren, versuchen Sie, die Reihenfolge der Hintergrundbilder in der Liste zu ändern. Oder arbeiten Sie an den anderen Eigenschaften, um die Position, Größe oder Wiederholungswerte zu ändern.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/multiple-background-image.html", '100%', 600)}}

### Hintergrundbefestigung

Eine weitere Option, die wir für Hintergründe haben, besteht darin, festzulegen, wie sie beim Scrollen des Inhalts scrollen. Dies wird mithilfe der Eigenschaft {{cssxref("background-attachment")}} gesteuert, die die folgenden Werte annehmen kann:

- `scroll`: bewirkt, dass der Hintergrund eines Elements scrollt, wenn die Seite gescrollt wird. Wenn der Inhalt des Elements gescrollt wird, bewegt sich der Hintergrund nicht. Der Hintergrund ist im Wesentlichen an dieselbe Position auf der Seite fixiert, sodass er sich beim Scrollen der Seite ebenfalls scrollt.
- `fixed`: bewirkt, dass der Hintergrund eines Elements am Ansichtsfenster angebracht ist, sodass er sich nicht bewegt, wenn die Seite oder der Inhalt des Elements gescrollt werden. Er bleibt immer in derselben Position auf dem Bildschirm.
- `local`: fixiert den Hintergrund an das Element, auf dem er gesetzt ist, sodass beim Scrollen des Elements der Hintergrund damit scrollt.

Die Eigenschaft {{cssxref("background-attachment")}} wirkt nur, wenn es um zu scrollenden Inhalt geht. Daher haben wir eine Demo erstellt, die die Unterschiede zwischen den drei Werten demonstriert — sehen Sie sich [background-attachment.html](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html) an (auch [sehen Sie sich den Quellcode](https://github.com/mdn/learning-area/tree/main/css/styling-boxes/backgrounds) hier an).

### Verwendung der Kurzschreibweise der Hintergrund-Eigenschaft

Wie zu Beginn dieser Lektion erwähnt, sehen Sie oft, dass Hintergründe mithilfe der Eigenschaft {{cssxref("background")}} festgelegt werden. Diese Kurzform lässt Sie alle verschiedenen Eigenschaften auf einmal setzen.

Wenn Sie mehrere Hintergründe verwenden, müssen Sie alle Eigenschaften für den ersten Hintergrund angeben und dann Ihren nächsten Hintergrund nach einem Komma hinzufügen. Im folgenden Beispiel haben wir einen Verlauf mit einer Größe und einer Position, dann ein Bildhintergrund mit `no-repeat` und einer Position, gefolgt von einer Farbe.

Es gibt einige Regeln, die befolgt werden müssen, wenn kurzformige Werte für Hintergrundbilder geschrieben werden, zum Beispiel:

- Eine `background-color` darf nur nach dem letzten Komma angegeben werden.
- Der Wert von `background-size` darf nur unmittelbar nach `background-position` enthalten sein, getrennt durch das '/' Zeichen, wie zum Beispiel: `center/80%`.

Sehen Sie sich die MDN-Seite für {{cssxref("background")}} an, um alle Überlegungen zu sehen.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/background.html", '100%', 900)}}

### Barrierefreiheitserwägungen bei Hintergründen

Wenn Sie Text auf ein Hintergrundbild oder eine Hintergrundfarbe legen, sollten Sie darauf achten, genügend [Kontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) zu haben, damit der Text für Ihre Besucher lesbar ist. Wenn Sie ein Bild angeben und darauf Text platziert wird, sollten Sie auch eine `background-color` angeben, die es ermöglicht, dass der Text lesbar ist, wenn das Bild nicht geladen wird.

Bildschirmlesegeräte können Hintergrundbilder nicht interpretieren; daher sollten sie reine Dekoration sein. Jeglicher wichtige Inhalt sollte Teil der HTML-Seite sein und nicht in einem Hintergrundbild enthalten sein.

## Rahmen

Beim Lernen über das Box-Modell haben wir entdeckt, wie Rahmen die Größe unserer Box beeinflussen. In dieser Lektion werden wir uns ansehen, wie man Rahmen kreativ verwendet. Typischerweise verwenden wir beim Hinzufügen von Rahmen zu einem Element mit CSS eine Kurzform-Eigenschaft, die Farbe, Breite und [Stil](/de/docs/Web/CSS/line-style) des Rahmens in einer CSS-Zeile festlegt.

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

Die einzelnen Eigenschaften umfassen die Kurzform-Eigenschaften {{cssxref("border-width")}}, {{cssxref("border-style")}} und {{cssxref("border-color")}}:

```css
.box {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
```

Es gibt ausgeschriebene Eigenschaften für Breite, Stil und Farbe für jede der vier Seiten:

```css
.box {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: black;
}
```

> [!NOTE]
> Diese oberen, rechten, unteren und linken Rahmeneigenschaften haben auch zugeordnete [_logische_ Rahmeneigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties), die sich auf den Schreibmodus des Dokuments beziehen (z. B. links-nach-rechts oder rechts-nach-links Text, bzw. oben-nach-unten). Wir werden diese im nächsten Kapitel erkunden, das sich mit [dem Umgang mit verschiedenen Textausrichtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions) beschäftigt.

Es gibt eine Vielzahl von Stilen, die Sie für Rahmen verwenden können. Im folgenden Beispiel haben wir zwei verschiedene Rahmenstile für die Box und zwei verschiedene Rahmenstile für die Überschrift verwendet. Experimentieren Sie mit dem Rahmenstil, der Breite und der Farbe, um zu sehen, wie Rahmen funktionieren.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/borders.html", '100%', 800)}}

### Abgerundete Ecken

Das Abrunden von Ecken einer Box wird durch die Eigenschaft {{cssxref("border-radius")}} und die mit den Ecken der Box verbundenen Langform-Eigenschaften erreicht. Zwei Längen oder Prozentsätze können als Wert verwendet werden, wobei der erste Wert den horizontalen Radius und der zweite den vertikalen Radius definiert. In vielen Fällen geben Sie nur einen Wert ein, der dann für beide verwendet wird.

Zum Beispiel, um alle vier Ecken einer Box mit einem Radius von 10px zu versehen:

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
> Wie bei den obigen Rahmeneigenschaften haben diese `border-radius` Eigenschaften ebenfalls zugeordnete [_logische_ `border-radius` Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties).

Im folgenden Beispiel haben wir alle vier Ecken gesetzt und dann die Werte für die obere rechte Ecke geändert, um sie zu unterscheiden. Sie können mit den Werten experimentieren, um die Ecken zu verändern. Werfen Sie einen Blick auf die Eigenschaftsseite für {{cssxref("border-radius")}}, um die verfügbaren Syntaxoptionen zu sehen. Der [Border-Radius-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator) kann verwendet werden, um Werte für abgerundete Ecken zu erzeugen.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/corners.html", '100%', 800)}}

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Hintergründe und Rahmen](/de/docs/Learn/CSS/Building_blocks/Test_your_skills_backgrounds_and_borders).

## Zusammenfassung

Wir haben hier ziemlich viel behandelt, und Sie können sehen, dass es eine Menge zu beachten gibt, wenn man einer Box einen Hintergrund oder einen Rahmen hinzufügt. Erkunden Sie die verschiedenen Eigenschaftsseiten, wenn Sie mehr über eines der hier besprochenen Merkmale erfahren möchten. Fast jede Seite auf MDN enthält Beispiele, mit denen Sie spielen können, um Ihr Wissen zu erweitern.

Im nächsten Artikel werden wir herausfinden, wie der Schreibmodus Ihres Dokuments mit Ihrem CSS interagiert. Was passiert, wenn der Text nicht von links nach rechts fließt?

{{PreviousMenuNext("Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks")}}
