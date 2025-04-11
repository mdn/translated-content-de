---
title: Überschriften und Absätze
slug: Learn_web_development/Core/Structuring_content/Headings_and_paragraphs
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content")}}

Eine der Hauptaufgaben von HTML ist es, Texten eine Struktur zu geben, damit ein Browser ein HTML-Dokument so anzeigen kann, wie es der Entwickler beabsichtigt. Dieser Artikel erklärt, wie {{Glossary("HTML", "HTML")}} verwendet werden kann, um eine grundlegende Seitenstruktur durch die Definition von Überschriften und Absätzen bereitzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Wie eine gute Dokumentenstruktur mit Überschriften und darunter liegendem Inhalt erstellt wird.</li>
          <li>Verwendung von semantischem HTML anstelle von präsentationsgerichtetem HTML und warum das wichtig ist.</li>
          <li>Die Notwendigkeit, Überschriftsebenen logisch zu verwenden, also keine Ebenen zu überspringen oder sie willkürlich zu nutzen, weil Sie eine bestimmte Schriftgröße erreichen wollen (dies ist eine Aufgabe für CSS).</li>
          <li>SEO-Vorteile: Zum Beispiel werden Schlüsselwörter in Überschriften verstärkt.</li>
          <li>Barrierefreiheitsvorteile: Assistive Technologien (AT) wie Screenreader nutzen Überschriften (und andere Orientierungspunkte) als Wegweiser zur Navigation durch den Inhalt. HTML-Dokumente sind für AT-Benutzer sehr schwer zu nutzen, wenn keine Überschriften vorhanden sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Überschriften und Absätze

Die meisten strukturierten Texte bestehen aus Überschriften und Absätzen, egal ob Sie eine Geschichte, eine Zeitung, ein College-Lehrbuch, ein Magazin usw. lesen.

![Ein Beispiel für ein Zeitungs-Titelblatt, das die Verwendung einer Top-Level-Überschrift, Unterüberschriften und Absätze zeigt.](newspaper_small.jpg)

Strukturierter Inhalt macht das Leseerlebnis einfacher und angenehmer.

In HTML muss jeder Absatz in ein {{htmlelement("p")}}-Element eingefügt werden, so:

```html
<p>I am a paragraph, oh yes I am.</p>
```

Jede Überschrift muss in ein Überschriftselement eingefügt werden:

```html
<h1>I am the title of the story.</h1>
```

Es gibt sechs Überschriftselemente: {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}, {{htmlelement("Heading_Elements", "h3")}}, {{htmlelement("Heading_Elements", "h4")}}, {{htmlelement("Heading_Elements", "h5")}}, und {{htmlelement("Heading_Elements", "h6")}}. Jedes Element repräsentiert eine andere Ebene des Inhalts im Dokument; `<h1>` stellt die Hauptüberschrift dar, `<h2>` stellt Unterüberschriften dar, `<h3>` stellt Unter-Unterüberschriften dar und so weiter.

## Implementierung der strukturellen Hierarchie

Zum Beispiel repräsentiert in dieser Geschichte das `<h1>`-Element den Titel der Geschichte, die `<h2>`-Elemente repräsentieren die Titel der einzelnen Kapitel und die `<h3>`-Elemente repräsentieren Unterabschnitte der einzelnen Kapitel:

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

Es liegt wirklich an Ihnen, was die beteiligten Elemente darstellen, solange die Hierarchie sinnvoll ist. Sie müssen nur ein paar Best Practices beachten, wenn Sie solche Strukturen erstellen:

- Vorzugsweise sollten Sie eine einzige `<h1>` pro Seite verwenden - dies ist die oberste Ebene der Überschrift, und alle anderen befinden sich darunter in der Hierarchie.
- Stellen Sie sicher, dass Sie die Überschriften in der richtigen Reihenfolge in der Hierarchie verwenden. Verwenden Sie keine `<h3>`-Elemente für Unterüberschriften, gefolgt von `<h2>`-Elementen für Unter-Unterüberschriften - das ergibt keinen Sinn und führt zu seltsamen Ergebnissen.
- Von den sechs verfügbaren Überschriftsebenen sollten Sie nicht mehr als drei pro Seite verwenden, es sei denn, es ist notwendig. Dokumente mit vielen Ebenen (zum Beispiel eine tiefe Überschriftenhierarchie) werden unhandlich und schwer zu navigieren. In solchen Fällen ist es ratsam, den Inhalt nach Möglichkeit auf mehrere Seiten zu verteilen.

## Warum brauchen wir Struktur?

Um diese Frage zu beantworten, werfen wir einen Blick auf [text-start.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html) - den Ausgangspunkt unseres laufenden Beispiels für diesen Artikel (ein nettes Hummus-Rezept). Sie sollten eine Kopie dieser Datei auf Ihrem lokalen Rechner speichern, da Sie sie für Übungen in den nächsten Lektionen benötigen werden. Der Hauptteil dieses Dokuments enthält derzeit mehrere Inhaltsteile. Sie sind in keiner Weise markiert, aber sie sind durch Zeilenumbrüche getrennt (Enter/Return gedrückt, um zur nächsten Zeile zu gelangen).

Wenn Sie das Dokument jedoch in Ihrem Browser öffnen, werden Sie sehen, dass der Text als großer Block erscheint!

