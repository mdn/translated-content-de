---
title: Verwenden von Dateien in Webanwendungen
slug: Web/API/File_API/Using_files_from_web_applications
l10n:
  sourceCommit: a59ff90e64497d4ee349602fe5e88136241ae00a
---

{{DefaultAPISidebar("File API")}}{{AvailableInWorkers}}

Mit der File API können Webinhalte den Benutzer bitten, lokale Dateien auszuwählen und dann den Inhalt dieser Dateien zu lesen. Diese Auswahl kann entweder mit einem HTML-`{{HTMLElement("input/file", '&lt;input type="file"&gt;')}}`-Element oder durch Drag-and-Drop erfolgen.

## Zugriff auf ausgewählte Datei(en)

Betrachten Sie dieses HTML:

```html
<input type="file" id="input" multiple />
```

Die File API ermöglicht den Zugriff auf eine [`FileList`](/de/docs/Web/API/FileList), die [`File`](/de/docs/Web/API/File)-Objekte enthält, die die vom Benutzer ausgewählten Dateien darstellen.

Das `multiple`-Attribut am `input`-Element ermöglicht es dem Benutzer, mehrere Dateien auszuwählen.

Zugriff auf die erste ausgewählte Datei mit einem klassischen DOM-Selektor:

```js
const selectedFile = document.getElementById("input").files[0];
```

### Zugriff auf ausgewählte Datei(en) bei einem Änderungsereignis

