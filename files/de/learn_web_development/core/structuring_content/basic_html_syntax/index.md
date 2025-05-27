---
title: Grundlegende HTML-Syntax
slug: Learn_web_development/Core/Structuring_content/Basic_HTML_syntax
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}

In diesem Artikel behandeln wir die absoluten Grundlagen von HTML. Um Ihnen den Einstieg zu erleichtern, definiert dieser Artikel Elemente, Attribute und alle anderen wichtigen Begriffe, die Sie vielleicht gehört haben. Er erklärt auch, wie diese in HTML passen. Sie werden lernen, wie HTML-Elemente strukturiert sind, wie eine typische HTML-Seite aufgebaut ist und andere wichtige grundlegende Sprachfunktionen. Unterwegs haben Sie die Möglichkeit, auch mit HTML zu experimentieren!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Grundlegende Software installiert</a> und Grundkenntnisse in <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">Arbeiten mit Dateien</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Anatomie eines HTML-Elements — Element, öffnender Tag, Inhalt, schließender Tag, Attribute.</li>
          <li>Der HTML-Body und seine Funktion als Container für den Seiteninhalt.</li>
          <li>Was <a href="/de/docs/Glossary/Void_element">leere Elemente</a> sind und wie sie sich von anderen Elementen unterscheiden.</li>
          <li>Die Notwendigkeit eines Doctypes oben in HTML-Dokumenten. Seine ursprünglich beabsichtigte Rolle und die Tatsache, dass er heute eher ein historisches Relikt ist.</li>
          <li>Das Verständnis dafür, dass HTML korrekt verschachtelt sein muss.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist HTML?

{{Glossary("HTML", "HTML")}} (HyperText Markup Language) ist eine _Markup-Sprache_, die Webbrowsern mitteilt, wie die von Ihnen besuchten Webseiten strukturiert werden sollen. Es kann so kompliziert oder einfach sein, wie der Webentwickler es wünscht. HTML besteht aus einer Reihe von {{Glossary("Element", "Elementen")}}, die Sie verwenden, um verschiedene Teile des Inhalts einzuschließen, zu umwickeln oder zu _markieren_, damit sie auf eine bestimmte Weise erscheinen oder agieren. Die einschließenden {{Glossary("Tag", "Tags")}} können Inhalte in einen Hyperlink verwandeln, um zu einer anderen Seite zu verbinden, Wörter kursiv darstellen und so weiter. Betrachten Sie zum Beispiel die folgende Textzeile:

```plain
My cat is very grumpy
```

Wenn wir wollen, dass der Text für sich allein steht, können wir angeben, dass es ein Absatz ist, indem wir ihn in ein Absatz- ({{htmlelement("p")}}) Element einschließen:

```html
<p>My cat is very grumpy</p>
```

HTML befindet sich in Textdateien, die als **HTML-Dokumente** oder einfach als **Dokumente** bezeichnet werden, mit einer `.html` Dateierweiterung. Wo wir zuvor über Webseiten gesprochen haben, enthält ein HTML-Dokument den Inhalt der Webseite und spezifiziert deren Struktur.

Die häufigste HTML-Datei, die Sie antreffen werden, ist `index.html`, die im Allgemeinen verwendet wird, um den Inhalt der Startseite einer Website zu enthalten. Es ist auch üblich, Unterordner mit ihren eigenen `index.html` zu sehen, sodass eine Website mehrere Indexdateien an verschiedenen Stellen haben kann.

> [!NOTE]
> Tags in HTML sind nicht case-sensitive. Dies bedeutet, dass sie in Groß- oder Kleinbuchstaben geschrieben werden können. Zum Beispiel könnte ein {{htmlelement("title")}} Tag als `<title>`, `<TITLE>`, `<Title>`, `<TiTlE>` usw. geschrieben werden und würde funktionieren. Es ist jedoch am besten, alle Tags aus Gründen der Konsistenz und Lesbarkeit in Kleinbuchstaben zu schreiben.

## Anatomie eines HTML-Elements

Lassen Sie uns unser Absatzelement aus dem vorherigen Abschnitt weiter untersuchen:

![Ein Beispielcode-Snippet, das die Struktur eines HTML-Elements demonstriert.<p> Meine Katze ist sehr mürrisch </p>.](grumpy-cat-small.png)

Die Anatomie unseres Elements ist:

