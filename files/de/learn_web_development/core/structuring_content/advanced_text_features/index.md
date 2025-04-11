---
title: Erweiterte Textmerkmale
slug: Learn_web_development/Core/Structuring_content/Advanced_text_features
l10n:
  sourceCommit: 960a94a198ca60fb04fe63857ea61d7306465791
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content")}}

Es gibt viele weitere Elemente in HTML zur Definition von Textsemantik, die im Artikel [Betonung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance) nicht behandelt wurden. Die in diesem Artikel beschriebenen Elemente sind weniger bekannt, aber dennoch nützlich zu kennen (und dies ist keineswegs eine vollständige Liste). Hier erfahren Sie, wie man Zitate, Computer-Code und andere verwandte Texte, Tief- und Hochstellen, Kontaktinformationen und mehr kennzeichnet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt. Textuelle Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Uhrzeiten und Daten.</li>
          <li>Hoch- und Tiefstellen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Zitate

HTML enthält Funktionen zum Kennzeichnen von Zitaten; welches Element Sie verwenden, hängt davon ab, ob Sie ein Block- oder Inline-Zitat kennzeichnen.

### Blockzitate

Wenn ein Abschnitt auf Blockebene (sei es ein Absatz, mehrere Absätze, eine Liste usw.) von anderswo zitiert wird, sollten Sie diesen innerhalb eines {{htmlelement("blockquote")}}-Elements umschließen, um dies zu kennzeichnen, und eine URL angeben, die im `cite`-Attribut auf die Quelle des Zitats verweist. Beispielsweise stammt das folgende Markup von der MDN `<blockquote>`-Elementseite:

```html
<p>
  The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
  <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an
  extended quotation.
</p>
```

Um dies in ein Blockzitat umzuwandeln, würden wir einfach Folgendes tun:

```html
<p>Here is a blockquote:</p>
<blockquote
  cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/blockquote">
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
  </p>
</blockquote>
```

Die Standard-Browser-Styling wird dies als eingerückten Absatz anzeigen, als Hinweis darauf, dass es sich um ein Zitat handelt; der Absatz über dem Zitat dient zur Demonstration.

{{EmbedLiveSample('Blockquotes', '100%', '200px')}}

### Inline-Zitate

Inline-Zitate funktionieren genau gleich, außer dass sie das {{htmlelement("q")}}-Element verwenden. Zum Beispiel enthält das folgende Markup einen Abschnitt aus der MDN `<q>`-Seite:

```html
<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q
    cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/q">
    intended for short quotations that don't require paragraph breaks.
  </q>
</p>
```

Die Standard-Browser-Styling wird dies als normalen Text anzeigen, der in Anführungszeichen gesetzt ist, um auf ein Zitat hinzuweisen, wie folgt:

{{EmbedLiveSample('Inline_quotations', '100%', '78px')}}

### Zitate