Es ist auch möglich (aber nicht zwingend erforderlich), auf die [`FileList`](/de/docs/Web/API/FileList) über das `change`-Ereignis zuzugreifen. Sie müssen [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um das `change`-Ereignis zu überwachen, wie folgt:

```js
const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
}
```

## Informationen zu ausgewählten Datei(en) abrufen

Das vom DOM bereitgestellte [`FileList`](/de/docs/Web/API/FileList)-Objekt listet alle vom Benutzer ausgewählten Dateien auf, jede als [`File`](/de/docs/Web/API/File)-Objekt angegeben. Sie können ermitteln, wie viele Dateien der Benutzer ausgewählt hat, indem Sie den Wert des `length`-Attributs der Dateiliste überprüfen:

```js
const numFiles = fileList.length;
```

Einzelne [`File`](/de/docs/Web/API/File)-Objekte können durch Zugriff auf die Liste als Array abgerufen werden.

Drei Attribute, die vom [`File`](/de/docs/Web/API/File)-Objekt bereitgestellt werden, enthalten nützliche Informationen über die Datei.

- `name`
  - : Der Dateiname als schreibgeschützter String. Dies ist nur der Dateiname, ohne Pfadinformationen.
- `size`
  - : Die Größe der Datei in Byte als schreibgeschützter 64-Bit-Integer.
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

## Verwenden von versteckten Datei-Input-Elementen mit der click()-Methode

Sie können das zugegebenermaßen unattraktive Datei-{{HTMLElement("input")}}-Element verbergen und eine eigene Oberfläche zum Öffnen des Dateiauswahlfensters und zum Anzeigen der ausgewählten Datei oder Dateien präsentieren. Sie können dies tun, indem Sie das Input-Element mit `display:none` gestalten und die [`click()`](/de/docs/Web/API/HTMLElement/click)-Methode auf dem {{HTMLElement("input")}}-Element aufrufen.

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

Sie können das {{HTMLElement("button")}}-Element nach Belieben gestalten.

## Verwenden eines label-Elements zum Auslösen eines versteckten Datei-Input-Elements

Um das Öffnen des Dateiauswahlfensters ohne Verwendung von JavaScript (der click()-Methode) zu ermöglichen, kann ein {{HTMLElement("label")}}-Element verwendet werden. Beachten Sie, dass in diesem Fall das Input-Element nicht mit `display: none` (oder `visibility: hidden`) versteckt sein darf, da das Label sonst nicht über die Tastatur zugänglich wäre. Verwenden Sie stattdessen die [visually-hidden-Technik](https://www.a11yproject.com/posts/how-to-hide-content/).

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

Es ist nicht erforderlich, JavaScript-Code hinzuzufügen, um `fileElem.click()` aufzurufen. Auch in diesem Fall können Sie das Label-Element nach Belieben gestalten. Sie müssen einen visuellen Hinweis für den Fokusstatus des versteckten Eingabefelds auf seinem Label bereitstellen, sei es eine Kontur, wie oben gezeigt, oder Hintergrundfarbe oder Box-Schatten. (Zum Zeitpunkt der Erstellung zeigt Firefox diesen visuellen Hinweis für `<input type="file">`-Elemente nicht an.)

## Dateien mittels Drag-and-Drop auswählen

Sie können auch dem Benutzer erlauben, Dateien per Drag-and-Drop in Ihre Webanwendung zu ziehen.

Der erste Schritt ist das Einrichten einer Ablagezone. Welcher Teil Ihres Inhalts Drops akzeptiert, kann je nach Design Ihrer Anwendung variieren, aber ein Element so vorzubereiten, dass es Drop-Ereignisse empfängt, ist einfach:

```js
let dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
```

In diesem Beispiel machen wir das Element mit der ID `dropbox` zu unserer Ablagezone. Dies geschieht, indem wir Listener für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event), [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignisse hinzufügen.

Wir müssen in unserem Fall eigentlich nichts mit den `dragenter`- und `dragover`-Ereignissen machen, daher sind diese Funktionen einfach. Sie stoppen nur die Propagation des Ereignisses und verhindern die Standardaktion:

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

Hier rufen wir das `dataTransfer`-Feld vom Ereignis ab, ziehen die Dateiliste daraus und übergeben diese dann an `handleFiles()`. Ab diesem Punkt ist das Verarbeiten der Dateien dasselbe, egal ob der Benutzer das `input`-Element oder Drag-and-Drop verwendet hat.

## Beispiel: Anzeigen von Thumbnails aus benutzerdefinierten Bildern

Angenommen, Sie entwickeln die nächste großartige Foto-Sharing-Website und möchten mit HTML Miniaturansichten von Bildern anzeigen, bevor der Benutzer sie tatsächlich hochlädt. Sie können Ihr Eingabeelement oder die Ablagezone wie zuvor besprochen einrichten und eine Funktion wie die `handleFiles()` Funktion unten aufrufen lassen.

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

Hier betrachtet unsere Schleifenverarbeitung die vom Benutzer ausgewählten Dateien, indem sie den `type`-Attribut jedes Dateis überprüft, um festzustellen, ob sein MIME-Typ mit `image/` beginnt). Für jede Datei, die ein Bild ist, erstellen wir ein neues `img`-Element. CSS kann verwendet werden, um irgendwelche hübschen Ränder oder Schatten festzulegen und um die Größe des Bildes anzugeben, sodass das hier nicht gemacht werden muss.

Jedes Bild erhält die CSS-Klasse `obj` hinzugefügt, was es leicht macht, es im DOM-Baum zu finden. Wir fügen auch ein `file`-Attribut zu jedem Bild hinzu, das die [`File`](/de/docs/Web/API/File) für das Bild angibt; dies wird es uns ermöglichen, die Bilder später für den eigentlichen Upload abzurufen. Wir verwenden [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild), um die neue Miniaturansicht zum Vorschaubereich unseres Dokuments hinzuzufügen.

Als nächstes erstellen wir den [`FileReader`](/de/docs/Web/API/FileReader), um das Bild asynchron zu laden und es an das `img`-Element anzuhängen. Nach dem Erstellen des neuen `FileReader`-Objekts richten wir seine `onload`-Funktion ein und rufen dann `readAsDataURL()` auf, um die Leseoperation im Hintergrund zu starten. Wenn der gesamte Inhalt der Bilddatei geladen ist, werden sie in eine `data:` URL umgewandelt, die an den `onload` Rückruf übergeben wird. Unsere Implementierung dieser Routine setzt das `src`-Attribut des `img`-Elements auf das geladene Bild, was dazu führt, dass das Bild in der Miniaturansicht auf dem Bildschirm des Benutzers erscheint.

## Verwenden von Objekt-URLs

Die DOM-Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) ermöglichen es Ihnen, einfache URL-Strings zu erstellen, die verwendet werden können, um auf alle Daten zu verweisen, die mit einem DOM-Objekt [`File`](/de/docs/Web/API/File) referenziert werden können, einschließlich lokaler Dateien auf dem Computer des Benutzers.

Wenn Sie ein [`File`](/de/docs/Web/API/File)-Objekt haben, auf das Sie über URL von HTML aus zugreifen möchten, können Sie so eine Objekt-URL dafür erstellen:

```js
const objectURL = window.URL.createObjectURL(fileObj);
```

Die Objekt-URL ist ein String, der das [`File`](/de/docs/Web/API/File)-Objekt identifiziert. Jedes Mal, wenn Sie [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) aufrufen, wird eine eindeutige Objekt-URL erstellt, auch wenn Sie bereits eine Objekt-URL für diese Datei erstellt haben. Jede dieser URLs muss freigegeben werden. Während sie automatisch freigegeben werden, wenn das Dokument entladen wird, sollten Sie sie, wenn Ihre Seite sie dynamisch verwendet, explizit freigeben, indem Sie [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) aufrufen:

```js
URL.revokeObjectURL(objectURL);
```

## Beispiel: Verwenden von Objekt-URLs zum Anzeigen von Bildern

Dieses Beispiel verwendet Objekt-URLs zum Anzeigen von Bildminiaturen. Zusätzlich zeigt es andere Dateiinformationen einschließlich ihrer Namen und Größen.

Das HTML, das die Schnittstelle darstellt, sieht so aus:

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

Dies richtet unser Datei-{{HTMLElement("input")}}-Element sowie einen Link ein, der den Dateiauswahldialog aufruft (da wir das Datei-Input versteckt halten, um zu verhindern, dass das weniger attraktive Benutzerinterface angezeigt wird). Dies wird im Abschnitt [Verwenden von versteckten Datei-Input-Elementen mit der click()-Methode](#using_hidden_file_input_elements_using_the_click_method) erklärt, ebenso wie die Methode, die den Dateiauswahldialog aufruft.

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

Dies beginnt mit dem Abrufen der URL für das {{HTMLElement("div")}} mit der ID `fileList`. Dies ist der Block, in den wir unsere Dateiliste einfügen werden, einschließlich Thumbnails.

Wenn das [`FileList`](/de/docs/Web/API/FileList)-Objekt, das an `handleFiles()` übergeben wird, `null` ist, setzen wir das innere HTML des Blocks so, dass es "Keine Dateien ausgewählt!" anzeigt. Andernfalls beginnen wir damit, unsere Dateiliste zu erstellen, wie folgt:

1. Ein neues ungeordnetes Listelement ({{HTMLElement("ul")}}) wird erstellt.
2. Das neue Listelement wird in den {{HTMLElement("div")}}-Block eingefügt, indem seine [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)-Methode aufgerufen wird.
3. Für jede [`File`](/de/docs/Web/API/File) in der [`FileList`](/de/docs/Web/API/FileList), die durch `files` repräsentiert wird:

   1. Ein neues Listenelement ({{HTMLElement("li")}}) wird erstellt und in die Liste eingefügt.
   2. Ein neues Bild ({{HTMLElement("img")}}) wird erstellt.
   3. Die Quelle des Bildes wird auf eine neue Objekt-URL für die Datei gesetzt, indem [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) verwendet wird, um die Blob-URL zu erstellen.
   4. Die Höhe des Bildes wird auf 60 Pixel festgelegt.
   5. Das Ladevorrichtungsereignis des Bilds wird so eingerichtet, dass die Objekt-URL freigegeben wird, da sie nicht mehr benötigt wird, sobald das Bild geladen ist. Dies erfolgt durch Aufrufen der [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static)-Methode und Übergeben des Objekt-URL-Strings, wie von `img.src` angegeben.
   6. Das neue Listenelement wird zur Liste hinzugefügt.

Hier ist eine Live-Demo des obigen Codes:

{{EmbedLiveSample('Example_Using_object_URLs_to_display_images', '100%', '300px')}}

## Beispiel: Hochladen einer vom Benutzer ausgewählten Datei

Dieses Beispiel zeigt, wie Sie dem Benutzer ermöglichen, Dateien (wie die in den vorherigen Beispielen ausgewählten Bilder) auf einen Server hochzuladen.

> [!NOTE]
> Es ist in der Regel vorzuziehen, HTTP-Anfragen mit der [Fetch API](/de/docs/Web/API/Fetch_API) anstelle von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) zu machen. In diesem Fall möchten wir jedoch dem Benutzer den Upload-Fortschritt anzeigen, und diese Funktion wird von der Fetch API noch nicht unterstützt, also verwendet das Beispiel `XMLHttpRequest`.
>
> Die Arbeit zur Verfolgung der Standardisierung von Fortschrittsbenachrichtigungen mit der Fetch API erfolgt unter <https://github.com/whatwg/fetch/issues/607>.

