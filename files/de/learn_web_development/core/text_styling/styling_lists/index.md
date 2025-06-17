---
title: Styling von Listen
slug: Learn_web_development/Core/Text_styling/Styling_lists
l10n:
  sourceCommit: e47ecbb9beee1f7f6b22376686be75b15bb73638
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Fundamentals", "Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling")}}

[Listen](/de/docs/Learn_web_development/Core/Structuring_content/Lists) verhalten sich wie jeder andere Text, aber es gibt einige CSS-Eigenschaften, die speziell für Listen gelten, und einige bewährte Praktiken, die es zu beachten gilt. Dieser Artikel erklärt alles.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturieren von Inhalten mit HTML</a
        > und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Abstände von Listenelementen, zum Beispiel mit Margin oder Zeilenhöhe.</li>
          <li>Verwendung von <code>list-style</code>-Eigenschaften.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Ein einfaches Listenbeispiel

Beginnen wir mit einem einfachen Listenbeispiel. In diesem Artikel werden wir uns ungeordnete, geordnete und Beschreibungslisten ansehen – alle haben Styling-Features, die sich ähneln, sowie einige, die spezifisch für sie sind. Das ungestylte Beispiel ist [auf GitHub verfügbar](https://mdn.github.io/learning-area/css/styling-text/styling-lists/unstyled-list.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-text/styling-lists/unstyled-list.html) an).

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

Wenn Sie jetzt auf das Live-Beispiel zugreifen und die Listenelemente mit den [Entwicklerwerkzeugen des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) untersuchen, werden Ihnen einige Styling-Standards auffallen:

- Die {{htmlelement("ul")}}- und {{htmlelement("ol")}}-Elemente haben oben und unten einen {{cssxref("margin")}} von `16px` (`1em`) und einen {{cssxref("padding-left")}} von `40px` (`2.5em`). Wenn das Richtungsattribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) für `ul`- und `ol`-Elemente auf von rechts nach links (`rtl`) gesetzt ist, kommt in diesem Fall auch {{cssxref("padding-right")}} zum Einsatz und der Standardwert beträgt `40px` (`2.5em`).
- Die Listenelemente ({{htmlelement("li")}}-Elemente) haben keine voreingestellten Abstände.
- Das {{htmlelement("dl")}}-Element hat oben und unten einen {{cssxref("margin")}} von `16px` (`1em`), aber kein festgelegtes Padding.
- Die {{htmlelement("dd")}}-Elemente haben einen {{cssxref("margin-left")}} von `40px` (`2.5em`).
- Die {{htmlelement("p")}}-Elemente, die wir zur Referenz aufgenommen haben, haben oben und unten einen {{cssxref("margin")}} von `16px` (`1em`) – dasselbe wie die unterschiedlichen Listentypen.

## Umgang mit Listenabständen

