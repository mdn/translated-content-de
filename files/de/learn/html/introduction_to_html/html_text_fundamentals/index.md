---
title: HTML Textgrundlagen
slug: Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML")}}

Eine der Hauptaufgaben von HTML besteht darin, Text eine Struktur zu geben, damit ein Browser ein HTML-Dokument so anzeigen kann, wie es der Entwickler beabsichtigt. Dieser Artikel erklärt, wie [HTML](/de/docs/Glossary/HTML) verwendet werden kann, um eine Textseite zu strukturieren, indem Überschriften und Absätze hinzugefügt, Wörter betont, Listen erstellt und mehr gemacht werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Erste Schritte mit HTML</a
        >behandelt werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie Sie eine einfache Textseite markieren, um ihr Struktur und
        Bedeutung zu geben — einschließlich Absätzen, Überschriften, Listen, Hervorhebungen und Zitaten.
      </td>
    </tr>
  </tbody>
</table>

## Die Grundlagen: Überschriften und Absätze

Der meiste strukturierte Text besteht aus Überschriften und Absätzen, sei es in einer Geschichte, einer Zeitung, einem Schulbuch, einer Zeitschrift usw.

![Ein Beispiel für eine Titelseite einer Zeitung, die die Verwendung einer Hauptüberschrift, von Unterüberschriften und Absätzen zeigt.](newspaper_small.jpg)

Strukturiertes Inhalt macht das Leseerlebnis einfacher und angenehmer.

In HTML muss jeder Absatz in einem {{htmlelement("p")}}-Element umschlossen werden, wie folgt:

```html
<p>I am a paragraph, oh yes I am.</p>
```

Jede Überschrift muss in einem Überschriftselement umschlossen werden:

```html
<h1>I am the title of the story.</h1>
```

Es gibt sechs Überschriftselemente: {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}, {{htmlelement("Heading_Elements", "h3")}}, {{htmlelement("Heading_Elements", "h4")}}, {{htmlelement("Heading_Elements", "h5")}} und {{htmlelement("Heading_Elements", "h6")}}. Jedes Element repräsentiert eine andere Ebene des Inhalts im Dokument; `<h1>` repräsentiert die Hauptüberschrift, `<h2>` steht für Unterüberschriften, `<h3>` für Unter-Unterüberschriften und so weiter.

### Implementierung der Strukturhierarchie

Zum Beispiel steht in dieser Geschichte das `<h1>`-Element für den Titel der Geschichte, die `<h2>`-Elemente repräsentieren den Titel jedes Kapitels und die `<h3>`-Elemente repräsentieren Unterabschnitte jedes Kapitels:

```html
<h1>The Crushing Bore</h1>

<p>By Chris Mills</p>

<h2>Chapter 1: The dark night</h2>

<p>
  It was a dark night. Somewhere, an owl hooted. The rain lashed down on the…
</p>

<h2>Chapter 2: The eternal silence</h2>

<p>Our protagonist could not so much as a whisper out of the shadowy figure…</p>

<h3>The specter speaks</h3>

<p>
  Several more hours had passed, when all of a sudden the specter sat bolt
  upright and exclaimed, "Please have mercy on my soul!"
</p>
```

Es liegt wirklich an Ihnen, was die beteiligten Elemente repräsentieren, solange die Hierarchie sinnvoll ist. Bei der Erstellung solcher Strukturen sollten Sie jedoch einige Best Practices beachten:

- Vorzugsweise sollten Sie nur ein `<h1>` pro Seite verwenden—dies ist die oberste Ebene der Überschrift und alle anderen liegen hierarchisch darunter.
- Stellen Sie sicher, dass Sie die Überschriften in der richtigen Reihenfolge in der Hierarchie verwenden. Verwenden Sie keine `<h3>`-Elemente, um Unterüberschriften darzustellen, gefolgt von `<h2>`-Elementen, um Unter-Unterüberschriften darzustellen—das ist nicht logisch und führt zu merkwürdigen Ergebnissen.
- Von den sechs verfügbaren Überschriftsebenen sollten Sie versuchen, nicht mehr als drei pro Seite zu verwenden, es sei denn, Sie halten es für notwendig. Dokumente mit vielen Ebenen (zum Beispiel eine tiefe Überschriftenhierarchie) werden unhandlich und schwer zu navigieren. In solchen Fällen ist es ratsam, den Inhalt auf mehrere Seiten zu verteilen, wenn möglich.

