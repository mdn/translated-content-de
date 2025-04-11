---
title: Grundlegende HTML-Syntax
slug: Learn_web_development/Core/Structuring_content/Basic_HTML_syntax
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}

In diesem Artikel behandeln wir die absoluten Grundlagen von HTML. Um Ihnen den Einstieg zu erleichtern, definiert dieser Artikel Elemente, Attribute und alle anderen wichtigen Begriffe, die Sie möglicherweise gehört haben. Er erklärt auch, wo diese in HTML passen. Sie lernen, wie HTML-Elemente strukturiert sind, wie eine typische HTML-Seite strukturiert ist und andere wichtige grundlegende Sprachmerkmale. Unterwegs wird es auch Gelegenheiten geben, mit HTML zu experimentieren!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Grundlegende Software installiert</a> und grundlegende Kenntnisse im <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">Umgang mit Dateien</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Anatomie eines HTML-Elements — Element, öffnendes Tag, Inhalt, schließendes Tag, Attribute.</li>
          <li>Der HTML-Body und seine Funktion als Container für den Seiteninhalt.</li>
          <li>Was <a href="/de/docs/Glossary/Void_element">Void-Elemente</a> (auch bekannt als leere Elemente) sind und wie sie sich von anderen Elementen unterscheiden.</li>
          <li>Die Notwendigkeit eines Dokuments zu Beginn von HTML-Dokumenten. Sein ursprünglicher Zweck und die Tatsache, dass es jetzt eher ein historisches Artefakt ist.</li>
          <li>Das Verständnis, dass HTML korrekt verschachtelt sein muss.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist HTML?

{{Glossary("HTML", "HTML")}} (HyperText Markup Language) ist eine _Auszeichnungssprache_, die Webbrowsern mitteilt, wie sie die von Ihnen besuchten Webseiten strukturieren sollen. Sie kann so kompliziert oder einfach sein, wie der Webentwickler es wünscht. HTML besteht aus einer Reihe von {{Glossary("Element", "Elementen")}}, die Sie verwenden, um verschiedene Teile von Inhalten zu umschließen, zu umwickeln oder zu _markieren_, damit sie auf bestimmte Weise erscheinen oder agieren. Die umschließenden {{Glossary("Tag", "Tags")}} können Inhalte in einen Hyperlink umwandeln, um sich mit einer anderen Seite zu verbinden, Wörter kursiv schreiben usw. Zum Beispiel beachten Sie die folgende Textzeile:

```plain
My cat is very grumpy
```

Wenn wir möchten, dass der Text für sich allein steht, könnten wir angeben, dass es sich um einen Absatz handelt, indem wir ihn in ein Absatz-({{htmlelement("p")}})-Element einschließen:

```html
<p>My cat is very grumpy</p>
```

HTML befindet sich in Textdateien, die **HTML-Dokumente** oder einfach **Dokumente** genannt werden, mit einer `.html` Dateierweiterung. Wo wir zuvor über Webseiten gesprochen haben, enthält ein HTML-Dokument den Inhalt der Webseite und legt dessen Struktur fest.

Die häufigste HTML-Datei, die Sie antreffen werden, ist `index.html`, die im Allgemeinen verwendet wird, um den Inhalt der Startseite einer Website zu enthalten. Auch Unterordner mit eigenen `index.html` sind üblich, sodass eine Website mehrere Indexdateien an verschiedenen Stellen haben kann.

> [!NOTE]
> Tags in HTML sind nicht case-sensitiv. Das bedeutet, sie können in Groß- oder Kleinbuchstaben geschrieben werden. Zum Beispiel kann ein {{htmlelement("title")}}-Tag als `<title>`, `<TITLE>`, `<Title>`, `<TiTlE>` usw. geschrieben werden, und es wird funktionieren. Es ist jedoch bewährte Praxis, alle Tags aus Gründen der Konsistenz und Lesbarkeit in Kleinbuchstaben zu schreiben.

## Anatomie eines HTML-Elements

