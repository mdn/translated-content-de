---
title: Grundlegende HTML-Syntax
slug: Learn_web_development/Core/Structuring_content/Basic_HTML_syntax
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}

In diesem Artikel behandeln wir die absoluten Grundlagen von HTML. Damit Sie loslegen können, definiert dieser Artikel Elemente, Attribute und alle anderen wichtigen Begriffe, die Sie möglicherweise gehört haben. Außerdem wird erklärt, wo diese in HTML passen. Sie lernen, wie HTML-Elemente aufgebaut sind, wie eine typische HTML-Seite strukturiert ist, und andere wichtige grundlegende Spracheigenschaften. Unterwegs gibt es auch die Möglichkeit, mit HTML zu experimentieren!

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
          <li>Der HTML-Körper und seine Funktion als Container für den Seiteninhalt.</li>
          <li>Was <a href="/de/docs/Glossary/Void_element">leere Elemente</a> (auch bekannt als void elements) sind und wie sie sich von anderen Elementen unterscheiden.</li>
          <li>Der Bedarf an einem Doctype oben in HTML-Dokumenten. Sein ursprünglich vorgesehenes Ziel und die Tatsache, dass er heute ein Stück weit ein historisches Artefakt ist.</li>
          <li>Das Verständnis, dass HTML korrekt verschachtelt sein muss.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist HTML?

{{Glossary("HTML", "HTML")}} (HyperText Markup Language) ist eine _Auszeichnungssprache_, die Webbrowsern mitteilt, wie die von Ihnen besuchten Webseiten strukturiert werden sollen. Es kann so kompliziert oder einfach sein, wie es der Webentwickler möchte. HTML besteht aus einer Reihe von {{Glossary("Element", "Elementen")}}, die Sie verwenden, um verschiedene Teile des Inhalts einzuschließen, zu umwickeln oder zu _kennzeichnen_, um sie in einer bestimmten Weise erscheinen oder funktionieren zu lassen. Die einschließenden {{Glossary("Tag", "Tags")}} können Inhalte in einen Hyperlink verwandeln, um auf eine andere Seite zu verweisen, Wörter kursiv darstellen und mehr. Betrachten Sie zum Beispiel die folgende Textzeile:

```plain
My cat is very grumpy
```

Wenn wir wollten, dass der Text für sich alleine steht, könnten wir angeben, dass er ein Absatz ist, indem wir ihn in ein Absatz-({{htmlelement("p")}}) Element einschließen:

```html
<p>My cat is very grumpy</p>
```

HTML lebt in Textdateien, die **HTML-Dokumente** oder einfach **Dokumente** genannt werden, mit der Dateiendung `.html`. Wo wir zuvor von Webseiten gesprochen haben, enthält ein HTML-Dokument den Inhalt der Webseite und bestimmt deren Struktur.

Die häufigste HTML-Datei, die Sie antreffen werden, ist `index.html`, die in der Regel verwendet wird, um den Inhalt der Startseite einer Webseite zu enthalten. Es ist auch üblich, Unterordner mit ihren eigenen `index.html` zu sehen, sodass eine Website mehrere Indexdateien an verschiedenen Stellen haben kann.

> [!NOTE]
> Tags in HTML sind nicht case-sensitive. Das bedeutet, dass sie in Groß- oder Kleinbuchstaben geschrieben werden können. Zum Beispiel könnte ein {{htmlelement("title")}}-Tag als `<title>`, `<TITLE>`, `<Title>`, `<TiTlE>`, usw. geschrieben werden und es wird funktionieren. Es ist jedoch bewährte Praxis, alle Tags in Kleinbuchstaben zu schreiben, um Konsistenz und Lesbarkeit zu gewährleisten.

## Anatomie eines HTML-Elements

Lassen Sie uns unser Absatzelement aus dem vorherigen Abschnitt näher untersuchen:

![Ein Beispielcodeausschnitt, der die Struktur eines HTML-Elements mit dem Beispiel <p> My cat is very grumpy </p> zeigt.](grumpy-cat-small.png)

