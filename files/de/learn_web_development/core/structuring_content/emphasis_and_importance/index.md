---
title: Hervorhebung und Wichtigkeit
slug: Learn_web_development/Core/Structuring_content/Emphasis_and_importance
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content")}}

Der vorherige Artikel behandelte, warum Semantik in HTML wichtig ist und konzentrierte sich auf Überschriften und Absätze. Dieser Artikel setzt das Thema der Semantik fort und betrachtet HTML-Elemente, die Texten Hervorhebung und Wichtigkeit verleihen (vergleichbar mit Kursiv- und Fettschrift in Printmedien).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Bedeutung von Hervorhebung und Wichtigkeit sowie die grundlegenden Elemente, die sie in HTML umsetzen, wie <code>&lt;em&gt;</code> und <code>&lt;strong&gt;</code>.</li>
          <li>Erkennen von präsentationsbezogenem Markup, das überhaupt nicht mehr verwendet werden sollte (z. B. <code>&lt;big&gt;</code> und <code>&lt;font&gt;</code>); es ist veraltet.</li>
          <li>Erkennen von präsentationsbezogenem Markup, das für neue semantische Bedeutungen umdefiniert wurde (z. B. <code>&lt;i&gt;</code> und <code>&lt;b&gt;</code>).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind Hervorhebung und Wichtigkeit?

In der menschlichen Sprache betonen wir häufig bestimmte Worte, um die Bedeutung eines Satzes zu verändern, und wir möchten oft bestimmte Worte als wichtig oder in irgendeiner Weise anders hervorheben. HTML bietet verschiedene semantische Elemente, um uns zu ermöglichen, Textinhalte mit solchen Effekten zu versehen. In diesem Abschnitt betrachten wir einige der gebräuchlichsten davon.

### Hervorhebung

Wenn wir in gesprochener Sprache etwas betonen möchten, _betonen_ wir bestimmte Worte und verändern subtil die Bedeutung dessen, was wir sagen. In geschriebener Sprache neigen wir dazu, Worte zu betonen, indem wir sie kursiv setzen. Zum Beispiel haben die folgenden beiden Sätze unterschiedliche Bedeutungen.

> Ich bin froh, dass Sie nicht zu spät sind.
>
> Ich bin _froh_, dass Sie nicht _zu spät_ sind.

Der erste Satz klingt wirklich erleichtert, dass die Person nicht zu spät ist. Im Gegensatz dazu klingt der zweite Satz, mit den Worten „froh“ und „zu spät“ in Kursivschrift, sarkastisch oder passiv-aggressiv und drückt eine gewisse Verärgerung darüber aus, dass die Person ein wenig zu spät gekommen ist.

In HTML verwenden wir das {{htmlelement("em")}}-Element (Hervorhebung), um solche Fälle zu markieren. Neben der Steigerung des Leseinteresses werden diese von Screenreadern erkannt, die so konfiguriert werden können, dass sie in einem anderen Tonfall gesprochen werden. Browser gestalten dies standardmäßig kursiv, aber Sie sollten dieses Tag nicht nur verwenden, um kursiv zu stylen. Dazu würden Sie ein {{htmlelement("span")}}-Element und etwas CSS verwenden, oder vielleicht ein {{htmlelement("i")}}-Element (siehe unten).

```html
<p>I am <em>glad</em> you weren't <em>late</em>.</p>
```

### Starke Wichtigkeit

Um wichtige Worte zu betonen, unterstreichen wir sie in gesprochener Sprache und setzen sie in geschriebener Sprache **fett**. Zum Beispiel:

> Diese Flüssigkeit ist **hochgiftig**.
>
> Ich zähle auf Sie. **Seien Sie nicht** zu spät!

In HTML verwenden wir das {{htmlelement("strong")}}-Element (starke Wichtigkeit), um solche Fälle zu markieren. Neben der Steigerung der Nützlichkeit eines Dokuments werden diese ebenfalls von Screenreadern erkannt, die so konfiguriert werden können, in einem anderen Tonfall gesprochen zu werden. Browser gestalten dies standardmäßig fett, aber Sie sollten dieses Tag nicht nur verwenden, um fett zu stylen. Dazu würden Sie ein {{htmlelement("span")}}-Element und etwas CSS verwenden, oder vielleicht ein {{htmlelement("b")}}-Element (siehe unten).

