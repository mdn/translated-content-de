---
title: Einstieg in HTML
slug: Learn/HTML/Introduction_to_HTML/Getting_started
l10n:
  sourceCommit: f20d7ae3f5f41aa6d2157246206b0f6f30756e2f
---

{{LearnSidebar}}{{NextMenu("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML")}}

In diesem Artikel behandeln wir die absoluten Grundlagen von HTML. Um Sie zu starten, definiert dieser Artikel Elemente, Attribute und alle anderen wichtigen Begriffe, die Sie vielleicht gehört haben. Es wird auch erklärt, wie diese in HTML passen. Sie werden lernen, wie HTML-Elemente strukturiert sind, wie eine typische HTML-Seite aufgebaut ist und andere wichtige grundlegende Sprachmerkmale. Unterwegs gibt es auch die Möglichkeit, mit HTML zu experimentieren!

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software">Grundlegende Software installiert</a> und grundlegende Kenntnisse im <a href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files">Umgang mit Dateien</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Grundlegende Vertrautheit mit HTML zu erlangen und das Schreiben einiger HTML-Elemente zu üben.
      </td>
    </tr>
  </tbody>
</table>

## Was ist HTML?

{{glossary("HTML")}} (HyperText Markup Language) ist eine _Auszeichnungssprache_, die Webbrowsern mitteilt, wie die von Ihnen besuchten Webseiten strukturiert werden sollen. Sie kann so kompliziert oder einfach sein, wie der Webentwickler es möchte. HTML besteht aus einer Reihe von {{glossary("Element", "elements")}}, die Sie verwenden, um verschiedene Teile des Inhalts einzuschließen, einzuwickeln oder _auszuzeichnen_, damit er auf eine bestimmte Weise erscheint oder wirkt. Die umgebenden {{glossary("Tag", "tags")}} können Inhalte in einen Hyperlink verwandeln, um zu einer anderen Seite zu verbinden, Wörter kursiv zu schreiben und so weiter. Betrachten Sie zum Beispiel die folgende Textzeile:

```plain
My cat is very grumpy
```

Wenn wir möchten, dass der Text für sich allein steht, können wir ihn als Absatz angeben, indem wir ihn in ein Absatz-({{htmlelement("p")}}) Element einschließen:

```html
<p>My cat is very grumpy</p>
```

> [!NOTE]
> Tags in HTML sind nicht case-sensitiv. Das bedeutet, dass sie in Groß- oder Kleinbuchstaben geschrieben werden können. Zum Beispiel kann ein {{htmlelement("title")}}-Tag als `<title>`, `<TITLE>`, `<Title>`, `<TiTlE>` usw. geschrieben werden, und es wird funktionieren. Es ist jedoch Best Practice, alle Tags in Kleinbuchstaben zu schreiben, um Konsistenz und Lesbarkeit zu gewährleisten.

## Aufbau eines HTML-Elements

Lassen Sie uns unser Absatz-Element aus dem vorherigen Abschnitt weiter erkunden:

![Ein Beispiel für ein Code-Snippet, das die Struktur eines HTML-Elements demonstriert. <p> My cat is very grumpy </p>.](grumpy-cat-small.png)

Die Anatomie unseres Elements ist:

- **Der öffnende Tag:** Dieser besteht aus dem Namen des Elements (in diesem Beispiel _p_ für Absatz), eingeschlossen in öffnende und schließende spitze Klammern. Dieser öffnende Tag markiert, wo das Element beginnt oder beginnt, Wirkung zu zeigen. In diesem Beispiel geht es dem Anfang des Absatztextes voraus.
- **Der Inhalt:** Dies ist der Inhalt des Elements. In diesem Beispiel ist es der Absatztext.
- **Der schließende Tag:** Dieser ist derselbe wie der öffnende Tag, außer dass er einen Schrägstrich vor dem Elementnamen enthält. Dies markiert das Ende des Elements. Wenn man es versäumt, einen schließenden Tag einzuschließen, ist dies ein häufiger Anfängerfehler, der seltsame Ergebnisse erzeugen kann.

