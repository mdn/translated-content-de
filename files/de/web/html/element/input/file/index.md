---
title: <input type="file">
slug: Web/HTML/Element/input/file
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente mit **`type="file"`** erlauben es dem Benutzer, eine oder mehrere Dateien aus dem Gerätespeicher auszuwählen. Einmal ausgewählt, können die Dateien an einen Server hochgeladen werden, zum Beispiel durch [Formularübermittlung](/de/docs/Learn_web_development/Extensions/Forms), oder sie können mithilfe von JavaScript-Code und [der File API](/de/docs/Web/API/File_API/Using_files_from_web_applications) bearbeitet werden.

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

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut eines Datei-Eingabefeldes enthält eine Zeichenkette, die den Pfad zu der/den ausgewählten Datei(en) repräsentiert. Wenn noch keine Datei ausgewählt ist, ist der Wert eine leere Zeichenkette (`""`). Wenn der Benutzer mehrere Dateien ausgewählt hat, repräsentiert der `value` die erste Datei in der Liste der ausgewählten Dateien. Die anderen Dateien können mit der [`HTMLInputElement.files`-Eigenschaft des Eingabefeldes](/de/docs/Web/API/File_API/Using_files_from_web_applications#getting_information_about_selected_files) identifiziert werden.

> [!NOTE]
> Der Wert ist [immer der Dateiname, vorangestellt mit `C:\fakepath\`](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly), was nicht der reale Pfad der Datei ist. Dies dient dazu, bösartiger Software das Erraten der Dateistruktur des Benutzers zu verhindern.

## Zusätzliche Attribute

Zusätzlich zu den allgemeinen Attributen, die alle {{HTMLElement("input")}}-Elemente gemeinsam haben, unterstützen Eingaben des Typs `file` auch die folgenden Attribute.

### accept

Der Wert des [`accept`](/de/docs/Web/HTML/Attributes/accept)-Attributs ist eine Zeichenkette, die die Dateitypen definiert, die das Datei-Eingabefeld akzeptieren soll. Diese Zeichenkette ist eine durch Komma getrennte Liste von **[eindeutigen Dateitypspezifizierern](#eindeutige_dateitypspezifizierer)**. Da ein bestimmter Dateityp auf mehr als eine Art identifiziert werden kann, ist es nützlich, eine umfassende Menge von Typsspezifizierern bereitzustellen, wenn Sie Dateien eines bestimmten Formats benötigen.

Zum Beispiel gibt es mehrere Möglichkeiten, Microsoft-Word-Dateien zu identifizieren. Daher könnte eine Webseite, die Word-Dateien akzeptiert, ein `<input>` verwenden wie dieses:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### capture

Der Wert des [`capture`](/de/docs/Web/HTML/Attributes/capture)-Attributs ist eine Zeichenkette, die angibt, welche Kamera für die Aufnahme von Bild- oder Videodaten verwendet werden soll, falls das [`accept`](/de/docs/Web/HTML/Attributes/accept)-Attribut angibt, dass das Eingabefeld einer dieser Typen sein soll. Ein Wert von `user` gibt an, dass die benutzerseitige Kamera und/oder das Mikrofon verwendet werden sollen. Ein Wert von `environment` gibt an, dass die nach außen gerichtete Kamera und/oder das Mikrofon verwendet werden sollen. Wenn dieses Attribut fehlt, kann der {{Glossary("user_agent", "User-Agent")}} selbst entscheiden, was zu tun ist. Wenn der angeforderte Modus nicht verfügbar ist, kann der User-Agent auf seinen bevorzugten Standardmodus zurückgreifen.

> **Hinweis:** `capture` war zuvor ein Boolean-Attribut, das, wenn vorhanden, verlangte, dass das/die Medienaufnahmegerät(e) des Geräts, wie Kamera oder Mikrofon, statt der Anforderung einer Dateieingabe verwendet werden.

### multiple

Wenn das [`multiple`](/de/docs/Web/HTML/Attributes/multiple) Boolean-Attribut angegeben wird, ermöglicht das Datei-Eingabefeld dem Benutzer, mehr als eine Datei auszuwählen.

## Nicht-standardisierte Attribute

Zusätzlich zu den oben aufgeführten Attributen sind die folgenden nicht-standardisierten Attribute in einigen Browsern verfügbar. Sie sollten versuchen, sie nach Möglichkeit zu vermeiden, da dies die Fähigkeit Ihres Codes einschränkt, in Browsern zu funktionieren, die sie nicht implementieren.

### `webkitdirectory`

Das Boolean-Attribut `webkitdirectory`, wenn vorhanden, gibt an, dass nur Verzeichnisse durch den Benutzer in der Dateiauswahloberfläche ausgewählt werden können. Weitere Details und Beispiele finden Sie bei [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Firefox nutzbar. Trotz relativ breiter Unterstützung ist es jedoch immer noch nicht standardisiert und sollte nicht verwendet werden, es sei denn, es gibt keine Alternative.

## Eindeutige Dateitypspezifizierer

Ein **eindeutiger Dateitypspezifizierer** ist eine Zeichenkette, die einen Dateityp beschreibt, der vom Benutzer in einem {{HTMLElement("input")}}-Element des Typs `file` ausgewählt werden kann. Jeder eindeutige Dateitypspezifizierer kann eine der folgenden Formen annehmen:

- Eine gültige, nicht auf Groß- und Kleinschreibung achtende Dateierweiterung, beginnend mit einem Punkt ("."). Zum Beispiel: `.jpg`, `.pdf` oder `.doc`.
- Eine gültige MIME-Typ-Zeichenkette, ohne Erweiterungen.
- Die Zeichenkette `audio/*`, was "jede Audiodatei" bedeutet.
- Die Zeichenkette `video/*`, was "jede Videodatei" bedeutet.
- Die Zeichenkette `image/*`, was "jede Bilddatei" bedeutet.

Das `accept`-Attribut nimmt eine Zeichenkette als Wert, die einen oder mehrere dieser eindeutigen Dateitypspezifizierer enthält, getrennt durch Kommas. Zum Beispiel könnte ein Dateiauswahl-Dialog, der Inhalte benötigt, die als Bild präsentiert werden können, einschließlich sowohl standard Bildformate als auch PDF-Dateien, so aussehen:

```html
<input type="file" accept="image/*,.pdf" />
```

## Dateieingaben verwenden

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
> Sie können dieses Beispiel auch auf GitHub finden — siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html), und sehen Sie es sich auch [live an](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Unabhängig vom Gerät oder Betriebssystem des Benutzers stellt das Datei-Eingabefeld eine Schaltfläche bereit, die einen Dateiauswahl-Dialog öffnet, der es dem Benutzer ermöglicht, eine Datei auszuwählen.

Die Einbeziehung des [`multiple`](#multiple)-Attributs, wie oben gezeigt, legt fest, dass mehrere Dateien gleichzeitig ausgewählt werden können. Der Benutzer kann mehrere Dateien aus der Dateiauswahl auf jede ihm zur Verfügung stehende Weise auswählen (z. B. durch das Halten von <kbd>Shift</kbd> oder <kbd>Steuerung</kbd> und dann Klicken). Wenn Sie möchten, dass der Benutzer nur eine einzige Datei pro `<input>` auswählt, lassen Sie das `multiple`-Attribut weg.

### Informationen zu ausgewählten Dateien abrufen

Die ausgewählten Dateien werden von der `HTMLInputElement.files`-Eigenschaft des Elements zurückgegeben, die ein [`FileList`](/de/docs/Web/API/FileList)-Objekt enthält, das eine Liste von [`File`](/de/docs/Web/API/File)-Objekten enthält. Die `FileList` verhält sich wie ein Array, sodass Sie ihre `length`-Eigenschaft überprüfen können, um die Anzahl der ausgewählten Dateien zu erhalten.

Jedes `File`-Objekt enthält die folgenden Informationen:

- `name`
  - : Der Name der Datei.
- `lastModified`
  - : Eine Zahl, die das Datum und die Uhrzeit angibt, zu der die Datei zuletzt geändert wurde, in Millisekunden seit der UNIX-Epoche (1. Januar 1970 um Mitternacht).
- `lastModifiedDate` {{deprecated_inline}}
  - : Ein {{jsxref("Date")}}-Objekt, das das Datum und die Uhrzeit repräsentiert, zu der die Datei zuletzt geändert wurde. _Dies ist veraltet und sollte nicht mehr verwendet werden. Verwenden Sie stattdessen `lastModified`._
- `size`
  - : Die Größe der Datei in Bytes.
- `type`
  - : Der [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) der Datei.
- `webkitRelativePath` {{non-standard_inline}}
  - : Eine Zeichenkette, die den Pfad der Datei relativ zum Basisverzeichnis angibt, das in einer Verzeichnisauswahl ausgewählt wurde (d.h. einem `file`-Picker, bei dem das [`webkitdirectory`](#webkitdirectory)-Attribut gesetzt ist). _Dies ist nicht standardisiert und sollte mit Vorsicht verwendet werden._

### Akzeptierte Dateitypen einschränken

Oft möchten Sie nicht, dass der Benutzer einen beliebigen Dateityp auswählen kann; stattdessen möchten Sie oft, dass er Dateien eines bestimmten Typs oder bestimmter Typen auswählt. Zum Beispiel, wenn Ihre Dateieingabe es Benutzern ermöglicht, ein Profilbild hochzuladen, möchten Sie wahrscheinlich, dass sie webkompatible Bildformate auswählen, wie {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}}.

Erlaubte Dateitypen können mit dem [`accept`](#accept)-Attribut angegeben werden, das eine durch Komma getrennte Liste erlaubter Dateierweiterungen oder MIME-Typen übernimmt. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG- oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*`-MIME-Typ. (Viele mobile Geräte lassen den Benutzer auch ein Bild mit der Kamera aufnehmen, wenn dies verwendet wird.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — akzeptiert alles, was nach einem MS-Word-Dokument aussieht.

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

Dies erzeugt eine ähnliche Ausgabe wie das vorherige Beispiel:

{{EmbedLiveSample('Limiting_accepted_file_types', 650, 90)}}

> [!NOTE]
> Sie können dieses Beispiel auch auf GitHub finden — siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-with-accept.html), und sehen Sie es sich auch [live an](https://mdn.github.io/learning-area/html/forms/file-examples/file-with-accept.html).

Es mag ähnlich aussehen, aber wenn Sie versuchen, eine Datei mit dieser Eingabe auszuwählen, werden Sie feststellen, dass der Dateiauswahldialog nur die Dateiarten zur Auswahl zulässt, die im `accept`-Wert spezifiziert sind (die genaue Benutzeroberfläche unterscheidet sich zwischen Browsern und Betriebssystemen).

Das `accept`-Attribut validiert nicht die Typen der ausgewählten Dateien; es bietet Hinweise für Browser, um Benutzer zur Auswahl der richtigen Dateitypen zu führen. In den meisten Fällen ist es jedoch möglich, dass Benutzer eine Option im Dateiauswahlfeld umschalten, die es ermöglicht, dies zu überschreiben und jede gewünschte Datei auszuwählen und dann falsche Dateiarten auszuwählen.

Aus diesem Grund sollten Sie sicherstellen, dass das `accept`-Attribut durch entsprechende serverseitige Validierung unterstützt wird.

### Erkennungen von Abbrüchen

Das `cancel`-Ereignis wird ausgelöst, wenn der Benutzer seine Auswahl nicht ändert, indem er die zuvor ausgewählten Dateien erneut auswählt. Das `cancel`-Ereignis wird auch ausgelöst, wenn der Dateiauswahldialog über die Schaltfläche "abbrechen" oder die <kbd>escape</kbd>-Taste geschlossen oder abgebrochen wird.

Zum Beispiel protokolliert der folgende Code, wenn der Benutzer das Popup ohne Auswahl einer Datei schließt, in die Konsole:

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

1. Sie können den Wert eines Dateiauswahlfeldes nicht per Skript setzen – ein Beispiel wie das folgende hat keine Auswirkungen:

   ```js
   const input = document.querySelector("input[type=file]");
   input.value = "foo";
   ```

2. Wenn eine Datei über ein `<input type="file">` ausgewählt wird, wird der reale Pfad zur Quelldatei aus offensichtlichen Sicherheitsgründen nicht im `value`-Attribut des Eingabefeldes angezeigt. Stattdessen wird der Dateiname angezeigt, der mit `C:\fakepath\` vorangestellt ist. Es gibt einige historische Gründe für diese Eigenart, aber sie wird in allen modernen Browsern unterstützt und ist tatsächlich [in der Spezifikation definiert](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly).

## Beispiele

In diesem Beispiel präsentieren wir einen etwas fortschrittlicheren Dateiauswahl-Dialog, der die in der `HTMLInputElement.files`-Eigenschaft verfügbaren Dateiinformationen nutzt und einige clevere Tricks zeigt.

> [!NOTE]
> Sie können den vollständigen Quellcode für dieses Beispiel auf GitHub sehen — [file-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-example.html) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/file-examples/file-example.html)). Wir werden das CSS nicht erklären; der JavaScript ist der Hauptfokus.

Zunächst einmal schauen wir uns das HTML an:

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

Dies ist ähnlich wie das, was wir bereits gesehen haben — nichts Spezielles zu kommentieren.

Als nächstes gehen wir durch das JavaScript.

In den ersten Zeilen des Skripts erhalten wir Referenzen auf die Formulareingabe selbst und das {{htmlelement("div")}}-Element mit der Klasse `.preview`. Als nächstes verbergen wir das {{htmlelement("input")}}-Element – wir tun dies, weil Dateieingaben dazu neigen, hässlich zu sein, schwer zu gestalten und inkonsistent im Design über die Browser hinweg. Sie können das `input`-Element aktivieren, indem Sie auf sein {{htmlelement("label")}} klicken, deshalb ist es besser, das `input` visuell zu verbergen und das Etikett wie eine Schaltfläche zu gestalten, damit der Benutzer weiß, dass er damit interagieren soll, wenn er Dateien hochladen möchte.

```js
const input = document.querySelector("input");
const preview = document.querySelector(".preview");

input.style.opacity = 0;
```

> **Hinweis:** {{cssxref("opacity")}} wird verwendet, um das Dateieingabefeld zu verbergen, anstelle von {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}}, weil unterstützende Technologien die beiden letzteren Stile so interpretieren, dass sie bedeuten, dass die Dateieingabe nicht interaktiv ist.

Als nächstes fügen wir einen [Ereignis-Listener](/de/docs/Web/API/EventTarget/addEventListener) zur Eingabe hinzu, um Änderungen an ihrem ausgewählten Wert (in diesem Fall, wenn Dateien ausgewählt werden) zu überwachen. Der Ereignis-Listener ruft unsere benutzerdefinierte `updateImageDisplay()`-Funktion auf.

```js
input.addEventListener("change", updateImageDisplay);
```

Wann immer die `updateImageDisplay()`-Funktion aufgerufen wird, führen wir folgende Schritte aus:

- Wir verwenden eine {{jsxref("Statements/while", "while")}}-Schleife, um den vorherigen Inhalt des Vorschau-`<div>` zu leeren.
- Wir holen das [`FileList`](/de/docs/Web/API/FileList)-Objekt, das die Informationen zu allen ausgewählten Dateien enthält, und speichern es in einer Variablen namens `curFiles`.
- Wir prüfen, ob keine Dateien ausgewählt wurden, indem wir überprüfen, ob `curFiles.length` gleich 0 ist. Wenn ja, drucken wir eine Nachricht in das Vorschau-`<div>`, dass keine Dateien ausgewählt wurden.
- Wenn Dateien ausgewählt wurden, durchlaufen wir jede von ihnen und drucken Informationen darüber in das Vorschau-`<div>`. Bemerkenswerte Punkte hier:
- Wir verwenden die benutzerdefinierte `validFileType()`-Funktion, um zu überprüfen, ob die Datei vom richtigen Typ ist (z. B. die im `accept`-Attribut angegebenen Bildtypen).
- Wenn dem so ist, tun wir folgendes:

  - Wir drucken ihren Namen und ihre Dateigröße in ein Listenelement innerhalb des Vorschau-`<div>` aus (erhalten aus `file.name` und `file.size`). Die benutzerdefinierte `returnFileSize()`-Funktion gibt eine schön formatierte Version der Größe in Bytes/KB/MB zurück (standardmäßig gibt der Browser die Größe in absoluten Bytes an).
  - Wir erzeugen eine Vorschauminiatur des Bildes, indem wir [`URL.createObjectURL(file)`](/de/docs/Web/API/URL/createObjectURL_static) aufrufen. Dann fügen wir das Bild auch in das Listenelement ein, indem wir ein neues {{htmlelement("img")}} erstellen und dessen [`src`](/de/docs/Web/HTML/Element/img#src) auf die Miniaturansicht setzen.

- Wenn der Dateityp ungültig ist, zeigen wir eine Nachricht in einem Listenelement an, die dem Benutzer mitteilt, dass er einen anderen Dateityp auswählen muss.

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

Die benutzerdefinierte `validFileType()`-Funktion nimmt ein [`File`](/de/docs/Web/API/File)-Objekt als Parameter und verwendet {{jsxref("Array.prototype.includes()")}}, um zu überprüfen, ob ein Wert in den `fileTypes` mit der `type`-Eigenschaft der Datei übereinstimmt. Wenn eine Übereinstimmung gefunden wird, gibt die Funktion `true` zurück. Wenn keine Übereinstimmung gefunden wird, gibt sie `false` zurück.

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

Die `returnFileSize()`-Funktion nimmt eine Zahl (in Bytes, aus der aktuellen `size`-Eigenschaft der Datei) und verwandelt sie in eine schön formatierte Größe in Bytes/KB/MB.

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
> Die Einheiten "KB" und "MB" verwenden hier die [SI-Präfix](https://en.wikipedia.org/wiki/Binary_prefix)-Konvention von 1KB = 1000B, ähnlich wie macOS. Unterschiedliche Systeme stellen Dateigrößen unterschiedlich dar—zum Beispiel verwendet Ubuntu IEC-Präfixe, bei denen 1KiB = 1024B, während RAM-Spezifikationen oft SI-Präfixe verwenden, um Potenzen von Zwei darzustellen (1KB = 1024B). Aus diesem Grund verwendeten wir `1e3` (`1000`) und `1e6` (`100000`) anstelle von `1024` und `1048576`. In Ihrer Anwendung sollten Sie das Einheitensystem klar kommunizieren, wenn die genaue Größe wichtig ist.

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
        Eine Zeichenkette, die den Pfad zur ausgewählten Datei beschreibt.
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
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien aus Web-Anwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) — enthält eine Reihe anderer nützlicher Beispiele im Zusammenhang mit `<input type="file">` und der [File API](/de/docs/Web/API/File).
