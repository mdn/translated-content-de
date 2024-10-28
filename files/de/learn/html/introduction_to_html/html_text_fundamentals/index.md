---
title: Grundlagen des HTML-Textes
slug: Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML")}}

Eine der Hauptaufgaben von HTML ist es, Text zu strukturieren, damit ein Browser ein HTML-Dokument so darstellen kann, wie es der Entwickler beabsichtigt. Dieser Artikel erklärt, wie {{Glossary("HTML", "HTML")}} verwendet werden kann, um eine Seite mit Text zu strukturieren, indem Überschriften und Absätze hinzugefügt, Wörter hervorgehoben, Listen erstellt und mehr gemacht werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Erste Schritte mit HTML</a
        >abgedeckt werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie man eine grundlegende Seite mit Text markiert, um ihr Struktur und Bedeutung zu verleihen — einschließlich Absätze, Überschriften, Listen, Hervorhebung und Zitate.
      </td>
    </tr>
  </tbody>
</table>

## Die Grundlagen: Überschriften und Absätze

Der meiste strukturierte Text besteht aus Überschriften und Absätzen, egal ob Sie eine Geschichte, eine Zeitung, ein Lehrbuch, ein Magazin usw. lesen.

![Ein Beispiel eines Zeitungstitelblatts, das die Verwendung einer Überschrift der obersten Ebene, Unterüberschriften und Absätze zeigt.](newspaper_small.jpg)

Strukturierte Inhalte erleichtern das Leseerlebnis und machen es angenehmer.

In HTML muss jeder Absatz in einem {{htmlelement("p")}}-Element eingeschlossen sein, so:

```html
<p>I am a paragraph, oh yes I am.</p>
```

Jede Überschrift muss in einem Überschriftenelement eingeschlossen sein:

```html
<h1>I am the title of the story.</h1>
```

Es gibt sechs Überschriftenelemente: {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}, {{htmlelement("Heading_Elements", "h3")}}, {{htmlelement("Heading_Elements", "h4")}}, {{htmlelement("Heading_Elements", "h5")}} und {{htmlelement("Heading_Elements", "h6")}}. Jedes Element repräsentiert eine andere Ebene des Inhalts im Dokument; `<h1>` repräsentiert die Hauptüberschrift, `<h2>` repräsentiert Unterüberschriften, `<h3>` repräsentiert Unter-Unterüberschriften und so weiter.

### Implementierung der strukturellen Hierarchie

Zum Beispiel in dieser Geschichte repräsentiert das `<h1>`-Element den Titel der Geschichte, die `<h2>`-Elemente repräsentieren den Titel jedes Kapitels, und die `<h3>`-Elemente repräsentieren Unterabschnitte jedes Kapitels:

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

Es liegt wirklich an Ihnen, was die beteiligten Elemente darstellen, solange die Hierarchie sinnvoll ist. Sie müssen nur ein paar bewährte Praktiken im Auge behalten, während Sie solche Strukturen schaffen:

- Vorzugsweise sollten Sie eine einzelne `<h1>` pro Seite verwenden—dies ist die Überschrift der obersten Ebene, und alle anderen fallen darunter in der Hierarchie.
- Stellen Sie sicher, dass Sie die Überschriften in der korrekten Reihenfolge in der Hierarchie verwenden. Verwenden Sie keine `<h3>`-Elemente, um Unterüberschriften darzustellen, gefolgt von `<h2>`-Elementen, um Unter-Unterüberschriften darzustellen—das ergibt keinen Sinn und führt zu seltsamen Ergebnissen.
- Von den sechs verfügbaren Überschriftsebenen sollten Sie anstreben, nicht mehr als drei pro Seite zu verwenden, es sei denn, es ist notwendig. Dokumente mit vielen Ebenen (zum Beispiel einer tiefen Überschriftenhierarchie) werden unhandlich und schwer zu navigieren. In solchen Fällen ist es ratsam, den Inhalt möglichst auf mehrere Seiten zu verteilen.

### Warum brauchen wir Struktur?

Um diese Frage zu beantworten, schauen wir uns [text-start.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html) an—den Ausgangspunkt unseres laufenden Beispiels für diesen Artikel (ein schönes Hummus-Rezept). Sie sollten eine Kopie dieser Datei auf Ihrem lokalen Rechner speichern, da Sie sie für die späteren Übungen benötigen. Derzeit enthält der Body dieses Dokuments mehrere Inhaltsstücke. Sie sind auf keine Weise markiert, aber sie sind durch Zeilenumbrüche getrennt (Enter/Return gedrückt, um zur nächsten Zeile zu gelangen).

