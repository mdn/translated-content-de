---
title: "FileSystemFileHandle: createSyncAccessHandle() Methode"
short-title: createSyncAccessHandle()
slug: Web/API/FileSystemFileHandle/createSyncAccessHandle
l10n:
  sourceCommit: ac7a39584dc77b42aac19473cc522bbedbf13717
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

Die **`createSyncAccessHandle()`** Methode des [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) Interfaces gibt ein {{jsxref('Promise')}} zurück, das in ein [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) Objekt aufgelöst wird, das verwendet werden kann, um synchron auf eine Datei zuzugreifen und sie zu bearbeiten. Die synchrone Natur dieser Methode bringt Leistungsverbesserungen, ist jedoch nur innerhalb dedizierter [Web Worker](/de/docs/Web/API/Web_Workers_API) für Dateien im [origin private file system](/de/docs/Web/API/File_System_API/Origin_private_file_system) nutzbar.

Das Erstellen eines [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) nimmt eine exklusive Sperre auf die Datei ein, die mit dem Dateihandle verbunden ist. Dies verhindert die Erstellung weiterer [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)s oder [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)s für die Datei, bis das bestehende Zugriffshandle geschlossen wird.

## Syntax

```js-nolint
createSyncAccessHandle()
createSyncAccessHandle(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `mode` {{optional_inline}} {{non-standard_inline}}
      - : Ein String, der den Sperrmodus für das Zugriffshandle angibt. Der Standardwert ist `"readwrite"`. Mögliche Werte sind:
        - `"read-only"`
          - : Mehrere `FileSystemSyncAccessHandle` Objekte können gleichzeitig auf eine Datei geöffnet werden (zum Beispiel bei der Verwendung der gleichen Anwendung in mehreren Tabs), vorausgesetzt, sie werden alle im Modus `"read-only"` geöffnet. Sobald geöffnet, können leseähnliche Methoden auf den Handles aufgerufen werden — [`read()`](/de/docs/Web/API/FileSystemSyncAccessHandle/read), [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize), und [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close).
        - `"readwrite"`
          - : Nur ein `FileSystemSyncAccessHandle` Objekt kann auf eine Datei geöffnet werden. Der Versuch, weitere Handles zu öffnen, bevor das erste Handle geschlossen ist, führt zu einer `NoModificationAllowedError` Ausnahme. Sobald geöffnet, kann jede verfügbare Methode auf dem Handle aufgerufen werden.
        - `"readwrite-unsafe"`
          - : Mehrere `FileSystemSyncAccessHandle` Objekte können gleichzeitig auf eine Datei geöffnet werden, vorausgesetzt, sie werden alle im Modus `"readwrite-unsafe"` geöffnet. Sobald geöffnet, kann jede verfügbare Methode auf den Handles aufgerufen werden.

### Rückgabewert

Ein {{jsxref('Promise')}} das in ein [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) Objekt aufgelöst wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) für das Handle nicht `granted` im `readwrite` Modus ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) Objekt keine Datei im [origin private file system](/de/docs/Web/API/File_System_API/Origin_private_file_system) darstellt.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der aktuelle Eintrag nicht gefunden wird.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser keine Sperre auf die mit dem Dateihandle verbundene Datei erwerben kann. Dies könnte der Fall sein, weil `mode` auf `readwrite` gesetzt ist und versucht wird, mehrere Handles gleichzeitig zu öffnen.

## Beispiele

### Grundlegende Verwendung

Der folgende asynchrone Ereignis-Handler ist in einem Web Worker enthalten. Der darin enthaltene Code erstellt ein synchrones Dateizugriffshandle.

```js
onmessage = async (e) => {
  // Retrieve message sent to work from main script
  const message = e.data;

  // Get handle to draft file
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  // Get sync access handle
  const accessHandle = await draftHandle.createSyncAccessHandle();

  // …

  // Always close FileSystemSyncAccessHandle if done.
  accessHandle.close();
};
```

### Komplettes Beispiel mit `mode` Option

Unser [`createSyncAccessHandle()` Modus Test](https://mdn.github.io/dom-examples/file-system-api/createsyncaccesshandle-mode/) Beispiel (sehen Sie sich den [Quellcode an](https://github.com/mdn/dom-examples/tree/main/file-system-api/createsyncaccesshandle-mode)) stellt ein {{htmlelement("input")}} Feld bereit, um Text einzugeben, und zwei Tasten — eine, um eingegebenen Text an das Ende einer Datei im origin private file system zu schreiben, und eine, um die Datei zu leeren, wenn sie zu voll wird.

Versuchen Sie, das oben stehende Demo zu erkunden, während die Entwicklertools des Browsers geöffnet sind, damit Sie sehen, was passiert. Wenn Sie versuchen, das Demo in mehreren Browser-Tabs zu öffnen, werden Sie feststellen, dass mehrere Handles gleichzeitig geöffnet werden können, um gleichzeitig in die Datei zu schreiben. Dies liegt daran, dass `mode: "readwrite-unsafe"` auf den `createSyncAccessHandle()` Aufrufen gesetzt ist.

Nachfolgend werden wir den Code untersuchen.

#### HTML

Die zwei {{htmlelement("button")}} Elemente und das Text {{htmlelement("input")}} Feld sehen so aus:

```html
<ol>
  <li>
    <label for="file-text">Enter text to write to the file:</label>
    <input type="text" id="file-text" name="file-text" />
  </li>
  <li>
    Write your text to the file: <button class="write">Write text</button>
  </li>
  <li>
    Empty the file if it gets too full:
    <button class="empty">Empty file</button>
  </li>