Lassen Sie uns unser Absatz-Element aus dem vorherigen Abschnitt weiter erkunden:

![Ein Beispiel-Code-Snippet, das die Struktur eines HTML-Elements zeigt: <p> Mein Kater ist sehr grantig </p>.](grumpy-cat-small.png)

Die Anatomie unseres Elements ist:

- **Das öffnende Tag:** Dies besteht aus dem Namen des Elements (in diesem Beispiel _p_ für Absatz), umschlossen von öffnenden und schließenden spitzen Klammern. Dieses öffnende Tag markiert, wo das Element beginnt oder seine Wirkung entfaltet. In diesem Beispiel kommt es vor dem Beginn des Absatztexts.
- **Der Inhalt:** Dies ist der Inhalt des Elements. In diesem Beispiel ist es der Absatztext.
- **Das schließende Tag:** Dies ist dasselbe wie das öffnende Tag, jedoch enthält es einen Schrägstrich vor dem Elementnamen. Dies markiert, wo das Element endet. Das Fehlen eines schließenden Tags ist ein häufiger Anfängerfehler, der zu seltsamen Ergebnissen führen kann.

Das Element ist das öffnende Tag, gefolgt vom Inhalt, gefolgt vom schließenden Tag.

### Aktives Lernen: Ihr erstes HTML-Element erstellen

Bearbeiten Sie die Zeile unten im Bereich "Editierbarer Code", indem Sie sie mit den Tags `<em>` und `</em>` umschließen. Um das Element zu _öffnen_, setzen Sie das öffnende Tag `<em>` an den Anfang der Zeile. Um das Element zu _schließen_, setzen Sie das schließende Tag `</em>` ans Ende der Zeile. Dadurch sollte der Text kursiv formatiert werden! Sehen Sie Ihre Änderungen live im Bereich _Ausgabe_.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste löschen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Taste, um die Antwort zu sehen.

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

Elemente können innerhalb anderer Elemente platziert werden. Dies wird _Verschachtelung_ genannt. Wenn wir sagen wollten, dass unser Kater **sehr** grantig ist, könnten wir das Wort _sehr_ in ein {{htmlelement("strong")}}-Element einwickeln, was bedeutet, dass das Wort eine stärkere Textformatierung erhalten soll:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

Es gibt eine richtige und eine falsche Art der Verschachtelung. Im obigen Beispiel haben wir zuerst das `p`-Element geöffnet und dann das `strong`-Element. Für eine ordentliche Verschachtelung sollten wir das `strong`-Element zuerst schließen, bevor wir das `p` schließen.

Das Folgende ist ein Beispiel für die _falsche_ Art der Verschachtelung:

```html-nolint example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

Die **Tags müssen so geöffnet und geschlossen werden, dass sie innerhalb oder außerhalb voneinander liegen**. Bei der Art der Überlappung im obigen Beispiel muss der Browser Ihre Absicht erraten. Diese Art des Raten kann zu unerwarteten Ergebnissen führen.

### Void-Elemente

Nicht alle Elemente folgen dem Muster eines öffnenden Tags, Inhalts und eines schließenden Tags. Einige Elemente bestehen aus einem einzigen Tag, das typischerweise verwendet wird, um etwas in das Dokument einzufügen/einzubetten. Solche Elemente werden {{Glossary("void_element", "Void-Elemente")}} genannt. Zum Beispiel bettet das {{htmlelement("img")}}-Element eine Bilddatei auf einer Seite ein:

```html
<img
  src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"
  alt="Firefox icon" />
