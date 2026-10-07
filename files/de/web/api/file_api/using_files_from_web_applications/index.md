---
title: Dateien in Webanwendungen verwenden
slug: Web/API/File_API/Using_files_from_web_applications
l10n:
  sourceCommit: 4bb8f0d1f9cb2d0e23b9e19f798a7ff39ac34a49
---

{{DefaultAPISidebar("File API")}}{{AvailableInWorkers}}

Mit der File API können Webinhalte Benutzer auffordern, lokale Dateien auszuwählen, und anschließend deren Inhalt lesen. Die Auswahl kann über ein HTML-Element `{{HTMLElement("input/file", '&lt;input type="file"&gt;')}}` oder per Drag-and-drop erfolgen.

## Auf ausgewählte Dateien zugreifen

Betrachten Sie dieses HTML:

```html
<input type="file" id="input" multiple />
```

Die File API ermöglicht den Zugriff auf eine [`FileList`](/de/docs/Web/API/FileList), die [`File`](/de/docs/Web/API/File)-Objekte für die vom Benutzer ausgewählten Dateien enthält.

Das Attribut `multiple` des `input`-Elements ermöglicht die Auswahl mehrerer Dateien.

So greifen Sie mit einem klassischen DOM-Selektor auf die erste ausgewählte Datei zu:

```js
const selectedFile = document.getElementById("input").files[0];
```

### Bei einem change-Ereignis auf ausgewählte Dateien zugreifen

Sie können auch über das Ereignis `change` auf die [`FileList`](/de/docs/Web/API/FileList) zugreifen. Dafür müssen Sie mit [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) einen Listener für `change` hinzufügen:

```js
const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles);
function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
}
```

## Informationen über ausgewählte Dateien abrufen

Das vom DOM bereitgestellte [`FileList`](/de/docs/Web/API/FileList)-Objekt listet alle vom Benutzer ausgewählten Dateien auf, jeweils als [`File`](/de/docs/Web/API/File)-Objekt. Wie viele Dateien ausgewählt wurden, können Sie am Wert des Attributs `length` der Dateiliste ablesen:

```js
const numFiles = fileList.length;
```

Auf einzelne [`File`](/de/docs/Web/API/File)-Objekte können Sie wie auf Elemente eines Arrays zugreifen.

Das [`File`](/de/docs/Web/API/File)-Objekt stellt drei Attribute mit nützlichen Informationen über die Datei bereit:

- `name`
  - : Der Dateiname als schreibgeschützte Zeichenfolge. Er enthält keine Pfadangaben.
- `size`
  - : Die Dateigröße in Bytes als schreibgeschützte 64-Bit-Ganzzahl.
- `type`
  - : Der MIME-Typ der Datei als schreibgeschützte Zeichenfolge oder `""`, falls der Typ nicht ermittelt werden konnte.

### Beispiel: Dateigröße anzeigen

Das folgende Beispiel zeigt eine mögliche Verwendung der Eigenschaft `size`:

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

## Versteckte Datei-input-Elemente mit der click()-Methode verwenden

Sie können das zugegebenermaßen wenig ansehnliche Datei-{{HTMLElement("input")}}-Element ausblenden und eine eigene Oberfläche anbieten, über die sich die Dateiauswahl öffnen und die ausgewählten Dateien anzeigen lassen. Dazu versehen Sie das input-Element mit `display:none` und rufen die Methode [`click()`](/de/docs/Web/API/HTMLElement/click) auf dem {{HTMLElement("input")}}-Element auf.

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

Der Code für das Ereignis `click` kann so aussehen:

```js
const fileSelect = document.getElementById("fileSelect");
const fileElem = document.getElementById("fileElem");

fileSelect.addEventListener("click", (e) => {
  if (fileElem) {
    fileElem.click();
  }
});
```

Sie können das {{HTMLElement("button")}}-Element beliebig gestalten.

## Mit einem label-Element ein verstecktes Datei-input-Element auslösen

