---
title: Grundlegende HTML-Syntax
slug: Learn_web_development/Core/Structuring_content/Basic_HTML_syntax
l10n:
  sourceCommit: 427efbee9e0da53517f45420af87a66a2a6b6e19
---

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}

In diesem Artikel behandeln wir die absoluten Grundlagen von HTML. Um Ihnen den Einstieg zu erleichtern, definiert dieser Artikel Elemente, Attribute und alle anderen wichtigen Begriffe, die Sie möglicherweise gehört haben. Außerdem wird erklärt, wie diese in HTML passen. Sie werden lernen, wie HTML-Elemente strukturiert sind, wie eine typische HTML-Seite aufgebaut ist und welche anderen wichtigen grundlegenden Sprachmerkmale es gibt. Auf dem Weg dorthin wird es auch Gelegenheit geben, mit HTML zu experimentieren!

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
          <li>Die Notwendigkeit eines Doctypes am Anfang von HTML-Dokumenten. Sein ursprünglich beabsichtigter Zweck und die Tatsache, dass er jetzt eher ein historisches Relikt ist.</li>
          <li>Verständnis, dass HTML korrekt verschachtelt sein muss.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist HTML?

{{Glossary("HTML", "HTML")}} (HyperText Markup Language) ist eine _Markup-Sprache_, die Webbrowsern mitteilt, wie die von Ihnen besuchten Webseiten strukturiert werden sollen. Es kann so kompliziert oder so einfach sein, wie der Webentwickler es möchte. HTML besteht aus einer Reihe von {{Glossary("Element", "Elementen")}}, die Sie verwenden, um verschiedene Teile von Inhalten einzuschließen, zu umschließen oder _auszuzeichnen_, damit sie auf eine bestimmte Weise erscheinen oder funktionieren. Mit den umschließenden {{Glossary("Tag", "Tags")}} kann Inhalt zu einem Hyperlink werden, um zu einer anderen Seite zu verbinden, Wörter kursiv zu machen und so weiter. Zum Beispiel betrachte die folgende Textzeile:

```plain
My cat is very grumpy
```

Wenn wir möchten, dass der Text für sich alleine steht, könnten wir angeben, dass es sich um einen Absatz handelt, indem wir ihn in einem Absatz-Element ({{htmlelement("p")}}) einschließen:

```html
<p>My cat is very grumpy</p>
```

HTML befindet sich in Textdateien, die als **HTML-Dokumente** oder einfach nur **Dokumente** bezeichnet werden, mit der Dateierweiterung `.html`. Wo wir zuvor über Webseiten gesprochen haben, enthält ein HTML-Dokument den Inhalt der Webseite und gibt ihre Struktur vor.

Die häufigste HTML-Datei, die Sie antreffen werden, ist `index.html`, die in der Regel verwendet wird, um den Inhalt der Startseite einer Website zu enthalten. Es ist auch üblich, Unterordner mit eigenen `index.html` zu sehen, sodass eine Website mehrere Indexdateien an verschiedenen Stellen haben kann.

> [!NOTE]
> Tags in HTML sind nicht case-sensitiv. Das bedeutet, dass sie in Groß- oder Kleinbuchstaben geschrieben werden können. Zum Beispiel könnte ein {{htmlelement("title")}}-Tag als `<title>`, `<TITLE>`, `<Title>`, `<TiTlE>`, etc., geschrieben werden und es würde funktionieren. Es ist jedoch bewährte Praxis, alle Tags in Kleinbuchstaben zu schreiben, um Konsistenz und Lesbarkeit zu gewährleisten.

## Anatomie eines HTML-Elements

Lassen Sie uns unser Absatzelement aus dem vorherigen Abschnitt näher betrachten:

![Ein Beispiel für ein Code-Snippet, das die Struktur eines HTML-Elements zeigt.<p> Meine Katze ist sehr mürrisch </p>.](grumpy-cat-small.png)

