---
title: Grundlegende HTML-Syntax
slug: Learn_web_development/Core/Structuring_content/Basic_HTML_syntax
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}

In diesem Artikel behandeln wir die absoluten Grundlagen von HTML. Um Ihnen den Einstieg zu erleichtern, definiert dieser Artikel Elemente, Attribute und alle anderen wichtigen Begriffe, die Sie vielleicht gehört haben. Er erklärt auch, wo diese in HTML passen. Sie werden lernen, wie HTML-Elemente strukturiert sind, wie eine typische HTML-Seite strukturiert ist und andere wichtige grundlegende Sprachfunktionen. Unterwegs gibt es auch die Möglichkeit, mit HTML zu experimentieren!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Grundlegende Software installiert</a>, und grundlegende Kenntnisse im <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">Umgang mit Dateien</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Anatomie eines HTML-Elements — Element, öffnender Tag, Inhalt, schließender Tag, Attribute.</li>
          <li>Der HTML-Body und sein Zweck als Container für den Seiteninhalt.</li>
          <li>Was <a href="/de/docs/Glossary/Void_element">leere Elemente</a> (auch bekannt als nicht geschlossene Elemente) sind und wie sie sich von anderen Elementen unterscheiden.</li>
          <li>Die Notwendigkeit eines Doctype am Beginn von HTML-Dokumenten. Sein ursprünglich beabsichtigter Zweck und die Tatsache, dass er jetzt eher ein historisches Relikt ist.</li>
          <li>Verständnis, dass HTML korrekt verschachtelt sein muss.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist HTML?

{{Glossary("HTML", "HTML")}} (HyperText Markup Language) ist eine _Auszeichnungssprache_, die Webbrowsern mitteilt, wie die von Ihnen besuchten Webseiten strukturiert werden sollen. Es kann so kompliziert oder einfach sein, wie der Webentwickler es möchte. HTML besteht aus einer Reihe von {{Glossary("Element", "Elementen")}}, die Sie verwenden, um verschiedene Teile des Inhalts einzuschließen, zu umschließen oder _auszuzeichnen_, um sie in einer bestimmten Weise erscheinen oder agieren zu lassen. Die umschließenden {{Glossary("Tag", "Tags")}} können Inhalte in einen Hyperlink verwandeln, um zu einer anderen Seite zu verbinden, oder Wörter kursiv darstellen, und so weiter. Betrachten Sie zum Beispiel die folgende Textzeile:

```plain
My cat is very grumpy
```

Wenn wir möchten, dass der Text für sich allein steht, könnten wir spezifizieren, dass es sich um einen Absatz handelt, indem wir ihn in ein Absatz- ({{htmlelement("p")}}) Element einschließen:

```html
<p>My cat is very grumpy</p>
```

> [!NOTE]
> Tags in HTML sind nicht case-sensitiv. Das bedeutet, sie können in Groß- oder Kleinschreibung geschrieben werden. Zum Beispiel könnte ein {{htmlelement("title")}} Tag als `<title>`, `<TITLE>`, `<Title>`, `<TiTlE>`, usw. geschrieben werden und es würde funktionieren. Allerdings ist es am besten, alle Tags aus Gründen der Konsistenz und Lesbarkeit in Kleinschreibung zu schreiben.

## Anatomie eines HTML-Elements

Lassen Sie uns unser Absatz-Element aus dem vorherigen Abschnitt näher betrachten:

![Ein Beispiel-Code-Snippet, das die Struktur eines HTML-Elements zeigt.<p> Mein Kater ist sehr grummelig </p>.](grumpy-cat-small.png)

Die Anatomie unseres Elements ist:

- **Der öffnende Tag:** Dieser besteht aus dem Namen des Elements (in diesem Beispiel _p_ für paragraph), eingeschlossen in öffnende und schließende spitze Klammern. Dieser öffnende Tag markiert, wo das Element beginnt oder zu wirken beginnt. In diesem Beispiel geht es dem Anfang des Absatztextes voraus.
- **Der Inhalt:** Dies ist der Inhalt des Elements. In diesem Beispiel ist es der Absatztext.
- **Der schließende Tag:** Dies ist dasselbe wie der öffnende Tag, außer dass es einen Schrägstrich vor dem Elementnamen enthält. Dies markiert, wo das Element endet. Das Fehlen eines schließenden Tags ist ein häufiger Anfängerfehler, der seltsame Ergebnisse hervorrufen kann.