```html
<p>This liquid is <strong>highly toxic</strong>.</p>

<p>I am counting on you. <strong>Do not</strong> be late!</p>
```

Sie können starke Wichtigkeit und Hervorhebung ineinander verschachteln, wenn gewünscht:

```html-nolint
<p>This liquid is <strong>highly toxic</strong> — if you drink it, <strong>you may <em>die</em></strong>.</p>
```

{{EmbedLiveSample('Strong importance')}}

## Aktives Lernen: Lassen Sie uns wichtig sein

In diesem aktiven Lernabschnitt haben wir ein bearbeitbares Beispiel bereitgestellt. Wir möchten, dass Sie darin versuchen, den Worten, die Sie als hervorgehoben und stark wichtig erachten, entsprechende Stile hinzuzufügen, um ein wenig zu üben.

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

## Kursiv, fett, unterstreichen…

Die bisher besprochenen Elemente haben klar definierte Semantiken. Die Situation mit {{htmlelement("b")}}, {{htmlelement("i")}}, und {{htmlelement("u")}} ist etwas komplizierter. Sie wurden geschaffen, um fetten, kursiven oder unterstrichenen Text schreiben zu können, in einer Zeit, als CSS noch schlecht oder gar nicht unterstützt wurde. Elemente wie diese, die nur das Aussehen und nicht die Semantik beeinflussen, sind als **präsentationsbezogene Elemente** bekannt und sollten nicht mehr verwendet werden, denn wie wir gesehen haben, ist Semantik so wichtig für Barrierefreiheit, SEO usw.

HTML5 hat `<b>`, `<i>`, und `<u>` mit neuen, etwas verwirrenden, semantischen Rollen neu definiert.

Hier ist die beste Regel, die Sie sich merken können: Es ist nur dann angebracht, `<b>`, `<i>`, oder `<u>` zu verwenden, um eine traditionelle Bedeutung von Fett, Kursiv, oder Unterstreichen zu vermitteln, wenn es kein passenderes Element gibt; und das ist meistens der Fall. Überlegen Sie, ob `<strong>`, `<em>`, `<mark>`, oder `<span>` eventuell passender wären.

Behalten Sie immer eine Barrierefreiheitsperspektive im Kopf. Das Konzept von Kursivschrift ist nicht sehr hilfreich für Menschen, die Screenreader benutzen, oder für Menschen, die ein Schriftsystem verwenden, das nicht das lateinische Alphabet ist.

- {{HTMLElement('i')}} wird verwendet, um eine traditionell mit Kursivschrift vermittelte Bedeutung auszudrücken: Fremdwörter, taxonomische Bezeichnungen, technische Begriffe, ein Gedanke…
- {{HTMLElement('b')}} wird verwendet, um eine traditionell mit Fettschrift vermittelte Bedeutung auszudrücken: Schlüsselwörter, Produktnamen, Leitartikel…
- {{HTMLElement('u')}} wird verwendet, um eine traditionell mit Unterstreichen vermittelte Bedeutung auszudrücken: Eigenname, Rechtschreibfehler…

> [!NOTE]
> Menschen assoziieren Unterstreichen stark mit Hyperlinks. Daher ist es im Web am besten, nur Links zu unterstreichen. Verwenden Sie das `<u>`-Element, wenn es semantisch angebracht ist, aber überlegen Sie, ob Sie CSS verwenden sollten, um die Standard-Unterstreichung in etwas auf dem Web Angemesseneres zu ändern. Das folgende Beispiel zeigt, wie dies umgesetzt werden kann.

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

Wir sind mit dem Thema Hervorhebung und Wichtigkeit vorerst fertig. Lassen Sie uns jetzt darauf eingehen, wie wir Listen in HTML darstellen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content")}}