```

Dies würde die folgende Ausgabe erzeugen:

{{ EmbedLiveSample('Void_elements', 700, 300, "", "") }}

> [!NOTE]
> In HTML ist es nicht erforderlich, ein `/` am Ende eines Void-Element-Tags hinzuzufügen, zum Beispiel: `<img src="images/cat.jpg" alt="cat" />`. Es ist jedoch auch eine gültige Syntax, und Sie können dies tun, wenn Sie möchten, dass Ihr HTML auch als XML gültig ist.

## Attribute

Elemente können auch Attribute haben. Attribute sehen folgendermaßen aus:

![Absatz-Tag mit dem Attribut 'class="editor-note"' hervorgehoben](grumpy-cat-attribute-small.png)

Attribute enthalten zusätzliche Informationen über das Element, die nicht im Inhalt erscheinen werden. In diesem Beispiel ist das Attribut **`class`** ein identifizierender Name, der verwendet wird, um das Element mit Stilinformationen anzusprechen.

Ein Attribut sollte haben:

- Einen Abstand zwischen ihm und dem Elementnamen. (Bei einem Element mit mehr als einem Attribut sollten die Attribute ebenfalls durch Abstände getrennt werden.)
- Den Attributnamen, gefolgt von einem Gleichheitszeichen.
- Einen Attributwert, umschlossen von öffnenden und schließenden Anführungszeichen.

### Aktives Lernen: Attribute zu einem Element hinzufügen

Das `<img>`-Element kann eine Reihe von Attributen haben, darunter:

- `src`
  - : Das `src`-Attribut ist ein **erforderliches** Attribut, das den Speicherort des Bildes angibt. Zum Beispiel: `src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"`.
- `alt`
  - : Das `alt`-Attribut gibt eine Textbeschreibung des Bildes an. Zum Beispiel: `alt="Das Firefox-Symbol"`.
- `width`
  - : Das `width`-Attribut gibt die Breite des Bildes an, wobei die Einheit Pixel ist. Zum Beispiel: `width="300"`.
- `height`
  - : Das `height`-Attribut gibt die Höhe des Bildes an, wobei die Einheit Pixel ist. Zum Beispiel: `height="300"`.

Bearbeiten Sie die Zeile unten im _Eingabebereich_, um sie in ein Bild zu verwandeln.

1. Finden Sie online Ihr Lieblingsbild, klicken Sie mit der rechten Maustaste darauf und drücken Sie _Bildlink/-adresse kopieren_.
2. Fügen Sie im nachfolgenden Bereich das `src`-Attribut hinzu und füllen Sie es mit dem Link aus Schritt 1.
3. Setzen Sie das `alt`-Attribut.
4. Fügen Sie die Attribute `width` und `height` hinzu.

Sie können Ihre Änderungen live im _Ausgabe_-Bereich sehen.

Wenn Sie einen Fehler machen, können Sie ihn immer mit der _Zurücksetzen_-Taste zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Taste, um die Antwort zu sehen.

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

Manchmal sehen Sie Attribute ohne Werte geschrieben. Dies ist völlig akzeptabel. Diese werden {{Glossary("Boolean/HTML", "boolesche Attribute")}} genannt. Wenn ein boolesches Attribut ohne Wert geschrieben wird, oder mit einem beliebigen Wert, selbst wie `"false"`, wird das boolesche Attribut immer auf true gesetzt. Andernfalls, wenn das Attribut nicht in einem HTML-Tag geschrieben ist, wird das Attribut auf false gesetzt. Die Spezifikation erfordert, dass der Wert des Attributs entweder die leere Zeichenkette ist (einschließlich, wenn das Attribut keinen explizit angegebenen Wert hat) oder dasselbe wie der Attributname, aber andere Werte funktionieren genauso. Betrachten Sie zum Beispiel das [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled)-Attribut, das Sie Formular-Eingabeelementen zuweisen können. (Sie verwenden dies, um die Formular-Eingabeelemente zu _deaktivieren_, sodass der Benutzer keine Eingaben machen kann. Die deaktivierten Elemente haben typischerweise ein ausgegrautes Erscheinungsbild.) Zum Beispiel:

```html
<input type="text" disabled="disabled" />
```

Als Abkürzung ist es akzeptabel, dies wie folgt zu schreiben:

```html
<!-- using the disabled attribute prevents the end user from entering text into the input box -->
<input type="text" disabled />

<!-- text input is allowed, as it doesn't contain the disabled attribute -->
<input type="text" />
```

