---
title: Verwenden von Dateien in Webanwendungen
slug: Web/API/File_API/Using_files_from_web_applications
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{DefaultAPISidebar("File API")}}{{AvailableInWorkers}}

Mit der File API kann Web-Inhalt den Benutzer bitten, lokale Dateien auszuwählen und dann deren Inhalte zu lesen. Diese Auswahl kann entweder durch ein HTML-`{{HTMLElement("input/file", '&lt;input type="file"&gt;')}}`-Element oder durch Drag and Drop erfolgen.

## Zugriff auf ausgewählte Datei(en)

Betrachten Sie dieses HTML:

```html
<input type="file" id="input" multiple />
```

Die File API ermöglicht den Zugriff auf eine [`FileList`](/de/docs/Web/API/FileList), die [`File`](/de/docs/Web/API/File)-Objekte enthält, die die vom Benutzer ausgewählten Dateien repräsentieren.

Das `multiple`-Attribut im `input`-Element erlaubt es dem Benutzer, mehrere Dateien auszuwählen.

Zugriff auf die erste ausgewählte Datei mit einem klassischen DOM-Selektor:

```js
const selectedFile = document.getElementById("input").files[0];
```

### Zugriff auf ausgewählte Datei(en) bei einem Change-Ereignis

Es ist auch möglich (aber nicht obligatorisch), über das `change`-Ereignis auf die [`FileList`](/de/docs/Web/API/FileList) zuzugreifen. Sie müssen [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um den `change`-Ereignis-Listener hinzuzufügen, wie folgt:

```js
const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
}
```

## Informationen über ausgewählte Datei(en) abrufen

Das vom DOM bereitgestellte [`FileList`](/de/docs/Web/API/FileList)-Objekt listet alle Dateien auf, die vom Benutzer ausgewählt wurden, jede als ein [`File`](/de/docs/Web/API/File)-Objekt spezifiziert. Sie können feststellen, wie viele Dateien der Benutzer ausgewählt hat, indem Sie den Wert des `length`-Attributs der Fileliste überprüfen:

```js
const numFiles = fileList.length;
```

Einzelne [`File`](/de/docs/Web/API/File)-Objekte können durch Zugriff auf die Liste als Array abgerufen werden.

Es gibt drei Attribute, die vom [`File`](/de/docs/Web/API/File)-Objekt bereitgestellt werden und nützliche Informationen über die Datei liefern.

- `name`
  - : Der Dateiname als schreibgeschützter String. Dies ist nur der Dateiname und enthält keine Pfadinformationen.
- `size`
  - : Die Größe der Datei in Bytes als schreibgeschützter 64-Bit-Integer.
- `type`
  - : Der MIME-Typ der Datei als schreibgeschützter String oder `""`, wenn der Typ nicht bestimmt werden konnte.

### Beispiel: Anzeig der Dateigröße(n)

Das folgende Beispiel zeigt eine mögliche Verwendung der `size`-Eigenschaft:

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

## Versteckte Dateieingabeelemente mit der click()-Methode verwenden

Sie können das zugegebenermaßen unattraktive Datei-{{HTMLElement("input")}}-Element ausblenden und Ihre eigene Benutzeroberfläche präsentieren, um den Dateiauswahldialog zu öffnen und anzuzeigen, welche Datei oder Dateien der Benutzer ausgewählt hat. Sie können dies tun, indem Sie das Eingabeelement mit `display:none` gestalten und die [`click()`](/de/docs/Web/API/HTMLElement/click)-Methode auf das {{HTMLElement("input")}}-Element aufrufen.

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

Sie können den {{HTMLElement("button")}} auf jede gewünschte Weise gestalten.

## Verwenden eines Label-Elements, um ein verstecktes Datei-Eingabeelement auszulösen

Um das Öffnen des Dateiauswahldialogs ohne Verwendung von JavaScript (der click()-Methode) zu erlauben, kann ein {{HTMLElement("label")}}-Element verwendet werden. Beachten Sie, dass das Eingabeelement in diesem Fall nicht mit `display: none` (noch mit `visibility: hidden`) versteckt werden darf, da das Label sonst nicht tastaturzugänglich wäre. Verwenden Sie stattdessen die [visually-hidden-Technik](https://www.a11yproject.com/posts/how-to-hide-content/).

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

Es ist nicht erforderlich, JavaScript-Code hinzuzufügen, um `fileElem.click()` aufzurufen. Auch in diesem Fall können Sie das Label-Element nach Ihren Wünschen gestalten. Sie müssen einen visuellen Hinweis für den Fokusstatus des versteckten Eingabefelds auf seinem Label bereitstellen, sei es eine Umrandung wie oben gezeigt, oder Hintergrundfarbe oder Box-Shadow. (Zum Zeitpunkt des Schreibens zeigt Firefox diesen visuellen Hinweis für `<input type="file">`-Elemente nicht an.)

## Dateien mit Drag and Drop auswählen

Sie können den Benutzer auch Dateien in Ihre Webanwendung ziehen und ablegen lassen.

Der erste Schritt besteht darin, eine Drop-Zone einzurichten. Genau welcher Teil Ihres Inhalts Drops akzeptiert, kann je nach Design Ihrer Anwendung variieren, aber ein Element zum Empfangen von Drop-Ereignissen zu machen, ist einfach:

```js
let dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
```

In diesem Beispiel machen wir das Element mit der ID `dropbox` zu unserer Drop-Zone. Dies geschieht durch Hinzufügen von Listeners für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event), [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event), und [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignisse.

Wir müssen in unserem Fall tatsächlich nichts mit den `dragenter`- und `dragover`-Ereignissen tun, also sind diese Funktionen beide einfach. Sie stoppen lediglich die Propagation des Ereignisses und verhindern das Auftreten der Standardaktion:

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

Der eigentliche Magie geschieht in der `drop()`-Funktion:

```js
function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  const dt = e.dataTransfer;
  const files = dt.files;

  handleFiles(files);
}
```

Hier rufen wir das `dataTransfer`-Feld aus dem Ereignis ab, extrahieren die Dateiliste daraus und übergeben sie dann an `handleFiles()`. Ab diesem Punkt ist die Handhabung der Dateien die gleiche, egal ob der Benutzer das `input`-Element oder Drag and Drop verwendet hat.

## Beispiel: Miniaturansichten der vom Benutzer ausgewählten Bilder anzeigen

Angenommen, Sie entwickeln die nächste großartige Foto-Sharing-Website und möchten HTML verwenden, um Vorschauminiaturbilder anzuzeigen, bevor der Benutzer sie tatsächlich hochlädt. Sie können Ihr Eingabeelement oder Ihre Drop-Zone wie zuvor besprochen einrichten und eine Funktion wie die `handleFiles()`-Funktion unten aufrufen lassen.

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

Hier sieht unsere Schleife zur Handhabung der vom Benutzer ausgewählten Dateien bei jedem `type`-Attribut der Datei nach, ob ihr MIME-Typ mit `image/` beginnt. Für jede Datei, die ein Bild ist, erstellen wir ein neues `img`-Element. CSS kann verwendet werden, um hübsche Rahmen oder Schatten festzulegen und die Größe des Bildes zu spezifizieren, damit dies hier nicht getan werden muss.

Jedes Bild wird mit der CSS-Klasse `obj` versehen, wodurch es im DOM-Baum leicht zu finden ist. Wir fügen auch ein `file`-Attribut zu jedem Bild hinzu, das die [`File`](/de/docs/Web/API/File) für das Bild angibt; dadurch können wir die Bilder für tatsächlich spätere Uploads abrufen. Wir verwenden [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild), um das neue Thumbnail zum Vorschaubereich unseres Dokuments hinzuzufügen.

Als nächstes richten wir den [`FileReader`](/de/docs/Web/API/FileReader) ein, um das Bild asynchron zu laden und dem `img`-Element hinzuzufügen. Nach dem Erstellen des neuen `FileReader`-Objekts richten wir seine `onload`-Funktion ein und rufen dann `readAsDataURL()` auf, um den Lesevorgang im Hintergrund zu starten. Wenn der gesamte Inhalt der Bilddatei geladen ist, werden sie in eine `data:`-URL konvertiert, die an den `onload`-Callback übergeben wird. Unsere Implementierung dieser Routine setzt das `src`-Attribut des `img`-Elements auf das geladene Bild, wodurch das Bild als Thumbnail auf dem Bildschirm des Benutzers erscheint.

## Objekt-URLs verwenden

Die DOM-Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) ermöglichen es Ihnen, einfache URL-Strings zu erzeugen, die verwendet werden können, um auf alle Daten zu verweisen, die mit einem DOM-`[`File`](/de/docs/Web/API/File)`-Objekt referenziert werden können, einschließlich lokaler Dateien auf dem Computer des Benutzers.

Wenn Sie ein [`File`](/de/docs/Web/API/File)-Objekt haben, auf das Sie über eine URL aus HTML zugreifen möchten, können Sie dafür eine Objekt-URL erstellen, beispielsweise so:

```js
const objectURL = window.URL.createObjectURL(fileObj);
```

Die Objekt-URL ist ein String, der das [`File`](/de/docs/Web/API/File)-Objekt identifiziert. Jedes Mal, wenn Sie [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) aufrufen, wird eine einzigartige Objekt-URL erstellt, auch wenn Sie bereits eine Objekt-URL für diese Datei erstellt haben. Jede dieser muss freigegeben werden. Sie werden zwar automatisch freigegeben, wenn das Dokument entladen wird, aber wenn Ihre Seite sie dynamisch verwendet, sollten Sie sie ausdrücklich freigeben, indem Sie [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) aufrufen:

```js
URL.revokeObjectURL(objectURL);
```

## Beispiel: Verwenden von Objekt-URLs zum Anzeigen von Bildern

Dieses Beispiel verwendet Objekt-URLs zum Anzeigen von Bildminiaturen. Darüber hinaus zeigt es andere Dateiinformationen, einschließlich ihrer Namen und Größen.

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

Dies bestimmt unser Datei-{{HTMLElement("input")}}-Element sowie einen Link, der den Dateiauswahldialog aufruft (da wir das Dateieingabeelement versteckt halten, um zu verhindern, dass diese weniger attraktive Benutzeroberfläche angezeigt wird). Dies wird im Abschnitt [Verwenden von versteckten Datei-Eingabeelementen mit der Click()-Methode](#using_hidden_file_input_elements_using_the_click_method) erklärt, ebenso wie die Methode, die den Dateiauswahldialog aufruft.

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

Dies beginnt mit dem Abrufen der URL des {{HTMLElement("div")}} mit der ID `fileList`. Dies ist der Block, in den wir unsere Dateiliste einfügen, einschließlich Miniaturen.

Wenn das [`FileList`](/de/docs/Web/API/FileList)-Objekt, das an `handleFiles()` übergeben wird, leer ist, setzen wir das innere HTML des Blocks auf "No files selected!". Andernfalls beginnen wir mit dem Erstellen unserer Dateiliste, wie folgt:

1. Ein neues ungeordnetes Listen-({{HTMLElement("ul")}})-Element wird erstellt.
2. Das neue Listenelement wird in den {{HTMLElement("div")}}-Block eingefügt, indem seine [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)-Methode aufgerufen wird.
3. Für jede [`File`](/de/docs/Web/API/File) in der [`FileList`](/de/docs/Web/API/FileList), die durch `files` repräsentiert wird:

   1. Erstellen Sie ein neues Listenelement ({{HTMLElement("li")}}) und fügen Sie es in die Liste ein.
   2. Erstellen Sie ein neues Bild ({{HTMLElement("img")}})-Element.
   3. Setzen Sie die Quelle des Bildes auf eine neue Objekt-URL, die die Datei darstellt, indem Sie [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) verwenden, um die Blob-URL zu erstellen.
   4. Setzen Sie die Höhe des Bildes auf 60 Pixel.
   5. Hängen Sie das neue Listenelement an die Liste an.

Hier ist eine Live-Demo des obigen Codes:

{{EmbedLiveSample('Example_Using_object_URLs_to_display_images', '100%', '300px')}}

Beachten Sie, dass wir die Objekt-URL nicht sofort widerrufen, nachdem das Bild geladen wurde, da dies das Bild für Benutzerinteraktionen nutzlos machen würde (wie das rechte Klicken, um das Bild zu speichern oder es in einem neuen Tab zu öffnen). Für langlebige Anwendungen sollten Sie Objekt-URLs widerrufen, wenn sie nicht mehr benötigt werden (z. B. wenn das Bild aus dem DOM entfernt wird), um Speicher freizugeben, indem Sie die [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static)-Methode aufrufen und den Objekt-URL-String übergeben.

## Beispiel: Hochladen einer vom Benutzer ausgewählten Datei

Dieses Beispiel zeigt, wie der Benutzer Dateien (wie die in den vorherigen Beispielen ausgewählten Bilder) auf einen Server hochladen kann.

> [!NOTE]
> In der Regel ist es vorzuziehen, HTTP-Anfragen über die [Fetch API](/de/docs/Web/API/Fetch_API) zu stellen, anstatt [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest). In diesem Fall möchten wir jedoch dem Benutzer den Upload-Fortschritt zeigen, und diese Funktion wird von der Fetch API noch nicht unterstützt, daher verwendet das Beispiel `XMLHttpRequest`.
>
> Die Arbeit zur Verfolgung der Standardisierung von Fortschrittsbenachrichtigungen mit der Fetch API befindet sich unter <https://github.com/whatwg/fetch/issues/607>.

### Erstellen der Upload-Aufgaben

Mit dem Code, der die Miniaturen im vorherigen Beispiel erstellt hat, erinnern Sie sich daran, dass jedes Miniaturbild in der CSS-Klasse `obj` mit der entsprechenden [`File`](/de/docs/Web/API/File) in einem `file`-Attribut angehängt ist. Dies ermöglicht es uns, alle Bilder, die der Benutzer zum Hochladen ausgewählt hat, mithilfe von [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) auszuwählen, wie folgt:

```js
function sendFiles() {
  const imgs = document.querySelectorAll(".obj");

  for (const img of imgs) {
    new FileUpload(img, img.file);
  }
}
```

`document.querySelectorAll` holt eine [`NodeList`](/de/docs/Web/API/NodeList) aller Elemente im Dokument mit der CSS-Klasse `obj`. In unserem Fall werden dies alle Bildminiaturen sein. Sobald wir diese Liste haben, ist es trivial, sie durchzugehen und für jede eine neue `FileUpload`-Instanz zu erstellen. Jede von ihnen kümmert sich um das Hochladen der entsprechenden Datei.

### Umgang mit dem Upload-Prozess für eine Datei

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

Die oben gezeigte `FileUpload()`-Funktion erstellt einen Fortschrittsindikator, der zur Anzeige von Fortschrittsinformationen verwendet wird, und erstellt dann ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) zum Hochladen der Daten.

Bevor die Daten tatsächlich übertragen werden, werden mehrere Vorbereitungsschritte unternommen:

1. Der `progress`-Listener des Uploads des `XMLHttpRequest` wird eingerichtet, um den Fortschrittsanzeiger mit neuen Prozentsatzinformationen zu aktualisieren, damit während des Uploads der Fortschrittsanzeiger basierend auf den neuesten Informationen aktualisiert wird.
2. Der `load`-Ereignis-Handler des `XMLHttpRequest`-Uploads wird eingerichtet, um den Fortschrittsanzeiger auf 100% zu aktualisieren, um sicherzustellen, dass der Fortschrittsanzeiger tatsächlich 100% erreicht (im Falle von Granularitätsabweichungen während des Prozesses). Dann wird der Fortschrittsanzeiger entfernt, da er nicht mehr benötigt wird. Dies führt dazu, dass der Fortschrittsanzeiger nach Abschluss des Uploads verschwindet.
3. Der Upload der Bilddatei wird geöffnet, indem die `open()`-Methode von `XMLHttpRequest` aufgerufen wird, um eine POST-Anforderung zu starten.
4. Der MIME-Typ für den Upload wird festgelegt, indem die `overrideMimeType()`-Funktion von `XMLHttpRequest` aufgerufen wird. In diesem Fall verwenden wir einen generischen MIME-Typ; je nach Anwendungsfall müssen Sie den MIME-Typ möglicherweise überhaupt nicht festlegen.
5. Das `FileReader`-Objekt wird verwendet, um die Datei in einen Binärstring zu konvertieren.
6. Schließlich wird die `send()`-Methode von `XMLHttpRequest` aufgerufen, um den Inhalt der Datei hochzuladen, sobald der Inhalt geladen ist.

### Asynchroner Umgang mit dem Datei-Upload-Prozess

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

## Beispiel: Verwenden von Objekt-URLs zum Anzeigen von PDF

Objekt-URLs können für andere Dinge als nur Bilder verwendet werden! Sie können verwendet werden, um eingebettete PDF-Dateien oder andere Ressourcen anzuzeigen, die vom Browser angezeigt werden können.

In Firefox, damit das PDF im iframe eingebettet erscheint (anstatt als heruntergeladene Datei vorgeschlagen zu werden), muss die Präferenz `pdfjs.disabled` auf `false` gesetzt sein.

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

Sie können Dateien anderer Formate auf die gleiche Weise manipulieren. Hier ist, wie Sie ein hochgeladenes Video ansehen können:

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
