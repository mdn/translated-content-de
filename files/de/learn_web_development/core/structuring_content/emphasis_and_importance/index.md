---
title: Betonung und Wichtigkeit
slug: Learn_web_development/Core/Structuring_content/Emphasis_and_importance
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content")}}

Der vorherige Artikel befasste sich mit der Bedeutung von Semantik in HTML und konzentrierte sich auf Überschriften und Absätze. Dieser Artikel setzt das Thema Semantik fort und betrachtet HTML-Elemente, die Betonung und Wichtigkeit auf Text anwenden (analog zu Kursiv- und Fettschrift in Druckmedien).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Bedeutung von Betonung und Wichtigkeit verstehen und die grundlegenden Elemente, die sie in HTML anwenden, wie <code>&lt;em&gt;</code> und <code>&lt;strong&gt;</code>.</li>
          <li>Identifikation von Präsentations-Markup, das nicht mehr verwendet werden sollte (z.B. <code>&lt;big&gt;</code> und <code>&lt;font&gt;</code>); es ist veraltet.</li>
          <li>Identifikation von Präsentations-Markup, das neu definiert wurde, um eine neue semantische Bedeutung zu erhalten (z.B. <code>&lt;i&gt;</code> und <code>&lt;b&gt;</code>).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind Betonung und Wichtigkeit?

In der menschlichen Sprache betonen wir oft bestimmte Wörter, um die Bedeutung eines Satzes zu verändern, und wir wollen oft bestimmte Wörter als wichtig oder auf irgendeine Weise anders markieren. HTML bietet verschiedene semantische Elemente, um uns zu ermöglichen, Textinhalte mit solchen Effekten zu markieren, und in diesem Abschnitt betrachten wir einige der gebräuchlichsten.

### Betonung

Wenn wir in gesprochener Sprache Betonung hinzufügen möchten, _betonen_ wir bestimmte Wörter, wodurch wir subtil die Bedeutung dessen ändern, was wir sagen. Ähnlich tendieren wir in schriftlicher Sprache dazu, Wörter zu betonen, indem wir sie kursiv setzen. Zum Beispiel haben die folgenden zwei Sätze unterschiedliche Bedeutungen.

> Ich bin froh, dass Sie nicht zu spät sind.
>
> Ich bin _froh_, dass Sie nicht _zu spät_ sind.

Der erste Satz klingt wirklich erleichtert, dass die Person nicht zu spät war. Im Gegensatz dazu klingt der zweite Satz mit den kursiv gesetzten Wörtern "froh" und "zu spät" sarkastisch oder passiv-aggressiv und drückt Ärger darüber aus, dass die Person etwas zu spät gekommen ist.

In HTML verwenden wir das {{htmlelement("em")}} (Betonung) Element, um solche Instanzen zu markieren. Zusätzlich dazu, das Dokument interessanter zu gestalten, werden sie von Screenreadern erkannt, die so konfiguriert werden können, dass sie diese in einem anderen Tonfall vorlesen. Browser gestalten dies standardmäßig kursiv, aber Sie sollten dieses Tag nicht nur verwenden, um eine kursive Formatierung zu erreichen. Um dies zu tun, würden Sie ein {{htmlelement("span")}} Element und etwas CSS verwenden oder vielleicht ein {{htmlelement("i")}} Element (siehe unten).

```html
<p>I am <em>glad</em> you weren't <em>late</em>.</p>
```

### Starke Wichtigkeit

Um wichtige Worte zu betonen, neigen wir dazu, sie in gesprochener Sprache zu betonen und in schriftlicher Sprache **fett** zu setzen. Zum Beispiel:

> Diese Flüssigkeit ist **hochgiftig**.
>
> Ich verlasse mich auf Sie. **Seien Sie** nicht zu spät!

In HTML verwenden wir das {{htmlelement("strong")}} (starke Wichtigkeit) Element, um solche Instanzen zu markieren. Zusätzlich dazu, das Dokument nützlicher zu machen, werden sie von Screenreadern erkannt, die so konfiguriert werden können, dass sie diese in einem anderen Tonfall vorlesen. Browser gestalten dies standardmäßig als fetten Text, aber Sie sollten dieses Tag nicht nur verwenden, um eine fette Formatierung zu erreichen. Um dies zu tun, würden Sie ein {{htmlelement("span")}} Element und etwas CSS verwenden oder vielleicht ein {{htmlelement("b")}} Element (siehe unten).