Damit sich die Dateiauswahl ohne JavaScript (die Methode click()) öffnen lässt, können Sie ein {{HTMLElement("label")}}-Element verwenden. Beachten Sie, dass das input-Element in diesem Fall weder mit `display: none` noch mit `visibility: hidden` ausgeblendet werden darf, da das Label sonst nicht per Tastatur zugänglich wäre. Verwenden Sie stattdessen die [Technik zum visuellen Ausblenden](https://www.a11yproject.com/posts/how-to-hide-content/).

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

JavaScript-Code zum Aufrufen von `fileElem.click()` ist nicht erforderlich. Auch in diesem Fall können Sie das label-Element beliebig gestalten. Auf dem Label müssen Sie den Fokuszustand des versteckten Eingabefelds visuell kenntlich machen, etwa durch eine Umrandung wie oben gezeigt, eine Hintergrundfarbe oder einen Boxschatten. (Zum Zeitpunkt der Erstellung dieses Artikels zeigt Firefox diesen visuellen Hinweis bei `<input type="file">`-Elementen nicht an.)

## Dateien per Drag-and-drop auswählen

Sie können Benutzer Dateien auch per Drag-and-drop in Ihre Webanwendung ziehen lassen.

Zunächst richten Sie eine Ablagezone ein. Welcher Bereich Ihrer Inhalte Dateien annimmt, hängt vom Design Ihrer Anwendung ab. Ein Element so einzurichten, dass es Drop-Ereignisse empfängt, ist jedoch einfach:

```js
let dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter);
dropbox.addEventListener("dragover", dragover);
dropbox.addEventListener("drop", drop);
```

In diesem Beispiel machen wir das Element mit der ID `dropbox` zur Ablagezone. Dazu fügen wir Listener für die Ereignisse [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event), [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event) hinzu.

In unserem Fall müssen wir bei `dragenter` und `dragover` nichts weiter tun. Beide Funktionen sind daher einfach: Sie unterbinden die Weitergabe des Ereignisses und verhindern die Standardaktion.

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

Die eigentliche Arbeit geschieht in der Funktion `drop()`:

```js
function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  const dt = e.dataTransfer;
  const files = dt.files;

  handleFiles(files);
}
```

Hier lesen wir das Feld `dataTransfer` aus dem Ereignis aus, entnehmen ihm die Dateiliste und übergeben diese an `handleFiles()`. Ab diesem Punkt werden die Dateien gleich verarbeitet, unabhängig davon, ob sie über das `input`-Element oder per Drag-and-drop ausgewählt wurden.

## Beispiel: Vorschaubilder ausgewählter Bilder anzeigen

Angenommen, Sie entwickeln eine Website zum Teilen von Fotos und möchten mit HTML Vorschaubilder anzeigen, bevor die Benutzer die Bilder hochladen. Sie können Ihr Eingabeelement oder Ihre Ablagezone wie zuvor beschrieben einrichten und eine Funktion wie die folgende `handleFiles()`-Funktion aufrufen lassen.

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

Unsere Schleife prüft bei jeder ausgewählten Datei anhand des Attributs `type`, ob ihr MIME-Typ mit `image/` beginnt. Für jede Bilddatei erstellen wir ein neues `img`-Element. Rahmen, Schatten und die Bildgröße lassen sich per CSS festlegen und müssen hier nicht behandelt werden.

Jedem Bild weisen wir die CSS-Klasse `obj` zu, damit es im DOM-Baum leicht zu finden ist. Außerdem erhält jedes Bild ein Attribut `file`, das die zugehörige [`File`](/de/docs/Web/API/File) angibt. So können wir später auf die Bilder zugreifen, um sie hochzuladen. Mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) fügen wir das neue Vorschaubild in den Vorschaubereich des Dokuments ein.

Anschließend richten wir einen [`FileReader`](/de/docs/Web/API/FileReader) ein, der das Bild asynchron lädt und es dem `img`-Element zuweist. Nachdem wir das neue `FileReader`-Objekt erstellt haben, legen wir seine Funktion `onload` fest und rufen `readAsDataURL()` auf, um den Lesevorgang im Hintergrund zu starten. Sobald der gesamte Inhalt der Bilddatei geladen ist, wird er in eine `data:`-URL umgewandelt und an den `onload`-Callback übergeben. Unsere Implementierung setzt das Attribut `src` des `img`-Elements auf das geladene Bild. Dadurch erscheint es als Vorschaubild auf dem Bildschirm des Benutzers.

## Objekt-URLs verwenden

Mit den DOM-Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) können Sie einfache URL-Zeichenfolgen erstellen, die auf Daten verweisen, auf die über ein DOM-[`File`](/de/docs/Web/API/File)-Objekt zugegriffen werden kann. Dazu gehören auch lokale Dateien auf dem Computer des Benutzers.

Wenn Sie aus HTML per URL auf ein [`File`](/de/docs/Web/API/File)-Objekt verweisen möchten, können Sie dafür eine Objekt-URL erstellen:

```js
const objectURL = window.URL.createObjectURL(fileObj);
```

Die Objekt-URL ist eine Zeichenfolge, die das [`File`](/de/docs/Web/API/File)-Objekt identifiziert. Bei jedem Aufruf von [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) wird eine eindeutige Objekt-URL erstellt, auch wenn Sie für dieselbe Datei bereits eine erstellt haben. Jede dieser URLs muss freigegeben werden. Beim Entladen des Dokuments geschieht das automatisch. Wenn Ihre Seite Objekt-URLs jedoch dynamisch verwendet, sollten Sie sie ausdrücklich durch einen Aufruf von [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) freigeben:

```js
URL.revokeObjectURL(objectURL);
```

## Beispiel: Bilder mit Objekt-URLs anzeigen

Dieses Beispiel verwendet Objekt-URLs, um Vorschaubilder anzuzeigen. Außerdem zeigt es weitere Dateiinformationen an, darunter Namen und Größen.

Das HTML für die Benutzeroberfläche sieht so aus:

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

Damit richten wir unser Datei-{{HTMLElement("input")}}-Element sowie einen Link ein, der die Dateiauswahl öffnet. Das Datei-input bleibt verborgen, damit seine wenig ansprechende Benutzeroberfläche nicht angezeigt wird. Dies und die Methode zum Öffnen der Dateiauswahl werden im Abschnitt [Versteckte Datei-input-Elemente mit der click()-Methode verwenden](#using_hidden_file_input_elements_using_the_click_method) erklärt.

Die Methode `handleFiles()` sieht so aus:

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

Zunächst wird das {{HTMLElement("div")}}-Element mit der ID `fileList` abgerufen. In diesen Block fügen wir unsere Dateiliste einschließlich der Vorschaubilder ein.

Wenn das an `handleFiles()` übergebene [`FileList`](/de/docs/Web/API/FileList)-Objekt leer ist, setzen wir das innere HTML des Blocks so, dass „No files selected!“ angezeigt wird. Andernfalls erstellen wir die Dateiliste wie folgt:

1. Ein neues Element für eine ungeordnete Liste ({{HTMLElement("ul")}}) wird erstellt.
2. Das neue Listenelement wird durch Aufruf seiner Methode [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) in den {{HTMLElement("div")}}-Block eingefügt.
3. Für jedes [`File`](/de/docs/Web/API/File) in der durch `files` repräsentierten [`FileList`](/de/docs/Web/API/FileList):
   1. Ein neues Listeneintragselement ({{HTMLElement("li")}}) erstellen und in die Liste einfügen.
   2. Ein neues Bildelement ({{HTMLElement("img")}}) erstellen.
   3. Als Bildquelle eine neue Objekt-URL für die Datei festlegen. Die Blob-URL wird mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) erstellt.
   4. Die Bildhöhe auf 60 Pixel festlegen.
   5. Den neuen Listeneintrag an die Liste anhängen.

Hier ist eine interaktive Demo des obigen Codes:

{{EmbedLiveSample('Example_Using_object_URLs_to_display_images', '100%', '300px')}}

Beachten Sie, dass wir die Objekt-URL nach dem Laden des Bildes nicht sofort freigeben. Andernfalls könnte der Benutzer nicht mehr mit dem Bild interagieren, etwa um es per Rechtsklick zu speichern oder in einem neuen Tab zu öffnen. In langlebigen Anwendungen sollten Sie Objekt-URLs freigeben, sobald sie nicht mehr benötigt werden, beispielsweise wenn das Bild aus dem DOM entfernt wird. So geben Sie Speicher frei: Rufen Sie die Methode [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) auf und übergeben Sie ihr die Zeichenfolge der Objekt-URL.

## Beispiel: Eine vom Benutzer ausgewählte Datei hochladen

Dieses Beispiel zeigt, wie Benutzer Dateien – etwa die im vorherigen Beispiel ausgewählten Bilder – auf einen Server hochladen können.

> [!NOTE]
> In der Regel sollten HTTP-Anfragen mit der [Fetch API](/de/docs/Web/API/Fetch_API) statt mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gestellt werden. Hier möchten wir den Benutzern jedoch den Fortschritt des Uploads anzeigen. Da die Fetch API diese Funktion noch nicht unterstützt, verwendet das Beispiel `XMLHttpRequest`.
>
> Die Arbeit an der Standardisierung von Fortschrittsbenachrichtigungen mit der Fetch API wird unter <https://github.com/whatwg/fetch/issues/607> verfolgt.

