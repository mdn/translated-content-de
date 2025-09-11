---
title: Verwenden von Dateien aus Webanwendungen
slug: Web/API/File_API/Using_files_from_web_applications
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{DefaultAPISidebar("File API")}}{{AvailableInWorkers}}

Mit der File API kann Webinhalt den Benutzer bitten, lokale Dateien auszuwählen und dann deren Inhalte zu lesen. Diese Auswahl kann entweder mit einem HTML-`{{HTMLElement("input/file", '&lt;input type="file"&gt;')}}`-Element oder per Drag-and-Drop erfolgen.

## Zugriff auf ausgewählte Datei(en)

Betrachten Sie dieses HTML:

```html
<input type="file" id="input" multiple />
```

Die File API ermöglicht den Zugriff auf eine [`FileList`](/de/docs/Web/API/FileList), die [`File`](/de/docs/Web/API/File)-Objekte enthält, die die vom Benutzer ausgewählten Dateien repräsentieren.

Das `multiple`-Attribut im `input`-Element erlaubt dem Benutzer, mehrere Dateien auszuwählen.

Zugriff auf die erste ausgewählte Datei mit einem klassischen DOM-Selektor:

```js
const selectedFile = document.getElementById("input").files[0];
```

### Zugriff auf ausgewählte Datei(en) bei einem Änderungsereignis

