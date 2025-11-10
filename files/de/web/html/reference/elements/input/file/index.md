---
title: <input type="file">
slug: Web/HTML/Reference/Elements/input/file
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

{{HTMLElement("input")}}-Elemente mit **`type="file"`** ermöglichen es dem Benutzer, eine oder mehrere Dateien aus dem Gerätespeicher auszuwählen. Einmal ausgewählt, können die Dateien über [Formularübermittlung](/de/docs/Learn_web_development/Extensions/Forms) hochgeladen oder mit JavaScript-Code und [der File API](/de/docs/Web/API/File_API/Using_files_from_web_applications) manipuliert werden.

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

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut eines Dateieingabefeldes enthält einen String, der den Pfad zu den ausgewählten Dateien repräsentiert. Wenn noch keine Datei ausgewählt ist, ist der Wert ein leerer String (`""`). Wenn der Benutzer mehrere Dateien ausgewählt hat, repräsentiert der `value` die erste Datei in der Liste der ausgewählten Dateien. Die anderen Dateien können mit Hilfe der [`HTMLInputElement.files`-Eigenschaft](/de/docs/Web/API/File_API/Using_files_from_web_applications#getting_information_about_selected_files) des Eingabefeldes identifiziert werden.

> [!NOTE]
> Der Wert ist [immer der Dateiname, dem `C:\fakepath\` vorangestellt ist](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly), was nicht der echte Pfad der Datei ist. Dies ist, um bösartige Software daran zu hindern, die Dateistruktur des Benutzers zu erraten.

## Zusätzliche Attribute

Zusätzlich zu den gemeinsamen Attributen, die alle {{HTMLElement("input")}}-Elemente teilen, unterstützen Eingabefelder vom Typ `file` auch die folgenden Attribute.

### accept

Der Wert des [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)-Attributs ist ein String, der die Dateitypen definiert, die das Dateieingabefeld akzeptieren soll. Dieser String ist eine durch Kommas getrennte Liste von **[einzigartigen Dateityp-Spezifizierern](#einzigartige_dateityp-spezifizierer)**. Da ein gegebener Dateityp auf mehr als eine Weise identifiziert werden kann, ist es nützlich, eine umfassende Menge von Typenspezifizierern bereitzustellen, wenn Dateien eines bestimmten Formats benötigt werden.

Beispielsweise gibt es eine Reihe von Möglichkeiten, Microsoft Word-Dateien zu identifizieren, daher könnte eine Website, die Word-Dateien akzeptiert, ein `<input>` wie dieses verwenden:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### capture

Der Wert des [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)-Attributs ist ein String, der spezifiziert, welche Kamera für die Erfassung von Bild- oder Videodaten verwendet werden soll, wenn das [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)-Attribut angibt, dass die Eingabe eine dieser Arten sein soll. Ein Wert von `user` bedeutet, dass die nach vorne gerichtete Kamera und/oder das Mikrofon benutzt werden sollen. Ein Wert von `environment` spezifiziert, dass die nach außen gerichtete Kamera und/oder das Mikrofon verwendet werden sollen. Wenn dieses Attribut fehlt, steht es der {{Glossary("user_agent", "Nutzeragent")}} frei, selbst zu entscheiden, was zu tun ist. Wenn der angeforderte Aufnahmemodus nicht verfügbar ist, kann der Nutzeragent auf seinen bevorzugten Standardmodus zurückgreifen.

> [!NOTE]
> `capture` war früher ein Boolesches Attribut, das, wenn vorhanden, verlangte, dass die Medienerfassungsgeräte des Geräts, wie Kamera oder Mikrofon, genutzt werden, anstatt eine Dateiauswahl anzufordern.

### multiple

Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Boolesche Attribut angegeben ist, erlaubt das Dateieingabefeld dem Benutzer, mehr als eine Datei auszuwählen.

## Nicht-standardmäßige Attribute

Zusätzlich zu den oben aufgeführten Attributen stehen in einigen Browsern die folgenden nicht-standardmäßigen Attribute zur Verfügung. Sie sollten nach Möglichkeit vermeiden, diese zu verwenden, da dies die Fähigkeit Ihres Codes einschränkt, in Browsern zu funktionieren, die sie nicht implementieren.

### `webkitdirectory`

Das Boolesche `webkitdirectory`-Attribut, falls vorhanden, bedeutet, dass nur Verzeichnisse in der Dateiauswahloberfläche vom Benutzer ausgewählt werden können. Siehe [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) für zusätzliche Details und Beispiele.

## Einzigartige Dateityp-Spezifizierer

Ein **einzigartiger Dateityp-Spezifizierer** ist ein String, der eine Art Datei beschreibt, die vom Benutzer in einem {{HTMLElement("input")}}-Element vom Typ `file` ausgewählt werden kann. Jeder einzigartige Dateityp-Spezifizierer kann eine der folgenden Formen annehmen:

- Eine gültige, nicht fallunterscheidende Dateinamenserweiterung, die mit einem Punkt (".") beginnt. Zum Beispiel: `.jpg`, `.pdf` oder `.doc`.
- Ein gültiger MIME-Typ-String, ohne Erweiterungen.
- Der String `audio/*`, was "jede Audiodatei" bedeutet.
- Der String `video/*`, was "jede Videodatei" bedeutet.
- Der String `image/*`, was "jede Bilddatei" bedeutet.

Das `accept`-Attribut nimmt einen String, der einen oder mehrere dieser einzigartigen Dateityp-Spezifizierer als Wert enthält, getrennt durch Kommas. Zum Beispiel könnte ein Dateiauswahlfeld, das Inhalte benötigt, die als Bild dargestellt werden können, einschließlich sowohl standardmäßiger Bildformate als auch PDF-Dateien, so aussehen:

```html
<input type="file" accept="image/*,.pdf" />
```

## Verwendung von Datei-Eingabefeldern

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
> Sie finden dieses Beispiel auch auf GitHub — sehen Sie sich [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html) an und [sehen Sie es live](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Unabhängig vom Gerät oder Betriebssystem des Benutzers bietet das Datei-Eingabefeld eine Schaltfläche, die ein Dateiauswahldialog öffnet, das dem Benutzer ermöglicht, eine Datei auszuwählen.

Die Einbeziehung des [`multiple`](#multiple)-Attributs, wie oben gezeigt, gibt an, dass mehrere Dateien auf einmal ausgewählt werden können. Der Benutzer kann Dateien auf jede Weise auswählen, die seine gewählte Plattform erlaubt (z. B. durch Drücken der <kbd>Shift</kbd>- oder <kbd>Control</kbd>-Taste und dann Klicken). Wenn Sie möchten, dass der Benutzer nur eine Datei pro `<input>` auswählt, lassen Sie das `multiple`-Attribut weg.

### Informationen zu ausgewählten Dateien erhalten

Die ausgewählten Dateien werden durch die `HTMLInputElement.files`-Eigenschaft des Elements zurückgegeben, die ein [`FileList`](/de/docs/Web/API/FileList)-Objekt ist, das eine Liste von [`File`](/de/docs/Web/API/File)-Objekten enthält. Die `FileList` verhält sich wie ein Array, so dass Sie seine `length`-Eigenschaft überprüfen können, um die Anzahl der ausgewählten Dateien zu erhalten.

Jedes `File`-Objekt enthält die folgenden Informationen:

- `name`
  - : Der Name der Datei.
- `lastModified`
  - : Eine Zahl, die das Datum und die Uhrzeit angibt, zu der die Datei zuletzt geändert wurde, in Millisekunden seit dem UNIX-Epoche (1. Januar 1970, bei Mitternacht).
- `lastModifiedDate` {{deprecated_inline}}
  - : Ein {{jsxref("Date")}}-Objekt, das das Datum und die Uhrzeit angibt, zu der die Datei zuletzt geändert wurde. _Dies ist veraltet und sollte nicht verwendet werden. Verwenden Sie stattdessen `lastModified`._
- `size`
  - : Die Größe der Datei in Bytes.
- `type`
  - : Der [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) der Datei.
- `webkitRelativePath` {{non-standard_inline}}
  - : Ein String, der den relativen Pfad der Datei im Basisverzeichnis angibt, das in einer Verzeichnisauswahl ausgewählt wurde (also einem `file`-Auswahlfeld, in dem das [`webkitdirectory`](#webkitdirectory)-Attribut gesetzt ist). _Dies ist nicht standardmäßig und sollte mit Vorsicht verwendet werden._

### Akzeptierte Dateitypen begrenzen

Oft möchten Sie nicht, dass der Benutzer einen beliebigen Dateityp auswählen kann; stattdessen möchten Sie oft, dass er Dateien eines bestimmten Typs oder bestimmter Typen auswählt. Zum Beispiel, wenn Ihr Datei-Eingabefeld es den Benutzern ermöglicht, ein Profilbild hochzuladen, möchten Sie wahrscheinlich, dass sie webkompatible Bildformate auswählen, wie {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}}.

Akzeptable Dateitypen können mit dem [`accept`](#accept)-Attribut angegeben werden, das eine durch Kommas getrennte Liste von erlaubten Dateierweiterungen oder MIME-Typen annimmt. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG- oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*` MIME-Typ. (Viele mobile Geräte lassen den Benutzer auch ein Bild mit der Kamera aufnehmen, wenn dies verwendet wird.)
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

Dies erzeugt eine ähnlich aussehende Ausgabe wie das vorherige Beispiel:

{{EmbedLiveSample('Limiting_accepted_file_types', 650, 90)}}

> [!NOTE]
> Sie können dieses Beispiel auch auf GitHub finden — sehen Sie sich [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-with-accept.html) an und [sehen Sie es live](https://mdn.github.io/learning-area/html/forms/file-examples/file-with-accept.html).

Es sieht vielleicht ähnlich aus, aber wenn Sie versuchen, eine Datei mit diesem Feld auszuwählen, werden Sie sehen, dass die Dateiauswahl Sie nur die Dateien auswählen lässt, die im `accept`-Wert angegeben sind (die genaue Schnittstelle unterscheidet sich zwischen Browsern und Betriebssystemen).

Das `accept`-Attribut validiert nicht die Typen der ausgewählten Dateien; es bietet Hinweise für Browser, um Benutzer bei der Auswahl der richtigen Dateitypen zu leiten. Es ist in den meisten Fällen immer noch möglich, dass Benutzer eine Option im Dateiauswahlmenü aktivieren, die es ermöglicht, dies zu überschreiben und dann jede gewünschte Datei auszuwählen, und dann unkorrekte Dateitypen wählen.

Deshalb sollten Sie sicherstellen, dass das `accept`-Attribut durch eine entsprechende serverseitige Validierung unterstützt wird.

### Erkennen von Abbrüchen

Das `cancel`-Ereignis wird ausgelöst, wenn der Benutzer seine Auswahl nicht ändert und die zuvor ausgewählten Dateien erneut auswählt. Das `cancel`-Ereignis wird auch ausgelöst, wenn das Dateiauswahl-Dialogfeld geschlossen oder über die "Abbrechen"-Schaltfläche oder die <kbd>Escape</kbd>-Taste abgebrochen wird.

Zum Beispiel wird der folgende Code eine Meldung in die Konsole ausgeben, wenn der Benutzer das Popup schließt, ohne eine Datei auszuwählen:

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

1. Sie können den Wert eines Datei-Auswahlfelds nicht über ein Skript setzen – etwas wie das Folgende hat keine Wirkung:

   ```js
   const input = document.querySelector("input[type=file]");
   input.value = "foo";
   ```

2. Wenn eine Datei mit einem `<input type="file">` ausgewählt wird, wird der echte Pfad zur Quelldatei aus offensichtlichen Sicherheitsgründen nicht im `value`-Attribut der Eingabe angezeigt. Stattdessen wird der Dateiname angezeigt, dem `C:\fakepath\` vorangestellt ist. Dafür gibt es einige historische Gründe, aber es wird in allen modernen Browsern unterstützt und ist tatsächlich [in der Spezifikation definiert](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly).

## Beispiele

In diesem Beispiel werden wir einen etwas fortgeschritteneren Dateiauswahler präsentieren, der die in der `HTMLInputElement.files`-Eigenschaft verfügbaren Dateiinformationen nutzt und einige clevere Tricks zeigt.

> [!NOTE]
> Sie können den kompletten Quellcode für dieses Beispiel auf GitHub sehen — [file-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-example.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/file-examples/file-example.html)). Wir werden das CSS nicht erklären; der Fokus liegt auf dem JavaScript.

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

Das ist ähnlich zu dem, was wir zuvor gesehen haben – nichts Besonderes, das kommentiert werden müsste.

Als nächstes gehen wir den JavaScript-Code durch.

In den ersten Zeilen des Skripts erhalten wir Referenzen auf das Formulareingabefeld selbst und das {{htmlelement("div")}}-Element mit der Klasse `.preview`. Danach verstecken wir das {{htmlelement("input")}}-Element – wir machen dies, weil Datei-Eingabefelder dazu neigen, hässlich, schwer zu stylen und uneinheitlich in ihrem Design über Browser hinweg zu sein. Sie können das `input`-Element aktivieren, indem Sie auf dessen {{htmlelement("label")}} klicken, daher ist es besser, das `input` optisch zu verstecken und das Label wie einen Button zu stylen, damit der Benutzer weiß, dass er darauf interagieren muss, wenn er Dateien hochladen möchte.

```js
const input = document.querySelector("input");
const preview = document.querySelector(".preview");

input.style.opacity = 0;
```

> [!NOTE]
> {{cssxref("opacity")}} wird verwendet, um das Datei-Eingabefeld zu verstecken, anstatt {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}}, weil assistierende Technologien die letzteren beiden Stile so interpretieren, dass das Datei-Eingabefeld nicht interaktiv ist.

Als nächstes fügen wir einen [Ereignislistener](/de/docs/Web/API/EventTarget/addEventListener) zum Eingabefeld hinzu, um auf Änderungen seines ausgewählten Wertes zu hören (in diesem Fall, wenn Dateien ausgewählt werden). Der Ereignislistener ruft unsere benutzerdefinierte `updateImageDisplay()`-Funktion auf.

```js
input.addEventListener("change", updateImageDisplay);
```

Wann immer die `updateImageDisplay()`-Funktion aufgerufen wird, führen wir aus:

- Eine {{jsxref("Statements/while", "while")}}-Schleife, um den vorherigen Inhalt des Vorschau-`<div>`-Elements zu leeren.
- Wir greifen das [`FileList`](/de/docs/Web/API/FileList)-Objekt, das die Informationen über alle ausgewählten Dateien enthält, und speichern es in einer Variablen namens `curFiles`.
- Wir prüfen, ob keine Dateien ausgewählt wurden, indem wir überprüfen, ob `curFiles.length` gleich 0 ist. Wenn dies der Fall ist, drucken wir eine Nachricht in das Vorschau-`<div>`-Element, dass keine Dateien ausgewählt wurden.
- Wenn Dateien ausgewählt wurden, gehen wir jede einzelne durch und drucken Informationen darüber in das Vorschau-`<div>`-Element. Zu beachten ist hier:
- Wir verwenden die benutzerdefinierte `validFileType()`-Funktion, um zu überprüfen, ob die Datei von korrektetyp ist (z. B. die im `accept`-Attribut angegebenen Bildtypen).
- Wenn dies der Fall ist, führen wir aus:
  - Ihren Namen und die Dateigröße in ein Listenitem innerhalb des vorherigen `<div>`-Elements drucken (erhalten von `file.name` und `file.size`). Die benutzerdefinierte `returnFileSize()`-Funktion gibt eine schön formatierte Version der Größe in Bytes/KB/MB zurück (standardmäßig berichtet der Browser die Größe in absoluten Bytes).
  - Eine Miniaturansicht des Bildes generieren, indem [`URL.createObjectURL(file)`](/de/docs/Web/API/URL/createObjectURL_static) aufgerufen wird. Dann fügen wir das Bild auch ins Listenitem ein, indem wir ein neues {{htmlelement("img")}} erstellen und sein [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) auf die Miniaturansicht setzen.

- Wenn der Dateityp ungültig ist, zeigen wir innerhalb eines Listenitems eine Nachricht an, die dem Benutzer mitteilt, dass er einen anderen Dateityp auswählen muss.

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

Die benutzerdefinierte `validFileType()`-Funktion nimmt ein [`File`](/de/docs/Web/API/File)-Objekt als Parameter und verwendet {{jsxref("Array.prototype.includes()")}}, um zu prüfen, ob irgendein Wert im `fileTypes` mit der `type`-Eigenschaft der Datei übereinstimmt. Wenn eine Übereinstimmung gefunden wird, gibt die Funktion `true` zurück. Wenn keine Übereinstimmung gefunden wird, gibt sie `false` zurück.

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

Die `returnFileSize()`-Funktion nimmt eine Zahl (in Bytes, von der aktuellen `size`-Eigenschaft der Datei) und wandelt sie in eine schön formatierte Größe in Bytes/KB/MB um.

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
> Die "KB" und "MB"-Einheiten hier verwenden die [SI-Präfix](https://en.wikipedia.org/wiki/Binary_prefix)-Konvention von 1KB = 1000B, ähnlich wie macOS. Verschiedene Systeme stellen Dateigrößen unterschiedlich dar – zum Beispiel verwendet Ubuntu IEC-Präfixe, wobei 1KiB = 1024B, während RAM-Spezifikationen oft SI-Präfixe verwenden, um Potenzen von zwei darzustellen (1KB = 1024B). Aus diesem Grund haben wir `1e3` (`1000`) und `1e6` (`100000`) anstelle von `1024` und `1048576` verwendet. In Ihrer Anwendung sollten Sie das Maßeinheitensystem klar an Ihre Benutzer kommunizieren, wenn die genaue Größe wichtig ist.

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
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
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

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) — enthält eine Reihe anderer nützlicher Beispiele in Bezug auf `<input type="file">` und die [File API](/de/docs/Web/API/File).
