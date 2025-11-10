---
title: Styling von Listen
slug: Learn_web_development/Core/Text_styling/Styling_lists
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Fundamentals", "Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling")}}

[Listen](/de/docs/Learn_web_development/Core/Structuring_content/Lists) verhalten sich größtenteils wie jeder andere Text, aber es gibt einige CSS-Eigenschaften, die speziell für Listen gelten und die Sie kennen sollten, sowie einige bewährte Praktiken, die es zu beachten gilt. Dieser Artikel erklärt alles.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        > und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Abstand von Listenelementen, zum Beispiel mit `margin` oder `line-height`.</li>
          <li>Verwendung von <code>list-style</code> Eigenschaften.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Ein einfaches Listenbeispiel

Zu Beginn wollen wir uns ein einfaches Listenbeispiel ansehen. Im ganzen Artikel betrachten wir ungeordnete, geordnete und Definitionslisten — alle haben ähnliche Styling-Funktionen sowie einige, die spezifisch für sie sind. Das ungestylte Beispiel ist auf [GitHub verfügbar](https://mdn.github.io/learning-area/css/styling-text/styling-lists/unstyled-list.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-text/styling-lists/unstyled-list.html) an.)

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

Wenn Sie jetzt zum Live-Beispiel gehen und die Listenelemente mit [Browser-Entwicklungstools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) untersuchen, werden Ihnen einige Standard-Stylings auffallen:

- Die {{htmlelement("ul")}} und {{htmlelement("ol")}} Elemente haben einen oberen und unteren {{cssxref("margin")}} von `16px` (`1em`) und eine {{cssxref("padding-left")}} von `40px` (`2.5em`). Wenn das Richtung Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) auf Rechts-nach-Links (`rtl`) für `ul` und `ol` Elemente gesetzt ist, wird in diesem Fall {{cssxref("padding-right")}} wirksam und der Standardwert beträgt `40px` (`2.5em`).
- Die Listenelemente ({{htmlelement("li")}}) haben keine festgelegten Standardabstände.
- Das {{htmlelement("dl")}} Element hat einen oberen und unteren {{cssxref("margin")}} von `16px` (`1em`), aber kein festgelegtes Padding.
- Die {{htmlelement("dd")}} Elemente haben eine {{cssxref("margin-left")}} von `40px` (`2.5em`).
- Die {{htmlelement("p")}} Elemente, die wir zur Referenz aufgenommen haben, haben einen oberen und unteren {{cssxref("margin")}} von `16px` (`1em`) — derselbe wie bei den verschiedenen Listentypen.

## Umgang mit Listenabständen

