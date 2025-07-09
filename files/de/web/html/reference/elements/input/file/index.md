---
title: <input type="file">
slug: Web/HTML/Reference/Elements/input/file
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{HTMLElement("input")}}-Elemente mit **`type="file"`** ermöglichen es dem Benutzer, eine oder mehrere Dateien aus dem Gerätespeicher auszuwählen. Sobald die Dateien ausgewählt sind, können sie über die [Formularübermittlung](/de/docs/Learn_web_development/Extensions/Forms) an einen Server hochgeladen oder mit JavaScript-Code und [der File API](/de/docs/Web/API/File_API/Using_files_from_web_applications) bearbeitet werden.

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

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut eines Datei-Inputs enthält einen String, der den Pfad zu den ausgewählten Dateien darstellt. Wenn noch keine Datei ausgewählt ist, ist der Wert ein leerer String (`""`). Wenn der Benutzer mehrere Dateien ausgewählt hat, repräsentiert der `value` die erste Datei in der Liste der ausgewählten Dateien. Die anderen Dateien können mithilfe der [`HTMLInputElement.files`-Eigenschaft des Eingabefelds](/de/docs/Web/API/File_API/Using_files_from_web_applications#getting_information_about_selected_files) identifiziert werden.

> [!NOTE]
> Der Wert ist [immer der Dateiname, der mit `C:\fakepath\` präfixiert ist](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly), was nicht der echte Pfad der Datei ist. Dies dient dazu, bösartige Software davon abzuhalten, die Dateistruktur des Benutzers zu erraten.

## Zusätzliche Attribute

Zusätzlich zu den gemeinsamen Attributen, die alle {{HTMLElement("input")}}-Elemente teilen, unterstützen Eingaben vom Typ `file` auch die folgenden Attribute.

### accept

Der Wert des [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)-Attributs ist ein String, der die Dateitypen definiert, die das Datei-Input akzeptieren soll. Dieser String ist eine kommagetrennte Liste von **[eindeutigen Dateityp-Spezifizierern](#eindeutige_dateityp-spezifizierer)**. Da ein bestimmter Dateityp auf mehr als eine Weise identifiziert werden kann, ist es nützlich, eine umfassende Menge von Typ-Spezifizierern bereitzustellen, wenn Dateien eines bestimmten Formats benötigt werden.

Zum Beispiel gibt es mehrere Möglichkeiten, Microsoft Word-Dateien zu identifizieren, daher könnte eine Seite, die Word-Dateien akzeptiert, ein `<input>` wie dieses verwenden:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### capture

Der Wert des [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)-Attributs ist ein String, der angibt, welche Kamera für die Erfassung von Bild- oder Videodaten verwendet werden soll, wenn das [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)-Attribut angibt, dass die Eingabe eine dieser Typen sein soll. Ein Wert von `user` gibt an, dass die benutzerseitige Kamera und/oder das Mikrofon verwendet werden soll. Ein Wert von `environment` gibt an, dass die nach außen gerichtete Kamera und/oder das Mikrofon verwendet werden soll. Wenn dieses Attribut fehlt, ist der {{Glossary("user_agent", "User-Agent")}} frei zu entscheiden, was er tun soll. Wenn der angeforderte Augenrichtung-Modus nicht verfügbar ist, kann der User-Agent auf seinen bevorzugten Standardmodus zurückgreifen.

> [!NOTE]
> `capture` war zuvor ein Boolesches Attribut, das, wenn vorhanden, verlangte, dass das Medienaufnahmegerät des Geräts wie Kamera oder Mikrofon anstelle des Datei-Inputs verwendet wird.

### multiple

Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Boolesche-Attribut angegeben ist, erlaubt der Datei-Input dem Benutzer, mehr als eine Datei auszuwählen.

## Nicht standardisierte Attribute

Zusätzlich zu den oben aufgeführten Attributen stehen die folgenden nicht standardisierten Attribute in einigen Browsern zur Verfügung. Sie sollten versuchen, deren Verwendung zu vermeiden, da dies die Fähigkeit Ihres Codes einschränkt, in Browsern zu funktionieren, die sie nicht implementieren.

### `webkitdirectory`

Das Boolesche `webkitdirectory`-Attribut, falls es vorhanden ist, zeigt an, dass nur Verzeichnisse vom Benutzer in der Datei-Auswahloberfläche ausgewählt werden können. Weitere Details und Beispiele finden Sie unter [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

## Eindeutige Dateityp-Spezifizierer

Ein **eindeutiger Dateityp-Spezifizierer** ist ein String, der einen Dateityp beschreibt, der vom Benutzer in einem {{HTMLElement("input")}}-Element vom Typ `file` ausgewählt werden kann. Jeder eindeutige Dateitypspezifizierer kann eine der folgenden Formen annehmen:

- Eine gültige, nicht zwischen Groß- und Kleinschreibung unterscheidende Dateinamenserweiterung, beginnend mit einem Punkt (".") Zeichen. Zum Beispiel: `.jpg`, `.pdf` oder `.doc`.
- Ein gültiger MIME-Type-String, ohne Erweiterungen.
- Der String `audio/*`, was "jede Audiodatei" bedeutet.
- Der String `video/*`, was "jede Videodatei" bedeutet.
- Der String `image/*`, was "jede Bilddatei" bedeutet.

Das `accept`-Attribut nimmt einen String, der einen oder mehrere dieser eindeutigen Dateityp-Spezifizierer als Wert enthält, durch Kommas getrennt. Zum Beispiel könnte ein Dateiauswahldialog, der Inhalte benötigt, die als Bild präsentiert werden können, sowohl Standardbildformate als auch PDF-Dateien, so aussehen:

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

Dies ergibt die folgende Ausgabe:

{{EmbedLiveSample('A_basic_example', 650, 90)}}

> [!NOTE]
> Sie können dieses Beispiel auch auf GitHub finden — sehen Sie den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html) an, und sehen Sie es auch [live laufen](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Unabhängig vom Gerät oder Betriebssystem des Benutzers bietet der Datei-Input einen Button, der einen Dateiauswahldialog öffnet, der es dem Benutzer ermöglicht, eine Datei auszuwählen.

Das Einfügen des [`multiple`](#multiple)-Attributs, wie oben gezeigt, spezifiziert, dass mehrere Dateien auf einmal ausgewählt werden können. Der Benutzer kann mehrere Dateien aus der Dateiauswahl auswählen, auf eine Weise, die seine gewählte Plattform erlaubt (z.B. durch Halten der <kbd>Shift</kbd> oder <kbd>Control</kbd>-Taste und dann Klicken). Wenn Sie möchten, dass der Benutzer nur eine einzelne Datei pro `<input>` auswählt, lassen Sie das `multiple`-Attribut weg.

### Informationen zu ausgewählten Dateien erhalten

Die ausgewählten Dateien werden von der `HTMLInputElement.files`-Eigenschaft des Elements zurückgegeben, die ein [`FileList`](/de/docs/Web/API/FileList)-Objekt ist, das eine Liste von [`File`](/de/docs/Web/API/File)-Objekten enthält. Das `FileList` verhält sich wie ein Array, daher können Sie seine `length`-Eigenschaft überprüfen, um die Anzahl der ausgewählten Dateien zu erhalten.

Jedes `File`-Objekt enthält die folgenden Informationen:

- `name`
  - : Der Name der Datei.
- `lastModified`
  - : Eine Nummer, die das Datum und die Uhrzeit angibt, zu der die Datei zuletzt bearbeitet wurde, in Millisekunden seit dem UNIX-Epoch (1. Januar 1970, um Mitternacht).
- `lastModifiedDate` {{deprecated_inline}}
  - : Ein {{jsxref("Date")}}-Objekt, das das Datum und die Uhrzeit angibt, zu der die Datei zuletzt bearbeitet wurde. _Dies ist veraltet und sollte nicht verwendet werden. Verwenden Sie stattdessen `lastModified`._
- `size`
  - : Die Größe der Datei in Bytes.
- `type`
  - : Der [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) der Datei.
- `webkitRelativePath` {{non-standard_inline}}
  - : Ein String, der den Pfad der Datei relativ zum Basisverzeichnis angibt, das in einem Verzeichnisauswahldialog ausgewählt wurde (das heißt, einem `file`-Picker, in dem das [`webkitdirectory`](#webkitdirectory)-Attribut gesetzt ist). _Dies ist nicht standardisiert und sollte mit Vorsicht verwendet werden._

### Akzeptierte Dateitypen einschränken

Oftmals möchten Sie nicht, dass der Benutzer jeden beliebigen Dateityp auswählen kann; stattdessen möchten Sie ihn oft dazu bringen, Dateien eines bestimmten Typs oder bestimmter Typen auszuwählen. Beispielsweise, wenn Ihr Datei-Input Benutzern erlaubt, ein Profilbild hochzuladen, möchten Sie wahrscheinlich, dass sie webkompatible Bildformate auswählen, wie {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}}.

Akzeptable Dateitypen können mit dem [`accept`](#accept)-Attribut spezifiziert werden, das eine kommagetrennte Liste von erlaubten Dateierweiterungen oder MIME-Typen nimmt. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*`-MIME-Typ. (Viele mobile Geräte erlauben dem Benutzer auch, ein Bild mit der Kamera aufzunehmen, wenn dies verwendet wird.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — Akzeptiert alles, was nach einem MS Word-Dokument riecht.

Sehen wir uns ein umfassenderes Beispiel an:

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

Dies ergibt eine ähnliche Ausgabe wie das vorherige Beispiel:

{{EmbedLiveSample('Limiting_accepted_file_types', 650, 90)}}

> [!NOTE]
> Sie können dieses Beispiel auch auf GitHub finden — sehen Sie den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-with-accept.html) an, und sehen Sie es auch [live laufen](https://mdn.github.io/learning-area/html/forms/file-examples/file-with-accept.html).

Es mag ähnlich aussehen, aber wenn Sie versuchen, mit diesem Input eine Datei auszuwählen, werden Sie feststellen, dass der Dateiauswahldialog es Ihnen nur erlaubt, die Dateitypen auszuwählen, die im `accept`-Wert angegeben sind (die genaue Benutzeroberfläche unterscheidet sich je nach Browser und Betriebssystem).

Das `accept`-Attribut validiert die Typen der ausgewählten Dateien nicht; es gibt Hinweise für Browser, um Benutzer zur Auswahl der richtigen Dateitypen zu führen. Es ist immer noch möglich (in den meisten Fällen) für Benutzer, eine Option im Dateiauswahldialog umzuschalten, die es ermöglicht, dies zu überschreiben und jede gewünschte Datei auszuwählen, und dann inkorrekte Dateitypen auszuwählen.

Aus diesem Grund sollten Sie sicherstellen, dass das `accept`-Attribut durch geeignete serverseitige Validierung unterstützt wird.

### Erkennen von Abbrüchen

Das `cancel`-Ereignis wird ausgelöst, wenn der Benutzer seine Auswahl nicht ändert und die zuvor ausgewählten Dateien erneut auswählt. Das `cancel`-Ereignis wird auch ausgelöst, wenn der Dateiauswahldialog über die "Abbrechen"-Taste oder die <kbd>Escape</kbd>-Taste geschlossen oder abgebrochen wird.

Zum Beispiel wird der folgende Code eine Nachricht in die Konsole protokollieren, wenn der Benutzer das Popup schließt, ohne eine Datei auszuwählen:

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

1. Sie können den Wert eines Dateiauswahldialogs nicht über ein Skript setzen — so etwas wie das Folgende hat keine Wirkung:

   ```js
   const input = document.querySelector("input[type=file]");
   input.value = "foo";
   ```

2. Wenn eine Datei mit einem `<input type="file">` ausgewählt wird, wird der echte Pfad zur Quelldatei aus offensichtlichen Sicherheitsgründen nicht im `value`-Attribut des Inputs angezeigt. Stattdessen wird der Dateiname angezeigt, mit `C:\fakepath\` davor. Es gibt einige historische Gründe für diese Eigenart, aber sie wird in allen modernen Browsern unterstützt und ist in der Tat [im Standard definiert](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly).

## Beispiele

In diesem Beispiel werden wir einen etwas fortgeschritteneren Dateiauswahldialog präsentieren, der die im `HTMLInputElement.files`-Eigenschaft verfügbaren Datei-Informationen nutzt und einige clevere Tricks zeigt.

> [!NOTE]
> Sie können den vollständigen Quellcode für dieses Beispiel auf GitHub sehen — [file-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-example.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/file-examples/file-example.html)). Wir werden das CSS nicht erklären; der Schwerpunkt liegt auf dem JavaScript.

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

Dies ähnelt dem, was wir zuvor gesehen haben — nichts Besonderes zu kommentieren.

Als Nächstes gehen wir das JavaScript durch.

In den ersten Zeilen des Skripts holen wir Referenzen auf das Formulareingabefeld selbst und das {{htmlelement("div")}}-Element mit der Klasse `.preview`. Als nächstes verstecken wir das {{htmlelement("input")}}-Element — das tun wir, weil Datei-Inputs dazu neigen, hässlich, schwer zu stylen und inkonsistent im Design zwischen Browsern zu sein. Sie können das `input`-Element aktivieren, indem Sie auf sein {{htmlelement("label")}} klicken, daher ist es besser, das `input` visuell zu verstecken und das Label wie einen Button zu stylen, damit der Benutzer weiß, dass er damit interagieren soll, wenn er Dateien hochladen möchte.

```js
const input = document.querySelector("input");
const preview = document.querySelector(".preview");

input.style.opacity = 0;
```

> [!NOTE]
> {{cssxref("opacity")}} wird verwendet, um das Datei-Input zu verstecken, anstatt {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}}, weil assistierende Technologien die beiden letzteren Stile so interpretieren, dass das Datei-Input nicht interaktiv ist.

Als nächstes fügen wir einen [Ereignis-Listener](/de/docs/Web/API/EventTarget/addEventListener) zum Input hinzu, um auf Änderungen seines ausgewählten Wertes (in diesem Fall, wenn Dateien ausgewählt werden) zu hören. Der Ereignis-Listener ruft unsere benutzerdefinierte `updateImageDisplay()`-Funktion auf.

```js
input.addEventListener("change", updateImageDisplay);
```

Wann immer die `updateImageDisplay()`-Funktion aufgerufen wird, führen wir Folgendes durch:

- Verwenden Sie eine {{jsxref("Statements/while", "while")}}-Schleife, um den vorherigen Inhalt des Preview-`<div>` zu leeren.
- Holen Sie das [`FileList`](/de/docs/Web/API/FileList)-Objekt, das die Informationen zu allen ausgewählten Dateien enthält, und speichern Sie es in einer Variable namens `curFiles`.
- Prüfen Sie, ob keine Dateien ausgewählt wurden, indem Sie prüfen, ob `curFiles.length` gleich 0 ist. Wenn ja, geben Sie eine Nachricht in das Preview-`<div>` aus, die aussagt, dass keine Dateien ausgewählt wurden.
- Wenn Dateien _ausgewählt_ wurden, durchlaufen wir jede einzelne davon und geben Informationen darüber in das Preview-`<div>` aus. Zu beachtende Punkte:
- Wir verwenden die benutzerdefinierte `validFileType()`-Funktion, um zu überprüfen, ob die Datei den korrekten Typ aufweist (z.B. die in dem `accept`-Attribut angegebenen Bildtypen).
- Wenn sie es tut, dann:
  - Drucken Sie ihren Namen und die Dateigröße in ein Listenelement innerhalb des vorherigen `<div>` (erhalten von `file.name` und `file.size`). Die benutzerdefinierte `returnFileSize()`-Funktion gibt eine schön formatierte Version der Größe in Bytes/KB/MB zurück (standardmäßig meldet der Browser die Größe in absoluten Bytes).
  - Erstellen Sie eine Vorschaubild des Bildes, indem Sie [`URL.createObjectURL(file)`](/de/docs/Web/API/URL/createObjectURL_static) aufrufen. Dann fügen Sie das Bild ebenfalls in das Listenelement ein, indem Sie ein neues {{htmlelement("img")}}-Element erstellen und sein [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) auf das Vorschaubild setzen.

- Wenn der Dateityp ungültig ist, zeigen wir eine Nachricht innerhalb eines Listenelements an, dass der Benutzer einen anderen Dateityp auswählen muss.

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

Die benutzerdefinierte `validFileType()`-Funktion nimmt ein [`File`](/de/docs/Web/API/File)-Objekt als Parameter, dann verwendet sie {{jsxref("Array.prototype.includes()")}}, um zu überprüfen, ob irgendein Wert in den `fileTypes` den `type`-Eigenschaftenwert der Datei entspricht. Wenn ein Treffer gefunden wird, gibt die Funktion `true` zurück. Wenn kein Treffer gefunden wird, gibt sie `false` zurück.

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

Die `returnFileSize()`-Funktion nimmt eine Zahl (in Bytes, genommen von der `size`-Eigenschaft der aktuellen Datei) und wandelt sie in eine schön formatierte Größe in Bytes/KB/MB um.

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
> Die "KB"- und "MB"-Einheiten hier verwenden die [SI-Einheitenpräfixe](https://en.wikipedia.org/wiki/Binary_prefix) Konvention von 1KB = 1000B, ähnlich wie macOS. Verschiedene Systeme repräsentieren Dateigrößen unterschiedlich — zum Beispiel verwendet Ubuntu IEC-Präfixe, wo 1KiB = 1024B, während RAM-Spezifikationen oft SI-Prefixe verwenden, um Zweierpotenzen darzustellen (1KB = 1024B). Aus diesem Grund haben wir `1e3` (`1000`) und `1e6` (`1000000`) anstelle von `1024` und `1048576` verwendet. In Ihrer Anwendung sollten Sie das Einheitensystem Ihren Benutzern klar kommunizieren, wenn die genaue Größe wichtig ist.

```js hidden
const button = document.querySelector("form button");
button.addEventListener("click", (e) => {
  e.preventDefault();
  const para = document.createElement("p");
  para.append("Image uploaded!");
  preview.replaceChildren(para);
});
```

Das Beispiel sieht so aus; probieren Sie es aus:

{{EmbedLiveSample('Examples', '100%', 200)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den Pfad zur
        ausgewählten Datei darstellt.
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
