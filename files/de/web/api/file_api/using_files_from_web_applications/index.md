---
title: Verwendung von Dateien aus Webanwendungen
slug: Web/API/File_API/Using_files_from_web_applications
l10n:
  sourceCommit: dd72711ba653c9db80f84833398bdd2df0c34a39
---

{{DefaultAPISidebar("File API")}}{{AvailableInWorkers}}

Mit der File API kann Web-Content den Benutzer bitten, lokale Dateien auszuwählen und dann den Inhalt dieser Dateien zu lesen. Diese Auswahl kann entweder durch die Verwendung eines HTML-`{{HTMLElement("input/file", '&lt;input type="file"&gt;')}}`-Elements oder durch Drag & Drop erfolgen.

## Zugriff auf ausgewählte Datei(en)

Betrachten Sie diesen HTML-Code:

```html
<input type="file" id="input" multiple />
```

Die File API ermöglicht den Zugriff auf ein [`FileList`](/de/docs/Web/API/FileList), das [`File`](/de/docs/Web/API/File)-Objekte enthält, die die vom Benutzer ausgewählten Dateien darstellen.

Das `multiple`-Attribut im `input`-Element erlaubt es dem Benutzer, mehrere Dateien auszuwählen.

Zugriff auf die erste ausgewählte Datei mittels eines klassischen DOM-Selectors:

```js
const selectedFile = document.getElementById("input").files[0];
```

### Zugriff auf ausgewählte Datei(en) bei einem Change-Event

