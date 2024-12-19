---
title: <input type="file">
slug: Web/HTML/Element/input/file
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente mit **`type="file"`** erlauben dem Benutzer, eine oder mehrere Dateien aus seinem Gerätespeicher auszuwählen. Einmal ausgewählt, können die Dateien mittels [Formularübermittlung](/de/docs/Learn_web_development/Extensions/Forms) auf einen Server hochgeladen oder mit JavaScript-Code und [der File API](/de/docs/Web/API/File_API/Using_files_from_web_applications) bearbeitet werden.

{{EmbedInteractiveExample("pages/tabbed/input-file.html", "tabbed-shorter")}}

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value) -Attribut eines Datei-Inputs enthält eine Zeichenkette, die den Pfad zur ausgewählten Datei oder den ausgewählten Dateien darstellt. Wenn noch keine Datei ausgewählt wurde, ist der Wert eine leere Zeichenkette (`""`). Wenn der Benutzer mehrere Dateien ausgewählt hat, repräsentiert `value` die erste Datei in der Liste der ausgewählten Dateien. Die anderen Dateien können mit der [`HTMLInputElement.files` Eigenschaft des Eingabefelds](/de/docs/Web/API/File_API/Using_files_from_web_applications#getting_information_about_selected_files) identifiziert werden.

> [!NOTE]
> Der Wert ist [immer der Dateiname mit `C:\fakepath\` vorangestellt](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly), was nicht der echte Pfad der Datei ist. Dies dient dazu, bösartige Software davon abzuhalten, die Dateistruktur des Benutzers zu erraten.

## Zusätzliche Attribute

Zusätzlich zu den gemeinsamen Attributen, die alle {{HTMLElement("input")}} Elemente teilen, unterstützen Eingaben vom Typ `file` auch die folgenden Attribute.

### accept

Der [`accept`](/de/docs/Web/HTML/Attributes/accept) Attributwert ist eine Zeichenkette, die die Dateitypen definiert, die der Datei-Input akzeptieren soll. Diese Zeichenkette ist eine durch Kommas getrennte Liste von **[einzigartigen Dateitypspezifikatoren](#einzigartige_dateitypspezifikatoren)**. Da ein gegebener Dateityp auf mehr als eine Weise identifiziert werden kann, ist es nützlich, eine umfassende Menge von Typenspezifikatoren anzugeben, wenn Sie Dateien eines bestimmten Formats benötigen.

Zum Beispiel gibt es mehrere Möglichkeiten, Microsoft Word-Dateien zu identifizieren, daher könnte eine Seite, die Word-Dateien akzeptiert, einen `<input>` wie diesen verwenden:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### capture

Der [`capture`](/de/docs/Web/HTML/Attributes/capture) Attributwert ist eine Zeichenkette, die angibt, welche Kamera zum Erfassen von Bild- oder Videodaten verwendet werden soll, wenn das [`accept`](/de/docs/Web/HTML/Attributes/accept) Attribut angibt, dass die Eingabe eine dieser Typen sein soll. Ein Wert von `user` gibt an, dass die benutzerorientierte Kamera und/oder das Mikrofon verwendet werden sollen. Ein Wert von `environment` gibt an, dass die nach außen gerichtete Kamera und/oder das Mikrofon verwendet werden sollen. Wenn dieses Attribut fehlt, steht es dem {{Glossary("user_agent", "User Agent")}} frei, selbst zu entscheiden, was zu tun ist. Wenn der angeforderte Ausrichtungsmodus nicht verfügbar ist, kann der User Agent auf seinen bevorzugten Standardmodus zurückgreifen.

> **Hinweis:** `capture` war zuvor ein Boolean-Attribut, das, wenn es vorhanden war, anforderte, dass das Medienerfassungsgerät des Geräts, wie z.B. Kamera oder Mikrofon, verwendet wird, anstatt eine Dateieingabe anzufordern.

### multiple

Wenn das [`multiple`](/de/docs/Web/HTML/Attributes/multiple) Boolean-Attribut angegeben ist, erlaubt die Dateieingabe dem Benutzer, mehr als eine Datei auszuwählen.

## Nicht-standardisierte Attribute

Zusätzlich zu den oben aufgeführten Attributen sind in einigen Browsern die folgenden nicht-standardisierten Attribute verfügbar. Sie sollten versuchen, ihre Verwendung zu vermeiden, da dies die Fähigkeit Ihres Codes einschränken kann, in Browsern zu funktionieren, die sie nicht implementieren.

### `webkitdirectory`

Das Boolean-Attribut `webkitdirectory`, falls vorhanden, gibt an, dass in der Dateiauswahl-Oberfläche nur Verzeichnisse zur Auswahl durch den Benutzer verfügbar sein sollen. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für zusätzliche Details und Beispiele.

Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Firefox verwendbar. Trotzdem sollte es, obwohl es relativ breit unterstützt wird, nicht verwendet werden, es sei denn, Sie haben keine Alternative.

## Einzigartige Dateitypspezifikatoren

Ein **einzigartiger Dateitypspezifikator** ist eine Zeichenkette, die einen Dateityp beschreibt, der durch den Benutzer in einem {{HTMLElement("input")}} Element vom Typ `file` ausgewählt werden kann. Jeder einzigartige Dateitypspezifikator kann eine der folgenden Formen annehmen:

- Eine gültige, nicht case-sensitive Dateinamenerweiterung, die mit einem Punkt (".") beginnt. Zum Beispiel: `.jpg`, `.pdf`, oder `.doc`.
- Eine gültige MIME-Typ-Zeichenkette, ohne Erweiterungen.
- Die Zeichenkette `audio/*`, die "jede Audiodatei" bedeutet.
- Die Zeichenkette `video/*`, die "jede Videodatei" bedeutet.
- Die Zeichenkette `image/*`, die "jede Bilddatei" bedeutet.

Das `accept` Attribut nimmt eine Zeichenkette, die einen oder mehrere dieser einzigartigen Dateitypspezifikatoren als Wert enthält, durch Kommas getrennt. Zum Beispiel könnte ein Dateiauswahlfeld, das Inhalte benötigt, die als Bild dargestellt werden können, einschließlich sowohl standardmäßiger Bildformate als auch PDF-Dateien, folgendermaßen aussehen:

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

Dies erzeugt die folgende Ausgabe:

{{EmbedLiveSample('A_basic_example', 650, 90)}}

> [!NOTE]
> Dieses Beispiel finden Sie auch auf GitHub — siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html) und auch [sehen Sie es live](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Unabhängig vom Gerät oder Betriebssystem des Benutzers bietet die Dateieingabe eine Schaltfläche, die ein Dateiauswahldialogfeld öffnet, das dem Benutzer ermöglicht, eine Datei auszuwählen.

Das Einfügen des [`multiple`](#multiple) Attributs, wie oben gezeigt, gibt an, dass mehrere Dateien gleichzeitig ausgewählt werden können. Der Benutzer kann mehrere Dateien aus der Dateiauswahl in einer Weise wählen, die seine gewählte Plattform erlaubt (z. B. durch Halten von <kbd>Shift</kbd> oder <kbd>Control</kbd> und dann Klicken). Wenn Sie nur möchten, dass der Benutzer eine einzige Datei pro `<input>` auswählt, lassen Sie das `multiple` Attribut weg.

### Informationen über ausgewählte Dateien abrufen

Die ausgewählten Dateien werden durch die `HTMLInputElement.files` Eigenschaft des Elements zurückgegeben, die ein [`FileList`](/de/docs/Web/API/FileList) Objekt ist, das eine Liste von [`File`](/de/docs/Web/API/File) Objekten enthält. Die `FileList` verhält sich wie ein Array, sodass Sie die `length`-Eigenschaft überprüfen können, um die Anzahl der ausgewählten Dateien zu erhalten.

Jedes `File` Objekt enthält die folgenden Informationen:

- `name`
  - : Der Name der Datei.
- `lastModified`
  - : Eine Zahl, die angibt, wann die Datei zuletzt geändert wurde, in Millisekunden seit der UNIX-Epoche (1. Januar 1970, um Mitternacht).
- `lastModifiedDate` {{deprecated_inline}}
  - : Ein {{jsxref("Date")}} Objekt, das das Datum und die Uhrzeit, zu der die Datei zuletzt geändert wurde, darstellt. _Dies ist veraltet und sollte nicht verwendet werden. Verwenden Sie stattdessen `lastModified`._
- `size`
  - : Die Größe der Datei in Bytes.
- `type`
  - : Der [MIME-Typ](/de/docs/Web/HTTP/MIME_types) der Datei.
- `webkitRelativePath` {{non-standard_inline}}
  - : Eine Zeichenkette, die den Pfad der Datei relativ zum Basisverzeichnis angibt, das in einem Verzeichnisauswähler ausgewählt wurde (d.h. einem `file`-Picker, in dem das [`webkitdirectory`](#webkitdirectory) Attribut gesetzt ist). _Dies ist nicht standardisiert und sollte mit Vorsicht verwendet werden._

### Akzeptierte Dateitypen einschränken

Oftmals möchten Sie nicht, dass der Benutzer irgendeinen beliebigen Dateityp auswählen kann; stattdessen möchten Sie häufig, dass er Dateien eines bestimmten Typs oder bestimmter Typen auswählt. Zum Beispiel, wenn Ihre Dateieingabe es Benutzern ermöglicht, ein Profilbild hochzuladen, möchten Sie wahrscheinlich, dass sie webkompatible Bildformate wie {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}} auswählen.

Akzeptable Dateitypen können mit dem [`accept`](#accept) Attribut angegeben werden, das eine durch Kommas getrennte Liste von erlaubten Dateiendungen oder MIME-Typen aufnimmt. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG- oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*` MIME-Typ. (Viele mobile Geräte erlauben auch, ein Bild mit der Kamera aufzunehmen, wenn dies verwendet wird.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — Akzeptiert alles, was wie ein MS Word-Dokument riecht.

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

Dies erzeugt eine ähnliche Ausgabe wie das vorherige Beispiel:

{{EmbedLiveSample('Limiting_accepted_file_types', 650, 90)}}

> [!NOTE]
> Dieses Beispiel finden Sie auch auf GitHub — siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-with-accept.html) und auch [sehen Sie es live](https://mdn.github.io/learning-area/html/forms/file-examples/file-with-accept.html).

Es mag ähnlich aussehen, aber wenn Sie versuchen, mit dieser Eingabe eine Datei auszuwählen, werden Sie feststellen, dass der Dateiauswähler nur die in `accept` angegebenen Dateitypen auswählen lässt (die genaue Benutzeroberfläche unterscheidet sich je nach Browser und Betriebssystem).

Das `accept` Attribut validiert die Typen der ausgewählten Dateien nicht; es gibt Browsern Hinweise, Benutzer zur Auswahl der korrekten Dateitypen zu führen. Es ist immer noch möglich (in den meisten Fällen), dass Benutzer eine Option im Dateiauswähler umschalten können, die es ermöglicht, dies zu überschreiben und jede beliebige Datei auszuwählen, und dann falsche Dateitypen auszuwählen.

Daher sollten Sie sicherstellen, dass das `accept` Attribut durch geeignete serverseitige Validierung unterstützt wird.

### Erkennung von Absagen

Das `cancel` Ereignis wird ausgelöst, wenn der Benutzer seine Auswahl nicht ändert und die zuvor ausgewählten Dateien erneut auswählt. Das `cancel` Ereignis wird auch ausgelöst, wenn das Dateiauswahldialogfeld über die Schaltfläche "Abbrechen" oder die <kbd>Escape</kbd>-Taste geschlossen oder abgebrochen wird.

Zum Beispiel wird der folgende Code in der Konsole loggen, wenn der Benutzer das Popup schließt, ohne eine Datei auszuwählen:

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

1. Sie können den Wert eines Datei-Auswahlfeldes nicht von einem Skript aus festlegen — etwas wie das Folgende hat keine Wirkung:

   ```js
   const input = document.querySelector("input[type=file]");
   input.value = "foo";
   ```

2. Wenn eine Datei mit einem `<input type="file">` ausgewählt wird, wird der reale Pfad zur Quelldatei aus offensichtlichen Sicherheitsgründen nicht im `value` Attribut des Inputs angezeigt. Stattdessen wird der Dateiname angezeigt, wobei `C:\fakepath\` vorangestellt wird. Es gibt einige historische Gründe für dieses Eigenart, aber es wird in allen modernen Browsern unterstützt und ist in der Tat [in der Spezifikation definiert](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly).

## Beispiele

In diesem Beispiel stellen wir einen etwas fortgeschritteneren Dateiauswähler vor, der die Dateiinformationen nutzt, die in der `HTMLInputElement.files` Eigenschaft verfügbar sind, sowie einige clevere Tricks zeigt.

> [!NOTE]
> Sie können den vollständigen Quellcode für dieses Beispiel auf GitHub sehen — [file-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-example.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/file-examples/file-example.html)). Wir werden das CSS nicht erklären; der Fokus liegt auf dem JavaScript.

Zuerst werfen wir einen Blick auf das HTML:

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

Dies ist ähnlich wie das, was wir zuvor gesehen haben — nichts Besonderes zu kommentieren.

Als nächstes gehen wir den JavaScript-Code durch.

In den ersten Zeilen des Skripts erhalten wir Verweise auf die Formulareingabe selbst und das {{htmlelement("div")}} Element mit der Klasse `.preview`. Danach verbergen wir das {{htmlelement("input")}} Element — wir tun dies, weil Dateieingaben tendenziell hässlich, schwer zu stylen und in ihrem Design über verschiedene Browser hinweg inkonsistent sind. Sie können das `input` Element aktivieren, indem Sie auf dessen {{htmlelement("label")}} klicken, also ist es besser, das `input` visuell zu verbergen und das Label wie eine Schaltfläche zu stylen, damit der Benutzer weiß, dass er darauf klicken muss, wenn er Dateien hochladen möchte.

```js
const input = document.querySelector("input");
const preview = document.querySelector(".preview");

input.style.opacity = 0;
```

> **Hinweis:** {{cssxref("opacity")}} wird verwendet, um die Dateieingabe zu verbergen, anstatt {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}}, weil Unterstützungstechnologie die letzteren zwei Stile interpretiert, als ob die Dateieingabe nicht interaktiv wäre.

Als nächstes fügen wir einen [Ereignislistener](/de/docs/Web/API/EventTarget/addEventListener) zum Input hinzu, um auf Änderungen seines ausgewählten Wertes (in diesem Fall, wenn Dateien ausgewählt werden) zu achten. Der Ereignislistener ruft unsere benutzerdefinierte `updateImageDisplay()` Funktion auf.

```js
input.addEventListener("change", updateImageDisplay);
```

Wann immer die `updateImageDisplay()` Funktion aufgerufen wird, führen wir folgendes durch:

- Verwenden einer {{jsxref("Statements/while", "while")}} Schleife, um die vorherigen Inhalte des `<div>`-Elements zu leeren.
- Die [`FileList`](/de/docs/Web/API/FileList) Objekt, das die Informationen zu allen ausgewählten Dateien enthält, erfassen und in einer Variablen namens `curFiles` speichern.
- Prüfen, ob keine Dateien ausgewählt wurden, indem überprüft wird, ob `curFiles.length` gleich 0 ist. Wenn ja, wird eine Nachricht in das `<div>`-Element ausgegeben, die besagt, dass keine Dateien ausgewählt wurden.
- Wenn Dateien ausgewählt wurden, durchlaufen wir jede, und geben Informationen darüber in das `<div>`-Element aus. Hier einige bemerkenswerte Punkte:
  - Wir verwenden die benutzerdefinierte `validFileType()` Funktion, um zu überprüfen, ob die Datei den korrekten Typ hat (z.B. die in dem `accept` Attribut angegebenen Bildtypen).
  - Wenn ja, geben wir ihren Namen und ihre Dateigröße in einem Listenelement im `<div>`-Element aus (erhalten von `file.name` und `file.size`). Die benutzerdefinierte `returnFileSize()` Funktion gibt eine schön formatierte Version der Größe in Bytes/KB/MB zurück (standardmäßig gibt der Browser die Größe in absoluten Bytes an).
  - Eine Vorschau des Bildes wird erstellt, indem [`URL.createObjectURL(file)`](/de/docs/Web/API/URL/createObjectURL_static) aufgerufen wird. Dann wird das Bild ebenfalls in das Listenelement eingefügt, indem ein neues {{htmlelement("img")}} erstellt und dessen [`src`](/de/docs/Web/HTML/Element/img#src) auf das Thumbnail gesetzt wird.

- Wenn der Dateityp ungültig ist, geben wir eine Nachricht in einem Listenelement aus, die dem Benutzer mitteilt, dass er einen anderen Dateityp auswählen muss.

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

Die benutzerdefinierte `validFileType()` Funktion nimmt ein [`File`](/de/docs/Web/API/File) Objekt als Parameter an und verwendet {{jsxref("Array.prototype.includes()")}}, um zu überprüfen, ob irgendein Wert in `fileTypes` mit der `type` Eigenschaft der Datei übereinstimmt. Wenn eine Übereinstimmung gefunden wird, gibt die Funktion `true` zurück. Wenn keine Übereinstimmung gefunden wird, gibt sie `false` zurück.

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

Die `returnFileSize()` Funktion nimmt eine Zahl (in Bytes, entnommen aus der aktuellen `size` Eigenschaft der Datei) und formatiert sie in eine schön formatierte Größe in Bytes/KB/MB um.

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
> Die "KB" und "MB" Einheiten hier verwenden die [SI-Präfix](https://en.wikipedia.org/wiki/Binary_prefix) Konvention von 1KB = 1000B, ähnlich wie in macOS. Unterschiedliche Systeme repräsentieren Dateigrößen unterschiedlich — z.B. Ubuntu verwendet IEC-Präfixe, wo 1KiB = 1024B, während RAM-Spezifikationen oft SI-Präfixe verwenden, um Zweierpotenzen darzustellen (1KB = 1024B). Aus diesem Grund haben wir `1e3` (`1000`) und `1e6` (`100000`) anstelle von `1024` und `1048576` verwendet. In Ihrer Anwendung sollten Sie das Einheitssystem klar an Ihre Benutzer kommunizieren, wenn die genaue Größe wichtig ist.

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
        Eine Zeichenkette, die den Pfad zur ausgewählten
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
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
      <td><a href="/de/docs/Web/HTML/Element/input#required"><code>required</code></a></td>
    </tr>
    <tr>
      <td><strong>Zusätzliche Attribute</strong?></td>
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