Das Element besteht aus dem öffnenden Tag, gefolgt von Inhalt, gefolgt von dem schließenden Tag.

### Aktives Lernen: Ihr erstes HTML-Element erstellen

Bearbeiten Sie die Zeile unten im "Bearbeitbaren Code"-Bereich, indem Sie sie mit den Tags `<em>` und `</em>.` umschließen. Um das Element zu _öffnen_, setzen Sie den öffnenden Tag `<em>` am Anfang der Zeile. Um das Element zu _schließen_, setzen Sie den schließenden Tag `</em>` am Ende der Zeile. Dadurch sollte die Zeile eine kursive Textformatierung erhalten! Sehen Sie Ihre Änderungen live im _Ausgabe_-Bereich.

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

Elemente können innerhalb anderer Elemente platziert werden. Dies wird als _Verschachtelung_ bezeichnet. Wenn wir sagen wollten, dass unser Kater **sehr** grummelig ist, könnten wir das Wort _sehr_ in ein {{htmlelement("strong")}}-Element einschließen, was bedeutet, dass das Wort eine stärkere Textformatierung haben soll:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

Es gibt einen richtigen und einen falschen Weg, um Verschachtelungen durchzuführen. Im obigen Beispiel haben wir zuerst das `p`-Element geöffnet, dann das `strong`-Element. Für eine richtige Verschachtelung sollten wir zuerst das `strong`-Element schließen, bevor wir das `p`-Element schließen.

Das folgende ist ein Beispiel für den _falschen_ Weg der Verschachtelung:

```html-nolint example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

Die **Tags müssen so geöffnet und geschlossen werden, dass sie innerhalb oder außerhalb voneinander sind**. Mit der Art von Überlappung im obigen Beispiel muss der Browser Ihre Absicht erraten. Diese Art von Raten kann zu unerwarteten Ergebnissen führen.

### Leere Elemente

Nicht alle Elemente folgen dem Muster eines öffnenden Tags, Inhalts und eines schließenden Tags. Einige Elemente bestehen aus einem einzigen Tag, der typischerweise verwendet wird, um etwas in das Dokument einzufügen/einzubetten. Solche Elemente werden {{Glossary("void_element", "leere Elemente")}} genannt. Zum Beispiel bettet das {{htmlelement("img")}}-Element eine Bilddatei auf einer Seite ein:

```html
<img
  src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"
  alt="Firefox icon" />
```

Dies würde das folgende ausgeben:

{{ EmbedLiveSample('Void_elements', 700, 300, "", "") }}

> [!NOTE]
> In HTML gibt es keine Verpflichtung, ein `/` am Ende eines leeren Elements hinzuzufügen, zum Beispiel: `<img src="images/cat.jpg" alt="cat" />`. Dies ist jedoch auch eine gültige Syntax, und Sie können dies tun, wenn Sie möchten, dass Ihr HTML gültiges XML ist.

## Attribute

Elemente können auch Attribute haben. Attribute sehen so aus:

![Absatztag mit hervorgehobenem Attribut 'class="editor-note"'](grumpy-cat-attribute-small.png)

Attribute enthalten zusätzliche Informationen über das Element, die nicht im Inhalt erscheinen. In diesem Beispiel ist das **`class`**-Attribut ein identifizierender Name, der verwendet wird, um das Element mit Stilinformationen zu versehen.

Ein Attribut sollte haben:

- Einen Abstand zwischen ihm und dem Elementnamen. (Bei einem Element mit mehr als einem Attribut sollten die Attribute ebenfalls durch Leerzeichen getrennt werden.)
- Den Attributnamen, gefolgt von einem Gleichheitszeichen.
- Einen Attributwert, eingeschlossen in Anführungszeichen.

### Aktives Lernen: Attribute zu einem Element hinzufügen

Das `<img>`-Element kann eine Reihe von Attributen annehmen, einschließlich:

- `src`
  - : Das `src`-Attribut ist ein **erforderliches** Attribut, das den Speicherort des Bildes angibt. Zum Beispiel: `src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"`.
- `alt`
  - : Das `alt`-Attribut gibt eine Textbeschreibung des Bildes an. Zum Beispiel: `alt="Das Firefox-Symbol"`.
- `width`
  - : Das `width`-Attribut gibt die Breite des Bildes an, wobei die Maßeinheit Pixel ist. Zum Beispiel: `width="300"`.
- `height`
  - : Das `height`-Attribut gibt die Höhe des Bildes an, wobei die Maßeinheit Pixel ist. Zum Beispiel: `height="300"`.

