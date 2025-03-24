---
title: Grundlegende HTML-Syntax
slug: Learn_web_development/Core/Structuring_content/Basic_HTML_syntax
l10n:
  sourceCommit: 8202af1cfa2d23a6f8fd79dbd4662d2d016f6936
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}

In diesem Artikel behandeln wir die absoluten Grundlagen von HTML. Um Ihnen den Einstieg zu erleichtern, definiert dieser Artikel Elemente, Attribute und alle anderen wichtigen Begriffe, die Sie vielleicht gehört haben. Außerdem wird erklärt, wo diese in HTML passen. Sie werden lernen, wie HTML-Elemente aufgebaut sind, wie eine typische HTML-Seite strukturiert ist und andere wichtige grundlegende Sprachermerkmale. Auf dem Weg wird es auch eine Gelegenheit geben, mit HTML zu experimentieren!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Grundlegende Software installiert</a> und Grundkenntnisse im <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">Umgang mit Dateien</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Anatomie eines HTML-Elements — Element, öffnendes Tag, Inhalt, schließendes Tag, Attribute.</li>
          <li>Der HTML-Body und seine Funktion als Container für den Seiteninhalt.</li>
          <li>Was <a href="/de/docs/Glossary/Void_element">leere Elemente</a> (auch bekannt als Void-Elemente) sind und wie sie sich von anderen Elementen unterscheiden.</li>
          <li>Die Notwendigkeit eines Doctypes am Anfang von HTML-Dokumenten. Sein ursprünglich beabsichtigter Zweck und die Tatsache, dass er mittlerweile ein historisches Relikt ist.</li>
          <li>Verständnis dafür, dass HTML korrekt verschachtelt werden muss.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist HTML?

{{Glossary("HTML", "HTML")}} (HyperText Markup Language) ist eine _Markup-Sprache_, die Webbrowsern mitteilt, wie die Webseiten, die Sie besuchen, strukturiert werden sollen. Sie kann so kompliziert oder so einfach sein, wie es der Webentwickler möchte. HTML besteht aus einer Reihe von {{Glossary("Element", "Elementen")}}, die Sie verwenden, um verschiedene Teile von Inhalten zu umschließen, einzuwickeln oder _aufzuzeichnen_, um sie auf eine bestimmte Weise erscheinen oder funktionieren zu lassen. Die umschließenden {{Glossary("Tag", "Tags")}} können Inhalte in einen Hyperlink verwandeln, um zu einer anderen Seite zu verlinken, Wörter kursiv zu machen usw. Zum Beispiel, betrachten Sie die folgende Textzeile:

```plain
My cat is very grumpy
```

Wenn wir möchten, dass der Text für sich allein steht, könnten wir angeben, dass es sich um einen Absatz handelt, indem wir ihn in ein Absatz-({{htmlelement("p")}})-Element einschließen:

```html
<p>My cat is very grumpy</p>
```

HTML befindet sich in Textdateien, die als **HTML-Dokumente** oder einfach **Dokumente** bezeichnet werden und die Dateierweiterung `.html` besitzen. Wo wir zuvor von Webseiten gesprochen haben, enthält ein HTML-Dokument den Inhalt der Webseite und legt ihre Struktur fest.

Die häufigste HTML-Datei, auf die Sie stoßen werden, ist `index.html`, die im Allgemeinen verwendet wird, um den Inhalt der Startseite einer Website zu enthalten. Es ist auch üblich, Unterverzeichnisse mit ihrem eigenen `index.html` zu sehen, sodass eine Website mehrere Indexdateien an verschiedenen Stellen haben kann.

> [!NOTE]
> Tags in HTML sind nicht case-sensitiv. Das bedeutet, dass sie in Groß- oder Kleinbuchstaben geschrieben werden können. Zum Beispiel könnte ein {{htmlelement("title")}}-Tag als `<title>`, `<TITLE>`, `<Title>`, `<TiTlE>` usw. geschrieben werden, und es würde funktionieren. Es ist jedoch am besten, alle Tags in Kleinbuchstaben zu schreiben, um Konsistenz und Lesbarkeit zu gewährleisten.

