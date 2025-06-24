---
title: Styling von Listen
slug: Learn_web_development/Core/Text_styling/Styling_lists
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Fundamentals", "Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling")}}

[Listen](/de/docs/Learn_web_development/Core/Structuring_content/Lists) verhalten sich größtenteils wie normaler Text, es gibt jedoch einige spezifische CSS-Eigenschaften für Listen, die Sie kennen sollten, sowie einige bewährte Praktiken. Dieser Artikel erklärt alles.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturieren von Inhalten mit HTML</a
        > und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen des CSS-Stylings</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Abstandseinstellungen bei Listenelementen, beispielsweise mit Margin oder Zeilenhöhe.</li>
          <li>Verwendung von <code>list-style</code>-Eigenschaften.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Ein einfaches Listenbeispiel

Am Anfang schauen wir uns ein einfaches Listenbeispiel an. Dieser Artikel behandelt ungeordnete, geordnete und Definitionslisten – alle haben ähnliche Stileigenschaften und auch einige, die speziell für sie gelten. Das ungestylte Beispiel ist [verfügbar auf GitHub](https://mdn.github.io/learning-area/css/styling-text/styling-lists/unstyled-list.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-text/styling-lists/unstyled-list.html) an).

Das HTML für unser Listenbeispiel sieht folgendermaßen aus:

```html
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

Wenn Sie jetzt zum Live-Beispiel gehen und die Listenelemente mittels der [Entwicklerwerkzeuge des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) untersuchen, werden Sie einige Styling-Standards bemerken:

- Die {{htmlelement("ul")}} und {{htmlelement("ol")}} Elemente haben eine obere und untere {{cssxref("margin")}} von `16px` (`1em`) und eine {{cssxref("padding-left")}} von `40px` (`2.5em`). Wenn das Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) auf `rtl` (right-to-left) für `ul` und `ol` Elemente gesetzt ist, gilt in diesem Fall {{cssxref("padding-right")}} mit einem Standardwert von `40px` (`2.5em`).
- Die Listenelemente ({{htmlelement("li")}}) haben keine definierten Standardwerte für den Abstand.
- Das {{htmlelement("dl")}} Element hat eine obere und untere {{cssxref("margin")}} von `16px` (`1em`), aber kein definiertes Padding.
- Die {{htmlelement("dd")}} Elemente haben eine {{cssxref("margin-left")}} von `40px` (`2.5em`).
- Die {{htmlelement("p")}} Elemente, die wir als Referenz aufgenommen haben, haben eine obere und untere {{cssxref("margin")}} von `16px` (`1em`) — gleich wie die verschiedenen Listentypen.

## Umgang mit Listen-Abständen

Beim Styling von Listen müssen Sie deren Stile so anpassen, dass sie den gleichen vertikalen Abstand wie ihre umliegenden Elemente (wie Absätze und Bilder; manchmal als vertikaler Rhythmus bezeichnet) sowie den gleichen horizontalen Abstand zueinander haben (Sie können das [fertig gestylte Beispiel](https://mdn.github.io/learning-area/css/styling-text/styling-lists/) auf GitHub sehen und auch den [Quellcode finden](https://github.com/mdn/learning-area/blob/main/css/styling-text/styling-lists/index.html)).

Das CSS, das für das Textstyling und die Abstände verwendet wird, sieht folgendermaßen aus:

```css
/* General styles */

html {
  font-family: Helvetica, Arial, sans-serif;
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

- Die erste Regel setzt eine globale Schriftart und eine Basis-Schriftgröße von 10px. Diese werden von allem auf der Seite geerbt.
- Regeln 2 und 3 setzen relative Schriftgrößen für die Überschriften, verschiedene Listentypen (die Kinder der Listenelemente erben diese) und Absätze. Das bedeutet, dass jeder Absatz und jede Liste die gleiche Schriftgröße und den gleichen oberen und unteren Abstand haben, was dazu beiträgt, den vertikalen Rhythmus konsistent zu halten.
- Regel 4 setzt die gleiche {{cssxref("line-height")}} in den Absätzen und Listenelementen — so haben die Absätze und jedes einzelne Listenelement den gleichen Zeilenabstand. Das hilft auch, den vertikalen Rhythmus konsistent zu halten.
- Regeln 5 und 6 gelten für die Definitionsliste. Wir setzen die gleiche `line-height` für die Begriffe und Beschreibungen der Definitionsliste, wie wir es bei den Absätzen und Listenelementen getan haben. Erneut: Konsistenz ist gut! Wir setzen die Begriffe der Beschreibung auch fett, damit sie visuell leichter ins Auge fallen.

## Listen-spezifische Stile

Nachdem wir uns Techniken zur allgemeinen Abstandseinstellung von Listen angesehen haben, wollen wir einige Listen-spezifische Eigenschaften erkunden. Es gibt drei Eigenschaften, die Sie kennen sollten, die auf {{htmlelement("ul")}} oder {{htmlelement("ol")}} Elementen gesetzt werden können:

- {{cssxref("list-style-type")}}: Setzt die Art der Aufzählungszeichen, die für die Liste verwendet werden sollen, beispielsweise quadratische oder runde Punkte für eine ungeordnete Liste oder Zahlen, Buchstaben oder römische Ziffern für eine geordnete Liste.
- {{cssxref("list-style-position")}}: Bestimmt, ob die Aufzählungszeichen am Anfang jedes Postens innerhalb oder außerhalb der Listen erscheinen.
- {{cssxref("list-style-image")}}: Ermöglicht die Verwendung eines benutzerdefinierten Bildes für das Aufzählungszeichen anstelle eines einfachen Quadrats oder Kreises.

### Aufzählungszeichen-Stile

Wie oben erwähnt, ermöglicht die {{cssxref("list-style-type")}} Eigenschaft die Festlegung, welche Art von Aufzählungszeichen für die Listenpunkte verwendet werden soll. In unserem Beispiel haben wir die geordnete Liste so eingestellt, dass sie Großbuchstaben als römische Ziffern verwendet mit:

```css
ol {
  list-style-type: upper-roman;
}
```

Dies ergibt folgendes Aussehen:

![eine geordnete Liste, bei der die Aufzählungszeichen außerhalb des Listenelementtexts gesetzt sind.](outer-bullets.png)

Sie können viele weitere Optionen finden, indem Sie sich die {{cssxref("list-style-type")}} Referenzseite ansehen.

### Position der Aufzählungszeichen

Die {{cssxref("list-style-position")}} Eigenschaft bestimmt, ob die Aufzählungszeichen innerhalb der Listenelemente oder außerhalb davor erscheinen. Der Standardwert ist `outside`, was dazu führt, dass die Aufzählungszeichen außerhalb der Listenelemente sitzen, wie oben gezeigt.

Wenn Sie den Wert auf `inside` setzen, sitzen die Aufzählungszeichen innerhalb der Zeilen:

```css
ol {
  list-style-type: upper-roman;
  list-style-position: inside;
}
```

![eine geordnete Liste, bei der die Aufzählungszeichen innerhalb des Listenelementtexts gesetzt sind.](inner-bullets.png)

### Verwendung eines benutzerdefinierten Aufzählungszeichens

Die {{cssxref("list-style-image")}} Eigenschaft ermöglicht Ihnen die Verwendung eines benutzerdefinierten Bildes als Aufzählungszeichen. Die Syntax ist ziemlich einfach:

```css
ul {
  list-style-image: url(star.svg);
}
```

Diese Eigenschaft ist jedoch etwas eingeschränkt, was die Kontrolle über Position, Größe usw. der Aufzählungszeichen betrifft. Sie sind besser beraten, die {{cssxref("background")}} Familie von Eigenschaften zu verwenden, die Sie in unserer vorherigen [Lektion über Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) kennengelernt haben.

In unserem fertigen Beispiel haben wir die ungeordnete Liste wie folgt gestylt (zusätzlich zu dem, was Sie oben bereits gesehen haben):

```css
ul {
  padding-left: 2rem;
  list-style-type: none;
}

ul li {
  padding-left: 2rem;
  background-image: url(star.svg);
  background-position: 0 0;
  background-size: 1.6rem 1.6rem;
  background-repeat: no-repeat;
}
```

Hier haben wir Folgendes gemacht:

- Das {{cssxref("padding-left")}} des {{htmlelement("ul")}} von den Standard `40px` auf `20px` gesenkt und dann den gleichen Wert für die Listenelemente gesetzt. Das ist so, dass insgesamt die Listenelemente immer noch mit den geordneten Listenelementen und den Beschreibungen der Definitionsliste ausgerichtet sind, aber die Listenelemente ein wenig Padding haben, damit die Hintergrundbilder darin platziert werden können. Wenn wir das nicht machen würden, würden die Hintergrundbilder sich mit dem Text der Listenelemente überschneiden, was unordentlich aussehen würde.
- Das {{cssxref("list-style-type")}} auf `none` gesetzt, sodass keine Aufzählungszeichen standardmäßig angezeigt werden. Wir verwenden stattdessen {{cssxref("background")}} Eigenschaften, um die Aufzählungszeichen zu handhaben.
- Ein Aufzählungszeichen auf jedes ungeordnete Listenelement gesetzt. Die relevanten Eigenschaften sind wie folgt:
  - {{cssxref("background-image")}}: Dies verweist auf den Pfad zur Bilddatei, die Sie als Aufzählungszeichen verwenden möchten.
  - {{cssxref("background-position")}}: Dies definiert, wo im Hintergrund des ausgewählten Elements das Bild erscheinen soll — in diesem Fall sagen wir `0 0`, was bedeutet, dass das Aufzählungszeichen ganz oben links in jedem Listenelement erscheint.
  - {{cssxref("background-size")}}: Dies legt die Größe des Hintergrundbildes fest. Wir möchten, dass die Aufzählungszeichen idealerweise die gleiche Größe wie die Listenelemente haben (oder sehr leicht kleiner oder größer). Wir verwenden eine Größe von `1.6rem` (`16px`), die sehr gut mit dem `20px` Padding harmoniert, das wir erlauben, damit der Aufzählungspunkt darin sitzt — 16px plus 4px Raum zwischen dem Aufzählungspunkt und dem Text des Listenelements funktionieren gut.
  - {{cssxref("background-repeat")}}: Standardmäßig wiederholen sich Hintergrundbilder, bis sie den verfügbaren Hintergrundbereich ausfüllen. Wir wollen in jedem Fall nur eine Kopie des Bildes einfügen, deshalb setzen wir diesen Wert auf `no-repeat`.

Dies ergibt das folgende Ergebnis:

![eine ungeordnete Liste, bei der die Aufzählungspunkte als kleine Sternbilder gesetzt wurden](list_formatting.png)

### list-style-Kurzschrift

Die oben genannten drei Eigenschaften können alle mit einer einzelnen Kurzschrifteigenschaft, {{cssxref("list-style")}}, gesetzt werden. Zum Beispiel kann das folgende CSS:

```css
ul {
  list-style-type: square;
  list-style-image: url(example.png);
  list-style-position: inside;
}
```

durch dieses ersetzt werden:

```css
ul {
  list-style: square url(example.png) inside;
}
```

Die Werte können in beliebiger Reihenfolge aufgelistet werden, und Sie können einen, zwei oder alle drei verwenden (die Standardwerte für die nicht eingeschlossenen Eigenschaften sind `disc`, `none` und `outside`). Wenn sowohl ein `type` als auch ein `image` angegeben sind, wird der Typ als Fallback verwendet, wenn das Bild aus irgendeinem Grund nicht geladen werden kann.

## Kontrolle der Listenzählung

Manchmal möchten Sie vielleicht auf einer geordneten Liste anders zählen — z.B. bei einer Zahl beginnen, die nicht 1 ist, rückwärts zählen oder in Schritten von mehr als 1 zählen. HTML und CSS bieten Ihnen einige Hilfsmittel dafür.

### start

Das [`start`](/de/docs/Web/HTML/Reference/Elements/ol#start) Attribut ermöglicht es Ihnen, die Zählung der Liste bei einer Zahl zu beginnen, die nicht 1 ist. Das folgende Beispiel:

```html
<ol start="4">
  <li>Toast pita, leave to cool, then slice down the edge.</li>
  <li>
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li>Wash and chop the salad.</li>
  <li>Fill pita with salad, hummus, and fried halloumi.</li>
</ol>
```

Gibt Ihnen diese Ausgabe:

{{ EmbedLiveSample('start', '100%', 150) }}

### reversed

Das [`reversed`](/de/docs/Web/HTML/Reference/Elements/ol#reversed) Attribut wird die Zählung der Liste herunterzählen anstatt hoch. Das folgende Beispiel:

```html
<ol start="4" reversed>
  <li>Toast pita, leave to cool, then slice down the edge.</li>
  <li>
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li>Wash and chop the salad.</li>
  <li>Fill pita with salad, hummus, and fried halloumi.</li>
</ol>
```

Gibt Ihnen diese Ausgabe:

{{ EmbedLiveSample('reversed', '100%', 150) }}

> [!NOTE]
> Wenn es mehr Listenelemente in einer rückwärts gezählten Liste gibt als den Wert des `start` Attributs, wird die Zählung bis null und dann in negative Werte fortgesetzt.

### value

Das [`value`](/de/docs/Web/HTML/Reference/Elements/li#value) Attribut ermöglicht es Ihnen, Ihre Listenelemente auf spezifische numerische Werte zu setzen. Das folgende Beispiel:

```html
<ol>
  <li value="2">Toast pita, leave to cool, then slice down the edge.</li>
  <li value="4">
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li value="6">Wash and chop the salad.</li>
  <li value="8">Fill pita with salad, hummus, and fried halloumi.</li>
</ol>
```

Gibt Ihnen diese Ausgabe:

{{ EmbedLiveSample('value', '100%', 150) }}

> [!NOTE]
> Selbst wenn Sie einen nicht numerischen {{cssxref("list-style-type")}} verwenden, müssen Sie trotzdem die entsprechenden numerischen Werte im `value` Attribut verwenden.

## Styling einer verschachtelten Liste

Nun ist es Zeit für Sie, eine weitere Aufgabe zu erledigen. Diesmal möchten wir, dass Sie das Gelernte aus dem obigen Text nehmen und versuchen, eine verschachtelte Liste zu stylen.

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Stylen Sie die ungeordnete Liste mit quadratischen Aufzählungszeichen.
3. Geben Sie den ungeordneten Listenelementen und den geordneten Listenelementen eine `line-height` von `1.5` ihrer `font-size`.
4. Setzen Sie die geordnete Liste so, dass sie kleine alphabetische Aufzählungszeichen hat.
5. Spielen Sie gerne mit dem Listenbeispiel so viel Sie wollen, und experimentieren Sie mit Aufzählungszeichentypen, Abständen oder was immer Ihnen einfällt.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_ Schaltfläche im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unterhalb der Beispielausgabe ansehen.

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

Sobald man einige grundlegende Prinzipien und spezifische Eigenschaften kennt, sind Listen relativ einfach zu stylen. Im nächsten Artikel gehen wir zu Techniken für das Styling von Links über.

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Fundamentals", "Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling")}}
