---
title: Verwendung von Dateien aus Web-Anwendungen
slug: Web/API/File_API/Using_files_from_web_applications
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{DefaultAPISidebar("File API")}}{{AvailableInWorkers}}

Mit der File API kann Webinhalt den Benutzer bitten, lokale Dateien auszuwählen und dann deren Inhalt lesen. Diese Auswahl kann entweder über ein HTML-`{{HTMLElement("input/file", '&lt;input type="file"&gt;')}}`-Element oder per Drag&Drop durchgeführt werden.

## Zugriff auf ausgewählte Datei(en)

Betrachten Sie dieses HTML:

```html
<input type="file" id="input" multiple />
```

Die File API ermöglicht den Zugriff auf eine [`FileList`](/de/docs/Web/API/FileList), die [`File`](/de/docs/Web/API/File)-Objekte enthält, die die vom Benutzer ausgewählten Dateien repräsentieren.

Das `multiple`-Attribut im `input`-Element ermöglicht es dem Benutzer, mehrere Dateien auszuwählen.

Zugriff auf die erste ausgewählte Datei mit einem klassischen DOM-Selektor:

```js
const selectedFile = document.getElementById("input").files[0];
```

### Zugriff auf ausgewählte Datei(en) bei einem Änderungsereignis

Es ist auch möglich (aber nicht erforderlich), über das `change`-Ereignis auf die [`FileList`](/de/docs/Web/API/FileList) zuzugreifen. Dazu muss [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwendet werden, um den `change`-Ereignis-Listener hinzuzufügen, wie hier gezeigt:

```js
const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
}
```

## Informationen zu ausgewählten Datei(en) erhalten

Das vom DOM bereitgestellte [`FileList`](/de/docs/Web/API/FileList)-Objekt listet alle vom Benutzer ausgewählten Dateien auf, die jeweils als [`File`](/de/docs/Web/API/File)-Objekt spezifiziert sind. Sie können feststellen, wie viele Dateien der Benutzer ausgewählt hat, indem Sie den Wert des `length`-Attributs der Dateiliste überprüfen:

```js
const numFiles = fileList.length;
```

Individuelle [`File`](/de/docs/Web/API/File)-Objekte können abgerufen werden, indem die Liste als Array genutzt wird.

Es gibt drei Attribute, die vom [`File`](/de/docs/Web/API/File)-Objekt bereitgestellt werden und nützliche Informationen über die Datei enthalten.

- `name`
  - : Der Dateiname als schreibgeschützter String. Dies ist nur der Dateiname und enthält keine Pfadinformationen.
- `size`
  - : Die Größe der Datei in Bytes als schreibgeschützter 64-Bit-Ganzzahlwert.
- `type`
  - : Der MIME-Typ der Datei als schreibgeschützter String oder `""`, wenn der Typ nicht bestimmt werden konnte.

### Beispiel: Anzeigen der Dateigröße(n)

Das folgende Beispiel zeigt eine mögliche Verwendung der `size`-Eigenschaft:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>File(s) size</title>
  </head>

  <body>
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

    <script>
      const uploadInput = document.getElementById("uploadInput");
      uploadInput.addEventListener(
        "change",
        () => {
          // Calculate total size
          let numberOfBytes = 0;
          for (const file of uploadInput.files) {
            numberOfBytes += file.size;
          }

          // Approximate to the closest prefixed unit
          const units = [
            "B",
            "KiB",
            "MiB",
            "GiB",
            "TiB",
            "PiB",
            "EiB",
            "ZiB",
            "YiB",
          ];
          const exponent = Math.min(
            Math.floor(Math.log(numberOfBytes) / Math.log(1024)),
            units.length - 1,
          );
          const approx = numberOfBytes / 1024 ** exponent;
          const output =
            exponent === 0
              ? `${numberOfBytes} bytes`
              : `${approx.toFixed(3)} ${
                  units[exponent]
                } (${numberOfBytes} bytes)`;

          document.getElementById("fileNum").textContent =
            uploadInput.files.length;
          document.getElementById("fileSize").textContent = output;
        },
        false,
      );
    </script>
  </body>
</html>
```

## Verwendung von versteckten Datei-Input-Elementen mit der `click()`-Methode

Sie können das zugegeben unansehnliche Datei-{{HTMLElement("input")}}-Element verbergen und Ihre eigene Benutzeroberfläche zum Öffnen des Dateiauswahl-Dialogs und Anzeigen der vom Benutzer ausgewählten Datei(en) präsentieren. Dies kann erreicht werden, indem Sie das Eingabeelement mit `display:none` gestalten und die `click()`-Methode auf dem {{HTMLElement("input")}}-Element aufrufen.

Betrachten Sie dieses HTML:

```html
<input
  type="file"
  id="fileElem"
  multiple
  accept="image/*"
  style="display:none" />
<button id="fileSelect" type="button">Select some files</button>
```

Der Code, der das `click`-Ereignis behandelt, kann so aussehen:

```js
const fileSelect = document.getElementById("fileSelect");
const fileElem = document.getElementById("fileElem");

fileSelect.addEventListener(
  "click",
  (e) => {
    if (fileElem) {
      fileElem.click();
    }
  },
  false,
);
```

Sie können das {{HTMLElement("button")}} nach Belieben gestalten.

## Verwendung eines Label-Elements, um ein verstecktes Datei-Input-Element auszulösen

Um den Dateiauswahl-Dialog ohne JavaScript (die `click()`-Methode) zu öffnen, kann ein {{HTMLElement("label")}}-Element verwendet werden. Beachten Sie, dass in diesem Fall das Eingabeelement nicht mit `display: none` (noch `visibility: hidden`) verborgen sein darf, da das Label ansonsten nicht tastaturzugänglich wäre. Verwenden Sie stattdessen die [visually-hidden technique](https://www.a11yproject.com/posts/how-to-hide-content/).

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
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
}

input.visually-hidden:is(:focus, :focus-within) + label {
  outline: thin dotted;
}
```

Es ist nicht notwendig, JavaScript-Code hinzuzufügen, um `fileElem.click()` aufzurufen. Auch in diesem Fall können Sie das Label-Element nach Belieben gestalten. Sie müssen einen visuellen Hinweis auf den Fokusstatus des versteckten Eingabefelds auf seinem Label bereitstellen, sei es eine Kontur wie oben gezeigt oder eine Hintergrundfarbe oder ein Box-Schatten. (Zur Zeit des Schreibens zeigt Firefox diesen visuellen Hinweis für `<input type="file">`-Elemente nicht an.)

## Dateien per Drag & Drop auswählen

Sie können dem Benutzer auch ermöglichen, Dateien in Ihre Webanwendung zu ziehen und abzulegen.

Der erste Schritt besteht darin, eine Drop-Zone zu etablieren. Welche Teile Ihres Inhalts Drops akzeptieren, kann je nach Design Ihrer Anwendung variieren, aber ein Element für das Empfangen von Drop-Ereignissen vorzubereiten, ist einfach:

```js
let dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
```

In diesem Beispiel machen wir das Element mit der ID `dropbox` zu unserer Drop-Zone. Dies geschieht durch Hinzufügen von Listenern für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event), [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignisse.

Wir müssen in unserem Fall eigentlich nichts mit den `dragenter`- und `dragover`-Events tun, daher sind diese Funktionen einfach aufgebaut. Sie beenden nur die Ereignisausbreitung und verhindern die Standardaktion:

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

Die eigentliche Magie passiert in der `drop()`-Funktion:

```js
function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  const dt = e.dataTransfer;
  const files = dt.files;

  handleFiles(files);
}
```

Hier rufen wir das `dataTransfer`-Feld aus dem Ereignis ab, ziehen die Dateiliste heraus und übergeben sie an `handleFiles()`. Von hier an ist die Dateiverarbeitung unabhängig davon, ob der Benutzer das `input`-Element oder Drag & Drop verwendet hat.

## Beispiel: Anzeigen von Vorschaubildern der vom Benutzer ausgewählten Bilder

Angenommen, Sie entwickeln die nächste großartige Foto-Sharing-Website und möchten HTML verwenden, um Vorschaubilder der Bilder anzuzeigen, bevor der Benutzer sie tatsächlich hochlädt. Sie können Ihr Eingabeelement oder Ihre Drop-Zone wie zuvor besprochen einrichten und sie eine Funktion wie die `handleFiles()`-Funktion unten aufrufen lassen.

```js
function handleFiles(files) {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];

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

Hier prüft unser Schleifenmechanismus über die vom Benutzer ausgewählten Dateien, ob das `type`-Attribut jeder Datei mit `image/` beginnt. Für jede Datei, die ein Bild ist, erstellen wir ein neues `img`-Element. CSS kann verwendet werden, um jegliche schönen Rahmen oder Schatten zu definieren und die Größe des Bildes anzugeben, sodass dies hier nicht notwendig ist.

Jedes Bild wird mit der CSS-Klasse `obj` versehen, was es einfach macht, es im DOM-Baum zu finden. Wir fügen auch jedem Bild ein `file`-Attribut hinzu, das die [`File`](/de/docs/Web/API/File) für das Bild angibt; dies ermöglicht es uns, die Bilder später für den tatsächlichen Upload abzurufen. Wir verwenden [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild), um die neue Miniaturansicht zum Vorschaubereich unseres Dokuments hinzuzufügen.

Als nächstes richten wir den [`FileReader`](/de/docs/Web/API/FileReader) ein, um das Bild asynchron zu laden und es dem `img`-Element hinzuzufügen. Nach dem Erstellen des neuen `FileReader`-Objekts richten wir seine `onload`-Funktion ein und rufen dann `readAsDataURL()` auf, um den Lesevorgang im Hintergrund zu starten. Sobald der gesamte Inhalt der Bilddatei geladen ist, wird dieser in eine `data:`-URL umgewandelt, die an den `onload`-Callback übergeben wird. Unsere Implementierung dieser Routine setzt das `src`-Attribut des `img`-Elements auf das geladene Bild, wodurch das Bild in der Miniaturansicht auf dem Bildschirm des Benutzers erscheint.

## Verwendung von Objekt-URLs

Die DOM-Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) ermöglichen es Ihnen, einfache URL-Strings zu erstellen, die verwendet werden können, um auf alle Daten zu verweisen, die mit einem DOM-`File`-Objekt referenziert werden können, einschließlich lokaler Dateien auf dem Computer des Benutzers.

Wenn Sie ein [`File`](/de/docs/Web/API/File)-Objekt haben, auf das Sie per URL aus HTML verweisen möchten, können Sie dafür eine Objekt-URL erstellen:

```js
const objectURL = window.URL.createObjectURL(fileObj);
```

Die Objekt-URL ist ein String, der das [`File`](/de/docs/Web/API/File)-Objekt identifiziert. Jedes Mal, wenn Sie [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) aufrufen, wird eine eindeutige Objekt-URL erstellt, selbst wenn Sie bereits eine Objekt-URL für diese Datei erstellt haben. Jede dieser URLs muss freigegeben werden. Während sie automatisch freigegeben werden, wenn das Dokument entladen wird, sollten Sie sie explizit durch Aufrufen von [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) freigeben, wenn Ihre Seite sie dynamisch verwendet:

```js
URL.revokeObjectURL(objectURL);
```

## Beispiel: Verwendung von Objekt-URLs zum Anzeigen von Bildern

Dieses Beispiel verwendet Objekt-URLs, um Bildminiaturen anzuzeigen. Außerdem werden andere Dateiinformationen wie ihre Namen und Größen angezeigt.

Das HTML, das die Oberfläche präsentiert, sieht so aus:

```html
<input
  type="file"
  id="fileElem"
  multiple
  accept="image/*"
  style="display:none" />
<a href="#" id="fileSelect">Select some files</a>
<div id="fileList">
  <p>No files selected!</p>
</div>
```

Dies stellt unser Datei-{{HTMLElement("input")}}-Element sowie einen Link bereit, der den Dateiauswahl-Dialog aufruft (da wir das Datei-Input versteckt halten, um diese weniger ansprechende Benutzeroberfläche zu verhindern). Dies wird im Abschnitt [Verwendung von versteckten Datei-Input-Elementen mit der click()-Methode](#using_hidden_file_input_elements_using_the_click_method) erklärt, ebenso wie die Methode, die den Dateiauswahl-Dialog aufruft.

Die `handleFiles()`-Methode folgt:

```js
const fileSelect = document.getElementById("fileSelect"),
  fileElem = document.getElementById("fileElem"),
  fileList = document.getElementById("fileList");

fileSelect.addEventListener(
  "click",
  (e) => {
    if (fileElem) {
      fileElem.click();
    }
    e.preventDefault(); // prevent navigation to "#"
  },
  false,
);

fileElem.addEventListener("change", handleFiles, false);

function handleFiles() {
  fileList.textContent = "";
  if (!this.files.length) {
    const p = document.createElement("p");
    p.textContent = "No files selected!";
    fileList.appendChild(p);
  } else {
    const list = document.createElement("ul");
    fileList.appendChild(list);
    for (let i = 0; i < this.files.length; i++) {
      const li = document.createElement("li");
      list.appendChild(li);

      const img = document.createElement("img");
      img.src = URL.createObjectURL(this.files[i]);
      img.height = 60;
      img.onload = () => {
        URL.revokeObjectURL(img.src);
      };
      li.appendChild(img);
      const info = document.createElement("span");
      info.textContent = `${this.files[i].name}: ${this.files[i].size} bytes`;
      li.appendChild(info);
    }
  }
}
```

Dies beginnt mit der Abfrage der URL des {{HTMLElement("div")}} mit der ID `fileList`. Dies ist der Block, in den wir unsere Dateiliste einschließlich Miniaturen einfügen werden.

Wenn das [`FileList`](/de/docs/Web/API/FileList)-Objekt, das an `handleFiles()` übergeben wird, `null` ist, setzen wir das innere HTML des Blocks, um "No files selected!" anzuzeigen. Andernfalls beginnen wir, unsere Dateiliste wie folgt zu erstellen:

1. Ein neues ungeordnetes Listen-({{HTMLElement("ul")}})-Element wird erstellt.
2. Das neue Listen-Element wird in den {{HTMLElement("div")}}-Block eingefügt, indem seine [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)-Methode aufgerufen wird.
3. Für jede [`File`](/de/docs/Web/API/File) in der [`FileList`](/de/docs/Web/API/FileList), die durch `files` repräsentiert wird:

   1. Ein neues Listenelement ({{HTMLElement("li")}}) erstellen und in die Liste einfügen.
   2. Ein neues Bild-({{HTMLElement("img")}})-Element erstellen.
   3. Die Bildquelle auf eine neue Objekt-URL setzen, die die Datei repräsentiert, indem [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) verwendet wird, um die Blob-URL zu erstellen.
   4. Die Bildhöhe auf 60 Pixel setzen.
   5. Den Ladeereignishandler des Bildes einrichten, um die Objekt-URL freizugeben, da sie nicht mehr benötigt wird, sobald das Bild geladen ist. Dies erfolgt durch Aufrufen der [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static)-Methode und Übergeben des Objekt-URL-Strings, wie durch `img.src` angegeben.
   6. Das neue Listenelement an die Liste anhängen.

Hier ist eine Live-Demo des obigen Codes:

{{EmbedLiveSample('Example_Using_object_URLs_to_display_images', '100%', '300px')}}

## Beispiel: Hochladen einer vom Benutzer ausgewählten Datei

Dieses Beispiel zeigt, wie der Benutzer Dateien (wie die in den vorhergehenden Beispielen ausgewählten Bilder) auf einen Server hochladen kann.

> [!NOTE]
> Es wird im Allgemeinen empfohlen, HTTP-Anfragen über die [Fetch API](/de/docs/Web/API/Fetch_API) anstelle von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) zu stellen. In diesem Fall möchten wir jedoch den Upload-Fortschritt dem Benutzer zeigen, und diese Funktion wird von der Fetch API noch nicht unterstützt, sodass das Beispiel `XMLHttpRequest` verwendet.
>
> Die Arbeit zur Standardisierung von Fortschrittsbenachrichtigungen mit der Fetch API kann unter <https://github.com/whatwg/fetch/issues/607> verfolgt werden.

### Erstellung der Upload-Aufgaben

Als Fortsetzung des Codes, der in den vorherigen Beispielen die Miniaturen erstellt hat, erinnern Sie sich daran, dass jedes Miniaturbild in der CSS-Klasse `obj` ist und die entsprechende [`File`](/de/docs/Web/API/File) in einem `file`-Attribut angehängt ist. Dies ermöglicht es uns, alle Bilder, die der Benutzer zum Hochladen ausgewählt hat, mit [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) auszuwählen, wie folgt:

```js
function sendFiles() {
  const imgs = document.querySelectorAll(".obj");

  for (let i = 0; i < imgs.length; i++) {
    new FileUpload(imgs[i], imgs[i].file);
  }
}
```

`document.querySelectorAll` holt eine [`NodeList`](/de/docs/Web/API/NodeList) von allen Elementen im Dokument mit der CSS-Klasse `obj`. In unserem Fall werden dies alle Bildminiaturen sein. Sobald wir diese Liste haben, ist es einfach, durch sie zu gehen und für jede ein neues `FileUpload`-Exemplar zu erstellen. Jedes dieser Exemplare kümmert sich um den Upload der entsprechenden Datei.

### Handhabung des Upload-Prozesses für eine Datei

Die `FileUpload`-Funktion akzeptiert zwei Eingaben: ein Bild-Element und eine Datei, aus der die Bilddaten gelesen werden.

```js
function FileUpload(img, file) {
  const reader = new FileReader();
  this.ctrl = createThrobber(img);
  const xhr = new XMLHttpRequest();
  this.xhr = xhr;

  const self = this;
  this.xhr.upload.addEventListener(
    "progress",
    (e) => {
      if (e.lengthComputable) {
        const percentage = Math.round((e.loaded * 100) / e.total);
        self.ctrl.update(percentage);
      }
    },
    false,
  );

  xhr.upload.addEventListener(
    "load",
    (e) => {
      self.ctrl.update(100);
      const canvas = self.ctrl.ctx.canvas;
      canvas.parentNode.removeChild(canvas);
    },
    false,
  );
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

Die oben gezeigte `FileUpload()`-Funktion erstellt zunächst einen Throbber, der verwendet wird, um Fortschrittsinformationen anzuzeigen, und erstellt dann ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt, um mit dem Hochladen der Daten umzugehen.

Bevor tatsächlich mit der Übertragung der Daten begonnen wird, werden mehrere Vorbereitungsschritte unternommen:

1. Der Upload-`progress`-Listener des `XMLHttpRequest` wird gesetzt, um den Throbber mit neuen Prozentinformationen zu aktualisieren, sodass der Throbber basierend auf den neuesten Informationen aktualisiert wird, während der Upload fortschreitet.
2. Der Upload-`load`-Event-Handler des `XMLHttpRequest` wird gesetzt, um die Fortschrittsinformationen des Throbbers auf 100 % zu aktualisieren, um sicherzustellen, dass der Fortschrittsanzeiger tatsächlich 100 % erreicht (im Falle von Granularitätsproblemen während des Prozesses). Danach wird der Throbber entfernt, da er nicht mehr benötigt wird. Dies bewirkt, dass der Throbber verschwindet, sobald der Upload abgeschlossen ist.
3. Die Anfrage zum Hochladen der Bilddatei wird durch Aufrufen der `open()`-Methode von `XMLHttpRequest` geöffnet, um eine POST-Anfrage zu starten.
4. Der MIME-Typ für den Upload wird durch Aufrufen der `overrideMimeType()`-Funktion von `XMLHttpRequest` gesetzt. In diesem Fall verwenden wir einen generischen MIME-Typ; je nach Anwendungsfall müssen Sie den MIME-Typ möglicherweise gar nicht setzen.
5. Das `FileReader`-Objekt wird verwendet, um die Datei in einen binären String zu konvertieren.
6. Schließlich wird, wenn der Inhalt geladen ist, die `send()`-Funktion von `XMLHttpRequest` aufgerufen, um die Inhalte der Datei hochzuladen.

### Asynchrone Handhabung des Datei-Upload-Prozesses

Dieses Beispiel, das PHP auf der Serverseite und JavaScript auf der Clientseite verwendet, demonstriert das asynchrone Hochladen einer Datei.

```php
<?php
if (isset($_FILES['myFile'])) {
    // Example:
    move_uploaded_file($_FILES['myFile']['tmp_name'], "uploads/" . $_FILES['myFile']['name']);
    exit;
}
?><!doctype html>
<html lang="en-US">
<head>
  <meta charset="UTF-8">
  <title>dnd binary upload</title>
    <script type="application/javascript">
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
            fd.append('myFile', file);
            // Initiate a multipart/form-data upload
            xhr.send(fd);
        }

        window.onload = () => {
            const dropzone = document.getElementById("dropzone");
            dropzone.ondragover = dropzone.ondragenter = (event) => {
                event.stopPropagation();
                event.preventDefault();
            }

            dropzone.ondrop = (event) => {
                event.stopPropagation();
                event.preventDefault();

                const filesArray = event.dataTransfer.files;
                for (let i=0; i<filesArray.length; i++) {
                    sendFile(filesArray[i]);
                }
            }
        }
    </script>
</head>
<body>
    <div>
        <div id="dropzone" style="margin:30px; width:500px; height:300px; border:1px dotted grey;">Drag & drop your file here</div>
    </div>
</body>
</html>
```

## Beispiel: Verwendung von Objekt-URLs, um PDF anzuzeigen

Objekt-URLs können nicht nur für Bilder verwendet werden! Sie können verwendet werden, um eingebettete PDF-Dateien oder andere Ressourcen, die vom Browser angezeigt werden können, zu präsentieren.

In Firefox muss die Einstellung `pdfjs.disabled` auf `false` gesetzt sein, damit das PDF in das Iframe eingebettet erscheint (statt als herunterladbare Datei vorgeschlagen zu werden).

```html
<iframe id="viewer"></iframe>
```

Und hier ist die Änderung des `src`-Attributs:

```js
const obj_url = URL.createObjectURL(blob);
const iframe = document.getElementById("viewer");
iframe.setAttribute("src", obj_url);
URL.revokeObjectURL(obj_url);
```

## Beispiel: Verwendung von Objekt-URLs mit anderen Dateitypen

Sie können Dateien anderer Formate auf die gleiche Weise handhaben. Hier ist, wie man hochgeladene Videos in der Vorschau anzeigt:

```js
const video = document.getElementById("video");
const obj_url = URL.createObjectURL(blob);
video.src = obj_url;
video.play();
URL.revokeObjectURL(obj_url);
```

## Siehe auch

- [`File`](/de/docs/Web/API/File)
- [`FileList`](/de/docs/Web/API/FileList)
- [`FileReader`](/de/docs/Web/API/FileReader)
- [`URL`](/de/docs/Web/API/URL)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
