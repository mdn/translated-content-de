---
title: Positionierung
slug: Learn/CSS/CSS_layout/Positioning
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout")}}

Die Positionierung ermöglicht es Ihnen, Elemente aus dem normalen Dokumentfluss herauszunehmen und sie sich anders verhalten zu lassen, beispielsweise indem sie übereinander liegen oder immer an derselben Stelle im Browserfenster verbleiben. Dieser Artikel erklärt die verschiedenen {{cssxref("position")}} Werte und deren Verwendung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (lernen Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (lernen Sie
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verständnis, wie CSS-Positionierung funktioniert.</td>
    </tr>
  </tbody>
</table>

Wir möchten, dass Sie die folgenden Übungen auf Ihrem lokalen Computer durchführen. Wenn möglich, laden Sie eine Kopie von [`0_basic-flow.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/0_basic-flow.html) aus unserem GitHub-Repository herunter ([Quellcode hier](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/0_basic-flow.html)) und verwenden Sie diese als Ausgangspunkt.

## Einführung in die Positionierung

Die Positionierung ermöglicht es uns, interessante Ergebnisse zu erzielen, indem wir den normalen Dokumentfluss überschreiben. Was wäre, wenn Sie die Position einiger Boxen leicht von ihrer Standardflussposition ändern möchten, um ein leicht eigenwilliges, unruhiges Gefühl zu erzeugen? Positionierung ist Ihr Werkzeug. Oder was, wenn Sie ein Benutzeroberflächenelement erstellen möchten, das über anderen Teilen der Seite schwebt und/oder immer an derselben Stelle im Browserfenster sitzt, unabhängig davon, wie weit die Seite gescrollt wird? Positionierung ermöglicht diese Art von Layout.

Es gibt verschiedene Arten der Positionierung, die Sie auf HTML-Elemente anwenden können. Um eine bestimmte Art der Positionierung auf einem Element zu aktivieren, verwenden wir die {{cssxref("position")}} Eigenschaft.

## Statische Positionierung

Statische Positionierung ist die Standardeinstellung, die jedes Element erhält. Es bedeutet einfach "setze das Element in seine normale Position im Dokumentfluss - nichts Besonderes zu sehen hier."

Um dies zu veranschaulichen (und Ihr Beispiel für zukünftige Abschnitte einzurichten), fügen Sie zunächst dem zweiten {{htmlelement("p")}} im HTML ein `class` von `positioned` hinzu:

```html
<p class="positioned">…</p>
```

Fügen Sie nun die folgende Regel am Ende Ihres CSS hinzu:

```css
.positioned {
  position: static;
  background: yellow;
}
```

Wenn Sie speichern und aktualisieren, werden Sie keinen Unterschied bemerken, außer für die aktualisierte Hintergrundfarbe des 2. Absatzes. Das ist in Ordnung - wie bereits gesagt, ist statische Positionierung das Standardverhalten!

> [!NOTE]
> Sie können das Beispiel an diesem Punkt live sehen unter [`1_static-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/1_static-positioning.html) ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/1_static-positioning.html)).

## Relative Positionierung

Relative Positionierung ist die erste Positionierungsart, die wir uns ansehen werden. Diese ist der statischen Positionierung sehr ähnlich, außer dass Sie, nachdem das positionierte Element seinen Platz im normalen Fluss eingenommen hat, seine endgültige Position ändern können, einschließlich dem Überlappen anderer Elemente auf der Seite. Aktualisieren Sie die `position` Deklaration in Ihrem Code:

```css
position: relative;
```

Wenn Sie in diesem Stadium speichern und aktualisieren, werden Sie überhaupt keine Änderung im Ergebnis sehen. Wie ändern Sie also die Position des Elements? Sie müssen die Eigenschaften {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}}, und {{cssxref("right")}} verwenden, die wir im nächsten Abschnitt erklären werden.

### Einführung von top, bottom, left und right

