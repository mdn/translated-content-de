---
title: Verwenden von Dateien aus Web-Anwendungen
slug: Web/API/File_API/Using_files_from_web_applications
l10n:
  sourceCommit: 7efdbbe04ee2ba39340fb22d7ee9b4aaa6269385
---

{{DefaultAPISidebar("File API")}}{{AvailableInWorkers}}

Mit der File API kann Web-Inhalt den Benutzer auffordern, lokale Dateien auszuwählen und dann deren Inhalt zu lesen. Diese Auswahl kann entweder über ein HTML-`{{HTMLElement("input/file", '&lt;input type="file"&gt;')}}`-Element oder per Drag & Drop erfolgen.

## Zugriff auf ausgewählte Datei(en)

Betrachten Sie dieses HTML:

```html
<input type="file" id="input" multiple />
```

Die File API ermöglicht den Zugriff auf eine [`FileList`](/de/docs/Web/API/FileList), die [`File`](/de/docs/Web/API/File)-Objekte enthält, die die vom Benutzer ausgewählten Dateien darstellen.

Das `multiple`-Attribut des `input`-Elements erlaubt dem Benutzer, mehrere Dateien auszuwählen.

Zugriff auf die erste ausgewählte Datei mithilfe eines klassischen DOM-Selectors:

```js
const selectedFile = document.getElementById("input").files[0];
```

### Zugriff auf ausgewählte Datei(en) bei einem Änderungsereignis