```html
<p>This liquid is <strong>highly toxic</strong>.</p>

<p>I am counting on you. <strong>Do not</strong> be late!</p>
```

Sie können `strong` und `emphasis` ineinander verschachteln, wenn gewünscht:

```html-nolint
<p>This liquid is <strong>highly toxic</strong> — if you drink it, <strong>you may <em>die</em></strong>.</p>
```

{{EmbedLiveSample('Strong importance')}}

## Aktives Lernen: Lassen Sie uns wichtig sein

In diesem Abschnitt zum aktiven Lernen haben wir ein bearbeitbares Beispiel bereitgestellt. Darin möchten wir, dass Sie versuchen, Betonung und starke Wichtigkeit auf die Wörter hinzuzufügen, die Ihrer Meinung nach diese benötigen, nur um etwas Übung zu haben.

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

## Kursiv, fett, unterstrichen…

Die bisher besprochenen Elemente haben klare semantische Bedeutungen. Die Situation mit {{htmlelement("b")}}, {{htmlelement("i")}} und {{htmlelement("u")}} ist etwas komplizierter. Sie entstanden, damit Menschen in einer Zeit, als CSS noch kaum oder gar nicht unterstützt wurde, fett, kursiv oder unterstrichen schreiben konnten. Solche Elemente, die nur die Präsentation und nicht die Semantik betreffen, sind als **präsentationale Elemente** bekannt und sollten nicht mehr verwendet werden, da, wie wir zuvor gesehen haben, Semantik so wichtig für Barrierefreiheit, SEO usw. ist.

HTML5 hat `<b>`, `<i>`, und `<u>` mit neuen, etwas verwirrenden, semantischen Rollen neu definiert.

Hier ist die wichtigste Regel, an die Sie sich erinnern sollten: Es ist nur angemessen `<b>`, `<i>`, oder `<u>` zu verwenden, um eine Bedeutung zu übermitteln, die traditionell durch fett, kursiv oder unterstrichen vermittelt wird, wenn es kein passenderes Element gibt; und meist gibt es eines. Überlegen Sie, ob `<strong>`, `<em>`, `<mark>` oder `<span>` möglicherweise geeigneter sind.

Behalten Sie immer einen Fokus auf Barrierefreiheit. Das Konzept von Kursivschrift ist für Menschen, die Screenreader verwenden, oder für Menschen, die ein anderes Schriftsystem als das lateinische Alphabet verwenden, nicht sehr hilfreich.

- {{HTMLElement('i')}} wird verwendet, um eine Bedeutung zu übermitteln, die traditionell durch kursiv vermittelt wird: fremdsprachige Wörter, taxonomische Bezeichnungen, technische Begriffe, ein Gedanke…
- {{HTMLElement('b')}} wird verwendet, um eine Bedeutung zu übermitteln, die traditionell durch fett vermittelt wird: Schlüsselbegriffe, Produktnamen, Leitsätze…
- {{HTMLElement('u')}} wird verwendet, um eine Bedeutung zu übermitteln, die traditionell durch unterstrichen vermittelt wird: Eigennamen, Rechtschreibfehler…

> [!NOTE]
> Menschen assoziieren Unterstreichungen stark mit Hyperlinks. Daher ist es im Web am besten, nur Links zu unterstreichen. Verwenden Sie das `<u>` Element, wenn es semantisch angemessen ist, aber erwägen Sie, mithilfe von CSS die Standardunterstreichung in etwas zu ändern, das im Web passender ist. Das untenstehende Beispiel illustriert, wie dies gemacht werden kann.

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

## Zusammenfassung

Wir sind nun mit der Betrachtung von Betonung und Wichtigkeit fertig. Lassen Sie uns fortfahren und betrachten, wie wir Listen in HTML darstellen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content")}}
