---
title: Erste Schritte mit HTML
slug: Learn/HTML/Introduction_to_HTML/Getting_started
l10n:
  sourceCommit: f20d7ae3f5f41aa6d2157246206b0f6f30756e2f
---

{{LearnSidebar}}{{NextMenu("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML")}}

In diesem Artikel behandeln wir die absoluten Grundlagen von HTML. Um Ihnen den Einstieg zu erleichtern, definiert dieser Artikel Elemente, Attribute und alle anderen wichtigen Begriffe, von denen Sie vielleicht gehört haben. Er erklärt auch, wo diese in HTML passen. Sie lernen, wie HTML-Elemente strukturiert sind, wie eine typische HTML-Seite aufgebaut ist und andere wichtige grundlegende Sprachmerkmale. Unterwegs haben Sie zudem Gelegenheit, mit HTML auszuprobieren!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software">Grundlegende Software installiert</a>, und Grundkenntnisse im <a href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files">Umgang mit Dateien</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Grundkenntnisse mit HTML zu erlangen und das Schreiben einiger HTML-Elemente zu üben.
      </td>
    </tr>
  </tbody>
</table>

## Was ist HTML?

{{Glossary("HTML", "HTML")}} (HyperText Markup Language) ist eine _Auszeichnungssprache_, die Webbrowsern vorgibt, wie die Webseiten, die Sie besuchen, strukturiert werden sollen. Sie kann so komplex oder einfach sein, wie der Webentwickler es möchte. HTML besteht aus einer Reihe von {{Glossary("Element", "Elementen")}}, die verwendet werden, um verschiedene Teile von Inhalten einzuschließen, einzuwickeln oder _auszuzeichnen_, damit sie in bestimmter Weise erscheinen oder agieren. Die einschließenden {{Glossary("Tag", "Tags")}} können Inhalte in einen Hyperlink umwandeln, um zu einer anderen Seite zu verbinden, Wörter kursiv darstellen und mehr. Betrachten Sie beispielsweise die folgende Textzeile:

```plain
My cat is very grumpy
```

Wenn wir möchten, dass der Text für sich allein steht, können wir angeben, dass es sich um einen Absatz handelt, indem wir ihn in ein Absatz- ({{htmlelement("p")}}) Element einschließen:

```html
<p>My cat is very grumpy</p>
```

> [!NOTE]
> Tags in HTML sind nicht case-sensitiv. Das bedeutet, sie können in Groß- oder Kleinschreibung geschrieben werden. Beispielsweise könnte ein {{htmlelement("title")}} Tag als `<title>`, `<TITLE>`, `<Title>`, `<TiTlE>` usw. geschrieben werden und es wird funktionieren. Es ist jedoch best practice, alle Tags in Kleinbuchstaben zu schreiben, um Konsistenz und Lesbarkeit zu gewährleisten.

## Anatomie eines HTML-Elements

Lassen Sie uns unser Absatzelement aus dem vorherigen Abschnitt weiter erkunden:

![Ein Beispiel für ein Codeschnipsel, das die Struktur eines HTML-Elements demonstriert. <p> Mein Kater ist sehr mürrisch </p>.](grumpy-cat-small.png)

Die Anatomie unseres Elements ist:

- **Das öffnende Tag:** Dieses besteht aus dem Namen des Elements (in diesem Beispiel _p_ für Paragraf), eingeschlossen in öffnende und schließende spitze Klammern. Dieses öffnende Tag markiert, wo das Element beginnt oder anfängt, Wirkung zu zeigen. In diesem Beispiel geht es dem Anfang des Paragrafentextes voraus.
- **Der Inhalt:** Dies ist der Inhalt des Elements. In diesem Beispiel ist es der Paragrafentext.
- **Das schließende Tag:** Dies ist dasselbe wie das öffnende Tag, außer dass es einen Schrägstrich vor dem Elementnamen enthält. Dies markiert, wo das Element endet. Das Nicht-Einschließen eines schließenden Tags ist ein häufiger Anfängerfehler, der zu seltsamen Ergebnissen führen kann.