- **Der öffnende Tag:** Dieser besteht aus dem Namen des Elements (in diesem Beispiel _p_ für Paragraph), eingeschlossen in öffnenden und schließenden spitzen Klammern. Dieser öffnende Tag markiert, wo das Element beginnt oder anfängt, wirksam zu werden. In diesem Beispiel geht er dem Beginn des Absatztextes voraus.
- **Der Inhalt:** Dies ist der Inhalt des Elements. In diesem Beispiel ist es der Absatztext.
- **Der schließende Tag:** Dieser ist derselbe wie der öffnende Tag, außer dass er einen Schrägstrich vor dem Elementnamen enthält. Dies markiert, wo das Element endet. Das Nichthinzufügen eines schließenden Tags ist ein häufiger Anfängerfehler, der seltsame Ergebnisse erzeugen kann.

Das Element ist der öffnende Tag, gefolgt vom Inhalt, gefolgt vom schließenden Tag.

> [!NOTE]
> Besuchen Sie unseren Lernpartner Scrimba's [HTML-Tags](https://scrimba.com/learn-html-and-css-c0p/~02?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> Scrim für eine interaktive Erklärung von HTML-Tags.

### Aktives Lernen: Ihr erstes HTML-Element erstellen

Bearbeiten Sie die untenstehende Zeile im "Bearbeitbaren Code"-Bereich, indem Sie sie mit den Tags `<em>` und `</em>` umschließen. Um _das Element zu öffnen_, setzen Sie den öffnenden Tag `<em>` am Anfang der Zeile. Um _das Element zu schließen_, setzen Sie den schließenden Tag `</em>` am Ende der Zeile. Dadurch sollte die Zeile kursiv formatiert werden! Sehen Sie, wie Ihre Änderungen live im _Ausgabebereich_ aktualisiert werden.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche löschen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Schaltfläche, um die Antwort zu sehen.

```html hidden
<h2>Live output</h2>
<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="playable-code" style="min-height: 100px;width: 95%">
  This is my text.
</textarea>

<div class="controls">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
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

const htmlSolution = "<em>This is my text.</em>";
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

{{ EmbedLiveSample('Active_learning_creating_your_first_HTML_element', 700, 400, "", "") }}

### Verschachtelung von Elementen

Elemente können in andere Elemente eingefügt werden. Dies nennt man _Verschachtelung_. Wenn wir sagen wollten, dass unsere Katze **sehr** mürrisch ist, könnten wir das Wort _sehr_ in ein {{htmlelement("strong")}} Element einfügen, was bedeutet, dass das Wort eine starke(re) Textformatierung haben soll:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

Es gibt einen richtigen und einen falschen Weg, um zu schachteln. Im obigen Beispiel öffneten wir das `p`-Element zuerst, dann öffneten wir das `strong`-Element. Für eine korrekte Verschachtelung sollten wir das `strong`-Element zuerst schließen, bevor wir das `p` schließen.

Folgendes ist ein Beispiel für die _falsche_ Art zu schachteln:

```html-nolint example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

**Die Tags müssen so geöffnet und geschlossen werden, dass sie innerhalb oder außerhalb voneinander liegen.** Mit der Art von Überlappung im obigen Beispiel muss der Browser Ihre Absicht erraten. Diese Art des Ratens kann zu unerwarteten Ergebnissen führen.

### Leere Elemente

Nicht alle Elemente folgen dem Muster eines öffnenden Tags, Inhalts und eines schließenden Tags. Einige Elemente bestehen aus einem einzigen Tag, das typischerweise verwendet wird, um etwas in das Dokument einzufügen/einzubetten. Solche Elemente werden {{Glossary("void_element", "leere Elemente")}} genannt. Zum Beispiel bettet das {{htmlelement("img")}} Element eine Bilddatei auf eine Seite ein:

```html
<img
  src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"
  alt="Firefox icon" />
```

Dies würde das Folgende ausgeben:

{{ EmbedLiveSample('Void_elements', 700, 300, "", "") }}

> [!NOTE]
> In HTML gibt es keine Anforderung, am Ende eines leeren Element-Tags ein `/` hinzuzufügen, zum Beispiel: `<img src="images/cat.jpg" alt="cat" />`. Es ist jedoch auch eine gültige Syntax, und Sie können dies tun, wenn Sie möchten, dass Ihr HTML gültiges XML ist.

