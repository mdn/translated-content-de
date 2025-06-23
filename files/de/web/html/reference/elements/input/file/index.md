---
title: <input type="file">
slug: Web/HTML/Reference/Elements/input/file
l10n:
  sourceCommit: 1f8d3bebb12dfb1e982ff907956b27c4a986b02b
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente mit **`type="file"`** ermöglichen es dem Benutzer, eine oder mehrere Dateien aus seinem Gerätespeicher auszuwählen. Sobald ausgewählt, können die Dateien mithilfe der [Formularübermittlung](/de/docs/Learn_web_development/Extensions/Forms) an einen Server hochgeladen oder mit JavaScript-Code und [der File API](/de/docs/Web/API/File_API/Using_files_from_web_applications) manipuliert werden.

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

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut eines Datei-Inputs enthält einen String, der den Pfad zu den ausgewählten Dateien repräsentiert. Wenn noch keine Datei ausgewählt ist, ist der Wert ein leerer String (`""`). Wenn der Benutzer mehrere Dateien ausgewählt hat, repräsentiert der `value` die erste Datei in der Liste der ausgewählten Dateien. Die anderen Dateien können mit der [Eigenschaft `HTMLInputElement.files` des Inputs](/de/docs/Web/API/File_API/Using_files_from_web_applications#getting_information_about_selected_files) identifiziert werden.

> [!NOTE]
> Der Wert ist [immer der Dateiname mit dem Präfix `C:\fakepath\`](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly), was nicht der tatsächliche Pfad der Datei ist. Dies dient dazu, bösartige Software daran zu hindern, die Dateistruktur des Benutzers zu erraten.

## Zusätzliche Attribute

Zusätzlich zu den allgemeinen Attributen, die alle {{HTMLElement("input")}} Elemente teilen, unterstützen Inputs vom Typ `file` auch die folgenden Attribute.

### accept

Der Wert des [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)-Attributs ist ein String, der die Dateitypen definiert, die der Datei-Input akzeptieren sollte. Dieser String ist eine durch Kommas getrennte Liste von **[eindeutigen Dateitypspezifizierern](#eindeutige_dateitypspezifizierer)**. Da ein bestimmter Dateityp auf mehr als eine Weise identifiziert werden kann, ist es nützlich, eine umfassende Reihe von Typspezifizierern anzugeben, wenn Sie Dateien eines bestimmten Formats benötigen.

Zum Beispiel gibt es mehrere Möglichkeiten, Microsoft Word-Dateien zu identifizieren, sodass eine Website, die Word-Dateien akzeptiert, ein `<input>` wie dieses verwenden könnte:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### capture

Der Wert des [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)-Attributs ist ein String, der angibt, welche Kamera zur Erfassung von Bild- oder Videodaten verwendet werden soll, falls das [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)-Attribut angibt, dass der Input einer dieser Typen sein sollte. Ein Wert von `user` gibt an, dass die benutzerorientierte Kamera und/oder das Mikrofon verwendet werden sollen. Ein Wert von `environment` spezifiziert, dass die nach außen gerichtete Kamera und/oder das Mikrofon verwendet werden sollen. Wenn dieses Attribut fehlt, ist der {{Glossary("user_agent", "User-Agent")}} frei, selbst zu entscheiden, was zu tun ist. Wenn der angeforderte Blickwinkel nicht verfügbar ist, kann der User-Agent auf den bevorzugten Standardmodus zurückfallen.

> **Hinweis:** `capture` war früher ein Boolesches Attribut, welches, wenn vorhanden, verlangte, dass die Medienaufnahmegeräte des Geräts wie Kamera oder Mikrofon verwendet werden, anstatt einen Datei-Input anzufordern.

### multiple

Wenn das Boolesche [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut angegeben ist, erlaubt der Datei-Input dem Benutzer, mehr als eine Datei auszuwählen.

## Nicht-standardisierte Attribute

Zusätzlich zu den obigen Attributen sind in einigen Browsern die folgenden nicht-standardisierten Attribute verfügbar. Sie sollten versuchen, deren Verwendung zu vermeiden, da dies die Fähigkeit Ihres Codes einschränken wird, in Browsern zu funktionieren, die sie nicht implementieren.

### `webkitdirectory`

Das Boolesche `webkitdirectory`-Attribut zeigt an, dass nur Verzeichnisse vom Benutzer in der Dateiauswahloberfläche ausgewählt werden dürfen, wenn es vorhanden ist. Weitere Details und Beispiele finden Sie unter [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

## Eindeutige Dateitypspezifizierer

Ein **eindeutiger Dateitypspezifizierer** ist ein String, der einen Dateityp beschreibt, der vom Benutzer in einem {{HTMLElement("input")}} Element des Typs `file` ausgewählt werden kann. Jeder eindeutige Dateitypspezifizierer kann eine der folgenden Formen annehmen:

- Eine gültige, nicht auf Groß-/Kleinschreibung achtende Dateinamenserweiterung, beginnend mit einem Punkt ("."). Zum Beispiel: `.jpg`, `.pdf` oder `.doc`.
- Ein gültiger MIME-Typ-String, ohne Erweiterungen.
- Der String `audio/*`, was "jede Audiodatei" bedeutet.
- Der String `video/*`, was "jede Videodatei" bedeutet.
- Der String `image/*`, was "jede Bilddatei" bedeutet.

Das `accept` Attribut nimmt einen String mit einem oder mehreren dieser eindeutigen Dateitypspezifizierer als Wert an, getrennt durch Kommas. Zum Beispiel könnte ein Dateiauswahlfenster, das Inhalte benötigt, die als Bild dargestellt werden können, einschließlich der Standardbildformate und PDF-Dateien, so aussehen:

```html
<input type="file" accept="image/*,.pdf" />
```

## Verwendung von Datei-Inputs

### Ein grundlegendes Beispiel

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

Dies führt zu folgendem Output:

{{EmbedLiveSample('A_basic_example', 650, 90)}}

> [!NOTE]
> Sie können dieses Beispiel auch auf GitHub finden — sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html) an und auch [live](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Unabhängig vom Gerät oder Betriebssystem des Benutzers bietet der Datei-Input eine Schaltfläche, die ein Dateiauswahl-Dialogfeld öffnet, das es dem Benutzer ermöglicht, eine Datei auszuwählen.

Durch Einfügen des [`multiple`](#multiple)-Attributs, wie oben gezeigt, wird angegeben, dass mehrere Dateien gleichzeitig ausgewählt werden können. Der Benutzer kann mehrere Dateien aus dem Dateiauswahlfenster auf jede von der Plattform zulässige Art auswählen (z.B. durch Halten von <kbd>Shift</kbd> oder <kbd>Strg</kbd> und anschließendem Klicken). Wenn Sie möchten, dass der Benutzer pro `<input>` nur eine Datei auswählt, lassen Sie das `multiple` Attribut weg.

### Informationen zu ausgewählten Dateien erhalten

Die ausgewählten Dateien werden durch die `HTMLInputElement.files` Eigenschaft des Elements zurückgegeben, die ein [`FileList`](/de/docs/Web/API/FileList) Objekt enthält, das eine Liste von [`File`](/de/docs/Web/API/File) Objekten enthält. `FileList` verhält sich wie ein Array, sodass Sie seine `length` Eigenschaft überprüfen können, um die Anzahl der ausgewählten Dateien zu erhalten.

Jedes `File` Objekt enthält die folgenden Informationen:

- `name`
  - : Der Name der Datei.
- `lastModified`
  - : Eine Zahl, die das Datum und die Uhrzeit angibt, zu der die Datei zuletzt geändert wurde, in Millisekunden seit dem UNIX-Epoch (1. Januar 1970 um Mitternacht).
- `lastModifiedDate` {{deprecated_inline}}
  - : Ein {{jsxref("Date")}} Objekt, das das Datum und die Uhrzeit repräsentiert, zu der die Datei zuletzt geändert wurde. _Dies ist veraltet und sollte nicht verwendet werden. Verwenden Sie stattdessen `lastModified`._
- `size`
  - : Die Größe der Datei in Bytes.
- `type`
  - : Der [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) der Datei.
- `webkitRelativePath` {{non-standard_inline}}
  - : Ein String, der den Pfad der Datei relativ zum Basisverzeichnis, das in einem Verzeichnisauswahlfenster ausgewählt wurde, spezifiziert (d.h. ein `file` Auswahlfenster, in dem das Attribut [`webkitdirectory`](#webkitdirectory) gesetzt ist). _Dies ist nicht standardisiert und sollte mit Vorsicht verwendet werden._

### Akzeptierte Dateitypen einschränken

Oft möchten Sie nicht, dass der Benutzer beliebige Dateitypen auswählen kann; stattdessen möchten Sie oft, dass er Dateien eines bestimmten Typs oder bestimmter Typen auswählt. Wenn Ihr Datei-Input beispielsweise ein Profilbild hochladen lässt, möchten Sie wahrscheinlich, dass der Benutzer webkompatible Bildformate wie {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}} auswählt.

Akzeptable Dateitypen können mit dem [`accept`](#accept)-Attribut angegeben werden, das eine durch Kommas getrennte Liste der erlaubten Dateierweiterungen oder MIME-Typen annimmt. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG- oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*` MIME-Typ. (Viele mobile Geräte ermöglichen es auch, ein Bild mit der Kamera aufzunehmen, wenn dies verwendet wird.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — akzeptiert alles, was wie ein MS Word-Dokument riecht.

Schauen wir uns ein umfassenderes Beispiel an:

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

Dies führt zu einem ähnlichen Aussehen wie das vorherige Beispiel:

{{EmbedLiveSample('Limiting_accepted_file_types', 650, 90)}}

> [!NOTE]
> Sie können dieses Beispiel auch auf GitHub finden — sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-with-accept.html) an und auch [live](https://mdn.github.io/learning-area/html/forms/file-examples/file-with-accept.html).

Es sieht zwar ähnlich aus, aber wenn Sie versuchen, eine Datei mit diesem Input auszuwählen, sehen Sie, dass das Dateiauswahlfenster nur die Dateitypen auswählen lässt, die im `accept` Wert angegeben sind (dies unterscheidet sich je nach Browser und Betriebssystem).

Das `accept` Attribut validiert nicht die Typen der ausgewählten Dateien; es gibt den Browsern Hinweise, die Benutzer zur Auswahl der korrekten Dateitypen zu führen. Es ist in den meisten Fällen immer noch möglich, dass Benutzer eine Option im Dateiauswahlfenster umschalten, die es ermöglicht, dies zu überschreiben und jede Datei auszuwählen, die sie möchten, und dann falsche Dateitypen auszuwählen.

Aus diesem Grund sollten Sie sicherstellen, dass das `accept` Attribut durch eine angemessene Server-seitige Validierung unterstützt wird.

### Abbrüche erkennen

Das `cancel` Ereignis wird ausgelöst, wenn der Benutzer seine Auswahl nicht ändert und die zuvor ausgewählten Dateien erneut auswählt. Das `cancel` Ereignis wird auch ausgelöst, wenn das Dateiauswahl-Dialogfeld geschlossen oder über die "Abbrechen"-Taste oder die <kbd>Escape</kbd>-Taste abgebrochen wird.

Zum Beispiel wird der folgende Code eine Meldung in die Konsole ausgeben, wenn der Benutzer das Popup schließt, ohne eine Datei auszuwählen:

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

### Anmerkungen

1. Sie können den Wert eines Dateiauswahlfensters nicht über ein Skript festlegen — so etwas wie das Folgende hat keine Wirkung:

   ```js
   const input = document.querySelector("input[type=file]");
   input.value = "foo";
   ```

2. Wenn eine Datei mit einem `<input type="file">` ausgewählt wird, wird der tatsächliche Pfad zur Quelldatei aus offensichtlichen Sicherheitsgründen nicht im `value` Attribut des Inputs angezeigt. Stattdessen wird der Dateiname angezeigt, mit `C:\fakepath\` davor. Es gibt einige historische Gründe für dieses Detail, aber es wird in allen modernen Browsern unterstützt und ist tatsächlich [in der Spezifikation definiert](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly).

## Beispiele

In diesem Beispiel präsentieren wir einen etwas fortgeschritteneren Dateiauswahlmechanismus, der die in der `HTMLInputElement.files` Eigenschaft verfügbaren Dateiinformationen nutzt und einige clevere Tricks zeigt.

> [!NOTE]
> Sie können den vollständigen Quellcode dieses Beispiels auf GitHub sehen — [file-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-example.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/file-examples/file-example.html)). Wir werden das CSS nicht erklären; der Fokus liegt auf dem JavaScript.

Zunächst werfen wir einen Blick auf das HTML:

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

Dies ähnelt dem, was wir bereits gesehen haben — nichts Besonderes, um darauf hinzuweisen.

Als nächstes gehen wir das JavaScript durch.

In den ersten Zeilen des Skripts erhalten wir Referenzen auf das Formulareingabe selbst und das {{htmlelement("div")}} Element mit der Klasse `.preview`. Als nächstes verstecken wir das {{htmlelement("input")}} Element — wir tun dies, weil Datei-Inputs dazu neigen, unansehnlich, schwer zu gestalten und inkonsistent im Design über verschiedene Browser hinweg zu sein. Sie können das `input` Element aktivieren, indem Sie auf sein {{htmlelement("label")}} klicken, also ist es besser, das `input` visuell zu verstecken und das Label wie einen Button zu gestalten, damit der Benutzer weiß, dass er damit interagieren soll, wenn er Dateien hochladen möchte.

```js
const input = document.querySelector("input");
const preview = document.querySelector(".preview");

input.style.opacity = 0;
```

> **Hinweis:** {{cssxref("opacity")}} wird verwendet, um den Datei-Input zu verbergen, anstatt {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}}, weil Hilfstechnologie die beiden letztgenannten Stile interpretiert, als ob der Datei-Input nicht interaktiv wäre.

Als nächstes fügen wir der Eingabe einen [Ereignislistener](/de/docs/Web/API/EventTarget/addEventListener) hinzu, um auf Änderungen ihres ausgewählten Wertes zu lauschen (in diesem Fall, wenn Dateien ausgewählt werden). Der Ereignislistener ruft unsere benutzerdefinierte `updateImageDisplay()` Funktion auf.

```js
input.addEventListener("change", updateImageDisplay);
```

Wann immer die `updateImageDisplay()` Funktion aufgerufen wird, führen wir Folgendes aus:

- Wir verwenden eine {{jsxref("Statements/while", "while")}} Schleife, um die vorherigen Inhalte des Vorschau-`<div>` zu leeren.
- Wir greifen auf das [`FileList`](/de/docs/Web/API/FileList) Objekt zu, das die Informationen zu allen ausgewählten Dateien enthält, und speichern es in einer Variablen namens `curFiles`.
- Wir prüfen, ob keine Dateien ausgewählt wurden, indem wir prüfen, ob `curFiles.length` gleich 0 ist. Wenn ja, wird eine Nachricht in das Vorschau-`<div>` gedruckt, die besagt, dass keine Dateien ausgewählt wurden.
- Wenn Dateien _ausgewählt_ wurden, durchlaufen wir jede einzelne und drucken Informationen darüber in das Vorschau-`<div>`. Wichtige Punkte hierbei:
- Wir verwenden die benutzerdefinierte `validFileType()` Funktion, um zu überprüfen, ob die Datei vom richtigen Typ ist (z.B. die im `accept` Attribut angegebenen Bildtypen).
- Wenn ja, dann:

  - Drucken wir den Namen und die Dateigröße in ein Listenelement innerhalb des vorherigen `<div>` (bezogen von `file.name` und `file.size`). Die benutzerdefinierte `returnFileSize()` Funktion gibt eine schön formatierte Version der Größe in Bytes/KB/MB zurück (standardmäßig meldet der Browser die Größe in absoluten Bytes).
  - Erstellen wir eine Thumbnail-Vorschau des Bildes, indem wir [`URL.createObjectURL(file)`](/de/docs/Web/API/URL/createObjectURL_static) aufrufen. Dann fügen wir das Bild in das Listenelement ein, indem wir ein neues {{htmlelement("img")}} erstellen und dessen [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) auf das Thumbnail setzen.

- Wenn der Dateityp ungültig ist, zeigen wir eine Nachricht innerhalb eines Listenelements an, die dem Benutzer mitteilt, dass er einen anderen Dateityp auswählen muss.

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

Die benutzerdefinierte `validFileType()` Funktion nimmt ein [`File`](/de/docs/Web/API/File) Objekt als Parameter, dann verwendet sie {{jsxref("Array.prototype.includes()")}}, um zu überprüfen, ob ein Wert in `fileTypes` mit der `type`-Eigenschaft der Datei übereinstimmt. Wenn eine Übereinstimmung gefunden wird, gibt die Funktion `true` zurück. Wenn keine Übereinstimmung gefunden wird, gibt sie `false` zurück.

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

Die `returnFileSize()` Funktion nimmt eine Zahl (in Bytes, bezogen aus der aktuellen Datei `size`-Eigenschaft) und verwandelt sie in eine schön formatierte Größe in Bytes/KB/MB.

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
> Die "KB" und "MB" Einheiten hier verwenden das [SI-Praefix](https://en.wikipedia.org/wiki/Binary_prefix) Schema, bei dem 1KB = 1000B ist, ähnlich wie bei macOS. Verschiedene Systeme stellen Dateigrößen unterschiedlich dar — zum Beispiel verwendet Ubuntu IEC-Praefixe, bei denen 1KiB = 1024B sind, während RAM-Spezifikationen oft SI-Praefixe verwenden, um Potenzen von zwei darzustellen (1KB = 1024B). Aus diesem Grund haben wir `1e3` (`1000`) und `1e6` (`1000000`) anstelle von `1024` und `1048576` verwendet. In Ihrer Anwendung sollten Sie das Einheiten-System klar an Ihre Benutzer kommunizieren, wenn die genaue Größe wichtig ist.

```js hidden
const button = document.querySelector("form button");
button.addEventListener("click", (e) => {
  e.preventDefault();
  const para = document.createElement("p");
  para.append("Image uploaded!");
  preview.replaceChildren(para);
});
```

Das Beispiel sieht so aus, probieren Sie es aus:

{{EmbedLiveSample('Examples', '100%', 200)}}

## Technische Übersicht

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den Pfad zur ausgewählten
        Datei repräsentiert.
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
      <td><strong>IDL Attribute</strong></td>
      <td><code>files</code> und <code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM Schnittstelle</strong></td>
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

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) — enthält eine Reihe anderer nützlicher Beispiele im Zusammenhang mit `<input type="file">` und der [File API](/de/docs/Web/API/File).
