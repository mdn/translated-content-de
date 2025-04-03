---
title: Überschriften und Absätze
slug: Learn_web_development/Core/Structuring_content/Headings_and_paragraphs
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content")}}

Eine der Hauptaufgaben von HTML besteht darin, einem Text Struktur zu geben, damit ein Browser ein HTML-Dokument so anzeigen kann, wie es der Entwickler beabsichtigt. Dieser Artikel erklärt, wie {{Glossary("HTML", "HTML")}} verwendet werden kann, um eine grundlegende Seitenstruktur durch die Definition von Überschriften und Absätzen bereitzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Wie man eine gute Dokumentstruktur mit Überschriften und darunter liegenden Inhalten erstellt.</li>
          <li>Verwendung von semantischem HTML anstelle von präsentationsorientiertem HTML und warum dies wichtig ist.</li>
          <li>Die Notwendigkeit, Überschriftenebenen logisch zu verwenden, d.h. keine Ebenen zu überspringen oder sie willkürlich zu verwenden, um eine bestimmte Schriftgröße zu erreichen (das ist eine Aufgabe für CSS).</li>
          <li>SEO-Vorteile: Zum Beispiel werden Schlüsselwörter in Überschriften hervorgehoben.</li>
          <li>Barrierefreiheitsvorteile: Assistive Technik (AT) wie Screenreader verwenden Überschriften (und andere Landmarks) als Wegweiser, um Inhalte zu navigieren. HTML-Dokumente sind für AT-Nutzer sehr schwierig zu verwenden ohne Überschriften.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Überschriften und Absätze

Die meisten strukturierten Texte bestehen aus Überschriften und Absätzen, egal ob Sie eine Geschichte, eine Zeitung, ein College-Lehrbuch, ein Magazin usw. lesen.

![Ein Beispiel für eine Zeitungs-Titelseite, die die Verwendung einer Hauptüberschrift, Unterüberschriften und Absätze zeigt.](newspaper_small.jpg)

Strukturierte Inhalte machen das Leseerlebnis einfacher und angenehmer.

In HTML muss jeder Absatz in ein {{htmlelement("p")}}-Element eingeschlossen werden, wie folgt:

```html
<p>I am a paragraph, oh yes I am.</p>
```

Jede Überschrift muss in ein Überschriftselement eingefasst werden:

```html
<h1>I am the title of the story.</h1>
```

Es gibt sechs Überschriftselemente: {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}, {{htmlelement("Heading_Elements", "h3")}}, {{htmlelement("Heading_Elements", "h4")}}, {{htmlelement("Heading_Elements", "h5")}} und {{htmlelement("Heading_Elements", "h6")}}. Jedes Element repräsentiert eine andere Inhaltsebene im Dokument; `<h1>` steht für die Hauptüberschrift, `<h2>` repräsentiert Unterüberschriften, `<h3>` repräsentiert Unter-Unterüberschriften usw.

## Implementierung der Strukturhierarchie

Beispielsweise repräsentiert im folgenden Beispiel das `<h1>`-Element den Titel der Geschichte, die `<h2>`-Elemente repräsentieren den Titel jedes Kapitels, und die `<h3>`-Elemente repräsentieren die Unterabschnitte jedes Kapitels:

```html
<h1>The Crushing Bore</h1>

<p>By Chris Mills</p>

<h2>Chapter 1: The dark night</h2>

<p>
  It was a dark night. Somewhere, an owl hooted. The rain lashed down on the…
</p>

<h2>Chapter 2: The eternal silence</h2>

<p>Our protagonist could not so much as a whisper out of the shadowy figure…</p>

<h3>The specter speaks</h3>

<p>
  Several more hours had passed, when all of a sudden the specter sat bolt
  upright and exclaimed, "Please have mercy on my soul!"
</p>
```

Es liegt wirklich bei Ihnen, was die beteiligten Elemente repräsentieren, solange die Hierarchie Sinn ergibt. Beachten Sie dabei einige bewährte Praktiken, während Sie solche Strukturen erstellen:

