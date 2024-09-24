---
title: Grundlagen des Textes in HTML
slug: Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML")}}

Eine der Hauptaufgaben von HTML ist es, Text eine Struktur zu geben, damit ein Browser ein HTML-Dokument so anzeigen kann, wie es der Entwickler beabsichtigt. Dieser Artikel erklärt, wie {{glossary("HTML")}} verwendet werden kann, um eine Seite mit Text zu strukturieren, indem Überschriften und Absätze hinzugefügt, Wörter betont, Listen erstellt und mehr getan wird.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie behandelt werden in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Erste Schritte mit HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man eine grundlegende Textseite markiert, um ihr Struktur und
        Bedeutung zu geben — einschließlich Absätze, Überschriften, Listen, Betonung und Zitate.
      </td>
    </tr>
  </tbody>
</table>

## Die Grundlagen: Überschriften und Absätze

Die meisten strukturierten Texte bestehen aus Überschriften und Absätzen, egal ob Sie eine Geschichte, eine Zeitung, ein College-Lehrbuch, ein Magazin usw. lesen.

![Ein Beispiel für ein Zeitungstitelbild, das die Verwendung einer Überschrift der obersten Ebene, Unterüberschriften und Absätze zeigt.](newspaper_small.jpg)

Strukturierter Inhalt macht das Leseerlebnis einfacher und angenehmer.

In HTML muss jeder Absatz in einem {{htmlelement("p")}}-Element umschlossen sein, wie folgt:

```html
<p>Ich bin ein Absatz, oh ja, ich bin es.</p>
```

Jede Überschrift muss in einem Heading-Element umschlossen sein:

```html
<h1>Ich bin der Titel der Geschichte.</h1>
```

Es gibt sechs Überschriften-Elemente: {{htmlelement("Heading_Elements", "h1")}}, {{htmlelement("Heading_Elements", "h2")}}, {{htmlelement("Heading_Elements", "h3")}}, {{htmlelement("Heading_Elements", "h4")}}, {{htmlelement("Heading_Elements", "h5")}}, und {{htmlelement("Heading_Elements", "h6")}}. Jedes Element stellt eine andere Inhaltsebene im Dokument dar; `<h1>` repräsentiert die Hauptüberschrift, `<h2>` die Unterüberschriften, `<h3>` die untergeordneten Unterüberschriften usw.

### Implementierung der strukturellen Hierarchie

Zum Beispiel repräsentiert im Folgenden die `<h1>`-Element den Titel der Geschichte, die `<h2>`-Elemente den Titel jedes Kapitels, und die `<h3>`-Elemente repräsentieren Unterabschnitte jedes Kapitels:

```html
<h1>Der erdrückende Langeweiler</h1>

<p>Von Chris Mills</p>

<h2>Kapitel 1: Die dunkle Nacht</h2>

<p>
  Es war eine dunkle Nacht. Irgendwo rief eine Eule. Der Regen prasselte auf…
</p>

<h2>Kapitel 2: Die ewige Stille</h2>

<p>Unser Protagonist konnte nicht mehr als ein Flüstern der schattenhaften Gestalt entlocken…</p>

<h3>Der Geist spricht</h3>

<p>
  Mehrere Stunden waren vergangen, als der Geist plötzlich kerzengerade saß
  und ausrief: "Bitte habe Erbarmen mit meiner Seele!"
</p>
```

Es liegt wirklich an Ihnen, was die beteiligten Elemente repräsentieren, solange die Hierarchie sinnvoll ist. Sie müssen nur ein paar bewährte Praktiken beachten, während Sie solche Strukturen erstellen:

- Vorzugsweise sollten Sie pro Seite nur ein `<h1>` verwenden – dies ist die oberste Überschrift, und alle anderen stehen in der Hierarchie darunter.
- Achten Sie darauf, dass Sie die Überschriften in der richtigen Reihenfolge in der Hierarchie verwenden. Verwenden Sie keine `<h3>`-Elemente, um Unterüberschriften darzustellen, gefolgt von `<h2>`-Elementen, um untergeordnete Unterüberschriften darzustellen – das macht keinen Sinn und führt zu merkwürdigen Ergebnissen.
- Von den sechs verfügbaren Überschriftsebenen sollten Sie nicht mehr als drei pro Seite verwenden, es sei denn, es ist notwendig. Dokumente mit vielen Ebenen (zum Beispiel eine tiefe Überschriftenhierarchie) werden unhandlich und schwer zu navigieren. In solchen Fällen ist es ratsam, den Inhalt über mehrere Seiten zu verteilen, wenn möglich.

### Warum brauchen wir Struktur?

