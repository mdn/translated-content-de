---
title: Verwenden von Dateien aus Webanwendungen
slug: Web/API/File_API/Using_files_from_web_applications
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("File API")}}{{AvailableInWorkers}}

Mit der File API kann Webinhalt den Benutzer bitten, lokale Dateien auszuwählen und dann den Inhalt dieser Dateien zu lesen. Diese Auswahl kann entweder durch die Verwendung eines HTML `{{HTMLElement("input/file", '&lt;input type="file"&gt;')}}` Elements oder durch Drag-and-Drop erfolgen.

## Zugriff auf ausgewählte Datei(en)

Betrachten Sie dieses HTML:

```html
<input type="file" id="input" multiple />
```

Die File API ermöglicht den Zugriff auf ein [`FileList`](/de/docs/Web/API/FileList), das [`File`](/de/docs/Web/API/File) Objekte enthält, die die vom Benutzer ausgewählten Dateien repräsentieren.

Das `multiple` Attribut auf dem `input` Element erlaubt es dem Benutzer, mehrere Dateien auszuwählen.

Zugriff auf die erste ausgewählte Datei mit einem klassischen DOM-Selektor:

```js
const selectedFile = document.getElementById("input").files[0];
```

### Zugriff auf ausgewählte Datei(en) bei einem Änderungsereignis

