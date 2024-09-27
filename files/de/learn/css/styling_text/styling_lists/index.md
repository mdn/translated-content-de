---
title: Listen stylen
slug: Learn/CSS/Styling_text/Styling_lists
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_text/Fundamentals", "Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text")}}

[Listen](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#lists) verhalten sich größtenteils wie jeder andere Text, aber es gibt einige CSS-Eigenschaften, die speziell für Listen gelten und die Sie kennen sollten, sowie einige bewährte Praktiken, die Sie beachten sollten. Dieser Artikel erklärt alles.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), CSS-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>),
        <a href="/de/docs/Learn/CSS/Styling_text/Fundamentals"
          >Grundlagen zu CSS-Texten und Schriften</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Mit den bewährten Praktiken und Eigenschaften zum Styling von Listen
        vertraut werden.
      </td>
    </tr>
  </tbody>
</table>

## Ein einfaches Listenbeispiel

Beginnen wir mit einem einfachen Listenbeispiel. Im Laufe dieses Artikels werden wir uns ungeordnete, geordnete und Definitionslisten ansehen — alle haben Styling-Eigenschaften, die ähnlich sind, aber auch einige, die spezifisch für sie sind. Das ungestylte Beispiel ist [auf GitHub verfügbar](https://mdn.github.io/learning-area/css/styling-text/styling-lists/unstyled-list.html) (sehen Sie sich auch den [Quellcode an](https://github.com/mdn/learning-area/blob/main/css/styling-text/styling-lists/unstyled-list.html)).

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

Wenn Sie nun zum Live-Beispiel gehen und die Listenelemente mit [Browser-Entwicklungstools](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) untersuchen, werden Sie einige Styling-Vorgabewerte bemerken:

- Die {{htmlelement("ul")}} und {{htmlelement("ol")}} Elemente haben einen oberen und unteren {{cssxref("margin")}} von `16px` (`1em`) und eine {{cssxref("padding-left")}} von `40px` (`2.5em`). Wenn das Attribut für die Richtung [`dir`](/de/docs/Web/HTML/Global_attributes/dir) für `ul` und `ol` Elemente auf Rechts-nach-Links (`rtl`) gesetzt ist, kommt in diesem Fall {{cssxref("padding-right")}} zum Einsatz und der Standardwert ist `40px` (`2.5em`).
- Die Listenelemente ({{htmlelement("li")}} Elemente) haben keine voreingestellten Abstände.
- Das {{htmlelement("dl")}} Element hat einen oberen und unteren {{cssxref("margin")}} von `16px` (`1em`), aber kein festgelegtes Padding.
- Die {{htmlelement("dd")}} Elemente haben {{cssxref("margin-left")}} von `40px` (`2.5em`).
- Die {{htmlelement("p")}} Elemente, die wir zur Referenz hinzugefügt haben, haben einen oberen und unteren {{cssxref("margin")}} von `16px` (`1em`) — das gleiche wie die verschiedenen Listentypen.

## Umgang mit Listenabständen

Beim Stylen von Listen müssen Sie deren Stile anpassen, sodass sie den gleichen vertikalen Abstand wie ihre umgebenden Elemente (wie Absätze und Bilder; manchmal vertikaler Rhythmus genannt) und den gleichen horizontalen Abstand zueinander beibehalten. Sie können das [fertig gestylte Beispiel](https://mdn.github.io/learning-area/css/styling-text/styling-lists/) auf GitHub sehen und auch [den Quellcode finden](https://github.com/mdn/learning-area/blob/main/css/styling-text/styling-lists/index.html).

Der verwendete CSS zur Textformatierung und Abstandsregelung sieht wie folgt aus:

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

- Die erste Regel setzt eine siteweite Schriftart und eine Basis-Schriftgröße von 10px. Diese werden von allem auf der Seite geerbt.
- Regeln 2 und 3 setzen relative Schriftgrößen für die Überschriften, verschiedene Listentypen (die Kinder der Listenelemente erben diese) und Absätze. Das bedeutet, dass jeder Absatz und jede Liste die gleiche Schriftgröße und den gleichen oberen und unteren Abstand haben, was hilft, den vertikalen Rhythmus konsistent zu halten.
- Regel 4 setzt die gleiche {{cssxref("line-height")}} auf die Absätze und Listenelemente — sodass die Absätze und jedes einzelne Listenelement denselben Zeilenabstand haben. Dies hilft auch, den vertikalen Rhythmus konsistent zu halten.
- Regeln 5 und 6 gelten für die Definitionsliste. Wir setzen die gleiche `line-height` auf die Begriffe und Beschreibungen der Definitionsliste, wie wir es mit den Absätzen und Listenelementen getan haben. Wieder ist Konsistenz wichtig! Wir sorgen auch dafür, dass die Begriffe der Beschreibungsliste fett gedruckt sind, sodass sie visuell leichter hervorstechen.

## Listen-spezifische Stile

Nachdem wir uns allgemeine Abstands-Techniken für Listen angesehen haben, lassen Sie uns einige Listen-spezifische Eigenschaften erkunden. Es gibt drei Eigenschaften, die Sie zunächst kennen sollten, die auf {{htmlelement("ul")}} oder {{htmlelement("ol")}} Elementen gesetzt werden können:

- {{cssxref("list-style-type")}}: Setzt den Typ der Aufzählungspunkte, beispielsweise quadratische oder kreisförmige Punkte für eine ungeordnete Liste oder Zahlen, Buchstaben oder römische Ziffern für eine geordnete Liste.
- {{cssxref("list-style-position")}}: Setzt, ob die Aufzählungszeichen zu Beginn jedes Elements innerhalb oder außerhalb der Liste erscheinen.
- {{cssxref("list-style-image")}}: Ermöglicht es, ein benutzerdefiniertes Bild für den Aufzählungspunkt zu verwenden, anstelle eines einfachen Quadrats oder Kreises.

### Aufzählungsstile

Wie oben erwähnt, erlaubt Ihnen die Eigenschaft {{cssxref("list-style-type")}} festzulegen, welchen Typ von Aufzählungspunkt Sie für die Punkte verwenden möchten. In unserem Beispiel haben wir die geordnete Liste so eingestellt, dass sie Großbuchstaben in römischen Ziffern verwendet mit:

```css
ol {
  list-style-type: upper-roman;
}
```

Dies ergibt folgenden Look:

![eine geordnete Liste mit den Aufzählungspunkten, die außerhalb des Listen-Textes erscheinen.](outer-bullets.png)

Sie können viele weitere Optionen finden, indem Sie sich die Referenzseite für {{cssxref("list-style-type")}} ansehen.

### Aufzählungsposition

Die Eigenschaft {{cssxref("list-style-position")}} setzt, ob die Aufzählungspunkte innerhalb der Listenelemente oder außerhalb von ihnen vor dem Beginn jedes Elements erscheinen. Der Standardwert ist `outside`, wodurch die Punkte außerhalb der Listenelemente sitzen, wie oben gesehen.

Wenn Sie den Wert `inside` setzen, sitzen die Punkte innerhalb der Zeilen:

```css
ol {
  list-style-type: upper-roman;
  list-style-position: inside;
}
```

![eine geordnete Liste mit den Aufzählungspunkten, die innerhalb des Listen-Textes erscheinen.](inner-bullets.png)

### Ein benutzerdefiniertes Aufzählungsbild verwenden

Die Eigenschaft {{cssxref("list-style-image")}} erlaubt es Ihnen, ein benutzerdefiniertes Bild für Ihre Aufzählung zu verwenden. Die Syntax ist ziemlich einfach:

```css
ul {
  list-style-image: url(star.svg);
}
```

Allerdings ist diese Eigenschaft etwas limitiert in Bezug auf die Kontrolle der Position, Größe usw. der Aufzählungszeichen. Es ist besser, die {{cssxref("background")}} Familie von Eigenschaften zu verwenden, die Sie im [Hintergründe und Rahmen](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders) Artikel gelernt haben. Hier ist vorerst ein Vorgeschmack!

In unserem fertigen Beispiel haben wir die ungeordnete Liste wie folgt gestylt (zusätzlich zu dem, was Sie bereits oben gesehen haben):

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

Hier haben wir Folgendes getan:

- Das {{cssxref("padding-left")}} der {{htmlelement("ul")}} von den Standard `40px` auf `20px` reduziert und den gleichen Wert bei den Listenelementen gesetzt. Dadurch stehen alle Listenelemente noch im Einklang mit den geordneten Listenelementen und den Beschreibungsliste-Beschreibungen, aber die Listenelemente haben einige Abstände, damit die Hintergrundbilder darin sitzen können. Würden wir dies nicht tun, würden sich die Hintergrundbilder mit dem Text der Listenelemente überschneiden, was unordentlich aussehen würde.
- Den {{cssxref("list-style-type")}} auf `none` gesetzt, sodass kein Aufzählungszeichen standardmäßig erscheint. Wir werden {{cssxref("background")}} Eigenschaften nutzen, um die Aufzählungszeichen zu handhaben.
- Eine Aufzählung in jedes ungeordnete Listenelement eingefügt. Die relevanten Eigenschaften sind wie folgt:

  - {{cssxref("background-image")}}: Dies verweist auf den Pfad zur Bilddatei, die Sie als Aufzählungszeichen verwenden möchten.
  - {{cssxref("background-position")}}: Dies definiert, wo im Hintergrund des ausgewählten Elements das Bild erscheinen wird — in diesem Fall sagen wir `0 0`, das bedeutet, dass der Aufzählungspunkt in der oberen linken Ecke jedes Listenelements erscheint.
  - {{cssxref("background-size")}}: Dies setzt die Größe des Hintergrundbildes. Idealerweise möchten wir, dass die Aufzählungspunkte die gleiche Größe wie die Listenelemente haben (oder etwas kleiner oder größer). Wir verwenden eine Größe von `1.6rem` (`16px`), was sehr gut mit dem `20px` Padding harmoniert, das wir für die Aufzählungspunkte vorgesehen haben — 16px plus 4px Abstand zwischen dem Aufzählungspunkt und dem Listenelement-Text funktioniert gut.
  - {{cssxref("background-repeat")}}: Standardmäßig wiederholen sich Hintergrundbilder, bis sie den verfügbaren Hintergrundraum füllen. Wir möchten nur eine Kopie des Bildes in jedem Fall eingefügt haben, also setzen wir dies auf einen Wert von `no-repeat`.

Dies ergibt folgendes Ergebnis:

![eine ungeordnete Liste mit Aufzählungspunkten in Form kleiner Sternbilder](list_formatting.png)

### list-style Kurzform

Die oben genannten drei Eigenschaften können alle mit einer einzigen Kurzeigenschaft, {{cssxref("list-style")}}, eingestellt werden. Zum Beispiel könnte das folgende CSS:

```css
ul {
  list-style-type: square;
  list-style-image: url(example.png);
  list-style-position: inside;
}
```

Durch dieses ersetzt werden:

```css
ul {
  list-style: square url(example.png) inside;
}
```

Die Werte können in beliebiger Reihenfolge aufgelistet werden, und Sie können einen, zwei oder alle drei verwenden (die Standardwerte, die für die nicht eingeschlossenen Eigenschaften verwendet werden, sind `disc`, `none` und `outside`). Wenn sowohl ein `type` als auch ein `image` angegeben sind, wird der Typ als Fallback verwendet, wenn das Bild aus irgendeinem Grund nicht geladen werden kann.

## Kontrolle der Listenzählung

Manchmal möchten Sie eine geordnete Liste anders zählen lassen — z.B. mit einer Zahl, die nicht 1 ist, beginnen oder rückwärts zählen oder in Schritten von mehr als 1 zählen. HTML und CSS bieten einige Werkzeuge, die Ihnen hier helfen können.

### start

Das [`start`](/de/docs/Web/HTML/Element/ol#start) Attribut erlaubt es, dass die Zählung der Liste mit einer Zahl, die nicht 1 ist, beginnt. Das folgende Beispiel:

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

Ergibt diese Ausgabe:

{{ EmbedLiveSample('start', '100%', 150) }}

### reversed

Das [`reversed`](/de/docs/Web/HTML/Element/ol#reversed) Attribut lässt die Listen-Zählung anstatt aufwärts rückwärts beginnen. Das folgende Beispiel:

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

Ergibt diese Ausgabe:

{{ EmbedLiveSample('reversed', '100%', 150) }}

> [!NOTE]
> Wenn es in einer rückwärts gezählten Liste mehr Listenelemente gibt als den Wert des `start` Attributs, zählt die Liste bis null und dann weiter in negative Werte.

### value

Das [`value`](/de/docs/Web/HTML/Element/li#value) Attribut erlaubt es, Ihre Listenelemente auf spezifische numerische Werte zu setzen. Das folgende Beispiel:

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

Ergibt diese Ausgabe:

{{ EmbedLiveSample('value', '100%', 150) }}

> [!NOTE]
> Auch wenn Sie einen nicht-numerischen {{cssxref("list-style-type")}} verwenden, müssen Sie dennoch die entsprechenden numerischen Werte im `value` Attribut verwenden.

## Aktives Lernen: Eine verschachtelte Liste stylen

In dieser aktiven Lernsitzung möchten wir, dass Sie das oben Gelernte anwenden und versuchen, eine verschachtelte Liste zu stylen. Wir haben Ihnen das HTML bereitgestellt, und wir möchten, dass Sie:

1. Der ungeordneten Liste quadratische Aufzählungspunkte geben.
2. Den ungeordneten Listenelementen und den geordneten Listenelementen eine Zeilenhöhe von 1,5 ihrer Schriftgröße geben.
3. Der geordneten Liste Aufzählungspunkte in Kleinbuchstaben geben.
4. Fühlen Sie sich frei, mit dem Listenbeispiel zu experimentieren, indem Sie mit Aufzählungsarten, Abständen oder allem anderen, was Sie finden können, spielen.

Wenn Sie einen Fehler machen, können Sie immer die _Zurücksetzen_ Taste verwenden. Wenn Sie wirklich nicht weiterkommen, drücken Sie die _Lösung anzeigen_ Taste, um eine mögliche Antwort zu sehen.

```html hidden
<div
  class="body-wrapper"
  style="font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;">
  <h2>HTML Input</h2>
  <textarea
    id="code"
    class="html-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
<ul>
  <li>First, light the candle.</li>
  <li>Next, open the box.</li>
  <li>Finally, place the three magic items in the box, in this exact order, to complete the spell:
    <ol>
      <li>The book of spells</li>
      <li>The shiny rod</li>
      <li>The goblin statue</li>
    </ol>
  </li>
</ul>
  </textarea>

  <h2>CSS Input</h2>
  <textarea
    id="code"
    class="css-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;"></textarea>

  <h2>Output</h2>
  <div
    class="output"
    style="width: 90%;height: 12em;padding: 10px;border: 1px solid #0095dd;overflow: auto;"></div>
  <div class="controls">
    <input
      id="reset"
      type="button"
      value="Reset"
      style="margin: 10px 10px 0 0;" />
    <input
      id="solution"
      type="button"
      value="Show solution"
      style="margin: 10px 0 0 10px;" />
  </div>
</div>
```

```js hidden
const htmlInput = document.querySelector(".html-input");
const cssInput = document.querySelector(".css-input");
const reset = document.getElementById("reset");
const htmlCode = htmlInput.value;
const cssCode = cssInput.value;
const output = document.querySelector(".output");
const solution = document.getElementById("solution");

const styleElem = document.createElement("style");
const headElem = document.querySelector("head");
headElem.appendChild(styleElem);

function drawOutput() {
  output.innerHTML = htmlInput.value;
  styleElem.textContent = cssInput.value;
}

reset.addEventListener("click", () => {
  htmlInput.value = htmlCode;
  cssInput.value = cssCode;
  drawOutput();
});

solution.addEventListener("click", () => {
  htmlInput.value = htmlCode;
  cssInput.value = `ul {
  list-style-type: square;
}

ul li,
ol li {
  line-height: 1.5;
}

ol {
  list-style-type: lower-alpha;
}`;
  drawOutput();
});

htmlInput.addEventListener("input", drawOutput);
cssInput.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Active_learning_Styling_a_nested_list', 700, 800) }}

## Zusammenfassung

Listen sind relativ einfach zu gestalten, wenn man ein paar damit verbundene Grundprinzipien und spezifische Eigenschaften kennt. Im nächsten Artikel werden wir zu [Techniken für das Styling von Links](/de/docs/Learn/CSS/Styling_text/Styling_links) übergehen.

## Siehe auch

CSS-Zähler bieten fortschrittliche Werkzeuge zur Anpassung von Listenzählung und -styling, sind aber ziemlich komplex. Wir empfehlen, sich diese anzusehen, wenn Sie sich weiterentwickeln möchten. Siehe:

- {{cssxref("@counter-style")}}
- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}

{{PreviousMenuNext("Learn/CSS/Styling_text/Fundamentals", "Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text")}}
