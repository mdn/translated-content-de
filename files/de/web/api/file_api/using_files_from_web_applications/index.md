---
title: Verwendung von Dateien aus Webanwendungen
slug: Web/API/File_API/Using_files_from_web_applications
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{DefaultAPISidebar("File API")}}{{AvailableInWorkers}}

Mit der File API kann Webinhalt den Benutzer bitten, lokale Dateien auszuwählen und dann den Inhalt dieser Dateien zu lesen. Diese Auswahl kann entweder über ein HTML-`{{HTMLElement("input/file", '&lt;input type="file"&gt;')}}`-Element oder per Drag & Drop erfolgen.

## Zugriff auf ausgewählte Datei(en)

Betrachten Sie dieses HTML:

```html
<input type="file" id="input" multiple />
```

Die File API ermöglicht den Zugriff auf eine [`FileList`](/de/docs/Web/API/FileList), die [`File`](/de/docs/Web/API/File)-Objekte enthält, die die von den Benutzern ausgewählten Dateien darstellen.

Das `multiple` Attribut im `input`-Element erlaubt es dem Benutzer, mehrere Dateien auszuwählen.

Zugriff auf die erste ausgewählte Datei mit einem klassischen DOM-Selektor:

```js
const selectedFile = document.getElementById("input").files[0];
```

### Zugriff auf ausgewählte Datei(en) bei einem Change-Event