Die Anatomie unseres Elements ist:

- **Das öffnende Tag:** Dies besteht aus dem Namen des Elements (in diesem Beispiel _p_ für Absatz), eingeschlossen in öffnenden und schließenden Winkelklammern. Dieses öffnende Tag markiert, wo das Element beginnt oder zu wirken beginnt. In diesem Beispiel steht es vor dem Beginn des Absatztextes.
- **Der Inhalt:** Dies ist der Inhalt des Elements. In diesem Beispiel ist dies der Absatztext.
- **Das schließende Tag:** Dies ist das gleiche wie das öffnende Tag, außer dass es einen Schrägstrich vor dem Elementnamen enthält. Dies markiert, wo das Element endet. Das Fehlen eines schließenden Tags ist ein häufiger Anfängerfehler, der eigenartige Ergebnisse erzeugen kann.

Das Element besteht aus dem öffnenden Tag, gefolgt von Inhalt und gefolgt vom schließenden Tag.

> [!NOTE]
> Schauen Sie sich bei unserem Lernpartner Scrimba das [HTML-Tags](https://scrimba.com/learn-html-and-css-c0p/~02?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>-Scrim für eine interaktive Erklärung von HTML-Tags an.

### Aktives Lernen: Erstellen Ihres ersten HTML-Elements

Bearbeiten Sie die folgende Zeile im Bereich "Editierbarer Code", indem Sie sie mit den Tags `<em>` und `</em>.` umschließen. Um das Element zu _öffnen_, setzen Sie das öffnende Tag `<em>` am Anfang der Zeile. Um das Element zu _schließen_, setzen Sie das schließende Tag `</em>` am Ende der Zeile. Dadurch sollte der Text kursiv formatiert werden! Sehen Sie, wie sich Ihre Änderungen im _Ausgabe_-Bereich live aktualisieren.

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

Elemente können innerhalb anderer Elemente platziert werden. Dies wird als _Verschachtelung_ bezeichnet. Wenn wir angeben wollten, dass unsere Katze **sehr** mürrisch ist, könnten wir das Wort _sehr_ in ein {{htmlelement("strong")}}-Element einschließen, was bedeutet, dass das Wort eine stärkere Textformatierung haben soll:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

Es gibt eine richtige und eine falsche Art, Verschachtelungen zu machen. Im obigen Beispiel haben wir das `p`-Element zuerst geöffnet, dann das `strong`-Element. Für eine korrekte Verschachtelung sollten wir das `strong`-Element zuerst schließen, bevor wir das `p`-Element schließen.

Das folgende Beispiel zeigt die _falsche_ Art, Verschachtelungen zu machen:

```html-nolint example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

Die **Tags müssen so geöffnet und geschlossen werden, dass sie ineinander oder außerhalb voneinander sind**. Bei der Art von Überschneidung im obigen Beispiel, muss der Browser erraten, was Sie beabsichtigt haben. Diese Art von Raten kann zu unerwarteten Ergebnissen führen.

### Leere Elemente

Nicht alle Elemente folgen dem Muster eines öffnenden Tags, Inhalts und eines schließenden Tags. Einige Elemente bestehen aus einem einzelnen Tag, das typischerweise verwendet wird, um etwas in das Dokument einzufügen oder einzubetten. Solche Elemente werden {{Glossary("void_element", "leere Elemente")}} genannt. Zum Beispiel bettet das {{htmlelement("img")}}-Element eine Bilddatei auf eine Seite ein:

```html
<img
  src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"
  alt="Firefox icon" />
```

Dies würde folgendes ausgeben:

{{ EmbedLiveSample('Void_elements', 700, 300, "", "") }}

> [!NOTE]
> In HTML ist es nicht erforderlich, ein `/` am Ende eines Void-Element-Tags hinzuzufügen, zum Beispiel: `<img src="images/cat.jpg" alt="cat" />`. Es ist jedoch auch eine gültige Syntax, und Sie können dies tun, wenn Sie möchten, dass Ihr HTML auch als XML gültig ist.

## Attribute

Elemente können auch Attribute haben. Attribute sehen so aus:

![Absatz-Tag mit hervorgehobenem 'class="editor-note"'-Attribut](grumpy-cat-attribute-small.png)

Attribute enthalten zusätzliche Informationen über das Element, die nicht im Inhalt erscheinen. In diesem Beispiel ist das **`class`**-Attribut ein Identifizierungsname, der verwendet wird, um das Element mit Stilinformationen zu versehen.

Ein Attribut sollte haben:

- Einen Abstand zwischen dem Attribut und dem Elementnamen. (Für ein Element mit mehr als einem Attribut sollten die Attribute ebenfalls durch Leerzeichen getrennt werden.)
- Den Attributnamen, gefolgt von einem Gleichheitszeichen.
- Einen Attributwert, eingeschlossen in öffnende und schließende Anführungszeichen.

### Aktives Lernen: Attribute zu einem Element hinzufügen

Das `<img>`-Element kann eine Reihe von Attributen haben, einschließlich:

- `src`
  - : Das `src`-Attribut ist ein **erforderliches** Attribut, das den Speicherort des Bildes angibt. Zum Beispiel: `src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"`.
- `alt`
  - : Das `alt`-Attribut gibt eine Textbeschreibung des Bildes an. Zum Beispiel: `alt="Das Firefox-Symbol"`.
- `width`
  - : Das `width`-Attribut gibt die Breite des Bildes an, wobei die Einheit Pixel ist. Zum Beispiel: `width="300"`.
- `height`
  - : Das `height`-Attribut gibt die Höhe des Bildes an, wobei die Einheit Pixel ist. Zum Beispiel: `height="300"`.

Bearbeiten Sie die folgende Zeile im _Eingabe_-Bereich, um sie in ein Bild zu verwandeln.

1. Finden Sie ein beliebiges Bild online, klicken Sie mit der rechten Maustaste darauf und wählen Sie _Bildlink/-adresse kopieren_.
2. Fügen Sie im folgenden Bereich das `src`-Attribut hinzu und füllen Sie es mit dem Link aus Schritt 1.
3. Setzen Sie das `alt`-Attribut.
4. Fügen Sie die `width`- und `height`-Attribute hinzu.

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

Manchmal werden Sie Attribute sehen, die ohne Werte geschrieben sind. Dies ist völlig akzeptabel. Diese werden {{Glossary("Boolean/HTML", "boolesche Attribute")}} genannt. Wenn ein boolesches Attribut ohne Wert oder mit einem beliebigen Wert, sogar wie `"false"`, geschrieben wird, ist das boolesche Attribut immer auf true gesetzt. Ansonsten, falls das Attribut nicht in einem HTML-Tag geschrieben ist, ist das Attribut auf false gesetzt. Die Spezifikation erfordert, dass der Attributwert entweder der leere String ist (einschließlich wenn das Attribut keinen Wert explizit angegeben hat) oder derselbe wie der Attributname, aber andere Werte funktionieren gleich. Betrachten Sie beispielsweise das [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled)-Attribut, das Sie Formular-Eingabeelementen zuweisen können. (Sie verwenden dies, um die Formulareingabeelemente zu _deaktivieren_, damit der Benutzer keine Einträge machen kann. Die deaktivierten Elemente haben typischerweise ein ausgegrautes Aussehen.) Zum Beispiel:

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

Zum Vergleich enthält das obige Beispiel auch ein nicht deaktiviertes Formular-Eingabeelement. Der HTML-Code aus dem obigen Beispiel erzeugt dieses Ergebnis:

{{ EmbedLiveSample('Boolean_attributes', 700, 100, "", "") }}

### Weglassen von Anführungszeichen um Attributwerte

Wenn Sie Code für viele andere Websites ansehen, stoßen Sie möglicherweise auf eine Reihe von seltsamen Markup-Stilen, einschließlich Attributwerten ohne Anführungszeichen. Dies ist unter bestimmten Umständen erlaubt, kann aber unter anderen Umständen Ihr Markup auch beschädigen. Das Element im unten stehenden Code-Snippet, `<a>`, wird Anker genannt. Anker umschließen Text und verwandeln ihn in Links. Das `href`-Attribut gibt die Webadresse an, auf die der Link zeigt. Sie können diese grundlegende Version unten schreiben, mit _nur_ dem `href`-Attribut, wie folgt:

```html
<a href=https://www.mozilla.org/>favorite website</a>
```

Anker können auch ein `title`-Attribut haben, eine Beschreibung der verlinkten Seite. Sobald wir jedoch das `title` auf die gleiche Weise wie das `href`-Attribut hinzufügen, gibt es Probleme:

```html-nolint example-bad
<a href=https://www.mozilla.org/ title=The Mozilla homepage>favorite website</a>
```

Wie oben geschrieben, missinterpretiert der Browser das Markup und hält das `title`-Attribut für drei Attribute: ein title-Attribut mit dem Wert `The` und zwei boolesche Attribute, `Mozilla` und `homepage`. Offensichtlich ist dies nicht beabsichtigt! Es wird zu Fehlern oder unerwartetem Verhalten führen, wie Sie im folgenden Live-Beispiel sehen können. Versuchen Sie, den Link zu überfahren, um den Titeltext anzuzeigen!

{{ EmbedLiveSample('Omitting_quotes_around_attribute_values', 700, 100, "", "") }}

Fügen Sie immer die Attribut-Anführungszeichen hinzu. Es verhindert solche Probleme und führt zu lesbarerem Code.

### Einfache oder doppelte Anführungszeichen?

In diesem Artikel werden die Attribute in doppelte Anführungszeichen eingeschlossen. Sie können jedoch auch einfache Anführungszeichen in einigen HTML-Codes sehen. Dies ist eine Stilfrage. Sie können wählen, welche Sie bevorzugen. Beide dieser Zeilen sind gleichwertig:

```html-nolint
<a href='https://www.example.com'>A link to my example.</a>

<a href="https://www.example.com">A link to my example.</a>
```

Stellen Sie sicher, dass Sie keine einfachen und doppelten Anführungszeichen mischen. Dieses Beispiel (unten) zeigt eine Art Mischung von Anführungszeichen, die nicht funktionieren wird:

```html-nolint example-bad
<a href="https://www.example.com'>A link to my example.</a>
```

Wenn Sie jedoch einen Typ Anführungszeichen verwenden, können Sie den anderen Typ von Anführungszeichen _innerhalb_ Ihrer Attributwerte einfügen:

```html
<a href="https://www.example.com" title="Isn't this fun?">
  A link to my example.
</a>
```

Um Anführungszeichen innerhalb anderer Anführungszeichen desselben Typs (einfache oder doppelte Anführungszeichen) zu verwenden, verwenden Sie {{Glossary("character_reference", "Zeichenreferenzen")}}.
Zum Beispiel wird dies nicht funktionieren:

```html-nolint example-bad
<a href="https://www.example.com" title="An "interesting" reference">A link to my example.</a>
```

Stattdessen müssen Sie dies tun:

```html-nolint
<a href="https://www.example.com" title="An &quot;interesting&quot; reference">A link to my example.</a>
```

## Anatomie eines HTML-Dokuments

Einzelne HTML-Elemente sind für sich wenig nützlich. Schauen wir uns als nächstes an, wie einzelne Elemente sich kombinieren, um eine vollständige HTML-Seite zu bilden:

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

1. `<!doctype html>`: Der Doctype. Als HTML jung war (1991-1992), waren Doctypes als Links zu einem Satz von Regeln gedacht, denen die HTML-Seite folgen musste, um als gutes HTML angesehen zu werden. Doctypes sahen früher so aus:

   ```html
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   ```

   In jüngerer Zeit ist der Doctype ein historisches Relikt, das eingefügt werden muss, damit alles andere richtig funktioniert. `<!doctype html>` ist die kürzeste Zeichenfolge, die als gültiger Doctype zählt. Das ist alles, was Sie wissen müssen!

2. `<html></html>`: Das {{htmlelement("html")}}-Element. Dieses Element umschließt den gesamten Inhalt der Seite. Es wird manchmal als das Wurzelelement bezeichnet.
3. `<head></head>`: Das {{htmlelement("head")}}-Element. Dieses Element dient als Container für alles, was Sie auf der HTML-Seite einfügen möchten, **was nicht der Inhalt** ist, den die Seite den Betrachtern zeigt. Dazu gehören Schlüsselwörter und eine Seitenbeschreibung, die in den Suchergebnissen erscheinen würden, CSS zur Gestaltung von Inhalten, Zeichensatzdeklarationen und mehr. Sie werden mehr darüber im nächsten Artikel der Reihe erfahren.
4. `<meta charset="utf-8">`: Das {{htmlelement("meta")}}-Element. Dieses Element repräsentiert Metadaten, die nicht durch andere HTML-Metadaten-Elemente wie {{htmlelement("base")}}, {{htmlelement("link")}}, {{htmlelement("script")}}, {{htmlelement("style")}} oder {{htmlelement("title")}} dargestellt werden können. Das [`charset`](/de/docs/Web/HTML/Reference/Elements/meta#charset)-Attribut gibt die Zeichencodierung für Ihr Dokument als UTF-8 an, die die meisten Zeichen aus der großen Mehrheit der menschlichen Schriftsysteme enthält. Mit dieser Einstellung kann die Seite jetzt jeden Textinhalt verarbeiten, den sie möglicherweise enthält. Es gibt keinen Grund, dies nicht zu setzen, und es kann helfen, einige Probleme später zu vermeiden.
5. `<title></title>`: Das {{htmlelement("title")}}-Element. Dieses setzt den Titel der Seite, der der Titel ist, der im Browser-Tab erscheint, in dem die Seite geladen wird. Der Seitentitel wird auch verwendet, um die Seite zu beschreiben, wenn sie als Lesezeichen gespeichert wird.
6. `<body></body>`: Das {{htmlelement("body")}}-Element. Dies enthält _alle_ Inhalte, die auf der Seite angezeigt werden, einschließlich Text, Bilder, Videos, Spiele, abspielbare Audiodateien oder was auch immer.

### Aktives Lernen: Hinzufügen von Funktionen zu einem HTML-Dokument

Wenn Sie experimentieren möchten, indem Sie ein bisschen HTML auf Ihrem lokalen Computer schreiben, können Sie:

1. Kopieren Sie das oben aufgeführte HTML-Seiten-Beispiel.
2. Erstellen Sie eine neue Datei in Ihrem Texteditor.
3. Fügen Sie den Code in die neue Textdatei ein.
4. Speichern Sie die Datei als `index.html`.

> [!NOTE]
> Sie können diese grundlegende HTML-Vorlage auch im [MDN Learning Area GitHub-Repositorium](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) finden.

Jetzt können Sie diese Datei in einem Webbrowser öffnen, um zu sehen, wie der gerenderte Code aussieht. Bearbeiten Sie den Code und aktualisieren Sie den Browser, um das Ergebnis zu sehen. Zuerst sieht die Seite so aus:

![Eine einfache HTML-Seite, die sagt: Dies ist meine Seite](template-screenshot.png)

In dieser Übung können Sie den Code lokal auf Ihrem Computer bearbeiten, wie zuvor beschrieben, oder Sie können ihn im untenstehenden Beispiel bearbeiten (das bearbeitbare Beispiel zeigt nur den Inhalt des {{htmlelement("body")}}-Elements in diesem Fall). Schärfen Sie Ihre Fähigkeiten, indem Sie die folgenden Aufgaben umsetzen:

- Fügen Sie direkt unter dem öffnenden Tag des {{htmlelement("body")}}-Elements einen Haupttitel für das Dokument hinzu. Dieser sollte in einem `<h1>` öffnenden Tag und einem `</h1>` schließenden Tag eingeschlossen sein.
- Bearbeiten Sie den Absatz-Inhalt, um Text über ein Thema einzufügen, das Sie interessant finden.
- Lassen Sie wichtige Wörter fett hervorstechen, indem Sie sie in einem `<strong>` öffnenden Tag und einem `</strong>` schließenden Tag einschließen.
- Fügen Sie Ihrem Absatz einen Link hinzu, wie [früher im Artikel erläutert](#active_learning_adding_attributes_to_an_element).
- Fügen Sie ein Bild in Ihr Dokument ein. Platzieren Sie es unter dem Absatz, wie [früher im Artikel erläutert](#leere_elemente). Verdienen Sie Bonuspunkte, wenn es Ihnen gelingt, auf ein anderes Bild zu verlinken (entweder lokal auf Ihrem Computer oder irgendwo anders im Web).

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

In den obigen Beispielen haben Sie möglicherweise bemerkt, dass im Code viel Leerraum enthalten ist. Dieser ist optional. Diese beiden Code-Snippets sind gleichwertig:

```html-nolint
<p id="noWhitespace">Dogs are silly.</p>

<p id="whitespace">Dogs
    are
        silly.</p>
```

Unabhängig davon, wie viel Leerraum Sie im Inhalt eines HTML-Elements verwenden (was ein oder mehrere Leerzeichenzeichen, aber auch Zeilenumbrüche umfassen kann), reduziert der HTML-Parser jede Leerzeichenfolge auf ein einzelnes Leerzeichen, wenn der Code gerendert wird. Warum also so viel Leerraum verwenden? Die Antwort ist Lesbarkeit.

Es kann einfacher sein zu verstehen, was in Ihrem Code vor sich geht, wenn Sie ihn schön formatiert haben. In unserem HTML haben wir jedes verschachtelte Element um zwei Leerzeichen mehr eingerückt als das, in dem es sich befindet. Es liegt an Ihnen, den Stil der Formatierung zu wählen (wie viele Leerzeichen für jede Ebene der Einrückung zum Beispiel), aber Sie sollten überlegen, es zu formatieren.

Werfen wir einen Blick darauf, wie der Browser die beiden Absätze oben mit und ohne Leerraum rendert:

{{ EmbedLiveSample('Whitespace_in_HTML', 700, 100) }}

> [!NOTE]
> Der Zugriff auf das [innerHTML](/de/docs/Web/API/Element/innerHTML) von Elementen aus JavaScript wird den gesamten Leerraum intakt halten.
> Dies kann zu unerwarteten Ergebnissen führen, wenn der Leerraum vom Browser getrimmt wird.

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

## Zeichenreferenzen: Sonderzeichen in HTML einfügen

In HTML sind die Zeichen `<`, `>`, `"`, `'` und `&` Sonderzeichen. Sie sind Teile der HTML-Syntax selbst. Wie fügen Sie also eines dieser Sonderzeichen in Ihren Text ein? Zum Beispiel, wenn Sie ein Kaufmanns-Und oder ein Kleiner-Zeichen verwenden möchten und es nicht als Code interpretiert werden soll.

Sie tun dies mit {{Glossary("character_reference", "Zeichenreferenzen")}}. Das sind spezielle Codes, die Zeichen repräsentieren, um in diesen genauen Situationen verwendet zu werden. Jede Zeichenreferenz beginnt mit einem Ampersand (&) und endet mit einem Semikolon (;).

| Buchstäbliches Zeichen | Zeichenreferenz-Äquivalent |
| ---------------------- | -------------------------- |
| <                      | `&lt;`                     |
| >                      | `&gt;`                     |
| "                      | `&quot;`                   |
| '                      | `&apos;`                   |
| &                      | `&amp;`                    |

Das Zeichenreferenz-Äquivalent kann leicht erinnert werden, weil der Text, den es verwendet, als kleiner als für `&lt;`, Anführungszeichen für `&quot;` und ähnlich für andere gesehen werden kann. Mehr Informationen über Entitätsreferenzen finden Sie in der [Liste der XML- und HTML-Zeichenentitäts-Referenzen](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references) (Wikipedia).

Im folgenden Beispiel gibt es zwei Absätze:

```html-nolint
<p>In HTML, you define a paragraph using the <p> element.</p>

<p>In HTML, you define a paragraph using the &lt;p&gt; element.</p>
```

Im Live-Ergebnis unten sehen Sie, dass der erste Absatz falsch gegangen ist. Der Browser interpretiert die zweite Instanz von `<p>` als Beginn eines neuen Absatzes. Der zweite Absatz sieht in Ordnung aus, da er mit Zeichenreferenz-Winkelklammern versehen ist.

{{ EmbedLiveSample('Entity_references_Including_special_characters_in_HTML', 700, 200, "", "") }}

> [!NOTE]
> Sie müssen keine Entitätsreferenzen für andere Symbole verwenden, da moderne Browser die tatsächlichen Symbole problemlos verarbeiten, solange die [Zeichencodierung Ihrer HTML-Datei auf UTF-8 eingestellt ist](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#specifying_your_documents_character_encoding).

## HTML-Kommentare

HTML hat einen Mechanismus, um Kommentare im Code zu schreiben. Browser ignorieren Kommentare und machen sie somit für den Benutzer unsichtbar. Zweck der Kommentare ist es, Notizen im Code einzufügen, um Ihre Logik oder Codierung zu erklären. Dies ist sehr nützlich, wenn Sie zu einem Code zurückkehren, nachdem Sie lange genug weg waren, um sich nicht mehr vollständig daran zu erinnern. Ebenso sind Kommentare von unschätzbarem Wert, wenn verschiedene Personen Änderungen und Aktualisierungen vornehmen.

Um einen HTML-Kommentar zu schreiben, umschließen Sie ihn mit den speziellen Markierungen `<!--` und `-->`. Zum Beispiel:

```html
<p>I'm not inside a comment</p>

<!-- <p>I am!</p> -->
```

Wie Sie unten sehen können, wird nur der erste Absatz im Live-Ergebnis angezeigt.

{{ EmbedLiveSample('HTML_comments', 700, 100, "", "") }}

## Zusammenfassung

Sie haben es bis zum Ende des Artikels geschafft! Wir hoffen, dass Ihnen die Tour durch die Grundlagen von HTML gefallen hat.

An diesem Punkt sollten Sie verstehen, wie HTML aussieht und wie es auf grundlegender Ebene funktioniert. Sie sollten auch in der Lage sein, einige Elemente und Attribute zu schreiben. Die nachfolgenden Artikel dieses Moduls gehen tiefer auf einige der hier eingeführten Themen ein und präsentieren auch andere Konzepte der Sprache.

- Wenn Sie mehr über HTML lernen, sollten Sie die Grundlagen von CSS (Cascading Style Sheets) erlernen. [CSS](/de/docs/Learn_web_development/Core/Styling_basics) ist die Sprache, die verwendet wird, um Webseiten zu stylen, wie zum Beispiel das Ändern von Schriftarten oder Farben oder das Ändern des Seitenlayouts. HTML und CSS funktionieren gut zusammen, wie Sie bald entdecken werden.

## Siehe auch

- [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color)

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}
