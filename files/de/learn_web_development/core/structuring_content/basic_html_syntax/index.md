---
title: Grundlegende HTML-Syntax
slug: Learn_web_development/Core/Structuring_content/Basic_HTML_syntax
l10n:
  sourceCommit: 90e419a0ec9741f35bc564beb90e74210bc4c97a
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}

In diesem Artikel behandeln wir die absoluten Grundlagen von HTML. Um Ihnen den Einstieg zu erleichtern, definiert dieser Artikel Elemente, Attribute und alle anderen wichtigen Begriffe, die Sie möglicherweise gehört haben. Er erklärt auch, wie diese in HTML passen. Sie werden lernen, wie HTML-Elemente strukturiert sind, wie eine typische HTML-Seite aufgebaut ist und welche anderen wichtigen grundlegenden Sprachmerkmale es gibt. Unterwegs gibt es auch die Möglichkeit, mit HTML zu experimentieren!

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
          <li>Der HTML-Körper und sein Zweck als Container für den Seiteninhalt.</li>
          <li>Was <a href="/de/docs/Glossary/Void_element">leere Elemente</a> sind und wie sie sich von anderen Elementen unterscheiden.</li>
          <li>Die Notwendigkeit eines Doctypes am Anfang von HTML-Dokumenten, seinen ursprünglich beabsichtigten Zweck und die Tatsache, dass er jetzt eher ein historisches Artefakt ist.</li>
          <li>Das Verständnis, dass HTML korrekt geschachtelt werden muss.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist HTML?

{{Glossary("HTML", "HTML")}} (HyperText Markup Language) ist eine _Auszeichnungssprache_, die Webbrowsern mitteilt, wie sie die Webseiten, die Sie besuchen, strukturieren sollen. Es kann so kompliziert oder so einfach sein, wie es der Webentwickler wünscht. HTML besteht aus einer Reihe von {{Glossary("Element", "Elementen")}}, die Sie verwenden, um verschiedene Teile des Inhalts einzuschließen, zu umhüllen oder zu _markieren_, damit sie auf eine bestimmte Weise erscheinen oder funktionieren. Die einschließenden {{Glossary("Tag", "Tags")}} können Inhalte in einen Hyperlink umwandeln, um eine Verbindung zu einer anderen Seite herzustellen, Wörter kursiv setzen und so weiter. Betrachten Sie zum Beispiel die folgende Textzeile:

```plain
My cat is very grumpy
```

Wenn wir möchten, dass der Text für sich alleine steht, könnten wir ihn als Absatz kennzeichnen, indem wir ihn in ein Absatz- ({{htmlelement("p")}}) Element einschließen:

```html
<p>My cat is very grumpy</p>
```

HTML befindet sich in Textdateien, die **HTML-Dokumente** oder einfach **Dokumente** genannt werden, mit der Dateierweiterung `.html`. Wo wir zuvor über Webseiten gesprochen haben, enthält ein HTML-Dokument den Inhalt der Webseite und spezifiziert deren Struktur.

Die gebräuchlichste HTML-Datei, die Sie antreffen werden, ist `index.html`, die in der Regel dazu verwendet wird, den Inhalt der Startseite einer Website zu enthalten. Es ist auch üblich, Unterordner mit ihrem eigenen `index.html` zu sehen, sodass eine Website mehrere Indexdateien an verschiedenen Orten haben kann.

> [!NOTE]
> Tags in HTML sind nicht case-sensitiv. Das bedeutet, sie können in Groß- oder Kleinschreibung geschrieben werden. Zum Beispiel könnte ein {{htmlelement("title")}} Tag als `<title>`, `<TITLE>`, `<Title>`, `<TiTlE>`, etc., geschrieben werden, und es wird funktionieren. Es ist jedoch eine bewährte Praxis, alle Tags in Kleinbuchstaben zu schreiben, um Konsistenz und Lesbarkeit zu gewährleisten.

## Anatomie eines HTML-Elements

Lassen Sie uns unser Absatz-Element aus dem vorherigen Abschnitt näher betrachten:

