---
title: <input type="file">
slug: Web/HTML/Element/input/file
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente mit **`type="file"`** ermöglichen es dem Benutzer, eine oder mehrere Dateien aus dem Speicher seines Geräts auszuwählen. Sobald die Dateien ausgewählt sind, können sie über die [Formularübermittlung](/de/docs/Learn_web_development/Extensions/Forms) auf einen Server hochgeladen oder mit JavaScript-Code und der [File-API](/de/docs/Web/API/File_API/Using_files_from_web_applications) manipuliert werden.

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

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut eines Dateieingabefeldes enthält eine Zeichenkette, die den Pfad zu der ausgewählten Datei oder den ausgewählten Dateien darstellt. Wenn noch keine Datei ausgewählt ist, ist der Wert ein leerer String (`""`). Wenn der Benutzer mehrere Dateien auswählt, repräsentiert der `value` die erste Datei in der Liste der ausgewählten Dateien. Die anderen Dateien können über die [`HTMLInputElement.files`-Eigenschaft](/de/docs/Web/API/File_API/Using_files_from_web_applications#getting_information_about_selected_files) des Eingabefeldes identifiziert werden.

> [!NOTE]
> Der Wert ist [immer der Dateiname, vorangestellt mit `C:\fakepath\`](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly), was nicht der echte Pfad der Datei ist. Dies soll verhindern, dass schädliche Software die Dateistruktur des Benutzers errät.

## Zusätzliche Attribute

Zusätzlich zu den gemeinsamen Attributen, die alle {{HTMLElement("input")}}-Elemente teilen, unterstützen Eingaben vom Typ `file` auch die folgenden Attribute.

### accept

Der Wert des [`accept`](/de/docs/Web/HTML/Attributes/accept)-Attributs ist eine Zeichenkette, die die Dateitypen definiert, die die Dateieingabe akzeptieren soll. Diese Zeichenkette ist eine durch Kommata getrennte Liste von **[einzigartigen Dateitypspezifizierern](#einzigartige_dateitypspezifizierer)**. Da ein bestimmter Dateityp auf verschiedene Weisen identifiziert werden kann, ist es nützlich, einen umfassenden Satz von Typspezifizierern bereitzustellen, wenn Dateien eines bestimmten Formats benötigt werden.

Zum Beispiel gibt es mehrere Möglichkeiten, Dateien von Microsoft Word zu identifizieren, daher könnte eine Website, die Word-Dateien akzeptiert, ein `<input>` wie dieses verwenden:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### capture

Der Wert des [`capture`](/de/docs/Web/HTML/Attributes/capture)-Attributs ist eine Zeichenkette, die angibt, welche Kamera zur Erfassung von Bild- oder Videodaten verwendet werden soll, falls das [`accept`](/de/docs/Web/HTML/Attributes/accept)-Attribut angibt, dass die Eingabe von einem dieser Typen sein soll. Ein Wert von `user` zeigt an, dass die benutzerseitige Kamera und/oder das Mikrofon verwendet werden soll. Ein Wert von `environment` gibt an, dass die nach außen gerichtete Kamera und/oder das Mikrofon verwendet werden soll. Wenn dieses Attribut fehlt, kann der {{Glossary("user_agent", "Benutzeragent")}} selbst entscheiden, was zu tun ist. Wenn der angeforderte Modus nicht verfügbar ist, kann der Benutzeragent auf seinen bevorzugten Standardmodus zurückfallen.

> **Hinweis:** `capture` war früher ein Boolean-Attribut, das, wenn vorhanden, verlangte, dass das Medienerfassungsgerät(e) des Geräts wie Kamera oder Mikrofon verwendet wird, anstatt eine Dateieingabe anzufordern.

### multiple

Wenn das [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Boolean-Attribut angegeben ist, ermöglicht die Dateieingabe dem Benutzer, mehr als eine Datei auszuwählen.

## Nicht-standardisierte Attribute

Zusätzlich zu den oben aufgeführten Attributen sind die folgenden nicht standardisierten Attribute in einigen Browsern verfügbar. Sie sollten versuchen, diese zu vermeiden, wann immer möglich, da dies die Fähigkeit Ihres Codes einschränkt, in Browsern zu funktionieren, die sie nicht implementieren.

### `webkitdirectory`

Das Boolean-Attribut `webkitdirectory`, wenn vorhanden, zeigt an, dass nur Verzeichnisse ausgewählt werden können, die vom Benutzer in der Dateiauswahloberfläche ausgewählt werden sollen. Weitere Details und Beispiele finden Sie unter [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Firefox nutzbar. Obwohl es eine relativ breite Unterstützung gibt, ist es immer noch nicht standardisiert und sollte nicht verwendet werden, wenn Sie keine Alternative haben.

## Einzigartige Dateitypspezifizierer

Ein **einzigartiger Dateitypspezifizierer** ist eine Zeichenkette, die einen Dateityp beschreibt, der vom Benutzer in einem {{HTMLElement("input")}}-Element vom Typ `file` ausgewählt werden kann. Jeder einzigartige Dateitypspezifizierer kann eine der folgenden Formen annehmen:

- Eine gültige nicht groß-/kleinbuchstabenabhängige Dateinamenerweiterung, beginnend mit einem Punkt (".")-Zeichen. Zum Beispiel: `.jpg`, `.pdf` oder `.doc`.
- Eine gültige MIME-Typ-Zeichenkette, ohne Erweiterungen.
- Die Zeichenkette `audio/*`, was „jede Audiodatei“ bedeutet.
- Die Zeichenkette `video/*`, was „jede Videodatei“ bedeutet.
- Die Zeichenkette `image/*`, was „jede Bilddatei“ bedeutet.

Das `accept`-Attribut nimmt eine Zeichenkette, die einen oder mehrere dieser einzigartigen Dateitypspezifizierer als Wert enthält, getrennt durch Kommata. Zum Beispiel, könnte ein Dateiauswahldialog, der Inhalte benötigt, die als Bild dargestellt werden können, einschließlich sowohl Standardbildformate als auch PDF-Dateien, so aussehen:

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
> Sie können dieses Beispiel auch auf GitHub finden — siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html), und [sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Unabhängig vom Gerät oder Betriebssystem des Benutzers bietet die Dateieingabe einen Button, der einen Dateiauswahldialog öffnet, der es dem Benutzer ermöglicht, eine Datei auszuwählen.

Durch das Einfügen des [`multiple`](#multiple)-Attributs, wie oben gezeigt, wird angegeben, dass mehrere Dateien gleichzeitig ausgewählt werden können. Der Benutzer kann mehrere Dateien aus der Dateiauswahl auf jede seiner Plattform entsprechende Weise auswählen (z. B. durch Halten der <kbd>Shift</kbd>- oder <kbd>Control</kbd>-Taste und anschließendes Klicken). Wenn Sie möchten, dass der Benutzer nur eine einzelne Datei pro `<input>` auswählt, lassen Sie das `multiple`-Attribut weg.

### Informationen zu ausgewählten Dateien abrufen

Die ausgewählten Dateien werden durch die Eigenschaft `HTMLInputElement.files` des Elements zurückgegeben, die ein [`FileList`](/de/docs/Web/API/FileList)-Objekt ist, das eine Liste von [`File`](/de/docs/Web/API/File)-Objekten enthält. Die `FileList` verhält sich wie ein Array, sodass Sie die `length`-Eigenschaft überprüfen können, um die Anzahl der ausgewählten Dateien zu ermitteln.

Jedes `File`-Objekt enthält die folgenden Informationen:

- `name`
  - : Der Name der Datei.
- `lastModified`
  - : Eine Zahl, die das Datum und die Uhrzeit angibt, zu der die Datei zuletzt geändert wurde, in Millisekunden seit der UNIX-Epoche (1. Januar 1970, um Mitternacht).
- `lastModifiedDate` {{deprecated_inline}}
  - : Ein {{jsxref("Date")}}-Objekt, das das Datum und die Uhrzeit repräsentiert, zu der die Datei zuletzt geändert wurde. _Dies ist veraltet und sollte nicht mehr verwendet werden. Verwenden Sie stattdessen `lastModified`._
- `size`
  - : Die Größe der Datei in Bytes.
- `type`
  - : Der [MIME-Typ](/de/docs/Web/HTTP/MIME_types) der Datei.
- `webkitRelativePath` {{non-standard_inline}}
  - : Eine Zeichenkette, die den Pfad der Datei relativ zum Basispfad angibt, der in einem Verzeichnisdialog ausgewählt wurde (also in einer `file`-Eingabe, bei der das [`webkitdirectory`](#webkitdirectory)-Attribut gesetzt ist). _Dies ist nicht standardisiert und sollte mit Vorsicht verwendet werden._

### Akzeptierte Dateitypen einschränken

Oftmals möchten Sie nicht, dass der Benutzer einen beliebigen Dateityp auswählen kann; Sie möchten stattdessen, dass er Dateien eines bestimmten Typs oder bestimmter Typen auswählt. Zum Beispiel, wenn Ihre Dateieingabe Benutzern ermöglicht, ein Profilbild hochzuladen, möchten Sie wahrscheinlich, dass sie webkompatible Bildformate wie {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}} auswählen.

Akzeptable Dateitypen können mit dem [`accept`](#accept)-Attribut angegeben werden, das eine durch Kommata getrennte Liste erlaubter Dateierweiterungen oder -MIME-Typen annimmt. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG- oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*`-MIME-Typ. (Viele Mobilgeräte erlauben es dem Benutzer auch, ein Bild mit der Kamera aufzunehmen, wenn dies verwendet wird.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — akzeptiert alles, was wie ein MS Word-Dokument aussieht.

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
> Dieses Beispiel finden Sie auch auf GitHub — siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-with-accept.html), und [sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/file-examples/file-with-accept.html).

Es sieht ähnlich aus, aber wenn Sie versuchen, eine Datei mit dieser Eingabe auszuwählen, werden Sie feststellen, dass die Dateiauswahl nur die Dateitypen auswählen lässt, die im `accept`-Wert angegeben sind (das genaue Interface unterscheidet sich in den verschiedenen Browsern und Betriebssystemen).

Das `accept`-Attribut validiert die Typen der ausgewählten Dateien nicht; es gibt Hinweise für Browser, um Benutzer zur Auswahl der richtigen Dateitypen zu führen. Es ist in den meisten Fällen immer noch möglich, dass Benutzer eine Option im Dateiauswahldialog aktivieren, die es ihnen ermöglicht, dies zu überschreiben und jede Datei auszuwählen, die sie möchten, und dann die falschen Dateitypen auszuwählen.

Deshalb sollten Sie sicherstellen, dass das `accept`-Attribut durch eine geeignete serverseitige Validierung unterstützt wird.

### Erkennen von Abbrüchen

Das `cancel`-Ereignis wird ausgelöst, wenn der Benutzer seine Auswahl nicht ändert und die vorherigen Dateien erneut auswählt. Das `cancel`-Ereignis wird auch ausgelöst, wenn der Dateiauswahldialog geschlossen oder mit der „Abbrechen“-Taste oder der <kbd>Escape</kbd>-Taste abgebrochen wird.

Zum Beispiel protokolliert der folgende Code in die Konsole, wenn der Benutzer das Popup schließt, ohne eine Datei auszuwählen:

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

1. Sie können den Wert eines Dateiauswahlsteuerelements nicht von einem Skript aus setzen — das Ausführen von etwas Ähnlichem wie dem folgenden hat keine Wirkung:

   ```js
   const input = document.querySelector("input[type=file]");
   input.value = "foo";
   ```

2. Wenn eine Datei mit einem `<input type="file">` ausgewählt wird, wird der echte Pfad zur Quelldatei aus offensichtlichen Sicherheitsgründen nicht im `value`-Attribut des Eingabefeldes angezeigt. Stattdessen wird der Dateiname angezeigt, mit `C:\fakepath\` davor. Es gibt einige historische Gründe für diese Besonderheit, aber es wird in allen modernen Browsern unterstützt und ist [in der Spezifikation definiert](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly).

## Beispiele

In diesem Beispiel präsentieren wir einen etwas fortgeschritteneren Dateiauswahlmechanismus, der die in der `HTMLInputElement.files`-Eigenschaft verfügbaren Dateiinformationen nutzt und einige clevere Tricks demonstriert.

> [!NOTE]
> Der vollständige Quellcode für dieses Beispiel ist auf GitHub verfügbar — [file-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-example.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/file-examples/file-example.html)). Wir werden das CSS nicht erklären; der Fokus liegt auf dem JavaScript.

Schauen wir uns zuerst das HTML an:

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

Das ist ähnlich wie das, was wir bereits gesehen haben — nichts besonderes zu kommentieren.

Als Nächstes gehen wir den JavaScript-Code durch.

In den ersten Zeilen des Skripts erhalten wir Referenzen auf das Formularfeld selbst und das {{htmlelement("div")}}-Element mit der Klasse `.preview`. Dann verstecken wir das {{htmlelement("input")}}-Element — das tun wir, weil Dateieingabefelder dazu neigen, hässlich zu sein, schwer zu stylen sind und in ihrem Design in verschiedenen Browsern inkonsistent sind. Sie können das `input`-Element durch Klicken auf sein {{htmlelement("label")}} aktivieren, daher ist es besser, das `input`-Element visuell zu verstecken und das Label wie einen Button zu stylen, damit der Benutzer weiß, dass er damit interagieren soll, wenn er Dateien hochladen möchte.

```js
const input = document.querySelector("input");
const preview = document.querySelector(".preview");

input.style.opacity = 0;
```

> **Hinweis:** {{cssxref("opacity")}} wird verwendet, um das Dateieingabefeld zu verstecken, anstelle von {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}}, weil Hilfstechnologie die beiden letztgenannten Stile so interpretiert, dass das Dateieingabefeld nicht interaktiv ist.

Als Nächstes fügen wir einen [Ereignislistener](/de/docs/Web/API/EventTarget/addEventListener) der Eingabe hinzu, um auf Änderungen ihres ausgewählten Werts zu hören (in diesem Fall, wenn Dateien ausgewählt werden). Der Ereignislistener ruft unsere benutzerdefinierte `updateImageDisplay()`-Funktion auf.

```js
input.addEventListener("change", updateImageDisplay);
```

Wann immer die `updateImageDisplay()`-Funktion aufgerufen wird, machen wir Folgendes:

- Benutzen Sie eine {{jsxref("Statements/while", "while")}}-Schleife, um den vorherigen Inhalt des Vorschaubereichs `<div>` zu leeren.
- Erfassen Sie das [`FileList`](/de/docs/Web/API/FileList)-Objekt, das die Informationen zu allen ausgewählten Dateien enthält, und speichern Sie es in einer Variablen namens `curFiles`.
- Überprüfen Sie, ob keine Dateien ausgewählt wurden, indem Sie überprüfen, ob `curFiles.length` gleich 0 ist. Falls ja, drucken Sie eine Nachricht in das Vorschaubereichs-`<div>`, die angibt, dass keine Dateien ausgewählt wurden.
- Wenn Dateien _ausgewählt wurden_, gehen wir sie alle durch und drucken Informationen über sie in das Vorschaubereichs-`<div>`. Dinge, die hier zu beachten sind:
- Wir verwenden die benutzerdefinierte `validFileType()`-Funktion, um zu überprüfen, ob die Datei vom richtigen Typ ist (z. B. die im `accept`-Attribut angegebenen Bildtypen).
- Wenn das der Fall ist, tun wir Folgendes:

  - Den Namen und die Dateigröße in einem Listeneintrag im Vorschaubereichs-`<div>` ausgeben (gewonnen aus `file.name` und `file.size`). Die benutzerdefinierte `returnFileSize()`-Funktion gibt eine schön formatierte Version der Größe in Bytes/KB/MB zurück (standardmäßig gibt der Browser die Größe in absoluten Bytes an).
  - Eine Thumbnail-Vorschau des Bildes erstellen, indem [`URL.createObjectURL(file)`](/de/docs/Web/API/URL/createObjectURL_static) aufgerufen wird. Dann das Bild auch in den Listeneintrag einfügen, indem ein neues {{htmlelement("img")}} erstellt wird und dessen [`src`](/de/docs/Web/HTML/Element/img#src) auf das Thumbnail gesetzt wird.

- Wenn der Dateityp ungültig ist, zeigen wir eine Nachricht in einem Listeneintrag an, die dem Benutzer mitteilt, dass er einen anderen Dateityp auswählen muss.

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

Die benutzerdefinierte `validFileType()`-Funktion nimmt ein [`File`](/de/docs/Web/API/File)-Objekt als Parameter und verwendet {{jsxref("Array.prototype.includes()")}}, um zu überprüfen, ob ein Wert im `fileTypes`-Array mit der `type`-Eigenschaft der Datei übereinstimmt. Falls eine Übereinstimmung gefunden wird, gibt die Funktion `true` zurück. Falls keine Übereinstimmung gefunden wird, wird `false` zurückgegeben.

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

Die `returnFileSize()`-Funktion nimmt eine Zahl (in Bytes, aus der `size`-Eigenschaft der aktuellen Datei) und formatiert sie als Größe in Bytes/KB/MB.

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
> Die Einheiten "KB" und "MB" verwenden hier die [SI-Präfix](https://en.wikipedia.org/wiki/Binary_prefix)-Konvention von 1KB = 1000B, ähnlich zu macOS. Verschiedene Systeme stellen Dateigrößen unterschiedlich dar — zum Beispiel verwendet Ubuntu IEC-Präfixe, wo 1KiB = 1024B, während RAM-Spezifikationen oft SI-Präfixe verwenden, um Zweierpotenzen darzustellen (1KB = 1024B). Aus diesem Grund haben wir `1e3` (`1000`) und `1e6` (`100000`) anstelle von `1024` und `1048576` verwendet. In Ihrer Anwendung sollten Sie das Einheitensystem deutlich mit Ihren Benutzern kommunizieren, wenn die genaue Größe wichtig ist.

```js hidden
const button = document.querySelector("form button");
button.addEventListener("click", (e) => {
  e.preventDefault();
  const para = document.createElement("p");
  para.append("Image uploaded!");
  preview.replaceChildren(para);
});
```

Das Beispiel sieht wie folgt aus; probieren Sie es aus:

{{EmbedLiveSample('Examples', '100%', 200)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenkette, die den Pfad zur
        ausgewählten Datei repräsentiert.
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
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) — enthält eine Reihe weiterer nützlicher Beispiele im Zusammenhang mit `<input type="file">` und der [File API](/de/docs/Web/API/File).