Das Element ist der öffnende Tag, gefolgt vom Inhalt, gefolgt vom schließenden Tag.

### Aktives Lernen: Ihr erstes HTML-Element erstellen

Bearbeiten Sie die folgende Zeile im Bereich "Editierbarer Code", indem Sie sie mit den Tags `<em>` und `</em>` umschließen. Um das Element zu _öffnen_, setzen Sie den öffnenden Tag `<em>` an den Anfang der Zeile. Um das Element zu _schließen_, setzen Sie den schließenden Tag `</em>` an das Ende der Zeile. Auf diese Weise sollte die Zeile als kursiver Text formatiert sein! Sehen Sie Ihre Änderungen live im _Ausgabe_-Bereich.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der Schaltfläche _Reset_ löschen. Wenn Sie wirklich feststecken, drücken Sie die Schaltfläche _Lösung anzeigen_, um die Antwort zu sehen.

```html hidden
<h2>Live-Ausgabe</h2>
<div class="output" style="min-height: 50px;"></div>

<h2>Editierbarer Code</h2>
<p class="a11y-label">
  Drücken Sie Esc, um den Fokus aus dem Code-Bereich zu verschieben (Tab fügt ein Tabulatorzeichen ein).
</p>

<textarea id="code" class="playable-code" style="min-height: 100px;width: 95%">
  This is my text.
</textarea>

<div class="controls">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Lösung anzeigen" />
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
  solution.value = "Lösung anzeigen";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Lösung anzeigen") {
    textarea.value = solutionEntry;
    solution.value = "Lösung verbergen";
  } else {
    textarea.value = userEntry;
    solution.value = "Lösung anzeigen";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// Stoppen Sie die Tabulatortaste, die aus dem Textbereich heraus tabben würde,
// und machen Sie damit stattdessen ein Tabulatorzeichen an der Cursorposition
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

// Speichern Sie den Benutzer-Code jedes Mal, wenn der Benutzer den Textbereichecode aktualisiert

textarea.onkeyup = () => {
  // Wir möchten den Zustand nur speichern, wenn der Benutzer-Code angezeigt wird,
  // nicht die Lösung, damit die Lösung nicht über den Benutzer-Code gespeichert wird
  if (solution.value === "Lösung anzeigen") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_creating_your_first_HTML_element', 700, 400, "", "") }}

### Elemente verschachteln

Elemente können innerhalb anderer Elemente platziert werden. Dies nennt man _Verschachtelung_. Wenn wir sagen möchten, dass unsere Katze **sehr** grummelig ist, könnten wir das Wort _sehr_ in ein {{htmlelement("strong")}}-Element kapseln, das bedeutet, dass das Wort eine stärkere Textformatierung haben soll:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

Es gibt eine richtige und eine falsche Art, die Verschachtelung durchzuführen. Im obigen Beispiel haben wir zuerst das `p`-Element geöffnet und dann das `strong`-Element geöffnet. Für eine ordnungsgemäße Verschachtelung sollten wir das `strong`-Element zuerst schließen, bevor wir das `p` schließen.

Das folgende ist ein Beispiel für die _falsche_ Art, die Verschachtelung durchzuführen:

```html-nolint example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

Die **Tags müssen so geöffnet und geschlossen werden, dass sie innerhalb oder außerhalb voneinander sind**. Mit der Art des Überschneidens im obigen Beispiel muss der Browser Ihre Absicht erraten. Diese Art von Vermutungen kann zu unerwarteten Ergebnissen führen.

### Leere Elemente

Nicht alle Elemente folgen dem Muster eines öffnenden Tags, Inhalts und eines schließenden Tags. Einige Elemente bestehen aus einem einzelnen Tag, der normalerweise verwendet wird, um etwas in das Dokument einzufügen/integrieren. Solche Elemente nennt man {{glossary("void element", "void elements")}}. Zum Beispiel integriert das {{htmlelement("img")}}-Element eine Bilddatei auf einer Seite:

```html
<img
  src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"
  alt="Firefox icon" />
```

Dies würde folgendes ausgeben:

{{ EmbedLiveSample('Void_elements', 700, 300, "", "") }}

> [!NOTE]
> In HTML gibt es keine Anforderung, ein `/` am Ende des Tags eines leeren Elements hinzuzufügen, z. B.: `<img src="images/cat.jpg" alt="cat" />`. Es ist jedoch auch eine gültige Syntax, und Sie können dies tun, wenn Sie möchten, dass Ihr HTML gültiges XML ist.

## Attribute

Elemente können auch Attribute haben. Attribute sehen so aus:

![absatz-Tag mit 'class="editor-note"' Attribut hervorgehoben](grumpy-cat-attribute-small.png)

Attribute enthalten zusätzliche Informationen über das Element, die nicht im Inhalt erscheinen. In diesem Beispiel ist das **`class`**-Attribut ein identifizierender Name, der verwendet wird, um das Element mit Stilinformationen anzusprechen.

Ein Attribut sollte haben:

- Einen Abstand zwischen sich und dem Elementnamen. (Für ein Element mit mehr als einem Attribut sollten die Attribute ebenfalls durch Leerzeichen getrennt sein.)
- Den Attributnamen, gefolgt von einem Gleichheitszeichen.
- Einen Attributwert, eingerahmt durch öffnende und schließende Anführungszeichen.

### Aktives Lernen: Hinzufügen von Attributen zu einem Element

Das `<img>`-Element kann eine Reihe von Attributen haben, darunter:

- `src`
  - : Das `src`-Attribut ist ein **erforderliches** Attribut, das den Speicherort des Bildes angibt. Zum Beispiel: `src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"`.
- `alt`
  - : Das `alt`-Attribut gibt eine Textbeschreibung des Bildes an. Zum Beispiel: `alt="The Firefox icon"`.
- `width`
  - : Das `width`-Attribut gibt die Breite des Bildes in Pixeln an. Zum Beispiel: `width="300"`.
- `height`
  - : Das `height`-Attribut gibt die Höhe des Bildes in Pixeln an. Zum Beispiel: `height="300"`.

Bearbeiten Sie die Zeile unten im _Eingabebereich_, um sie in ein Bild zu verwandeln.

1. Finden Sie Ihr Lieblingsbild online, klicken Sie mit der rechten Maustaste darauf und wählen Sie _Bild-Link/Adresse kopieren_.
2. Fügen Sie im unteren Bereich das `src`-Attribut hinzu und füllen Sie es mit dem Link aus Schritt 1.
3. Setzen Sie das `alt`-Attribut.
4. Fügen Sie die Attribute `width` und `height` hinzu.

Sie können Ihre Änderungen live im _Ausgabe_-Bereich sehen.

Wenn Sie einen Fehler machen, können Sie ihn jederzeit mit der _Zurücksetzen_-Schaltfläche rückgängig machen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Schaltfläche, um die Antwort zu sehen.