Die Anatomie unseres Elements ist:

- **Das öffnende Tag:** Dies besteht aus dem Namen des Elements (in diesem Beispiel _p_ für Absatz), eingeschlossen in öffnende und schließende spitze Klammern. Dieses öffnende Tag markiert, wo das Element beginnt oder zu wirken beginnt. In diesem Beispiel steht es vor dem Beginn des Absatztextes.
- **Der Inhalt:** Dies ist der Inhalt des Elements. In diesem Beispiel ist es der Absatztext.
- **Das schließende Tag:** Dies ist dasselbe wie das öffnende Tag, außer dass es einen Schrägstrich vor dem Elementnamen enthält. Dies markiert, wo das Element endet. Das Fehlen eines schließenden Tags ist ein häufiger Anfängerfehler, der zu seltsamen Ergebnissen führen kann.

Das Element besteht aus dem öffnenden Tag, gefolgt vom Inhalt und dann dem schließenden Tag.

### Aktives Lernen: Ihr erstes HTML-Element erstellen

Bearbeiten Sie die Zeile unten im Bereich "Bearbeitbarer Code", indem Sie sie mit den Tags `<em>` und `</em>.` einschließen. Um das Element zu _öffnen_, setzen Sie das öffnende Tag `<em>` an den Anfang der Zeile. Um das Element zu _schließen_, setzen Sie das schließende Tag `</em>` am Ende der Zeile. Dadurch sollte die Zeile kursiv formatiert werden! Änderungen werden im Bereich _Output_ live aktualisiert.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste löschen. Wenn Sie wirklich nicht weiterkommen, drücken Sie die _Lösung anzeigen_-Taste, um die Antwort zu sehen.

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

### Elemente verschachteln

Elemente können innerhalb anderer Elemente platziert werden. Dies nennt man _Verschachtelung_. Wenn wir sagen wollten, dass unsere Katze **sehr** mürrisch ist, könnten wir das Wort _sehr_ in ein {{htmlelement("strong")}}-Element einschließen, was bedeutet, dass das Wort eine stärkere Textformatierung haben soll:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

Es gibt eine richtige und eine falsche Art zu verschachteln. Im obigen Beispiel haben wir das `p`-Element zuerst geöffnet, dann das `strong`-Element. Für eine ordnungsgemäße Verschachtelung sollten wir das `strong`-Element zuerst schließen, bevor wir das `p` schließen.

Das folgende ist ein Beispiel für die _falsche_ Art der Verschachtelung:

```html-nolint example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

**Die Tags müssen so geöffnet und geschlossen werden, dass sie innerhalb oder außerhalb eines anderen liegen.** Bei der Art von Überlappung im obigen Beispiel muss der Browser Ihre Absicht erraten. Diese Art des Ratens kann zu unerwarteten Ergebnissen führen.

### Leere Elemente

Nicht alle Elemente folgen dem Muster eines öffnenden Tags, Inhalts und eines schließenden Tags. Einige Elemente bestehen aus einem einzigen Tag, das typischerweise verwendet wird, um etwas in das Dokument einzufügen/einzubetten. Solche Elemente werden {{Glossary("void_element", "leere Elemente")}} genannt. Zum Beispiel bindet das {{htmlelement("img")}}-Element eine Bilddatei in eine Seite ein:

```html
<img
  src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"
  alt="Firefox icon" />
