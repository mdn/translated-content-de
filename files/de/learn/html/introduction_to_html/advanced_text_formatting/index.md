---
title: Fortschrittliches Textformat
slug: Learn/HTML/Introduction_to_HTML/Advanced_text_formatting
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}

Es gibt viele andere Elemente in HTML zum Formatieren von Text, die wir im Artikel zu den [HTML-Textgrundlagen](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals) nicht erwähnt haben. Die hier beschriebenen Elemente sind weniger bekannt, aber dennoch nützlich zu kennen (und dies ist bei weitem keine vollständige Liste). Hier lernen Sie, wie Sie Zitate, Definitionslisten, Computercode und andere verwandte Texte, Tief- und Hochstellungen, Kontaktdaten und mehr auszeichnen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Erste Schritte mit HTML</a
        > behandelt werden. HTML-Textformatierung, wie in
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >HTML-Textgrundlagen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu lernen, wie man weniger bekannte HTML-Elemente nutzt, um fortgeschrittene semantische Funktionen zu kennzeichnen.
      </td>
    </tr>
  </tbody>
</table>

## Definitionslisten

In den HTML-Textgrundlagen haben wir erläutert, wie man [einfache Listen](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#lists) in HTML auszeichnet, und wir haben den dritten Listentyp erwähnt, dem Sie gelegentlich begegnen werden — **Definitionslisten**. Der Zweck dieser Listen besteht darin, eine Reihe von Elementen und deren zugehörige Beschreibungen, wie Begriffe und Definitionen oder Fragen und Antworten, zu kennzeichnen. Schauen wir uns ein Beispiel für eine Reihe von Begriffen und Definitionen an:

```plain
soliloquy
In drama, where a character speaks to themselves, representing their inner thoughts or feelings and in the process relaying them to the audience (but not to other characters.)
monologue
In drama, where a character speaks their thoughts out loud to share them with the audience and any other characters present.
aside
In drama, where a character shares a comment only with the audience for humorous or dramatic effect. This is usually a feeling, thought or piece of additional background information.
```

Definitionslisten verwenden einen anderen Wrapper als die anderen Listentypen — {{htmlelement("dl")}}; zudem wird jeder Begriff in ein {{htmlelement("dt")}}-Element (Definitionsterm) und jede Beschreibung in ein {{htmlelement("dd")}}-Element (Definitionsbeschreibung) eingewickelt.

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

Die Standardstile des Browsers zeigen Definitionslisten an, indem die Beschreibungen etwas von den Begriffen eingerückt werden.

{{EmbedLiveSample('Description_list_example', '100%', '285px')}}

### Mehrere Beschreibungen für einen Begriff

Beachten Sie, dass es zulässig ist, einen einzelnen Begriff mit mehreren Beschreibungen zu haben, zum Beispiel:

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

Es ist Zeit, sich mit Definitionslisten auszuprobieren; fügen Sie Elemente in den Rohtext im _Input_-Feld ein, sodass er als Definitionsliste im _Output_-Feld erscheint. Sie können auch eigene Begriffe und Beschreibungen verwenden, wenn Sie möchten.

Wenn Sie einen Fehler machen, können Sie immer mit der _Reset_-Taste zurücksetzen. Wenn Sie wirklich festsitzen, drücken Sie die _Show solution_-Taste, um die Antwort zu sehen.

```html hidden
<h2>Live-Ausgabe</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Bearbeitbarer Code</h2>
<p class="a11y-label">
  Drücken Sie Esc, um den Fokus vom Codebereich zu entfernen (Tab fügt ein Tab-Zeichen ein).
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

HTML bietet auch Möglichkeiten zur Auszeichnung von Zitaten; wobei das gewählte Element davon abhängt, ob es sich um ein Block- oder Inline-Zitat handelt.

### Blockzitate

Wenn ein Abschnitt von Blockinhalt (sei es ein Absatz, mehrere Absätze, eine Liste usw.) von anderswo zitiert wird, sollten Sie ihn in einem {{htmlelement("blockquote")}}-Element einschließen, um dies zu kennzeichnen, und eine URL, die auf die Quelle des Zitats hinweist, in einem [`cite`](/de/docs/Web/HTML/Element/blockquote#cite)-Attribut einfügen. Zum Beispiel ist das folgende Markup von der MDN `<blockquote>`-Elementseite:

```html
<p>
  The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
  <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an
  extended quotation.
</p>
```

Um dies in ein Blockzitat zu verwandeln, würden wir einfach Folgendes tun:

```html
<p>Hier ist ein Blockzitat:</p>
<blockquote
  cite="https://developer.mozilla.org/de/docs/Web/HTML/Element/blockquote">
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
  </p>
</blockquote>
```

Die Standardstilierung des Browsers zeigt dies als eingerückten Absatz an, als Hinweis darauf, dass es sich um ein Zitat handelt; der Absatz über dem Zitat dient dazu, dies zu demonstrieren.

{{EmbedLiveSample('Blockquotes', '100%', '200px')}}

### Inline-Zitate

Inline-Zitate funktionieren auf genau dieselbe Weise, außer dass sie das {{htmlelement("q")}}-Element verwenden. Zum Beispiel enthält das folgende Markup ein Zitat von der MDN `<q>`-Seite:

```html
<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q cite="https://developer.mozilla.org/de/docs/Web/HTML/Element/q">
    intended for short quotations that don't require paragraph breaks.
  </q>
</p>
```

Die Standardstilierung des Browsers zeigt dies als normalen Text, der in Anführungszeichen gesetzt ist, um ein Zitat anzuzeigen, etwa so:

{{EmbedLiveSample('Inline_quotations', '100%', '78px')}}

### Zitate

Der Inhalt des [`cite`](/de/docs/Web/HTML/Element/blockquote#cite)-Attributs klingt nützlich, aber leider machen Browser, Bildschirmleser usw. nicht wirklich viel damit. Es gibt keine Möglichkeit, den Browser dazu zu bringen, den Inhalt von `cite` anzuzeigen, ohne eine eigene Lösung mit JavaScript oder CSS zu schreiben. Wenn Sie die Quelle des Zitats auf der Seite verfügbar machen möchten, müssen Sie sie in Textform über einen Link oder eine andere geeignete Methode verfügbar machen.

Es gibt ein {{htmlelement("cite")}}-Element, das jedoch soll den Titel der Quelle enthalten, die zitiert wird, z.B. den Namen des Buches. Es gibt jedoch keinen Grund, warum Sie den Text innerhalb von `<cite>` nicht auf irgendeine Weise zur Zitatquelle verlinken sollten:

```html-nolint
<p>
  Laut der
  <a href="/de/docs/Web/HTML/Element/blockquote">
    <cite>MDN blockquote Seite</cite></a>:
</p>

<blockquote
  cite="https://developer.mozilla.org/de/docs/Web/HTML/Element/blockquote">
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
  </p>
</blockquote>

<p>
  Das Element „quote“ — <code>&lt;q&gt;</code> — ist
  <q cite="https://developer.mozilla.org/de/docs/Web/HTML/Element/q">
    intended for short quotations that don't require paragraph breaks.
  </q>
  — <a href="/de/docs/Web/HTML/Element/q"><cite>MDN q Seite</cite></a>.
</p>
```

Zitate werden standardmäßig in Kursivschrift dargestellt.

{{EmbedLiveSample('Citations', '100%', '179px')}}

### Aktives Lernen: Wer hat das gesagt?

Zeit für ein weiteres aktives Lernbeispiel! In diesem Beispiel möchten wir, dass Sie:

1. Den mittleren Absatz in ein Blockzitat verwandeln, das ein `cite`-Attribut enthält.
2. „Die Notwendigkeit, negatives Selbstgespräch zu eliminieren“ im dritten Paragraphen in ein Inline-Zitat umwandeln und ein `cite`-Attribut hinzufügen.
3. Den Titel jeder Quelle in `<cite>`-Tags einrahmen und jede in einen Link zu dieser Quelle verwandeln.

Die für die Quellen erforderlichen Zitate sind:

- `http://www.brainyquote.com/quotes/authors/c/confucius.html` für das Zitat von Konfuzius
- `http://example.com/affirmationsforpositivethinking` für „Die Notwendigkeit, negatives Selbstgespräch zu eliminieren“.

Wenn Sie einen Fehler machen, können Sie immer mit der _Reset_-Taste zurücksetzen. Wenn Sie wirklich festsitzen, drücken Sie die _Show solution_-Taste, um die Antwort zu sehen.

```html hidden
<h2>Live-Ausgabe</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Bearbeitbarer Code</h2>
<p class="a11y-label">
  Drücken Sie Esc, um den Fokus vom Codebereich zu entfernen (Tab fügt ein Tab-Zeichen ein).
</p>

<textarea id="code" class="input" style="min-height: 150px; width: 95%">
<p>Hallo und willkommen auf meiner Motivationsseite. Wie auf der Zitate-Seite von Konfuzius steht:</p>
<p>Es spielt keine Rolle, wie langsam Sie gehen, solange Sie nicht aufhören.</p>
<p>Ich liebe auch das Konzept des positiven Denkens und die Notwendigkeit, negatives Selbstgespräch zu eliminieren (wie in Affirmationen für positives Denken erwähnt).</p>
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
  '<p>Hallo und willkommen auf meiner Motivationsseite. Wie <a href="http://www.brainyquote.com/quotes/authors/c/confucius.html"><cite>die Zitate-Seite von Konfuzius</cite></a> sagt:</p>\n\n<blockquote cite="http://www.brainyquote.com/quotes/authors/c/confucius.html">\n <p>Es spielt keine Rolle, wie langsam Sie gehen, solange Sie nicht aufhören.</p>\n</blockquote>\n\n<p>Ich liebe auch das Konzept des positiven Denkens und <q cite="http://example.com/affirmationsforpositivethinking">die Notwendigkeit, negatives Selbstgespräch zu eliminieren</q> (wie in <a href="http://example.com/affirmationsforpositivethinking"><cite>Affirmationen für positives Denken</cite></a> erwähnt).</p>';
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

Ein weiteres ziemlich häufiges Element, das Sie beim Durchsuchen des Webs treffen werden, ist {{htmlelement("abbr")}} — dies wird verwendet, um eine Abkürzung oder ein Akronym zu kennzeichnen. Wenn Sie entweder eines verwenden, geben Sie bei der ersten Verwendung eine vollständige Erweiterung des Begriffs im Klartext an, zusammen mit `<abbr>`, um die Abkürzung zu kennzeichnen. Dies gibt Benutzeragenten einen Hinweis darauf, wie der Inhalt angekündigt/dargestellt werden soll und informiert alle Benutzer darüber, was die Abkürzung bedeutet.

Wenn es keinen Sinn macht, die Erweiterung zusätzlich zur Abkürzung bereitzustellen, und wenn die Abkürzung oder das Akronym ein ziemlich kürzer Begriff ist, geben Sie die vollständige Erweiterung des Begriffs als Wert des [`title`](/de/docs/Web/HTML/Global_attributes#title)-Attributs an:

### Beispiel einer Abkürzung

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

Diese werden in etwa so aussehen:

{{EmbedLiveSample('Abbreviation_example', '100%', '150')}}

> [!NOTE]
> Frühere Versionen von html unterstützten auch das {{htmlelement("acronym")}}-Element, aber es wurde aus der HTML-Spezifikation entfernt, um die Verwendung von `<abbr>` zur Darstellung von sowohl Abkürzungen als auch Akronymen zu begünstigen. `<acronym>` sollte nicht verwendet werden.

### Aktives Lernen: Eine Abkürzung kennzeichnen

Bei diesem einfachen aktiven Lernauftrag möchten wir, dass Sie eine Abkürzung kennzeichnen. Sie können unser Beispiel unten verwenden oder es durch eines Ihrer eigenen ersetzen.

```html hidden
<h2>Live-Ausgabe</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Bearbeitbarer Code</h2>
<p class="a11y-label">
  Drücken Sie Esc, um den Fokus vom Codebereich zu entfernen (Tab fügt ein Tab-Zeichen ein).
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

## Kontaktdaten auszeichnen

HTML hat ein Element zum Auszeichnen von Kontaktdaten — {{htmlelement("address")}}. Dieses umschließt Ihre Kontaktdaten, zum Beispiel:

```html
<address>Chris Mills, Manchester, The Grim North, UK</address>
```

Es könnte auch komplexere Auszeichnungen und andere Formen von Kontaktdaten enthalten, zum Beispiel:

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

Beachten Sie, dass so etwas auch in Ordnung wäre, wenn die verlinkte Seite die Kontaktdaten enthielt:

```html
<address>
  Seite geschrieben von <a href="../authors/chris-mills/">Chris Mills</a>.
</address>
```

> [!NOTE]
> Das {{htmlelement("address")}}-Element sollte nur dazu verwendet werden, um Kontaktdaten für das Dokument im nächstgelegenen {{htmlelement("article")}}- oder {{htmlelement("body")}}-Element bereitzustellen. Es wäre korrekt, es im Footer einer Webseite zu verwenden, um die Kontaktdaten der gesamten Seite einzuschließen oder innerhalb eines Artikels für die Kontaktdaten des Autors, aber nicht, um eine Liste von Adressen zu kennzeichnen, die nicht mit dem Inhalt dieser Seite zusammenhängen.

## Hoch- und Tiefstellungen

Gelegentlich werden Sie Hoch- und Tiefstellungen verwenden müssen, wenn Sie Dinge wie Daten, chemische Formeln und mathematische Gleichungen auszeichnen, damit sie die richtige Bedeutung haben. Die {{htmlelement("sup")}}- und {{htmlelement("sub")}}-Elemente erledigen diese Aufgabe. Zum Beispiel:

```html
<p>Mein Geburtstag ist am 25<sup>th</sup> Mai 2001.</p>
<p>
  Die chemische Formel von Koffein ist
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.
</p>
<p>Wenn x<sup>2</sup> 9 ist, muss x gleich 3 oder -3 sein.</p>
```

Die Ausgabe dieses Codes sieht folgendermaßen aus:

{{ EmbedLiveSample('Superscript_and_subscript', '100%', 160) }}

## Computercode repräsentieren

Es gibt eine Reihe von Elementen, die zum Auszeichnen von Computercode mit HTML verfügbar sind:

- {{htmlelement("code")}}: Zum Kennzeichnen von allgemeinen Codeteilen.
- {{htmlelement("pre")}}: Zum Beibehalten von Leerzeichen (normalerweise für Codeblöcke) — wenn Sie Einrückungen oder überflüssige Leerzeichen in Ihrem Text verwenden, werden diese von Browsern ignoriert und Sie werden sie auf Ihrer gerenderten Seite nicht sehen. Wenn Sie jedoch den Text in `<pre></pre>`-Tags einfügen, wird Ihr Leerraum identisch mit dem in Ihrem Texteditor angezeigten gerendert.
- {{htmlelement("var")}}: Zum spezifischen Auszeichnen von Variablennamen.
- {{htmlelement("kbd")}}: Zum Kennzeichnen von Tastatureingaben (und anderen Eingabetypen), die in den Computer eingegeben werden.
- {{htmlelement("samp")}}: Zum Kennzeichnen der Ausgabe eines Computerprogramms.

Sehen wir uns Beispiele für diese Elemente an und wie sie verwendet werden, um Computercode darzustellen. Wenn Sie die vollständige Datei sehen möchten, sehen Sie sich die [other-semantics.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/advanced-text-formatting/other-semantics.html)-Beispieldatei an. Sie können die Datei herunterladen und in Ihrem Browser öffnen, um dies selbst zu sehen, aber hier ist ein Ausschnitt des Codes:

```html
<pre><code>const para = document.querySelector('p');

para.onclick = function() {
  alert('Owww, stop poking me!');
}</code></pre>

<p>
  Sie sollten keine präsentationellen Elemente wie <code>&lt;font&gt;</code> und
  <code>&lt;center&gt;</code> verwenden.
</p>

<p>
  Im obigen JavaScript-Beispiel repräsentiert <var>para</var> ein Absatz-Element.
</p>

<p>Markieren Sie den gesamten Text mit <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.</p>

<pre>$ <kbd>ping mozilla.org</kbd>
<samp>PING mozilla.org (63.245.215.20): 56 data bytes
64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>
```

Der obige Code wird folgendermaßen aussehen:

{{ EmbedLiveSample('Representing_computer_code','100%',350) }}

## Zeiten und Daten auszeichnen

HTML bietet auch das {{htmlelement("time")}}-Element, um Zeiten und Daten in einem für Maschinen lesbaren Format darzustellen. Zum Beispiel:

```html
<time datetime="2016-01-20">20 Januar 2016</time>
```

Warum ist das nützlich? Nun, es gibt viele verschiedene Möglichkeiten, wie Menschen Daten aufschreiben. Das obige Datum könnte folgendermaßen geschrieben werden:

<!-- markdownlint-disable MD033 -->

- 20 Januar 2016
- 20. Januar 2016
- 20. Jan 2016
- 20/01/16
- 01/20/16
- Der 20. des nächsten Monats
- <span lang="fr">20e Janvier 2016</span>
- <span lang="ja">2016 年 1 月 20 日</span>
- Und so weiter

<!-- markdownlint-enable MD033 -->

Aber diese verschiedenen Formen können von Computern nicht leicht erkannt werden — was, wenn Sie alle Daten von Ereignissen auf einer Seite automatisch erfassen und in einen Kalender einfügen wollten? Das {{htmlelement("time")}}-Element ermöglicht es Ihnen, ein eindeutiges, maschinenlesbares Zeit-/Datumsformat für diesen Zweck hinzuzufügen.

Das einfache Beispiel oben bietet nur ein einfaches, maschinenlesbares Datum, aber es gibt viele andere Möglichkeiten, die möglich sind, zum Beispiel:

```html
<!-- Standardsimples Datum -->
<time datetime="2016-01-20">20 Januar 2016</time>
<!-- Nur Jahr und Monat -->
<time datetime="2016-01">Januar 2016</time>
<!-- Nur Monat und Tag -->
<time datetime="01-20">20 Januar</time>
<!-- Nur Zeit, Stunden und Minuten -->
<time datetime="19:30">19:30</time>
<!-- Sie können auch Sekunden und Millisekunden verwenden! -->
<time datetime="19:30:01.856">19:30:01.856</time>
<!-- Datum und Zeit -->
<time datetime="2016-01-20T19:30">19:30 Uhr, 20 Januar 2016</time>
<!-- Datum und Zeit mit Zeitzonenoffset -->
<time datetime="2016-01-20T19:30+01:00">
  19:30 Uhr, 20 Januar 2016 ist 20:30 Uhr in Frankreich
</time>
<!-- Eine spezifische Wochennummer angeben -->
<time datetime="2016-W04">Die vierte Woche von 2016</time>
```

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Fortgeschrittener HTML-Text](/de/docs/Learn/HTML/Introduction_to_HTML/Test_your_skills:_Advanced_HTML_text).

## Zusammenfassung

Das markiert das Ende unseres Studiums von HTML-Textsemantik. Beachten Sie, dass das, was Sie während dieses Kurses gesehen haben, keine vollständige Liste von HTML-Text-Elementen ist — wir wollten versuchen, die wesentlichen Elemente zu behandeln und einige der häufigeren, die Sie in der freien Wildbahn sehen werden oder zumindest interessant finden könnten. Um noch viel mehr HTML-Elemente zu finden, können Sie in unserem [HTML-Element-Referenz](/de/docs/Web/HTML/Element) nachsehen (der Abschnitt [Inline-Textsemantik](/de/docs/Web/HTML/Element#inline_text_semantics) wäre ein guter Einstiegspunkt). Im nächsten Artikel werden wir uns die HTML-Elemente ansehen, die Sie verwenden würden, um die verschiedenen Teile eines HTML-Dokuments zu [strukturieren](/de/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure).

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}
