---
title: HTML Text Grundlagen
slug: Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML")}}

Eine der Hauptaufgaben von HTML ist es, Texten Struktur zu geben, damit ein Browser ein HTML-Dokument so anzeigen kann, wie es der Entwickler beabsichtigt. Dieser Artikel erklärt, wie {{Glossary("HTML", "HTML")}} verwendet werden kann, um eine Seite mit Text durch das Hinzufügen von Überschriften und Absätzen, das Hervorheben von Wörtern, das Erstellen von Listen und mehr zu strukturieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie im
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Einführung in HTML</a
        > behandelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man eine einfache Textseite markiert, um ihr Struktur und
        Bedeutung zu geben — einschließlich Absätze, Überschriften, Listen,
        Hervorhebungen und Zitate.
      </td>
    </tr>
  </tbody>
</table>

## Die Grundlagen: Überschriften und Absätze

Die meisten strukturierten Texte bestehen aus Überschriften und Absätzen, sei es eine Geschichte, eine Zeitung, ein Lehrbuch, ein Magazin usw.

![Ein Beispiel für ein Zeitungsdeckblatt, das die Verwendung einer Überschrift der obersten Ebene, Unterüberschriften und Absätze zeigt.](newspaper_small.jpg)

Strukturierter Inhalt erleichtert und verbessert das Leseerlebnis.

In HTML muss jeder Absatz in ein {{htmlelement("p")}}-Element eingeschlossen werden, so:

```html
<p>I am a paragraph, oh yes I am.</p>
```

Jede Überschrift muss in ein Überschriftselement eingeschlossen werden:

```html
<h1>I am the title of the story.</h1>
```

Es gibt sechs Überschriftselemente: {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}, {{htmlelement("Heading_Elements", "h3")}}, {{htmlelement("Heading_Elements", "h4")}}, {{htmlelement("Heading_Elements", "h5")}} und {{htmlelement("Heading_Elements", "h6")}}. Jedes Element stellt eine andere Stufe des Inhalts im Dokument dar; `<h1>` stellt die Hauptüberschrift dar, `<h2>` stellt Unterüberschriften dar, `<h3>` stellt Unter-Unterüberschriften dar und so weiter.

### Implementierung der strukturellen Hierarchie

Zum Beispiel stellt in dieser Geschichte das `<h1>`-Element den Titel der Geschichte dar, die `<h2>`-Elemente stellen den Titel jedes Kapitels dar, und die `<h3>`-Elemente stellen Unterabschnitte jedes Kapitels dar:

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

Es liegt wirklich an Ihnen, welche Bedeutung die Elemente haben, solange die Hierarchie sinnvoll ist. Sie müssen nur einige bewährte Praktiken im Auge behalten, während Sie solche Strukturen erstellen:

- Sie sollten vorzugsweise eine einzelne `<h1>`-Überschrift pro Seite verwenden—dies ist die Überschrift der obersten Ebene, und alle anderen liegen darunter in der Hierarchie.
- Achten Sie darauf, dass Sie die Überschriften in der richtigen Reihenfolge in der Hierarchie verwenden. Verwenden Sie keine `<h3>`-Elemente für Unterüberschriften, gefolgt von `<h2>`-Elementen für Unter-Unterüberschriften—das ergibt keinen Sinn und führt zu unerwarteten Ergebnissen.
- Von den sechs verfügbaren Überschriftsstufen sollten Sie nicht mehr als drei pro Seite verwenden, es sei denn, es ist notwendig. Dokumente mit vielen Ebenen (zum Beispiel eine tiefe Überschriftenhierarchie) werden unhandlich und schwer zu navigieren. In solchen Fällen ist es ratsam, den Inhalt, wenn möglich, auf mehrere Seiten zu verteilen.

### Warum brauchen wir Struktur?

Um diese Frage zu beantworten, werfen wir einen Blick auf [text-start.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html)—den Ausgangspunkt unseres Beispielprojekts für diesen Artikel (ein schönes Hummus-Rezept). Sie sollten eine Kopie dieser Datei auf Ihrem lokalen Rechner speichern, da Sie sie später für die Übungen benötigen werden. Der Körper dieses Dokuments enthält derzeit mehrere Textstücke. Sie sind in keiner Weise ausgezeichnet, aber durch Zeilenumbrüche voneinander getrennt (Enter/Return zum Wechseln in die nächste Zeile).

Wenn Sie das Dokument jedoch in Ihrem Browser öffnen, wird der Text als riesiger Block angezeigt!

![Eine Webseite, die einen Block unformatierten Text zeigt, weil es keine Elemente auf der Seite gibt, um ihn zu strukturieren.](screen_shot_2017-03-29_at_09.20.35.png)

Das liegt daran, dass es keine Elemente gibt, die dem Inhalt Struktur geben, sodass der Browser nicht weiß, was eine Überschrift und was ein Absatz ist. Darüber hinaus:

- Benutzer, die eine Webseite betrachten, neigen dazu, schnell zu scannen, um relevante Inhalte zu finden, und lesen dabei oft nur die Überschriften. (Normalerweise [verbringen wir sehr wenig Zeit auf einer Webseite](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/).) Wenn sie innerhalb weniger Sekunden nichts Nützliches sehen können, werden sie wahrscheinlich frustriert und gehen woanders hin.
- Suchmaschinen, die Ihre Seite indexieren, berücksichtigen den Inhalt der Überschriften als wichtige Schlüsselwörter zur Beeinflussung der Suchrankings der Seite. Ohne Überschriften wird Ihre Seite in Bezug auf {{Glossary("SEO", "SEO")}} (Suchmaschinenoptimierung) schlecht abschneiden.
- Schwer Sehbehinderte lesen oft keine Webseiten, sondern hören sie sich an. Dies geschieht mit einer Software, die als [Screenreader](https://en.wikipedia.org/wiki/Screen_reader) bezeichnet wird. Diese Software bietet Möglichkeiten, schnell auf bestimmte Textinhalte zuzugreifen. Unter den verschiedenen Techniken bietet sie einen Umriss des Dokuments, indem sie die Überschriften vorliest, und ermöglicht es ihren Benutzern, die benötigten Informationen schnell zu finden. Wenn keine Überschriften verfügbar sind, müssen diese Benutzer den gesamten Text vorgelesen bekommen.
- Um Inhalte mit {{Glossary("CSS", "CSS")}} zu stylen oder sie mit {{Glossary("JavaScript", "JavaScript")}} zu manipulieren, müssen Sie Elemente haben, die den entsprechenden Inhalt umschließen, damit CSS/JavaScript sie effektiv anvisieren kann.

Deshalb müssen wir unserem Inhalt strukturelles Markup geben.

### Aktives Lernen: Unserem Inhalt Struktur geben

Springen wir direkt hinein in ein Live-Beispiel. Im folgenden Beispiel fügen Sie dem Rohtext im _Eingabefeld_ Elemente hinzu, sodass er im _Ausgabefeld_ als Überschrift und zwei Absätze erscheint.

Sollten Sie einen Fehler machen, können Sie ihn immer mit der _Zurücksetzen_ Schaltfläche zurücksetzen. Falls Sie nicht weiterkommen, drücken Sie die Schaltfläche _Lösung anzeigen_, um die Antwort zu sehen.

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

### Warum brauchen wir Semantik?

Semantik spielt überall um uns herum eine Rolle—wir verlassen uns auf frühere Erfahrungen, um uns zu sagen, welche Funktion ein alltäglicher Gegenstand hat; wenn wir etwas sehen, wissen wir, welche Funktion es haben wird. Beispielsweise erwarten wir, dass ein rotes Verkehrslicht "Stopp" und ein grünes Verkehrslicht "Fahren" bedeutet. Die Dinge können schnell kompliziert werden, wenn die falsche Semantik angewandt wird. (Verwendet irgendein Land Rot, um "Fahren" zu bedeuten? Hoffentlich nicht.)

In ähnlicher Weise müssen wir darauf achten, dass wir die richtigen Elemente verwenden, um unserem Inhalt die richtige Bedeutung, Funktion oder das richtige Erscheinungsbild zu geben. In diesem Kontext ist das {{htmlelement("Heading_Elements", "h1")}}-Element auch ein semantisches Element, das dem umschlossenen Text die Rolle (oder Bedeutung) "eine Überschrift der obersten Ebene auf Ihrer Seite" gibt.

```html
<h1>This is a top level heading</h1>
```

Standardmäßig wird der Browser ihm eine große Schriftgröße geben, um es wie eine Überschrift aussehen zu lassen (obwohl Sie es mit CSS so gestalten könnten, dass es wie alles andere aussieht). Wichtiger ist, dass sein semantischer Wert auf verschiedene Weisen genutzt wird, z. B. von Suchmaschinen und Screenreadern (wie oben erwähnt).

Andererseits könnten Sie jedes Element dazu bringen, _wie_ eine Überschrift der obersten Ebene auszusehen. Betrachten Sie das Folgende:

```html
<span style="font-size: 32px; margin: 21px 0; display: block;">
  Is this a top level heading?
</span>
```

Dies ist ein {{htmlelement("span")}}-Element. Es hat keine Semantik. Sie verwenden es, um Inhalte zu umschließen, wenn Sie mit CSS darauf zugreifen möchten (oder etwas damit mit JavaScript tun möchten) ohne ihm zusätzliche Bedeutung zu geben. (Sie werden mehr darüber später im Kurs erfahren.) Wir haben ihm mit etwas CSS das Aussehen einer Überschrift der obersten Ebene verliehen, doch da es keinen semantischen Wert hat, wird es keiner der oben beschriebenen zusätzlichen Vorteile erhalten. Es ist eine gute Idee, das entsprechende HTML-Element für die jeweilige Aufgabe zu verwenden.

## Listen

Nun richten wir unsere Aufmerksamkeit auf Listen. Listen begegnen uns überall im Leben—von Ihrer Einkaufsliste bis zur Liste der Richtungen, die Sie unbewusst befolgen, um jeden Tag zu Ihrem Haus zu gelangen, bis hin zu den Listen von Anweisungen, denen Sie in diesen Tutorials folgen! Im Web gibt es drei Arten von Listen: ungeordnet, geordnet und beschreibend.

Ungeordnete und geordnete Listen sind sehr verbreitet und werden in diesem Abschnitt behandelt. Beschreibende Listen sind weniger verbreitet, und wir werden sie im [Fortgeschrittene Textformatierung](/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting) behandeln.

### Ungeordnet

Ungeordnete Listen werden verwendet, um Listen von Elementen zu markieren, bei denen die Ordnung der Elemente keine Rolle spielt. Nehmen wir eine Einkaufsliste als Beispiel:

```plain
milk
eggs
bread
hummus
```

Jede ungeordnete Liste beginnt mit einem {{htmlelement("ul")}}-Element—dies umfasst alle Listenelemente:

```html-nolint
<ul>
  milk
  eggs
  bread
  hummus
</ul>
```

Der letzte Schritt ist, jedes Listenelement in ein {{htmlelement("li")}} (Listenelement) einzu
