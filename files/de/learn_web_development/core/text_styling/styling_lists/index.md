---
title: Styling von Listen
slug: Learn_web_development/Core/Text_styling/Styling_lists
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Fundamentals", "Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling")}}

[Listen](/de/docs/Learn_web_development/Core/Structuring_content/Lists) verhalten sich größtenteils wie jeder andere Text, es gibt jedoch einige CSS-Eigenschaften, die speziell für Listen relevant sind und die Sie kennen sollten, sowie einige bewährte Praktiken, die es zu berücksichtigen gilt. Dieser Artikel erklärt alles.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturieren von Inhalten mit HTML</a
        > und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Styling-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Abstand von Listenelementen, beispielsweise mit Margin oder Zeilenhöhe.</li>
          <li>Verwendung von <code>list-style</code>-Eigenschaften.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Ein einfaches Listenbeispiel

Beginnen wir mit einem einfachen Listenbeispiel. Im gesamten Artikel werden wir uns ungeordnete, geordnete und Beschreibungslisten ansehen — alle haben ähnliche Styling-Funktionen sowie einige, die speziell auf sie zutreffen. Das ungestaltete Beispiel ist [auf GitHub verfügbar](https://mdn.github.io/learning-area/css/styling-text/styling-lists/unstyled-list.html) (schauen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-text/styling-lists/unstyled-list.html) an).

Das HTML für unser Listenbeispiel sieht so aus:

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

Wenn Sie jetzt zum Live-Beispiel gehen und die Listenelemente mit den [Entwicklerwerkzeugen Ihres Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) untersuchen, werden Sie ein paar Styling-Standards bemerken:

- Die {{htmlelement("ul")}}- und {{htmlelement("ol")}}-Elemente haben einen oberen und unteren {{cssxref("margin")}} von `16px` (`1em`) und einen {{cssxref("padding-left")}} von `40px` (`2.5em`). Wenn das Richtungsattribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) auf Rechts-nach-Links (`rtl`) für `ul` und `ol`-Elemente gesetzt ist, wird in diesem Fall {{cssxref("padding-right")}} wirksam und der Standardwert beträgt `40px` (`2.5em`).
- Die Listenelemente ({{htmlelement("li")}}-Elemente) haben keine festgelegten Standards für den Abstand.
- Das {{htmlelement("dl")}}-Element hat einen oberen und unteren {{cssxref("margin")}} von `16px` (`1em`), jedoch kein festgelegtes Padding.
- Die {{htmlelement("dd")}}-Elemente haben {{cssxref("margin-left")}} von `40px` (`2.5em`).
- Die {{htmlelement("p")}}-Elemente, die wir als Referenz eingefügt haben, haben einen oberen und unteren {{cssxref("margin")}} von `16px` (`1em`) — das gleiche wie die verschiedenen Listentypen.

## Umgang mit Listenabständen

