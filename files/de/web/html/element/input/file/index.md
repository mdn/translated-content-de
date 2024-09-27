---
title: <input type="file">
slug: Web/HTML/Element/input/file
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente mit **`type="file"`** ermöglichen es dem Benutzer, eine oder mehrere Dateien aus dem Speicher seines Geräts auszuwählen. Sobald die Dateien ausgewählt wurden, können sie mithilfe von [Formularübermittlung](/de/docs/Learn/Forms) auf einen Server hochgeladen oder durch JavaScript-Code und [die File API](/de/docs/Web/API/File_API/Using_files_from_web_applications) manipuliert werden.

{{EmbedInteractiveExample("pages/tabbed/input-file.html", "tabbed-shorter")}}

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut eines Datei-Input enthält eine Zeichenkette, die den Pfad zu der/den ausgewählten Datei(en) darstellt. Wenn noch keine Datei ausgewählt wurde, ist der Wert eine leere Zeichenkette (`""`). Wenn der Benutzer mehrere Dateien ausgewählt hat, repräsentiert der `value` den ersten Eintrag in der Liste der Dateien, die er ausgewählt hat. Die anderen Dateien können über die [`HTMLInputElement.files` Eigenschaft des Inputs](/de/docs/Web/API/File_API/Using_files_from_web_applications#getting_information_about_selected_files) identifiziert werden.

> [!NOTE]
> Der Wert ist [immer der Dateiname mit `C:\fakepath\` davor](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly), was nicht der tatsächliche Pfad der Datei ist. Dies dient dazu, bösartige Software daran zu hindern, die Dateistruktur des Benutzers zu erraten.

## Zusätzliche Attribute

Neben den gemeinsamen Attributen, die von allen {{HTMLElement("input")}} Elementen geteilt werden, unterstützen Inputs vom Typ `file` auch die folgenden Attribute.

### accept

Der Wert des [`accept`](/de/docs/Web/HTML/Attributes/accept) Attributs ist eine Zeichenkette, die die Dateitypen definiert, die der Datei-Input akzeptieren soll. Diese Zeichenkette ist eine durch Kommas getrennte Liste von **[einzigartigen Dateityp-Spezifizierern](#einzigartige_dateityp-spezifizierer)**. Da ein gegebener Dateityp durch mehr als eine Methode identifiziert werden kann, ist es nützlich, eine umfassende Menge von Typ-Spezifizierern bereitzustellen, wenn Sie Dateien eines bestimmten Formats benötigen.

Zum Beispiel gibt es mehrere Möglichkeiten, Microsoft Word-Dateien zu identifizieren, sodass eine Website, die Word-Dateien akzeptiert, ein `<input>` wie dieses verwenden könnte:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### capture

Der Wert des [`capture`](/de/docs/Web/HTML/Attributes/capture) Attributs ist eine Zeichenkette, die angibt, welche Kamera zur Erfassung von Bild- oder Videodaten verwendet werden soll, wenn das [`accept`](/de/docs/Web/HTML/Attributes/accept) Attribut angibt, dass der Input einer dieser Typen sein soll. Ein Wert von `user` gibt an, dass die dem Benutzer zugewandte Kamera und/oder das Mikrofon verwendet werden soll. Ein Wert von `environment` gibt an, dass die nach außen gerichtete Kamera und/oder das Mikrofon verwendet werden soll. Fehlt dieses Attribut, ist der [Benutzeragent](/de/docs/Glossary/user_agent) frei, nach eigenem Ermessen zu entscheiden, was zu tun ist. Wenn der angeforderte Modus nicht verfügbar ist, kann der Benutzeragent auf seinen bevorzugten Standardmodus zurückfallen.

> **Hinweis:** `capture` war früher ein Boolean-Attribut, das, falls vorhanden, verlangte, dass das/die Medienaufnahmegerät(e) des Geräts wie Kamera oder Mikrofon verwendet werden, anstatt einen Datei-Input zu verlangen.

### multiple

Wenn das [`multiple`](/de/docs/Web/HTML/Attributes/multiple) Boolean-Attribut angegeben ist, ermöglicht der Datei-Input dem Benutzer, mehr als eine Datei auszuwählen.

## Nicht-standardisierte Attribute

Zusätzlich zu den oben aufgeführten Attributen sind die folgenden nicht-standardisierten Attribute in einigen Browsern verfügbar. Sie sollten versuchen, diese nach Möglichkeit zu vermeiden, da ihre Verwendung die Fähigkeit Ihres Codes einschränkt, in Browsern zu funktionieren, die sie nicht implementieren.

### `webkitdirectory`

Das Boolean-Attribut `webkitdirectory`, falls vorhanden, gibt an, dass nur Verzeichnisse dem Benutzer in der Dateiauswahloberfläche zur Auswahl bereitstehen sollen. Weitere Details und Beispiele finden Sie unter [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge sowie Firefox 50 und höher nutzbar. Dennoch, auch wenn es relativ breite Unterstützung hat, ist es weiterhin nicht standardisiert und sollte nicht verwendet werden, es sei denn, Sie haben keine Alternative.

## Einzigartige Dateityp-Spezifizierer

Ein **einzigartiger Dateityp-Spezifizierer** ist eine Zeichenkette, die einen Dateityp beschreibt, der von einem {{HTMLElement("input")}} Element vom Typ `file` durch den Benutzer ausgewählt werden kann. Jeder einzigartige Dateityp-Spezifizierer kann eine der folgenden Formen annehmen:

- Eine gültige, nicht auf Groß-/Kleinschreibung achtende Dateinamenerweiterung, beginnend mit einem Punkt ("."). Beispielsweise: `.jpg`, `.pdf` oder `.doc`.
- Eine gültige MIME-Typ-Zeichenkette, ohne Erweiterungen.
- Die Zeichenkette `audio/*`, was "beliebige Audiodatei" bedeutet.
- Die Zeichenkette `video/*`, was "beliebige Videodatei" bedeutet.
- Die Zeichenkette `image/*`, was "beliebige Bilddatei" bedeutet.

Das `accept` Attribut nimmt eine Zeichenkette als Wert, die eines oder mehrere dieser einzigartigen Dateityp-Spezifizierer enthält, getrennt durch Kommas. Beispielsweise könnte ein Datei-Picker, der Inhalte benötigt, die als Bild dargestellt werden können, einschließlich sowohl der standardmäßigen Bildformate als auch der PDF-Dateien, folgendermaßen aussehen:

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

Dies ergibt die folgende Ausgabe:

{{EmbedLiveSample('A_basic_example', 650, 90)}}

> [!NOTE]
> Sie können dieses Beispiel auch auf GitHub finden — sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html) an und auch [sehen Sie es live](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Unabhängig vom Gerät oder Betriebssystem des Benutzers bietet der Datei-Input eine Schaltfläche, die einen Dateiauswahldialog öffnet, in dem der Benutzer eine Datei auswählen kann.

Das Einfügen des [`multiple`](#multiple) Attributs, wie oben gezeigt, gibt an, dass mehrere Dateien auf einmal ausgewählt werden können. Der Benutzer kann mehrere Dateien im Dateiauswahlfenster auf beliebige Weise auswählen, die seine gewählte Plattform erlaubt (z.B. durch Gedrückthalten von <kbd>Shift</kbd> oder <kbd>Control</kbd> und anschließendes Klicken). Wenn Sie nur möchten, dass der Benutzer eine einzelne Datei pro `<input>` auswählt, lassen Sie das `multiple` Attribut weg.

### Informationen über ausgewählte Dateien erhalten

Die ausgewählten Dateien werden von der `HTMLInputElement.files`-Eigenschaft des Elements zurückgegeben, die ein [`FileList`](/de/docs/Web/API/FileList) Objekt enthält, das eine Liste von [`File`](/de/docs/Web/API/File) Objekten enthält. `FileList` verhält sich wie ein Array, sodass Sie seine `length`-Eigenschaft überprüfen können, um die Anzahl der ausgewählten Dateien zu bestimmen.

Jedes `File`-Objekt enthält die folgende Informationen:

- `name`
  - : Der Name der Datei.
- `lastModified`
  - : Eine Zahl, die das Datum und die Uhrzeit angibt, zu der die Datei zuletzt geändert wurde, in Millisekunden seit der UNIX-Epoche (1. Januar 1970, Mitternacht).
- `lastModifiedDate` {{deprecated_inline}}
  - : Ein {{jsxref("Date")}} Objekt, das das Datum und die Uhrzeit darstellt, zu der die Datei zuletzt geändert wurde. _Dies ist veraltet und sollte nicht verwendet werden. Verwenden Sie stattdessen `lastModified`._
- `size`
  - : Die Größe der Datei in Bytes.
- `type`
  - : Der [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) der Datei.
- `webkitRelativePath` {{non-standard_inline}}
  - : Eine Zeichenkette, die den Pfad der Datei relativ zum Basisverzeichnis, das in einem Verzeichnisauswahldialog ausgewählt wurde, angibt (das heißt, ein `file`-Picker, bei dem das [`webkitdirectory`](#webkitdirectory)-Attribut gesetzt ist). _Dies ist nicht standardisiert und sollte mit Vorsicht verwendet werden._

> [!NOTE]
> Sie können den Wert von `HTMLInputElement.files` in allen modernen Browsern sowohl setzen als auch abrufen; dies wurde zuletzt in Firefox, Version 57, hinzugefügt (siehe [Firefox-Bug 1384030](https://bugzil.la/1384030)).

### Akzeptierte Dateitypen einschränken

Oftmals möchten Sie nicht, dass der Benutzer einen beliebigen Dateityp auswählen kann; stattdessen möchten Sie oft, dass er Dateien eines bestimmten Typs oder bestimmter Typen auswählt. Wenn Ihr Datei-Input den Benutzern beispielsweise ermöglicht, ein Profilbild hochzuladen, möchten Sie wahrscheinlich, dass sie webkompatible Bildformate wie [JPEG](/de/docs/Glossary/JPEG) oder [PNG](/de/docs/Glossary/PNG) auswählen.

Erlaubte Dateitypen können mit dem [`accept`](#accept) Attribut angegeben werden, das eine durch Kommas getrennte Liste von erlaubten Dateinamenerweiterungen oder MIME-Typen akzeptiert. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG- oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*` MIME-Typ. (Viele mobile Geräte erlauben dem Benutzer auch, ein Foto mit der Kamera zu machen, wenn dies verwendet wird.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — Akzeptiert alles, was nach einem MS-Word-Dokument riecht.

Schauen wir uns ein vollständigeres Beispiel an:

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
> Sie können dieses Beispiel auch auf GitHub finden — sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-with-accept.html) an und auch [sehen Sie es live](https://mdn.github.io/learning-area/html/forms/file-examples/file-with-accept.html).

Es mag ähnlich aussehen, aber wenn Sie versuchen, mit diesem Input eine Datei auszuwählen, werden Sie feststellen, dass der Dateiauswahldialog nur die Dateitypen auswählen lässt, die im `accept` Wert angegeben sind (die genaue Benutzeroberfläche unterscheidet sich je nach Browser und Betriebssystem).

Das `accept` Attribut überprüft nicht die Typen der ausgewählten Dateien; es bietet Hinweise für Browser, um Benutzer dazu zu bewegen, die richtigen Dateitypen auszuwählen. Es bleibt in den meisten Fällen möglich, dass Benutzer eine Option im Datei-Chooser umschalten, die es ermöglicht, dies außer Kraft zu setzen und jede gewünschte Datei auszuwählen, und dann falsche Dateitypen auszuwählen.

Aus diesem Grund sollten Sie sicherstellen, dass das `accept` Attribut durch die entsprechende serverseitige Validierung unterstützt wird.

### Absagen erkennen

Das `cancel` Ereignis wird ausgelöst, wenn der Benutzer seine Auswahl nicht ändert und die zuvor ausgewählten Dateien erneut auswählt. Das `cancel` Ereignis wird auch ausgelöst, wenn der Dateiauswahldialog über die Schaltfläche "Abbrechen" oder die <kbd>Escape</kbd> Taste geschlossen oder abgebrochen wird.

Zum Beispiel wird der folgende Code eine Konsole ausgeben, wenn der Benutzer das Popup-Fenster schließt, ohne eine Datei auszuwählen:

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

1. Sie können den Wert eines Dateiauswahlfensters nicht aus einem Skript heraus setzen – etwas wie das Folgende hat keine Wirkung:

   ```js
   const input = document.querySelector("input[type=file]");
   input.value = "foo";
   ```

2. Wenn eine Datei mit einem `<input type="file">` ausgewählt wird, wird der tatsächliche Pfad zur Quelldatei nicht im `value` Attribut des Inputs angezeigt, aus offensichtlichen Sicherheitsgründen. Stattdessen wird der Dateiname angezeigt, mit `C:\fakepath\` davor. Es gibt historische Gründe für diese Eigenart, aber sie wird in allen modernen Browsern unterstützt und ist tatsächlich [in der Spezifikation definiert](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly).

## Beispiele

In diesem Beispiel präsentieren wir einen etwas fortschrittlicheren Dateiauswahlmechanismus, der die im `HTMLInputElement.files`-Eigenschaft verfügbaren Dateiinformationen verwendet und ein paar clevere Tricks zeigt.

> [!NOTE]
> Sie können den vollständigen Quellcode für dieses Beispiel auf GitHub sehen — [file-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-example.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/file-examples/file-example.html)). Wir werden das CSS nicht erklären; der Fokus liegt auf dem JavaScript.

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

Dies ist ähnlich wie das, was wir vorher gesehen haben — nichts Besonderes zu kommentieren.

Als nächstes gehen wir durch das JavaScript.

In den ersten Zeilen des Skripts erhalten wir Referenzen auf das Formulareingabeelement selbst und das {{htmlelement("div")}} Element mit der Klasse `.preview`. Als nächstes verstecken wir das {{htmlelement("input")}} Element — dies tun wir, weil Datei-Inputs dazu neigen, hässlich, schwer zu stylen und in ihrem Design über die verschiedenen Browser hinweg inkonsistent zu sein. Sie können das `input` Element aktivieren, indem Sie auf dessen {{htmlelement("label")}} klicken, daher ist es besser, das `input` optisch zu verstecken und das Label wie einen Button zu stylen, damit der Benutzer weiß, dass er damit interagieren soll, wenn er Dateien hochladen möchte.

```js
const input = document.querySelector("input");
const preview = document.querySelector(".preview");

input.style.opacity = 0;
```

> **Hinweis:** {{cssxref("opacity")}} wird verwendet, um den Datei-Input zu verstecken, anstelle von {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}}, da Assistive Technology die beiden letzteren Stile so interpretiert, dass der Datei-Input nicht interaktiv ist.

Dann fügen wir einen [Ereignislistener](/de/docs/Web/API/EventTarget/addEventListener) zum Input hinzu, der auf Änderungen seines ausgewählten Wertes hört (in diesem Fall, wenn Dateien ausgewählt werden). Der Ereignislistener ruft unsere benutzerdefinierte `updateImageDisplay()` Funktion auf.

```js
input.addEventListener("change", updateImageDisplay);
```

Immer wenn die `updateImageDisplay()` Funktion aufgerufen wird, führen wir folgende Aktionen aus:

- Verwenden Sie eine {{jsxref("Statements/while", "while")}} Schleife, um die vorherigen Inhalte des Vorschau-`<div>` zu leeren.
- Erfassen Sie das [`FileList`](/de/docs/Web/API/FileList) Objekt, das die Informationen über alle ausgewählten Dateien enthält, und speichern Sie es in einer Variablen namens `curFiles`.
- Überprüfen Sie, ob keine Dateien ausgewählt wurden, indem Sie prüfen, ob `curFiles.length` gleich 0 ist. Ist das der Fall, wird eine Nachricht in das Vorschau-`<div>` gedruckt, dass keine Dateien ausgewählt wurden.
- Falls _doch_ Dateien ausgewählt wurden, durchlaufen wir jede einzelne und drucken Informationen darüber in das Vorschau-`<div>`. Dinge, die zu beachten sind:
- Wir verwenden die benutzerdefinierte Funktion `validFileType()`, um zu überprüfen, ob der Dateityp korrekt ist (z.B. die in dem `accept` Attribut angegebenen Bildtypen).
- Wenn ja, dann:

  - Drucken wir ihren Namen und ihre Dateigröße in ein Listenelement innerhalb des vorherigen `<div>` (erhalten über `file.name` und `file.size`). Die benutzerdefinierte `returnFileSize()` Funktion gibt eine hübsch formatierte Version der Größe in Bytes/KB/MB zurück (standardmäßig berichtet der Browser die Größe in absoluten Bytes).
  - Generieren Sie eine Thumbnail-Vorschau des Bildes, indem Sie [`URL.createObjectURL(file)`](/de/docs/Web/API/URL/createObjectURL_static) aufrufen. Fügen Sie dann das Bild ebenfalls in das Listenelement ein, indem Sie ein neues {{htmlelement("img")}} erstellen und dessen [`src`](/de/docs/Web/HTML/Element/img#src) auf das Thumbnail setzen.

- Wenn der Dateityp ungültig ist, zeigen wir innerhalb eines Listenelements eine Nachricht an, die dem Benutzer mitteilt, dass er einen anderen Dateityp auswählen muss.

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

Die benutzerdefinierte `validFileType()` Funktion nimmt ein [`File`](/de/docs/Web/API/File) Objekt als Parameter und verwendet {{jsxref("Array.prototype.includes()")}}, um zu überprüfen, ob ein Wert in den `fileTypes` mit der `type` Eigenschaft der Datei übereinstimmt. Wird eine Übereinstimmung gefunden, gibt die Funktion `true` zurück. Wenn keine Übereinstimmung gefunden wird, gibt sie `false` zurück.

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

Die `returnFileSize()`-Funktion nimmt eine Zahl (von Bytes, entnommen aus der `size`-Eigenschaft der aktuellen Datei) und wandelt sie in eine schön formatierte Größe in Bytes/KB/MB um.

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
> Die "KB" und "MB" Einheiten hier verwenden die [SI-Präfix](https://en.wikipedia.org/wiki/Binary_prefix) Konvention von 1KB = 1000B, ähnlich wie macOS. Verschiedene Systeme stellen Dateigrößen unterschiedlich dar — zum Beispiel verwendet Ubuntu IEC-Präfixe, bei denen 1KiB = 1024B, während RAM-Spezifikationen oft SI-Präfixe verwenden, um Zweierpotenzen darzustellen (1KB = 1024B). Aus diesem Grund haben wir `1e3` (`1000`) und `1e6` (`100000`) anstelle von `1024` und `1048576` verwendet. In Ihrer Anwendung sollten Sie das Einheitensystem klar für Ihre Benutzer kommunizieren, wenn die exakte Größe wichtig ist.

```js hidden
const button = document.querySelector("form button");
button.addEventListener("click", (e) => {
  e.preventDefault();
  const para = document.createElement("p");
  para.append("Image uploaded!");
  preview.replaceChildren(para);
});
```

Das Beispiel sieht folgendermaßen aus; probieren Sie es aus:

{{EmbedLiveSample('Examples', '100%', 200)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenkette, die den Pfad zur
        ausgewählten Datei darstellt.
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
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
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

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) — enthält eine Reihe weiterer nützlicher Beispiele im Zusammenhang mit `<input type="file">` und der [File API](/de/docs/Web/API/File).
- [Kompatibilität von CSS Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
