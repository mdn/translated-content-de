---
title: Erste Schritte mit HTML
slug: Learn/HTML/Introduction_to_HTML/Getting_started
l10n:
  sourceCommit: f20d7ae3f5f41aa6d2157246206b0f6f30756e2f
---

{{LearnSidebar}}{{NextMenu("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML")}}

In diesem Artikel behandeln wir die absoluten Grundlagen von HTML. Um Ihnen den Einstieg zu erleichtern, definiert dieser Artikel Elemente, Attribute und alle anderen wichtigen Begriffe, die Sie möglicherweise gehört haben. Er erklärt auch, wie diese in HTML passen. Sie werden lernen, wie HTML-Elemente strukturiert sind, wie eine typische HTML-Seite aufgebaut ist und andere wichtige grundlegende Sprachmerkmale. Unterwegs gibt es auch die Möglichkeit, mit HTML zu experimentieren!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software">Grundlegende Software installiert</a> und Grundkenntnisse im <a href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files">Arbeiten mit Dateien</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Grundlegende Vertrautheit mit HTML erlangen und das Schreiben einiger HTML-Elemente üben.
      </td>
    </tr>
  </tbody>
</table>

## Was ist HTML?

[HTML](/de/docs/Glossary/HTML) (HyperText Markup Language) ist eine _Markup-Sprache_, die Webbrowsern mitteilt, wie sie die von Ihnen besuchten Webseiten strukturieren sollen. Es kann so kompliziert oder so einfach sein, wie es der Webentwickler möchte. HTML besteht aus einer Reihe von [Elementen](/de/docs/Glossary/Element), die Sie verwenden, um verschiedene Teile des Inhalts zu umfassen, einzuschließen oder zu _kennzeichnen_, damit sie auf eine bestimmte Weise erscheinen oder agieren. Die umschließenden [Tags](/de/docs/Glossary/Tag) können Inhalte in einen Hyperlink verwandeln, um zu einer anderen Seite zu verbinden, Wörter kursiv darstellen und so weiter. Zum Beispiel betrachten wir die folgende Textzeile:

```plain
My cat is very grumpy
```

Wenn wir möchten, dass der Text für sich allein steht, könnten wir angeben, dass es sich um einen Absatz handelt, indem wir ihn in ein Absatz-({{htmlelement("p")}})-Element einschließen:

```html
<p>My cat is very grumpy</p>
```

> [!NOTE]
> Tags in HTML sind nicht case-sensitiv. Das bedeutet, dass sie in Groß- oder Kleinbuchstaben geschrieben werden können. Zum Beispiel könnte ein {{htmlelement("title")}}-Tag als `<title>`, `<TITLE>`, `<Title>`, `<TiTlE>`, etc. geschrieben werden, und es wird funktionieren. Es ist jedoch Best Practice, alle Tags in Kleinbuchstaben zu schreiben, um Konsistenz und Lesbarkeit zu gewährleisten.

## Anatomie eines HTML-Elements

Lassen Sie uns unser Absatz-Element aus dem vorherigen Abschnitt genauer betrachten:

![Ein Beispielcodeausschnitt, der die Struktur eines HTML-Elements zeigt.<p> Meine Katze ist sehr grummelig </p>.](grumpy-cat-small.png)

Die Anatomie unseres Elements ist:

- **Der öffnende Tag:** Dieser besteht aus dem Namen des Elements (in diesem Beispiel _p_ für Absatz), umschlossen von öffnenden und schließenden spitzen Klammern. Dieser öffnende Tag markiert, wo das Element beginnt oder anfängt zu wirken. In diesem Beispiel steht er vor dem Beginn des Absatztextes.
- **Der Inhalt:** Dies ist der Inhalt des Elements. In diesem Beispiel ist es der Absatztext.
- **Der schließende Tag:** Dieser ist derselbe wie der öffnende Tag, außer dass er einen Schrägstrich vor dem Elementnamen enthält. Dieser markiert, wo das Element endet. Das Fehlen eines schließenden Tags ist ein häufiger Anfängerfehler, der zu ungewöhnlichen Ergebnissen führen kann.

