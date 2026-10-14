---
title: HTML-Attributwert `<input type="file">`
short-title: <input type="file">
slug: Web/HTML/Reference/Elements/input/file
l10n:
  sourceCommit: 46afd57950146568819d0bf98175a2ffdbe079d7
---

{{HTMLElement("input")}}-Elemente mit **`type="file"`** ermöglichen es Benutzern, eine oder mehrere Dateien vom Speicher ihres Geräts auszuwählen. Nach der Auswahl können die Dateien über eine [Formularübermittlung](/de/docs/Learn_web_development/Extensions/Forms) auf einen Server hochgeladen oder mit JavaScript-Code und der [File API](/de/docs/Web/API/File_API/Using_files_from_web_applications) verarbeitet werden.

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

Das Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) eines Dateieingabefelds enthält eine Zeichenfolge, die den Pfad zu den ausgewählten Dateien darstellt. Wenn noch keine Datei ausgewählt wurde, ist der Wert eine leere Zeichenfolge (`""`). Wenn Benutzer mehrere Dateien ausgewählt haben, bezieht sich `value` auf die erste Datei in der Liste der ausgewählten Dateien. Die anderen Dateien lassen sich über die [Eigenschaft `HTMLInputElement.files` des Eingabefelds](/de/docs/Web/API/File_API/Using_files_from_web_applications#getting_information_about_selected_files) ermitteln.

> [!NOTE]
> Der Wert ist [immer der Dateiname mit dem vorangestellten Präfix `C:\fakepath\`](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly), nicht der tatsächliche Pfad der Datei. Dadurch wird verhindert, dass bösartige Software Rückschlüsse auf die Dateistruktur der Benutzer ziehen kann.

## Zusätzliche Attribute

Neben den gemeinsamen Attributen aller {{HTMLElement("input")}}-Elemente unterstützen Eingabefelder vom Typ `file` auch die folgenden Attribute.

### accept

Der Wert des Attributs [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept) ist eine Zeichenfolge, die festlegt, welche Dateitypen das Dateieingabefeld akzeptieren soll. Diese Zeichenfolge ist eine durch Kommas getrennte Liste **[eindeutiger Dateitypbezeichner](#eindeutige_dateitypbezeichner)**. Da ein bestimmter Dateityp auf mehr als eine Weise identifiziert werden kann, empfiehlt es sich, mehrere passende Bezeichner anzugeben, wenn Sie Dateien eines bestimmten Formats benötigen.

Microsoft-Word-Dateien lassen sich beispielsweise auf verschiedene Weise identifizieren. Eine Website, die Word-Dateien akzeptiert, könnte daher ein `<input>` wie dieses verwenden:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### capture

Der Wert des Attributs [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture) ist eine Zeichenfolge, die festlegt, welche Kamera zum Aufnehmen von Bild- oder Videodaten verwendet werden soll, sofern das Attribut [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept) angibt, dass das Eingabefeld einen dieser Typen akzeptieren soll. Der Wert `user` gibt an, dass die dem Benutzer zugewandte Kamera und/oder das entsprechende Mikrofon verwendet werden soll. Der Wert `environment` legt fest, dass die nach außen gerichtete Kamera und/oder das entsprechende Mikrofon verwendet werden soll. Fehlt dieses Attribut, kann der {{Glossary("user_agent", "User Agent")}} selbst entscheiden, wie er vorgeht. Ist die angeforderte Ausrichtung nicht verfügbar, kann der User Agent auf seinen bevorzugten Standardmodus zurückgreifen.

> [!NOTE]
> `capture` war früher ein boolesches Attribut. Wenn es vorhanden war, wurde statt einer Dateiauswahl die Verwendung von Medienaufnahmegeräten wie Kamera oder Mikrofon angefordert.

### multiple

Wenn das boolesche Attribut [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) angegeben ist, können Benutzer im Dateieingabefeld mehr als eine Datei auswählen.

### webkitdirectory

Das boolesche Attribut `webkitdirectory` gibt, sofern vorhanden, an, dass in der Dateiauswahl nur Verzeichnisse zur Auswahl stehen sollen. Weitere Informationen und Beispiele finden Sie unter [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

> [!NOTE]
> `webkitdirectory` ist in der [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) definiert. Der Name `webkitdirectory` geht darauf zurück, dass es ursprünglich eine Chrome-spezifische API war. Inzwischen ist es in allen Browsern verfügbar.

## Eindeutige Dateitypbezeichner

Ein **eindeutiger Dateitypbezeichner** ist eine Zeichenfolge, die einen Dateityp beschreibt, den Benutzer in einem {{HTMLElement("input")}}-Element vom Typ `file` auswählen können. Jeder eindeutige Dateitypbezeichner kann eine der folgenden Formen haben:

- Eine gültige Dateiendung, bei der die Groß- und Kleinschreibung keine Rolle spielt und die mit einem Punkt („.“) beginnt. Zum Beispiel: `.jpg`, `.pdf` oder `.doc`.
- Eine gültige MIME-Typ-Zeichenfolge ohne Erweiterungen.
- Die Zeichenfolge `audio/*` für „beliebige Audiodatei“.
- Die Zeichenfolge `video/*` für „beliebige Videodatei“.
- Die Zeichenfolge `image/*` für „beliebige Bilddatei“.

Das Attribut `accept` erhält als Wert eine Zeichenfolge mit einem oder mehreren dieser eindeutigen Dateitypbezeichner, die durch Kommas getrennt sind. Eine Dateiauswahl, die Inhalte benötigt, die als Bild dargestellt werden können – einschließlich gängiger Bildformate und PDF-Dateien –, könnte beispielsweise so aussehen:

```html
<input type="file" accept="image/*,.pdf" />
```

## Dateieingabefelder verwenden

### Ein einfaches Beispiel

```html
<div>
  <label for="file">Choose file to upload</label>
  <input type="file" id="file" name="file" multiple />
</div>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

Dies ergibt die folgende Ausgabe:

{{EmbedLiveSample('A_basic_example', 650, 90)}}

Unabhängig vom Gerät oder Betriebssystem der Benutzer stellt das Dateieingabefeld eine Schaltfläche bereit, die ein Dialogfeld zur Dateiauswahl öffnet.

Das oben gezeigte Attribut [`multiple`](#multiple) legt fest, dass mehrere Dateien gleichzeitig ausgewählt werden können. Benutzer können mehrere Dateien auf jede Weise auswählen, die ihre Plattform unterstützt (etwa indem sie <kbd>Umschalt</kbd> oder <kbd>Strg</kbd> gedrückt halten und dann klicken). Wenn pro `<input>` nur eine Datei ausgewählt werden soll, lassen Sie das Attribut `multiple` weg.

### Informationen zu ausgewählten Dateien abrufen

Die ausgewählten Dateien werden über die Eigenschaft `HTMLInputElement.files` des Elements bereitgestellt. Sie enthält ein [`FileList`](/de/docs/Web/API/FileList)-Objekt mit einer Liste von [`File`](/de/docs/Web/API/File)-Objekten. `FileList` verhält sich wie ein Array; über seine Eigenschaft `length` können Sie daher die Anzahl der ausgewählten Dateien ermitteln.

Jedes `File`-Objekt enthält die folgenden Informationen:

- `name`
  - : Den Namen der Datei.
- `lastModified`
  - : Eine Zahl, die angibt, wann die Datei zuletzt geändert wurde, in Millisekunden seit Beginn der UNIX-Epoche (1. Januar 1970 um Mitternacht).
- `lastModifiedDate` {{deprecated_inline}}
  - : Ein {{jsxref("Date")}}-Objekt, das angibt, wann die Datei zuletzt geändert wurde. _Diese Eigenschaft ist veraltet und sollte nicht verwendet werden. Verwenden Sie stattdessen `lastModified`._
- `size`
  - : Die Größe der Datei in Bytes.
- `type`
  - : Den [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) der Datei.
- `webkitRelativePath` {{non-standard_inline}}
  - : Eine Zeichenfolge, die den Pfad der Datei relativ zum Basisverzeichnis angibt, das in einer Verzeichnisauswahl ausgewählt wurde (also in einer `file`-Auswahl mit gesetztem Attribut [`webkitdirectory`](#webkitdirectory)). _Diese Eigenschaft ist nicht standardisiert und sollte mit Vorsicht verwendet werden._

### Akzeptierte Dateitypen einschränken

Häufig sollen Benutzer nicht jeden beliebigen Dateityp auswählen können, sondern Dateien eines oder mehrerer bestimmter Typen. Wenn Benutzer über Ihr Dateieingabefeld beispielsweise ein Profilbild hochladen können, möchten Sie vermutlich, dass sie webkompatible Bildformate wie {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}} auswählen.

Zulässige Dateitypen können Sie mit dem Attribut [`accept`](#accept) festlegen. Es erhält eine durch Kommas getrennte Liste zulässiger Dateiendungen oder MIME-Typen. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG- oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem MIME-Typ `image/*`. (Auf vielen Mobilgeräten können Benutzer damit auch ein Foto mit der Kamera aufnehmen.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — Akzeptiert Dateien, die als MS-Word-Dokumente infrage kommen.

Sehen wir uns ein ausführlicheres Beispiel an:

```html
<div>
  <label for="profile_pic">Choose file to upload</label>
  <input
    type="file"
    id="profile_pic"
    name="profile_pic"
    accept=".jpg, .jpeg, .png" />
</div>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

Dies ergibt eine Ausgabe, die dem vorherigen Beispiel ähnelt:

{{EmbedLiveSample('Limiting_accepted_file_types', 650, 90)}}

Das Ergebnis sieht zwar ähnlich aus, doch wenn Sie versuchen, über dieses Eingabefeld eine Datei auszuwählen, werden Sie feststellen, dass die Dateiauswahl nur die im Wert von `accept` angegebenen Dateitypen auswählen lässt (die genaue Benutzeroberfläche hängt vom Browser und Betriebssystem ab).

Das Attribut `accept` validiert die Typen der ausgewählten Dateien nicht. Es gibt Browsern lediglich Hinweise, damit diese Benutzer bei der Auswahl der richtigen Dateitypen unterstützen können. In den meisten Fällen können Benutzer in der Dateiauswahl eine Option aktivieren, mit der sie diese Einschränkung umgehen und beliebige Dateien auswählen können – auch solche mit einem falschen Dateityp.

Stellen Sie deshalb sicher, dass das Attribut `accept` durch eine geeignete serverseitige Validierung ergänzt wird.

### Abbrüche erkennen

Das Ereignis `cancel` wird ausgelöst, wenn Benutzer ihre Auswahl nicht ändern, sondern die zuvor ausgewählten Dateien erneut auswählen. Das Ereignis `cancel` wird auch ausgelöst, wenn das Dialogfeld zur Dateiauswahl geschlossen oder über die Schaltfläche „Abbrechen“ beziehungsweise die Taste <kbd>Esc</kbd> abgebrochen wird.

Der folgende Code schreibt beispielsweise eine Meldung in die Konsole, wenn Benutzer das Dialogfeld schließen, ohne eine Datei auszuwählen:

```js
const elem = document.createElement("input");
elem.type = "file";
elem.addEventListener("cancel", () => {
  console.log("Canceled.");
});
elem.addEventListener("change", () => {
  if (elem.files.length === 1) {
    console.log("File selected: ", elem.files[0]);
  }
});
elem.click();
```

### Hinweise

1. Sie können den Wert einer Dateiauswahl nicht über ein Skript setzen – ein Versuch wie der folgende hat keine Wirkung:

   ```js
   const input = document.querySelector("input[type=file]");
   input.value = "foo";
   ```

2. Wenn eine Datei über ein `<input type="file">` ausgewählt wird, erscheint der tatsächliche Pfad zur Quelldatei aus naheliegenden Sicherheitsgründen nicht im Attribut `value` des Eingabefelds. Stattdessen wird der Dateiname mit vorangestelltem `C:\fakepath\` angezeigt. Diese Besonderheit hat historische Gründe, wird aber von allen modernen Browsern unterstützt und ist sogar [in der Spezifikation definiert](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly).

## Beispiele

### Vollständiges Dateibeispiel

In diesem Beispiel erstellen wir eine etwas erweiterte Dateiauswahl. Sie nutzt die Dateiinformationen aus der Eigenschaft `HTMLInputElement.files` und zeigt einige nützliche Kniffe.

#### HTML

Das HTML sieht so aus:

```html
<div class="file-picker">
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
    <button type="button">Submit</button>
  </div>
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

.file-picker {
  background: #cccccc;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid black;
}

.file-picker ol {
  padding-left: 0;
}

.file-picker li,
div > p {
  background: #eeeeee;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  list-style-type: none;
  border: 1px solid black;
}

.file-picker img {
  height: 64px;
  order: 1;
}

.file-picker p {
  line-height: 32px;
  padding-left: 10px;
}

.file-picker label,
.file-picker button {
  background-color: #7f9ccb;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px ridge black;
  font-size: 0.8rem;
  height: auto;
}

.file-picker label:hover,
.file-picker button:hover {
  background-color: #2d5ba3;
  color: white;
}

.file-picker label:active,
.file-picker button:active {
  background-color: #0d3f8f;
  color: white;
}
```

Dies ähnelt dem, was wir bereits gesehen haben, daher gehen wir nicht näher darauf ein. Das auf das Beispiel angewendete CSS haben wir ebenfalls ausgeblendet, da es für das Verständnis des Dateieingabefelds und des zugehörigen JavaScripts nicht relevant ist.

#### JavaScript

In den ersten Skriptzeilen holen wir Referenzen auf das Formulareingabefeld selbst und auf das {{htmlelement("div")}}-Element mit der Klasse `.preview`. Anschließend blenden wir das {{htmlelement("input")}}-Element aus. Dateieingabefelder sind häufig wenig ansprechend, schwer zu gestalten und unterscheiden sich im Design zwischen Browsern. Das `input`-Element lässt sich durch einen Klick auf sein {{htmlelement("label")}} aktivieren. Daher ist es besser, das `input` visuell auszublenden und das Label wie eine Schaltfläche zu gestalten. So erkennen Benutzer, womit sie interagieren müssen, um Dateien hochzuladen.

```js
const input = document.querySelector("input");
const preview = document.querySelector(".preview");

input.style.opacity = 0;
```

> [!NOTE]
> Zum Ausblenden des Dateieingabefelds wird {{cssxref("opacity")}} anstelle von {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}} verwendet. Hilfstechnologien interpretieren die beiden letztgenannten Stile nämlich so, dass das Dateieingabefeld nicht interaktiv ist.

Als Nächstes fügen wir dem Eingabefeld einen [Event Listener](/de/docs/Web/API/EventTarget/addEventListener) hinzu, der auf Änderungen der Auswahl reagiert (in diesem Fall auf die Auswahl von Dateien). Der Event Listener ruft unsere benutzerdefinierte Funktion `updateImageDisplay()` auf.

```js
input.addEventListener("change", updateImageDisplay);
```

Bei jedem Aufruf der Funktion `updateImageDisplay()` gehen wir wie folgt vor:

- Wir verwenden eine {{jsxref("Statements/while", "while")}}-Schleife, um den bisherigen Inhalt des Vorschau-`<div>` zu entfernen.
- Wir holen das [`FileList`](/de/docs/Web/API/FileList)-Objekt mit den Informationen zu allen ausgewählten Dateien und speichern es in einer Variablen namens `curFiles`.
- Wir prüfen anhand von `curFiles.length`, ob keine Dateien ausgewählt wurden. Ist der Wert gleich 0, geben wir im Vorschau-`<div>` eine entsprechende Meldung aus.
- _Wurden_ Dateien ausgewählt, durchlaufen wir sie einzeln und geben Informationen zu jeder Datei im Vorschau-`<div>` aus. Dabei ist Folgendes zu beachten:
  - Mit der benutzerdefinierten Funktion `validFileType()` prüfen wir, ob die Datei den richtigen Typ hat (etwa einen der im Attribut `accept` angegebenen Bildtypen).
  - Ist dies der Fall:
    - Wir geben den Namen und die Dateigröße in einem Listeneintrag innerhalb des zuvor genannten `<div>` aus (aus `file.name` und `file.size`). Die benutzerdefinierte Funktion `returnFileSize()` gibt die Größe formatiert in Bytes/KB/MB zurück (standardmäßig meldet der Browser die Größe als absolute Bytezahl).
    - Wir erzeugen mit [`URL.createObjectURL(file)`](/de/docs/Web/API/URL/createObjectURL_static) ein Vorschaubild. Anschließend fügen wir es ebenfalls in den Listeneintrag ein, indem wir ein neues {{htmlelement("img")}}-Element erstellen und dessen [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) auf das Vorschaubild setzen.
- Ist der Dateityp ungültig, zeigen wir in einem Listeneintrag eine Meldung an, die Benutzer auffordert, einen anderen Dateityp auszuwählen.

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

Die benutzerdefinierte Funktion `validFileType()` nimmt ein [`File`](/de/docs/Web/API/File)-Objekt als Parameter entgegen. Anschließend prüft sie mit {{jsxref("Array.prototype.includes()")}}, ob ein Wert in `fileTypes` mit der Eigenschaft `type` der Datei übereinstimmt. Wird eine Übereinstimmung gefunden, gibt die Funktion `true` zurück, andernfalls `false`.

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

Die Funktion `returnFileSize()` nimmt eine Zahl entgegen (die Anzahl der Bytes aus der Eigenschaft `size` der aktuellen Datei) und wandelt sie in eine formatierte Größenangabe in Bytes/KB/MB um.

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
> Die Einheiten „KB“ und „MB“ folgen hier der Konvention der [SI-Präfixe](https://en.wikipedia.org/wiki/Binary_prefix), bei der 1 KB = 1000 B gilt, ähnlich wie bei macOS. Andere Systeme stellen Dateigrößen anders dar: Ubuntu verwendet beispielsweise IEC-Präfixe mit 1 KiB = 1024 B, während in RAM-Spezifikationen häufig SI-Präfixe für Zweierpotenzen verwendet werden (1 KB = 1024 B). Deshalb haben wir `1e3` (`1000`) und `1e6` (`100000`) statt `1024` und `1048576` verwendet. Wenn die genaue Größe in Ihrer Anwendung wichtig ist, sollten Sie den Benutzern klar mitteilen, welches Einheitensystem verwendet wird.

```js hidden
const button = document.querySelector(".file-picker button");
button.addEventListener("click", () => {
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
        Eine Zeichenfolge, die den Pfad zur ausgewählten
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

- [Dateien aus Webanwendungen verwenden](/de/docs/Web/API/File_API/Using_files_from_web_applications) — enthält weitere nützliche Beispiele zu `<input type="file">` und der [File API](/de/docs/Web/API/File).