Es ist auch möglich (aber nicht zwingend erforderlich), über das `change`-Event auf die [`FileList`](/de/docs/Web/API/FileList) zuzugreifen. Sie müssen [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um den `change`-Event-Listener hinzuzufügen, so:

```js
const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
}
```

## Informationen über ausgewählte Datei(en) abrufen

Das vom DOM bereitgestellte [`FileList`](/de/docs/Web/API/FileList)-Objekt listet alle vom Benutzer ausgewählten Dateien auf, jede wird als [`File`](/de/docs/Web/API/File)-Objekt angegeben. Sie können ermitteln, wie viele Dateien der Benutzer ausgewählt hat, indem Sie den Wert des `length`-Attributs der Dateiliste überprüfen:

```js
const numFiles = fileList.length;
```

Einzelne [`File`](/de/docs/Web/API/File)-Objekte können abgerufen werden, indem Sie auf die Liste wie auf ein Array zugreifen.

Es gibt drei Attribute, die vom [`File`](/de/docs/Web/API/File)-Objekt bereitgestellt werden und nützliche Informationen über die Datei enthalten.

- `name`
  - : Der Dateiname als schreibgeschützter String. Dies ist nur der Dateiname und enthält keine Pfadinformationen.
- `size`
  - : Die Größe der Datei in Bytes als schreibgeschützter 64-Bit-Integer.
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

## Verwenden versteckter Datei-Eingabeelemente mit der click()-Methode

Sie können das zugegeben unattraktive Datei-{{HTMLElement("input")}}-Element ausblenden und Ihre eigene Schnittstelle für das Öffnen des Dateiauswahlfensters und die Anzeige der ausgewählten Datei oder Dateien präsentieren. Dies kann erreicht werden, indem das Eingabeelement mit `display:none` gestaltet und die [`click()`](/de/docs/Web/API/HTMLElement/click)-Methode auf dem {{HTMLElement("input")}}-Element aufgerufen wird.

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

Der Code, der das `click`-Event behandelt, kann so aussehen:

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

Sie können das {{HTMLElement("button")}} nach Wunsch gestalten.

## Verwendung eines label-Elements zum Triggern eines versteckten Datei-Eingabeelements

Um das Dateiauswahlfenster ohne Verwendung von JavaScript (der click()-Methode) öffnen zu können, kann ein {{HTMLElement("label")}}-Element verwendet werden. Beachten Sie, dass in diesem Fall das Eingabeelement nicht mit `display: none` (noch `visibility: hidden`) verborgen werden darf, da das Label sonst nicht per Tastatur zugänglich wäre. Verwenden Sie stattdessen die [visually-hidden technique](https://www.a11yproject.com/posts/how-to-hide-content/).

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

Es ist nicht erforderlich, JavaScript-Code zum Aufruf `fileElem.click()` hinzuzufügen. Sie können auch in diesem Fall das Labelement nach Wunsch gestalten. Sie müssen einen visuelle Hinweis für den Fokusstatus des versteckten Eingabefeldes auf seinem Label bereitstellen, sei es ein Umriss wie oben gezeigt oder die Hintergrundfarbe oder Box-Shadow. (Zum Zeitpunkt des Schreibens zeigt Firefox diesen visuellen Hinweis für `<input type="file">`-Elemente nicht an.)

## Dateien mit Drag and Drop auswählen

Sie können den Benutzer auch Dateien in Ihre Webanwendung per Drag and Drop ziehen lassen.

Der erste Schritt besteht darin, eine Abwurfzone zu definieren. Welcher Teil Ihres Inhalts Abwürfe akzeptiert, kann je nach Design Ihrer Anwendung variieren, aber ein Element dazu zu bringen, Drop-Ereignisse zu empfangen, ist einfach:

```js
let dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
```

In diesem Beispiel machen wir das Element mit der ID `dropbox` zu unserer Abwurfzone. Dies wird erreicht, indem Listener für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event), [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignisse hinzugefügt werden.

Wir müssen in unserem Fall eigentlich nichts mit den `dragenter`- und `dragover`-Events machen, daher sind diese Funktionen beide simpel. Sie stoppen einfach die Propagation des Ereignisses und verhindern das Auftreten der Standardaktion:

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

Der eigentliche Trick passiert in der `drop()`-Funktion:

```js
function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  const dt = e.dataTransfer;
  const files = dt.files;

  handleFiles(files);
}
```

Hier, ziehen wir das `dataTransfer`-Feld aus dem Ereignis, holen die Dateiliste daraus heraus, und übergeben diese dann an `handleFiles()`. Ab diesem Punkt ist der Umgang mit den Dateien gleich, egal ob der Benutzer das `input`-Element oder Drag & Drop verwendet hat.

## Beispiel: Thumbnails der vom Benutzer ausgewählten Bilder anzeigen

Nehmen wir an, Sie entwickeln die nächste großartige Foto-Sharing-Website und möchten HTML verwenden, um Thumbnail-Vorschauen von Bildern anzuzeigen, bevor der Benutzer sie tatsächlich hochlädt. Sie können Ihr Eingabeelement oder Ihre Abwurfzone wie zuvor besprochen einrichten und diese dann eine Funktion wie die `handleFiles()`-Funktion unten aufrufen lassen.

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

Hier überprüft unsere Schleife, die die vom Benutzer ausgewählten Dateien handhabt, jedes `type`-Attribut der Datei, um zu sehen, ob ihr MIME-Typ mit `image/` beginnt. Für jede Datei, die ein Bild ist, erstellen wir ein neues `img`-Element. CSS kann verwendet werden, um hübsche Rahmen oder Schatten festzulegen und die Größe des Bildes zu spezifizieren, sodass dies hier nicht getan werden muss.

Jedes Bild hat die CSS-Klasse `obj` hinzugefügt, wodurch es leicht im DOM-Baum zu finden ist. Wir fügen jedes Bild auch mit einem `file`-Attribut hinzu, das die [`File`](/de/docs/Web/API/File) für das Bild angibt; dies ermöglicht es uns, die Bilder später für den tatsächlichen Upload abzurufen. Wir verwenden [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild), um das neue Thumbnail in den Vorschaubereich unseres Dokuments hinzuzufügen.

Als nächstes legen wir den [`FileReader`](/de/docs/Web/API/FileReader) fest, um das Bild asynchron zu laden und es mit dem `img`-Element zu verbinden. Nachdem das neue `FileReader`-Objekt erstellt wurde, richten wir seine `onload`-Funktion ein und rufen dann `readAsDataURL()` auf, um den Lesevorgang im Hintergrund zu starten. Wenn der gesamte Inhalt der Bilddatei geladen ist, wird er in eine `data:` URL umgewandelt, die an den `onload`-Callback übergeben wird. Unsere Implementierung dieser Routine setzt das `src`-Attribut des `img`-Elements auf das geladene Bild, was dazu führt, dass das Bild im Thumbnail auf dem Bildschirm des Benutzers angezeigt wird.

## Verwendung von Objekt-URLs

Die DOM-Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) ermöglichen es Ihnen, einfache URL-Strings zu erstellen, die verwendet werden können, um auf Daten zu verweisen, auf die auch mit einem DOM-[`File`](/de/docs/Web/API/File)-Objekt verwiesen werden kann, einschließlich lokaler Dateien auf dem Computer des Benutzers.

Wenn Sie ein [`File`](/de/docs/Web/API/File)-Objekt haben, auf das Sie von HTML aus per URL verweisen möchten, können Sie eine Objekt-URL dafür erstellen, so:

```js
const objectURL = window.URL.createObjectURL(fileObj);
```

Die Objekt-URL ist ein String, der das [`File`](/de/docs/Web/API/File)-Objekt identifiziert. Jedes Mal, wenn Sie [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) aufrufen, wird eine eindeutige Objekt-URL erstellt, auch wenn Sie für diese Datei bereits eine Objekt-URL erstellt haben. Jede von diesen muss freigegeben werden. Während sie automatisch freigegeben werden, wenn das Dokument entladen wird, sollten Sie sie explizit freigeben, wenn Ihre Seite sie dynamisch benutzt, indem Sie [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) aufrufen:

```js
URL.revokeObjectURL(objectURL);
```

## Beispiel: Bilder mit Objekt-URLs anzeigen

Dieses Beispiel verwendet Objekt-URLs, um Bild-Thumbnails anzuzeigen. Darüber hinaus werden andere Dateiinformationen wie ihre Namen und Größen angezeigt.

Das HTML, das die Schnittstelle präsentiert, sieht so aus:

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

Dies etabliert unser Datei-{{HTMLElement("input")}}-Element sowie einen Link, der den Dateiauswahl-Dialog aufruft (da wir den Dateieingang versteckt halten, um zu verhindern, dass diese weniger attraktive Benutzeroberfläche angezeigt wird). Dies wird im Abschnitt [Verwenden versteckter Datei-Eingabeelemente mit der click()-Methode](#using_hidden_file_input_elements_using_the_click_method) erklärt, genauso wie die Methode, die den Dateiauswahl-Dialog aufruft.

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

Dies beginnt mit dem Abrufen der URL des {{HTMLElement("div")}} mit der ID `fileList`. Dies ist der Block, in den wir unsere Dateiliste einfügen, einschließlich Thumbnails.

Wenn das an `handleFiles()` übergebene [`FileList`](/de/docs/Web/API/FileList)-Objekt leer ist, setzen wir das innere HTML des Blocks so, dass "No files selected!" angezeigt wird. Andernfalls beginnen wir mit dem Aufbau unserer Dateiliste, wie folgt:

1. Ein neues ungeordnetes Listenelement ({{HTMLElement("ul")}}) wird erstellt.
2. Das neue Listenelement wird in den {{HTMLElement("div")}}-Block eingefügt, indem seine [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)-Methode aufgerufen wird.
3. Für jede [`File`](/de/docs/Web/API/File) in der [`FileList`](/de/docs/Web/API/FileList), die `files` repräsentiert:

   1. Erstellen Sie ein neues Listenelement ({{HTMLElement("li")}}) und fügen Sie es in die Liste ein.
   2. Erstellen Sie ein neues Bild-({{HTMLElement("img")}})-Element.
   3. Setzen Sie die Bildquelle so, dass sie eine neue Objekt-URL darstellt, die die Datei repräsentiert, indem Sie [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) verwenden, um die Blob-URL zu erstellen.
   4. Setzen Sie die Höhe des Bildes auf 60 Pixel.
   5. Fügen Sie das neue Listenelement der Liste hinzu.

Hier ist eine Live-Demo des obigen Codes:

{{EmbedLiveSample('Example_Using_object_URLs_to_display_images', '100%', '300px')}}

Beachten Sie, dass wir die Objekt-URL nicht sofort widerrufen, nachdem das Bild geladen wurde, da dies das Bild für Benutzerinteraktionen unbrauchbar machen würde (wie z.B. Rechtsklick zum Speichern des Bildes oder Öffnen in einem neuen Tab). Für langlebige Anwendungen sollten Sie die Objekt-URLs widerrufen, wenn sie nicht mehr benötigt werden (wie wenn das Bild aus dem DOM entfernt wird), um Speicherplatz freizugeben, indem Sie die [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static)-Methode aufrufen und den Objekt-URL-String übergeben.

## Beispiel: Hochladen einer vom Benutzer ausgewählten Datei

Dieses Beispiel zeigt, wie Sie den Benutzer Dateien (wie z.B. die zuvor ausgewählten Bilder) auf einen Server hochladen lassen können.

> [!NOTE]
> Es ist in der Regel vorzuziehen, HTTP-Anfragen mit der [Fetch API](/de/docs/Web/API/Fetch_API) anstelle von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) zu machen. Jedoch wollen wir in diesem Fall dem Benutzer den Upload-Fortschritt anzeigen, und diese Funktion wird noch nicht von der Fetch API unterstützt, daher verwendet das Beispiel `XMLHttpRequest`.
>
> Arbeiten zur Nachverfolgung der Standardisierung von Fortschrittsbenachrichtigungen mit der Fetch API sind unter <https://github.com/whatwg/fetch/issues/607> zu finden.

### Die Upload-Aufgaben erstellen

Weiter mit dem Code, der die Thumbnails im vorherigen Beispiel erstellt hat, erinnern Sie sich daran, dass jedes Thumbnail-Bild in der CSS-Klasse `obj` mit der entsprechenden [`File`](/de/docs/Web/API/File) im `file`-Attribut enthalten ist. Dadurch können wir alle Bilder auswählen, die der Benutzer zum Hochladen ausgewählt hat, indem wir [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden, so:

```js
function sendFiles() {
  const imgs = document.querySelectorAll(".obj");

  for (const img of imgs) {
    new FileUpload(img, img.file);
  }
}
```

`document.querySelectorAll` holt eine [`NodeList`](/de/docs/Web/API/NodeList) von allen Elementen im Dokument mit der CSS-Klasse `obj`. In unserem Fall werden dies alle Bild-Thumbnails sein. Sobald wir diese Liste haben, ist es trivial, sie durchzugehen und eine neue `FileUpload`-Instanz für jede zu erstellen. Jede dieser Instanzen verarbeitet den Upload der entsprechenden Datei.

### Bearbeitung des Upload-Prozesses für eine Datei

Die `FileUpload`-Funktion akzeptiert zwei Eingaben: ein Bild-Element und eine Datei, aus der die Bilddaten gelesen werden.

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

Die oben gezeigte `FileUpload()`-Funktion erstellt einen Throbber, der verwendet wird, um Fortschrittsinformationen anzuzeigen, und erstellt dann ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), um den Datenupload zu handhaben.

Bevor die Daten tatsächlich übertragen werden, werden mehrere vorbereitende Schritte unternommen:

1. Der `XMLHttpRequest`s Upload-`progress`-Listener wird festgelegt, um den Throbber mit neuen Prozentinformationen zu aktualisieren, sodass der Throbber während des Uploads anhand der neuesten Informationen aktualisiert wird.
2. Der `XMLHttpRequest`s Upload-`load`-Event-Handler wird festgelegt, um die Throbber-Fortschrittsinformationen auf 100% zu aktualisieren, um sicherzustellen, dass der Fortschrittsanzeiger tatsächlich 100% erreicht (im Falle von Granularitätsproblemen während des Prozesses). Danach wird der Throbber entfernt, da er nicht mehr benötigt wird. Dies lässt den Throbber verschwinden, sobald der Upload abgeschlossen ist.
3. Die Anfrage zum Hochladen der Bilddatei wird geöffnet, indem die `open()`-Methode des `XMLHttpRequest` aufgerufen wird, um eine POST-Anfrage zu starten.
4. Der MIME-Typ für den Upload wird festgelegt, indem die Funktion `overrideMimeType()` des `XMLHttpRequest` aufgerufen wird. In diesem Fall verwenden wir einen generischen MIME-Typ; je nach Anwendungsfall müssen Sie den MIME-Typ eventuell ganz oder gar nicht festlegen.
5. Das `FileReader`-Objekt wird verwendet, um die Datei in einen binären String umzuwandeln.
6. Schließlich wird die `send()`-Funktion des `XMLHttpRequest` aufgerufen, um den Inhalt der Datei hochzuladen, wenn der Inhalt geladen ist.

### Asynchrones Handling des Dateiupload-Prozesses

Dieses Beispiel, das PHP auf der Serverseite und JavaScript auf der Clientseite verwendet, demonstriert das asynchrone Hochladen einer Datei.

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

## Beispiel: PDF mit Objekt-URLs anzeigen

Objekt-URLs können auch für andere Dinge als nur Bilder verwendet werden! Sie können verwendet werden, um eingebettete PDF-Dateien oder andere Ressourcen anzuzeigen, die vom Browser dargestellt werden können.

In Firefox muss die Präferenz `pdfjs.disabled` auf `false` gesetzt werden, damit das PDF eingebettet im iframe erscheint (statt als herunterladbare Datei vorgeschlagen zu werden).

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

## Beispiel: Verwendung von Objekt-URLs mit anderen Dateitypen

Sie können Dateien anderer Formate auf die gleiche Weise manipulieren. Hier ist, wie Sie hochgeladene Videos in der Vorschau anzeigen:

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