{{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}}, und {{cssxref("right")}} werden zusammen mit {{cssxref("position")}} verwendet, um genau festzulegen, wohin das positionierte Element verschoben werden soll. Um dies auszuprobieren, fügen Sie die folgenden Deklarationen der `.positioned` Regel in Ihrem CSS hinzu:

```css
top: 30px;
left: 30px;
```

> [!NOTE]
> Die Werte dieser Eigenschaften können alle [Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units) haben, die Sie vernünftigerweise erwarten würden: Pixel, mm, rems, %, etc.

Wenn Sie jetzt speichern und aktualisieren, erhalten Sie ein Ergebnis, das etwa so aussieht:

```html hidden
<h1>Relative Positionierung</h1>

<p>
  Ich bin ein grundlegendes Block-Level-Element. Meine benachbarten Block-Level-Elemente befinden sich auf neuen Zeilen unter mir.
</p>

<p class="positioned">
  Standardmäßig beanspruchen wir 100% der Breite unseres Elternelements, und wir sind so hoch wie unser Kindelement. Unsere Gesamtbreite und -höhe ist unser Inhalt + Polsterung + Rahmenbreite/-höhe.
</p>

<p>
  Wir sind durch unsere Ränder getrennt. Wegen der Rand-Zusammenführung werden wir durch die Breite eines unserer Ränder getrennt, nicht beider.
</p>

<p>
  Inline-Elemente <span>wie dieses</span> und <span>dieses</span> befinden sich auf derselben Linie wie einander und angrenzende Textknoten, wenn auf derselben Linie Platz ist. Überlaufende Inline-Elemente
  <span>umschließen auf eine neue Linie, wenn möglich — wie dieses, das Text enthält</span>,
  oder gehen einfach auf eine neue Linie, wenn nicht, vergleichbar mit diesem Bild:
  <img src="long.jpg" alt="Stoffausschnitt" />
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: relative;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Introducing_top_bottom_left_and_right', '100%', 500) }}

Cool, nicht wahr? Ok, das war wahrscheinlich nicht das, was Sie erwartet haben. Warum hat es sich nach unten und rechts bewegt, wenn wir _top_ und _left_ angegeben haben? Dies mag kontraintuitiv erscheinen. Sie müssen es sich so vorstellen, als ob es eine unsichtbare Kraft gibt, die die angegebene Seite der positionierten Box drückt und sie in die entgegengesetzte Richtung bewegt. Zum Beispiel, wenn Sie `top: 30px;` angeben, ist es, als ob eine Kraft die Oberseite der Box drückt und sie um 30px nach unten bewegt.

> [!NOTE]
> Sie können das Beispiel an diesem Punkt live sehen unter [`2_relative-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/2_relative-positioning.html) ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/2_relative-positioning.html)).

## Absolute Positionierung

Absolute Positionierung führt zu sehr unterschiedlichen Ergebnissen.

### Einstellungen für position: absolute

Versuchen Sie, die Positionserklärung in Ihrem Code wie folgt zu ändern:

```css
position: absolute;
```

Wenn Sie jetzt speichern und aktualisieren, sollten Sie etwas in etwa so sehen:

```html hidden
<h1>Absolute Positionierung</h1>

<p>
  Ich bin ein grundlegendes Block-Level-Element. Meine benachbarten Block-Level-Elemente befinden sich auf neuen Zeilen unter mir.
</p>

<p class="positioned">
  Standardmäßig beanspruchen wir 100% der Breite unseres Elternelements, und wir sind so hoch wie unser Kindelement. Unsere Gesamtbreite und -höhe ist unser Inhalt + Polsterung + Rahmenbreite/-höhe.
</p>

<p>
  Wir sind durch unsere Ränder getrennt. Wegen der Rand-Zusammenführung werden wir durch die Breite eines unserer Ränder getrennt, nicht beider.
</p>

<p>
  inline-Elemente <span>wie dieses</span> und <span>dieses</span> befinden sich auf derselben Linie wie einander und angrenzende Textknoten, wenn auf derselben Linie Platz ist. Überlaufende Inline-Elemente
  <span>umschließen auf eine neue Linie, wenn möglich — wie dieses, das Text enthält</span>,
  oder gehen einfach auf eine neue Linie, wenn nicht, vergleichbar mit diesem Bild:
  <img src="long.jpg" alt="Stoffausschnitt" />
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Setting_position_absolute', '100%', 450) }}

Beachten Sie zunächst, dass die Lücke, wo das positionierte Element im Dokumentfluss sein sollte, nicht mehr vorhanden ist - die ersten und dritten Elemente haben sich zusammen geschlossen, als ob es nicht mehr existiert! Nun, in gewisser Weise ist das wahr. Ein absolut positioniertes Element existiert nicht mehr im normalen Dokumentfluss. Stattdessen befindet es sich auf einer eigenen Ebene, die von allem anderen getrennt ist. Das ist sehr nützlich: Es bedeutet, dass wir isolierte UI-Funktionen erstellen können, die das Layout anderer Elemente auf der Seite nicht stören. Zum Beispiel Popup-Informationsboxen, Steuerungsmenüs, Rollover-Panels, UI-Funktionen, die sich irgendwo auf der Seite ziehen und ablegen lassen, und so weiter.

Zweitens beachten Sie, dass sich die Position des Elements geändert hat. Das liegt daran, dass {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}}, und {{cssxref("right")}} bei der absoluten Positionierung anders funktionieren. Anstatt das Element basierend auf seiner relativen Position im normalen Dokumentfluss zu positionieren, geben sie den Abstand an, den das Element von jeder Seite des enthaltenen Elements haben sollte. In diesem Fall geben wir an, dass das absolut positionierte Element 30px vom oberen Rand des "enthaltenden Elements" und 30px vom linken Rand sitzen soll. (In diesem Falle ist das "enthaltende Element" der **initiale enthaltende Block**. Siehe den unteren Abschnitt für weitere Informationen.)

> [!NOTE]
> Sie können {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}}, und {{cssxref("right")}} verwenden, um Elemente bei Bedarf zu vergrößern. Versuchen Sie, `top: 0; bottom: 0; left: 0; right: 0;` und `margin: 0;` auf Ihren positionierten Elementen zu setzen und sehen Sie, was passiert! Setzen Sie es danach wieder zurück…

> [!NOTE]
> Ja, Margen beeinflussen weiterhin positionierte Elemente. Margin-Zusammenführung tut dies jedoch nicht.

> [!NOTE]
> Sie können das Beispiel an diesem Punkt live sehen unter [`3_absolute-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/3_absolute-positioning.html) ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/3_absolute-positioning.html)).

### Positionierungskontexte

Welches Element ist das "enthaltende Element" eines absolut positionierten Elements? Dies hängt sehr stark von der position Eigenschaft der Vorfahren des positionierten Elements ab (siehe [Identifizieren des enthaltenden Blocks](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block)).

Wenn keine Vorfahrelemente ihre position Eigenschaft explizit definiert haben, dann haben standardmäßig alle Vorfahrelemente eine statische Position. Das Ergebnis davon ist, dass das absolut positionierte Element im **initialen enthaltenden Block** enthalten ist. Der initiale enthaltende Block hat die Dimensionen des Ansichtsfensters und ist auch der Block, der das {{htmlelement("html")}} Element enthält. Mit anderen Worten, das absolut positionierte Element wird außerhalb des {{htmlelement("html")}} Elements angezeigt und relativ zum initialen Ansichtsfenster positioniert.

Das positionierte Element ist im HTML-Quelltext innerhalb des {{htmlelement("body")}} verschachtelt, im endgültigen Layout befindet es sich jedoch 30px von den oberen und linken Kanten der Seite entfernt. Wir können den **Positionierungskontext** ändern, das heißt, welches Element das absolut positionierte Element relativ positioniert. Dies erfolgt durch das Setzen einer Positionierung auf einem der Vorfahren des Elements: auf einem der Elemente, in denen es verschachtelt ist (Sie können es nicht relativ zu einem Element positionieren, in dem es nicht verschachtelt ist). Um dies zu veranschaulichen, fügen Sie Ihrer `body` Regel die folgende Deklaration hinzu:

```css
position: relative;
```

Dies sollte das folgende Ergebnis geben:

```html hidden
<h1>Positionierungskontext</h1>

<p>
  Ich bin ein grundlegendes Block-Level-Element. Meine benachbarten Block-Level-Elemente befinden sich auf neuen Zeilen unter mir.
</p>

<p class="positioned">
  Jetzt bin ich absolut relativ zum
  <code>&lt;body&gt;</code> Element positioniert, nicht relativ zum <code>&lt;html&gt;</code> Element!
</p>

<p>
  Wir sind durch unsere Ränder getrennt. Wegen der Rand-Zusammenführung werden wir durch die Breite eines unserer Ränder getrennt, nicht beider.
</p>

<p>
  inline-Elemente <span>wie dieses</span> und <span>dieses</span> befinden sich auf derselben Linie wie einander und angrenzende Textknoten, wenn auf derselben Linie Platz ist. Überlaufende Inline-Elemente
  <span>umschließen auf eine neue Linie, wenn möglich — wie dieses, das Text enthält</span>,
  oder gehen einfach auf eine neue Linie, wenn nicht, vergleichbar mit diesem Bild:
  <img src="long.jpg" alt="Stoffausschnitt" />
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
  position: relative;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Positioning_contexts', '100%', 420) }}

Das positionierte Element sitzt jetzt relativ zum {{htmlelement("body")}} Element.

> [!NOTE]
> Sie können das Beispiel an diesem Punkt live sehen unter [`4_positioning-context.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/4_positioning-context.html) ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/4_positioning-context.html)).

### Einführung in z-index

All diese absolute Positionierung macht Spaß, aber es gibt ein weiteres Feature, das wir noch nicht berücksichtigt haben. Wenn Elemente anfangen, sich zu überlappen, was bestimmt, welche Elemente über anderen erscheinen und welche unter anderen erscheinen? In dem Beispiel, das wir bisher gesehenhaben, haben wir nur ein positioniertes Element im Positionierungskontext, und es erscheint oben, da positionierte Elemente über nicht positionierten Elementen angezeigt werden. Was ist, wenn wir mehr als ein Element haben?

Versuchen Sie, das folgende zu Ihrem CSS hinzuzufügen, um den ersten Absatz ebenfalls absolut zu positionieren:

```css
p:nth-of-type(1) {
  position: absolute;
  background: lime;
  top: 10px;
  right: 30px;
}
```

An diesem Punkt werden Sie den ersten Absatz in Lime sehen, aus dem Dokumentfluss herausgenommen und etwas über seiner ursprünglichen Position positioniert. Er ist auch unter dem ursprünglichen `.positioned` Absatz gestapelt, wo sich die beiden überlappen. Dies liegt daran, dass der `.positioned` Absatz der zweite Absatz in der Quellreihenfolge ist und positionierte Elemente, die später in der Quellreihenfolge sind, über denen liegen, die früher in der Quellreihenfolge stehen.

Können Sie die Stapelreihenfolge ändern? Ja, das können Sie, indem Sie die {{cssxref("z-index")}} Eigenschaft verwenden. "z-index" bezieht sich auf die Z-Achse. Sie erinnern sich vielleicht an frühere Punkte im Kurs, in denen wir diskutiert haben, dass Webseiten horizontale (X-Achse) und vertikale (Y-Achse) Koordinaten verwenden, um Dinge wie Hintergrundbilder und Schlagschatten-Offsets zu positionieren. Bei Sprachen, die von links nach rechts laufen, befindet sich (0,0) oben links auf der Seite (oder dem Element), und die X- und Y-Achsen verlaufen nach rechts und nach unten über die Seite.

Webseiten haben auch eine Z-Achse: eine imaginäre Linie, die von der Oberfläche Ihres Bildschirms zu Ihrem Gesicht verläuft (oder was auch immer Sie gerne vor dem Bildschirm haben). {{cssxref("z-index")}} Werte beeinflussen, wo positionierte Elemente auf dieser Achse sitzen; positive Werte bewegen sie höher im Stapel, negative Werte bewegen sie niedriger im Stapel. Standardmäßig haben alle positionierten Elemente einen z-index von auto, was effektiv 0 ist.