Es ist auch möglich (aber nicht zwingend erforderlich), auf die [`FileList`](/de/docs/Web/API/FileList) durch das `change`-Event zuzugreifen. Dazu müssen Sie [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um den `change`-Event-Listener hinzuzufügen, so:

```js
const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
}
```

## Informationen über ausgewählte Datei(en) erhalten

Das vom DOM bereitgestellte [`FileList`](/de/docs/Web/API/FileList)-Objekt listet alle vom Benutzer ausgewählten Dateien auf, wobei jede als ein [`File`](/de/docs/Web/API/File)-Objekt angegeben wird. Sie können bestimmen, wie viele Dateien der Benutzer ausgewählt hat, indem Sie den Wert des `length`-Attributs der Dateiliste überprüfen:

```js
const numFiles = fileList.length;
```

Einzelne [`File`](/de/docs/Web/API/File)-Objekte können abgerufen werden, indem auf die Liste als Array zugegriffen wird.

Es gibt drei Attribute, die vom [`File`](/de/docs/Web/API/File)-Objekt bereitgestellt werden und nützliche Informationen über die Datei enthalten.

- `name`
  - : Der Dateiname als schreibgeschützte Zeichenkette. Dies ist nur der Dateiname und enthält keine Pfadinformationen.
- `size`
  - : Die Größe der Datei in Bytes als schreibgeschützter 64-Bit-Integer.
- `type`
  - : Der MIME-Typ der Datei als schreibgeschützter String oder `""`, wenn der Typ nicht bestimmt werden konnte.

### Beispiel: Anzeige der Größe von Datei(en)

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

## Verwenden von versteckten Dateielementen mit der Methode click()

Sie können das zugegebenermaßen unattraktive Datei-{{HTMLElement("input")}}-Element verstecken und Ihre eigene Benutzeroberfläche bereitstellen, um den Dateiauswahldialog zu öffnen und anzuzeigen, welche Datei oder Dateien der Benutzer ausgewählt hat. Dies können Sie tun, indem Sie das input-Element mit `display:none` stylen und die [`click()`](/de/docs/Web/API/HTMLElement/click)-Methode auf das {{HTMLElement("input")}}-Element aufrufen.

Betrachten Sie diesen HTML-Code:

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

Sie können den {{HTMLElement("button")}} nach Belieben gestalten.

## Verwenden eines Label-Elements, um ein verstecktes Datei-Input-Element auszulösen

Um das Öffnen des Dateiauswahldialogs ohne Verwendung von JavaScript (die click()-Methode) zu ermöglichen, kann ein {{HTMLElement("label")}}-Element verwendet werden. Beachten Sie, dass in diesem Fall das input-Element nicht mit `display: none` (noch `visibility: hidden`) versteckt sein darf, da das Label sonst nicht über die Tastatur zugänglich wäre. Verwenden Sie stattdessen die [visually-hidden technique](https://www.a11yproject.com/posts/how-to-hide-content/).

Betrachten Sie diesen HTML-Code:

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

Es ist nicht notwendig, JavaScript-Code hinzuzufügen, um `fileElem.click()` aufzurufen. Auch in diesem Fall können Sie das Label-Element nach Belieben gestalten. Sie müssen einen visuellen Hinweis für den Fokusstatus des versteckten Eingabefeldes auf seinem Label bereitstellen, sei es eine Umrandung, wie oben gezeigt, oder eine Hintergrundfarbe oder Box-Shadow. (Zum Zeitpunkt des Schreibens zeigt Firefox diesen visuellen Hinweis für `<input type="file">`-Elemente nicht an.)

## Auswahl von Dateien per Drag & Drop

Sie können den Benutzer auch Dateien in Ihre Webanwendung ziehen und dort ablegen lassen.

Der erste Schritt ist, eine Dropzone zu etablieren. Welcher Teil Ihres Inhaltsstürzende akzeptiert, kann je nach Design Ihrer Anwendung variieren, aber es ist leicht, ein Element so zu gestalten, dass es Drop-Ereignisse empfangen kann:

```js
let dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
```

In diesem Beispiel machen wir das Element mit der ID `dropbox` zu unserer Dropzone. Dies geschieht, indem wir Listener für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event), [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Events hinzufügen.

Wir benötigen in unserem Fall nichts weiter mit den `dragenter` und `dragover`-Ereignissen zu unternehmen, daher sind diese Funktionen beide einfach. Sie stoppen lediglich die Weiterleitung des Ereignisses und verhindern, dass die Standardaktion eintritt:

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

Hier rufen wir das `dataTransfer`-Feld aus dem Ereignis ab, holen die Dateiliste heraus und übergeben diese an `handleFiles()`. Von diesem Punkt an ist das Handling der Dateien dasselbe, unabhängig davon, ob der Benutzer das `input`-Element oder Drag & Drop verwendet hat.

## Beispiel: Anzeigen von Thumbnails der vom Benutzer ausgewählten Bilder

Nehmen wir an, Sie entwickeln die nächste großartige Foto-Sharing-Website und möchten Thumbnails der Bilder anzeigen, bevor der Benutzer diese tatsächlich hochlädt. Sie können Ihr Eingabeelement oder Ihre Dropzone wie zuvor besprochen festlegen und eine Funktion wie die `handleFiles()`-Funktion unten aufrufen lassen.

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

Hier betrachtet unsere Schleife, die die vom Benutzer ausgewählten Dateien verarbeitet, das `type`-Attribut jeder Datei, um zu prüfen, ob deren MIME-Typ mit `image/` beginnt. Für jede Datei, die ein Bild ist, erstellen wir ein neues `img`-Element. CSS kann verwendet werden, um hübsche Rahmen oder Schatten zu erstellen und die Größe des Bildes festzulegen, sodass dies hier nicht getan werden muss.

Jedes Bild erhält die CSS-Klasse `obj`, wodurch es leicht im DOM-Baum zu finden ist. Wir fügen auch ein `file`-Attribut zu jedem Bild hinzu, das die [`File`](/de/docs/Web/API/File) für das Bild angibt; dies ermöglicht es uns, die Bilder später tatsächlich hochzuladen. Wir verwenden [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild), um das neue Thumbnail in den Vorschaubereich unseres Dokuments hinzuzufügen.

Als Nächstes etablieren wir den [`FileReader`](/de/docs/Web/API/FileReader), um das Bild asynchron zu laden und es an das `img`-Element anzuhängen. Nachdem wir das neue `FileReader`-Objekt erstellt haben, richten wir die `onload`-Funktion ein und rufen dann `readAsDataURL()` auf, um die Leseoperation im Hintergrund zu starten. Wenn der gesamte Inhalt der Bilddatei geladen ist, wird er in eine `data:`-URL konvertiert, die an den `onload`-Callback übergeben wird. Unsere Implementierung dieser Routine setzt das `src`-Attribut des `img`-Elements auf das geladene Bild, wodurch das Bild als Thumbnail auf dem Bildschirm des Benutzers erscheint.

## Verwenden von Objekt-URLs

Die DOM-Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) ermöglichen es Ihnen, einfache URL-Strings zu erstellen, die verwendet werden können, um auf beliebige Daten zu verweisen, auf die mit einem DOM-`[`File`](/de/docs/Web/API/File)`-Objekt verwiesen werden kann, einschließlich lokaler Dateien auf dem Rechner des Benutzers.

Wenn Sie ein [`File`](/de/docs/Web/API/File)-Objekt haben, auf das Sie mit einer URL aus HTML verweisen möchten, können Sie eine Objekt-URL dafür wie folgt erstellen:

```js
const objectURL = window.URL.createObjectURL(fileObj);
```

Die Objekt-URL ist ein String, der das [`File`](/de/docs/Web/API/File)-Objekt identifiziert. Jedes Mal, wenn Sie [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) aufrufen, wird eine eindeutige Objekt-URL erstellt, auch wenn Sie bereits eine Objekt-URL für diese Datei erstellt haben. Jede dieser muss freigegeben werden. Auch wenn sie automatisch freigegeben wird, wenn das Dokument entladen wird, sollten Sie sie explizit freigeben, wenn Ihre Seite sie dynamisch verwendet, indem Sie [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) aufrufen:

```js
URL.revokeObjectURL(objectURL);
```

## Beispiel: Verwenden von Objekt-URLs zur Anzeige von Bildern

Dieses Beispiel verwendet Objekt-URLs, um Bild-Thumbnails anzuzeigen. Zusätzlich werden andere Dateiinformationen, einschließlich ihrer Namen und Größen, angezeigt.

Das HTML, das die Oberfläche bereitstellt, sieht folgendermaßen aus:

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

Dies etabliert unser Datei-{{HTMLElement("input")}}-Element sowie einen Link, der den Dateiauswahldialog aufruft (da wir das Datei-Input versteckt halten, um zu verhindern, dass diese weniger ansprechende Benutzeroberfläche angezeigt wird). Dies wird im Abschnitt [Verwenden von versteckten Datei-Input-Elementen mit der Methode click()](#using_hidden_file_input_elements_using_the_click_method) erklärt, ebenso wie die Methode, die das Aufrufen des Dateiauswahldialogs ermöglicht.

Die `handleFiles()`-Methode sieht wie folgt aus:

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

Dies beginnt damit, die URL des {{HTMLElement("div")}} mit der ID `fileList` abzurufen. Dies ist der Block, in den wir unsere Dateiliste, einschließlich Thumbnails, einfügen werden.

Wenn das an `handleFiles()` übergebene [`FileList`](/de/docs/Web/API/FileList)-Objekt leer ist, setzen wir das innere HTML des Blocks, um "Keine Dateien ausgewählt!" anzuzeigen. Andernfalls beginnen wir mit dem Aufbau unserer Dateiliste wie folgt:

1. Ein neues ungeordnetes Listen-({{HTMLElement("ul")}}) Element wird erstellt.
2. Das neue Listenelement wird in den {{HTMLElement("div")}}-Block eingefügt, indem dessen [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)-Methode aufgerufen wird.
3. Für jede Datei im [`FileList`](/de/docs/Web/API/FileList), die durch `files` dargestellt wird:

   1. Ein neues Listenelement ({{HTMLElement("li")}}) wird erstellt und in die Liste eingefügt.
   2. Ein neues Bild ({{HTMLElement("img")}}) wird erstellt.
   3. Die Quelle des Bildes wird auf eine neue Objekt-URL gesetzt, die die Datei repräsentiert, indem [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) verwendet wird, um die Blob-URL zu erstellen.
   4. Die Höhe des Bildes wird auf 60 Pixel gesetzt.
   5. Der `load`-Ereignishandler des Bildes wird eingerichtet, um die Objekt-URL freizugeben, da sie nicht mehr benötigt wird, sobald das Bild geladen wurde. Dies erfolgt durch Aufrufen der [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static)-Methode und Übergeben des Objekt-URL-Strings, wie er durch `img.src` angegeben ist.
   6. Das neue Listenelement wird zur Liste hinzugefügt.

Hier finden Sie eine Live-Demo des obigen Codes:

{{EmbedLiveSample('Example_Using_object_URLs_to_display_images', '100%', '300px')}}

## Beispiel: Hochladen einer vom Benutzer ausgewählten Datei

Dieses Beispiel zeigt, wie Sie es dem Benutzer ermöglichen, Dateien (wie die im vorherigen Beispiel ausgewählten Bilder) auf einen Server hochzuladen.

> [!NOTE]
> Es ist normalerweise vorzuziehen, HTTP-Anfragen mit der [Fetch API](/de/docs/Web/API/Fetch_API) anstelle von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) zu stellen. In diesem Fall möchten wir dem Benutzer jedoch den Upload-Fortschritt anzeigen, und diese Funktion wird von der Fetch API noch nicht unterstützt, daher verwendet das Beispiel `XMLHttpRequest`.
>
> Arbeiten zur Verfolgung der Standardisierung von Fortschrittsbenachrichtigungen mit der Fetch API finden Sie unter <https://github.com/whatwg/fetch/issues/607>.

### Erstellen der Upload-Aufgaben

Fortsetzend mit dem Code, der die Thumbnails im vorherigen Beispiel erstellt hat, erinnern wir uns, dass jedes Thumbnail-Bild der CSS-Klasse `obj` zugeordnet ist, mit der entsprechenden [`File`](/de/docs/Web/API/File) im `file`-Attribut. Dies ermöglicht es uns, alle Bilder, die der Benutzer zum Hochladen ausgewählt hat, mit [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) auszuwählen, wie folgt:

```js
function sendFiles() {
  const imgs = document.querySelectorAll(".obj");

  for (let i = 0; i < imgs.length; i++) {
    new FileUpload(imgs[i], imgs[i].file);
  }
}
```

`document.querySelectorAll` ruft eine [`NodeList`](/de/docs/Web/API/NodeList) aller Elemente im Dokument ab, die die CSS-Klasse `obj` haben. In unserem Fall sind dies alle Bild-Thumbnails. Sobald wir diese Liste haben, ist es ein Leichtes, sie durchzugehen und für jedes eine neue `FileUpload`-Instanz zu erstellen. Jede von ihnen behandelt das Hochladen der entsprechenden Datei.

### Handhabung des Upload-Prozesses für eine Datei

Die `FileUpload`-Funktion akzeptiert zwei Eingaben: ein Bildelement und eine Datei, aus der die Bilddaten gelesen werden sollen.

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

Die `FileUpload()`-Funktion oben erstellt einen Throbber, der verwendet wird, um Fortschrittsinformationen anzuzeigen, und erstellt dann eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), um das Hochladen der Daten zu behandeln.

