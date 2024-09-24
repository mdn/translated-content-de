---
title: Listen stylen
slug: Learn/CSS/Styling_text/Styling_lists
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_text/Fundamentals", "Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text")}}

[Listen](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#lists) verhalten sich größtenteils wie jeder andere Text, aber es gibt einige spezifische CSS-Eigenschaften für Listen, die Sie kennen sollten, sowie einige bewährte Praktiken. Dieser Artikel erklärt alles.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (Studium
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), CSS-Grundlagen (Studium
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>),
        <a href="/de/docs/Learn/CSS/Styling_text/Fundamentals"
          >CSS Text- und Schriftarten-Grundlagen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit den bewährten Praktiken und Eigenschaften in Bezug auf
        das Stylen von Listen zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Ein einfaches Listenbeispiel

Beginnen wir mit einem einfachen Listenbeispiel. In diesem Artikel werden wir uns ungeordnete, geordnete und Definitionslisten ansehen — alle haben ähnliche Stilelemente und einige, die spezifisch für sie sind. Das ungestylte Beispiel ist [auf GitHub verfügbar](https://mdn.github.io/learning-area/css/styling-text/styling-lists/unstyled-list.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-text/styling-lists/unstyled-list.html) an).

Der HTML-Code für unser Listenbeispiel sieht folgendermaßen aus:

```html
<h2>Einkaufsliste (ungeordnet)</h2>

<p>
  Absatz zur Referenz, Absatz zur Referenz, Absatz zur Referenz,
  Absatz zur Referenz, Absatz zur Referenz, Absatz zur Referenz.
</p>

<ul>
  <li>Hummus</li>
  <li>Pita</li>
  <li>Grüner Salat</li>
  <li>Halloumi</li>
</ul>

<h2>Rezeptliste (geordnet)</h2>

<p>
  Absatz zur Referenz, Absatz zur Referenz, Absatz zur Referenz,
  Absatz zur Referenz, Absatz zur Referenz, Absatz zur Referenz.
</p>

<ol>
  <li>Pita toasten, abkühlen lassen, dann an der Kante aufschneiden.</li>
  <li>
    Den Halloumi in einer flachen, antihaftbeschichteten Pfanne anbraten, bis er auf beiden Seiten gebräunt ist.
  </li>
  <li>Den Salat waschen und schneiden.</li>
  <li>Pita mit Salat, Hummus und gebratenem Halloumi füllen.</li>
</ol>

<h2>Zutatenbeschreibungsliste</h2>

<p>
  Absatz zur Referenz, Absatz zur Referenz, Absatz zur Referenz,
  Absatz zur Referenz, Absatz zur Referenz, Absatz zur Referenz.
</p>

<dl>
  <dt>Hummus</dt>
  <dd>
    Ein dicker Dip/Sauce, meist aus Kichererbsen, die mit Tahini, Zitronensaft, Salz, Knoblauch und anderen Zutaten gemischt werden.
  </dd>
  <dt>Pita</dt>
  <dd>Ein weiches, leicht gelockertes Fladenbrot.</dd>
  <dt>Halloumi</dt>
  <dd>
    Ein halbharter, nicht gereifter, eingelegter Käse mit einem höheren Schmelzpunkt als üblich, meist aus Ziegen-/Schafsmilch gemacht.
  </dd>
  <dt>Grüner Salat</dt>
  <dd>Dieses grüne, gesunde Zeug, das viele von uns nur zum Dekorieren von Kebab verwenden.</dd>
</dl>
```

Wenn Sie jetzt das Live-Beispiel besuchen und die Listenelemente mit [Entwicklertools im Browser](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) untersuchen, werden Sie einige Standardstile bemerken:

- Die {{htmlelement("ul")}} und {{htmlelement("ol")}} Elemente haben einen oberen und unteren {{cssxref("margin")}} von `16px` (`1em`) und einen {{cssxref("padding-left")}} von `40px` (`2.5em`). Wenn das Attribut [`dir`](/de/docs/Web/HTML/Global_attributes/dir) für die Directionality auf rechts-nach-links (`rtl`) für `ul` und `ol` Elemente gesetzt ist, wird {{cssxref("padding-right")}} aktiv und sein Standardwert ist `40px` (`2.5em`).
- Die Listenelemente ({{htmlelement("li")}} Elemente) haben keine voreingestellten Abstände.
- Das {{htmlelement("dl")}} Element hat einen oberen und unteren {{cssxref("margin")}} von `16px` (`1em`), aber kein gesetztes Padding.
- Die {{htmlelement("dd")}} Elemente haben einen {{cssxref("margin-left")}} von `40px` (`2.5em`).
- Die {{htmlelement("p")}} Elemente, die wir zur Referenz aufgenommen haben, haben einen oberen und unteren {{cssxref("margin")}} von `16px` (`1em`) — das Gleiche wie die verschiedenen Listentypen.

## Umgang mit Listenabständen

Beim Gestalten von Listen müssen Sie deren Stile anpassen, damit sie den gleichen vertikalen Abstand zu den umgebenden Elementen (wie Absätze und Bilder; manchmal als vertikaler Rhythmus bezeichnet) und den gleichen horizontalen Abstand zueinander haben (Sie können das [fertig gestylte Beispiel](https://mdn.github.io/learning-area/css/styling-text/styling-lists/) auf GitHub ansehen und [den Quellcode finden](https://github.com/mdn/learning-area/blob/main/css/styling-text/styling-lists/index.html) ebenfalls).

Das für die Textgestaltung und den Abstand verwendete CSS sieht folgendermaßen aus:

```css
/* Allgemeine Stile */

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

/* Beschreibungsliste Stil */

dd,
dt {
  line-height: 1.5;
}

dt {
  font-weight: bold;
}
```

- Die erste Regel setzt eine seitenweite Schriftart und eine Basis-Schriftgröße von 10px. Diese werden von allem auf der Seite geerbt.
- Regeln 2 und 3 setzen relative Schriftgrößen für die Überschriften, verschiedene Listentypen (die Kinder der Listenelemente erben diese) und Absätze. Das bedeutet, dass jeder Absatz und jede Liste die gleiche Schriftgröße sowie den gleichen oberen und unteren Abstand haben werden, um den vertikalen Rhythmus konsistent zu halten.
- Regel 4 setzt den gleichen {{cssxref("line-height")}} für die Absätze und Listenelemente — so wird der Abstand zwischen den Zeilen in den Absätzen und den einzelnen Listenelementen gleich. Dies hilft auch, den vertikalen Rhythmus konsistent zu halten.
- Regeln 5 und 6 beziehen sich auf die Definitionsliste. Wir setzen die gleiche `line-height` auf die Begriffe und Beschreibungen der Definitionsliste wie bei den Absätzen und Listenelementen. Wiederum ist Konsistenz gut! Außerdem machen wir die Begriffe der Beschreibungen fett, damit sie optisch leichter auffallen.

## Listen-spezifische Stile

Nachdem wir uns die allgemeinen Abstands-Techniken für Listen angesehen haben, erkunden wir nun einige Listen-spezifische Eigenschaften. Es gibt drei Eigenschaften, die Sie kennen sollten, die auf {{htmlelement("ul")}} oder {{htmlelement("ol")}} Elemente angewendet werden können:

- {{cssxref("list-style-type")}}: Setzt den Typ der Aufzählungszeichen fest, die für die Liste verwendet werden sollen. Dazu gehören zum Beispiel quadratische oder runde Punkte für eine ungeordnete Liste oder Zahlen, Buchstaben oder römische Ziffern für eine geordnete Liste.
- {{cssxref("list-style-position")}}: Legt fest, ob die Aufzählungszeichen am Anfang jedes Elements innerhalb oder außerhalb der Listen erscheinen.
- {{cssxref("list-style-image")}}: Ermöglicht die Verwendung eines benutzerdefinierten Bildes für das Aufzählungszeichen statt eines einfachen Quadrats oder Kreises.

### Aufzählungsstile

Wie oben erwähnt, erlaubt es die Eigenschaft {{cssxref("list-style-type")}}, den Typ der Aufzählungszeichen für die Aufzählungspunkte festzulegen. In unserem Beispiel haben wir die geordnete Liste auf Großbuchstaben römische Ziffern gesetzt mit:

```css
ol {
  list-style-type: upper-roman;
}
```

Dies ergibt folgendes Aussehen:

![eine geordnete Liste mit den Aufzählungspunkten, die außerhalb des Listentexts erscheinen](outer-bullets.png)

Sie können viele weitere Optionen finden, indem Sie die Referenzseite von {{cssxref("list-style-type")}} besuchen.

### Position der Aufzählungszeichen

Die Eigenschaft {{cssxref("list-style-position")}} legt fest, ob die Aufzählungszeichen innerhalb der Listenelemente oder außerhalb von ihnen vor dem Beginn jedes Elements erscheinen. Der Standardwert ist `outside`, wodurch die Aufzählungszeichen außerhalb der Listenelemente platziert werden, wie oben zu sehen.

Wenn Sie den Wert auf `inside` setzen, befinden sich die Aufzählungszeichen innerhalb der Zeilen:

```css
ol {
  list-style-type: upper-roman;
  list-style-position: inside;
}
```

![eine geordnete Liste mit den Aufzählungspunkten, die innerhalb des Listentexts erscheinen](inner-bullets.png)

### Verwendung eines benutzerdefinierten Aufzählungsbilds

Die Eigenschaft {{cssxref("list-style-image")}} ermöglicht es Ihnen, ein benutzerdefiniertes Bild für Ihr Aufzählungszeichen zu verwenden. Die Syntax ist ziemlich einfach:

```css
ul {
  list-style-image: url(star.svg);
}
```

Diese Eigenschaft ist jedoch etwas eingeschränkt in Bezug auf die Kontrolle über Position, Größe usw. der Aufzählungszeichen. Sie sind besser beraten, die Eigenschaften der {{cssxref("background")}} Familie zu verwenden, die Sie im Artikel zu [Hintergründen und Rahmen](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders) kennengelernt haben. Hier ist ein Vorgeschmack!

In unserem fertigen Beispiel haben wir die ungeordnete Liste wie folgt gestaltet (neben dem, was Sie bereits oben gesehen haben):

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

- Das {{cssxref("padding-left")}} der {{htmlelement("ul")}} von den standardmäßigen `40px` auf `20px` reduziert, dann den gleichen Betrag auf die Listenelemente gesetzt. Dadurch sind die Listenelemente insgesamt weiterhin mit den geordneten Listenelementen und den Definitionen der Definitionsliste ausgerichtet, die Listenelemente haben jedoch etwas Polsterung, damit die Hintergrundbilder darin sitzen können. Wenn wir das nicht tun, würden sich die Hintergrundbilder mit dem Listentext überlappen, was unordentlich aussehen würde.
- Das {{cssxref("list-style-type")}} auf `none` gesetzt, sodass kein Aufzählungszeichen standardmäßig erscheint. Wir verwenden {{cssxref("background")}} Eigenschaften, um die Punkte zu verwalten.
- Ein Aufzählungszeichen auf jedes ungeordnete Listenelement eingefügt. Die relevanten Eigenschaften sind wie folgt:

  - {{cssxref("background-image")}}: Dies verweist auf den Pfad zur Bilddatei, die Sie als Aufzählungszeichen verwenden möchten.
  - {{cssxref("background-position")}}: Dies bestimmt, wo im Hintergrund des ausgewählten Elements das Bild erscheint — in diesem Fall sagen wir `0 0`, was bedeutet, dass das Aufzählungszeichen in der oberen linken Ecke jedes Listenelements erscheint.
  - {{cssxref("background-size")}}: Dies setzt die Größe des Hintergrundbildes. Idealerweise sollten die Aufzählungszeichen die gleiche Größe wie die Listenelemente haben (oder sehr leicht kleiner oder größer). Wir verwenden eine Größe von `1.6rem` (`16px`), was sehr gut mit dem `20px` Polster funktioniert, das wir für das Aufzählungszeichen vorgesehen haben — 16px plus 4px Platz zwischen dem Aufzählungszeichen und dem Listentext funktioniert gut.
  - {{cssxref("background-repeat")}}: Standardmäßig wiederholen sich Hintergrundbilder, bis sie den verfügbaren Hintergrundraum ausfüllen. Wir möchten in jedem Fall nur eine Kopie des Bildes einfügen, daher setzen wir dies auf einen Wert von `no-repeat`.

Dies gibt uns das folgende Ergebnis:

![eine ungeordnete Liste mit den Aufzählungspunkten als kleine Sternbilder](list_formatting.png)

### list-style Kurzform

Die oben genannten drei Eigenschaften können alle mit einer einzigen Kurzform-Eigenschaft gesetzt werden: {{cssxref("list-style")}}. Zum Beispiel könnte das folgende CSS:

```css
ul {
  list-style-type: square;
  list-style-image: url(example.png);
  list-style-position: inside;
}
```

durch folgendes ersetzt werden:

```css
ul {
  list-style: square url(example.png) inside;
}
```

Die Werte können in beliebiger Reihenfolge aufgeführt werden, und Sie können einen, zwei oder alle drei verwenden (die Standardwerte, die für die nicht angegebenen Eigenschaften verwendet werden, sind `disc`, `none` und `outside`). Wenn sowohl ein `type` als auch ein `image` angegeben sind, wird der Typ als Fallback verwendet, wenn das Bild aus irgendeinem Grund nicht geladen werden kann.

## Steuerung der Nummerierung von Listen

Manchmal möchten Sie vielleicht eine nummerierte Liste anders zählen — z.B. bei einer anderen Zahl als der 1 beginnen, rückwärts zählen oder in Schritten von mehr als 1 zählen. HTML und CSS bieten Ihnen hier einige Tools.

### start

Das [`start`](/de/docs/Web/HTML/Element/ol#start) Attribut ermöglicht es Ihnen, die Listenzählung mit einer anderen Zahl als 1 zu beginnen. Das folgende Beispiel:

```html
<ol start="4">
  <li>Pita toasten, abkühlen lassen, dann an der Kante aufschneiden.</li>
  <li>
    Den Halloumi in einer flachen, antihaftbeschichteten Pfanne anbraten, bis er auf beiden Seiten gebräunt ist.
  </li>
  <li>Den Salat waschen und schneiden.</li>
  <li>Pita mit Salat, Hummus und gebratenem Halloumi füllen.</li>
</ol>
```

Gibt Ihnen diese Ausgabe:

{{ EmbedLiveSample('start', '100%', 150) }}

### reversed

Das [`reversed`](/de/docs/Web/HTML/Element/ol#reversed) Attribut startet die Listenzählung nach unten statt nach oben. Das folgende Beispiel:

```html
<ol start="4" reversed>
  <li>Pita toasten, abkühlen lassen, dann an der Kante aufschneiden.</li>
  <li>
    Den Halloumi in einer flachen, antihaftbeschichteten Pfanne anbraten, bis er auf beiden Seiten gebräunt ist.
  </li>
  <li>Den Salat waschen und schneiden.</li>
  <li>Pita mit Salat, Hummus und gebratenem Halloumi füllen.</li>
</ol>
```

Gibt Ihnen diese Ausgabe:

{{ EmbedLiveSample('reversed', '100%', 150) }}

> [!NOTE]
> Wenn es mehr Listenelemente in einer umgekehrten Liste gibt als den Wert des `start` Attributs, geht die Zählung weiter bis Null und dann in negative Werte.

### value

Das [`value`](/de/docs/Web/HTML/Element/li#value) Attribut ermöglicht es Ihnen, Ihre Listenelemente auf bestimmte numerische Werte einzustellen. Das folgende Beispiel:

```html
<ol>
  <li value="2">Pita toasten, abkühlen lassen, dann an der Kante aufschneiden.</li>
  <li value="4">
    Den Halloumi in einer flachen, antihaftbeschichteten Pfanne anbraten, bis er auf beiden Seiten gebräunt ist.
  </li>
  <li value="6">Den Salat waschen und schneiden.</li>
  <li value="8">Pita mit Salat, Hummus und gebratenem Halloumi füllen.</li>
</ol>
```

Gibt Ihnen diese Ausgabe:

{{ EmbedLiveSample('value', '100%', 150) }}

> [!NOTE]
> Selbst wenn Sie einen nicht numerischen {{cssxref("list-style-type")}} verwenden, müssen Sie dennoch die entsprechenden numerischen Werte im `value` Attribut verwenden.

## Aktives Lernen: Stylen einer verschachtelten Liste

In dieser aktiven Lernsitzung möchten wir, dass Sie das, was Sie oben gelernt haben, nutzen und versuchen, eine verschachtelte Liste zu stylen. Wir haben Ihnen das HTML bereitgestellt und möchten, dass Sie:

1. Geben Sie der ungeordneten Liste quadratische Aufzählungszeichen.
2. Geben Sie den Elementen der ungeordneten und geordneten Liste ein `line-height` von 1.5 ihrer Schriftgröße.
3. Geben Sie der geordneten Liste alphabetische Aufzählungszeichen in Kleinbuchstaben.
4. Fühlen Sie sich frei, mit dem Listenbeispiel zu spielen, indem Sie mit Aufzählungszeichen, Abständen oder allem anderen experimentieren, was Sie finden können.

Wenn Sie einen Fehler machen, können Sie ihn immer mit dem _Zurücksetzen_ Button zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie den _Lösung anzeigen_ Button, um eine mögliche Antwort zu sehen.

```html hidden
<div
  class="body-wrapper"
  style="font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;">
  <h2>HTML Eingabe</h2>
  <textarea
    id="code"
    class="html-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
<ul>
  <li>Zuerst zünden Sie die Kerze an.</li>
  <li>Dann öffnen Sie die Box.</li>
  <li>Zuletzt legen Sie die drei magischen Gegenstände in der exakten Reihenfolge in die Box, um den Zauber zu vollenden:
    <ol>
      <li>Das Buch der Zaubersprüche</li>
      <li>Der glänzende Stab</li>
      <li>Die Goblin-Statue</li>
    </ol>
  </li>
</ul>
  </textarea>

  <h2>CSS Eingabe</h2>
  <textarea
    id="code"
    class="css-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;"></textarea>

  <h2>Ausgabe</h2>
  <div
    class="output"
    style="width: 90%;height: 12em;padding: 10px;border: 1px solid #0095dd;overflow: auto;"></div>
  <div class="controls">
    <input
      id="reset"
      type="button"
      value="Zurücksetzen"
      style="margin: 10px 10px 0 0;" />
    <input
      id="solution"
      type="button"
      value="Lösung anzeigen"
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

Sobald Sie einige grundlegende Prinzipien und spezifische Eigenschaften kennen, wird es relativ einfach, das Styling von Listen zu beherrschen. Im nächsten Artikel werden wir zu [Techniken der Linkgestaltung](/de/docs/Learn/CSS/Styling_text/Styling_links) übergehen.

## Siehe auch

CSS-Zähler bieten erweiterte Tools zur Anpassung der Listenzählung und des Stylings, sind jedoch ziemlich komplex. Wir empfehlen, sich damit zu befassen, wenn Sie Ihr Wissen erweitern möchten. Siehe:

- {{cssxref("@counter-style")}}
- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}

{{PreviousMenuNext("Learn/CSS/Styling_text/Fundamentals", "Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text")}}