Um diese Frage zu beantworten, schauen wir uns [text-start.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html) an - den Ausgangspunkt unseres laufenden Beispiels für diesen Artikel (ein schönes Hummus-Rezept). Sie sollten eine Kopie dieser Datei auf Ihrem lokalen Rechner speichern, da Sie sie später für die Übungen benötigen. Der Inhalt des Dokumentenkörpers ist derzeit in mehrere Inhalte getrennt. Sie sind nicht in irgendeiner Weise markiert, sondern mit Zeilenumbrüchen getrennt (Enter/Return wird gedrückt, um zur nächsten Zeile zu gelangen).

Wenn Sie das Dokument jedoch in Ihrem Browser öffnen, erscheint der Text als großer Block!

![Eine Webseite, die eine Wand aus unformatiertem Text zeigt, da auf der Seite keine Elemente vorhanden sind, die ihn strukturieren.](screen_shot_2017-03-29_at_09.20.35.png)

Dies liegt daran, dass es keine Elemente gibt, die den Inhalt strukturieren, sodass der Browser nicht weiß, was eine Überschrift und was ein Absatz ist. Darüber hinaus:

- Benutzer, die eine Webseite betrachten, neigen dazu, schnell zu scannen, um relevante Inhalte zu finden, oft lesen sie zunächst nur die Überschriften. (Wir verbringen in der Regel nur [sehr kurze Zeit auf einer Webseite](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/).) Wenn sie innerhalb weniger Sekunden nichts Nützliches sehen, werden sie wahrscheinlich frustriert und gehen woanders hin.
- Suchmaschinen, die Ihre Seite indizieren, betrachten die Inhalte von Überschriften als wichtige Schlüsselwörter zur Beeinflussung des Rankings der Seite in den Suchergebnissen. Ohne Überschriften wird Ihre Seite in Bezug auf {{glossary("SEO")}} (Suchmaschinenoptimierung) schlecht abschneiden.
- Stark sehbehinderte Menschen lesen Webseiten oft nicht; sie hören sie sich stattdessen an. Dies geschieht mit einer Software namens [Bildschirmleser](https://en.wikipedia.org/wiki/Screen_reader). Diese Software bietet Möglichkeiten, schnell auf bestimmten Textinhalt zuzugreifen. Zu den verschiedenen Techniken, die verwendet werden, gehört das Vorlesen der Überschriften zur Erstellung eines Dokuments, damit Benutzer schnell die benötigten Informationen finden können. Wenn Überschriften nicht vorhanden sind, werden sie gezwungen, sich das gesamte Dokument vorlesen zu lassen.
- Um Inhalte mit {{glossary("CSS")}} zu stylen oder etwas Interessantes mit {{glossary("JavaScript")}} zu machen, müssen Sie Elemente haben, die den relevanten Inhalt umschließen, damit CSS/JavaScript ihn effektiv anvisieren können.

Daher müssen wir unseren Inhalten strukturelle Markierungen geben.

### Aktives Lernen: Unseren Inhalten Struktur geben

Springen wir gleich mit einem Live-Beispiel ein. Im unten stehenden Beispiel fügen Sie dem Rohtext im Feld _Eingabe_ Elemente hinzu, damit er im Feld _Ausgabe_ als Überschrift und zwei Absätze erscheint.

Wenn Sie einen Fehler machen, können Sie ihn immer mit der _Zurücksetzen_ Taste zurücksetzen. Wenn Sie festsitzen, drücken Sie die _Lösung anzeigen_ Taste, um die Antwort zu sehen.

```html hidden
<h2>Live Ausgabe</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Bearbeitbarer Code</h2>
<p class="a11y-label">
  Drücken Sie Esc, um den Fokus aus dem Codebereich zu entfernen (Tab fügt ein Tab-Zeichen ein).
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
Meine Kurzgeschichte Ich bin Statistikerin und mein Name ist Trish.

Meine Beine bestehen aus Pappe und ich bin mit einem Fisch verheiratet.
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Zurücksetzen" />
  <input id="solution" type="button" value="Lösung anzeigen" />
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

const htmlSolution = `<h1>Meine Kurzgeschichte</h1>
<p>
  Ich bin Statistikerin und mein Name ist Trish.
</p>
<p>
  Meine Beine bestehen aus Pappe und ich bin mit einem Fisch verheiratet.
</p>`;

let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Lösung anzeigen";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Lösung anzeigen") {
    textarea.value = solutionEntry;
    solution.value = "Lösung ausblenden";
  } else {
    textarea.value = userEntry;
    solution.value = "Lösung anzeigen";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// Verhindern, dass die Tab-Taste aus dem Textbereich tabt und stattdessen ein Tab an der Caret-Position schreibt
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

// Aktualisieren Sie die gespeicherten BenutzerCode jedes Mal, wenn der Benutzer den Textbereich-Code aktualisiert
textarea.onkeyup = function () {
  // Wir möchten den Zustand nur speichern, wenn der Benutzercode angezeigt wird,
  // nicht die Lösung, damit die Lösung nicht über den Benutzercode gespeichert wird
  if (solution.value === "Lösung anzeigen") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Giving_our_content_structure', 700, 400, "", "") }}

### Warum brauchen wir Semantik?

Semantik wird überall um uns herum genutzt – wir verlassen uns auf frühere Erfahrungen, um zu erkennen, welche Funktion ein Alltagsgegenstand hat; wenn wir etwas sehen, wissen wir, welche Funktion es hat. So erwarten wir beispielsweise, dass ein rotes Licht "Stop" bedeutet und ein grünes Licht "Fahren". Dinge können sehr schnell kompliziert werden, wenn die falsche Semantik angewandt wird. (Verwenden irgendwelche Länder Rot, um "Fahren" zu bedeuten? Hoffentlich nicht.)

In ähnlicher Weise müssen wir sicherstellen, dass wir die richtigen Elemente verwenden, um unserem Inhalt die richtige Bedeutung, Funktion oder Erscheinung zu verleihen. In diesem Kontext ist das {{htmlelement("Heading_Elements", "h1")}}-Element auch ein semantisches Element, das dem Text, den es umschließt, die Rolle (oder Bedeutung) einer "obersten Überschrift auf Ihrer Seite" gibt.

```html
<h1>Dies ist eine Überschrift der obersten Ebene</h1>
```

Standardmäßig weist der Browser ihm eine große Schriftgröße zu, damit es wie eine Überschrift aussieht (obwohl Sie es mit CSS so gestalten könnten, dass es aussieht wie alles, was Sie wollen). Viel wichtiger ist jedoch, dass sein semantischer Wert in vielerlei Hinsicht, zum Beispiel von Suchmaschinen und Bildschirmlesern, verwendet wird (wie bereits erwähnt).

Auf der anderen Seite könnten Sie jedes Element wie eine Überschrift der obersten Ebene _aussehen_ lassen. Betrachten Sie das Folgende:

```html
<span style="font-size: 32px; margin: 21px 0; display: block;">
  Ist das eine Überschrift der obersten Ebene?
</span>
```

Dies ist ein {{htmlelement("span")}}-Element. Es hat keine Semantik. Sie verwenden es, um Inhalte zu umschließen, wenn Sie CSS darauf anwenden (oder etwas damit mit JavaScript tun) möchten, ohne ihm zusätzliche Bedeutung zu verleihen. (Sie erfahren später im Kurs mehr darüber.) We've applied some CSS to it to make it look like a top level heading, but since it has no semantic value, it will not get any of the extra benefits described above. Es ist eine gute Idee, das relevante HTML-Element für die jeweilige Aufgabe zu verwenden.

## Listen

Wenden wir uns nun Listen zu. Listen sind überall im Leben zu finden – von Ihrer Einkaufsliste über die Liste der Richtungen, denen Sie unbewusst folgen, um jeden Tag zu Ihrem Haus zu gelangen, bis hin zu den Listen von Anweisungen, denen Sie in diesen Tutorials folgen! Im Web haben wir drei Arten von Listen: ungeordnete, geordnete und Beschreibungsliste.

Ungeordnete und geordnete Listen sind sehr häufig und werden in diesem Abschnitt behandelt. Beschreibungslisten sind weniger verbreitet und werden in [Erweiterte Textformatierung](/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting) behandelt.

### Ungeordnete Listen

Ungeordnete Listen werden verwendet, um Listen von Elementen zu markieren, bei denen die Reihenfolge der Elemente keine Rolle spielt. Nehmen wir als Beispiel eine Einkaufsliste:

```plain
Milch
Eier
Brot
Hummus
```

Jede ungeordnete Liste beginnt mit einem {{htmlelement("ul")}}-Element – dies umschließt alle Listenelemente:

```html-nolint
<ul>
  Milch
  Eier
  Brot
  Hummus
</ul>
```

Der letzte Schritt besteht darin, jedes Listenelement in einem {{htmlelement("li")}}- (Listenpunkt)-Element einzuschließen:

```html
<ul>
  <li>Milch</li>
  <li>Eier</li>
  <li>Brot</li>
  <li>Hummus</li>
</ul>
```

#### Aktives Lernen: Eine ungeordnete Liste markieren

Versuchen Sie, das Live-Beispiel unten zu bearbeiten, um Ihre eigene HTML-ungeordnete Liste zu erstellen.

```html hidden
<h2>Live Ausgabe</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Bearbeitbarer Code</h2>
<p class="a11y-label">
  Drücken Sie Esc, um den Fokus aus dem Codebereich zu entfernen (Tab fügt ein Tab-Zeichen ein).
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
Milch
Eier
Brot
Hummus
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Zurücksetzen" />
  <input id="solution" type="button" value="Lösung anzeigen" />
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
  "<ul>\n<li>Milch</li>\n<li>Eier</li>\n<li>Brot</li>\n<li>Hummus</li>\n</ul>";
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Lösung anzeigen";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Lösung anzeigen") {
    textarea.value = solutionEntry;
    solution.value = "Lösung ausblenden";
  } else {
    textarea.value = userEntry;
    solution.value = "Lösung anzeigen";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// Verhindern, dass die Tab-Taste aus dem Textbereich tabt und stattdessen ein Tab an der Caret-Position schreibt

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

// Aktualisieren Sie die gespeicherten Benutzercode jedes Mal, wenn der Benutzer den Textbereich-Code aktualisiert
textarea.onkeyup = () => {
  // Wir möchten den Zustand nur speichern, wenn der Benutzercode angezeigt wird,
  // nicht die Lösung, damit die Lösung nicht über den Benutzercode gespeichert wird
  if (solution.value === "Lösung anzeigen") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Marking_up_an_unordered_list', 700, 400, "", "") }}

### Geordnete Listen

Geordnete Listen sind Listen, bei denen die Reihenfolge der Elemente _wichtig_ ist. Nehmen wir als Beispiel eine Wegbeschreibung:

```plain
Fahren Sie bis ans Ende der Straße
Nach rechts abbiegen
Fahren Sie geradeaus über die ersten zwei Kreisverkehre
Am dritten Kreisverkehr links abbiegen
Die Schule befindet sich auf der rechten Seite, 300 Meter die Straße hinauf
```

Die Markup-Struktur ist die gleiche wie für ungeordnete Listen, außer dass Sie die Listenelemente in einem {{htmlelement("ol")}}-Element, anstatt in `<ul>`, umschließen müssen:

```html
<ol>
  <li>Fahren Sie bis ans Ende der Straße</li>
  <li>Nach rechts abbiegen</li>
  <li>Fahren Sie geradeaus über die ersten zwei Kreisverkehre</li>
  <li>Am dritten Kreisverkehr links abbiegen</li>
  <li>Die Schule befindet sich auf der rechten Seite, 300 Meter die Straße hinauf</li>
</ol>
```

#### Aktives Lernen: Eine geordnete Liste markieren

Versuchen Sie das Live-Beispiel unten zu bearbeiten, um Ihre eigene HTML-geordnete Liste zu erstellen.

```html hidden
<h2>Live Ausgabe</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Bearbeitbarer Code</h2>
<p class="a11y-label">
  Drücken Sie Esc, um den Fokus aus dem Codebereich zu entfernen (Tab fügt ein Tab-Zeichen ein).
</p>

<textarea id="code" class="input" style="min-height: 200px; width: 95%">
Fahren Sie bis ans Ende der Straße
Nach rechts abbiegen
Fahren Sie geradeaus über die ersten zwei Kreisverkehre
Am dritten Kreisverkehr links abbiegen
Die Schule befindet sich auf der rechten Seite, 300 Meter die Straße hinauf
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Zurücksetzen" />
  <input id="solution" type="button" value="Lösung anzeigen" />
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
  "<ol>\n<li>Fahren Sie bis ans Ende der Straße</li>\n<li>Nach rechts abbiegen</li>\n<li>Fahren Sie geradeaus über die ersten zwei Kreisverkehre</li>\n<li>Am dritten Kreisverkehr links abbiegen</li>\n<li>Die Schule befindet sich auf der rechten Seite, 300 Meter die Straße hinauf</li>\n</ol>";
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Lösung anzeigen";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Lösung anzeigen") {
    textarea.value = solutionEntry;
    solution.value = "Lösung ausblenden";
  } else {
    textarea.value = userEntry;
    solution.value = "Lösung anzeigen";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// Verhindern, dass die Tab-Taste aus dem Textbereich tabt und stattdessen ein Tab an der Caret-Position schreibt

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

// Aktualisieren Sie die gespeicherten Benutzercode jedes Mal, wenn der Benutzer den Textbereich-Code aktualisiert
textarea.onkeyup = () => {
  // Wir möchten den Zustand nur speichern, wenn der Benutzercode angezeigt wird,
  // nicht die Lösung, damit die Lösung nicht über den Benutzercode gespeichert wird
  if (solution.value === "Lösung anzeigen") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Marking_up_an_ordered_list', 700, 500, "", "") }}

### Aktives Lernen: Unser Rezeptseite markieren

An diesem Punkt im Artikel haben Sie alle Informationen, die Sie benötigen, um unser Rezeptseitenbeispiel zu kennzeichnen. Sie können entweder eine lokale Kopie unserer [text-start.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html) Startdatei speichern und die Arbeit dort erledigen oder dies im bearbeitbaren Beispiel unten tun. Es wird wahrscheinlich besser, dies lokal zu tun, da Sie dann die Arbeit, die Sie leisten, speichern können, während wenn Sie es im bearbeitbaren Beispiel ausfüllen, es verloren geht, das nächste Mal, wenn Sie die Seite öffnen. Beide haben Vor- und Nachteile.

```html hidden
<h2>Live Ausgabe</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Bearbeitbarer Code</h2>
<p class="a11y-label">
  Drücken Sie Esc, um den Fokus aus dem Codebereich zu entfernen (Tab fügt ein Tab-Zeichen ein).
</p>

<textarea id="code" class="input" style="min-height: 200px; width: 95%">
Schnelles Hummus-Rezept

  Dieses Rezept ergibt schnell, schmackhaften Hummus, ohne Aufwand. Es wurde aus einer Reihe verschiedener Rezepte, die ich im Laufe der Jahre gelesen habe, angepasst.

  Hummus ist eine köstliche dicke Paste, die stark in griechischen und nahöstlichen Gerichten verwendet wird. Es ist sehr schmackhaft mit Salat, gegrilltem Fleisch und Pitta-Broten.

  Zutaten

  1 Dose (400 g) Kichererbsen (Kicherbohnen)
  175 g Tahini
  6 getrocknete Tomaten
  Eine halbe rote Paprika
  Eine Prise Cayennepfeffer
  1 Knoblauchzehe
  Ein Spritzer Olivenöl

  Anweisungen

  Entfernen Sie die Haut vom Knoblauch und hacken Sie sie grob
  Entfernen Sie alle Samen und den Stiel von der Paprika und hacken Sie sie grob
  Geben Sie alle Zutaten in eine Küchenmaschine
  Verarbeiten Sie alle Zutaten zu einer Paste
  Wenn Sie einen groben "p[HTML_text_formatting](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-complete.html)ropelypate"-Hummus wünschen, verarbeiten Sie ihn nur kurze Zeit
  Wenn Sie einen glatten Hummus wünschen, verarbeiten Sie ihn für längere Zeit

  Für einen anderen Geschmack könnten Sie versuchen, eine kleine Menge Zitrone und Koriander, Chilischote, Limette und Chipotle, Harissa und Minze oder Spinat und Fetakäse zu mischen. Experimentieren und sehen Sie, was für Sie funktioniert.

  Aufbewahrung

  Kühlen Sie den fertigen Hummus in einem verschlossenen Behälter. Sie sollten in der Lage sein, es etwa eine Woche lang nach der Herstellung zu verwenden. Wenn es anfangen sollte, sprudelig zu werden, sollten Sie es auf jeden Fall entsorgen.

  Hummus ist zum Einfrieren geeignet; Sie sollten es auftauen und innerhalb von ein paar Monaten verwenden.
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Zurücksetzen" />
  <input id="solution" type="button" value="Lösung anzeigen" />
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
  '<h1>Schnelles Hummus-Rezept</h1>\n\n<p>Dieses Rezept ergibt schnell, schmackhaften Hummus, ohne Aufwand. Es wurde aus einer Reihe verschiedener Rezepte, die ich im Laufe der Jahre gelesen habe, angepasst.</p>\n\n<p>Hummus ist eine köstliche dicke Paste, die stark in griechischen und nahöstlichen Gerichten verwendet wird. Es ist sehr schmackhaft mit Salat, gegrilltem Fleisch und Pitta-Broten.</p>\n\n<h2>Zutaten</h2>\n\n<ul>\n<li>1 Dose (400 g) Kichererbsen (Kicherbohnen)</li>\n<li>175 g Tahini</li>\n<li>6 getrocknete Tomaten</li>\n<li>Eine halbe rote Paprika</li>\n<li>Eine Prise Cayennepfeffer</li>\n<li>1 Knoblauchzehe</li>\n<li>Ein Spritzer Olivenöl</li>\n</ul>\n\n<h2>Anweisungen</h2>\n\n<ol>\n<li>Entfernen Sie die Haut vom Knoblauch und hacken Sie sie grob.</li>\n<li>Entfernen Sie alle Samen und den Stiel von der Paprika und hacken Sie sie grob.</li>\n<li>Geben Sie alle Zutaten in eine Küchenmaschine.</li>\n<li>Verarbeiten Sie alle Zutaten zu einer Paste.</li>\n<li>Wenn Sie einen groben "chunky"-Hummus wünschen, verarbeiten Sie ihn nur kurze Zeit.</li>\n<li>Wenn Sie einen glatten Hummus wünschen, verarbeiten Sie ihn für längere Zeit.</li>\n</ol>\n\n<p>Für einen anderen Geschmack könnten Sie versuchen, eine kleine Menge Zitrone und Koriander, Chilischote, Limette und Chipotle, Harissa und Minze oder Spinat und Fetakäse zu mischen. Experimentieren und sehen Sie, was für Sie funktioniert.</p>\n\n<h2>Aufbewahrung</h2>\n\n<p>Kühlen Sie den fertigen Hummus in einem verschlossenen Behälter. Sie sollten in der Lage sein, es etwa eine Woche lang nach der Herstellung zu verwenden. Wenn es anfangen sollte, sprudelig zu werden, sollten Sie es auf jeden Fall entsorgen.</p>\n\n<p>Hummus ist zum Einfrieren geeignet; Sie sollten es auftauen und innerhalb von ein paar Monaten verwenden.</p>';
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Lösung anzeigen";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Lösung anzeigen") {
    textarea.value = solutionEntry;
    solution.value = "Lösung ausblenden";
  } else {
    textarea.value = userEntry;
    solution.value = "Lösung anzeigen";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// Verhindern, dass die Tab-Taste aus dem Textbereich tabt und stattdessen ein Tab an der Caret-Position schreibt

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

// Aktualisieren Sie den gespeicherten Benutzercode jedes Mal, wenn der Benutzer den Textbereich-Code aktualisiert
textarea.onkeyup = () => {
  // Wir möchten den Zustand nur speichern, wenn der Benutzercode angezeigt wird,
  // nicht die Lösung, damit die Lösung nicht über den Benutzercode gespeichert wird
  if (solution.value === "Lösung anzeigen") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Marking_up_our_recipe_page', 900, 620, "", "") }}

Wenn Sie festsitzen, können Sie jederzeit die _Lösung anzeigen_ Taste drücken oder unser [text-complete.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-complete.html) Beispiel auf unserem GitHub-Repo überprüfen.

### Verschachteln von Listen

Es ist völlig in Ordnung, eine Liste in eine andere Liste zu verschachteln. Sie können beispielsweise einige Unterpunkte unter einem Hauptpunkt haben. Nehmen wir die zweite Liste aus unserem Rezeptbeispiel:

```html
<ol>
  <li>Entfernen Sie die Haut vom Knoblauch und hacken Sie sie grob.</li>
  <li>Entfernen Sie alle Samen und den Stiel von der Paprika und hacken Sie sie grob.</li>
  <li>Geben Sie alle Zutaten in eine Küchenmaschine.</li>
  <li>Verarbeiten Sie alle Zutaten zu einer Paste.</li>
  <li>Wenn Sie einen groben "chunky"-Hummus wünschen, verarbeiten Sie ihn nur kurze Zeit.</li>
  <li>Wenn Sie einen glatten Hummus wünschen, verarbeiten Sie ihn für längere Zeit.</li>
</ol>
```

Da die letzten beiden Punkte sehr eng mit dem vorhergehenden verbunden sind (sie lesen sich wie Unteranweisungen oder Auswahlmöglichkeiten, die unter diesem Punkt passen), könnte es sinnvoll sein, sie in ihrer eigenen ungeordneten Liste zu verschachteln und diese Liste in den aktuellen vierten Punkt zu setzen. Dies würde so aussehen:

```html
<ol>
  <li>Entfernen Sie die Haut vom Knoblauch und hacken Sie sie grob.</li>
  <li>Entfernen Sie alle Samen und den Stiel von der Paprika und hacken Sie sie grob.</li>
  <li>Geben Sie alle Zutaten in eine Küchenmaschine.</li>
  <li>
    Verarbeiten Sie alle Zutaten zu einer Paste.
    <ul>
      <li>
        Wenn Sie einen groben "chunky"-Hummus wünschen, verarbeiten Sie ihn nur kurze Zeit.
      </li>
      <li>Wenn Sie einen glatten Hummus wünschen, verarbeiten Sie ihn für längere Zeit.</li>
    </ul>
  </li>
</ol>
```

Versuchen Sie, im vorherigen Beispiel für aktives Lernen zurückzugehen und die zweite Liste entsprechend zu aktualisieren.

## Betonung und Wichtigkeit

In der menschlichen Sprache betonen wir oft bestimmte Wörter, um die Bedeutung eines Satzes zu ändern, und wir möchten oft bestimmte Wörter als wichtig oder anderweitig hervorheben. HTML bietet verschiedene semantische Elemente, mit denen wir Textinhalte mit solchen Effekten markieren können, und in diesem Abschnitt werden wir einige der gebräuchlichsten betrachten.

### Betonung

Wenn wir in gesprochener Sprache etwas betonen wollen, _betonen_ wir bestimmte Wörter, wodurch die Bedeutung subtil verändert wird. Ähnlich betonen wir in geschriebener Sprache Wörter, indem wir sie kursiv darstellen. Zum Beispiel unterscheiden sich die beiden folgenden Sätze in ihrer Bedeutung.

> Ich bin froh, dass Sie nicht zu spät gekommen sind.
>
> Ich bin _froh_, dass Sie nicht zu _spät_ gekommen sind.

Der erste Satz klingt wirklich erleichtert, dass die Person nicht zu spät gekommen ist. Im Gegensatz dazu klingt der zweite Satz mit den Wörtern "froh" und "spät" in Kursivschrift sarkastisch oder passiv-aggressiv und drückt Ärger darüber aus, dass die Person etwas zu spät angekommen ist.

In HTML verwenden wir das {{htmlelement("em")}} (Betonung)-Element, um solche Fälle zu markieren. Neben der interessant zu lesenden Dokumentation werden diese von Bildschirmlesern erkannt, die so konfiguriert werden können, um sie in einem anderen Ton zu sprechen. Browser formatieren dies standardmäßig als Kursivschrift, aber Sie sollten dieses Tag nicht nur verwenden, um eine kursiv formatierte Darstellung zu erhalten. Verwenden Sie dazu ein {{htmlelement("span")}}-Element und etwas CSS oder vielleicht ein {{htmlelement("i")}}-Element (siehe unten).

```html
<p>Ich bin <em>froh</em>, dass Sie nicht zu <em>spät</em> gekommen sind.</p>
```

### Starke Wichtigkeit

Um wichtige Wörter zu betonen, betonen wir sie in der gesprochenen Sprache und **fetten** sie in der geschriebenen Sprache. Zum Beispiel:

> Diese Flüssigkeit ist **stark giftig**.
>
> Ich zähle auf Sie. **Seien Sie nicht** zu spät!

In HTML verwenden wir das {{htmlelement("strong")}} (starke Wichtigkeit)-Element, um solche Fälle zu markieren. Neben der nützlich zu lesenden Dokumentation werden diese erneut von Bildschirmlesern erkannt, die so konfiguriert werden können, um sie in einem anderen Ton zu sprechen. Browser formatieren dies standardmäßig als fettgedruckten Text, aber Sie sollten dieses Tag nicht nur verwenden, um eine fettgedruckte Darstellung zu erhalten. Verwenden Sie dazu ein {{htmlelement("span")}}-Element und etwas CSS oder vielleicht ein {{htmlelement("b")}}-Element (siehe unten).

```html
<p>Diese Flüssigkeit ist <strong>stark giftig</strong>.</p>

<p>Ich zähle auf Sie. <strong>Seien Sie nicht</strong> zu spät!</p>
```

Sie können starke Bedeutung und Betonung innerhalb von einander verschachteln, wenn gewünscht:

```html-nolint
<p>Diese Flüssigkeit ist <strong>stark giftig</strong> — wenn Sie sie trinken, <strong>sind Sie <em>tot</em></strong>.</p>
```

{{EmbedLiveSample('Strong importance')}}

### Aktives Lernen: Lass uns wichtig sein

In diesem Abschnitt des aktiven Lernens haben wir ein bearbeitbares Beispiel bereitgestellt. Darin möchten wir, dass Sie versuchen, Betonung und starke Wichtigkeit auf die für Sie relevanten Wörter anzuwenden, nur um ein bisschen Übung zu bekommen.

```html hidden
<h2>Live Ausgabe</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Bearbeitbarer Code</h2>
<p class="a11y-label">
  Drücken Sie Esc, um den Fokus aus dem Codebereich zu entfernen (Tab fügt ein Tab-Zeichen ein).
</p>

<textarea id="code" class="input" style="min-height: 200px; width: 95%">
<h1>Wichtige Mitteilung</h1>
<p>Am Sonntag, den 9. Januar 2010, wurden im Stadtzentrum von Milwaukee mehrere Gartenzwerge von einer Bande Goths
  beobachtet. Sie trugen alle grüne Overall und alberne Hüte und schienen viel Spaß zu haben. Wenn jemand
   Informationen zu diesem Vorfall hat, kontaktieren Sie bitte umgehend die Polizei.</p>
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Zurücksetzen" />
  <input id="solution" type="button" value="Lösung anzeigen" />
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
  "<h1>Wichtige Mitteilung</h1>\n<p>Am <strong>Sonntag, den 9. Januar 2010</strong>, wurden im Stadtzentrum von <strong>Milwaukee</strong> mehrere <em>Goths</em> beobachtet, die <strong><em>mehrere</em> Gartenzwerge</strong> aus einem Einkaufszentrum stahlen. Sie trugen alle <em>grüne Overall</em> und <em>alberne Hüte</em> und schienen viel Spaß zu haben. Wenn jemand <strong>irgendeine</strong> Information zu diesem Vorfall hat, kontaktieren Sie bitte umgehend die Polizei <strong>jetzt</strong>.</p>";
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Lösung anzeigen";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Lösung anzeigen") {
    textarea.value = solutionEntry;
    solution.value = "Lösung ausblenden";
  } else {
    textarea.value = userEntry;
    solution.value = "Lösung anzeigen";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// Verhindern, dass die Tab-Taste aus dem Textbereich tabt und stattdessen ein Tab an der Caret-Position schreibt
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

// Aktualisieren Sie die gespeicherten Benutzercode jedes Mal, wenn der Benutzer den Textbereich-Code aktualisiert
textarea.onkeyup = () => {
  // Wir möchten den Zustand nur speichern, wenn der Benutzercode angezeigt wird,
  // nicht die Lösung, damit die Lösung nicht über den Benutzercode gespeichert wird
  if (solution.value === "Lösung anzeigen") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Lets_be_important', 700, 520, "", "") }}

### Kursiv, fett, unterstrichen…

Die bisher diskutierten Elemente haben klare semantische Bedeutungen. Die Situation mit {{htmlelement("b")}}, {{htmlelement("i")}} und {{htmlelement("u")}} ist etwas komplizierter. Sie entstanden, damit Menschen fett, kursiv oder unterstrichen Text schreiben konnten, in einer Zeit, als CSS noch schlecht oder gar nicht unterstützt wurde. Solche Elemente, die nur die Darstellung und nicht die Semantik betreffen, sind als **präsentative Elemente** bekannt und sollten nicht mehr verwendet werden, da, wie bereits erwähnt, Semantik so wichtig für die Barrierefreiheit, SEO usw. ist.

HTML5 hat `<b>`, `<i>`, und `<u>` mit neuen, etwas verwirrenden, semantischen Rollen neu definiert.

Hier ist die beste Regel, die Sie sich merken können: Es ist nur dann angemessen, `<b>`, `<i>`, oder `<u>` zu verwenden, um eine Bedeutung zu übermitteln, die traditionell durch Fetten, Kursivieren oder Unterstreichen vermittelt wird, wenn es kein geeignetes Element gibt; und es gibt meistens eines. Überlegen Sie, ob `<strong>`, `<em>`, `<mark>`, oder `<span>` möglicherweise angemessener wären.

Behalten Sie immer eine barrierefreie Denkweise bei. Das Konzept von Kursiv ist für Personen, die Bildschirmleser verwenden oder für Personen, die ein anderes Schriftsystem als das lateinische Alphabet verwenden, nicht sehr hilfreich.

- {{HTMLElement('i')}} wird verwendet, um eine Bedeutung zu vermitteln, die traditionell durch Kursivschrift vermittelt wird: Fremdwörter, taxonomische Benennungen, Fachbegriffe, ein Gedanke…
- {{HTMLElement('b')}} wird verwendet, um eine Bedeutung zu vermitteln, die traditionell durch Fettgedruckte vermittelt wird: Schlüsselwörter, Produktnamen, Leitsatz…
- {{HTMLElement('u')}} wird verwendet, um eine Bedeutung zu vermitteln, die traditionell durch Unterstrichen vermittelt wird: Eigenname, Rechtschreibfehler…

> [!NOTE]
> Menschen assoziieren Unterstreichungen stark mit Hyperlinks. Daher ist es im Web am besten, nur Links zu unterstreichen. Verwenden Sie das `<u>`-Element, wenn es semantisch angemessen ist, ziehen Sie jedoch in Betracht, CSS zu verwenden, um das standardmäßige Unterstreichen in etwas zu ändern, das im Web angemessener ist. Das folgende Beispiel zeigt, wie dies geschehen kann.

```html
<!-- wissenschaftliche Namen -->
<p>
  Der Rubinkehlkolibri (<i>Archilochus colubris</i>) ist der häufigste
  Kolibri im östlichen Nordamerika.
</p>

<!-- Fremdwörter -->
<p>
  Das Menü war voll von exotischen Worten wie <i lang="uk-latn">vatrushka</i>,
  <i lang="id">nasi goreng</i> und <i lang="fr">soupe à l'oignon</i>.
</p>

<!-- ein bekannter Rechtschreibfehler -->
<p>Eines Tages werde ich lernen, besser zu <u class="spelling-error">schreiben</u>.</p>

<!-- Definitionstext -->
<dl>
  <dt>Semantisches HTML</dt>
  <dd>
    Verwenden Sie die Elemente basierend auf ihrer <b>semantischen</b> Bedeutung, nicht ihrem
    Aussehen.
  </dd>
</dl>
```

{{EmbedLiveSample('Italic, bold, underline…','100%','270')}}

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: HTML-Textgrundlagen](/de/docs/Learn/HTML/Introduction_to_HTML/Test_your_skills:_HTML_text_basics).

## Zusammenfassung

Das war's für jetzt! Dieser Artikel sollte Ihnen eine gute Vorstellung davon gegeben haben, wie Sie mit dem Markieren von Text in HTML beginnen und Ihnen einige der wichtigsten Elemente in diesem Bereich vorgestellt haben. Es gibt noch viel mehr semantische Elemente in diesem Bereich, und wir werden uns viele weitere in unserem Artikel [Erweiterte Textformatierung](/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting) später im Kurs ansehen. Im nächsten Artikel werden wir uns im Detail ansehen, wie man [Hyperlinks erstellt](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks), möglicherweise das wichtigste Element im Web.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML")}}
