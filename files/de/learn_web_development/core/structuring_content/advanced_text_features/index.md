---
title: Erweiterte Textmerkmale
slug: Learn_web_development/Core/Structuring_content/Advanced_text_features
l10n:
  sourceCommit: 59d47ed0cbeddc78085980202279c9910b619794
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content")}}

Es gibt viele weitere Elemente in HTML zur Definition von Textsemantik, die wir im Artikel [Betonung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance) nicht behandelt haben. Die hier beschriebenen Elemente sind weniger bekannt, aber dennoch nützlich zu kennen (und dies ist bei weitem noch keine vollständige Liste). Hier lernen Sie das Markieren von Zitaten, Computercode und anderen verwandten Texten, Tief- und Hochstellen, Kontaktinformationen und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textsemantik auf Ebene wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >Überschriften und Absätze</a
        > und <a href="/de/docs/Learn_web_development/Core/Structuring_content/Lists"
          >Listen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Zitate.</li>
          <li>Abkürzungen und Akronyme.</li>
          <li>Adressen.</li>
          <li>Zeiten und Daten.</li>
          <li>Hoch- und Tiefstellen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Zitate

HTML stellt Funktionen zum Markieren von Zitaten zur Verfügung; welches Element Sie verwenden, hängt davon ab, ob Sie ein Block- oder Inline-Zitat markieren.

### Blockzitate

