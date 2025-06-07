---
title: '`<input type="file">`'
slug: Web/HTML/Reference/Elements/input/file
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente mit **`type="file"`** ermöglichen es dem Benutzer, eine oder mehrere Dateien aus dem Speicher ihres Geräts auszuwählen. Nachdem die Dateien ausgewählt wurden, können sie über [Formularübermittlung](/de/docs/Learn_web_development/Extensions/Forms) auf einen Server hochgeladen oder mit JavaScript-Code und [der File API](/de/docs/Web/API/File_API/Using_files_from_web_applications) bearbeitet werden.

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

Ein [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut eines Datei-Inputs enthält einen String, der den Pfad zur ausgewählten Datei bzw. den Dateien repräsentiert. Wenn noch keine Datei ausgewählt wurde, ist der Wert ein leerer String (`""`). Wenn der Benutzer mehrere Dateien ausgewählt hat, repräsentiert der `value` die erste Datei in der Liste der ausgewählten Dateien. Die anderen Dateien können über die [`HTMLInputElement.files`-Eigenschaft des Eingabeelements](/de/docs/Web/API/File_API/Using_files_from_web_applications#getting_information_about_selected_files) identifiziert werden.

> [!NOTE]
> Der Wert ist [immer der Dateiname, der mit `C:\fakepath\` vorangestellt ist](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly), was nicht der echte Pfad der Datei ist. Dies dient dazu, bösartiger Software das Raten der Dateistruktur des Benutzers zu erschweren.

## Zusätzliche Attribute

Zusätzlich zu den allgemeinen Attributen, die alle {{HTMLElement("input")}}-Elemente gemeinsam haben, unterstützen Eingaben vom Typ `file` auch die folgenden Attribute.

### accept

Der Wert des [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)-Attributs ist ein String, der die Dateitypen definiert, die der Datei-Input akzeptieren soll. Dieser String ist eine durch Kommas getrennte Liste von **[eindeutigen Dateitypspezifizierern](#eindeutige_dateitypspezifizierer)**. Da ein bestimmter Dateityp auf mehr als eine Weise identifiziert werden kann, ist es hilfreich, eine vollständige Reihe von Typspezifizierern anzugeben, wenn Sie Dateien eines bestimmten Formats benötigen.

Zum Beispiel gibt es mehrere Möglichkeiten, Microsoft Word-Dateien zu identifizieren, sodass eine Webseite, die Word-Dateien akzeptiert, ein `<input>` wie folgt verwenden könnte:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### capture

Der Wert des [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)-Attributs ist ein String, der angibt, welche Kamera zur Erfassung von Bild- oder Videodaten verwendet werden soll, wenn das [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)-Attribut angibt, dass die Eingabe von einem dieser Typen sein soll. Ein Wert von `user` deutet darauf hin, dass die benutzerseitige Kamera und/oder das Mikrofon verwendet werden sollte. Ein Wert von `environment` gibt an, dass die nach außen gerichtete Kamera und/oder das Mikrofon verwendet werden soll. Wenn dieses Attribut fehlt, kann der {{Glossary("user_agent", "User Agent")}} selbst entscheiden, was er tun soll. Wenn der angeforderte Modus nicht verfügbar ist, kann der User Agent auf seinen bevorzugten Standardmodus zurückgreifen.

> **Hinweis:** `capture` war zuvor ein boolesches Attribut, das, wenn es vorhanden war, verlangte, dass das Medienerfassungsgerät(e) des Geräts wie Kamera oder Mikrofon verwendet werden, anstatt einen Dateieingang anzufordern.

### multiple

Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Boolesche Attribut angegeben ist, erlaubt der Datei-Input dem Benutzer, mehr als eine Datei auszuwählen.

## Nicht standardmäßige Attribute

Zusätzlich zu den oben aufgeführten Attributen sind folgende nicht standardmäßige Attribute in einigen Browsern verfügbar. Sie sollten versuchen, deren Verwendung möglichst zu vermeiden, da dadurch die Fähigkeit Ihres Codes eingeschränkt wird, in Browsern zu funktionieren, die sie nicht implementieren.

### `webkitdirectory`

Das boolesche `webkitdirectory`-Attribut deutet, wenn es vorhanden ist, darauf hin, dass nur Verzeichnisse vom Benutzer im Datei-Auswahlinterface ausgewählt werden können. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für weitere Details und Beispiele.

Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Firefox verwendbar. Trotz seiner relativ breiten Unterstützung ist es jedoch immer noch nicht standardisiert und sollte nicht verwendet werden, es sei denn, Sie haben keine Alternative.

## Eindeutige Dateitypspezifizierer

Ein **eindeutiger Dateitypspezifizierer** ist ein String, der einen Dateityp beschreibt, der vom Benutzer in einem {{HTMLElement("input")}}-Element vom Typ `file` ausgewählt werden kann. Jeder eindeutige Dateitypspezifizierer kann eine der folgenden Formen annehmen:

- Eine gültige, nicht unterscheidungsfähige Dateinamenerweiterung, die mit einem Punkt (".") beginnt. Zum Beispiel: `.jpg`, `.pdf` oder `.doc`.
- Ein gültiger MIME-Typ-String ohne Erweiterungen.
- Der String `audio/*` bedeutet "jede Audiodatei".
- Der String `video/*` bedeutet "jede Videodatei".
- Der String `image/*` bedeutet "jede Bilddatei".

Das `accept`-Attribut nimmt einen String, der einen oder mehrere dieser eindeutigen Dateitypspezifizierer als Wert enthält, getrennt durch Kommata. Beispielsweise könnte ein Datei-Auswahlinterface, das Inhalte benötigt, die als Bild dargestellt werden können, einschließlich sowohl Standard-Bildformate als auch PDF-Dateien, folgendermaßen aussehen:

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
> Sie können dieses Beispiel auch auf GitHub finden — siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html), und [sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Unabhängig vom Gerät oder Betriebssystem des Benutzers stellt der Datei-Input eine Schaltfläche bereit, die ein Datei-Auswahldialogfenster öffnet, das es dem Benutzer ermöglicht, eine Datei auszuwählen.

Das Einfügen des [`multiple`](#multiple)-Attributs, wie oben gezeigt, gibt an, dass mehrere Dateien auf einmal ausgewählt werden können. Der Benutzer kann mehrere Dateien aus der Datei-Auswahl in jeder vom gewählten System erlaubten Weise auswählen (z.B. durch Drücken von <kbd>Shift</kbd> oder <kbd>Control</kbd> und dann Klicken). Wenn Sie möchten, dass der Benutzer pro `<input>` nur eine einzelne Datei auswählt, lassen Sie das `multiple`-Attribut weg.

### Informationen zu ausgewählten Dateien abrufen

Die ausgewählten Dateien werden durch die `HTMLInputElement.files`-Eigenschaft des Elements zurückgegeben, die ein [`FileList`](/de/docs/Web/API/FileList)-Objekt enthält, das eine Liste von [`File`](/de/docs/Web/API/File)-Objekten enthält. Das `FileList`-Objekt verhält sich wie ein Array, sodass Sie seine `length`-Eigenschaft überprüfen können, um die Anzahl der ausgewählten Dateien zu ermitteln.

Jedes `File`-Objekt enthält die folgenden Informationen:

- `name`
  - : Der Name der Datei.
- `lastModified`
  - : Eine Zahl, die das Datum und die Uhrzeit angibt, zu der die Datei zuletzt geändert wurde, in Millisekunden seit der UNIX-Epoche (1. Januar 1970, Mitternacht).
- `lastModifiedDate` {{deprecated_inline}}
  - : Ein {{jsxref("Date")}}-Objekt, das das Datum und die Uhrzeit darstellt, zu der die Datei zuletzt geändert wurde. _Dies ist veraltet und sollte nicht verwendet werden. Verwenden Sie stattdessen `lastModified`._
- `size`
  - : Die Größe der Datei in Bytes.
- `type`
  - : Der [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) der Datei.
- `webkitRelativePath` {{non-standard_inline}}
  - : Ein String, der den Pfad der Datei relativ zum Basispfad angibt, der in einem Verzeichnisauswahlfenster ausgewählt wurde (das heißt, einem Datei-Auswahlfenster, in dem das [`webkitdirectory`](#webkitdirectory)-Attribut gesetzt ist). _Dies ist nicht standardmäßig und sollte mit Vorsicht verwendet werden._

### Akzeptierte Dateitypen einschränken

Oft möchten Sie nicht, dass der Benutzer jeden beliebigen Dateityp auswählen kann; stattdessen möchten Sie oft, dass er Dateien eines bestimmten Typs oder bestimmter Typen auswählt. Wenn Ihr Datei-Input beispielsweise dem Benutzer erlaubt, ein Profilbild hochzuladen, möchten Sie wahrscheinlich, dass er webkompatible Bildformate wie {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}} auswählt.

Zulässige Dateitypen können mit dem [`accept`](#accept)-Attribut angegeben werden, das eine durch Kommas getrennte Liste zulässiger Dateinamenerweiterungen oder MIME-Typen erfordert. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG- oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*`-MIME-Typ. (Viele mobile Geräte erlauben dem Benutzer auch, ein Bild mit der Kamera zu machen, wenn dies verwendet wird.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — Akzeptiert alles, was nach einem MS-Word-Dokument riecht.

Sehen wir uns ein vollständigeres Beispiel an:

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
> Sie können dieses Beispiel auch auf GitHub finden — siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-with-accept.html), und [sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/file-examples/file-with-accept.html).

Es sieht vielleicht ähnlich aus, aber wenn Sie versuchen, mit diesem Input eine Datei auszuwählen, werden Sie feststellen, dass der Dateiauswahler nur die Dateitypen auswählen lässt, die im `accept`-Wert angegeben sind (die genaue Oberfläche unterscheidet sich je nach Browser und Betriebssystem).

Das `accept`-Attribut validiert nicht die Typen der ausgewählten Dateien; es gibt den Browsern Hinweise, um die Benutzer bei der Auswahl der richtigen Dateitypen zu führen. Es ist in den meisten Fällen immer noch möglich, dass Benutzer eine Option im Dateiauswahlfenster umschalten können, die es ihnen ermöglicht, dies zu überschreiben und jede beliebige Datei auszuwählen, die sie möchten, und dann die falschen Dateitypen auszuwählen.

Aus diesem Grund sollten Sie sicherstellen, dass das `accept`-Attribut mit einer entsprechenden serverseitigen Validierung gestützt wird.

### Erkennung von Abbrüchen

Das `cancel`-Ereignis wird ausgelöst, wenn der Benutzer seine Auswahl nicht ändert und die vorher ausgewählten Dateien erneut auswählt. Das `cancel`-Ereignis wird auch ausgelöst, wenn das Dateiauswahl-Dialogfeld durch die Schaltfläche "Abbrechen" oder die <kbd>Escape</kbd>-Taste geschlossen oder abgebrochen wird.

Beispielsweise wird der folgende Code in die Konsole protokollieren, wenn der Benutzer das Popup schließt, ohne eine Datei auszuwählen:

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

1. Sie können den Wert eines Datei-Auswählers nicht aus einem Script heraus setzen — etwas wie das Folgende hat keine Wirkung:

   ```js
   const input = document.querySelector("input[type=file]");
   input.value = "foo";
   ```

2. Wenn eine Datei über ein `<input type="file">` ausgewählt wird, wird aus offensichtlichen Sicherheitsgründen nicht der echte Pfad zur Quelldatei im `value`-Attribut der Eingabe angezeigt. Stattdessen wird der Dateiname angezeigt, mit `C:\fakepath\` davor. Es gibt einige historische Gründe für diese Eigenart, aber sie ist in allen modernen Browsern unterstützt, und sie ist tatsächlich [in der Spezifikation definiert](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly).

## Beispiele

In diesem Beispiel präsentieren wir einen etwas fortgeschritteneren Dateiauswähler, der die in der `HTMLInputElement.files`-Eigenschaft verfügbaren Dateiinformationen nutzt und auch ein paar clevere Tricks zeigt.

> [!NOTE]
> Sie können den vollständigen Quellcode für dieses Beispiel auf GitHub sehen — [file-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-example.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/file-examples/file-example.html)). Wir werden das CSS nicht erklären; der Fokus liegt auf dem JavaScript.

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

Dies ist ähnlich zu dem, was wir bereits gesehen haben — nichts Besonderes, was kommentiert werden müsste.

Als Nächstes gehen wir durch das JavaScript.

In den ersten Zeilen des Scripts erhalten wir Referenzen auf die Formulareingabe selbst und das {{htmlelement("div")}}-Element mit der Klasse `.preview`. Danach verstecken wir das {{htmlelement("input")}}-Element — wir tun dies, weil Datei-Inputs dazu neigen, hässlich, schwer zu gestalten und in ihrem Design über verschiedene Browser hinweg inkonsistent zu sein. Sie können das `input`-Element durch Klicken auf dessen {{htmlelement("label")}} aktivieren, sodass es besser ist, das `input` visuell zu verstecken und das Label wie eine Schaltfläche zu gestalten, damit der Benutzer weiß, dass er darauf klicken muss, wenn er Dateien hochladen möchte.

```js
const input = document.querySelector("input");
const preview = document.querySelector(".preview");

input.style.opacity = 0;
```

> **Hinweis:** {{cssxref("opacity")}} wird verwendet, um die Datei-Input zu verstecken, anstelle von {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}}, weil assistive Technologie die letzten beiden Stile interpretiert als ob der Datei-Input nicht interaktiv sei.

Als Nächstes fügen wir dem Input einen [Event Listener](/de/docs/Web/API/EventTarget/addEventListener) hinzu, um auf Änderungen der ausgewählten Werte zu hören (in diesem Fall, wenn Dateien ausgewählt werden). Der Event Listener ruft unsere benutzerdefinierte `updateImageDisplay()`-Funktion auf.

```js
input.addEventListener("change", updateImageDisplay);
```

Wann immer die `updateImageDisplay()`-Funktion aufgerufen wird, ...

- Verwenden wir eine {{jsxref("Statements/while", "while")}}-Schleife, um den bisherigen Inhalt des Vorschau-`<div>` zu leeren.
- Wir holen das [`FileList`](/de/docs/Web/API/FileList)-Objekt, das die Informationen über alle ausgewählten Dateien enthält, und speichern es in einer Variablen namens `curFiles`.
- Wir überprüfen, ob keine Dateien ausgewählt wurden, indem wir überprüfen, ob `curFiles.length` gleich 0 ist. Falls ja, drucken wir eine Nachricht in das Vorschau-`<div>`, die besagt, dass keine Dateien ausgewählt wurden.
- Wenn Dateien _ausgewählt_ wurden, durchlaufen wir jede einzelne und drucken Informationen darüber in das Vorschau-`<div>`. Beachten Sie hier:
- Wir verwenden die benutzerdefinierte `validFileType()`-Funktion, um zu überprüfen, ob die Datei den richtigen Typ hat (z.B. die im `accept`-Attribut angegebenen Bildtypen).
- Wenn sie es ist:

  - Drucken wir ihren Namen und ihre Dateigröße in einen Listeneintrag im vorherigen `<div>` (erhalten von `file.name` und `file.size`). Die benutzerdefinierte `returnFileSize()`-Funktion gibt eine schön formatierte Version der Größe in Bytes/KB/MB zurück (standardmäßig gibt der Browser die Größe in absoluten Bytes zurück).
  - Erstellen wir eine Miniaturvorschau des Bildes, indem wir [`URL.createObjectURL(file)`](/de/docs/Web/API/URL/createObjectURL_static) aufrufen. Dann fügen wir das Bild ebenfalls in den Listeneintrag ein, indem wir eine neue {{htmlelement("img")}} erstellen und ihr [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) auf das Thumbnail setzen.

- Wenn der Dateityp ungültig ist, zeigen wir eine Nachricht in einem Listeneintrag an, die dem Benutzer mitteilt, dass er einen anderen Dateityp auswählen muss.

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

Die benutzerdefinierte `validFileType()`-Funktion nimmt ein [`File`](/de/docs/Web/API/File)-Objekt als Parameter und verwendet {{jsxref("Array.prototype.includes()")}}, um zu überprüfen, ob einer der Werte in den `fileTypes` den `type`-Eigenschaften der Datei entspricht. Wenn ein Treffer gefunden wird, gibt die Funktion `true` zurück. Wenn kein Treffer gefunden wird, gibt sie `false` zurück.

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

Die `returnFileSize()`-Funktion nimmt eine Zahl (in Bytes, entnommen von der `size`-Eigenschaft der aktuellen Datei) und wandelt sie in eine schön formatierte Größe in Bytes/KB/MB um.

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
> Die "KB"- und "MB"-Einheiten hier verwenden die [SI-Prefix](https://en.wikipedia.org/wiki/Binary_prefix)-Konvention von 1KB = 1000B, ähnlich wie macOS. Verschiedene Systeme repräsentieren Dateigrößen unterschiedlich — zum Beispiel verwendet Ubuntu IEC-Präfixe, bei denen 1KiB = 1024B ist, während RAM-Spezifikationen oft SI-Präfixe verwenden, um Potenzen von zwei darzustellen (1KB = 1024B). Aus diesem Grund haben wir `1e3` (`1000`) und `1e6` (`100000`) anstelle von `1024` und `1048576` verwendet. In Ihrer Anwendung sollten Sie das Einheitensystem klar kommunizieren, wenn die genaue Größe wichtig ist.

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
      <td><strong>IDL Attribute</strong></td>
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
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) — enthält eine Reihe anderer nützlicher Beispiele im Zusammenhang mit `<input type="file">` und der [File API](/de/docs/Web/API/File).
