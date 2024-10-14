---
title: Grundlagen der HTML-Textgestaltung
slug: Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML")}}

Eine der Hauptaufgaben von HTML besteht darin, Textstruktur bereitzustellen, damit ein Browser ein HTML-Dokument genau so anzeigen kann, wie es der Entwickler vorgesehen hat. In diesem Artikel wird erklärt, wie {{Glossary("HTML", "HTML")}} verwendet werden kann, um eine Seite mit Text zu strukturieren, indem Überschriften, Absätze, Hervorhebungen, Listen und mehr hinzugefügt werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Vertrautheit, wie sie in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Einstieg in HTML</a
        >behandelt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie Sie eine einfache Seite mit Text markieren, um ihr Struktur und Bedeutung zu verleihen — einschließlich Absätzen, Überschriften, Listen, Hervorhebungen und Zitaten.
      </td>
    </tr>
  </tbody>
</table>

## Die Grundlagen: Überschriften und Absätze

Die meisten strukturierten Texte bestehen aus Überschriften und Absätzen, sei es, dass Sie eine Geschichte, eine Zeitung, ein Studienbuch, ein Magazin usw. lesen.

![Ein Beispiel für das Titelblatt einer Zeitung, das die Verwendung einer übergeordneten Überschrift, Unterüberschriften und Absätze zeigt.](newspaper_small.jpg)

Strukturierte Inhalte verbessern das Leseerlebnis und machen es angenehmer.

In HTML muss jeder Absatz mit einem {{htmlelement("p")}}-Element umschlossen werden, wie folgt:

```html
<p>I am a paragraph, oh yes I am.</p>
```

Jede Überschrift muss in ein Überschriftselement eingeschlossen werden:

```html
<h1>I am the title of the story.</h1>
```

Es gibt sechs Überschriftselemente: {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}, {{htmlelement("Heading_Elements", "h3")}}, {{htmlelement("Heading_Elements", "h4")}}, {{htmlelement("Heading_Elements", "h5")}} und {{htmlelement("Heading_Elements", "h6")}}. Jedes Element repräsentiert eine andere Ebene der Inhalte im Dokument; `<h1>` repräsentiert die Hauptüberschrift, `<h2>` repräsentiert Unterüberschriften, `<h3>` repräsentiert Unter-Unterüberschriften, und so weiter.

### Umsetzung der strukturellen Hierarchie

Zum Beispiel repräsentiert im folgenden Text die `<h1>`-Element die Titel der Geschichte, die `<h2>`-Elemente die Titel jedes Kapitels und die `<h3>`-Elemente die Unterkapitel:

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

Es liegt wirklich an Ihnen zu entscheiden, welche Elemente was darstellen, solange die Hierarchie sinnvoll ist. Sie müssen nur einige bewährte Praktiken berücksichtigen, während Sie solche Strukturen erstellen:

- Verwenden Sie vorzugsweise ein einziges `<h1>` pro Seite — dies ist die oberste Überschrift, und alle anderen stehen darunter in der Hierarchie.
- Achten Sie darauf, die Überschriften in der richtigen Reihenfolge in der Hierarchie zu verwenden. Verwenden Sie keine `<h3>`-Elemente, um Unterüberschriften zu repräsentieren, gefolgt von `<h2>`-Elementen für Unter-Unterüberschriften — das ergibt keinen Sinn und führt zu seltsamen Ergebnissen.
- Von den sechs verfügbaren Überschriftenebenen sollten Sie nicht mehr als drei pro Seite verwenden, es sei denn, Sie halten es für notwendig. Dokumente mit vielen Ebenen (zum Beispiel eine tief verschachtelte Überschriftenhierarchie) werden unübersichtlich und schwer zu navigieren. In solchen Fällen ist es ratsam, die Inhalte auf mehrere Seiten zu verteilen, wenn möglich.

### Warum brauchen wir Struktur?

Um diese Frage zu beantworten, werfen wir einen Blick auf [text-start.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html) — den Ausgangspunkt unseres durchgehenden Beispiels für diesen Artikel (ein schönes Hummus-Rezept). Sie sollten eine Kopie dieser Datei auf Ihrem lokalen Rechner speichern, da Sie sie für die späteren Übungen benötigen werden. Der Body dieses Dokuments enthält derzeit mehrere Inhaltsstücke. Sie sind in keiner Weise markiert, aber sie sind durch Zeilenumbrüche getrennt (Enter/Return gedrückt, um zur nächsten Zeile zu wechseln).

