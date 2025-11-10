---
title: Verwenden von Dateien aus Webanwendungen
slug: Web/API/File_API/Using_files_from_web_applications
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{DefaultAPISidebar("File API")}}{{AvailableInWorkers}}

Mithilfe der File API kann Webinhalt den Benutzer dazu auffordern, lokale Dateien auszuwählen und dann den Inhalt dieser Dateien lesen. Diese Auswahl kann entweder durch ein HTML `{{HTMLElement("input/file", '&lt;input type="file"&gt;')}}` Element oder durch Drag & Drop durchgeführt werden.

## Zugriff auf ausgewählte Datei(en)

Betrachten Sie dieses HTML:

```html
<input type="file" id="input" multiple />
```

Die File API ermöglicht den Zugriff auf eine [`FileList`](/de/docs/Web/API/FileList), die [`File`](/de/docs/Web/API/File) Objekte enthält, die die vom Benutzer ausgewählten Dateien repräsentieren.

Das `multiple` Attribut im `input` Element erlaubt es dem Benutzer, mehrere Dateien auszuwählen.

Zugriff auf die erste ausgewählte Datei mit einem klassischen DOM-Selektor:

```js
const selectedFile = document.getElementById("input").files[0];
```

### Zugriff auf ausgewählte Datei(en) bei einem Change-Event