</ol>
```

#### Haupt-JavaScript

Das Haupt-JavaScript im HTML-Dokument ist unten gezeigt. Wir holen Verweise auf die Schreib-Taste, die Datei-Leer-Taste und das Texteingabefeld, dann erstellen wir einen neuen Web Worker mit dem [`Worker()`](/de/docs/Web/API/Worker/Worker) Konstruktor. Wir definieren dann zwei Funktionen und legen sie als Ereignis-Handler für die Tasten fest:

- `writeToOPFS()` wird ausgeführt, wenn die Schreib-Taste geklickt wird. Diese Funktion sendet den eingegebenen Wert des Textfeldes innerhalb eines Objekts an den Worker mit der [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) Methode, dann leert sie das Textfeld, um für die nächste Eingabe bereit zu sein. Beachten Sie, dass das gesendete Objekt auch eine `command: "write"` Eigenschaft enthält, um anzugeben, dass wir mit dieser Nachricht eine Schreibaktion auslösen möchten.
- `emptyOPFS()` wird ausgeführt, wenn die Datei-Leer-Taste geklickt wird. Dies sendet ein Objekt, das eine `command: "empty"` Eigenschaft enthält, an den Worker, der angibt, dass die Datei geleert werden soll.

```js
const writeBtn = document.querySelector(".write");
const emptyBtn = document.querySelector(".empty");
const fileText = document.querySelector("#file-text");

const opfsWorker = new Worker("worker.js");

function writeToOPFS() {
  opfsWorker.postMessage({
    command: "write",
    content: fileText.value,
  });
  console.log("Main script: Text posted to worker");
  fileText.value = "";
}

function emptyOPFS() {
  opfsWorker.postMessage({
    command: "empty",
  });
}

writeBtn.addEventListener("click", writeToOPFS);
emptyBtn.addEventListener("click", emptyOPFS);
```

#### Worker JavaScript

Das Worker-JavaScript wird unten gezeigt.

Zuerst führen wir eine Funktion namens `initOPFS()` aus, die eine Referenz auf das OPFS-Root-Verzeichnis mit [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory) erhält, eine Datei erstellt und ihr Handle mit [`FileSystemDirectoryHandle.getFileHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getFileHandle) zurückgibt, und dann ein [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) mit `createSyncAccessHandle()` zurückgibt. Dieser Aufruf beinhaltet die `mode: "readwrite-unsafe"` Eigenschaft, die es mehreren Handles erlaubt, gleichzeitig auf die gleiche Datei zuzugreifen.

```js
let accessHandle;

async function initOPFS() {
  const opfsRoot = await navigator.storage.getDirectory();
  const fileHandle = await opfsRoot.getFileHandle("file.txt", { create: true });
  accessHandle = await fileHandle.createSyncAccessHandle({
    mode: "readwrite-unsafe",
  });
}

initOPFS();
```

Innerhalb der [message event](/de/docs/Web/API/Worker/message_event)-Handler-Funktion des Workers erhalten wir zuerst die Größe der Datei mit [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize). Dann überprüfen wir, ob die mit der Nachricht gesendeten Daten eine `command` Eigenschaft mit dem Wert `"empty"` enthalten. Wenn ja, leeren wir die Datei mit [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate) mit einem Wert von `0` und aktualisieren die Dateigröße in der `size` Variablen.

Wenn die Nachrichtendaten etwas anderes sind, tun wir Folgendes:

- Wir erstellen einen neuen [`TextEncoder`](/de/docs/Web/API/TextEncoder) und [`TextDecoder`](/de/docs/Web/API/TextDecoder), um später den Textinhalt zu kodieren und zu dekodieren.
- Wir kodieren die Nachrichtendaten und schreiben das Ergebnis ans Ende der Datei mit [`write()`](/de/docs/Web/API/FileSystemSyncAccessHandle/write), dann aktualisieren wir die Dateigröße in der `size` Variablen.
- Wir erstellen eine {{jsxref("DataView")}}, um den Dateiinhalten Raum zu geben, und lesen den Inhalt in sie hinein mit [`read()`](/de/docs/Web/API/FileSystemSyncAccessHandle/read).
- Wir dekodieren den `DataView` Inhalt und protokollieren ihn in die Konsole.

```js
onmessage = function (e) {
  console.log("Worker: Message received from main script");

  // Get the current size of the file
  let size = accessHandle.getSize();

  if (e.data.command === "empty") {
    // Truncate the file to 0 bytes
    accessHandle.truncate(0);

    // Get the current size of the file
    size = accessHandle.getSize();
  } else {
    const textEncoder = new TextEncoder();
    const textDecoder = new TextDecoder();

    // Encode content to write to the file
    const content = textEncoder.encode(e.data.content);
    // Write the content at the end of the file
    accessHandle.write(content, { at: size });

    // Get the current size of the file
    size = accessHandle.getSize();

    // Prepare a data view of the length of the file
    const dataView = new DataView(new ArrayBuffer(size));

    // Read the entire file into the data view
    accessHandle.read(dataView, { at: 0 });

    // Log the current file contents to the console
    console.log(`File contents: ${textDecoder.decode(dataView)}`);

    // Flush the changes
    accessHandle.flush();
  }

  // Log the size of the file to the console
  console.log(`Size: ${size}`);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
