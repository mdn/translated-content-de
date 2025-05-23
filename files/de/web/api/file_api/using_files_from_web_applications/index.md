---
title: Verwendung von Dateien in Webanwendungen
slug: Web/API/File_API/Using_files_from_web_applications
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{DefaultAPISidebar("File API")}}{{AvailableInWorkers}}

Mit der File API kann Webinhalt den Benutzer bitten, lokale Dateien auszuwählen und dann den Inhalt dieser Dateien zu lesen. Diese Auswahl kann entweder mit einem HTML-`{{HTMLElement("input/file", '&lt;input type="file"&gt;')}}`-Element oder per Drag-and-Drop erfolgen.

## Zugriff auf ausgewählte Datei(en)

Betrachten Sie dieses HTML:

```html
<input type="file" id="input" multiple />
```

Die File API ermöglicht den Zugriff auf eine [`FileList`](/de/docs/Web/API/FileList), die [`File`](/de/docs/Web/API/File)-Objekte enthält, die die vom Benutzer ausgewählten Dateien darstellen.

Das `multiple`-Attribut auf dem `input`-Element ermöglicht es dem Benutzer, mehrere Dateien auszuwählen.

Zugriff auf die erste ausgewählte Datei mit einem klassischen DOM-Selektor:

```js
const selectedFile = document.getElementById("input").files[0];
```

### Zugriff auf ausgewählte Datei(en) bei einem Änderungsereignis

