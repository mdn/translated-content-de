---
title: <input type="file">
slug: Web/HTML/Reference/Elements/input/file
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente mit **`type="file"`** ermöglichen es dem Benutzer, eine oder mehrere Dateien aus dem Gerätespeicher auszuwählen. Sobald die Dateien ausgewählt sind, können sie mit [Formularübermittlung](/de/docs/Learn_web_development/Extensions/Forms) an einen Server hochgeladen oder mithilfe von JavaScript-Code und der [File API](/de/docs/Web/API/File_API/Using_files_from_web_applications) verarbeitet werden.

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

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut eines Datei-Inputs enthält einen String, der den Pfad zu den ausgewählten Datei(en) darstellt. Wenn noch keine Datei ausgewählt ist, ist der Wert ein leerer String (`""`). Wenn der Benutzer mehrere Dateien ausgewählt hat, repräsentiert der `value` die erste Datei in der Liste der ausgewählten Dateien. Die anderen Dateien können mithilfe der [Eigenschaft `HTMLInputElement.files` des Input-Elements](/de/docs/Web/API/File_API/Using_files_from_web_applications#getting_information_about_selected_files) identifiziert werden.

> [!NOTE]
> Der Wert ist [immer der Dateiname mit `C:\fakepath\` vorangestellt](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly), was nicht der tatsächliche Pfad der Datei ist. Dies verhindert, dass bösartige Software die Dateistruktur des Benutzers errät.

## Zusätzliche Attribute

Zusätzlich zu den allgemeinen Attributen, die von allen {{HTMLElement("input")}}-Elementen geteilt werden, unterstützen Eingaben vom Typ `file` auch die folgenden Attribute.

### accept

Der Wert des [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)-Attributs ist ein String, der die Dateitypen definiert, die der Dateieingang akzeptieren sollte. Dieser String ist eine durch Komma getrennte Liste von **[einzigartigen Dateityp-Spezifizierungen](#einzigartige_dateityp-spezifizierungen)**. Da ein gegebener Dateityp auf mehr als eine Weise identifiziert werden kann, ist es sinnvoll, eine umfassende Gruppe von Typspezifizierungen bereitzustellen, wenn Sie Dateien in einem bestimmten Format benötigen.

Zum Beispiel gibt es mehrere Möglichkeiten, Microsoft Word-Dateien zu identifizieren, sodass eine Website, die Word-Dateien akzeptiert, ein `<input>` wie dieses verwenden könnte:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### capture

Der Wert des [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)-Attributs ist ein String, der festlegt, welche Kamera für die Erfassung von Bild- oder Videodaten verwendet werden soll, wenn das [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)-Attribut angibt, dass die Eingabe einer dieser Typen sein sollte. Ein Wert von `user` bedeutet, dass die benutzerseitige Kamera und/oder das Mikrofon verwendet werden sollten. Ein Wert von `environment` gibt an, dass die außen gerichtete Kamera und/oder das Mikrofon verwendet werden sollten. Wenn dieses Attribut fehlt, steht es dem {{Glossary("user_agent", "User Agent")}} frei, selbst zu entscheiden, was zu tun ist. Wenn der angeforderte Modus nicht verfügbar ist, kann der User Agent auf seinen bevorzugten Standardmodus zurückgreifen.

> **Hinweis:** `capture` war früher ein Boolean-Attribut, das bei Vorhandensein anforderte, dass die Medienaufnahmegeräte des Geräts, wie Kamera oder Mikrofon, verwendet werden, anstatt eine Dateiauswahl zu verlangen.

### multiple

Wenn das `multiple`-Boolean-Attribut angegeben ist, erlaubt der Dateieingang dem Benutzer, mehr als eine Datei auszuwählen.

## Nicht-standardisierte Attribute

Zusätzlich zu den oben aufgelisteten Attributen sind folgende nicht-standardisierte Attribute in einigen Browsern verfügbar. Sie sollten versuchen, deren Nutzung zu vermeiden, da dies die Fähigkeit Ihres Codes einschränkt, in Browsern zu funktionieren, die sie nicht implementieren.

### `webkitdirectory`

Das Boolean-Attribut `webkitdirectory`, wenn vorhanden, gibt an, dass nur Verzeichnisse zur Auswahl durch den Benutzer in der Dateiauswahloberfläche zur Verfügung stehen sollten. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für zusätzliche Details und Beispiele.

Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, kann `webkitdirectory` auch in Firefox verwendet werden. Trotz der relativ breiten Unterstützung ist es immer noch nicht standardisiert und sollte nur verwendet werden, wenn es keine Alternative gibt.

## Einzigartige Dateityp-Spezifizierungen

Eine **einzigartige Dateityp-Spezifizierung** ist ein String, der eine Art von Datei beschreibt, die vom Benutzer in einem {{HTMLElement("input")}}-Element vom Typ `file` ausgewählt werden kann. Jede einzigartige Dateityp-Spezifizierung kann eine der folgenden Formen annehmen:

- Eine gültige, nicht sensitivitätsunterscheidende Dateinamenerweiterung, die mit einem Punkt (".") Zeichen beginnt. Zum Beispiel: `.jpg`, `.pdf` oder `.doc`.
- Ein gültiger MIME-Typ-String, ohne Erweiterungen.
- Der String `audio/*` bedeutet "jede Audiodatei".
- Der String `video/*` bedeutet "jede Videodatei".
- Der String `image/*` bedeutet "jede Bilddatei".

Das `accept`-Attribut nimmt einen String auf, der einen oder mehrere dieser einzigartigen Dateityp-Spezifizierungen als seinen Wert enthält, getrennt durch Kommas. Zum Beispiel könnte ein Dateiauswähler, der Inhalte benötigt, die als Bild dargestellt werden können, einschließlich sowohl Standard-Bildformaten als auch PDF-Dateien, so aussehen:

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
> Sie können dieses Beispiel auch auf GitHub finden — siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html) und auch [sehen Sie es live](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Unabhängig vom Gerät oder Betriebssystem des Benutzers bietet der Dateieingang eine Schaltfläche, die einen Dateiauswahldialog öffnet, der es dem Benutzer ermöglicht, eine Datei auszuwählen.

Das Einbinden des [`multiple`](#multiple)-Attributs, wie oben gezeigt, legt fest, dass mehrere Dateien gleichzeitig ausgewählt werden können. Der Benutzer kann mehrere Dateien aus dem Dateiauswähler auf jede Weise auswählen, die von seiner gewählten Plattform ermöglicht wird (z. B. durch gleichzeitiges Drücken der <kbd>Shift</kbd>- oder <kbd>Control</kbd>-Taste und Klicken). Wenn Sie möchten, dass der Benutzer nur eine einzige Datei pro `<input>` auswählt, lassen Sie das `multiple`-Attribut weg.

### Informationen zu ausgewählten Dateien abrufen

Die ausgewählten Dateien werden durch die `HTMLInputElement.files`-Eigenschaft des Elements zurückgegeben, die ein [`FileList`](/de/docs/Web/API/FileList)-Objekt ist, das eine Liste von [`File`](/de/docs/Web/API/File)-Objekten enthält. Die `FileList` verhält sich wie ein Array, sodass Sie seine `length`-Eigenschaft überprüfen können, um die Anzahl der ausgewählten Dateien zu ermitteln.

Jedes `File`-Objekt enthält folgende Informationen:

- `name`
  - : Der Dateiname.
- `lastModified`
  - : Eine Zahl, die das Datum und die Uhrzeit angibt, zu der die Datei zuletzt geändert wurde, in Millisekunden seit dem UNIX-Epoch (1. Januar 1970, um Mitternacht).
- `lastModifiedDate` {{deprecated_inline}}
  - : Ein {{jsxref("Date")}}-Objekt, das das Datum und die Uhrzeit darstellt, zu der die Datei zuletzt geändert wurde. _Dies ist veraltet und sollte nicht verwendet werden. Verwenden Sie stattdessen `lastModified`._
- `size`
  - : Die Größe der Datei in Bytes.
- `type`
  - : Der [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) der Datei.
- `webkitRelativePath` {{non-standard_inline}}
  - : Ein String, der den Pfad der Datei relativ zum Basisverzeichnis angibt, das in einem Verzeichniswähler ausgewählt wurde (d. h. ein `file`-Picker, bei dem das [`webkitdirectory`](#webkitdirectory)-Attribut gesetzt ist). _Dies ist nicht standardisiert und sollte mit Vorsicht verwendet werden._

### Akzeptierte Dateitypen einschränken

Oft möchten Sie nicht, dass der Benutzer beliebige Dateitypen auswählen kann; stattdessen möchten Sie oft, dass er Dateien eines bestimmten Typs oder Typs auswählt. Zum Beispiel, wenn Ihre Dateieingabe es Benutzern erlaubt, ein Profilbild hochzuladen, möchten Sie wahrscheinlich, dass sie webkompatible Bildformate wie {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}} auswählen.

Akzeptable Dateitypen können mit dem [`accept`](#accept)-Attribut spezifiziert werden, das eine durch Kommas getrennte Liste zulässiger Dateierweiterungen oder MIME-Typen annimmt. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*` MIME-Typ. (Viele mobile Geräte lassen den Benutzer auch ein Bild mit der Kamera aufnehmen, wenn dies verwendet wird.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — Akzeptiert alles, was wie ein MS Word-Dokument aussieht.

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

Dies erzeugt eine ähnlich aussehende Ausgabe wie das vorherige Beispiel:

{{EmbedLiveSample('Limiting_accepted_file_types', 650, 90)}}

> [!NOTE]
> Sie können dieses Beispiel auch auf GitHub finden — siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-with-accept.html) und auch [sehen Sie es live](https://mdn.github.io/learning-area/html/forms/file-examples/file-with-accept.html).

Es mag ähnlich aussehen, aber wenn Sie versuchen, eine Datei mit diesem Input auszuwählen, werden Sie sehen, dass der Dateiauswähler nur die Dateitypen, die im `accept`-Wert angegeben sind, zur Auswahl zulässt (die genaue Schnittstelle variiert je nach Browser und Betriebssystem).

Das `accept`-Attribut validiert die Typen der ausgewählten Dateien nicht; es bietet Hinweise für Browser, Benutzer zu führen, die richtigen Dateitypen auszuwählen. Es ist in den meisten Fällen immer noch möglich für Benutzer, eine Option im Dateiauswähler zu aktivieren, die es ihnen ermöglicht, dies zu umgehen und jede Datei auszuwählen, die sie möchten, und dann unpassende Dateitypen auszuwählen.

Aus diesem Grund sollten Sie sicherstellen, dass das `accept`-Attribut durch geeignete serverseitige Validierung gestützt wird.

### Abbrüche erkennen

Das `cancel`-Event wird ausgelöst, wenn der Benutzer seine Auswahl nicht ändert und die zuvor ausgewählten Dateien erneut auswählt. Das `cancel`-Event wird auch ausgelöst, wenn der Dateiauswahldialog durch die Schaltfläche "Abbrechen" oder die <kbd>Escape</kbd>-Taste geschlossen oder abgebrochen wird.

Zum Beispiel wird der folgende Code eine Meldung an die Konsole ausgeben, wenn der Benutzer das Popup ohne Dateiauswahl schließt:

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

1. Sie können den Wert eines Dateiauswählers nicht über ein Skript festlegen — etwas wie das folgende hat keine Wirkung:

   ```js
   const input = document.querySelector("input[type=file]");
   input.value = "foo";
   ```

2. Wenn eine Datei über ein `<input type="file">` ausgewählt wird, wird der tatsächliche Pfad zur Quelldatei aus offensichtlichen Sicherheitsgründen nicht im `value`-Attribut des Inputs angezeigt. Stattdessen wird der Dateiname angezeigt, mit `C:\fakepath\` vorangestellt. Dafür gibt es einige historische Gründe, aber es wird von allen modernen Browsern unterstützt und ist tatsächlich [in der Spezifikation definiert](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly).

## Beispiele

In diesem Beispiel zeigen wir einen etwas fortgeschritteneren Dateiauswähler, der die Dateiinformationen nutzt, die in der `HTMLInputElement.files`-Eigenschaft verfügbar sind, sowie einige clevere Tricks zeigt.

> [!NOTE]
> Sie können den vollständigen Quellcode für dieses Beispiel auf GitHub sehen — [file-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-example.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/file-examples/file-example.html)). Wir werden das CSS nicht erklären; der Schwerpunkt liegt auf JavaScript.

Zuerst sehen wir uns das HTML an:

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

Dies ist ähnlich zu dem, was wir zuvor gesehen haben — nichts Besonderes zu kommentieren.

Als nächstes gehen wir Schritt für Schritt durch das JavaScript.

In den ersten Zeilen des Skripts erhalten wir Referenzen auf die Formulareingabe selbst und das {{htmlelement("div")}}-Element mit der Klasse `.preview`. Als nächstes verstecken wir das {{htmlelement("input")}}-Element — das machen wir, weil Dateieingaben oft hässlich, schwer zu stylen und in ihrem Design zwischen Browsern inkonsistent sind. Sie können das `input`-Element aktivieren, indem Sie sein {{htmlelement("label")}} anklicken, daher ist es besser, das `input` visuell zu verstecken und das Label wie eine Schaltfläche zu stylen, damit der Benutzer weiß, dass er mit ihm interagieren kann, wenn er Dateien hochladen möchte.

```js
const input = document.querySelector("input");
const preview = document.querySelector(".preview");

input.style.opacity = 0;
```

> **Hinweis:** {{cssxref("opacity")}} wird verwendet, um die Dateieingabe zu verstecken, anstatt {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}}, weil unterstützende Technologie die beiden letzteren Stile so interpretiert, dass die Dateieingabe nicht interaktiv ist.

Als nächstes fügen wir der Eingabe einen [Ereignis-Listener](/de/docs/Web/API/EventTarget/addEventListener) hinzu, um auf Änderungen am ausgewählten Wert zu lauschen (in diesem Fall, wenn Dateien ausgewählt werden). Der Ereignis-Listener ruft unsere benutzerdefinierte Funktion `updateImageDisplay()` auf.

```js
input.addEventListener("change", updateImageDisplay);
```

Jedes Mal, wenn die `updateImageDisplay()`-Funktion aufgerufen wird, führen wir Folgendes aus:

- Verwenden Sie eine {{jsxref("Statements/while", "while")}}-Schleife, um die vorherigen Inhalte des Vorschau-`<div>` zu leeren.
- Erfassen Sie das [`FileList`](/de/docs/Web/API/FileList)-Objekt, das die Informationen zu allen ausgewählten Dateien enthält, und speichern Sie es in einer Variablen namens `curFiles`.
- Überprüfen Sie, ob keine Dateien ausgewählt wurden, indem Sie prüfen, ob `curFiles.length` gleich 0 ist. Wenn ja, geben Sie eine Nachricht in das Vorschau-`<div>` aus, die besagt, dass keine Dateien ausgewählt wurden.
- Wenn Dateien _ausgewählt_ wurden, durchlaufen wir jede einzelne und geben Informationen darüber in das Vorschau-`<div>` aus. Beachten Sie dabei:
- Wir verwenden die benutzerdefinierte `validFileType()`-Funktion, um zu überprüfen, ob die Datei vom richtigen Typ ist (z. B. den in dem `accept`-Attribut angegebenen Bildtypen).
- Wenn dies der Fall ist, führen wir aus:

  - Geben Sie den Namen und die Dateigröße in ein Listen-Element im vorherigen `<div>` aus (bezogen von `file.name` und `file.size`). Die benutzerdefinierte `returnFileSize()`-Funktion gibt eine schön formatierte Version der Größe in Bytes/KB/MB zurück (standardmäßig berichtet der Browser die Größe in absoluten Bytes).
  - Erzeugen Sie eine Thumbnail-Vorschau des Bildes, indem Sie [`URL.createObjectURL(file)`](/de/docs/Web/API/URL/createObjectURL_static) aufrufen. Setzen Sie dann das Bild auch in das Listen-Element, indem Sie ein neues {{htmlelement("img")}} erstellen und sein [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) auf das Thumbnail setzen.

- Wenn der Dateityp ungültig ist, zeigen wir eine Nachricht in einem Listen-Element an, die dem Benutzer mitteilt, dass er einen anderen Dateityp auswählen muss.

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

Die benutzerdefinierte `validFileType()`-Funktion nimmt ein [`File`](/de/docs/Web/API/File)-Objekt als Parameter und verwendet dann {{jsxref("Array.prototype.includes()")}}, um zu überprüfen, ob ein Wert in den `fileTypes` das `type`-Eigenschaft der Datei entspricht. Wenn eine Übereinstimmung gefunden wird, gibt die Funktion `true` zurück. Wenn keine Übereinstimmung gefunden wird, gibt sie `false` zurück.

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

Die `returnFileSize()`-Funktion nimmt eine Zahl (in Bytes, aus der aktuellen Datei `size`-Eigenschaft entnommen) und wandelt sie in eine schön formatierte Größe in Bytes/KB/MB um.

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
> Die Einheiten "KB" und "MB" verwenden hier die [SI-Präfix](https://en.wikipedia.org/wiki/Binary_prefix)-Konvention von 1KB = 1000B, ähnlich wie macOS. Verschiedene Systeme repräsentieren Dateigrößen unterschiedlich — zum Beispiel verwendet Ubuntu IEC-Präfixe, bei denen 1KiB = 1024B, während RAM-Spezifikationen oft SI-Präfixe verwenden, um Potenzen von zwei darzustellen (1KB = 1024B). Aus diesem Grund verwendeten wir `1e3` (`1000`) und `1e6` (`100000`) anstatt `1024` und `1048576`. In Ihrer Anwendung sollten Sie das Einheiten-System Ihren Benutzern klar kommunizieren, wenn die genaue Größe wichtig ist.

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

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) — enthält eine Reihe anderer nützlicher Beispiele im Zusammenhang mit `<input type="file">` und der [File API](/de/docs/Web/API/File).
