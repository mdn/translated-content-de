---
title: <input type="file">
slug: Web/HTML/Element/input/file
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente mit **`type="file"`** erlauben dem Benutzer, eine oder mehrere Dateien aus dem Gerätespeicher auszuwählen. Nach Auswahl können die Dateien über [Formularübermittlung](/de/docs/Learn_web_development/Extensions/Forms) auf einen Server hochgeladen oder mit JavaScript-Code und [der File API](/de/docs/Web/API/File_API/Using_files_from_web_applications) manipuliert werden.

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

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut eines Datei-Inputs enthält eine Zeichenkette, die den Pfad zur ausgewählten Datei bzw. den ausgewählten Dateien repräsentiert. Wenn noch keine Datei ausgewählt wurde, ist der Wert eine leere Zeichenkette (`""`). Wenn der Benutzer mehrere Dateien ausgewählt hat, repräsentiert der `value` die erste Datei in der Liste der ausgewählten Dateien. Die anderen Dateien können über die [Eigenschaft `HTMLInputElement.files` des Eingabeelements](/de/docs/Web/API/File_API/Using_files_from_web_applications#getting_information_about_selected_files) identifiziert werden.

> [!NOTE]
> Der Wert ist [immer mit dem Dateinamen vorangestellt `C:\fakepath\`](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly), was nicht der echte Pfad der Datei ist. Dies dient dazu, bösartige Software daran zu hindern, die Dateistruktur des Benutzers zu erraten.

## Zusätzliche Attribute

Zusätzlich zu den gemeinsamen Attributen, die von allen {{HTMLElement("input")}} Elementen geteilt werden, unterstützen Inputs vom Typ `file` auch die folgenden Attribute.

### accept

Der Wert des [`accept`](/de/docs/Web/HTML/Attributes/accept)-Attributes ist eine Zeichenkette, die die Dateitypen definiert, die der Dateieingang akzeptieren sollte. Diese Zeichenkette ist eine durch Kommas getrennte Liste von **[einzigartigen Dateitypsspezifizierern](#einzigartige_dateitypsspezifizierer)**. Da ein gegebener Dateityp auf mehr als eine Weise identifiziert werden kann, ist es nützlich, eine umfassende Liste von Typsspezifizierern bereitzustellen, wenn Sie Dateien in einem bestimmten Format benötigen.

Zum Beispiel gibt es mehrere Möglichkeiten, Microsoft Word-Dokumente zu identifizieren, daher könnte eine Website, die Word-Dateien akzeptiert, ein `<input>` wie dieses verwenden:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### capture

Der Wert des [`capture`](/de/docs/Web/HTML/Attributes/capture)-Attributes ist eine Zeichenkette, die angibt, welche Kamera zum Aufnehmen von Bild- oder Videodaten verwendet werden soll, wenn das [`accept`](/de/docs/Web/HTML/Attributes/accept)-Attribut angibt, dass die Eingabe einer dieser Typen sein sollte. Ein Wert von `user` gibt an, dass die benutzerseitige Kamera und/oder das Mikrofon verwendet werden sollen. Ein Wert von `environment` spezifiziert, dass die nach außen gerichtete Kamera und/oder das Mikrofon verwendet werden sollen. Wenn dieses Attribut fehlt, kann der {{Glossary("user_agent", "Benutzeragent")}} selbst entscheiden, was zu tun ist. Wenn der angeforderte Blickwinkelmodus nicht verfügbar ist, kann der Benutzeragent auf seinen bevorzugten Standardmodus zurückfallen.

> **Hinweis:** `capture` war zuvor ein boolesches Attribut, das, wenn vorhanden, verlangte, dass das Aufnahmegerät des Geräts wie Kamera oder Mikrofon verwendet wurde, anstatt eine Dateieingabe anzufordern.

### multiple

Wenn das [`multiple`](/de/docs/Web/HTML/Attributes/multiple) Boolesche Attribut angegeben ist, erlaubt die Dateieingabe dem Benutzer, mehr als eine Datei auszuwählen.

## Nicht standardisierte Attribute

Zusätzlich zu den oben aufgeführten Attributen sind die folgenden nicht standardisierten Attribute in einigen Browsern verfügbar. Sie sollten versuchen, deren Verwendung zu vermeiden, da dies die Fähigkeit Ihres Codes einschränkt, in Browsern zu funktionieren, die diese nicht implementieren.

### `webkitdirectory`

Das Boolesche `webkitdirectory`-Attribut zeigt, wenn vorhanden, an, dass in der Dateiauswahloberfläche nur Verzeichnisse ausgewählt werden können. Weitere Details und Beispiele finden Sie unter [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

Obwohl ursprünglich nur für WebKit-basierte Browser implementiert, ist `webkitdirectory` auch in Firefox verwendbar. Obwohl es eine relativ breite Unterstützung hat, ist es immer noch nicht standardisiert und sollte nur verwendet werden, wenn es keine Alternative gibt.

## Einzigartige Dateitypsspezifizierer

Ein **einzigartiger Dateitypsspezifizierer** ist eine Zeichenkette, die einen Dateityp beschreibt, der vom Benutzer in einem {{HTMLElement("input")}} Element vom Typ `file` ausgewählt werden kann. Jeder einzigartige Dateitypsspezifizierer kann eine der folgenden Formen annehmen:

- Eine gültige nicht beachtete Dateierweiterung, die mit einem Punkt (".") beginnt, z.B. `.jpg`, `.pdf` oder `.doc`.
- Eine gültige MIME-Typ-Zeichenkette, ohne Erweiterungen.
- Die Zeichenkette `audio/*`, die "jede Audiodatei" bedeutet.
- Die Zeichenkette `video/*`, was "jede Videodatei" bedeutet.
- Die Zeichenkette `image/*`, was "jede Bilddatei" bedeutet.

Das `accept`-Attribut nimmt eine Zeichenkette, die einen oder mehrere dieser einzigartigen Dateitypsspezifizierer als ihren Wert enthält, durch Kommas getrennt. Zum Beispiel könnte eine Dateiauswahl, die Inhalte benötigt, die als Bild dargestellt werden können, einschließlich sowohl Standardbildformate als auch PDF-Dateien, wie folgt aussehen:

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

Dies ergibt die folgende Ausgabe:

{{EmbedLiveSample('A_basic_example', 650, 90)}}

> [!NOTE]
> Dieses Beispiel finden Sie auch auf GitHub — siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html) und [sehen Sie es live](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Unabhängig vom Gerät oder Betriebssystem des Benutzers bietet die Dateieingabe eine Schaltfläche, die einen Dateiauswahldialog öffnet, der es dem Benutzer ermöglicht, eine Datei auszuwählen.

Das Einfügen des [`multiple`](#multiple)-Attributes, wie oben gezeigt, gibt an, dass mehrere Dateien gleichzeitig ausgewählt werden können. Der Benutzer kann mehrere Dateien aus der Dateiauswahl mit jeder Methode auswählen, die seine gewählte Plattform erlaubt (z.B. durch Halten von <kbd>Shift</kbd> oder <kbd>Control</kbd> und dann Klicken). Wenn Sie möchten, dass der Benutzer nur eine einzelne Datei pro `<input>` auswählt, lassen Sie das `multiple`-Attribut weg.

### Informationen zu ausgewählten Dateien abrufen

Die ausgewählten Dateien werden durch die `HTMLInputElement.files`-Eigenschaft des Elements zurückgegeben, die ein [`FileList`](/de/docs/Web/API/FileList)-Objekt enthält, das eine Liste von [`File`](/de/docs/Web/API/File)-Objekten enthält. Die `FileList` funktioniert wie ein Array, sodass Sie ihre `length`-Eigenschaft überprüfen können, um die Anzahl der ausgewählten Dateien zu ermitteln.

Jedes `File`-Objekt enthält folgende Informationen:

- `name`
  - : Der Name der Datei.
- `lastModified`
  - : Eine Zahl, die das Datum und die Uhrzeit angibt, zu der die Datei zuletzt geändert wurde, in Millisekunden seit dem UNIX-Epoch (1. Januar 1970, Mitternacht).
- `lastModifiedDate` {{deprecated_inline}}
  - : Ein {{jsxref("Date")}}-Objekt, das das Datum und die Uhrzeit angibt, zu der die Datei zuletzt geändert wurde. _Dies ist veraltet und sollte nicht verwendet werden. Verwenden Sie stattdessen `lastModified`._
- `size`
  - : Die Größe der Datei in Bytes.
- `type`
  - : Der [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) der Datei.
- `webkitRelativePath` {{non-standard_inline}}
  - : Eine Zeichenkette, die den Pfad der Datei relativ zum Basisverzeichnis angibt, das in einer Verzeichnisauswahl ausgewählt wurde (d.h. einem `file`-Picker, in dem das [`webkitdirectory`](#webkitdirectory)-Attribut gesetzt ist). _Dies ist nicht standardisiert und sollte mit Vorsicht verwendet werden._

### Akzeptierte Dateitypen begrenzen

Oft möchten Sie nicht erlauben, dass der Benutzer einen beliebigen Dateityp auswählt; stattdessen möchten Sie oft, dass er Dateien eines bestimmten Typs oder bestimmter Typen auswählt. Zum Beispiel, wenn Ihre Dateieingabe es Benutzern ermöglicht, ein Profilbild hochzuladen, möchten Sie wahrscheinlich, dass sie webkompatible Bildformate wie {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}} auswählen.

Akzeptable Dateitypen können mit dem [`accept`](#accept)-Attribut spezifiziert werden, das eine durch Kommas getrennte Liste von zulässigen Dateierweiterungen oder MIME-Typen verwendet. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG- oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*` MIME-Typ. (Viele Mobilgeräte erlauben es dem Benutzer auch, ein Bild mit der Kamera aufzunehmen, wenn dies verwendet wird.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — akzeptiert alles, was nach einem MS Word-Dokument "riecht".

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

> [!NOTE]
> Sie können dieses Beispiel auch auf GitHub finden — siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-with-accept.html) und [sehen Sie es live](https://mdn.github.io/learning-area/html/forms/file-examples/file-with-accept.html).

Es sieht möglicherweise ähnlich aus, aber wenn Sie versuchen, eine Datei mit diesem Input auszuwählen, werden Sie feststellen, dass die Dateiauswahl nur die Dateitypen zulässt, die im `accept`-Wert angegeben sind (die genaue Benutzeroberfläche unterscheidet sich zwischen Browsern und Betriebssystemen).

Das `accept`-Attribut validiert nicht die Typen der ausgewählten Dateien; es gibt den Browsern Anhaltspunkte, um die Benutzer dazu zu führen, die richtigen Dateitypen auszuwählen. Es ist in den meisten Fällen weiterhin möglich, dass Benutzer eine Option im Dateiauswahlmenü umschalten, die es ihnen ermöglicht, dies zu umgehen und eine beliebige Datei auszuwählen, und dann falsche Dateitypen zu wählen.

Deshalb sollten Sie sicherstellen, dass das `accept`-Attribut durch eine geeignete serverseitige Validierung gesichert ist.

### Abbrüche erkennen

Das `cancel`-Ereignis wird ausgelöst, wenn der Benutzer seine Auswahl nicht ändert und die zuvor ausgewählten Dateien erneut auswählt. Das `cancel`-Ereignis wird auch ausgelöst, wenn das Dateiauswahlfenster geschlossen oder über die "Abbrechen"-Schaltfläche oder die <kbd>escape</kbd>-Taste abgebrochen wird.

Zum Beispiel wird der folgende Code in die Konsole protokollieren, wenn der Benutzer das Popup schließt, ohne eine Datei auszuwählen:

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

1. Sie können den Wert eines Dateiauswählers nicht durch ein Skript setzen — das Folgende hat beispielsweise keine Wirkung:

   ```js
   const input = document.querySelector("input[type=file]");
   input.value = "foo";
   ```

2. Wenn eine Datei mit einem `<input type="file">` ausgewählt wird, wird der tatsächliche Pfad zur Quelldatei aus offensichtlichen Sicherheitsgründen nicht im `value`-Attribut des Eingabefelds angezeigt. Stattdessen wird der Dateiname angezeigt, mit `C:\fakepath\` vorangestellt. Es gibt einige historische Gründe für diese Eigenart, aber sie wird in allen modernen Browsern unterstützt und ist tatsächlich [im Standard definiert](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly).

## Beispiele

In diesem Beispiel werden wir einen etwas fortgeschritteneren Dateiauswähler präsentieren, der die Dateiinformationen nutzt, die in der `HTMLInputElement.files`-Eigenschaft verfügbar sind, sowie einige clevere Tricks zeigt.

> [!NOTE]
> Sie können den vollständigen Quellcode für dieses Beispiel auf GitHub sehen — [file-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-example.html) ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/file-examples/file-example.html)). Wir werden das CSS nicht erklären; der Fokus liegt auf dem JavaScript.

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

Das ist ähnlich zu dem, was wir zuvor gesehen haben — nichts Besonderes zu kommentieren.

Als nächstes gehen wir durch das JavaScript.

In den ersten Zeilen des Skripts erhalten wir Referenzen zur Formulareingabe selbst und dem {{htmlelement("div")}}-Element mit der Klasse `.preview`. Weiterhin verbergen wir das {{htmlelement("input")}}-Element — wir tun dies, weil Dateieingaben dazu neigen, unansehnlich, schwer stilisierbar und in ihrem Design zwischen den Browsern inkonsistent zu sein. Sie können das `input`-Element aktivieren, indem Sie auf sein {{htmlelement("label")}} klicken, daher ist es besser, das `input` optisch zu verbergen und das Label wie einen Button zu gestalten, sodass der Benutzer weiß, dass er es zur Dateiauswahl verwenden kann.

```js
const input = document.querySelector("input");
const preview = document.querySelector(".preview");

input.style.opacity = 0;
```

> **Hinweis:** {{cssxref("opacity")}} wird verwendet, um die Dateieingabe zu verbergen, anstelle von {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}}, da unterstützende Technologie die beiden letzteren Stile interpretiert, als wäre die Dateieingabe nicht interaktiv.

Als nächstes fügen wir dem Input einen [Event-Listener](/de/docs/Web/API/EventTarget/addEventListener) hinzu, um auf Änderungen seines ausgewählten Wertes zu hören (in diesem Fall, wenn Dateien ausgewählt werden). Der Event-Listener ruft unsere benutzerdefinierte `updateImageDisplay()`-Funktion auf.

```js
input.addEventListener("change", updateImageDisplay);
```

Wann immer die `updateImageDisplay()`-Funktion aufgerufen wird, tun wir folgendes:

- Wir verwenden eine {{jsxref("Statements/while", "while")}}-Schleife, um die vorherigen Inhalte des Vorschau-`<div>` zu leeren.
- Wir holen das [`FileList`](/de/docs/Web/API/FileList)-Objekt, das die Informationen zu allen ausgewählten Dateien enthält, und speichern es in einer Variablen namens `curFiles`.
- Wir überprüfen, ob keine Dateien ausgewählt wurden, indem wir prüfen, ob `curFiles.length` gleich 0 ist. Wenn dies der Fall ist, drucken wir eine Nachricht ins Vorschaublock `div`, die besagt, dass keine Dateien ausgewählt wurden.
- Wenn Dateien ausgewählt wurden, durchlaufen wir jede einzelne und drucken Informationen darüber ins Vorschaublock `div`. Dinge, die hier zu beachten sind:
- Wir verwenden die benutzerdefinierte `validFileType()`-Funktion, um zu überprüfen, ob die Datei vom richtigen Typ ist (z.B. die Bildtypen, die im `accept`-Attribut angegeben sind).
- Wenn sie es ist, tun wir folgendes:

  - Wir drucken ihren Namen und ihre Dateigröße in ein Listenitem im Vorschaublock `div` (erhalten von `file.name` und `file.size`). Die benutzerdefinierte `returnFileSize()`-Funktion gibt eine formatiert separate Version der Größe in Bytes/KB/MB zurück (standardmäßig gibt der Browser die Größe in absoluten Bytes an).
  - Wir erstellen eine Miniaturansicht der Datei, indem wir [`URL.createObjectURL(file)`](/de/docs/Web/API/URL/createObjectURL_static) verwenden. Dann fügen wir das Bild auch in das Listenitem ein, indem wir ein neues {{htmlelement("img")}} erzeugen und sein [`src`](/de/docs/Web/HTML/Element/img#src) auf das Vorschaubild setzen.

- Wenn der Dateityp ungültig ist, zeigen wir eine Nachricht in einem Listenpunkt an, die dem Benutzer sagt, dass er einen anderen Dateityp auswählen muss.

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

Die benutzerdefinierte `validFileType()`-Funktion nimmt ein [`File`](/de/docs/Web/API/File)-Objekt als Parameter und verwendet {{jsxref("Array.prototype.includes()")}}, um zu überprüfen, ob irgendein Wert im `fileTypes` dem `type`-Eigenschaft der Datei entspricht. Wenn ein Treffer gefunden wird, gibt die Funktion `true` zurück. Wenn kein Treffer gefunden wird, gibt sie `false` zurück.

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

Die `returnFileSize()`-Funktion nimmt eine Zahl (durch Bytes, aus der aktuellen `size`-Eigenschaft der Datei), und wandelt sie in eine formatiert separate Größenangabe in Bytes/KB/MB um.

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
> Die "KB"- und "MB"-Einheiten verwenden hier die [SI-Präfix](https://en.wikipedia.org/wiki/Binary_prefix)-Konvention von 1KB = 1000B, ähnlich wie unter macOS. Verschiedene Systeme stellen Dateigrößen unterschiedlich dar — zum Beispiel verwendet Ubuntu IEC-Präfixe, bei denen 1KiB = 1024B ist, während RAM-Spezifikationen oft SI-Präfixe verwenden, um Zweierpotenzen darzustellen (1KB = 1024B). Aus diesem Grund haben wir `1e3` (`1000`) und `1e6` (`100000`) anstelle von `1024` und `1048576` verwendet. In Ihrer Anwendung sollten Sie das Einheitensystem klar an Ihre Benutzer kommunizieren, wenn die genaue Größe wichtig ist.

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

## Technische Übersicht

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

- [Verwenden von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) — enthält eine Reihe anderer nützlicher Beispiele im Zusammenhang mit `<input type="file">` und der [File API](/de/docs/Web/API/File).