Es ist auch möglich (aber nicht zwingend erforderlich), auf die [`FileList`](/de/docs/Web/API/FileList) über das `change`-Ereignis zuzugreifen. Sie müssen [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um den `change`-Ereignislistener hinzuzufügen, etwa so:

```js
const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
}
```

## Informationen über ausgewählte Datei(en) abrufen

Das vom DOM bereitgestellte [`FileList`](/de/docs/Web/API/FileList)-Objekt listet alle Dateien auf, die der Benutzer ausgewählt hat, wobei jede als ein [`File`](/de/docs/Web/API/File)-Objekt angegeben wird. Sie können feststellen, wie viele Dateien der Benutzer ausgewählt hat, indem Sie den Wert des `length`-Attributs der Dateiliste überprüfen:

```js
const numFiles = fileList.length;
```

Einzelne [`File`](/de/docs/Web/API/File)-Objekte können durch Zugriff auf die Liste als ein Array abgerufen werden.

Es gibt drei Attribute, die vom [`File`](/de/docs/Web/API/File)-Objekt bereitgestellt werden und nützliche Informationen über die Datei enthalten.

- `name`
  - : Der Dateiname als schreibgeschützter String. Dies ist nur der Dateiname und enthält keine Pfadinformationen.
- `size`
  - : Die Größe der Datei in Bytes als schreibgeschützter 64-Bit-Integer.
- `type`
  - : Der MIME-Typ der Datei als schreibgeschützter String oder `""`, wenn der Typ nicht bestimmt werden konnte.

### Beispiel: Anzeigen der Größe von Datei(en)

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

## Versteckte Datei-Eingabeelemente mit der `click()`-Methode verwenden

Sie können das zugegebenermaßen unattraktive Datei-{{HTMLElement("input")}}-Element ausblenden und Ihre eigene Oberfläche für das Öffnen des Datei-Auswahldialogs und das Anzeigen der ausgewählten Datei(en) bereitstellen. Sie können dies erreichen, indem Sie das Eingabeelement mit `display:none` stylen und die [`click()`](/de/docs/Web/API/HTMLElement/click)-Methode auf das {{HTMLElement("input")}}-Element aufrufen.

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

Sie können den {{HTMLElement("button")}} nach Belieben stylen.

## Verwendung eines `label`-Elements zur Auslösung eines versteckten Datei-Eingabeelements

Um den Datei-Auswahl-Dialog zu öffnen, ohne JavaScript (die `click()`-Methode) zu verwenden, kann ein {{HTMLElement("label")}}-Element verwendet werden. Beachten Sie, dass in diesem Fall das Eingabeelement nicht mit `display: none` (noch `visibility: hidden`) verborgen werden darf, da das Label andernfalls nicht per Tastatur zugänglich wäre. Verwenden Sie stattdessen die [visuell versteckte Technik](https://www.a11yproject.com/posts/how-to-hide-content/).

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

Es ist nicht erforderlich, JavaScript-Code hinzuzufügen, um `fileElem.click()` aufzurufen. Auch in diesem Fall können Sie das Label-Element nach Belieben stylen. Sie müssen einen visuellen Hinweis auf den Fokusstatus des versteckten Eingabefelds auf dessen Label bereitstellen, sei es ein Umriss wie oben gezeigt, oder eine Hintergrundfarbe oder ein Box-Schatten. (Zum Zeitpunkt des Schreibens zeigt Firefox diesen visuellen Hinweis für `<input type="file">`-Elemente nicht an.)

## Dateien per Drag-and-Drop auswählen

Sie können dem Benutzer auch erlauben, Dateien in Ihre Webanwendung zu ziehen und abzulegen.

Der erste Schritt besteht darin, eine Dropzone zu erstellen. Genau welcher Teil Ihres Inhalts das Ablegen akzeptieren soll, kann je nach Design Ihrer Anwendung variieren, aber es ist einfach, ein Element zu erstellen, das Drop-Ereignisse empfängt:

```js
let dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
```

In diesem Beispiel machen wir das Element mit der ID `dropbox` zu unserer Dropzone. Dies wird durch das Hinzufügen von Listenern für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)-, [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)- und [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignisse gemacht.

Wir müssen in unserem Fall nichts mit den `dragenter`- und `dragover`-Ereignissen machen, daher sind diese Funktionen einfach. Sie stoppen lediglich die Ausbreitung des Ereignisses und verhindern die Standardaktion:

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

Der eigentliche Zauber passiert in der `drop()`-Funktion:

```js
function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  const dt = e.dataTransfer;
  const files = dt.files;

  handleFiles(files);
}
```

Hier rufen wir das `dataTransfer`-Feld vom Ereignis ab, ziehen die Dateiliste daraus und übergeben diese an `handleFiles()`. Ab diesem Punkt ist die Handhabung der Dateien dieselbe, egal ob der Benutzer das `input`-Element oder Drag-and-Drop verwendet hat.

## Beispiel: Thumbnails der vom Benutzer ausgewählten Bilder anzeigen

Angenommen, Sie entwickeln die nächste großartige Foto-Sharing-Website und möchten HTML verwenden, um Vorschaubilder der Bilder anzuzeigen, bevor der Benutzer sie tatsächlich hochlädt. Sie können Ihr Eingabeelement oder Ihre Dropzone wie oben beschrieben einrichten und sie eine Funktion wie die `handleFiles()`-Funktion unten aufrufen lassen.

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

Hier betrachtet unsere Schleife, die die vom Benutzer ausgewählten Dateien verarbeitet, das `type`-Attribut jeder Datei, um zu sehen, ob der MIME-Typ mit `image/` beginnt. Für jede Datei, die ein Bild ist, erstellen wir ein neues `img`-Element. CSS kann verwendet werden, um hübsche Ränder oder Schatten zu erstellen und die Größe des Bildes festzulegen, sodass dies hier nicht erforderlich ist.

Jedem Bild wird die CSS-Klasse `obj` hinzugefügt, um es im DOM-Baum leicht zu finden. Wir fügen außerdem jedem Bild ein `file`-Attribut hinzu, das die [`File`](/de/docs/Web/API/File) für das Bild angibt; dies ermöglicht es uns, die Bilder für einen tatsächlichen Upload später abzurufen. Wir verwenden [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild), um das neue Thumbnail in den Vorschaubereich unseres Dokuments hinzuzufügen.

Anschließend richten wir den [`FileReader`](/de/docs/Web/API/FileReader) ein, um das Bild asynchron zu laden und dem `img`-Element hinzuzufügen. Nachdem wir das neue `FileReader`-Objekt erstellt haben, richten wir dessen `onload`-Funktion ein und rufen dann `readAsDataURL()` auf, um den Lesevorgang im Hintergrund zu starten. Wenn der gesamte Inhalt der Bilddatei geladen ist, werden sie in eine `data:`-URL umgewandelt, die an den `onload`-Callback übergeben wird. Unsere Implementierung dieser Routine setzt das `src`-Attribut des `img`-Elements auf das geladene Bild, was dazu führt, dass das Bild im Thumbnail auf dem Bildschirm des Benutzers erscheint.

## Verwendung von Objekt-URLs

Die DOM-Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) ermöglichen es Ihnen, einfache URL-Strings zu erstellen, die zum Referenzieren von Daten verwendet werden können, die mit einem DOM-`File`-Objekt angegeben werden können, einschließlich lokaler Dateien auf dem Computer des Benutzers.

Wenn Sie ein [`File`](/de/docs/Web/API/File)-Objekt haben, das Sie per URL aus HTML referenzieren möchten, können Sie ein Objekt-URL dafür wie folgt erstellen:

```js
const objectURL = window.URL.createObjectURL(fileObj);
```

Die Objekt-URL ist ein String, der das [`File`](/de/docs/Web/API/File)-Objekt identifiziert. Jedes Mal, wenn Sie [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) aufrufen, wird eine eindeutige Objekt-URL erstellt, selbst wenn Sie schon eine Objekt-URL für diese Datei erstellt haben. Jede dieser URLs muss veröffentlicht werden. Während sie automatisch veröffentlicht werden, wenn das Dokument entladen wird, sollten Sie, wenn Ihre Seite sie dynamisch verwendet, diese explizit freigeben, indem Sie [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) aufrufen:

```js
URL.revokeObjectURL(objectURL);
```

## Beispiel: Objekt-URLs zur Anzeige von Bildern verwenden

Dieses Beispiel verwendet Objekt-URLs zur Anzeige von Bild-Thumbnails. Zusätzlich zeigt es andere Dateiinformationen, einschließlich ihrer Namen und Größen.

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

Dies etabliert unser Datei-{{HTMLElement("input")}}-Element sowie einen Link, der den Datei-Auswahldialog aufruft (da wir das Datei-Eingabeelement versteckt halten, um zu vermeiden, dass diese weniger attraktive Benutzeroberfläche angezeigt wird). Dies wird im Abschnitt [Verwendung von versteckten Datei-Eingabeelementen mit der click()-Methode](#using_hidden_file_input_elements_using_the_click_method) erklärt, ebenso wie die Methode, die den Datei-Auswahldialog aufruft.

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

Wenn das an `handleFiles()` übergebene [`FileList`](/de/docs/Web/API/FileList)-Objekt leer ist, setzen wir das innere HTML des Blocks, um "Keine Dateien ausgewählt!" anzuzeigen. Andernfalls beginnen wir damit, unsere Dateiliste zu erstellen, wie folgt:

1. Ein neues ungeordnetes Listen- ({{HTMLElement("ul")}}) Element wird erstellt.
2. Das neue Listenelement wird in den {{HTMLElement("div")}} Block eingefügt, indem dessen [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)-Methode aufgerufen wird.
3. Für jede [`File`](/de/docs/Web/API/File) in der durch `files` repräsentierten [`FileList`](/de/docs/Web/API/FileList):

   1. Ein neues Listenelement ({{HTMLElement("li")}}) wird erstellt und in die Liste eingefügt.
   2. Ein neues Bild- ({{HTMLElement("img")}}) Element wird erstellt.
   3. Die Quelle des Bildes wird auf eine neue Objekt-URL gesetzt, die die Datei repräsentiert, indem [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) verwendet wird, um die Blob-URL zu erstellen.
   4. Die Höhe des Bildes wird auf 60 Pixel gesetzt.
   5. Das neue Listenelement wird der Liste hinzugefügt.

Hier ist eine Live-Demo des obigen Codes:

{{EmbedLiveSample('Example_Using_object_URLs_to_display_images', '100%', '300px')}}

Beachten Sie, dass wir die Objekt-URL nicht sofort widerrufen, nachdem das Bild geladen wurde, da dies das Bild für Benutzerinteraktionen unbrauchbar machen würde (wie das Rechtsklicken, um das Bild zu speichern oder es in einem neuen Tab zu öffnen). Für langlebige Anwendungen sollten Sie Objekt-URLs freigeben, wenn sie nicht mehr benötigt werden (z.B. wenn das Bild aus dem DOM entfernt wird), um Speicher freizugeben, indem Sie die Methode [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) aufrufen und die Objekt-URL-Zeichenfolge übergeben.

## Beispiel: Hochladen einer vom Benutzer ausgewählten Datei

Dieses Beispiel zeigt, wie Sie dem Benutzer ermöglichen, Dateien (wie die im vorherigen Beispiel ausgewählten Bilder) auf einen Server hochzuladen.

> [!NOTE]
> Es ist normalerweise vorzuziehen, HTTP-Anfragen mit der [Fetch API](/de/docs/Web/API/Fetch_API) statt mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) durchzuführen. In diesem Fall möchten wir jedoch dem Benutzer den Upload-Fortschritt anzeigen, und dieses Feature wird von der Fetch API noch nicht unterstützt. Daher verwendet das Beispiel `XMLHttpRequest`.
>
> Arbeiten zur Standardisierung von Fortschrittsbenachrichtigungen mit der Fetch API werden unter <https://github.com/whatwg/fetch/issues/607> verfolgt.

### Erstellen der Upload-Aufgaben

Fortsetzend mit dem Code, der die Thumbnails im vorherigen Beispiel erstellt hat, denken Sie daran, dass jedes Thumbnail-Bild in der CSS-Klasse `obj` mit der entsprechenden [`File`](/de/docs/Web/API/File) in einem `file`-Attribut angehängt ist. Dies ermöglicht es uns, alle Bilder, die der Benutzer zum Hochladen ausgewählt hat, mit [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) auszuwählen, so:

```js
function sendFiles() {
  const imgs = document.querySelectorAll(".obj");

  for (let i = 0; i < imgs.length; i++) {
    new FileUpload(imgs[i], imgs[i].file);
  }
}
```

`document.querySelectorAll` ruft eine [`NodeList`](/de/docs/Web/API/NodeList) aller Elemente im Dokument mit der CSS-Klasse `obj` ab. In unserem Fall werden dies alle Bild-Thumbnails sein. Sobald wir diese Liste haben, ist es trivial, sie durchzugehen und für jedes eine neue `FileUpload`-Instanz zu erstellen. Jede dieser Instanzen handhabt den Upload der entsprechenden Datei.

### Handhabung des Upload-Prozesses für eine Datei

Die `FileUpload`-Funktion akzeptiert zwei Eingaben: ein Bildelement und eine Datei, aus der die Bilddaten gelesen werden.

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

Die oben gezeigte `FileUpload()`-Funktion erstellt einen Throbber, der verwendet wird, um Fortschrittsinformationen anzuzeigen, und erstellt dann einen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), um das Hochladen der Daten zu handhaben.

