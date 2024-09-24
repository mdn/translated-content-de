---
title: Verwenden von Dateien in Webanwendungen
slug: Web/API/File_API/Using_files_from_web_applications
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{DefaultAPISidebar("File API")}}{{AvailableInWorkers}}

Mit der File API kann Webinhalt den Benutzer bitten, lokale Dateien auszuwählen und dann deren Inhalt zu lesen. Diese Auswahl kann entweder mit einem HTML-`{{HTMLElement("input/file", '&lt;input type="file"&gt;')}}`-Element oder per Drag-and-Drop erfolgen.

## Zugriff auf ausgewählte Datei(en)

Betrachten Sie dieses HTML:

```html
<input type="file" id="input" multiple />
```

Die File API macht es möglich, auf eine {{DOMxRef("FileList")}} zuzugreifen, die {{DOMxRef("File")}}-Objekte enthält, die die vom Benutzer ausgewählten Dateien repräsentieren.

Das `multiple`-Attribut des `input`-Elements erlaubt es dem Benutzer, mehrere Dateien auszuwählen.

Zugriff auf die erste ausgewählte Datei mit einem klassischen DOM-Selektor:

```js
const selectedFile = document.getElementById("input").files[0];
```

### Zugriff auf ausgewählte Datei(en) bei einem Veränderungsereignis

Es ist auch möglich (aber nicht erforderlich), auf die {{DOMxRef("FileList")}} über das `change`-Ereignis zuzugreifen. Sie müssen {{DOMxRef("EventTarget.addEventListener()")}} verwenden, um den `change`-Ereignislistener hinzuzufügen, wie folgt:

```js
const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* jetzt können Sie mit der Dateiliste arbeiten */
}
```

## Informationen über ausgewählte Datei(en) abrufen

Das vom DOM bereitgestellte {{DOMxRef("FileList")}}-Objekt listet alle Dateien auf, die der Benutzer ausgewählt hat, jede als {{DOMxRef("File")}}-Objekt angegeben. Sie können herausfinden, wie viele Dateien der Benutzer ausgewählt hat, indem Sie den Wert des `length`-Attributs der Dateiliste überprüfen:

```js
const numFiles = fileList.length;
```

Einzelne {{DOMxRef("File")}}-Objekte können abgerufen werden, indem Sie die Liste wie ein Array ansprechen.

