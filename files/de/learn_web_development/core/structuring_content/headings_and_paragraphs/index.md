---
title: Überschriften und Absätze in HTML
slug: Learn_web_development/Core/Structuring_content/Headings_and_paragraphs
l10n:
  sourceCommit: 4b6716ede3cfde38122835a3af0c9b8c9c22f14f
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content")}}

Eine der Hauptaufgaben von HTML ist es, Texten Struktur zu verleihen, damit ein Browser ein HTML-Dokument so anzeigen kann, wie es die Entwickler beabsichtigt haben. Dieser Artikel erklärt, wie {{Glossary("HTML", "HTML")}} verwendet werden kann, um grundlegende Seitenstruktur zu bieten, indem Überschriften und Absätze definiert werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Wie man eine gute Dokumentenstruktur mit Überschriften und Inhalten unter diesen Überschriften erstellt.</li>
          <li>Verwendung von semantischem statt präsentationellem HTML und warum das wichtig ist.</li>
          <li>Die Notwendigkeit, Überschriftenebenen logisch zu verwenden, d. h. keine Ebenen zu überspringen oder sie willkürlich zu verwenden, nur weil man eine bestimmte Schriftgröße erreichen möchte (das ist die Aufgabe von CSS).</li>
          <li>SEO-Vorteile: Zum Beispiel werden Schlüsselwörter in Überschriften verstärkt.</li>
          <li>Barrierefreiheitsvorteile: Assistive Technologien (AT), wie Bildschirmleseprogramme, verwenden Überschriften (und andere Orientierungspunkte), um Inhalte zu navigieren. HTML-Dokumente sind ohne Überschriften für AT-Nutzer sehr schwierig zu verwenden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Überschriften und Absätze

Die meisten strukturierten Texte bestehen aus Überschriften und Absätzen, egal ob Sie eine Geschichte, eine Zeitung, ein College-Lehrbuch, eine Zeitschrift usw. lesen.

![Ein Beispiel für eine Zeitungs-Titelseite mit einer obersten Überschrift, Unterüberschriften und Absätzen.](newspaper_small.jpg)

Strukturierte Inhalte machen das Leseerlebnis einfacher und angenehmer.

In HTML muss jeder Absatz in ein {{htmlelement("p")}}-Element eingeschlossen werden, wie folgt:

```html
<p>I am a paragraph, oh yes I am.</p>
```

Jede Überschrift muss in ein Überschriftselement eingeschlossen werden:

```html
<h1>I am the title of the story.</h1>
```

Es gibt sechs Überschriftselemente: {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}, {{htmlelement("Heading_Elements", "h3")}}, {{htmlelement("Heading_Elements", "h4")}}, {{htmlelement("Heading_Elements", "h5")}} und {{htmlelement("Heading_Elements", "h6")}}. Jedes Element repräsentiert eine andere Ebene von Inhalten im Dokument; `<h1>` repräsentiert die Hauptüberschrift, `<h2>` repräsentiert Unterüberschriften, `<h3>` repräsentiert Unter-Unterüberschriften usw.

## Umsetzung der strukturellen Hierarchie

Zum Beispiel repräsentiert in dieser Geschichte das `<h1>`-Element den Titel der Geschichte, die `<h2>`-Elemente repräsentieren die Titel der einzelnen Kapitel, und die `<h3>`-Elemente repräsentieren Unterabschnitte jedes Kapitels:

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

Es liegt wirklich an Ihnen, was die beteiligten Elemente repräsentieren, solange die Hierarchie Sinn macht. Sie sollten nur ein paar Best Practices berücksichtigen, während Sie solche Strukturen erstellen:

- Vorzugsweise sollten Sie pro Seite ein einziges `<h1>` verwenden – dies ist die oberste Überschrift und alle anderen reihen sich in der Hierarchie darunter ein.
- Stellen Sie sicher, dass Sie die Überschriften in der richtigen Reihenfolge in der Hierarchie verwenden. Verwenden Sie keine `<h3>`-Elemente, um Unterüberschriften zu repräsentieren, gefolgt von `<h2>`-Elementen, um Unter-Unterüberschriften zu repräsentieren – das ergibt keinen Sinn und führt zu seltsamen Ergebnissen.
- Von den sechs verfügbaren Überschriftenebenen sollten Sie nicht mehr als drei pro Seite verwenden, es sei denn, Sie halten es für notwendig. Dokumente mit vielen Ebenen (z. B. eine tiefgehende Überschriftenhierarchie) werden unhandlich und schwer zu navigieren. In solchen Fällen ist es ratsam, den Inhalt über mehrere Seiten zu verteilen, wenn möglich.

## Warum brauchen wir Struktur?

Um diese Frage zu beantworten, werfen wir einen Blick auf [text-start.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html) – den Ausgangspunkt unseres laufenden Beispiels für diesen Artikel (ein schönes Hummus-Rezept). Sie sollten eine Kopie dieser Datei auf Ihrem lokalen Rechner speichern, da Sie sie für Übungen in den nachfolgenden Lektionen benötigen. Der Körper dieses Dokuments enthält derzeit mehrere Inhaltselemente. Sie sind in keiner Weise ausgezeichnet, sondern werden mit Zeilenumbrüchen (Enter/Return gedrückt, um in die nächste Zeile zu wechseln) getrennt.

Wenn Sie jedoch das Dokument in Ihrem Browser öffnen, sehen Sie, dass der Text als großer Block erscheint!

