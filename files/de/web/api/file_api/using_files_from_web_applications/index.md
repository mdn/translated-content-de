---
title: Dateien aus Webanwendungen verwenden
slug: Web/API/File_API/Using_files_from_web_applications
l10n:
  sourceCommit: e4e57ab3ccb5f93319f8fe13848d4895d3e1e771
---

{{DefaultAPISidebar("File API")}}{{AvailableInWorkers}}

Mit der File API kann Webinhalt den Benutzer darum bitten, lokale Dateien auszuwählen und dann den Inhalt dieser Dateien zu lesen. Diese Auswahl kann entweder mit einem HTML-`{{HTMLElement("input/file", '&lt;input type="file"&gt;')}}`-Element oder per Drag-and-Drop erfolgen.

## Zugriff auf ausgewählte Datei(en)

Betrachten Sie dieses HTML:

```html
<input type="file" id="input" multiple />
```

Die File API ermöglicht den Zugriff auf eine [`FileList`](/de/docs/Web/API/FileList), die [`File`](/de/docs/Web/API/File)-Objekte enthält, die die vom Benutzer ausgewählten Dateien darstellen.

Das `multiple`-Attribut auf dem `input`-Element erlaubt es dem Benutzer, mehrere Dateien auszuwählen.

Zugriff auf die erste ausgewählte Datei mit einem klassischen DOM-Selektor:

```js
const selectedFile = document.getElementById("input").files[0];
```

### Zugriff auf ausgewählte Datei(en) bei einem Änderungsereignis

