---
title: Erweiterte Textformatierung
slug: Learn/HTML/Introduction_to_HTML/Advanced_text_formatting
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}

Es gibt viele weitere Elemente in HTML zur Textformatierung, die wir im Artikel [HTML text fundamentals](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals) nicht behandelt haben. Die in diesem Artikel beschriebenen Elemente sind weniger bekannt, aber dennoch nützlich zu kennen (und dies ist keinesfalls eine vollständige Liste). Hier werden Sie lernen, wie man Zitate, Definitionslisten, Computercode und andere verwandte Texte, Tief- und Hochstellungen, Kontaktinformationen und mehr auszeichnet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Getting started with HTML</a
        > behandelt werden. HTML-Textformatierung, wie in
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >HTML text fundamentals</a
        > behandelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man weniger bekannte HTML-Elemente verwendet, um erweiterte
        semantische Funktionen auszuwerten.
      </td>
    </tr>
  </tbody>
</table>

## Definitionslisten

In HTML text fundamentals haben wir erklärt, wie man [grundlegende Listen auszeichnet](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#lists) und haben die dritte Listenart erwähnt, der Sie gelegentlich begegnen werden — **Definitionslisten**. Der Zweck dieser Listen ist es, eine Reihe von Elementen und deren zugehörigen Beschreibungen, wie Begriffe und Definitionen oder Fragen und Antworten, auszuzeichnen. Schauen wir uns ein Beispiel für einen Satz von Begriffen und Definitionen an:

```plain
soliloquy
In drama, where a character speaks to themselves, representing their inner thoughts or feelings and in the process relaying them to the audience (but not to other characters.)
monologue
In drama, where a character speaks their thoughts out loud to share them with the audience and any other characters present.
aside
In drama, where a character shares a comment only with the audience for humorous or dramatic effect. This is usually a feeling, thought or piece of additional background information
```

Definitionslisten verwenden einen anderen Wrapper als die anderen Listentypen — {{htmlelement("dl")}}; zusätzlich wird jeder Begriff in einem {{htmlelement("dt")}} (description term) Element und jede Beschreibung in einem {{htmlelement("dd")}} (description definition) Element eingerahmt.

### Definitionslistenbeispiel

Lassen Sie uns unser Beispiel zu Ende markieren:

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

Die Standard-Browserstile werden Definitionslisten so anzeigen, dass die Beschreibungen etwas vom Begriff eingerückt sind.

{{EmbedLiveSample('Description_list_example', '100%', '285px')}}

### Mehrere Beschreibungen für einen Begriff

Beachten Sie, dass es erlaubt ist, einen einzigen Begriff mit mehreren Beschreibungen zu haben, zum Beispiel:

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

### Aktives Lernen: Eine Reihe von Definitionen auszeichnen

Es ist an der Zeit, sich selbst an Definitionslisten zu versuchen; fügen Sie die Elemente in den Rohtext im Feld _Input_ ein, sodass sie im Feld _Output_ als Definitionsliste erscheinen. Sie können auch versuchen, eigene Begriffe und Beschreibungen zu verwenden, wenn Sie möchten.

Falls Sie einen Fehler machen, können Sie die Liste immer mit dem _Zurücksetzen_-Button zurücksetzen. Falls Sie wirklich feststecken, drücken Sie den _Lösung anzeigen_-Button, um die Antwort zu sehen.

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

## Zitate

HTML bietet auch Funktionen zum Auszeichnen von Zitaten an; welches Element Sie verwenden, hängt davon ab, ob Sie ein Block- oder Inline-Zitat auszeichnen.

### Blockzitate

Wenn ein Abschnitt aus Blockinhalt (sei es ein Absatz, mehrere Absätze, eine Liste usw.) von woanders her zitiert wird, sollten Sie ihn innerhalb eines {{htmlelement("blockquote")}} Elements einrahmen, um dies zu signalisieren, und eine URL zur Quelle des Zitats in einem [`cite`](/de/docs/Web/HTML/Element/blockquote#cite) Attribut angeben. Zum Beispiel ist das folgende Markup der MDN `<blockquote>` Elementseite entnommen:

```html
<p>
  The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
  <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an
  extended quotation.
</p>
```

Um dies in ein Blockzitat zu verwandeln, würden wir einfach dies tun:

```html
<p>Here is a blockquote:</p>
<blockquote
  cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
  </p>
</blockquote>
```

Die Standarddarstellung im Browser rendert dies als eingezogenen Absatz als Hinweis, dass es sich um ein Zitat handelt. Der Absatz über dem Zitat dient dazu, dies zu demonstrieren.

{{EmbedLiveSample('Blockquotes', '100%', '200px')}}

### Inline-Zitate

Inline-Zitate funktionieren genau auf die gleiche Weise, nur dass sie das {{htmlelement("q")}} Element verwenden. Zum Beispiel enthält das folgende Markup ein Zitat von der MDN `<q>`-Seite:

```html
<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">
    intended for short quotations that don't require paragraph breaks.
  </q>
</p>
```

Die Standarddarstellung im Browser rendert dies als normalen Text, der in Anführungszeichen gesetzt ist, um ein Zitat anzuzeigen, so:

{{EmbedLiveSample('Inline_quotations', '100%', '78px')}}

### Zitationen

Der Inhalt des [`cite`](/de/docs/Web/HTML/Element/blockquote#cite) Attributs klingt nützlich, aber leider machen Browser, Bildschirmleser usw. nicht wirklich viel damit. Es gibt keine Möglichkeit, den Inhalt von `cite` anzuzeigen, ohne eine eigene Lösung mit JavaScript oder CSS zu schreiben. Wenn Sie die Quelle des Zitats auf der Seite zugänglich machen wollen, müssen Sie sie über einen Link oder auf eine andere geeignete Weise im Text zur Verfügung stellen.

Es gibt ein {{htmlelement("cite")}} Element, aber dieses soll den Titel der zitierten Quelle enthalten, z.B. den Namen des Buches. Es gibt jedoch keinen Grund, warum Sie den Text innerhalb von `<cite>` nicht in irgendeiner Weise mit der Quellenangabe des Zitats verlinken könnten:

```html-nolint
<p>
  According to the
  <a href="/en-US/docs/Web/HTML/Element/blockquote">
    <cite>MDN blockquote page</cite></a>:
</p>

<blockquote
  cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
  </p>
</blockquote>

<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">
    intended for short quotations that don't require paragraph breaks.
  </q>
  — <a href="/en-US/docs/Web/HTML/Element/q"><cite>MDN q page</cite></a>.
</p>
```

Zitationen werden standardmäßig in kursiver Schrift dargestellt.

{{EmbedLiveSample('Citations', '100%', '179px')}}

### Aktives Lernen: Wer hat das gesagt?

Zeit für ein weiteres aktives Lernbeispiel! In diesem Beispiel möchten wir, dass Sie:

1. Den mittleren Absatz in ein Blockzitat verwandeln, das ein `cite`-Attribut enthält.
2. "The Need To Eliminate Negative Self Talk" im dritten Absatz in ein Inline-Zitat verwandeln und ein `cite`-Attribut hinzufügen.
3. Wickeln Sie den Titel jeder Quelle in `<cite>`-Tags ein und verwandeln Sie jeden in einen Link zu dieser Quelle.

Die Zitationsquellen, die Sie benötigen, sind:

- `http://www.brainyquote.com/quotes/authors/c/confucius.html` für das Konfuzius-Zitat
- `http://example.com/affirmationsforpositivethinking` für "The Need To Eliminate Negative Self Talk".

Wenn Sie einen Fehler machen, können Sie die Liste immer mit dem _Zurücksetzen_-Button zurücksetzen. Falls Sie wirklich feststecken, drücken Sie den _Lösung anzeigen_-Button, um die Antwort zu sehen.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="input" style="min-height: 150px; width: 95%">
<p>Hello and welcome to my motivation page. As Confucius' quotes site says:</p>
<p>It does not matter how slowly you go as long as you do not stop.</p>
<p>I also love the concept of positive thinking, and The Need To Eliminate Negative Self Talk (as mentioned in Affirmations for Positive Thinking.)</p>
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
  '<p>Hello and welcome to my motivation page. As <a href="http://www.brainyquote.com/quotes/authors/c/confucius.html"><cite>Confucius\' quotes site</cite></a> says:</p>\n\n<blockquote cite="http://www.brainyquote.com/quotes/authors/c/confucius.html">\n <p>It does not matter how slowly you go as long as you do not stop.</p>\n</blockquote>\n\n<p>I also love the concept of positive thinking, and <q cite="http://example.com/affirmationsforpositivethinking">The Need To Eliminate Negative Self Talk</q> (as mentioned in <a href="http://example.com/affirmationsforpositivethinking"><cite>Affirmations for Positive Thinking</cite></a>.)</p>';
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

{{ EmbedLiveSample('Active_learning_Who_said_that', 700, 450) }}

## Abkürzungen

Ein weiteres recht verbreitetes Element, dem Sie beim Durchstöbern des Webs begegnen werden, ist {{htmlelement("abbr")}} — es wird verwendet, um eine Abkürzung oder ein Akronym einzurahmen. Wenn Sie entweder eine Abkürzung oder ein Akronym einfügen, geben Sie beim ersten Gebrauch eine vollständige Ausschreibung des Begriffs im Klartext an und markieren den `<abbr>` mit der Abkürzung. Dies liefert den User Agents einen Hinweis darauf, wie der Inhalt ausgesprochen/angezeigt werden soll, während alle Benutzer über die Bedeutung der Abkürzung informiert werden.

Wenn die Ergänzung zur Abkürzung neben dem Kürzel selbst wenig Sinn ergibt und der Begriff eher kurz ist, geben Sie die vollständige Ausschreibung des Begriffs als Wert des [`title`](/de/docs/Web/HTML/Global_attributes#title) Attributs an:

### Abkürzungsbeispiel

Schauen wir uns ein Beispiel an.

```html
<p>
  We use <abbr>HTML</abbr>, Hypertext Markup Language, to structure our web
  documents.
</p>

<p>
  I think <abbr title="Reverend">Rev.</abbr> Green did it in the kitchen with
  the chainsaw.
</p>
```

Diese werden etwa so aussehen:

{{EmbedLiveSample('Abbreviation_example', '100%', '150')}}

> [!NOTE]
> Frühere HTML-Versionen unterstützten auch das {{htmlelement("acronym")}} Element, aber es wurde aus der HTML-Spezifikation entfernt, zugunsten der Verwendung von `<abbr>`, um sowohl Abkürzungen als auch Akronyme darzustellen. `<acronym>` sollte nicht verwendet werden.

### Aktives Lernen: Eine Abkürzung auszeichnen

Für diese einfache aktive Lernaufgabe möchten wir, dass Sie eine Abkürzung auszeichnen. Sie können unser Beispiel unten verwenden oder es durch eines Ihrer eigenen ersetzen.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="input" style="min-height: 50px; width: 95%">
<p>NASA, the National Aeronautics and Space Administration, sure does some exciting work.</p>
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
  "<p><abbr>NASA</abbr>, the National Aeronautics and Space Administration, sure does some exciting work.</p>";
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

{{ EmbedLiveSample('Active_learning_marking_up_an_abbreviation', 700, 300) }}

## Kontaktinformationen auszeichnen

HTML verfügt über ein Element zum Auszeichnen von Kontaktdaten — {{htmlelement("address")}}. Dies wird um Ihre Kontaktdaten eingefasst, zum Beispiel:

```html
<address>Chris Mills, Manchester, The Grim North, UK</address>
```

Es könnte auch komplexere Markups und andere Formen von Kontaktinformationen enthalten, zum Beispiel:

```html
<address>
  <p>
    Chris Mills<br />
    Manchester<br />
    The Grim North<br />
    UK
  </p>

  <ul>
    <li>Tel: 01234 567 890</li>
    <li>Email: me@grim-north.co.uk</li>
  </ul>
</address>
```

Beachten Sie, dass so etwas auch in Ordnung wäre, wenn die verlinkte Seite die Kontaktinformationen enthielte:

```html
<address>
  Page written by <a href="../authors/chris-mills/">Chris Mills</a>.
</address>
```

> [!NOTE]
> Das {{htmlelement("address")}} Element sollte nur verwendet werden, um Kontaktinformationen für das Dokument bereitzustellen, das im nächstgelegenen {{htmlelement("article")}} oder {{htmlelement("body")}} Element enthalten ist. Es wäre korrekt, es im Footer einer Seite zu verwenden, um die Kontaktinformationen der gesamten Seite einzuschließen, oder innerhalb eines Artikels für die Kontaktdaten des Autors, aber nicht um eine Liste von Adressen auszuwerten, die nichts mit dem Inhalt dieser Seite zu tun haben.

## Hochstellung und Tiefstellung

Sie werden gelegentlich Hochstellung und Tiefstellung verwenden müssen, wenn Sie Elemente wie Daten, chemische Formeln und mathematische Gleichungen auszeichnen, damit sie die korrekte Bedeutung haben. Die {{htmlelement("sup")}} und {{htmlelement("sub")}} Elemente erledigen diese Aufgabe. Zum Beispiel:

```html
<p>My birthday is on the 25<sup>th</sup> of May 2001.</p>
<p>
  Caffeine's chemical formula is
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.
</p>
<p>If x<sup>2</sup> is 9, x must equal 3 or -3.</p>
```

Die Ausgabe dieses Codes sieht so aus:

{{ EmbedLiveSample('Superscript_and_subscript', '100%', 160) }}

## Computercode darstellen

Es gibt eine Reihe von Elementen, die zum Auszeichnen von Computercode mit HTML zur Verfügung stehen:

- {{htmlelement("code")}}: Zum Auszeichnen allgemeiner Stücke von Computercode.
- {{htmlelement("pre")}}: Zum Beibehalten von Leerzeichen (generell Codeblöcke) — wenn Sie Einzüge oder übermäßige Leerzeichen in Ihrem Text verwenden, ignorieren Browser diese und Sie werden sie nicht auf Ihrer gerenderten Seite sehen. Wenn Sie den Text jedoch in `<pre></pre>` Tags einbetten, wird Ihr Leerraum identisch mit der Darstellung in Ihrem Texteditor gerendert.
- {{htmlelement("var")}}: Speziell zum Auszeichnen von Variablennamen.
- {{htmlelement("kbd")}}: Zum Auszeichnen von Tastatur (und anderen Arten von) Eingabedaten, die in den Computer eingegeben werden.
- {{htmlelement("samp")}}: Zum Auszeichnen der Ausgabe eines Computerprogramms.

Schauen wir uns Beispiele für diese Elemente an und wie sie verwendet werden, um Computercode darzustellen. Wenn Sie die vollständige Datei sehen möchten, werfen Sie einen Blick auf die [other-semantics.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/advanced-text-formatting/other-semantics.html) Beispieldatei. Sie können die Datei herunterladen und in Ihrem Browser öffnen, um sie selbst zu sehen, aber hier ist ein Ausschnitt des Codes:

```html
<pre><code>const para = document.querySelector('p');

para.onclick = function() {
  alert('Owww, stop poking me!');
}</code></pre>

<p>
  You shouldn't use presentational elements like <code>&lt;font&gt;</code> and
  <code>&lt;center&gt;</code>.
</p>

<p>
  In the above JavaScript example, <var>para</var> represents a paragraph
  element.
</p>

<p>Select all the text with <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.</p>

<pre>$ <kbd>ping mozilla.org</kbd>
<samp>PING mozilla.org (63.245.215.20): 56 data bytes
64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>
```

Der obige Code wird so aussehen:

{{ EmbedLiveSample('Representing_computer_code','100%',350) }}

## Zeiten und Daten auszeichnen

HTML bietet auch das {{htmlelement("time")}} Element, um Zeiten und Daten in einem maschinenlesbaren Format auszuzeichnen. Zum Beispiel:

```html
<time datetime="2016-01-20">20 January 2016</time>
```

Warum ist das nützlich? Nun, es gibt viele verschiedene Arten, wie Menschen Daten notieren. Das obige Datum könnte so geschrieben werden:

<!-- markdownlint-disable MD033 -->

- 20. Januar 2016
- 20. Januar 2016
- Jan 20 2016
- 20/01/16
- 01/20/16
- Der 20. des nächsten Monats
- <span lang="fr">20e Janvier 2016</span>
- <span lang="ja">2016 年 1 月 20 日</span>
- Und so weiter

<!-- markdownlint-enable MD033 -->

Aber diese verschiedenen Formen können von Computern nicht leicht erkannt werden — was ist, wenn Sie die Daten aller Ereignisse auf einer Seite automatisch erfassen und in einen Kalender einfügen möchten? Das {{htmlelement("time")}} Element ermöglicht es Ihnen, eine unmissverständliche, maschinenlesbare Zeit/datum für diesen Zweck anzuhängen.

Das einfache Beispiel oben bietet nur ein einfaches maschinenlesbares Datum, aber es gibt viele andere Optionen, die möglich sind, zum Beispiel:

```html
<!-- Standard simple date -->
<time datetime="2016-01-20">20 January 2016</time>
<!-- Just year and month -->
<time datetime="2016-01">January 2016</time>
<!-- Just month and day -->
<time datetime="01-20">20 January</time>
<!-- Just time, hours and minutes -->
<time datetime="19:30">19:30</time>
<!-- You can do seconds and milliseconds too! -->
<time datetime="19:30:01.856">19:30:01.856</time>
<!-- Date and time -->
<time datetime="2016-01-20T19:30">7.30pm, 20 January 2016</time>
<!-- Date and time with timezone offset -->
<time datetime="2016-01-20T19:30+01:00">
  7.30pm, 20 January 2016 is 8.30pm in France
</time>
<!-- Calling out a specific week number -->
<time datetime="2016-W04">The fourth week of 2016</time>
```

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Test your skills: Advanced HTML text](/de/docs/Learn/HTML/Introduction_to_HTML/Test_your_skills:_Advanced_HTML_text).

## Zusammenfassung

Das markiert das Ende unserer Studie zu HTML-Textsemantik. Beachten Sie, dass das, was Sie während dieses Kurses gesehen haben, keine vollständige Liste von HTML-Text-Elementen ist — wir wollten versuchen, die wesentlichen und einige der häufigeren, die Sie in freier Wildbahn sehen werden, oder zumindest interessant finden könnten, abzudecken. Um viel mehr HTML-Elemente zu finden, können Sie einen Blick auf unser [HTML element reference](/de/docs/Web/HTML/Element) werfen (der [Inline text semantics](/de/docs/Web/HTML/Element#inline_text_semantics) Abschnitt wäre ein großartiger Ausgangspunkt). Im nächsten Artikel werden wir uns die HTML-Elemente ansehen, die Sie verwenden würden, um [die verschiedenen Teile eines HTML-Dokuments zu strukturieren](/de/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure).

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}
