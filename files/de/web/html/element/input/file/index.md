---
title: <input type="file">
slug: Web/HTML/Element/input/file
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente mit **`type="file"`** ermöglichen es dem Benutzer, eine oder mehrere Dateien aus dem Gerätespeicher auszuwählen. Einmal ausgewählt, können die Dateien mithilfe einer [Formularübermittlung](/de/docs/Learn_web_development/Extensions/Forms) an einen Server hochgeladen oder mithilfe von JavaScript-Code und [der File API](/de/docs/Web/API/File_API/Using_files_from_web_applications) manipuliert werden.

{{EmbedInteractiveExample("pages/tabbed/input-file.html", "tabbed-shorter")}}

## Wert

Ein Dateieingabe-Attribut [`value`](/de/docs/Web/HTML/Element/input#value) enthält eine Zeichenkette, die den Pfad zur ausgewählten Datei oder zu den Dateien darstellt. Wenn noch keine Datei ausgewählt ist, ist der Wert eine leere Zeichenkette (`""`). Wenn der Benutzer mehrere Dateien ausgewählt hat, repräsentiert der `value` die erste Datei in der Liste der ausgewählten Dateien. Die anderen Dateien können über die [`HTMLInputElement.files`-Eigenschaft](/de/docs/Web/API/File_API/Using_files_from_web_applications#getting_information_about_selected_files) des Eingabefeldes identifiziert werden.

> [!NOTE]
> Der Wert ist [immer der Dateiname mit dem Präfix `C:\fakepath\`](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly), was nicht der reale Pfad der Datei ist. Dies soll verhindern, dass schädliche Software die Dateistruktur des Benutzers errät.

## Zusätzliche Attribute

Zusätzlich zu den allgemeinen Attributen, die alle {{HTMLElement("input")}}-Elemente gemeinsam haben, unterstützen Eingaben des Typs `file` auch die folgenden Attribute.

### accept

Der Wert des Attributs [`accept`](/de/docs/Web/HTML/Attributes/accept) ist eine Zeichenkette, die festlegt, welche Dateitypen die Dateieingabe akzeptieren soll. Diese Zeichenkette ist eine durch Kommas getrennte Liste von **[einzigartigen Dateityp-Spezifizierern](#einzigartige_dateityp-spezifizierer)**. Da ein bestimmter Dateityp auf mehr als eine Weise identifiziert werden kann, ist es sinnvoll, eine umfassende Liste von Typenspezifizierern bereitzustellen, wenn Sie Dateien in einem bestimmten Format benötigen.

Zum Beispiel gibt es mehrere Möglichkeiten, Microsoft Word-Dateien zu identifizieren, daher könnte eine Seite, die Word-Dateien akzeptiert, ein `<input>` wie folgt verwenden:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### capture

Der Wert des Attributs [`capture`](/de/docs/Web/HTML/Attributes/capture) ist eine Zeichenkette, die spezifiziert, welche Kamera zum Erfassen von Bild- oder Videodaten verwendet werden soll, wenn das Attribut [`accept`](/de/docs/Web/HTML/Attributes/accept) angibt, dass die Eingabe eine dieser Arten sein soll. Ein Wert von `user` zeigt an, dass die nach vorne gerichtete Kamera und/oder das Mikrofon verwendet werden soll. Ein Wert von `environment` gibt an, dass die nach außen gerichtete Kamera und/oder das Mikrofon verwendet werden soll. Wenn dieses Attribut fehlt, kann der {{Glossary("user_agent", "User-Agent")}} frei entscheiden, was zu tun ist. Wenn der angeforderte Modus nicht verfügbar ist, kann der User-Agent auf seinen bevorzugten Standardmodus zurückfallen.

> **Hinweis:** `capture` war zuvor ein Boolean-Attribut, das, wenn vorhanden, verlangte, dass das Medienaufnahmegerät des Geräts (wie Kamera oder Mikrofon) anstelle eines Dateieingabeanfrage verwendet wird.

### multiple

Wenn das [`multiple`](/de/docs/Web/HTML/Attributes/multiple) Boolean-Attribut angegeben ist, erlaubt die Dateieingabe dem Benutzer, mehr als eine Datei auszuwählen.

## Nicht-standardisierte Attribute

Zusätzlich zu den oben gelisteten Attributen sind die folgenden nicht-standardisierten Attribute in einigen Browsern verfügbar. Sie sollten versuchen, ihre Verwendung, wenn möglich, zu vermeiden, da dies die Fähigkeit Ihres Codes einschränken wird, in Browsern zu funktionieren, die sie nicht implementieren.

### `webkitdirectory`

Das Boolean-Attribut `webkitdirectory`, falls vorhanden, zeigt an, dass nur Verzeichnisse im Dateiauswahl-Interface vom Benutzer ausgewählt werden sollten. Weitere Details und Beispiele finden Sie unter [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Firefox verwendbar. Trotz seiner relativ breiten Unterstützung ist es immer noch nicht standardisiert und sollte nicht verwendet werden, es sei denn, Sie haben keine Alternative.

## Einzigartige Dateityp-Spezifizierer

Ein **einzigartiger Dateityp-Spezifizierer** ist eine Zeichenkette, die einen Dateityp beschreibt, der vom Benutzer in einem {{HTMLElement("input")}}-Element des Typs `file` ausgewählt werden kann. Jeder einzigartige Dateityp-Spezifizierer kann eine der folgenden Formen annehmen:

- Eine gültige, nicht fallabhängige Dateinamenerweiterung, die mit einem Punkt (".") beginnt. Zum Beispiel: `.jpg`, `.pdf` oder `.doc`.
- Eine gültige MIME-Typ-Zeichenkette, ohne Erweiterungen.
- Die Zeichenkette `audio/*`, was "jede Audiodatei" bedeutet.
- Die Zeichenkette `video/*`, was "jede Videodatei" bedeutet.
- Die Zeichenkette `image/*`, was "jede Bilddatei" bedeutet.

Das `accept`-Attribut nimmt eine Zeichenkette an, die einen oder mehrere dieser einzigartigen Dateityp-Spezifizierer als Wert enthält, getrennt durch Kommata. Zum Beispiel könnte ein Datei-Wähler, der Inhalte benötigt, die als Bild dargestellt werden können, einschließlich sowohl Standardbildformate als auch PDF-Dateien, folgendermaßen aussehen:

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
> Sie können dieses Beispiel auch auf GitHub finden — siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html) und [sehen Sie es live](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Unabhängig vom Gerät oder Betriebssystem des Benutzers bietet die Dateieingabe eine Schaltfläche, die einen Datei-Auswahl-Dialog öffnet, der es dem Benutzer ermöglicht, eine Datei auszuwählen.

Das Einschließen des [`multiple`](#multiple)-Attributs, wie oben gezeigt, gibt an, dass mehrere Dateien gleichzeitig ausgewählt werden können. Der Benutzer kann mehrere Dateien im Dateiauswahl-Dialog auf jede Art und Weise auswählen, die seine gewählte Plattform erlaubt (z. B. durch Halten der <kbd>Shift</kbd> oder <kbd>Control</kbd>-Taste und dann Klicken). Wenn Sie möchten, dass der Benutzer nur eine einzelne Datei pro `<input>` auswählt, lassen Sie das `multiple`-Attribut weg.

### Informationen zu ausgewählten Dateien abrufen

Die ausgewählten Dateien werden durch die `HTMLInputElement.files`-Eigenschaft des Elements zurückgegeben, welches ein [`FileList`](/de/docs/Web/API/FileList)-Objekt enthält, das eine Liste von [`File`](/de/docs/Web/API/File)-Objekten enthält. Die `FileList` verhält sich wie ein Array, sodass Sie die `length`-Eigenschaft prüfen können, um die Anzahl der ausgewählten Dateien zu erhalten.

Jedes `File`-Objekt enthält die folgenden Informationen:

- `name`
  - : Der Name der Datei.
- `lastModified`
  - : Eine Zahl, die das Datum und die Uhrzeit angibt, zu der die Datei zuletzt geändert wurde, in Millisekunden seit der UNIX-Epoche (1. Januar 1970, um Mitternacht).
- `lastModifiedDate` {{deprecated_inline}}
  - : Ein {{jsxref("Date")}}-Objekt, das das Datum und die Uhrzeit angibt, zu der die Datei zuletzt geändert wurde. _Dies ist veraltet und sollte nicht verwendet werden. Verwenden Sie stattdessen `lastModified`._
- `size`
  - : Die Größe der Datei in Bytes.
- `type`
  - : Der [MIME-Typ](/de/docs/Web/HTTP/MIME_types) der Datei.
- `webkitRelativePath` {{non-standard_inline}}
  - : Eine Zeichenkette, die den Pfad der Datei relativ zum Basisverzeichnis angibt, das in einem Verzeichnisauswahlgerät ausgewählt wurde (das heißt, einem `file`-Picker, bei dem das [`webkitdirectory`](#webkitdirectory)-Attribut gesetzt ist). _Dies ist nicht standardisiert und sollte mit Vorsicht verwendet werden._

### Einschränkung der akzeptierten Dateitypen

Oft möchten Sie nicht, dass der Benutzer einen beliebigen Dateityp auswählen kann; stattdessen möchten Sie oft, dass er Dateien eines bestimmten Typs oder Typs auswählt. Zum Beispiel, wenn Ihre Dateieingabe-Benutzern das Hochladen eines Profilbildes ermöglicht, möchten Sie wahrscheinlich, dass sie webkompatible Bildformate auswählen, wie {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}}.

Akzeptable Dateitypen können mit dem [`accept`](#accept)-Attribut angegeben werden, das eine durch Kommas getrennte Liste von erlaubten Dateierweiterungen oder MIME-Typen annimmt. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG- oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*` MIME-Typ. (Viele mobile Geräte lassen den Benutzer auch ein Bild mit der Kamera machen, wenn dies verwendet wird.)
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

Dies führt zu einer ähnlichen Ausgabe wie das vorherige Beispiel:

{{EmbedLiveSample('Limiting_accepted_file_types', 650, 90)}}

> [!NOTE]
> Sie können dieses Beispiel auch auf GitHub finden — siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-with-accept.html) und [sehen Sie es live](https://mdn.github.io/learning-area/html/forms/file-examples/file-with-accept.html).

Es mag ähnlich aussehen, aber wenn Sie versuchen, mit dieser Eingabe eine Datei auszuwählen, werden Sie sehen, dass der Dateiwähler nur die Dateitypen auswählen lässt, die im `accept`-Wert angegeben sind (die genaue Benutzeroberfläche unterscheidet sich zwischen Browsern und Betriebssystemen).

Das `accept`-Attribut validiert nicht die Typen der ausgewählten Dateien; es bietet Browsern Hinweise, um Benutzer in die richtige Richtung zu lenken, um die richtigen Dateitypen auszuwählen. Es ist in den meisten Fällen immer noch möglich, dass Benutzer eine Option im Dateiauswahl-Dialog aktivieren, die es ihnen ermöglicht, diese zu überschreiben und jede beliebige Datei auszuwählen, die sie möchten, und dann falsche Dateitypen auszuwählen.

Aus diesem Grund sollten Sie sicherstellen, dass das `accept`-Attribut durch geeignete serverseitige Validierung unterstützt wird.

### Erkennen von Abbrüchen

Das `cancel`-Ereignis wird ausgelöst, wenn der Benutzer seine Auswahl nicht ändert und die zuvor ausgewählten Dateien erneut auswählt. Das `cancel`-Ereignis wird auch ausgelöst, wenn der Dateiauswahl-Dialog durch Drücken der "Abbrechen"-Taste oder der <kbd>Escape</kbd>-Taste geschlossen oder abgebrochen wird.

Zum Beispiel wird der folgende Code in der Konsole protokolliert, wenn der Benutzer das Popup schließt, ohne eine Datei auszuwählen:

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

1. Sie können den Wert eines Dateiauswahlfeldes nicht über ein Skript setzen — das Folgende hat zum Beispiel keinen Effekt:

   ```js
   const input = document.querySelector("input[type=file]");
   input.value = "foo";
   ```

2. Wenn eine Datei über ein `<input type="file">`-Element ausgewählt wird, wird aus offensichtlichen Sicherheitsgründen nicht der reale Pfad zur Quelldatei im `value`-Attribut des Eingabefeldes angezeigt. Stattdessen wird der Dateiname angezeigt, mit `C:\fakepath\` davor. Es gibt einige historische Gründe für diese Eigenheit, aber sie wird in allen modernen Browsern unterstützt und ist tatsächlich [in der Spezifikation definiert](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly).

## Beispiele

In diesem Beispiel zeigen wir einen etwas fortgeschritteneren Dateiauswähler, der die Informationen der Datei nutzt, die in der `HTMLInputElement.files`-Eigenschaft verfügbar sind, und einige clevere Tricks vorführt.

> [!NOTE]
> Sie können den vollständigen Quellcode für dieses Beispiel auf GitHub sehen — [file-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-example.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/file-examples/file-example.html)). Wir werden das CSS nicht erklären; der Fokus liegt auf dem JavaScript.

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

Dies ist ähnlich zu dem, was wir vorher gesehen haben — nichts Besonderes, worüber man sprechen müsste.

Als nächstes gehen wir das JavaScript durch.

In den ersten Zeilen des Skripts erhalten wir Referenzen auf das Formular-Input selbst und das {{htmlelement("div")}}-Element mit der Klasse `.preview`. Dann verstecken wir das {{htmlelement("input")}}-Element — wir tun dies, weil Datei-Eingaben tendenziell unschön, schwer zu steuern und in ihrem Design über Browser hinweg inkonsistent sind. Sie können das `input`-Element aktivieren, indem Sie auf sein {{htmlelement("label")}} klicken, daher ist es besser, das `input` visuell zu verstecken und das Label wie eine Schaltfläche zu gestalten, damit der Benutzer weiß, dass er damit interagieren soll, wenn er Dateien hochladen möchte.

```js
const input = document.querySelector("input");
const preview = document.querySelector(".preview");

input.style.opacity = 0;
```

> **Hinweis:** {{cssxref("opacity")}} wird verwendet, um die Dateieingabe zu verstecken, anstelle von {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}}, weil assistive Technologie die beiden letzteren Stile so interpretiert, dass die Dateieingabe nicht interaktiv ist.

Als nächstes fügen wir einen [Event-Listener](/de/docs/Web/API/EventTarget/addEventListener) zu dem Eingabefeld hinzu, um auf Änderungen seines ausgewählten Wertes zu hören (in diesem Fall, wenn Dateien ausgewählt werden). Der Event-Listener ruft unsere benutzerdefinierte Funktion `updateImageDisplay()` auf.

```js
input.addEventListener("change", updateImageDisplay);
```

Immer wenn die `updateImageDisplay()`-Funktion aufgerufen wird, führen wir die folgenden Schritte aus:

- Wir verwenden eine {{jsxref("Statements/while", "while")}}-Schleife, um die vorherigen Inhalte des Vorschau-`<div>` zu leeren.
- Wir greifen auf das [`FileList`](/de/docs/Web/API/FileList)-Objekt zu, das die Informationen zu allen ausgewählten Dateien enthält, und speichern es in einer Variablen namens `curFiles`.
- Wir überprüfen, ob keine Dateien ausgewählt wurden, indem wir prüfen, ob `curFiles.length` gleich 0 ist. Wenn dies der Fall ist, printen wir eine Nachricht in das Vorschau-`<div>`, die besagt, dass keine Dateien ausgewählt wurden.
- Wenn Dateien ausgewählt wurden, durchlaufen wir jede und geben Informationen darüber in das Vorschau-`<div>` aus. Bemerkenswerte Dinge:

  - Wir verwenden die benutzerdefinierte Funktion `validFileType()`, um zu überprüfen, ob die Datei vom richtigen Typ ist (z. B. die in dem `accept`-Attribut angegebenen Bildtypen).
  - Wenn sie gültig ist, führen wir folgende Schritte aus:

    - Wir geben ihren Namen und ihre Dateigröße in ein Listenelement innerhalb des Vorschau-`<div>` aus (erhalten aus `file.name` und `file.size`). Die benutzerdefinierte Funktion `returnFileSize()` gibt eine schön formatierte Version der Größe in Bytes/KB/MB zurück (standardmäßig gibt der Browser die Größe in absoluten Bytes an).
    - Wir erzeugen eine Miniaturvorschau des Bildes, indem wir [`URL.createObjectURL(file)`](/de/docs/Web/API/URL/createObjectURL_static) aufrufen. Dann fügen wir das Bild auch in das Listenelement ein, indem wir ein neues {{htmlelement("img")}} erstellen und sein [`src`](/de/docs/Web/HTML/Element/img#src) auf das Thumbnail setzen.

  - Wenn der Dateityp ungültig ist, zeigen wir eine Nachricht in einem Listenelement an, die den Benutzer darauf hinweist, dass er einen anderen Dateityp auswählen muss.

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

Die benutzerdefinierte `validFileType()`-Funktion nimmt ein [`File`](/de/docs/Web/API/File)-Objekt als Parameter und verwendet dann {{jsxref("Array.prototype.includes()")}}, um zu prüfen, ob ein Wert in den `fileTypes` mit der `type`-Eigenschaft der Datei übereinstimmt. Wenn eine Übereinstimmung gefunden wird, gibt die Funktion `true` zurück. Wenn keine Übereinstimmung gefunden wird, gibt sie `false` zurück.

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

Die Funktion `returnFileSize()` nimmt eine Zahl (in Bytes, aus der aktuellen `size`-Eigenschaft der Datei) und wandelt sie in eine schön formatierte Größe in Bytes/KB/MB um.

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
> Die Einheiten "KB" und "MB" verwenden hier die [SI-Präfix](https://de.wikipedia.org/wiki/Bin%C3%A4rpr%C3%A4fix)-Konvention von 1KB = 1000B, ähnlich wie macOS. Unterschiedliche Systeme stellen Dateigrößen unterschiedlich dar—zum Beispiel verwendet Ubuntu IEC-Präfixe, bei denen 1KiB = 1024B ist, während RAM-Spezifikationen häufig SI-Präfixe verwenden, um Zweierpotenzen darzustellen (1KB = 1024B). Aus diesem Grund haben wir `1e3` (`1000`) und `1e6` (`1000000`) anstelle von `1024` und `1048576` verwendet. In Ihrer Anwendung sollten Sie das Einheitensystem Ihren Benutzern klar kommunizieren, wenn die genaue Größe wichtig ist.

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

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) — enthält eine Reihe anderer nützlicher Beispiele zu `<input type="file">` und der [File API](/de/docs/Web/API/File).