![Eine Webseite, die eine Wand von unformatiertem Text zeigt, weil es keine Elemente auf der Seite gibt, um sie zu strukturieren.](screen_shot_2017-03-29_at_09.20.35.png)

Dies liegt daran, dass keine Elemente vorhanden sind, um den Inhalt zu strukturieren, sodass der Browser nicht weiß, was eine Überschrift und was ein Absatz ist. Weiterhin:

- Nutzer, die eine Webseite betrachten, neigen dazu, schnell zu scannen, um relevante Inhalte zu finden, oft lesen sie zuerst nur die Überschriften. (Wir verbringen in der Regel [sehr wenig Zeit auf einer Webseite](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/).) Wenn sie innerhalb von ein paar Sekunden nichts Nützliches finden, werden sie sich wahrscheinlich frustriert abwenden und woanders hingehen.
- Suchmaschinen, die Ihre Seite indexieren, betrachten die Inhalte von Überschriften als wichtige Schlüsselwörter, die das Ranking der Seite in den Suchergebnissen beeinflussen. Ohne Überschriften wird Ihre Seite in Bezug auf {{Glossary("SEO", "SEO")}} (Suchmaschinenoptimierung) schlecht abschneiden.
- Schwer sehbehinderte Menschen lesen oft nicht Webseiten; sie hören sie stattdessen. Dazu wird Software namens [Screenreader](https://en.wikipedia.org/wiki/Screen_reader) verwendet. Diese Software bietet Möglichkeiten, schnell auf bestimmte Textinhalte zuzugreifen. Zu den verschiedenen verwendeten Techniken gehört es, eine Gliederung des Dokuments bereitzustellen, indem die Überschriften vorgelesen werden, was den Nutzern ermöglicht, die benötigten Informationen schnell zu finden. Wenn Überschriften nicht verfügbar sind, werden sie gezwungen sein, sich das gesamte Dokument vorlesen zu lassen.
- Um Inhalte mit {{Glossary("CSS", "CSS")}} zu stylen oder sie mit {{Glossary("JavaScript", "JavaScript")}} interessante Dinge tun zu lassen, müssen Elemente den relevanten Inhalt umschließen, damit CSS/JavaScript diesen effektiv ansprechen kann.

Daher müssen wir unseren Inhalten eine strukturelle Auszeichnung hinzufügen.

## Aktives Lernen: Struktur für unsere Inhalte schaffen

Lassen Sie uns direkt mit einem Live-Beispiel loslegen. Fügen Sie im Beispiel unten den rohen Text im _Input_-Feld Elemente hinzu, sodass er im _Output_-Feld als Überschrift und zwei Absätze erscheint.

Wenn Sie einen Fehler machen, können Sie ihn jederzeit mit der _Reset_-Schaltfläche zurücksetzen. Wenn Sie stecken bleiben, drücken Sie die _Show solution_-Schaltfläche, um die Lösung zu sehen.

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

Semantik wird überall um uns herum verwendet – wir verlassen uns auf frühere Erfahrungen, um uns zu sagen, was die Funktion eines alltäglichen Gegenstandes ist; wenn wir etwas sehen, wissen wir, welche Funktion es haben wird. So erwarten wir zum Beispiel, dass ein rotes Verkehrslicht "Halt" bedeutet und ein grünes Verkehrslicht "Fahren". Die Dinge können sehr schnell schwierig werden, wenn die falsche Semantik angewendet wird. (Gibt es Länder, die Rot für "Fahren" verwenden? Hoffentlich nicht.)

In ähnlicher Weise müssen wir sicherstellen, dass wir die richtigen Elemente verwenden, um unseren Inhalten die richtige Bedeutung, Funktion oder Erscheinung zu geben. In diesem Kontext ist das {{htmlelement("Heading_Elements", "h1")}}-Element auch ein semantisches Element, das dem Text, den es umschließt, die Rolle (oder Bedeutung) "eine oberste Überschrift auf Ihrer Seite" verleiht.

```html
<h1>This is a top level heading</h1>
```

Standardmäßig wird der Browser es mit einer großen Schriftgröße anzeigen, damit es wie eine Überschrift aussieht (obwohl Sie es mit CSS so gestalten könnten, dass es wie alles andere aussieht, was Sie möchten). Wichtiger ist jedoch, dass sein semantischer Wert auf verschiedene Weise verwendet wird, zum Beispiel von Suchmaschinen und Bildschirmleseprogrammen (wie oben erwähnt).

Andererseits könnten Sie jedes beliebige Element _wie_ eine oberste Überschrift aussehen lassen. Betrachten Sie Folgendes:

```html
<span style="font-size: 32px; margin: 21px 0; display: block;">
  Is this a top level heading?
</span>
```

Dies ist ein {{htmlelement("span")}}-Element. Es hat keine Semantik. Sie verwenden es, um Inhalte einzuschließen, wenn Sie CSS darauf anwenden möchten (oder etwas mit JavaScript daran tun möchten), ohne ihm eine zusätzliche Bedeutung zu geben. (Sie werden später im Kurs mehr darüber erfahren.) Wir haben etwas CSS darauf angewendet, um es wie eine oberste Überschrift aussehen zu lassen, aber da es keinen semantischen Wert hat, wird es keine der oben beschriebenen zusätzlichen Vorteile erhalten. Es ist eine gute Idee, das relevante HTML-Element für die Aufgabe zu verwenden.

## Zusammenfassung

Damit schließen wir unser Studium der HTML-Überschriften und Absätze ab. Als nächstes werden wir uns mit weiteren Aspekten des semantischen HTML befassen: Wörter hervorheben.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content")}}