Um die Stapelreihenfolge zu ändern, versuchen Sie, Ihrer `p:nth-of-type(1)` Regel die folgende Deklaration hinzuzufügen:

```css
z-index: 1;
```

Jetzt sollten Sie den Limonen-Absatz oben sehen:

```html hidden
<h1>z-index</h1>

<p>
  Ich bin ein grundlegendes Block-Level-Element. Meine benachbarten Block-Level-Elemente befinden sich auf neuen Zeilen unter mir.
</p>

<p class="positioned">
  Jetzt bin ich absolut relativ zum
  <code>&lt;body&gt;</code> Element positioniert, nicht relativ zum <code>&lt;html&gt;</code> Element!
</p>

<p>
  Wir sind durch unsere Ränder getrennt. Wegen der Rand-Zusammenführung werden wir durch die Breite eines unserer Ränder getrennt, nicht beider.
</p>

<p>
  inline-Elemente <span>wie dieses</span> und <span>dieses</span> befinden sich auf derselben Linie wie einander und angrenzende Textknoten, wenn auf derselben Linie Platz ist. Überlaufende Inline-Elemente
  <span>umschließen auf eine neue Linie, wenn möglich — wie dieses, das Text enthält</span>,
  oder gehen einfach auf eine neue Linie, wenn nicht, vergleichbar mit diesem Bild:
  <img src="long.jpg" alt="Stoffausschnitt" />
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
  position: relative;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px;
}

p:nth-of-type(1) {
  position: absolute;
  background: lime;
  top: 10px;
  right: 30px;
  z-index: 1;
}
```

{{ EmbedLiveSample('Introducing_z-index', '100%', 400) }}

Beachten Sie, dass `z-index` nur einheitslose Indexwerte akzeptiert; Sie können nicht angeben, dass Sie ein Element 23 Pixel auf der Z-Achse anheben möchten - so funktioniert es nicht. Höhere Werte liegen über niedrigeren Werten, und es liegt an Ihnen, welche Werte Sie verwenden. Die Verwendung von Werten von 2 oder 3 würde denselben Effekt wie Werte von 300 oder 40000 geben.

> [!NOTE]
> Sie können ein Beispiel dafür live sehen unter [`5_z-index.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/5_z-index.html) ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/5_z-index.html)).

## Feste Positionierung

Schauen wir uns nun die feste Positionierung an. Diese funktioniert genau wie die absolute Positionierung, mit einem wesentlichen Unterschied: Während die absolute Positionierung ein Element relativ zu seinem nächsten positionierten Vorfahren (dem initialen enthaltenden Block, wenn es keinen gibt) an Ort und Stelle fixiert, fixiert die **feste Positionierung** ein Element normalerweise relativ zum sichtbaren Teil des Ansichtsfensters. (Eine Ausnahme hiervon tritt auf, wenn einer der Vorfahren des Elements ein fester enthaltender Block ist, weil seine [Transform-Eigenschaft](/de/docs/Web/CSS/transform) einen anderen Wert als _none_ hat.) Dies bedeutet, dass Sie nützliche UI-Elemente erstellen können, die fixiert sind an der Stelle, wie z.B. persistierende Navigationsmenüs, die immer sichtbar sind, unabhängig davon, wie weit die Seite gescrollt wird.

Lassen Sie uns ein einfaches Beispiel zusammenstellen, um zu zeigen, was wir meinen. Löschen Sie zunächst die bestehenden `p:nth-of-type(1)` und `.positioned` Regeln aus Ihrem CSS.

Aktualisieren Sie nun die `body` Regel, um die Deklaration `position: relative;` zu entfernen und eine feste Höhe hinzuzufügen, wie folgt:

```css
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}
```

Jetzt werden wir dem {{htmlelement("Heading_Elements", "h1")}} Element `position: fixed;` geben und es am oberen Rand des Ansichtsfensters platzieren. Fügen Sie die folgende Regel Ihrem CSS hinzu:

```css
h1 {
  position: fixed;
  top: 0;
  width: 500px;
  margin-top: 0;
  background: white;
  padding: 10px;
}
```

`top: 0;` ist erforderlich, damit es am oberen Rand des Bildschirms haftet. Wir geben dem Überschriftselement dieselbe Breite wie der Inhaltsbereich und dann einen weißen Hintergrund sowie etwas Polsterung und Rand, damit der Inhalt nicht sichtbar darunter ist.

Wenn Sie speichern und aktualisieren, werden Sie einen lustigen kleinen Effekt sehen: die Überschrift bleibt fixiert - der Inhalt scheint hochzuscrollen und darunter zu verschwinden. Aber achten Sie darauf, dass ein Teil des Inhalts zunächst unter der Überschrift abgeschnitten ist. Das liegt daran, dass die positionierte Überschrift nicht mehr im Dokumentfluss erscheint, sodass der Rest des Inhalts nach oben verschoben wird. Wir könnten das verbessern, indem wir die Absätze ein Stück nach unten verschieben. Wir können das tun, indem wir dem ersten Absatz etwas oberen Rand geben. Fügen Sie dies jetzt hinzu:

```css
p:nth-of-type(1) {
  margin-top: 60px;
}
```

Jetzt sollten Sie das fertige Beispiel sehen:

```html hidden
<h1>Feste Positionierung</h1>

