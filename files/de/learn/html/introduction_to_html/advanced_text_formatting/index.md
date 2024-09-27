---
title: Fortgeschrittene Textformatierung
slug: Learn/HTML/Introduction_to_HTML/Advanced_text_formatting
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}

Es gibt viele weitere Elemente in HTML zur Formatierung von Text, die wir im Artikel [HTML Textgrundlagen](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals) nicht behandelt haben. Die Elemente, die in diesem Artikel beschrieben werden, sind weniger bekannt, aber dennoch nützlich zu kennen (und dies ist keinesfalls eine vollständige Liste). Hier lernen Sie, wie man Zitate, Definitionslisten, Computercode und verwandten Text, Tief- und Hochstellung, Kontaktinformationen und mehr markiert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Kenntnisse in HTML, wie im
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Einstieg in HTML</a
        > behandelt. HTML-Textformatierung, wie in
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >HTML Textgrundlagen</a
        > behandelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu lernen, wie man weniger bekannte HTML-Elemente verwendet, um
        fortgeschrittene semantische Merkmale zu markieren.
      </td>
    </tr>
  </tbody>
</table>

## Definitionslisten

In HTML Textgrundlagen haben wir durchgearbeitet, wie man [grundlegende Listen](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#lists) in HTML markiert, und wir haben die dritte Art von Liste erwähnt, auf die Sie gelegentlich stoßen werden — **Definitionslisten**. Der Zweck dieser Listen besteht darin, eine Reihe von Elementen und deren zugehörige Beschreibungen zu markieren, wie z. B. Begriffe und Definitionen oder Fragen und Antworten. Schauen wir uns ein Beispiel für eine Reihe von Begriffen und Definitionen an:

```plain
soliloquy
In drama, where a character speaks to themselves, representing their inner thoughts or feelings and in the process relaying them to the audience (but not to other characters.)
monologue
In drama, where a character speaks their thoughts out loud to share them with the audience and any other characters present.
aside
In drama, where a character shares a comment only with the audience for humorous or dramatic effect. This is usually a feeling, thought or piece of additional background information
```

Definitionslisten verwenden einen anderen Wrapper als die anderen Listentypen — {{htmlelement("dl")}}; darüber hinaus wird jeder Begriff in ein {{htmlelement("dt")}} (Description Term) Element eingewickelt und jede Beschreibung in ein {{htmlelement("dd")}} (Description Definition) Element.

### Beispiel für eine Definitionsliste

Vervollständigen wir die Markierung unseres Beispiels:

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

Die Standardstile des Browsers zeigen Definitionslisten mit etwas eingezogenen Beschreibungen vom Begriff an.

{{EmbedLiveSample('Description_list_example', '100%', '285px')}}

### Mehrere Beschreibungen für einen Begriff

Beachten Sie, dass es erlaubt ist, einen einzelnen Begriff mit mehreren Beschreibungen zu haben, zum Beispiel:

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

### Aktives Lernen: Markieren Sie eine Reihe von Definitionen

Es ist an der Zeit, sich selbst an Definitionslisten zu versuchen; fügen Sie Elemente in das rohe Textfeld im _Eingabefeld_ hinzu, damit es im _Ausgabefeld_ als Definitionsliste erscheint. Sie könnten auch versuchen, Ihre eigenen Begriffe und Definitionen zu verwenden, wenn Sie möchten.

Wenn Sie einen Fehler machen, können Sie ihn immer mit der _Zurücksetzen_-Schaltfläche zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Schaltfläche, um die Lösung zu sehen.

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

Wenn ein Abschnitt des Blockinhalts (sei es ein Absatz, mehrere Absätze, eine Liste usw.) von woanders zitiert wird, sollten Sie ihn in ein {{htmlelement("blockquote")}} Element einwickeln, um dies anzuzeigen, und eine URL, die auf die Quelle des Zitats verweist, in einem [`cite`](/de/docs/Web/HTML/Element/blockquote#cite) Attribut einschließen. Zum Beispiel wird der folgende Markup vom MDN `<blockquote>` Element-Seite genommen:

```html
<p>
  The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
  <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an
  extended quotation.
</p>
```

Um dies in ein Blockzitat zu verwandeln, würden wir einfach folgendes tun:

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

Standardmäßig wird dies als eingezogener Absatz angezeigt, als Indikator dafür, dass es sich um ein Zitat handelt; der Absatz über dem Zitat ist da, um das zu demonstrieren.

{{EmbedLiveSample('Blockquotes', '100%', '200px')}}

### Inline-Zitate

Inline-Zitate funktionieren genauso, außer dass sie das {{htmlelement("q")}} Element verwenden. Zum Beispiel enthält das untenstehende Markup ein Zitat von der MDN `<q>` Seite:

```html
<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">
    intended for short quotations that don't require paragraph breaks.
  </q>
</p>
```

Standardmäßig wird dies als normaler Text in Anführungszeichen angezeigt, um ein Zitat anzuzeigen, so:

{{EmbedLiveSample('Inline_quotations', '100%', '78px')}}

### Zitate

Der Inhalt des [`cite`](/de/docs/Web/HTML/Element/blockquote#cite) Attributs klingt nützlich, aber leider tun Browser, Bildschirmleser usw. nicht wirklich viel damit. Es gibt keine Möglichkeit, den Browser den Inhalt von `cite` anzeigen zu lassen, ohne Ihre eigene Lösung mit JavaScript oder CSS zu schreiben. Wenn Sie die Quelle des Zitats auf der Seite verfügbar machen wollen, müssen Sie diese in einem Link oder auf andere geeignete Weise im Text bereitstellen.

Es gibt ein {{htmlelement("cite")}} Element, aber dies soll den Titel der zitierten Ressource enthalten, z.B. den Namen des Buches. Es gibt jedoch keinen Grund, warum Sie nicht den Text innerhalb von `<cite>` in irgendeiner Weise mit der Zitatquelle verlinken könnten:

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

Zitate werden standardmäßig in Kursivschrift angezeigt.

{{EmbedLiveSample('Citations', '100%', '179px')}}

### Aktives Lernen: Wer hat das gesagt?

Zeit für ein weiteres aktives Lernbeispiel! In diesem Beispiel möchten wir, dass Sie:

1. Den mittleren Absatz in ein Blockquote umwandeln, das ein `cite` Attribut enthält.
2. "The Need To Eliminate Negative Self Talk" im dritten Absatz in ein Inline-Zitat umwandeln und ein `cite` Attribut hinzufügen.
3. Den Titel jeder Quelle in `<cite>` Tags einwickeln und jeden in einen Link zu dieser Quelle umwandeln.

Die von Ihnen benötigten Zitatquellen sind:

- `http://www.brainyquote.com/quotes/authors/c/confucius.html` für das Zitat von Konfuzius
- `http://example.com/affirmationsforpositivethinking` für "The Need To Eliminate Negative Self Talk".

Wenn Sie einen Fehler machen, können Sie ihn immer mit der _Zurücksetzen_-Schaltfläche zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Schaltfläche, um die Lösung zu sehen.

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

Ein weiteres ziemlich häufiges Element, das Sie im Web sehen werden, ist {{htmlelement("abbr")}} — dies wird verwendet, um eine Abkürzung oder ein Akronym einzuschließen. Wenn Sie entweder eine Abkürzung oder ein Akronym einschließen, geben Sie bei der ersten Verwendung die vollständige Ausschreibung des Begriffs in Klartext an, zusammen mit dem `<abbr>`, um die Abkürzung zu markieren. Dadurch wird ein Hinweis für Benutzeragenten gegeben, wie der Inhalt angekündigt/angezeigt werden soll, während alle Benutzer informiert werden, was die Abkürzung bedeutet.

Wenn es wenig Sinn macht, die Ausschreibung zusätzlich zur Abkürzung bereitzustellen, und die Abkürzung oder das Akronym ein ziemlich verkürzter Begriff ist, geben Sie die vollständige Ausschreibung des Begriffs als Wert des [`title`](/de/docs/Web/HTML/Global_attributes#title) Attributs an:

### Abkürzungsbeispiel

Werfen wir einen Blick auf ein Beispiel.

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

Diese werden so angezeigt:

{{EmbedLiveSample('Abbreviation_example', '100%', '150')}}

> [!NOTE]
> Frühere Versionen von HTML unterstützten auch das {{htmlelement("acronym")}} Element, aber es wurde aus der HTML-Spezifikation entfernt und durch die Verwendung von `<abbr>` für sowohl Abkürzungen als auch Akronyme ersetzt. `<acronym>` sollte nicht verwendet werden.

### Aktives Lernen: Markieren Sie eine Abkürzung

Für diese einfache aktive Lernaufgabe möchten wir, dass Sie eine Abkürzung markieren. Sie können unser Beispiel unten verwenden oder es durch eines Ihrer eigenen ersetzen.

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

## Kontaktinformationen markieren

HTML hat ein Element zum Markieren von Kontaktinformationen — {{htmlelement("address")}}. Dies umfasst Ihre Kontaktinformationen, zum Beispiel:

```html
<address>Chris Mills, Manchester, The Grim North, UK</address>
```

Es könnte auch komplexere Markierungen und andere Arten von Kontaktinformationen enthalten, zum Beispiel:

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

Beachten Sie, dass so etwas ebenfalls in Ordnung wäre, wenn die verlinkte Seite die Kontaktinformationen enthielte:

```html
<address>
  Page written by <a href="../authors/chris-mills/">Chris Mills</a>.
</address>
```

> [!NOTE]
> Das {{htmlelement("address")}} Element sollte nur zum Bereitstellen von Kontaktinformationen für das Dokument verwendet werden, das im nächstgelegenen {{htmlelement("article")}} oder {{htmlelement("body")}} Element enthalten ist. Es wäre korrekt, es im Footer einer Seite zu verwenden, um die Kontaktinformationen der gesamten Seite einzuschließen, oder innerhalb eines Artikels für die Kontaktinformationen des Autors, jedoch nicht, um eine Liste von Adressen zu markieren, die nicht mit dem Inhalt der Seite zu tun haben.

## Hoch- und Tiefstellung

Gelegentlich benötigen Sie Hoch- und Tiefstellung, wenn Sie Elemente wie Daten, chemische Formeln und mathematische Gleichungen markieren, damit sie die richtige Bedeutung haben. Die {{htmlelement("sup")}} und {{htmlelement("sub")}} Elemente übernehmen diese Aufgabe. Zum Beispiel:

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

## Computercode darstellen

Es gibt eine Reihe von Elementen, die für die Markierung von Computercode mit HTML zur Verfügung stehen:

- {{htmlelement("code")}}: Zum Markieren allgemeiner Teile von Computercode.
- {{htmlelement("pre")}}: Zum Erhalten von Leerzeichen (in der Regel Code-Blöcke) — wenn Sie Einrückungen oder übermäßige Leerzeichen in Ihrem Text verwenden, wird der Browser diese ignorieren, und Sie werden sie auf Ihrer gerenderten Seite nicht sehen. Wenn Sie jedoch den Text in `<pre></pre>` Tags einkapseln, wird Ihr Leerraum identisch gerendert, wie Sie ihn in Ihrem Texteditor sehen.
- {{htmlelement("var")}}: Zum spezifischen Markieren von Variablennamen.
- {{htmlelement("kbd")}}: Zum Markieren von Tastatureingaben (und anderen Arten von Eingaben) in den Computer.
- {{htmlelement("samp")}}: Zum Markieren der Ausgabe eines Computerprogramms.

Werfen wir einen Blick auf Beispiele für diese Elemente und wie sie verwendet werden, um Computercode darzustellen.
Wenn Sie die vollständige Datei sehen möchten, schauen Sie sich die [other-semantics.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/advanced-text-formatting/other-semantics.html) Beispieldatei an.
Sie können die Datei herunterladen und in Ihrem Browser öffnen, um es selbst zu sehen, aber hier ist ein Ausschnitt des Codes:

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

Der oben genannte Code sieht folgendermaßen aus:

{{ EmbedLiveSample('Representing_computer_code','100%',350) }}

## Zeiten und Daten markieren

HTML bietet auch das {{htmlelement("time")}} Element zum Markieren von Zeitpunkten und Daten in einem maschinenlesbaren Format. Zum Beispiel:

```html
<time datetime="2016-01-20">20 January 2016</time>
```

Warum ist das nützlich? Nun, es gibt viele unterschiedliche Möglichkeiten, wie Menschen Daten aufschreiben. Das obige Datum könnte geschrieben werden als:

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

Aber diese verschiedenen Formen können nicht leicht von Computern erkannt werden — was wäre, wenn Sie die Daten aller Ereignisse auf einer Seite automatisch abrufen und in einen Kalender einfügen möchten? Das {{htmlelement("time")}} Element ermöglicht es Ihnen, ein eindeutiges, maschinenlesbares Datum/Zeit für diesen Zweck anzuhängen.

Das einfache Beispiel oben bietet einfach ein einfaches maschinenlesbares Datum, aber es gibt viele andere Optionen, die möglich sind, zum Beispiel:

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Erweiterter HTML-Text](/de/docs/Learn/HTML/Introduction_to_HTML/Test_your_skills:_Advanced_HTML_text).

## Zusammenfassung

Damit endet unser Studium der HTML-Textsemantik. Bedenken Sie, dass das, was Sie während dieses Kurses gesehen haben, keine erschöpfende Liste von HTML-Text-Elementen ist — wir wollten versuchen, die Grundlagen und einige der häufigsten zu behandeln, die Sie in freier Wildbahn sehen, oder die Sie zumindest interessant finden könnten. Um viel mehr HTML-Elemente zu finden, können Sie einen Blick auf unser [HTML-Element-Referenz](/de/docs/Web/HTML/Element) werfen (der Abschnitt [Inline-Text-Semantik](/de/docs/Web/HTML/Element#inline_text_semantics) wäre ein großartiger Ausgangspunkt). Im nächsten Artikel werden wir uns die HTML-Elemente ansehen, die Sie verwenden würden, um [die verschiedenen Teile eines HTML-Dokuments zu strukturieren](/de/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure).

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}