Wenn Sie das Dokument jedoch in Ihrem Browser öffnen, sehen Sie, dass der Text als großer Block erscheint!

![Eine Webseite, die einen Block von unformatiertem Text zeigt, da es keine Elemente auf der Seite gibt, die ihn strukturieren.](screen_shot_2017-03-29_at_09.20.35.png)

Dies liegt daran, dass es keine Elemente gibt, die dem Inhalt Struktur verleihen, sodass der Browser nicht weiß, was eine Überschrift und was ein Absatz ist. Zudem:

- Benutzer, die sich eine Webseite ansehen, neigen dazu, schnell zu scannen, um relevante Inhalte zu finden, und lesen oft zuerst nur die Überschriften. (Normalerweise [verbringen wir sehr kurze Zeit auf einer Webseite](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/).) Wenn sie innerhalb weniger Sekunden nichts Nützliches sehen, werden sie vermutlich frustriert und gehen woanders hin.
- Suchmaschinen, die Ihre Seite indexieren, betrachten den Inhalt von Überschriften als wichtige Schlüsselwörter zur Beeinflussung des Suchrankings der Seite. Ohne Überschriften wird Ihre Seite in Bezug auf {{Glossary("SEO", "SEO")}} (Search Engine Optimization) schlecht abschneiden.
- Menschen mit starker Sehbehinderung lesen oft keine Webseiten, sie hören sie stattdessen. Dies erfolgt mit einer Software, die als [Screenreader](https://en.wikipedia.org/wiki/Screen_reader) bekannt ist. Diese Software bietet Möglichkeiten, schnell auf bestimmten Textinhalt zuzugreifen. Unter den verschiedenen verwendeten Techniken bietet sie eine Übersicht des Dokuments durch Vorlesen der Überschriften, damit ihre Benutzer die gewünschten Informationen schnell finden können. Wenn keine Überschriften vorhanden sind, müssen sie sich das ganze Dokument vorlesen lassen.
- Um Inhalte mit {{Glossary("CSS", "CSS")}} zu gestalten oder interessante Dinge mit {{Glossary("JavaScript", "JavaScript")}} zu machen, müssen Sie Elemente haben, die den relevanten Inhalt umschließen, damit CSS/JavaScript diesen effektiv ansprechen kann.

Daher müssen wir unserem Inhalt Strukturelemente zuweisen.

### Aktives Lernen: Unserem Inhalt Struktur verleihen

Lassen Sie uns direkt mit einem Live-Beispiel starten. In dem folgenden Beispiel, fügen Sie den Rohtext im _Input_-Feld so mit Elementen ein, dass er im _Output_-Feld als Überschrift und zwei Absätze erscheint.

Wenn Sie einen Fehler machen, können Sie ihn jederzeit mit der _Zurücksetzen_-Taste korrigieren. Wenn Sie nicht weiterkommen, drücken Sie die _Lösung zeigen_-Taste, um die Antwort zu sehen.

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

Semantik wird überall um uns herum verwendet—wir verlassen uns auf frühere Erfahrungen, um uns zu sagen, welche Funktion ein alltägliches Objekt hat; wenn wir etwas sehen, wissen wir, welche Funktion es haben wird. Zum Beispiel erwarten wir, dass ein rotes Licht "stoppen" und ein grünes Licht "gehen" bedeutet. Die Dinge können schnell sehr kompliziert werden, wenn die falsche Semantik angewandt wird. (Gibt es Länder, in denen rot "gehen" bedeutet? Wir hoffen nicht.)

In ähnlicher Weise müssen wir sicherstellen, dass wir die richtigen Elemente verwenden und unserem Inhalt die korrekte Bedeutung, Funktion oder Erscheinung geben. In diesem Zusammenhang ist das {{htmlelement("Heading_Elements", "h1")}}-Element ebenfalls ein semantisches Element, das dem Text, den es umschließt, die Rolle (oder Bedeutung) einer "Überschrift der obersten Ebene auf Ihrer Seite" gibt.

```html
<h1>This is a top level heading</h1>
```

Standardmäßig wird der Browser es mit einer großen Schriftgröße darstellen, um es wie eine Überschrift aussehen zu lassen (obwohl Sie es mit CSS so gestalten könnten, dass es wie alles andere aussieht, was Sie möchten). Wichtiger ist jedoch, dass sein semantischer Wert auf verschiedene Weise genutzt wird, beispielsweise von Suchmaschinen und Screenreadern (wie oben erwähnt).

Andererseits könnten Sie jedes Element _wie_ eine Überschrift der obersten Ebene aussehen lassen. Betrachten Sie Folgendes:

```html
<span style="font-size: 32px; margin: 21px 0; display: block;">
  Is this a top level heading?
</span>
```

Dies ist ein {{htmlelement("span")}}-Element. Es hat keine Semantik. Sie verwenden es, um Inhalte einzuschließen, wenn Sie CSS darauf anwenden möchten (oder damit mit JavaScript etwas tun möchten), ohne ihm eine zusätzliche Bedeutung zu geben. (Sie werden später im Kurs mehr darüber erfahren.) Wir haben etwas CSS darauf angewandt, um es wie eine Überschrift der obersten Ebene aussehen zu lassen, aber da es keinen semantischen Wert hat, werden ihm keine der oben beschriebenen zusätzlichen Vorteile zuteil. Es ist eine gute Idee, das relevante HTML-Element für die Aufgabe zu verwenden.

## Listen

Wenden wir uns nun den Listen zu. Listen sind im Leben allgegenwärtig—von Ihrer Einkaufsliste bis hin zur Liste der Anweisungen, denen Sie unterbewusst folgen, um jeden Tag nach Hause zu kommen, bis hin zu den Listen von Anweisungen, denen Sie in diesen Tutorials folgen! Im Web gibt es drei Arten von Listen: ungeordnete, geordnete und Beschreibung.

Ungeordnete und geordnete Listen sind sehr üblich und in diesem Abschnitt behandelt. Beschreibungslisten sind weniger häufig und werden im [Fortgeschrittenes Textformatierung](/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting) behandelt.

### Ungeordnete

Ungeordnete Listen werden verwendet, um Listen von Elementen zu markieren, bei denen die Reihenfolge der Elemente keine Rolle spielt. Nehmen wir eine Einkaufsliste als Beispiel:

```plain
milk
eggs
bread
hummus
```

Jede ungeordnete Liste beginnt mit einem {{htmlelement("ul")}}-Element—dieses schließt alle Listenelemente ein:

```html-nolint
<ul>
  milk
  eggs
  bread
  hummus
</ul>
```

Der letzte Schritt besteht darin, jedes Listenelement in ein {{htmlelement("li")}}-Element (List item) einzuschließen:

```html
<ul>
  <li>milk</li>
  <li>eggs</li>
  <li>bread</li>
  <li>hummus</li>
</ul>
```

#### Aktives Lernen: Eine ungeordnete Liste markieren

Versuchen Sie das folgende Live-Beispiel zu bearbeiten, um Ihre eigene HTML-ungeordnete Liste zu erstellen.

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

### Geordnete

Geordnete Listen sind Listen, bei denen die Reihenfolge der Elemente _wichtig_ ist. Nehmen wir ein Beispiel für eine Anfahrtsbeschreibung:

```plain
Drive to the end of the road
Turn right
Go straight across the first two roundabouts
Turn left at the third roundabout
The school is on your right, 300 meters up the road
```

Die Markup-Struktur ist dieselbe wie bei ungeordneten Listen, außer dass Sie die Listenelemente in ein {{htmlelement("ol")}}-Element einschließen müssen, anstatt `<ul>`:

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

Versuchen Sie das folgende Live-Beispiel zu bearbeiten, um Ihre eigene HTML-geordnete Liste zu erstellen.

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

An diesem Punkt im Artikel haben Sie alle Informationen, die Sie benötigen, um unser Rezeptseiten-Beispiel zu markieren. Sie können entweder eine lokale Kopie unserer [text-start.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html) Startdatei speichern und die Arbeit dort erledigen oder in dem bearbeitbaren Beispiel unten. Es ist wahrscheinlich besser, dies lokal zu tun, da Sie dann die Arbeit, die Sie leisten, speichern können, während wenn Sie es in das bearbeitbare Beispiel einfüllen, es verloren geht, wenn Sie die Seite das nächste Mal öffnen. Beide Methoden haben Vor- und Nachteile.

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

Wenn Sie nicht weiterkommen, können Sie immer die _Lösung zeigen_-Taste drücken oder unser Beispiel [text-complete.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-complete.html) in unserem GitHub-Repo überprüfen.

### Listen verschachteln

Es ist völlig in Ordnung, eine Liste in eine andere zu verschachteln. Vielleicht möchten Sie einige Unterpunkte unter einem Hauptpunkt auflisten. Lassen Sie uns die zweite Liste aus unserem Rezept-Beispiel betrachten:

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

Da die letzten beiden Punkte sehr eng mit dem vorhergehenden verbunden sind (sie lesen sich wie Unteranweisungen oder Entscheidungen, die unter diesen Punkt passen), könnte es sinnvoll sein, sie in eine eigene ungeordnete Liste zu verschachteln und diese Liste innerhalb des aktuellen vierten Punktes zu platzieren. Dies würde folgendermaßen aussehen:

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

Versuchen Sie, zum vorherigen aktiven Learning-Beispiel zurückzukehren und die zweite Liste so zu aktualisieren.

## Hervorhebung und Wichtigkeit

In der menschlichen Sprache betonen wir oft bestimmte Wörter, um die Bedeutung eines Satzes zu ändern, und wir möchten oft bestimmte Wörter als wichtig oder in gewisser Weise anders markieren. HTML bietet verschiedene semantische Elemente, die es uns ermöglichen, Textinhalte mit solchen Effekten zu markieren, und in diesem Abschnitt werden wir einige der gebräuchlichsten betrachten.

### Hervorhebung

Wenn wir in der gesprochenen Sprache Betonung hinzufügen wollen, _betonen_ wir bestimmte Wörter, um die Bedeutung subtil zu ändern. Ebenso neigen wir in der geschriebenen Sprache dazu, Wörter durch Kursivschrift zu betonen. Zum Beispiel haben die folgenden beiden Sätze unterschiedliche Bedeutungen.

> Ich bin froh, dass Sie nicht zu spät waren.
>
> Ich bin _froh_, dass Sie nicht _zu spät_ waren.

Der erste Satz klingt wirklich erleichtert, dass die Person nicht zu spät war. Im Gegensatz dazu klingt der zweite Satz, wobei sowohl die Wörter "froh" als auch "zu spät" kursiv sind, sarkastisch oder passiv-aggressiv und drückt Ärger darüber aus, dass die Person ein wenig zu spät gekommen ist.

In HTML verwenden wir das {{htmlelement("em")}} (emphasis)-Element, um solche Fälle zu markieren. Neben der interessanteren Gestaltung des Dokuments erkennen Screenreader dies, die so konfiguriert werden können, dass sie es in einem anderen Ton vorlesen. Browser gestalten dies standardmäßig kursiv, aber Sie sollten diesen Tag nicht nur verwenden, um eine kursiv-Schrift zu erhalten. Dafür würden Sie ein {{htmlelement("span")}}-Element und etwas CSS verwenden oder vielleicht ein {{htmlelement("i")}}-Element (siehe unten).

```html
<p>I am <em>glad</em> you weren't <em>late</em>.</p>
```

### Starke Wichtigkeit

Um wichtige Wörter zu betonen, neigen wir in der gesprochenen Sprache dazu, sie zu betonen und in der geschriebenen Sprache **fett** zu schreiben. Zum Beispiel:

> Diese Flüssigkeit ist **hochgiftig**.
>
> Ich zähle auf Sie. **Seien** Sie nicht zu spät!

In HTML verwenden wir das {{htmlelement("strong")}} (strong importance) Element, um solche Fälle zu markieren. Neben der nützlicheren Gestaltung des Dokuments erkennen Screenreader dies, die so konfiguriert werden können, dass sie es in einem anderen Ton vorlesen. Browser gestalten diesen Text standardmäßig fett, aber Sie sollten diesen Tag nicht nur verwenden, um eine Fett-Schrift zu erhalten. Dafür würden Sie ein {{htmlelement("span")}}-Element und etwas CSS verwenden oder vielleicht ein {{htmlelement("b")}}-Element (siehe unten).

```html
<p>This liquid is <strong>highly toxic</strong>.</p>

<p>I am counting on you. <strong>Do not</strong> be late!</p>
```

Sie können starke Wichtigkeit und Hervorhebung ineinander verschachteln, wenn gewünscht:

```html-nolint
<p>This liquid is <strong>highly toxic</strong> — if you drink it, <strong>you may <em>die</em></strong>.</p>
```

{{EmbedLiveSample('Strong importance')}}

### Aktives Lernen: Lassen Sie uns wichtig sein

In diesem aktiven Lernbereich haben wir ein bearbeitbares Beispiel bereitgestellt. Darin möchten wir, dass Sie versuchen, Hervorhebung und starke Wichtigkeit für die Wörter hinzuzufügen, die Sie für notwendig erachten, nur um etwas Übung zu haben.

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

Die bisher behandelten Elemente haben klar definierte semantische Bedeutungen. Die Situation mit {{htmlelement("b")}}, {{htmlelement("i")}} und {{htmlelement("u")}} ist etwas komplizierter. Sie entstanden, damit Menschen fett, kursiv oder unterstrichenen Text schreiben konnten in einer Zeit, als CSS noch schlecht oder gar nicht unterstützt wurde. Elemente wie diese, die nur die Präsentation und nicht die Semantik betreffen, werden als **präsentationsorientierte Elemente** bezeichnet und sollten nicht mehr verwendet werden, da, wie wir bereits gesehen haben, Semantik so wichtig für Barrierefreiheit, SEO usw. ist.

HTML5 hat `<b>`, `<i>` und `<u>` mit neuen, etwas verwirrenden, semantischen Rollen neu definiert.

Hier ist die beste Regel, die Sie sich merken können: Es ist nur angemessen, `<b>`, `<i>` oder `<u>` zu verwenden, um eine Bedeutung zu vermitteln, die traditionell mit Fett, Kursiv oder Unterstrichen vermittelt wurde, wenn es kein besser geeignetes Element gibt; und das gibt es normalerweise. Erwägen Sie, ob `<strong>`, `<em>`, `<mark>` oder `<span>` möglicherweise geeigneter sein könnten.

Behalten Sie immer eine Barrierefreiheitsperspektive im Kopf. Das Konzept der Kursivschrift ist für Menschen, die Screenreader verwenden, nicht sehr hilfreich oder für Menschen, die ein anderes Schriftsystem als das lateinische Alphabet verwenden.

- {{HTMLElement('i')}} wird verwendet, um eine Bedeutung zu vermitteln, die traditionell durch Kursivschrift vermittelt wird: Fremdwörter, taxonomische Benennung, technische Begriffe, ein Gedanke…
- {{HTMLElement('b')}} wird verwendet, um eine Bedeutung zu vermitteln, die traditionell durch Fettschrift vermittelt wird: Schlüsselwörter, Produktnamen, Hauptsatz…
- {{HTMLElement('u')}} wird verwendet, um eine Bedeutung zu vermitteln, die traditionell durch Unterstreichen vermittelt wird: Eigenname, Rechtschreibfehler…

> [!NOTE]
> Menschen assoziieren Unterstreichen stark mit Hyperlinks. Daher ist es im Web am besten, nur Links zu unterstreichen. Verwenden Sie das `<u>`-Element, wenn es semantisch angebracht ist, ziehen Sie jedoch in Betracht, CSS zu verwenden, um das standardmäßige Unterstreichen auf etwas Web-geeigneteres zu ändern. Das folgende Beispiel illustriert, wie dies getan werden kann.

<!-- cSpell:ignore spel -->

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

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Wissen: HTML-Text-Grundlagen](/de/docs/Learn/HTML/Introduction_to_HTML/Test_your_skills:_HTML_text_basics).

## Zusammenfassung

Das war's vorerst! Dieser Artikel sollte Ihnen eine gute Vorstellung davon gegeben haben, wie man mit der Markierung von Text in HTML beginnt, und Sie mit einigen der wichtigsten Elemente in diesem Bereich vertraut gemacht haben. Es gibt noch viele weitere semantische Elemente in diesem Bereich zu behandeln, und wir werden noch viele weitere in unserem Artikel [Fortgeschrittenes Textformatierung](/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting) später im Kurs behandeln. Im nächsten Artikel werden wir uns im Detail ansehen, wie man [Hyperlinks erstellt](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks), möglicherweise das wichtigste Element im Web.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML")}}
