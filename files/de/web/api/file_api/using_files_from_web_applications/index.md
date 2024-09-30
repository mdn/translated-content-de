---
title: Verwendung von Dateien aus Webanwendungen
slug: Web/API/File_API/Using_files_from_web_applications
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{DefaultAPISidebar("File API")}}{{AvailableInWorkers}}

Mit der File API kann der Webinhalt den Benutzer auffordern, lokale Dateien auszuwählen und dann den Inhalt dieser Dateien zu lesen. Diese Auswahl kann entweder mit einem HTML-`{{HTMLElement("input/file", '&lt;input type="file"&gt;')}}`-Element oder per Drag-and-Drop erfolgen.

## Zugriff auf die ausgewählte(n) Datei(en)

Betrachten Sie dieses HTML:

```html
<input type="file" id="input" multiple />
```

Die File API ermöglicht es, auf eine [`FileList`](/de/docs/Web/API/FileList) zuzugreifen, die [`File`](/de/docs/Web/API/File)-Objekte enthält, die die vom Benutzer ausgewählten Dateien repräsentieren.

Das `multiple`-Attribut im `input`-Element ermöglicht es dem Benutzer, mehrere Dateien auszuwählen.

Zugriff auf die erste ausgewählte Datei mit einem klassischen DOM-Selektor:

```js
const selectedFile = document.getElementById("input").files[0];
```

### Zugriff auf die ausgewählte(n) Datei(en) bei einem Change-Ereignis