## Anatomie eines HTML-Elements

Lassen Sie uns unser Absatz-Element aus dem vorherigen Abschnitt näher betrachten:

![Ein Beispielcode-Snippet, das die Struktur eines HTML-Elements demonstriert.<p> Meine Katze ist sehr mürrisch </p>.](grumpy-cat-small.png)

Die Anatomie unseres Elements ist:

- **Das öffnende Tag:** Dieses besteht aus dem Namen des Elements (in diesem Beispiel _p_ für Absatz), umschlossen von öffnenden und schließenden spitzen Klammern. Dieses öffnende Tag markiert, wo das Element beginnt oder zu wirken beginnt. In diesem Beispiel steht es vor dem Beginn des Absatztextes.
- **Der Inhalt:** Dies ist der Inhalt des Elements. In diesem Beispiel ist es der Absatztext.
- **Das schließende Tag:** Dies ist dasselbe wie das öffnende Tag, außer dass es einen Schrägstrich vor dem Elementnamen enthält. Dies markiert, wo das Element endet. Das Fehlen eines schließenden Tags ist ein häufiger Anfängerfehler, der seltsame Ergebnisse produzieren kann.

Das Element ist das öffnende Tag, gefolgt vom Inhalt, gefolgt vom schließenden Tag.

### Aktives Lernen: Ihr erstes HTML-Element erstellen

Bearbeiten Sie die Zeile unten im Bereich "Editierbarer Code", indem Sie sie mit den Tags `<em>` und `</em>` umschließen. Um das Element zu _öffnen_, setzen Sie das öffnende Tag `<em>` am Anfang der Zeile. Um das Element zu _schließen_, setzen Sie das schließende Tag `</em>` am Ende der Zeile. Dadurch sollte der Zeile eine kursiv geschriebene Textformatierung gegeben werden! Sehen Sie Ihre Änderungen live im Bereich _Ausgabe_ aktualisiert.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der Schaltfläche _Zurücksetzen_ löschen. Wenn Sie wirklich feststecken, drücken Sie die Schaltfläche _Lösung anzeigen_, um die Antwort zu sehen.

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

Elemente können innerhalb anderer Elemente platziert werden. Dies wird als _Verschachtelung_ bezeichnet. Wenn wir sagen wollten, dass unsere Katze **sehr** mürrisch ist, könnten wir das Wort _sehr_ in ein {{htmlelement("strong")}}-Element einfügen, was bedeutet, dass das Wort eine stärkere Textformatierung haben soll:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

Es gibt eine richtige und eine falsche Art zu verschachteln. Im obigen Beispiel haben wir das `p`-Element zuerst geöffnet, dann das `strong`-Element. Für eine ordnungsgemäße Verschachtelung sollten wir das `strong`-Element zuerst schließen, bevor wir das `p` schließen.

Das folgende ist ein Beispiel für die _falsche_ Art zu verschachteln:

```html-nolint example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

Die **Tags müssen so geöffnet und geschlossen werden, dass sie innerhalb oder außerhalb voneinander liegen**. Bei der Art von Überlappung im obigen Beispiel muss der Browser Ihre Absicht erraten. Diese Art des Ratens kann zu unerwarteten Ergebnissen führen.

### Leere Elemente

Nicht alle Elemente folgen dem Muster eines öffnenden Tags, Inhalts und eines schließenden Tags. Einige Elemente bestehen aus einem einzigen Tag, das typischerweise verwendet wird, um etwas in das Dokument einzufügen/einzubetten. Solche Elemente werden {{Glossary("void_element", "leere Elemente")}} genannt. Zum Beispiel bettet das {{htmlelement("img")}}-Element eine Bilddatei in eine Seite ein:

```html
<img
  src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"
  alt="Firefox icon" />
