---
title: Styling von Listen
slug: Learn_web_development/Core/Text_styling/Styling_lists
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Fundamentals", "Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling")}}

[Listen](/de/docs/Learn_web_development/Core/Structuring_content/Lists) verhalten sich größtenteils wie jeder andere Text, es gibt jedoch einige CSS-Eigenschaften, die speziell für Listen sind und die Sie kennen sollten, sowie einige bewährte Praktiken, die Sie berücksichtigen sollten. Dieser Artikel erklärt alles.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        > und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Styling-Grundlagen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Abstand von Listenelementen, z. B. mit Margin oder Zeilenhöhe.</li>
          <li>Verwendung von <code>list-style</code> Eigenschaften.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Ein einfaches Listenbeispiel

Zunächst einmal schauen wir uns ein einfaches Listenbeispiel an. Im gesamten Artikel betrachten wir ungeordnete, geordnete und Definitionslisten — alle haben ähnliche, aber auch einzigartige Styling-Features. Das ungestylte Beispiel ist [auf GitHub verfügbar](https://mdn.github.io/learning-area/css/styling-text/styling-lists/unstyled-list.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-text/styling-lists/unstyled-list.html) an).

Der HTML-Code für unser Listenbeispiel sieht folgendermaßen aus:

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

Wenn Sie sich jetzt das Live-Beispiel ansehen und die Listenelemente mit den [Entwickler-Tools des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) untersuchen, werden Sie einige Styling-Standards bemerken:

- Die {{htmlelement("ul")}} und {{htmlelement("ol")}} Elemente haben einen oberen und unteren {{cssxref("margin")}} von `16px` (`1em`) und einen {{cssxref("padding-left")}} von `40px` (`2.5em`). Wenn das Directionality-Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) auf von rechts nach links (`rtl`) für `ul` und `ol` Elemente gesetzt ist, kommt in diesem Fall {{cssxref("padding-right")}} zum Einsatz und sein Standardwert ist `40px` (`2.5em`).
- Die Listenelemente ({{htmlelement("li")}} Elemente) haben keine festgelegten Standards für Abstände.
- Das {{htmlelement("dl")}} Element hat einen oberen und unteren {{cssxref("margin")}} von `16px` (`1em`), aber keine festgelegte Polsterung.
- Die {{htmlelement("dd")}} Elemente haben {{cssxref("margin-left")}} von `40px` (`2.5em`).
- Die {{htmlelement("p")}} Elemente, die wir zur Referenz hinzugefügt haben, haben einen oberen und unteren {{cssxref("margin")}} von `16px` (`1em`) — genauso wie die verschiedenen Listentypen.

## Umgang mit Listenabständen