![Ein Beispielcodeausschnitt, der die Struktur eines HTML-Elements zeigt: <p> Meine Katze ist sehr schlecht gelaunt </p>.](grumpy-cat-small.png)

Die Anatomie unseres Elements ist:

- **Das öffnende Tag:** Dies besteht aus dem Namen des Elements (in diesem Beispiel _p_ für Absatz), eingeschlossen in öffnende und schließende spitze Klammern. Dieses öffnende Tag markiert, wo das Element beginnt oder in Kraft tritt. In diesem Beispiel geht es dem Text des Absatzes voraus.
- **Der Inhalt:** Dies ist der Inhalt des Elements. In diesem Beispiel ist es der Text des Absatzes.
- **Das schließende Tag:** Dies ist dasselbe wie das öffnende Tag, außer dass es einen Schrägstrich vor dem Elementnamen enthält. Es markiert, wo das Element endet. Das Auslassen eines schließenden Tags ist ein häufiger Anfängerfehler, der eigenartige Ergebnisse produzieren kann.

Das Element besteht aus dem öffnenden Tag, gefolgt von Inhalt, gefolgt vom schließenden Tag.

### Aktives Lernen: Ihr erstes HTML-Element erstellen

Bearbeiten Sie die folgende Zeile im Bereich "Editierbarer Code", indem Sie sie mit den Tags `<em>` und `</em>` umschließen. Um das Element zu _öffnen_, setzen Sie das öffnende Tag `<em>` am Anfang der Zeile. Um das Element zu _schließen_, setzen Sie das schließende Tag `</em>` am Ende der Zeile. Dadurch sollte der Text kursiv formatiert werden! Sehen Sie Ihre Änderungen live im Bereich _Ausgabe_.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der Schaltfläche _Zurücksetzen_ löschen. Wenn Sie wirklich nicht weiterkommen, drücken Sie die Schaltfläche _Lösung anzeigen_, um die Antwort zu sehen.

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

### Schachtelung von Elementen

Elemente können innerhalb anderer Elemente platziert werden. Dies wird _Schachtelung_ genannt. Wenn wir sagen möchten, dass unsere Katze **sehr** schlecht gelaunt ist, könnten wir das Wort _sehr_ in ein {{htmlelement("strong")}} Element umschließen, was bedeutet, dass das Wort eine stärkere Textformatierung haben soll:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

Es gibt einen richtigen und einen falschen Weg, Schachtelung zu machen. Im obigen Beispiel haben wir zuerst das `p` Element geöffnet und dann das `strong` Element. Für eine ordnungsgemäße Schachtelung sollten wir das `strong` Element zuerst schließen, bevor wir das `p` schließen.

Folgendes ist ein Beispiel für die _falsche_ Art der Schachtelung:

```html-nolint example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

**Die Tags müssen sich so öffnen und schließen, dass sie ineinander oder außerhalb voneinander liegen.** Bei der Art von Überlappung im obigen Beispiel muss der Browser Ihre Absicht erraten. Dieses Erraten kann zu unerwarteten Ergebnissen führen.

### Leere Elemente

Nicht alle Elemente folgen dem Muster eines öffnenden Tags, Inhalts und eines schließenden Tags. Einige Elemente bestehen aus einem einzigen Tag, das typischerweise dazu verwendet wird, etwas in das Dokument einzufügen/zu embedden. Solche Elemente nennt man {{Glossary("void_element", "leere Elemente")}}. Zum Beispiel bettet das {{htmlelement("img")}} Element eine Bilddatei auf einer Seite ein:

```html
<img
  src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"
  alt="Firefox icon" />
