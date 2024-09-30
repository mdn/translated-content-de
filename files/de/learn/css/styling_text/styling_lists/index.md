---
title: Listen stilisieren
slug: Learn/CSS/Styling_text/Styling_lists
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_text/Fundamentals", "Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text")}}

[Listen](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#lists) verhalten sich größtenteils wie jeder andere Text, jedoch gibt es einige spezifische CSS-Eigenschaften für Listen, die Sie kennen sollten, ebenso wie einige Best Practices, die zu beachten sind. Dieser Artikel erklärt alles.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), Grundlagen von CSS (siehe
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>),
        <a href="/de/docs/Learn/CSS/Styling_text/Fundamentals"
          >CSS Text- und Schriftgrundlagen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit den Best Practices und Eigenschaften im Zusammenhang mit
        dem Stilieren von Listen.
      </td>
    </tr>
  </tbody>
</table>

## Ein einfaches Listenbeispiel

Beginnen wir mit einem einfachen Listenbeispiel. Im Laufe dieses Artikels betrachten wir ungeordnete, geordnete und Definitionslisten — alle haben ähnliche Stileigenschaften sowie einige, die speziell für sie gelten. Das nicht gestylte Beispiel finden Sie [auf GitHub](https://mdn.github.io/learning-area/css/styling-text/styling-lists/unstyled-list.html) (auch der [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-text/styling-lists/unstyled-list.html) ist verfügbar).

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

Wenn Sie jetzt das Live-Beispiel besuchen und die Listenelemente mit [Browser-Entwicklertools](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) untersuchen, werden Ihnen ein paar Styling-Standardeinstellungen auffallen:

- Die {{htmlelement("ul")}}- und {{htmlelement("ol")}}-Elemente haben einen oberen und unteren {{cssxref("margin")}} von `16px` (`1em`) und einen {{cssxref("padding-left")}} von `40px` (`2.5em`). Wenn das Richtung-Attribut [`dir`](/de/docs/Web/HTML/Global_attributes/dir) auf rechts-nach-links (`rtl`) für `ul` und `ol` gesetzt ist, kommt {{cssxref("padding-right")}} zum Einsatz und der Standardwert beträgt ebenfalls `40px` (`2.5em`).
- Die Listenelemente ({{htmlelement("li")}}) haben keine festgelegten Vorgaben für den Abstand.
- Das {{htmlelement("dl")}}-Element hat einen oberen und unteren {{cssxref("margin")}} von `16px` (`1em`), jedoch kein gesetztes Padding.
- Die {{htmlelement("dd")}}-Elemente haben einen {{cssxref("margin-left")}} von `40px` (`2.5em`).
- Die {{htmlelement("p")}}-Elemente, die wir als Referenz hinzugefügt haben, haben einen oberen und unteren {{cssxref("margin")}} von `16px` (`1em`) – dasselbe wie die verschiedenen Listentypen.

## Umgang mit Listenabständen

Beim Stylen von Listen müssen Sie deren Stil so anpassen, dass sie denselben vertikalen Abstand wie die umgebenden Elemente (z. B. Absätze und Bilder; manchmal als vertikaler Rhythmus bezeichnet) und denselben horizontalen Abstand wie einander aufweisen (Sie können das [fertig gestaltete Beispiel](https://mdn.github.io/learning-area/css/styling-text/styling-lists/) auf GitHub sehen und [auch den Quellcode finden](https://github.com/mdn/learning-area/blob/main/css/styling-text/styling-lists/index.html)).

Das CSS, das für die Textstilierung und den Abstand verwendet wird, ist wie folgt:

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

- Die erste Regel setzt eine websiteweite Schriftart und eine Basisschriftgröße von 10px. Diese werden von allem auf der Seite geerbt.
- Die Regeln 2 und 3 setzen relative Schriftgrößen für die Überschriften, verschiedene Listentypen (die Kinder der Listenelemente erben diese) und Absätze. Das bedeutet, dass jeder Absatz und jede Liste dieselbe Schriftgröße sowie denselben oberen und unteren Abstand haben, was hilft, den vertikalen Rhythmus konsistent zu halten.
- Die Regel 4 setzt dasselbe {{cssxref("line-height")}} auf die Absätze und Listenelemente — so haben die Absätze und jedes einzelne Listenelement denselben Abstand zwischen den Zeilen. Auch dies wird helfen, den vertikalen Rhythmus konsistent zu halten.
- Die Regeln 5 und 6 gelten für die Definitionsliste. Wir setzen dasselbe `line-height` auf die Definitionstermini und -beschreibungen, wie wir es bei den Absätzen und Listenelementen getan haben. Wiederum ist Konsistenz gut! Wir geben den Definitionstermini auch fettgedruckte Schrift, damit sie sich optisch leichter abheben.

## Listen-spezifische Stile

Jetzt, da wir allgemeine Abstandsverfahren für Listen betrachtet haben, lassen Sie uns einige listen-spezifische Eigenschaften erkunden. Es gibt drei Eigenschaften, die Sie zunächst kennen sollten und die auf {{htmlelement("ul")}}- oder {{htmlelement("ol")}}-Elemente gesetzt werden können:

- {{cssxref("list-style-type")}}: Legt den Typ der Aufzählungszeichen fest, die für die Liste verwendet werden sollen, z. B. quadratische oder runde Aufzählungszeichen für eine ungeordnete Liste oder Zahlen, Buchstaben oder römische Ziffern für eine geordnete Liste.
- {{cssxref("list-style-position")}}: Legt fest, ob die Aufzählungszeichen, die am Anfang jedes Elements erscheinen, innerhalb oder außerhalb der Listen erscheinen.
- {{cssxref("list-style-image")}}: Ermöglicht die Verwendung eines benutzerdefinierten Bildes für das Aufzählungszeichen anstelle eines einfachen Quadrats oder Kreises.

### Aufzählungsstil

Wie oben erwähnt, ermöglicht die Eigenschaft {{cssxref("list-style-type")}}, den Typ des Aufzählungszeichens für die Aufzählungspunkte festzulegen. In unserem Beispiel haben wir die geordnete Liste so eingestellt, dass sie mit großen römischen Zahlen arbeitet:

```css
ol {
  list-style-type: upper-roman;
}
```

Dies ergibt folgendes Aussehen:

![Eine geordnete Liste mit Aufzählungszeichen, die außerhalb des Listenpunkte-Textes erscheinen.](outer-bullets.png)

Weitere Optionen finden Sie auf der Referenzseite {{cssxref("list-style-type")}}.

### Aufzählungsposition

Die Eigenschaft {{cssxref("list-style-position")}} legt fest, ob die Aufzählungszeichen innerhalb der Listenelemente erscheinen oder außerhalb vor dem Anfang jedes Elements. Der Standardwert ist `outside`, wodurch die Aufzählungszeichen außerhalb der Listenelemente erscheinen, wie oben zu sehen.

Wenn Sie den Wert auf `inside` setzen, stehen die Aufzählungszeichen innerhalb der Zeilen:

```css
ol {
  list-style-type: upper-roman;
  list-style-position: inside;
}
```

![Eine geordnete Liste mit Aufzählungszeichen, die innerhalb des Listenpunkte-Textes erscheinen.](inner-bullets.png)

### Verwendung eines benutzerdefinierten Aufzählungsbildes

Die Eigenschaft {{cssxref("list-style-image")}} ermöglicht Ihnen die Verwendung eines benutzerdefinierten Bildes für Ihr Aufzählungszeichen. Die Syntax ist ziemlich einfach:

```css
ul {
  list-style-image: url(star.svg);
}
```

Diese Eigenschaft ist jedoch etwas begrenzt, was das Steuern der Position, Größe usw. der Aufzählungszeichen betrifft. Es ist besser, die {{cssxref("background")}}-Familie von Eigenschaften zu verwenden, die Sie im Artikel zu [Hintergründe und Rahmen](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders) gelernt haben. Hier ein Vorgeschmack!

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

Wir haben folgendes getan:

- Die {{cssxref("padding-left")}} des {{htmlelement("ul")}} von dem Standardwert `40px` auf `20px` reduziert und denselben Wert auf die Listenelemente gesetzt. Dies geschieht, damit die Listenelemente insgesamt immer noch mit den geordneten Listenelementen und den Beschreibungen der Definitionsliste übereinstimmen, aber die Listenelemente etwas Abstand haben, damit die Hintergrundbilder innen sitzen können. Ohne diese Anpassung würden sich die Hintergrundbilder mit dem Text der Listenelemente überschneiden, was unordentlich aussehen würde.
- Die {{cssxref("list-style-type")}} auf `none` gesetzt, damit standardmäßig keine Aufzählungszeichen erscheinen. Wir verwenden stattdessen die {{cssxref("background")}}-Eigenschaften für die Aufzählungszeichen.
- Ein Aufzählungszeichen für jedes Element der ungeordneten Liste eingefügt. Die relevanten Eigenschaften sind wie folgt:

  - {{cssxref("background-image")}}: Diese verweist auf den Pfad zur Bilddatei, die Sie als Aufzählungszeichen verwenden möchten.
  - {{cssxref("background-position")}}: Diese definiert, wo das Bildhintergrund im ausgewählten Element erscheint — in diesem Fall sagen wir `0 0`, was bedeutet, dass das Aufzählungszeichen ganz oben links in jedem Listenelement erscheint.
  - {{cssxref("background-size")}}: Diese bestimmt die Größe des Hintergrundbildes. Wir wollen idealerweise, dass die Aufzählungszeichen dieselbe Größe haben wie die Listenelemente (oder sehr leicht kleiner oder größer). Wir verwenden eine Größe von `1.6rem` (`16px`), die sehr gut mit dem vorgesehenen `20px`-Abstand für das Aufzählungszeichen passt — 16px plus 4px Abstand zwischen dem Aufzählungszeichen und dem Listenelementtext funktioniert gut.
  - {{cssxref("background-repeat")}}: Standardmäßig wiederholen sich Hintergrundbilder, bis sie den verfügbaren Hintergrundraum füllen. Wir möchten in jedem Fall nur eine Kopie des Bildes einfügen, also setzen wir dies auf einen Wert von `no-repeat`.

Dies ergibt folgendes Ergebnis:

![Eine ungeordnete Liste mit Aufzählungszeichen, die als kleine Sternbilder erscheinen.](list_formatting.png)

### list-style Kurzform

Die drei oben erwähnten Eigenschaften können alle mit einer einzigen Kurzform-Eigenschaft, {{cssxref("list-style")}}, festgelegt werden. Zum Beispiel könnte das folgende CSS:

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

Die Werte können in beliebiger Reihenfolge aufgelistet werden, und Sie können eines, zwei oder alle drei verwenden (die Standardwerte, die für die nicht enthaltenen Eigenschaften verwendet werden, sind `disc`, `none` und `outside`). Wenn sowohl ein `type` als auch ein `image` angegeben werden, wird der Typ als Fallback verwendet, falls das Bild aus irgendeinem Grund nicht geladen werden kann.

## Kontrolle der Listenzählung

Manchmal möchten Sie in einer geordneten Liste anders zählen — z. B. nicht bei 1 beginnen, rückwärts zählen oder in Schritten von mehr als 1 zählen. HTML und CSS bieten einige Werkzeuge, die Ihnen hier helfen können.

### start

Das [`start`](/de/docs/Web/HTML/Element/ol#start)-Attribut erlaubt es Ihnen, die Liste von einer anderen Zahl als 1 starten zu lassen. Das folgende Beispiel:

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

Das [`reversed`](/de/docs/Web/HTML/Element/ol#reversed)-Attribut wird die Liste rückwärts zählen lassen, anstatt aufwärts. Das folgende Beispiel:

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
> Wenn es in einer umgekehrten Liste mehr Listenelemente gibt als den Wert des `start`-Attributs, wird die Zählung bis null und dann in negative Werte fortgesetzt.

### value

Das [`value`](/de/docs/Web/HTML/Element/li#value)-Attribut erlaubt es Ihnen, Ihre Listenelemente auf spezifische numerische Werte zu setzen. Das folgende Beispiel:

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
> Selbst wenn Sie einen nicht-numerischen {{cssxref("list-style-type")}} verwenden, müssen Sie dennoch die äquivalenten numerischen Werte im `value`-Attribut verwenden.

## Aktives Lernen: Eine verschachtelte Liste stilisieren

In dieser aktiven Lerneinheit möchten wir, dass Sie das, was Sie oben gelernt haben, anwenden und eine verschachtelte Liste stilisieren. Wir haben Ihnen das HTML bereitgestellt, und wir möchten, dass Sie:

1. Der ungeordneten Liste Quadrataufzählungszeichen geben.
2. Den ungeordneten Listenelementen und den geordneten Listenelementen eine Zeilenhöhe von 1.5 ihrer Schriftgröße geben.
3. Der geordneten Liste kleine alphabetische Aufzählungszeichen geben.
4. Fühlen Sie sich frei, mit dem Listenbeispiel so viel zu experimentieren, wie Sie möchten, sei es mit Aufzählungstypen, Abständen oder allem anderen, was Sie finden können.

Wenn Sie einen Fehler machen, können Sie ihn jederzeit mit der Schaltfläche _Reset_ zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die Schaltfläche _Show solution_, um eine mögliche Lösung zu sehen.

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

Listen sind relativ einfach zu stilisieren, sobald Sie einige grundlegende Prinzipien und spezifische Eigenschaften kennen. Im nächsten Artikel werden wir zu [Link-Stilisierungstechniken](/de/docs/Learn/CSS/Styling_text/Styling_links) übergehen.

## Siehe auch

CSS-Zähler bieten fortgeschrittene Werkzeuge zum Anpassen der Listenzählung und Gestaltung, sind jedoch ziemlich komplex. Wir empfehlen, sich diese anzusehen, wenn Sie sich herausfordern möchten. Siehe:

- {{cssxref("@counter-style")}}
- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}

{{PreviousMenuNext("Learn/CSS/Styling_text/Fundamentals", "Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text")}}