Beim Styling von Listen müssen Sie deren Styles so anpassen, dass sie den gleichen vertikalen Abstand wie die sie umgebenden Elemente (wie Absätze und Bilder; manchmal als vertikaler Rhythmus bezeichnet) und den gleichen horizontalen Abstand wie einander beibehalten (Sie können das [fertig gestaltete Beispiel](https://mdn.github.io/learning-area/css/styling-text/styling-lists/) auf GitHub sehen und [den Quellcode finden](https://github.com/mdn/learning-area/blob/main/css/styling-text/styling-lists/index.html) ebenfalls).

Das für das Textstyling und die Abstände verwendete CSS ist wie folgt:

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

- Die erste Regel setzt eine seitenweite Schriftart und eine Basisschriftgröße von 10px. Diese werden von allem auf der Seite vererbt.
- Die Regeln 2 und 3 setzen relative Schriftgrößen für die Überschriften, verschiedene Listentypen (die Kinder der Listenelemente erben diese) und Absätze. Das bedeutet, dass jeder Absatz und jede Liste die gleiche Schriftgröße sowie den gleichen oberen und unteren Abstand hat, was dazu beiträgt, den vertikalen Rhythmus konsistent zu halten.
- Regel 4 setzt die gleiche {{cssxref("line-height")}} für die Absätze und Listenelemente — sodass die Absätze und jedes einzelne Listenelement den gleichen Abstand zwischen den Zeilen haben. Dies trägt ebenfalls dazu bei, den vertikalen Rhythmus konsistent zu halten.
- Die Regeln 5 und 6 gelten für die Beschreibungslisten. Wir setzen die gleiche `line-height` auf die Beschreibungslistenterms und -beschreibungen, wie wir es bei den Absätzen und Listenelementen getan haben. Wiederum ist Konsistenz gut! Wir machen auch die Beschreibungsterms fett gedruckt, damit sie visuell leichter hervorstechen.

## Listen-spezifische Styles

Nachdem wir uns allgemeine Abstands-Techniken für Listen angesehen haben, werfen wir einen Blick auf einige listen-spezifische Eigenschaften. Es gibt drei Eigenschaften, die Sie kennen sollten, wenn Sie beginnen, die auf {{htmlelement("ul")}}- oder {{htmlelement("ol")}}-Elemente gesetzt werden können:

- {{cssxref("list-style-type")}}: Legt den Typ der Aufzählungszeichen fest, zum Beispiel quadratische oder runde Punkte für eine ungeordnete Liste oder Ziffern, Buchstaben oder römische Ziffern für eine geordnete Liste.
- {{cssxref("list-style-position")}}: Bestimmt, ob die Aufzählungszeichen am Anfang jedes Elements innerhalb oder außerhalb der Listen erscheinen.
- {{cssxref("list-style-image")}}: Ermöglicht die Verwendung eines benutzerdefinierten Bildes für das Aufzählungszeichen anstelle eines einfachen Quadrats oder Kreises.

### Aufzählungsstile

Wie bereits erwähnt, ermöglicht die {{cssxref("list-style-type")}}-Eigenschaft, den Typ der Aufzählungspunkte festzulegen. In unserem Beispiel haben wir die geordnete Liste so eingestellt, dass sie römische Ziffern in Großbuchstaben verwendet mit:

```css
ol {
  list-style-type: upper-roman;
}
```

Das ergibt folgendes Aussehen:

![eine geordnete Liste, bei der die Aufzählungspunkte außerhalb des Textelements erscheinen.](outer-bullets.png)

Weitere Optionen finden Sie auf der Referenzseite zur {{cssxref("list-style-type")}}.

### Position der Aufzählungspunkte

Die {{cssxref("list-style-position")}}-Eigenschaft legt fest, ob die Aufzählungspunkte innerhalb oder außerhalb der Listenelemente erscheinen. Der Standardwert ist `outside`, wodurch die Aufzählungspunkte außerhalb der Listenelemente sitzen, wie oben zu sehen.

Wenn Sie den Wert auf `inside` setzen, sitzen die Aufzählungspunkte innerhalb der Zeilen:

```css
ol {
  list-style-type: upper-roman;
  list-style-position: inside;
}
```

![eine geordnete Liste, bei der die Aufzählungspunkte innerhalb des Textelements erscheinen.](inner-bullets.png)

### Verwendung eines benutzerdefinierten Bildes für Aufzählungszeichen

Die {{cssxref("list-style-image")}}-Eigenschaft ermöglicht es Ihnen, ein benutzerdefiniertes Bild für Ihre Aufzählungspunkte zu verwenden. Die Syntax ist ziemlich einfach:

```css
ul {
  list-style-image: url("star.svg");
}
```

Diese Eigenschaft ist jedoch etwas begrenzt, was die Kontrolle über die Position, Größe usw. der Aufzählungszeichen betrifft. Es ist besser, die {{cssxref("background")}}-Familie von Eigenschaften zu verwenden, die Sie in unserer vorherigen [Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)-Lektion gelernt haben.

In unserem fertigen Beispiel haben wir die ungeordnete Liste wie folgt gestaltet (zusätzlich zu dem, was Sie bereits gesehen haben):

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

Hier haben wir Folgendes getan:

- Das {{cssxref("padding-left")}} des {{htmlelement("ul")}} auf `20px` statt der Standard-`40px` gesetzt und dann die gleiche Menge auf die Listenelemente angewandt. Dies ist, damit die Listenelemente weiterhin mit den geordneten und Beschreibungslistenelementen ausgerichtet sind, die Listenelemente aber ein bisschen Padding haben, damit die Hintergrundbilder darin sitzen können. Wenn wir das nicht tun würden, würden sich die Hintergrundbilder mit dem Text der Listenelemente überschneiden, was unordentlich aussehen würde.
- Die {{cssxref("list-style-type")}} auf `none` gesetzt, damit standardmäßig kein Aufzählungszeichen erscheint. Wir verwenden stattdessen {{cssxref("background")}}-Eigenschaften, um die Aufzählungszeichen zu handhaben.
- Ein Aufzählungszeichen auf jedes ungeordnete Listenelement eingefügt. Die relevanten Eigenschaften sind wie folgt:
  - {{cssxref("background-image")}}: Bezieht sich auf den Pfad zur Bilddatei, die Sie als Aufzählungspunkt verwenden möchten.
  - {{cssxref("background-position")}}: Definiert, wo im Hintergrund des ausgewählten Elements das Bild erscheinen wird — in diesem Fall geben wir `0 0` an, was bedeutet, dass das Aufzählungszeichen in der oberen linken Ecke jedes Listenelements erscheint.
  - {{cssxref("background-size")}}: Legt die Größe des Hintergrundbildes fest. Wir möchten, dass die Aufzählungszeichen idealerweise die gleiche Größe wie die Listenelemente (oder sehr leicht kleiner oder größer) haben. Wir verwenden eine Größe von `1.6rem` (`16px`), was sehr gut mit dem `20px`-Padding zusammenpasst, das wir vorgesehen haben, damit das Aufzählungszeichen darin sitzen kann — 16px plus 4px Abstand zwischen dem Aufzählungszeichen und dem Text des Listenelements funktioniert gut.
  - {{cssxref("background-repeat")}}: Standardmäßig wiederholen sich Hintergrundbilder, bis sie den verfügbaren Hintergrundraum füllen. Wir möchten in jedem Fall nur eine Kopie des Bildes einfügen, daher setzen wir diesen Wert auf `no-repeat`.

Das ergibt folgendes Ergebnis:

![eine ungeordnete Liste, bei der die Aufzählungspunkte als kleine Sternbilder gesetzt sind.](list_formatting.png)

### list-style-Kurzschrift

Die oben genannten drei Eigenschaften können alle mit einer einzigen Kurzschreibweise, {{cssxref("list-style")}}, gesetzt werden. Zum Beispiel kann das folgende CSS:

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

Die Werte können in beliebiger Reihenfolge aufgelistet werden, und Sie können einen, zwei oder alle drei verwenden (die Standardwerte, die für die nicht eingeschlossenen Eigenschaften verwendet werden, sind `disc`, `none` und `outside`). Wenn sowohl ein `type` als auch ein `image` angegeben sind, wird der Typ als Fallback verwendet, falls das Bild aus irgendeinem Grund nicht geladen werden kann.

## Steuerung des Zählens in Listen

Manchmal möchten Sie vielleicht anders in einer geordneten Liste zählen — z. B. nicht bei 1 beginnen, rückwärts zählen oder in Schritten über 1 hinaus zählen. HTML und CSS haben einige Werkzeuge, die Ihnen dabei helfen können.

### start

Das [`start`](/de/docs/Web/HTML/Reference/Elements/ol#start)-Attribut ermöglicht es Ihnen, die Zählung der Liste von einer anderen Zahl als 1 zu beginnen. Das folgende Beispiel:

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

gibt Ihnen dieses Ergebnis:

{{ EmbedLiveSample('start', '100%', 150) }}

### reversed

Das [`reversed`](/de/docs/Web/HTML/Reference/Elements/ol#reversed)-Attribut lässt die Liste abwärts statt aufwärts zählen. Das folgende Beispiel:

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

gibt Ihnen dieses Ergebnis:

{{ EmbedLiveSample('reversed', '100%', 150) }}

> [!NOTE]
> Wenn es in einer umgekehrten Liste mehr Listenelemente gibt als der Wert des `start`-Attributs, wird die Zählung weiter bis null und dann in negative Werte gehen.

### value

Das [`value`](/de/docs/Web/HTML/Reference/Elements/li#value)-Attribut ermöglicht es Ihnen, Ihre Listenelemente auf spezifische numerische Werte zu setzen. Das folgende Beispiel:

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

gibt Ihnen dieses Ergebnis:

{{ EmbedLiveSample('value', '100%', 150) }}

> [!NOTE]
> Selbst wenn Sie einen nichtnumerischen {{cssxref("list-style-type")}} verwenden, müssen Sie dennoch die entsprechenden numerischen Werte im `value`-Attribut verwenden.

## Styling einer verschachtelten Liste

Es ist Zeit, eine weitere Aufgabe zu erledigen. Dieses Mal möchten wir, dass Sie auf Grundlage dessen, was Sie oben gelernt haben, eine verschachtelte Liste gestalten.

1. Klicken Sie auf **"Play"** im folgenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Gestalten Sie die ungeordnete Liste mit quadratischen Aufzählungszeichen.
3. Geben Sie den ungeordneten Listenelementen und den geordneten Listenelementen eine `line-height` von `1.5` ihrer `font-size`.
4. Setzen Sie die geordnete Liste auf kleine alphabetische Aufzählungszeichen.
5. Fühlen Sie sich frei, mit dem Listenbeispiel so viel zu experimentieren, wie Sie möchten, und probieren Sie andere Aufzählungstypen, Abstände oder was Ihnen sonst noch einfällt.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Taste im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie sich die Lösung unterhalb des Beispielausgangs ansehen.

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

Listen sind relativ einfach zu gestalten, sobald Sie einige grundlegende Prinzipien und spezifische Eigenschaften kennen. Im nächsten Artikel werden wir uns mit Techniken für das Styling von Links beschäftigen.

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Fundamentals", "Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling")}}