Bearbeiten Sie die Zeile unten im _Input_-Bereich, um sie in ein Bild zu konvertieren.

1. Finden Sie Ihr Lieblingsbild online, klicken Sie mit der rechten Maustaste darauf, und klicken Sie auf _Bildlink/-adresse kopieren_.
2. Fügen Sie im Bereich unten das `src`-Attribut hinzu und füllen Sie es mit dem Link aus Schritt 1.
3. Setzen Sie das `alt`-Attribut.
4. Fügen Sie die Attribute `width` und `height` hinzu.

Sie können Ihre Änderungen live im _Output_-Bereich sehen.

Wenn Sie einen Fehler machen, können Sie es immer mit der _Zurücksetzen_-Taste zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Taste, um die Antwort zu sehen.

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

Manchmal sehen Sie Attribute ohne Werte. Das ist völlig akzeptabel. Sie werden {{Glossary("Boolean/HTML", "boolesche Attribute")}} genannt. Wenn ein boolesches Attribut ohne Wert, oder mit irgendeinem Wert, sogar wie `"false"` geschrieben wird, ist das boolesche Attribut immer wahr. Andernfalls, wenn das Attribut nicht in einem HTML-Tag geschrieben ist, ist das Attribut falsch. Die Spezifikation erfordert, dass der Wert des Attributs entweder die leere Zeichenfolge (einschließlich wenn das Attribut keinen explizit angegebenen Wert hat) oder derselbe wie der Attributname ist, aber andere Werte funktionieren genauso. Zum Beispiel betrachten Sie das [`disabled`](/de/docs/Web/HTML/Element/input#disabled)-Attribut, das Sie Formulareingabeelementen zuweisen können. (Sie verwenden dies, um die Formulareingabeelemente zu _deaktivieren_, sodass der Benutzer keine Eingaben machen kann. Die deaktivierten Elemente haben typischerweise ein ausgegrautes Erscheinungsbild.) Zum Beispiel:

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

Zur Orientierung enthält das obige Beispiel auch ein nicht deaktiviertes Formulareingabeelement. Der HTML-Code aus dem obigen Beispiel erzeugt dieses Ergebnis:

{{ EmbedLiveSample('Boolean_attributes', 700, 100, "", "") }}

### Weglassen von Anführungszeichen um Attributwerte

Wenn Sie sich den Code vieler anderer Seiten ansehen, stoßen Sie möglicherweise auf eine Reihe ungewöhnlicher Markup-Stile, einschließlich Attributwerte ohne Anführungszeichen. Dies ist unter bestimmten Umständen erlaubt, kann jedoch auch Ihren Markup unter anderen Umständen brechen. Das Element im folgenden Codeschnipsel, `<a>`, wird Anker genannt. Anker umschließen Text und verwandeln ihn in Links. Das `href`-Attribut gibt die Webadresse an, auf die der Link verweist. Sie können diese grundlegende Version unten schreiben, mit _nur_ dem `href`-Attribut, so:

```html
<a href=https://www.mozilla.org/>favorite website</a>
```

Anker können auch ein `title`-Attribut haben, eine Beschreibung der verlinkten Seite. Sobald wir jedoch in der gleichen Weise wie das `href`-Attribut das `title` hinzufügen, gibt es Probleme:

```html-nolint example-bad
<a href=https://www.mozilla.org/ title=The Mozilla homepage>favorite website</a>
```

Wie oben geschrieben, missinterpretiert der Browser das Markup, indem er das `title`-Attribut für drei Attribute hält: ein title-Attribut mit dem Wert `The`, und zwei boolesche Attribute, `Mozilla` und `homepage`. Offensichtlich ist dies nicht beabsichtigt! Es wird zu Fehlern oder unerwartetem Verhalten führen, wie im folgenden Live-Beispiel zu sehen ist. Versuchen Sie, über den Link zu fahren, um den Titeltext anzuzeigen!

{{ EmbedLiveSample('Omitting_quotes_around_attribute_values', 700, 100, "", "") }}

Schließen Sie immer die Attributanführungszeichen ein. Das vermeidet solche Probleme und führt zu lesbarerem Code.

### Einzel- oder doppelte Anführungszeichen?

In diesem Artikel werden Sie auch feststellen, dass die Attribute in doppelte Anführungszeichen eingeschlossen sind. Sie könnten jedoch in einigen HTML-Codes einzelne Anführungszeichen sehen. Dies ist eine Frage des Stils. Sie können wählen, welche Sie bevorzugen. Beide dieser Zeilen sind gleichwertig:

```html-nolint
<a href='https://www.example.com'>A link to my example.</a>

<a href="https://www.example.com">A link to my example.</a>
```

Achten Sie darauf, einzelne Anführungszeichen und doppelte Anführungszeichen nicht zu mischen. Dieses Beispiel (unten) zeigt eine Art von Mischform, die schiefgehen wird:

```html-nolint example-bad
<a href="https://www.example.com'>A link to my example.</a>
```

Wenn Sie jedoch eine Art von Anführungszeichen verwenden, können Sie die andere Art von Anführungszeichen _innerhalb_ Ihrer Attributwerte einschließen:

```html
<a href="https://www.example.com" title="Isn't this fun?">
  A link to my example.
</a>
```

Um Anführungszeichen innerhalb anderer Anführungszeichen des gleichen Typs (einzelne Anführungszeichen oder doppelte Anführungszeichen) zu verwenden, verwenden Sie {{Glossary("character_reference", "Zeichenreferenzen")}}.
Zum Beispiel wird dies nicht funktionieren:

```html-nolint example-bad
<a href="https://www.example.com" title="An "interesting" reference">A link to my example.</a>
```

Stattdessen müssen Sie dies tun:

```html-nolint
<a href="https://www.example.com" title="An &quot;interesting&quot; reference">A link to my example.</a>
```

## Anatomie eines HTML-Dokuments

Individuelle HTML-Elemente sind alleine nicht sehr nützlich. Als nächstes werfen wir einen Blick darauf, wie einzelne Elemente kombiniert werden, um eine gesamte HTML-Seite zu bilden:

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

1. `<!doctype html>`: Der Doctype. Als HTML jung war (1991-1992), sollten Doctypes als Links zu einer Reihe von Regeln fungieren, denen die HTML-Seite folgen musste, um als gutes HTML zu gelten. Doctypes sahen früher etwa so aus:

   ```html
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   ```

   In jüngerer Zeit ist der Doctype ein historisches Relikt, das enthalten sein muss, damit alles andere richtig funktioniert. `<!doctype html>` ist die kürzeste Zeichenkette, die als gültiger Doctype zählt. Das ist alles, was Sie wissen müssen!

2. `<html></html>`: Das {{htmlelement("html")}}-Element. Dieses Element umschließt den gesamten Inhalt auf der Seite. Es wird manchmal als Wurzelelement bezeichnet.
3. `<head></head>`: Das {{htmlelement("head")}}-Element. Dieses Element fungiert als Container für alles, was Sie auf der HTML-Seite aufnehmen möchten, **was nicht der Inhalt** ist, den die Seite den Betrachtern zeigt. Dazu gehören Schlüsselwörter und eine Seitenbeschreibung, die in Suchergebnissen erscheinen würde, CSS zur Stilisierung der Inhalte, Zeichensatzdeklarationen und mehr. Sie lernen mehr darüber im nächsten Artikel der Serie.
4. `<meta charset="utf-8">`: Das {{htmlelement("meta")}}-Element. Dieses Element stellt Metadaten dar, die nicht durch andere HTML-Meta-bezogene Elemente wie {{htmlelement("base")}}, {{htmlelement("link")}}, {{htmlelement("script")}}, {{htmlelement("style")}} oder {{htmlelement("title")}} dargestellt werden können. Das [`charset`](/de/docs/Web/HTML/Element/meta#charset)-Attribut spezifiziert die Zeichenkodierung für Ihr Dokument als UTF-8, das die meisten Zeichen aus dem überwiegenden Teil der von Menschen geschriebenen Sprachen umfasst. Mit dieser Einstellung kann die Seite jetzt jeden Textinhalt verarbeiten, den sie möglicherweise enthält. Es gibt keinen Grund, dies nicht zu setzen, und es kann helfen, einige Probleme später zu vermeiden.
5. `<title></title>`: Das {{htmlelement("title")}}-Element. Dies setzt den Titel der Seite, was der Titel ist, der im Browser-Tab erscheint, in dem die Seite geladen ist. Der Seitentitel wird auch verwendet, um die Seite zu beschreiben, wenn sie als Lesezeichen gesetzt wird.
6. `<body></body>`: Das {{htmlelement("body")}}-Element. Dies enthält _alle_ Inhalte, die auf der Seite angezeigt werden, einschließlich Text, Bilder, Videos, Spiele, abspielbare Audiospuren oder was auch immer.

### Aktives Lernen: Einige Funktionen zu einem HTML-Dokument hinzufügen

Wenn Sie experimentieren möchten, indem Sie einige HTML auf Ihrem lokalen Computer schreiben, können Sie:

1. Kopieren Sie das oben aufgeführte HTML-Seitenbeispiel.
2. Erstellen Sie eine neue Datei in Ihrem Texteditor.
3. Fügen Sie den Code in die neue Textdatei ein.
4. Speichern Sie die Datei als `index.html`.

> [!NOTE]
> Sie können diese grundlegende HTML-Vorlage auch im [MDN Learning Area GitHub-Repo](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) finden.

Sie können diese Datei jetzt in einem Webbrowser öffnen, um zu sehen, wie der gerenderte Code aussieht. Bearbeiten Sie den Code und aktualisieren Sie den Browser, um zu sehen, was das Ergebnis ist. Zunächst sieht die Seite etwa so aus:

![Eine einfache HTML-Seite, die sagt, Dies ist meine Seite](template-screenshot.png)

In dieser Übung können Sie den Code lokal auf Ihrem Computer bearbeiten, wie zuvor beschrieben, oder Sie können ihn im Beispielfenster unten bearbeiten (das bearbeitbare Beispielfenster stellt nur den Inhalt des {{htmlelement("body")}}-Elements dar, in diesem Fall). Schärfen Sie Ihre Fähigkeiten, indem Sie die folgenden Aufgaben durchführen:

- Fügen Sie direkt unter dem öffnenden Tag des {{htmlelement("body")}}-Elements einen Haupttitel für das Dokument hinzu. Dieser sollte in einem `<h1>`-Tag beginnen und mit einem `</h1>`-Tag schließen.
- Bearbeiten Sie den Absatzinhalt, um Text über ein Thema einzuschließen, das Sie interessant finden.
- Heben Sie wichtige Wörter fett hervor, indem Sie sie in einem `<strong>`-Tag öffnen und mit einem `</strong>`-Tag schließen.
- Fügen Sie Ihrem Absatz einen Link hinzu, wie [früher im Artikel erklärt](#active_learning_adding_attributes_to_an_element).
- Fügen Sie Ihrem Dokument ein Bild hinzu. Platzieren Sie es unter dem Absatz, wie [früher im Artikel erklärt](#leere_elemente). Verdienen Sie Bonuspunkte, wenn es Ihnen gelingt, auf ein anderes Bild zu verlinken (entweder lokal auf Ihrem Computer oder irgendwo anders im Web).

Wenn Sie einen Fehler machen, können Sie es immer mit der _Zurücksetzen_-Taste zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Taste, um die Antwort zu sehen.

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

In den obigen Beispielen haben Sie vielleicht bemerkt, dass viel Leerraum im Code enthalten ist. Dieser ist optional. Diese beiden Codeschnipsel sind gleichwertig:

```html-nolint
<p id="noWhitespace">Dogs are silly.</p>

<p id="whitespace">Dogs
    are
        silly.</p>
```

Unabhängig davon, wie viel Leerraum Sie innerhalb des HTML-Elementinhalts verwenden (was ein oder mehrere Leerzeichen, aber auch Zeilenumbrüche umfassen kann), reduziert der HTML-Parser jede Leerraumsequenz auf ein einziges Leerzeichen, wenn der Code gerendert wird. Warum also so viel Leerraum verwenden? Die Antwort ist Lesbarkeit.

Es kann einfacher sein, zu verstehen, was in Ihrem Code passiert, wenn dieser schön formatiert ist. In unserem HTML haben wir jede verschachtelte Ebene um zwei Leerzeichen mehr eingerückt als die vorherige. Es liegt an Ihnen, den Formatierungsstil (wie viele Leerzeichen für jede Einrückungsebene, zum Beispiel) zu wählen, aber Sie sollten darüber nachdenken, es zu formatieren.

Sehen wir uns an, wie der Browser die beiden Absätze oben mit und ohne Leerzeichen rendert:

{{ EmbedLiveSample('Whitespace_in_HTML', 700, 100) }}

> [!NOTE]
> Auf das [innerHTML](/de/docs/Web/API/Element/innerHTML) von Elementen über JavaScript zuzugreifen, behält den gesamten Leerraum bei.
> Dies kann zu unerwarteten Ergebnissen führen, wenn der Leerraum vom Browser angepasst wird.

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

In HTML sind die Zeichen `<`, `>`, `"`, `'`, und `&` Sonderzeichen. Sie sind Teile der HTML-Syntax selbst. Wie fügt man also eines dieser Sonderzeichen in Ihren Text ein? Beispielsweise, wenn Sie ein Kaufmanns-Und-Zeichen oder ein Kleiner-als-Zeichen verwenden wollen, ohne das es als Code interpretiert wird.

Sie machen dies mit {{Glossary("character_reference", "Zeichenreferenzen")}}. Dies sind spezielle Codes, die Zeichen darstellen sollen, die genau in diesen Situationen verwendet werden sollen. Jede Zeichenreferenz beginnt mit einem Ampersand (&) und endet mit einem Semikolon (;).

| Literalzeichen  | Entsprechende Zeichenreferenz |
| ----------------| ------------------------------|
| <               | `&lt;`                        |
| >               | `&gt;`                        |
| "               | `&quot;`                      |
| '               | `&apos;`                      |
| &               | `&amp;`                       |

Die entsprechenden Zeichenreferenzen sind leicht zu merken, da der Text, den sie verwenden, als weniger als für `&lt;`, als Zitat für `&quot;` und ähnlich für andere gesehen werden kann. Um mehr über Entitätsreferenzen zu erfahren, siehe [Liste von XML- und HTML-Zeichenentitätsreferenzen](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references) (Wikipedia).

Im folgenden Beispiel gibt es zwei Absätze:

```html-nolint
<p>In HTML, you define a paragraph using the <p> element.</p>

<p>In HTML, you define a paragraph using the &lt;p&gt; element.</p>
```

Im Live-Output unten können Sie sehen, dass der erste Absatz schiefgegangen ist. Der Browser interpretiert die zweite Instanz von `<p>` als beginnenden neuen Absatz. Der zweite Absatz sieht korrekt aus, weil er mit Zeichenreferenzen eingeklammerte Winkelklammern hat.

{{ EmbedLiveSample('Entity_references_Including_special_characters_in_HTML', 700, 200, "", "") }}

> [!NOTE]
> Sie müssen für keine anderen Symbole Entitätsreferenzen verwenden, da moderne Browser die tatsächlichen Symbole einwandfrei behandeln werden, solange die [Zeichenkodierung Ihres HTMLs auf UTF-8 gesetzt ist](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#specifying_your_documents_character_encoding).

## HTML-Kommentare

HTML hat einen Mechanismus, um Kommentare im Code zu schreiben. Browser ignorieren Kommentare und machen Kommentare effektiv unsichtbar für den Benutzer. Der Zweck von Kommentaren besteht darin, Ihnen zu ermöglichen, Notizen in den Code einzufügen, um Ihre Logik oder Codierung zu erklären. Dies ist sehr nützlich, wenn Sie zu einem Code zurückkehren, nachdem Sie so lange weg waren, dass Sie sich nicht mehr vollständig daran erinnern. Ebenso sind Kommentare wertvoll, wenn verschiedene Personen Änderungen und Aktualisierungen vornehmen.

Um einen HTML-Kommentar zu schreiben, umschließen Sie ihn mit den speziellen Markierungen `<!--` und `-->`. Zum Beispiel:

```html
<p>I'm not inside a comment</p>

<!-- <p>I am!</p> -->
```

Wie unten zu sehen, wird nur der erste Absatz im Live-Output angezeigt.

{{ EmbedLiveSample('HTML_comments', 700, 100, "", "") }}

## Zusammenfassung

Sie haben es bis zum Ende des Artikels geschafft! Wir hoffen, Sie haben Ihre Tour durch die Grundlagen von HTML genossen.

An diesem Punkt sollten Sie verstehen, wie HTML aussieht und wie es auf grundlegender Ebene funktioniert. Sie sollten auch in der Lage sein, einige Elemente und Attribute zu schreiben. Die nachfolgenden Artikel dieses Moduls gehen tiefer auf einige der hier eingeführten Themen ein und präsentieren weitere Konzepte der Sprache.

- Sobald Sie beginnen, mehr über HTML zu lernen, denken Sie darüber nach, die Grundlagen von CSS (Cascading Style Sheets) zu lernen. [CSS](/de/docs/Learn_web_development/Core/Styling_basics) ist die Sprache, die verwendet wird, um Webseiten zu stylen, wie das Ändern von Schriftarten oder Farben oder das Ändern des Seitenlayouts. HTML und CSS arbeiten gut zusammen, wie Sie bald entdecken werden.

## Siehe auch

- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}