Es ist außerdem möglich (aber nicht zwingend erforderlich), über das `change` Event auf die [`FileList`](/de/docs/Web/API/FileList) zuzugreifen. Sie müssen [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um den `change` Event-Listener hinzuzufügen, wie folgt:

```js
const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles);
function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
}
```

## Informationen über ausgewählte Datei(en) erhalten

Das vom DOM bereitgestellte [`FileList`](/de/docs/Web/API/FileList) Objekt listet alle vom Benutzer ausgewählten Dateien auf, jede spezifiziert als ein [`File`](/de/docs/Web/API/File) Objekt. Sie können bestimmen, wie viele Dateien der Benutzer ausgewählt hat, indem Sie den Wert des `length` Attributs der Dateiliste überprüfen:

```js
const numFiles = fileList.length;
```

Einzelne [`File`](/de/docs/Web/API/File) Objekte können durch Zugriff auf die Liste als Array abgerufen werden.

Es gibt drei Attribute im [`File`](/de/docs/Web/API/File) Objekt, die nützliche Informationen über die Datei enthalten.

- `name`
  - : Der Name der Datei als schreibgeschützter String. Dies ist nur der Dateiname und enthält keine Pfadinformationen.
- `size`
  - : Die Größe der Datei in Bytes als schreibgeschützter 64-Bit Integer.
- `type`
  - : Der MIME-Typ der Datei als schreibgeschützter String oder `""` wenn der Typ nicht bestimmt werden konnte.

### Beispiel: Anzeigen der Größe von Datei(en)

Das folgende Beispiel zeigt eine mögliche Verwendung der `size` Eigenschaft:

```html
<form name="uploadForm">
  <div>
    <input id="uploadInput" type="file" multiple />
    <label for="fileNum">Selected files:</label>
    <output id="fileNum">0</output>;
    <label for="fileSize">Total size:</label>
    <output id="fileSize">0</output>
  </div>
  <div><input type="submit" value="Send file" /></div>
</form>
```

```js
const uploadInput = document.getElementById("uploadInput");
uploadInput.addEventListener("change", () => {
  // Calculate total size
  let numberOfBytes = 0;
  for (const file of uploadInput.files) {
    numberOfBytes += file.size;
  }

  // Approximate to the closest prefixed unit
  const units = ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
  const exponent = Math.min(
    Math.floor(Math.log(numberOfBytes) / Math.log(1024)),
    units.length - 1,
  );
  const approx = numberOfBytes / 1024 ** exponent;
  const output =
    exponent === 0
      ? `${numberOfBytes} bytes`
      : `${approx.toFixed(3)} ${units[exponent]} (${numberOfBytes} bytes)`;

  document.getElementById("fileNum").textContent = uploadInput.files.length;
  document.getElementById("fileSize").textContent = output;
});
```

## Verwenden von versteckten Datei Eingabeelementen mit der click() Methode

Sie können das zugegebenermaßen unschöne Datei {{HTMLElement("input")}} Element verbergen und Ihre eigene Schnittstelle zum Öffnen des Dateiauswahlfeldes präsentieren und anzeigen, welche Datei oder Dateien der Benutzer ausgewählt hat. Sie können dies tun, indem Sie das Eingabeelement mit `display:none` gestalten und die [`click()`](/de/docs/Web/API/HTMLElement/click) Methode am {{HTMLElement("input")}} Element aufrufen.

Betrachten Sie dieses HTML:

```html
<input type="file" id="fileElem" multiple accept="image/*" />
<button id="fileSelect" type="button">Select some files</button>
```

```css
#fileElem {
  display: none;
}
```

Der Code, der das `click` Event behandelt, kann so aussehen:

```js
const fileSelect = document.getElementById("fileSelect");
const fileElem = document.getElementById("fileElem");

fileSelect.addEventListener("click", (e) => {
  if (fileElem) {
    fileElem.click();
  }
});
```

Sie können das {{HTMLElement("button")}} Element nach Belieben gestalten.

## Verwenden eines label Elements, um ein verstecktes Datei Eingabeelement auszulösen

Um das Öffnen des Dateiauswahlfeldes ohne JavaScript (die click() Methode) zu ermöglichen, kann ein {{HTMLElement("label")}} Element verwendet werden. Beachten Sie, dass in diesem Fall das Eingabeelement nicht mit `display: none` (auch nicht mit `visibility: hidden`) verborgen werden darf, da das `label` sonst nicht über die Tastatur zugänglich wäre. Verwenden Sie stattdessen die [visually-hidden Technik](https://www.a11yproject.com/posts/how-to-hide-content/).

Betrachten Sie dieses HTML:

```html
<input
  type="file"
  id="fileElem"
  multiple
  accept="image/*"
  class="visually-hidden" />
<label for="fileElem">Select some files</label>
```

und dieses CSS:

```css
.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

input.visually-hidden:is(:focus, :focus-within) + label {
  outline: thin dotted;
}
```

Es ist nicht erforderlich, JavaScript-Code hinzuzufügen, um `fileElem.click()` aufzurufen. Auch in diesem Fall können Sie das Label-Element nach Belieben gestalten. Sie müssen einen visuellen Hinweis für den Fokusstatus des versteckten Eingabefeldes auf seinem Label bereitstellen, sei es eine Kontur, wie oben gezeigt, oder Hintergrundfarbe oder Box-Shadow. (Zum Zeitpunkt des Schreibens zeigt Firefox diesen visuellen Hinweis für `<input type="file">` Elemente nicht an.)

## Dateien per Drag & Drop auswählen

Sie können den Benutzer auch Dateien in Ihre Webanwendung ziehen und dort ablegen lassen.

Der erste Schritt besteht darin, eine Ablagezone einzurichten. Welche Teile Ihres Inhalts Ablegevorgänge akzeptieren, kann je nach Design Ihrer Anwendung variieren, aber es ist einfach, ein Element zu erstellen, das Drop-Events empfängt:

```js
let dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter);
dropbox.addEventListener("dragover", dragover);
dropbox.addEventListener("drop", drop);
```

In diesem Beispiel verwandeln wir das Element mit der ID `dropbox` in unsere Ablagezone. Dies geschieht, indem Listener für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event), [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Events hinzugefügt werden.

Wir müssen in unserem Fall nichts mit den `dragenter` und `dragover` Ereignissen machen, daher sind diese Funktionen einfach. Sie stoppen einfach die Eventausbreitung und verhindern, dass die Standardaktion ausgeführt wird:

```js
function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}
```

Der eigentliche Zauber passiert in der `drop()` Funktion:

```js
function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  const dt = e.dataTransfer;
  const files = dt.files;

  handleFiles(files);
}
```

Hier rufen wir das `dataTransfer` Feld vom Event ab, ziehen die Dateiliste daraus und übergeben sie dann an `handleFiles()`. Ab diesem Punkt ist die Verarbeitung der Dateien dieselbe, unabhängig davon, ob der Benutzer das `input` Element oder Drag & Drop verwendet hat.

## Beispiel: Anzeigen von Vorschaubildern der von Benutzern ausgewählten Bilder

Angenommen, Sie entwickeln die nächste großartige Foto-Sharing-Website und möchten HTML verwenden, um Vorschaubilder von Bildern anzuzeigen, bevor der Benutzer sie tatsächlich hochlädt. Sie können Ihr Eingabeelement oder Ihre Ablagezone wie zuvor besprochen einrichten und sie eine Funktion wie die `handleFiles()` Funktion unten aufrufen lassen.

```js
function handleFiles(files) {
  for (const file of files) {
    if (!file.type.startsWith("image/")) {
      continue;
    }

    const img = document.createElement("img");
    img.classList.add("obj");
    img.file = file;
    preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.

    const reader = new FileReader();
    reader.onload = (e) => {
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
```

Hier betrachtet unsere Schleife zur Verarbeitung der vom Benutzer ausgewählten Dateien das `type` Attribut jeder Datei, um zu sehen, ob ihr MIME-Typ mit `image/` beginnt. Für jede Datei, die ein Bild ist, erstellen wir ein neues `img` Element. CSS kann verwendet werden, um hübsche Rahmen oder Schatten zu erstellen und die Größe des Bildes festzulegen, sodass dies hier nicht geschehen muss.

Jedes Bild erhält die CSS-Klasse `obj` hinzugefügt, was es einfach macht, es im DOM-Baum zu finden. Wir fügen auch ein `file` Attribut zu jedem Bild hinzu, das die [`File`](/de/docs/Web/API/File) für das Bild angibt; dies ermöglicht es uns, die Bilder später tatsächlich für den Upload abzurufen. Wir verwenden [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild), um das neue Vorschaubild in den Vorschaubereich unseres Dokuments hinzuzufügen.

Als Nächstes richten wir den [`FileReader`](/de/docs/Web/API/FileReader) ein, um das Bild asynchron zu laden und es an das `img` Element anzuhängen. Nachdem wir das neue `FileReader` Objekt erstellt haben, richten wir seine `onload` Funktion ein und rufen `readAsDataURL()` auf, um die Leseoperation im Hintergrund zu starten. Wenn der gesamte Inhalt der Bilddatei geladen ist, wird er in eine `data:` URL umgewandelt, die an den `onload` Callback übergeben wird. Unsere Implementierung dieser Routine setzt das `src` Attribut des `img` Elements auf das geladene Bild, was dazu führt, dass das Bild in der Miniaturvorschau auf dem Bildschirm des Benutzers erscheint.

## Verwenden von Objekt-URLs

Die DOM-Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) ermöglichen es Ihnen, einfache URL-Strings zu erstellen, die verwendet werden können, um auf alle Daten zu verweisen, die mit einem DOM [`File`](/de/docs/Web/API/File) Objekt referenziert werden können, einschließlich lokaler Dateien auf dem Computer des Benutzers.

Wenn Sie ein [`File`](/de/docs/Web/API/File) Objekt haben, auf das Sie aus HTML heraus per URL verweisen möchten, können Sie eine Objekt-URL dafür so erstellen:

```js
const objectURL = window.URL.createObjectURL(fileObj);
```

Die Objekt-URL ist ein String, der das [`File`](/de/docs/Web/API/File) Objekt identifiziert. Jedes Mal, wenn Sie [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) aufrufen, wird eine eindeutige Objekt-URL erstellt, auch wenn Sie für diese Datei bereits eine Objekt-URL erstellt haben. Jede dieser URLs muss freigegeben werden. Während sie automatisch freigegeben werden, wenn das Dokument entladen wird, sollten Sie, wenn Ihre Seite sie dynamisch verwendet, sie explizit freigeben, indem Sie [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) aufrufen:

```js
URL.revokeObjectURL(objectURL);
```

## Beispiel: Verwenden von Objekt-URLs zum Anzeigen von Bildern

Dieses Beispiel verwendet Objekt-URLs, um Bildminiaturen anzuzeigen. Zusätzlich werden andere Dateiinformationen angezeigt, einschließlich ihrer Namen und Größen.

Das HTML, das die Schnittstelle darstellt, sieht so aus:

```html
<input type="file" id="fileElem" multiple accept="image/*" />
<a href="#" id="fileSelect">Select some files</a>
<div id="fileList">
  <p>No files selected!</p>
</div>
```

```css
#fileElem {
  display: none;
}
```

Dies etabliert unser Datei {{HTMLElement("input")}} Element sowie einen Link, der den Dateiauswähler aufruft (da wir das Datei-Eingabefeld ausgeblendet halten, um zu verhindern, dass diese weniger ansprechende Benutzeroberfläche angezeigt wird). Dies wird im Abschnitt [Verwenden von versteckten Datei Eingabeelementen mit der click() Methode](#using_hidden_file_input_elements_using_the_click_method) erklärt, so wie auch die Methode erläutert wird, die den Dateiauswähler aufruft.

Die `handleFiles()` Methode folgt:

```js
const fileSelect = document.getElementById("fileSelect"),
  fileElem = document.getElementById("fileElem"),
  fileList = document.getElementById("fileList");

fileSelect.addEventListener("click", (e) => {
  if (fileElem) {
    fileElem.click();
  }
  e.preventDefault(); // prevent navigation to "#"
});

fileElem.addEventListener("change", handleFiles);

function handleFiles() {
  fileList.textContent = "";
  if (!this.files.length) {
    const p = document.createElement("p");
    p.textContent = "No files selected!";
    fileList.appendChild(p);
  } else {
    const list = document.createElement("ul");
    fileList.appendChild(list);
    for (const file of this.files) {
      const li = document.createElement("li");
      list.appendChild(li);

      const img = document.createElement("img");
      img.src = URL.createObjectURL(file);
      img.height = 60;
      li.appendChild(img);
      const info = document.createElement("span");
      info.textContent = `${file.name}: ${file.size} bytes`;
      li.appendChild(info);
    }
  }
}
```

Dies beginnt mit dem Abrufen der URL des {{HTMLElement("div")}} mit der ID `fileList`. Dies ist der Block, in den wir unsere Dateiliste, einschließlich der Miniaturen, einfügen werden.

Wenn das [`FileList`](/de/docs/Web/API/FileList) Objekt, das an `handleFiles()` übergeben wird, leer ist, setzen wir das innere HTML des Blocks auf "Keine Dateien ausgewählt!". Andernfalls beginnen wir mit dem Erstellen unserer Dateiliste wie folgt:

1. Ein neues ungeordnetes Listen-({{HTMLElement("ul")}})-Element wird erstellt.
2. Das neue Listenelement wird in den {{HTMLElement("div")}} Block eingefügt, indem die [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) Methode aufgerufen wird.
3. Für jede [`File`](/de/docs/Web/API/File) in der durch `files` repräsentierten [`FileList`](/de/docs/Web/API/FileList):
   1. Erstellen Sie ein neues Listenelement ({{HTMLElement("li")}}) und fügen Sie es in die Liste ein.
   2. Erstellen Sie ein neues Bild ({{HTMLElement("img")}}) Element.
   3. Setzen Sie die Quelle des Bildes auf eine neue Objekt-URL, die die Datei repräsentiert, und erstellen Sie die Blob-URL mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static).
   4. Legen Sie die Höhe des Bildes auf 60 Pixel fest.
   5. Fügen Sie das neue Listenelement zur Liste hinzu.

Hier ist eine Live-Demo des obigen Codes:

{{EmbedLiveSample('Example_Using_object_URLs_to_display_images', '100%', '300px')}}

Beachten Sie, dass wir die Objekt-URL nicht sofort nach dem Laden des Bildes widerrufen, da dies das Bild für Benutzerinteraktionen unbrauchbar machen würde (wie zum Beispiel Rechtsklick, um das Bild zu speichern oder es in einem neuen Tab zu öffnen). Für langlebige Anwendungen sollten Sie Objekt-URLs freigeben, wenn sie nicht mehr benötigt werden (zum Beispiel, wenn das Bild aus dem DOM entfernt wird), um Speicher freizugeben, indem Sie die Methode [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) aufrufen und die Objekt-URL-Zeichenkette übergeben.

## Beispiel: Hochladen einer vom Benutzer ausgewählten Datei

Dieses Beispiel zeigt, wie der Benutzer Dateien (wie die in den vorherigen Beispielen ausgewählten Bilder) auf einen Server hochladen kann.

> [!NOTE]
> Es ist normalerweise vorzuziehen, HTTP-Anfragen mit der [Fetch API](/de/docs/Web/API/Fetch_API) anstelle von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) zu machen. In diesem Fall möchten wir dem Benutzer jedoch den Fortschritt des Uploads anzeigen, und dieses Feature wird von der Fetch API noch nicht unterstützt, daher verwendet das Beispiel `XMLHttpRequest`.
>
> Arbeiten zur Verfolgung der Standardisierung von Fortschrittsbenachrichtigungen mit der Fetch API finden Sie unter <https://github.com/whatwg/fetch/issues/607>.