Beim Styling von Listen müssen Sie deren Stile anpassen, damit sie denselben vertikalen Abstand wie die umgebenden Elemente (wie Absätze und Bilder; manchmal als vertikaler Rhythmus bezeichnet) und denselben horizontalen Abstand wie zueinander beibehalten (Sie können das [fertige gestylte Beispiel](https://mdn.github.io/learning-area/css/styling-text/styling-lists/) auf GitHub sehen und [finden Sie auch den Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-text/styling-lists/index.html)).

Das für das Textstyling und die Abstände verwendete CSS ist wie folgt:

```css
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

- Die erste Regel setzt eine siteweite Schriftart und eine Basisschriftgröße von 10px. Diese werden von allem auf der Seite geerbt.
- Die Regeln 2 und 3 setzen relative Schriftgrößen für die Überschriften, verschiedene Listentypen (die Kinder der Listenelemente erben diese) und Absätze. Dies bedeutet, dass jeder Absatz und jede Liste dieselbe Schriftgröße und denselben oberen und unteren Abstand haben, was hilft, den vertikalen Rhythmus konsistent zu halten.
- Regel 4 setzt dieselbe {{cssxref("line-height")}} auf die Absätze und Listenelemente — somit haben die Absätze und jedes einzelne Listenelement denselben Abstand zwischen den Zeilen. Dies wird auch dazu beitragen, den vertikalen Rhythmus konsistent zu halten.
- Die Regeln 5 und 6 gelten für die Definitionsliste. Wir setzen dieselbe `line-height` auf die Definitionsterme und -beschreibungen wie bei den Absätzen und Listenelementen. Wiederum ist Konsistenz gut! Wir machen auch die Begriffe fett, sodass sie visuell leichter hervorstechen.

## Listen-spezifische Stile

Nachdem wir nun allgemeine Abstands-Techniken für Listen betrachtet haben, schauen wir uns einige spezifische Eigenschaften für Listen an. Es gibt drei Eigenschaften, die Sie am Anfang kennen sollten, die auf {{htmlelement("ul")}} oder {{htmlelement("ol")}} Elementen gesetzt werden können:

- {{cssxref("list-style-type")}}: Setzt den Typ der Aufzählungszeichen für die Liste, zum Beispiel Quadrat- oder Kreiszeichen für eine ungeordnete Liste oder Zahlen, Buchstaben oder römische Ziffern für eine geordnete Liste.
- {{cssxref("list-style-position")}}: Legt fest, ob die Aufzählungszeichen am Anfang jedes Elements innerhalb oder außerhalb der Listen erscheinen.
- {{cssxref("list-style-image")}}: Ermöglicht die Verwendung eines benutzerdefinierten Bildes für das Aufzählungszeichen anstelle eines einfachen Quadrats oder Kreises.

### Aufzählungszeichen-Stile

Wie oben erwähnt, erlaubt es die {{cssxref("list-style-type")}} Eigenschaft, festzulegen, welchen Typ von Aufzählungszeichen für die Punkte verwendet werden soll. In unserem Beispiel haben wir die geordnete Liste so eingestellt, dass sie mit römischen Ziffern in Großbuchstaben verwendet wird:

```css
ol {
  list-style-type: upper-roman;
}
```

Dies ergibt folgendes Aussehen:

![eine geordnete Liste mit den Aufzählungszeichen, die außerhalb des Listentextes erscheinen.](outer-bullets.png)

Viele weitere Optionen finden Sie in der {{cssxref("list-style-type")}} Referenzseite.

### Aufzählungszeichen-Position

Die {{cssxref("list-style-position")}} Eigenschaft legt fest, ob die Aufzählungszeichen innerhalb der Listenelemente erscheinen oder außerhalb vor dem Beginn jedes Elements. Der Standardwert ist `outside`, was dazu führt, dass die Aufzählungszeichen außerhalb der Listenelemente sitzen, wie oben gezeigt.

Wenn Sie den Wert auf `inside` setzen, sitzen die Aufzählungszeichen innerhalb der Zeilen:

```css
ol {
  list-style-type: upper-roman;
  list-style-position: inside;
}
```

![eine geordnete Liste mit den Aufzählungszeichen, die innerhalb des Listentextes erscheinen.](inner-bullets.png)

### Verwendung eines benutzerdefinierten Aufzählungsbildes

Die {{cssxref("list-style-image")}} Eigenschaft erlaubt es Ihnen, ein benutzerdefiniertes Bild für Ihr Aufzählungszeichen zu verwenden. Die Syntax ist ziemlich einfach:

```css
ul {
  list-style-image: url("star.svg");
}
```

Diese Eigenschaft ist jedoch etwas begrenzt in Bezug auf die Steuerung der Position, Größe usw. der Aufzählungszeichen. Sie sind besser dran, die {{cssxref("background")}} Familie von Eigenschaften zu verwenden, die Sie in unserem vorherigen [Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) Artikel gelernt haben.

In unserem fertigen Beispiel haben wir die ungeordnete Liste folgendermaßen gestylt (zusätzlich zu dem, was Sie oben bereits gesehen haben):

```css
ul {
  padding-left: 2rem;
  list-style-type: none;
}

ul li {
  padding-left: 2rem;
  background-image: url("star.svg");
  background-position: 0 0;
  background-size: 1.6rem 1.6rem;
  background-repeat: no-repeat;
}
```

Wir haben Folgendes gemacht:

- Die {{cssxref("padding-left")}} des {{htmlelement("ul")}} von den standardmäßigen `40px` auf `20px` reduziert und dann den gleichen Betrag auf die Listenelemente gesetzt. Dadurch sind die Listenelemente insgesamt immer noch mit den geordneten Listenelementen und den Definitionslisten-Beschreibungen ausgerichtet, aber die Listenelemente haben etwas Innenabstand für die Hintergrundbilder, damit sie darin sitzen können. Würden wir dies nicht tun, würden sich die Hintergrundbilder mit dem Listen-Text überlappen, was unordentlich aussehen würde.
- Die {{cssxref("list-style-type")}} auf `none` gesetzt, damit standardmäßig kein Aufzählungszeichen erscheint. Wir werden {{cssxref("background")}} Eigenschaften verwenden, um mit den Aufzählungszeichen umzugehen.
- Ein Aufzählungszeichen auf jedes ungeordnete Listenelement eingefügt. Die relevanten Eigenschaften sind wie folgt:
  - {{cssxref("background-image")}}: Dies referenziert den Pfad zur Bilddatei, die Sie als Aufzählungszeichen verwenden möchten.
  - {{cssxref("background-position")}}: Dies definiert, wo im Hintergrund des ausgewählten Elements das Bild erscheinen wird — in diesem Fall sagen wir `0 0`, was bedeutet, dass das Aufzählungszeichen ganz oben links in jedem Listenelement erscheinen wird.
  - {{cssxref("background-size")}}: Dies setzt die Größe des Hintergrundbildes. Wir möchten idealerweise, dass die Aufzählungszeichen dieselbe Größe wie die Listenelemente haben (oder sehr leicht kleiner oder größer). Wir verwenden eine Größe von `1.6rem` (`16px`), die sehr gut zu den `20px` Innenabstand passt, die wir vorgesehen haben, damit das Aufzählungszeichen hineinpasst — 16px plus 4px Abstand zwischen dem Aufzählungszeichen und dem Listentext funktioniert gut.
  - {{cssxref("background-repeat")}}: Standardmäßig wiederholen sich Hintergrundbilder, bis sie den verfügbaren Hintergrundraum füllen. Wir möchten in jedem Fall nur eine Kopie des Bildes eingefügt haben, daher setzen wir dies auf einen Wert von `no-repeat`.

Dies ergibt das folgende Ergebnis:

![eine ungeordnete Liste mit Aufzählungszeichen, die als kleine Sternbilder angezeigt werden](list_formatting.png)

### Kurzform `list-style`

Die oben genannten drei Eigenschaften können alle mit einer einzigen Kurzform-Eigenschaft, {{cssxref("list-style")}}, gesetzt werden. Zum Beispiel könnte das folgende CSS:

```css
ul {
  list-style-type: square;
  list-style-image: url("example.png");
  list-style-position: inside;
}
```

ersetzt werden durch:

```css
ul {
  list-style: square url("example.png") inside;
}
```

Die Werte können in beliebiger Reihenfolge aufgelistet werden, und Sie können einen, zwei oder alle drei verwenden (die Standardwerte, die für die nicht eingeschlossenen Eigenschaften verwendet werden, sind `disc`, `none` und `outside`). Wenn sowohl ein `type` als auch ein `image` angegeben ist, wird der Typ als Fallback verwendet, wenn das Bild aus irgendeinem Grund nicht geladen werden kann.

## Steuerung der Listennummerierung

Manchmal möchten Sie möglicherweise eine geordnete Liste anders zählen — z. B. ab einer anderen Zahl als 1 beginnen, rückwärts zählen oder in Schritten von mehr als 1 zählen. HTML und CSS haben einige Werkzeuge, um Ihnen hier zu helfen.

### start

Das [`start`](/de/docs/Web/HTML/Reference/Elements/ol#start) Attribut erlaubt es Ihnen, die Listen-Numerierung ab einer anderen Zahl als 1 zu starten. Das folgende Beispiel:

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

Das [`reversed`](/de/docs/Web/HTML/Reference/Elements/ol#reversed) Attribut wird die Listen-Numerierung herunter- anstatt hinaufzuzählen beginnen. Das folgende Beispiel:

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
> Wenn es mehr Listenelemente in einer umgekehrten Liste gibt als der Wert des `start` Attributs, geht die Zählung weiter bis null und dann in negative Werte.

### value

Das [`value`](/de/docs/Web/HTML/Reference/Elements/li#value) Attribut erlaubt es Ihnen, Ihre Listenelemente auf spezifische numerische Werte zu setzen. Das folgende Beispiel:

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
> Auch wenn Sie einen nicht-numerischen {{cssxref("list-style-type")}} verwenden, müssen Sie dennoch die entsprechenden numerischen Werte im `value` Attribut verwenden.

## Ein verschachteltes Listenbeispiel stylen

Es ist Zeit, eine weitere Aufgabe zu erledigen. Dieses Mal möchten wir, dass Sie das oben Gelernte anwenden und versuchen, eine verschachtelte Liste zu stylen.

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Stylen Sie die ungeordnete Liste mit quadratischen Aufzählungszeichen.
3. Geben Sie den ungeordneten Listenelementen und den geordneten Listenelementen eine `line-height` von `1.5` ihrer `font-size`.
4. Setzen Sie die geordnete Liste auf kleinere alphabetische Aufzählungszeichen.
5. Fühlen Sie sich frei, so viel wie Sie möchten, mit dem Listenbeispiel zu experimentieren, indem Sie Aufzählungszeichen-Typen, Abstände oder was auch immer Sie verwenden möchten, einbringen.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_ Schaltfläche im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unterhalb der Beispielausgabe sehen.

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

Ihr fertiges CSS sollte so aussehen:

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

Listen sind relativ einfach zu stylen, sobald Sie einige grundlegende Prinzipien und spezifische Eigenschaften kennen. Im nächsten Artikel gehen wir weiter zu Techniken für das Styling von Links.

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Fundamentals", "Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling")}}