Beim Styling von Listen müssen Sie deren Styles so anpassen, dass sie den gleichen vertikalen Abstand wie ihre umgebenden Elemente (wie Absätze und Bilder; manchmal als vertikaler Rhythmus bezeichnet) und den gleichen horizontalen Abstand zueinander beibehalten (Sie können das [fertig gestylte Beispiel](https://mdn.github.io/learning-area/css/styling-text/styling-lists/) auf GitHub ansehen und [auch den Quellcode finden](https://github.com/mdn/learning-area/blob/main/css/styling-text/styling-lists/index.html)).

Das CSS für das Textstyling und die Abstände sieht wie folgt aus:

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
- Regeln 2 und 3 setzen relative Schriftgrößen für die Überschriften, verschiedene Listentypen (die Kinder der Listenelemente erben diese) und Absätze. Dies bedeutet, dass jeder Absatz und jede Liste die gleiche Schriftgröße und den gleichen oberen und unteren Abstand haben wird, was dazu beiträgt, den vertikalen Rhythmus konsistent zu halten.
- Regel 4 setzt die gleiche {{cssxref("line-height")}} für die Absätze und Listenelemente — so haben die Absätze und jedes einzelne Listenelement denselben Zeilenabstand. Dies wird auch dazu beitragen, den vertikalen Rhythmus konsistent zu halten.
- Regeln 5 und 6 beziehen sich auf die Definitionsliste. Wir setzen die gleiche `line-height` auf die Definitionslistenterms und Beschreibungen wie auf die Absätze und Listenelemente. Wieder einmal, Konsistenz ist gut! Wir machen die Definitionsterms auch fett, damit sie optisch leichter hervorstechen.

## Listenspezifische Stile

Nachdem wir uns allgemeine Abstandstechniken für Listen angesehen haben, erkunden wir nun einige listenspezifische Eigenschaften. Es gibt drei Eigenschaften, die Sie wissen sollten, wenn Sie beginnen, die auf {{htmlelement("ul")}} oder {{htmlelement("ol")}} Elemente gesetzt werden können:

- {{cssxref("list-style-type")}}: Legt die Art der Punkte fest, die für die Liste verwendet werden sollen, z. B. quadratische oder runde Punkte für eine ungeordnete Liste oder Zahlen, Buchstaben oder römische Zahlen für eine geordnete Liste.
- {{cssxref("list-style-position")}}: Legt fest, ob die Punkte zu Beginn jedes Elements innerhalb oder außerhalb der Listen erscheinen.
- {{cssxref("list-style-image")}}: Ermöglicht es Ihnen, ein benutzerdefiniertes Bild für den Punkt anstelle eines einfachen Quadrats oder Kreises zu verwenden.

### Punktstile

Wie oben erwähnt, ermöglicht es Ihnen die {{cssxref("list-style-type")}} Eigenschaft, festzulegen, welche Art von Punkt für die Aufzählungszeichen verwendet werden soll. In unserem Beispiel haben wir die geordnete Liste so eingestellt, dass sie römische Großbuchstaben verwendet mit:

```css
ol {
  list-style-type: upper-roman;
}
```

Dies gibt uns folgende Ansicht:

![Eine geordnete Liste mit Punkten, die außerhalb des Listenitem-Textes erscheinen.](outer-bullets.png)

Sie können viele weitere Optionen finden, indem Sie sich die {{cssxref("list-style-type")}} Referenzseite ansehen.

### Punktposition

Die {{cssxref("list-style-position")}} Eigenschaft legt fest, ob die Punkte innerhalb oder außerhalb der Listenelemente erscheinen, vor dem Beginn jedes Elements. Der Standardwert ist `outside`, wodurch die Punkte außerhalb der Listenelemente sitzen, wie oben zu sehen.

Wenn Sie den Wert auf `inside` setzen, erscheinen die Punkte innerhalb der Zeilen:

```css
ol {
  list-style-type: upper-roman;
  list-style-position: inside;
}
```

![Eine geordnete Liste mit Punkten, die innerhalb des Listenitem-Textes erscheinen.](inner-bullets.png)

### Verwendung eines benutzerdefinierten Punktbildes

Die {{cssxref("list-style-image")}} Eigenschaft ermöglicht es Ihnen, ein benutzerdefiniertes Bild für Ihren Punkt zu verwenden. Die Syntax ist ziemlich einfach:

```css
ul {
  list-style-image: url(star.svg);
}
```

Diese Eigenschaft ist jedoch etwas begrenzt, was die Kontrolle über Position, Größe usw. der Punkte betrifft. Es ist besser, die {{cssxref("background")}} Familie von Eigenschaften zu verwenden, die Sie in unserer vorherigen [Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) Lektion gelernt haben.

In unserem fertigen Beispiel haben wir die ungeordnete Liste wie folgt gestylt (zusätzlich zu dem, was Sie oben gesehen haben):

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

- Die {{cssxref("padding-left")}} des {{htmlelement("ul")}} von den Standard `40px` auf `20px` reduziert, dann den gleichen Betrag auf die Listenelemente gesetzt. Dies ist so, dass die Listenelemente insgesamt immer noch mit den geordneten Listenelementen und den Definitionen der Definitionsliste ausgerichtet sind, aber die Listenelemente eine gewisse Polsterung für die Hintergrundbilder haben, damit diese darin sitzen können. Wenn wir das nicht tun würden, würden sich die Hintergrundbilder mit dem Text der Listenelemente überlappen, was unordentlich aussehen würde.
- Die {{cssxref("list-style-type")}} auf `none` gesetzt, damit standardmäßig kein Punkt erscheint. Wir werden {{cssxref("background")}} Eigenschaften verwenden, um die Punkte zu handhaben.
- Einen Punkt auf jedes ungeordnete Listenelement eingefügt. Die relevanten Eigenschaften sind wie folgt:

  - {{cssxref("background-image")}}: Dies referenziert den Pfad zur Bilddatei, die Sie als Punkt verwenden möchten.
  - {{cssxref("background-position")}}: Dies definiert, wo im Hintergrund des ausgewählten Elements das Bild erscheinen wird — in diesem Fall sagen wir `0 0`, was bedeutet, dass der Punkt ganz oben links in jedem Listenpunkt erscheint.
  - {{cssxref("background-size")}}: Dies setzt die Größe des Hintergrundbildes. Wir möchten idealerweise, dass die Punkte die gleiche Größe wie die Listenelemente haben (oder sehr leicht kleiner oder größer sind). Wir verwenden eine Größe von `1.6rem` (`16px`), welche sehr gut mit der `20px` Polsterung passt, die wir für den Punkt einberechnet haben — 16px plus 4px Abstand zwischen dem Punkt und dem Text des Listenelements funktioniert gut.
  - {{cssxref("background-repeat")}}: Standardmäßig wiederholen sich Hintergrundbilder, bis sie den verfügbaren Hintergrundraum füllen. Wir wollen nur eine Kopie des Bildes in jedem Fall eingefügt haben, daher setzen wir dies auf einen Wert von `no-repeat`.

Dies gibt uns folgendes Ergebnis:

![Eine ungeordnete Liste, bei der Punkte als kleine Sternbilder erscheinen](list_formatting.png)

### list-style Kurzform

Die oben genannten drei Eigenschaften können alle mit einer einzigen Kurzform-Eigenschaft {{cssxref("list-style")}} gesetzt werden. Zum Beispiel, das folgende CSS:

```css
ul {
  list-style-type: square;
  list-style-image: url(example.png);
  list-style-position: inside;
}
```

Könnte durch dies ersetzt werden:

```css
ul {
  list-style: square url(example.png) inside;
}
```

Die Werte können in beliebiger Reihenfolge aufgelistet werden, und Sie können einen, zwei oder alle drei verwenden (die Standardwerte, die für die nicht enthaltenen Eigenschaften verwendet werden, sind `disc`, `none`, und `outside`). Wenn sowohl ein `type` als auch ein `image` spezifiziert sind, wird der Type als Fallback verwendet, falls das Bild aus irgendeinem Grund nicht geladen werden kann.

## Kontrolle der Listenzählung

Manchmal möchten Sie vielleicht anders bei einer geordneten Liste zählen — zum Beispiel von einer anderen Zahl als 1 beginnen, rückwärts zählen oder in Schritten größer als 1 zählen. HTML und CSS bieten Ihnen hier einige Werkzeuge.

### start

Das [`start`](/de/docs/Web/HTML/Reference/Elements/ol#start) Attribut erlaubt Ihnen, die Zählung der Liste von einer anderen Zahl als 1 zu starten. Das folgende Beispiel:

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

Das [`reversed`](/de/docs/Web/HTML/Reference/Elements/ol#reversed) Attribut lässt die Liste rückwärts statt vorwärts zählen. Das folgende Beispiel:

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
> Wenn es in einer umgekehrten Liste mehr Listenelemente gibt als der Wert des `start` Attributs, setzt sich die Zählung bis Null fort und dann in negative Werte.

### value

Das [`value`](/de/docs/Web/HTML/Reference/Elements/li#value) Attribut erlaubt es Ihnen, Ihre Listenelemente auf bestimmte numerische Werte zu setzen. Das folgende Beispiel:

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
> Selbst wenn Sie einen Nicht-Nummern {{cssxref("list-style-type")}} verwenden, müssen Sie immer noch die entsprechenden numerischen Werte im `value` Attribut verwenden.

## Aktives Lernen: Styling einer geschachtelten Liste

In dieser aktiven Lernsitzung möchten wir, dass Sie das, was Sie oben gelernt haben, anwenden und versuchen, eine geschachtelte Liste zu stylen. Wir haben Ihnen das HTML zur Verfügung gestellt, und wir möchten, dass Sie:

1. Der ungeordneten Liste quadratische Punkte geben.
2. Den ungeordneten und geordneten Listenelementen eine Zeilenhöhe von 1,5 ihrer Schriftgröße geben.
3. Der geordneten Liste tiefere alphabetische Punkte geben.
4. Zögern Sie nicht, mit dem Listenbeispiel so viel zu experimentieren, wie Sie möchten, mit Punktarten, Abständen oder was auch immer Sie finden können.

Falls Sie einen Fehler machen, können Sie immer mit der _Zurücksetzen_ Taste zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung zeigen_ Taste, um eine mögliche Antwort zu sehen.

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

Listen sind relativ einfach zu stylen, sobald Sie einige grundlegende Prinzipien und spezielle Eigenschaften kennen. Im nächsten Artikel werden wir uns mit Link-Styling-Techniken beschäftigen.

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Fundamentals", "Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling")}}