Es ist auch möglich (aber nicht zwingend erforderlich), auf die [`FileList`](/de/docs/Web/API/FileList) über das `change`-Ereignis zuzugreifen. Sie müssen [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um den `change`-Event-Listener hinzuzufügen, wie folgt:

```js
const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
}
```

## Informationen über ausgewählte Datei(en) abrufen

Das vom DOM bereitgestellte [`FileList`](/de/docs/Web/API/FileList)-Objekt listet alle vom Benutzer ausgewählten Dateien auf, von denen jede als ein [`File`](/de/docs/Web/API/File)-Objekt angegeben ist. Sie können feststellen, wie viele Dateien der Benutzer ausgewählt hat, indem Sie den Wert des `length`-Attributs der Dateiliste überprüfen:

```js
const numFiles = fileList.length;
```

Individuelle [`File`](/de/docs/Web/API/File)-Objekte können abgerufen werden, indem Sie auf die Liste wie auf ein Array zugreifen.

Es gibt drei Attribute, die das [`File`](/de/docs/Web/API/File)-Objekt bereitstellt und die nützliche Informationen über die Datei enthalten.

- `name`
  - : Der Dateiname als schreibgeschützter String. Dies ist nur der Dateiname und umfasst keine Pfadinformationen.
- `size`
  - : Die Größe der Datei in Bytes als schreibgeschützte 64-Bit-Ganzzahl.
- `type`
  - : Der MIME-Typ der Datei als schreibgeschützter String oder `""`, wenn der Typ nicht bestimmt werden konnte.

### Beispiel: Dateigröße(n) anzeigen

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

## Versteckte Datei-Input-Elemente mit der click()-Methode verwenden

Sie können das zugegebenermaßen unansehnliche Datei-{{HTMLElement("input")}}-Element verstecken und Ihre eigene Schnittstelle zum Öffnen des Dateiauswahlfensters und Anzeigen der vom Benutzer ausgewählten Dateien präsentieren. Dies können Sie tun, indem Sie das Eingabeelement mit `display:none` stylen und die [`click()`](/de/docs/Web/API/HTMLElement/click)-Methode auf dem {{HTMLElement("input")}}-Element aufrufen.

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

## Verwenden eines Label-Elements zur Auslösung eines versteckten Datei-Inputs

Um das Öffnen des Dateiauswahlfensters ohne JavaScript (der click()-Methode) zu ermöglichen, kann ein {{HTMLElement("label")}}-Element verwendet werden. Beachten Sie, dass in diesem Fall das Eingabeelement nicht mit `display: none` (noch `visibility: hidden`) versteckt werden darf, da das Label sonst nicht über die Tastatur zugänglich wäre. Verwenden Sie stattdessen die [visually-hidden technique](https://www.a11yproject.com/posts/how-to-hide-content/).

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

Es ist nicht nötig, JavaScript-Code hinzuzufügen, um `fileElem.click()` aufzurufen. Auch in diesem Fall können Sie das Label-Element nach Belieben stylen. Sie müssen einen visuellen Hinweis für den Fokusstatus des versteckten Eingabefeldes auf seinem Label bereitstellen, sei es ein Outline wie oben gezeigt, oder Hintergrundfarbe oder Box-Shadow. (Zum Zeitpunkt des Schreibens zeigt Firefox diesen visuellen Hinweis für `<input type="file">`-Elemente nicht an.)

## Auswahl von Dateien per Drag-and-Drop

Sie können auch zulassen, dass der Benutzer Dateien in Ihre Webanwendung zieht.

Der erste Schritt besteht darin, eine Drop-Zone einzurichten. Welcher Teil Ihres Inhalts Tropfen akzeptiert, kann je nach Design Ihrer Anwendung variieren, aber es ist einfach, ein Element dazu zu bringen, Drop-Ereignisse zu empfangen:

```js
let dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
```

In diesem Beispiel machen wir das Element mit der ID `dropbox` zu unserer Drop-Zone. Dies geschieht durch das Hinzufügen von Listeners für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event), [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignisse.

Wir müssen in unserem Fall eigentlich nichts mit den `dragenter` und `dragover` Ereignissen machen, daher sind diese Funktionen beide einfach. Sie stoppen lediglich die Ausbreitung des Ereignisses und verhindern, dass die Standardaktion ausgeführt wird:

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

Hier rufen wir das `dataTransfer`-Feld aus dem Ereignis ab, ziehen die Dateiliste daraus und übergeben diese dann an `handleFiles()`. Von diesem Punkt an ist die Handhabung der Dateien die gleiche, ob der Benutzer das `input`-Element oder Drag-and-Drop verwendet hat.

## Beispiel: Thumbnails von Benutzer ausgewählten Bildern anzeigen

Angenommen, Sie entwickeln die nächste großartige Foto-Sharing-Website und möchten HTML verwenden, um Vorschaubilder von Bildern anzuzeigen, bevor der Benutzer sie tatsächlich hochlädt. Sie können Ihr Eingabeelement oder Ihre Drop-Zone wie zuvor besprochen einrichten und sie eine Funktion wie die `handleFiles()`-Funktion unten aufrufen lassen.

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

Hier betrachtet unsere Schleife, die die vom Benutzer ausgewählten Dateien verarbeitet, das `type`-Attribut jeder Datei, um zu sehen, ob ihr MIME-Typ mit `image/` beginnt. Für jede Datei, die ein Bild ist, erstellen wir ein neues `img`-Element. CSS kann verwendet werden, um hübsche Ränder oder Schatten festzulegen und die Größe des Bildes zu spezifizieren, sodass dies hier nicht notwendig ist.

Jedes Bild erhält die CSS-Klasse `obj`, was es im DOM-Baum leicht auffindbar macht. Wir fügen jedem Bild auch ein `file`-Attribut hinzu, das die [`File`](/de/docs/Web/API/File) für das Bild spezifiziert; dies ermöglicht es uns, die Bilder für einen tatsächlichen Upload später abzurufen. Wir verwenden [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild), um das neue Thumbnail in den Vorschaubereich unseres Dokuments hinzuzufügen.

Als nächstes richten wir den [`FileReader`](/de/docs/Web/API/FileReader) ein, um das Bild asynchron zu laden und es an das `img`-Element anzuhängen. Nachdem wir das neue `FileReader`-Objekt erstellt haben, richten wir seine `onload`-Funktion ein und rufen dann `readAsDataURL()` auf, um den Lesevorgang im Hintergrund zu starten. Wenn der gesamte Inhalt der Bilddatei geladen ist, wird er in eine `data:`-URL konvertiert, die an den `onload`-Callback übergeben wird. Unsere Implementierung dieser Routine setzt das `src`-Attribut des `img`-Elements auf das geladene Bild, was dazu führt, dass das Bild im Thumbnail auf dem Bildschirm des Benutzers angezeigt wird.

## Verwenden von Objekt-URLs

Die DOM-Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) ermöglichen es, einfache URL-Strings zu erstellen, die verwendet werden können, um auf beliebige Daten zuzugreifen, auf die mit einem DOM-`[`File`](/de/docs/Web/API/File)`-Objekt verwiesen werden kann, einschließlich lokaler Dateien auf dem Computer des Benutzers.

Wenn Sie ein [`File`](/de/docs/Web/API/File)-Objekt haben, auf das Sie aus dem HTML-Element über eine URL verweisen möchten, können Sie eine Objekt-URL dafür erstellen, wie folgt:

```js
const objectURL = window.URL.createObjectURL(fileObj);
```

Die Objekt-URL ist ein String, der das [`File`](/de/docs/Web/API/File)-Objekt identifiziert. Jedes Mal, wenn Sie [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) aufrufen, wird eine eindeutige Objekt-URL erstellt, auch wenn Sie bereits eine Objekt-URL für diese Datei erstellt haben. Jede dieser URLs muss freigeben werden. Während sie automatisch freigegeben werden, wenn das Dokument entladen wird, sollten Sie sie explizit freigeben, indem Sie [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) aufrufen, wenn Ihre Seite sie dynamisch verwendet.

```js
URL.revokeObjectURL(objectURL);
```

## Beispiel: Objekt-URLs zum Anzeigen von Bildern verwenden

Dieses Beispiel verwendet Objekt-URLs, um Vorschaubilder anzuzeigen. Zusätzlich zeigt es andere Dateiinformationen wie Namen und Größen.

Das HTML, das die Benutzeroberfläche bereitstellt, sieht so aus:

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

Dies legt unser Datei-{{HTMLElement("input")}}-Element sowie einen Link fest, der den Dateiauswahl-Bildschirm aufruft (da wir die Dateieingabe versteckt halten, um zu verhindern, dass diese wenig attraktive Benutzeroberfläche angezeigt wird). Dies wird im Abschnitt [Versteckte Datei-Input-Elemente mit der click()-Methode verwenden](#using_hidden_file_input_elements_using_the_click_method) erklärt, ebenso wie die Methode, die den Dateiauswahl-Bildschirm aufruft.

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

Dies beginnt mit dem Abrufen der URL des {{HTMLElement("div")}} mit der ID `fileList`. Dies ist der Block, in dem wir unsere Dateiliste einschließlich der Vorschaubilder einfügen werden.

Wenn das [`FileList`](/de/docs/Web/API/FileList)-Objekt, das an `handleFiles()` übergeben wird, leer ist, setzen wir das innere HTML des Blocks auf "Keine Dateien ausgewählt!". Anderenfalls beginnen wir mit dem Aufbau unserer Dateiliste, wie folgt:

1. Ein neues ungeordnetes Listen-({{HTMLElement("ul")}})-Element wird erstellt.
2. Das neue Listenelement wird in den {{HTMLElement("div")}}-Block eingefügt, indem die [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)-Methode aufgerufen wird.
3. Für jede [`File`](/de/docs/Web/API/File) in der [`FileList`](/de/docs/Web/API/FileList), die durch `files` repräsentiert wird:
   1. Ein neues Listenitem-({{HTMLElement("li")}})-Element wird erstellt und in die Liste eingefügt.
   2. Ein neues Bild-({{HTMLElement("img")}})-Element wird erstellt.
   3. Der Quellcode des Bildes wird auf eine neue Objekt-URL gesetzt, die die Datei darstellt, indem [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) aufgerufen wird, um die Blob-URL zu erstellen.
   4. Die Höhe des Bildes wird auf 60 Pixel festgelegt.
   5. Das neue Listenitem wird der Liste hinzugefügt.

Hier ist eine Live-Demo des obigen Codes:

{{EmbedLiveSample('Example_Using_object_URLs_to_display_images', '100%', '300px')}}

Beachten Sie, dass wir die Objekt-URL nicht sofort widerrufen, nachdem das Bild geladen wurde, da dies das Bild für Benutzerinteraktionen unbrauchbar machen würde (wie z. B. Rechtsklicken, um das Bild zu speichern oder es in einem neuen Tab zu öffnen). Für langfristige Anwendungen sollten Sie Objekt-URLs widerrufen, wenn sie nicht mehr benötigt werden (z. B. wenn das Bild aus dem DOM entfernt wird), um Speicher freizugeben, indem Sie die [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static)-Methode aufrufen und die Objekt-URL-String übergeben.

## Beispiel: Eine vom Benutzer ausgewählte Datei hochladen

Dieses Beispiel zeigt, wie Sie den Benutzer Dateien hochladen lassen (z. B. die Bilder, die im vorherigen Beispiel ausgewählt wurden) auf einen Server.

> [!NOTE]
> Es ist normalerweise vorzuziehen, HTTP-Anfragen mit der [Fetch API](/de/docs/Web/API/Fetch_API) anstelle von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) zu machen. In diesem Fall möchten wir jedoch den Benutzer über den Upload-Fortschritt informieren, und dieses Feature wird von der Fetch API noch nicht unterstützt, daher verwendet das Beispiel `XMLHttpRequest`.
>
> Die Arbeit zur Standardisierung von Fortschrittsbenachrichtigungen mit der Fetch API wird unter <https://github.com/whatwg/fetch/issues/607> verfolgt.

### Erstellen der Upload-Aufgaben

Fortsetzend mit dem Code, der im vorherigen Beispiel die Thumbnails erstellt hat, erinnern Sie sich, dass jedes Thumbnail-Bild in der CSS-Klasse `obj` ist, mit der entsprechenden [`File`](/de/docs/Web/API/File) in einem `file`-Attribut angehängt. Dies ermöglicht uns, alle von Benutzer zum Hochladen ausgewählten Bilder mit [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) auszuwählen, wie folgt:

```js
function sendFiles() {
  const imgs = document.querySelectorAll(".obj");

  for (let i = 0; i < imgs.length; i++) {
    new FileUpload(imgs[i], imgs[i].file);
  }
}
```

`document.querySelectorAll` holt eine [`NodeList`](/de/docs/Web/API/NodeList) aller Elemente im Dokument mit der CSS-Klasse `obj`. In unserem Fall werden dies alle Bild-Thumbnails sein. Sobald wir diese Liste haben, ist es ein Kinderspiel, sie durchzugehen und für jedes eine neue `FileUpload`-Instanz zu erstellen. Jedes dieser Objekte kümmert sich um das Hochladen der entsprechenden Datei.

### Den Upload-Prozess für eine Datei behandeln

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

Die oben gezeigte `FileUpload()`-Funktion erstellt einen Fortschrittsbalken, der verwendet wird, um Fortschrittsinformationen anzuzeigen, und dann wird ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) erstellt, um den Upload der Daten zu handhaben.

