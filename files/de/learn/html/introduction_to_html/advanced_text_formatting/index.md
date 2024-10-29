---
title: Erweiterte Textformatierung
slug: Learn/HTML/Introduction_to_HTML/Advanced_text_formatting
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}

Es gibt viele weitere Elemente in HTML zur Textformatierung, die wir im Artikel [HTML-Textgrundlagen](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals) nicht behandelt haben. Die in diesem Artikel beschriebenen Elemente sind weniger bekannt, aber dennoch nützlich, um sie zu kennen (und dies ist keinesfalls eine vollständige Liste). Hier erfahren Sie, wie man Zitate, Definitionslisten, Computer-Code und andere verwandte Texte, Tief- und Hochstellungen, Kontaktinformationen und mehr auszeichnet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Erste Schritte mit HTML</a
        > behandelt werden. HTML-Textformatierung, wie sie in
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >HTML-Textgrundlagen</a
        > behandelt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen, wie man weniger bekannte HTML-Elemente verwendet, um erweiterte semantische Funktionen zu kennzeichnen.
      </td>
    </tr>
  </tbody>
</table>

## Definitionslisten

In HTML-Textgrundlagen haben wir uns angeschaut, wie man [grundlegende Listen](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#lists) in HTML markiert und wir haben die dritte Art von Listen erwähnt, auf die Sie gelegentlich stoßen werden — **Definitionslisten**. Der Zweck dieser Listen besteht darin, eine Reihe von Elementen und ihre zugehörigen Beschreibungen zu markieren, wie Begriffe und Definitionen oder Fragen und Antworten. Schauen wir uns ein Beispiel für eine Reihe von Begriffen und Definitionen an:

```plain
soliloquy
In drama, where a character speaks to themselves, representing their inner thoughts or feelings and in the process relaying them to the audience (but not to other characters.)
monologue
In drama, where a character speaks their thoughts out loud to share them with the audience and any other characters present.
aside
In drama, where a character shares a comment only with the audience for humorous or dramatic effect. This is usually a feeling, thought or piece of additional background information
```

Definitionslisten verwenden eine andere Hülle als die anderen Listentypen — {{htmlelement("dl")}}; jedes Element wird zusätzlich in ein {{htmlelement("dt")}} (Definitionsterm) Element eingeschlossen, und jede Beschreibung ist in ein {{htmlelement("dd")}} (Definitionsbeschreibung) Element eingeschlossen.

### Beispiel für eine Definitionsliste

Lassen Sie uns unser Beispiel fertig auszeichnen:

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

Die Standardstile des Browsers zeigen Definitionslisten mit etwas eingerückten Beschreibungen im Vergleich zu den Begriffen an.

{{EmbedLiveSample('Description_list_example', '100%', '285px')}}

### Mehrere Beschreibungen für einen Begriff

Beachten Sie, dass es erlaubt ist, ein einzelnes Element mit mehreren Beschreibungen zu haben, zum Beispiel:

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

### Aktives Lernen: Ein Satz von Definitionen markieren

Es ist Zeit, Ihr Können an Definitionslisten auszuprobieren; fügen Sie Elemente zum Rohtext im _Eingabefeld_ hinzu, sodass es im _Ausgabefeld_ als Definitionsliste erscheint. Sie können Ihre eigenen Begriffe und Beschreibungen ausprobieren, wenn Sie möchten.

Wenn Sie einen Fehler machen, können Sie ihn jederzeit mit der _Zurücksetzen_-Schaltfläche zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Schaltfläche, um die Antwort zu sehen.

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

HTML bietet auch Funktionen zum Markieren von Zitaten; welches Element Sie verwenden, hängt davon ab, ob Sie ein Block- oder Inline-Zitat markieren.

### Blockzitate

Wenn ein Abschnitt von Blockinhalt (sei es ein Absatz, mehrere Absätze, eine Liste usw.) aus einer anderen Quelle zitiert wird, sollten Sie ihn in ein {{htmlelement("blockquote")}}-Element einfügen, um dies anzuzeigen und eine URL zur Quelle des Zitats in einem [`cite`](/de/docs/Web/HTML/Element/blockquote#cite)-Attribut angeben. Zum Beispiel, das folgende Markup ist von der MDN `<blockquote>`-Element-Seite übernommen:

```html
<p>
  The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
  <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an
  extended quotation.
</p>
```

Um dies in ein Blockzitat zu verwandeln, würden wir Folgendes tun:

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

Die Standardstilgebung des Browsers rendert dies als eingerückten Absatz, als Hinweis darauf, dass es sich um ein Zitat handelt; der Absatz über dem Zitat ist dazu da, dies zu demonstrieren.

{{EmbedLiveSample('Blockquotes', '100%', '200px')}}

### Inline-Zitate

Inline-Zitate funktionieren auf genau die gleiche Weise, außer dass sie das {{htmlelement("q")}}-Element verwenden. Zum Beispiel enthält das folgende Markup ein Zitat von der MDN `<q>`-Seite:

```html
<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">
    intended for short quotations that don't require paragraph breaks.
  </q>
</p>
```

Die Standardstilgebung des Browsers rendert dies als normalen Text in Anführungszeichen, um ein Zitat anzuzeigen, etwa so:

{{EmbedLiveSample('Inline_quotations', '100%', '78px')}}

### Zitationen

Der Inhalt des [`cite`](/de/docs/Web/HTML/Element/blockquote#cite)-Attributs klingt nützlich, aber leider tun Browser, Screenreader usw. nicht viel damit. Es gibt keine Möglichkeit, den Inhalt von `cite` anzuzeigen, ohne eine eigene Lösung mit JavaScript oder CSS zu schreiben. Wenn Sie die Quelle des Zitats auf der Seite verfügbar machen möchten, müssen Sie es im Text über einen Link oder auf eine andere geeignete Weise verfügbar machen.

Es gibt ein {{htmlelement("cite")}}-Element, aber dieses ist dazu gedacht, den Titel der zitierten Ressource zu enthalten, z.B. den Namen des Buches. Es gibt jedoch keinen Grund, warum Sie den Text innerhalb von `<cite>` nicht auf irgendeine Weise mit der Quelle des Zitats verlinken sollten:

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

Standardmäßig werden Zitationen in kursiver Schrift angezeigt.

{{EmbedLiveSample('Citations', '100%', '179px')}}

### Aktives Lernen: Wer hat das gesagt?

Zeit für ein weiteres aktives Lernbeispiel! In diesem Beispiel möchten wir, dass Sie:

1. Den mittleren Absatz in ein Blockzitat mit einem `cite`-Attribut verwandeln.
2. "The Need To Eliminate Negative Self Talk" im dritten Absatz in ein Inline-Zitat umwandeln und ein `cite`-Attribut hinzufügen.
3. Den Titel jeder Quelle in `<cite>`-Tags einschließen und jeden in einen Link zur jeweiligen Quelle umwandeln.

Die benötigten Zitationsquellen sind:

- `http://www.brainyquote.com/quotes/authors/c/confucius.html` für das Konfuzius-Zitat
- `http://example.com/affirmationsforpositivethinking` für "The Need To Eliminate Negative Self Talk".

Wenn Sie einen Fehler machen, können Sie ihn jederzeit mit der _Zurücksetzen_-Schaltfläche zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Schaltfläche, um die Antwort zu sehen.

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

Ein weiteres ziemlich verbreitetes Element, dem Sie im Web begegnen werden, ist {{htmlelement("abbr")}} — es wird verwendet, um eine Abkürzung oder ein Akronym zu kennzeichnen. Wenn Sie entweder die vollständige Entfaltung des Begriffs beim erstmaligen Einsatz im Klartext angeben, sollten Sie das `<abbr>` zur Kennzeichnung der Abkürzung verwenden. Dies gibt den Nutzeragenten einen Hinweis, wie der Inhalt angekündigt/angezeigt werden soll, während alle Benutzer über die Bedeutung der Abkürzung informiert werden.

Wenn die Bereitstellung der Entfaltung zusätzlich zur Abkürzung wenig Sinn ergibt und es sich bei der Abkürzung oder dem Akronym um eine recht kurze Bezeichnung handelt, geben Sie die vollständige Entfaltung des Begriffs als Wert des [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attributs an:

### Beispiel für Abkürzungen

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

Diese werden in etwa wie folgt angezeigt:

{{EmbedLiveSample('Abbreviation_example', '100%', '150')}}

> [!NOTE]
> Frühere Versionen von html unterstützten auch das {{htmlelement("acronym")}}-Element, aber es wurde aus der HTML-Spezifikation entfernt zugunsten der Verwendung von `<abbr>` zur Darstellung von Abkürzungen und Akronymen. `<acronym>` sollte nicht verwendet werden.

### Aktives Lernen: Eine Abkürzung markieren

Für diese einfache aktive Lernaufgabe möchten wir, dass Sie eine Abkürzung kennzeichnen. Sie können unser Beispiel unten verwenden oder es durch ein eigenes ersetzen.

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

HTML hat ein Element für das Markieren von Kontaktinformationen — {{htmlelement("address")}}. Dieses umschließt Ihre Kontaktinformationen, zum Beispiel:

```html
<address>Chris Mills, Manchester, The Grim North, UK</address>
```

Es könnte auch komplexere Markups und andere Arten von Kontaktinformationen enthalten, zum Beispiel:

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

Beachten Sie, dass dies ebenfalls in Ordnung wäre, wenn die verlinkte Seite die Kontaktinformationen enthält:

```html
<address>
  Page written by <a href="../authors/chris-mills/">Chris Mills</a>.
</address>
```

> [!NOTE]
> Das {{htmlelement("address")}}-Element sollte nur verwendet werden, um Kontaktinformationen für das Dokument bereitzustellen, das im nächstgelegenen {{htmlelement("article")}}- oder {{htmlelement("body")}}-Element enthalten ist. Es wäre korrekt, es im Footer einer Seite zu verwenden, um die Kontaktinformationen der gesamten Seite zu enthalten, oder innerhalb eines Artikels für die Kontaktdaten des Autors, aber nicht, um eine Liste von Adressen zu kennzeichnen, die nicht mit dem Inhalt dieser Seite zusammenhängen.

## Hoch- und Tiefstellungen

Gelegentlich müssen Sie Hoch- und Tiefstellungen verwenden, wenn Sie Elemente wie Daten, chemische Formeln und mathematische Gleichungen kennzeichnen, damit sie die richtige Bedeutung haben. Die {{htmlelement("sup")}}- und {{htmlelement("sub")}}-Elemente übernehmen diese Aufgabe. Zum Beispiel:

```html
<p>My birthday is on the 25<sup>th</sup> of May 2001.</p>
<p>
  Caffeine's chemical formula is
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.
</p>
<p>If x<sup>2</sup> is 9, x must equal 3 or -3.</p>
```

Die Ausgabe dieses Codes sieht folgendermaßen aus:

{{ EmbedLiveSample('Superscript_and_subscript', '100%', 160) }}

## Repräsentation von Computercode

Es gibt eine Reihe von Elementen zum Markieren von Computercode mit HTML:

- {{htmlelement("code")}}: Zum Markieren von generischen Codeausschnitten.
- {{htmlelement("pre")}}: Zum Beibehalten von Leerraum (in der Regel Codeblöcke) — wenn Sie Einrückungen oder überflüssigen Leerraum in Ihrem Text verwenden, ignorieren Browser diese, und Sie sehen sie nicht auf Ihrer gerenderten Seite. Wenn Sie den Text jedoch in `<pre></pre>`-Tags einfügen, wird Ihr Leerraum identisch wie in Ihrem Texteditor gerendert.
- {{htmlelement("var")}}: Zum speziell Markieren von Variablennamen.
- {{htmlelement("kbd")}}: Zum Markieren von Tastatur- (und anderen) Eingaben in den Computer.
- {{htmlelement("samp")}}: Zum Markieren der Ausgabe eines Computerprogramms.

Schauen wir uns Beispiele dieser Elemente und ihre Verwendung zur Darstellung von Computercode an. Wenn Sie die vollständige Datei sehen möchten, schauen Sie sich die [other-semantics.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/advanced-text-formatting/other-semantics.html) Beispieldatei an. Sie können die Datei herunterladen und in Ihrem Browser öffnen, um sich selbst ein Bild zu machen, aber hier ist ein Ausschnitt des Codes:

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

Der obige Code sieht folgendermaßen aus:

{{ EmbedLiveSample('Representing_computer_code','100%',350) }}

## Zeiten und Daten markieren

HTML bietet auch das {{htmlelement("time")}}-Element zum Markieren von Zeiten und Daten in einem maschinenlesbaren Format. Zum Beispiel:

```html
<time datetime="2016-01-20">20 January 2016</time>
```

Warum ist das nützlich? Nun, es gibt viele verschiedene Möglichkeiten, wie Menschen Daten aufschreiben. Das obige Datum könnte geschrieben werden als:

<!-- markdownlint-disable MD033 -->

- 20\. Januar 2016
- 20\. Januar 2016
- 20\. Jan. 2016
- 20/01/16
- 01/20/16
- Der 20. des nächsten Monats
- <span lang="fr">20e Janvier 2016</span>
- <span lang="ja">2016 年 1 月 20 日</span>
- Und so weiter

<!-- markdownlint-enable MD033 -->

Aber diese verschiedenen Formen können von Computern nicht leicht erkannt werden — was, wenn Sie die Daten aller Ereignisse auf einer Seite automatisch erfassen und in einen Kalender einfügen wollten? Das {{htmlelement("time")}}-Element ermöglicht es Ihnen, eine eindeutige, maschinenlesbare Zeit/Datum für diesen Zweck anzuhängen.

Das grundlegende Beispiel oben bietet einfach ein einfaches maschinenlesbares Datum, aber es gibt viele andere Optionen, die möglich sind, zum Beispiel:

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

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Test your skills: Advanced HTML text](/de/docs/Learn/HTML/Introduction_to_HTML/Test_your_skills:_Advanced_HTML_text).

## Zusammenfassung

Damit endet unser Studium der HTML-Textsemantik. Bedenken Sie, dass das, was Sie in diesem Kurs gesehen haben, keine vollständige Liste von HTML-Text-Elementen ist — wir wollten versuchen, die wesentlichen und einige der häufigsten, die Sie in der freien Wildbahn sehen werden, oder zumindest interessante, abzudecken. Um noch viele weitere HTML-Elemente zu finden, können Sie sich unser [HTML-Element-Referenz](/de/docs/Web/HTML/Element) ansehen (der Abschnitt [Inline text semantics](/de/docs/Web/HTML/Element#inline_text_semantics) wäre ein großartiger Ausgangspunkt). Im nächsten Artikel schauen wir uns die HTML-Elemente an, die Sie verwenden würden, um [die verschiedenen Teile eines HTML-Dokuments zu strukturieren](/de/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure).

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}
