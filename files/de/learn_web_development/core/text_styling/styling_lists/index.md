---
title: Listen stylen
slug: Learn_web_development/Core/Text_styling/Styling_lists
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Fundamentals", "Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling")}}

[Listen](/de/docs/Learn_web_development/Core/Structuring_content/Lists) verhalten sich größtenteils wie jeder andere Text, aber es gibt einige CSS-Eigenschaften, die spezifisch für Listen sind und die Sie kennen sollten, sowie einige bewährte Praktiken, die Sie berücksichtigen sollten. Dieser Artikel erklärt alles.

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
          <li>Abstände für Listenelemente festlegen, zum Beispiel mit Margin oder Zeilenhöhe.</li>
          <li>Verwendung von <code>list-style</code>-Eigenschaften.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Ein einfaches Listenelement

Beginnen wir mit einem einfachen Listenelement. Im Verlauf dieses Artikels betrachten wir ungeordnete, geordnete und Beschreibungslisten — alle haben ähnliche Stilmerkmale sowie einige, die ihnen eigen sind. Das ungestylte Beispiel ist [auf GitHub verfügbar](https://mdn.github.io/learning-area/css/styling-text/styling-lists/unstyled-list.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-text/styling-lists/unstyled-list.html) an).

Das HTML für unser Listenbeispiel sieht wie folgt aus:

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

Wenn Sie jetzt zum Live-Beispiel gehen und die Listenelemente mit den [Browser-Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) untersuchen, werden Sie ein paar Styling-Standardwerte bemerken:

- Die {{htmlelement("ul")}}- und {{htmlelement("ol")}}-Elemente haben einen oberen und unteren {{cssxref("margin")}} von `16px` (`1em`) und einen {{cssxref("padding-left")}} von `40px` (`2.5em`). Wenn das Richtungsattribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) auf rechts-nach-links (`rtl`) für `ul`- und `ol`-Elemente gesetzt ist, kommt in diesem Fall {{cssxref("padding-right")}} zur Anwendung und sein Standardwert ist `40px` (`2.5em`).
- Die Listenelemente ({{htmlelement("li")}}-Elemente) haben keine voreingestellten Abstände.
- Das {{htmlelement("dl")}}-Element hat einen oberen und unteren {{cssxref("margin")}} von `16px` (`1em`), aber kein Padding gesetzt.
- Die {{htmlelement("dd")}}-Elemente haben einen {{cssxref("margin-left")}} von `40px` (`2.5em`).
- Die {{htmlelement("p")}}-Elemente, die wir zur Referenz enthalten haben, haben einen oberen und unteren {{cssxref("margin")}} von `16px` (`1em`) — derselbe wie bei den verschiedenen Listentypen.

## Handhabung von Listenabständen

