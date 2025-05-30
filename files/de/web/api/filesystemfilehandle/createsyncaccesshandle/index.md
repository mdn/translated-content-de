---
title: "FileSystemFileHandle: createSyncAccessHandle()-Methode"
short-title: createSyncAccessHandle()
slug: Web/API/FileSystemFileHandle/createSyncAccessHandle
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

Die **`createSyncAccessHandle()`**-Methode der [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das zu einem [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)-Objekt aufgelöst wird, das verwendet werden kann, um synchron von einer Datei zu lesen und in eine Datei zu schreiben. Die synchrone Natur dieser Methode bietet Leistungsverbesserungen, ist jedoch nur innerhalb dedizierter [Web Workers](/de/docs/Web/API/Web_Workers_API) für Dateien innerhalb des [Origin Private File System](/de/docs/Web/API/File_System_API/Origin_private_file_system) nutzbar.

Das Erstellen eines [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) nimmt eine exklusive Sperre auf die Datei, die mit dem Datei-Handle verbunden ist. Dies verhindert die Erstellung weiterer [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) oder [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream) für die Datei, bis das vorhandene Zugriffs-Handle geschlossen ist.

## Syntax

```js-nolint
createSyncAccessHandle()
createSyncAccessHandle(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `mode` {{optional_inline}} {{non-standard_inline}}
      - : Ein String, der den Sperrmodus für das Zugriffs-Handle spezifiziert. Der Standardwert ist `"readwrite"`. Mögliche Werte sind:
        - `"read-only"`
          - : Mehrere `FileSystemSyncAccessHandle`-Objekte können gleichzeitig auf einer Datei geöffnet werden (z. B. wenn dieselbe App in mehreren Tabs verwendet wird), solange sie alle im Modus `"read-only"` geöffnet sind. Sobald geöffnet, können leseähnliche Methoden auf den Handles aufgerufen werden — [`read()`](/de/docs/Web/API/FileSystemSyncAccessHandle/read), [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize) und [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close).
        - `"readwrite"`
          - : Es kann nur ein `FileSystemSyncAccessHandle`-Objekt auf einer Datei geöffnet werden. Der Versuch, weitere Handles zu öffnen, bevor das erste Handle geschlossen ist, führt zu einer `NoModificationAllowedError`-Exception. Sobald geöffnet, kann jede verfügbare Methode auf dem Handle aufgerufen werden.
        - `"readwrite-unsafe"`
          - : Mehrere `FileSystemSyncAccessHandle`-Objekte können gleichzeitig auf einer Datei geöffnet werden, solange sie alle im Modus `"readwrite-unsafe"` geöffnet sind. Sobald geöffnet, kann jede verfügbare Methode auf den Handles aufgerufen werden.

### Rückgabewert

Ein {{jsxref('Promise')}}, das zu einem [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)-Objekt aufgelöst wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) für das Handle im `readwrite`-Modus nicht `granted` ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)-Objekt keine Datei im [Origin Private File System](/de/docs/Web/API/File_System_API/Origin_private_file_system) darstellt.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der aktuelle Eintrag nicht gefunden wird.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser nicht in der Lage ist, eine Sperre auf die Datei zu setzen, die mit dem Datei-Handle verbunden ist. Dies könnte daran liegen, dass `mode` auf `readwrite` gesetzt ist und versucht wird, mehrere Handles gleichzeitig zu öffnen.

## Beispiele

### Grundlegende Verwendung

Die folgende asynchrone Ereignishandhabungsfunktion befindet sich in einem Web Worker. Der darin enthaltene Codeausschnitt erstellt ein synchrones Datei-Zugriffs-Handle.

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

### Komplettes Beispiel mit `mode`-Option

Unser Beispiel für den [`createSyncAccessHandle()` mode test](https://createsyncaccesshandle-mode-test.glitch.me/) bietet ein {{htmlelement("input")}}-Feld, um Text einzugeben, und zwei Schaltflächen — eine, um den eingegebenen Text am Ende einer Datei im Origin Private File System zu speichern, und eine, um die Datei zu leeren, wenn sie zu voll wird.

Versuchen Sie, das obige Demo zu erkunden, wobei die Entwicklerkonsole des Browsers geöffnet ist, damit Sie sehen können, was passiert. Wenn Sie versuchen, die Demo in mehreren Browser-Tabs zu öffnen, werden Sie feststellen, dass mehrere Handles gleichzeitig geöffnet werden können, um gleichzeitig in die Datei zu schreiben. Dies liegt daran, dass `mode: "readwrite-unsafe"` auf den `createSyncAccessHandle()`-Aufrufen gesetzt ist.

Im Folgenden werden wir den Code erkunden.

#### HTML

Die zwei {{htmlelement("button")}}-Elemente und das Text-{{htmlelement("input")}}-Feld sehen folgendermaßen aus:

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

Der JavaScript-Code des Haupt-Threads in der HTML-Datei wird unten gezeigt. Wir holen Referenzen zur Schreibtext-Schaltfläche, Leeredatei-Schaltfläche und Text-Eingabefeld, dann erstellen wir einen neuen Web Worker mit dem [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor. Wir definieren dann zwei Funktionen und setzen sie als Ereignishandler für die Schaltflächen:

- `writeToOPFS()` wird ausgeführt, wenn die Schreibtext-Schaltfläche geklickt wird. Diese Funktion überträgt den eingegebenen Wert des Textfelds an den Worker innerhalb eines Objekts, indem die Methode [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) verwendet wird, und leert dann das Textfeld, um es für die nächste Eingabe vorzubereiten. Beachten Sie, wie das übergebene Objekt auch eine `command: "write"`-Eigenschaft enthält, um zu spezifizieren, dass wir mit dieser Nachricht eine Schreibaktion auslösen möchten.
- `emptyOPFS()` wird ausgeführt, wenn die Leeredatei-Schaltfläche geklickt wird. Dies überträgt ein Objekt mit einer `command: "empty"`-Eigenschaft an den Worker, das angibt, dass die Datei geleert werden soll.

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

#### Worker-JavaScript

Das Worker-JavaScript wird unten gezeigt.

Zuerst führen wir eine Funktion namens `initOPFS()` aus, die eine Referenz auf das OPFS-Root-Verzeichnis erhält, indem [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory) verwendet wird, eine Datei erstellt und deren Handle zurückgibt, indem [`FileSystemDirectoryHandle.getFileHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getFileHandle) verwendet wird, und dann ein [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) zurückgibt, indem `createSyncAccessHandle()` verwendet wird. Dieser Aufruf enthält die Eigenschaft `mode: "readwrite-unsafe"`, die es mehreren Handles ermöglicht, gleichzeitig auf dieselbe Datei zuzugreifen.

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