<p>
  Ich bin ein grundlegendes Block-Level-Element. Meine benachbarten Block-Level-Elemente befinden sich auf neuen Zeilen unter mir.
</p>

<p class="positioned">Ich bin nicht mehr positioniert.</p>

<p>
  Wir sind durch unsere Ränder getrennt. Wegen der Rand-Zusammenführung werden wir durch die Breite eines unserer Ränder getrennt, nicht beider.
</p>

<p>
  Inline-Elemente <span>wie dieses</span> und <span>dieses</span> befinden sich auf derselben Linie wie einander und angrenzende Textknoten, wenn auf derselben Linie Platz ist. Überlaufende Inline-Elemente
  <span>umschließen auf eine neue Linie, wenn möglich — wie dieses, das Text enthält</span>,
  oder gehen einfach auf eine neue Linie, wenn nicht, vergleichbar mit diesem Bild:
  <img src="long.jpg" alt="Stoffausschnitt" />
</p>
```

```css hidden
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

h1 {
  position: fixed;
  top: 0px;
  width: 500px;
  background: white;
  padding: 10px;
}

p:nth-of-type(1) {
  margin-top: 60px;
}
```

{{ EmbedLiveSample('Fixed_positioning', '100%', 400) }}

> [!NOTE]
> Sie können ein Beispiel dafür live sehen unter [`6_fixed-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/6_fixed-positioning.html) ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/6_fixed-positioning.html)).

## Sticky-Positionierung

Es gibt einen weiteren Positionierungswert, der `position: sticky` genannt wird und etwas neuer als die anderen ist. Dies ist im Grunde eine Mischung aus relativer und fester Positionierung. Es ermöglicht es einem positionierten Element, sich so zu verhalten, als wäre es relativ positioniert, bis es an eine bestimmte Schwelle gescrollt wird (z.B. 10px vom oberen Rand des Ansichtsfensters entfernt), nach welcher es fest wird.

### Einfaches Beispiel

Sticky-Positionierung kann z.B. verwendet werden, um eine Navigationsleiste mit der Seite scrollen zu lassen, bis zu einem bestimmten Punkt und dann oben auf der Seite zu haften.

```html hidden
<h1>Sticky-Positionierung</h1>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>

<div class="positioned">Sticky</div>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

.positioned {
  background: rgb(255 84 104 / 30%);
  border: 2px solid rgb(255 84 104);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
```