Es ist auch möglich (aber nicht zwingend erforderlich), auf die [`FileList`](/de/docs/Web/API/FileList) über das `change`-Ereignis zuzugreifen. Sie müssen [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um den `change`-Ereignis-Listener hinzuzufügen, wie folgt:

```js
const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
}
```

## Informationen über ausgewählte Datei(en) abrufen

Das vom DOM bereitgestellte [`FileList`](/de/docs/Web/API/FileList)-Objekt listet alle vom Benutzer ausgewählten Dateien auf, die jeweils als [`File`](/de/docs/Web/API/File)-Objekt angegeben werden. Sie können feststellen, wie viele Dateien der Benutzer ausgewählt hat, indem Sie den Wert des `length`-Attributs der Dateiliste überprüfen:

```js
const numFiles = fileList.length;
```

Einzelne [`File`](/de/docs/Web/API/File)-Objekte können abgerufen werden, indem Sie auf die Liste wie auf ein Array zugreifen.

Es gibt drei Attribute, die vom [`File`](/de/docs/Web/API/File)-Objekt bereitgestellt werden, die nützliche Informationen über die Datei enthalten.

- `name`
  - : Der Dateiname als schreibgeschützte Zeichenkette. Dies ist nur der Dateiname und enthält keine Pfadinformationen.
- `size`
  - : Die Größe der Datei in Bytes als schreibgeschützter 64-Bit-Integer.
- `type`
  - : Der MIME-Typ der Datei als schreibgeschützte Zeichenkette oder `""`, wenn der Typ nicht bestimmt werden konnte.

### Beispiel: Anzeigengröße der Datei(en)

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

## Verwenden von versteckten Datei-Eingabeelementen mit der click()-Methode

Sie können das zugegebenermaßen unansehnliche Datei-{{HTMLElement("input")}}-Element ausblenden und Ihre eigene Benutzeroberfläche zum Öffnen des Dateiauswahlfensters und zum Anzeigen, welche Datei(en) der Benutzer ausgewählt hat, bereitstellen. Sie können dies tun, indem Sie das Eingabeelement mit `display:none` stylen und die [`click()`](/de/docs/Web/API/HTMLElement/click)-Methode auf das {{HTMLElement("input")}}-Element aufrufen.

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

Der Code, der das `click`-Ereignis bearbeitet, kann so aussehen:

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

## Verwenden eines label-Elements zum Auslösen eines versteckten Datei-Eingabeelements

Um das Öffnen des Dateiauswahlfensters ohne Verwendung von JavaScript (der click()-Methode) zu ermöglichen, kann ein {{HTMLElement("label")}}-Element verwendet werden. Beachten Sie, dass in diesem Fall das Eingabeelement nicht mit `display: none` (noch `visibility: hidden`) ausgeblendet werden darf, da das Label sonst nicht mit der Tastatur zugänglich wäre. Verwenden Sie stattdessen die [visually-hidden technique](https://www.a11yproject.com/posts/how-to-hide-content/).

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

Es ist nicht erforderlich, JavaScript-Code hinzuzufügen, um `fileElem.click()` aufzurufen. Auch in diesem Fall können Sie das Label-Element nach Belieben stylen. Sie müssen einen visuellen Hinweis auf den Fokusstatus des versteckten Eingabefeldes an seinem Label bereitstellen, sei es ein Umriss, wie oben gezeigt, oder eine Hintergrundfarbe oder ein Box-Shadow. (Zum Zeitpunkt des Schreibens zeigt Firefox diesen visuellen Hinweis für `<input type="file">`-Elemente nicht an.)

## Auswahl von Dateien per Drag-and-Drop

Sie können den Benutzer auch Dateien per Drag-and-Drop in Ihre Webanwendung ziehen lassen.

Der erste Schritt besteht darin, eine Ablagezone zu erstellen. Welcher Teil Ihres Inhalts Drops akzeptiert, kann je nach Design Ihrer Anwendung variieren, aber es ist einfach, ein Element zu erstellen, das Drop-Ereignisse empfängt:

```js
let dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
```

In diesem Beispiel machen wir das Element mit der ID `dropbox` zu unserer Ablagezone. Dies geschieht durch Hinzufügen von Listenern für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event), [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignisse.

Wir müssen eigentlich nichts mit den `dragenter`- und `dragover`-Ereignissen tun, also sind diese Funktionen einfach. Sie stoppen nur die Propagierung des Ereignisses und verhindern, dass die Standardaktion durchgeführt wird:

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

Hier rufen wir das `dataTransfer`-Feld aus dem Ereignis ab, extrahieren die Datei-Liste daraus und übergeben diese an `handleFiles()`. Von diesem Punkt an ist die Handhabung der Dateien gleich, unabhängig davon, ob der Benutzer das `input`-Element oder Drag-and-Drop verwendet hat.

## Beispiel: Anzeigen von Miniaturansichten benutzerselektierter Bilder

Angenommen, Sie entwickeln die nächste großartige Foto-Sharing-Website und möchten HTML verwenden, um Vorschaubilder von Bildern anzuzeigen, bevor der Benutzer sie tatsächlich hochlädt. Sie können Ihr Eingabeelement oder Ihre Ablagezone wie zuvor besprochen einrichten und sie eine Funktion wie die `handleFiles()`-Funktion unten aufrufen lassen.

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

Hier prüft unsere Schleife, die die von Benutzern ausgewählten Dateien verarbeitet, das `type`-Attribut jeder Datei, um zu sehen, ob ihr MIME-Typ mit `image/` beginnt. Für jede Datei, die ein Bild ist, erstellen wir ein neues `img`-Element. CSS kann verwendet werden, um beliebige hübsche Rahmen oder Schatten festzulegen und die Bildgröße zu spezifizieren, sodass dies hier nicht erforderlich ist.

Jedes Bild erhält die CSS-Klasse `obj` hinzugefügt, wodurch es im DOM-Baum leicht zu finden ist. Wir fügen auch ein `file`-Attribut zu jedem Bild hinzu, das die [`File`](/de/docs/Web/API/File) für das Bild angibt; damit können wir die Bilder für den tatsächlichen Upload später abrufen. Wir verwenden [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild), um die neue Miniaturansicht zum Vorschau-Bereich unseres Dokuments hinzuzufügen.

Als Nächstes stellen wir den [`FileReader`](/de/docs/Web/API/FileReader) ein, um das Bild asynchron zu laden und an das `img`-Element anzuhängen. Nach dem Erstellen des neuen `FileReader`-Objekts richten wir seine `onload`-Funktion ein und rufen dann `readAsDataURL()` auf, um den Lesevorgang im Hintergrund zu starten. Sobald der gesamte Inhalt der Bilddatei geladen ist, wird er in eine `data:`-URL umgewandelt, die an den `onload`-Callback übergeben wird. Unsere Implementierung dieser Routine setzt das `src`-Attribut des `img`-Elements auf das geladene Bild, was dazu führt, dass das Bild in der Miniatur auf dem Bildschirm des Benutzers erscheint.

## Verwendung von Objekt-URLs

Mit den DOM-Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) können Sie einfache URL-Zeichenfolgen erstellen, die verwendet werden können, um auf alle Daten zu verweisen, auf die mit einem DOM-`[`File`](/de/docs/Web/API/File)`-Objekt verwiesen werden kann, einschließlich lokaler Dateien auf dem Computer des Benutzers.

Wenn Sie ein [`File`](/de/docs/Web/API/File)-Objekt haben, auf das Sie über eine URL aus HTML verweisen möchten, können Sie eine Objekt-URL dafür wie folgt erstellen:

```js
const objectURL = window.URL.createObjectURL(fileObj);
```

Die Objekt-URL ist eine Zeichenkette, die das [`File`](/de/docs/Web/API/File)-Objekt identifiziert. Jedes Mal, wenn Sie [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) aufrufen, wird eine eindeutige Objekt-URL erstellt, selbst wenn Sie bereits eine Objekt-URL für diese Datei erstellt haben. Jede dieser muss freigegeben werden. Während sie automatisch freigegeben werden, wenn das Dokument entladen wird, sollten Sie sie explizit freigeben, indem Sie [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) aufrufen, wenn Ihre Seite sie dynamisch verwendet:

```js
URL.revokeObjectURL(objectURL);
```

## Beispiel: Verwenden von Objekt-URLs zum Anzeigen von Bildern

Dieses Beispiel verwendet Objekt-URLs, um Bildminiaturen anzuzeigen. Zusätzlich werden andere Dateiinformationen, einschließlich ihrer Namen und Größen, angezeigt.

Das HTML, das die Benutzeroberfläche darstellt, sieht folgendermaßen aus:

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

Dies legt unser Datei-{{HTMLElement("input")}}-Element sowie einen Link fest, der das Dateiauswahlfenster aufruft (da wir das Datei-Input-Element verbergen, um zu verhindern, dass diese weniger ansprechende Benutzeroberfläche angezeigt wird). Dies wird im Abschnitt [Verwenden von versteckten Datei-Eingabeelementen mit der click()-Methode](#using_hidden_file_input_elements_using_the_click_method) erklärt, ebenso wie die Methode, die den Datei-Picker aufruft.

Die `handleFiles()`-Methode lautet:

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

Dies beginnt damit, die URL des {{HTMLElement("div")}} mit der ID `fileList` abzurufen. Dies ist der Block, in den wir unsere Dateiliste einschließlich der Miniaturansichten einfügen werden.

Wenn das [`FileList`](/de/docs/Web/API/FileList)-Objekt, das an `handleFiles()` übergeben wird, `null` ist, setzen wir den inneren HTML-Block so, dass "Keine Dateien ausgewählt!" angezeigt wird. Andernfalls beginnen wir mit dem Aufbau unserer Dateiliste wie folgt:

1. Ein neues ungeordnetes Listen-({{HTMLElement("ul")}})-Element wird erstellt.
2. Das neue Listenelement wird in den {{HTMLElement("div")}}-Block eingefügt, indem die [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)-Methode aufgerufen wird.
3. Für jede [`File`](/de/docs/Web/API/File) in der durch `files` dargestellten [`FileList`](/de/docs/Web/API/FileList):

   1. Erstellen Sie ein neues Listenelement ({{HTMLElement("li")}}) und fügen Sie es in die Liste ein.
   2. Erstellen Sie ein neues Bild- ({{HTMLElement("img")}}) Element.
   3. Setzen Sie die Bildquelle auf eine neue Objekt-URL, die die Datei darstellt, und verwenden Sie [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static), um die Blob-URL zu erstellen.
   4. Setzen Sie die Bildhöhe auf 60 Pixel.
   5. Richten Sie den Ladeereignis-Handler des Bildes so ein, dass die Objekt-URL freigegeben wird, da sie nicht mehr benötigt wird, nachdem das Bild geladen wurde. Dies geschieht durch Aufrufen der [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static)-Methode und Übergabe der Objekt-URL-Zeichenfolge, die `img.src` zugewiesen ist.
   6. Fügen Sie das neue Listenelement der Liste hinzu.

Hier ist eine Live-Demo des obigen Codes:

{{EmbedLiveSample('Example_Using_object_URLs_to_display_images', '100%', '300px')}}

## Beispiel: Hochladen einer benutzerselektierten Datei

Dieses Beispiel zeigt, wie Sie es dem Benutzer ermöglichen können, Dateien (wie die in einem vorherigen Beispiel ausgewählten Bilder) auf einen Server hochzuladen.

> [!NOTE]
> Es ist normalerweise vorzuziehen, HTTP-Anfragen mit der [Fetch API](/de/docs/Web/API/Fetch_API) anstelle von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) zu stellen. In diesem Fall möchten wir jedoch den Benutzer über den Fortschritt des Uploads informieren, und diese Funktion wird von der Fetch API noch nicht unterstützt, daher verwendet das Beispiel `XMLHttpRequest`.
>
> Arbeit zur Verfolgung der Standardisierung von Fortschrittsbenachrichtigungen unter Verwendung der Fetch API unter <https://github.com/whatwg/fetch/issues/607>.

### Erstellen der Upload-Aufgaben

Angesichts des Codes, der die Miniaturansichten im vorherigen Beispiel erstellte, erinnern Sie sich daran, dass jedes Miniaturbild in der CSS-Klasse `obj` mit der entsprechenden [`File`](/de/docs/Web/API/File) in einem `file`-Attribut enthalten ist. Dies ermöglicht es uns, alle vom Benutzer zum Hochladen ausgewählte Bilder mithilfe von [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) wie folgt auszuwählen:

```js
function sendFiles() {
  const imgs = document.querySelectorAll(".obj");

  for (let i = 0; i < imgs.length; i++) {
    new FileUpload(imgs[i], imgs[i].file);
  }
}
```

`document.querySelectorAll` holt eine [`NodeList`](/de/docs/Web/API/NodeList) aller Elemente im Dokument mit der CSS-Klasse `obj`. In unserem Fall sind dies alle Bildminiaturen. Sobald wir diese Liste haben, ist es trivial, sie zu durchlaufen und eine neue `FileUpload`-Instanz für jedes zu erstellen. Jede dieser Instanzen übernimmt das Hochladen der entsprechenden Datei.

### Verwalten des Upload-Prozesses für eine Datei

Die `FileUpload`-Funktion akzeptiert zwei Eingaben: ein Bild-Element und eine Datei, aus der die Bilddaten gelesen werden sollen.

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

Die oben gezeigte `FileUpload()`-Funktion erstellt einen Throbber, der zur Anzeige von Fortschrittsinformationen verwendet wird, und erstellt dann eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), um das Hochladen der Daten zu verwalten.