Das Element ist der öffnende Tag, gefolgt vom Inhalt, gefolgt vom schließenden Tag.

### Aktives Lernen: Ihr erstes HTML-Element erstellen

Bearbeiten Sie die Zeile unten im Bereich "Editierbarer Code", indem Sie sie mit den Tags `<em>` und `</em>` umschließen. Um das Element zu _öffnen_, setzen Sie den öffnenden Tag `<em>` zu Beginn der Zeile. Um das Element zu _schließen_, setzen Sie den schließenden Tag `</em>` am Ende der Zeile. Dadurch sollte die Zeile kursiv formatiert werden! Beobachten Sie Ihre Änderungen live im _Ausgabebereich_.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der Schaltfläche _Zurücksetzen_ löschen. Sollten Sie wirklich nicht weiterkommen, drücken Sie die Schaltfläche _Lösung anzeigen_, um die Antwort zu sehen.

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

### Verschachteln von Elementen

Elemente können innerhalb anderer Elemente platziert werden. Dies nennt man _Verschachtelung_. Wenn wir sagen wollten, dass unsere Katze **sehr** grummelig ist, könnten wir das Wort _sehr_ in ein {{htmlelement("strong")}}-Element einwickeln, was bedeutet, dass das Wort eine stärkere Textformatierung haben soll:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

Es gibt eine richtige und eine falsche Art zu verschachteln. Im obigen Beispiel haben wir zuerst das `p`-Element geöffnet und dann das `strong`-Element. Für eine korrekte Verschachtelung sollten wir zuerst das `strong`-Element schließen, bevor wir das `p` schließen.

Das folgende ist ein Beispiel für die _falsche_ Art zu verschachteln:

```html-nolint example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

Die **Tags müssen so geöffnet und geschlossen werden, dass sie innerhalb oder außerhalb voneinander liegen**. Mit der Art von Überlappung im obigen Beispiel muss der Browser Ihre Absichten erraten. Diese Art von Raten kann zu unerwarteten Ergebnissen führen.

### Leere Elemente

Nicht alle Elemente folgen dem Muster eines öffnenden Tags, Inhalts und eines schließenden Tags. Einige Elemente bestehen aus einem einzigen Tag, das typischerweise verwendet wird, um etwas in das Dokument einzufügen/einzubetten. Solche Elemente werden als [void elements](/de/docs/Glossary/void_element) bezeichnet. Zum Beispiel bettet das {{htmlelement("img")}}-Element eine Bilddatei auf einer Seite ein:

```html
<img
  src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"
  alt="Firefox icon" />
```

Dies würde folgendes ausgeben:

{{ EmbedLiveSample('Void_elements', 700, 300, "", "") }}

> [!NOTE]
> In HTML gibt es keine Verpflichtung, am Ende eines Tags eines leeren Elements ein `/` hinzuzufügen, zum Beispiel `<img src="images/cat.jpg" alt="cat" />`. Es ist jedoch auch eine gültige Syntax, und Sie können dies tun, wenn Sie möchten, dass Ihr HTML gültiges XML ist.

## Attribute

Elemente können auch Attribute haben. Attribute sehen so aus:

![Absatztag mit hervorgehobenem 'class="editor-note"' Attribut](grumpy-cat-attribute-small.png)

Attribute enthalten zusätzliche Informationen über das Element, die nicht im Inhalt angezeigt werden. In diesem Beispiel ist das **`class`**-Attribut ein kennzeichnender Name, der verwendet wird, um das Element mit Stilinformationen zu versehen.

Ein Attribut sollte haben:

- Ein Leerzeichen zwischen ihm und dem Elementnamen. (Bei einem Element mit mehr als einem Attribut sollten die Attribute ebenfalls durch Leerzeichen getrennt sein.)
- Den Attributnamen, gefolgt von einem Gleichheitszeichen.
- Einen Attributwert, umschlossen von öffnenden und schließenden Anführungszeichen.

### Aktives Lernen: Hinzufügen von Attributen zu einem Element

Das `<img>`-Element kann eine Reihe von Attributen annehmen, darunter:

- `src`
  - : Das `src`-Attribut ist ein **erforderliches** Attribut, das den Speicherort des Bildes angibt. Zum Beispiel: `src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"`.