Es ist auch möglich (aber nicht zwingend erforderlich), über das `change`-Ereignis auf die [`FileList`](/de/docs/Web/API/FileList) zuzugreifen. Sie müssen [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um den `change`-Ereignislistener hinzuzufügen, so:

```js
const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
}
```

## Informationen über die ausgewählte(n) Datei(en) abrufen

Das vom DOM bereitgestellte [`FileList`](/de/docs/Web/API/FileList)-Objekt listet alle vom Benutzer ausgewählten Dateien auf, wobei jede als [`File`](/de/docs/Web/API/File)-Objekt spezifiziert ist. Sie können ermitteln, wie viele Dateien der Benutzer ausgewählt hat, indem Sie den Wert des `length`-Attributs der Dateiliste überprüfen:

```js
const numFiles = fileList.length;
```

Einzelne [`File`](/de/docs/Web/API/File)-Objekte können abgerufen werden, indem auf die Liste als Array zugegriffen wird.

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

## Verwenden von versteckten Dateiinput-Elementen mit der click()-Methode

Sie können das zugegebenermaßen unansehnliche Datei-{{HTMLElement("input")}}-Element verstecken und Ihre eigene Schnittstelle zum Öffnen des Dateiauswahldialogs und zum Anzeigen der vom Benutzer ausgewählten Datei(en) präsentieren. Sie können dies tun, indem Sie das Input-Element mit `display:none` stylen und die [`click()`](/de/docs/Web/API/HTMLElement/click)-Methode auf das {{HTMLElement("input")}}-Element aufrufen.

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

Sie können das {{HTMLElement("button")}} nach Belieben stylen.

## Verwenden eines Label-Elements, um ein verstecktes Dateiinput-Element auszulösen

Um das Öffnen des Dateiauswahldialogs ohne Verwendung von JavaScript (die click()-Methode) zu ermöglichen, kann ein {{HTMLElement("label")}}-Element verwendet werden. Beachten Sie, dass in diesem Fall das Input-Element nicht mit `display: none` (noch `visibility: hidden`) versteckt werden darf, da das Label sonst nicht über die Tastatur zugänglich wäre. Verwenden Sie stattdessen die [visually-hidden technique](https://www.a11yproject.com/posts/how-to-hide-content/).

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

Es ist nicht notwendig, JavaScript-Code hinzuzufügen, um `fileElem.click()` aufzurufen. Auch in diesem Fall können Sie das Label-Element nach Belieben stylen. Sie müssen einen visuellen Hinweis auf den Fokusstatus des versteckten Eingabefelds auf seinem Label geben, sei es ein Umriss wie oben gezeigt oder Hintergrundfarbe oder Box-Schatten. (Zum Zeitpunkt der Erstellung zeigt Firefox diesen visuellen Hinweis für `<input type="file">`-Elemente nicht an.)

## Dateien mit Drag and Drop auswählen

Sie können den Benutzer auch Dateien in Ihre Webanwendung ziehen und ablegen lassen.

Der erste Schritt besteht darin, eine Drop-Zone festzulegen. Welcher Teil Ihres Inhalts Drops akzeptiert, kann je nach Design Ihrer Anwendung variieren, aber es ist einfach, ein Element so einzurichten, dass es Drop-Ereignisse empfängt:

```js
let dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
```

In diesem Beispiel verwandeln wir das Element mit der ID `dropbox` in unsere Drop-Zone. Dies geschieht durch das Hinzufügen von Listeners für die [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event), [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignisse.

Wir müssen in unserem Fall eigentlich nichts mit den `dragenter`- und `dragover`-Ereignissen machen, daher sind diese Funktionen einfach. Sie stoppen einfach die Propagation des Ereignisses und verhindern die Standardaktion:

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

Hier rufen wir das `dataTransfer`-Feld aus dem Ereignis ab, entnehmen die Dateiliste daraus und übergeben diese dann an `handleFiles()`. Ab diesem Punkt ist das Bearbeiten der Dateien gleich, unabhängig davon, ob der Benutzer das `input`-Element oder Drag-and-Drop verwendet hat.

## Beispiel: Anzeigen von Miniaturansichten von vom Benutzer ausgewählten Bildern

Angenommen, Sie entwickeln die nächste großartige Foto-Sharing-Website und möchten HTML verwenden, um Miniaturvorschauen von Bildern anzuzeigen, bevor der Benutzer sie tatsächlich hochlädt. Sie können Ihr Eingabeelement oder Ihre Drop-Zone wie oben beschrieben einrichten und sie eine Funktion wie die untenstehende `handleFiles()`-Funktion aufrufen lassen.

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

Hier betrachtet unsere Schleife, die die vom Benutzer ausgewählten Dateien verarbeitet, das `type`-Attribut jeder Datei, um zu sehen, ob ihr MIME-Typ mit `image/` beginnt. Für jede Datei, die ein Bild ist, erstellen wir ein neues `img`-Element. CSS kann verwendet werden, um beliebige schöne Rahmen oder Schatten zu etablieren und die Größe des Bildes zu spezifizieren, sodass das hier nicht gemacht werden muss.

Jedes Bild hat die CSS-Klasse `obj` zugewiesen, was das Finden im DOM-Baum erleichtert. Wir fügen jedem Bild auch ein `file`-Attribut hinzu, das die [`File`](/de/docs/Web/API/File) für das Bild angibt; dies ermöglicht es uns, die Bilder später für den tatsächlichen Upload abzurufen. Wir verwenden [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild), um das neue Miniaturbild zum Vorschaubereich unseres Dokuments hinzuzufügen.

Als Nächstes richten wir den [`FileReader`](/de/docs/Web/API/FileReader) ein, um das Bild asynchron zu laden und es an das `img`-Element zu binden. Nachdem wir das neue `FileReader`-Objekt erstellt haben, richten wir seine `onload`-Funktion ein und rufen dann `readAsDataURL()` auf, um den Lesevorgang im Hintergrund zu starten. Wenn der gesamte Inhalt der Bilddatei geladen ist, wird er in eine `data:`-URL umgewandelt, die an den `onload`-Callback übergeben wird. Unsere Implementierung dieser Routine setzt das `src`-Attribut des `img`-Elements auf das geladene Bild, was dazu führt, dass das Bild in der Miniaturansicht auf dem Bildschirm des Benutzers erscheint.

## Verwendung von Objekt-URLs

Die DOM-Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) ermöglichen es Ihnen, einfache URL-Strings zu erstellen, die zum Referenzieren von beliebigen Daten verwendet werden können, die mittels eines DOM-`File`-Objekts referenziert werden können, einschließlich lokaler Dateien auf dem Computer des Nutzers.

Wenn Sie ein [`File`](/de/docs/Web/API/File)-Objekt haben, das Sie per URL aus HTML referenzieren möchten, können Sie eine Objekt-URL dafür wie folgt erstellen:

```js
const objectURL = window.URL.createObjectURL(fileObj);
```

Die Objekt-URL ist ein String, der das [`File`](/de/docs/Web/API/File)-Objekt identifiziert. Jedes Mal, wenn Sie [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) aufrufen, wird eine eindeutige Objekt-URL erstellt, auch wenn bereits eine Objekt-URL für diese Datei erstellt wurde. Jede dieser muss freigegeben werden. Während sie automatisch freigegeben werden, wenn das Dokument entladen wird, sollten Sie, wenn Ihre Seite sie dynamisch verwendet, sie explizit freigeben, indem Sie [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) aufrufen:

```js
URL.revokeObjectURL(objectURL);
```

## Beispiel: Verwendung von Objekt-URLs zum Anzeigen von Bildern

Dieses Beispiel verwendet Objekt-URLs, um Bild-Miniaturen anzuzeigen. Zusätzlich werden weitere Dateiinformationen, einschließlich ihrer Namen und Größen, angezeigt.

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

Dies etabliert unser Datei-{{HTMLElement("input")}}-Element sowie einen Link, der den Dateiauswahldialog aufruft (da wir das Dateiinput versteckt halten, um zu verhindern, dass diese weniger attraktive Benutzeroberfläche angezeigt wird). Dies wird im Abschnitt [Verwenden von versteckten Dateiinput-Elementen mit der click()-Methode](#using_hidden_file_input_elements_using_the_click_method) erklärt, ebenso wie die Methode, die den Dateiauswahldialog aufruft.

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

Dies beginnt mit dem Abrufen der URL des {{HTMLElement("div")}} mit der ID `fileList`. Dies ist der Block, in den wir unsere Dateiliste einschließlich Miniaturen einfügen werden.

Wenn das [`FileList`](/de/docs/Web/API/FileList)-Objekt, das an `handleFiles()` übergeben wird, leer ist, setzen wir das innere HTML des Blocks so, dass "Keine Dateien ausgewählt!" angezeigt wird. Andernfalls beginnen wir mit dem Aufbau unserer Dateiliste folgendermaßen:

1. Ein neues ungeordnetes Listenelement ({{HTMLElement("ul")}}) wird erstellt.
2. Das neue Listenelement wird in den {{HTMLElement("div")}}-Block eingefügt, indem die Methode [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) aufgerufen wird.
3. Für jede [`File`](/de/docs/Web/API/File) in der durch `files` repräsentierten [`FileList`](/de/docs/Web/API/FileList):
   1. Erstellen Sie ein neues Listenelement ({{HTMLElement("li")}}) und fügen Sie es in die Liste ein.
   2. Erstellen Sie ein neues Bild ({{HTMLElement("img")}}).
   3. Setzen Sie die Quelle des Bildes auf eine neue Objekt-URL, die die Datei repräsentiert, unter Verwendung von [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static), um die Blob-URL zu erstellen.
   4. Setzen Sie die Höhe des Bildes auf 60 Pixel.
   5. Fügen Sie das neue Listenitem zur Liste hinzu.

Hier ist eine Live-Demonstration des obigen Codes:

{{EmbedLiveSample('Example_Using_object_URLs_to_display_images', '100%', '300px')}}

Beachten Sie, dass wir die Objekt-URL nicht sofort nach dem Laden des Bildes widerrufen, da dies das Bild unbrauchbar für Benutzerinteraktionen machen würde (wie zum Beispiel das Bild durch Rechtsklicken zu speichern oder es in einem neuen Tab zu öffnen). Für langlebige Anwendungen sollten Sie Objekt-URLs widerrufen, wenn sie nicht mehr benötigt werden (wie zum Beispiel, wenn das Bild aus dem DOM entfernt wird), um Speicher freizugeben, indem Sie die Methode [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) aufrufen und den Objekt-URL-String übergeben.

## Beispiel: Hochladen einer vom Benutzer ausgewählten Datei

Dieses Beispiel zeigt, wie Sie den Benutzer Dateien (wie die in dem vorherigen Beispiel ausgewählten Bilder) auf einen Server hochladen lassen können.

> [!NOTE]
> Es ist in der Regel vorzuziehen, HTTP-Anfragen mit der [Fetch API](/de/docs/Web/API/Fetch_API) statt mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) zu machen. In diesem Fall möchten wir dem Benutzer jedoch den Fortschritt des Uploads anzeigen, und diese Funktion wird von der Fetch API noch nicht unterstützt, daher verwendet das Beispiel `XMLHttpRequest`.
>
> Die Arbeit zur Standardisierung von Fortschrittsbenachrichtigungen mit der Fetch API wird unter <https://github.com/whatwg/fetch/issues/607> verfolgt.

### Erstellen der Upload-Aufgaben

Fortsetzend mit dem Code, der in dem vorherigen Beispiel die Miniaturen erstellte, erinnern Sie sich, dass jedes Miniaturbild in der CSS-Klasse `obj` ist und die entsprechende [`File`](/de/docs/Web/API/File) in einem `file`-Attribut angehängt wurde. Dies ermöglicht es uns, alle vom Benutzer zur Auswahl gestellten Bilder für den Upload auszuwählen, indem wir [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden, so:

```js
function sendFiles() {
  const imgs = document.querySelectorAll(".obj");

  for (const img of imgs) {
    new FileUpload(img, img.file);
  }
}
```

`document.querySelectorAll` holt eine [`NodeList`](/de/docs/Web/API/NodeList) aller Elemente im Dokument mit der CSS-Klasse `obj`. In unserem Fall werden dies alle Bild-Miniaturen sein. Sobald wir diese Liste haben, ist es trivial, sie durchzugehen und eine neue `FileUpload`-Instanz für jede zu erstellen. Jede dieser Instanzen kümmert sich um den Upload der entsprechenden Datei.

### Handhabung des Upload-Prozesses für eine Datei

Die `FileUpload`-Funktion akzeptiert zwei Eingaben: ein Bildelement und eine Datei, aus der die Bilddaten gelesen werden sollen.

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

Die `FileUpload()`-Funktion, die oben gezeigt wurde, erstellt einen Fortschrittsbalken, der zum Anzeigen von Fortschrittsinformationen verwendet wird, und erstellt dann ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), um das Hochladen der Daten zu handhaben.

Bevor die Daten tatsächlich übertragen werden, werden mehrere vorbereitende Schritte durchgeführt:

1. Der Upload-`progress`-Listener des `XMLHttpRequest` wird so eingerichtet, dass er den Fortschrittsbalken mit neuen Prozentinformationen aktualisiert, sodass der Fortschrittsbalken während des Uploads basierend auf den neuesten Informationen aktualisiert wird.
2. Der Upload-`load`-Event-Handler des `XMLHttpRequest` wird eingerichtet, um die Fortschrittsinformationen des Fortschrittsbalkens auf 100 % zu aktualisieren, um sicherzustellen, dass der Fortschrittsanzeiger tatsächlich 100 % erreicht (im Falle von Granularitätsproblemen während des Vorgangs). Er entfernt dann den Fortschrittsbalken, da er nicht mehr benötigt wird. Dies lässt den Fortschrittsbalken verschwinden, sobald der Upload abgeschlossen ist.
3. Der Antrag zum Hochladen der Bilddatei wird geöffnet, indem die `open()`-Methode von `XMLHttpRequest` aufgerufen wird, um eine POST-Anfrage zu erstellen.
4. Der MIME-Typ für den Upload wird festgelegt, indem die `overrideMimeType()`-Funktion von `XMLHttpRequest` aufgerufen wird. In diesem Fall verwenden wir einen generischen MIME-Typ; je nach Anwendungsfall müssen Sie den MIME-Typ möglicherweise gar nicht festlegen.
5. Das `FileReader`-Objekt wird verwendet, um die Datei in einen Binär-String zu konvertieren.
6. Schließlich wird, wenn der Inhalt geladen ist, die `send()`-Funktion von `XMLHttpRequest` aufgerufen, um den Inhalt der Datei hochzuladen.

### Asynchrone Handhabung des Datei-Upload-Prozesses

Dieses Beispiel, das PHP auf der Serverseite und JavaScript auf der Clientseite verwendet, demonstriert den asynchronen Upload einer Datei.

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
  </head>
  <body>
    <div>
      <div
        id="dropzone"
        style="margin:30px; width:500px; height:300px; border:1px dotted grey;">
        Drag & drop your file here
      </div>
    </div>
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

      const dropzone = document.getElementById("dropzone");
      dropzone.addEventListener("dragover", (event) => {
        event.stopPropagation();
        event.preventDefault();
      });

      dropzone.addEventListener("drop", (event) => {
        event.preventDefault();

        const filesArray = event.dataTransfer.files;
        for (let i = 0; i < filesArray.length; i++) {
          sendFile(filesArray[i]);
        }
      });
    </script>
  </body>
</html>
```

## Beispiel: Verwendung von Objekt-URLs zum Anzeigen eines PDF

Objekt-URLs können für andere Dinge als nur Bilder verwendet werden! Sie können zum Anzeigen eingebetteter PDF-Dateien oder anderer Ressourcen verwendet werden, die vom Browser angezeigt werden können.

In Firefox muss die Einstellung `pdfjs.disabled` auf `false` gesetzt sein, damit das PDF eingebettet im iframe angezeigt wird (anstatt als herunterladbare Datei vorgeschlagen zu werden).

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

Sie können Dateien anderer Formate auf die gleiche Weise manipulieren. Hier ist wie man ein hochgeladenes Video vorschaut:

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