```

Dies würde folgendes ausgeben:

{{ EmbedLiveSample('Void_elements', 700, 300, "", "") }}

> [!NOTE]
> In HTML ist es nicht erforderlich, am Ende eines leeren Elements ein `/` hinzuzufügen, beispielsweise: `<img src="images/cat.jpg" alt="cat" />`. Es handelt sich jedoch auch um eine gültige Syntax und Sie können dies tun, wenn Sie möchten, dass Ihr HTML ein gültiges XML ist.

## Attribute

Elemente können auch Attribute haben. Attribute sehen so aus:

![Absatztag mit hervorgehobenem Attribut 'class="editor-note"'](grumpy-cat-attribute-small.png)

Attribute enthalten zusätzliche Informationen über das Element, die im Inhalt nicht dargestellt werden. In diesem Beispiel ist das **`class`**-Attribut ein identifizierender Name, der verwendet wird, um das Element mit Stilinformationen zu bearbeiten.

Ein Attribut sollte haben:

- Einen Abstand zwischen ihm und dem Elementnamen. (Bei einem Element mit mehr als einem Attribut sollten die Attribute ebenfalls durch Leerzeichen getrennt werden.)
- Den Attributnamen, gefolgt von einem Gleichheitszeichen.
- Einen Attributwert, der mit öffnenden und schließenden Anführungszeichen eingeschlossen ist.

### Aktives Lernen: Attribute zu einem Element hinzufügen

Das `<img>`-Element kann eine Reihe von Attributen verwenden, darunter:

- `src`
  - : Das `src`-Attribut ist ein **erforderliches** Attribut, das den Ort des Bildes angibt. Zum Beispiel: `src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"`.
- `alt`
  - : Das `alt`-Attribut gibt eine Textbeschreibung des Bildes an. Zum Beispiel: `alt="Das Firefox-Symbol"`.
- `width`
  - : Das `width`-Attribut legt die Breite des Bildes fest, wobei die Einheit Pixel ist. Zum Beispiel: `width="300"`.
- `height`
  - : Das `height`-Attribut legt die Höhe des Bildes fest, wobei die Einheit Pixel ist. Zum Beispiel: `height="300"`.

Bearbeiten Sie die Zeile unten im _Eingabebereich_, um sie in ein Bild zu verwandeln.

1. Finden Sie online Ihr Lieblingsbild, klicken Sie mit der rechten Maustaste darauf und drücken Sie _Bildlink/-adresse kopieren_.
2. Fügen Sie im folgenden Bereich das `src`-Attribut hinzu und füllen Sie es mit dem Link aus Schritt 1 aus.
3. Setzen Sie das `alt`-Attribut.
4. Fügen Sie die Attribute `width` und `height` hinzu.

Sie können Ihre Änderungen live im _Output_-Bereich sehen.

Falls Sie einen Fehler gemacht haben, können Sie ihn jederzeit mit der _Zurücksetzen_-Taste wiederherstellen. Wenn Sie wirklich nicht weiterkommen, drücken Sie die _Lösung anzeigen_-Taste, um die Antwort zu sehen.

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

Manchmal werden Sie Attribute ohne Werte sehen. Dies ist völlig zulässig. Diese werden {{Glossary("Boolean/HTML", "boolesche Attribute")}} genannt. Wenn ein boolesches Attribut ohne Wert oder mit einem beliebigen Wert, sogar wie `"false"`, geschrieben wird, wird das boolesche Attribut immer auf true gesetzt. Andernfalls, wenn das Attribut nicht in einem HTML-Tag geschrieben ist, wird das Attribut auf false gesetzt. Die Spezifikation erfordert, dass der Attributwert entweder der leere String ist (einschließlich wenn kein Wert explizit angegeben ist) oder derselbe wie der Attributname, aber andere Werte funktionieren genauso. Betrachten Sie zum Beispiel das [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled)-Attribut, das Sie Formular-Input-Elementen zuweisen können. (Sie verwenden dies, um die Formulareingabeelemente zu _deaktivieren_, sodass der Benutzer keine Eingaben machen kann. Die deaktivierten Elemente haben typischerweise ein ausgegrautes Erscheinungsbild.) Zum Beispiel:

```html
<input type="text" disabled="disabled" />
```

Als Kurzschrift ist es zulässig, dies wie folgt zu schreiben:

```html
<!-- using the disabled attribute prevents the end user from entering text into the input box -->
<input type="text" disabled />

<!-- text input is allowed, as it doesn't contain the disabled attribute -->
<input type="text" />
```

Zur Referenz enthält das obige Beispiel auch ein nicht deaktiviertes Formulareingabeelement. Der HTML-Code aus dem obigen Beispiel erzeugt dieses Ergebnis:

{{ EmbedLiveSample('Boolean_attributes', 700, 100, "", "") }}

### Anführungszeichen um Attributwerte weglassen

Wenn Sie den Code für viele andere Seiten ansehen, stoßen Sie möglicherweise auf eine Reihe seltsamer Markup-Stile, einschließlich Attributwerten ohne Anführungszeichen. Dies ist unter bestimmten Umständen erlaubt, kann Ihre Markup jedoch auch unter anderen Umständen beschädigen. Das Element im unten stehenden Codeausschnitt, `<a>`, wird Anker genannt. Anker schließen Text ein und verwandeln ihn in Links. Das `href`-Attribut gibt die Webadresse an, auf die der Link verweist. Sie können diese grundlegende Version unten _nur_ mit dem `href`-Attribut wie folgt schreiben:

```html
<a href=https://www.mozilla.org/>favorite website</a>
```

Anker können auch ein `title`-Attribut haben, eine Beschreibung der verlinkten Seite. Sobald wir jedoch das `title` auf die gleiche Weise wie das `href`-Attribut hinzufügen, gibt es Probleme:

```html-nolint example-bad
<a href=https://www.mozilla.org/ title=The Mozilla homepage>favorite website</a>
```

Wie oben geschrieben, missversteht der Browser das Markup und hält das `title`-Attribut für drei Attribute: ein title-Attribut mit dem Wert `The` und zwei boolesche Attribute, `Mozilla` und `homepage`. Offensichtlich ist dies nicht beabsichtigt! Es wird zu Fehlern oder unerwartetem Verhalten führen, wie Sie im folgenden Live-Beispiel sehen können. Versuchen Sie, mit der Maus über den Link zu fahren, um den Title-Text zu sehen!

{{ EmbedLiveSample('Omitting_quotes_around_attribute_values', 700, 100, "", "") }}

Schließen Sie die Attribut-Anführungszeichen immer ein. Dies vermeidet solche Probleme und führt zu besser lesbarem Code.

### Einzel- oder doppelte Anführungszeichen?

In diesem Artikel werden Sie auch bemerken, dass die Attribute in doppelte Anführungszeichen eingeschlossen sind. Sie könnten jedoch bei einigen HTML-Codes auch einfache Anführungszeichen sehen. Dies ist eine Stilfrage. Sie können frei wählen, was Sie bevorzugen. Diese beiden Zeilen sind gleichwertig:

```html-nolint
<a href='https://www.example.com'>A link to my example.</a>

<a href="https://www.example.com">A link to my example.</a>
```

Stellen Sie sicher, dass Sie einfache und doppelte Anführungszeichen nicht mischen. Dieses Beispiel (unten) zeigt eine Art von Mischung von Anführungszeichen, die schiefgeht:

```html-nolint example-bad
<a href="https://www.example.com'>A link to my example.</a>
```

Wenn Sie jedoch einen Typ von Anführungszeichen verwenden, können Sie den anderen Typ von Anführungszeichen _innerhalb_ Ihrer Attributwerte einfügen:

```html
<a href="https://www.example.com" title="Isn't this fun?">
  A link to my example.
</a>
```

Um Anführungszeichen innerhalb anderer Anführungszeichen desselben Typs (einfaches oder doppeltes Anführungszeichen) zu verwenden, verwenden Sie {{Glossary("character_reference", "Zeichenreferenzen")}}.
Zum Beispiel wird dies brechen:

```html-nolint example-bad
<a href="https://www.example.com" title="An "interesting" reference">A link to my example.</a>
```

Stattdessen müssen Sie dies tun:

```html-nolint
<a href="https://www.example.com" title="An &quot;interesting&quot; reference">A link to my example.</a>
```

## Anatomie eines HTML-Dokuments

Einzelne HTML-Elemente sind für sich genommen nicht sehr nützlich. Lassen Sie uns als Nächstes untersuchen, wie einzelne Elemente zusammenkommen, um eine vollständige HTML-Seite zu bilden:

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