```

Dies würde das folgende ausgeben:

{{ EmbedLiveSample('Void_elements', 700, 300, "", "") }}

> [!NOTE]
> In HTML ist es nicht erforderlich, ein `/` am Ende eines leeren Elements zu setzen, zum Beispiel: `<img src="images/cat.jpg" alt="cat" />`. Es ist jedoch auch eine gültige Syntax und Sie können dies tun, wenn Sie möchten, dass Ihr HTML valides XML ist.

## Attribute

Elemente können auch Attribute haben. Attribute sehen so aus:

![Absatz-Tag mit hervorgehobenem 'class="editor-note"' Attribut](grumpy-cat-attribute-small.png)

Attribute enthalten zusätzliche Informationen über das Element, die im Inhalt nicht angezeigt werden. In diesem Beispiel ist das **`class`**-Attribut ein identifizierender Name, der verwendet wird, um das Element mit Stilinformationen anzusprechen.

Ein Attribut sollte haben:

- Einen Abstand zwischen dem Attribut und dem Elementnamen. (Bei einem Element mit mehr als einem Attribut sollten die Attribute ebenfalls durch Leerzeichen getrennt werden.)
- Den Attributnamen, gefolgt von einem Gleichheitszeichen.
- Einen Attributwert, umschlossen von öffnenden und schließenden Anführungszeichen.

### Aktives Lernen: Attribute zu einem Element hinzufügen

Das `<img>`-Element kann eine Reihe von Attributen aufnehmen, darunter:

- `src`
  - : Das `src`-Attribut ist ein **erforderliches** Attribut, das den Speicherort des Bildes angibt. Zum Beispiel: `src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"`.
- `alt`
  - : Das `alt`-Attribut gibt eine Textbeschreibung des Bildes an. Zum Beispiel: `alt="Das Firefox-Symbol"`.
- `width`
  - : Das `width`-Attribut gibt die Breite des Bildes an, wobei die Einheit Pixel ist. Zum Beispiel: `width="300"`.
- `height`
  - : Das `height`-Attribut gibt die Höhe des Bildes an, wobei die Einheit Pixel ist. Zum Beispiel: `height="300"`.

Bearbeiten Sie die Zeile unten im _Eingabebereich_, um sie in ein Bild zu verwandeln.

1. Finden Sie Ihr Lieblingsbild online, klicken Sie mit der rechten Maustaste darauf, und drücken Sie _Bildlink/-adresse kopieren_.
2. Fügen Sie im Bereich unten das `src`-Attribut hinzu und füllen Sie es mit dem Link aus Schritt 1.
3. Setzen Sie das `alt`-Attribut.
4. Fügen Sie die Attribute `width` und `height` hinzu.

Sie werden Ihre Änderungen live im _Ausgabebereich_ sehen können.

Wenn Sie einen Fehler machen, können Sie ihn immer mit der Schaltfläche _Zurücksetzen_ beheben. Wenn Sie wirklich feststecken, drücken Sie die Schaltfläche _Lösung anzeigen_, um die Antwort zu sehen.

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