Das Element besteht aus dem öffnenden Tag, gefolgt von Inhalt, gefolgt vom schließenden Tag.

### Aktives Lernen: Ihr erstes HTML-Element erstellen

Bearbeiten Sie die folgende Zeile im "Bearbeitbaren Code"-Bereich, indem Sie sie mit den Tags `<em>` und `</em>` umschließen. Um _das Element zu öffnen_, setzen Sie das öffnende Tag `<em>` an den Anfang der Zeile. Um _das Element zu schließen_, setzen Sie das schließende Tag `</em>` an das Ende der Zeile. Dadurch sollte die Textzeile eine kursive Textformatierung erhalten! Sehen Sie Ihre Änderungen live im _Ausgabe_-Bereich.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste löschen. Wenn Sie wirklich nicht weiterkommen, drücken Sie die _Lösungsansicht_-Taste, um die Antwort zu sehen.

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

Elemente können innerhalb anderer Elemente platziert werden. Dies wird als _Verschachtelung_ bezeichnet. Wenn wir angeben wollten, dass unser Kater **sehr** mürrisch ist, könnten wir das Wort _sehr_ in ein {{htmlelement("strong")}} Element einschließen, was bedeutet, dass das Wort eine stärkere Textformatierung erhalten soll:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

Es gibt einen richtigen und einen falschen Weg, um Verschachtelung vorzunehmen. Im obigen Beispiel haben wir zuerst das `p`-Element geöffnet und dann das `strong`-Element. Bei richtiger Verschachtelung sollten wir zuerst das `strong`-Element schließen, bevor wir das `p` schließen.

Folgendes ist ein Beispiel für den _falschen_ Weg der Verschachtelung:

```html-nolint example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

Die **Tags müssen in einer Weise öffnen und schließen, dass sie innerhalb oder außerhalb voneinander liegen**. Mit der Art der Überlappung im obigen Beispiel muss der Browser Ihre Absicht erraten. Diese Art von Raten kann zu unerwarteten Ergebnissen führen.

### Leere Elemente

Nicht alle Elemente folgen dem Muster eines öffnenden Tags, Inhalts und eines schließenden Tags. Einige Elemente bestehen aus einem einzigen Tag, das typischerweise verwendet wird, um etwas in das Dokument einzufügen/einzubetten. Solche Elemente werden {{Glossary("void_element", "leere Elemente")}} genannt. Zum Beispiel bettet das {{htmlelement("img")}} Element eine Bilddatei auf einer Seite ein:

```html
<img
  src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"
  alt="Firefox icon" />
```

Dies würde folgendes ausgeben:

{{ EmbedLiveSample('Void_elements', 700, 300, "", "") }}

> [!NOTE]
> In HTML gibt es keine Anforderung, ein `/` am Ende eines void elements tags hinzuzufügen, zum Beispiel: `<img src="images/cat.jpg" alt="cat" />`. Es ist jedoch auch eine gültige Syntax, und Sie können dies tun, wenn Sie möchten, dass Ihr HTML auch gültiges XML ist.

## Attribute

Elemente können auch Attribute haben. Attribute sehen so aus:

![Absatz-Tag mit 'class="editor-note"' Attribut hervorgehoben](grumpy-cat-attribute-small.png)

Attribute enthalten zusätzliche Informationen über das Element, die nicht im Inhalt erscheinen. In diesem Beispiel ist das **`class`** Attribut ein identifizierender Name, der verwendet wird, um das Element mit Stilinformationen zu versehen.

Ein Attribut sollte haben:

- Einen Abstand zwischen ihm und dem Elementnamen. (Für ein Element mit mehr als einem Attribut sollten die Attribute ebenfalls durch Leerzeichen getrennt sein.)
- Den Attributnamen, gefolgt von einem Gleichheitszeichen.
- Einen Attributwert, umschlossen von öffnenden und schließenden Anführungszeichen.

### Aktives Lernen: Hinzufügen von Attributen zu einem Element

Das `<img>` Element kann eine Reihe von Attributen annehmen, darunter:

- `src`
  - : Das `src` Attribut ist ein **erforderliches** Attribut, das den Speicherort des Bildes angibt. Zum Beispiel: `src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"`.