```

Dies würde folgendes ausgeben:

{{ EmbedLiveSample('Void_elements', 700, 300, "", "") }}

> [!NOTE]
> In HTML ist es nicht erforderlich, am Ende des Tags eines leeren Elements ein `/` hinzuzufügen, zum Beispiel: `<img src="images/cat.jpg" alt="cat" />`. Es ist jedoch auch eine gültige Syntax, und Sie können dies tun, wenn Sie möchten, dass Ihr HTML gültiges XML ist.

## Attribute

Elemente können auch Attribute haben. Attribute sehen so aus:

![Absatztag mit 'class="editor-note"' Attribut hervorgehoben](grumpy-cat-attribute-small.png)

Attribute enthalten zusätzliche Informationen über das Element, die im Inhalt nicht erscheinen. In diesem Beispiel ist das **`class`** Attribut ein identifizierender Name, der dazu verwendet wird, das Element mit Stilinformationen zu versehen.

Ein Attribut sollte haben:

- Ein Leerzeichen zwischen ihm und dem Elementname. (Für ein Element mit mehr als einem Attribut sollten die Attribute ebenfalls durch Leerzeichen getrennt werden.)
- Den Attributnamen, gefolgt von einem Gleichheitszeichen.
- Einen Attributwert, umschlossen mit öffnenden und schließenden Anführungszeichen.

### Aktives Lernen: Attribute zu einem Element hinzufügen

Das `<img>` Element kann eine Reihe von Attributen haben, einschließlich:

- `src`
  - : Das `src` Attribut ist ein **erforderliches** Attribut, das den Speicherort des Bildes angibt. Zum Beispiel: `src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"`.
- `alt`
  - : Das `alt` Attribut spezifziert eine Textbeschreibung des Bildes. Zum Beispiel: `alt="Das Firefox-Symbol"`.
- `width`
  - : Das `width` Attribut gibt die Breite des Bildes an, wobei die Einheit Pixel ist. Zum Beispiel: `width="300"`.
- `height`
  - : Das `height` Attribut gibt die Höhe des Bildes an, wobei die Einheit Pixel ist. Zum Beispiel: `height="300"`.

Bearbeiten Sie die folgende Zeile im Bereich _Eingabe_, um sie in ein Bild zu verwandeln.

1. Finden Sie Ihr Lieblingsbild online, klicken Sie mit der rechten Maustaste darauf und drücken Sie _Bildlink / Bildadresse kopieren_.
2. Fügen Sie im Bereich unten das `src` Attribut hinzu und füllen Sie es mit dem Link aus Schritt 1 aus.
3. Setzen Sie das `alt` Attribut.
4. Fügen Sie die Attribute `width` und `height` hinzu.

Sie können Ihre Änderungen live im Bereich _Ausgabe_ sehen.

Wenn Sie einen Fehler machen, können Sie es immer mit der Schaltfläche _Zurücksetzen_ zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie die Schaltfläche _Lösung anzeigen_, um die Antwort zu sehen.

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

### Boolean-Attribute