Beim Styling von Listen müssen Sie deren Stile so anpassen, dass sie den gleichen vertikalen Abstand wie die umgebenden Elemente (wie Absätze und Bilder; manchmal als vertikaler Rhythmus bezeichnet) und den gleichen horizontalen Abstand wie zueinander haben (Sie können das [fertig gestylte Beispiel](https://mdn.github.io/learning-area/css/styling-text/styling-lists/) auf GitHub sehen und auch [den Quellcode finden](https://github.com/mdn/learning-area/blob/main/css/styling-text/styling-lists/index.html)).

Das CSS, das für das Textstyling und die Abstände verwendet wird, sieht wie folgt aus:

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

- Die erste Regel legt eine Schriftart für die gesamte Website und eine Basis-Schriftgröße von 10px fest. Diese werden von allem auf der Seite geerbt.
- Regeln 2 und 3 legen relative Schriftgrößen für die Überschriften, verschiedene Listentypen (die Kinder der Listenelemente erben diese) und Absätze fest. Dies bedeutet, dass jeder Absatz und jede Liste die gleiche Schriftgröße und den gleichen oberen und unteren Abstand hat, was dazu beiträgt, den vertikalen Rhythmus konsistent zu halten.
- Regel 4 setzt dieselbe {{cssxref("line-height")}} für die Absätze und Listenelemente – so haben die Absätze und jedes einzelne Listenelement den gleichen Abstand zwischen den Zeilen. Dies trägt ebenfalls dazu bei, den vertikalen Rhythmus konsistent zu halten.
- Regeln 5 und 6 gelten für die Beschreibungslisten. Wir setzen dieselbe `line-height` auf die Begriffe und Beschreibungen der Beschreibungslisten wie bei den Absätzen und Listenelementen. Konsistenz ist wieder einmal wichtig! Wir machen die Beschreibungsbegriffe außerdem fett, damit sie optisch leichter hervorstechen.

## Listen-spezifische Stile

Nachdem wir uns nun allgemeine Abstandstechniken für Listen angesehen haben, wollen wir einige listenspezifische Eigenschaften erkunden. Es gibt drei Eigenschaften, die Sie zunächst kennen sollten, die auf {{htmlelement("ul")}}- oder {{htmlelement("ol")}}-Elementen gesetzt werden können:

- {{cssxref("list-style-type")}}: Setzt die Art der Aufzählungszeichen für die Liste fest, zum Beispiel quadratische oder kreisförmige Aufzählungszeichen für eine ungeordnete Liste oder Zahlen, Buchstaben oder römische Ziffern für eine geordnete Liste.
- {{cssxref("list-style-position")}}: Legt fest, ob die Aufzählungszeichen am Anfang jedes Elements innerhalb oder außerhalb der Listen erscheinen.
- {{cssxref("list-style-image")}}: Ermöglicht die Verwendung eines benutzerdefinierten Bildes für das Aufzählungszeichen, statt eines einfachen Quadrats oder Kreises.

### Aufzählungszeichen-Stile

Wie oben erwähnt, ermöglicht die {{cssxref("list-style-type")}}-Eigenschaft, den Typ des Aufzählungszeichens für die Punkte festzulegen. In unserem Beispiel haben wir die geordnete Liste so eingestellt, dass sie Großbuchstaben in römischen Zahlen verwendet mit:

```css
ol {
  list-style-type: upper-roman;
}
```

Dies ergibt folgendes Aussehen:

![Eine geordnete Liste mit den Aufzählungspunkten, die außerhalb des Listenelementtextes erscheinen.](outer-bullets.png)

Sie können viele weitere Optionen finden, indem Sie sich die Referenzseite {{cssxref("list-style-type")}} ansehen.

### Aufzählungszeichen-Position

Die {{cssxref("list-style-position")}}-Eigenschaft legt fest, ob die Aufzählungszeichen innerhalb der Listenelemente oder davor erscheinen. Der Standardwert ist `outside`, was dazu führt, dass die Aufzählungszeichen außerhalb der Listenelemente sitzen, wie oben zu sehen.

Wenn Sie den Wert auf `inside` setzen, sitzen die Aufzählungszeichen innerhalb der Zeilen:

```css
ol {
  list-style-type: upper-roman;
  list-style-position: inside;
}
```

![Eine geordnete Liste mit den Aufzählungspunkten, die innerhalb des Listenelementtextes erscheinen.](inner-bullets.png)

### Verwenden eines benutzerdefinierten Aufzählungsbildes

Die {{cssxref("list-style-image")}}-Eigenschaft ermöglicht es Ihnen, ein benutzerdefiniertes Bild für Ihr Aufzählungszeichen zu verwenden. Die Syntax ist ziemlich einfach:

```css
ul {
  list-style-image: url(star.svg);
}
```

Diese Eigenschaft ist jedoch in Bezug auf die Steuerung der Position, Größe usw. der Aufzählungszeichen etwas eingeschränkt. Sie sind besser dran, die {{cssxref("background")}}-Familie von Eigenschaften zu verwenden, die Sie in unserer vorherigen [Hintergründe und Ränder](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) Lektion gelernt haben.

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

Hier haben wir folgendes getan:

- Das {{cssxref("padding-left")}} des {{htmlelement("ul")}} von den standardmäßigen `40px` auf `20px` reduziert und dann dieselbe Menge auf die Listenelemente gesetzt. Dies soll sicherstellen, dass die Listenelemente insgesamt immer noch mit den geordneten Listenelementen und den Beschreibungslistenbeschreibungen ausgerichtet sind, die Listenelemente jedoch ein wenig Polster für die Hintergrundbilder haben, um darin zu sitzen. Wenn wir dies nicht tun würden, würden die Hintergrundbilder mit dem Listenelement-Text überlappen, was unordentlich aussehen würde.
- Die {{cssxref("list-style-type")}} auf `none` gesetzt, damit standardmäßig keine Aufzählungszeichen erscheinen. Wir werden {{cssxref("background")}}-Eigenschaften verwenden, um die Aufzählungszeichen stattdessen zu handhaben.
- Ein Aufzählungszeichen auf jedes Element der ungeordneten Liste eingefügt. Die relevanten Eigenschaften sind wie folgt:

  - {{cssxref("background-image")}}: Dies verweist auf den Pfad zur Bilddatei, die Sie als Aufzählungszeichen verwenden möchten.
  - {{cssxref("background-position")}}: Dies definiert, wo im Hintergrund des ausgewählten Elements das Bild angezeigt wird – in diesem Fall sagen wir `0 0`, was bedeutet, dass das Aufzählungszeichen ganz oben links in jedem Listenelement erscheint.
  - {{cssxref("background-size")}}: Dies legt die Größe des Hintergrundbildes fest. Idealerweise sollten die Aufzählungszeichen die gleiche Größe wie die Listenelemente (oder sehr leicht kleiner oder größer) haben. Wir verwenden eine Größe von `1.6rem` (`16px`), die sehr gut mit dem `20px`-Polster harmoniert, das wir vorgesehen haben, damit das Aufzählungszeichen darin Platz hat – 16px plus 4px Platz zwischen dem Aufzählungszeichen und dem Listenelement-Text funktionieren gut.
  - {{cssxref("background-repeat")}}: Standardmäßig wiederholen sich Hintergrundbilder, bis sie den verfügbaren Hintergrundraum ausfüllen. Wir möchten in jedem Fall nur eine Kopie des Bildes einfügen, daher setzen wir dies auf `no-repeat`.

Dies ergibt folgendes Ergebnis:

![Eine ungeordnete Liste mit den Aufzählungspunkten als kleine Sternbilder](list_formatting.png)

### list-style Shorthand

Die oben erwähnten drei Eigenschaften können alle mit einer einzigen Kurzschrift-Eigenschaft, {{cssxref("list-style")}}, festgelegt werden. Zum Beispiel könnte das folgende CSS:

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

Die Werte können in beliebiger Reihenfolge aufgeführt werden, und Sie können eine, zwei oder alle drei verwenden (die Standardwerte für die nicht enthaltenen Eigenschaften sind `disc`, `none` und `outside`). Wenn sowohl ein `type` als auch ein `image` angegeben sind, wird der Typ als Fallback verwendet, falls das Bild aus irgendeinem Grund nicht geladen werden kann.

## Kontrolle der Listenzählung

Manchmal möchten Sie möglicherweise anders in einer geordneten Liste zählen – z. B. von einer anderen Zahl als 1 beginnen, rückwärts zählen oder in Schritten von mehr als 1 zählen. HTML und CSS haben einige Werkzeuge, die Ihnen hier helfen können.

### start

Das [`start`](/de/docs/Web/HTML/Reference/Elements/ol#start) Attribut ermöglicht es Ihnen, die Listenzählung von einer anderen Zahl als 1 zu starten. Das folgende Beispiel:

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

Gibt diese Ausgabe:

{{ EmbedLiveSample('start', '100%', 150) }}

### reversed

Das [`reversed`](/de/docs/Web/HTML/Reference/Elements/ol#reversed) Attribut wird die Listenzählung rückwärts statt vorwärts starten. Das folgende Beispiel:

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

Gibt diese Ausgabe:

{{ EmbedLiveSample('reversed', '100%', 150) }}

> [!NOTE]
> Wenn es mehr Listenelemente in einer umgekehrten Liste gibt als den Wert des `start`-Attributs, wird die Zählung bis null fortgesetzt und dann in negative Werte.

### value

Das [`value`](/de/docs/Web/HTML/Reference/Elements/li#value) Attribut ermöglicht es Ihnen, Ihre Listenelemente auf bestimmte numerische Werte zu setzen. Das folgende Beispiel:

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

Gibt diese Ausgabe:

{{ EmbedLiveSample('value', '100%', 150) }}

> [!NOTE]
> Selbst wenn Sie einen nicht numerischen {{cssxref("list-style-type")}} verwenden, müssen Sie immer noch die entsprechenden numerischen Werte im `value`-Attribut verwenden.

## Styling einer verschachtelten Liste

Es ist Zeit für Sie, eine weitere Aufgabe zu erledigen. Dieses Mal möchten wir, dass Sie das bisher Gelernte anwenden und das Styling einer verschachtelten Liste ausprobieren.

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Stylen Sie die ungeordnete Liste mit quadratischen Aufzählungszeichen.
3. Geben Sie den ungeordneten Listenelementen und den geordneten Listenelementen eine `line-height` von `1.5` ihrer `font-size`.
4. Setzen Sie die geordnete Liste so, dass sie kleinere alphabetische Aufzählungszeichen hat.
5. Fühlen Sie sich frei, mit dem Listenbeispiel so viel zu spielen, wie Sie möchten, und experimentieren Sie mit Aufzählungstypen, Abständen oder was auch immer Sie ausprobieren möchten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich stecken bleiben, können Sie die Lösung unterhalb der Beispielausgabe ansehen.

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

Ihr fertiges CSS sollte in etwa so aussehen:

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

Listen sind relativ einfach zu stylen, sobald Sie einige zugehörige Grundprinzipien und spezifische Eigenschaften kennen. Im nächsten Artikel werden wir zu Techniken zum Link-Styling übergehen.

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Fundamentals", "Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling")}}