### Erstellen der Upload-Aufgaben

Im Anschluss an den Code, der die Thumbnails im vorherigen Beispiel erstellt hat, erinnern Sie sich daran, dass jedes Thumbnail-Bild in der CSS-Klasse `obj` ist, mit der passenden [`File`](/de/docs/Web/API/File) im `file`-Attribut. Dies ermöglicht es uns, alle Bilder auszuwählen, die der Benutzer zum Hochladen gewählt hat, indem wir [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) wie folgt verwenden:

```js
function sendFiles() {
  const imgs = document.querySelectorAll(".obj");

  for (let i = 0; i < imgs.length; i++) {
    new FileUpload(imgs[i], imgs[i].file);
  }
}
```

`document.querySelectorAll` holt eine [`NodeList`](/de/docs/Web/API/NodeList) von allen Elementen im Dokument mit der CSS-Klasse `obj`. In unserem Fall sind dies alle Bildminiaturen. Sobald wir diese Liste haben, ist es trivial, sie zu durchlaufen und eine neue Instanz von `FileUpload` für jede zu erstellen. Jede dieser Instanzen bearbeitet das Hochladen der entsprechenden Datei.

### Handhabung des Upload-Prozesses für eine Datei

Die `FileUpload`-Funktion akzeptiert zwei Eingaben: Ein Bildelement und eine Datei, aus der die Bilddaten gelesen werden.

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

Die oben gezeigte `FileUpload()`-Funktion erstellt ein Throbber, der verwendet wird, um Fortschrittsinformationen anzuzeigen, und erstellt dann ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) zur Handhabung des Hochladens der Daten.

Bevor die Daten tatsächlich übertragen werden, werden mehrere Vorbereitungsschritte vorgenommen:

1. Der Upload-`progress`-Listener des `XMLHttpRequest` wird so eingestellt, dass der Throbber mit neuen Prozentsatzinformationen aktualisiert wird, damit der Throbber während des Uploads anhand der neuesten Informationen aktualisiert wird.
2. Der Upload-`load`-Ereignishandler des `XMLHttpRequest` wird so eingestellt, dass die Fortschrittsinformationen des Throbbers auf 100% aktualisiert werden, um sicherzustellen, dass der Fortschrittsindikator tatsächlich 100% erreicht (für den Fall von Granularitätsfehlern während des Prozesses). Danach wird der Throbber entfernt, da er nicht mehr benötigt wird. Dies führt dazu, dass der Throbber verschwindet, sobald der Upload abgeschlossen ist.
3. Die Anfrage, die Bilddatei hochzuladen, wird durch Aufrufen der `open()`-Methode des `XMLHttpRequest` geöffnet, um mit der Generierung einer POST-Anfrage zu beginnen.
4. Der MIME-Typ für den Upload wird durch Aufrufen der `overrideMimeType()`-Funktion des `XMLHttpRequest` festgelegt. In diesem Fall verwenden wir einen generischen MIME-Typ; je nach Anwendungsfall müssen Sie den MIME-Typ möglicherweise gar nicht festlegen.
5. Das `FileReader`-Objekt wird verwendet, um die Datei in einen Binärstring zu konvertieren.
6. Schließlich wird, wenn der Inhalt geladen wurde, die `send()`-Funktion des `XMLHttpRequest` aufgerufen, um den Inhalt der Datei hochzuladen.

### Asynchrone Handhabung des Datei-Upload-Prozesses

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

Objekt-URLs können für andere Dinge als nur Bilder verwendet werden! Sie können verwendet werden, um eingebettete PDF-Dateien oder andere Ressourcen anzuzeigen, die vom Browser angezeigt werden können.

In Firefox muss \`pdfjs.disabled\` auf \`false\` gesetzt sein, um das PDF in einem eingebetteten iframe (anstatt zum Herunterladen vorgeschlagen) anzuzeigen.

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

## Beispiel: Verwenden von Objekt-URLs mit anderen Dateitypen

Sie können Dateien anderer Formate auf die gleiche Weise manipulieren. Hier ist, wie man hochgeladene Videos vorab anzeigt:

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