Bevor die Daten tatsächlich übertragen werden, werden mehrere vorbereitende Schritte unternommen:

1. Der `progress`-Listener des Uploads der `XMLHttpRequest` wird so eingestellt, dass der Throbber mit neuen Prozentsatzinformationen aktualisiert wird, sodass der Throbber entsprechend dem neuesten Stand der Informationen aktualisiert wird, während der Upload fortschreitet.
2. Der `load`-Ereignis-Handler des Uploads der `XMLHttpRequest` wird so eingestellt, dass die Throbber-Fortschrittsinformationen auf 100% aktualisiert werden, um sicherzustellen, dass der Fortschrittsanzeiger tatsächlich 100% erreicht (im Falle von Granularitätsabweichungen während des Prozesses). Anschließend wird der Throbber entfernt, da er nicht mehr benötigt wird. Dies bewirkt, dass der Throbber verschwindet, sobald der Upload abgeschlossen ist.
3. Die Anforderung zum Hochladen der Bilddatei wird gestartet, indem die `open()`-Methode von `XMLHttpRequest` aufgerufen wird, um mit dem Erstellen einer POST-Anforderung zu beginnen.
4. Der MIME-Typ für den Upload wird durch Aufrufen der Funktion `overrideMimeType()` von `XMLHttpRequest` eingestellt. In diesem Fall verwenden wir einen generischen MIME-Typ; möglicherweise müssen Sie den MIME-Typ überhaupt nicht einstellen, je nach Anwendungsfall.
5. Das `FileReader`-Objekt wird verwendet, um die Datei in eine binäre Zeichenkette zu konvertieren.
6. Schließlich wird, wenn der Inhalt geladen ist, die Funktion `send()` von `XMLHttpRequest` aufgerufen, um den Inhalt der Datei hochzuladen.

### Asynchrones Verwalten des Datei-Upload-Prozesses

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

In Firefox muss der Wert `pdfjs.disabled` auf `false` gesetzt sein, damit das PDF im `iframe` eingebettet angezeigt wird (anstatt als herunterladbare Datei vorgeschlagen zu werden).

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

Sie können Dateien anderer Formate auf dieselbe Weise manipulieren. Hier ist, wie Sie hochgeladene Videos in der Vorschau anzeigen können:

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
- [Using XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
