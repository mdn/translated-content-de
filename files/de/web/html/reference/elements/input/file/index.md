---
title: '`<input type="file">` HTML-Attributwert'
short-title: <input type="file">
slug: Web/HTML/Reference/Elements/input/file
l10n:
  sourceCommit: 2066cc916dfdcbb782340bf0ce562b230e947cba
---

{{HTMLElement("input")}}-Elemente mit **`type="file"`** ermöglichen es dem Benutzer, eine oder mehrere Dateien von seinem Gerätespeicher auszuwählen. Nachdem die Dateien ausgewählt wurden, können sie über [Formularübermittlung](/de/docs/Learn_web_development/Extensions/Forms) auf einen Server hochgeladen oder mithilfe von JavaScript-Code und der [File API](/de/docs/Web/API/File_API/Using_files_from_web_applications) bearbeitet werden.

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

Ein Datei-Input-Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) enthält eine Zeichenkette, die den Pfad zu der/den ausgewählten Datei/Dateien darstellt. Wenn noch keine Datei ausgewählt ist, ist der Wert eine leere Zeichenkette (`""`). Wenn der Benutzer mehrere Dateien ausgewählt hat, repräsentiert der `value` die erste Datei in der Liste der ausgewählten Dateien. Die anderen Dateien können über die [Eigenschaft `HTMLInputElement.files` des Inputs](/de/docs/Web/API/File_API/Using_files_from_web_applications#getting_information_about_selected_files) identifiziert werden.

> [!NOTE]
> Der Wert ist [immer der Dateiname, der mit `C:\fakepath\` vorangestellt ist](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly), was nicht der echte Pfad der Datei ist. Dies dient dem Schutz vor bösartiger Software, die versucht, die Dateistruktur des Benutzers zu erraten.

## Zusätzliche Attribute

Neben den allgemeinen Attributen, die alle {{HTMLElement("input")}}-Elemente teilen, unterstützen Eingaben des Typs `file` auch die folgenden Attribute.

### accept

Der Wert des [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)-Attributs ist eine Zeichenkette, die die Dateitypen definiert, die das Datei-Input akzeptieren soll. Diese Zeichenkette ist eine durch Kommas getrennte Liste von **[eindeutigen Dateityp-Spezifikatoren](#eindeutige_dateityp-spezifikatoren)**. Da ein gegebener Dateityp auf mehr als eine Weise identifiziert werden kann, ist es nützlich, eine umfassende Menge von Typ-Spezifikatoren anzugeben, wenn Sie Dateien eines bestimmten Formats benötigen.

Zum Beispiel gibt es mehrere Möglichkeiten, Microsoft Word-Dateien zu identifizieren, sodass eine Seite, die Word-Dateien akzeptiert, ein `<input>` wie dieses verwenden könnte:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### capture

Der Wert des [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)-Attributs ist eine Zeichenkette, die angibt, welche Kamera für die Erfassung von Bild- oder Videodaten zu verwenden ist, wenn das [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)-Attribut angibt, dass die Eingabe einer dieser Typen sein soll. Ein Wert von `user` gibt an, dass die benutzerzugewandte Kamera und/oder das Mikrofon verwendet werden soll. Ein Wert von `environment` spezifiziert, dass die nach außen gerichtete Kamera und/oder das Mikrofon verwendet werden soll. Wenn dieses Attribut fehlt, kann der {{Glossary("user_agent", "Benutzeragent")}} selbst entscheiden, was zu tun ist. Wenn der angeforderte Ausrichtungsmodus nicht verfügbar ist, kann der Benutzeragent auf seinen bevorzugten Standardmodus zurückgreifen.

> [!NOTE]
> `capture` war früher ein Boolean-Attribut, das bei Vorhandensein anforderte, dass die Medienerfassungsgeräte des Geräts wie Kamera oder Mikrofon anstelle einer Dateieingabe verwendet werden.

### multiple

Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) Boolean-Attribut angegeben ist, erlaubt das Datei-Input dem Benutzer, mehr als eine Datei auszuwählen.

## Nicht-standardisierte Attribute

Zusätzlich zu den oben aufgeführten Attributen sind in einigen Browsern die folgenden nicht-standardspezifischen Attribute verfügbar. Sie sollten versuchen, die Verwendung dieser Attribute zu vermeiden, da sie die Fähigkeit Ihres Codes einschränken könnten, in Browsern zu funktionieren, die diese nicht implementieren.

### `webkitdirectory`

Das Boolean-Attribut `webkitdirectory`, falls vorhanden, gibt an, dass nur Verzeichnisse in der Dateiauswahloberfläche vom Benutzer ausgewählt werden dürfen. Weitere Details und Beispiele finden Sie unter [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

## Eindeutige Dateityp-Spezifikatoren

Ein **eindeutiger Dateityp-Spezifikator** ist eine Zeichenkette, die eine Art von Datei beschreibt, die vom Benutzer in einem {{HTMLElement("input")}}-Element des Typs `file` ausgewählt werden kann. Jeder eindeutige Dateityp-Spezifikator kann eine der folgenden Formen annehmen:

- Eine gültige, nicht case-sensitive Dateinamenerweiterung, die mit einem Punkt (".")-Zeichen beginnt. Zum Beispiel: `.jpg`, `.pdf` oder `.doc`.
- Eine gültige MIME-Typ-Zeichenkette, ohne Erweiterungen.
- Die Zeichenkette `audio/*`, die "jede Audiodatei" bedeutet.
- Die Zeichenkette `video/*`, die "jede Videodatei" bedeutet.
- Die Zeichenkette `image/*`, die "jede Bilddatei" bedeutet.

Das `accept`-Attribut nimmt eine Zeichenkette als Wert, die einen oder mehrere dieser eindeutigen Dateityp-Spezifikatoren enthält und durch Kommas getrennt ist. Zum Beispiel könnte ein Dateiauswahl-Dialog, der Inhalte benötigt, die als Bild dargestellt werden können, einschließlich sowohl standardmäßiger Bildformate als auch PDF-Dateien, so aussehen:

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

Unabhängig vom Gerät oder Betriebssystem des Benutzers bietet das Datei-Input eine Schaltfläche, die einen Dateiauswahldialog öffnet, der es dem Benutzer ermöglicht, eine Datei auszuwählen.

Das Einfügen des [`multiple`](#multiple)-Attributs, wie oben gezeigt, gibt an, dass mehrere Dateien gleichzeitig ausgewählt werden können. Der Benutzer kann mehrere Dateien aus dem Dateiauswahlfenster auf beliebige Weise auswählen, die seine Plattform unterstützt (z. B. durch Gedrückthalten der Tasten <kbd>Shift</kbd> oder <kbd>Strg</kbd> und anschließendes Klicken). Wenn Sie möchten, dass der Benutzer nur eine einzige Datei pro `<input>` auswählt, lassen Sie das `multiple`-Attribut weg.

### Informationen zu ausgewählten Dateien erhalten

Die ausgewählten Dateien werden durch das `HTMLInputElement.files`-Eigenschaft des Elements zurückgegeben, welches ein [`FileList`](/de/docs/Web/API/FileList)-Objekt ist, das eine Liste von [`File`](/de/docs/Web/API/File)-Objekten enthält. `FileList` funktioniert wie ein Array, sodass Sie dessen `length`-Eigenschaft prüfen können, um die Anzahl der ausgewählten Dateien zu erhalten.

Jedes `File`-Objekt enthält die folgenden Informationen:

- `name`
  - : Der Dateiname.
- `lastModified`
  - : Eine Zahl, die das Datum und die Uhrzeit angibt, zu dem die Datei zuletzt geändert wurde, in Millisekunden seit dem UNIX-Epoch (1. Januar 1970, um Mitternacht).
- `lastModifiedDate` {{deprecated_inline}}
  - : Ein {{jsxref("Date")}}-Objekt, das das Datum und die Uhrzeit angibt, zu dem die Datei zuletzt geändert wurde. _Dies ist veraltet und sollte nicht verwendet werden. Verwenden Sie stattdessen `lastModified`._
- `size`
  - : Die Größe der Datei in Bytes.
- `type`
  - : Der [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) der Datei.
- `webkitRelativePath` {{non-standard_inline}}
  - : Eine Zeichenkette, die den Dateipfad relativ zum Basisverzeichnis angibt, das in einem Verzeichnisauswahldialog ausgewählt wurde (das heißt, ein `file`-Picker, bei dem das Attribut [`webkitdirectory`](#webkitdirectory) gesetzt ist). _Dies ist nicht standardisiert und sollte mit Vorsicht verwendet werden._

### Akzeptierte Dateitypen einschränken

Oftmals möchten Sie nicht, dass der Benutzer beliebige Dateitypen auswählt; stattdessen wollen Sie oft, dass er Dateien eines bestimmten Typs oder Typs auswählt. Zum Beispiel, wenn Ihr Datei-Input Benutzern das Hochladen eines Profilbildes ermöglicht, möchten Sie wahrscheinlich, dass sie web-kompatible Bildformate auswählen, wie {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}}.

Akzeptable Dateitypen können mit dem [`accept`](#accept)-Attribut angegeben werden, das eine durch Kommas getrennte Liste zulässiger Dateierweiterungen oder MIME-Typen enthält. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG- oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*` MIME-Typ. (Viele Mobilgeräte erlauben es dem Benutzer auch, ein Bild mit der Kamera zu erstellen, wenn dies verwendet wird.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — akzeptieren alles, was wie ein MS Word-Dokument riecht.

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

Es sieht möglicherweise ähnlich aus, aber wenn Sie versuchen, eine Datei mit diesem Input auszuwählen, werden Sie feststellen, dass der Datei-Dialog nur die Dateitypen anzeigt, die im `accept`-Wert angegeben sind (die genaue Oberfläche variiert je nach Browser und Betriebssystem).

Das `accept`-Attribut validiert nicht die Typen der ausgewählten Dateien; es bietet Hinweise für Browser, um Benutzer zur Auswahl der richtigen Dateitypen zu lenken. Es ist in den meisten Fällen weiterhin möglich, dass Benutzer eine Option im Dateiauswähler umschalten können, die es erlaubt, beliebige Dateien auszuwählen und dann falsche Dateitypen zu wählen.

Aus diesem Grund sollten Sie sicherstellen, dass das `accept`-Attribut durch eine geeignete serverseitige Validierung unterstützt wird.

### Abbruch erkennen

Das `cancel`-Ereignis wird ausgelöst, wenn der Benutzer seine Auswahl nicht ändert, indem er die zuvor ausgewählten Dateien erneut auswählt. Das `cancel`-Ereignis wird auch ausgelöst, wenn das Datei-Auswahlfenster geschlossen oder über die "Abbrechen"-Schaltfläche oder die <kbd>Escape</kbd>-Taste abgebrochen wird.

Zum Beispiel wird der folgende Code eine Meldung an die Konsole senden, wenn der Benutzer das Popup schließt, ohne eine Datei auszuwählen:

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

1. Sie können den Wert eines Datei-Inputs nicht von einem Skript aus festlegen — etwas wie das Folgende hat keinen Effekt:

   ```js
   const input = document.querySelector("input[type=file]");
   input.value = "foo";
   ```

2. Wenn eine Datei über ein `<input type="file">` ausgewählt wird, wird der tatsächliche Pfad zur Quelldatei nicht im `value`-Attribut des Inputs angezeigt, aus offensichtlichen Sicherheitsgründen. Stattdessen wird der Dateiname angezeigt, mit `C:\fakepath\` vorangestellt. Es gibt einige historische Gründe für diese Eigenart, aber es wird von allen modernen Browsern unterstützt und ist tatsächlich [in der Spezifikation definiert](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly).

## Beispiele

### Vollständiges Datei-Beispiel

In diesem Beispiel präsentieren wir einen etwas fortgeschritteneren Dateiauswähler, der die in der `HTMLInputElement.files`-Eigenschaft verfügbaren Dateiinformationen nutzt, sowie einige clevere Tricks zeigt.

#### HTML

Das HTML sieht so aus:

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

Dies ist ähnlich dem, was wir bereits gesehen haben, also werden wir keine Zeit damit verbringen, es zu beschreiben. Auch haben wir das auf das Beispiel angewandte CSS ausgeblendet, da es nicht relevant ist, um das Datei-Input oder das JavaScript, das es antreibt, zu verstehen.

#### JavaScript

In den ersten Skriptzeilen bekommen wir Referenzen auf das Formularelement selbst und das {{htmlelement("div")}}-Element mit der Klasse `.preview`. Als nächstes verstecken wir das {{htmlelement("input")}}-Element — wir tun dies, weil Datei-Inputs dazu neigen, hässlich zu sein, schwer zu gestalten und inkonsistent im Design über verschiedene Browser hinweg. Sie können das `input`-Element durch Klicken auf sein {{htmlelement("label")}} aktivieren, daher ist es besser, das `input` visuell zu verstecken und das Etikett wie eine Schaltfläche zu gestalten, damit der Benutzer weiß, dass er damit interagieren muss, wenn er Dateien hochladen möchte.

```js
const input = document.querySelector("input");
const preview = document.querySelector(".preview");

input.style.opacity = 0;
```

> [!NOTE]
> {{cssxref("opacity")}} wird verwendet, um das Datei-Input zu verstecken, anstelle von {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}}, weil unterstützende Technologien diese beiden Stile so interpretieren, dass das Datei-Input nicht interaktiv ist.

Als nächstes fügen wir einen [event listener](/de/docs/Web/API/EventTarget/addEventListener) hinzu, um auf Änderungen des ausgewählten Wertes des Inputs zu lauschen (in diesem Fall, wenn Dateien ausgewählt werden). Der Event-Listener ruft unsere benutzerdefinierte `updateImageDisplay()`-Funktion auf.

```js
input.addEventListener("change", updateImageDisplay);
```

Wann immer die `updateImageDisplay()`-Funktion aufgerufen wird, machen wir folgendes:

- Wir benutzen eine {{jsxref("Statements/while", "while")}}-Schleife, um den vorherigen Inhalt des Vorschau-`<div>` zu leeren.
- Wir holen das [`FileList`](/de/docs/Web/API/FileList)-Objekt, das die Informationen über alle ausgewählten Dateien enthält, und speichern es in einer Variablen namens `curFiles`.
- Wir prüfen, ob keine Dateien ausgewählt wurden, indem wir prüfen, ob `curFiles.length` gleich 0 ist. Wenn dies der Fall ist, geben wir eine Meldung in dem Vorschau-`<div>` aus, dass keine Dateien ausgewählt wurden.
- Wenn Dateien ausgewählt wurden, durchlaufen wir jede von ihnen und drucken Informationen darüber in das Vorschau-`<div>`. Zu beachtende Punkte:
  - Wir verwenden die benutzerdefinierte `validFileType()`-Funktion, um zu überprüfen, ob die Datei den richtigen Typ hat (zum Beispiel die im `accept`-Attribut angegebenen Bildtypen).
  - Wenn sie gültig ist, dann:
    - Drucken wir den Namen und die Dateigröße in einem Listenelement innerhalb des Vorschau-`<div>` aus (abgerufen von `file.name` und `file.size`). Die benutzerdefinierte `returnFileSize()`-Funktion gibt eine schön formatierte Version der Größe in Bytes/KB/MB zurück (standardmäßig gibt der Browser die Größe in absoluten Bytes an).
    - Erzeugen wir eine Miniaturansicht der Vorschau des Bildes, indem wir [`URL.createObjectURL(file)`](/de/docs/Web/API/URL/createObjectURL_static) aufrufen. Dann fügen wir das Bild auch in das Listenelement ein, indem wir ein neues {{htmlelement("img")}} erstellen und dessen [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) auf die Miniaturansicht setzen.

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

Die benutzerdefinierte `validFileType()`-Funktion nimmt ein [`File`](/de/docs/Web/API/File)-Objekt als Parameter, dann verwendet sie {{jsxref("Array.prototype.includes()")}}, um zu prüfen, ob ein Wert in `fileTypes` mit der `type`-Eigenschaft der Datei übereinstimmt. Wenn eine Übereinstimmung gefunden wurde, gibt die Funktion `true` zurück. Wenn keine Übereinstimmung gefunden wurde, wird `false` zurückgegeben.

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

Die `returnFileSize()`-Funktion nimmt eine Zahl (der Bytes, abgerufen von der `size`-Eigenschaft der aktuellen Datei) und verwandelt sie in eine schön formatierte Größe in Bytes/KB/MB.

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
> Die "KB"- und "MB"-Einheiten hier verwenden die [SI-Präfix](https://en.wikipedia.org/wiki/Binary_prefix)-Konvention von 1KB = 1000B, ähnlich wie macOS. Unterschiedliche Systeme repräsentieren Dateigrößen unterschiedlich — zum Beispiel benutzt Ubuntu IEC-Präfixe, bei denen 1KiB = 1024B, während RAM-Spezifikationen oft SI-Präfixe verwenden, um Potenzen von zwei darzustellen (1KB = 1024B). Aus diesem Grund haben wir `1e3` (`1000`) und `1e6` (`1000000`) anstelle von `1024` und `1048576` verwendet. In Ihrer Anwendung sollten Sie das Einheitensystem klar kommunizieren, wenn die genaue Größe wichtig ist.

```js hidden
const button = document.querySelector("form button");
button.addEventListener("click", (e) => {
  e.preventDefault();
  const para = document.createElement("p");
  para.append("Image uploaded!");
  preview.replaceChildren(para);
});
```

#### Ergebnis

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
      <td><strong>Implizierte ARIA-Rolle</strong></td>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) — enthält eine Reihe anderer nützlicher Beispiele im Zusammenhang mit `<input type="file">` und der [File API](/de/docs/Web/API/File).