Bevor die Daten tatsächlich übertragen werden, werden mehrere vorbereitende Schritte unternommen:

1. Der `XMLHttpRequest`-Upload `progress`-Listener wird so eingestellt, dass der Fortschrittsbalken mit neuen Prozentinformationen aktualisiert wird, sodass der Fortschrittsbalken basierend auf den neuesten Informationen aktualisiert wird, während der Upload voranschreitet.
2. Der `XMLHttpRequest`-Upload `load`-Ereignishandler wird so eingestellt, dass die Fortschrittsinformationen der Fortschrittsanzeige auf 100% aktualisiert werden, um sicherzustellen, dass der Fortschrittsbalken tatsächlich 100% erreicht (im Falle von Granularitätsproblemen während des Prozesses). Danach wird der Fortschrittsbalken entfernt, da er nicht mehr benötigt wird. Dies lässt den Fortschrittsbalken verschwinden, sobald der Upload abgeschlossen ist.
3. Die Anforderung, die Bilddatei hochzuladen, wird durch Aufrufen der `XMLHttpRequest`-Methode `open()` geöffnet, um das Generieren eines POST-Requests zu starten.
4. Der MIME-Typ für den Upload wird durch Aufrufen der `XMLHttpRequest`-Funktion `overrideMimeType()` festgelegt. In diesem Fall verwenden wir einen generischen MIME-Typ; je nach Anwendungsfall kann es erforderlich sein, den MIME-Typ überhaupt festzulegen oder nicht.
5. Das `FileReader`-Objekt wird verwendet, um die Datei in eine binäre Zeichenkette zu konvertieren.
6. Schließlich wird, wenn der Inhalt geladen wird, die `XMLHttpRequest`-Funktion `send()` aufgerufen, um den Inhalt der Datei hochzuladen.

### Asynchrone Handhabung des Datei-Upload-Prozesses

Dieses Beispiel, das PHP auf der Serverseite und JavaScript auf der Client-Seite verwendet, demonstriert das asynchrone Hochladen einer Datei.

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

Objekt-URLs können für andere Dinge als nur Bilder verwendet werden! Sie können verwendet werden, um eingebettete PDF-Dateien oder andere vom Browser darstellbare Ressourcen anzuzeigen.

In Firefox muss die Einstellung `pdfjs.disabled` auf `false` gesetzt sein, damit das PDF im iframe eingebettet erscheint (anstatt als herunterladbare Datei angeboten zu werden).

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

Sie können Dateien anderer Formate auf die gleiche Weise manipulieren. Hier ist, wie man hochgeladene Videos vorschaut:

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