### Upload-Aufgaben erstellen

Wie Sie aus dem Code zur Erstellung der Vorschaubilder im vorherigen Beispiel wissen, gehört jedes Vorschaubild zur CSS-Klasse `obj`. Die zugehörige [`File`](/de/docs/Web/API/File) ist in einem Attribut `file` hinterlegt. So können wir mit [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) alle Bilder auswählen, die der Benutzer hochladen möchte:

```js
function sendFiles() {
  const imgs = document.querySelectorAll(".obj");

  for (const img of imgs) {
    new FileUpload(img, img.file);
  }
}
```

`document.querySelectorAll` gibt eine [`NodeList`](/de/docs/Web/API/NodeList) mit allen Elementen des Dokuments zurück, die zur CSS-Klasse `obj` gehören. In unserem Fall sind das alle Vorschaubilder. Anschließend können wir die Liste durchlaufen und für jedes Bild eine neue `FileUpload`-Instanz erstellen. Jede dieser Instanzen lädt die entsprechende Datei hoch.

### Den Upload einer Datei verarbeiten

Die Funktion `FileUpload` nimmt zwei Eingaben entgegen: ein Bildelement und eine Datei, aus der die Bilddaten gelesen werden.

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

Die oben gezeigte Funktion `FileUpload()` erstellt eine animierte Fortschrittsanzeige und anschließend eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), die das Hochladen der Daten übernimmt.

Vor der eigentlichen Übertragung werden mehrere Vorbereitungsschritte ausgeführt:

1. Der Listener für `progress` beim Upload der `XMLHttpRequest` wird so eingerichtet, dass er die Fortschrittsanzeige mit neuen Prozentwerten aktualisiert. Während des Uploads zeigt sie dadurch jeweils den aktuellen Fortschritt an.
2. Der Handler für das Upload-Ereignis `load` der `XMLHttpRequest` setzt die Fortschrittsanzeige auf 100 %. So wird sichergestellt, dass sie tatsächlich 100 % erreicht, selbst wenn die Auflösung der Fortschrittsmeldungen während des Vorgangs dies sonst verhindert. Anschließend wird die nicht mehr benötigte Fortschrittsanzeige entfernt. Nach Abschluss des Uploads verschwindet sie somit.
3. Die Anfrage zum Hochladen der Bilddatei wird durch Aufruf der Methode `open()` der `XMLHttpRequest` vorbereitet, um eine POST-Anfrage zu erstellen.
4. Der MIME-Typ für den Upload wird durch Aufruf der `XMLHttpRequest`-Funktion `overrideMimeType()` festgelegt. Hier verwenden wir einen allgemeinen MIME-Typ. Je nach Anwendungsfall müssen Sie möglicherweise überhaupt keinen MIME-Typ festlegen.
5. Das `FileReader`-Objekt wandelt die Datei in eine binäre Zeichenfolge um.
6. Sobald der Inhalt geladen ist, wird schließlich die `XMLHttpRequest`-Funktion `send()` aufgerufen, um den Dateiinhalt hochzuladen.

### Den Datei-Upload asynchron verarbeiten

Dieses Beispiel verwendet PHP auf der Serverseite und JavaScript auf der Clientseite und zeigt, wie eine Datei asynchron hochgeladen wird.

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

## Beispiel: PDF-Dateien mit Objekt-URLs anzeigen

Objekt-URLs eignen sich nicht nur für Bilder! Mit ihnen lassen sich eingebettete PDF-Dateien oder andere Ressourcen anzeigen, die der Browser darstellen kann.

Damit eine PDF-Datei in Firefox eingebettet im iframe erscheint, statt als Download angeboten zu werden, muss die Einstellung `pdfjs.disabled` auf `false` gesetzt sein.

```html
<iframe id="viewer"></iframe>
```

So wird das Attribut `src` geändert:

```js
const objURL = URL.createObjectURL(blob);
const iframe = document.getElementById("viewer");
iframe.setAttribute("src", objURL);

// Later:
URL.revokeObjectURL(objURL);
```

## Beispiel: Objekt-URLs mit anderen Dateitypen verwenden

Dateien anderer Formate können Sie auf dieselbe Weise verarbeiten. So zeigen Sie eine Vorschau eines hochgeladenen Videos an:

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
- [XMLHttpRequest verwenden](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
