---
title: '`<input type="file">` HTML-Attributwert'
short-title: <input type="file">
slug: Web/HTML/Reference/Elements/input/file
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

{{HTMLElement("input")}}-Elemente mit **`type="file"`** ermöglichen es dem Benutzer, eine oder mehrere Dateien aus ihrem Gerätespeicher auszuwählen. Sobald sie ausgewählt sind, können die Dateien über eine [Formularübermittlung](/de/docs/Learn_web_development/Extensions/Forms) an einen Server hochgeladen oder mit JavaScript-Code und der [File API](/de/docs/Web/API/File_API/Using_files_from_web_applications) manipuliert werden.

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

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut eines Datei-Eingabefeldes enthält eine Zeichenkette, die den Pfad zu den ausgewählten Datei(en) repräsentiert. Wenn noch keine Datei ausgewählt wurde, ist der Wert eine leere Zeichenkette (`""`). Wenn der Benutzer mehrere Dateien ausgewählt hat, repräsentiert der `value` die erste Datei in der Liste der ausgewählten Dateien. Die anderen Dateien können über die [`HTMLInputElement.files`-Eigenschaft](/de/docs/Web/API/File_API/Using_files_from_web_applications#getting_information_about_selected_files) des Eingabeelements identifiziert werden.

> [!NOTE]
> Der Wert ist [immer der Dateiname mit Präfix `C:\fakepath\`](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly), was nicht der echte Pfad der Datei ist. Dies dient dazu, bösartige Software daran zu hindern, die Dateistruktur des Benutzers zu erraten.

## Zusätzliche Attribute

Neben den allgemeinen Attributen, die alle {{HTMLElement("input")}}-Elemente teilen, unterstützen Eingaben vom Typ `file` auch die folgenden Attribute.

### accept

Der Wert des [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)-Attributs ist eine Zeichenkette, die die Dateitypen definiert, die die Dateieingabe akzeptieren soll. Diese Zeichenkette ist eine kommagetrennte Liste von **[einzigartigen Dateitypspezifizierern](#einzigartige_dateitypspezifizierer)**. Da ein bestimmter Dateityp auf mehr als eine Weise identifiziert werden kann, ist es nützlich, eine umfassende Menge von Typspezifizierern anzugeben, wenn Dateien in einem bestimmten Format benötigt werden.

Microsoft Word-Dateien können beispielsweise auf verschiedene Arten identifiziert werden, sodass eine Website, die Word-Dateien akzeptiert, eine `<input>` wie diese verwenden könnte:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### capture

Der Wert des [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)-Attributs ist eine Zeichenkette, die angibt, welche Kamera für die Aufnahme von Bild- oder Videodaten verwendet werden soll, wenn das [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)-Attribut angibt, dass die Eingabe von einem dieser Typen sein sollte. Ein Wert von `user` bedeutet, dass die benutzerseitige Kamera und/oder das Mikrofon verwendet werden soll. Ein Wert von `environment` gibt an, dass die nach außen gerichtete Kamera und/oder das Mikrofon verwendet werden soll. Wenn dieses Attribut fehlt, kann der {{Glossary("user_agent", "User Agent")}} selbst entscheiden, was zu tun ist. Wenn der angeforderte Modus nicht verfügbar ist, kann der User Agent auf seinen bevorzugten Standardmodus zurückgreifen.

> [!NOTE]
> `capture` war früher ein Boolean-Attribut, das, falls vorhanden, verlangte, dass das Medienaufnahmegerät(e) des Geräts wie Kamera oder Mikrofon verwendet wird, anstatt eine Dateieingabe anzufordern.

### multiple

Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Boolean-Attribut angegeben ist, ermöglicht die Dateieingabe dem Benutzer, mehr als eine Datei auszuwählen.

## Nicht-standardisierte Attribute

Zusätzlich zu den oben aufgeführten Attributen sind die folgenden nicht-standardisierten Attribute in einigen Browsern verfügbar. Sie sollten versuchen, sie zu vermeiden, wann immer möglich, da die Verwendung die Fähigkeit Ihres Codes einschränkt, in Browsern zu funktionieren, die sie nicht implementieren.

### `webkitdirectory`

Das Boolean-Attribut `webkitdirectory`, falls vorhanden, gibt an, dass im Dateiauswahldialog nur Verzeichnisse zur Auswahl durch den Benutzer verfügbar sein sollen. Weitere Details und Beispiele finden Sie unter [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

## Einzigartige Dateitypspezifizierer

Ein **einzigartiger Dateitypspezifizierer** ist eine Zeichenkette, die eine Art von Datei beschreibt, die vom Benutzer in einem {{HTMLElement("input")}}-Element vom Typ `file` ausgewählt werden darf. Jeder einzigartige Dateitypspezifizierer kann eine der folgenden Formen annehmen:

- Eine gültige, Groß-/Kleinschreibung nicht beachtende Dateinamenerweiterung, die mit einem Punkt (".") beginnt. Zum Beispiel: `.jpg`, `.pdf` oder `.doc`.
- Eine gültige MIME-Typ-Zeichenkette, ohne Erweiterungen.
- Die Zeichenkette `audio/*`, was bedeutet "jede Audiodatei".
- Die Zeichenkette `video/*`, was bedeutet "jede Videodatei".
- Die Zeichenkette `image/*`, was bedeutet "jede Bilddatei".

Das `accept`-Attribut nimmt eine Zeichenkette, die einen oder mehrere dieser einzigartigen Dateitypspezifizierer als Wert enthält, die durch Kommas getrennt sind. Zum Beispiel könnte ein Dateiauswahldialog, der Inhalte benötigt, die als Bild präsentiert werden können, einschließlich sowohl standardmäßiger Bildformate als auch PDF-Dateien, so aussehen:

```html
<input type="file" accept="image/*,.pdf" />
```

## Verwendung von Dateieingaben

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
> Dieses Beispiel finden Sie auch auf GitHub — siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html) und auch [sehen Sie es live](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Unabhängig vom Gerät oder Betriebssystem des Benutzers bietet die Dateieingabe eine Schaltfläche, die einen Dateiauswahldialog öffnet, der es dem Benutzer ermöglicht, eine Datei auszuwählen.

Das Einschließen des [`multiple`](#multiple)-Attributs, wie oben gezeigt, gibt an, dass mehrere Dateien gleichzeitig ausgewählt werden können. Der Benutzer kann mehrere Dateien aus dem Dateiauswahldialog in beliebiger Weise auswählen, die seine gewählte Plattform ermöglicht (z.B. durch Gedrückthalten von <kbd>Shift</kbd> oder <kbd>Control</kbd> und anschließendes Klicken). Wenn Sie nur möchten, dass der Benutzer eine einzelne Datei pro `<input>` auswählt, lassen Sie das `multiple`-Attribut weg.

### Informationen zu ausgewählten Dateien abrufen

Die ausgewählten Dateien werden durch die `HTMLInputElement.files`-Eigenschaft des Elements zurückgegeben, welche ein [`FileList`](/de/docs/Web/API/FileList)-Objekt ist, das eine Liste von [`File`](/de/docs/Web/API/File)-Objekten enthält. Die `FileList` verhält sich wie ein Array, daher können Sie ihre `length`-Eigenschaft verwenden, um die Anzahl der ausgewählten Dateien zu ermitteln.

Jedes `File`-Objekt enthält die folgenden Informationen:

- `name`
  - : Der Name der Datei.
- `lastModified`
  - : Eine Zahl, die das Datum und die Uhrzeit angibt, zu der die Datei zuletzt bearbeitet wurde, in Millisekunden seit dem UNIX-Epoch (1. Januar 1970, um Mitternacht).
- `lastModifiedDate` {{deprecated_inline}}
  - : Ein {{jsxref("Date")}}-Objekt, das das Datum und die Uhrzeit angibt, zu der die Datei zuletzt bearbeitet wurde. _Dies ist veraltet und sollte nicht verwendet werden. Verwenden Sie stattdessen `lastModified`._
- `size`
  - : Die Größe der Datei in Bytes.
- `type`
  - : Der [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) der Datei.
- `webkitRelativePath` {{non-standard_inline}}
  - : Eine Zeichenkette, die den Pfad der Datei relativ zum im Verzeichnisauswahlmodus gewählten Basisverzeichnis angibt (d.h. ein `file`-Auswahlelement, bei dem das [`webkitdirectory`](#webkitdirectory)-Attribut gesetzt ist). _Dies ist nicht-standardisiert und sollte mit Vorsicht verwendet werden._

### Akzeptierte Dateitypen einschränken

Häufig möchten Sie nicht, dass der Benutzer beliebige Dateitypen auswählen kann; stattdessen möchten Sie oft, dass er Dateien eines bestimmten Typs oder bestimmter Typen auswählt. Zum Beispiel, wenn Ihr Dateieingabefeld Benutzern ermöglicht, ein Profilbild hochzuladen, möchten Sie wahrscheinlich, dass sie webkompatible Bildformate wie {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}} auswählen.

Akzeptable Dateitypen können mit dem [`accept`](#accept)-Attribut festgelegt werden, welches eine kommagetrennte Liste zulässiger Dateierweiterungen oder MIME-Typen annimmt. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG- oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*`-MIME-Typ. (Viele mobile Geräte ermöglichen es dem Benutzer auch, ein Bild mit der Kamera aufzunehmen, wenn dies verwendet wird.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — akzeptiert alles, was wie ein MS Word-Dokument "riecht".

Werfen wir einen Blick auf ein umfangreicheres Beispiel:

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
> Dieses Beispiel finden Sie auch auf GitHub — siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-with-accept.html) und auch [sehen Sie es live](https://mdn.github.io/learning-area/html/forms/file-examples/file-with-accept.html).

Es mag ähnlich aussehen, aber wenn Sie versuchen, mit dieser Eingabe eine Datei auszuwählen, werden Sie sehen, dass der Dateiauswahldialog nur die in `accept` angegebenen Dateitypen auswählen lässt (die genaue Oberfläche variiert zwischen Browsern und Betriebssystemen).

Das `accept`-Attribut validiert nicht die Typen der ausgewählten Dateien; es gibt den Browsern Hinweise, um Benutzer bei der Auswahl der richtigen Dateitypen zu unterstützen. Es ist in den meisten Fällen weiterhin möglich für Benutzer, eine Option im Dateiauswahldialog umzuschalten, die es ermöglicht, dies zu überschreiben und beliebige Dateien auszuwählen, die sie wünschen, und dann inkorrekte Dateitypen auszuwählen.

Aus diesem Grund sollten Sie sicherstellen, dass das `accept`-Attribut durch eine geeignete serverseitige Validierung unterstützt wird.

### Erkennung von Absagen

Das `cancel`-Ereignis wird ausgelöst, wenn der Benutzer seine Auswahl nicht ändert, sondern die zuvor ausgewählten Dateien erneut auswählt. Das `cancel`-Ereignis wird auch ausgelöst, wenn der Dateiauswahldialog über die "Abbrechen"-Schaltfläche oder die <kbd>Escape</kbd>-Taste geschlossen oder abgebrochen wird.

Zum Beispiel wird der folgende Code in die Konsole protokollieren, wenn der Benutzer das Popup ohne Auswahl einer Datei schließt:

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

1. Sie können den Wert eines Dateiauswahlelements nicht mit einem Skript festlegen – das Ausführen von etwas wie dem Folgenden hat keine Wirkung:

   ```js
   const input = document.querySelector("input[type=file]");
   input.value = "foo";
   ```

2. Wenn eine Datei mit einem `<input type="file">` ausgewählt wird, wird der echte Pfad zur Quelldatei aus offensichtlichen Sicherheitsgründen nicht im `value`-Attribut des Eingabeelements angezeigt. Stattdessen wird der Dateiname angezeigt, mit dem Präfix `C:\fakepath\`. Es gibt einige historische Gründe für diesen Umstand, aber es wird in allen modernen Browsern unterstützt und ist tatsächlich [in der Spezifikation definiert](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly).

## Beispiele

In diesem Beispiel präsentieren wir einen etwas fortgeschritteneren Dateiauswahldialog, der die Dateiinformationen nutzt, die in der `HTMLInputElement.files`-Eigenschaft verfügbar sind, und zeigen dabei ein paar clevere Tricks.

> [!NOTE]
> Der vollständige Quellcode dieses Beispiels ist auf GitHub verfügbar — [file-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-example.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/file-examples/file-example.html)). Wir werden das CSS nicht erklären; der Schwerpunkt liegt auf dem JavaScript.

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
  background: #cccccc;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid black;
}

form ol {
  padding-left: 0;
}

form li,
div > p {
  background: #eeeeee;
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

Dies ist ähnlich wie das, was wir zuvor gesehen haben — nichts Besonderes zu kommentieren.

Als Nächstes gehen wir den JavaScript-Code durch.

In den ersten Zeilen des Skripts erhalten wir Referenzen auf das Formulareingabeelement selbst und das {{htmlelement("div")}}-Element mit der Klasse `.preview`. Als nächstes verstecken wir das {{htmlelement("input")}}-Element — wir tun dies, weil Dateieingaben dazu neigen, hässlich zu sein, schwer zu stylen sind und ein inkonsistentes Design über Browser hinweg aufweisen. Sie können das `input`-Element aktivieren, indem Sie auf seine {{htmlelement("label")}} klicken, daher ist es besser, das `input` visuell zu verstecken und das Label wie einen Button zu gestalten, sodass der Benutzer weiß, dass er es anklicken muss, wenn er Dateien hochladen möchte.

```js
const input = document.querySelector("input");
const preview = document.querySelector(".preview");

input.style.opacity = 0;
```

> [!NOTE]
> {{cssxref("opacity")}} wird verwendet, um die Dateieingabe zu verstecken, anstatt {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}}, weil unterstützende Technologie die beiden letzteren Stile so interpretiert, dass die Dateieingabe nicht interaktiv ist.

Als nächstes fügen wir einen [Ereignislistener](/de/docs/Web/API/EventTarget/addEventListener) zur Eingabe hinzu, um auf Änderungen ihres ausgewählten Werts zu hören (in diesem Fall, wenn Dateien ausgewählt werden). Der Ereignislistener ruft unsere benutzerdefinierte `updateImageDisplay()`-Funktion auf.

```js
input.addEventListener("change", updateImageDisplay);
```

Wann immer die `updateImageDisplay()`-Funktion aufgerufen wird, führen wir folgende Schritte aus:

- Wir verwenden eine {{jsxref("Statements/while", "while")}}-Schleife, um die vorherigen Inhalte des Vorschau-`<div>` zu leeren.
- Wir greifen auf das [`FileList`](/de/docs/Web/API/FileList)-Objekt zu, das die Informationen zu allen ausgewählten Dateien enthält, und speichern es in einer Variablen namens `curFiles`.
- Wir prüfen, ob keine Dateien ausgewählt wurden, indem wir überprüfen, ob `curFiles.length` gleich 0 ist. Falls ja, drucken wir eine Nachricht in das Vorschau-`<div>`, die besagt, dass keine Dateien ausgewählt wurden.
- Wenn Dateien _ausgewählt wurden_, durchlaufen wir jede von ihnen und drucken Informationen darüber in das Vorschau-`<div>`. Zu beachtende Dinge:
- Wir verwenden die benutzerdefinierte `validFileType()`-Funktion, um zu überprüfen, ob die Datei vom richtigen Typ ist (z.B. die im `accept`-Attribut angegebenen Bildtypen).
- Falls ja, dann:
  - Drucken wir ihren Namen und ihre Dateigröße in ein Listenelement innerhalb des vorherigen `<div>` (gewonnen durch `file.name` und `file.size`). Die benutzerdefinierte `returnFileSize()`-Funktion gibt eine schön formatierte Version der Größe in Bytes/KB/MB zurück (standardmäßig meldet der Browser die Größe in absoluten Bytes).
  - Generieren wir eine Miniaturansicht der Vorschau des Bildes, indem wir [`URL.createObjectURL(file)`](/de/docs/Web/API/URL/createObjectURL_static) aufrufen. Dann fügen wir das Bild ebenfalls in das Listenelement ein, indem wir ein neues {{htmlelement("img")}} erstellen und dessen [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) auf die Miniaturansicht setzen.

- Ist der Dateityp ungültig, zeigen wir eine Nachricht innerhalb eines Listenelements, die dem Benutzer mitteilt, dass er einen anderen Dateityp auswählen muss.

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

Die benutzerdefinierte `validFileType()`-Funktion nimmt ein [`File`](/de/docs/Web/API/File)-Objekt als Parameter und verwendet {{jsxref("Array.prototype.includes()")}}, um zu überprüfen, ob ein Wert in `fileTypes` mit der `type`-Eigenschaft des Dateis übereinstimmt. Wenn eine Übereinstimmung gefunden wird, gibt die Funktion `true` zurück. Wenn keine Übereinstimmung gefunden wird, gibt sie `false` zurück.

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

Die `returnFileSize()`-Funktion nimmt eine Zahl (in Bytes, entnommen aus der `size`-Eigenschaft der aktuellen Datei) und wandelt sie in eine schön formatierte Größe in Bytes/KB/MB um.

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
> Die "KB" und "MB" Einheiten hier verwenden die [SI-Präfix](https://en.wikipedia.org/wiki/Binary_prefix)-Konvention von 1KB = 1000B, ähnlich wie macOS. Verschiedene Systeme stellen Dateigrößen unterschiedlich dar — Ubuntu verwendet zum Beispiel IEC-Präfixe, wobei 1KiB = 1024B, während RAM-Spezifikationen häufig SI-Präfixe zur Darstellung von Zweierpotenzen verwenden (1KB = 1024B). Aus diesem Grund haben wir `1e3` (`1000`) und `1e6` (`100000`) anstelle von `1024` und `1048576` verwendet. In Ihrer Anwendung sollten Sie das Einheitensystem klar an Ihre Benutzer kommunizieren, wenn die genaue Größe wichtig ist.

```js hidden
const button = document.querySelector("form button");
button.addEventListener("click", (e) => {
  e.preventDefault();
  const para = document.createElement("p");
  para.append("Image uploaded!");
  preview.replaceChildren(para);
});
```

So sieht das Beispiel aus; probieren Sie es aus:

{{EmbedLiveSample('Examples', '100%', 200)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenkette, die den Pfad zur
        ausgewählten Datei repräsentiert.
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
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">keine korrespondierende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) — enthält eine Reihe anderer nützlicher Beispiele im Zusammenhang mit `<input type="file">` und der [File API](/de/docs/Web/API/File).