### Erstellung der Upload-Aufgaben

Weiterführend mit dem Code, der die Miniaturbilder im vorherigen Beispiel erzeugt hat, erinnern Sie sich daran, dass jedes Miniaturbild in der CSS-Klasse `obj` mit der entsprechenden [`File`](/de/docs/Web/API/File) in einem `file` Attribut angehängt ist. Dies ermöglicht es uns, alle Bilder auszuwählen, die der Benutzer zum Hochladen ausgesucht hat, indem wir [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden, wie folgt:

```js
function sendFiles() {
  const imgs = document.querySelectorAll(".obj");

  for (const img of imgs) {
    new FileUpload(img, img.file);
  }
}
```

`document.querySelectorAll` holt ein [`NodeList`](/de/docs/Web/API/NodeList) von allen Elementen im Dokument mit der CSS-Klasse `obj`. In unserem Fall werden dies alle Bildminiaturen sein. Sobald wir diese Liste haben, ist es einfach, sie durchzugehen und für jede ein neues `FileUpload` Objekt zu erstellen. Jedes dieser Objekte kümmert sich um das Hochladen der entsprechenden Datei.

### Verarbeitung des Upload-Vorgangs für eine Datei

Die `FileUpload` Funktion akzeptiert zwei Eingaben: ein Bild-Element und eine Datei, aus der die Bilddaten gelesen werden sollen.

```js
function FileUpload(img, file) {
  const reader = new FileReader();
  this.ctrl = createThrobber(img);
  const xhr = new XMLHttpRequest();
  this.xhr = xhr;

  this.xhr.upload.addEventListener("progress", (e) => {
    if (e.lengthComputable) {
      const percentage = Math.round((e.loaded * 100) / e.total);
      this.ctrl.update(percentage);
    }
  });

  xhr.upload.addEventListener("load", (e) => {
    this.ctrl.update(100);
    const canvas = this.ctrl.ctx.canvas;
    canvas.parentNode.removeChild(canvas);
  });
  xhr.open(
    "POST",
    "https://demos.hacks.mozilla.org/paul/demos/resources/webservices/devnull.php",
  );
  xhr.overrideMimeType("text/plain; charset=x-user-defined-binary");
  reader.onload = (evt) => {
    xhr.send(evt.target.result);
  };
  reader.readAsBinaryString(file);
}

function createThrobber(img) {
  const throbberWidth = 64;
  const throbberHeight = 6;
  const throbber = document.createElement("canvas");
  throbber.classList.add("upload-progress");
  throbber.setAttribute("width", throbberWidth);
  throbber.setAttribute("height", throbberHeight);
  img.parentNode.appendChild(throbber);
  throbber.ctx = throbber.getContext("2d");
  throbber.ctx.fillStyle = "orange";
  throbber.update = (percent) => {
    throbber.ctx.fillRect(
      0,
      0,
      (throbberWidth * percent) / 100,
      throbberHeight,
    );
    if (percent === 100) {
      throbber.ctx.fillStyle = "green";
    }
  };
  throbber.update(0);
  return throbber;
}
```

Die oben gezeigte `FileUpload()` Funktion erstellt einen Fortschrittsbalken, der zur Anzeige von Fortschrittsinformationen verwendet wird, und erstellt dann einen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), um den Daten-Upload zu behandeln.