Zur Referenz enthält das obige Beispiel auch ein nicht deaktiviertes Formular-Eingabeelement. Das HTML aus dem obigen Beispiel erzeugt dieses Ergebnis:

{{ EmbedLiveSample('Boolean_attributes', 700, 100, "", "") }}

### Auslassung von Anführungszeichen um Attributwerte

Wenn Sie sich Code für viele andere Websites ansehen, stoßen Sie möglicherweise auf eine Reihe seltsamer Markup-Stile, einschließlich Attributwerte ohne Anführungszeichen. Dies ist unter bestimmten Umständen erlaubt, kann aber auch Ihr Markup in anderen Umständen brechen. Das Element im Code-Snippet unten, `<a>`, wird Anker genannt. Anker umschließen Text und verwandeln sie in Links. Das `href`-Attribut gibt die Webadresse an, auf die der Link verweist. Sie können diese grundlegende Version unten schreiben, die _nur_ das `href`-Attribut enthält, so:

```html
<a href=https://www.mozilla.org/>favorite website</a>
```

Anker können auch ein `title`-Attribut haben, eine Beschreibung der verlinkten Seite. Sobald wir jedoch das `title` in gleicher Weise wie das `href`-Attribut hinzufügen, gibt es Probleme:

```html-nolint example-bad
<a href=https://www.mozilla.org/ title=The Mozilla homepage>favorite website</a>
```

Wie oben geschrieben, missinterpretiert der Browser das Markup, indem er das `title`-Attribut für drei Attribute hält: ein title-Attribut mit dem Wert `The` und zwei boolesche Attribute, `Mozilla` und `homepage`. Offensichtlich ist dies nicht beabsichtigt! Es wird Fehler oder unerwartetes Verhalten verursachen, wie Sie im Live-Beispiel unten sehen können. Versuchen Sie, über den Link zu fahren, um den Titeltext anzuzeigen!

{{ EmbedLiveSample('Omitting_quotes_around_attribute_values', 700, 100, "", "") }}

Schließen Sie immer die Attributanführungszeichen ein. Es vermeidet solche Probleme und führt zu besser lesbarem Code.

### Einfache oder doppelte Anführungszeichen?

In diesem Artikel werden Sie auch bemerken, dass die Attribute in doppelte Anführungszeichen eingeschlossen sind. Sie könnten jedoch in einigen HTML-Codes auch einfache Anführungszeichen sehen. Dies ist eine Stilfrage. Sie können sich frei entscheiden, was Sie bevorzugen. Beide dieser Zeilen sind gleichwertig:

```html-nolint
<a href='https://www.example.com'>A link to my example.</a>

<a href="https://www.example.com">A link to my example.</a>
```

Stellen Sie sicher, dass Sie keine einfachen und doppelten Anführungszeichen mischen. Dieses Beispiel (unten) zeigt eine Art der Vermischung von Anführungszeichen, die schief geht:

```html-nolint example-bad
<a href="https://www.example.com'>A link to my example.</a>
```

Wenn Sie jedoch eine Art von Anführungszeichen verwenden, können Sie die andere Art von Anführungszeichen _innerhalb_ Ihrer Attributwerte einschließen:

```html
<a href="https://www.example.com" title="Isn't this fun?">
  A link to my example.
</a>
```

Um Anführungszeichen innerhalb anderer Anführungszeichen desselben Typs (einfach oder doppelt) zu verwenden, verwenden Sie {{Glossary("character_reference", "Zeichenreferenzen")}}.
Zum Beispiel bricht dieses:

```html-nolint example-bad
<a href="https://www.example.com" title="An "interesting" reference">A link to my example.</a>
```

Stattdessen müssen Sie dies tun:

```html-nolint
<a href="https://www.example.com" title="An &quot;interesting&quot; reference">A link to my example.</a>
```

## Anatomie eines HTML-Dokuments

Einzelne HTML-Elemente sind nicht sehr nützlich allein. Sehen wir uns als nächstes an, wie einzelne Elemente zu einer kompletten HTML-Seite kombiniert werden:

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