Bevor die Daten tatsächlich übertragen werden, werden mehrere Vorbereitungsmaßnahmen getroffen:

1. Der `XMLHttpRequest`-Upload-`progress`-Listener wird gesetzt, um den Throbber mit neuen Prozentsatzinformationen zu aktualisieren, sodass, während der Upload fortschreitet, der Throbber basierend auf den neuesten Informationen aktualisiert wird.
2. Der `XMLHttpRequest`-Upload-`load`-Ereignishandler wird gesetzt, um die Throbber-Fortschrittsinformationen auf 100% zu aktualisieren, um sicherzustellen, dass der Fortschrittsindikator tatsächlich 100% erreicht (im Falle von Granularitätsanomalien im Prozess). Anschließend wird der Throbber entfernt, da er nicht mehr benötigt wird. Dies führt dazu, dass der Throbber nach Abschluss des Uploads verschwindet.
3. Die Anfrage zum Hochladen der Bilddatei wird durch Aufrufen der `XMLHttpRequest`-Methode `open()` geöffnet, um mit der Erstellung einer POST-Anfrage zu beginnen.
4. Der MIME-Typ für den Upload wird durch Aufrufen der `XMLHttpRequest`-Funktion `overrideMimeType()` gesetzt. In diesem Fall verwenden wir einen generischen MIME-Typ; Sie müssen möglicherweise den MIME-Typ je nach Anwendungsfall gar nicht setzen.
5. Das `FileReader`-Objekt wird verwendet, um die Datei in einen binären String umzuwandeln.
6. Schließlich wird, wenn der Inhalt geladen ist, die `XMLHttpRequest`-Funktion `send()` aufgerufen, um den Inhalt der Datei hochzuladen.

### Asynchrone Handhabung des Datei-Upload-Prozesses

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

## Beispiel: Verwendung von Objekt-URLs zur Anzeige von PDF

Objekt-URLs können auch für andere Dinge als nur Bilder verwendet werden! Sie können verwendet werden, um eingebettete PDF-Dateien oder andere Ressourcen anzuzeigen, die vom Browser angezeigt werden können.

In Firefox muss der PDF-Viewer `pdfjs.disabled` auf `false` gesetzt werden, damit das PDF eingebettet im iframe erscheint (statt als herunterladbare Datei vorgeschlagen zu werden).

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

Sie können Dateien anderer Formate auf die gleiche Weise manipulieren. So können Sie hochgeladene Videos in der Vorschau anzeigen:

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
