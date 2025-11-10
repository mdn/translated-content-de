---
title: FileReader
slug: Web/API/FileReader
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Das **`FileReader`**-Interface ermöglicht Webanwendungen, den Inhalt von Dateien (oder rohen Datenpuffern), die auf dem Computer des Nutzers gespeichert sind, asynchron zu lesen. Dabei werden [`File`](/de/docs/Web/API/File)- oder [`Blob`](/de/docs/Web/API/Blob)-Objekte verwendet, um die zu lesende Datei oder Daten anzugeben.

Dateiobjekte können von einem [`FileList`](/de/docs/Web/API/FileList)-Objekt erhalten werden, das als Ergebnis der Auswahl von Dateien durch den Nutzer mit dem `<input type="file">`-Element oder durch das [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt einer Drag-and-Drop-Operation zurückgegeben wird. `FileReader` kann nur auf den Inhalt von Dateien zugreifen, die der Nutzer explizit ausgewählt hat; es kann nicht verwendet werden, um eine Datei anhand des Pfades aus dem Dateisystem des Nutzers zu lesen. Um Dateien auf dem Dateisystem des Clients nach Pfad zu lesen, verwenden Sie die [File System Access API](/de/docs/Web/API/File_System_API). Um serverseitige Dateien zu lesen, verwenden Sie [`fetch()`](/de/docs/Web/API/Window/fetch) mit [CORS](/de/docs/Web/HTTP/Guides/CORS)-Berechtigung, wenn Sie domänenübergreifend lesen.

{{InheritanceDiagram}}

## Konstruktor

- [`FileReader()`](/de/docs/Web/API/FileReader/FileReader)
  - : Gibt ein neues `FileReader`-Objekt zurück.

Siehe [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) für Details und Beispiele.

## Instanzeigenschaften

- [`FileReader.error`](/de/docs/Web/API/FileReader/error) {{ReadOnlyInline}}
  - : Ein [`DOMException`](/de/docs/Web/API/DOMException), das den Fehler darstellt, der beim Lesen der Datei aufgetreten ist.
- [`FileReader.readyState`](/de/docs/Web/API/FileReader/readyState) {{ReadOnlyInline}}

  - : Eine Zahl, die den Zustand des `FileReader` angibt. Dies ist einer der folgenden:

    | Name      | Wert | Beschreibung                                 |
    | --------- | ---- | -------------------------------------------- |
    | `EMPTY`   | `0`  | Es wurden noch keine Daten geladen.          |
    | `LOADING` | `1`  | Daten werden derzeit geladen.                |
    | `DONE`    | `2`  | Der gesamte Lesevorgang wurde abgeschlossen. |

- [`FileReader.result`](/de/docs/Web/API/FileReader/result) {{ReadOnlyInline}}
  - : Der Inhalt der Datei. Diese Eigenschaft ist nur gültig, nachdem der Lesevorgang abgeschlossen ist, und das Format der Daten hängt von der Methode ab, die verwendet wurde, um den Lesevorgang zu starten.

## Instanzmethoden

- [`FileReader.abort()`](/de/docs/Web/API/FileReader/abort)
  - : Bricht den Lesevorgang ab. Nach der Rückkehr wird der `readyState` `DONE` sein.
- [`FileReader.readAsArrayBuffer()`](/de/docs/Web/API/FileReader/readAsArrayBuffer)
  - : Beginnt mit dem Lesen des Inhalts des angegebenen [`Blob`](/de/docs/Web/API/Blob). Sobald der Vorgang abgeschlossen ist, enthält das `result`-Attribut einen {{jsxref("ArrayBuffer")}}, das die Daten der Datei darstellt.
- [`FileReader.readAsBinaryString()`](/de/docs/Web/API/FileReader/readAsBinaryString) {{deprecated_inline}}
  - : Beginnt mit dem Lesen des Inhalts des angegebenen [`Blob`](/de/docs/Web/API/Blob). Sobald der Vorgang abgeschlossen ist, enthält das `result`-Attribut die rohen binären Daten der Datei als String.
- [`FileReader.readAsDataURL()`](/de/docs/Web/API/FileReader/readAsDataURL)
  - : Beginnt mit dem Lesen des Inhalts des angegebenen [`Blob`](/de/docs/Web/API/Blob). Sobald der Vorgang abgeschlossen ist, enthält das `result`-Attribut eine `data:`-URL, die die Daten der Datei darstellt.
- [`FileReader.readAsText()`](/de/docs/Web/API/FileReader/readAsText)
  - : Beginnt mit dem Lesen des Inhalts des angegebenen [`Blob`](/de/docs/Web/API/Blob). Sobald der Vorgang abgeschlossen ist, enthält das `result`-Attribut den Inhalt der Datei als Textstring. Ein optionaler Codierungsname kann angegeben werden.

## Ereignisse

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener auf die `oneventname`-Eigenschaft dieses Interfaces setzen. Entfernen Sie die Ereignis-Listener mit [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener), sobald `FileReader` nicht mehr verwendet wird, um Speicherlecks zu vermeiden.

- [`abort`](/de/docs/Web/API/FileReader/abort_event)
  - : Wird ausgelöst, wenn ein Lesevorgang abgebrochen wurde, weil beispielsweise das Programm [`FileReader.abort()`](/de/docs/Web/API/FileReader/abort) aufgerufen hat.
- [`error`](/de/docs/Web/API/FileReader/error_event)
  - : Wird ausgelöst, wenn der Lesevorgang aufgrund eines Fehlers fehlgeschlagen ist.
- [`load`](/de/docs/Web/API/FileReader/load_event)
  - : Wird ausgelöst, wenn ein Lesevorgang erfolgreich abgeschlossen wurde.
- [`loadend`](/de/docs/Web/API/FileReader/loadend_event)
  - : Wird ausgelöst, wenn ein Lesevorgang abgeschlossen ist, unabhängig davon, ob er erfolgreich war oder nicht.
- [`loadstart`](/de/docs/Web/API/FileReader/loadstart_event)
  - : Wird ausgelöst, wenn ein Lesevorgang gestartet wurde.
- [`progress`](/de/docs/Web/API/FileReader/progress_event)
  - : Wird periodisch ausgelöst, während Daten gelesen werden.

## Beispiele

### Verwendung von FileReader

Dieses Beispiel liest und zeigt den Inhalt einer Textdatei direkt im Browser an.

#### HTML

```html
<h1>File Reader</h1>
<input type="file" id="file-input" />
<div id="message"></div>
<pre id="file-content"></pre>
```

#### JavaScript

```js
const fileInput = document.getElementById("file-input");
const fileContentDisplay = document.getElementById("file-content");
const messageDisplay = document.getElementById("message");

fileInput.addEventListener("change", handleFileSelection);

function handleFileSelection(event) {
  const file = event.target.files[0];
  fileContentDisplay.textContent = ""; // Clear previous file content
  messageDisplay.textContent = ""; // Clear previous messages

  // Validate file existence and type
  if (!file) {
    showMessage("No file selected. Please choose a file.", "error");
    return;
  }

  if (!file.type.startsWith("text")) {
    showMessage("Unsupported file type. Please select a text file.", "error");
    return;
  }

  // Read the file
  const reader = new FileReader();
  reader.onload = () => {
    fileContentDisplay.textContent = reader.result;
  };
  reader.onerror = () => {
    showMessage("Error reading the file. Please try again.", "error");
  };
  reader.readAsText(file);
}

// Displays a message to the user
function showMessage(message, type) {
  messageDisplay.textContent = message;
  messageDisplay.style.color = type === "error" ? "red" : "green";
}
```

### Ergebnis

{{EmbedLiveSample("Using FileReader", 640, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [`File`](/de/docs/Web/API/File)
- [`Blob`](/de/docs/Web/API/Blob)
- [`FileReaderSync`](/de/docs/Web/API/FileReaderSync)
