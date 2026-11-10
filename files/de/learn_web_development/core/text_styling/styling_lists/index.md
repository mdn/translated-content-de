---
title: Listen gestalten
slug: Learn_web_development/Core/Text_styling/Styling_lists
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Fundamentals", "Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling")}}

[Listen](/de/docs/Learn_web_development/Core/Structuring_content/Lists) verhalten sich größtenteils wie anderer Text. Es gibt jedoch einige CSS-Eigenschaften speziell für Listen, die Sie kennen sollten, sowie einige bewährte Vorgehensweisen. Dieser Artikel erklärt beides.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        > und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Gestaltung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Abstände zwischen Listeneinträgen festlegen, beispielsweise mit margin oder Zeilenhöhe.</li>
          <li><code>list-style</code>-Eigenschaften verwenden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Ein einfaches Listenbeispiel

Sehen wir uns ein einfaches Listenbeispiel an. In diesem Artikel betrachten wir ungeordnete Listen, geordnete Listen und Beschreibungslisten. Sie haben ähnliche Gestaltungsmöglichkeiten, aber auch einige Besonderheiten.

Der HTML-Code für unser Listenbeispiel sieht so aus:

```html live-sample___unstyled live-sample___initial-style live-sample___finished-style
<h2>Shopping (unordered) list</h2>

<p>
  Paragraph for reference, paragraph for reference, paragraph for reference,
  paragraph for reference, paragraph for reference, paragraph for reference.
</p>

<ul>
  <li>Hummus</li>
  <li>Pita</li>
  <li>Green salad</li>
  <li>Halloumi</li>
</ul>

<h2>Recipe (ordered) list</h2>

<p>
  Paragraph for reference, paragraph for reference, paragraph for reference,
  paragraph for reference, paragraph for reference, paragraph for reference.
</p>

<ol>
  <li>Toast pita, leave to cool, then slice down the edge.</li>
  <li>
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li>Wash and chop the salad.</li>
  <li>Fill pita with salad, hummus, and fried halloumi.</li>
</ol>

<h2>Ingredient description list</h2>

<p>
  Paragraph for reference, paragraph for reference, paragraph for reference,
  paragraph for reference, paragraph for reference, paragraph for reference.
</p>

<dl>
  <dt>Hummus</dt>
  <dd>
    A thick dip/sauce generally made from chick peas blended with tahini, lemon
    juice, salt, garlic, and other ingredients.
  </dd>
  <dt>Pita</dt>
  <dd>A soft, slightly leavened flatbread.</dd>
  <dt>Halloumi</dt>
  <dd>
    A semi-hard, unripened, brined cheese with a higher-than-usual melting
    point, usually made from goat/sheep milk.
  </dd>
  <dt>Green salad</dt>
  <dd>That green healthy stuff that many of us just use to garnish kebabs.</dd>
</dl>
```

Ohne zusätzliche Gestaltung wird er wie folgt dargestellt:

{{embedlivesample("unstyled", "100%", 400)}}

Untersuchen Sie diese Listenelemente mit den [Entwicklerwerkzeugen Ihres Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools). Dabei werden Sie einige Standardformatierungen feststellen:

- Die Elemente {{htmlelement("ul")}} und {{htmlelement("ol")}} haben oben und unten einen {{cssxref("margin")}} von `16px` (`1em`) und einen {{cssxref("padding-left")}} von `40px` (`2.5em`). Wenn das Attribut für die Schreibrichtung [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) bei `ul`- und `ol`-Elementen auf rechts nach links (`rtl`) gesetzt ist, kommt stattdessen {{cssxref("padding-right")}} mit dem Standardwert `40px` (`2.5em`) zum Tragen.
- Für die Abstände der Listeneinträge ({{htmlelement("li")}}-Elemente) sind keine Standardwerte festgelegt.
- Das Element {{htmlelement("dl")}} hat oben und unten einen {{cssxref("margin")}} von `16px` (`1em`), aber kein festgelegtes Padding.
- Die {{htmlelement("dd")}}-Elemente haben einen {{cssxref("margin-left")}} von `40px` (`2.5em`).
- Die {{htmlelement("p")}}-Elemente, die wir zum Vergleich eingefügt haben, haben oben und unten einen {{cssxref("margin")}} von `16px` (`1em`) – genau wie die verschiedenen Listentypen.

## Abstände in Listen festlegen

Wenn Sie Listen gestalten, sollten Sie ihre Formatierung so anpassen, dass die vertikalen Abstände zu den umgebenden Elementen (etwa Absätzen und Bildern) einheitlich bleiben. Das wird manchmal als vertikaler Rhythmus bezeichnet. Auch die horizontalen Abstände der Listen sollten zueinander passen. Typische CSS-Regeln für die Textgestaltung und Abstände könnten so aussehen:

