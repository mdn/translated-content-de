---
title: Überschriften und Absätze in HTML
slug: Learn_web_development/Core/Structuring_content/Headings_and_paragraphs
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content")}}

Eine der Hauptaufgaben von HTML besteht darin, Text eine Struktur zu geben, damit ein Browser ein HTML-Dokument so anzeigen kann, wie es der Entwickler beabsichtigt. Dieser Artikel erklärt, wie {{Glossary("HTML", "HTML")}} verwendet werden kann, um eine grundlegende Seitenstruktur zu schaffen, indem Überschriften und Absätze definiert werden.

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
        <li>Wie man eine gute Dokumentenstruktur mit Überschriften und Inhalten unter diesen Überschriften erstellt.</li>
        <li>Verwendung von semantischem HTML anstelle von präsentationalem HTML und warum dies wichtig ist.</li>
        <li>Die Notwendigkeit, Überschriftsebenen logisch zu verwenden, d.h. keine Ebenen zu überspringen oder sie willkürlich zu nutzen, weil man eine bestimmte Schriftgröße erreichen möchte (das ist die Aufgabe von CSS).</li>
        <li>SEO-Vorteile: Zum Beispiel werden Schlüsselwörter in Überschriften hervorgehoben.</li>
        <li>Barrierefreiheitsvorteile: Assistive Technologien (AT) wie Screenreader verwenden Überschriften (und andere Orientierungspunkte) als Wegweiser, um Inhalte zu navigieren. HTML-Dokumente sind ohne Überschriften sehr schwer für AT-Nutzer zu verwenden.</li>
      </td>
    </tr>
  </tbody>
</table>

## Überschriften und Absätze

Die meisten strukturierten Texte bestehen aus Überschriften und Absätzen, unabhängig davon, ob Sie eine Geschichte, eine Zeitung, ein College-Lehrbuch, eine Zeitschrift usw. lesen.

![Ein Beispiel für eine Zeitungsvorderseite mit einer Hauptüberschrift, Unterüberschriften und Absätzen.](newspaper_small.jpg)

Strukturierte Inhalte machen das Leseerlebnis einfacher und angenehmer.

In HTML muss jeder Absatz in ein {{htmlelement("p")}}-Element eingebunden werden, wie folgt:

```html
<p>I am a paragraph, oh yes I am.</p>
```

Jede Überschrift muss in ein Überschriftselement eingebunden werden:

```html
<h1>I am the title of the story.</h1>
```

Es gibt sechs Überschriftselemente: {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}, {{htmlelement("Heading_Elements", "h3")}}, {{htmlelement("Heading_Elements", "h4")}}, {{htmlelement("Heading_Elements", "h5")}} und {{htmlelement("Heading_Elements", "h6")}}. Jedes Element repräsentiert eine andere Ebene des Inhalts im Dokument; `<h1>` steht für die Hauptüberschrift, `<h2>` steht für Unterüberschriften, `<h3>` für Unter-Unterüberschriften und so weiter.

## Umsetzung der strukturellen Hierarchie

Zum Beispiel stellt in dieser Geschichte das `<h1>`-Element den Titel der Geschichte dar, die `<h2>`-Elemente repräsentieren den Titel jedes Kapitels, und die `<h3>`-Elemente repräsentieren Unterabschnitte jedes Kapitels:

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

Es liegt wirklich an Ihnen, was die Elemente darstellen, solange die Hierarchie Sinn macht. Sie müssen nur ein paar bewährte Praktiken beachten, während Sie solche Strukturen erstellen:

- Vorzugsweise sollten Sie nur ein `<h1>` pro Seite verwenden—dies ist die oberste Überschriftsebene, und alle anderen stehen in der Hierarchie darunter.
- Stellen Sie sicher, dass Sie die Überschriften in der richtigen Reihenfolge in der Hierarchie verwenden. Verwenden Sie keine `<h3>`-Elemente, um Unterüberschriften darzustellen, gefolgt von `<h2>`-Elementen, um Unter-Unterüberschriften darzustellen—das ergibt keinen Sinn und führt zu seltsamen Ergebnissen.
- Von den sechs verfügbaren Überschriftsebenen sollten Sie versuchen, nicht mehr als drei pro Seite zu verwenden, es sei denn, Sie halten es für notwendig. Dokumente mit vielen Ebenen (zum Beispiel eine tiefe Überschriftenhierarchie) werden unhandlich und schwer zu navigieren. In solchen Fällen ist es ratsam, den Inhalt wenn möglich auf mehrere Seiten zu verteilen.

## Warum brauchen wir Struktur?

Um diese Frage zu beantworten, werfen wir einen Blick auf [text-start.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html)—den Ausgangspunkt unseres laufenden Beispiels für diesen Artikel (ein schönes Hummus-Rezept). Sie sollten eine Kopie dieser Datei auf Ihrem lokalen Computer speichern, da Sie sie für Übungen in den folgenden Lektionen benötigen. Der Body dieses Dokuments enthält derzeit mehrere Inhalte. Sie sind in keiner Weise markiert, aber sie sind durch Zeilenumbrüche getrennt (Enter/Return wird gedrückt, um zur nächsten Zeile zu gelangen).

Wenn Sie jedoch das Dokument in Ihrem Browser öffnen, wird der Text als großer Block angezeigt!

