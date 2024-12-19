---
title: Listen gestalten
slug: Learn_web_development/Core/Text_styling/Styling_lists
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Fundamentals", "Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling")}}

[Listen](/de/docs/Learn_web_development/Core/Structuring_content/Lists) verhalten sich größtenteils wie jeder andere Text, aber es gibt einige CSS-Eigenschaften, die speziell für Listen gelten und die Sie kennen sollten, ebenso wie einige bewährte Praktiken. Dieser Artikel erklärt alles.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        > und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Abstand von Listenelementen gestalten, z.B. mit Margin oder Zeilenhöhe.</li>
          <li>Verwendung von <code>list-style</code>-Eigenschaften.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Ein einfaches Listen-Beispiel

Um zu beginnen, schauen wir uns ein einfaches Listen-Beispiel an. Im Verlauf dieses Artikels werden wir uns ungeordnete, geordnete und Definitionslisten ansehen – alle haben ähnliche Gestaltungsmöglichkeiten sowie einige, die speziell für sie gelten. Das ungestylte Beispiel ist [auf GitHub verfügbar](https://mdn.github.io/learning-area/css/styling-text/styling-lists/unstyled-list.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-text/styling-lists/unstyled-list.html) an).

Das HTML für unser Listen-Beispiel sieht so aus:

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

Wenn Sie sich das Live-Beispiel jetzt ansehen und die Listenelemente mit [Entwicklertools des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) untersuchen, werden Sie einige Styling-Standards bemerken:

- Die {{htmlelement("ul")}}- und {{htmlelement("ol")}}-Elemente haben einen oberen und unteren {{cssxref("margin")}} von `16px` (`1em`) und ein {{cssxref("padding-left")}} von `40px` (`2.5em`). Wenn das Richtungsattribut [`dir`](/de/docs/Web/HTML/Global_attributes/dir) auf rechts-nach-links (`rtl`) für `ul`- und `ol`-Elemente gesetzt ist, kommt in diesem Fall {{cssxref("padding-right")}} zur Geltung und sein Standardwert ist `40px` (`2.5em`).
- Die Listenelemente ({{htmlelement("li")}}-Elemente) haben keine voreingestellten Abstände.
- Das {{htmlelement("dl")}}-Element hat einen oberen und unteren {{cssxref("margin")}} von `16px` (`1em`), aber kein eingestelltes Padding.
- Die {{htmlelement("dd")}}-Elemente haben {{cssxref("margin-left")}} von `40px` (`2.5em`).
- Die von uns zum Vergleich eingeschlossenen {{htmlelement("p")}}-Elemente haben einen oberen und unteren {{cssxref("margin")}} von `16px` (`1em`) — genau wie die verschiedenen Listentypen.

## Umgang mit Listenabständen

Beim Gestalten von Listen müssen Sie deren Stile anpassen, damit sie denselben vertikalen Abstand wie ihre umgebenden Elemente (wie Absätze und Bilder; manchmal als vertikaler Rhythmus bezeichnet) und denselben horizontalen Abstand zueinander halten (Sie können das [fertige gestylte Beispiel](https://mdn.github.io/learning-area/css/styling-text/styling-lists/) auf GitHub sehen und auch [den Quellcode finden](https://github.com/mdn/learning-area/blob/main/css/styling-text/styling-lists/index.html)).

Das für die Textgestaltung und Abstände verwendete CSS sieht folgendermaßen aus:

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

- Die erste Regel legt eine websiteweite Schriftart und eine Basis-Schriftgröße von 10px fest. Diese werden von allem auf der Seite geerbt.
- Die Regeln 2 und 3 legen relative Schriftgrößen für die Überschriften, verschiedene Listentypen (die Kinder der Listenelemente erben diese) und Absätze fest. Dies bedeutet, dass jeder Absatz und jede Liste dieselbe Schriftgröße sowie oberen und unteren Abstand haben, was dazu beiträgt, den vertikalen Rhythmus konsistent zu halten.
- Regel 4 legt dieselbe {{cssxref("line-height")}} für die Absätze und Listenelemente fest — so haben die Absätze und jedes einzelne Listenelement denselben Abstand zwischen den Zeilen. Dies wird auch dazu beitragen, den vertikalen Rhythmus konsistent zu halten.
- Die Regeln 5 und 6 gelten für die Definitionsliste. Wir setzen dieselbe `line-height` auf die Begriffe und Beschreibungen der Definitionsliste wie bei den Absätzen und Listenelementen. Wiederum ist Konsistenz gut! Wir stellen auch die Begriffe der Definition fett dar, damit sie visuell leichter auffallen.

## Listen-spezifische Stile

Nachdem wir uns nun allgemeine Abstandstechniken für Listen angesehen haben, lassen Sie uns einige Listen-spezifische Eigenschaften erkunden. Es gibt drei Eigenschaften, von denen Sie zu Beginn wissen sollten, die auf {{htmlelement("ul")}}- oder {{htmlelement("ol")}}-Elemente gesetzt werden können:

- {{cssxref("list-style-type")}}: Legt die Art der Aufzählungszeichen für die Liste fest, zum Beispiel quadratische oder kreisförmige Zeichen für eine ungeordnete Liste oder Zahlen, Buchstaben oder römische Ziffern für eine geordnete Liste.
- {{cssxref("list-style-position")}}: Legt fest, ob die Aufzählungszeichen zu Beginn jedes Elements innerhalb oder außerhalb der Listen erscheinen.
- {{cssxref("list-style-image")}}: Ermöglicht die Verwendung eines benutzerdefinierten Bildes für das Aufzählungszeichen, anstatt eines einfachen Quadrats oder Kreises.

### Aufzählungsstile

Wie oben erwähnt, ermöglicht Ihnen die Eigenschaft {{cssxref("list-style-type")}}, festzulegen, welche Art von Aufzählungszeichen für die Punkte verwendet wird. In unserem Beispiel haben wir die geordnete Liste so eingestellt, dass sie römische Ziffern in Großbuchstaben verwendet mit:

```css
ol {
  list-style-type: upper-roman;
}
```

Dies verleiht uns folgendes Aussehen:

![eine geordnete Liste mit den Aufzählungspunkten, die außerhalb des Listentextes erscheinen.](outer-bullets.png)

Viele weitere Optionen finden Sie auf der Referenzseite zu {{cssxref("list-style-type")}}.

### Aufzählungspositions

Die Eigenschaft {{cssxref("list-style-position")}} setzt fest, ob die Aufzählungszeichen innerhalb der Listenelemente erscheinen oder außerhalb davon vor dem Beginn jedes Elements. Der Standardwert ist `outside`, was dazu führt, dass die Aufzählungszeichen wie oben gezeigt außerhalb der Listenelemente sitzen.

Wenn Sie den Wert auf `inside` setzen, sitzen die Aufzählungszeichen innerhalb der Zeilen:

```css
ol {
  list-style-type: upper-roman;
  list-style-position: inside;
}
```

![eine geordnete Liste mit den Aufzählungspunkten, die innerhalb des Listentextes erscheinen.](inner-bullets.png)

### Verwendung eines benutzerdefinierten Aufzählungsbildes

Die Eigenschaft {{cssxref("list-style-image")}} ermöglicht es Ihnen, ein benutzerdefiniertes Bild für Ihr Aufzählungszeichen zu verwenden. Die Syntax ist ziemlich einfach:

```css
ul {
  list-style-image: url(star.svg);
}
```

Allerdings ist diese Eigenschaft etwas eingeschränkt in Bezug auf die Steuerung der Position, Größe usw. der Aufzählungszeichen. Es ist besser, die {{cssxref("background")}}-Familie von Eigenschaften zu verwenden, die Sie in unserer vorherigen Lektion über [Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) gelernt haben.

In unserem fertigen Beispiel haben wir die ungeordnete Liste wie folgt gestaltet (zusätzlich zu dem, was Sie bereits oben gesehen haben):

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

Wir haben Folgendes getan:

- Das {{cssxref("padding-left")}} der {{htmlelement("ul")}} von den standardmäßigen `40px` auf `20px` reduziert und dann denselben Wert auf die Listenelemente gesetzt. So sind die Listenelemente insgesamt immer noch mit den geordneten Listenelementen und den Beschreibungen der Definitionsliste ausgerichtet, aber die Listenelemente haben etwas Padding, damit die Hintergrundbilder darin sitzen können. Wenn wir dies nicht tun, würden sich die Hintergrundbilder mit dem Text der Listenelemente überlappen, was unordentlich aussehen würde.
- Den {{cssxref("list-style-type")}} auf `none gesetzt`, sodass standardmäßig kein Aufzählungszeichen erscheint. Wir werden {{cssxref("background")}}-Eigenschaften verwenden, um die Aufzählungszeichen zu handhaben.
- Ein Aufzählungszeichen auf jedes ungeordnete Listenelement eingefügt. Die relevanten Eigenschaften sind wie folgt:

  - {{cssxref("background-image")}}: Dies verweist auf den Pfad zur Bilddatei, die Sie als Aufzählungszeichen verwenden möchten.
  - {{cssxref("background-position")}}: Dies definiert, wo im Hintergrund des ausgewählten Elements das Bild erscheint - in diesem Fall sagen wir `0 0`, was bedeutet, dass das Aufzählungszeichen ganz oben links in jedem Listenelement erscheint.
  - {{cssxref("background-size")}}: Dies setzt die Größe des Hintergrundbildes. Wir wollen idealerweise, dass die Aufzählungszeichen dieselbe Größe wie die Listenelemente haben (oder sehr leicht kleiner oder größer). Wir verwenden eine Größe von `1.6rem` (`16px`), die sehr gut zu dem `20px`-Padding passt, das wir für das Aufzählungszeichen vorgesehen haben — 16px plus 4px Abstand zwischen dem Aufzählungszeichen und dem Text des Listenelements funktioniert gut.
  - {{cssxref("background-repeat")}}: Standardmäßig wiederholen sich Hintergrundbilder, bis sie den verfügbaren Hintergrundraum ausfüllen. Wir möchten in jedem Fall nur eine Kopie des Bildes einfügen, daher setzen wir dies auf einen Wert von `no-repeat`.

Dies gibt uns das folgende Ergebnis:

![eine ungeordnete Liste mit den als kleine Sternbilder eingestellten Aufzählungspunkten](list_formatting.png)

### list-style Kurzschreibweise

Die drei oben genannten Eigenschaften können alle mit einer einzigen Kurzschreibweise, {{cssxref("list-style")}}, gesetzt werden. Zum Beispiel kann das folgende CSS:

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

Die Werte können in beliebiger Reihenfolge aufgelistet werden, und Sie können einen, zwei oder alle drei verwenden (die Standardwerte, die für die nicht enthaltenen Eigenschaften verwendet werden, sind `disc`, `none` und `outside`). Wenn sowohl ein `type` als auch ein `image` angegeben sind, wird der Typ als Fallback verwendet, falls das Bild aus irgendeinem Grund nicht geladen werden kann.

## Zählung von Listen steuern

Manchmal möchten Sie möglicherweise anders auf einer geordneten Liste zählen — z.B. von einer anderen Nummer als 1 beginnen, rückwärts zählen oder in Schritten von mehr als 1 zählen. HTML und CSS bieten hier einige Werkzeuge.

### start

Das Attribut [`start`](/de/docs/Web/HTML/Element/ol#start) ermöglicht es Ihnen, die Listen-Zählung von einer anderen Nummer als 1 zu starten. Das folgende Beispiel:

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

Das Attribut [`reversed`](/de/docs/Web/HTML/Element/ol#reversed) wird die Listen-Zählung rückwärts statt vorwärts starten. Das folgende Beispiel:

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
> Wenn es mehr Listenelemente in einer umgekehrten Liste gibt als der Wert des `start`-Attributs, wird die Zählung auf null und dann in negative Werte fortgesetzt.

### value

Das Attribut [`value`](/de/docs/Web/HTML/Element/li#value) ermöglicht es Ihnen, Ihre Listenelemente auf spezifische numerische Werte zu setzen. Das folgende Beispiel:

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
> Auch wenn Sie eine nicht numerische {{cssxref("list-style-type")}} verwenden, müssen Sie dennoch die entsprechenden numerischen Werte im `value`-Attribut verwenden.

## Aktives Lernen: Eine verschachtelte Liste gestalten

In dieser aktiven Lernsitzung möchten wir, dass Sie das oben Gelernte anwenden und versuchen, eine verschachtelte Liste zu gestalten. Wir haben Ihnen das HTML bereitgestellt und möchten, dass Sie:

1. Geben Sie der ungeordneten Liste quadratische Aufzählungszeichen.
2. Geben Sie den ungeordneten Listenelementen und den geordneten Listenelementen eine Zeilenhöhe von 1,5 ihrer Schriftgröße.
3. Geben Sie der geordneten Liste Aufzählungszeichen in Kleinbuchstaben.
4. Fühlen Sie sich frei, mit dem Listenbeispiel zu experimentieren, egal ob mit Aufzählungstypen, Abständen oder was auch immer Sie finden können.

Wenn Sie einen Fehler machen, können Sie ihn jederzeit mit der _Zurücksetzen_-Taste korrigieren. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Taste, um eine mögliche Antwort zu sehen.

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

Listen sind relativ einfach zu gestalten, wenn Sie einige grundlegende Prinzipien und spezifische Eigenschaften kennen. Im nächsten Artikel werden wir zu Techniken zur Gestaltung von Links übergehen.

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Fundamentals", "Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling")}}