Manchmal werden Attribute ohne Werte geschrieben. Dies ist völlig akzeptabel. Diese werden {{Glossary("Boolean/HTML", "boolesche Attribute")}} genannt. Wenn ein boolesches Attribut ohne Wert oder mit einem beliebigen Wert, auch wie `"false"`, geschrieben ist, wird das boolesche Attribut immer auf true gesetzt. Wenn das Attribut nicht in einem HTML-Tag geschrieben ist, wird das Attribut auf false gesetzt. Der Standard verlangt, dass der Attributwert entweder der leere String ist (einschließlich wenn das Attribut keinen explizit angegebenen Wert hat) oder derselbe wie der Attributname, aber andere Werte funktionieren genauso. Zum Beispiel betrachten Sie das [`disabled`](/de/docs/Web/HTML/Element/input#disabled)-Attribut, das Sie Formulareingabeelementen zuweisen können. (Sie verwenden dies, um die Formulareingabeelemente zu _deaktivieren_, damit der Benutzer keine Einträge machen kann. Die deaktivierten Elemente haben typischerweise ein ausgegrautes Erscheinungsbild.) Zum Beispiel:

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

Zum Vergleich enthält das obige Beispiel auch ein nicht deaktiviertes Formulareingabeelement. Das HTML aus dem obigen Beispiel erzeugt dieses Ergebnis:

{{ EmbedLiveSample('Boolean_attributes', 700, 100, "", "") }}

### Anführungszeichen um Attributwerte weglassen

Wenn Sie sich den Code für viele andere Websites ansehen, stoßen Sie möglicherweise auf eine Anzahl seltsamer Markup-Stile, einschließlich Attributwerten ohne Anführungszeichen. Dies ist unter bestimmten Umständen erlaubt, kann aber auch Ihr Markup in anderen Umständen beschädigen. Das Element im folgenden Code-Snippet, `<a>`, wird als Anker bezeichnet. Anker schließen Text ein und verwandeln ihn in Links. Das `href`-Attribut gibt die Webadresse an, auf die der Link verweist. Sie können diese grundlegende Version unten _nur_ mit dem `href`-Attribut, wie folgt, schreiben:

```html
<a href=https://www.mozilla.org/>favorite website</a>
```

Anker können auch ein `title`-Attribut haben, eine Beschreibung der verlinkten Seite. Sobald wir jedoch das `title` hinzufügen, auf dieselbe Weise wie das `href`-Attribut, gibt es Probleme:

```html-nolint example-bad
<a href=https://www.mozilla.org/ title=The Mozilla homepage>favorite website</a>
```

Wie oben geschrieben, missinterpretierte der Browser das Markup und hielt das `title`-Attribut für drei Attribute: ein `title`-Attribut mit dem Wert `The`, und zwei boolesche Attribute, `Mozilla` und `homepage`. Offensichtlich ist dies nicht beabsichtigt! Es wird Fehler oder unerwartetes Verhalten verursachen, wie Sie im Live-Beispiel unten sehen können. Versuchen Sie, über den Link zu schweben, um den Titeltext anzuzeigen!

{{ EmbedLiveSample('Omitting_quotes_around_attribute_values', 700, 100, "", "") }}

Fügen Sie immer die Anführungszeichen für Attribute hinzu. Es vermeidet solche Probleme und führt zu besser lesbarem Code.

### Einzel- oder doppelte Anführungszeichen?

In diesem Artikel werden Sie auch feststellen, dass die Attribute in doppelte Anführungszeichen gesetzt sind. Sie könnten jedoch auch auf Einzelanführungszeichen in manchen HTML-Codes stoßen. Dies ist eine Stilfrage. Sie können frei wählen, welche Sie bevorzugen. Diese beiden Zeilen sind äquivalent:

```html-nolint
<a href='https://www.example.com'>A link to my example.</a>

<a href="https://www.example.com">A link to my example.</a>
```

Stellen Sie sicher, dass Sie keine einfachen und doppelten Anführungszeichen mischen. Dieses Beispiel (unten) zeigt eine Art der Vermischung von Anführungszeichen, die schiefgehen wird:

```html-nolint example-bad
<a href="https://www.example.com'>A link to my example.</a>
```

Wenn Sie jedoch einen Typ von Anführungszeichen verwenden, können Sie den anderen Typ von Anführungszeichen _innerhalb_ Ihrer Attributwerte aufnehmen:

```html
<a href="https://www.example.com" title="Isn't this fun?">
  A link to my example.
</a>
```

Um Anführungszeichen innerhalb anderer Anführungszeichen desselben Typs (Einzel- oder Doppelanführungszeichen) zu verwenden, verwenden Sie {{Glossary("character_reference", "Zeichenreferenzen")}}. Zum Beispiel wird dies nicht funktionieren:

```html-nolint example-bad
<a href="https://www.example.com" title="An "interesting" reference">A link to my example.</a>
```

Stattdessen müssen Sie das tun:

```html-nolint
<a href="https://www.example.com" title="An &quot;interesting&quot; reference">A link to my example.</a>
```

## Anatomie eines HTML-Dokuments

Einzelne HTML-Elemente sind nicht sehr nützlich allein. Lassen Sie uns als nächstes untersuchen, wie einzelne Elemente kombiniert werden, um eine gesamte HTML-Seite zu bilden:

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

1. `<!doctype html>`: Der Doctype. Als HTML jung war (1991-1992), sollten Doctypes als Links zu einer Reihe von Regeln fungieren, denen die HTML-Seite folgen musste, um als gutes HTML zu gelten. Doctypes sahen früher so aus:

   ```html
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   ```

   In der neueren Zeit ist der Doctype ein historisches Erbe, das enthalten sein muss, damit alles andere richtig funktioniert. `<!doctype html>` ist die kürzeste Zeichenfolge, die als valider Doctype zählt. Das ist alles, was Sie wissen müssen!

2. `<html></html>`: Das {{htmlelement("html")}}-Element. Dieses Element umschließt den gesamten Inhalt auf der Seite. Es wird manchmal als das Wurzelelement bezeichnet.
3. `<head></head>`: Das {{htmlelement("head")}}-Element. Dieses Element fungiert als Container für alles, was Sie auf der HTML-Seite einbinden möchten, **das nicht den Inhalt** darstellt, den die Seite den Betrachtern anzeigen wird. Dazu gehören Schlüsselwörter und eine Seitenbeschreibung, die in Suchergebnissen erscheinen würden, CSS zur Gestaltung von Inhalten, Zeichensatzdeklarationen und mehr. In dem nächsten Artikel der Serie werden Sie mehr darüber erfahren.
4. `<meta charset="utf-8">`: Das {{htmlelement("meta")}}-Element. Dieses Element stellt Metadaten dar, die nicht durch andere HTML-Meta-Elemente wie {{htmlelement("base")}}, {{htmlelement("link")}}, {{htmlelement("script")}}, {{htmlelement("style")}} oder {{htmlelement("title")}} dargestellt werden können. Das [`charset`](/de/docs/Web/HTML/Element/meta#charset)-Attribut gibt die Zeichenkodierung für Ihr Dokument als UTF-8 an, das die meisten Zeichen aus der überwiegenden Mehrheit der geschriebenen Sprachen der Menschheit abdeckt. Mit dieser Einstellung kann die Seite nun jeden Textinhalt handhaben, den sie enthalten könnte. Es gibt keinen Grund, dies nicht zu setzen, und es kann helfen, später einige Probleme zu vermeiden.
5. `<title></title>`: Das {{htmlelement("title")}}-Element. Dies legt den Titel der Seite fest, der der Titel ist, der im Browser-Tab erscheint, in dem die Seite geladen ist. Der Seitentitel wird auch verwendet, um die Seite zu beschreiben, wenn sie in den Lesezeichen gespeichert wird.
6. `<body></body>`: Das {{htmlelement("body")}}-Element. Dieses enthält _alle_ Inhalte, die auf der Seite angezeigt werden, einschließlich Text, Bilder, Videos, Spiele, abspielbare Audiotracks oder was auch immer.

### Aktives Lernen: Einige Merkmale zu einem HTML-Dokument hinzufügen

Wenn Sie experimentieren und einige HTML auf Ihrem lokalen Computer schreiben möchten, können Sie:

1. Kopieren Sie das oben aufgeführte HTML-Seiten-Beispiel.
2. Erstellen Sie eine neue Datei in Ihrem Texteditor.
3. Fügen Sie den Code in die neue Textdatei ein.
4. Speichern Sie die Datei als `index.html`.

> [!NOTE]
> Sie können diese grundlegende HTML-Vorlage auch im [MDN Learning Area GitHub Repo](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) finden.

Jetzt können Sie diese Datei in einem Webbrowser öffnen, um zu sehen, wie der gerenderte Code aussieht. Bearbeiten Sie den Code und aktualisieren Sie den Browser, um zu sehen, was das Ergebnis ist. Anfänglich sieht die Seite so aus:

![Eine einfache HTML-Seite, die besagt Dies ist meine Seite](template-screenshot.png)

In dieser Übung können Sie den Code lokal auf Ihrem Computer bearbeiten, wie zuvor beschrieben, oder Sie können ihn im Beispielcode-Fenster unten bearbeiten (das editierbare Beispielcode-Fenster stellt in diesem Fall nur die Inhalte des {{htmlelement("body")}}-Elements dar). Schärfen Sie Ihre Fähigkeiten, indem Sie die folgenden Aufgaben umsetzen:

- Fügen Sie direkt unter dem öffnenden Tag des {{htmlelement("body")}}-Elements einen Haupttitel für das Dokument hinzu. Dieser sollte in ein `<h1>`-öffnendes und `</h1>`-schließendes Tag eingebettet sein.
- Bearbeiten Sie den Absatzinhalt, um Text über ein Thema zu enthalten, das Sie interessant finden.
- Lassen Sie wichtige Wörter fett hervorstechen, indem Sie sie in ein `<strong>`-öffnendes und `</strong>`-schließendes Tag einfügen.
- Fügen Sie Ihrem Absatz einen Link hinzu, wie [früher im Artikel erklärt](#active_learning_adding_attributes_to_an_element).
- Fügen Sie Ihrer Datei ein Bild hinzu. Platzieren Sie es unterhalb des Absatzes, wie [früher im Artikel erklärt](#leere_elemente). Verdienen Sie Bonuspunkte, wenn Sie es schaffen, auf ein anderes Bild zu verlinken (entweder lokal auf Ihrem Computer oder irgendwo anders im Web).

Wenn Sie einen Fehler machen, können Sie ihn immer mit der Schaltfläche _Zurücksetzen_ beheben. Wenn Sie wirklich feststecken, drücken Sie die Schaltfläche _Lösung anzeigen_, um die Antwort zu sehen.

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

In den obigen Beispielen haben Sie vielleicht bemerkt, dass im Code viel Leerraum enthalten ist. Dies ist optional. Diese beiden Code-Snippets sind äquivalent:

```html-nolint
<p id="noWhitespace">Dogs are silly.</p>

<p id="whitespace">Dogs
    are
        silly.</p>
```

Egal wie viel Leerraum Sie innerhalb von HTML-Elementinhalten verwenden (dies kann ein oder mehrere Leerzeichen, aber auch Zeilenumbrüche umfassen), reduziert der HTML-Parser jede Folge von Leerraum bei der Darstellung des Codes auf ein einzelnes Leerzeichen. Warum also so viel Leerraum verwenden? Die Antwort ist Lesbarkeit.

Es kann einfacher sein zu verstehen, was in Ihrem Code vor sich geht, wenn Sie ihn schön formatiert haben. In unserem HTML haben wir jedes verschachtelte Element um zwei Leerzeichen mehr eingerückt als das Element, in dem es sich befindet. Es liegt an Ihnen, den Stil der Formatierung zu wählen (wie viele Leerzeichen für jede Einrückungsebene, zum Beispiel), aber Sie sollten in Betracht ziehen, sie zu formatieren.

Werfen wir einen Blick darauf, wie der Browser die beiden Absätze oben mit und ohne Leerraum darstellt:

{{ EmbedLiveSample('Whitespace_in_HTML', 700, 100) }}

> [!NOTE]
> Der Zugriff auf die [innerHTML](/de/docs/Web/API/Element/innerHTML) von Elementen aus JavaScript wird den gesamten Leerraum intakt halten.
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

## Zeichenreferenzen: Spezielle Zeichen in HTML einschließen

In HTML sind die Zeichen `<`, `>`, `"`, `'` und `&` Sonderzeichen. Sie sind Teile der HTML-Syntax selbst. Wie können Sie eines dieser Sonderzeichen in Ihren Text einfügen? Zum Beispiel, wenn Sie ein kaufmännisches Und oder ein Kleiner-als-Zeichen verwenden möchten und nicht möchten, dass es als Code interpretiert wird.

Dies tun Sie mit {{Glossary("character_reference", "Zeichenreferenzen")}}. Dies sind spezielle Codes, die Zeichen darstellen, die in diesen genauen Umständen verwendet werden. Jede Zeichenreferenz beginnt mit einem kaufmännischen Und (&) und endet mit einem Semikolon (;).

| Wörtliches Zeichen | Entsprechende Zeichenreferenz |
| ------------------ | ----------------------------- |
| <                  | `&lt;`                        |
| >                  | `&gt;`                        |
| "                  | `&quot;`                      |
| '                  | `&apos;`                      |
| &                  | `&amp;`                       |

Die entsprechende Zeichenreferenz könnte leicht gemerkt werden, da der Text, den sie verwendet, als weniger als für `&lt;`, Anführungszeichen für `&quot;` und ähnlich für andere gesehen werden kann. Um mehr über Entitätsreferenzen zu erfahren, siehe [Liste der XML- und HTML-Zeichenentitätsreferenzen](https://de.wikipedia.org/wiki/Liste_der_HTML-Entit%C3%A4ten) (Wikipedia).

Im folgenden Beispiel gibt es zwei Absätze:

```html-nolint
<p>In HTML, you define a paragraph using the <p> element.</p>

<p>In HTML, you define a paragraph using the &lt;p&gt; element.</p>
```

Im Live-Ergebnis unten sehen Sie, dass der erste Absatz schiefgegangen ist. Der Browser interpretiert die zweite Instanz von `<p>` als Beginn eines neuen Absatzes. Der zweite Absatz sieht gut aus, da er mit Zeichenreferenzen für die Winkeln aufwartet.

{{ EmbedLiveSample('Entity_references_Including_special_characters_in_HTML', 700, 200, "", "") }}

> [!NOTE]
> Sie müssen keine Entitätsreferenzen für andere Symbole verwenden, da moderne Browser die tatsächlichen Symbole problemlos verarbeiten, solange Ihr HTMLs [Zeichenkodierung auf UTF-8 eingestellt ist](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#specifying_your_documents_character_encoding).

## HTML-Kommentare

HTML hat einen Mechanismus zum Schreiben von Kommentaren im Code. Browser ignorieren Kommentare, was Kommentare für den Benutzer praktisch unsichtbar macht. Der Zweck von Kommentaren ist es, Ihnen zu erlauben, Notizen im Code einzufügen, um Ihre Logik oder Kodierung zu erklären. Dies ist sehr nützlich, wenn Sie nach längerer Abwesenheit zu einem Code zurückkehren und sich nicht mehr vollständig daran erinnern. Kommentare sind auch von unschätzbarem Wert, wenn verschiedene Personen Änderungen und Aktualisierungen vornehmen.

Um einen HTML-Kommentar zu schreiben, umschließen Sie ihn mit den speziellen Markierungen `<!--` und `-->`. Zum Beispiel:

```html
<p>I'm not inside a comment</p>

<!-- <p>I am!</p> -->
```

Wie Sie unten sehen können, wird im Live-Ergebnis nur der erste Absatz angezeigt.

{{ EmbedLiveSample('HTML_comments', 700, 100, "", "") }}

## Zusammenfassung

Sie haben es bis zum Ende des Artikels geschafft! Wir hoffen, dass Ihnen Ihre Tour durch die Grundlagen von HTML gefallen hat.

An diesem Punkt sollten Sie verstehen, wie HTML aussieht und wie es auf einer grundlegenden Ebene funktioniert. Sie sollten auch in der Lage sein, einige Elemente und Attribute zu schreiben. Die folgenden Artikel dieses Moduls gehen weiter auf einige der hier eingeführten Themen ein und präsentieren weitere Konzepte der Sprache.

- Wenn Sie beginnt, mehr über HTML zu lernen, sollten Sie auch die Grundlagen von CSS (Cascading Style Sheets) lernen. [CSS](/de/docs/Learn_web_development/Core/Styling_basics) ist die Sprache, die verwendet wird, um Webseiten zu gestalten, zum Beispiel das Ändern von Schriften oder Farben oder das Ändern des Seitenlayouts. HTML und CSS arbeiten gut zusammen, wie Sie bald herausfinden werden.

## Siehe auch

- [Anwendung von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}
