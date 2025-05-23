---
title: <input type="file">
slug: Web/HTML/Reference/Elements/input/file
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente mit **`type="file"`** ermöglichen es dem Nutzer, eine oder mehrere Dateien aus dem Gerätespeicher auszuwählen. Nach der Auswahl können die Dateien über [Formularübermittlung](/de/docs/Learn_web_development/Extensions/Forms) auf einen Server hochgeladen oder mit JavaScript-Code und [der File API](/de/docs/Web/API/File_API/Using_files_from_web_applications) manipuliert werden.

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

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut eines Datei-Inputs enthält einen String, der den Pfad zu den ausgewählten Dateien repräsentiert. Wenn noch keine Datei ausgewählt wurde, ist der Wert ein leerer String (`""`). Wenn der Nutzer mehrere Dateien ausgewählt hat, repräsentiert der `value` die erste Datei in der Liste der ausgewählten Dateien. Die anderen Dateien können über die [`HTMLInputElement.files`-Eigenschaft des Inputs](/de/docs/Web/API/File_API/Using_files_from_web_applications#getting_information_about_selected_files) identifiziert werden.

> [!NOTE]
> Der Wert ist [immer der Name der Datei, vorangestellt mit `C:\fakepath\`](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly), was nicht den tatsächlichen Pfad der Datei darstellt. Dies verhindert, dass schädliche Software die Verzeichnisstruktur des Nutzers errät.

## Zusätzliche Attribute

Zusätzlich zu den allgemeinen Attributen, die alle {{HTMLElement("input")}}-Elemente teilen, unterstützen Inputs vom Typ `file` auch die folgenden Attribute.

### accept

Der Wert des [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)-Attributs ist ein String, der die Dateitypen definiert, die das Datei-Input akzeptieren soll. Dieser String ist eine kommagetrennte Liste von **[eindeutigen Dateityp-Spezifizierern](#eindeutige_dateityp-spezifizierer)**. Weil ein gegebener Dateityp auf mehr als eine Weise identifiziert werden kann, ist es nützlich, eine umfassende Menge von Typspezifizierern anzugeben, wenn Dateien eines bestimmten Formats benötigt werden.

Zum Beispiel gibt es mehrere Möglichkeiten, Microsoft Word-Dateien zu identifizieren, daher könnte eine Website, die Word-Dateien akzeptiert, ein `<input>` wie dieses verwenden:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### capture

Der Wert des [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)-Attributs ist ein String, der angibt, welche Kamera für die Aufnahme von Bild- oder Videodaten verwendet werden soll, falls das [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)-Attribut angibt, dass der Input von einem dieser Typen sein soll. Ein Wert von `user` bedeutet, dass die benutzerseitige Kamera und/oder das Mikrofon verwendet werden sollen. Ein Wert von `environment` gibt an, dass die nach außen gerichtete Kamera und/oder das Mikrofon verwendet werden sollen. Wenn dieses Attribut fehlt, steht es dem {{Glossary("user_agent", "User-Agent")}} frei, selbst zu entscheiden, was zu tun ist. Wenn der angeforderte Modus nicht verfügbar ist, kann der User-Agent auf seinen bevorzugten Standardmodus zurückgreifen.

> **Note:** `capture` war zuvor ein Boolean-Attribut, das, wenn vorhanden, verlangte, dass die Medienerfassungsgeräte des Geräts wie Kamera oder Mikrofon anstelle der Anforderung eines Datei-Inputs verwendet werden.

### multiple

Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Boolean-Attribut angegeben ist, erlaubt das Datei-Input dem Nutzer, mehr als eine Datei auszuwählen.

## Nicht-standardmäßige Attribute

Zusätzlich zu den oben aufgeführten Attributen sind die folgenden nicht-standardmäßigen Attribute in einigen Browsern verfügbar. Sie sollten versuchen, ihre Verwendung zu vermeiden, da dies die Funktionsfähigkeit Ihres Codes in Browsern einschränkt, die sie nicht implementieren.

### `webkitdirectory`

Das Boolean-Attribut `webkitdirectory`, falls vorhanden, gibt an, dass vom Nutzer nur Verzeichnisse in der Dateiauswahl-Schnittstelle ausgewählt werden sollen. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für zusätzliche Details und Beispiele.

Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Firefox verwendbar. Trotz der relativ breiten Unterstützung ist es noch nicht standardisiert und sollte nicht verwendet werden, es sei denn, es gibt keine Alternative.

## Eindeutige Dateityp-Spezifizierer

Ein **eindeutiger Dateityp-Spezifizierer** ist ein String, der einen Dateityp beschreibt, der vom Nutzer in einem {{HTMLElement("input")}}-Element des Typs `file` ausgewählt werden kann. Jeder eindeutige Dateityp-Spezifizierer kann eine der folgenden Formen annehmen:

- Eine gültige, fallunabhängige Dateinamenserweiterung, die mit einem Punkt (".") beginnt. Zum Beispiel: `.jpg`, `.pdf`, oder `.doc`.
- Ein gültiger MIME-Typ-String, ohne Erweiterungen.
- Der String `audio/*`, der "jede Audiodatei" bedeutet.
- Der String `video/*`, der "jede Videodatei" bedeutet.
- Der String `image/*`, der "jede Bilddatei" bedeutet.

Das `accept`-Attribut nimmt einen String als Wert, der einen oder mehrere dieser eindeutigen Dateityp-Spezifizierer enthält, getrennt durch Kommas. Zum Beispiel könnte ein Dateiauswahlfeld, das Inhalte benötigt, die als Bild präsentiert werden können, einschließlich sowohl standardmäßiger Bildformate als auch PDF-Dateien, so aussehen:

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
> Sie können dieses Beispiel auch auf GitHub finden — siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html) und [sehen Sie es live](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Unabhängig vom verwendeten Gerät oder Betriebssystem stellt das Datei-Input eine Schaltfläche bereit, die ein Dateiauswahl-Dialog öffnet, in dem der Nutzer eine Datei auswählen kann.

Das Einfügen des [`multiple`](#multiple)-Attributs, wie oben gezeigt, gibt an, dass mehrere Dateien gleichzeitig ausgewählt werden können. Der Nutzer kann mehrere Dateien aus der Dateiauswahl in jeder Weise auswählen, die seine Plattform zulässt (z. B. durch Drücken von <kbd>Shift</kbd> oder <kbd>Control</kbd> und dann Klicken). Wenn Sie möchten, dass der Nutzer nur eine Datei pro `<input>` auswählen kann, lassen Sie das `multiple`-Attribut weg.

### Informationen zu ausgewählten Dateien abrufen

Die ausgewählten Dateien werden durch die `HTMLInputElement.files`-Eigenschaft des Elements zurückgegeben, die ein [`FileList`](/de/docs/Web/API/FileList)-Objekt enthält, das eine Liste von [`File`](/de/docs/Web/API/File)-Objekten ist. Das `FileList` verhält sich wie ein Array, sodass Sie seine `length`-Eigenschaft überprüfen können, um die Anzahl der ausgewählten Dateien zu erhalten.

Jedes `File`-Objekt enthält die folgenden Informationen:

- `name`
  - : Der Name der Datei.
- `lastModified`
  - : Eine Zahl, die das Datum und die Uhrzeit angibt, zu der die Datei zuletzt geändert wurde, in Millisekunden seit der UNIX-Epoche (1. Januar 1970, Mitternacht).
- `lastModifiedDate` {{deprecated_inline}}
  - : Ein {{jsxref("Date")}}-Objekt, das das Datum und die Uhrzeit repräsentiert, zu der die Datei zuletzt geändert wurde. _Dies ist veraltet und sollte nicht verwendet werden. Verwenden Sie stattdessen `lastModified`._
- `size`
  - : Die Größe der Datei in Bytes.
- `type`
  - : Der [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) der Datei.
- `webkitRelativePath` {{non-standard_inline}}
  - : Ein String, der den Pfad der Datei relativ zum Basisverzeichnis im Verzeichnisauswahl-Fenster angibt (d.h. ein `file`-Auswahlfeld, bei dem das [`webkitdirectory`](#webkitdirectory)-Attribut gesetzt ist). _Dies ist nicht standardisiert und sollte mit Vorsicht verwendet werden._

### Akzeptierte Dateitypen einschränken

Oftmals möchten Sie nicht, dass der Nutzer beliebige Dateitypen auswählt; stattdessen möchten Sie häufig, dass er Dateien eines bestimmten Typs oder mehrerer Typen auswählt. Zum Beispiel, wenn Ihr Datei-Input es Nutzern ermöglicht, ein Profilbild hochzuladen, möchten Sie wahrscheinlich, dass sie webkompatible Bildformate wie {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}} auswählen.

Akzeptable Dateitypen können mit dem [`accept`](#accept)-Attribut festgelegt werden, das eine kommagetrennte Liste erlaubter Dateierweiterungen oder MIME-Typen akzeptiert. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG- oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*`-MIME-Typ. (Viele mobile Geräte lassen den Nutzer mit dieser Option auch ein Bild mit der Kamera aufnehmen.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — Akzeptiert alles, was nach einem MS Word-Dokument aussieht.

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

Dies erzeugt eine ähnliche Ausgabe wie das vorherige Beispiel:

{{EmbedLiveSample('Limiting_accepted_file_types', 650, 90)}}

> [!NOTE]
> Sie können dieses Beispiel auch auf GitHub finden — siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-with-accept.html) und [sehen Sie es live](https://mdn.github.io/learning-area/html/forms/file-examples/file-with-accept.html).

Es sieht ähnlich aus, aber wenn Sie versuchen, eine Datei mit diesem Input auszuwählen, werden Sie feststellen, dass der Dateiauswahl-Dialog nur die Dateitypen auswählen lässt, die im `accept`-Wert angegeben sind (die genaue Schnittstelle variiert je nach Browser und Betriebssystem).

Das `accept`-Attribut validiert nicht die Typen der ausgewählten Dateien; es gibt Hinweise für Browser, um Nutzer dazu anzuleiten, die richtigen Dateitypen auszuwählen. In den meisten Fällen ist es Nutzern jedoch möglich, eine Option im Dateiauswahlfenster zu aktivieren, die es ermöglicht, dies zu überschreiben und jede gewünschte Datei auszuwählen, und dann die falschen Dateitypen auszuwählen.

Aus diesem Grund sollten Sie sicherstellen, dass das `accept`-Attribut durch eine angemessene serverseitige Validierung unterstützt wird.

### Abbrüche erkennen

Das `cancel`-Ereignis wird ausgelöst, wenn der Nutzer seine Auswahl nicht ändert und die zuvor ausgewählten Dateien erneut auswählt. Das `cancel`-Ereignis wird auch ausgelöst, wenn der Dateiauswahl-Dialog über die Schaltfläche "Abbrechen" oder die <kbd>Escape</kbd>-Taste geschlossen oder abgebrochen wird.

Zum Beispiel wird der folgende Code in die Konsole loggen, wenn der Nutzer das Popup schließt, ohne eine Datei auszuwählen:

```js
const elem = document.createElement("input");
elem.type = "file";
elem.addEventListener("cancel", () => {
  console.log("Cancelled.");
});
elem.addEventListener("change", () => {
  if (elem.files.length == 1) {
    console.log("File selected: ", elem.files[0]);
  }
});
elem.click();
```

### Anmerkungen

1. Sie können den Wert eines Datei-Auswahlfelds nicht über ein Skript festlegen — das Ausführen von so etwas hat keinen Effekt:

   ```js
   const input = document.querySelector("input[type=file]");
   input.value = "foo";
   ```

2. Wenn eine Datei mit einem `<input type="file">` ausgewählt wird, wird aus offensichtlichen Sicherheitsgründen nicht der echte Pfad zur Quelldatei im `value`-Attribut des Inputs angezeigt. Stattdessen wird der Dateiname mit `C:\fakepath\` davor angezeigt. Es gibt einige historische Gründe für dieses Eigenart, aber es wird in allen modernen Browsern unterstützt und ist tatsächlich [in der Spezifikation definiert](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly).

## Beispiele

In diesem Beispiel stellen wir einen etwas fortschrittlicheren Dateiauswahl-Dialog vor, der die im `HTMLInputElement.files`-Eigenschaft verfügbaren Datei-Informationen nutzt und einige clevere Tricks zeigt.

> [!NOTE]
> Sie können den vollständigen Quellcode für dieses Beispiel auf GitHub sehen — [file-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-example.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/file-examples/file-example.html)). Wir werden das CSS nicht erklären; der Fokus liegt auf JavaScript.

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

Dies ist ähnlich zu dem, was wir bereits gesehen haben — nichts Besonderes zu kommentieren.

Als nächstes gehen wir das JavaScript durch.

In den ersten Zeilen des Skripts erhalten wir Referenzen auf das Formulareingabeelement selbst und das {{htmlelement("div")}}-Element mit der Klasse `.preview`. Als nächstes verstecken wir das {{htmlelement("input")}}-Element — wir tun dies, weil Datei-Inputs oft hässlich, schwer zu stylen und in ihrem Design über Browser hinweg uneinheitlich sind. Sie können das `input`-Element durch Klicken auf sein {{htmlelement("label")}} aktivieren, daher ist es besser, das `input`-Element visuell zu verstecken und das Label wie eine Schaltfläche zu stylen, damit der Nutzer weiß, dass er damit interagieren soll, wenn er Dateien hochladen möchte.

```js
const input = document.querySelector("input");
const preview = document.querySelector(".preview");

input.style.opacity = 0;
```

> **Note:** {{cssxref("opacity")}} wird verwendet, um das Datei-Input zu verstecken, anstelle von {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}}, weil assistierende Technologien die beiden letzteren Stile als nicht interaktiv interpretieren.

Als nächstes fügen wir dem Input einen [Event-Listener](/de/docs/Web/API/EventTarget/addEventListener) hinzu, um auf Änderungen seines ausgewählten Werts zu hören (in diesem Fall, wenn Dateien ausgewählt werden). Der Event-Listener ruft unsere benutzerdefinierte `updateImageDisplay()`-Funktion auf.

```js
input.addEventListener("change", updateImageDisplay);
```

Immer wenn die `updateImageDisplay()`-Funktion aufgerufen wird, führen wir Folgendes aus:

- Wir verwenden eine {{jsxref("Statements/while", "while")}}-Schleife, um den vorherigen Inhalt des Vorschaudivs zu leeren.
- Wir greifen das [`FileList`](/de/docs/Web/API/FileList)-Objekt ab, das die Informationen zu allen ausgewählten Dateien enthält, und speichern es in einer Variablen namens `curFiles`.
- Wir überprüfen, ob keine Dateien ausgewählt wurden, indem wir prüfen, ob `curFiles.length` gleich 0 ist. Wenn ja, wird eine Nachricht in das Vorschaudiv gedruckt, dass keine Dateien ausgewählt wurden.
- Wenn Dateien _ausgewählt_ wurden, durchlaufen wir jede einzelne und drucken Informationen darüber in das Vorschaudiv. Zu beachten ist hier:
- Wir verwenden die benutzerdefinierte `validFileType()`-Funktion, um zu überprüfen, ob die Datei vom richtigen Typ ist (z. B. die im `accept`-Attribut angegebenen Bildtypen).
- Wenn sie es ist, dann:

  - Drucken wir ihren Namen und ihre Dateigröße in ein Listenelement innerhalb des Vorschaudivs (erhalten von `file.name` und `file.size`). Die benutzerdefinierte `returnFileSize()`-Funktion gibt eine schön formatierte Version der Größe in Bytes/KB/MB zurück (standardmäßig gibt der Browser die Größe in absoluten Bytes an).
  - Erstellen Sie eine Thumbnailvorschau des Bildes, indem Sie [`URL.createObjectURL(file)`](/de/docs/Web/API/URL/createObjectURL_static) aufrufen. Fügen Sie das Bild dann ebenfalls in das Listenelement ein, indem Sie ein neues {{htmlelement("img")}} erstellen und dessen [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) auf das Thumbnail setzen.

- Wenn der Dateityp ungültig ist, zeigen wir eine Nachricht innerhalb eines Listenelements an, dass der Nutzer einen anderen Dateityp auswählen muss.

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

Die benutzerdefinierte `validFileType()`-Funktion nimmt ein [`File`](/de/docs/Web/API/File)-Objekt als Parameter an und verwendet dann {{jsxref("Array.prototype.includes()")}}, um zu überprüfen, ob ein Wert in `fileTypes` mit der `type`-Eigenschaft der Datei übereinstimmt. Wird eine Übereinstimmung gefunden, gibt die Funktion `true` zurück. Wird keine Übereinstimmung gefunden, wird `false` zurückgegeben.

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

Die `returnFileSize()`-Funktion nimmt eine Zahl (in Bytes, aus der `size`-Eigenschaft der aktuellen Datei) und wandelt sie in eine schön formatierte Größe in Bytes/KB/MB um.

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
> Die "KB"- und "MB"-Einheiten verwenden hier die [SI-Präfix](https://en.wikipedia.org/wiki/Binary_prefix)-Konvention von 1KB = 1000B, ähnlich wie macOS. Verschiedene Systeme stellen Dateigrößen unterschiedlich dar — zum Beispiel verwendet Ubuntu IEC-Präfixe, bei denen 1KiB = 1024B, während RAM-Spezifikationen oft SI-Präfixe verwenden, um Potenzen von zwei darzustellen (1KB = 1024B). Aus diesem Grund haben wir `1e3` (`1000`) und `1e6` (`1000000`) verwendet, anstelle von `1024` und `1048576`. In Ihrer Anwendung sollten Sie das Einheitensystem klar kommunizieren, wenn der genaue Wert wichtig ist.

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
      <td><strong>Implizite ARIA Rolle</strong></td>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) — enthält eine Reihe anderer nützlicher Beispiele im Zusammenhang mit `<input type="file">` und der [File API](/de/docs/Web/API/File).