![Eine Webseite, die aufgrund fehlender Strukturierungselemente einen unformatierten Textblock zeigt.](screen_shot_2017-03-29_at_09.20.35.png)

Dies liegt daran, dass keine Elemente vorhanden sind, um dem Inhalt Struktur zu verleihen, sodass der Browser nicht weiß, was eine Überschrift und was ein Absatz ist. Zudem:

- Nutzer, die eine Webseite ansehen, neigen dazu, schnell zu scannen, um relevante Inhalte zu finden, oft lesen sie zunächst nur die Überschriften. (Wir verbringen in der Regel [sehr wenig Zeit auf einer Webseite](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/).) Wenn sie innerhalb weniger Sekunden nichts Nützliches finden, werden sie wahrscheinlich frustriert und gehen woanders hin.
- Suchmaschinen, die Ihre Seite indexieren, betrachten den Inhalt von Überschriften als wichtige Schlüsselwörter zur Beeinflussung des Suchrankings der Seite. Ohne Überschriften wird Ihre Seite in Bezug auf {{Glossary("SEO", "SEO")}} (Suchmaschinenoptimierung) schlecht abschneiden.
- Schwer sehbehinderte Menschen lesen oft keine Webseiten; sie hören sie stattdessen. Dies geschieht mit Software namens [Screenreader](https://de.wikipedia.org/wiki/Screenreader). Diese Software bietet Möglichkeiten, schnell auf bestimmte Textinhalte zuzugreifen. Zu den verschiedenen verwendeten Techniken gehört es, eine Übersicht über das Dokument zu bieten, indem die Überschriften vorgelesen werden, sodass Benutzer die benötigten Informationen schnell finden können. Wenn Überschriften nicht verfügbar sind, sind sie gezwungen, das gesamte Dokument vorlesen zu lassen.
- Um Inhalte mit {{Glossary("CSS", "CSS")}} zu stylen oder mit {{Glossary("JavaScript", "JavaScript")}} interessante Dinge damit zu machen, müssen Sie die relevanten Inhalte in Elemente einbinden, sodass CSS/JavaScript diese effektiv ansprechen können.

Daher müssen wir unserem Inhalt strukturelle Markierung geben.

## Aktives Lernen: Unserem Inhalt Struktur geben

Springen wir in ein Live-Beispiel. Fügen Sie im folgenden Beispiel im _Input_-Feld Elemente zum rohen Text hinzu, sodass er im _Output_-Feld als Überschrift und zwei Absätze erscheint.

Wenn Sie einen Fehler machen, können Sie ihn immer mit der _Reset_-Schaltfläche zurücksetzen. Wenn Sie nicht weiterkommen, drücken Sie die _Show solution_-Schaltfläche, um die Antwort zu sehen.

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

## Warum brauchen wir Semantik?

Semantik wird überall um uns herum verwendet—wir verlassen uns auf frühere Erfahrungen, um uns zu sagen, was die Funktion eines alltäglichen Objekts ist; wenn wir etwas sehen, wissen wir, welche Funktion es haben wird. Zum Beispiel erwarten wir, dass ein rotes Ampellicht "stopp" bedeutet und ein grünes Ampellicht "go". Dinge können schnell schwierig werden, wenn die falschen Semantiken angewendet werden. (Verwendet irgendein Land rot, um "go" zu bedeuten? Hoffentlich nicht.)

Auf ähnliche Weise müssen wir sicherstellen, dass wir die richtigen Elemente verwenden, um unserem Inhalt die richtige Bedeutung, Funktion oder das richtige Erscheinungsbild zu geben. In diesem Kontext ist das {{htmlelement("Heading_Elements", "h1")}}-Element ebenfalls ein semantisches Element, das dem umschlossenen Text die Rolle (oder Bedeutung) einer "oberen Überschrift auf Ihrer Seite" gibt.

```html
<h1>This is a top level heading</h1>
```

Standardmäßig wird der Browser ihm eine große Schriftgröße geben, um es wie eine Überschrift aussehen zu lassen (obwohl Sie es mit CSS so stylen könnten, dass es wie etwas anderes aussieht). Wichtiger ist, dass sein semantischer Wert auf mehrere Arten verwendet wird, zum Beispiel von Suchmaschinen und Screenreadern (wie oben erwähnt).

Andererseits könnten Sie jedes Element wie eine obere Überschrift _aussehen lassen_. Betrachten Sie Folgendes:

```html
<span style="font-size: 32px; margin: 21px 0; display: block;">
  Is this a top level heading?
</span>
```

Dies ist ein {{htmlelement("span")}}-Element. Es hat keine Semantik. Sie verwenden es, um Inhalte einzubinden, wenn Sie CSS darauf anwenden möchten (oder etwas damit mit JavaScript machen möchten), ohne ihm eine zusätzliche Bedeutung zu geben. (Darüber werden Sie später im Kurs mehr erfahren.) Wir haben etwas CSS darauf angewendet, damit es wie eine obere Überschrift aussieht, aber da es keinen semantischen Wert hat, wird es keine der oben beschriebenen zusätzlichen Vorteile erhalten. Es ist eine gute Idee, das relevante HTML-Element für die Aufgabe zu verwenden.

## Zusammenfassung

Damit schließen wir unser Studium der HTML-Überschriften und Absätze ab. Als Nächstes werden wir weitere Aspekte von semantischem HTML betrachten: Hervorheben von Wörtern.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content")}}
