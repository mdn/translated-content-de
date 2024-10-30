---
title: <input type="file">
slug: Web/HTML/Element/input/file
l10n:
  sourceCommit: d2421d25d1676cc11b01cc4981061e4d0aa78e95
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente mit **`type="file"`** ermöglichen es dem Benutzer, eine oder mehrere Dateien aus dem Gerätespeicher auszuwählen. Sobald die Dateien ausgewählt sind, können sie entweder durch [Formularübermittlung](/de/docs/Learn/Forms) an einen Server hochgeladen oder mithilfe von JavaScript-Code und [der File API](/de/docs/Web/API/File_API/Using_files_from_web_applications) manipuliert werden.

{{EmbedInteractiveExample("pages/tabbed/input-file.html", "tabbed-shorter")}}

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut eines Datei-Eingabefelds enthält einen String, der den Pfad zu den ausgewählten Dateien repräsentiert. Wenn noch keine Datei ausgewählt ist, ist der Wert ein leerer String (`""`). Wenn der Benutzer mehrere Dateien ausgewählt hat, stellt der `value` den ersten Eintrag in der Liste der ausgewählten Dateien dar. Die anderen Dateien können über die [Eigenschaft `HTMLInputElement.files` des Eingabefelds](/de/docs/Web/API/File_API/Using_files_from_web_applications#getting_information_about_selected_files) identifiziert werden.

> [!NOTE]
> Der Wert ist [immer mit dem Namen der Datei und dem Präfix `C:\fakepath\`](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly), der nicht der tatsächliche Pfad der Datei ist. Dies soll verhindern, dass schädliche Software die Dateistruktur des Benutzers errät.

## Zusätzliche Attribute

Zusätzlich zu den gemeinsamen Attributen, die alle {{HTMLElement("input")}} Elemente teilen, unterstützen Eingabe-Typen `file` auch die folgenden Attribute.

### accept

Der Wert des [`accept`](/de/docs/Web/HTML/Attributes/accept)-Attributs ist ein String, der die Dateitypen definiert, die das Dateieingabefeld akzeptieren soll. Dieser String ist eine kommagetrennte Liste von **[eindeutigen Dateityp-Spezifizierern](#eindeutige_dateityp-spezifizierer)**. Da ein gegebener Dateityp auf verschiedene Arten identifiziert werden kann, ist es sinnvoll, eine umfassende Liste von Typ-Spezifizierern bereitzustellen, wenn Sie Dateien eines bestimmten Formats benötigen.

Zum Beispiel gibt es mehrere Möglichkeiten, Microsoft Word-Dateien zu identifizieren, sodass eine Seite, die Word-Dateien akzeptiert, ein `<input>` wie dieses verwenden könnte:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### capture

Der Wert des [`capture`](/de/docs/Web/HTML/Attributes/capture)-Attributs ist ein String, der angibt, welche Kamera für die Erfassung von Bild- oder Videodaten genutzt werden soll, wenn das [`accept`](/de/docs/Web/HTML/Attributes/accept)-Attribut angibt, dass die Eingabe von einer dieser Arten sein soll. Bei einem Wert von `user` soll die Benutzerkamera und/oder das Mikrofon verwendet werden. Ein Wert von `environment` gibt an, dass die Außenseitenkamera und/oder das Mikrofon verwendet werden sollen. Fehlt dieses Attribut, kann der {{Glossary("user_agent", "User Agent")}} frei entscheiden, was zu tun ist. Wenn der angeforderte Aufnahmemodus nicht verfügbar ist, kann der User Agent zu seinem bevorzugten Standardmodus zurückfallen.

> **Hinweis:** `capture` war vorher ein boolesches Attribut, das, falls vorhanden, anforderte, dass die Medienaufnahmegeräte des Geräts, wie Kamera oder Mikrofon, verwendet werden, anstatt eine Dateieingabe anzufordern.

### multiple

Wenn das [`multiple`](/de/docs/Web/HTML/Attributes/multiple) boolesche Attribut angegeben ist, erlaubt die Datei-Eingabe es dem Benutzer, mehr als eine Datei auszuwählen.

## Nicht standardisierte Attribute

Zusätzlich zu den oben aufgelisteten Attributen stehen in einigen Browsern auch die folgenden nicht-standardisierten Attribute zur Verfügung. Sie sollten vermeiden, sie zu verwenden, wann immer es möglich ist, da dies die Fähigkeit Ihres Codes einschränken wird, in Browsern zu funktionieren, die sie nicht implementieren.

### `webkitdirectory`

Das boolesche Attribut `webkitdirectory`, falls vorhanden, zeigt an, dass nur Verzeichnisse zur Auswahl durch den Benutzer in der Dateiauswahl-Oberfläche verfügbar sein sollten. Weitere Details und Beispiele finden Sie unter [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

Obwohl ursprünglich nur für WebKit-basierte Browser umgesetzt, ist `webkitdirectory` auch in Firefox verwendbar. Allerdings, auch wenn es relativ breit unterstützt wird, ist es immer noch nicht standardisiert und sollte nicht verwendet werden, es sei denn, es gibt keine Alternative.

## Eindeutige Dateityp-Spezifizierer

Ein **eindeutiger Dateityp-Spezifizierer** ist ein String, der einen Dateityp beschreibt, der von einem {{HTMLElement("input")}} Element vom Typ `file` ausgewählt werden kann. Jeder eindeutige Dateityp-Spezifizierer kann eine der folgenden Formen annehmen:

- Eine gültige, nicht groß-/kleinbuchstabenabhängige Dateinamenserweiterung, die mit einem Punkt (".")-Zeichen beginnt. Zum Beispiel: `.jpg`, `.pdf` oder `.doc`.
- Ein gültiger MIME-Typ-String, ohne Erweiterungen.
- Der String `audio/*`, was "jede Audiodatei" bedeutet.
- Der String `video/*`, was "jede Videodatei" bedeutet.
- Der String `image/*`, was "jede Bilddatei" bedeutet.

Das `accept` Attribut nimmt als Wert einen String an, der einen oder mehrere dieser eindeutigen Dateityp-Spezifizierer enthält, getrennt durch Kommata. Zum Beispiel, könnte ein Dateiauswahlelement, das Inhalte benötigt, die als Bild dargestellt werden können, einschließlich sowohl standardmäßiger Bildformate als auch PDF-Dateien, so aussehen:

```html
<input type="file" accept="image/*,.pdf" />
```

## Verwendung von Datei-Eingaben

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

Das führt zu folgendem Ergebnis:

{{EmbedLiveSample('A_basic_example', 650, 90)}}

> [!NOTE]
> Sie können dieses Beispiel auch auf GitHub finden — siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html), und auch [sehen Sie es live](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Unabhängig vom Gerät oder Betriebssystem des Benutzers stellt die Datei-Eingabe eine Schaltfläche bereit, die einen Dateiauswahldialog öffnet, der es dem Benutzer erlaubt, eine Datei auszuwählen.

Das Einbinden des [`multiple`](#multiple) Attributs, wie oben gezeigt, gibt an, dass mehrere Dateien auf einmal ausgewählt werden können. Der Benutzer kann mehrere Dateien aus dem Dateiauswahldialog auf jede Art auswählen, die seine gewählte Plattform zulässt (z.B. durch Drücken von <kbd>Shift</kbd> oder <kbd>Control</kbd> und anschließendes Klicken). Wenn Sie nur möchten, dass der Benutzer eine einzelne Datei pro `<input>` auswählt, weglassen Sie das `multiple` Attribut.

### Informationen über ausgewählte Dateien erhalten

Die ausgewählten Dateien werden von der `HTMLInputElement.files` Eigenschaft des Elementes zurückgegeben, welche ein [`FileList`](/de/docs/Web/API/FileList) Objekt ist, das eine Liste von [`File`](/de/docs/Web/API/File) Objekten enthält. Die `FileList` verhält sich wie ein Array, sodass Sie ihre `length` Eigenschaft überprüfen können, um die Anzahl der ausgewählten Dateien zu erfahren.

Jedes `File`-Objekt enthält die folgende Information:

- `name`
  - : Der Name der Datei.
- `lastModified`
  - : Eine Zahl, die das Datum und die Uhrzeit angibt, zu der die Datei zuletzt geändert wurde, in Millisekunden seit dem UNIX-Epoch (1. Januar 1970, um Mitternacht).
- `lastModifiedDate` {{deprecated_inline}}
  - : Ein {{jsxref("Date")}} Objekt, das das Datum und die Uhrzeit angibt, zu der die Datei zuletzt geändert wurde. _Dies ist veraltet und sollte nicht verwendet werden. Verwenden Sie stattdessen `lastModified`._
- `size`
  - : Die Größe der Datei in Bytes.
- `type`
  - : Der [MIME-Typ](/de/docs/Web/HTTP/MIME_types) der Datei.
- `webkitRelativePath` {{non-standard_inline}}
  - : Ein String, der den Pfad der Datei relativ zu dem im Verzeichnisauswahldialog ausgewählten Basisverzeichnis angibt (das heißt, ein `file` Picker, in dem das [`webkitdirectory`](#webkitdirectory) Attribut gesetzt ist). _Dies ist nicht standardisiert und sollte mit Vorsicht verwendet werden._

### Akzeptierte Dateitypen einschränken

Oftmals möchten Sie nicht, dass der Benutzer irgendeinen beliebigen Dateityp auswählen kann; stattdessen möchten Sie häufig, dass er nur Dateien eines bestimmten Typs oder bestimmter Typen auswählt. Wenn beispielsweise Ihre Datei-Eingabe es Benutzern ermöglicht, ein Profilbild hochzuladen, möchten Sie wahrscheinlich, dass sie webkompatible Bildformate wählen, wie {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}}.

Erlaubte Dateitypen können mit dem [`accept`](#accept) Attribut festgelegt werden, das eine kommagetrennte Liste von zulässigen Dateiendungen oder MIME-Typen entgegennimmt. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*` MIME-Typ. (Viele Mobilgeräte erlauben dem Benutzer auch, ein Bild mit der Kamera aufzunehmen, wenn dies verwendet wird.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — Akzeptiert alles, was nach einem MS Word-Dokument aussieht.

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

Dies führt zu einem ähnlich aussehenden Ergebnis wie das vorherige Beispiel:

{{EmbedLiveSample('Limiting_accepted_file_types', 650, 90)}}

> [!NOTE]
> Sie können dieses Beispiel auch auf GitHub finden — siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-with-accept.html), und auch [sehen Sie es live](https://mdn.github.io/learning-area/html/forms/file-examples/file-with-accept.html).

Es sieht vielleicht ähnlich aus, aber wenn Sie versuchen, eine Datei mit dieser Eingabe auszuwählen, werden Sie sehen, dass die Dateiauswahl nur die Dateitypen auswählen lässt, die im `accept` Wert angegeben sind (die genaue Oberfläche unterscheidet sich je nach Browser und Betriebssystem).

Das `accept` Attribut validiert nicht die Typen der ausgewählten Dateien; es bietet Hinweise für Browser, um Benutzer bei der Auswahl der richtigen Dateitypen zu unterstützen. In den meisten Fällen ist es Benutzern immer noch möglich, eine Option im Dateiauswahldialog zu aktivieren, die es ermöglicht, dies zu überschreiben und jede gewünschte Datei auszuwählen, und dann falsche Dateitypen auszuwählen.

Aus diesem Grund sollten Sie sicherstellen, dass das `accept` Attribut von einer geeigneten serverseitigen Validierung unterstützt wird.

### Feststellen von Abbrüchen

Das `cancel` Ereignis wird ausgelöst, wenn der Benutzer seine Auswahl nicht ändert und die zuvor ausgewählten Dateien erneut auswählt. Das `cancel` Ereignis wird auch ausgelöst, wenn der Dateiauswahldialog über die Schaltfläche "Abbrechen" oder die <kbd>Escape</kbd> Taste geschlossen oder abgebrochen wird.

Zum Beispiel wird der folgende Code protokollieren, wenn der Benutzer das Popup schließt, ohne eine Datei auszuwählen:

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

1. Sie können den Wert eines Dateiauswahlfelds nicht über ein Skript setzen — etwas wie das Folgende hat keine Wirkung:

   ```js
   const input = document.querySelector("input[type=file]");
   input.value = "foo";
   ```

2. Wenn eine Datei über ein `<input type="file">` ausgewählt wird, wird der tatsächliche Pfad zur Quelldatei aus offensichtlichen Sicherheitsgründen nicht im `value` Attribut des Eingabefelds angezeigt. Stattdessen wird der Dateiname angezeigt, mit `C:\fakepath\` davor. Es gibt einige historische Gründe für diese Eigenheit, aber es wird von allen modernen Browsern unterstützt und ist tatsächlich [in der Spezifikation definiert](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly).

## Beispiele

In diesem Beispiel präsentieren wir einen etwas fortgeschritteneren Dateiauswähler, der die Dateiinformationen verwendet, die in der `HTMLInputElement.files` Eigenschaft verfügbar sind, sowie einige clevere Tricks.

> [!NOTE]
> Sie können den vollständigen Quellcode für dieses Beispiel auf GitHub sehen — [file-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-example.html) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/file-examples/file-example.html)). Wir werden das CSS nicht erklären; der Fokus liegt auf dem JavaScript.

Betrachten wir zuerst das HTML:

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

Dies ist ähnlich dem, was wir zuvor gesehen haben — nichts Besonderes, das erwähnt werden müsste.

Gehen wir als Nächstes den JavaScript-Code durch.

In den ersten Zeilen des Skripts erhalten wir Referenzen zur Formulareingabe selbst und zum {{htmlelement("div")}} Element mit der Klasse `.preview`. Als Nächstes verstecken wir das {{htmlelement("input")}} Element — wir tun dies, weil Datei-Eingaben dazu neigen, unschön, schwer zu stylen und inkonsistent im Design zwischen Browsern zu sein. Sie können das `input` Element aktivieren, indem Sie auf sein {{htmlelement("label")}} klicken, daher ist es besser, das `input` visuell zu verbergen und das Label wie eine Schaltfläche zu stylen, damit der Benutzer weiß, dass er damit interagieren soll, wenn er Dateien hochladen möchte.

```js
const input = document.querySelector("input");
const preview = document.querySelector(".preview");

input.style.opacity = 0;
```

> **Hinweis:** {{cssxref("opacity")}} wird verwendet, um die Datei-Eingabe zu verstecken, anstelle von {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}}, da assistive Technologie die letzteren beiden Stile interpretiert, als sei die Datei-Eingabe nicht interaktiv.

Als Nächstes fügen wir einen [Ereignis-Listener](/de/docs/Web/API/EventTarget/addEventListener) hinzu, um auf Änderungen an der ausgewählten Eingabe zu achten (in diesem Fall, wenn Dateien ausgewählt werden). Der Ereignis-Listener ruft unsere benutzerdefinierte `updateImageDisplay()` Funktion auf.

```js
input.addEventListener("change", updateImageDisplay);
```

Immer wenn die `updateImageDisplay()` Funktion aufgerufen wird, führen wir Folgendes aus:

- Verwenden Sie eine {{jsxref("Statements/while", "while")}} Schleife, um die vorherigen Inhalte des Vorschau-`<div>` zu leeren.
- Greifen Sie auf das [`FileList`](/de/docs/Web/API/FileList) Objekt zu, das die Informationen über alle ausgewählten Dateien enthält, und speichern Sie es in einer Variablen namens `curFiles`.
- Überprüfen Sie, ob keine Dateien ausgewählt wurden, indem Sie prüfen, ob `curFiles.length` gleich 0 ist. Wenn ja, drucken Sie eine Nachricht in das Vorschau-`<div>`, dass keine Dateien ausgewählt wurden.
- Wenn Dateien _ausgewählt wurden_, durchlaufen wir jede einzelne und drucken Informationen darüber in das Vorschau-`<div>`. Beachten Sie Folgendes:
- Wir verwenden die benutzerdefinierte `validFileType()` Funktion, um zu überprüfen, ob die Datei vom richtigen Typ ist (z.B. die Bildtypen, die im `accept` Attribut angegeben sind).
- Falls ja:

  - Drucken wir ihren Namen und die Dateigröße in ein Listenelement innerhalb des vorherigen `<div>` (erhalten über `file.name` und `file.size`). Die benutzerdefinierte `returnFileSize()` Funktion gibt eine schön formatierte Version der Größe in Bytes/KB/MB zurück (standardmäßig meldet der Browser die Größe in absoluten Bytes).
  - Generieren Sie eine Vorschauminiatur des Bildes, indem Sie [`URL.createObjectURL(file)`](/de/docs/Web/API/URL/createObjectURL_static) aufrufen. Fügen Sie dann das Bild ebenfalls in das Listenelement ein, indem Sie ein neues {{htmlelement("img")}} erstellen und dessen [`src`](/de/docs/Web/HTML/Element/img#src) auf die Miniaturansicht setzen.

- Wenn der Dateityp ungültig ist, wird eine Nachricht innerhalb eines Listenelements angezeigt, dass der Benutzer einen anderen Dateityp auswählen muss.

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

Die benutzerdefinierte `validFileType()` Funktion nimmt ein [`File`](/de/docs/Web/API/File) Objekt als Parameter und verwendet {{jsxref("Array.prototype.includes()")}} um zu prüfen, ob ein Wert in den `fileTypes` mit der `type`-Eigenschaft der Datei übereinstimmt. Wenn eine Übereinstimmung gefunden wird, gibt die Funktion `true` zurück. Wenn keine Übereinstimmung gefunden wird, gibt sie `false` zurück.

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

Die `returnFileSize()` Funktion nimmt eine Zahl (in Bytes, entnommen aus der aktuellen `size` Eigenschaft der Datei) und wandelt sie in eine schön formatierte Größe in Bytes/KB/MB um.

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
> Die Einheiten "KB" und "MB" verwenden hier die [SI-Präfix](https://en.wikipedia.org/wiki/Binary_prefix) Konvention von 1KB = 1000B, ähnlich wie bei macOS. Unterschiedliche Systeme stellen Dateigrößen unterschiedlich dar—zum Beispiel verwendet Ubuntu IEC-Präfixe, bei denen 1KiB = 1024B, während RAM-Spezifikationen oft SI-Präfixe verwenden, um Zweierpotenzen darzustellen (1KB = 1024B). Aus diesem Grund haben wir `1e3` (`1000`) und `1e6` (`100000`) statt `1024` und `1048576` verwendet. In Ihrer Anwendung sollten Sie das Einheitensystem klar kommunizieren, wenn die genaue Größe wichtig ist.

```js hidden
const button = document.querySelector("form button");
button.addEventListener("click", (e) => {
  e.preventDefault();
  const para = document.createElement("p");
  para.append("Image uploaded!");
  preview.replaceChildren(para);
});
```

Das Beispiel sieht so aus; haben Sie Spaß beim Ausprobieren:

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

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) — enthält eine Reihe weiterer nützlicher Beispiele zum `<input type="file">` und zur [File API](/de/docs/Web/API/File).
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