Bevor tatsächlich Daten übertragen werden, werden mehrere vorbereitende Schritte durchgeführt:

1. Der `progress` Listener des `XMLHttpRequest` Uploads wird so eingestellt, dass er den Fortschrittsbalken mit neuen Prozentinformationen aktualisiert, damit der Fortschrittsbalken während des Uploads auf Basis der neuesten Informationen aktualisiert wird.
2. Der `load` Event-Handler des `XMLHttpRequest` Uploads wird so eingestellt, dass die Fortschrittsinformationen des Fortschrittsbalkens auf 100% aktualisiert werden, um sicherzustellen, dass der Fortschrittsindikator tatsächlich 100% erreicht (im Falle von Granularitätsproblemen beim Prozess). Dann wird der Fortschrittsbalken entfernt, da er nicht mehr benötigt wird. Dadurch verschwindet der Fortschrittsbalken, sobald der Upload abgeschlossen ist.
3. Die Anfrage zum Hochladen der Bilddatei wird geöffnet, indem die `open()` Methode des `XMLHttpRequest` aufgerufen wird, um eine POST-Anfrage zu starten.
4. Der MIME-Typ für den Upload wird durch Aufruf der `overrideMimeType()` Funktion des `XMLHttpRequest` festgelegt. In diesem Fall verwenden wir einen generischen MIME-Typ; je nach Anwendungsfall müssen Sie den MIME-Typ möglicherweise gar nicht setzen.
5. Das `FileReader` Objekt wird verwendet, um die Datei in einen Binär-String zu konvertieren.
6. Schließlich, wenn der Inhalt geladen ist, wird die `send()`-Funktion des `XMLHttpRequest` aufgerufen, um den Inhalt der Datei hochzuladen.