- `alt`
  - : Das `alt`-Attribut gibt eine Textbeschreibung des Bildes an. Zum Beispiel: `alt="Das Firefox-Icon"`.
- `width`
  - : Das `width`-Attribut gibt die Breite des Bildes an, wobei die Maßeinheit Pixel ist. Zum Beispiel: `width="300"`.
- `height`
  - : Das `height`-Attribut gibt die Höhe des Bildes an, wobei die Maßeinheit Pixel ist. Zum Beispiel: `height="300"`.

Bearbeiten Sie die Zeile unten im _Eingabebereich_, um sie in ein Bild zu verwandeln.

1. Finden Sie Ihr Lieblingsbild online, rechtsklicken Sie darauf und drücken Sie _Link/Adresse des Bildes kopieren_.
2. Fügen Sie im folgenden Bereich das `src`-Attribut hinzu und füllen Sie es mit dem Link aus Schritt 1 aus.
3. Setzen Sie das `alt`-Attribut.
4. Fügen Sie die Attribute `width` und `height` hinzu.

Sie werden Ihre Änderungen live im _Ausgabebereich_ sehen können.

Wenn Sie einen Fehler machen, können Sie ihn immer mit der _Zurücksetzen_-Schaltfläche zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Schaltfläche, um die Antwort zu sehen.

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