Wenn Sie das Dokument jedoch in Ihrem Browser öffnen, sehen Sie, dass der Text als großer Block erscheint!

![Eine Webseite, die eine Wand aus unformatiertem Text zeigt, weil auf der Seite keine Elemente vorhanden sind, die sie strukturieren.](screen_shot_2017-03-29_at_09.20.35.png)

Das liegt daran, dass es keine Elemente gibt, die den Inhalten Struktur verleihen, sodass der Browser nicht weiß, was eine Überschrift und was ein Absatz ist. Darüber hinaus:

- Benutzer, die sich eine Webseite ansehen, neigen dazu, schnell zu scannen, um relevante Inhalte zu finden, und lesen oft nur die Überschriften, um damit zu beginnen. (Wir verbringen in der Regel [eine sehr kurze Zeit auf einer Webseite](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/).) Wenn sie innerhalb weniger Sekunden nichts Nützliches sehen, werden sie wahrscheinlich frustriert und gehen woanders hin.
- Suchmaschinen, die Ihre Seite indexieren, betrachten die Inhalte von Überschriften als wichtige Schlüsselwörter zur Beeinflussung des Suchrankings der Seite. Ohne Überschriften wird Ihre Seite hinsichtlich {{Glossary("SEO", "SEO")}} (Suchmaschinenoptimierung) schlecht abschneiden.
- Stark sehbehinderte Menschen lesen oft keine Webseiten; stattdessen hören sie sie. Dies wird mit einer Software namens [Screenreader](https://en.wikipedia.org/wiki/Screen_reader) durchgeführt. Diese Software bietet Möglichkeiten, schnell auf bestimmten Textinhalt zuzugreifen. Unter den verschiedenen verwendeten Techniken geben sie eine Gliederung des Dokuments wieder, indem sie die Überschriften vorlesen, was es den Nutzern ermöglicht, die benötigten Informationen schnell zu finden. Wenn keine Überschriften vorhanden sind, sind sie gezwungen, sich das gesamte Dokument laut vorlesen zu lassen.
- Um Inhalt mit {{Glossary("CSS", "CSS")}} zu gestalten oder mit {{Glossary("JavaScript", "JavaScript")}} interessante Dinge zu bewirken, müssen Sie Elemente verwenden, die den relevanten Inhalt umschließen, damit CSS/JavaScript ihn effektiv ansprechen können.

Deshalb müssen wir unseren Inhalten strukturelle Markierungen geben.

### Aktives Lernen: Unseren Inhalten Struktur geben

Lassen Sie uns direkt mit einem Live-Beispiel loslegen. Fügen Sie im folgenden Beispiel Elemente in das rohe Textfeld ein, damit es im _Ausgabefeld_ als Überschrift und zwei Absätze erscheint.

Wenn Sie einen Fehler machen, können Sie immer die _Zurücksetzen_ Schaltfläche verwenden. Wenn Sie nicht weiterkommen, drücken Sie die _Lösung anzeigen_ Schaltfläche, um die Antwort zu sehen.

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

Semantiken werden überall um uns herum verwendet – wir verlassen uns auf frühere Erfahrungen, um uns zu sagen, welche Funktion ein alltägliches Objekt hat; wenn wir etwas sehen, wissen wir, welche Funktion es haben wird. So erwarten wir beispielsweise, dass ein rotes Licht "stoppen" und ein grünes Licht "gehen" bedeutet. Dinge können schnell kompliziert werden, wenn die falschen Semantiken angewendet werden. (Verwendet irgendein Land Rot, um "geh" zu bedeuten? Wir hoffen nicht.)

In ähnlicher Weise müssen wir sicherstellen, dass wir die richtigen Elemente verwenden, um unseren Inhalten die richtige Bedeutung, Funktion oder das richtige Erscheinungsbild zu geben. In diesem Kontext ist das {{htmlelement("Heading_Elements", "h1")}}-Element auch ein semantisches Element, das dem umschlossenen Text die Rolle (oder Bedeutung) einer "obersten Überschrift auf Ihrer Seite" gibt.

```html
<h1>This is a top level heading</h1>
```

Standardmäßig vergibt der Browser eine große Schriftgröße, um sie wie eine Überschrift aussehen zu lassen (obwohl Sie sie mit CSS so gestalten könnten, wie Sie möchten). Wichtiger ist jedoch, dass sein semantischer Wert auf verschiedene Weise verwendet wird, zum Beispiel von Suchmaschinen und Screenreadern (wie oben erwähnt).

Andererseits könnten Sie jedes Element so erscheinen lassen, als wäre es eine oberste Überschrift. Betrachten Sie Folgendes:

```html
<span style="font-size: 32px; margin: 21px 0; display: block;">
  Is this a top level heading?
</span>
```

Dies ist ein {{htmlelement("span")}}-Element. Es hat keine Semantik. Sie verwenden es, um Inhalte zu umschließen, wenn Sie CSS darauf anwenden möchten (oder etwas mit JavaScript tun möchten), ohne ihnen zusätzliche Bedeutung zu geben. (Sie werden später mehr darüber im Kurs erfahren.) Wir haben etwas CSS darauf angewendet, um es aussehen zu lassen wie eine oberste Überschrift, aber da es keinen semantischen Wert hat, erhält es nicht die zusätzlichen Vorteile, die oben beschrieben wurden. Es ist eine gute Idee, das relevante HTML-Element für den Job zu verwenden.

## Listen

Wenden wir uns nun den Listen zu. Listen sind überall im Leben - von Ihrer Einkaufsliste über die Liste der Richtungen, die Sie unbewusst folgen, um jeden Tag zu Ihrem Haus zu gelangen, bis hin zu den Listen mit Anleitungen, die Sie in diesen Tutorials befolgen! Im Web haben wir drei Arten von Listen: ungeordnete, geordnete und Beschreibungslisten.

Ungeordnete und geordnete Listen sind sehr verbreitet, und sie werden in diesem Abschnitt behandelt. Beschreibungslisten sind weniger verbreitet, und wir werden sie in [Erweiterte Textformatierung](/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting) behandeln.

### Ungeordnete Listen

Ungeordnete Listen werden verwendet, um Listen von Elementen zu markieren, bei denen die Reihenfolge der Elemente keine Rolle spielt. Nehmen wir als Beispiel eine Einkaufsliste:

```plain
milk
eggs
bread
hummus
```

Jede ungeordnete Liste beginnt mit einem {{htmlelement("ul")}}-Element - dies umschließt alle Listenelemente:

```html-nolint
<ul>
  milk
  eggs
  bread
  hummus
</ul>
```

Der letzte Schritt besteht darin, jedes Listenelement in einem {{htmlelement("li")}} (Listenelement) zu umschließen:

```html
<ul>
  <li>milk</li>
  <li>eggs</li>
  <li>bread</li>
  <li>hummus</li>
</ul>
```

#### Aktives Lernen: Eine ungeordnete Liste markieren

Versuchen Sie, das Live-Beispiel unten zu bearbeiten, um Ihre ganz eigenen HTML-unordered-list zu erstellen.

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

### Geordnete Listen

Geordnete Listen sind Listen, bei denen die Reihenfolge der Elemente \_eine Rolle spielt. Nehmen wir als Beispiel eine Reihe von Anweisungen:

```plain
Drive to the end of the road
Turn right
Go straight across the first two roundabouts
Turn left at the third roundabout
The school is on your right, 300 meters up the road
```

Die Markup-Struktur ist dieselbe wie bei ungeordneten Listen, außer dass Sie die Listenelemente in einem {{htmlelement("ol")}}-Element, anstelle von `<ul>`, umschließen müssen:

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

Versuchen Sie, das Live-Beispiel unten zu bearbeiten, um Ihre ganz eigenen HTML-ordered-list zu erstellen.

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

An diesem Punkt des Artikels haben Sie alle Informationen, die Sie benötigen, um unser Rezeptseiten-Beispiel zu markieren. Sie können entweder eine lokale Kopie unserer [text-start.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html)-Startdatei speichern und die Arbeit dort erledigen oder es im bearbeitbaren Beispiel unten tun. Die lokale Bearbeitung wäre wahrscheinlich besser, da Sie dann die Arbeit, die Sie machen, speichern können; wenn Sie es jedoch im bearbeitbaren Beispiel ausfüllen, geht es verloren, wenn Sie die Seite das nächste Mal öffnen. Beide Möglichkeiten haben Vor- und Nachteile.

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

Wenn Sie nicht weiterkommen, können Sie immer die _Lösung anzeigen_ Schaltfläche drücken oder unser [text-complete.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-complete.html)-Beispiel in unserem GitHub-Repo ansehen.

### Verschachtelte Listen

Es ist völlig in Ordnung, eine Liste in eine andere zu verschachteln. Möglicherweise möchten Sie einige Unterpunkte unter einem obersten Punkt hinzufügen. Nehmen wir die zweite Liste aus unserem Rezeptbeispiel:

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

Da die letzten beiden Punkte sehr eng mit dem vorhergehenden verbunden sind (sie lesen sich wie Teilanweisungen oder Optionen, die unter diesen Punkt passen), könnte es sinnvoll sein, sie in ihrer eigenen ungeordneten Liste zu verschachteln und diese Liste innerhalb des aktuellen vierten Punktes zu platzieren. Dies würde so aussehen:

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

Versuchen Sie, zum vorherigen aktiven Lernbeispiel zurückzukehren und die zweite Liste auf diese Weise zu aktualisieren.

## Hervorhebung und Wichtigkeit

In der menschlichen Sprache heben wir häufig bestimmte Wörter hervor, um die Bedeutung eines Satzes zu verändern, und wir möchten oft bestimmte Wörter als wichtig oder in irgendeiner Weise anders markieren. HTML bietet verschiedene semantische Elemente, um uns zu ermöglichen, Textinhalte mit solchen Effekten zu versehen, und in diesem Abschnitt werden wir uns einige der gebräuchlichsten ansehen.

### Hervorhebung

Wenn wir in gesprochener Sprache Hervorhebung hinzufügen möchten, _betonen_ wir bestimmte Wörter, wodurch die Bedeutung von dem, was wir sagen, subtil verändert wird. In geschriebener Sprache neigen wir dazu, Wörter hervorzuheben, indem wir sie kursiv setzen. Zum Beispiel haben die folgenden zwei Sätze unterschiedliche Bedeutungen.

> Ich bin froh, dass Sie nicht zu spät gekommen sind.
>
> Ich bin _froh_, dass Sie nicht zu _spät_ gekommen sind.

Der erste Satz klingt wirklich erleichtert, dass die Person nicht zu spät gekommen ist. Im Gegensatz dazu klingt der zweite Satz, bei dem die Wörter "froh" und "spät" kursiv gedruckt sind, sarkastisch oder passiv-aggressiv und drückt Verärgerung darüber aus, dass die Person ein wenig zu spät gekommen ist.

In HTML verwenden wir das {{htmlelement("em")}} (Hervorhebung) Element, um solche Instanzen zu markieren. Neben der Verbesserung der Lesbarkeit werden sie von Screenreadern erkannt, die so konfiguriert werden können, dass sie in einem anderen Tonfall sprechen. Browser stellen dies standardmäßig als Kursivtext dar, aber Sie sollten dieses Tag nicht nur verwenden, um eine kursive Darstellung zu erhalten. Um dies zu erreichen, würden Sie ein {{htmlelement("span")}}-Element und etwas CSS oder vielleicht ein {{htmlelement("i")}}-Element (siehe unten) verwenden.

```html
<p>I am <em>glad</em> you weren't <em>late</em>.</p>
```

### Starke Wichtigkeit

Um wichtige Wörter zu betonen, tendieren wir dazu, sie in gesprochener Sprache zu betonen und in geschriebener Sprache **fett** zu drucken. Zum Beispiel:

> Diese Flüssigkeit ist **hochgiftig**.
>
> Ich zähle auf Sie. **Seien Sie nicht** zu spät!

In HTML verwenden wir das {{htmlelement("strong")}} (starke Wichtigkeit) Element, um solche Instanzen zu markieren. Neben der Verbesserung der Lesbarkeit werden diese ebenfalls von Screenreadern erkannt, die so konfiguriert werden können, dass sie in einem anderen Tonfall sprechen. Browser stellen dies standardmäßig als Fettdruck dar, aber sie sollten dieses Tag nicht nur verwenden, um eine fette Darstellung zu erhalten. Dafür würden Sie ein {{htmlelement("span")}}-Element und etwas CSS oder vielleicht ein {{htmlelement("b")}}-Element (siehe unten) verwenden.

```html
<p>This liquid is <strong>highly toxic</strong>.</p>

<p>I am counting on you. <strong>Do not</strong> be late!</p>
```

Sie können Hervorhebungen und starke Wichtigkeit ineinander verschachteln, wenn gewünscht:

```html-nolint
<p>This liquid is <strong>highly toxic</strong> — if you drink it, <strong>you may <em>die</em></strong>.</p>
```

{{EmbedLiveSample('Strong importance')}}

### Aktives Lernen: Lassen Sie uns wichtig sein

In diesem aktiven Lernabschnitt haben wir ein bearbeitbares Beispiel bereitgestellt. Versuchen Sie darin, Hervorhebungen und starke Wichtigkeit zu den Worten hinzuzufügen, von denen Sie glauben, dass sie notwendig sind, nur um etwas Übung zu bekommen.

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

Die bisher besprochenen Elemente haben klare assoziierte Semantiken. Die Situation bei {{htmlelement("b")}}, {{htmlelement("i")}} und {{htmlelement("u")}} ist etwas komplizierter. Sie entstanden, damit man Text fett, kursiv oder unterstrichen darstellen konnte, in einer Zeit, als CSS noch schlecht unterstützt wurde oder gar nicht. Solche Elemente, die nur die Präsentation und nicht die Semantik beeinflussen, werden als **Darstellungselemente** bezeichnet und sollten nicht mehr verwendet werden, da Semantik, wie wir bereits gesehen haben, für die Barrierefreiheit, SEO usw. so wichtig ist.

HTML5 hat `<b>`, `<i>` und `<u>` mit neuen, etwas verwirrenden, semantischen Rollen neu definiert.

Hier ist die beste Regel, die Sie sich merken können: Es ist nur dann angebracht, `<b>`, `<i>` oder `<u>` zu verwenden, um eine Bedeutung zu vermitteln, die traditionell durch Fett, Kursiv oder Unterstrichen übermittelt wird, wenn es kein besser geeignetes Element gibt; und das gibt es normalerweise. Überlegen Sie, ob `<strong>`, `<em>`, `<mark>` oder `<span>` möglicherweise geeigneter sein könnte.

Behalten Sie immer die Barrierefreiheit im Hinterkopf. Das Konzept der Kursivität ist für Menschen mit Screenreadern nicht sehr hilfreich, ebenso wie für Personen, die ein Schriftsystem verwenden, das nicht das lateinische Alphabet ist.

- {{HTMLElement('i')}} wird verwendet, um eine Bedeutung zu vermitteln, die traditionell durch Kursivschrift vermittelt wird: fremde Wörter, taxonomische Bezeichnungen, Fachbegriffe, ein Gedanke…
- {{HTMLElement('b')}} wird verwendet, um eine Bedeutung zu vermitteln, die traditionell durch Fettdruck vermittelt wird: Schlüsselwörter, Produktnamen, Einleitungssatz…
- {{HTMLElement('u')}} wird verwendet, um eine Bedeutung zu vermitteln, die traditionell durch Unterstreichung vermittelt wird: richtiger Name, Rechtschreibfehler…

> [!NOTE]
> Menschen assoziieren Unterstreichungen stark mit Hyperlinks. Daher sollten Sie im Web nur Links unterstreichen. Verwenden Sie das `<u>`-Element, wenn es semantisch angemessen ist, ziehen Sie jedoch in Betracht, mit CSS die Standardunterstreichung in etwas zu ändern, das im Web geeigneter ist. Das folgende Beispiel zeigt, wie es gemacht werden kann.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Weitere Tests finden Sie im Abschnitt [Testen Sie Ihr Wissen: HTML-Text-Grundlagen](/de/docs/Learn/HTML/Introduction_to_HTML/Test_your_skills:_HTML_text_basics), um zu überprüfen, ob Sie die Informationen bewahrt haben, bevor Sie fortfahren.

## Zusammenfassung

Das war's für den Moment! Dieser Artikel sollte Ihnen eine gute Vorstellung davon gegeben haben, wie Sie mit der Textformatierung in HTML beginnen und einige der wichtigsten Elemente in diesem Bereich eingeführt. Es gibt noch viele weitere semantische Elemente in diesem Bereich zu behandeln, und wir werden in unserem Artikel [Erweiterte Textformatierung](/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting) später im Kurs noch viel mehr untersuchen. Im nächsten Artikel werden wir uns genauer ansehen, wie man [Hyperlinks erstellt](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks), möglicherweise das wichtigste Element im Web.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML")}}