```html hidden
<h2>Live-Ausgabe</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editierbarer Code</h2>
<p class="a11y-label">
  Drücken Sie Esc, um den Fokus aus dem Code-Bereich zu verschieben (Tab fügt ein Tabulatorzeichen ein).
</p>

<textarea id="code" class="input" style="min-height: 100px;width: 95%">
&lt;img alt="Ich sollte ein Bild sein" &gt;
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
  '<img src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png" alt="Firefox icon" width="100" height="100" />';
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
    solution.value = "Lösung verbergen";
  } else {
    textarea.value = userEntry;
    solution.value = "Lösung anzeigen";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// Stoppen Sie die Tabulatortaste, die aus dem Textbereich heraus tabben würde,
// und machen Sie damit stattdessen ein Tabulatorzeichen an der Cursorposition

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

// Speichern Sie den Benutzer-Code jedes Mal, wenn der Benutzer den Textbereichecode aktualisiert

textarea.onkeyup = () => {
  // Wir möchten den Zustand nur speichern, wenn der Benutzer-Code angezeigt wird,
  // nicht die Lösung, damit die Lösung nicht über den Benutzer-Code gespeichert wird
  if (solution.value === "Lösung anzeigen") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Adding_attributes_to_an_element', 700, 400, "", "") }}

### Boolesche Attribute

Manchmal sehen Sie Attribute, die ohne Werte geschrieben sind. Dies ist völlig akzeptabel. Solche werden [boolesche Attribute](/de/docs/Glossary/Boolean/HTML) genannt. Wenn ein boolesches Attribut ohne Wert geschrieben wird, oder mit jedem beliebigen Wert, selbst wie `"false"`, ist das boolesche Attribut immer auf true gesetzt. Andernfalls, wenn das Attribut nicht in einem HTML-Tag geschrieben ist, ist das Attribut auf false gesetzt. Die Spezifikation verlangt, dass der Wert des Attributs entweder eine leere Zeichenkette ist (einschließlich wenn das Attribut keinen explizit angegebenen Wert hat) oder derselbe wie der Name des Attributs ist, aber andere Werte funktionieren genauso. Betrachten Sie zum Beispiel das [`disabled`](/de/docs/Web/HTML/Element/input#disabled)-Attribut, das Sie Formulareingabeelementen zuweisen können. (Sie verwenden dies, um die Formulareingabeelemente zu _deaktivieren_, sodass der Benutzer keine Einträge machen kann. Die deaktivierten Elemente haben typischerweise ein ausgegrautes Aussehen.) Zum Beispiel:

```html
<input type="text" disabled="disabled" />
```

Als Abkürzung ist es akzeptabel, dies wie folgt zu schreiben:

```html
<!-- durch Verwendung des disabled-Attributs wird verhindert, dass der Endbenutzer Text in das Eingabefeld eingibt -->
<input type="text" disabled />

<!-- Texteingabe ist erlaubt, da es das disabled-Attribut nicht enthält -->
<input type="text" />
```

Zur Referenz enthält das obige Beispiel auch ein nicht deaktiviertes Formulareingabeelement. Das HTML aus dem obigen Beispiel erzeugt dieses Ergebnis:

{{ EmbedLiveSample('Boolean_attributes', 700, 100, "", "") }}

### Weglassen von Anführungszeichen um Attributwerte

Wenn Sie sich den Code für viele andere Websites ansehen, stoßen Sie möglicherweise auf eine Reihe merkwürdiger Markup-Stile, die Attributwerte ohne Anführungszeichen umfassen. Dies ist unter bestimmten Umständen erlaubt, kann jedoch in anderen Umständen Ihr Markup brechen. Das Element im Code-Snippet unten, `<a>`, wird Anker genannt. Anker schließen Text ein und verwandeln ihn in Links. Das `href`-Attribut gibt die Webadresse an, auf die der Link verweist. Sie können diese Basisversion unten schreiben, mit _nur_ dem `href`-Attribut, so:

```html
<a href=https://www.mozilla.org/>favorite website</a>
```

Anker können auch ein `title`-Attribut haben, eine Beschreibung der verlinkten Seite. Sobald wir jedoch das `title`-Attribut auf die gleiche Weise wie das `href`-Attribut hinzufügen, treten Probleme auf:

```html-nolint example-bad
<a href=https://www.mozilla.org/ title=The Mozilla homepage>favorite website</a>
```

Wie oben geschrieben, missinterpretiert der Browser das Markup und verwechselt das `title`-Attribut mit drei Attributen: ein title-Attribut mit dem Wert `The` und zwei boolesche Attribute, `Mozilla` und `homepage`. Offensichtlich ist dies nicht beabsichtigt! Es wird Fehler oder unerwartetes Verhalten verursachen, wie Sie im Live-Beispiel unten sehen können. Versuchen Sie, mit der Maus über den Link zu fahren, um den Titeltext zu sehen!

{{ EmbedLiveSample('Omitting_quotes_around_attribute_values', 700, 100, "", "") }}

Schließen Sie die Attributanführungszeichen immer ein. Es vermeidet solche Probleme und führt zu lesbarerem Code.

### Einfache oder doppelte Anführungszeichen?

In diesem Artikel werden Sie auch bemerken, dass die Attribute in doppelte Anführungszeichen eingeschlossen sind. Sie könnten jedoch auch einfache Anführungszeichen in einigen HTML-Codes sehen. Dies ist eine Frage des Stils. Sie können wählen, was Sie bevorzugen. Beide dieser Zeilen sind gleichwertig:

```html-nolint
<a href='https://www.example.com'>Ein Link zu meinem Beispiel.</a>