- Vorzugsweise sollten Sie eine einzige `<h1>` pro Seite verwenden—dies ist die oberste Überschrift, und alle anderen stehen darunter in der Hierarchie.
- Stellen Sie sicher, dass Sie die Überschriften in der richtigen Reihenfolge in der Hierarchie verwenden. Verwenden Sie keine `<h3>`-Elemente, um Unterüberschriften darzustellen, gefolgt von `<h2>`-Elementen, um Unter-Unterüberschriften darzustellen—das ergibt keinen Sinn und führt zu seltsamen Ergebnissen.
- Von den sechs verfügbaren Überschriftenebenen sollten Sie versuchen, nicht mehr als drei pro Seite zu verwenden, es sei denn, es ist notwendig. Dokumente mit vielen Ebenen (z. B. eine tiefe Überschriftenhierarchie) werden unhandlich und schwer navigierbar. In solchen Fällen ist es ratsam, den Inhalt über mehrere Seiten zu verteilen, wenn möglich.

## Warum benötigen wir Struktur?

Um diese Frage zu beantworten, schauen wir uns [text-start.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html) an—den Ausgangspunkt unseres laufenden Beispiels für diesen Artikel (ein leckeres Hummus-Rezept). Sie sollten eine Kopie dieser Datei auf Ihrem Computer speichern, da Sie sie für Übungen in den nächsten Lektionen benötigen werden. Der Hauptteil dieses Dokuments enthält derzeit mehrere Inhaltselemente. Sie sind nicht markiert, sondern nur durch Zeilenumbrüche getrennt (Enter/Return wurde gedrückt, um zur nächsten Zeile zu wechseln).

Wenn Sie das Dokument jedoch in Ihrem Browser öffnen, sehen Sie, dass der Text als großer Block erscheint!

![Eine Webseite, die eine Wand aus unformatiertem Text zeigt, da keine Elemente vorhanden sind, um sie zu strukturieren.](screen_shot_2017-03-29_at_09.20.35.png)

Das liegt daran, dass es keine Elemente gibt, die dem Inhalt eine Struktur geben, sodass der Browser nicht weiß, was eine Überschrift und was ein Absatz ist. Darüber hinaus:

