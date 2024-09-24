---
title: <input type="file">
slug: Web/HTML/Element/input/file
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente mit **`type="file"`** ermöglichen es dem Benutzer, eine oder mehrere Dateien aus dem Speicher seines Geräts auszuwählen. Sobald die Dateien ausgewählt sind, können sie mithilfe der [Formularübermittlung](/de/docs/Learn/Forms) auf einen Server hochgeladen oder mittels JavaScript-Code und [der File API](/de/docs/Web/API/File_API/Using_files_from_web_applications) manipuliert werden.

{{EmbedInteractiveExample("pages/tabbed/input-file.html", "tabbed-shorter")}}

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut eines Datei-Inputs enthält einen String, der den Pfad zu den ausgewählten Dateien darstellt. Wenn noch keine Datei ausgewählt wurde, ist der Wert ein leerer String (`""`). Wenn der Benutzer mehrere Dateien ausgewählt hat, repräsentiert der `value` die erste Datei in der Liste der ausgewählten Dateien. Die anderen Dateien können über die [`HTMLInputElement.files`-Eigenschaft des Inputs](/de/docs/Web/API/File_API/Using_files_from_web_applications#getting_information_about_selected_files) identifiziert werden.

> [!NOTE]
> Der Wert ist [immer der Dateiname mit `C:\fakepath\` als Präfix](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly), was nicht der tatsächliche Pfad der Datei ist. Dies dient dazu, zu verhindern, dass bösartige Software die Dateistruktur des Benutzers errät.

## Zusätzliche Attribute

Zusätzlich zu den allgemeinen Attributen, die alle {{HTMLElement("input")}}-Elemente gemeinsam haben, unterstützen Inputs des Typs `file` auch die folgenden Attribute.

### accept

Der Wert des [`accept`](/de/docs/Web/HTML/Attributes/accept)-Attributs ist ein String, der die Dateitypen definiert, die der Datei-Input akzeptieren soll. Dieser String ist eine komma-separierte Liste von **[einzigartigen Dateitypspezifizierern](#einzigartige_dateitypspezifizierer)**. Da ein gegebener Dateityp auf mehr als eine Weise identifiziert werden kann, ist es nützlich, eine umfassende Menge von Typspezifizierern anzugeben, wenn Dateien eines bestimmten Formats benötigt werden.

Zum Beispiel gibt es eine Reihe von Möglichkeiten, Microsoft Word-Dateien zu identifizieren, daher könnte eine Webseite, die Word-Dateien akzeptiert, ein `<input>` folgendermaßen verwenden:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### capture

Der Wert des [`capture`](/de/docs/Web/HTML/Attributes/capture)-Attributs ist ein String, der spezifiziert, welche Kamera zur Aufnahme von Bild- oder Videodaten verwendet werden soll, wenn das [`accept`](/de/docs/Web/HTML/Attributes/accept)-Attribut darauf hinweist, dass der Input eines dieser Typen sein soll. Ein Wert von `user` zeigt an, dass die benutzerseitige Kamera und/oder das Mikrofon verwendet werden sollen. Ein Wert von `environment` gibt an, dass die nach außen gerichtete Kamera und/oder das Mikrofon verwendet werden sollen. Fehlt dieses Attribut, kann der {{Glossary("user_agent", "User-Agent")}} selbst entscheiden, was er tun möchte. Wenn der angeforderte Ausrichtungstyp nicht verfügbar ist, kann der User-Agent auf seinen bevorzugten Standardmodus zurückgreifen.

> **Hinweis:** `capture` war früher ein Boolean-Attribut, das, wenn es vorhanden war, anforderte, dass das Medienaufnahmegerät des Geräts wie Kamera oder Mikrofon anstelle eines Datei-Inputs verwendet wurde.

### multiple

Wenn das [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Boolean-Attribut angegeben ist, erlaubt der Datei-Input dem Benutzer, mehr als eine Datei auszuwählen.

## Nicht-Standard-Attribute

Zusätzlich zu den oben genannten Attributen sind in einigen Browsern die folgenden nicht standardmäßigen Attribute verfügbar. Sie sollten versuchen, deren Verwendung zu vermeiden, da dies die Fähigkeit Ihres Codes einschränken wird, in Browsern zu funktionieren, die sie nicht implementieren.

### `webkitdirectory`

Das Boolean-Attribut `webkitdirectory`, wenn vorhanden, gibt an, dass nur Verzeichnisse von Benutzern in der Dateiauswahloberfläche ausgewählt werden können. Weitere Details und Beispiele finden Sie unter [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

Ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge sowie ab Firefox 50 und später nutzbar. Dennoch, obwohl es relativ breite Unterstützung hat, ist es immer noch nicht standardisiert und sollte nicht verwendet werden, es sei denn, es gibt keine Alternative.

## Einzigartige Dateitypspezifizierer

Ein **einzigartiger Dateitypspezifizierer** ist ein String, der einen Dateityp beschreibt, der im {{HTMLElement("input")}}-Element vom Typ `file` durch den Benutzer ausgewählt werden kann. Jeder einzigartige Dateitypspezifizierer kann eine der folgenden Formen annehmen:

- Eine gültige, nicht großschreibungsabhängige Dateierweiterung, beginnend mit einem Punkt ("."). Zum Beispiel: `.jpg`, `.pdf` oder `.doc`.
- Ein gültiger MIME-Typ-String, ohne Erweiterungen.
- Der String `audio/*`, was "jede Audiodatei" bedeutet.
- Der String `video/*`, was "jede Videodatei" bedeutet.
- Der String `image/*`, was "jede Bilddatei" bedeutet.

Das `accept`-Attribut nimmt als Wert einen String, der einen oder mehrere dieser einzigartigen Dateitypspezifizierer enthält, getrennt durch Kommas. Beispielsweise könnte ein Datei-Picker, der Inhalte benötigt, die als Bild dargestellt werden können, einschließlich sowohl Standard-Bildformaten als auch PDF-Dateien, folgendermaßen aussehen:

```html
<input type="file" accept="image/*,.pdf" />
```

## Verwenden von Datei-Inputs

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
> Sie können dieses Beispiel auch auf GitHub finden — sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html) an, und sehen Sie es auch [live laufend](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html) an.

Unabhängig vom Gerät oder Betriebssystem des Benutzers bietet der Datei-Input eine Schaltfläche, die einen Datei-Picker-Dialog öffnet, mit dem der Benutzer eine Datei auswählen kann.

Das Einfügen des [`multiple`](#multiple)-Attributs, wie oben gezeigt, gibt an, dass mehrere Dateien gleichzeitig ausgewählt werden können. Der Benutzer kann mehrere Dateien aus dem Datei-Picker auf jede Weise auswählen, die seine gewählte Plattform erlaubt (z.B. durch Gedrückthalten von <kbd>Shift</kbd> oder <kbd>Control</kbd> und dann Klicken). Wenn Sie möchten, dass der Benutzer nur eine einzelne Datei pro `<input>` auswählt, lassen Sie das `multiple`-Attribut weg.

### Informationen zu ausgewählten Dateien abrufen

Die ausgewählten Dateien werden von der `HTMLInputElement.files`-Eigenschaft des Elements zurückgegeben, die ein [`FileList`](/de/docs/Web/API/FileList)-Objekt enthält, welches eine Liste von [`File`](/de/docs/Web/API/File)-Objekten enthält. Die `FileList` verhält sich wie ein Array, sodass Sie die `length`-Eigenschaft überprüfen können, um die Anzahl der ausgewählten Dateien zu erhalten.

Jedes `File`-Objekt enthält folgende Informationen:

- `name`
  - : Der Name der Datei.
- `lastModified`
  - : Eine Zahl, die das Datum und die Uhrzeit angibt, zu der die Datei zuletzt geändert wurde, in Millisekunden seit der UNIX-Epoche (1. Januar 1970, um Mitternacht).
- `lastModifiedDate` {{deprecated_inline}}
  - : Ein {{jsxref("Date")}}-Objekt, das das Datum und die Uhrzeit angibt, zu der die Datei zuletzt geändert wurde. _Dies ist veraltet und sollte nicht verwendet werden. Verwenden Sie stattdessen `lastModified`._
- `size`
  - : Die Größe der Datei in Bytes.
- `type`
  - : Der [MIME-Typ](/de/docs/Web/HTTP/MIME_types) der Datei.
- `webkitRelativePath` {{non-standard_inline}}
  - : Ein String, der den Pfad der Datei relativ zum Basisverzeichnis angibt, das in einem Verzeichnisauswahlwerkzeug ausgewählt wurde (das ist ein `file`-Picker, bei dem das [`webkitdirectory`](#webkitdirectory)-Attribut gesetzt ist). _Dies ist nicht standardisiert und sollte mit Vorsicht verwendet werden._

> [!NOTE]
> Sie können in allen modernen Browsern sowohl den Wert von `HTMLInputElement.files` setzen als auch abrufen; dies wurde zuletzt in Firefox, ab Version 57 hinzugefügt (siehe [Firefox-Bug 1384030](https://bugzil.la/1384030)).

### Beschränken auf akzeptierte Dateitypen

Oftmals möchten Sie nicht, dass der Benutzer irgendeinen beliebigen Dateityp auswählen kann; stattdessen möchten Sie, dass er Dateien eines bestimmten Typs oder bestimmter Typen auswählt. Wenn Ihr Datei-Input beispielsweise Benutzern erlaubt, ein Profilbild hochzuladen, möchten Sie wahrscheinlich, dass diese webkompatible Bildformate auswählen, wie {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}}.

Akzeptable Dateitypen können mit dem [`accept`](#accept)-Attribut angegeben werden, das eine durch Kommas getrennte Liste von erlaubten Dateierweiterungen oder MIME-Typen enthält. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG- oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*` MIME-Typ. (Viele Mobilgeräte erlauben dem Benutzer auch, ein Bild mit der Kamera zu machen, wenn dies verwendet wird.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — akzeptiert alles, was nach einem MS Word-Dokument riecht.

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

Dies ergibt eine ähnliche Ausgabe wie das vorherige Beispiel:

{{EmbedLiveSample('Limiting_accepted_file_types', 650, 90)}}

> [!NOTE]
> Sie können dieses Beispiel auch auf GitHub finden — sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-with-accept.html) an, und sehen Sie es auch [live laufend](https://mdn.github.io/learning-area/html/forms/file-examples/file-with-accept.html) an.

Es mag ähnlich aussehen, aber wenn Sie versuchen, mit diesem Input eine Datei auszuwählen, werden Sie feststellen, dass der Datei-Picker es Ihnen nur erlaubt, die Dateitypen auszuwählen, die im `accept`-Wert angegeben sind (die genaue Benutzeroberfläche unterscheidet sich zwischen Browsern und Betriebssystemen).

Das `accept`-Attribut validiert nicht die Typen der ausgewählten Dateien; es gibt Hinweise für Browser, um Benutzer dazu zu verleiten, die richtigen Dateitypen auszuwählen. In den meisten Fällen ist es weiterhin möglich, dass Benutzer eine Option im Datei-Auswahlmenü umschalten, die es ihnen ermöglicht, dies zu übersteuern und beliebige Dateien auszuwählen, die sie möchten, und dann falsche Dateitypen auszuwählen.

Aus diesem Grund sollten Sie sicherstellen, dass das `accept`-Attribut durch geeignete serverseitige Validierung unterstützt wird.

### Erkennen von Abbrüchen

Das `cancel`-Ereignis wird ausgelöst, wenn der Benutzer seine Auswahl nicht ändert und die zuvor ausgewählten Dateien erneut auswählt. Das `cancel`-Ereignis wird auch ausgelöst, wenn der Datei-Picker-Dialog geschlossen oder über die Schaltfläche "Abbrechen" oder die <kbd>Escape</kbd>-Taste abgebrochen wird.

Zum Beispiel würde der folgende Code eine Nachricht in die Konsole protokollieren, wenn der Benutzer das Popup schließt, ohne eine Datei auszuwählen:

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

### Hinweise

1. Sie können den Wert eines Datei-Pickers nicht über ein Skript setzen — etwas wie das Folgende hat keine Wirkung:

   ```js
   const input = document.querySelector("input[type=file]");
   input.value = "foo";
   ```

2. Wenn eine Datei über ein `<input type="file">` ausgewählt wird, wird der tatsächliche Pfad zur Quelldatei aus offensichtlichen Sicherheitsgründen nicht im `value`-Attribut des Inputs angezeigt. Stattdessen wird der Dateiname angezeigt, mit `C:\fakepath\` davor. Es gibt einige historische Gründe für dieses Kuriosum, aber es wird in allen modernen Browsern unterstützt und ist tatsächlich [in der Spezifikation definiert](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly).

## Beispiele

In diesem Beispiel präsentieren wir einen etwas fortgeschrittenen Dateiwähler, der die Informationen ausnutzt, die in der `HTMLInputElement.files`-Eigenschaft verfügbar sind, und einige clevere Tricks zeigt.

> [!NOTE]
> Sie können den vollständigen Quellcode für dieses Beispiel auf GitHub sehen — [file-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-example.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/file-examples/file-example.html)). Wir werden das CSS nicht erklären; der Fokus liegt auf dem JavaScript.

Schauen wir uns zunächst das HTML an:

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

Dies ist ähnlich wie das, was wir bereits gesehen haben — nichts Besonderes zu kommentieren.

Als nächstes gehen wir das JavaScript durch.

In den ersten Zeilen des Skripts erhalten wir Referenzen auf das Formulareingabefeld selbst und das {{htmlelement("div")}}-Element mit der Klasse `.preview`. Anschließend verstecken wir das {{htmlelement("input")}}-Element — wir tun dies, weil Datei-Inputs dazu neigen, hässlich, schwer zu gestalten und inkonsistent in ihrem Design über verschiedene Browser hinweg zu sein. Sie können das `input`-Element aktivieren, indem Sie auf dessen {{htmlelement("label")}} klicken. Daher ist es besser, das `input` optisch zu verstecken und das Label wie eine Schaltfläche zu stylen, damit der Benutzer weiß, dass er damit interagieren sollte, wenn er Dateien hochladen möchte.

```js
const input = document.querySelector("input");
const preview = document.querySelector(".preview");

input.style.opacity = 0;
```

> **Hinweis:** {{cssxref("opacity")}} wird verwendet, um das Datei-Input zu verstecken, anstatt {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}}, da unterstützende Technologien die letzten beiden Stile so interpretieren, dass das Datei-Input nicht interaktiv ist.

Als nächstes fügen wir einen [Ereignis-Listener](/de/docs/Web/API/EventTarget/addEventListener) zum Input hinzu, um Änderungen an seinem ausgewählten Wert zu überwachen (in diesem Fall, wenn Dateien ausgewählt werden). Der Ereignis-Listener ruft unsere benutzerdefinierte `updateImageDisplay()`-Funktion auf.

```js
input.addEventListener("change", updateImageDisplay);
```

Jedes Mal, wenn die `updateImageDisplay()`-Funktion aufgerufen wird, machen wir Folgendes:

- Verwenden Sie eine {{jsxref("Statements/while", "while")}}-Schleife, um die vorherigen Inhalte des Vorschau-`<div>` zu leeren.
- Holen Sie sich das [`FileList`](/de/docs/Web/API/FileList)-Objekt, das die Informationen über alle ausgewählten Dateien enthält, und speichern Sie es in einer Variablen namens `curFiles`.
- Überprüfen Sie, ob keine Dateien ausgewählt wurden, indem Sie prüfen, ob `curFiles.length` gleich 0 ist. Wenn ja, drucken Sie eine Nachricht in das Vorschau-`<div>`, dass keine Dateien ausgewählt wurden.
- Wenn Dateien ausgewählt wurden, durchlaufen wir jede einzelne und drucken Informationen darüber in das Vorschau-`<div>`. Zu beachten:
- Wir verwenden die benutzerdefinierte `validFileType()`-Funktion, um zu überprüfen, ob die Datei vom richtigen Typ ist (z.B. die im `accept`-Attribut angegebenen Bildtypen).
- Wenn dies der Fall ist, tun wir Folgendes:

  - Drucken Sie den Namen und die Dateigröße in einen Listeneintrag in dem vorherigen `<div>` (erhalten von `file.name` und `file.size`). Die benutzerdefinierte `returnFileSize()`-Funktion gibt eine schön formatierte Version der Größe in Bytes/KB/MB zurück (standardmäßig gibt der Browser die Größe in absoluten Bytes zurück).
  - Generieren Sie eine Miniaturansicht der Vorschau des Bildes, indem Sie [`URL.createObjectURL(file)`](/de/docs/Web/API/URL/createObjectURL_static) aufrufen. Dann fügen Sie das Bild ebenfalls in den Listeneintrag ein, indem Sie ein neues {{htmlelement("img")}} erstellen und sein [`src`](/de/docs/Web/HTML/Element/img#src) auf die Miniatur setzen.

- Wenn der Dateityp ungültig ist, zeigen wir eine Nachricht in einem Listeneintrag an, die dem Benutzer sagt, dass er einen anderen Dateityp auswählen muss.

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

Die benutzerdefinierte `validFileType()`-Funktion nimmt ein [`File`](/de/docs/Web/API/File)-Objekt als Parameter, dann verwendet {{jsxref("Array.prototype.includes()")}}, um zu überprüfen, ob ein Wert in den `fileTypes` mit der `type`-Eigenschaft der Datei übereinstimmt. Wenn ein Übereinstimmung gefunden wird, gibt die Funktion `true` zurück. Wenn keine Übereinstimmung gefunden wird, gibt sie `false` zurück.

```js
// https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
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

Die `returnFileSize()`-Funktion nimmt eine Zahl (in Bytes, aus der aktuellen `size`-Eigenschaft der Datei), und verwandelt sie in eine schön formatierte Größe in Bytes/KB/MB.

```js
function returnFileSize(number) {
  if (number < 1e3) {
    return `${number} bytes`;
  } else if (number >= 1e3 && number < 1e6) {
    return `${(number / 1e3).toFixed(1)} KB`;
  } else {
    return `${(number / 1e6).toFixed(1)} MB`;
  }
}
```

> [!NOTE]
> Die "KB"- und "MB"-Einheiten hier verwenden die [SI-Präfix](https://en.wikipedia.org/wiki/Binary_prefix)-Konvention von 1KB = 1000B, ähnlich wie macOS. Verschiedene Systeme stellen Dateigrößen unterschiedlich dar — zum Beispiel verwendet Ubuntu IEC-Präfixe, wo 1KiB = 1024B, während RAM-Spezifikationen oft SI-Präfixe verwenden, um Potenzen von zwei darzustellen (1KB = 1024B). Aus diesem Grund haben wir `1e3` (`1000`) und `1e6` (`100000`) anstelle von `1024` und `1048576` verwendet. In Ihrer Anwendung sollten Sie das Einheiten-System klar an Ihre Benutzer kommunizieren, wenn die genaue Größe wichtig ist.

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
        Datei darstellt.
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>
        [`change`](/de/docs/Web/API/HTMLElement/change_event),
        [`input`](/de/docs/Web/API/Element/input_event) und
        [`cancel`](/de/docs/Web/API/HTMLElement/cancel_event)
      </td>
    </tr>
    <tr>
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td><a href="/de/docs/Web/HTML/Element/input#required"><code>required</code></a></td>
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
      <td><strong>Implizierte ARIA-Rolle</strong></td>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwenden von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) — enthält eine Reihe anderer nützlicher Beispiele im Zusammenhang mit `<input type="file">` und der [File API](/en-UDocs/Web/API/File).
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
