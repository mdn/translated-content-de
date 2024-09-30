---
title: "`<input type=\"file\">`"
slug: Web/HTML/Element/input/file
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente mit **`type="file"`** ermöglichen es dem Benutzer, eine oder mehrere Dateien aus dem Gerätespeicher auszuwählen. Sobald ausgewählt, können die Dateien über [Formularübermittlung](/de/docs/Learn/Forms) an einen Server hochgeladen oder mit JavaScript-Code und [der File API](/de/docs/Web/API/File_API/Using_files_from_web_applications) manipuliert werden.

{{EmbedInteractiveExample("pages/tabbed/input-file.html", "tabbed-shorter")}}

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut eines Datei-Inputs enthält eine Zeichenkette, die den Pfad zur ausgewählten Datei(en) darstellt. Wenn noch keine Datei ausgewählt ist, ist der Wert eine leere Zeichenkette (`""`). Wenn der Benutzer mehrere Dateien ausgewählt hat, repräsentiert der `value` die erste Datei in der Liste der ausgewählten Dateien. Die anderen Dateien können über die [`HTMLInputElement.files`-Eigenschaft](/de/docs/Web/API/File_API/Using_files_from_web_applications#getting_information_about_selected_files) des Inputs identifiziert werden.

> [!NOTE]
> Der Wert ist [immer der Dateiname mit `C:\fakepath\` vorangestellt](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly), was nicht der echte Pfad der Datei ist. Dies verhindert, dass bösartige Software die Dateistruktur des Benutzers errät.

## Zusätzliche Attribute

Zusätzlich zu den allgemeinen Attributen, die alle {{HTMLElement("input")}}-Elemente teilen, unterstützen Eingaben vom Typ `file` auch die folgenden Attribute.

### accept

Der Wert des [`accept`](/de/docs/Web/HTML/Attributes/accept)-Attributs ist eine Zeichenkette, die die Dateitypen definiert, die der Datei-Input akzeptieren soll. Diese Zeichenkette ist eine durch Kommas getrennte Liste von **[einzigartigen Dateityp-Spezifikatoren](#einzigartige_dateityp-spezifikatoren)**. Da ein bestimmter Dateityp auf mehr als eine Weise identifiziert werden kann, ist es nützlich, eine umfassende Liste von Typ-Spezifikatoren bereitzustellen, wenn Sie Dateien eines bestimmten Formats benötigen.

Zum Beispiel gibt es mehrere Möglichkeiten, Microsoft Word-Dateien zu identifizieren, sodass eine Seite, die Word-Dateien akzeptiert, ein `<input>` wie dieses verwenden könnte:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### capture

Der Wert des [`capture`](/de/docs/Web/HTML/Attributes/capture)-Attributs ist eine Zeichenkette, die angibt, welche Kamera für die Aufnahme von Bild- oder Videodaten verwendet werden soll, falls das [`accept`](/de/docs/Web/HTML/Attributes/accept)-Attribut angibt, dass die Eingabe eine dieser Arten sein soll. Ein Wert von `user` bedeutet, dass die kameraseitige Kamera und/oder das Mikrofon verwendet werden sollen. Ein Wert von `environment` gibt an, dass die nach außen gerichtete Kamera und/oder das Mikrofon verwendet werden sollen. Wenn dieses Attribut fehlt, steht es dem [Benutzeragenten](/de/docs/Glossary/user_agent) frei, selbst zu entscheiden, was zu tun ist. Wenn der angeforderte Modus nicht verfügbar ist, kann der Benutzeragent auf seinen bevorzugten Standardmodus zurückgreifen.

> **Hinweis:** `capture` war zuvor ein boolesches Attribut, das, wenn es vorhanden war, verlangte, dass die Medienerfassungsgeräte des Geräts, wie Kamera oder Mikrofon, verwendet werden, anstatt eine Dateieingabe anzufordern.

### multiple

Wenn das [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut als boolesches Attribut angegeben ist, ermöglicht die Dateieingabe dem Benutzer, mehr als eine Datei auszuwählen.

## Nicht-standardisierte Attribute

Zusätzlich zu den oben aufgeführten Attributen stehen die folgenden nicht-standardisierten Attribute in einigen Browsern zur Verfügung. Sie sollten versuchen, ihre Verwendung zu vermeiden, wenn möglich, da dies die Fähigkeit Ihres Codes einschränkt, in Browsern zu funktionieren, die sie nicht implementieren.

### `webkitdirectory`

Das boolesche Attribut `webkitdirectory`, falls vorhanden, zeigt an, dass im Dateiauswahlfenster nur Verzeichnisse vom Benutzer ausgewählt werden dürfen. Weitere Details und Beispiele finden Sie unter [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Microsoft Edge sowie in Firefox 50 und später verwendbar. Trotzdem, auch wenn es relativ breite Unterstützung hat, ist es immer noch nicht standardisiert und sollte nicht verwendet werden, es sei denn, Sie haben keine Alternative.

## Einzigartige Dateityp-Spezifikatoren

Ein **einzigartiger Dateityp-Spezifikator** ist eine Zeichenkette, die einen Dateityp beschreibt, der vom Benutzer in einem {{HTMLElement("input")}}-Element vom Typ `file` ausgewählt werden kann. Jeder einzigartige Dateityp-Spezifikator kann eine der folgenden Formen annehmen:

- Eine gültige, nicht fallabhängige Dateinamenerweiterung, beginnend mit einem Punkt (".") Zeichen. Beispiel: `.jpg`, `.pdf` oder `.doc`.
- Eine gültige MIME-Typ-Zeichenkette, ohne Erweiterungen.
- Die Zeichenkette `audio/*`, was "jede Audiodatei" bedeutet.
- Die Zeichenkette `video/*`, was "jede Videodatei" bedeutet.
- Die Zeichenkette `image/*`, was "jede Bilddatei" bedeutet.

Das `accept`-Attribut nimmt eine Zeichenkette, die einen oder mehrere dieser einzigartigen Dateityp-Spezifikatoren als ihren Wert, getrennt durch Kommas, enthält. Zum Beispiel könnte ein Dateiauswahlfenster, das Inhalte benötigt, die als Bild präsentiert werden können, einschließlich sowohl Standardbildformaten als auch PDF-Dateien, so aussehen:

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

Das führt zur folgenden Ausgabe:

{{EmbedLiveSample('A_basic_example', 650, 90)}}

> [!NOTE]
> Sie finden dieses Beispiel auch auf GitHub — sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html) an, und sehen Sie es [auch live](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Unabhängig vom Gerät oder Betriebssystem des Benutzers bietet die Dateieingabe eine Schaltfläche, die einen Dateiauswahldialog öffnet, der es dem Benutzer ermöglicht, eine Datei auszuwählen.

Wenn Sie das [`multiple`](#multiple)-Attribut, wie oben gezeigt, hinzufügen, wird angegeben, dass mehrere Dateien gleichzeitig ausgewählt werden können. Der Benutzer kann mehrere Dateien im Dateiauswahlfenster in jeder Weise auswählen, die seine gewählte Plattform erlaubt (z. B. durch Drücken und Halten von <kbd>Shift</kbd> oder <kbd>Control</kbd> und Klicken). Wenn Sie möchten, dass der Benutzer nur eine einzelne Datei pro `<input>` auswählt, lassen Sie das `multiple`-Attribut weg.

### Informationen zu ausgewählten Dateien abrufen

Die ausgewählten Dateien werden durch die `HTMLInputElement.files`-Eigenschaft des Elements zurückgegeben, die ein [`FileList`](/de/docs/Web/API/FileList)-Objekt mit einer Liste von [`File`](/de/docs/Web/API/File)-Objekten enthält. Das `FileList`-Objekt verhält sich wie ein Array, sodass Sie seine `length`-Eigenschaft überprüfen können, um die Anzahl der ausgewählten Dateien zu erhalten.

Jedes `File`-Objekt enthält die folgenden Informationen:

- `name`
  - : Der Name der Datei.
- `lastModified`
  - : Eine Zahl, die Datum und Uhrzeit angibt, zu der die Datei zuletzt geändert wurde, in Millisekunden seit der UNIX-Epoche (1. Januar 1970, Mitternacht).
- `lastModifiedDate` {{deprecated_inline}}
  - : Ein {{jsxref("Date")}}-Objekt, das das Datum und die Uhrzeit darstellt, zu denen die Datei zuletzt geändert wurde. _Dies ist veraltet und sollte nicht verwendet werden. Verwenden Sie stattdessen `lastModified`._
- `size`
  - : Die Größe der Datei in Bytes.
- `type`
  - : Der [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) der Datei.
- `webkitRelativePath` {{non-standard_inline}}
  - : Eine Zeichenkette, die den relativen Pfad der Datei relativ zum Basisverzeichnis angibt, das im Auswahlfenster ausgewählt wurde (das heißt, ein `file`-Picker, bei dem das [`webkitdirectory`](#webkitdirectory)-Attribut gesetzt ist). _Dies ist nicht standardisiert und sollte mit Vorsicht verwendet werden._

> [!NOTE]
> Sie können den Wert von `HTMLInputElement.files` in allen modernen Browsern sowohl setzen als auch abrufen; dies wurde zuletzt zu Firefox hinzugefügt, in Version 57 (siehe [Firefox-Fehler 1384030](https://bugzil.la/1384030)).

### Akzeptierte Dateitypen begrenzen

Oft möchten Sie nicht, dass der Benutzer irgendwelche beliebigen Dateitypen auswählen kann; stattdessen möchten Sie oft, dass sie Dateien eines bestimmten Typs oder Typs auswählen. Wenn Ihre Datei-Eingabe es Benutzern zum Beispiel ermöglicht, ein Profilbild hochzuladen, möchten Sie wahrscheinlich, dass sie web-kompatible Bildformate auswählen, wie [JPEG](/de/docs/Glossary/JPEG) oder [PNG](/de/docs/Glossary/PNG).

Akzeptable Dateitypen können mit dem [`accept`](#accept)-Attribut angegeben werden, das eine durch Kommas getrennte Liste von erlaubten Dateinamenerweiterungen oder MIME-Typen verwendet. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — akzeptiert PNG- oder JPEG-Dateien.
- `accept="image/*"` — akzeptiert jede Datei mit einem `image/*` MIME-Typ. (Viele Mobilgeräte erlauben es dem Benutzer auch, ein Bild mit der Kamera aufzunehmen, wenn dies verwendet wird.)
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

Das führt zu einer ähnlich aussehenden Ausgabe wie das vorherige Beispiel:

{{EmbedLiveSample('Limiting_accepted_file_types', 650, 90)}}

> [!NOTE]
> Sie finden dieses Beispiel auch auf GitHub — sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-with-accept.html) an, und sehen Sie es [auch live](https://mdn.github.io/learning-area/html/forms/file-examples/file-with-accept.html).

Es sieht ähnlich aus, aber wenn Sie versuchen, mit diesem Input eine Datei auszuwählen, werden Sie sehen, dass der Dateiauswahl nur die Dateitypen auswählen lässt, die im `accept`-Wert angegeben sind (die genaue Benutzeroberfläche unterscheidet sich je nach Browsers und Betriebssystemen).

Das `accept`-Attribut validiert nicht die Typen der ausgewählten Dateien; es liefert Hinweise für Browser, Benutzer zur Auswahl der korrekten Dateitypen zu führen. Es ist immer noch möglich (in den meisten Fällen), dass Benutzer eine Option im Datei-Auswahlfenster umschalten, die es ermöglicht, dies außer Kraft zu setzen und jede beliebige Datei auszuwählen, und dann falsche Dateitypen auszuwählen.

Aufgrund dieser Tatsache sollten Sie sicherstellen, dass das `accept`-Attribut durch eine geeignete serverseitige Validierung gesichert wird.

### Erkennung von Abbrüchen

Das `cancel`-Ereignis wird ausgelöst, wenn der Benutzer seine Auswahl nicht ändert und die zuvor ausgewählten Dateien erneut auswählt. Das `cancel`-Ereignis wird auch ausgelöst, wenn das Dateiauswahl-Popup geschlossen oder über die "Abbrechen"-Schaltfläche oder die <kbd>Escape</kbd>-Taste abgebrochen wird.

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

### Anmerkungen

1. Sie können den Wert eines Dateiauswahl-Feldes nicht über ein Skript festlegen – etwas wie das folgende hat keinen Effekt:

   ```js
   const input = document.querySelector("input[type=file]");
   input.value = "foo";
   ```

2. Wenn eine Datei mit einem `<input type="file">` ausgewählt wird, wird der reale Pfad zur Quelldatei nicht im `value`-Attribut des Inputs angezeigt, aus offensichtlichen Sicherheitsgründen. Stattdessen wird der Dateiname angezeigt, mit `C:\fakepath\` vorangestellt. Es gibt einige historische Gründe für diese Eigenheit, aber sie wird in allen modernen Browsern unterstützt und ist tatsächlich [in der Spezifikation definiert](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly).

## Beispiele

In diesem Beispiel präsentieren wir einen etwas fortgeschritteneren Dateiauswahl-Dialog, der die im `HTMLInputElement.files`-Eigenschaft verfügbaren Datei-Informationen nutzt und auch ein paar clevere Tricks zeigt.

> [!NOTE]
> Sie finden den vollständigen Quellcode dieses Beispiels auf GitHub — [file-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-example.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/file-examples/file-example.html)). Wir werden nicht die CSS erklären; der Fokus liegt auf dem JavaScript.

Zunächst einmal schauen wir uns das HTML an:

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

Das ist ähnlich wie das, was wir zuvor gesehen haben — nichts Besonderes zu kommentieren.

Als Nächstes gehen wir das JavaScript durch.

In den ersten Zeilen des Skripts erhalten wir Referenzen auf das Formularelement selbst und das {{htmlelement("div")}} mit der Klasse `.preview`. Als Nächstes verstecken wir das {{htmlelement("input")}}-Element — wir tun dies, weil Dateieingabefelder dazu neigen, unansehnlich, schwer zu stylen und in ihrem Design über Browser hinweg inkonsistent zu sein. Sie können das `input`-Element aktivieren, indem Sie auf sein {{htmlelement("label")}} klicken, daher ist es besser, das `input` visuell zu verstecken und das Label wie eine Schaltfläche zu stylen, damit der Benutzer weiß, dass er es bei Bedarf klicken kann, um Dateien hochzuladen.

```js
const input = document.querySelector("input");
const preview = document.querySelector(".preview");

input.style.opacity = 0;
```

> **Hinweis:** {{cssxref("opacity")}} wird verwendet, um die Dateieingabe zu verstecken, anstelle von {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}}, weil unterstützende Technologien die beiden letzten Stile so interpretieren, dass die Dateieingabe nicht interaktiv ist.

Danach fügen wir einen [Ereignislistener](/de/docs/Web/API/EventTarget/addEventListener) hinzu, um auf Änderungen an seinem ausgewählten Wert zu hören (in diesem Fall, wenn Dateien ausgewählt werden). Der Ereignislistener ruft unsere benutzerdefinierte Funktion `updateImageDisplay()` auf.

```js
input.addEventListener("change", updateImageDisplay);
```

Jedes Mal, wenn die Funktion `updateImageDisplay()` aufgerufen wird, machen wir:

- Wir verwenden eine {{jsxref("Statements/while", "while")}}-Schleife, um den vorherigen Inhalt des Vorschau-`<div>` zu leeren.
- Wir greifen das [`FileList`](/de/docs/Web/API/FileList)-Objekt ab, das die Informationen zu allen ausgewählten Dateien enthält, und speichern es in einer Variablen namens `curFiles`.
- Wir überprüfen, ob keine Dateien ausgewählt wurden, indem wir überprüfen, ob `curFiles.length` gleich 0 ist. Wenn ja, drucken wir eine Nachricht in das Vorschau-`<div>`, dass keine Dateien ausgewählt wurden.
- Wenn Dateien ausgewählt wurden, durchlaufen wir jede und drucken Informationen darüber in das Vorschau-`<div>`. Zu beachten hier:
  - Wir verwenden die benutzerdefinierte Funktion `validFileType()`, um zu prüfen, ob der Dateityp korrekt ist (z. B. die Bildtypen, die im `accept`-Attribut angegeben sind).
  - Ist er korrekt, dann:

  - Drucken wir ihren Namen und ihre Dateigröße in einen Listeneintrag innerhalb des `div` (bezogen von `file.name` und `file.size`). Die benutzerdefinierte Funktion `returnFileSize()` gibt eine gut formatierte Version der Größe in Bytes/KB/MB zurück (standardmäßig berichtet der Browser die Größe in absoluten Bytes).
  - Erzeugen wir eine Miniaturansicht des Bildes, indem wir [`URL.createObjectURL(file)`](/de/docs/Web/API/URL/createObjectURL_static) aufrufen. Dann fügen wir das Bild auch in den Listeneintrag ein, indem wir ein neues {{htmlelement("img")}} erstellen und dessen [`src`](/de/docs/Web/HTML/Element/img#src) auf das Thumbnail setzen.

- Wenn der Dateityp ungültig ist, zeigen wir eine Nachricht in einem Listeneintrag an, dass der Benutzer eine andere Datei auswählen muss.

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

Die benutzerdefinierte Funktion `validFileType()` nimmt ein [`File`](/de/docs/Web/API/File)-Objekt als Parameter und verwendet dann {{jsxref("Array.prototype.includes()")}}, um zu überprüfen, ob irgendein Wert in `fileTypes` mit der `type`-Eigenschaft der Datei übereinstimmt. Wenn eine Übereinstimmung gefunden wird, gibt die Funktion `true` zurück. Wird keine Übereinstimmung gefunden, gibt es `false` zurück.

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

Die Funktion `returnFileSize()` nimmt eine Zahl (in Bytes, entnommen aus der aktuellen Datei `size`-Eigenschaft) und wandelt sie in eine schön formatierte Größe in Bytes/KB/MB um.

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
> Die "KB"- und "MB"-Einheiten hier verwenden die [SI-Präfix](https://en.wikipedia.org/wiki/Binary_prefix)-Konvention von 1KB = 1000B, ähnlich wie macOS. Unterschiedliche Systeme präsentieren Dateigrößen unterschiedlich – zum Beispiel verwendet Ubuntu IEC-Präfixe, wo 1KiB = 1024B, während RAM-Spezifikationen oft SI-Präfixe verwenden, um binäre Potenzen darzustellen (1KB = 1024B). Aus diesem Grund haben wir `1e3` (`1000`) und `1e6` (`100000`) anstelle von `1024` und `1048576` verwendet. In Ihrer Anwendung sollten Sie das Einheitensystem klar für Ihre Benutzer kommunizieren, wenn die genaue Größe wichtig ist.

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
        Eine Zeichenkette, die den Pfad zur
        ausgewählten Datei darstellt.
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>
        [`change`](/de/docs/Web/API/HTMLElement/change_event),
        [`input`](/de/docs/Web/API/Element/input_event) und
        [`cancel`](/de/docs/Web/API/HTMLElement/cancel_event)
      </td>
    </tr>
    <tr>
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td><a href="/de/docs/Web/HTML/Element/input#required"><code>required</code></a></td>
    </tr>
    <tr>
      <td><strong>Zusätzliche Attribute</strong></td>
      <td>
        <a href="#accept"><code>accept</code></a>,
        <a href="#capture"><code>capture</code></a>,
        <a href="#multiple"><code>multiple</code></a>
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

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) — enthält eine Reihe weiterer nützlicher Beispiele im Zusammenhang mit `<input type="file">` und der [File API](/de/docs/Web/API/File).
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