## Attribute

Elemente können auch Attribute haben. Attribute sehen so aus:

![Absatztag mit Attribut 'class="editor-note"' hervorgehoben](grumpy-cat-attribute-small.png)

Attribute enthalten zusätzliche Informationen über das Element, die nicht im Inhalt erscheinen. In diesem Beispiel ist das **`class`**-Attribut ein identifizierender Name, der verwendet wird, um das Element mit Stilinformationen zu versehen.

Ein Attribut sollte haben:

- Ein Leerzeichen zwischen diesem und dem Elementnamen. (Für ein Element mit mehr als einem Attribut sollten die Attribute ebenfalls durch Leerzeichen getrennt werden.)
- Den Attributnamen, gefolgt von einem Gleichheitszeichen.
- Einen Attributwert, umschlossen von öffnenden und schließenden Anführungszeichen.

### Aktives Lernen: Attribute zu einem Element hinzufügen

Das `<img>` Element kann eine Reihe von Attributen aufnehmen, einschließlich:

- `src`
  - : Das `src` Attribut ist ein **erforderliches** Attribut, das den Speicherort des Bildes angibt. Zum Beispiel: `src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"`.
- `alt`
  - : Das `alt` Attribut spezifiziert eine Textbeschreibung des Bildes. Zum Beispiel: `alt="Das Firefox-Symbol"`.
- `width`
  - : Das `width` Attribut gibt die Breite des Bildes mit der Einheit Pixel an. Zum Beispiel: `width="300"`.
- `height`
  - : Das `height` Attribut spezifiziert die Höhe des Bildes mit der Einheit Pixel. Zum Beispiel: `height="300"`.

Bearbeiten Sie die untenstehende Zeile im _Eingabebereich_, um sie in ein Bild zu verwandeln.

1. Finden Sie Ihr Lieblingsbild online, klicken Sie mit der rechten Maustaste darauf und drücken Sie _Bildlink/-adresse kopieren_.
2. Fügen Sie im Bereich unten das `src` Attribut hinzu und füllen Sie es mit dem Link aus Schritt 1.
3. Setzen Sie das `alt` Attribut.
4. Fügen Sie die Attribute `width` und `height` hinzu.

Sie werden in der Lage sein, Ihre Änderungen live im _Ausgabebereich_ zu sehen.

Wenn Sie einen Fehler machen, können Sie ihn jederzeit mit der _Zurücksetzen_-Schaltfläche zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Taste, um die Antwort zu sehen.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="input" style="min-height: 100px;width: 95%">
&lt;img alt="I should be an image" &gt;
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
  '<img src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png" alt="Firefox icon" width="100" height="100" />';
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

{{ EmbedLiveSample('Active_learning_Adding_attributes_to_an_element', 700, 400, "", "") }}

### Boolesche Attribute

Manchmal sehen Sie Attribute, die ohne Werte geschrieben werden. Dies ist völlig akzeptabel. Diese werden {{Glossary("Boolean/HTML", "Boolesche Attribute")}} genannt. Wenn ein boolesches Attribut ohne einen Wert geschrieben wird oder mit einem beliebigen Wert, auch `"false"`, wird das boolesche Attribut immer auf true gesetzt. Andernfalls, wenn das Attribut nicht in einem HTML-Tag geschrieben wird, wird das Attribut auf false gesetzt. Die Spezifikation erfordert, dass der Wert des Attributs entweder der leere String (einschließlich, wenn dem Attribut kein Wert explizit zugewiesen wird) oder derselbe wie der Name des Attributs ist, aber andere Werte funktionieren genauso. Betrachten Sie zum Beispiel das [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled) Attribut, das Sie Formulareingabeelementen zuweisen können. (Sie verwenden dies, um die Formulareingabeelemente zu _deaktivieren_, sodass der Benutzer keine Eingaben machen kann. Die deaktivierten Elemente haben typischerweise ein ausgegrautes Erscheinungsbild.) Zum Beispiel:

```html
<input type="text" disabled="disabled" />
```

Kurz gesagt, es ist akzeptabel, dies wie folgt zu schreiben:

```html
<!-- using the disabled attribute prevents the end user from entering text into the input box -->
<input type="text" disabled />

<!-- text input is allowed, as it doesn't contain the disabled attribute -->
<input type="text" />
```

