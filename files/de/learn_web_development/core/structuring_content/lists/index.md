---
title: Listen
slug: Learn_web_development/Core/Structuring_content/Lists
l10n:
  sourceCommit: 960a94a198ca60fb04fe63857ea61d7306465791
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content")}}

Nun richten wir unsere Aufmerksamkeit auf Listen. Listen sind überall im Leben zu finden – von Ihrer Einkaufsliste über die Liste von Anweisungen, denen Sie unbewusst folgen, um jeden Tag zu Ihrem Haus zu gelangen, bis hin zu den Anleitungslisten, denen Sie in diesen Tutorials folgen! Es wird Sie vielleicht nicht überraschen, dass HTML eine praktische Reihe von Elementen bietet, mit denen wir verschiedene Arten von Listen definieren können. Im Web gibt es drei Arten von Listen: ungeordnete, geordnete und Beschreibungslisten. Diese Lektion zeigt Ihnen, wie Sie die verschiedenen Typen verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlagen der HTML-Syntax</a
        > behandelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die HTML-Struktur für die drei Arten von Listen – ungeordnet, geordnet und Beschreibung.</li>
          <li>Die korrekte Verwendung für jeden Listentyp.</li>
          <li>Die breiteren Anwendungsfälle von Listen, wie z. B. Navigationsmenüs.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Ungeordnete Listen

Ungeordnete Listen werden verwendet, um Listen von Elementen zu kennzeichnen, bei denen die Reihenfolge der Elemente nicht wichtig ist. Nehmen wir als Beispiel eine Einkaufsliste:

```plain
milk
eggs
bread
hummus
```

Jede ungeordnete Liste beginnt mit einem {{htmlelement("ul")}}-Element – dieses umschließt alle Listenelemente:

```html-nolint
<ul>
  milk
  eggs
  bread
  hummus
</ul>
```

Der letzte Schritt besteht darin, jedes Listenelement in ein {{htmlelement("li")}} (Listenelement)-Element einzuschließen:

```html
<ul>
  <li>milk</li>
  <li>eggs</li>
  <li>bread</li>
  <li>hummus</li>
</ul>
```

### Aktives Lernen: Markierung einer ungeordneten Liste

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

## Geordnete Listen

Geordnete Listen sind Listen, in denen die Reihenfolge der Elemente wichtig ist. Nehmen wir als Beispiel ein Set von Anweisungen:

```plain
Drive to the end of the road
Turn right
Go straight across the first two roundabouts
Turn left at the third roundabout
The school is on your right, 300 meters up the road
```

Die Markup-Struktur ist die gleiche wie bei ungeordneten Listen, außer dass Sie die Listenelemente in ein {{htmlelement("ol")}}-Element anstelle von `<ul>` einschließen müssen:

```html
<ol>
  <li>Drive to the end of the road</li>
  <li>Turn right</li>
  <li>Go straight across the first two roundabouts</li>
  <li>Turn left at the third roundabout</li>
  <li>The school is on your right, 300 meters up the road</li>
</ol>
```

### Aktives Lernen: Markierung einer geordneten Liste

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

## Aktives Lernen: Markierung unserer Rezeptseite

An diesem Punkt des Artikels haben Sie alle Informationen, die Sie benötigen, um unser Rezeptseiten-Beispiel zu markieren. Sie können sich entweder eine lokale Kopie unserer [text-start.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html) Startdatei speichern und dort die Arbeit erledigen oder es im editierbaren Beispiel unten durchführen. Lokal zu arbeiten ist wahrscheinlich besser, da Sie die Arbeit, die Sie machen, speichern können, während sie im editierbaren Beispiel verloren geht, wenn Sie die Seite das nächste Mal öffnen. Beide Möglichkeiten haben Vor- und Nachteile.

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

Wenn Sie stecken bleiben, können Sie immer die Schaltfläche _Lösung anzeigen_ drücken oder unser [text-complete.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-complete.html) Beispiel in unserem GitHub-Repo überprüfen.

## Verschachteln von Listen

Es ist völlig in Ordnung, eine Liste in eine andere einzuschachteln. Sie möchten vielleicht einige Unterpunkte unter einem oberen Punkt haben. Nehmen wir die zweite Liste aus unserem Rezeptbeispiel:

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

Da die letzten beiden Punkte sehr eng mit dem vorhergehenden zusammenhängen (es handelt sich um Unteranweisungen oder Auswahlmöglichkeiten, die unter diesen Punkt passen), könnte es sinnvoll sein, sie in eine eigene ungeordnete Liste einzuschließen und diese Liste innerhalb des aktuellen vierten Punktes einzufügen. Dies würde so aussehen:

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