```css live-sample___initial-style live-sample___list-style-type live-sample___list-style-position live-sample___custom-bullets live-sample___finished-style
/* General styles */

html {
  font-family: "Helvetica", "Arial", sans-serif;
  font-size: 10px;
}

h2 {
  font-size: 2rem;
}

ul,
ol,
dl,
p {
  font-size: 1.5rem;
}

li,
p {
  line-height: 1.5;
}

/* Description list styles */

dd,
dt {
  line-height: 1.5;
}

dt {
  font-weight: bold;
}
```

- Die erste Regel legt eine Schriftart für die gesamte Website und eine Basisschriftgröße von 10px fest. Beides wird an alle Elemente der Seite vererbt.
- Die Regeln 2 und 3 legen relative Schriftgrößen für Überschriften, die verschiedenen Listentypen und Absätze fest. Die untergeordneten Elemente der Listen erben die Schriftgröße. Dadurch haben Absätze und Listen dieselbe Schriftgröße sowie dieselben oberen und unteren Abstände, was für einen einheitlichen vertikalen Rhythmus sorgt.
- Regel 4 legt für Absätze und Listeneinträge dieselbe {{cssxref("line-height")}} fest. So haben die Zeilen in Absätzen und einzelnen Listeneinträgen denselben Abstand. Auch das trägt zu einem einheitlichen vertikalen Rhythmus bei.
- Die Regeln 5 und 6 gelten für die Beschreibungsliste. Für deren Begriffe und Beschreibungen legen wir dieselbe `line-height` fest wie für Absätze und Listeneinträge. Auch hier ist Einheitlichkeit hilfreich. Außerdem stellen wir die Begriffe fett dar, damit sie optisch leichter zu erkennen sind.

Auf den zuvor gezeigten HTML-Code angewendet, ergibt sich folgende Darstellung:

{{embedlivesample("initial-style", "100%", 400)}}

## Listenspezifische Gestaltung

Nachdem wir allgemeine Techniken für Listenabstände betrachtet haben, sehen wir uns einige listenspezifische Eigenschaften an. Zunächst sollten Sie drei Eigenschaften kennen, die sich für {{htmlelement("ul")}}- oder {{htmlelement("ol")}}-Elemente festlegen lassen:

- {{cssxref("list-style-type")}}: Legt den Typ der Listenmarkierungen fest, beispielsweise Quadrate oder Kreise für eine ungeordnete Liste oder Zahlen, Buchstaben oder römische Ziffern für eine geordnete Liste.
- {{cssxref("list-style-position")}}: Legt fest, ob die Markierungen am Anfang jedes Eintrags innerhalb oder außerhalb der Listeneinträge stehen.
- {{cssxref("list-style-image")}}: Ermöglicht es, statt eines einfachen Quadrats oder Kreises ein eigenes Bild als Listenmarkierung zu verwenden.

### Arten von Listenmarkierungen

Wie oben erwähnt, können Sie mit der Eigenschaft {{cssxref("list-style-type")}} den Typ der Listenmarkierungen festlegen. In unserem Beispiel haben wir für die geordnete Liste römische Ziffern in Großschreibung festgelegt:

```html hidden live-sample___list-style-type live-sample___list-style-position
<ol>
  <li>Toast pita, leave to cool, then slice down the edge.</li>
  <li>
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li>Wash and chop the salad.</li>
  <li>Fill pita with salad, hummus, and fried halloumi.</li>
</ol>
```

```css live-sample___list-style-type
ol {
  list-style-type: upper-roman;
}
```

Das ergibt folgendes Erscheinungsbild:

{{embedlivesample("list-style-type", "100%", 120)}}

Viele weitere Möglichkeiten finden Sie auf der Referenzseite zu {{cssxref("list-style-type")}}.

### Position der Listenmarkierungen

Die Eigenschaft {{cssxref("list-style-position")}} legt fest, ob Listenmarkierungen innerhalb der Listeneinträge oder außerhalb, vor dem Anfang jedes Eintrags, erscheinen. Der Standardwert ist `outside`. Dadurch stehen die Markierungen wie oben gezeigt außerhalb der Listeneinträge.

Wenn Sie den Wert auf `inside` setzen, stehen die Markierungen innerhalb der Zeilen:

```css live-sample___list-style-position live-sample___finished-style
ol {
  list-style-type: upper-roman;
  list-style-position: inside;
}
```

{{embedlivesample("list-style-position", "100%", 120)}}

