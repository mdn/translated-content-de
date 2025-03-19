---
title: Überschriften und Absätze
slug: Learn_web_development/Core/Structuring_content/Headings_and_paragraphs
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content")}}

Eine der Hauptaufgaben von HTML besteht darin, Texten Struktur zu verleihen, damit ein Browser ein HTML-Dokument so anzeigt, wie es der Entwickler beabsichtigt. Dieser Artikel erklärt, wie {{Glossary("HTML", "HTML")}} verwendet werden kann, um eine grundlegende Seitenstruktur zu schaffen, indem Überschriften und Absätze definiert werden.

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
          <li>Wie man eine gute Dokumentstruktur mit Überschriften und darunter liegendem Inhalt erstellt.</li>
          <li>Die Verwendung von semantischem statt präsentationalem HTML und warum dies wichtig ist.</li>
          <li>Die Notwendigkeit, Überschriftenebenen logisch zu verwenden, d.h. keine Ebenen zu überspringen oder sie willkürlich zu verwenden, weil Sie eine bestimmte Schriftgröße erreichen möchten (das ist eine Aufgabe für CSS).</li>
          <li>SEO-Vorteile: Zum Beispiel werden Schlüsselwörter in Überschriften hervorgehoben.</li>
          <li>Barrierefreiheitsvorteile: Assistive Technologien (AT) wie Bildschirmleseprogramme verwenden Überschriften (und andere Orientierungspunkte) als Wegweiser zur Navigation durch den Inhalt. HTML-Dokumente sind für AT-Nutzer sehr schwierig zu verwenden, wenn keine Überschriften vorhanden sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Überschriften und Absätze

Die meisten strukturierten Texte bestehen aus Überschriften und Absätzen, unabhängig davon, ob Sie eine Geschichte, eine Zeitung, ein College-Lehrbuch, ein Magazin usw. lesen.

![Ein Beispiel für eine Zeitungs-Titelseite, die die Verwendung einer Hauptüberschrift, von Unterüberschriften und Absätzen zeigt.](newspaper_small.jpg)

Strukturierter Inhalt macht das Leseerlebnis einfacher und angenehmer.

In HTML muss jeder Absatz in ein {{htmlelement("p")}}-Element eingeschlossen sein, wie folgt:

```html
<p>I am a paragraph, oh yes I am.</p>
```

Jede Überschrift muss in ein Überschriftselement eingeschlossen sein:

```html
<h1>I am the title of the story.</h1>
```

Es gibt sechs Überschriftselemente: {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}, {{htmlelement("Heading_Elements", "h3")}}, {{htmlelement("Heading_Elements", "h4")}}, {{htmlelement("Heading_Elements", "h5")}}, und {{htmlelement("Heading_Elements", "h6")}}. Jedes Element repräsentiert eine andere Inhaltsebene im Dokument; `<h1>` repräsentiert die Hauptüberschrift, `<h2>` repräsentiert Unterüberschriften, `<h3>` repräsentiert Unter-Unterüberschriften usw.

## Implementierung der strukturellen Hierarchie

Zum Beispiel repräsentiert in dieser Geschichte das `<h1>`-Element den Titel der Geschichte, die `<h2>`-Elemente repräsentieren die Titel der einzelnen Kapitel, und die `<h3>`-Elemente repräsentieren Unterabschnitte der Kapitel:

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

Es bleibt Ihnen überlassen, was die beteiligten Elemente darstellen, solange die Hierarchie Sinn macht. Sie sollten nur einige Best Practices im Auge behalten, während Sie solche Strukturen erstellen:

- Vorzugsweise sollten Sie pro Seite ein einzelnes `<h1>` verwenden—dies ist die oberste Ebene der Überschrift, und alle anderen liegen darunter in der Hierarchie.
- Stellen Sie sicher, dass Sie die Überschriften in der richtigen Reihenfolge in der Hierarchie verwenden. Verwenden Sie keine `<h3>`-Elemente, um Unterüberschriften darzustellen, gefolgt von `<h2>`-Elementen, um Unter-Unterüberschriften darzustellen—das ergibt keinen Sinn und führt zu seltsamen Ergebnissen.
- Von den sechs verfügbaren Überschriftenebenen sollten Sie auf einer Seite nicht mehr als drei verwenden, es sei denn, es erscheint Ihnen notwendig. Dokumente mit vielen Ebenen (zum Beispiel eine tiefe Überschriftenhierarchie) werden unhandlich und schwer zu navigieren. In solchen Fällen ist es ratsam, den Inhalt nach Möglichkeit auf mehrere Seiten zu verteilen.

## Warum brauchen wir Struktur?

Um diese Frage zu beantworten, werfen wir einen Blick auf [text-start.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html)—den Ausgangspunkt unseres laufenden Beispiels für diesen Artikel (ein schönes Hummus-Rezept). Sie sollten eine Kopie dieser Datei auf Ihrem lokalen Rechner speichern, da Sie sie für Übungen in den folgenden Lektionen benötigen werden. Der Body dieses Dokuments enthält derzeit mehrere Inhalte. Sie sind nicht in irgendeiner Weise ausgezeichnet, aber sie sind mit Zeilenumbrüchen getrennt (Eingabe/Umbruch gedrückt, um zur nächsten Zeile zu gelangen).

Wenn Sie das Dokument jedoch in Ihrem Browser öffnen, werden Sie sehen, dass der Text als großer Block erscheint!