Bevor die Daten tatsächlich übertragen werden, werden mehrere vorbereitende Schritte unternommen:

1. Der `progress`-Listener des Uploads von `XMLHttpRequest` wird so gesetzt, dass der Throbber mit neuen Prozentinformationen aktualisiert wird, sodass der Throbber während des Fortschreitens des Uploads basierend auf den neuesten Informationen aktualisiert wird.
2. Der `load`-Event-Handler des Uploads von `XMLHttpRequest` wird so gesetzt, dass die Fortschrittsinformationen auf 100% aktualisiert werden, um sicherzustellen, dass der Fortschrittsindikator tatsächlich 100% erreicht (im Falle von Granularitätsproblemen während des Prozesses). Anschließend wird der Throbber entfernt, da er nicht mehr benötigt wird. Dies führt dazu, dass der Throbber verschwindet, wenn der Upload abgeschlossen ist.
3. Die Anfrage zum Hochladen der Bilddatei wird durch Aufrufen der `open()`-Methode von `XMLHttpRequest` geöffnet, um das Erzeugen einer POST-Anfrage zu starten.
4. Der MIME-Typ für den Upload wird festgelegt, indem die Funktion `overrideMimeType()` von `XMLHttpRequest` aufgerufen wird. In diesem Fall verwenden wir einen generischen MIME-Typ; je nach Anwendungsfall müssen Sie den MIME-Typ möglicherweise überhaupt nicht festlegen.
5. Das `FileReader`-Objekt wird verwendet, um die Datei in eine Binärzeichenkette zu konvertieren.
6. Schließlich wird die `send()`-Funktion von `XMLHttpRequest` aufgerufen, um den Inhalt der Datei hochzuladen, sobald der gesamte Inhalt geladen ist.

### Asynchrones Bearbeiten des Datei-Upload-Prozesses

Dieses Beispiel, das PHP auf der Serverseite und JavaScript auf der Clientseite verwendet, zeigt das asynchrone Hochladen einer Datei.

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

## Beispiel: Verwendung von Objekt-URLs zur Anzeige von PDFs

Objekt-URLs können für andere Dinge als nur Bilder verwendet werden! Sie können verwendet werden, um eingebettete PDF-Dateien oder andere vom Browser anzeigbare Ressourcen anzuzeigen.

In Firefox muss die Einstellung `pdfjs.disabled` auf `false` gesetzt sein, um das PDF eingebettet in das iframe erscheinen zu lassen (statt als herunterladbare Datei vorgeschlagen zu werden).

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

Sie können Dateien anderer Formate auf die gleiche Weise manipulieren. Hier ist, wie Sie hochgeladene Videos in der Vorschau anzeigen:

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