Versuchen Sie, zum vorherigen aktiven Lernbeispiel zurückzukehren und die zweite Liste entsprechend zu aktualisieren.

## Beschreibungslisten

Der Zweck von Beschreibungslisten besteht darin, eine Reihe von Elementen und deren zugehörige Beschreibungen zu kennzeichnen, z. B. Begriffe und Definitionen oder Fragen und Antworten. Schauen wir uns ein Beispiel für eine Reihe von Begriffen und Definitionen an:

```plain
soliloquy
In drama, where a character speaks to themselves, representing their inner thoughts or feelings and in the process relaying them to the audience (but not to other characters.)
monologue
In drama, where a character speaks their thoughts out loud to share them with the audience and any other characters present.
aside
In drama, where a character shares a comment only with the audience for humorous or dramatic effect. This is usually a feeling, thought or piece of additional background information
```

Beschreibungslisten verwenden eine andere Umhüllung als die anderen Listentypen — {{htmlelement("dl")}}; zudem wird jeder Begriff in ein {{htmlelement("dt")}} (Begriffsbeschreibung) Element eingeschlossen, und jede Beschreibung wird in ein {{htmlelement("dd")}} (Beschreibungsdefinition) Element eingeschlossen.

### Beispiel für eine Beschreibungslisten

Lassen Sie uns unser Beispiel fertigstellen:

```html
<dl>
  <dt>soliloquy</dt>
  <dd>
    In drama, where a character speaks to themselves, representing their inner
    thoughts or feelings and in the process relaying them to the audience (but
    not to other characters.)
  </dd>
  <dt>monologue</dt>
  <dd>
    In drama, where a character speaks their thoughts out loud to share them
    with the audience and any other characters present.
  </dd>
  <dt>aside</dt>
  <dd>
    In drama, where a character shares a comment only with the audience for
    humorous or dramatic effect. This is usually a feeling, thought, or piece of
    additional background information.
  </dd>
</dl>
```

Die Standardstile des Browsers werden Beschreibungslisten so anzeigen, dass die Beschreibungen etwas von den Begriffen eingerückt sind.

{{EmbedLiveSample('Description_list_example', '100%', '285px')}}

### Mehrfache Beschreibungen für einen Begriff

Es ist erlaubt, dass ein einzelner Begriff mehrere Beschreibungen hat, zum Beispiel:

```html
<dl>
  <dt>aside</dt>
  <dd>
    In drama, where a character shares a comment only with the audience for
    humorous or dramatic effect. This is usually a feeling, thought, or piece of
    additional background information.
  </dd>
  <dd>
    In writing, a section of content that is related to the current topic, but
    doesn't fit directly into the main flow of content so is presented nearby
    (often in a box off to the side.)
  </dd>
</dl>
```

{{EmbedLiveSample('Multiple_descriptions_for_one_term', '100%', '193px')}}

### Aktives Lernen: Markierung eines Satzes von Definitionen

Es ist Zeit, Ihr Können bei Beschreibungslisten zu testen; fügen Sie Elemente in das rohe Textfeld im _Input_-Feld ein, sodass es als Beschreibungslisten im _Output_-Feld erscheint. Sie können gerne Ihre eigenen Begriffe und Beschreibungen verwenden.

Wenn Sie einen Fehler machen, können Sie es jederzeit mit der _Zurücksetzen_-Schaltfläche zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie die _Lösung anzeigen_-Schaltfläche, um die Antwort zu sehen.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
Bacon
The glue that binds the world together.
Eggs
The glue that binds the cake together.
Coffee
The drink that gets the world running in the morning.
A light brown color.
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
  "<dl>\n <dt>Bacon</dt>\n <dd>The glue that binds the world together.</dd>\n <dt>Eggs</dt>\n <dd>The glue that binds the cake together.</dd>\n <dt>Coffee</dt>\n <dd>The drink that gets the world running in the morning.</dd>\n <dd>A light brown color.</dd>\n</dl>";
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

{{ EmbedLiveSample('Active_learning_Marking_up_a_set_of_definitions', 700, 350) }}

## Testen Sie Ihr Können!

Sie haben das Ende dieses Sets von drei Artikeln über grundlegende HTML-Semantikelemente erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um sicherzustellen, dass Sie diese Informationen gespeichert haben, bevor Sie weitermachen – siehe [Test your skills: HTML text basics](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics).

## Zusammenfassung

Das war's für Listen. Als Nächstes gehen wir zu einer Diskussion auf höherer Ebene über. Wir haben gezeigt, wie man einige einzelne Seitenfunktionen implementiert, aber wie strukturiert man eine ganze HTML-Seite? Als Nächstes folgt die Strukturierung von Dokumenten.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content")}}