```css
.positioned {
  position: sticky;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Basic_example', '100%', 200) }}

### Bildlaufindex

Ein interessantes und häufiges Beispiel für die Verwendung von `position: sticky` ist die Erstellung einer Bildlaufindexseite, bei der verschiedene Überschriften oben auf der Seite haften, wenn sie diese erreichen. Die Markup-Struktur für ein solches Beispiel könnte wie folgt aussehen:

```html
<h1>Sticky-Positionierung</h1>

<dl>
  <dt>A</dt>
  <dd>Apple</dd>
  <dd>Ant</dd>
  <dd>Altimeter</dd>
  <dd>Airplane</dd>
  <dt>B</dt>
  <dd>Bird</dd>
  <dd>Buzzard</dd>
  <dd>Bee</dd>
  <dd>Banana</dd>
  <dd>Beanstalk</dd>
  <dt>C</dt>
  <dd>Calculator</dd>
  <dd>Cane</dd>
  <dd>Camera</dd>
  <dd>Camel</dd>
  <dt>D</dt>
  <dd>Duck</dd>
  <dd>Dime</dd>
  <dd>Dipstick</dd>
  <dd>Drone</dd>
  <dt>E</dt>
  <dd>Egg</dd>
  <dd>Elephant</dd>
  <dd>Egret</dd>
</dl>
```

Das CSS könnte folgendermaßen aussehen. Im normalen Fluss scrollen die {{htmlelement("dt")}} Elemente mit dem Inhalt. Wenn wir `position: sticky` auf das {{htmlelement("dt")}} Element anwenden, zusammen mit einem {{cssxref("top")}} Wert von 0, haften unterstützende Browser die Überschriften oben am Ansichtsfenster, wenn sie diese Position erreichen. Jede nachfolgende Überschrift ersetzt dann die vorherige, wenn sie an diese Position scrollt.

```css
dt {
  background-color: black;
  color: white;
  padding: 10px;
  position: sticky;
  top: 0;
  left: 0;
  margin: 1em 0;
}
```

```css hidden
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}
```

```html hidden
<h1>Sticky-Positionierung</h1>

<dl>
  <dt>A</dt>
  <dd>Apple</dd>
  <dd>Ant</dd>
  <dd>Altimeter</dd>
  <dd>Airplane</dd>
  <dt>B</dt>
  <dd>Bird</dd>
  <dd>Buzzard</dd>
  <dd>Bee</dd>
  <dd>Banana</dd>
  <dd>Beanstalk</dd>
  <dt>C</dt>
  <dd>Calculator</dd>
  <dd>Cane</dd>
  <dd>Camera</dd>
  <dd>Camel</dd>
  <dt>D</dt>
  <dd>Duck</dd>
  <dd>Dime</dd>
  <dd>Dipstick</dd>
  <dd>Drone</dd>
  <dt>E</dt>
  <dd>Egg</dd>
  <dd>Elephant</dd>
  <dd>Egret</dd>
</dl>
```

{{ EmbedLiveSample('Scrolling_index', '100%', 200) }}

Sticky-Elemente sind relativ zum nächsten Vorfahren mit einem "Scrollmechanismus" fixiert, der durch die [overflow](/de/docs/Web/CSS/overflow) Eigenschaft seiner Vorfahren bestimmt wird.

> [!NOTE]
> Sie können dieses Beispiel live sehen unter [`7_sticky-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/7_sticky-positioning.html) ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/7_sticky-positioning.html)).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Test your skills: Positioning](/de/docs/Learn/CSS/CSS_layout/Position_skills).

## Zusammenfassung

Ich bin sicher, Sie hatten Spaß daran, mit der grundlegenden Positionierung zu spielen. Während sie nicht die ideale Methode für das gesamte Layout ist, gibt es viele spezifische Ziele, für die sie geeignet ist.

## Siehe auch

- Die {{cssxref("position")}} Eigenschaftsreferenz.
- [Praktische Positionierungsbeispiele](/de/docs/Learn/CSS/CSS_layout/Practical_positioning_examples), für einige weitere nützliche Ideen.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout")}}