Zum Vergleich enthält das obige Beispiel auch ein nicht-deaktiviertes Formulareingabeelement. Das HTML aus dem obigen Beispiel ergibt dieses Ergebnis:

{{ EmbedLiveSample('Boolean_attributes', 700, 100, "", "") }}

### Auslassen von Anführungszeichen um Attributwerte

Wenn Sie sich den Code für viele andere Websites ansehen, können Sie auf eine Reihe von seltsamen Markup-Stilen stoßen, einschließlich Attributwerte ohne Anführungszeichen. Dies ist unter bestimmten Umständen erlaubt, kann aber auch Ihr Markup in anderen Umständen brechen. Das Element im folgenden Codeausschnitt, `<a>`, wird als Anker bezeichnet. Anker umschließen Text und verwandeln ihn in Links. Das `href` Attribut gibt die Webadresse an, auf die der Link verweist. Sie können diese grundlegende Version unten mit _nur_ dem `href` Attribut schreiben, wie folgt:

```html
<a href=https://www.mozilla.org/>favorite website</a>
```

Anker können auch ein `title` Attribut haben, eine Beschreibung der verlinkten Seite. Sobald wir jedoch das `title` auf die gleiche Weise wie das `href` Attribut hinzufügen, gibt es Probleme:

```html-nolint example-bad
<a href=https://www.mozilla.org/ title=The Mozilla homepage>favorite website</a>
```

Wie oben geschrieben, missversteht der Browser das Markup und hält das `title` Attribut für drei Attribute: ein title Attribut mit dem Wert `The` und zwei boolesche Attribute, `Mozilla` und `homepage`. Offensichtlich ist dies nicht beabsichtigt! Es wird zu Fehlern oder unerwartetem Verhalten führen, wie Sie im Live-Beispiel unten sehen können. Versuchen Sie, über den Link zu schweben, um den Titeltext zu sehen!

{{ EmbedLiveSample('Omitting_quotes_around_attribute_values', 700, 100, "", "") }}

Schließen Sie die Attributanführungszeichen immer ein. Dies vermeidet solche Probleme und führt zu besser lesbarem Code.

### Einzel- oder doppelte Anführungszeichen?

In diesem Artikel werden Sie auch bemerken, dass die Attribute in doppelte Anführungszeichen eingeschlossen sind. Sie könnten jedoch in einigen HTML-Codes auch einfache Anführungszeichen sehen. Dies ist eine Stilfrage. Sie können frei wählen, welche Sie bevorzugen. Beide dieser Zeilen sind gleichwertig:

```html-nolint
<a href='https://www.example.com'>A link to my example.</a>

<a href="https://www.example.com">A link to my example.</a>
```

Stellen Sie sicher, dass Sie keine einfachen Anführungszeichen und doppelten Anführungszeichen mischen. Dieses Beispiel (unten) zeigt eine Art Mischung von Anführungszeichen, die schiefgehen wird:

```html-nolint example-bad
<a href="https://www.example.com'>A link to my example.</a>
```

Wenn Sie jedoch eine Art von Anführungszeichen verwenden, können Sie die andere Art von Anführungszeichen _innerhalb_ Ihrer Attributwerte einfügen:

```html
<a href="https://www.example.com" title="Isn't this fun?">
  A link to my example.
</a>
```

Um Anführungszeichen innerhalb anderer Anführungszeichen desselben Typs (einfach oder doppelt) zu verwenden, verwenden Sie {{Glossary("character_reference", "Zeichenreferenzen")}}.
Zum Beispiel wird dies brechen:

```html-nolint example-bad
<a href="https://www.example.com" title="An "interesting" reference">A link to my example.</a>
```

Stattdessen müssen Sie dies tun:

```html-nolint
<a href="https://www.example.com" title="An &quot;interesting&quot; reference">A link to my example.</a>
```

## Anatomie eines HTML-Dokuments

Einzelne HTML-Elemente sind nicht besonders nützlich für sich allein. Lassen Sie uns als Nächstes untersuchen, wie einzelne Elemente zusammenkommen, um eine gesamte HTML-Seite zu bilden:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

Hier haben wir:

1. `<!doctype html>`: Den Doctype. Als HTML jung war (1991-1992), sollten Doctypes als Links zu einer Reihe von Regeln fungieren, denen die HTML-Seite folgen musste, um als gutes HTML zu gelten. Doctypes sahen früher etwa so aus:

   ```html
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   ```

   In jüngerer Zeit ist der Doctype ein historisches Relikt, das enthalten sein muss, damit alles andere richtig funktioniert. `<!doctype html>` ist die kürzeste Zeichenkette, die als gültiger Doctype zählt. Das ist alles, was Sie wissen müssen!

2. `<html></html>`: Das {{htmlelement("html")}} Element. Dieses Element umschließt den gesamten Inhalt der Seite. Es wird manchmal als Wurzelelement bezeichnet.
3. `<head></head>`: Das {{htmlelement("head")}} Element. Dieses Element fungiert als Container für alles, was Sie auf der HTML-Seite aufnehmen möchten, **was nicht der Inhalt ist**, den die Seite den Betrachtern zeigt. Dazu gehören Schlüsselwörter und eine Seitenbeschreibung, die in den Suchergebnissen erscheinen würde, CSS zur Gestaltung von Inhalten, Zeichensatzdeklarationen und mehr. Sie werden mehr darüber im nächsten Artikel der Serie lernen.
4. `<meta charset="utf-8">`: Das {{htmlelement("meta")}} Element. Dieses Element stellt Metadaten dar, die nicht durch andere HTML-Metadaten-bezogene Elemente wie {{htmlelement("base")}}, {{htmlelement("link")}}, {{htmlelement("script")}}, {{htmlelement("style")}} oder {{htmlelement("title")}} dargestellt werden können. Das [`charset`](/de/docs/Web/HTML/Reference/Elements/meta#charset) Attribut spezifiziert die Zeichenkodierung für Ihr Dokument als UTF-8, die die meisten Zeichen aus den meisten menschlichen Schriftsystemen umfasst. Mit dieser Einstellung kann die Seite jetzt mit jedem Textinhalt umgehen, den sie enthalten könnte. Es gibt keinen Grund, dies nicht zu setzen, und es kann helfen, einige spätere Probleme zu vermeiden.
5. `<title></title>`: Das {{htmlelement("title")}} Element. Dies stellt den Titel der Seite ein, welcher der Titel ist, der in dem Browser-Tab angezeigt wird, in dem die Seite geladen ist. Der Seitentitel wird auch verwendet, um die Seite zu beschreiben, wenn sie als Lesezeichen gesetzt wird.
6. `<body></body>`: Das {{htmlelement("body")}} Element. Dies enthält _alle_ Inhalte, die auf der Seite angezeigt werden, einschließlich Text, Bildern, Videos, Spielen, abspielbaren Audiotracks oder was auch immer.

### Aktives Lernen: Einem HTML-Dokument einige Funktionen hinzufügen

Wenn Sie auf Ihrem lokalen Computer etwas mit dem Schreiben von HTML experimentieren möchten, können Sie:

1. Kopieren Sie das oben aufgeführte HTML-Seitenbeispiel.
2. Erstellen Sie eine neue Datei in Ihrem Texteditor.
3. Fügen Sie den Code in die neue Textdatei ein.
4. Speichern Sie die Datei als `index.html`.

> [!NOTE]
> Sie können diese grundlegende HTML-Vorlage auch im [MDN Learning Area GitHub Repo](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) finden.

Sie können diese Datei jetzt in einem Webbrowser öffnen, um zu sehen, wie der gerenderte Code aussieht. Bearbeiten Sie den Code und aktualisieren Sie den Browser, um das Ergebnis anzusehen. Anfangs sieht die Seite so aus:

![Eine einfache HTML-Seite, die sagt, dass dies meine Seite ist](template-screenshot.png)

In dieser Übung können Sie den Code lokal auf Ihrem Computer bearbeiten, wie zuvor beschrieben, oder Sie können ihn im Beispiel-Fenster unten bearbeiten (das bearbeitbare Beispiel-Fenster stellt nur den Inhalt des {{htmlelement("body")}}-Elements dar, in diesem Fall). Schärfen Sie Ihre Fähigkeiten, indem Sie die folgenden Aufgaben erledigen:

- Fügen Sie direkt unter dem öffnenden Tag des {{htmlelement("body")}} Elements einen Haupttitel für das Dokument hinzu. Dieser sollte in einen `<h1>` öffnenden Tag und einen `</h1>` schließenden Tag eingeschlossen werden.
- Bearbeiten Sie den Absatzinhalt, um Text über ein Thema einzufügen, das Sie interessant finden.
- Lassen Sie wichtige Wörter fett hervortreten, indem Sie sie in einen `<strong>` öffnenden Tag und einen `</strong>` schließenden Tag einschließen.
- Fügen Sie Ihrem Absatz einen Link hinzu, wie [früher im Artikel erklärt](#active_learning_adding_attributes_to_an_element).
- Fügen Sie Ihrem Dokument ein Bild hinzu. Platzieren Sie es unter dem Absatz, wie [früher im Artikel erklärt](#leere_elemente). Verdienen Sie Bonuspunkte, wenn es Ihnen gelingt, ein anderes Bild zu verlinken (entweder lokal auf Ihrem Computer oder woanders im Web).

Wenn Sie einen Fehler machen, können Sie ihn immer mit der _Zurücksetzen_-Schaltfläche zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Taste, um die Antwort zu sehen.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="input" style="min-height: 100px;width: 95%">
  &lt;p&gt;This is my page&lt;/p&gt;
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

h1 {
  color: blue;
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

img {
  max-width: 100%;
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
  '<h1>Some music</h1><p>I really enjoy <strong>playing the drums</strong>. One of my favorite drummers is Neal Peart, who plays in the band <a href="https://en.wikipedia.org/wiki/Rush_%28band%29" title="Rush Wikipedia article">Rush</a>. My favorite Rush album is currently <a href="https://www.deezer.com/album/942295">Moving Pictures</a>.</p> <img src="https://www.cygnus-x1.net/links/rush/images/albums/sectors/sector2-movingpictures-cover-s.jpg" alt="Rush Moving Pictures album cover">';
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

{{ EmbedLiveSample('Active_learning_Adding_some_features_to_an_HTML_document', 700, 500) }}

### Leerzeichen in HTML

In den obigen Beispielen haben Sie vielleicht bemerkt, dass im Code viele Leerzeichen enthalten sind. Dies ist optional. Diese beiden Code-Snippets sind gleichwertig:

```html-nolint
<p id="noWhitespace">Dogs are silly.</p>

<p id="whitespace">Dogs
    are
        silly.</p>
```

Egal wie viele Leerzeichen Sie innerhalb des Inhalts eines HTML-Elements verwenden (die ein oder mehrere Leerzeichen, aber auch Zeilenumbrüche umfassen können), der HTML-Parser reduziert jede Sequenz von Leerzeichen auf ein einzelnes Leerzeichen, wenn der Code gerendert wird. Warum verwenden wir also so viele Leerzeichen? Die Antwort ist Lesbarkeit.

Es kann einfacher zu verstehen sein, was in Ihrem Code vor sich geht, wenn Sie ihn schön formatiert haben. In unserem HTML haben wir jedes verschachtelte Element um zwei Leerzeichen mehr eingerückt als das, in dem es sich befindet. Es liegt an Ihnen, den Stil der Formatierung zu wählen (wie viele Leerzeichen für jede Verschachtelungsebene beispielsweise), aber Sie sollten erwägen, ihn zu formatieren.

Sehen wir uns an, wie der Browser die beiden Absätze oben mit und ohne Leerzeichen rendert:

{{ EmbedLiveSample('Whitespace_in_HTML', 700, 100) }}

> [!NOTE]
> Wenn auf die [innerHTML](/de/docs/Web/API/Element/innerHTML) von Elementen aus JavaScript zugegriffen wird, bleibt der gesamte Leerraum erhalten.
> Dies kann unerwartete Ergebnisse liefern, wenn der Leerraum vom Browser abgeschnitten wird.

```js
const noWhitespace = document.getElementById("noWhitespace").innerHTML;
console.log(noWhitespace);
// "Dogs are silly."

const whitespace = document.getElementById("whitespace").innerHTML;
console.log(whitespace);
// "Dogs
//    are
//        silly."
```

## Zeichenreferenzen: Einschließen spezieller Zeichen in HTML

In HTML sind die Zeichen `<`, `>`, `"`, `'` und `&` spezielle Zeichen. Sie sind Teile der HTML-Syntax selbst. Wie schließen Sie also eines dieser Sonderzeichen in Ihren Text ein? Zum Beispiel, wenn Sie ein kaufmännisches Und-Zeichen oder ein kleiner Zeichen verwenden möchten, und es nicht als Code interpretiert werden soll.

Sie tun dies mit {{Glossary("character_reference", "Zeichenreferenzen")}}. Dies sind spezielle Codes, die Zeichen darstellen sollen, die in genau diesen Fällen verwendet werden. Jede Zeichenreferenz beginnt mit einem Kaufmännischen Und-Zeichen (&) und endet mit einem Semikolon (;).

| Literalzeichen | Zeichenreferenz-Äquivalent |
| -------------- | -------------------------- |
| <              | `&lt;`                     |
| >              | `&gt;`                     |
| "              | `&quot;`                   |
| '              | `&apos;`                   |
| &              | `&amp;`                    |

Das Zeichenreferenz-Äquivalent kann leicht eingeprägt werden, da der verwendete Text als kleiner als für `&lt;`, Zitat für `&quot;` und ähnlich für andere gesehen werden kann. Um mehr über Entity-Referenzen zu erfahren, siehe [Liste der XML- und HTML-Zeichen-Entity-Referenzen](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references) (Wikipedia).

Im folgenden Beispiel gibt es zwei Absätze:

```html-nolint
<p>In HTML, you define a paragraph using the <p> element.</p>

<p>In HTML, you define a paragraph using the &lt;p&gt; element.</p>
```

Im Live-Ausgang unten sehen Sie, dass im ersten Absatz etwas schief gelaufen ist. Der Browser interpretiert das zweite Vorkommen von `<p>` als Beginn eines neuen Absatzes. Der zweite Absatz sieht in Ordnung aus, da er Winkelklammen mit Zeichenreferenzen enthält.

{{ EmbedLiveSample('Entity_references_Including_special_characters_in_HTML', 700, 200, "", "") }}

> [!NOTE]
> Sie müssen keine Entity-Referenzen für andere Symbole verwenden, da moderne Browser die tatsächlichen Symbole problemlos verarbeiten, solange die [Zeichenkodierung Ihres HTMLs auf UTF-8 eingestellt ist](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#specifying_your_documents_character_encoding).

## HTML-Kommentare

HTML verfügt über einen Mechanismus zur Erstellung von Kommentaren im Code. Browser ignorieren Kommentare, was sie für den Benutzer effektiv unsichtbar macht. Der Zweck von Kommentaren besteht darin, Ihnen zu ermöglichen, Notizen im Code zu hinterlassen, um Ihre Logik oder Codierung zu erklären. Dies ist sehr nützlich, wenn Sie nach längerer Abwesenheit zu einem Code zurückkehren, den Sie nicht mehr vollständig im Gedächtnis haben. Ebenso sind Kommentare unverzichtbar, wenn verschiedene Personen Änderungen und Aktualisierungen vornehmen.

Um einen HTML-Kommentar zu schreiben, schließen Sie ihn in die speziellen Markierungen `<!--` und `-->` ein. Zum Beispiel:

```html
<p>I'm not inside a comment</p>

<!-- <p>I am!</p> -->
```

Wie Sie unten sehen können, wird im Live-Ausgang nur der erste Absatz angezeigt.

{{ EmbedLiveSample('HTML_comments', 700, 100, "", "") }}

## Zusammenfassung

Sie haben es bis ans Ende des Artikels geschafft! Wir hoffen, dass Ihnen Ihre Tour durch die Grundlagen von HTML gefallen hat.

An diesem Punkt sollten Sie verstehen, wie HTML aussieht und wie es auf einfacher Basis funktioniert. Sie sollten auch in der Lage sein, ein paar Elemente und Attribute zu schreiben. Die nachfolgenden Artikel dieses Moduls gehen weiter auf einige der hier eingeführten Themen ein und präsentieren weitere Konzepte der Sprache.

- Wenn Sie beginnen, mehr über HTML zu lernen, sollten Sie die Grundlagen von CSS (Cascading Style Sheets) lernen. [CSS](/de/docs/Learn_web_development/Core/Styling_basics) ist die Sprache, die verwendet wird, um Webseiten zu gestalten, wie das Ändern von Schriftarten oder Farben oder das Ändern des Layouts der Seite. HTML und CSS funktionieren gut zusammen, wie Sie bald entdecken werden.

## Siehe auch

- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}