<a href="https://www.example.com">Ein Link zu meinem Beispiel.</a>
```

Stellen Sie sicher, dass Sie einfache Anführungszeichen und doppelte Anführungszeichen nicht mischen. Dieses Beispiel (unten) zeigt eine Art Mix von Anführungszeichen, der schiefgehen wird:

```html-nolint example-bad
<a href="https://www.example.com'>Ein Link zu meinem Beispiel.</a>
```

Wenn Sie jedoch einen Anführungszeichenstil verwenden, können Sie den anderen Anführungszeichenstil _innerhalb_ Ihrer Attributwerte verwenden:

```html
<a href="https://www.example.com" title="Isn't this fun?">
  Ein Link zu meinem Beispiel.
</a>
```

Um Anführungszeichen innerhalb anderer Anführungszeichen desselben Typs (einfache oder doppelte Anführungszeichen) zu verwenden, verwenden Sie {{glossary("character reference", "character references")}}.
Zum Beispiel, dies wird schiefgehen:

```html-nolint example-bad
<a href="https://www.example.com" title="Ein "interessanter" Bezug">Ein Link zu meinem Beispiel.</a>
```

Stattdessen müssen Sie dies tun:

```html-nolint
<a href="https://www.example.com" title="Ein &quot;interessanter&quot; Bezug">Ein Link zu meinem Beispiel.</a>
```

## Anatomie eines HTML-Dokuments

Einzelne HTML-Elemente sind allein nicht sehr nützlich. Lassen Sie uns als nächstes untersuchen, wie einzelne Elemente zu einer ganzen HTML-Seite kombiniert werden:

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

1. `<!doctype html>`: Der Doctype. Als HTML jung war (1991-1992), sollten Doctypes als Links zu einer Reihe von Regeln dienen, denen die HTML-Seite folgen musste, um als gutes HTML angesehen zu werden. Doctypes sahen früher so aus:

   ```html
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   ```

   In jüngerer Zeit ist der Doctype ein historisches Artefakt, das enthalten sein muss, damit alles andere richtig funktioniert. `<!doctype html>` ist die kürzeste Zeichenkettenfolge, die als gültiger Doctype zählt. Das ist alles, was Sie wissen müssen!

2. `<html></html>`: Das {{htmlelement("html")}}-Element. Dieses Element umschließt den gesamten Inhalt auf der Seite. Es ist manchmal als Wurzelelement bekannt.
3. `<head></head>`: Das {{htmlelement("head")}}-Element. Dieses Element dient als Container für alles, was Sie auf der HTML-Seite einfügen möchten, **was nicht der Inhalt ist**, den die Seite den Betrachtern zeigt. Dazu gehören Schlüsselwörter und eine Seitenbeschreibung, die in den Suchergebnissen angezeigt werden, CSS, um den Inhalt zu stylen, Zeichensatzerklärungen und mehr. Sie werden mehr darüber im nächsten Artikel der Serie erfahren.
4. `<meta charset="utf-8">`: Das {{htmlelement("meta")}}-Element. Dieses Element repräsentiert Metadaten, die nicht durch andere HTML-metabezogene Elemente wie {{htmlelement("base")}}, {{htmlelement("link")}}, {{htmlelement("script")}}, {{htmlelement("style")}} oder {{htmlelement("title")}} dargestellt werden können. Das [`charset`](/de/docs/Web/HTML/Element/meta#charset)-Attribut gibt die Zeichenkodierung für Ihr Dokument als UTF-8 an, die die meisten Zeichen aus der überwiegenden Mehrheit der Menschenschriften umfasst. Mit dieser Einstellung kann die Seite jetzt jeden Textinhalt verarbeiten, den sie enthalten könnte. Es gibt keinen Grund, dies nicht zu setzen, und es kann helfen, später einige Probleme zu vermeiden.
5. `<title></title>`: Das {{htmlelement("title")}}-Element. Dies legt den Titel der Seite fest, der der Titel ist, der im Browser-Tab erscheint, in dem die Seite geladen ist. Der Seitentitel wird auch verwendet, um die Seite zu beschreiben, wenn sie als Lesezeichen gespeichert wird.
6. `<body></body>`: Das {{htmlelement("body")}}-Element. Dies enthält _alle_ Inhalte, die auf der Seite angezeigt werden, einschließlich Text, Bilder, Videos, Spiele, abspielbare Audiotracks oder was auch immer sonst.

### Aktives Lernen: Einige Merkmale zu einem HTML-Dokument hinzufügen

Wenn Sie mit dem Schreiben von HTML auf Ihrem lokalen Computer experimentieren möchten, können Sie dies tun:

1. Kopieren Sie das oben aufgelistete Beispiel der HTML-Seite.
2. Erstellen Sie in Ihrem Texteditor eine neue Datei.
3. Fügen Sie den Code in die neue Textdatei ein.
4. Speichern Sie die Datei als `index.html`.

> [!NOTE]
> Sie können diese grundlegende HTML-Vorlage auch im [MDN Learning Area GitHub repo](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) finden.

Sie können diese Datei nun in einem Webbrowser öffnen, um zu sehen, wie der gerenderte Code aussieht. Bearbeiten Sie den Code und aktualisieren Sie den Browser, um zu sehen, was das Ergebnis ist. Zu Beginn sieht die Seite so aus:

![Eine einfache HTML-Seite, die sagt: Dies ist meine Seite](template-screenshot.png)

In dieser Übung können Sie den Code lokal auf Ihrem Computer bearbeiten, wie zuvor beschrieben, oder Sie können ihn im Beispiel-Fenster unten bearbeiten (das bearbeitbare Beispiel-Fenster repräsentiert in diesem Fall nur den Inhalt des {{htmlelement("body")}}-Elements). Schärfen Sie Ihre Fähigkeiten, indem Sie die folgenden Aufgaben umsetzen:

- Fügen Sie direkt nach dem öffnenden Tag des {{htmlelement("body")}}-Elements einen Haupttitel für das Dokument hinzu. Dieser sollte innerhalb eines `<h1>`-öffnenden und eines `</h1>`-schließenden Tags eingeschlossen sein.
- Bearbeiten Sie den Absatzinhalt, um Text zu einem Thema einzuschließen, das Sie interessant finden.
- Heben Sie wichtige Wörter in Fettdruck hervor, indem Sie sie innerhalb eines `<strong>`-öffnenden und eines `</strong>`-schließenden Tags einfügen.
- Fügen Sie Ihrem Absatz einen Link hinzu, wie [zuvor im Artikel erklärt](#active_learning_adding_attributes_to_an_element).
- Fügen Sie Ihrem Dokument ein Bild hinzu. Platzieren Sie es unter dem Absatz, wie [zuvor im Artikel erläutert](#leere_elemente). Verdienen Sie Bonuspunkte, wenn es Ihnen gelingt, auf ein anderes Bild zu verlinken (entweder lokal auf Ihrem Computer oder irgendwo anders im Web).

Wenn Sie einen Fehler machen, können Sie ihn jederzeit mit der _Zurücksetzen_-Schaltfläche rückgängig machen. Wenn Sie wirklich feststecken, drücken Sie die _Lösung anzeigen_-Schaltfläche, um die Antwort zu sehen.

```html hidden
<h2>Live-Ausgabe</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editierbarer Code</h2>
<p class="a11y-label">
  Drücken Sie Esc, um den Fokus aus dem Code-Bereich zu verschieben (Tab fügt ein Tabulatorzeichen ein).