Manchmal werden Attribute ohne Werte geschrieben. Das ist völlig akzeptabel. Diese nennt man [Boolean-Attribute](/de/docs/Glossary/Boolean/HTML). Wenn ein Boolean-Attribut ohne Wert oder mit einem beliebigen Wert, sogar wie `"false"`, geschrieben wird, ist das Boolean-Attribut immer auf true gesetzt. Andernfalls, wenn das Attribut nicht in einem HTML-Tag geschrieben wird, ist das Attribut auf false gesetzt. Die Spezifikation verlangt, dass der Attributwert entweder die leere Zeichenkette ist (einschließlich wenn das Attribut keinen Wert explizit angegeben hat) oder derselbe wie der Attributname, aber andere Werte funktionieren genauso. Betrachten Sie zum Beispiel das [`disabled`](/de/docs/Web/HTML/Element/input#disabled)-Attribut, das Sie Eingabeelementen im Formular zuweisen können. (Sie verwenden dies, um die Eingabeelemente im Formular _zu deaktivieren_, damit der Benutzer keine Einträge vornehmen kann. Deaktivierte Elemente haben normalerweise ein ausgegrautes Aussehen.) Beispiel:

```html
<input type="text" disabled="disabled" />
```

In Kurzform ist es akzeptabel, dies wie folgt zu schreiben:

```html
<!-- using the disabled attribute prevents the end user from entering text into the input box -->
<input type="text" disabled />

<!-- text input is allowed, as it doesn't contain the disabled attribute -->
<input type="text" />
```

Zum Vergleich enthält das obige Beispiel auch ein nicht deaktiviertes Eingabeelement im Formular. Der HTML-Code aus dem obigen Beispiel erzeugt dieses Ergebnis:

{{ EmbedLiveSample('Boolean_attributes', 700, 100, "", "") }}

### Weglassen von Anführungszeichen um Attributwerte

Wenn Sie sich den Code vieler anderer Websites ansehen, stoßen Sie möglicherweise auf eine Reihe seltsamer Markup-Stile, einschließlich Attributwerten ohne Anführungszeichen. Dies ist unter bestimmten Umständen erlaubt, kann jedoch in anderen Umständen Ihr Markup brechen. Das Element im untenstehenden Code-Snippet, `<a>`, wird Anker genannt. Anker umfassen Text und machen ihn zu Links. Das `href`-Attribut gibt die Webadresse an, auf die der Link verweist. Sie können diese Grundversion unten mit _nur_ dem `href`-Attribut so schreiben:

```html
<a href=https://www.mozilla.org/>favorite website</a>
```

Anker können auch ein `title`-Attribut haben, eine Beschreibung der verlinkten Seite. Sobald wir jedoch das `title` auf die gleiche Weise wie das `href`-Attribut hinzufügen, gibt es Probleme:

```html-nolint example-bad
<a href=https://www.mozilla.org/ title=The Mozilla homepage>favorite website</a>
```

Wie oben geschrieben, missinterpretiert der Browser das Markup und hält das `title`-Attribut für drei Attribute: ein title-Attribut mit dem Wert `The` und zwei Boolean-Attribute, `Mozilla` und `homepage`. Offensichtlich ist das nicht beabsichtigt! Es wird Fehler oder unerwartetes Verhalten verursachen, wie Sie im folgenden Live-Beispiel sehen können. Versuchen Sie, über den Link zu schweben, um den Titeltext zu sehen!

{{ EmbedLiveSample('Omitting_quotes_around_attribute_values', 700, 100, "", "") }}

Schließen Sie immer die Attributanführungszeichen ein. Es vermeidet solche Probleme und führt zu besser lesbarem Code.

### Einfache oder doppelte Anführungszeichen?

In diesem Artikel werden Sie auch feststellen, dass die Attribute in doppelten Anführungszeichen eingeschlossen sind. Sie könnten jedoch in einigen HTML-Codes einfache Anführungszeichen sehen. Dies ist eine Stilfrage. Sie können frei wählen, was Ihnen besser gefällt. Diese beiden Zeilen sind gleichwertig:

```html-nolint
<a href='https://www.example.com'>A link to my example.</a>

<a href="https://www.example.com">A link to my example.</a>
```

Stellen Sie sicher, dass Sie keine einfachen und doppelten Anführungszeichen mischen. Dieses Beispiel (unten) zeigt eine Art von Anführungszeichen-Mix, der schiefgehen wird:

```html-nolint example-bad
<a href="https://www.example.com'>A link to my example.</a>
```

Wenn Sie jedoch eine Art von Anführungszeichen verwenden, können Sie die andere Art von Anführungszeichen _innerhalb_ Ihrer Attributwerte einfügen:

```html
<a href="https://www.example.com" title="Isn't this fun?">
  A link to my example.
</a>
```

Um innerhalb anderer Anführungszeichen derselben Art (einfache oder doppelte Anführungszeichen) Anführungszeichen zu verwenden, verwenden Sie [Zeichenreferenzen](/de/docs/Glossary/character_reference).
Zum Beispiel wird dies fehlschlagen:

```html-nolint example-bad
<a href="https://www.example.com" title="An "interesting" reference">A link to my example.</a>
```

Stattdessen müssen Sie Folgendes tun:

```html-nolint
<a href="https://www.example.com" title="An &quot;interesting&quot; reference">A link to my example.</a>
```

## Anatomie eines HTML-Dokuments

Einzelne HTML-Elemente sind für sich nicht sehr nützlich. Schauen wir uns als nächstes an, wie einzelne Elemente kombiniert werden, um eine gesamte HTML-Seite zu bilden:

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

1. `<!doctype html>`: Der Doctype. Als HTML jung war (1991-1992), sollten Doctypes als Links zu einem Satz von Regeln fungieren, denen die HTML-Seite folgen musste, um als gutes HTML zu gelten. Doctypes sahen früher ungefähr so aus:

   ```html
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   ```

   In jüngerer Zeit ist der Doctype ein historisches Artefakt, das eingefügt werden muss, damit alles andere richtig funktioniert. `<!doctype html>` ist die kürzeste Zeichenfolge, die als gültiger Doctype zählt. Das ist alles, was Sie wissen müssen!

2. `<html></html>`: Das {{htmlelement("html")}}-Element. Dieses Element umschließt den gesamten Inhalt der Seite. Es wird manchmal als das Wurzelelement bezeichnet.
3. `<head></head>`: Das {{htmlelement("head")}}-Element. Dieses Element dient als Container für alles, was Sie auf der HTML-Seite enthalten möchten, **das nicht der Inhalt** ist, den die Seite den Betrachtern zeigen wird. Dazu gehören Schlüsselwörter und eine Seitenbeschreibung, die in Suchergebnissen erscheinen würden, CSS zum Stylen von Inhalten, Zeichensatzdeklarationen und mehr. Sie werden mehr darüber im nächsten Artikel der Serie lernen.
4. `<meta charset="utf-8">`: Das {{htmlelement("meta")}}-Element. Dieses Element repräsentiert Metadaten, die nicht durch andere HTML-Meta-bezogene Elemente dargestellt werden können, wie {{htmlelement("base")}}, {{htmlelement("link")}}, {{htmlelement("script")}}, {{htmlelement("style")}} oder {{htmlelement("title")}}. Das [`charset`](/de/docs/Web/HTML/Element/meta#charset)-Attribut gibt das Zeichenencoding Ihres Dokuments als UTF-8 an, das die meisten Zeichen der überwiegenden Mehrheit der Menschensprachen enthält. Mit dieser Einstellung kann die Seite jetzt mit jedem Textinhalt umgehen, den sie möglicherweise enthält. Es gibt keinen Grund, dies nicht einzustellen, und es kann helfen, einige Probleme später zu vermeiden.
5. `<title></title>`: Das {{htmlelement("title")}}-Element. Dies legt den Titel der Seite fest, der der Titel ist, der im Browser-Tab erscheint, in dem die Seite geladen ist. Der Seitentitel wird auch verwendet, um die Seite zu beschreiben, wenn sie als Lesezeichen gesetzt wird.
6. `<body></body>`: Das {{htmlelement("body")}}-Element. Dies enthält _alle_ Inhalte, die auf der Seite angezeigt werden, einschließlich Text, Bilder, Videos, Spiele, abspielbare Audiotracks oder was auch immer.

### Aktives Lernen: Hinzufügen einiger Funktionen zu einem HTML-Dokument

Wenn Sie experimentieren möchten, indem Sie etwas HTML auf Ihrem lokalen Computer schreiben, können Sie dies tun:

1. Kopieren Sie das oben aufgeführte HTML-Seitenbeispiel.
2. Erstellen Sie eine neue Datei in Ihrem Texteditor.
3. Fügen Sie den Code in die neue Textdatei ein.
4. Speichern Sie die Datei als `index.html`.

> [!NOTE]
> Sie können diese grundlegende HTML-Vorlage auch im [MDN Learning Area GitHub-Repo](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) finden.

Sie können diese Datei jetzt in einem Webbrowser öffnen, um zu sehen, wie der gerenderte Code aussieht. Bearbeiten Sie den Code und aktualisieren Sie den Browser, um das Ergebnis zu sehen. Zu Beginn sieht die Seite wie folgt aus:

![Eine einfache HTML-Seite, die sagt Dies ist meine Seite](template-screenshot.png)

In dieser Übung können Sie den Code lokal auf Ihrem Computer bearbeiten, wie zuvor beschrieben, oder Sie können ihn im untenstehenden Beispiel anpassen (das editierbare Beispiel stellt nur die Inhalte des {{htmlelement("body")}}-Elements dar, in diesem Fall). Schärfen Sie Ihre Fähigkeiten, indem Sie die folgenden Aufgaben umsetzen:

- Fügen Sie direkt unterhalb des öffnenden Tags des {{htmlelement("body")}}-Elements einen Haupttitel für das Dokument hinzu. Dieser sollte innerhalb eines öffnenden `<h1>`-Tags und eines schließenden `</h1>`-Tags eingeschlossen sein.
- Bearbeiten Sie den Absatzinhalt, um Text über ein Thema einzuschließen, das Sie interessant finden.
- Lassen Sie wichtige Wörter durch Fettung hervorstehen, indem Sie sie innerhalb eines öffnenden `<strong>`-Tags und eines schließenden `</strong>`-Tags einschließen.
- Fügen Sie Ihrem Absatz einen Link hinzu, wie [zuvor im Artikel erklärt](#active_learning_adding_attributes_to_an_element).
- Fügen Sie ein Bild in Ihr Dokument ein. Platzieren Sie es unterhalb des Absatzes, wie [zuvor im Artikel erklärt](#leere_elemente). Verdienen Sie Bonuspunkte, wenn es Ihnen gelingt, auf ein anderes Bild zu verlinken (entweder lokal auf Ihrem Computer oder irgendwo anders im Web).

Wenn Sie einen Fehler machen, können Sie ihn immer mit der _Zurücksetzen_-Schaltfläche zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Schaltfläche, um die Antwort zu sehen.

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

In den obigen Beispielen haben Sie vielleicht bemerkt, dass im Code viel Leerraum enthalten ist. Dies ist optional. Diese beiden Code-Snippets sind gleichwertig:

```html-nolint
<p id="noWhitespace">Dogs are silly.</p>

<p id="whitespace">Dogs
    are
        silly.</p>
```

Unabhängig davon, wie viel Leerraum Sie im Inhalt eines HTML-Elements verwenden (der eine oder mehrere Leerzeichen, aber auch Zeilenumbrüche enthalten kann), reduziert der HTML-Parser jede Sequenz von Leerraum auf ein einzelnes Leerzeichen beim Rendern des Codes. Warum also so viel Leerraum verwenden? Die Antwort ist Lesbarkeit.

Es kann einfacher sein, zu verstehen, was in Ihrem Code vor sich geht, wenn Sie ihn ordentlich formatiert haben. In unserem HTML haben wir jedes verschachtelte Element um zwei Leerzeichen mehr eingerückt als dasjenige, in dem es sitzt. Es liegt an Ihnen, den Formatierungsstil zu wählen (wie viele Leerzeichen für jede Ebene der Einrückung, zum Beispiel), aber Sie sollten in Betracht ziehen, ihn zu formatieren.

Lassen Sie uns einen Blick darauf werfen, wie der Browser die beiden obigen Absätze mit und ohne Leerraum rendert:

{{ EmbedLiveSample('Whitespace_in_HTML', 700, 100) }}

> [!NOTE]
> Der Zugriff auf die [innerHTML](/de/docs/Web/API/Element/innerHTML) von Elementen aus JavaScript behält den gesamten Leerraum bei.
> Dies kann unerwartete Ergebnisse liefern, wenn der Leerraum vom Browser gekürzt wird.

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

In HTML sind die Zeichen `<`, `>`, `"`, `'` und `&` Sonderzeichen. Sie sind Teile der HTML-Syntax selbst. Wie fügen Sie also eines dieser Sonderzeichen in Ihren Text ein? Beispielsweise, wenn Sie ein Kaufmanns- oder Kleiner-als-Zeichen verwenden möchten und es nicht als Code interpretiert werden soll.

Sie tun dies mit [Zeichenreferenzen](/de/docs/Glossary/character_reference). Dies sind spezielle Codes, die Zeichen darstellen, die in genau diesen Fällen verwendet werden sollen. Jede Zeichenreferenz beginnt mit einem Kaufmannszeichen (&) und endet mit einem Semikolon (;).

| Wörtliches Zeichen | Zeichenreferenz-Äquivalent |
| ------------------ | -------------------------- |
| <                  | `&lt;`                     |
| >                  | `&gt;`                     |
| "                  | `&quot;`                   |
| '                  | `&apos;`                   |
| &                  | `&amp;`                    |

Das Zeichenreferenz-Äquivalent kann leicht gemerkt werden, weil der Text, den es verwendet, als kleiner als für `&lt;`, Anführungszeichen für `&quot;` und ähnlich für andere gesehen werden kann. Um mehr über Entitätsreferenzen zu erfahren, siehe [Liste von XML- und HTML-Zeichenentitätsreferenzen](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references) (Wikipedia).

Im folgenden Beispiel gibt es zwei Absätze:

```html-nolint
<p>In HTML, you define a paragraph using the <p> element.</p>

<p>In HTML, you define a paragraph using the &lt;p&gt; element.</p>
```

Im Live-Ausgang unten können Sie sehen, dass der erste Absatz schiefgelaufen ist. Der Browser interpretiert die zweite Instanz von `<p>` als Beginn eines neuen Absatzes. Der zweite Absatz sieht gut aus, da er Zeichenreferenzen mit spitzen Klammern enthält.

{{ EmbedLiveSample('Entity_references_Including_special_characters_in_HTML', 700, 200, "", "") }}

> [!NOTE]
> Sie müssen keine Entitätsreferenzen für andere Symbole verwenden, da moderne Browser die tatsächlichen Symbole problemlos handhaben, solange das [Zeichenencoding Ihres HTML auf UTF-8 gesetzt](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#specifying_your_documents_character_encoding) ist.

## HTML-Kommentare

HTML hat einen Mechanismus, um Kommentare im Code zu schreiben. Browser ignorieren Kommentare und machen sie dadurch effektiv unsichtbar für den Benutzer. Der Zweck von Kommentaren ist es, Ihnen zu ermöglichen, Notizen im Code zu hinterlassen, um Ihre Logik oder das Codieren zu erklären. Dies ist sehr nützlich, wenn Sie zu einem Codebestand zurückkehren, nachdem Sie lange genug weg waren, um sich nicht mehr vollständig daran zu erinnern. Ebenso sind Kommentare von unschätzbarem Wert, wenn verschiedene Personen Änderungen und Aktualisierungen vornehmen.

Um einen HTML-Kommentar zu schreiben, umschließen Sie ihn in den speziellen Markierungen `<!--` und `-->`. Zum Beispiel:

```html
<p>I'm not inside a comment</p>

<!-- <p>I am!</p> -->
```

Wie Sie unten sehen können, wird nur der erste Absatz in der Live-Ausgabe angezeigt.

{{ EmbedLiveSample('HTML_comments', 700, 100, "", "") }}

## Zusammenfassung

Sie haben das Ende des Artikels erreicht! Wir hoffen, Sie haben die Einführung in die Grundlagen von HTML genossen.

An diesem Punkt sollten Sie verstehen, wie HTML aussieht und wie es auf einer grundlegenden Ebene funktioniert. Sie sollten auch in der Lage sein, einige Elemente und Attribute zu schreiben. Die nachfolgenden Artikel dieses Moduls behandeln einige der hier eingeführten Themen weiter und präsentieren auch andere Konzepte der Sprache.

- Während Sie beginnen, mehr über HTML zu lernen, sollten Sie in Betracht ziehen, auch die Grundlagen von CSS (Cascading Style Sheets) zu lernen. [CSS](/de/docs/Learn/CSS) ist die Sprache, die zur Gestaltung von Webseiten verwendet wird, z.B. zum Ändern von Schriftarten oder Farben oder zur Änderung des Seitenlayouts. HTML und CSS ergänzen sich hervorragend, wie Sie bald entdecken werden.

## Siehe auch

- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)

{{NextMenu("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML")}}