Es ist auch möglich (aber nicht zwingend), auf die [`FileList`](/de/docs/Web/API/FileList) über das `change`-Ereignis zuzugreifen. Sie müssen [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um den `change`-Ereignis-Listener hinzuzufügen, so:

```js
const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
}
```

## Informationen über ausgewählte Datei(en) abrufen

Das vom DOM bereitgestellte [`FileList`](/de/docs/Web/API/FileList)-Objekt listet alle vom Benutzer ausgewählten Dateien auf, die jeweils als [`File`](/de/docs/Web/API/File)-Objekt angegeben sind. Sie können feststellen, wie viele Dateien der Benutzer ausgewählt hat, indem Sie den Wert des `length`-Attributs der Fileliste überprüfen:

```js
const numFiles = fileList.length;
```

Einzelne [`File`](/de/docs/Web/API/File)-Objekte können abgerufen werden, indem auf die Liste als Array zugegriffen wird.

Es gibt drei Attribute, die vom [`File`](/de/docs/Web/API/File)-Objekt bereitgestellt werden und nützliche Informationen über die Datei enthalten.

- `name`
  - : Der Dateiname als schreibgeschützter String. Dies ist nur der Dateiname und enthält keine Pfadinformationen.
- `size`
  - : Die Größe der Datei in Bytes als schreibgeschützter 64-Bit-Ganzzahl.
- `type`
  - : Der MIME-Typ der Datei als schreibgeschützter String oder `""`, falls der Typ nicht bestimmt werden konnte.

### Beispiel: Anzeigen der Größe der Datei(en)

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

## Verwenden versteckter Datei-Input-Elemente mit der click()-Methode

Sie können das doch recht unansehnliche Datei-{{HTMLElement("input")}}-Element verbergen und Ihre eigene Schnittstelle zum Öffnen des Dateiauswahldialogs und zur Anzeige der ausgewählten Datei oder Dateien des Benutzers präsentieren. Sie können dies tun, indem Sie das Eingabe-Element mit `display:none` stylen und die [`click()`](/de/docs/Web/API/HTMLElement/click)-Methode auf dem {{HTMLElement("input")}}-Element aufrufen.

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

Sie können das {{HTMLElement("button")}} nach Belieben stylen.

## Verwenden eines Label-Elements zum Auslösen eines versteckten Datei-Input-Elements

Um das Öffnen des Dateiauswahldialogs ohne die Verwendung von JavaScript (die click()-Methode) zu ermöglichen, kann ein {{HTMLElement("label")}}-Element verwendet werden. Beachten Sie, dass in diesem Fall das Eingabe-Element nicht mit `display: none` (noch mit `visibility: hidden`) versteckt werden darf, da das Label sonst nicht über die Tastatur zugänglich wäre. Verwenden Sie stattdessen die [Technik zum unsichtbaren Verbergen von Inhalten](https://www.a11yproject.com/posts/how-to-hide-content/).

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

Es ist nicht erforderlich, JavaScript-Code hinzuzufügen, um `fileElem.click()` aufzurufen. Auch in diesem Fall können Sie das Label-Element nach Belieben stylen. Sie müssen ein visuelles Signal für den Fokusstatus des versteckten Eingabefeldes an seinem Label bereitstellen, sei es eine Umrandung, wie oben gezeigt, oder Hintergrundfarbe oder Box-Schatten. (Zum Zeitpunkt des Schreibens zeigt Firefox dieses visuelle Signal für `<input type="file">`-Elemente nicht an.)

## Auswählen von Dateien per Drag & Drop

Sie können dem Benutzer auch erlauben, Dateien per Drag & Drop in Ihre Web-Anwendung zu ziehen.

Der erste Schritt besteht darin, eine Drop-Zone einzurichten. Welcher Teil Ihrer Inhalte Drops akzeptiert, kann je nach Design Ihrer Anwendung variieren, aber das Erstellen eines Elements, das Drop-Ereignisse empfängt, ist einfach:

```js
let dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
```

In diesem Beispiel verwandeln wir das Element mit der ID `dropbox` in unsere Drop-Zone. Dies geschieht durch das Hinzufügen von Listenern für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event), [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignisse.

In unserem Fall müssen wir tatsächlich nichts mit den `dragenter`- und `dragover`-Ereignissen machen, daher sind diese Funktionen einfach. Sie stoppen lediglich die Propagierung des Ereignisses und verhindern die Standardaktion:

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

Hier rufen wir das `dataTransfer`-Feld vom Ereignis ab, ziehen die Dateiliste daraus und übergeben diese dann an `handleFiles()`. Ab diesem Punkt funktioniert die Handhabung der Dateien genauso, egal ob der Benutzer das `input`-Element oder Drag & Drop verwendet hat.

## Beispiel: Anzeigen von Thumbnails ausgewählter Benutzerbilder

Angenommen, Sie entwickeln die nächste großartige Foto-Sharing-Website und möchten HTML verwenden, um Thumbnail-Vorschauen von Bildern anzuzeigen, bevor der Benutzer sie tatsächlich hochlädt. Sie können Ihr Eingabeelement oder Ihre Drop-Zone wie zuvor besprochen einrichten und sie eine Funktion wie die untenstehende `handleFiles()`-Funktion aufrufen lassen.

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

Hier sieht unser Schleifenablauf, der die vom Benutzer ausgewählten Dateien verarbeitet, für jede Datei im `type`-Attribut nach, ob ihr MIME-Typ mit `image/` beginnt. Für jede Datei, die ein Bild ist, erstellen wir ein neues `img`-Element. CSS kann verwendet werden, um hübsche Ränder oder Schatten festzulegen und die Größe des Bildes anzugeben, sodass dies nicht hier gemacht werden muss.

Jedes Bild erhält die CSS-Klasse `obj`, was es leicht auffindbar im DOM-Baum macht. Wir fügen auch ein `file`-Attribut zu jedem Bild hinzu, das die [`File`](/de/docs/Web/API/File) für das Bild spezifiziert; dies ermöglicht es uns, die Bilder später für den tatsächlichen Upload abzurufen. Wir verwenden [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild), um das neue Thumbnail zum Vorschaubereich unseres Dokuments hinzuzufügen.

Als nächstes richten wir den [`FileReader`](/de/docs/Web/API/FileReader) ein, um das Bild asynchron zu laden und es dem `img`-Element zuzuweisen. Nach dem Erstellen des neuen `FileReader`-Objekts richten wir seine `onload`-Funktion ein und rufen dann `readAsDataURL()` auf, um den Lesevorgang im Hintergrund zu starten. Wenn der gesamte Inhalt der Bilddatei geladen ist, wird er in eine `data:`-URL konvertiert, die an den `onload`-Callback übergeben wird. Unsere Implementierung dieser Routine setzt das `src`-Attribut des `img`-Elements auf das geladene Bild, was dazu führt, dass das Bild im Thumbnail auf dem Bildschirm des Benutzers erscheint.

## Verwenden von Objekt-URLs

Die DOM-Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) and [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) erlauben es Ihnen, einfache URL-Strings zu erstellen, die verwendet werden können, um auf alle Daten zu verweisen, die mit einem DOM-`[`File`](/de/docs/Web/API/File)`-Objekt referenziert werden können, einschließlich lokaler Dateien auf dem Computer des Benutzers.

Wenn Sie ein [`File`](/de/docs/Web/API/File)-Objekt haben, auf das Sie von HTML aus per URL verweisen möchten, können Sie eine Objekt-URL dafür wie folgt erstellen:

```js
const objectURL = window.URL.createObjectURL(fileObj);
```

Die Objekt-URL ist ein String, der das [`File`](/de/docs/Web/API/File)-Objekt identifiziert. Jedes Mal, wenn Sie [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) aufrufen, wird eine eindeutige Objekt-URL erstellt, selbst wenn Sie bereits eine Objekt-URL für diese Datei erstellt haben. Jede dieser URLs muss freigegeben werden. Während sie automatisch freigegeben werden, wenn das Dokument entladen wird, sollten Sie sie explizit freigeben, indem Sie [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) aufrufen, wenn Ihre Seite sie dynamisch verwendet:

```js
URL.revokeObjectURL(objectURL);
```

## Beispiel: Verwenden von Objekt-URLs zum Anzeigen von Bildern

Dieses Beispiel verwendet Objekt-URLs zum Anzeigen von Bild-Thumbnails. Außerdem werden andere Dateiinformationen wie ihre Namen und Größen angezeigt.

Das HTML, das die Schnittstelle präsentiert, sieht wie folgt aus:

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

Dies legt unser Datei-{{HTMLElement("input")}}-Element fest sowie einen Link, der den Dateiauswahldialog aufruft (da wir das Datei-Input verstecken, um zu verhindern, dass diese wenig attraktive Benutzeroberfläche angezeigt wird). Dies wird im Abschnitt [Verwenden versteckter Datei-Input-Elemente mit der click()-Methode](#using_hidden_file_input_elements_using_the_click_method) erklärt, ebenso wie die Methode, die den Dateiauswahldialog aufruft.

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
      li.appendChild(img);
      const info = document.createElement("span");
      info.textContent = `${this.files[i].name}: ${this.files[i].size} bytes`;
      li.appendChild(info);
    }
  }
}
```

Dies beginnt mit dem Abrufen der URL des {{HTMLElement("div")}} mit der ID `fileList`. Dies ist der Block, in den wir unsere Dateiliste einfügen, einschließlich Thumbnails.

Wenn das an `handleFiles()` übergebene [`FileList`](/de/docs/Web/API/FileList)-Objekt leer ist, setzen wir den inneren HTML des Blocks auf "Keine Dateien ausgewählt!" Andernfalls beginnen wir mit dem Aufbau unserer Dateiliste, wie folgt:

1. Ein neues, ungeordnetes Listen-({{HTMLElement("ul")}})-Element wird erstellt.
2. Das neue Listenelement wird in den {{HTMLElement("div")}}-Block eingefügt, indem die [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)-Methode dieses Blocks aufgerufen wird.
3. Für jede [`File`](/de/docs/Web/API/File) in der [`FileList`](/de/docs/Web/API/FileList), die durch `files` dargestellt wird:

   1. Ein neues Listenelement ({{HTMLElement("li")}}) wird erstellt und in die Liste eingefügt.
   2. Ein neues Bild ({{HTMLElement("img")}}) wird angelegt.
   3. Die Quelle des Bildes wird auf eine neue Objekt-URL gesetzt, die die Datei darstellt, indem [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) aufgerufen wird, um die Blob-URL zu erstellen.
   4. Die Höhe des Bildes wird auf 60 Pixel gesetzt.
   5. Das neue Listenelement wird der Liste hinzugefügt.

Hier ist ein Live-Demo des obigen Codes:

{{EmbedLiveSample('Example_Using_object_URLs_to_display_images', '100%', '300px')}}

Beachten Sie, dass wir die Objekt-URL nicht sofort nach dem Laden des Bildes widerrufen, da dies das Bild für Benutzerinteraktionen unbrauchbar machen würde (wie z.B. das Rechtsklicken zum Speichern des Bildes oder das Öffnen in einem neuen Tab). Für langlebige Anwendungen sollten Sie Objekt-URLs freigeben, wenn sie nicht mehr benötigt werden (z.B. wenn das Bild aus dem DOM entfernt wird), um den Speicher freizugeben, indem Sie die [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static)-Methode aufrufen und die Objekt-URL-String übergeben.

## Beispiel: Hochladen einer vom Benutzer ausgewählten Datei

Dieses Beispiel zeigt, wie Sie den Benutzer Dateien (wie die mit dem vorherigen Beispiel ausgewählten Bilder) auf einen Server hochladen lassen können.

> [!NOTE]
> Es ist in der Regel vorzuziehen, HTTP-Anfragen mit der [Fetch API](/de/docs/Web/API/Fetch_API) statt [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) zu machen. In diesem Fall möchten wir dem Benutzer jedoch den Upfortschritt anzeigen, und diese Funktion wird von der Fetch API noch nicht unterstützt, daher verwendet das Beispiel `XMLHttpRequest`.
>
> Die Arbeiten zur Verfolgung der Standardisierung von Fortschrittsbenachrichtigungen mit der Fetch API finden Sie unter <https://github.com/whatwg/fetch/issues/607>.

### Erstellen der Upload-Aufgaben

Weiter mit dem Code, der die Thumbnails im vorherigen Beispiel erstellt hat: Erinnern Sie sich daran, dass jedes Thumbnail-Bild in der CSS-Klasse `obj` ist und die entsprechende [`File`](/de/docs/Web/API/File) in einem `file`-Attribut angehängt ist. Dies ermöglicht es uns, alle Bilder auszuwählen, die der Benutzer zum Hochladen ausgewählt hat, indem wir [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden, so:

```js
function sendFiles() {
  const imgs = document.querySelectorAll(".obj");

  for (let i = 0; i < imgs.length; i++) {
    new FileUpload(imgs[i], imgs[i].file);
  }
}
```

`document.querySelectorAll` ruft ein [`NodeList`](/de/docs/Web/API/NodeList) aller Elemente im Dokument mit der CSS-Klasse `obj` ab. In unserem Fall werden dies alle Bild-Thumbnails sein. Sobald wir diese Liste haben, ist es trivial, sie durchzugehen und eine neue `FileUpload`-Instanz für jedes zu erstellen. Jede dieser Instanzen kümmert sich um das Hochladen der entsprechenden Datei.

### Den Upload-Vorgang für eine Datei handhaben

Die `FileUpload`-Funktion akzeptiert zwei Eingaben: ein Bild-Element und eine Datei, von der die Bilddaten gelesen werden sollen.

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

Die oben gezeigte `FileUpload()`-Funktion erstellt ein Throbber, der verwendet wird, um Fortschrittsinformationen anzuzeigen, und erstellt dann ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), um das Hochladen der Daten zu verwalten.

Bevor die Daten tatsächlich übertragen werden, werden mehrere Vorbereitungen getroffen:

1. Der `XMLHttpRequest`-Upload-`progress`-Listener wird so eingestellt, dass der Throbber mit neuen Prozentinformationen aktualisiert wird, sodass während der Upload fortschreitet, der Throbber basierend auf den neuesten Informationen aktualisiert wird.
2. Der `XMLHttpRequest`-Upload-`load`-Ereignishandler wird so eingestellt, dass die Fortschrittsinformationen des Throbbers auf 100% aktualisiert werden, um sicherzustellen, dass der Fortschrittsanzeiger tatsächlich 100% erreicht (im Falle von Granularitäts-Eigenheiten beim Vorgang). Er entfernt dann den Throbber, da er nicht mehr benötigt wird. Dies lässt den Throbber verschwinden, sobald der Upload abgeschlossen ist.
3. Die Anfrage zum Hochladen der Bilddatei wird geöffnet, indem die `open()`-Methode des `XMLHttpRequest` aufgerufen wird, um mit der Erstellung einer POST-Anfrage zu beginnen.
4. Der MIME-Typ für den Upload wird festgelegt, indem die Funktion `overrideMimeType()` des `XMLHttpRequest` aufgerufen wird. In diesem Fall verwenden wir einen generischen MIME-Typ; möglicherweise müssen Sie den MIME-Typ nicht einmal setzen, je nach Anwendungsfall.
5. Das `FileReader`-Objekt wird verwendet, um die Datei in einen binären String umzuwandeln.
6. Schließlich, wenn der Inhalt geladen ist, wird die Funktion `send()` des `XMLHttpRequest` aufgerufen, um den Inhalt der Datei hochzuladen.

### Asynchrones Handhaben des Dateiuploadprozesses

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

## Beispiel: Verwenden von Objekt-URLs zum Anzeigen von PDFs

Objekt-URLs können für andere Zwecke als nur Bilder verwendet werden! Sie können verwendet werden, um eingebettete PDF-Dateien oder andere Ressourcen anzuzeigen, die vom Browser angezeigt werden können.

In Firefox muss, um das PDF im iframe eingebettet anzuzeigen (anstatt es als heruntergeladene Datei vorzuschlagen), die Einstellung `pdfjs.disabled` auf `false` gesetzt sein.

```html
<iframe id="viewer"></iframe>
```

Und hier ist die Änderung des `src`-Attributs:

```js
const objURL = URL.createObjectURL(blob);
const iframe = document.getElementById("viewer");
iframe.setAttribute("src", objURL);

// Later:
URL.revokeObjectURL(objURL);
```

## Beispiel: Verwenden von Objekt-URLs mit anderen Dateitypen

Sie können Dateien anderer Formate auf die gleiche Weise manipulieren. Hier ist, wie Sie hochgeladene Videos vorher anzeigen:

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
- [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