- Benutzer, die sich eine Webseite ansehen, tendieren dazu, schnell nach relevantem Inhalt zu scannen und lesen zunächst oft nur die Überschriften. (Wir verbringen normalerweise [eine sehr kurze Zeit auf einer Webseite](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/).) Wenn sie nicht innerhalb weniger Sekunden etwas Nützliches sehen, werden sie wahrscheinlich frustriert und gehen woanders hin.
- Suchmaschinen, die Ihre Seite indexieren, betrachten den Inhalt von Überschriften als wichtige Schlüsselwörter für die Beeinflussung der Suchrankings der Seite. Ohne Überschriften wird Ihre Seite in Bezug auf {{Glossary("SEO", "SEO")}} (Search Engine Optimization) schlecht abschneiden.
- Schwer sehbehinderte Menschen lesen oft keine Webseiten; sie hören sie sich stattdessen an. Dies erfolgt mit einer Software, die als [Screenreader](https://en.wikipedia.org/wiki/Screen_reader) bezeichnet wird. Diese Software bietet Möglichkeiten, schnell auf bestimmte Textinhalte zuzugreifen. Zu den verwendeten Techniken gehört das Erstellen einer Gliederung des Dokuments durch das Vorlesen der Überschriften, damit Benutzer die benötigten Informationen schnell finden können. Wenn Überschriften nicht verfügbar sind, müssen sie sich den gesamten Dokumentinhalt anhören.
- Um Inhalte mit {{Glossary("CSS", "CSS")}} zu gestalten oder um interessante Dinge mit {{Glossary("JavaScript", "JavaScript")}} zu machen, benötigen Sie Elemente, die den relevanten Inhalt umgeben, damit CSS/JavaScript ihn effektiv anvisieren kann.

Wir müssen also unserem Inhalt strukturelle Markup geben.

## Aktives Lernen: Unserem Inhalt Struktur geben

Lassen Sie uns direkt mit einem Live-Beispiel einsteigen. Im unten stehenden Beispiel fügen Sie dem Rohtext im _Input_-Feld Elemente hinzu, damit er im _Output_-Feld als Überschrift und zwei Absätze erscheint.

Wenn Sie einen Fehler machen, können Sie ihn jederzeit mit der _Reset_-Taste zurücksetzen. Wenn Sie nicht weiterkommen, drücken Sie die _Show solution_-Taste, um die Antwort zu sehen.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
My short story I am a statistician and my name is Trish.

My legs are made of cardboard and I am married to a fish.
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

const htmlSolution = `<h1>My short story</h1>
<p>
  I am a statistician and my name is Trish.
</p>
<p>
  My legs are made of cardboard and I am married to a fish.
</p>`;

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
textarea.onkeyup = function () {
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

{{ EmbedLiveSample('Active_learning_Giving_our_content_structure', 700, 400, "", "") }}

## Warum benötigen wir Semantik?

Semantik wird überall um uns herum benötigt—wir verlassen uns auf frühere Erfahrungen, um zu wissen, welche Funktion ein Alltagsgegenstand hat; wenn wir etwas sehen, wissen wir, welche Funktion es haben wird. So erwarten wir zum Beispiel, dass ein rotes Verkehrslicht „stopp“ bedeutet und ein grünes Verkehrslicht „Fahrt“. Wenn die falsche Semantik angewendet wird, kann es schnell sehr kompliziert werden. (Verwendet irgendein Land Rot, um „fahren“ zu bedeuten? Das hoffen wir nicht.)

In ähnlicher Weise müssen wir sicherstellen, dass wir die richtigen Elemente verwenden, um unserem Inhalt die richtige Bedeutung, Funktion oder Erscheinung zu geben. In diesem Kontext ist das {{htmlelement("Heading_Elements", "h1")}}-Element ebenfalls ein semantisches Element, das dem Text, den es umschließt, die Rolle (oder Bedeutung) eines „obersten Seitentitels“ gibt.

```html
<h1>This is a top level heading</h1>
```

Standardmäßig wird der Browser ihm eine große Schriftgröße geben, um es wie eine Überschrift aussehen zu lassen (obwohl Sie es mit CSS so gestalten können, wie Sie möchten). Wichtiger ist, dass sein semantischer Wert auf verschiedene Weise genutzt wird, zum Beispiel von Suchmaschinen und Screenreadern (wie oben erwähnt).

Auf der anderen Seite könnten Sie jedes Element _wie_ eine oberste Überschrift _aussehen_ lassen. Betrachten Sie folgendes Beispiel:

```html
<span style="font-size: 32px; margin: 21px 0; display: block;">
  Is this a top level heading?
</span>
```

Dies ist ein {{htmlelement("span")}}-Element. Es hat keine Semantik. Sie verwenden es, um Inhalte einzuschließen, wenn Sie CSS darauf anwenden wollen (oder etwas damit mit JavaScript tun wollen), ohne ihm zusätzliche Bedeutung zu geben. (Sie werden später im Kurs mehr darüber erfahren.) Wir haben etwas CSS darauf angewendet, um es wie eine oberste Überschrift aussehen zu lassen, aber da es keinen semantischen Wert hat, wird es keines der oben beschriebenen zusätzlichen Vorteile erhalten. Es ist eine gute Idee, das relevante HTML-Element für die jeweilige Aufgabe zu verwenden.

## Zusammenfassung

Damit beenden wir unser Studium der HTML-Überschriften und Absätze. Als Nächstes werden wir weitere Aspekte des semantischen HTML untersuchen: Worte hervorheben.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content")}}
