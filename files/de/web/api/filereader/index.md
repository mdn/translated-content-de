---
title: FileReader
slug: Web/API/FileReader
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Das **`FileReader`**-Interface ermöglicht es Webanwendungen, die Inhalte von Dateien (oder Rohdatenpuffern), die auf dem Computer des Nutzers gespeichert sind, auf asynchrone Weise zu lesen. Dies erfolgt unter Verwendung von [`File`](/de/docs/Web/API/File)- oder [`Blob`](/de/docs/Web/API/Blob)-Objekten, um die zu lesende Datei oder Daten anzugeben.

Dateiobjekte können von einem [`FileList`](/de/docs/Web/API/FileList)-Objekt stammen, das als Ergebnis einer Benutzeraktion, wie dem Auswählen von Dateien über das `<input type="file">`-Element oder einem Drag-and-Drop-Vorgang, durch das [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt zurückgegeben wird. `FileReader` kann nur auf Inhalte von Dateien zugreifen, die der Benutzer explizit ausgewählt hat; es kann nicht verwendet werden, um eine Datei per Pfadname aus dem Dateisystem des Benutzers zu lesen. Um Dateien im Dateisystem des Clients per Pfadname zu lesen, verwenden Sie die [File System Access API](/de/docs/Web/API/File_System_API). Um serverseitige Dateien zu lesen, verwenden Sie [`fetch()`](/de/docs/Web/API/Window/fetch), mit [CORS](/de/docs/Web/HTTP/Guides/CORS)-Berechtigung, wenn Cross-Origin-Zugriffe erfolgen.

{{InheritanceDiagram}}

## Konstruktor

- [`FileReader()`](/de/docs/Web/API/FileReader/FileReader)
  - : Gibt ein neues `FileReader`-Objekt zurück.

Siehe [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) für Details und Beispiele.

## Instanz-Eigenschaften

- [`FileReader.error`](/de/docs/Web/API/FileReader/error) {{ReadOnlyInline}}
  - : Ein [`DOMException`](/de/docs/Web/API/DOMException), das den Fehler darstellt, der beim Lesen der Datei aufgetreten ist.
- [`FileReader.readyState`](/de/docs/Web/API/FileReader/readyState) {{ReadOnlyInline}}

  - : Eine Zahl, die den Zustand des `FileReader` anzeigt. Dies ist einer der folgenden:

    | Name      | Wert | Beschreibung                                 |
    | --------- | ---- | -------------------------------------------- |
    | `EMPTY`   | `0`  | Noch keine Daten geladen.                    |
    | `LOADING` | `1`  | Daten werden aktuell geladen.                |
    | `DONE`    | `2`  | Der gesamte Lesevorgang wurde abgeschlossen. |

- [`FileReader.result`](/de/docs/Web/API/FileReader/result) {{ReadOnlyInline}}
  - : Der Inhalt der Datei. Diese Eigenschaft ist erst nach Abschluss des Lesevorgangs gültig, und das Datenformat hängt davon ab, welche Methode verwendet wurde, um den Lesevorgang zu starten.

## Instanz-Methoden

- [`FileReader.abort()`](/de/docs/Web/API/FileReader/abort)
  - : Bricht den Lesevorgang ab. Nach der Rückkehr wird der `readyState` auf `DONE` gesetzt.
- [`FileReader.readAsArrayBuffer()`](/de/docs/Web/API/FileReader/readAsArrayBuffer)
  - : Beginnt mit dem Lesen des Inhalts des angegebenen [`Blob`](/de/docs/Web/API/Blob). Nach Abschluss enthält das `result`-Attribut einen {{jsxref("ArrayBuffer")}}, der die Daten der Datei darstellt.
- [`FileReader.readAsBinaryString()`](/de/docs/Web/API/FileReader/readAsBinaryString) {{deprecated_inline}}
  - : Beginnt mit dem Lesen des Inhalts des angegebenen [`Blob`](/de/docs/Web/API/Blob). Nach Abschluss enthält das `result`-Attribut die Roh-Binärdaten der Datei als String.
- [`FileReader.readAsDataURL()`](/de/docs/Web/API/FileReader/readAsDataURL)
  - : Beginnt mit dem Lesen des Inhalts des angegebenen [`Blob`](/de/docs/Web/API/Blob). Nach Abschluss enthält das `result`-Attribut eine `data:`-URL, die die Daten der Datei darstellt.
- [`FileReader.readAsText()`](/de/docs/Web/API/FileReader/readAsText)
  - : Beginnt mit dem Lesen des Inhalts des angegebenen [`Blob`](/de/docs/Web/API/Blob). Nach Abschluss enthält das `result`-Attribut den Inhalt der Datei als Text-String. Ein optionaler Name der Kodierung kann angegeben werden.

## Ereignisse

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ab oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieses Interfaces zuweisen. Entfernen Sie die Ereignis-Listener mit [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener), sobald `FileReader` nicht mehr verwendet wird, um Speicherlecks zu vermeiden.

- [`abort`](/de/docs/Web/API/FileReader/abort_event)
  - : Wird ausgelöst, wenn ein Lesevorgang abgebrochen wurde, beispielsweise weil das Programm [`FileReader.abort()`](/de/docs/Web/API/FileReader/abort) aufgerufen hat.
- [`error`](/de/docs/Web/API/FileReader/error_event)
  - : Wird ausgelöst, wenn das Lesen aufgrund eines Fehlers fehlgeschlagen ist.
- [`load`](/de/docs/Web/API/FileReader/load_event)
  - : Wird ausgelöst, wenn ein Lesevorgang erfolgreich abgeschlossen wurde.
- [`loadend`](/de/docs/Web/API/FileReader/loadend_event)
  - : Wird ausgelöst, wenn ein Lesevorgang abgeschlossen wurde, unabhängig davon, ob er erfolgreich war oder nicht.
- [`loadstart`](/de/docs/Web/API/FileReader/loadstart_event)
  - : Wird ausgelöst, wenn ein Lesevorgang gestartet wurde.
- [`progress`](/de/docs/Web/API/FileReader/progress_event)
  - : Wird regelmäßig ausgelöst, während Daten gelesen werden.

## Beispiele

### Verwendung von FileReader

Dieses Beispiel liest und zeigt die Inhalte einer Textdatei direkt im Browser an.

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