Der Inhalt des [`cite`](/de/docs/Web/HTML/Reference/Elements/blockquote#cite)-Attributs klingt nützlich, jedoch tun Browser, Bildschirmleser usw. damit leider nicht viel. Es gibt keine Möglichkeit, den Browser dazu zu bringen, die Inhalte von `cite` anzuzeigen, ohne eine eigene Lösung mit JavaScript oder CSS zu schreiben. Wenn Sie die Quelle des Zitats auf der Seite verfügbar machen möchten, müssen Sie sie im Text über einen Link oder auf eine andere geeignete Weise verfügbar machen.

Es gibt ein {{htmlelement("cite")}}-Element, das jedoch dazu gedacht ist, den Titel der zitierten Ressource zu enthalten, z.B. den Namen des Buches. Es gibt jedoch keinen Grund, warum Sie den Text innerhalb von `<cite>` nicht auf irgendeine Weise mit der Zitatquelle verlinken können:

```html-nolint
<p>
  According to the
  <a href="/en-US/docs/Web/HTML/Reference/Elements/blockquote">
    <cite>MDN blockquote page</cite></a>:
</p>

<blockquote
  cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/blockquote">
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
  </p>
</blockquote>

<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/q">
    intended for short quotations that don't require paragraph breaks.
  </q>
  — <a href="/en-US/docs/Web/HTML/Reference/Elements/q"><cite>MDN q page</cite></a>.
</p>
```

Standardmäßig sind Zitate kursiv formatiert.

{{EmbedLiveSample('Citations', '100%', '179px')}}

### Aktives Lernen: Wer hat das gesagt?

Zeit für ein weiteres aktives Lernbeispiel! In diesem Beispiel möchten wir, dass Sie:

1. Den mittleren Absatz in ein Blockzitat umwandeln, das ein `cite`-Attribut enthält.
2. "The Need To Eliminate Negative Self Talk" im dritten Absatz in ein Inline-Zitat umwandeln und ein `cite`-Attribut hinzufügen.
3. Den Titel jeder Quelle in `<cite>`-Tags einschließen und jede in einen Link zu dieser Quelle umwandeln.

Die für die Zitate benötigten Quellen sind:

- `http://www.brainyquote.com/quotes/authors/c/confucius.html` für das Konfuzius-Zitat
- `http://example.com/affirmationsforpositivethinking` für "The Need To Eliminate Negative Self Talk".

Wenn Sie einen Fehler machen, können Sie ihn immer mit der _Zurücksetzen_-Schaltfläche zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie die _Lösung anzeigen_-Schaltfläche, um die Antwort zu sehen.

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

Ein weiteres recht häufiges Element, das Sie beim Durchsuchen des Webs antreffen werden, ist {{htmlelement("abbr")}} — dieses wird verwendet, um eine Abkürzung oder ein Akronym zu umschließen. Wenn Sie eines von beiden einfügen, geben Sie bei der ersten Verwendung eine vollständige Entfaltung des Begriffs im Klartext an, zusammen mit dem `<abbr>`, um die Abkürzung zu kennzeichnen. Dies gibt den Benutzeragenten einen Hinweis darauf, wie der Inhalt angekündigt/angezeigt werden soll, und informiert alle Benutzer darüber, was die Abkürzung bedeutet.

Wenn es wenig Sinn macht, die Erweiterung zusätzlich zur Abkürzung anzugeben, und die Abkürzung oder das Akronym ein recht kurzer Begriff ist, geben Sie die vollständige Entfaltung des Begriffs als Wert des [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attributs an:

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

Diese werden ungefähr so aussehen:

{{EmbedLiveSample('Abbreviation_example', '100%', '150')}}

> [!NOTE]
> Frühere Versionen von HTML unterstützten auch das {{htmlelement("acronym")}}-Element, aber es wurde aus der HTML-Spezifikation entfernt zugunsten der Verwendung von `<abbr>`, um sowohl Abkürzungen als auch Akronyme darzustellen. `<acronym>` sollte nicht verwendet werden.

### Aktives Lernen: eine Abkürzung markieren

Für diese einfache aktive Lernaufgabe möchten wir, dass Sie eine Abkürzung kennzeichnen. Sie können unser untenstehendes Beispiel verwenden oder es durch ein eigenes ersetzen.

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

## Kontaktinformationen kennzeichnen

HTML hat ein Element zum Kennzeichnen von Kontaktinformationen — {{htmlelement("address")}}. Dies umschließt Ihre Kontaktinformationen, zum Beispiel:

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

Beachten Sie, dass so etwas auch in Ordnung wäre, wenn die verlinkte Seite die Kontaktdaten enthielte:

```html
<address>
  Page written by <a href="../authors/chris-mills/">Chris Mills</a>.
</address>
```

> [!NOTE]
> Das {{htmlelement("address")}}-Element sollte nur verwendet werden, um Kontaktinformationen für das Dokument bereitzustellen, das im nächstgelegenen {{htmlelement("article")}}- oder {{htmlelement("body")}}-Element enthalten ist. Es wäre korrekt, es im Footer einer Seite zu benutzen, um die Kontaktdaten der gesamten Seite einzuschließen, oder innerhalb eines Artikels für die Kontaktdaten des Autors, aber nicht, um eine Liste von Adressen zu kennzeichnen, die mit den Inhalten dieser Seite nicht in Zusammenhang stehen.

## Hoch- und Tiefstellen

Sie werden gelegentlich Hoch- und Tiefstellen verwenden müssen, wenn Sie Elemente wie Daten, chemische Formeln und mathematische Gleichungen kennzeichnen, damit sie die korrekte Bedeutung haben. Die {{htmlelement("sup")}}- und {{htmlelement("sub")}}-Elemente übernehmen diese Aufgabe. Zum Beispiel:

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

## Darstellung von Computer-Code

Es gibt eine Reihe von Elementen, die für die Kennzeichnung von Computer-Code mithilfe von HTML verfügbar sind:

- {{htmlelement("code")}}: Zum Kennzeichnen generischer Teile von Computer-Code.
- {{htmlelement("pre")}}: Zum Beibehalten von Leerzeichen (allgemein Code-Blöcke) — wenn Sie Einrückungen oder übermäßige Leerzeichen innerhalb Ihres Textes verwenden, ignorieren Browser dies und Sie werden es auf Ihrer gerenderten Seite nicht sehen. Wenn Sie den Text jedoch in `<pre></pre>`-Tags umschließen, werden Ihre Leerzeichen identisch mit der Anzeige in Ihrem Texteditor gerendert.
- {{htmlelement("var")}}: Zum speziellen Kennzeichnen von Variablennamen.
- {{htmlelement("kbd")}}: Zum Kennzeichnen von Tastatur- (und anderen Arten von) Eingaben, die in den Computer eingegeben werden.
- {{htmlelement("samp")}}: Zum Kennzeichnen der Ausgabe eines Computerprogramms.

Schauen wir uns Beispiele für diese Elemente an und wie sie zur Darstellung von Computer-Code verwendet werden.
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

Der obige Code wird wie folgt aussehen:

{{ EmbedLiveSample('Representing_computer_code','100%',350) }}

## Uhrzeiten und Daten kennzeichnen

HTML bietet auch das {{htmlelement("time")}}-Element, um Zeiten und Daten in einem maschinenlesbaren Format zu kennzeichnen. Zum Beispiel:

```html
<time datetime="2016-01-20">20 January 2016</time>
```

Warum ist dies nützlich? Nun, es gibt viele unterschiedliche Möglichkeiten, wie Menschen Termine aufschreiben. Das obige Datum könnte geschrieben werden als:

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

Aber diese unterschiedlichen Formen können von Computern nicht leicht erkannt werden — was, wenn Sie automatisch alle Eventdaten auf einer Seite erfassen und in einen Kalender einfügen wollten? Das {{htmlelement("time")}}-Element ermöglicht es Ihnen, eine eindeutige, maschinenlesbare Zeit/Datum für diesen Zweck anzuhängen.

Das obige einfache Beispiel bietet nur ein einfaches maschinenlesbares Datum, aber es gibt viele weitere Optionen, die möglich sind, beispielsweise:

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen gespeichert haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Erweiterter HTML-Text](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text).

## Zusammenfassung

Damit sind wir am Ende unseres Studiums der weniger verbreiteten HTML-Textsemantik angekommen. Was Sie während dieses Kurses gesehen haben, ist keine erschöpfende Liste von HTML-Text-Elementen — wir wollten versuchen, die wesentlichen und einige der häufigeren abzudecken, die Sie in der Praxis sehen werden. Als Nächstes werden wir uns Links ansehen, eine der wichtigsten Funktionen des Webs.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content")}}