Es gibt drei Attribute des {{DOMxRef("File")}}-Objekts, die nützliche Informationen über die Datei enthalten.

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
    <title>Dateigröße(n)</title>
  </head>

  <body>
    <form name="uploadForm">
      <div>
        <input id="uploadInput" type="file" multiple />
        <label for="fileNum">Ausgewählte Dateien:</label>
        <output id="fileNum">0</output>;
        <label for="fileSize">Gesamtgröße:</label>
        <output id="fileSize">0</output>
      </div>
      <div><input type="submit" value="Datei senden" /></div>
    </form>

    <script>
      const uploadInput = document.getElementById("uploadInput");
      uploadInput.addEventListener(
        "change",
        () => {
          // Gesamte Größe berechnen
          let numberOfBytes = 0;
          for (const file of uploadInput.files) {
            numberOfBytes += file.size;
          }

          // Annäherung an die nächste präfixierte Einheit
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

## Verwendung versteckter Datei-Eingabeelemente mit der click()-Methode

Sie können das zweifellos unattraktive Datei-{{HTMLElement("input")}}-Element ausblenden und Ihre eigene Benutzeroberfläche für das Öffnen des Datei-Auswahlfensters und das Anzeigen der ausgewählten Datei oder Dateien des Benutzers erstellen. Dazu können Sie das Eingabeelement mit `display:none` stylen und die {{DOMxRef("HTMLElement.click","click()")}}-Methode für das {{HTMLElement("input")}}-Element aufrufen.

Betrachten Sie dieses HTML:

```html
<input
  type="file"
  id="fileElem"
  multiple
  accept="image/*"
  style="display:none" />
<button id="fileSelect" type="button">Wählen Sie einige Dateien aus</button>
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

Sie können das {{HTMLElement("button")}} beliebig stylen.

## Verwendung eines label-Elements zur Aktivierung eines versteckten Datei-Eingabeelements

Um das Datei-Auswahlfenster ohne JavaScript (die click()-Methode) zu öffnen, kann ein {{HTMLElement("label")}}-Element verwendet werden. Beachten Sie, dass in diesem Fall das Eingabeelement nicht mit `display: none` (noch mit `visibility: hidden`) versteckt werden darf, da das Label andernfalls nicht über die Tastatur zugänglich wäre. Verwenden Sie stattdessen die [visually-hidden-Technik](https://www.a11yproject.com/posts/how-to-hide-content/).

Betrachten Sie dieses HTML:

```html
<input
  type="file"
  id="fileElem"
  multiple
  accept="image/*"
  class="visually-hidden" />
<label for="fileElem">Wählen Sie einige Dateien aus</label>
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

Es ist nicht notwendig, JavaScript-Code hinzuzufügen, um `fileElem.click()` aufzurufen. Auch in diesem Fall können Sie das Label-Element nach Belieben stylen. Sie müssen einen visuellen Hinweis für den Fokusstatus des versteckten Eingabefelds auf seinem Label bereitstellen, sei es ein Umriss wie oben gezeigt oder eine Hintergrundfarbe oder ein Schattierungsrahmen. (Zum Zeitpunkt des Schreibens zeigt Firefox diesen visuellen Hinweis nicht für `<input type="file">`-Elemente an.)

## Dateien mit Drag-and-Drop auswählen

Sie können dem Benutzer auch die Möglichkeit geben, Dateien in Ihre Webanwendung zu ziehen und abzulegen.

Der erste Schritt besteht darin, eine Drop-Zone einzurichten. Welcher Teil Ihres Inhalts Drops akzeptieren wird, hängt möglicherweise vom Design Ihrer Anwendung ab, aber ein Element so zu gestalten, dass es Drop-Ereignisse empfängt, ist einfach:

```js
let dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
```

In diesem Beispiel verwandeln wir das Element mit der ID `dropbox` in unsere Drop-Zone. Dies geschieht durch Hinzufügen von Listenern für die {{domxref("HTMLElement/dragenter_event", "dragenter")}}, {{domxref("HTMLElement/dragover_event", "dragover")}} und {{domxref("HTMLElement/drop_event", "drop")}} Ereignisse.

Wir müssen in unserem Fall tatsächlich nichts mit den `dragenter`- und `dragover`-Ereignissen tun, daher sind diese Funktionen einfach. Sie stoppen lediglich die Ausbreitung des Ereignisses und verhindern die Standardaktion:

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

Der eigentliche Zauber geschieht in der `drop()`-Funktion:

```js
function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  const dt = e.dataTransfer;
  const files = dt.files;

  handleFiles(files);
}
```

Hier erhalten wir das `dataTransfer`-Feld aus dem Ereignis, ziehen die Dateiliste daraus und übergeben sie dann an `handleFiles()`. Ab diesem Punkt ist die Handhabung der Dateien die gleiche, egal ob der Benutzer das `input`-Element oder Drag-and-Drop verwendet hat.

## Beispiel: Anzeigen von Miniaturbildern der vom Benutzer ausgewählten Bilder

Angenommen, Sie entwickeln die nächste große Foto-Sharing-Website und möchten HTML verwenden, um Miniaturansichten von Bildern anzuzeigen, bevor der Benutzer sie tatsächlich hochlädt. Sie können Ihr Eingabeelement oder Ihre Drop-Zone wie zuvor besprochen einrichten und sie eine Funktion wie die untenstehende `handleFiles()`-Funktion aufrufen lassen.

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
    preview.appendChild(img); // Angenommen, "preview" ist das div-Ausgabe, in dem der Inhalt angezeigt wird.

    const reader = new FileReader();
    reader.onload = (e) => {
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
```

Hier prüft unsere Schleife, die die vom Benutzer ausgewählten Dateien verarbeitet, das Attribut `type` jeder Datei, um zu sehen, ob ihr MIME-Typ mit dem String "`image/`" beginnt. Für jede Datei, die ein Bild ist, erstellen wir ein neues `img`-Element. CSS kann verwendet werden, um hübsche Rahmen oder Schatten festzulegen und die Bildgröße zu spezifizieren, sodass dies hier nicht getan werden muss.

Jedes Bild erhält die CSS-Klasse `obj`, damit es im DOM-Baum leicht zu finden ist. Wir fügen auch ein `file`-Attribut hinzu, das die {{DOMxRef("File")}} für das Bild festlegt; dies ermöglicht es uns, die Bilder später für den tatsächlichen Upload abzurufen. Wir verwenden {{DOMxRef("Node.appendChild()")}}, um die neue Miniaturansicht dem Vorschaubereich unseres Dokuments hinzuzufügen.

Als nächstes richten wir den {{DOMxRef("FileReader")}} ein, um das Bild asynchron zu laden und es dem `img`-Element anzuhängen. Nachdem das neue `FileReader`-Objekt erstellt wurde, richten wir seine `onload`-Funktion ein und rufen dann `readAsDataURL()` auf, um den Lesevorgang im Hintergrund zu starten. Wenn der gesamte Inhalt der Bilddatei geladen wurde, wird er in eine `data:`-URL konvertiert, die an den `onload`-Callback übergeben wird. Unsere Implementierung dieser Routine setzt das `src`-Attribut des `img`-Elements auf das geladene Bild, was dazu führt, dass das Bild bei der Miniaturansicht auf dem Bildschirm des Benutzers erscheint.

## Verwendung von Objekt-URLs

Die DOM-Methoden {{DOMxref("URL.createObjectURL_static", "URL.createObjectURL()")}} und {{DOMxref("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}} ermöglichen es, einfache URL-Strings zu erstellen, die verwendet werden können, um auf alle Daten zu verweisen, auf die mit einem DOM {{DOMxRef("File")}}-Objekt verwiesen werden kann, einschließlich lokaler Dateien auf dem Computer des Benutzers.

Wenn Sie ein {{DOMxRef("File")}}-Objekt haben, auf das Sie von HTML aus per URL verweisen möchten, können Sie dafür eine Objekt-URL wie folgt erstellen:

```js
const objectURL = window.URL.createObjectURL(fileObj);
```

Die Objekt-URL ist ein String, der das {{DOMxRef("File")}}-Objekt kennzeichnet. Jedes Mal, wenn Sie {{DOMxref("URL.createObjectURL_static", "URL.createObjectURL()")}} aufrufen, wird eine eindeutige Objekt-URL erstellt, selbst wenn Sie bereits eine Objekt-URL für diese Datei erstellt haben. Jede dieser muss freigegeben werden. Während sie automatisch freigegeben werden, wenn das Dokument entladen wird, sollten Sie sie explizit freigeben, wenn Ihre Seite sie dynamisch verwendet, indem Sie {{DOMxref("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}} aufrufen:

```js
URL.revokeObjectURL(objectURL);
```

## Beispiel: Verwendung von Objekt-URLs zum Anzeigen von Bildern

Dieses Beispiel verwendet Objekt-URLs, um Bild-Miniaturansichten anzuzeigen. Zusätzlich werden andere Dateiinformationen, einschließlich ihrer Namen und Größen, angezeigt.

Das HTML, das die Benutzeroberfläche präsentiert, sieht so aus:

```html
<input
  type="file"
  id="fileElem"
  multiple
  accept="image/*"
  style="display:none" />
<a href="#" id="fileSelect">Wählen Sie einige Dateien aus</a>
<div id="fileList">
  <p>Keine Dateien ausgewählt!</p>
</div>
```

Dies richtet unser Datei-{{HTMLElement("input")}}-Element sowie einen Link ein, der den Datei-Auswahldialog aufruft (da wir die Datei-Eingabe ausgeblendet halten, um zu verhindern, dass diese weniger attraktive Benutzeroberfläche angezeigt wird). Dies wird im Abschnitt [Verwendung versteckter Datei-Eingabeelemente mit der click()-Methode](#using_hidden_file_input_elements_using_the_click_method) erklärt, ebenso wie die Methode, die den Datei-Auswahldialog aufruft.

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
    e.preventDefault(); // Verhindern Sie die Navigation zu "#"
  },
  false,
);

fileElem.addEventListener("change", handleFiles, false);

function handleFiles() {
  fileList.textContent = "";
  if (!this.files.length) {
    const p = document.createElement("p");
    p.textContent = "Keine Dateien ausgewählt!";
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

Dies beginnt, indem die URL des {{HTMLElement("div")}} mit der ID `fileList` abgerufen wird. Dies ist der Block, in den wir unsere Dateiliste, einschließlich Miniaturansichten, einfügen werden.

Wenn das {{DOMxRef("FileList")}}-Objekt, das an `handleFiles()` übergeben wird, `null` ist, setzen wir das innere HTML des Blocks, um "Keine Dateien ausgewählt!" anzuzeigen. Andernfalls beginnen wir mit dem Erstellen unserer Dateiliste, wie folgt:

1. Ein neues ungeordnetes Listen-({{HTMLElement("ul")}})-Element wird erstellt.
2. Das neue Listenelement wird in den {{HTMLElement("div")}}-Block eingefügt, indem seine {{DOMxRef("Node.appendChild()")}}-Methode aufgerufen wird.
3. Für jede {{DOMxRef("File")}} in der {{DOMxRef("FileList")}}, die durch `files` repräsentiert wird:

   1. Erstellen Sie ein neues Listenelement ({{HTMLElement("li")}}) und fügen Sie es in die Liste ein.
   2. Erstellen Sie ein neues Bild ({{HTMLElement("img")}}) Element.
   3. Setzen Sie die Bildquelle auf eine neue Objekt-URL, die die Datei repräsentiert, indem Sie {{DOMxref("URL.createObjectURL_static", "URL.createObjectURL()")}} verwenden, um die Blob-URL zu erstellen.
   4. Setzen Sie die Bildhöhe auf 60 Pixel.
   5. Richten Sie den Lade-Event-Handler des Bildes ein, um die Objekt-URL freizugeben, da sie nicht mehr benötigt wird, wenn das Bild geladen wurde. Dies wird durch Aufrufen der {{DOMxref("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}} Methode durchgeführt und der Objekt-URL-String angegeben, wie er durch `img.src` spezifiziert wird.
   6. Fügen Sie das neue Listenelement in die Liste ein.

Hier finden Sie eine Live-Demo des obigen Codes:

{{EmbedLiveSample('Example_Using_object_URLs_to_display_images', '100%', '300px')}}

## Beispiel: Hochladen einer vom Benutzer ausgewählten Datei

Dieses Beispiel zeigt, wie Sie dem Benutzer erlauben, Dateien (wie die im vorherigen Beispiel ausgewählten Bilder) auf einen Server hochzuladen.

> [!NOTE]
> Es ist normalerweise vorzuziehen, HTTP-Anfragen mit der [Fetch API](/de/docs/Web/API/Fetch_API) anstelle von {{domxref("XMLHttpRequest")}} zu stellen. In diesem Fall möchten wir jedoch dem Benutzer den Upload-Fortschritt anzeigen, und diese Funktion wird von der Fetch API noch nicht unterstützt, daher verwendet das Beispiel `XMLHttpRequest`.
>
> Die Arbeit zur Verfolgung der Standardisierung von Fortschrittsbenachrichtigungen mit der Fetch API befindet sich unter <https://github.com/whatwg/fetch/issues/607>.

### Erstellen der Upload-Aufgaben

In Fortsetzung des Codes, der die Miniaturansichten im vorherigen Beispiel erstellt hat, erinnern Sie sich daran, dass jedes Miniaturbild in der CSS-Klasse `obj` mit der entsprechenden {{DOMxRef("File")}} in einem `file`-Attribut versehen ist. Dies ermöglicht es uns, alle Bilder auszuwählen, die der Benutzer zum Hochladen ausgewählt hat, indem wir {{DOMxRef("Document.querySelectorAll()")}} wie folgt verwenden:

```js
function sendFiles() {
  const imgs = document.querySelectorAll(".obj");

  for (let i = 0; i < imgs.length; i++) {
    new FileUpload(imgs[i], imgs[i].file);
  }
}
```

`document.querySelectorAll` holt eine {{DOMxRef("NodeList")}} aller Elemente im Dokument mit der CSS-Klasse `obj`. In unserem Fall handelt es sich dabei um alle Bild-Miniaturansichten. Sobald wir diese Liste haben, ist es trivial, sie zu durchlaufen und für jede eine neue `FileUpload`-Instanz zu erstellen. Jede dieser Instanzen behandelt das Hochladen der entsprechenden Datei.

### Bearbeiten des Upload-Prozesses für eine Datei

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

Die oben gezeigte `FileUpload()`-Funktion erstellt einen Fortschrittsbalken, der verwendet wird, um Fortschrittsinformationen anzuzeigen, und erstellt dann eine {{DOMxRef("XMLHttpRequest")}}, um die Daten zu uploaden.

Bevor die Daten tatsächlich übertragen werden, werden mehrere Vorbereitungsschritte unternommen:

1. Der `XMLHttpRequest`-Upload-`progress`-Listener wird eingerichtet, um den Fortschrittsbalken mit neuen prozentualen Informationen zu aktualisieren, sodass der Fortschrittsbalken während des Upload-Vorgangs basierend auf den neuesten Informationen aktualisiert wird.
2. Der `XMLHttpRequest`-Upload-`load`-Event-Handler wird eingerichtet, um die Fortschrittsinformationen des Fortschrittsbalkens auf 100 % zu aktualisieren, um sicherzustellen, dass der Fortschrittsindikator tatsächlich 100 % erreicht (im Falle von Granularitätsproblemen während des Vorgangs). Dann wird der Fortschrittsbalken entfernt, da er nicht mehr benötigt wird. Dies führt dazu, dass der Fortschrittsbalken verschwindet, sobald der Upload abgeschlossen ist.
3. Die Anforderung zum Hochladen der Bilddatei wird durch Aufrufen der `open()`-Methode von `XMLHttpRequest` geöffnet, um eine POST-Anforderung zu erstellen.
4. Der MIME-Typ für den Upload wird durch Aufrufen der `overrideMimeType()`-Funktion von `XMLHttpRequest` gesetzt. In diesem Fall verwenden wir einen generischen MIME-Typ; je nach Anwendungsfall müssen Sie möglicherweise den MIME-Typ festlegen oder auch nicht.
5. Das `FileReader`-Objekt wird verwendet, um die Datei in einen Binärstring zu konvertieren.
6. Schließlich wird beim Laden des Inhalts die `send()`-Funktion von `XMLHttpRequest` aufgerufen, um den Inhalt der Datei hochzuladen.

### Asynchrone Bearbeitung des Datei-Upload-Prozesses

In diesem Beispiel, das PHP auf der Serverseite und JavaScript auf der Clientseite verwendet, wird das asynchronous Hochladen einer Datei demonstriert.

```php
<?php
if (isset($_FILES['myFile'])) {
    // Beispiel:
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
                    alert(xhr.responseText); // Antwort behandeln.
                }
            };
            fd.append('myFile', file);
            // Initiieren eines multipart/form-data Upload
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
        <div id="dropzone" style="margin:30px; width:500px; height:300px; border:1px dotted grey;">Ziehen Sie Ihre Datei hierher</div>
    </div>
</body>
</html>
```

## Beispiel: Verwendung von Objekt-URLs zur Anzeige von PDFs

Objekt-URLs können für andere Dinge als nur Bilder verwendet werden! Sie können verwendet werden, um eingebettete PDF-Dateien oder andere Ressourcen anzuzeigen, die vom Browser dargestellt werden können.

In Firefox muss der Präferenzwert `pdfjs.disabled` auf `false` gesetzt sein, damit das PDF im iframe eingebettet angezeigt wird (anstatt als herunterzuladende Datei vorgeschlagen zu werden).

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

Sie können Dateien anderer Formate auf die gleiche Weise manipulieren. Hier wird gezeigt, wie man hochgeladene Videos anzeigt:

```js
const video = document.getElementById("video");
const obj_url = URL.createObjectURL(blob);
video.src = obj_url;
video.play();
URL.revokeObjectURL(obj_url);
```

## Siehe auch

- {{DOMxRef("File")}}
- {{DOMxRef("FileList")}}
- {{DOMxRef("FileReader")}}
- {{DOMxRef("URL")}}
- {{DOMxRef("XMLHttpRequest")}}
- [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
