---
title: '`<input type="file">` HTML-Attributwert'
short-title: <input type="file">
slug: Web/HTML/Reference/Elements/input/file
l10n:
  sourceCommit: 30221c85132f8cb77ca73fbb033100cc2f10bba7
---

{{HTMLElement("input")}}-Elemente mit **`type="file"`** ermöglichen es dem Benutzer, eine oder mehrere Dateien aus dem Gerätespeicher auszuwählen. Sobald die Dateien ausgewählt sind, können sie über den [Formularversand](/de/docs/Learn_web_development/Extensions/Forms) auf einen Server hochgeladen oder mit JavaScript-Code und [der File API](/de/docs/Web/API/File_API/Using_files_from_web_applications) manipuliert werden.

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

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut eines Datei-Eingabefeldes enthält eine Zeichenkette, die den Pfad zu den ausgewählten Datei(en) repräsentiert. Wenn noch keine Datei ausgewählt wurde, ist der Wert eine leere Zeichenkette (`""`). Wenn der Benutzer mehrere Dateien ausgewählt hat, repräsentiert der `value` die erste Datei in der Liste der ausgewählten Dateien. Die anderen Dateien können mit der [`HTMLInputElement.files`-Eigenschaft des Eingabeelements](/de/docs/Web/API/File_API/Using_files_from_web_applications#getting_information_about_selected_files) identifiziert werden.

> [!NOTE]
> Der Wert ist [immer der Dateiname mit `C:\fakepath\` als Präfix](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly), was nicht der echte Pfad der Datei ist. Dies dient dazu, bösartige Software daran zu hindern, die Dateistruktur der Benutzer zu erraten.

## Zusätzliche Attribute

Neben den gemeinsamen Attributen, die alle {{HTMLElement("input")}}-Elemente gemeinsam haben, unterstützen Eingaben vom Typ `file` auch die folgenden Attribute.

### accept

Der Wert des [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)-Attributs ist eine Zeichenkette, die die Dateitypen definiert, die das Dateieingabefeld akzeptieren sollte. Diese Zeichenkette ist eine kommagetrennte Liste von **[einzigartigen Dateitypspezifikatoren](#einzigartige_dateitypspezifikatoren)**. Da ein bestimmter Dateityp auf mehr als eine Weise identifiziert werden kann, ist es nützlich, eine umfassende Reihe von Typspezifikatoren bereitzustellen, wenn Sie Dateien eines bestimmten Formats benötigen.

Zum Beispiel gibt es mehrere Möglichkeiten, Microsoft Word-Dateien zu identifizieren, daher könnte eine Website, die Word-Dateien akzeptiert, ein `<input>` wie folgt verwenden:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### capture

Der Wert des [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)-Attributs ist eine Zeichenkette, die angibt, welche Kamera für die Erfassung von Bild- oder Videodaten verwendet werden soll, wenn das [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)-Attribut angibt, dass die Eingabe eine dieser Typen sein soll. Ein Wert von `user` gibt an, dass die benutzerorientierte Kamera und/oder das Mikrofon verwendet werden sollten. Ein Wert von `environment` gibt an, dass die nach außen gerichtete Kamera und/oder das Mikrofon verwendet werden sollen. Wenn dieses Attribut fehlt, kann der {{Glossary("user_agent", "User Agent")}} selbst entscheiden, was er tun soll. Wenn der angeforderte Ausrichtungstyp nicht verfügbar ist, kann der User Agent auf seinen bevorzugten Standardmodus zurückgreifen.

> [!NOTE]
> `capture` war zuvor ein Boolean-Attribut, das, wenn vorhanden, anforderte, dass das Medienaufnahmegerät des Geräts, wie Kamera oder Mikrofon, anstelle eines Dateieingabefelds verwendet wird.

### multiple

Wenn das Boolean-Attribut [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) angegeben ist, ermöglicht das Datei-Eingabefeld dem Benutzer, mehr als eine Datei auszuwählen.

## Nicht standardisierte Attribute

Zusätzlich zu den oben aufgeführten Attributen sind die folgenden nicht standardisierten Attribute in einigen Browsern verfügbar. Sie sollten versuchen, sie zu vermeiden, da dies die Fähigkeit Ihres Codes einschränkt, in Browsern zu funktionieren, die sie nicht implementiert haben.

### `webkitdirectory`

Das Boolean-Attribut `webkitdirectory`, falls vorhanden, zeigt an, dass in der Dateiauswahloberfläche nur Verzeichnisse vom Benutzer ausgewählt werden können. Weitere Details und Beispiele finden Sie unter [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

## Einzigartige Dateitypspezifikatoren

Ein **einzigartiger Dateitypspezifikator** ist eine Zeichenkette, die eine Art von Datei beschreibt, die der Benutzer in einem {{HTMLElement("input")}}-Element vom Typ `file` auswählen kann. Jeder einzigartige Dateitypspezifikator kann eine der folgenden Formen annehmen:

- Eine gültige, nicht groß- und kleinschreibungssensitive Dateierweiterung, beginnend mit einem Punkt ("."). Zum Beispiel: `.jpg`, `.pdf` oder `.doc`.
- Eine gültige MIME-Typ-Zeichenkette, ohne Erweiterungen.
- Die Zeichenkette `audio/*`, was "jede Audiodatei" bedeutet.
- Die Zeichenkette `video/*`, was "jede Videodatei" bedeutet.
- Die Zeichenkette `image/*`, was "jede Bilddatei" bedeutet.

Das `accept`-Attribut nimmt eine Zeichenkette, die einen oder mehrere dieser einzigartigen Dateitypspezifikatoren enthält, als seinen Wert, getrennt durch Kommas. Zum Beispiel könnte ein Dateiauswahlfeld, das Inhalte benötigt, die als ein Bild dargestellt werden können, sowohl Standardbildformate als auch PDF-Dateien, so aussehen:

```html
<input type="file" accept="image/*,.pdf" />
```

## Verwenden von Datei-Eingaben

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
> Sie können dieses Beispiel auch auf GitHub finden — siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html) und [sehen Sie sich es live an](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Unabhängig vom Gerät oder Betriebssystem des Benutzers bietet die Datei-Eingabe eine Schaltfläche, die ein Dateiauswahl-Dialogfenster öffnet, das es dem Benutzer ermöglicht, eine Datei auszuwählen.

Wenn Sie ein Attribut wie [`multiple`](#multiple) einfügen, wie oben gezeigt, können mehrere Dateien auf einmal ausgewählt werden. Der Benutzer kann mehrere Dateien aus der Dateiauswahl auf jede Weise auswählen, die seine gewählte Plattform zulässt (z.B. durch Halten von <kbd>Shift</kbd> oder <kbd>Control</kbd> und dann Klicken). Wenn Sie möchten, dass der Benutzer nur eine einzige Datei pro `<input>` auswählt, lassen Sie das `multiple`-Attribut weg.

### Informationen zu ausgewählten Dateien abrufen

Die ausgewählten Dateien werden durch die `HTMLInputElement.files`-Eigenschaft des Elements zurückgegeben, die ein [`FileList`](/de/docs/Web/API/FileList)-Objekt ist, das eine Liste von [`File`](/de/docs/Web/API/File)-Objekten enthält. Das `FileList`-Objekt verhält sich wie ein Array, sodass Sie seine `length`-Eigenschaft überprüfen können, um die Anzahl der ausgewählten Dateien zu erhalten.

Jedes `File`-Objekt enthält die folgenden Informationen:

- `name`
  - : Der Dateiname.
- `lastModified`
  - : Eine Zahl, die das Datum und die Uhrzeit angibt, zu der die Datei zuletzt geändert wurde, in Millisekunden seit der UNIX-Epoche (1. Januar 1970, Mitternacht).
- `lastModifiedDate` {{deprecated_inline}}
  - : Ein {{jsxref("Date")}}-Objekt, das das Datum und die Uhrzeit darstellt, zu der die Datei zuletzt geändert wurde. _Dies ist veraltet und sollte nicht verwendet werden. Verwenden Sie stattdessen `lastModified`._
- `size`
  - : Die Größe der Datei in Bytes.
- `type`
  - : Der [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) der Datei.
- `webkitRelativePath` {{non-standard_inline}}
  - : Eine Zeichenkette, die den relativen Pfad der Datei zum Basisverzeichnis angibt, das in einem Verzeichnisauswahldialog ausgewählt wurde (d.h. ein `file`-Picker, bei dem das [`webkitdirectory`](#webkitdirectory)-Attribut gesetzt ist). _Dies ist nicht standardisiert und sollte mit Vorsicht verwendet werden._

### Akzeptierte Dateitypen einschränken

Oft möchten Sie nicht, dass der Benutzer irgendeinen beliebigen Dateityp auswählen kann; stattdessen möchten Sie oft, dass er Dateien eines bestimmten Typs oder Typs auswählt. Zum Beispiel, wenn Ihre Datei-Eingabe es Benutzern ermöglicht, ein Profilbild hochzuladen, möchten Sie wahrscheinlich, dass sie webkompatible Bildformate auswählen, wie {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}}.

Erlaubte Dateitypen können mit dem [`accept`](#accept)-Attribut angegeben werden, das eine kommagetrennte Liste von zulässigen Dateierweiterungen oder MIME-Typen akzeptiert. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG- oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*` MIME-Typ. (Viele mobile Geräte erlauben dem Benutzer auch, mit der Kamera ein Bild aufzunehmen, wenn dies verwendet wird.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — akzeptiert alles, was nach einem MS Word-Dokument riecht.

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
> Sie können dieses Beispiel auch auf GitHub finden — siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-with-accept.html) und [sehen Sie sich es live an](https://mdn.github.io/learning-area/html/forms/file-examples/file-with-accept.html).

Es mag ähnlich aussehen, aber wenn Sie versuchen, eine Datei mit diesem Eingabefeld auszuwählen, sehen Sie, dass der Dateiauswähler es Ihnen nur erlaubt, die Dateitypen auszuwählen, die im `accept`-Wert angegeben sind (die genaue Schnittstelle unterscheidet sich je nach Browser und Betriebssystem).

Das `accept`-Attribut validiert die Typen der ausgewählten Dateien nicht; es bietet Hinweise für Browser, um Benutzer zur Auswahl der richtigen Dateitypen zu führen. Es ist immer noch möglich (in den meisten Fällen), dass Benutzer eine Option im Dateiauswahlfenster umschalten können, die es ermöglicht, dies zu überschreiben und jede gewünschte Datei auszuwählen, und dann falsche Dateitypen auszuwählen.

Aus diesem Grund sollten Sie sicherstellen, dass das `accept`-Attribut durch eine entsprechende Server-seitige Validierung unterstützt wird.

### Erkennungen von Abbrüchen

Das `cancel`-Ereignis wird ausgelöst, wenn der Benutzer seine Auswahl nicht ändert und erneut die zuvor ausgewählten Dateien auswählt. Das `cancel`-Ereignis wird auch ausgelöst, wenn das Dateiauswahl-Dialogfenster geschlossen oder über die "Abbrechen"-Schaltfläche oder die <kbd>Escape</kbd>-Taste abgebrochen wird.

Zum Beispiel wird der folgende Code in der Konsole protokollieren, wenn der Benutzer das Popup schließt, ohne eine Datei auszuwählen:

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

1. Sie können den Wert einer Dateiauswahl nicht über ein Skript festlegen — etwas wie das Folgende hat keine Wirkung:

   ```js
   const input = document.querySelector("input[type=file]");
   input.value = "foo";
   ```

2. Wenn eine Datei mit einem `<input type="file">` ausgewählt wird, wird aus offensichtlichen Sicherheitsgründen nicht der echte Pfad zur Quelldatei im `value`-Attribut der Eingabe angezeigt. Stattdessen wird der Dateiname angezeigt, mit `C:\fakepath\` davor. Es gibt einige historische Gründe für diese Eigenart, aber sie wird in allen modernen Browsern unterstützt und ist tatsächlich [in den Spezifikationen definiert](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly).

## Beispiele

In diesem Beispiel werden wir einen etwas fortgeschritteneren Dateiauswähler präsentieren, der die Datei-Informationen nutzt, die in der `HTMLInputElement.files`-Eigenschaft verfügbar sind, sowie einige clevere Tricks zeigt.

> [!NOTE]
> Sie können den vollständigen Quellcode für dieses Beispiel auf GitHub sehen — [file-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-example.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/file-examples/file-example.html)). Wir werden das CSS nicht erklären; der Fokus liegt hauptsächlich auf JavaScript.

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

Dies ist ähnlich wie das, was wir zuvor gesehen haben — nichts besonderes zu kommentieren.

Als nächstes gehen wir durch das JavaScript.

In den ersten Zeilen des Skripts holen wir uns Referenzen zu der Formulareingabe selbst und dem {{htmlelement("div")}}-Element mit der Klasse `.preview`. Dann verstecken wir das {{htmlelement("input")}}-Element — wir tun dies, weil Datei-Eingaben oft hässlich, schwer zu stylen und im Design über Browser hinweg inkonsistent sind. Sie können das `input`-Element aktivieren, indem Sie auf sein {{htmlelement("label")}} klicken, daher ist es besser, das `input`-Element visuell zu verbergen und das Label wie eine Schaltfläche zu gestalten, sodass der Benutzer weiß, dass er mit ihm interagieren muss, wenn er Dateien hochladen möchte.

```js
const input = document.querySelector("input");
const preview = document.querySelector(".preview");

input.style.opacity = 0;
```

> [!NOTE]
> {{cssxref("opacity")}} wird verwendet, um die Datei-Eingabe zu verstecken anstelle von {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}}, weil unterstützende Technologien die letzten beiden Stile so interpretieren, als ob die Datei-Eingabe nicht interaktiv wäre.

Als nächstes fügen wir dem Eingabefeld einen [Ereignis-Listener](/de/docs/Web/API/EventTarget/addEventListener) hinzu, um auf Änderungen seines ausgewählten Wertes zu lauschen (in diesem Fall, wenn Dateien ausgewählt werden). Der Ereignis-Listener ruft unsere benutzerdefinierte `updateImageDisplay()`-Funktion auf.

```js
input.addEventListener("change", updateImageDisplay);
```

Immer wenn die `updateImageDisplay()`-Funktion aufgerufen wird, führen wir aus:

- Verwenden einer {{jsxref("Statements/while", "while")}}-Schleife, um den vorherigen Inhalt des Vorschau-`<div>` zu leeren.
- Das [`FileList`](/de/docs/Web/API/FileList)-Objekt zu erfassen, das die Informationen über alle ausgewählten Dateien enthält, und es in einer Variablen namens `curFiles` zu speichern.
- Zu überprüfen, ob keine Dateien ausgewählt wurden, indem geprüft wird, ob `curFiles.length` gleich 0 ist. Falls ja, wird eine Nachricht in das Vorschau-`<div>` gedruckt, die besagt, dass keine Dateien ausgewählt wurden.
- Wenn Dateien _ausgewählt_ wurden, durchlaufen wir jede einzelne, drucken Informationen darüber in das Vorschau-`<div>`. Dinge, die hier zu beachten sind:
- Wir verwenden die benutzerdefinierte `validFileType()`-Funktion, um zu überprüfen, ob die Datei vom korrekten Typ ist (z. B. den im `accept`-Attribut angegebenen Bildtypen).
- Wenn dies der Fall ist, erfassen wir:
  - Den Namen und die Dateigröße in ein Listenelement innerhalb des Vorschau-`<div>` (erhalten aus `file.name` und `file.size`). Die benutzerdefinierte `returnFileSize()`-Funktion gibt eine schön formatierte Version der Größe in Bytes/KB/MB zurück (standardmäßig gibt der Browser die Größe in absoluten Bytes zurück).
  - Eine Vorschauthumbnail des Bildes zu erstellen, indem [`URL.createObjectURL(file)`](/de/docs/Web/API/URL/createObjectURL_static) aufgerufen wird. Dann fügen wir das Bild ebenfalls in das Listenelement ein, indem wir ein neues {{htmlelement("img")}} erstellen und sein [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) auf das Thumbnail setzen.

- Wenn der Dateityp ungültig ist, zeigen wir eine Nachricht innerhalb eines Listenelements an, die dem Benutzer sagt, dass er einen anderen Dateityp auswählen soll.

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

Die benutzerdefinierte `validFileType()`-Funktion nimmt ein [`File`](/de/docs/Web/API/File)-Objekt als Parameter und verwendet dann {{jsxref("Array.prototype.includes()")}}, um zu überprüfen, ob ein Wert in `fileTypes` mit der `type`-Eigenschaft der Datei übereinstimmt. Wenn eine Übereinstimmung gefunden wird, gibt die Funktion `true` zurück. Wenn keine Übereinstimmung gefunden wird, gibt sie `false` zurück.

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

Die `returnFileSize()`-Funktion nimmt eine Zahl (von Bytes, die aus der `size`-Eigenschaft der aktuellen Datei stammen) und wandelt sie in eine schön formatierte Größe in Bytes/KB/MB um.

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
> Die Einheiten "KB" und "MB" hier verwenden die [SI-Präfix](https://en.wikipedia.org/wiki/Binary_prefix)-Konvention von 1KB = 1000B, ähnlich wie macOS. Verschiedene Systeme stellen Dateigrößen unterschiedlich dar — zum Beispiel verwendet Ubuntu IEC-Präfixe, bei denen 1KiB = 1024B, während RAM-Spezifikationen oft SI-Präfixe verwenden, um Zweierpotenzen darzustellen (1KB = 1024B). Aus diesem Grund haben wir `1e3` (`1000`) und `1e6` (`100000`) anstelle von `1024` und `1048576` verwendet. In Ihrer Anwendung sollten Sie das Einheitensystem Ihren Benutzern klar mitteilen, wenn die genaue Größe wichtig ist.

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
      <td><strong>IDL Attribute</strong></td>
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

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) — enthält eine Reihe weiterer nützlicher Beispiele im Zusammenhang mit `<input type="file">` und der [File API](/de/docs/Web/API/File).