1. `<!doctype html>`: Der Doctype. Als HTML jung war (1991-1992), sollten Doctypes als Links zu einer Reihe von Regeln fungieren, denen das HTML-Dokument folgte, um als gutes HTML betrachtet zu werden. Doctypes sahen früher so aus:

   ```html
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   ```

   In jüngerer Zeit ist der Doctype ein historisches Artefakt, das eingefügt werden muss, damit alles andere richtig funktioniert. `<!doctype html>` ist die kürzeste Zeichenfolge, die als gültiger Doctype zählt. Das ist alles, was Sie wissen müssen!

2. `<html></html>`: Das {{htmlelement("html")}}-Element. Dieses Element umschließt den gesamten Inhalt auf der Seite. Es wird manchmal als das Wurzelelement bezeichnet.
3. `<head></head>`: Das {{htmlelement("head")}}-Element. Dieses Element fungiert als Container für alles, was Sie auf der HTML-Seite einfügen möchten, **was nicht der Inhalt** ist, den die Seite den Betrachtern zeigt. Dazu gehören Schlüsselwörter und eine Seitenbeschreibung, die in Suchergebnissen erscheinen würden, CSS zur Formatierung des Inhalts, Zeichensatz-Deklarationen und mehr. Darüber erfahren Sie mehr im nächsten Artikel der Serie.
4. `<meta charset="utf-8">`: Das {{htmlelement("meta")}}-Element. Dieses Element steht für Metadaten, die nicht durch andere HTML-meta-bezogene Elemente, wie {{htmlelement("base")}}, {{htmlelement("link")}}, {{htmlelement("script")}}, {{htmlelement("style")}} oder {{htmlelement("title")}}, dargestellt werden können. Das [`charset`](/de/docs/Web/HTML/Reference/Elements/meta#charset)-Attribut gibt die Zeichencodierung für Ihr Dokument als UTF-8 an, das die meisten Zeichen der überwiegenden Mehrheit der menschlichen Schriftsprachen enthält. Mit dieser Einstellung kann die Seite nun mit allen Textinhalten umgehen, die sie möglicherweise enthält. Es gibt keinen Grund, dies nicht zu setzen, und es kann helfen, einige Probleme später zu vermeiden.
5. `<title></title>`: Das {{htmlelement("title")}}-Element. Dies setzt den Titel der Seite, welcher der Titel ist, der im Browser-Tab erscheint, in dem die Seite geladen ist. Der Seitentitel wird auch verwendet, um die Seite zu beschreiben, wenn sie als Lesezeichen gespeichert wird.
6. `<body></body>`: Das {{htmlelement("body")}}-Element. Dies enthält _alle_ Inhalte, die auf der Seite angezeigt werden, einschließlich Text, Bilder, Videos, Spiele, abspielbare Audiotracks oder was auch immer.

### Aktives Lernen: Einige Features zu einem HTML-Dokument hinzufügen

Wenn Sie es ausprobieren möchten, HTML auf Ihrem lokalen Computer zu schreiben, können Sie:

1. Kopieren Sie das oben aufgeführte HTML-Seitenbeispiel.
2. Erstellen Sie eine neue Datei in Ihrem Texteditor.
3. Fügen Sie den Code in die neue Textdatei ein.
4. Speichern Sie die Datei als `index.html`.

> [!NOTE]
> Sie können diese grundlegende HTML-Vorlage auch im [MDN Learning Area GitHub repo](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) finden.

Sie können diese Datei jetzt in einem Webbrowser öffnen, um zu sehen, wie der gerenderte Code aussieht. Bearbeiten Sie den Code und aktualisieren Sie den Browser, um zu sehen, was das Ergebnis ist. Anfänglich sieht die Seite so aus:

![Eine einfache HTML-Seite, die sagt: This is my page](template-screenshot.png)

In dieser Übung können Sie den Code lokal auf Ihrem Computer editieren, wie zuvor beschrieben, oder Sie können ihn im folgenden Beispiel-Fenster editieren (das bearbeitbare Beispiel-Fenster stellt in diesem Fall nur den Inhalt des {{htmlelement("body")}}-Elements dar). Schärfen Sie Ihre Fähigkeiten, indem Sie die folgenden Aufgaben umsetzen:

- Fügen Sie direkt unter dem öffnenden Tag des {{htmlelement("body")}}-Elements einen Haupttitel für das Dokument hinzu. Dieser sollte in ein `<h1>` öffnendes Tag und ein `</h1>` schließendes Tag eingeschlossen sein.
- Bearbeiten Sie den Absatzinhalt, um einen Text über ein Thema zu enthalten, das Sie interessant finden.
- Heben Sie wichtige Wörter in Fettdruck hervor, indem Sie sie in ein `<strong>` öffnendes Tag und ein `</strong>` schließendes Tag einschließen.
- Fügen Sie einen Link in Ihrem Absatz hinzu, wie [zuvor im Artikel erklärt](#active_learning_adding_attributes_to_an_element).
- Fügen Sie ein Bild in Ihr Dokument ein. Platzieren Sie es unter dem Absatz, wie [zuvor im Artikel erklärt](#leere_elemente). Verdienen Sie Bonuspunkte, wenn es Ihnen gelingt, auf ein anderes Bild zu verlinken (entweder lokal auf Ihrem Computer oder anderswo im Web).

Falls Sie einen Fehler gemacht haben, können Sie ihn jederzeit mit der _Zurücksetzen_-Taste wiederherstellen. Wenn Sie wirklich nicht weiterkommen, drücken Sie die _Lösung anzeigen_-Taste, um die Antwort zu sehen.

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

In den obigen Beispielen haben Sie vielleicht bemerkt, dass im Code viele Leerzeichen enthalten sind. Diese sind optional. Diese beiden Codeausschnitte sind äquivalent:

```html-nolint
<p id="noWhitespace">Dogs are silly.</p>

<p id="whitespace">Dogs
    are
        silly.</p>
```

Unabhängig davon, wie viele Leerzeichen Sie im HTML-Elementinhalt verwenden (die ein oder mehrere Leerzeichenzeichen enthalten können, aber auch Zeilenumbrüche), reduziert der HTML-Parser jede Sequenz von Leerzeichen beim Rendern des Codes auf ein einzelnes Leerzeichen. Warum also so viel Leerraum verwenden? Die Antwort ist Lesbarkeit.

Es kann einfacher sein zu verstehen, was in Ihrem Code vor sich geht, wenn er schön formatiert ist. In unserem HTML haben wir jedes verschachtelte Element um zwei Leerzeichen mehr eingerückt als das, in dem es sich befindet. Es liegt an Ihnen, den Formatierungsstil zu wählen (zum Beispiel wie viele Leerzeichen pro Einrückungsebene), aber Sie sollten in Betracht ziehen, ihn zu formatieren.

Sehen wir uns an, wie der Browser die beiden oben genannten Absätze mit Leerraum und ohne Leerraum rendert:

{{ EmbedLiveSample('Whitespace_in_HTML', 700, 100) }}

> [!NOTE]
> Das Zugreifen auf das [innerHTML](/de/docs/Web/API/Element/innerHTML) von Elementen aus JavaScript behält den gesamten Leerraum bei.
> Dies kann unerwartete Ergebnisse zurückgeben, wenn der Leerraum vom Browser getrimmt wird.

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

## Zeichenreferenzen: Einschließen von Sonderzeichen in HTML

In HTML sind die Zeichen `<`, `>`, `"`, `'` und `&` Sonderzeichen. Sie sind Teile der HTML-Syntax selbst. Also, wie fügen Sie eines dieser Sonderzeichen in Ihren Text ein? Zum Beispiel, wenn Sie ein Kaufmanns-Und oder ein Kleiner-als-Zeichen verwenden möchten, und es nicht als Code interpretiert werden soll.

Das tun Sie mit {{Glossary("character_reference", "Zeichenreferenzen")}}. Diese sind spezielle Codes, die Zeichen repräsentieren, um in genau diesen Fällen verwendet zu werden. Jede Zeichenreferenz beginnt mit einem Kaufmanns-Und (&) und endet mit einem Semikolon (;).

| Reales Zeichen | Entsprechende Zeichenreferenz |
| -------------- | ----------------------------- |
| <              | `&lt;`                        |
| >              | `&gt;`                        |
| "              | `&quot;`                      |
| '              | `&apos;`                      |
| &              | `&amp;`                       |

Die entsprechende Zeichenreferenz könnte leicht gemerkt werden, weil der Text, den sie verwendet, als weniger als für `&lt;`, Anführungszeichen für `&quot;` und ähnlich für andere gesehen werden kann. Um mehr über Entitätsreferenzen zu finden, besuchen Sie [Liste von XML- und HTML-Zeichenentitätsreferenzen](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references) (Wikipedia).

Im folgenden Beispiel gibt es zwei Absätze:

```html-nolint
<p>In HTML, you define a paragraph using the <p> element.</p>

<p>In HTML, you define a paragraph using the &lt;p&gt; element.</p>
```

Im folgenden Live-Output können Sie sehen, dass der erste Absatz schiefgegangen ist. Der Browser interpretiert das zweite Vorkommen von `<p>` als Beginn eines neuen Absatzes. Der zweite Absatz sieht gut aus, weil er spitze Klammern mit Zeichenreferenzen hat.

{{ EmbedLiveSample('Entity_references_Including_special_characters_in_HTML', 700, 200, "", "") }}

> [!NOTE]
> Sie müssen keine Entitätsreferenzen für andere Symbole verwenden, da moderne Browser die tatsächlichen Symbole einwandfrei handhaben, solange das [Zeichencodierung Ihres HTML auf UTF-8 gesetzt ist](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#specifying_your_documents_character_encoding).

## HTML-Kommentare

HTML hat einen Mechanismus, um Kommentare im Code zu schreiben. Browser ignorieren Kommentare und machen sie praktisch unsichtbar für den Benutzer. Der Zweck von Kommentaren besteht darin, Ihnen zu ermöglichen, Notizen im Code einzuschließen, um Ihre Logik oder Codierung zu erklären. Dies ist sehr nützlich, wenn Sie zu einem Code zurückkehren, nachdem Sie lange genug weg waren, um sich nicht vollständig daran zu erinnern. Ebenso sind Kommentare von unschätzbarem Wert, wenn verschiedene Personen Änderungen und Aktualisierungen vornehmen.

Um einen HTML-Kommentar zu schreiben, schließen Sie ihn in die speziellen Markierungen `<!--` und `-->` ein. Beispielsweise:

```html
<p>I'm not inside a comment</p>

<!-- <p>I am!</p> -->
```

Wie Sie unten sehen können, wird im Live-Output nur der erste Absatz angezeigt.

{{ EmbedLiveSample('HTML_comments', 700, 100, "", "") }}

## Zusammenfassung

Sie haben das Ende des Artikels erreicht! Wir hoffen, dass Sie Ihre Tour durch die Grundlagen von HTML genossen haben.

An diesem Punkt sollten Sie verstehen, wie HTML aussieht und wie es auf einer grundlegenden Ebene funktioniert. Sie sollten auch in der Lage sein, ein paar Elemente und Attribute zu schreiben. Die nachfolgenden Artikel dieses Moduls gehen tiefer auf einige der hier eingeführten Themen ein und präsentieren andere Konzepte der Sprache.

- Während Sie beginnen, mehr über HTML zu lernen, sollten Sie auch die Grundlagen von CSS (Cascading Style Sheets) lernen. [CSS](/de/docs/Learn_web_development/Core/Styling_basics) ist die Sprache, die verwendet wird, um Webseiten zu gestalten, zum Beispiel Schriften oder Farben zu ändern oder das Seitenlayout zu ändern. HTML und CSS funktionieren gut zusammen, wie Sie bald entdecken werden.

## Siehe auch

- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color)

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}
