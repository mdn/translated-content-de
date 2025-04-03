---
title: Erweiterte Textfunktionen
slug: Learn_web_development/Core/Structuring_content/Advanced_text_features
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content")}}

Es gibt viele andere Elemente in HTML zur Definition von Textsemantik, die wir im Artikel [Betonung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance) nicht behandelt haben. Die in diesem Artikel beschriebenen Elemente sind weniger bekannt, aber dennoch nützlich zu kennen (und dies ist keineswegs eine vollständige Liste). Hier erfahren Sie, wie Sie Zitate, Beschreibungslisten, Computercode und andere verwandte Texte, Tief- und Hochstellungen, Kontaktinformationen und mehr markieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textbasierte Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >Überschriften und Absätze</a
        > und <a href="/de/docs/Learn_web_development/Core/Structuring_content/Lists"
          >Listen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Zitate.</li>
          <li>Abkürzungen und Akronyme.</li>
          <li>Adressen.</li>
          <li>Zeitangaben und Daten.</li>
          <li>Hoch- und Tiefstellungen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Zitate

HTML bietet Möglichkeiten, um Zitate zu markieren; welches Element Sie verwenden, hängt davon ab, ob Sie ein Block- oder Inline-Zitat markieren.

### Blockzitate

Wenn ein Abschnitt auf Blockebene (ob ein Absatz, mehrere Absätze, eine Liste usw.) von woanders zitiert wird, sollten Sie ihn in ein {{htmlelement("blockquote")}}-Element einbetten, um dies zu kennzeichnen, und eine URL zur Quelle des Zitats in ein [`cite`](/de/docs/Web/HTML/Element/blockquote#cite)-Attribut einfügen. Zum Beispiel, das folgende Markup stammt von der MDN `<blockquote>`-Elementseite:

```html
<p>
  The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
  <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an
  extended quotation.
</p>
```

Um dies in ein Blockzitat zu verwandeln, würden wir einfach Folgendes tun:

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

Die Standardformatierung des Browsers rendert dies als eingerückten Absatz, um anzuzeigen, dass es sich um ein Zitat handelt; der oberhalb des Zitats stehende Absatz dient zur Demonstration.

{{EmbedLiveSample('Blockquotes', '100%', '200px')}}

### Inline-Zitate

Inline-Zitate funktionieren auf genau gleiche Weise, außer dass sie das {{htmlelement("q")}}-Element verwenden. Zum Beispiel enthält das untenstehende Markup ein Zitat von der MDN `<q>`-Seite:

```html
<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">
    intended for short quotations that don't require paragraph breaks.
  </q>
</p>
```

Die Standardformatierung des Browsers rendert dies als normalen Text, der in Anführungszeichen gesetzt ist, um ein Zitat zu kennzeichnen:

{{EmbedLiveSample('Inline_quotations', '100%', '78px')}}

### Zitate

Der Inhalt des [`cite`](/de/docs/Web/HTML/Element/blockquote#cite)-Attributs hört sich nützlich an, aber leider machen Browser, Screenreader usw. nicht viel damit. Es gibt keine Möglichkeit, dass der Browser den Inhalt von `cite` anzeigt, ohne eine eigene Lösung mit JavaScript oder CSS zu schreiben. Wenn Sie die Quelle des Zitats auf der Seite verfügbar machen möchten, müssen Sie sie im Text über einen Link oder eine andere geeignete Weise zugänglich machen.

Es gibt ein {{htmlelement("cite")}}-Element, das jedoch dafür gedacht ist, den Titel der zitierten Ressource zu enthalten, z.B. den Namen des Buches. Es gibt jedoch keinen Grund, warum Sie den Text innerhalb von `<cite>` nicht in irgendeiner Weise mit der Zitatquelle verlinken könnten:

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

Zitate werden standardmäßig in kursiver Schrift dargestellt.

{{EmbedLiveSample('Citations', '100%', '179px')}}

### Aktives Lernen: Wer hat das gesagt?

Zeit für ein weiteres aktives Lernbeispiel! In diesem Beispiel möchten wir, dass Sie:

1. Den mittleren Absatz in ein Blockzitat umwandeln, das ein `cite`-Attribut enthält.
2. "The Need To Eliminate Negative Self Talk" im dritten Absatz in ein Inline-Zitat umwandeln und ein `cite`-Attribut hinzufügen.
3. Den Titel jeder Quelle in `<cite>`-Tags einbetten und jede davon in einen Link zu dieser Quelle umwandeln.

Die benötigten Zitationsquellen sind:

- `http://www.brainyquote.com/quotes/authors/c/confucius.html` für das Konfuzius-Zitat
- `http://example.com/affirmationsforpositivethinking` für "The Need To Eliminate Negative Self Talk".

Wenn Sie einen Fehler machen, können Sie den _Zurücksetzen_-Button verwenden, um ihn zurückzusetzen. Wenn Sie wirklich stecken bleiben, drücken Sie den _Lösung anzeigen_-Button, um die Antwort zu sehen.

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

Ein weiteres recht häufiges Element, das Sie im Web begegnen werden, ist {{htmlelement("abbr")}} — dies wird verwendet, um eine Abkürzung oder ein Akronym einzuschließen. Bei der Aufnahme von beidem geben Sie zunächst die vollständige Erklärung des Begriffs im Klartext zusammen mit dem `<abbr>` an, um die Abkürzung zu kennzeichnen. Dies bietet Benutzeragenten einen Hinweis darauf, wie der Inhalt angesagt/angezeigt wird, während alle Benutzer informiert werden, was die Abkürzung bedeutet.

Wenn es wenig sinnvoll ist, die Erklärung zusätzlich zur Abkürzung anzugeben, und die Abkürzung oder das Akronym ein recht kurzer Begriff ist, geben Sie die vollständige Erklärung des Begriffs als Wert des [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attributs an:

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

Diese werden so aussehen:

{{EmbedLiveSample('Abbreviation_example', '100%', '150')}}

> [!NOTE]
> Frühere Versionen von HTML unterstützten auch das {{htmlelement("acronym")}}-Element, aber es wurde zugunsten der Verwendung von `<abbr>` zur Darstellung sowohl von Abkürzungen als auch Akronymen aus der HTML-Spezifikation entfernt. `<acronym>` sollte nicht verwendet werden.

### Aktives Lernen: Abkürzung markieren

Bei dieser einfachen aktiven Lernaufgabe möchten wir, dass Sie eine Abkürzung markieren. Sie können unser Beispiel unten verwenden oder es durch ein eigenes ersetzen.

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

HTML hat ein Element zur Markierung von Kontaktinformationen — {{htmlelement("address")}}. Dies umschließt Ihre Kontaktdaten, zum Beispiel:

```html
<address>Chris Mills, Manchester, The Grim North, UK</address>
```

Es könnte auch komplexere Markups und andere Kontaktinformationen enthalten, zum Beispiel:

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

Beachten Sie, dass etwas wie das Folgende ebenfalls in Ordnung wäre, wenn die verlinkte Seite die Kontaktdaten enthielte:

```html
<address>
  Page written by <a href="../authors/chris-mills/">Chris Mills</a>.
</address>
```

> [!NOTE]
> Das {{htmlelement("address")}}-Element sollte nur verwendet werden, um Kontaktinformationen für das mit dem nächstgelegenen {{htmlelement("article")}}- oder {{htmlelement("body")}}-Element enthaltene Dokument bereitzustellen. Es wäre korrekt, es im Footer einer Seite zu verwenden, um die Kontaktdaten der gesamten Seite zu enthalten, oder innerhalb eines Artikels für die Kontaktdaten des Autors, aber nicht, um eine Liste von Adressen zu markieren, die nicht mit dem Seiteninhalt zusammenhängen.

## Hoch- und Tiefstellungen

Gelegentlich müssen Sie Hoch- und Tiefstellungen verwenden, wenn Sie Elemente wie Daten, chemische Formeln und mathematische Gleichungen markieren, damit sie die richtige Bedeutung haben. Die {{htmlelement("sup")}}- und {{htmlelement("sub")}}-Elemente übernehmen diese Aufgabe. Zum Beispiel:

```html
<p>My birthday is on the 25<sup>th</sup> of May 2001.</p>
<p>
  Caffeine's chemical formula is
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.
</p>
<p>If x<sup>2</sup> is 9, x must equal 3 or -3.</p>
```

Das Ergebnis dieses Codes sieht folgendermaßen aus:

{{ EmbedLiveSample('Superscript_and_subscript', '100%', 160) }}

## Computercode darstellen

Es gibt mehrere Elemente, die für die Markierung von Computercode mit HTML verfügbar sind:

- {{htmlelement("code")}}: Zum Markieren allgemeiner Computercode-Stücke.
- {{htmlelement("pre")}}: Zum Beibehalten von Leerzeichen (in der Regel Codeblöcken) — wenn Sie Einrückungen oder überflüssige Leerzeichen in Ihrem Text verwenden, ignorieren Browser diese und Sie sehen sie nicht auf Ihrer gerenderten Seite. Wenn Sie den Text jedoch in `<pre></pre>`-Tags einbetten, werden Ihre Leerzeichen genauso gerendert, wie Sie sie in Ihrem Texteditor sehen.
- {{htmlelement("var")}}: Zum spezifischen Markieren von Variablennamen.
- {{htmlelement("kbd")}}: Zum Markieren von Tastatureingaben (und anderen Arten von) Eingaben, die in den Computer eingegeben werden.
- {{htmlelement("samp")}}: Zum Markieren der Ausgabe eines Computerprogramms.

Schauen wir uns Beispiele dieser Elemente an und wie sie verwendet werden, um Computercode darzustellen.
Wenn Sie die vollständige Datei sehen möchten, werfen Sie einen Blick auf die [other-semantics.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/advanced-text-formatting/other-semantics.html) Beispieldatei.
Sie können die Datei herunterladen und in Ihrem Browser öffnen, um sie selbst zu sehen, aber hier ist ein Ausschnitt des Codes:

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

## Zeit- und Datumsangaben markieren

HTML bietet auch das {{htmlelement("time")}}-Element, um Zeiten und Daten in einem maschinenlesbaren Format zu markieren. Zum Beispiel:

```html
<time datetime="2016-01-20">20 January 2016</time>
```

Warum ist das nützlich? Nun, es gibt viele verschiedene Möglichkeiten, wie Menschen Daten aufschreiben. Das oben genannte Datum könnte wie folgt geschrieben werden:

<!-- markdownlint-disable MD033 -->

- 20\. Januar 2016
- 20\. Januar 2016
- Jan 20 2016
- 20/01/16
- 01/20/16
- Der 20. des nächsten Monats
- <span lang="fr">20e Janvier 2016</span>
- <span lang="ja">2016 年 1 月 20 日</span>
- Und so weiter

<!-- markdownlint-enable MD033 -->

Aber diese verschiedenen Formen können von Computern nicht leicht erkannt werden — was wäre, wenn Sie alle Ereignisdaten auf einer Seite automatisch erfassen und in einen Kalender einfügen wollten? Das {{htmlelement("time")}}-Element ermöglicht es Ihnen, für diesen Zweck eine eindeutige, maschinenlesbare Zeit/Datum anzugeben.

Das obige grundlegende Beispiel bietet nur ein einfaches maschinenlesbares Datum, aber es gibt viele andere Möglichkeiten, die möglich sind, zum Beispiel:

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Fortgeschrittene HTML-Textfunktionen](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills:_Advanced_HTML_text).

## Zusammenfassung

Damit endet unser Studium der weniger verbreiteten HTML-Textsemantik. Was Sie in diesem Kurs gesehen haben, ist keine erschöpfende Liste von HTML-Textelementen — wir wollten versuchen, die wichtigsten Punkte abzudecken und einige der gebräuchlicheren, die Sie in freier Wildbahn sehen werden. Als nächstes schauen wir uns Links an, eines der wichtigsten Merkmale des Webs.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content")}}