Manchmal werden Sie sehen, dass Attribute ohne Werte geschrieben werden. Dies ist völlig akzeptabel. Diese werden {{Glossary("Boolean/HTML", "Boolean-Attribute")}} genannt. Wenn ein Boolean-Attribut ohne Wert oder mit irgendeinem Wert geschrieben wird, selbst wie `"false"`, wird das Boolean-Attribut immer auf true gesetzt. Ansonsten, wenn das Attribut nicht in einem HTML-Tag geschrieben ist, wird das Attribut auf false gesetzt. Die Spezifikation erfordert, dass der Attributwert entweder der leere String ist (einschließlich wenn das Attribut keinen explizit angegebenen Wert hat) oder derselbe wie der Attributname, aber andere Werte funktionieren gleich. Zum Beispiel betrachten Sie das [`disabled`](/de/docs/Web/HTML/Element/input#disabled) Attribut, das Sie Formulareingabeelementen zuweisen können. (Sie verwenden dies, um die Formulareingabeelemente zu _deaktivieren_, sodass der Benutzer keine Eingaben machen kann. Die deaktivierten Elemente haben typischerweise ein ausgegraut Aussehen.) Zum Beispiel:

```html
<input type="text" disabled="disabled" />
```

Kurzgefasst ist es akzeptabel, dies wie folgt zu schreiben:

```html
<!-- using the disabled attribute prevents the end user from entering text into the input box -->
<input type="text" disabled />

<!-- text input is allowed, as it doesn't contain the disabled attribute -->
<input type="text" />
```

Zur Referenz enthält das obige Beispiel auch ein nicht deaktiviertes Formulareingabeelement. Der HTML-Code aus dem obigen Beispiel ergibt dieses Ergebnis:

{{ EmbedLiveSample('Boolean_attributes', 700, 100, "", "") }}

### Auslassen von Anführungszeichen um Attributwerte

Wenn Sie sich den Code vieler anderer Seiten ansehen, stoßen Sie möglicherweise auf eine Reihe seltsamer Auszeichnungsstile, einschließlich Attributwerten ohne Anführungszeichen. Dies ist unter bestimmten Umständen erlaubt, kann aber auch an anderer Stelle Ihre Auszeichnung zerstören. Das Element im Codeausschnitt unten, `<a>`, nennt man Anker. Anker umschließen Text und verwandeln ihn in Links. Das `href` Attribut gibt die Webadresse an, auf die der Link zeigt. Sie können diese Grundversion unten mit _nur_ dem `href` Attribut so schreiben:

```html
<a href=https://www.mozilla.org/>favorite website</a>
```

Anker können auch ein `title` Attribut haben, eine Beschreibung der verlinkten Seite. Sobald wir jedoch das `title` auf die gleiche Weise wie das `href` Attribut hinzufügen, gibt es Probleme:

```html-nolint example-bad
<a href=https://www.mozilla.org/ title=The Mozilla homepage>favorite website</a>
```

Wie oben geschrieben, missinterpretiert der Browser das Markup, indem er das `title` Attribut für drei Attribute hält: ein `title` Attribut mit dem Wert `The` und zwei Boolean-Attribute, `Mozilla` und `homepage`. Offensichtlich ist dies nicht beabsichtigt! Es wird zu Fehlern oder unerwartetem Verhalten führen, wie Sie im folgenden Live-Beispiel sehen können. Versuchen Sie, über den Link zu schweben, um den Titeltext zu sehen!

{{ EmbedLiveSample('Omitting_quotes_around_attribute_values', 700, 100, "", "") }}

Schließen Sie immer die Attribut-Anführungszeichen ein. Es verhindert solche Probleme und führt zu lesbarerem Code.

### Einfache oder doppelte Anführungszeichen?

In diesem Artikel werden Sie auch bemerken, dass die Attribute in doppelte Anführungszeichen eingeschlossen sind. Sie könnten jedoch in einigen HTML-Codes einfache Anführungszeichen sehen. Dies ist eine Stilfrage. Sie können wählen, welche Sie bevorzugen. Beide dieser Zeilen sind gleichwertig:

```html-nolint
<a href='https://www.example.com'>A link to my example.</a>

<a href="https://www.example.com">A link to my example.</a>
```

Stellen Sie sicher, dass Sie einfache und doppelte Anführungszeichen nicht vermischen. Dieses Beispiel (unten) zeigt eine Art von Mischung von Anführungszeichen, die schiefgehen wird:

```html-nolint example-bad
<a href="https://www.example.com'>A link to my example.</a>
```

Wenn Sie jedoch eine Art von Anführungszeichen verwenden, können Sie die andere Art von Anführungszeichen _innerhalb_ Ihrer Attributwerte einschließen:

```html
<a href="https://www.example.com" title="Isn't this fun?">
  A link to my example.
</a>
```

Um Anführungszeichen innerhalb anderer Anführungszeichen desselben Typs (einfache oder doppelte) zu verwenden, verwenden Sie {{Glossary("character_reference", "Zeichenreferenzen")}}.
Zum Beispiel, dies wird nicht funktionieren:

```html-nolint example-bad
<a href="https://www.example.com" title="An "interesting" reference">A link to my example.</a>
```

Stattdessen müssen Sie dies tun:

```html-nolint
<a href="https://www.example.com" title="An &quot;interesting&quot; reference">A link to my example.</a>
```

## Anatomie eines HTML-Dokuments

Einzelne HTML-Elemente sind für sich genommen nicht sehr nützlich. Lassen Sie uns als Nächstes untersuchen, wie einzelne Elemente kombiniert werden, um eine gesamte HTML-Seite zu bilden:

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

1. `<!doctype html>`: Der Doctype. Als HTML jung war (1991-1992), sollten Doctypes als Links zu einem Satz von Regeln fungieren, die die HTML-Seite befolgen musste, um als gutes HTML angesehen zu werden. Doctypes sahen früher so aus:

   ```html
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   ```

   In jüngerer Zeit ist der Doctype ein historisches Artefakt, das hinzugefügt werden muss, damit alles andere richtig funktioniert. `<!doctype html>` ist die kürzeste Zeichenkette, die als gültiger Doctype zählt. Das ist alles, was Sie wissen müssen!

2. `<html></html>`: Das {{htmlelement("html")}} Element. Dieses Element umschließt den gesamten Inhalt auf der Seite. Es wird manchmal als Root-Element bezeichnet.
3. `<head></head>`: Das {{htmlelement("head")}} Element. Dieses Element fungiert als Container für alles, was Sie in die HTML-Seite aufnehmen möchten, **das nicht der Inhalt** ist, den die Seite den Betrachtern zeigt. Dazu gehören Schlüsselwörter und eine Seitenbeschreibung, die in Suchergebnissen erscheinen würden, CSS zur Stilgebung von Inhalten, Zeichensatzdeklarationen und mehr. Darüber erfahren Sie mehr im nächsten Artikel dieser Reihe.
4. `<meta charset="utf-8">`: Das {{htmlelement("meta")}} Element. Dieses Element stellt Metadaten dar, die nicht durch andere HTML-Metadatenelemente dargestellt werden können, wie {{htmlelement("base")}}, {{htmlelement("link")}}, {{htmlelement("script")}}, {{htmlelement("style")}} oder {{htmlelement("title")}}. Das [`charset`](/de/docs/Web/HTML/Element/meta#charset) Attribut legt die Zeichencodierung Ihres Dokuments als UTF-8 fest, das die meisten Zeichen aus der überwiegenden Mehrheit der menschlichen Schriftsysteme umfasst. Mit dieser Einstellung kann die Seite jetzt jeden Textinhalt verarbeiten, den sie eventuell enthält. Es gibt keinen Grund, dies nicht einzustellen, und es kann helfen, einige Probleme später zu vermeiden.
5. `<title></title>`: Das {{htmlelement("title")}} Element. Dies legt den Titel der Seite fest, der der Titel ist, der im Browser-Tab erscheint, in dem die Seite geladen wird. Der Seitentitel wird auch verwendet, um die Seite zu beschreiben, wenn sie als Lesezeichen gespeichert wird.
6. `<body></body>`: Das {{htmlelement("body")}} Element. Dieses enthält _alle_ Inhalte, die auf der Seite angezeigt werden, einschließlich Text, Bilder, Videos, Spiele, abspielbare Audiospuren oder was auch immer.

### Aktives Lernen: Hinzufügen von Funktionen zu einem HTML-Dokument

Wenn Sie auf Ihrem lokalen Computer experimentieren möchten, indem Sie etwas HTML schreiben, können Sie:

1. Kopieren Sie das oben aufgelistete HTML-Seitenbeispiel.
2. Erstellen Sie eine neue Datei in Ihrem Texteditor.
3. Fügen Sie den Code in die neue Textdatei ein.
4. Speichern Sie die Datei als `index.html`.

> [!NOTE]
> Sie können diese Basis-HTML-Vorlage auch im [MDN Learning Area GitHub-Repo](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) finden.

Jetzt können Sie diese Datei in einem Webbrowser öffnen, um zu sehen, wie der gerenderte Code aussieht. Bearbeiten Sie den Code und aktualisieren Sie den Browser, um das Ergebnis zu sehen. Zunächst sieht die Seite so aus:

![Eine einfache HTML-Seite, die sagt: Dies ist meine Seite](template-screenshot.png)

In dieser Übung können Sie den Code lokal auf Ihrem Computer bearbeiten, wie zuvor beschrieben, oder Sie können ihn im Beispiel-Fenster unten bearbeiten (das editierbare Beispiel-Fenster stellt nur den Inhalt des {{htmlelement("body")}} Elements dar, in diesem Fall). Schärfen Sie Ihre Fähigkeiten, indem Sie die folgenden Aufgaben ausführen:

- Fügen Sie direkt unterhalb des öffnenden Tags des {{htmlelement("body")}} Elements einen Haupttitel für das Dokument hinzu. Dieser sollte innerhalb eines `<h1>` öffnenden Tags und eines `</h1>` schließenden Tags eingeschlossen werden.
- Bearbeiten Sie den Absatzinhalt, um einen Text über ein Thema hinzufügen, das Sie interessant finden.
- Lassen Sie wichtige Wörter fett hervorgehoben erscheinen, indem Sie sie in ein `<strong>` öffnendes Tag und ein `</strong>` schließendes Tag einschließen.
- Fügen Sie Ihrem Absatz einen Link hinzu, wie früher im Artikel [erklärt](#active_learning_adding_attributes_to_an_element).
- Fügen Sie Ihrem Dokument ein Bild hinzu. Platzieren Sie es unterhalb des Absatzes, wie vorher im Artikel [erklärt](#leere_elemente). Verdienen Sie Bonuspunkte, wenn es Ihnen gelingt, ein anderes Bild zu verlinken (entweder lokal auf Ihrem Computer oder von irgendwo anders im Web).

Wenn Sie einen Fehler machen, können Sie es immer mit der Schaltfläche _Zurücksetzen_ zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie die Schaltfläche _Lösung anzeigen_, um die Antwort zu sehen.

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
  '<h1>Some music</h1><p>I really enjoy <strong>playing the drums</strong>. One of my favorite drummers is Neal Peart, who plays in the band <a href="https://en.wikipedia.org/wiki/Rush_%28band%29" title="Rush Wikipedia article">Rush</a>. My favorite Rush album is currently <a href="http://www.deezer.com/album/942295">Moving Pictures</a>.</p> <img src="http://www.cygnus-x1.net/links/rush/images/albums/sectors/sector2-movingpictures-cover-s.jpg" alt="Rush Moving Pictures album cover">';
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

In den obigen Beispielen haben Sie möglicherweise bemerkt, dass viel Leerzeichen im Code enthalten ist. Dies ist optional. Diese beiden Codeschnipsel sind gleichwertig:

```html-nolint
<p id="noWhitespace">Dogs are silly.</p>

<p id="whitespace">Dogs
    are
        silly.</p>
```

Egal, wie viel Leerzeichen Sie innerhalb von HTML-Elementinhalten verwenden (was ein oder mehrere Leerzeichen, aber auch Zeilenumbrüche umfassen kann), reduziert der HTML-Parser jede Leerzeichensequenz auf ein einzelnes Leerzeichen, wenn der Code gerendert wird. Warum dann so viel Leerzeichen verwenden? Die Antwort ist Lesbarkeit.

Es kann einfacher sein zu verstehen, was in Ihrem Code vor sich geht, wenn er schön formatiert ist. In unserem HTML haben wir jedes verschachtelte Element um zwei Leerzeichen mehr eingerückt als das, in dem es sich befindet. Es liegt an Ihnen, den Stil der Formatierung zu wählen (wie viele Leerzeichen für jede Ebene der Einrückung, zum Beispiel), aber Sie sollten überlegen, ihn zu formatieren.

Lassen Sie uns einen Blick darauf werfen, wie der Browser die beiden Absätze oben mit und ohne Leerzeichen rendert:

{{ EmbedLiveSample('Whitespace_in_HTML', 700, 100) }}

> [!NOTE]
> Der Zugriff auf die [innerHTML](/de/docs/Web/API/Element/innerHTML) von Elementen aus JavaScript behält das gesamte Leerzeichen bei.
> Dies kann unerwartete Ergebnisse zurückgeben, wenn das Leerzeichen vom Browser gekürzt wird.

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

## Zeichenreferenzen: Inklusive spezieller Zeichen in HTML

In HTML sind die Zeichen `<`, `>`, `"`, `'` und `&` spezielle Zeichen. Sie sind Bestandteil der HTML-Syntax selbst. Wie schließt man eines dieser speziellen Zeichen in seinen Text ein? Zum Beispiel, wenn Sie ein Kaufmannsund oder ein Kleiner-als-Zeichen verwenden möchten, ohne dass es als Code interpretiert wird.

Sie tun dies mit {{Glossary("character_reference", "Zeichenreferenzen")}}. Dies sind spezielle Codes, die Zeichen repräsentieren sollen, welche in genau diesen Fällen verwendet werden. Jede Zeichenreferenz beginnt mit einem Kaufmannsund (&) und endet mit einem Semikolon (;).

| Wörtliche Zeichen | Entsprechende Zeichenreferenz |
| ----------------- | ----------------------------- |
| <                 | `&lt;`                        |
| >                 | `&gt;`                        |
| "                 | `&quot;`                      |
| '                 | `&apos;`                      |
| &                 | `&amp;`                       |

Die entsprechende Zeichenreferenz könnte leicht gemerkt werden, weil der Text, den sie verwendet, als weniger als für `&lt;`, Anführungszeichen für `&quot;` und ähnlich für andere gesehen werden kann. Um mehr über Referenzen von Entitäten zu erfahren, siehe [Liste von XML- und HTML-Zeichenreferenzen](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references) (Wikipedia).

Im Beispiel unten gibt es zwei Absätze:

```html-nolint
<p>In HTML, you define a paragraph using the <p> element.</p>

<p>In HTML, you define a paragraph using the &lt;p&gt; element.</p>
```

Im folgenden Live-Ausgang können Sie sehen, dass der erste Absatz schiefgegangen ist. Der Browser interpretiert die zweite Instanz `<p>` als Beginn eines neuen Absatzes. Der zweite Absatz sieht gut aus, weil er Zeichenreferenzen mit Winkelklammern hat.

{{ EmbedLiveSample('Entity_references_Including_special_characters_in_HTML', 700, 200, "", "") }}

> [!NOTE]
> Sie müssen keine Referenzen für Entitäten für andere Symbole verwenden, da moderne Browser die tatsächlichen Symbole ohne Probleme interpretieren, so lange Ihr HTML's [Zeichencodierung auf UTF-8 eingestellt ist](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#specifying_your_documents_character_encoding).

## HTML-Kommentare

HTML bietet einen Mechanismus zum Schreiben von Kommentaren in den Code. Browser ignorieren Kommentare, wodurch Kommentare für den Benutzer effektiv unsichtbar sind. Der Zweck von Kommentaren besteht darin, Ihnen die Möglichkeit zu geben, Notizen im Code hinzuzufügen, um Ihre Logik oder Codierung zu erklären. Dies ist sehr nützlich, wenn Sie nach einer längeren Abwesenheit zu einem Codebase zurückkehren, sodass Sie es nicht mehr vollständig erinnern können. Ebenso sind Kommentare von unschätzbarem Wert, wenn verschiedene Personen Änderungen und Aktualisierungen vornehmen.

Um einen HTML-Kommentar zu schreiben, wickeln Sie ihn in die speziellen Marker `<!--` und `-->` ein. Zum Beispiel:

```html
<p>I'm not inside a comment</p>

<!-- <p>I am!</p> -->
```

Wie Sie unten sehen können, wird nur der erste Absatz in der Live-Ausgabe angezeigt.

{{ EmbedLiveSample('HTML_comments', 700, 100, "", "") }}

## Zusammenfassung

Sie haben es bis zum Ende des Artikels geschafft! Wir hoffen, dass Ihnen Ihr Rundgang über die Grundlagen von HTML gefallen hat.

An diesem Punkt sollten Sie verstehen, wie HTML aussieht und wie es auf grundlegender Ebene funktioniert. Sie sollten auch in der Lage sein, einige Elemente und Attribute zu schreiben. Die folgenden Artikel dieses Moduls vertiefen einige der hier eingeführten Themen und präsentieren weitere Konzepte der Sprache.

- Während Sie beginnen, mehr über HTML zu lernen, sollten Sie die Grundlagen von CSS (Cascading Style Sheets) kennenlernen. [CSS](/de/docs/Learn_web_development/Core/Styling_basics) ist die Sprache, die zum Stylen von Webseiten verwendet wird, wie zum Beispiel zum Ändern von Schriftarten oder Farben oder zum Ändern des Seitenlayouts. HTML und CSS funktionieren gut zusammen, wie Sie bald entdecken werden.

## Siehe auch

- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}