### Ein eigenes Bild als Listenmarkierung verwenden

Mit der Eigenschaft {{cssxref("list-style-image")}} können Sie ein eigenes Bild als Listenmarkierung verwenden. Die Syntax sieht so aus:

```css
ul {
  list-style-image: url("https://mdn.github.io/shared-assets/images/examples/star-shape.png");
}
```

Mit dieser Eigenschaft lassen sich Position, Größe und weitere Aspekte der Markierungen allerdings nur eingeschränkt steuern. Dafür eignen sich die {{cssxref("background")}}-Eigenschaften besser, die Sie in der vorherigen Lektion [Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) kennengelernt haben.

In unserem fertigen Beispiel haben wir die ungeordnete Liste folgendermaßen gestaltet:

```html hidden live-sample___custom-bullets
<ul>
  <li>Hummus</li>
  <li>Pita</li>
  <li>Green salad</li>
  <li>Halloumi</li>
</ul>
```

```css live-sample___custom-bullets live-sample___finished-style
ul {
  padding-left: 2rem;
  list-style-type: none;
}

ul li {
  padding-left: 2rem;
  background-image: url("https://mdn.github.io/shared-assets/images/examples/star-shape.png");
  background-position: 0 0;
  background-size: 1.6rem 1.6rem;
  background-repeat: no-repeat;
}
```

Dabei haben wir Folgendes getan:

- Den {{cssxref("padding-left")}} des {{htmlelement("ul")}} vom Standardwert `40px` auf `20px` verringert und dann für die Listeneinträge ebenfalls `20px` festgelegt. Dadurch bleiben die Einträge insgesamt an den Einträgen der geordneten Liste und den Beschreibungen der Beschreibungsliste ausgerichtet. Gleichzeitig bieten die Listeneinträge Platz für die Hintergrundbilder. Ohne diesen Platz würden die Hintergrundbilder den Text der Listeneinträge überlagern, was unordentlich aussähe.
- {{cssxref("list-style-type")}} auf `none` gesetzt, damit standardmäßig keine Listenmarkierung erscheint. Stattdessen verwenden wir {{cssxref("background")}}-Eigenschaften für die Markierungen.
- Jedem Eintrag der ungeordneten Liste eine Markierung hinzugefügt. Dafür sind folgende Eigenschaften relevant:
  - {{cssxref("background-image")}}: Verweist auf den Pfad zur Bilddatei, die Sie als Listenmarkierung verwenden möchten.
  - {{cssxref("background-position")}}: Legt fest, an welcher Stelle im Hintergrund des ausgewählten Elements das Bild erscheint. Hier verwenden wir `0 0`, sodass die Markierung ganz oben links in jedem Listeneintrag erscheint.
  - {{cssxref("background-size")}}: Legt die Größe des Hintergrundbilds fest. Idealerweise sollen die Markierungen etwa so groß sein wie die Listeneinträge (oder geringfügig kleiner oder größer). Wir verwenden `1.6rem` (`16px`). Das passt gut zum Padding von `20px`, das wir für die Markierung vorgesehen haben: 16px für die Markierung und 4px Abstand zwischen Markierung und Text des Listeneintrags.
  - {{cssxref("background-repeat")}}: Standardmäßig werden Hintergrundbilder wiederholt, bis sie den verfügbaren Hintergrundbereich ausfüllen. Da das Bild in jedem Eintrag nur einmal erscheinen soll, setzen wir den Wert auf `no-repeat`.

Das ergibt folgendes Ergebnis:

{{embedlivesample("custom-bullets", "100%", 120)}}

### Die Kurzschreibweise list-style

Die drei oben genannten Eigenschaften lassen sich gemeinsam mit der Kurzschreibweise {{cssxref("list-style")}} festlegen. Beispielsweise kann das folgende CSS:

```css
ul {
  list-style-type: square;
  list-style-image: url("example.png");
  list-style-position: inside;
}
```

durch dieses ersetzt werden:

```css
ul {
  list-style: square url("example.png") inside;
}
```

Die Werte können in beliebiger Reihenfolge stehen. Sie können einen, zwei oder alle drei angeben. Für nicht angegebene Eigenschaften gelten die Standardwerte `disc`, `none` und `outside`. Wenn sowohl ein `type` als auch ein `image` angegeben sind, dient der Typ als Ersatz, falls das Bild aus irgendeinem Grund nicht geladen werden kann.

## Vollständiges Beispiel

In den letzten Abschnitten haben wir die Auswirkungen einzelner Listeneigenschaften gezeigt. Wenn wir sie alle auf unseren ursprünglichen HTML-Code anwenden, ergibt sich folgendes Ergebnis:

{{embedlivesample("finished-style", "100%", 400)}}

## Die Nummerierung von Listen steuern

Manchmal möchten Sie eine geordnete Liste anders nummerieren – beispielsweise mit einer anderen Zahl als 1 beginnen, rückwärts zählen oder in Schritten von mehr als 1 zählen. HTML und CSS bieten dafür einige Möglichkeiten.

### start

Mit dem Attribut [`start`](/de/docs/Web/HTML/Reference/Elements/ol#start) können Sie die Nummerierung der Liste mit einer anderen Zahl als 1 beginnen lassen. Das folgende Beispiel:

```html live-sample___counting-control
<ol start="4">
  <li>Toast pita, leave to cool, then slice down the edge.</li>
  <li>
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li>Wash and chop the salad.</li>
  <li>Fill pita with salad, hummus, and fried halloumi.</li>
</ol>
```

ergibt diese Ausgabe:

{{ EmbedLiveSample('counting-control', '100%', 150) }}

### reversed

Mit dem Attribut [`reversed`](/de/docs/Web/HTML/Reference/Elements/ol#reversed) wird die Liste abwärts statt aufwärts nummeriert. Das folgende Beispiel:

```html live-sample___counting-control-reversed
<ol start="4" reversed>
  <li>Toast pita, leave to cool, then slice down the edge.</li>
  <li>
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li>Wash and chop the salad.</li>
  <li>Fill pita with salad, hummus, and fried halloumi.</li>
</ol>
```

ergibt diese Ausgabe:

{{ EmbedLiveSample('counting-control-reversed', '100%', 150) }}

> [!NOTE]
> Wenn eine rückwärts nummerierte Liste mehr Einträge enthält, als der Wert des Attributs `start` angibt, wird bis null und anschließend mit negativen Werten weitergezählt.

### value

Mit dem Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/li#value) können Sie einzelnen Listeneinträgen bestimmte numerische Werte zuweisen. Das folgende Beispiel:

```html live-sample___counting-control-values
<ol>
  <li value="2">Toast pita, leave to cool, then slice down the edge.</li>
  <li value="4">
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li value="6">Wash and chop the salad.</li>
  <li value="8">Fill pita with salad, hummus, and fried halloumi.</li>
</ol>
```

ergibt diese Ausgabe:

{{ EmbedLiveSample('counting-control-values', '100%', 150) }}

> [!NOTE]
> Auch wenn Sie einen nicht numerischen Wert für {{cssxref("list-style-type")}} verwenden, müssen Sie im Attribut `value` die entsprechenden numerischen Werte angeben.

## Sie sind dran: Eine verschachtelte Liste gestalten

Jetzt sind Sie wieder an der Reihe. Wenden Sie das Gelernte an und gestalten Sie eine verschachtelte Liste.

1. Klicken Sie im Codeblock unten auf **„Play“**, um das Beispiel im MDN Playground zu bearbeiten.
2. Gestalten Sie die ungeordnete Liste mit quadratischen Markierungen.
3. Geben Sie den Einträgen der ungeordneten und der geordneten Liste eine `line-height` vom `1.5`-Fachen ihrer `font-size`.
4. Legen Sie für die geordnete Liste Kleinbuchstaben als Markierungen fest.
5. Experimentieren Sie nach Belieben weiter mit dem Listenbeispiel, etwa mit Markierungstypen, Abständen oder anderen Eigenschaften.

Wenn Sie einen Fehler machen, können Sie Ihre Änderungen mit der Schaltfläche _Reset_ im MDN Playground zurücksetzen. Falls Sie nicht weiterkommen, finden Sie unter der Beispielausgabe eine Lösung.

```html live-sample___styling_lists
<ul>
  <li>First, light the candle.</li>
  <li>Next, open the box.</li>
  <li>
    Finally, place the three magic items in the box, in this exact order, to
    complete the spell:
    <ol>
      <li>The book of spells</li>
      <li>The shiny rod</li>
      <li>The goblin statue</li>
    </ol>
  </li>
</ul>
```

```css live-sample___styling_lists

```

{{ EmbedLiveSample('styling_lists', "100%", 160) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges CSS sollte ungefähr so aussehen:

```css
ul {
  list-style-type: square;
}

li {
  line-height: 1.5;
}

ol {
  list-style-type: lower-alpha;
}
```

</details>

## Zusammenfassung

Listen lassen sich recht einfach gestalten, wenn Sie einige grundlegende Prinzipien und spezifische Eigenschaften kennen. Im nächsten Artikel beschäftigen wir uns mit Techniken zur Gestaltung von Links.

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Fundamentals", "Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling")}}