1. `<!doctype html>`: Der Doctype. Als HTML noch jung war (1991-1992), sollten Doctypes als Links zu einer Reihe von Regeln fungieren, die die HTML-Seite einhalten musste, um als gutes HTML betrachtet zu werden. Doctypes sahen früher so aus:

   ```html
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   ```

   In jüngerer Zeit ist der Doctype ein historisches Artefakt, das eingebunden werden muss, damit alles andere richtig funktioniert. `<!doctype html>` ist die kürzeste Zeichenfolge, die als gültiger Doctype zählt. Mehr müssen Sie nicht wissen!

2. `<html></html>`: Das {{htmlelement("html")}}-Element. Dieses Element umschließt den gesamten Inhalt auf der Seite. Es wird manchmal als Wurzelelement bezeichnet.
3. `<head></head>`: Das {{htmlelement("head")}}-Element. Dieses Element fungiert als Container für alles, was Sie auf der HTML-Seite einschließen möchten, **das nicht der Inhalt ist**, den die Seite den Betrachtern zeigen wird. Dies umfasst Schlüsselwörter und eine Seitenbeschreibung, die in den Suchergebnissen angezeigt werden, CSS zur Stilgestaltung von Inhalten, Zeichensatzdeklarationen und mehr. Mehr dazu erfahren Sie im nächsten Artikel dieser Reihe.
4. `<meta charset="utf-8">`: Das {{htmlelement("meta")}}-Element. Dieses Element repräsentiert Metadaten, die nicht durch andere HTML-Meta-bezogene Elemente wie {{htmlelement("base")}}, {{htmlelement("link")}}, {{htmlelement("script")}}, {{htmlelement("style")}} oder {{htmlelement("title")}} dargestellt werden können. Das [`charset`](/de/docs/Web/HTML/Reference/Elements/meta#charset)-Attribut gibt die Zeichencodierung für Ihr Dokument als UTF-8 an, das die meisten Zeichen der überwiegenden Mehrheit der menschlichen Schriftsysteme umfasst. Mit dieser Einstellung kann die Seite jetzt mit jedem Textinhalt umgehen, den sie enthalten könnte. Es gibt keinen Grund, dies nicht zu setzen, und es kann helfen, einige spätere Probleme zu vermeiden.
5. `<title></title>`: Das {{htmlelement("title")}}-Element. Dadurch wird der Titel der Seite festgelegt, welcher der Titel ist, der im Browser-Tab angezeigt wird, in dem die Seite geladen ist. Der Seitentitel wird auch verwendet, um die Seite zu beschreiben, wenn sie als Lesezeichen gespeichert wird.
6. `<body></body>`: Das {{htmlelement("body")}}-Element. Dieses enthält _alle_ Inhalte, die auf der Seite angezeigt werden, einschließlich Text, Bilder, Videos, Spiele, abspielbarer Audiodateien oder was auch immer.

### Aktives Lernen: Hinzufügen einiger Funktionen zu einem HTML-Dokument

Wenn Sie auf Ihrem lokalen Computer mit dem Schreiben von HTML experimentieren möchten, können Sie:

1. Kopieren Sie das oben aufgeführte HTML-Seitenbeispiel.
2. Erstellen Sie eine neue Datei in Ihrem Texteditor.
3. Fügen Sie den Code in die neue Textdatei ein.
4. Speichern Sie die Datei als `index.html`.

> [!NOTE]
> Dieses grundlegende HTML-Template finden Sie auch im [MDN Learning Area GitHub-Repo](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html).

Sie können diese Datei jetzt in einem Webbrowser öffnen, um zu sehen, wie der gerenderte Code aussieht. Bearbeiten Sie den Code und aktualisieren Sie den Browser, um das Ergebnis zu sehen. Anfangs sieht die Seite so aus:

![Ein einfaches HTML-Dokument, das "Dies ist meine Seite" sagt](template-screenshot.png)

In dieser Übung können Sie den Code lokal auf Ihrem Computer bearbeiten, wie zuvor beschrieben, oder Sie bearbeiten ihn im Beispiel-Fenster unten (das bearbeitbare Beispiel-Fenster stellt nur den Inhalt des {{htmlelement("body")}}-Elements dar, in diesem Fall). Schärfen Sie Ihre Fähigkeiten, indem Sie die folgenden Aufgaben durchführen:

- Fügen Sie unmittelbar nach dem öffnenden Tag des {{htmlelement("body")}}-Elements einen Haupttitel für das Dokument hinzu. Dieser sollte in ein öffnendes `<h1>`-Tag und schließendes `</h1>`-Tag eingewickelt sein.
- Bearbeiten Sie den Absatzinhalt, um Text über ein Thema hinzuzufügen, das Sie interessant finden.
- Heben Sie wichtige Wörter hervor, indem Sie sie in ein öffnendes `<strong>`-Tag und schließendes `</strong>`-Tag einschließen.
- Fügen Sie einen Link in Ihren Absatz ein, wie [früher im Artikel beschrieben](#active_learning_adding_attributes_to_an_element).
- Fügen Sie Ihrer Dokument ein Bild hinzu. Platzieren Sie es unter dem Absatz, wie [früher im Artikel beschrieben](#void-elemente). Sammeln Sie Bonuspunkte, wenn es Ihnen gelingt, auf ein anderes Bild zu verlinken (entweder lokal auf Ihrem Computer oder anderswo im Web).

Wenn Sie einen Fehler machen, können Sie ihn immer mit der _Zurücksetzen_-Taste zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Taste, um die Antwort zu sehen.

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

In den obigen Beispielen haben Sie möglicherweise bemerkt, dass im Code viele Leerzeichen enthalten sind. Diese sind optional. Diese beiden Code-Snippets sind gleichwertig:

```html-nolint
<p id="noWhitespace">Dogs are silly.</p>

<p id="whitespace">Dogs
    are
        silly.</p>
```

Egal wie viele Leerzeichen Sie innerhalb des Inhalts eines HTML-Elements verwenden (die ein oder mehrere Leerzeichen, aber auch Zeilenumbrüche umfassen können), der HTML-Parser reduziert jede Sequenz von Leerzeichen beim Rendern des Codes auf ein einziges Leerzeichen. Warum also so viele Leerzeichen verwenden? Die Antwort ist Lesbarkeit.

Es kann einfacher sein zu verstehen, was in Ihrem Code vor sich geht, wenn Sie ihn schön formatiert haben. In unserem HTML haben wir jedes verschachtelte Element um zwei Leerzeichen mehr eingerückt als dasjenige, in dem es sich befindet. Es liegt an Ihnen, den Stil der Formatierung festzulegen (zum Beispiel wie viele Leerzeichen für jedes Einrückungsniveau), aber Sie sollten in Betracht ziehen, ihn zu formatieren.

Schauen wir uns an, wie der Browser die beiden Absätze oben mit und ohne Leerzeichen rendert:

{{ EmbedLiveSample('Whitespace_in_HTML', 700, 100) }}

> [!NOTE]
> Wenn von JavaScript auf das [innerHTML](/de/docs/Web/API/Element/innerHTML) von Elementen zugegriffen wird, bleibt das gesamte Leerzeichen erhalten.
> Dies kann unerwartete Ergebnisse zurückgeben, wenn das Leerzeichen vom Browser getrimmt wird.

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

In HTML sind die Zeichen `<`, `>`, `"`, `'` und `&` Sonderzeichen. Sie sind Teile der HTML-Syntax selbst. Wie schließen Sie also eines dieser Sonderzeichen in Ihren Text ein? Zum Beispiel, wenn Sie ein Kaufmanns- und oder ein Kleiner-als-Zeichen verwenden möchten, ohne dass es als Code interpretiert wird.

Das tun Sie mit {{Glossary("character_reference", "Zeichenreferenzen")}}. Dies sind spezielle Codes, die Zeichen repräsentieren, die in genau diesen Umständen verwendet werden. Jede Zeichenreferenz beginnt mit einem Kaufmanns-Und (&) und endet mit einem Semikolon (;).

| Wörtliches Zeichen | Zeichenrefäquivalent |
| ------------------ | -------------------- |
| <                  | `&lt;`               |
| >                  | `&gt;`               |
| "                  | `&quot;`             |
| '                  | `&apos;`             |
| &                  | `&amp;`              |

Das Zeichenrefäquivalent könnte leicht gemerkt werden, da der Text, den es verwendet, wie bei `&lt;` als kleiner als, bei `&quot;` als Zitat und ähnlich für andere gesehen werden kann. Um mehr über Entitätsreferenzen zu erfahren, siehe [Liste von XML- und HTML-Zeichenentitätsreferenzen](https://de.wikipedia.org/wiki/Liste_von_XML-_und_HTML-Zeichenentit%C3%A4tsreferenzen) (Wikipedia).

Im folgenden Beispiel gibt es zwei Absätze:

```html-nolint
<p>In HTML, you define a paragraph using the <p> element.</p>

<p>In HTML, you define a paragraph using the &lt;p&gt; element.</p>
```

Im Live-Output unten sehen Sie, dass der erste Absatz schiefgelaufen ist. Der Browser interpretiert die zweite Instanz von `<p>` als Start eines neuen Absatzes. Der zweite Absatz sieht gut aus, weil er Zeichenreferenzen mit Winkelklammern verwendet.

{{ EmbedLiveSample('Entity_references_Including_special_characters_in_HTML', 700, 200, "", "") }}

> [!NOTE]
> Sie müssen keine Entitätsreferenzen für andere Symbole verwenden, da moderne Browser die tatsächlichen Symbole problemlos handhaben, solange die [Zeichencodierung Ihres HTMLs auf UTF-8 gesetzt ist](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#specifying_your_documents_character_encoding).

## HTML-Kommentare

HTML hat einen Mechanismus, um Kommentare im Code zu schreiben. Browser ignorieren Kommentare, wodurch sie für den Benutzer effektiv unsichtbar sind. Der Zweck von Kommentaren besteht darin, Ihnen zu ermöglichen, Notizen im Code zu hinterlassen, um Ihre Logik oder Codierung zu erklären. Dies ist sehr nützlich, wenn Sie nach längerer Abwesenheit zu einem Code zurückkehren und sich nicht mehr genau daran erinnern. Ebenso sind Kommentare von unschätzbarem Wert, wenn verschiedene Personen Änderungen und Aktualisierungen vornehmen.

Um einen HTML-Kommentar zu schreiben, umschließen Sie ihn mit den speziellen Markern `<!--` und `-->`. Zum Beispiel:

```html
<p>I'm not inside a comment</p>

<!-- <p>I am!</p> -->
```

Wie unten zu sehen ist, wird nur der erste Absatz im Live-Output angezeigt.

{{ EmbedLiveSample('HTML_comments', 700, 100, "", "") }}

## Zusammenfassung

Sie haben das Ende des Artikels erreicht! Wir hoffen, Sie haben Ihre Tour durch die Grundlagen von HTML genossen.

An diesem Punkt sollten Sie verstehen, wie HTML aussieht und wie es auf einer grundlegenden Ebene funktioniert. Sie sollten auch in der Lage sein, ein paar Elemente und Attribute zu schreiben. Die nachfolgenden Artikel dieses Moduls gehen näher auf einige der hier vorgestellten Themen ein und stellen weitere Konzepte der Sprache vor.

- Während Sie anfangen, mehr über HTML zu lernen, ziehen Sie in Betracht, die Grundlagen von CSS (Cascading Style Sheets) zu lernen. [CSS](/de/docs/Learn_web_development/Core/Styling_basics) ist die Sprache, die verwendet wird, um Webseiten zu gestalten, wie das Ändern von Schriftarten oder Farben oder das Ändern des Seitenlayouts. HTML und CSS arbeiten gut zusammen, wie Sie bald entdecken werden.

## Siehe auch

- [Anwenden von Farbe auf HTML-Elemente mithilfe von CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}