### Asynchrone Verarbeitung des Datei-Upload-Prozesses

Dieses Beispiel, das PHP auf der Serverseite und JavaScript auf der Clientseite verwendet, zeigt das asynchrone Hochladen einer Datei.

```php
<?php
if (isset($_FILES["myFile"])) {
  // Example:
  move_uploaded_file($_FILES["myFile"]["tmp_name"], "uploads/" . $_FILES["myFile"]["name"]);
  exit;
}
?><!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>dnd binary upload</title>
  </head>
  <body>
    <div>
      <div
        id="dropzone"
        style="margin:30px; width:500px; height:300px; border:1px dotted grey;">
        Drag & drop your file here
      </div>
    </div>
    <script>
      function sendFile(file) {
        const uri = "/index.php";
        const xhr = new XMLHttpRequest();
        const fd = new FormData();

        xhr.open("POST", uri, true);
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            alert(xhr.responseText); // handle response.
          }
        };
        fd.append("myFile", file);
        // Initiate a multipart/form-data upload
        xhr.send(fd);
      }

      const dropzone = document.getElementById("dropzone");
      dropzone.addEventListener("dragover", (event) => {
        event.stopPropagation();
        event.preventDefault();
      });

      dropzone.addEventListener("drop", (event) => {
        event.preventDefault();

        const filesArray = event.dataTransfer.files;
        for (let i = 0; i < filesArray.length; i++) {
          sendFile(filesArray[i]);
        }
      });
    </script>
  </body>
</html>
```