![Eine Webseite, die eine Wand von unformatiertem Text zeigt, weil es keine Elemente auf der Seite gibt, um sie zu strukturieren.](screen_shot_2017-03-29_at_09.20.35.png)

Das liegt daran, dass es keine Elemente gibt, die dem Inhalt Struktur verleihen, sodass der Browser nicht weiß, was eine Überschrift und was ein Absatz ist. Darüber hinaus:

- Benutzer, die eine Webseite ansehen, neigen dazu, schnell zu scannen, um relevante Inhalte zu finden und oft zunächst nur die Überschriften zu lesen. (Wir verbringen normalerweise [sehr wenig Zeit auf einer Webseite](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/).) Wenn sie innerhalb weniger Sekunden nichts Nützliches sehen, werden sie wahrscheinlich frustriert und gehen woanders hin.
- Suchmaschinen, die Ihre Seite indexieren, betrachten die Inhalte von Überschriften als wichtige Schlüsselwörter, um das Suchranking der Seite zu beeinflussen. Ohne Überschriften wird Ihre Seite in Bezug auf {{Glossary("SEO", "SEO")}} (Search Engine Optimization) schlecht abschneiden.
- Stark sehbehinderte Menschen lesen oft keine Webseiten; sie hören sie sich stattdessen an. Dies geschieht mit einer Software namens [Screenreader](https://de.wikipedia.org/wiki/Screenreader). Diese Software bietet Möglichkeiten, schnell auf bestimmte Textinhalte zuzugreifen. Unter den verschiedenen verwendeten Techniken bieten sie eine Gliederung des Dokuments, indem sie die Überschriften vorlesen, was es ihren Benutzern ermöglicht, die benötigten Informationen schnell zu finden. Wenn keine Überschriften vorhanden sind, sind sie gezwungen, sich das gesamte Dokument vorlesen zu lassen.
- Um Inhalte mit {{Glossary("CSS", "CSS")}} zu stylen oder interessante Dinge mit {{Glossary("JavaScript", "JavaScript")}} zu machen, müssen Sie Elemente haben, die den relevanten Inhalt umschließen, damit CSS/JavaScript ihn effektiv ansprechen kann.

Daher müssen wir unserem Inhalt strukturelles Markup geben.

## Aktives Lernen: Unserem Inhalt Struktur geben

Lassen Sie uns direkt mit einem Live-Beispiel einsteigen. Im folgenden Beispiel fügen Sie dem Rohtext im _Input_-Feld Elemente hinzu, sodass er im _Output_-Feld als Überschrift und zwei Absätze erscheint.

Wenn Sie einen Fehler machen, können Sie ihn immer mit der _Reset_-Taste zurücksetzen. Wenn Sie nicht weiterkommen, drücken Sie die _Show solution_-Taste, um die Antwort zu sehen.

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

Semantik wird überall um uns herum verwendet - wir verlassen uns auf frühere Erfahrungen, um uns zu sagen, was die Funktion eines alltäglichen Objekts ist; wenn wir etwas sehen, wissen wir, welche Funktion es haben wird. So erwarten wir zum Beispiel, dass ein rotes Verkehrslicht "Halt" bedeutet und ein grünes "Gehen". Die Dinge können sehr schnell kompliziert werden, wenn die falschen Semantiken angewendet werden. (Verwendet irgendein Land Rot, um "Gehen" zu bedeuten? Hoffentlich nicht.)

In ähnlicher Weise müssen wir sicherstellen, dass wir die richtigen Elemente verwenden und unserem Inhalt die richtige Bedeutung, Funktion oder Aussehen geben. In diesem Kontext ist das {{htmlelement("Heading_Elements", "h1")}}-Element auch ein semantisches Element, das dem Text, den es umschließt, die Rolle (oder Bedeutung) von "einer Top-Level-Überschrift auf Ihrer Seite" gibt.

```html
<h1>This is a top level heading</h1>
```

Standardmäßig wird der Browser ihm eine große Schriftgröße geben, um es wie eine Überschrift aussehen zu lassen (obwohl Sie es so gestalten könnten, dass es wie alles aussieht, was Sie möchten, indem Sie CSS verwenden). Wichtiger ist, dass sein semantischer Wert auf verschiedene Weise verwendet wird, z. B. von Suchmaschinen und Screenreadern (wie oben erwähnt).

Andererseits könnte jedes Element _wie_ eine Top-Level-Überschrift _aussehen_. Betrachten Sie Folgendes:

```html
<span style="font-size: 32px; margin: 21px 0; display: block;">
  Is this a top level heading?
</span>
```

Dies ist ein {{htmlelement("span")}}-Element. Es hat keine Semantik. Sie verwenden es, um Inhalte zu umschließen, wenn Sie CSS darauf anwenden möchten (oder etwas damit mit JavaScript tun möchten), ohne ihm eine zusätzliche Bedeutung zu geben. (Sie werden später im Kurs mehr dazu erfahren.) Wir haben etwas CSS darauf angewendet, um es wie eine Top-Level-Überschrift aussehen zu lassen, aber da es keinen semantischen Wert hat, wird es keinen der oben beschriebenen zusätzlichen Vorteile erhalten. Es ist eine gute Idee, das relevante HTML-Element für die Aufgabe zu verwenden.

## Zusammenfassung

Damit schließen wir unser Studium der HTML-Überschriften und Absätze ab. Als Nächstes schauen wir uns weitere Aspekte von semantischem HTML an: Wörter betonen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content")}}