### Warum benötigen wir Struktur?

Um diese Frage zu beantworten, werfen wir einen Blick auf [text-start.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html)—den Ausgangspunkt unseres laufenden Beispiels für diesen Artikel (ein schönes Hummus-Rezept). Sie sollten eine Kopie dieser Datei auf Ihrem lokalen Rechner speichern, da Sie sie für die späteren Übungen benötigen. Der Körper dieses Dokuments enthält derzeit mehrere Inhalte. Sie sind in keiner Weise gekennzeichnet, aber sie sind durch Zeilenumbrüche getrennt (Eingabetaste/Return gedrückt, um zur nächsten Zeile zu gelangen).

Wenn Sie das Dokument jedoch in Ihrem Browser öffnen, werden Sie sehen, dass der Text als großer Block erscheint!

![Eine Webseite, die eine Wand aus unformatiertem Text zeigt, weil es keine Elemente auf der Seite gibt, um sie zu strukturieren.](screen_shot_2017-03-29_at_09.20.35.png)

Das liegt daran, dass keine Elemente vorhanden sind, um dem Inhalt Struktur zu verleihen, sodass der Browser nicht weiß, was eine Überschrift und was ein Absatz ist. Weiterhin:

- Benutzer, die sich eine Webseite ansehen, neigen dazu, schnell zu scannen, um relevante Inhalte zu finden, und lesen oft zunächst nur die Überschriften. (Wir [verbringen normalerweise sehr kurze Zeit auf einer Webseite](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/).) Wenn sie innerhalb weniger Sekunden nichts Nützliches sehen können, werden sie wahrscheinlich frustriert und gehen woanders hin.
- Suchmaschinen, die Ihre Seite indexieren, betrachten den Inhalt der Überschriften als wichtige Schlüsselwörter zur Beeinflussung des Suchrankings der Seite. Ohne Überschriften wird Ihre Seite in Bezug auf [SEO](/de/docs/Glossary/SEO) (Suchmaschinenoptimierung) schlecht abschneiden.
- Stark sehbehinderte Menschen lesen Webseiten oft nicht; sie hören sie sich stattdessen an. Dies geschieht mit Software, die als [Screen Reader](https://en.wikipedia.org/wiki/Screen_reader) bezeichnet wird. Diese Software bietet Möglichkeiten, schnell auf bestimmten Textinhalt zuzugreifen. Unter den verschiedenen Techniken, die verwendet werden, bietet sie eine Gliederung des Dokuments durch Vorlesen der Überschriften, sodass ihre Benutzer die benötigten Informationen schnell finden können. Wenn keine Überschriften verfügbar sind, müssen sie sich das gesamte Dokument vorlesen lassen.
- Um Inhalt mit [CSS](/de/docs/Glossary/CSS) zu gestalten oder um interessante Dinge mit [JavaScript](/de/docs/Glossary/JavaScript) zu machen, müssen Elemente den relevanten Inhalt umschließen, sodass CSS/JavaScript diesen effektiv ansprechen können.

Deshalb müssen wir unserem Inhalt strukturelle Auszeichnung geben.

### Aktives Lernen: Unserem Inhalt Struktur geben

Lassen Sie uns mit einem Live-Beispiel direkt einsteigen. Fügen Sie im untenstehenden Beispiel Elemente zum Rohtext im _Eingabefeld_ hinzu, sodass er als Überschrift und zwei Absätze im _Ausgabefeld_ erscheint.

Wenn Sie einen Fehler machen, können Sie immer die _Zurücksetzen_-Schaltfläche verwenden. Wenn Sie nicht weiterkommen, drücken Sie die _Lösung anzeigen_-Schaltfläche, um die Antwort zu sehen.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
My short story I am a statistician and my name is Trish.

My legs are made of cardboard and I am married to a fish.
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
const code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

const htmlSolution = `<h1>My short story</h1>
<p>
  I am a statistician and my name is Trish.
</p>
<p>
  My legs are made of cardboard and I am married to a fish.
</p>`;

let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// Stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead
textarea.onkeydown = (e) => {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code
textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Giving_our_content_structure', 700, 400, "", "") }}

### Warum brauchen wir Semantik?

Semantik wird überall um uns herum verwendet—wir verlassen uns auf frühere Erfahrungen, um uns zu sagen, welche Funktion ein Alltagsgegenstand hat; wenn wir etwas sehen, wissen wir, was seine Funktion sein wird. So erwarten wir zum Beispiel, dass eine rote Ampel "Stopp" bedeutet, und eine grüne Ampel "Gehen". Es kann sehr schnell kompliziert werden, wenn die falsche Semantik angewendet wird. (Verwendet irgendein Land Rot, um "Gehen" zu bedeuten? Wir hoffen es nicht.)

Ähnlich müssen wir sicherstellen, dass wir die richtigen Elemente verwenden, um unserem Inhalt die richtige Bedeutung, Funktion oder Erscheinung zu geben. In diesem Kontext ist das {{htmlelement("Heading_Elements", "h1")}}-Element auch ein semantisches Element, das dem Text, den es umschließt, die Rolle (oder Bedeutung) von "einer obersten Ebene der Überschrift auf Ihrer Seite" gibt.

```html
<h1>This is a top level heading</h1>
```

Standardmäßig wird der Browser ihm eine große Schriftgröße geben, damit es wie eine Überschrift aussieht (obwohl Sie es mittels CSS so gestalten könnten, wie Sie möchten). Wichtiger ist, dass sein semantischer Wert auf verschiedene Weise verwendet wird, z.B. von Suchmaschinen und Screenreadern (wie oben erwähnt).

Andererseits könnten Sie jedes Element _wie_ eine Überschrift auf oberster Ebene _aussehen_ lassen. Betrachten Sie das folgende Beispiel:

```html
<span style="font-size: 32px; margin: 21px 0; display: block;">
  Is this a top level heading?
</span>
```

Dies ist ein {{htmlelement("span")}}-Element. Es hat keine Semantik. Sie verwenden es, um Inhalt zu umschließen, wenn Sie CSS darauf anwenden (oder etwas damit in JavaScript tun) wollen, ohne ihm eine zusätzliche Bedeutung zu geben. (Sie werden später im Kurs mehr darüber erfahren.) Wir haben ihm einige CSS zugewiesen, damit es wie eine Überschrift auf oberster Ebene aussieht, aber da es keinen semantischen Wert hat, wird es keine der zusätzlichen Vorteile erhalten, die oben beschrieben wurden. Es ist eine gute Idee, das relevante HTML-Element für die jeweilige Aufgabe zu verwenden.

## Listen

Wenden wir uns nun den Listen zu. Listen sind im Leben allgegenwärtig—von Ihrer Einkaufsliste über die Liste der Anweisungen, die Sie unbewusst befolgen, um täglich zu Ihrem Haus zu gelangen, bis zu den Listen der Anweisungen, die Sie in diesen Tutorials befolgen! Im Web gibt es drei Arten von Listen: ungeordnet, geordnet und Beschreibung.

Ungeordnete und geordnete Listen sind sehr häufig, und sie werden in diesem Abschnitt behandelt. Beschreibungsliste sind weniger häufig, und wir werden sie in [Fortgeschrittene Textformatierung](/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting) behandeln.

### Ungeordnet

Ungeordnete Listen werden verwendet, um Listen von Elementen zu markieren, bei denen die Reihenfolge der Elemente keine Rolle spielt. Nehmen wir als Beispiel eine Einkaufsliste:

```plain
milk
eggs
bread
hummus
```

Jede ungeordnete Liste beginnt mit einem {{htmlelement("ul")}}-Element—dies umschließt alle Listenelemente:

```html-nolint
<ul>
  milk
  eggs
  bread
  hummus
</ul>
```

Der letzte Schritt ist, jedes Listenelement in einem {{htmlelement("li")}} (Listenelement)-Element zu umschließen:

```html
<ul>
  <li>milk</li>
  <li>eggs</li>
  <li>bread</li>
  <li>hummus</li>
</ul>
```

#### Aktives Lernen: Eine ungeordnete Liste markieren

Versuchen Sie, das Live-Beispiel unten zu bearbeiten, um Ihre eigene HTML-ungeordnete Liste zu erstellen.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
milk
eggs
bread
hummus
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
const code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

const htmlSolution =
  "<ul>\n<li>milk</li>\n<li>eggs</li>\n<li>bread</li>\n<li>hummus</li>\n</ul>";
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = (e) => {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code
textarea.onkeyup = () => {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Marking_up_an_unordered_list', 700, 400, "", "") }}

### Geordnet

Geordnete Listen sind Listen, bei denen die Reihenfolge der Elemente _eine Rolle spielt_. Nehmen wir als Beispiel einen Satz von Anweisungen:

```plain
Drive to the end of the road
Turn right
Go straight across the first two roundabouts
Turn left at the third roundabout
The school is on your right, 300 meters up the road
```

Die Markup-Struktur ist die gleiche wie bei ungeordneten Listen, mit dem Unterschied, dass Sie die Listenelemente in einem {{htmlelement("ol")}}-Element umschließen müssen, anstelle von `<ul>`:

```html
<ol>
  <li>Drive to the end of the road</li>
  <li>Turn right</li>
  <li>Go straight across the first two roundabouts</li>
  <li>Turn left at the third roundabout</li>
  <li>The school is on your right, 300 meters up the road</li>
</ol>
```

#### Aktives Lernen: Eine geordnete Liste markieren

Versuchen Sie, das Live-Beispiel unten zu bearbeiten, um Ihre eigene HTML-geordnete Liste zu erstellen.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="input" style="min-height: 200px; width: 95%">
Drive to the end of the road
Turn right
Go straight across the first two roundabouts
Turn left at the third roundabout
The school is on your right, 300 meters up the road
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
const code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

const htmlSolution =
  "<ol>\n<li>Drive to the end of the road</li>\n<li>Turn right</li>\n<li>Go straight across the first two roundabouts</li>\n<li>Turn left at the third roundabout</li>\n<li>The school is on your right, 300 meters up the road</li>\n</ol>";
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = (e) => {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code
textarea.onkeyup = () => {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Marking_up_an_ordered_list', 700, 500, "", "") }}

### Aktives Lernen: Unsere Rezeptseite markieren

An diesem Punkt im Artikel haben Sie alle Informationen, die Sie benötigen, um unsere Beispiel-Rezeptseite zu markieren. Sie können wählen, ob Sie entweder eine lokale Kopie unserer [text-start.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html)-Startdatei speichern und die Arbeit dort erledigen oder es im bearbeitbaren Beispiel unten tun möchten. Eine lokale Bearbeitung wäre wahrscheinlich besser, da Sie dann die Arbeit, die Sie tun, speichern können, während Sie die Eingaben im bearbeitbaren Beispiel verlieren, die nächste Mal, wenn Sie die Seite öffnen. Beide Ansätze haben Vor- und Nachteile.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="input" style="min-height: 200px; width: 95%">
Quick hummus recipe

  This recipe makes quick, tasty hummus, with no messing. It has been adapted from a number of different recipes that I have read over the years.

  Hummus is a delicious thick paste used heavily in Greek and Middle Eastern dishes. It is very tasty with salad, grilled meats and pitta breads.

  Ingredients

  1 can (400g) of chick peas (garbanzo beans)
  175g of tahini
  6 sundried tomatoes
  Half a red pepper
  A pinch of cayenne pepper
  1 clove of garlic
  A dash of olive oil

  Instructions

  Remove the skin from the garlic, and chop coarsely
  Remove all the seeds and stalk from the pepper, and chop coarsely
  Add all the ingredients into a food processor
  Process all the ingredients into a paste
  If you want a coarse "chunky" hummus, process it for a short time
  If you want a smooth hummus, process it for a longer time

  For a different flavor, you could try blending in a small measure of lemon and coriander, chili pepper, lime and chipotle, harissa and mint, or spinach and feta cheese. Experiment and see what works for you.

  Storage

  Refrigerate the finished hummus in a sealed container. You should be able to use it for about a week after you've made it. If it starts to become fizzy, you should definitely discard it.

  Hummus is suitable for freezing; you should thaw it and use it within a couple of months.
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
const code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

const htmlSolution =
  '<h1>Quick hummus recipe</h1>\n\n<p>This recipe makes quick, tasty hummus, with no messing. It has been adapted from a number of different recipes that I have read over the years.</p>\n\n<p>Hummus is a delicious thick paste used heavily in Greek and Middle Eastern dishes. It is very tasty with salad, grilled meats and pitta breads.</p>\n\n<h2>Ingredients</h2>\n\n<ul>\n<li>1 can (400g) of chick peas (garbanzo beans)</li>\n<li>175g of tahini</li>\n<li>6 sundried tomatoes</li>\n<li>Half a red pepper</li>\n<li>A pinch of cayenne pepper</li>\n<li>1 clove of garlic</li>\n<li>A dash of olive oil</li>\n</ul>\n\n<h2>Instructions</h2>\n\n<ol>\n<li>Remove the skin from the garlic, and chop coarsely.</li>\n<li>Remove all the seeds and stalk from the pepper, and chop coarsely.</li>\n<li>Add all the ingredients into a food processor.</li>\n<li>Process all the ingredients into a paste.</li>\n<li>If you want a coarse "chunky" hummus, process it for a short time.</li>\n<li>If you want a smooth hummus, process it for a longer time.</li>\n</ol>\n\n<p>For a different flavor, you could try blending in a small measure of lemon and coriander, chili pepper, lime and chipotle, harissa and mint, or spinach and feta cheese. Experiment and see what works for you.</p>\n\n<h2>Storage</h2>\n\n<p>Refrigerate the finished hummus in a sealed container. You should be able to use it for about a week after you\'ve made it. If it starts to become fizzy, you should definitely discard it.</p>\n\n<p>Hummus is suitable for freezing; you should thaw it and use it within a couple of months.</p>';
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = (e) => {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code
textarea.onkeyup = () => {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Marking_up_our_recipe_page', 900, 620, "", "") }}

Wenn Sie nicht weiterkommen, können Sie immer die _Lösung anzeigen_-Schaltfläche drücken oder unser [text-complete.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-complete.html)-Beispiel in unserem GitHub-Repo ansehen.

### Verschachtelte Listen

Es ist vollkommen in Ordnung, eine Liste innerhalb einer anderen zu verschachteln. Sie möchten möglicherweise einige Unterpunkte unter einem Hauptpunkt einfügen. Nehmen wir die zweite Liste aus unserem Rezeptbeispiel:

```html
<ol>
  <li>Remove the skin from the garlic, and chop coarsely.</li>
  <li>Remove all the seeds and stalk from the pepper, and chop coarsely.</li>
  <li>Add all the ingredients into a food processor.</li>
  <li>Process all the ingredients into a paste.</li>
  <li>If you want a coarse "chunky" hummus, process it for a short time.</li>
  <li>If you want a smooth hummus, process it for a longer time.</li>
</ol>
```

Da die letzten beiden Punkte sehr eng verbunden mit dem vorhergehenden Punkt sind (sie lesen sich wie Unterpunkt-Instruktionen oder Entscheidungen, die unter den Punkt passen), könnte es sinnvoll sein, sie in einer eigenen ungeordneten Liste innerhalb des aktuellen vierten Punktes zu verschachteln. Das würde so aussehen:

```html
<ol>
  <li>Remove the skin from the garlic, and chop coarsely.</li>
  <li>Remove all the seeds and stalk from the pepper, and chop coarsely.</li>
  <li>Add all the ingredients into a food processor.</li>
  <li>
    Process all the ingredients into a paste.
    <ul>
      <li>
        If you want a coarse "chunky" hummus, process it for a short time.
      </li>
      <li>If you want a smooth hummus, process it for a longer time.</li>
    </ul>
  </li>
</ol>
```

Versuchen Sie, zum vorherigen aktiven Lernbeispiel zurückzukehren und die zweite Liste so zu aktualisieren.

## Hervorhebung und Wichtigkeit

In der menschlichen Sprache betonen wir oft bestimmte Wörter, um die Bedeutung eines Satzes zu ändern, und wir möchten oft bestimmte Wörter als wichtig oder andersartig markieren. HTML bietet verschiedene semantische Elemente, die es uns ermöglichen, Textinhalte mit solchen Effekten zu markieren, und in diesem Abschnitt betrachten wir einige der gebräuchlichsten.

### Hervorhebung

Wenn wir in der gesprochenen Sprache etwas betonen wollen, _betonen_ wir bestimmte Wörter, um die Bedeutung dessen, was wir sagen, subtil zu ändern. In der geschriebenen Sprache neigen wir dazu, Wörter durch Kursivschrift hervorzuheben. Zum Beispiel haben die folgenden zwei Sätze unterschiedliche Bedeutungen.

> Ich bin froh, dass Sie nicht zu spät sind.
>
> Ich bin _froh_, dass Sie nicht _zu spät_ sind.

Der erste Satz klingt wirklich erleichtert, dass die Person nicht zu spät war. Im Gegensatz dazu klingt der zweite Satz, mit sowohl "froh" als auch "zu spät" in Kursivschrift, sarkastisch oder passiv-aggressiv, was eine Verärgerung darüber ausdrückt, dass die Person etwas zu spät kam.

In HTML verwenden wir das {{htmlelement("em")}} (Betonung)-Element, um solche Fälle zu markieren. Zusätzlich dazu, das Dokument interessanter zu machen, werden diese von Screenreadern erkannt, die so konfiguriert werden können, dass sie sie in einem anderen Ton vorlesen. Browser gestalten dies standardmäßig kursiv, jedoch sollten Sie dieses Tag nicht ausschließlich verwenden, um Kursivschrift zu erzeugen. Dafür würden Sie ein {{htmlelement("span")}}-Element und etwas CSS verwenden oder vielleicht ein {{htmlelement("i")}}-Element (siehe unten).

```html
<p>I am <em>glad</em> you weren't <em>late</em>.</p>
```

### Starke Wichtigkeit

Um wichtige Wörter zu betonen, neigen wir dazu, sie in der gesprochenen Sprache stark zu betonen und in der geschriebenen Sprache **fett** zu schreiben. Beispielsweise:

> Diese Flüssigkeit ist **hochgiftig**.
>
> Ich zähle auf Sie. **Seien Sie nicht** zu spät!

In HTML verwenden wir das {{htmlelement("strong")}} (starke Wichtigkeit)-Element, um solche Fälle zu markieren. Zusätzlich dazu, das Dokument nützlicher zu machen, werden auch diese von Screenreadern erkannt, die so konfiguriert werden können, dass sie sie in einem anderen Ton vorlesen. Browser gestalten dies standardmäßig fett, jedoch sollten Sie dieses Tag nicht ausschließlich verwenden, um Fettschrift zu erzeugen. Dafür würden Sie ein {{htmlelement("span")}}-Element und etwas CSS verwenden oder vielleicht ein {{htmlelement("b")}}-Element (siehe unten).

```html
<p>This liquid is <strong>highly toxic</strong>.</p>

<p>I am counting on you. <strong>Do not</strong> be late!</p>
```

Sie können strong und emphasis ineinander verschachteln, falls gewünscht:

```html-nolint
<p>This liquid is <strong>highly toxic</strong> — if you drink it, <strong>you may <em>die</em></strong>.</p>
```

{{EmbedLiveSample('Strong importance')}}

### Aktives Lernen: Lass uns wichtig sein

In diesem aktiven Lernbereich haben wir ein bearbeitbares Beispiel bereitgestellt. Darin möchten wir, dass Sie versuchen, Hervorhebungen und starke Wichtigkeit zu den Wörtern hinzuzufügen, die Sie für nötig halten, nur um ein wenig Übung zu haben.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="input" style="min-height: 200px; width: 95%">
<h1>Important notice</h1>
<p>On Sunday January 9th 2010, a gang of goths were
  spotted stealing several garden gnomes from a
  shopping center in downtown Milwaukee. They were
  all wearing green jumpsuits and silly hats, and
  seemed to be having a whale of a time. If anyone
   has any information about this incident, please
    contact the police now.</p>
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
const code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

const htmlSolution =
  "<h1>Important notice</h1>\n<p>On <strong>Sunday January 9th 2010</strong>, a gang of <em>goths</em> were spotted stealing <strong><em>several</em> garden gnomes</strong> from a shopping center in downtown <strong>Milwaukee</strong>. They were all wearing <em>green jumpsuits</em> and <em>silly hats</em>, and seemed to be having a whale of a time. If anyone has <strong>any</strong> information about this incident, please contact the police <strong>now</strong>.</p>";
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// Stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead
textarea.onkeydown = (e) => {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code
textarea.onkeyup = () => {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Lets_be_important', 700, 520, "", "") }}

### Kursiv, fett, unterstrichen…

Die bisher besprochenen Elemente haben klare, damit verbundene Semantiken. Die Situation mit {{htmlelement("b")}}, {{htmlelement("i")}} und {{htmlelement("u")}} ist etwas komplizierter. Sie entstanden, damit Leute fett, kursiv oder unterstrichen schreiben konnten, in einer Ära, in der CSS noch schlecht oder gar nicht unterstützt wurde. Elemente wie diese, die nur die Präsentation und nicht die Semantik betreffen, sind als **Präsentationselemente** bekannt und sollten nicht mehr verwendet werden, da Semantik für Barrierefreiheit, SEO usw. so wichtig ist.

HTML5 hat `<b>`, `<i>` und `<u>` mit neuen, etwas verwirrenden, semantischen Rollen neu definiert.

Hier ist die beste Regel, die Sie sich merken können: Es ist nur dann angebracht, `<b>`, `<i>` oder `<u>` zu verwenden, um eine Bedeutung zu vermitteln, die traditionell mit fett, kursiv oder unterstrichen vermittelt wird, wenn es kein geeigneteres Element gibt; und es gibt normalerweise eins. Überlegen Sie, ob `<strong>`, `<em>`, `<mark>` oder `<span>` vielleicht passender wäre.

Behalten Sie immer eine barrierefreie Denkweise bei. Das Konzept der Kursivschrift ist für Menschen, die Screenreader verwenden, oder für Menschen, die ein anderes Schriftsystem als das lateinische Alphabet verwenden, nicht sehr hilfreich.

- {{HTMLElement('i')}} wird verwendet, um eine Bedeutung zu übermitteln, die traditionell durch Kursivschrift vermittelt wird: fremdsprachige Wörter, taxonomische Bezeichnungen, technische Begriffe, ein Gedanke…
- {{HTMLElement('b')}} wird verwendet, um eine Bedeutung zu übermitteln, die traditionell durch Fettschrift vermittelt wird: Schlüsselwörter, Produktnamen, Leitsatz…
- {{HTMLElement('u')}} wird verwendet, um eine Bedeutung zu übermitteln, die traditionell durch Unterstreichung vermittelt wird: richtiger Name, Rechtschreibfehler…

> [!NOTE]
> Menschen assoziieren Unterstreichungen stark mit Hyperlinks. Daher ist es im Web am besten, nur Links zu unterstreichen. Verwenden Sie das `<u>`-Element, wenn es semantisch sinnvoll ist, aber überlegen Sie, CSS zu verwenden, um die standardmäßige Unterstreichung in etwas Web-gerechteres zu ändern. Das folgende Beispiel illustriert, wie es gemacht werden kann.

```html
<!-- scientific names -->
<p>
  The Ruby-throated Hummingbird (<i>Archilochus colubris</i>) is the most common
  hummingbird in Eastern North America.
</p>

<!-- foreign words -->
<p>
  The menu was a sea of exotic words like <i lang="uk-latn">vatrushka</i>,
  <i lang="id">nasi goreng</i> and <i lang="fr">soupe à l'oignon</i>.
</p>

<!-- a known misspelling -->
<p>Someday I'll learn how to <u class="spelling-error">spel</u> better.</p>

<!-- term being defined when used in a definition -->
<dl>
  <dt>Semantic HTML</dt>
  <dd>
    Use the elements based on their <b>semantic</b> meaning, not their
    appearance.
  </dd>
</dl>
```

{{EmbedLiveSample('Italic, bold, underline…','100%','270')}}

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Grundlagen des HTML-Texts](/de/docs/Learn/HTML/Introduction_to_HTML/Test_your_skills:_HTML_text_basics).

## Zusammenfassung

Das war's für jetzt! Dieser Artikel sollte Ihnen eine gute Vorstellung davon gegeben haben, wie Sie mit der Textauszeichnung in HTML beginnen und Sie mit einigen der wichtigsten Elemente in diesem Bereich vertraut gemacht haben. Es gibt noch viele weitere semantische Elemente in diesem Bereich zu behandeln, und wir werden in unserem Artikel zur [Fortgeschrittenen Textformatierung](/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting) später im Kurs viele weitere betrachten. Im nächsten Artikel werden wir uns ausführlich damit befassen, wie man [Hyperlinks erstellt](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks), möglicherweise das wichtigste Element im Web.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML")}}
