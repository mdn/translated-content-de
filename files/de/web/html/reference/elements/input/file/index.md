---
title: <input type="file">
slug: Web/HTML/Reference/Elements/input/file
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente mit **`type="file"`** erlauben es dem Benutzer, eine oder mehrere Dateien aus dem Gerätespeicher auszuwählen. Einmal ausgewählt, können die Dateien mit [Formularübermittlung](/de/docs/Learn_web_development/Extensions/Forms) auf einen Server hochgeladen oder mit JavaScript-Code und [der File API](/de/docs/Web/API/File_API/Using_files_from_web_applications) manipuliert werden.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;file&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="avatar">Choose a profile picture:</label>

<input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
```

```css interactive-example
label {
  display: block;
  font:
    1rem "Fira Sans",
    sans-serif;
}

input,
label {
  margin: 0.4rem 0;
}
```

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut eines Datei-Inputs enthält einen String, der den Pfad zu den ausgewählten Dateien darstellt. Wenn noch keine Datei ausgewählt wurde, ist der Wert ein leerer String (`""`). Wenn der Benutzer mehrere Dateien ausgewählt hat, stellt das `value` die erste Datei in der Liste der ausgewählten Dateien dar. Die anderen Dateien können über die [Eigenschaft `HTMLInputElement.files` des Input-Elements](/de/docs/Web/API/File_API/Using_files_from_web_applications#getting_information_about_selected_files) identifiziert werden.

> [!NOTE]
> Der Wert ist [immer der Dateiname mit dem Präfix `C:\fakepath\`](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly), welcher nicht der reale Pfad der Datei ist. Dies dient dazu, zu verhindern, dass schadhafte Software die Dateistruktur des Benutzers errät.

## Zusätzliche Attribute

Zusätzlich zu den gemeinsamen Attributen, die von allen {{HTMLElement("input")}} Elementen geteilt werden, unterstützen Eingaben des Typs `file` auch die folgenden Attribute.

### accept

Der Wert des [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)-Attributs ist ein String, der die Dateitypen definiert, die der Datei-Input akzeptieren soll. Dieser String ist eine durch Kommas getrennte Liste von **[einzigartigen Dateityp-Spezifizierungen](#einzigartige_dateityp-spezifizierungen)**. Da ein gegebener Dateityp auf mehr als eine Weise identifiziert werden kann, ist es nützlich, eine umfassende Menge von Typenspezifizierungen bereitzustellen, wenn Dateien eines bestimmten Formats benötigt werden.

Zum Beispiel gibt es mehrere Möglichkeiten, Microsoft Word-Dateien zu identifizieren, sodass eine Seite, die Word-Dateien akzeptiert, einen `<input>` wie diesen verwenden könnte:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### capture

Der Wert des [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)-Attributs ist ein String, der angibt, welche Kamera zur Aufnahme von Bild- oder Videodaten verwendet werden soll, wenn das [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)-Attribut angibt, dass der Input einer dieser Typen sein sollte. Ein Wert von `user` gibt an, dass die benutzerseitige Kamera und/oder das Mikrofon verwendet werden sollen. Ein Wert von `environment` gibt an, dass die nach außen gerichtete Kamera und/oder das Mikrofon verwendet werden sollen. Wenn dieses Attribut fehlt, kann der {{Glossary("user_agent", "User Agent")}} selbstständig entscheiden, was zu tun ist. Wenn der angeforderte Modus nicht verfügbar ist, kann der User Agent auf seinen bevorzugten Standardmodus zurückfallen.

> [!NOTE] > `capture` war zuvor ein Boolean-Attribut, das, wenn es vorhanden war, anforderte, dass das Medienerfassungsgerät des Geräts wie eine Kamera oder ein Mikrofon verwendet wird, anstatt eine Datei-Input-Anfrage zu stellen.

### multiple

Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) Boolean-Attribut angegeben ist, erlaubt der Datei-Input dem Benutzer, mehr als eine Datei auszuwählen.

## Nicht standardisierte Attribute

Zusätzlich zu den oben aufgeführten Attributen stehen in einigen Browsern die folgenden nicht standardisierten Attribute zur Verfügung. Sie sollten versuchen, deren Verwendung zu vermeiden, da dies die Fähigkeit Ihres Codes einschränken wird, in Browsern zu funktionieren, die sie nicht implementieren.

### `webkitdirectory`

Das Boolean-Attribut `webkitdirectory`, falls vorhanden, zeigt an, dass nur Verzeichnisse im Dateiauswahl-Interface zur Auswahl durch den Benutzer zur Verfügung stehen sollten. Weitere Details und Beispiele finden Sie unter [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

## Einzigartige Dateityp-Spezifizierungen

Eine **einzigartige Dateityp-Spezifizierung** ist ein String, der einen Dateityp beschreibt, der von einem {{HTMLElement("input")}} Element des Typs `file` ausgewählt werden kann. Jede einzigartige Dateityp-Spezifizierung kann eine der folgenden Formen annehmen:

- Eine gültige Dateierweiterung (unabhängig von Groß- und Kleinschreibung), beginnend mit einem Punkt ("."). Zum Beispiel: `.jpg`, `.pdf` oder `.doc`.
- Ein gültiger MIME-Typ-String, ohne Erweiterungen.
- Der String `audio/*`, was "jede Audiodatei" bedeutet.
- Der String `video/*`, was "jede Videodatei" bedeutet.
- Der String `image/*`, was "jede Bilddatei" bedeutet.

Das `accept`-Attribut nimmt als Wert einen String, der eine oder mehrere dieser einzigartigen Dateityp-Spezifizierungen enthält, getrennt durch Kommata. Zum Beispiel könnte eine Dateiauswahl, die Inhalte benötigt, die als Bild dargestellt werden können, sowohl Standard-Bildformate als auch PDF-Dateien einschließen, wie folgt aussehen:

```html
<input type="file" accept="image/*,.pdf" />
```

## Verwendung von Datei-Inputs

### Ein einfaches Beispiel

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="file">Choose file to upload</label>
    <input type="file" id="file" name="file" multiple />
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

Dies erzeugt die folgende Ausgabe:

{{EmbedLiveSample('A_basic_example', 650, 90)}}

> [!NOTE]
> Sie können dieses Beispiel auch auf GitHub finden – sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html) an, und schauen Sie es sich auch [live an](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Unabhängig vom Gerät oder Betriebssystem des Benutzers bietet der Datei-Input eine Schaltfläche, die einen Dateiauswahl-Dialog öffnet und dem Benutzer ermöglicht, eine Datei auszuwählen.

Die Einbeziehung des [`multiple`](#multiple)-Attributs, wie oben gezeigt, gibt an, dass mehrere Dateien gleichzeitig ausgewählt werden können. Der Benutzer kann auf beliebige Weise mehrere Dateien aus dem Dateiauswahl-Interface auswählen, die seine gewählte Plattform erlaubt (z. B. durch Gedrückthalten von <kbd>Shift</kbd> oder <kbd>Strg</kbd> und anschließendes Klicken). Wenn Sie nur möchten, dass der Benutzer eine einzelne Datei pro `<input>` auswählt, lassen Sie das `multiple`-Attribut weg.

### Informationen über ausgewählte Dateien abrufen

Die ausgewählten Dateien werden durch die `HTMLInputElement.files`-Eigenschaft des Elements zurückgegeben, die ein [`FileList`](/de/docs/Web/API/FileList)-Objekt enthält, das eine Liste von [`File`](/de/docs/Web/API/File)-Objekten umfasst. Die `FileList` verhält sich wie ein Array, sodass Sie dessen `length`-Eigenschaft überprüfen können, um die Anzahl der ausgewählten Dateien zu ermitteln.

Jedes `File`-Objekt enthält folgende Informationen:

- `name`
  - : Der Name der Datei.
- `lastModified`
  - : Eine Zahl, die Datum und Uhrzeit angibt, zu der die Datei zuletzt geändert wurde, in Millisekunden seit dem UNIX-Epoch (1. Januar 1970 um Mitternacht).
- `lastModifiedDate` {{deprecated_inline}}
  - : Ein {{jsxref("Date")}} Objekt, das das Datum und die Uhrzeit angibt, zu der die Datei zuletzt geändert wurde. _Dies ist veraltet und sollte nicht verwendet werden. Verwenden Sie stattdessen `lastModified`._
- `size`
  - : Die Größe der Datei in Bytes.
- `type`
  - : Der [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) der Datei.
- `webkitRelativePath` {{non-standard_inline}}
  - : Ein String, der den relativen Pfad der Datei zum ausgewählten Basisverzeichnis im Verzeichnisauswahl-Modus spezifiziert (also ein `file`-Picker, bei dem das [`webkitdirectory`](#webkitdirectory)-Attribut gesetzt ist). _Dies ist nicht standardisiert und sollte mit Vorsicht verwendet werden._

### Akzeptierte Dateitypen einschränken

Oft möchten Sie nicht, dass der Benutzer einen beliebigen Dateityp auswählen kann; stattdessen möchten Sie oft, dass er Dateien eines bestimmten Typs oder bestimmter Typen auswählt. Zum Beispiel, wenn Ihr Datei-Input Benutzern erlaubt, ein Profilbild hochzuladen, möchten Sie wahrscheinlich, dass sie web-kompatible Bildformate wie {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}} auswählen.

Akzeptable Dateitypen können mit dem [`accept`](#accept)-Attribut angegeben werden, das eine durch Kommata getrennte Liste erlaubter Dateierweiterungen oder MIME-Typen enthält. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*` MIME-Typ. (Viele Mobilgeräte ermöglichen dem Benutzer auch, ein Bild mit der Kamera aufzunehmen, wenn dies verwendet wird.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — Akzeptiert alles, was einem MS Word-Dokument entspricht.

Werfen wir einen Blick auf ein vollständigeres Beispiel:

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="profile_pic">Choose file to upload</label>
    <input
      type="file"
      id="profile_pic"
      name="profile_pic"
      accept=".jpg, .jpeg, .png" />
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

Dies erzeugt eine ähnlich aussehende Ausgabe wie das vorherige Beispiel:

{{EmbedLiveSample('Limiting_accepted_file_types', 650, 90)}}

> [!NOTE]
> Sie können dieses Beispiel auch auf GitHub finden – siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-with-accept.html), und sehen Sie es auch [live an](https://mdn.github.io/learning-area/html/forms/file-examples/file-with-accept.html).

Es sieht vielleicht ähnlich aus, aber wenn Sie versuchen, eine Datei mit diesem Input auszuwählen, werden Sie sehen, dass der Dateiauswahl-Dialog Sie nur die durch den `accept`-Wert vorgegebenen Dateitypen auswählen lässt (das exakte Interface unterscheidet sich je nach Browser und Betriebssystem).

Das `accept`-Attribut validiert nicht die Typen der ausgewählten Dateien; es gibt nur Hinweise für Browser, um Benutzer zur Auswahl der richtigen Dateitypen zu lenken. Es ist immer noch (in den meisten Fällen) möglich, dass Benutzer eine Option im Dateiauswahlfeld umschalten, die es ermöglicht, dies zu überschreiben und beliebige Dateien auszuwählen, die sie möchten, und dann falsche Dateitypen zu wählen.

Aus diesem Grund sollten Sie sicherstellen, dass das `accept`-Attribut durch eine geeignete serverseitige Validierung unterstützt wird.

### Erkennung von Abbrüchen

Das `cancel`-Ereignis wird ausgelöst, wenn der Benutzer seine Auswahl nicht ändert und die zuvor ausgewählten Dateien erneut auswählt. Das `cancel`-Ereignis wird auch ausgelöst, wenn das Dateiauswahl-Dialogfeld über den "Abbrechen"-Button oder die <kbd>Escape</kbd>-Taste geschlossen oder abgebrochen wird.

Zum Beispiel wird der folgende Code eine Ausgabe in die Konsole schreiben, wenn der Benutzer das Popup schließt, ohne eine Datei auszuwählen:

```js
const elem = document.createElement("input");
elem.type = "file";
elem.addEventListener("cancel", () => {
  console.log("Cancelled.");
});
elem.addEventListener("change", () => {
  if (elem.files.length === 1) {
    console.log("File selected: ", elem.files[0]);
  }
});
elem.click();
```

### Hinweise

1. Sie können den Wert eines Dateiauswahl-Inputs nicht über ein Skript festlegen — etwas wie das Folgende hat keine Wirkung:

   ```js
   const input = document.querySelector("input[type=file]");
   input.value = "foo";
   ```

2. Wenn eine Datei mit einem `<input type="file">` ausgewählt wird, wird der echte Pfad zur Quelldatei aus offensichtlichen Sicherheitsgründen nicht im `value`-Attribut des Inputs angezeigt. Stattdessen wird der Dateiname angezeigt, wobei `C:\fakepath\` vorangestellt ist. Es gibt einige historische Gründe für diese Eigenart, aber sie wird in allen modernen Browsern unterstützt und ist tatsächlich in der [Spezifikation definiert](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly).

## Beispiele

In diesem Beispiel werden wir einen etwas fortgeschritteneren Dateiauswahl-Dialog präsentieren, der die verfügbaren Dateiinformationen der `HTMLInputElement.files`-Eigenschaft nutzt und einige clevere Tricks zeigt.

> [!NOTE]
> Sie können den vollständigen Quellcode für dieses Beispiel auf GitHub sehen — [file-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-example.html) ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/file-examples/file-example.html)). Wir werden das CSS nicht erklären; der Fokus liegt auf dem JavaScript.

Zuerst schauen wir uns das HTML an:

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="image_uploads">Choose images to upload (PNG, JPG)</label>
    <input
      type="file"
      id="image_uploads"
      name="image_uploads"
      accept=".jpg, .jpeg, .png"
      multiple />
  </div>
  <div class="preview">
    <p>No files currently selected for upload</p>
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

```css hidden
html {
  font-family: sans-serif;
}

form {
  background: #ccc;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid black;
}

form ol {
  padding-left: 0;
}

form li,
div > p {
  background: #eee;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  list-style-type: none;
  border: 1px solid black;
}

form img {
  height: 64px;
  order: 1;
}

form p {
  line-height: 32px;
  padding-left: 10px;
}

form label,
form button {
  background-color: #7f9ccb;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px ridge black;
  font-size: 0.8rem;
  height: auto;
}

form label:hover,
form button:hover {
  background-color: #2d5ba3;
  color: white;
}

form label:active,
form button:active {
  background-color: #0d3f8f;
  color: white;
}
```

Dies ist ähnlich wie das, was wir zuvor gesehen haben — nichts Besonderes zum Kommentieren.

Als nächstes gehen wir das JavaScript durch.

In den ersten Zeilen des Skripts erhalten wir Referenzen auf das Formulareingabefeld selbst und das {{htmlelement("div")}}-Element mit der Klasse `.preview`. Danach verstecken wir das {{htmlelement("input")}}-Element — wir tun dies, weil Datei-Inputs oft unschön, schwer zu stylen und in ihrem Design über verschiedene Browser hinweg inkonsistent sind. Sie können das `input`-Element aktivieren, indem Sie auf sein {{htmlelement("label")}} klicken, daher ist es besser, das `input` visuell zu verstecken und das Label wie einen Button zu gestalten, damit der Benutzer weiß, dass er darauf klicken sollte, wenn er Dateien hochladen möchte.

```js
const input = document.querySelector("input");
const preview = document.querySelector(".preview");

input.style.opacity = 0;
```

> [!NOTE] > {{cssxref("opacity")}} wird verwendet, um das Datei-Input zu verstecken, anstatt {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}}, da unterstützende Technologien die beiden letzten Stile als bedeutet interpretieren, das Datei-Input sei nicht interaktiv.

Als nächstes fügen wir einen [Event Listener](/de/docs/Web/API/EventTarget/addEventListener) zum Input hinzu, um Änderungen seines ausgewählten Wertes zu überwachen (in diesem Fall, wenn Dateien ausgewählt werden). Der Event Listener ruft unsere benutzerdefinierte Funktion `updateImageDisplay()` auf.

```js
input.addEventListener("change", updateImageDisplay);
```

Wann immer die Funktion `updateImageDisplay()` aufgerufen wird, tun wir Folgendes:

- Wir verwenden eine {{jsxref("Statements/while", "while")}}-Schleife, um den vorherigen Inhalt des Vorschau-`<div>` zu leeren.
- Wir erfassen das [`FileList`](/de/docs/Web/API/FileList)-Objekt, das die Informationen aller ausgewählten Dateien enthält und speichern es in einer Variable namens `curFiles`.
- Wir überprüfen, ob keine Dateien ausgewählt wurden, indem wir prüfen, ob `curFiles.length` gleich 0 ist. Ist dies der Fall, geben wir eine Nachricht in das Vorschau-`<div>` aus, die besagt, dass keine Dateien ausgewählt wurden.
- Wenn Dateien _ausgewählt wurden_, durchlaufen wir jede und drucken Informationen darüber in das Vorschau-`<div>`. Zu beachtende Punkte hier:
- Wir verwenden die benutzerdefinierte Funktion `validFileType()`, um zu prüfen, ob die Datei vom richtigen Typ ist (z.B. die im `accept`-Attribut angegebenen Bildtypen).
- Wenn dies der Fall ist, tun wir Folgendes:

  - Wir drucken ihren Namen und ihre Dateigröße in ein Listenelement innerhalb des vorherigen `<div>` (bezogen von `file.name` und `file.size`). Die benutzerdefinierte Funktion `returnFileSize()` gibt eine schön formatierte Version der Größe in Bytes/KB/MB zurück (standardmäßig gibt der Browser die Größe in absoluten Bytes an).
  - Wir generieren eine Vorschau des Bildes, indem wir [`URL.createObjectURL(file)`](/de/docs/Web/API/URL/createObjectURL_static) aufrufen. Dann fügen wir das Bild ebenfalls in das Listenelement ein, indem wir ein neues {{htmlelement("img")}}-Element erstellen und dessen [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) auf die Vorschau-URL setzen.

- Wenn der Dateityp ungültig ist, geben wir eine Nachricht in einem Listenelement aus, das den Benutzer darüber informiert, dass er einen anderen Dateityp auswählen muss.

```js
function updateImageDisplay() {
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  const curFiles = input.files;
  if (curFiles.length === 0) {
    const para = document.createElement("p");
    para.textContent = "No files currently selected for upload";
    preview.appendChild(para);
  } else {
    const list = document.createElement("ol");
    preview.appendChild(list);

    for (const file of curFiles) {
      const listItem = document.createElement("li");
      const para = document.createElement("p");
      if (validFileType(file)) {
        para.textContent = `File name ${file.name}, file size ${returnFileSize(
          file.size,
        )}.`;
        const image = document.createElement("img");
        image.src = URL.createObjectURL(file);
        image.alt = image.title = file.name;

        listItem.appendChild(image);
        listItem.appendChild(para);
      } else {
        para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
        listItem.appendChild(para);
      }

      list.appendChild(listItem);
    }
  }
}
```

Die benutzerdefinierte Funktion `validFileType()` nimmt ein [`File`](/de/docs/Web/API/File)-Objekt als Parameter, und verwendet {{jsxref("Array.prototype.includes()")}}, um zu prüfen, ob ein Wert in den `fileTypes` mit der `type`-Eigenschaft der Datei übereinstimmt. Wenn eine Übereinstimmung gefunden wird, gibt die Funktion `true` zurück. Wird keine Übereinstimmung gefunden, gibt sie `false` zurück.

```js
// https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types
const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon",
];

function validFileType(file) {
  return fileTypes.includes(file.type);
}
```

Die Funktion `returnFileSize()` nimmt eine Zahl (in Bytes, bezogen von der `size`-Eigenschaft der aktuellen Datei) und wandelt sie in eine schön formatierte Größe in Bytes/KB/MB um.

```js
function returnFileSize(number) {
  if (number < 1e3) {
    return `${number} bytes`;
  } else if (number >= 1e3 && number < 1e6) {
    return `${(number / 1e3).toFixed(1)} KB`;
  }
  return `${(number / 1e6).toFixed(1)} MB`;
}
```

> [!NOTE]
> Die "KB"- und "MB"-Einheiten hier verwenden die [SI-Präfixe](https://en.wikipedia.org/wiki/Binary_prefix) Konvention von 1KB = 1000B, ähnlich wie macOS. Verschiedene Systeme stellen Dateigrößen unterschiedlich dar — zum Beispiel verwendet Ubuntu IEC-Präfixe, wobei 1KiB = 1024B ist, während RAM-Spezifikationen oft SI-Präfixe verwenden, um Potenzen von zwei (1KB = 1024B) darzustellen. Deshalb haben wir `1e3` (`1000`) und `1e6` (`100000`) anstelle von `1024` und `1048576` verwendet. In Ihrer Anwendung sollten Sie das Einheitensystem klar kommunizieren, wenn die exakte Größe wichtig ist.

```js hidden
const button = document.querySelector("form button");
button.addEventListener("click", (e) => {
  e.preventDefault();
  const para = document.createElement("p");
  para.append("Image uploaded!");
  preview.replaceChildren(para);
});
```

Das Beispiel sieht ungefähr so aus; probieren Sie es aus:

{{EmbedLiveSample('Examples', '100%', 200)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den Pfad zur ausgewählten
        Datei darstellt.
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>
        [`change`](/de/docs/Web/API/HTMLElement/change_event),
        [`input`](/de/docs/Web/API/Element/input_event) und
        [`cancel`](/de/docs/Web/API/HTMLInputElement/cancel_event)
      </td>
    </tr>
    <tr>
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/input#required"><code>required</code></a></td>
    </tr>
    <tr>
      <td><strong>Zusätzliche Attribute</strong></td>
      <td>
        <a href="#accept" aria-current="page"><code>accept</code></a>,
        <a href="#capture" aria-current="page"><code>capture</code></a>,
        <a href="#multiple" aria-current="page"><code>multiple</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td><code>files</code> und <code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select)
      </td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwenden von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) — enthält eine Reihe anderer nützlicher Beispiele im Zusammenhang mit `<input type="file">` und der [File API](/de/docs/Web/API/File).