In der Nachrichten-Ereignishandler-Funktion [message event](/de/docs/Web/API/Worker/message_event) des Workers holen wir zuerst die Größe der Datei, indem [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize) verwendet wird. Dann prüfen wir, ob die Daten, die in der Nachricht gesendet wurden, einen `command`-Eigenschaftswert von `"empty"` enthalten. Falls dies so ist, leeren wir die Datei, indem [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate) mit einem Wert von `0` verwendet wird, und aktualisieren die Dateigröße, die in der Variablen `size` enthalten ist.

Wenn die Nachrichtendaten etwas anderes sind, dann:

- Erstellen wir einen neuen [`TextEncoder`](/de/docs/Web/API/TextEncoder) und [`TextDecoder`](/de/docs/Web/API/TextDecoder), um die Textinhalte später zu kodieren und zu dekodieren.
- Kodieren wir die Nachrichtendaten und schreiben das Ergebnis an das Ende der Datei, indem [`write()`](/de/docs/Web/API/FileSystemSyncAccessHandle/write) verwendet wird, dann aktualisieren wir die Dateigröße, die in der Variablen `size` enthalten ist.
- Erstellen wir eine {{jsxref("DataView")}}, um die Dateiinhalte zu enthalten, und lesen die Inhalte in diese ein, indem [`read()`](/de/docs/Web/API/FileSystemSyncAccessHandle/read) verwendet wird.
- Dekodieren wir die `DataView`-Inhalte und loggen sie in die Konsole.

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
- [Das File System Access API: Vereinfachung des Zugangs zu lokalen Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