Beim Styling von Listen müssen Sie deren Stil so anpassen, dass sie denselben vertikalen Abstand wie ihre umgebenden Elemente (wie Absätze und Bilder; manchmal als vertikaler Rhythmus bezeichnet) und denselben horizontalen Abstand zueinander haben (Sie können das [fertige gestylte Beispiel](https://mdn.github.io/learning-area/css/styling-text/styling-lists/) auf GitHub sehen und [den Quellcode finden](https://github.com/mdn/learning-area/blob/main/css/styling-text/styling-lists/index.html)).

Das für die Textformatierung und die Abstände verwendete CSS sieht wie folgt aus:

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

- Die erste Regel setzt eine siteweite Schriftart und eine Basisschriftgröße von 10px. Diese werden von allem auf der Seite geerbt.
- Regeln 2 und 3 setzen relative Schriftgrößen für die Überschriften, verschiedene Listentypen (die Kinder der Listenelemente erben diese) und Absätze. Dies bedeutet, dass jeder Absatz und jede Liste dieselbe Schriftgröße und denselben oberen und unteren Abstand haben, was hilft, den vertikalen Rhythmus konsistent zu halten.
- Regel 4 setzt dieselbe {{cssxref("line-height")}} auf den Absätzen und Listenelementen — so haben die Absätze und jedes einzelne Listenelement denselben Abstand zwischen den Zeilen. Auch dies hilft, den vertikalen Rhythmus konsistent zu halten.
- Regeln 5 und 6 gelten für die Beschreibungslisten. Wir setzen dieselbe `line-height` auf die Beschreibungslistentermine und -beschreibungen wie bei den Absätzen und Listenelementen. Wiederum ist Konsistenz gut! Wir lassen die Beschreibungsterms in Fettschrift erscheinen, damit sie visuell leichter hervorstechen.

## Listenspezifische Stile

Nachdem wir uns die allgemeinen Abstandstechniken für Listen angesehen haben, wollen wir einige listenspezifische Eigenschaften erkunden. Es gibt drei Eigenschaften, die Sie kennen sollten und die für {{htmlelement("ul")}}- oder {{htmlelement("ol")}}-Elemente festgelegt werden können:

- {{cssxref("list-style-type")}}: Legt die Art der Aufzählungszeichen fest, die für die Liste verwendet werden sollen, zum Beispiel quadratische oder runde Aufzählungszeichen für eine ungeordnete Liste oder Zahlen, Buchstaben oder römische Ziffern für eine geordnete Liste.
- {{cssxref("list-style-position")}}: Legt fest, ob die Aufzählungszeichen am Anfang jedes Elements innerhalb oder außerhalb der Listen erscheinen.
- {{cssxref("list-style-image")}}: Ermöglicht die Verwendung eines benutzerdefinierten Bildes als Aufzählungszeichen anstelle eines einfachen Quadrats oder Kreises.

### Aufzählungszeichenstile

Wie oben erwähnt, ermöglicht Ihnen die {{cssxref("list-style-type")}}-Eigenschaft festzulegen, welche Art von Aufzählungszeichen für die Aufzählungspunkte verwendet werden soll. In unserem Beispiel haben wir die geordnete Liste so eingestellt, dass sie Großbuchstaben in römischen Ziffern verwendet mit:

```css
ol {
  list-style-type: upper-roman;
}
```

Dies ergibt das folgende Aussehen:

![eine geordnete Liste mit Aufzählungspunkten, die außerhalb des Listenelement-Texts erscheinen.](outer-bullets.png)

Sie finden viele weitere Optionen, indem Sie sich die {{cssxref("list-style-type")}} Referenzseite ansehen.

### Position der Aufzählungszeichen

Die {{cssxref("list-style-position")}}-Eigenschaft legt fest, ob die Aufzählungszeichen innerhalb der Listenelemente oder außerhalb vor dem Beginn jedes Elements erscheinen. Der Standardwert ist `outside`, wodurch die Aufzählungszeichen außerhalb der Listenelemente sitzen, wie oben zu sehen.

Wenn Sie den Wert auf `inside` setzen, sitzen die Aufzählungszeichen innerhalb der Zeilen:

```css
ol {
  list-style-type: upper-roman;
  list-style-position: inside;
}
```

![eine geordnete Liste mit Aufzählungspunkten, die innerhalb des Listenelement-Texts erscheinen.](inner-bullets.png)

### Verwendung eines benutzerdefinierten Aufzählungsbildes

Die {{cssxref("list-style-image")}}-Eigenschaft ermöglicht es Ihnen, ein benutzerdefiniertes Bild für Ihre Aufzählungszeichen zu verwenden. Die Syntax ist ziemlich einfach:

```css
ul {
  list-style-image: url(star.svg);
}
```

Diese Eigenschaft ist jedoch etwas eingeschränkt, wenn es darum geht, die Position, Größe usw. der Aufzählungszeichen zu kontrollieren. Es ist besser, die {{cssxref("background")}}-Familie von Eigenschaften zu verwenden, die Sie in unserer vorherigen [Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) Lektion gelernt haben.

In unserem fertigen Beispiel haben wir die ungeordnete Liste wie folgt gestylt (zusätzlich zu dem, was Sie schon oben gesehen haben):

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

- Das {{cssxref("padding-left")}} des {{htmlelement("ul")}} von den standardmäßigen `40px` auf `20px` reduziert und dann denselben Betrag auf die Listenelemente gesetzt. Dadurch sind die Listenelemente insgesamt immer noch mit den geordneten Listenelementen und den Beschreibungslisten-Beschreibungen ausgerichtet, aber die Listenelemente haben etwas Padding, damit die Hintergrundbilder darin sitzen können. Wenn wir das nicht tun würden, würden die Hintergrundbilder mit dem Text des Listenelements überlappen, was unordentlich aussehen würde.
- Die {{cssxref("list-style-type")}} auf `none` gesetzt, sodass standardmäßig kein Aufzählungszeichen angezeigt wird. Wir werden {{cssxref("background")}}-Eigenschaften verwenden, um die Aufzählungszeichen zu verwalten.
- Ein Aufzählungszeichen auf jedes ungeordnete Listenelement eingefügt. Die relevanten Eigenschaften sind wie folgt:

  - {{cssxref("background-image")}}: Dies bezieht sich auf den Pfad zur Bilddatei, die Sie als Aufzählungszeichen verwenden möchten.
  - {{cssxref("background-position")}}: Dies definiert, wo im Hintergrund des ausgewählten Elements das Bild erscheint — in diesem Fall sagen wir `0 0`, was bedeutet, dass das Aufzählungszeichen ganz oben links in jedem Listenelement erscheint.
  - {{cssxref("background-size")}}: Das setzt die Größe des Hintergrundbildes. Wir möchten idealerweise, dass die Aufzählungszeichen die gleiche Größe wie die Listenelemente haben (oder sehr leicht kleiner oder größer). Wir verwenden eine Größe von `1.6rem` (`16px`), die sehr gut mit den `20px`-Padding passt, die wir für das Aufzählungszeichen vorgesehen haben — 16px plus 4px Abstand zwischen dem Aufzählungszeichen und dem Text des Listenelements funktioniert gut.
  - {{cssxref("background-repeat")}}: Standardmäßig wiederholen sich Hintergrundbilder, bis sie den verfügbaren Hintergrundraum füllen. Wir möchten in jedem Fall nur eine Kopie des Bildes einfügen, sodass wir dies auf einen Wert von `no-repeat` setzen.

Dies ergibt das folgende Resultat:

![eine ungeordnete Liste mit Aufzählungspunkten als kleine Sternbilder](list_formatting.png)

### list-style-Shorthand

Die oben genannten drei Eigenschaften können alle mit einer einzigen Shorthand-Eigenschaft, {{cssxref("list-style")}}, festgelegt werden. Zum Beispiel, das folgende CSS:

```css
ul {
  list-style-type: square;
  list-style-image: url(example.png);
  list-style-position: inside;
}
```

Könnte durch dieses ersetzt werden:

```css
ul {
  list-style: square url(example.png) inside;
}
```

Die Werte können in beliebiger Reihenfolge aufgelistet werden und Sie können einen, zwei oder alle drei verwenden (die Standardwerte, die für die nicht enthaltenen Eigenschaften verwendet werden, sind `disc`, `none` und `outside`). Wenn sowohl ein `type` als auch ein `image` angegeben sind, wird der Typ als Fallback verwendet, wenn das Bild aus irgendeinem Grund nicht geladen werden kann.

## Steuerung der Listenzählung

Manchmal möchten Sie möglicherweise anders auf einer geordneten Liste zählen — z.B. beginnen Sie mit einer anderen Zahl als 1, zählen rückwärts oder zählen in Schritten von mehr als 1. HTML und CSS haben einige Werkzeuge, die Ihnen hier helfen.

### start

Das [`start`](/de/docs/Web/HTML/Reference/Elements/ol#start)-Attribut ermöglicht es Ihnen, die Listen-Zählung mit einer anderen Zahl als 1 zu beginnen. Das folgende Beispiel:

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

Das [`reversed`](/de/docs/Web/HTML/Reference/Elements/ol#reversed)-Attribut beginnt mit dem Herunterzählen der Liste anstelle des Hochzählens. Das folgende Beispiel:

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
> Wenn es in einer umgekehrten Liste mehr Listenelemente gibt als der Wert des `start`-Attributs, wird die Zählung zu Null und dann in negative Werte fortgesetzt.

### value

Das [`value`](/de/docs/Web/HTML/Reference/Elements/li#value)-Attribut ermöglicht es Ihnen, Ihre Listenelemente auf bestimmte numerische Werte zu setzen. Das folgende Beispiel:

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
> Selbst wenn Sie einen nicht-zahlenmäßigen {{cssxref("list-style-type")}} verwenden, müssen Sie dennoch die entsprechenden numerischen Werte im `value`-Attribut verwenden.

## Aktives Lernen: Eine verschachtelte Liste stylen

In dieser aktiven Lerneinheit möchten wir, dass Sie das oben Gelernte anwenden und versuchen, eine verschachtelte Liste zu stylen. Wir haben Ihnen das HTML bereitgestellt und wir möchten, dass Sie:

1. Geben Sie der ungeordneten Liste quadratische Aufzählungszeichen.
2. Geben Sie den ungeordneten und den geordneten Listenelementen eine Zeilenhöhe von 1.5 ihrer Schriftgröße.
3. Geben Sie der geordneten Liste untere alphabetische Aufzählungszeichen.
4. Fühlen Sie sich frei, mit dem Listenbeispiel zu spielen, indem Sie Aufzählungstypen, Abstände oder was auch immer Sie finden, ausprobieren.

Wenn Sie einen Fehler machen, können Sie ihn jederzeit mit der _Zurücksetzen_-Schaltfläche zurücksetzen. Wenn Sie wirklich festsitzen, drücken Sie die _Lösung anzeigen_-Schaltfläche, um eine mögliche Antwort zu sehen.

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

Listen sind relativ einfach zu stylen, sobald Sie ein paar grundlegende Prinzipien und spezifische Eigenschaften kennen. Im nächsten Artikel werden wir uns mit Techniken zum Styling von Links befassen.

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Fundamentals", "Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling")}}
