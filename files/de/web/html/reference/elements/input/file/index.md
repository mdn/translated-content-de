---
title: '`<input type="file">`-Attributwert von HTML'
short-title: <input type="file">
slug: Web/HTML/Reference/Elements/input/file
l10n:
  sourceCommit: 6488b82388db9e593ec28be1d845688e29c679e1
---

{{HTMLElement("input")}}-Elemente mit **`type="file"`** ermöglichen es dem Benutzer, eine oder mehrere Dateien aus dem Speicher seines Geräts auszuwählen. Nach der Auswahl können die Dateien mithilfe der [Formularübermittlung](/de/docs/Learn_web_development/Extensions/Forms) auf einen Server hochgeladen oder mithilfe von JavaScript-Code und [der File API](/de/docs/Web/API/File_API/Using_files_from_web_applications) bearbeitet werden.

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

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut einer Dateieingabe enthält eine Zeichenfolge, die den Pfad zu den ausgewählten Dateien darstellt. Wenn noch keine Datei ausgewählt wurde, ist der Wert eine leere Zeichenfolge (`""`). Wenn der Benutzer mehrere Dateien ausgewählt hat, stellt `value` die erste Datei in der Liste der ausgewählten Dateien dar. Die anderen Dateien können über [die `HTMLInputElement.files`-Eigenschaft der Eingabe](/de/docs/Web/API/File_API/Using_files_from_web_applications#getting_information_about_selected_files) identifiziert werden.

> [!NOTE]
> Der Wert ist [immer der Name der Datei mit vorangestelltem `C:\fakepath\`](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly), was nicht der tatsächliche Pfad der Datei ist. Dadurch wird verhindert, dass Schadsoftware die Dateistruktur des Benutzers errät.

## Zusätzliche Attribute

Zusätzlich zu den gemeinsamen Attributen, die von allen {{HTMLElement("input")}}-Elementen verwendet werden, unterstützen Eingaben vom Typ `file` auch die folgenden Attribute.

### accept

Der Wert des [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)-Attributs ist eine Zeichenfolge, die die Dateitypen definiert, welche die Dateieingabe akzeptieren soll. Diese Zeichenfolge ist eine durch Kommas getrennte Liste von **[eindeutigen Dateitypspezifizierern](#eindeutige_dateitypspezifizierer)**. Da ein bestimmter Dateityp auf mehr als eine Weise identifiziert werden kann, ist es sinnvoll, einen umfassenden Satz von Typspezifizierern bereitzustellen, wenn Dateien eines bestimmten Formats benötigt werden.

Beispielsweise gibt es mehrere Möglichkeiten, Microsoft-Word-Dateien zu identifizieren. Daher könnte eine Website, die Word-Dateien akzeptiert, ein `<input>` wie dieses verwenden:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### capture

Der Wert des [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)-Attributs ist eine Zeichenfolge, die angibt, welche Kamera für die Aufnahme von Bild- oder Videodaten verwendet werden soll, wenn das [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)-Attribut angibt, dass die Eingabe einen dieser Typen haben soll. Ein Wert von `user` gibt an, dass die dem Benutzer zugewandte Kamera und/oder das Mikrofon verwendet werden soll. Ein Wert von `environment` gibt an, dass die nach außen gerichtete Kamera und/oder das Mikrofon verwendet werden soll. Fehlt dieses Attribut, kann der {{Glossary("user_agent", "User Agent")}} selbst entscheiden, was zu tun ist. Wenn der angeforderte Ausrichtungsmodus nicht verfügbar ist, kann der User Agent auf seinen bevorzugten Standardmodus zurückfallen.

> [!NOTE]
> `capture` war zuvor ein boolesches Attribut, das bei Vorhandensein anforderte, dass die Medienaufnahmegeräte des Geräts, etwa Kamera oder Mikrofon, verwendet werden, anstatt eine Dateieingabe anzufordern.

### multiple

Wenn das boolesche [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut angegeben ist, ermöglicht die Dateieingabe dem Benutzer, mehr als eine Datei auszuwählen.

### webkitdirectory

Das boolesche Attribut `webkitdirectory` zeigt, falls vorhanden, an, dass der Benutzer in der Dateiauswahloberfläche nur Verzeichnisse auswählen kann. Weitere Details und Beispiele finden Sie unter [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

> [!NOTE]
> `webkitdirectory` ist in der [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) definiert. Es heißt aufgrund seiner Herkunft als Chrome-spezifische API `webkitdirectory`. Es ist jetzt in allen Browsern verfügbar.

## Eindeutige Dateitypspezifizierer

Ein **eindeutiger Dateitypspezifizierer** ist eine Zeichenfolge, die einen Dateityp beschreibt, der vom Benutzer in einem {{HTMLElement("input")}}-Element vom Typ `file` ausgewählt werden kann. Jeder eindeutige Dateitypspezifizierer kann eine der folgenden Formen annehmen:

- Eine gültige, nicht zwischen Groß- und Kleinschreibung unterscheidende Dateinamenerweiterung, die mit einem Punktzeichen (".") beginnt. Beispielsweise: `.jpg`, `.pdf` oder `.doc`.
- Eine gültige MIME-Typ-Zeichenfolge ohne Erweiterungen.
- Die Zeichenfolge `audio/*` mit der Bedeutung „jede Audiodatei“.
- Die Zeichenfolge `video/*` mit der Bedeutung „jede Videodatei“.
- Die Zeichenfolge `image/*` mit der Bedeutung „jede Bilddatei“.

Das `accept`-Attribut nimmt als Wert eine Zeichenfolge mit einem oder mehreren dieser eindeutigen Dateitypspezifizierer, getrennt durch Kommas, an. Eine Dateiauswahl, die beispielsweise Inhalte benötigt, die als Bild dargestellt werden können, einschließlich sowohl standardmäßiger Bildformate als auch PDF-Dateien, könnte wie folgt aussehen:

```html
<input type="file" accept="image/*,.pdf" />
```

## Verwenden von Dateieingaben

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

Unabhängig vom Gerät oder Betriebssystem des Benutzers stellt die Dateieingabe eine Schaltfläche bereit, die einen Dateiauswahldialog öffnet, in dem der Benutzer eine Datei auswählen kann.

Das oben gezeigte Einbeziehen des [`multiple`](#multiple)-Attributs gibt an, dass mehrere Dateien gleichzeitig ausgewählt werden können. Der Benutzer kann auf jede von der gewählten Plattform unterstützte Weise mehrere Dateien in der Dateiauswahl auswählen, etwa durch Gedrückthalten von <kbd>Shift</kbd> oder <kbd>Control</kbd> und anschließendes Klicken. Wenn der Benutzer pro `<input>` nur eine einzelne Datei auswählen soll, lassen Sie das `multiple`-Attribut weg.

### Informationen zu ausgewählten Dateien abrufen

Die ausgewählten Dateien werden durch die `HTMLInputElement.files`-Eigenschaft des Elements zurückgegeben. Diese ist ein [`FileList`](/de/docs/Web/API/FileList)-Objekt, das eine Liste von [`File`](/de/docs/Web/API/File)-Objekten enthält. Die `FileList` verhält sich wie ein Array, sodass Sie ihre `length`-Eigenschaft prüfen können, um die Anzahl der ausgewählten Dateien zu ermitteln.

Jedes `File`-Objekt enthält die folgenden Informationen:

- `name`
  - : Der Name der Datei.
- `lastModified`
  - : Eine Zahl, die Datum und Uhrzeit der letzten Änderung der Datei angibt, in Millisekunden seit der UNIX-Epoche (1. Januar 1970 um Mitternacht).
- `lastModifiedDate` {{deprecated_inline}}
  - : Ein {{jsxref("Date")}}-Objekt, das Datum und Uhrzeit der letzten Änderung der Datei darstellt. _Dies ist veraltet und sollte nicht verwendet werden. Verwenden Sie stattdessen `lastModified`._
- `size`
  - : Die Größe der Datei in Bytes.
- `type`
  - : Der [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) der Datei.
- `webkitRelativePath` {{non-standard_inline}}
  - : Eine Zeichenfolge, die den Pfad der Datei relativ zum Basisverzeichnis angibt, das in einer Verzeichnisauswahl ausgewählt wurde, also einer `file`-Auswahl, bei der das [`webkitdirectory`](#webkitdirectory)-Attribut gesetzt ist. _Dies ist nicht standardisiert und sollte mit Vorsicht verwendet werden._

### Akzeptierte Dateitypen einschränken

Oft soll der Benutzer nicht jeden beliebigen Dateityp auswählen können; stattdessen soll er häufig Dateien eines bestimmten Typs oder bestimmter Typen auswählen. Wenn Ihre Dateieingabe Benutzern beispielsweise das Hochladen eines Profilbilds ermöglicht, sollen diese wahrscheinlich webkompatible Bildformate wie {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}} auswählen.

Akzeptable Dateitypen können mit dem [`accept`](#accept)-Attribut angegeben werden, das eine durch Kommas getrennte Liste zulässiger Dateierweiterungen oder MIME-Typen annimmt. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG- oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*`-MIME-Typ. (Viele Mobilgeräte ermöglichen dem Benutzer bei dessen Verwendung auch, mit der Kamera ein Bild aufzunehmen.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — akzeptiert alles, was wie ein MS-Word-Dokument aussieht.

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

Dies erzeugt eine Ausgabe, die dem vorherigen Beispiel ähnlich sieht:

{{EmbedLiveSample('Limiting_accepted_file_types', 650, 90)}}

Es mag ähnlich aussehen, aber wenn Sie versuchen, mit dieser Eingabe eine Datei auszuwählen, werden Sie sehen, dass die Dateiauswahl nur die im `accept`-Wert angegebenen Dateitypen auswählen lässt. Die genaue Oberfläche unterscheidet sich je nach Browser und Betriebssystem.

Das `accept`-Attribut validiert nicht die Typen der ausgewählten Dateien; es liefert Browsern Hinweise, um Benutzer zur Auswahl der richtigen Dateitypen anzuleiten. In den meisten Fällen können Benutzer dennoch eine Option in der Dateiauswahl umschalten, die es ermöglicht, dies zu überschreiben und eine beliebige Datei sowie anschließend falsche Dateitypen auszuwählen.

Daher sollten Sie sicherstellen, dass das `accept`-Attribut durch eine geeignete serverseitige Validierung abgesichert ist.

### Abbrüche erkennen

Das `cancel`-Ereignis wird ausgelöst, wenn der Benutzer seine Auswahl nicht ändert und die zuvor ausgewählten Dateien erneut auswählt. Das `cancel`-Ereignis wird auch ausgelöst, wenn der Dateiauswahldialog über die Schaltfläche „Abbrechen“ oder die Taste <kbd>escape</kbd> geschlossen oder abgebrochen wird.

Der folgende Code protokolliert beispielsweise in der Konsole, wenn der Benutzer das Popup schließt, ohne eine Datei auszuwählen:

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

1. Sie können den Wert einer Dateiauswahl nicht über ein Skript setzen — etwa Folgendes hat keine Wirkung:

   ```js
   const input = document.querySelector("input[type=file]");
   input.value = "foo";
   ```

2. Wenn eine Datei über ein `<input type="file">` ausgewählt wird, wird der tatsächliche Pfad zur Quelldatei aus offensichtlichen Sicherheitsgründen nicht im `value`-Attribut der Eingabe angezeigt. Stattdessen wird der Dateiname mit vorangestelltem `C:\fakepath\` angezeigt. Für dieses ungewöhnliche Verhalten gibt es einige historische Gründe, aber es wird von allen modernen Browsern unterstützt und ist tatsächlich [in der Spezifikation definiert](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly).

## Beispiele

### Vollständiges Dateibeispiel

In diesem Beispiel zeigen wir eine etwas fortgeschrittenere Dateiauswahl, die die in der `HTMLInputElement.files`-Eigenschaft verfügbaren Dateiinformationen nutzt und außerdem einige clevere Techniken demonstriert.

#### HTML

Das HTML sieht wie folgt aus:

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

Dies ähnelt dem, was wir zuvor gesehen haben, daher werden wir keine Zeit darauf verwenden, es zu beschreiben. Außerdem haben wir das auf das Beispiel angewendete CSS ausgeblendet, da es für das Verständnis der Dateieingabe oder des JavaScript, das sie steuert, nicht relevant ist.

#### JavaScript

In den ersten Zeilen des Skripts erhalten wir Referenzen auf die Formulareingabe selbst und auf das {{htmlelement("div")}}-Element mit der Klasse `.preview`. Als Nächstes blenden wir das {{htmlelement("input")}}-Element aus — dies tun wir, weil Dateieingaben oft unansehnlich, schwer zu gestalten und in ihrem Design zwischen Browsern uneinheitlich sind. Sie können das `input`-Element durch Klicken auf sein {{htmlelement("label")}} aktivieren. Daher ist es besser, das `input` visuell auszublenden und das Label wie eine Schaltfläche zu gestalten, damit der Benutzer weiß, dass er damit interagieren muss, wenn er Dateien hochladen möchte.

```js
const input = document.querySelector("input");
const preview = document.querySelector(".preview");

input.style.opacity = 0;
```

> [!NOTE]
> {{cssxref("opacity")}} wird verwendet, um die Dateieingabe auszublenden, anstelle von {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}}, weil assistive Technologien die beiden letzteren Stile so interpretieren, dass die Dateieingabe nicht interaktiv ist.

Als Nächstes fügen wir der Eingabe einen [Event Listener](/de/docs/Web/API/EventTarget/addEventListener) hinzu, um auf Änderungen ihres ausgewählten Werts zu warten, in diesem Fall, wenn Dateien ausgewählt werden. Der Event Listener ruft unsere benutzerdefinierte Funktion `updateImageDisplay()` auf.

```js
input.addEventListener("change", updateImageDisplay);
```

Immer wenn die Funktion `updateImageDisplay()` aufgerufen wird, führen wir Folgendes aus:

- Wir verwenden eine {{jsxref("Statements/while", "while")}}-Schleife, um den vorherigen Inhalt des Vorschau-`<div>` zu leeren.
- Wir rufen das [`FileList`](/de/docs/Web/API/FileList)-Objekt ab, das die Informationen zu allen ausgewählten Dateien enthält, und speichern es in einer Variablen namens `curFiles`.
- Wir prüfen, ob keine Dateien ausgewählt wurden, indem wir überprüfen, ob `curFiles.length` gleich 0 ist. Falls dies der Fall ist, geben wir im Vorschau-`<div>` eine Meldung aus, dass keine Dateien ausgewählt wurden.
- Wenn Dateien ausgewählt wurden, durchlaufen wir jede einzelne und geben Informationen dazu im Vorschau-`<div>` aus. Dabei sind folgende Dinge zu beachten:
- Wir verwenden die benutzerdefinierte Funktion `validFileType()`, um zu prüfen, ob die Datei den richtigen Typ hat, etwa einen der im `accept`-Attribut angegebenen Bildtypen.
- Falls dies der Fall ist, führen wir Folgendes aus:
  - Wir geben ihren Namen und ihre Dateigröße in einem Listenelement innerhalb des vorherigen `<div>` aus, abgerufen über `file.name` und `file.size`. Die benutzerdefinierte Funktion `returnFileSize()` gibt eine gut formatierte Version der Größe in Bytes/KB/MB zurück. Standardmäßig meldet der Browser die Größe in absoluten Bytes.
  - Wir erzeugen eine Miniaturvorschau des Bildes durch Aufrufen von [`URL.createObjectURL(file)`](/de/docs/Web/API/URL/createObjectURL_static). Anschließend fügen wir das Bild ebenfalls in das Listenelement ein, indem wir ein neues {{htmlelement("img")}} erstellen und dessen [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) auf die Miniaturansicht setzen.

- Wenn der Dateityp ungültig ist, zeigen wir in einem Listenelement eine Meldung an, die dem Benutzer mitteilt, dass er einen anderen Dateityp auswählen muss.

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

Die benutzerdefinierte Funktion `validFileType()` nimmt ein [`File`](/de/docs/Web/API/File)-Objekt als Parameter entgegen und verwendet dann {{jsxref("Array.prototype.includes()")}}, um zu prüfen, ob ein Wert in `fileTypes` mit der `type`-Eigenschaft der Datei übereinstimmt. Wird eine Übereinstimmung gefunden, gibt die Funktion `true` zurück. Wird keine Übereinstimmung gefunden, gibt sie `false` zurück.

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

Die Funktion `returnFileSize()` nimmt eine Zahl entgegen, nämlich die Anzahl der Bytes aus der `size`-Eigenschaft der aktuellen Datei, und wandelt sie in eine gut formatierte Größe in Bytes/KB/MB um.

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
> Die Einheiten „KB“ und „MB“ verwenden hier die Konvention des [SI-Präfixes](https://en.wikipedia.org/wiki/Binary_prefix) von 1 KB = 1000 B, ähnlich wie macOS. Verschiedene Systeme stellen Dateigrößen unterschiedlich dar — Ubuntu verwendet beispielsweise IEC-Präfixe, bei denen 1 KiB = 1024 B, während RAM-Spezifikationen häufig SI-Präfixe verwenden, um Zweierpotenzen darzustellen (1 KB = 1024 B). Aus diesem Grund verwenden wir `1e3` (`1000`) und `1e6` (`100000`) statt `1024` und `1048576`. In Ihrer Anwendung sollten Sie Ihren Benutzern das Einheitensystem klar kommunizieren, wenn die genaue Größe wichtig ist.

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

- [Verwenden von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) — enthält eine Reihe weiterer nützlicher Beispiele zu `<input type="file">` und der [File API](/de/docs/Web/API/File).