- `alt`
  - : Das `alt` Attribut gibt eine Textbeschreibung des Bildes an. Zum Beispiel: `alt="Das Firefox-Symbol"`.
- `width`
  - : Das `width` Attribut gibt die Breite des Bildes in Pixeln an. Zum Beispiel: `width="300"`.
- `height`
  - : Das `height` Attribut gibt die Höhe des Bildes in Pixeln an. Zum Beispiel: `height="300"`.

Bearbeiten Sie die Zeile unten im _Eingabe_-Bereich, um sie in ein Bild zu verwandeln.

1. Finden Sie Ihr Lieblingsbild online, klicken Sie mit der rechten Maustaste darauf und drücken Sie _Link/Adresse des Bildes kopieren_.
2. Fügen Sie im Bereich unten das `src` Attribut hinzu und füllen Sie es mit dem Link aus Schritt 1.
3. Setzen Sie das `alt` Attribut.
4. Fügen Sie die `width` und `height` Attribute hinzu.

Sie können Ihre Änderungen live im _Ausgabe_-Bereich sehen.

Falls Sie einen Fehler machen, können Sie ihn immer mit der _Zurücksetzen_-Taste zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie die _Lösungsansicht_-Taste, um die Antwort zu sehen.

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

Manchmal werden Attribute ohne Werte geschrieben. Dies ist völlig akzeptabel. Diese werden {{Glossary("Boolean/HTML", "Boolesche Attribute")}} genannt. Wenn ein boolesches Attribut ohne Wert oder mit einem beliebigen Wert, selbst `false`, geschrieben wird, ist das boolesche Attribut immer auf true gesetzt. Andernfalls, wenn das Attribut in einem HTML-Tag nicht geschrieben ist, ist das Attribut auf false gesetzt. Die Spezifikation erfordert, dass der Attributwert entweder der leere String ist (einschließlich wenn das Attribut keinen explizit angegebenen Wert hat) oder derselbe wie der Attributname, aber andere Werte funktionieren ebenso. Betrachten Sie zum Beispiel das [`disabled`](/de/docs/Web/HTML/Element/input#disabled) Attribut, das Sie Formulareingabefeldern zuweisen können. (Sie verwenden dies, um die Formulareingabefelder zu deaktivieren, sodass der Benutzer keine Eingaben machen kann. Die deaktivierten Elemente haben typischerweise ein ausgegrautes Aussehen.) Zum Beispiel:

```html
<input type="text" disabled="disabled" />
```

Kurzform, es ist akzeptabel, dies wie folgt zu schreiben:

```html
<!-- using the disabled attribute prevents the end user from entering text into the input box -->
<input type="text" disabled />

<!-- text input is allowed, as it doesn't contain the disabled attribute -->
<input type="text" />
```

Zur Referenz enthält das obige Beispiel auch ein nicht deaktiviertes Formulareingabeelement. Der HTML-Code aus dem obigen Beispiel erzeugt dieses Ergebnis:

{{ EmbedLiveSample('Boolean_attributes', 700, 100, "", "") }}

### Weglassen von Anführungszeichen um Attributwerte

Wenn Sie sich Code für viele andere Webseiten ansehen, stoßen Sie vielleicht auf eine Reihe seltsamer Markup-Stile, darunter Attributwerte ohne Anführungszeichen. Dies ist unter bestimmten Umständen erlaubt, kann aber auch unter anderen Umständen Ihr Markup zerstören. Das Element im Codeschnipsel unten, `<a>`, wird als Anker bezeichnet. Anker umfassen Text und wandeln ihn in Links um. Das `href` Attribut gibt die Webadresse an, auf die der Link verweist. Sie können diese grundlegende Version unten mit _nur_ dem `href` Attribut wie folgt schreiben:

```html
<a href=https://www.mozilla.org/>favorite website</a>
```

Anker können auch ein `title` Attribut haben, eine Beschreibung der verlinkten Seite. Sobald wir jedoch das `title` auf die gleiche Weise wie das `href` Attribut hinzufügen, gibt es Probleme:

```html-nolint example-bad
<a href=https://www.mozilla.org/ title=The Mozilla homepage>favorite website</a>
```

Wie oben geschrieben, interpretiert der Browser das Markup falsch und verwechselt das `title` Attribut mit drei Attributen: Ein title Attribut mit dem Wert `The`, und zwei Boolesche Attribute, `Mozilla` und `homepage`. Offensichtlich ist dies nicht beabsichtigt! Es wird Fehler oder unerwartetes Verhalten verursachen, wie Sie im Live-Beispiel unten sehen können. Versuchen Sie, über den Link zu schweben, um den Titeltext anzuzeigen!

{{ EmbedLiveSample('Omitting_quotes_around_attribute_values', 700, 100, "", "") }}

Fügen Sie stets die Attributanführungszeichen ein. Es vermeidet solche Probleme und führt zu leichter lesbarem Code.

### Einzelne oder doppelte Anführungszeichen?

In diesem Artikel werden Sie auch bemerken, dass die Attribute in doppelte Anführungszeichen eingeschlossen sind. Sie könnten jedoch in einigen HTML-Codes auch einfache Anführungszeichen sehen. Dies ist eine Frage des Stils. Sie können sich für die bevorzugte Variante entscheiden. Diese beiden Zeilen sind gleichwertig:

```html-nolint
<a href='https://www.example.com'>A link to my example.</a>

<a href="https://www.example.com">A link to my example.</a>
```

Achten Sie darauf, keine einzelnen und doppelten Anführungszeichen zu mischen. Dieses Beispiel (unten) zeigt eine Art von Mischung von Anführungszeichen, die schiefgehen wird:

```html-nolint example-bad
<a href="https://www.example.com'>A link to my example.</a>
```

Wenn Sie jedoch eine Art von Anführungszeichen verwenden, können Sie die andere Art von Anführungszeichen _innerhalb_ Ihrer Attributwerte verwenden:

```html
<a href="https://www.example.com" title="Isn't this fun?">
  A link to my example.
</a>
```

Um Anführungszeichen innerhalb anderer Anführungszeichen des gleichen Typs (einfach oder doppelt) zu verwenden, nutzen Sie {{Glossary("character_reference", "Zeichenreferenzen")}}.
Zum Beispiel wird das Folgende nicht funktionieren:

```html-nolint example-bad
<a href="https://www.example.com" title="An "interesting" reference">A link to my example.</a>
```

Stattdessen müssen Sie dies tun:

```html-nolint
<a href="https://www.example.com" title="An &quot;interesting&quot; reference">A link to my example.</a>
```

## Anatomie eines HTML-Dokuments

Einzelne HTML-Elemente sind für sich genommen nicht sehr nützlich. Lassen Sie uns als nächstes untersuchen, wie einzelne Elemente kombiniert werden, um eine gesamte HTML-Seite zu bilden:

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

1. `<!doctype html>`: Der Doctype. Als HTML jung war (1991-1992), sollten Doctypes als Links zu einem Satz von Regeln fungieren, die die HTML-Seite befolgen musste, um als gutes HTML zu gelten. Doctypes sahen einst so aus:

   ```html
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   ```

   In jüngerer Zeit ist der Doctype ein historisches Artefakt, das für das ordnungsgemäße Funktionieren von allem anderen erforderlich ist. `<!doctype html>` ist die kürzeste Zeichenkette, die als gültiger Doctype zählt. Das ist alles, was Sie wissen müssen!

2. `<html></html>`: Das {{htmlelement("html")}} Element. Dieses Element umschließt alle Inhalte auf der Seite. Es wird manchmal als das Wurzelelement bezeichnet.
3. `<head></head>`: Das {{htmlelement("head")}} Element. Dieses Element dient als Container für alles, was Sie auf der HTML-Seite einfügen möchten, **was nicht der Inhalt** ist, den die Seite den Betrachtern zeigen wird. Dies umfasst Schlüsselwörter und eine Seitenbeschreibung, die in Suchergebnissen erscheinen würde, CSS zur Gestaltung des Inhalts, Zeichensatzerklärungen und mehr. Sie werden mehr darüber im nächsten Artikel der Serie erfahren.
4. `<meta charset="utf-8">`: Das {{htmlelement("meta")}} Element. Dieses Element stellt Metadaten dar, die nicht von anderen HTML-meta-bezogenen Elementen wie {{htmlelement("base")}}, {{htmlelement("link")}}, {{htmlelement("script")}}, {{htmlelement("style")}} oder {{htmlelement("title")}} dargestellt werden können. Das [`charset`](/de/docs/Web/HTML/Element/meta#charset) Attribut gibt die Zeichenkodierung für Ihr Dokument als UTF-8 an, die die meisten Zeichen aus der überwiegenden Mehrheit der menschlichen Schriftsysteme umfasst. Mit dieser Einstellung kann die Seite jetzt mit jedem Textinhalt umgehen, den sie enthalten könnte. Es gibt keinen Grund, dies nicht zu setzen, und es kann helfen, einige Probleme später zu vermeiden.
5. `<title></title>`: Das {{htmlelement("title")}} Element. Dies legt den Titel der Seite fest, der der Titel ist, der im Browsertab erscheint, in dem die Seite geladen ist. Der Seitentitel wird auch verwendet, um die Seite zu beschreiben, wenn sie gebookmarked wird.
6. `<body></body>`: Das {{htmlelement("body")}} Element. Dies enthält _alle_ Inhalte, die auf der Seite angezeigt werden, einschließlich Text, Bilder, Videos, Spiele, abspielbare Audiospuren oder was auch immer.

### Aktives Lernen: Einige Funktionen zu einem HTML-Dokument hinzufügen

Wenn Sie mit dem Schreiben von etwas HTML auf Ihrem lokalen Computer experimentieren möchten, können Sie:

1. Kopieren Sie das oben aufgeführte HTML-Seitenbeispiel.
2. Erstellen Sie eine neue Datei in Ihrem Texteditor.
3. Fügen Sie den Code in die neue Textdatei ein.
4. Speichern Sie die Datei als `index.html`.

> [!NOTE]
> Sie können diese grundlegende HTML-Vorlage auch im [MDN Learning Area GitHub-Repo](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) finden.

Sie können diese Datei jetzt in einem Webbrowser öffnen, um zu sehen, wie der gerenderte Code aussieht. Bearbeiten Sie den Code und aktualisieren Sie den Browser, um zu sehen, wie das Ergebnis ist. Anfangs sieht die Seite so aus:

![Eine einfache HTML-Seite, die sagt: Das ist meine Seite](template-screenshot.png)

In dieser Übung können Sie den Code lokal auf Ihrem Computer bearbeiten, wie zuvor beschrieben, oder Sie können ihn im Beispielsfenster unten bearbeiten (das bearbeitbare Beispielsfenster stellt in diesem Fall nur den Inhalt des {{htmlelement("body")}} Elements dar). Schärfen Sie Ihre Fähigkeiten, indem Sie die folgenden Aufgaben umsetzen:

- Fügen Sie direkt unter dem öffnenden Tag des {{htmlelement("body")}} Elements einen Haupttitel für das Dokument hinzu. Dies sollte innerhalb eines `<h1>` öffnenden Tags und eines `</h1>` schließenden Tags umschlossen sein.
- Bearbeiten Sie den Paragrafeninhalt, um Text über ein Thema einzufügen, das Sie interessant finden.
- Heben Sie wichtige Wörter fett hervor, indem Sie sie innerhalb eines `<strong>` öffnenden Tags und eines `</strong>` schließenden Tags umschließen.
- Fügen Sie Ihrem Paragrafen einen Link hinzu, wie [zuvor im Artikel erklärt](#active_learning_adding_attributes_to_an_element).
- Fügen Sie Ihrem Dokument ein Bild hinzu. Platzieren Sie es unter dem Paragrafen, wie [zuvor im Artikel erklärt](#leere_elemente). Verdienen Sie Bonuspunkte, wenn es Ihnen gelingt, auf ein anderes Bild zu verlinken (entweder lokal auf Ihrem Computer oder irgendwo sonst im Web).

Falls Sie einen Fehler machen, können Sie ihn immer mit der _Zurücksetzen_-Taste zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie die _Lösungsansicht_-Taste, um die Antwort zu sehen.

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

In den obigen Beispielen haben Sie vielleicht bemerkt, dass im Code viel Leerraum enthalten ist. Dies ist optional. Diese beiden Codeschnipsel sind gleichwertig:

```html-nolint
<p id="noWhitespace">Dogs are silly.</p>

<p id="whitespace">Dogs
    are
        silly.</p>
```

Unabhängig davon, wie viel Leerraum Sie innerhalb von HTML-Elementinhalten verwenden (die ein oder mehrere Leerzeichen, aber auch Zeilenumbrüche umfassen können), reduziert der HTML-Parser jede Folge von Weißraum auf ein einziges Leerzeichen, wenn der Code gerendert wird. Warum also so viel Leerraum verwenden? Die Antwort ist Lesbarkeit.

Es kann einfacher sein zu verstehen, was in Ihrem Code vor sich geht, wenn Sie ihn schön formatiert haben. In unserem HTML haben wir jedes verschachtelte Element um zwei Leerzeichen mehr eingerückt als das, in dem es sich befindet. Es liegt an Ihnen, den Formatierungsstil zu wählen (wie viele Leerzeichen pro Einrückungsebene, zum Beispiel), aber Sie sollten erwägen, ihn zu formatieren.

Schauen wir uns an, wie der Browser die beiden Paragrafen oben mit und ohne Leerraum rendert:

{{ EmbedLiveSample('Whitespace_in_HTML', 700, 100) }}

> [!NOTE]
> Der Zugriff auf das [innerHTML](/de/docs/Web/API/Element/innerHTML) von Elementen aus JavaScript behält den gesamten Leerraum bei.
> Dies kann unerwartete Ergebnisse liefern, wenn der Leerraum vom Browser zugeschnitten wird.

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

## Zeichenreferenzen: besondere Zeichen in HTML einfügen

In HTML sind die Zeichen `<`, `>`, `"`, `'`, und `&` spezielle Zeichen. Sie sind Teile der HTML-Syntax selbst. Wie fügen Sie also eines dieser speziellen Zeichen in Ihren Text ein? Zum Beispiel, wenn Sie ein kaufmännisches Und-Zeichen oder ein kleiner-als-Zeichen verwenden möchten und nicht möchten, dass es als Code interpretiert wird.

Dies tun Sie mit {{Glossary("character_reference", "Zeichenreferenzen")}}. Diese sind spezielle Codes, die Zeichen darstellen, um in diesen genauen Umständen verwendet zu werden. Jede Zeichenreferenz beginnt mit einem kaufmännischen Und-Zeichen (&), und endet mit einem Semikolon (;).

| Literalzeichen | Zeichenreferenzäquivalent |
| -------------- | ------------------------- |
| <              | `&lt;`                    |
| >              | `&gt;`                    |
| "              | `&quot;`                  |
| '              | `&apos;`                  |
| &              | `&amp;`                   |

Das Zeichenreferenzäquivalent kann leicht gemerkt werden, da der Text, den es verwendet, als weniger als für `&lt;`, Zitat für `&quot;` und ähnlich für andere verstanden werden kann. Um mehr über Entitätsreferenzen zu erfahren, siehe [Liste von XML- und HTML-Zeichenentitätsreferenzen](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references) (Wikipedia).

Im folgenden Beispiel gibt es zwei Absätze:

```html-nolint
<p>In HTML, you define a paragraph using the <p> element.</p>

<p>In HTML, you define a paragraph using the &lt;p&gt; element.</p>
```

Im Live-Ausgang unten sehen Sie, dass der erste Absatz schiefgegangen ist. Der Browser interpretiert die zweite Instanz von `<p>` als Beginn eines neuen Absatzes. Der zweite Absatz sieht gut aus, weil er Winkelklammern mit Zeichenreferenzen hat.

{{ EmbedLiveSample('Entity_references_Including_special_characters_in_HTML', 700, 200, "", "") }}

> [!NOTE]
> Sie müssen keine Entitätsreferenzen für andere Symbole verwenden, da moderne Browser die tatsächlichen Symbole einwandfrei verarbeiten, solange die [Zeichenkodierung Ihres HTMLs auf UTF-8 gesetzt ist](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#specifying_your_documents_character_encoding).

## HTML-Kommentare

HTML hat einen Mechanismus, um Kommentare im Code zu schreiben. Browser ignorieren Kommentare, machen sie effektiv für den Benutzer unsichtbar. Der Zweck von Kommentaren ist es, Ihnen zu ermöglichen, Notizen im Code einzufügen, um Ihre Logik oder Programmierung zu erklären. Dies ist sehr nützlich, wenn Sie zu einem Code zurückkehren, nachdem Sie lange genug weg waren, um sich nicht mehr vollständig daran zu erinnern. Ebenso sind Kommentare von unschätzbarem Wert, wenn verschiedene Personen Änderungen und Aktualisierungen vornehmen.

Um einen HTML-Kommentar zu schreiben, fassen Sie ihn in den speziellen Markierungen `<!--` und `-->` ein. Zum Beispiel:

```html
<p>I'm not inside a comment</p>

<!-- <p>I am!</p> -->
```

Wie Sie unten sehen können, wird im Live-Ausgang nur der erste Absatz angezeigt.

{{ EmbedLiveSample('HTML_comments', 700, 100, "", "") }}

## Zusammenfassung

Sie haben das Ende des Artikels erreicht! Wir hoffen, dass Ihnen Ihre Tour durch die Grundlagen von HTML gefallen hat.

An dieser Stelle sollten Sie verstehen, wie HTML aussieht und auf grundlegender Ebene funktioniert. Sie sollten auch in der Lage sein, einige Elemente und Attribute zu schreiben. Die nachfolgenden Artikel dieses Moduls vertiefen einige der hier eingeführten Themen und stellen weitere Konzepte der Sprache vor.

- Wenn Sie beginnen, mehr über HTML zu lernen, sollten Sie erwägen, die Grundlagen von CSS (Cascading Style Sheets) zu lernen. [CSS](/de/docs/Learn/CSS) ist die Sprache, die verwendet wird, um Webseiten zu gestalten, wie z. B. das Ändern von Schriftarten oder Farben oder das Ändern des Seitenlayouts. HTML und CSS funktionieren gut zusammen, wie Sie bald entdecken werden.

## Siehe auch

- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)

{{NextMenu("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML")}}