![Eine Webseite, die eine Wand aus unformatiertem Text zeigt, weil es keine Elemente auf der Seite gibt, um sie zu strukturieren.](screen_shot_2017-03-29_at_09.20.35.png)

Dies liegt daran, dass es keine Elemente gibt, die dem Inhalt Struktur verleihen, sodass der Browser nicht weiß, was eine Überschrift und was ein Absatz ist. Darüber hinaus:

- Benutzer, die sich eine Webseite ansehen, neigen dazu, schnell zu scannen, um relevante Inhalte zu finden und oft nur die Überschriften zu lesen. (Wir verbringen normalerweise [nur eine sehr kurze Zeit auf einer Webseite](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/).) Wenn sie in wenigen Sekunden nichts Nützliches sehen können, werden sie wahrscheinlich frustriert und gehen woanders hin.
- Suchmaschinen, die Ihre Seite indexieren, betrachten den Inhalt der Überschriften als wichtige Schlüsselwörter, um die Suchrankings der Seite zu beeinflussen. Ohne Überschriften wird Ihre Seite in Bezug auf {{Glossary("SEO", "SEO")}} (Suchmaschinenoptimierung) schlecht abschneiden.
- Schwer sehbehinderte Menschen lesen oft keine Webseiten; sie hören sie stattdessen. Dies geschieht mit einer Software namens [Bildschirmleseprogramm](https://en.wikipedia.org/wiki/Screen_reader). Diese Software bietet Möglichkeiten, schnell auf bestimmte Textinhalte zuzugreifen. Zu den verschiedenen verwendeten Techniken gehört es, eine Gliederung des Dokuments durch Vorlesen der Überschriften bereitzustellen, damit die Benutzer die benötigten Informationen schnell finden können. Wenn keine Überschriften verfügbar sind, müssen sie sich den gesamten Text vorlesen lassen.
- Um Inhalte mit {{Glossary("CSS", "CSS")}} zu stylen oder interessante Dinge mit {{Glossary("JavaScript", "JavaScript")}} zu tun, müssen Sie Elemente haben, die den betreffenden Inhalt umschließen, damit CSS/JavaScript effektiv darauf abzielen können.

Daher müssen wir unserem Inhalt strukturelle Auszeichnung geben.

## Aktives Lernen: Unserem Inhalt Struktur geben

Springen wir direkt in ein Live-Beispiel. Fügen Sie im Beispiel unten Elemente in das rohe Textfeld im _Eingabefeld_ ein, damit es im _Ausgabefeld_ als eine Überschrift und zwei Absätze erscheint.

Wenn Sie einen Fehler machen, können Sie ihn jederzeit mit der _Zurücksetzen_ Taste korrigieren. Wenn Sie nicht weiterkommen, drücken Sie auf die _Lösung anzeigen_ Taste, um die Antwort zu sehen.

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

Semantik wird überall um uns herum angewendet—wir verlassen uns auf vergangene Erfahrungen, um uns zu sagen, was die Funktion eines alltäglichen Objekts ist; wenn wir etwas sehen, wissen wir, was seine Funktion sein wird. So erwarten wir zum Beispiel, dass ein rotes Licht bedeutet "anhalten" und ein grünes Licht bedeutet "gehen". Dinge können sehr schnell kompliziert werden, wenn die falsche Semantik angewendet wird. (Verwenden irgendwelche Länder Rot, um "gehen" zu bedeuten? Hoffentlich nicht.)

In ähnlicher Weise müssen wir sicherstellen, dass wir die richtigen Elemente verwenden und unseren Inhalten die richtige Bedeutung, Funktion oder Erscheinung verleihen. In diesem Zusammenhang ist das {{htmlelement("Heading_Elements", "h1")}}-Element auch ein semantisches Element, das dem Text, den es umschließt, die Rolle (oder Bedeutung) "eine oberste Überschrift auf Ihrer Seite" gibt.

```html
<h1>This is a top level heading</h1>
```

Standardmäßig wird der Browser ihm eine große Schriftgröße zuweisen, um es wie eine Überschrift aussehen zu lassen (obwohl Sie es mit CSS so stylen könnten, wie Sie möchten). Wichtiger ist, dass sein semantischer Wert auf verschiedene Weise genutzt wird, zum Beispiel von Suchmaschinen und Screenreadern (wie oben erwähnt).

Andererseits könnten Sie jedes Element _wie_ eine oberste Überschrift aussehen lassen. Betrachten Sie das Folgende:

```html
<span style="font-size: 32px; margin: 21px 0; display: block;">
  Is this a top level heading?
</span>
```

Dies ist ein {{htmlelement("span")}}-Element. Es hat keine Semantik. Man verwendet es, um Inhalte zu umschließen, wenn man CSS darauf anwenden möchte (oder etwas damit mit JavaScript tun möchte), ohne ihm zusätzliche Bedeutung zu geben. (Mehr darüber erfahren Sie später im Kurs.) Wir haben etwas CSS darauf angewendet, damit es wie eine oberste Überschrift aussieht, aber da es keinen semantischen Wert hat, wird es keines der oben beschriebenen zusätzlichen Vorteile erhalten. Es ist eine gute Idee, das relevante HTML-Element für die jeweilige Aufgabe zu verwenden.

## Zusammenfassung

Dies beendet unser Studium der HTML-Überschriften und Absätze. Als Nächstes werden wir weitere Aspekte des semantischen HTML anschauen: Worte hervorheben.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content")}}