Es ist auch möglich (aber nicht erforderlich), auf das [`FileList`](/de/docs/Web/API/FileList) über das `change` Ereignis zuzugreifen. Sie müssen [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um den `change` Ereignis-Listener hinzuzufügen, wie hier gezeigt:

```js
const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
}
```

## Informationen zu ausgewählten Datei(en) abrufen

Das vom DOM bereitgestellte [`FileList`](/de/docs/Web/API/FileList) Objekt listet alle vom Benutzer ausgewählten Dateien auf, jede als ein [`File`](/de/docs/Web/API/File) Objekt angegeben. Sie können ermitteln, wie viele Dateien der Benutzer ausgewählt hat, indem Sie den Wert des `length` Attributs der Dateiliste überprüfen:

```js
const numFiles = fileList.length;
```

Individuelle [`File`](/de/docs/Web/API/File) Objekte können durch Zugreifen auf die Liste als ein Array abgerufen werden.

Es gibt drei Attribute, die vom [`File`](/de/docs/Web/API/File) Objekt bereitgestellt werden und nützliche Informationen über die Datei enthalten.

- `name`
  - : Der Dateiname als schreibgeschützter String. Dies ist nur der Dateiname und enthält keine Pfadinformationen.
- `size`
  - : Die Größe der Datei in Bytes als schreibgeschützter 64-Bit-Integer.
- `type`
  - : Der MIME-Typ der Datei als schreibgeschützter String oder `""`, wenn der Typ nicht bestimmt werden konnte.

### Beispiel: Anzeige der Dateigröße(n)

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
uploadInput.addEventListener(
  "change",
  () => {
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
  },
  false,
);
```

## Verwenden versteckter Datei-Eingabefelder mit der Methode click()

Sie können das zugegebenermaßen unschöne {{HTMLElement("input")}} Element für Dateien ausblenden und eine eigene Schnittstelle für das Öffnen des Dateiauswahl-Dialogs und die Anzeige der vom Benutzer ausgewählten Datei oder Dateien präsentieren. Das können Sie tun, indem Sie das Eingabeelement mit `display:none` stylen und dann die [`click()`](/de/docs/Web/API/HTMLElement/click) Methode auf dem {{HTMLElement("input")}} Element aufrufen.

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

Der Code, der das `click` Ereignis behandelt, kann so aussehen:

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

Sie können das {{HTMLElement("button")}} Element nach Belieben stylen.

## Verwenden eines Label-Elements zum Auslösen eines versteckten Datei-Eingabefelds

Um das Öffnen des Dateiauswahl-Dialogs ohne Verwendung von JavaScript (Methode click()) zu ermöglichen, kann ein {{HTMLElement("label")}} Element verwendet werden. Beachten Sie, dass in diesem Fall das Eingabeelement nicht mit `display: none` (noch mit `visibility: hidden`) versteckt werden darf, da das Label ansonsten nicht über die Tastatur zugänglich wäre. Verwenden Sie stattdessen die [visually-hidden technique](https://www.a11yproject.com/posts/how-to-hide-content/).

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

Es ist nicht erforderlich, JavaScript-Code hinzuzufügen, um `fileElem.click()` aufzurufen. Auch in diesem Fall können Sie das Label-Element nach Belieben stylen. Sie müssen einen visuellen Hinweis auf den Fokusstatus des versteckten Eingabefeldes auf dessen Label bereitstellen, sei es ein Umriss wie oben gezeigt oder eine Hintergrundfarbe oder ein Schatten. (Zum Zeitpunkt der Erstellung zeigt Firefox diesen visuellen Hinweis für `<input type="file">` Elemente nicht an.)

## Auswählen von Dateien per Drag-and-Drop

Sie können dem Benutzer auch erlauben, Dateien in Ihre Webanwendung zu ziehen und abzulegen.

Der erste Schritt ist die Einrichtung einer Ablagezone. Welche Teile Ihres Inhalts das Ablegen von Dateien akzeptieren, kann je nach Design Ihrer Anwendung variieren, aber ein Element so zu machen, dass es Drop-Ereignisse erhält, ist einfach:

```js
let dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
```

In diesem Beispiel verwandeln wir das Element mit der ID `dropbox` in unsere Ablagezone. Dies geschieht durch das Hinzufügen von Listeners für die Ereignisse [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event), [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event).

Wir müssen bei den `dragenter` und `dragover` Ereignissen in unserem Fall tatsächlich nichts tun, daher sind diese Funktionen einfach. Sie stoppen lediglich die Weitergabe des Ereignisses und verhindern, dass die Standardaktion ausgeführt wird:

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

Die eigentliche Magie passiert in der `drop()` Funktion:

```js
function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  const dt = e.dataTransfer;
  const files = dt.files;

  handleFiles(files);
}
```

Hier holen wir das `dataTransfer` Feld aus dem Ereignis, ziehen die Dateiliste daraus und übergeben diese an `handleFiles()`. Von diesem Punkt an ist die Bearbeitung der Dateien gleich, ob der Benutzer das `input` Element oder Drag-and-Drop verwendet hat.

## Beispiel: Thumbnails von benutzergewählten Bildern anzeigen

Angenommen, Sie entwickeln die nächste große Foto-Sharing-Website und möchten HTML verwenden, um Thumbnail-Vorschauen von Bildern anzuzeigen, bevor der Benutzer sie tatsächlich hochlädt. Sie können Ihr Eingabeelement oder Ihre Ablagezone wie zuvor besprochen einrichten und eine Funktion wie die `handleFiles()` Funktion unten aufrufen lassen.

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

Hier prüft unsere Schleife, die die benutzerausgewählten Dateien verarbeitet, für jede Datei das `type` Attribut, ob ihr MIME-Typ mit `image/` beginnt. Für jede Datei, die ein Bild ist, erstellen wir ein neues `img` Element. CSS kann verwendet werden, um hübsche Ränder oder Schatten und die Größe des Bildes festzulegen, sodass dies hier nicht nötig ist.

Jedes Bild erhält die CSS-Klasse `obj`, was es leicht macht, es im DOM-Baum zu finden. Wir fügen jedem Bild auch ein `file` Attribut hinzu, das die entsprechende [`File`](/de/docs/Web/API/File) für das Bild bestimmt; dies wird uns ermöglichen, die Bilder später tatsächlich hochzuladen. Wir verwenden [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild), um das neue Thumbnail zum Vorschaubereich unseres Dokuments hinzuzufügen.

Als Nächstes richten wir den [`FileReader`](/de/docs/Web/API/FileReader) ein, um das asynchrone Laden des Bildes zu übernehmen und es dem `img` Element hinzuzufügen. Nach dem Erstellen des neuen `FileReader` Objekts setzen wir seine `onload` Funktion und rufen dann `readAsDataURL()` auf, um den Lesevorgang im Hintergrund zu starten. Wenn der gesamte Inhalt der Bilddatei geladen ist, werden sie in eine `data:` URL umgewandelt, die an den `onload` Rückruf übergeben wird. Unsere Implementierung dieser Routine setzt das `src` Attribut des `img` Elements auf das geladene Bild, wodurch das Bild im Thumbnail auf dem Bildschirm des Benutzers angezeigt wird.

## Verwendung von Objekt-URLs

Die DOM-Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) erlauben Ihnen, einfache URL-Strings zu erstellen, die verwendet werden können, um auf alle Daten zu verweisen, die mit einem DOM [`File`](/de/docs/Web/API/File) Objekt referenziert werden können, einschließlich lokaler Dateien auf dem Computer des Benutzers.

Wenn Sie ein [`File`](/de/docs/Web/API/File) Objekt haben, auf das Sie per URL aus HTML verweisen möchten, können Sie eine Objekt-URL dafür wie folgt erstellen:

```js
const objectURL = window.URL.createObjectURL(fileObj);
```

Die Objekt-URL ist ein String, der das [`File`](/de/docs/Web/API/File) Objekt identifiziert. Jedes Mal, wenn Sie [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) aufrufen, wird eine eindeutige Objekt-URL erstellt, selbst wenn Sie bereits eine Objekt-URL für diese Datei erstellt haben. Jede dieser muss freigegeben werden. Während sie automatisch freigegeben werden, wenn das Dokument entladen wird, sollten Sie, wenn Ihre Seite sie dynamisch verwendet, sie explizit freigeben, indem Sie [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) aufrufen:

```js
URL.revokeObjectURL(objectURL);
```

## Beispiel: Verwenden von Objekt-URLs zur Anzeige von Bildern

Dieses Beispiel verwendet Objekt-URLs, um Bild-Thumbnails anzuzeigen. Darüber hinaus zeigt es andere Dateiinformationen einschließlich ihrer Namen und Größen an.

Das HTML, das die Schnittstelle präsentiert, sieht so aus:

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

Dies etabliert unser Datei {{HTMLElement("input")}} Element sowie einen Link, der den Dateiauswahl-Dialog aufruft (da wir das Datei-Eingabefeld verstecken, um zu verhindern, dass jene wenig attraktive Benutzeroberfläche angezeigt wird). Dies wird im Abschnitt [Verwenden versteckter Datei-Eingabefelder mit der Methode click()](#using_hidden_file_input_elements_using_the_click_method) erklärt, ebenso wie die Methode, die den Dateiauswahl-Dialog aufruft.

Die `handleFiles()` Methode folgt:

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

Dies beginnt mit dem Abrufen der URL des {{HTMLElement("div")}} mit der ID `fileList`. Dies ist der Block, in den wir unsere Dateiliste einschließlich Thumbnails einfügen werden.

Wenn das [`FileList`](/de/docs/Web/API/FileList) Objekt, das an `handleFiles()` übergeben wird, leer ist, setzen wir das innere HTML des Blocks, um "Keine Dateien ausgewählt!" anzuzeigen. Andernfalls beginnen wir, unsere Dateiliste wie folgt zu erstellen:

1. Ein neues ungeordnetes Listen-({{HTMLElement("ul")}}) Element wird erstellt.
2. Das neue Listen-Element wird in den {{HTMLElement("div")}} Block eingefügt, indem seine [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) Methode aufgerufen wird.
3. Für jede [`File`](/de/docs/Web/API/File) in der [`FileList`](/de/docs/Web/API/FileList), die durch `files` repräsentiert wird:
   1. Ein neues Listenelement ({{HTMLElement("li")}}) wird erstellt und in die Liste eingefügt.
   2. Ein neues Bild- ({{HTMLElement("img")}}) Element wird erstellt.
   3. Der Quellcode des Bildes wird auf eine neue Objekt-URL gesetzt, die die Datei repräsentiert, indem [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) verwendet wird, um die Blob-URL zu erstellen.
   4. Die Höhe des Bildes wird auf 60 Pixel gesetzt.
   5. Das neue Listenelement wird der Liste hinzugefügt.

Hier ist eine Live-Demo des oben genannten Codes:

{{EmbedLiveSample('Example_Using_object_URLs_to_display_images', '100%', '300px')}}

Beachten Sie, dass wir die Objekt-URL nicht sofort widerrufen, nachdem das Bild geladen wurde, da dies das Bild unbrauchbar für Benutzerinteraktionen machen würde (wie Rechtsklick zum Speichern des Bildes oder Öffnen in einem neuen Tab). Für langlebige Anwendungen sollten Sie Objekt-URLs widerrufen, wenn sie nicht mehr benötigt werden (wie wenn das Bild aus dem DOM entfernt wird), um Speicher freizugeben, indem die [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) Methode aufgerufen wird und die Objekt-URL übergeben wird.

## Beispiel: Hochladen einer vom Benutzer ausgewählten Datei

Dieses Beispiel zeigt, wie der Benutzer Dateien (wie die im vorherigen Beispiel ausgewählten Bilder) auf einen Server hochladen kann.

> [!NOTE]
> Es wird in der Regel bevorzugt, HTTP-Anfragen mit der [Fetch API](/de/docs/Web/API/Fetch_API) anstelle von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) durchzuführen. In diesem Fall möchten wir dem Benutzer jedoch den Upload-Fortschritt anzeigen, und diese Funktion wird von der Fetch API noch nicht unterstützt, deshalb wird das Beispiel `XMLHttpRequest` verwendet.
>
> Die Arbeit zur Verfolgung der Standardisierung von Fortschrittsbenachrichtigungen mit der Fetch API ist unter <https://github.com/whatwg/fetch/issues/607>.

### Erstellen der Upload-Aufgaben

Fortsetzend mit dem Code, der die Thumbnails im vorherigen Beispiel erstellte, denken Sie daran, dass jedes Thumbnail-Bild in der CSS-Klasse `obj` mit der entsprechenden [`File`](/de/docs/Web/API/File) in einem `file` Attribut angehängt ist. Dies ermöglicht es uns, alle Bilder auszuwählen, die der Benutzer zum Hochladen ausgewählt hat, unter Verwendung von [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll), wie folgt:

```js
function sendFiles() {
  const imgs = document.querySelectorAll(".obj");

  for (const img of imgs) {
    new FileUpload(img, img.file);
  }
}
```

`document.querySelectorAll` ruft eine [`NodeList`](/de/docs/Web/API/NodeList) von allen Elementen im Dokument mit der CSS-Klasse `obj` ab. In unserem Fall werden dies alle Bildthumbnails sein. Sobald wir diese Liste haben, ist es trivial, sie durchzugehen und eine neue `FileUpload` Instanz für jede zu erstellen. Jede dieser Instanzen übernimmt den Upload der entsprechenden Datei.

### Verarbeitung des Upload-Vorgangs für eine Datei

Die `FileUpload` Funktion akzeptiert zwei Eingaben: ein Bildelement und eine Datei, aus der die Bilddaten gelesen werden sollen.

```js
function FileUpload(img, file) {
  const reader = new FileReader();
  this.ctrl = createThrobber(img);
  const xhr = new XMLHttpRequest();
  this.xhr = xhr;

  this.xhr.upload.addEventListener(
    "progress",
    (e) => {
      if (e.lengthComputable) {
        const percentage = Math.round((e.loaded * 100) / e.total);
        this.ctrl.update(percentage);
      }
    },
    false,
  );

  xhr.upload.addEventListener(
    "load",
    (e) => {
      this.ctrl.update(100);
      const canvas = this.ctrl.ctx.canvas;
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

Die oben gezeigte `FileUpload()` Funktion erstellt einen Lader, der zur Anzeige von Fortschrittsinformationen verwendet wird, und erstellt dann ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), um den Upload der Daten zu handhaben.

Bevor die Daten tatsächlich übertragen werden, werden mehrere vorbereitende Schritte unternommen:

1. Der `progress` Listener des `XMLHttpRequest` Uploads wird gesetzt, um den Lader mit neuen Prozentinformationen zu aktualisieren, sodass der Lader während des Uploads basierend auf den neuesten Informationen aktualisiert wird.
2. Der `load` Ereignis-Handler des `XMLHttpRequest` Uploads wird gesetzt, um die Fortschrittsinformationen des Laders auf 100 % zu aktualisieren, um sicherzustellen, dass der Fortschrittsanzeiger tatsächlich 100 % erreicht (im Falle von Granularitätsbesonderheiten während des Prozesses). Er entfernt dann den Lader, da dieser nicht mehr benötigt wird. Dadurch verschwindet der Lader, wenn der Upload abgeschlossen ist.
3. Die Anfrage zum Hochladen der Bilddatei wird durch Aufrufen der `open()` Methode des `XMLHttpRequest` mởóduloši gestartet.
4. Der MIME-Typ für den Upload wird durch Aufrufen der `overrideMimeType()` Funktion des `XMLHttpRequest` gesetzt. In diesem Fall verwenden wir einen generischen MIME-Typ; je nach Ihrem Anwendungsfall kann es sein, dass Sie den MIME-Typ überhaupt nicht setzen müssen.
5. Das `FileReader` Objekt wird verwendet, um die Datei in einen Binärstring zu konvertieren.
6. Schließlich wird, wenn der Inhalt geladen ist, die `send()` Funktion des `XMLHttpRequest` aufgerufen, um den Inhalt der Datei hochzuladen.

### Asynchrone Verarbeitung des Upload-Vorgangs

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

      window.onload = () => {
        const dropzone = document.getElementById("dropzone");
        dropzone.ondragover = dropzone.ondragenter = (event) => {
          event.stopPropagation();
          event.preventDefault();
        };

        dropzone.ondrop = (event) => {
          event.stopPropagation();
          event.preventDefault();

          const filesArray = event.dataTransfer.files;
          for (let i = 0; i < filesArray.length; i++) {
            sendFile(filesArray[i]);
          }
        };
      };
    </script>
  </head>
  <body>
    <div>
      <div
        id="dropzone"
        style="margin:30px; width:500px; height:300px; border:1px dotted grey;">
        Drag & drop your file here
      </div>
    </div>
  </body>
</html>
```

## Beispiel: Verwenden von Objekt-URLs zur Anzeige von PDFs

Objekt-URLs können für andere Dinge als nur Bilder verwendet werden! Sie können verwendet werden, um eingebettete PDF-Dateien oder andere Ressourcen anzuzeigen, die vom Browser angezeigt werden können.

In Firefox muss die Präferenz `pdfjs.disabled` auf `false` gesetzt sein, damit das PDF im iframe eingebettet angezeigt wird (anstatt als herunterladbare Datei vorgeschlagen zu werden).

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

Sie können Dateien anderer Formate auf dieselbe Weise manipulieren. Hier wird gezeigt, wie hochgeladene Videos angezeigt werden:

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