## Beispiel: Verwenden von Objekt-URLs zum Anzeigen von PDFs

Objekt-URLs können für andere Dinge als nur Bilder verwendet werden! Sie können verwendet werden, um eingebettete PDF-Dateien oder andere Ressourcen anzuzeigen, die der Browser anzeigen kann.

In Firefox muss die Präferenz `pdfjs.disabled` auf `false` gesetzt sein, damit das PDF im `iframe` eingebettet erscheint, anstatt als heruntergeladene Datei vorgeschlagen zu werden.

```html
<iframe id="viewer"></iframe>
```

Und hier ist die Änderung des `src` Attributs:

```js
const objURL = URL.createObjectURL(blob);
const iframe = document.getElementById("viewer");
iframe.setAttribute("src", objURL);

// Later:
URL.revokeObjectURL(objURL);
```

## Beispiel: Verwenden von Objekt-URLs mit anderen Dateitypen

Sie können Dateien anderer Formate auf die gleiche Weise manipulieren. Hier ist, wie man hochgeladene Videos in der Vorschau anzeigt:

```js
const video = document.getElementById("video");
const objURL = URL.createObjectURL(blob);
video.src = objURL;
video.play();

// Later:
URL.revokeObjectURL(objURL);
```

## Siehe auch

- [`File`](/de/docs/Web/API/File)
- [`FileList`](/de/docs/Web/API/FileList)
- [`FileReader`](/de/docs/Web/API/FileReader)
- [`URL`](/de/docs/Web/API/URL)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [Using XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