Wenn ein Abschnitt von Blockinhalt (sei es ein Absatz, mehrere Absätze, eine Liste usw.) aus einer anderen Quelle zitiert wird, sollten Sie ihn in ein {{htmlelement("blockquote")}}-Element einbetten, um dies zu kennzeichnen, und eine URL, die auf die Quelle des Zitats verweist, in einem [`cite`](/de/docs/Web/HTML/Element/blockquote#cite)-Attribut angeben. Das folgende Markup stammt zum Beispiel von der MDN-Seite zum `<blockquote>`-Element:

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

Die Standard-Formatierung des Browsers wird dies als eingerückten Absatz darstellen, um anzuzeigen, dass es sich um ein Zitat handelt; der Absatz über dem Zitat dient dazu, dies zu demonstrieren.

{{EmbedLiveSample('Blockquotes', '100%', '200px')}}

### Inline-Zitate

Inline-Zitate funktionieren auf genau dieselbe Weise, außer dass sie das {{htmlelement("q")}}-Element verwenden. Zum Beispiel enthält das untenstehende Markup ein Zitat von der MDN-Seite zum `<q>`:

```html
<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">
    intended for short quotations that don't require paragraph breaks.
  </q>
</p>
```

Die Standard-Formatierung des Browsers zeigt dies als normalen Text an, der in Anführungszeichen gesetzt wird, um ein Zitat zu kennzeichnen:

{{EmbedLiveSample('Inline_quotations', '100%', '78px')}}

### Zitate

Der Inhalt des [`cite`](/de/docs/Web/HTML/Element/blockquote#cite)-Attributs klingt nützlich, aber leider machen Browser, Bildschirmleser usw. nicht viel damit. Es gibt keine Möglichkeit, den Inhalt von `cite` im Browser anzuzeigen, ohne eine eigene Lösung mit JavaScript oder CSS zu schreiben. Wenn Sie die Quelle des Zitats auf der Seite verfügbar machen möchten, müssen Sie diese über einen Link oder auf eine andere geeignete Weise im Text zur Verfügung stellen.

Es gibt ein {{htmlelement("cite")}}-Element, aber dieses soll den Titel der zitierten Ressource enthalten, z.B. den Namen des Buches. Es gibt jedoch keinen Grund, warum Sie den Text im `<cite>` nicht auf irgendeine Weise mit der Quelle des Zitats verlinken könnten:

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

1. Den mittleren Absatz in ein Blockzitat verwandeln, das ein `cite`-Attribut enthält.
2. "The Need To Eliminate Negative Self Talk" im dritten Absatz in ein Inline-Zitat verwandeln und ein `cite`-Attribut hinzufügen.
3. Den Titel jeder Quelle in `<cite>`-Tags einfügen und jede in einen Link zu dieser Quelle verwandeln.

Die benötigten Zitatquellen sind:

- `http://www.brainyquote.com/quotes/authors/c/confucius.html` für das Zitat von Konfuzius
- `http://example.com/affirmationsforpositivethinking` für "The Need To Eliminate Negative Self Talk".

Sollten Sie einen Fehler machen, können Sie es jederzeit mit der _Zurücksetzen_-Schaltfläche zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie die _Lösung anzeigen_-Schaltfläche, um die Antwort zu sehen.

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

Ein weiteres relativ häufiges Element, das Sie im Web antreffen werden, ist {{htmlelement("abbr")}} — dies wird verwendet, um eine Abkürzung oder ein Akronym zu umschließen. Wenn Sie eine von beiden angeben, geben Sie bei der ersten Verwendung eine vollständige Ausschreibung des Begriffs im Klartext zusammen mit dem `<abbr>` an, um die Abkürzung zu markieren. Dies gibt den Benutzeragenten einen Hinweis, wie sie den Inhalt ankündigen/darstellen sollen, während alle Benutzer informiert werden, was die Abkürzung bedeutet.

Wenn es wenig Sinn macht, die Ausschreibung zusätzlich zur Abkürzung anzugeben, und die Abkürzung oder das Akronym ein recht verkürzter Begriff ist, geben Sie die vollständige Ausschreibung als Wert des [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attributs an:

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

Diese werden etwa so aussehen:

{{EmbedLiveSample('Abbreviation_example', '100%', '150')}}

> [!NOTE]
> Frühere Versionen von HTML enthielten auch Unterstützung für das {{htmlelement("acronym")}}-Element, aber es wurde aus der HTML-Spezifikation entfernt, zugunsten der Verwendung von `<abbr>` zur Darstellung sowohl von Abkürzungen als auch von Akronymen. `<acronym>` sollte nicht verwendet werden.

### Aktives Lernen: eine Abkürzung markieren

Für diese einfache aktive Lernaufgabe möchten wir, dass Sie eine Abkürzung markieren. Sie können unser Beispiel unten verwenden oder es durch ein eigenes ersetzen.

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

HTML verfügt über ein Element zum Markieren von Kontaktinformationen — {{htmlelement("address")}}. Dies wird um Ihre Kontaktdaten herum verwendet, zum Beispiel:

```html
<address>Chris Mills, Manchester, The Grim North, UK</address>
```

Es könnte auch komplexeres Markup und andere Formen von Kontaktinformationen enthalten, zum Beispiel:

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

Beachten Sie, dass auch so etwas in Ordnung wäre, wenn die verlinkte Seite die Kontaktinformationen enthielte:

```html
<address>
  Page written by <a href="../authors/chris-mills/">Chris Mills</a>.
</address>
```

> [!NOTE]
> Das {{htmlelement("address")}}-Element sollte nur verwendet werden, um Kontaktinformationen für das Dokument bereitzustellen, das im nächstgelegenen {{htmlelement("article")}}- oder {{htmlelement("body")}}-Element enthalten ist. Es wäre korrekt, es im Fußbereich einer Website zu verwenden, um die Kontaktinformationen der gesamten Website anzugeben, oder in einem Artikel, um die Kontaktdaten des Autors anzugeben, jedoch nicht, um eine Liste von Adressen zu markieren, die nicht im Zusammenhang mit dem Inhalt dieser Seite stehen.

## Hoch- und Tiefstellen

Gelegentlich müssen Sie Hoch- und Tiefstellungen verwenden, wenn Sie Dinge wie Daten, chemische Formeln und mathematische Gleichungen markieren, damit sie die richtige Bedeutung haben. Die {{htmlelement("sup")}}- und {{htmlelement("sub")}}-Elemente erledigen diese Aufgabe. Zum Beispiel:

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

Es gibt eine Reihe von Elementen, die zum Markieren von Computercode mit HTML zur Verfügung stehen:

- {{htmlelement("code")}}: Zum Markieren von allgemeinen Teilen von Computercode.
- {{htmlelement("pre")}}: Zum Beibehalten von Leerzeichen (allgemein für Codeblöcke) — wenn Sie Einrückungen oder überschüssige Leerzeichen in Ihrem Text verwenden, ignorieren Browser dies und Sie sehen es nicht auf Ihrer gerenderten Seite. Wenn Sie den Text jedoch in `<pre></pre>`-Tags einbetten, werden Ihre Leerzeichen genauso wiedergegeben, wie Sie sie in Ihrem Texteditor sehen.
- {{htmlelement("var")}}: Speziell zum Markieren von Variablennamen.
- {{htmlelement("kbd")}}: Zum Markieren von Tastatureingaben (und anderen Arten von Eingaben) in den Computer.
- {{htmlelement("samp")}}: Zum Markieren der Ausgabe eines Computerprogramms.

Schauen wir uns Beispiele dieser Elemente an und wie sie verwendet werden, um Computercode darzustellen.
Wenn Sie die vollständige Datei sehen möchten, schauen Sie sich die [other-semantics.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/advanced-text-formatting/other-semantics.html) Beispieldatei an.
Sie können die Datei herunterladen und in Ihrem Browser öffnen, um sie selbst zu betrachten, aber hier ist ein Ausschnitt des Codes:

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

Der obige Code wird ungefähr so aussehen:

{{ EmbedLiveSample('Representing_computer_code','100%',350) }}

## Zeiten und Daten markieren

HTML bietet auch das {{htmlelement("time")}}-Element, um Zeiten und Daten in einem maschinenlesbaren Format zu markieren. Zum Beispiel:

```html
<time datetime="2016-01-20">20 January 2016</time>
```

Warum ist das nützlich? Nun, es gibt viele verschiedene Möglichkeiten, wie Menschen Daten aufschreiben. Das obige Datum könnte geschrieben werden als:

<!-- markdownlint-disable MD033 -->

- 20\. Januar 2016
- 20\. Januar 2016
- 20\. Jan 2016
- 20/01/16
- 01/20/16
- Der 20. des nächsten Monats
- <span lang="fr">20e Janvier 2016</span>
- <span lang="ja">2016 年 1 月 20 日</span>
- Und so weiter

<!-- markdownlint-enable MD033 -->

Aber diese verschiedenen Formen können von Computern nicht leicht erkannt werden — was, wenn Sie automatisch die Daten aller Ereignisse auf einer Seite erfassen und in einen Kalender einfügen möchten? Das {{htmlelement("time")}}-Element ermöglicht es, eine eindeutige, maschinenlesbare Zeit/Datum dafür anzuhängen.

Das obige einfache Beispiel bietet nur ein einfaches maschinenlesbares Datum, aber es gibt viele andere mögliche Optionen:

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests durchführen, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Erweiterter HTML-Text](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills:_Advanced_HTML_text).

## Zusammenfassung

Damit endet unser Studium der weniger häufigen HTML-Textsemantik. Was Sie in diesem Kurs gesehen haben, ist keine erschöpfende Liste von HTML-Text-Elementen — wir wollten versuchen, die wesentlichen und einige der häufigeren darzustellen, die Sie in freier Wildbahn sehen werden. Als nächstes beschäftigen wir uns mit Links, einem der wichtigsten Merkmale des Webs.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content")}}