</p>

<textarea id="code" class="input" style="min-height: 100px;width: 95%">
  &lt;p&gt;This is my page&lt;/p&gt;
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
  solution.value = "Lösung anzeigen";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Lösung anzeigen") {
    textarea.value = solutionEntry;
    solution.value = "Lösung verbergen";
  } else {
    textarea.value = userEntry;
    solution.value = "Lösung anzeigen";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// Stoppen Sie die Tabulatortaste, die aus dem Textbereich heraus tabben würde,
// und machen Sie damit stattdessen ein Tabulatorzeichen an der Cursorposition

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

// Speichern Sie den Benutzer-Code jedes Mal, wenn der Benutzer den Textbereichecode aktualisiert
textarea.onkeyup = () => {
  // Wir möchten den Zustand nur speichern, wenn der Benutzer-Code angezeigt wird,
  // nicht die Lösung, damit die Lösung nicht über den Benutzer-Code gespeichert wird
  if (solution.value === "Lösung anzeigen") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Adding_some_features_to_an_HTML_document', 700, 500) }}

### Leerzeichen in HTML

In den obigen Beispielen haben Sie möglicherweise bemerkt, dass im Code viel Leerzeichen enthalten sind. Dies ist optional. Diese beiden Codeschnipsel sind äquivalent:

```html-nolint
<p id="noWhitespace">Dogs are silly.</p>

<p id="whitespace">Dogs
    are
        silly.</p>
```

Egal wie viele Leerzeichen Sie innerhalb von HTML-Elementinhalten verwenden (die ein oder mehrere Leerzeichenzeichen enthalten können, aber auch Zeilenumbrüche), der HTML-Parser reduziert jede Sequenz von Leerzeichen auf ein einziges Leerzeichen, wenn er den Code rendert. Warum dann so viele Leerzeichen verwenden? Die Antwort ist Lesbarkeit.

Es kann einfacher sein zu verstehen, was in Ihrem Code vor sich geht, wenn Sie ihn schön formatiert haben. In unserem HTML haben wir jedes verschachtelte Element um zwei weitere Leerzeichen eingerückt als das, in dem es sich befindet. Es liegt an Ihnen, den Stil der Formatierung zu wählen (wie viele Leerzeichen für jede Ebene der Einrückung, zum Beispiel), aber Sie sollten in Betracht ziehen, es zu formatieren.

Schauen wir uns an, wie der Browser die beiden Absätze oben mit und ohne Leerzeichen rendert:

{{ EmbedLiveSample('Whitespace_in_HTML', 700, 100) }}

> [!NOTE]
> Beim Zugriff auf die [innerHTML](/de/docs/Web/API/Element/innerHTML) von Elementen aus JavaScript bleibt das gesamte Leerzeichen erhalten.
> Dies kann unerwartete Ergebnisse liefern, wenn das Leerzeichen vom Browser gekürzt wird.

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

## Zeichenreferenzen: Einbeziehung von Sonderzeichen in HTML

In HTML sind die Zeichen `<`, `>`, `"`, `'`, und `&` Sonderzeichen. Sie sind Teile der HTML-Syntax selbst. Wie fügen Sie also eines dieser Sonderzeichen in Ihren Text ein? Zum Beispiel, wenn Sie ein kaufmännisches Und oder ein weniger-als-Zeichen verwenden möchten und nicht als Code interpretiert werden soll.

Dies tun Sie mit {{glossary("character reference", "character references")}}. Dies sind spezielle Codes, die Zeichen darstellen, die genau in diesen Fällen verwendet werden sollen. Jede Zeichenreferenz beginnt mit einem kaufmännischen Und (&) und endet mit einem Semikolon (;).

| Literalzeichen  | Äquivalente Zeichenreferenz     |
| --------------- | ------------------------------- |
| <               | `&lt;`                          |
| >               | `&gt;`                          |
| "               | `&quot;`                        |
| '               | `&apos;`                        |
| &               | `&amp;`                         |

Die äquivalente Zeichenreferenz lässt sich leicht merken, da der Text, den sie verwendet, als less than für `&lt;`, quotation für `&quot;` und ähnlich für andere verstanden werden kann. Um mehr über Entitätsreferenzen zu erfahren, siehe [Liste von XML- und HTML-Zeichenentitätsreferenzen](https://de.wikipedia.org/wiki/Liste_der_XML-,_und_HTML-Zeichenentitätsreferenzen) (Wikipedia).

Im folgenden Beispiel gibt es zwei Absätze:

```html-nolint
<p>In HTML, you define a paragraph using the <p> element.</p>

<p>In HTML, you define a paragraph using the &lt;p&gt; element.</p>
```

Im Live-Ausgang unten können Sie sehen, dass der erste Absatz schiefgegangen ist. Der Browser interpretiert die zweite Instanz von `<p>` als das Starten eines neuen Absatzes. Der zweite Absatz sieht gut aus, weil er Zeichenreferenzen mit spitzen Klammern hat.

{{ EmbedLiveSample('Entity_references_Including_special_characters_in_HTML', 700, 200, "", "") }}

> [!NOTE]
> Sie benötigen keine Entitätsreferenzen für andere Symbole, da moderne Browser die tatsächlichen Symbole problemlos verarbeiten, solange das [Zeichenencoding Ihres HTML auf UTF-8 gesetzt ist](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#specifying_your_documents_character_encoding).

## HTML-Kommentare

HTML verfügt über einen Mechanismus zum Schreiben von Kommentaren im Code. Browser ignorieren Kommentare, wodurch Kommentare für den Benutzer effektiv unsichtbar werden. Der Zweck von Kommentaren besteht darin, dass Sie Notizen im Code aufnehmen können, um Ihre Logik oder Ihre Kodierung zu erklären. Dies ist sehr nützlich, wenn Sie nach ausreichend langer Abwesenheit zu einer Codebasis zurückkehren und sich nicht vollständig daran erinnern. Ebenso sind Kommentare von unschätzbarem Wert, wenn verschiedene Personen Änderungen und Aktualisierungen vornehmen.

Um einen HTML-Kommentar zu schreiben, umschließen Sie ihn mit den speziellen Markierungen `<!--` und `-->`. Zum Beispiel:

```html
<p>Ich bin nicht in einem Kommentar</p>

<!-- <p>Ich bin es!</p> -->
```

Wie Sie unten sehen können, wird im Live-Ausgang nur der erste Absatz angezeigt.

{{ EmbedLiveSample('HTML_comments', 700, 100, "", "") }}

## Zusammenfassung

Sie haben es bis zum Ende des Artikels geschafft! Wir hoffen, Sie haben Ihre Tour durch die Grundlagen von HTML genossen.

An diesem Punkt sollten Sie verstehen, wie HTML aussieht und wie es auf einer grundlegenden Ebene funktioniert. Sie sollten auch in der Lage sein, einige Elemente und Attribute zu schreiben. Die nachfolgenden Artikel dieses Moduls gehen weiter auf einige der hier eingeführten Themen ein und stellen auch andere Konzepte der Sprache vor.

- Wenn Sie anfangen, mehr über HTML zu lernen, sollten Sie die Grundlagen von CSS (Cascading Style Sheets) lernen. [CSS](/de/docs/Learn/CSS) ist die Sprache, die verwendet wird, um Webseiten zu stylen, z.B. Schriften oder Farben zu ändern oder das Layout der Seite zu ändern. HTML und CSS arbeiten gut zusammen, wie Sie bald entdecken werden.

## Siehe auch

- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)

{{NextMenu("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML")}}
