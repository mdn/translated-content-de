---
title: "FileSystemFileHandle: createSyncAccessHandle() Methode"
short-title: createSyncAccessHandle()
slug: Web/API/FileSystemFileHandle/createSyncAccessHandle
l10n:
  sourceCommit: 2b6f99e45534ce662f842d8b4d2f7845492e353c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

Die **`createSyncAccessHandle()`** Methode des [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) Interface gibt ein {{jsxref('Promise')}} zurück, das in ein [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) Objekt aufgelöst wird, welches synchrones Lesen und Schreiben in eine Datei ermöglicht. Die synchrone Natur dieser Methode bietet Leistungsverbesserungen, kann jedoch nur innerhalb dedizierter [Web Workers](/de/docs/Web/API/Web_Workers_API) für Dateien im [Origin Private File System](/de/docs/Web/API/File_System_API/Origin_private_file_system) verwendet werden.

Das Erstellen eines [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) nimmt ein exklusives Sperre auf die Datei, die mit dem Dateihandle verbunden ist. Dies verhindert die Erstellung weiterer [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)s oder [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)s für die Datei, bis das bestehende Zugriffshandle geschlossen wird.

## Syntax

```js-nolint
createSyncAccessHandle()
createSyncAccessHandle(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `mode` {{optional_inline}} {{non-standard_inline}}
      - : Ein String, der den Sperrmodus für das Zugriffshandle angibt. Der Standardwert ist `"readwrite"`.
        Mögliche Werte sind:
        - `"read-only"`
          - : Mehrere `FileSystemSyncAccessHandle` Objekte können gleichzeitig auf eine Datei geöffnet werden (z. B. bei Verwendung derselben App in mehreren Tabs), vorausgesetzt, sie werden alle im Modus `"read-only"` geöffnet. Einmal geöffnet, können leseähnliche Methoden für die Handles aufgerufen werden — [`read()`](/de/docs/Web/API/FileSystemSyncAccessHandle/read), [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize) und [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close).
        - `"readwrite"`
          - : Nur ein `FileSystemSyncAccessHandle` Objekt kann auf eine Datei geöffnet werden. Der Versuch, nachfolgende Handles zu öffnen, bevor das erste Handle geschlossen ist, führt zu einer `NoModificationAllowedError` Ausnahme. Einmal geöffnet, können alle verfügbaren Methoden auf das Handle angewendet werden.
        - `"readwrite-unsafe"`
          - : Mehrere `FileSystemSyncAccessHandle` Objekte können gleichzeitig auf eine Datei geöffnet werden, vorausgesetzt, sie werden alle im Modus `"readwrite-unsafe"` geöffnet. Einmal geöffnet, können alle verfügbaren Methoden auf die Handles angewendet werden.

### Rückgabewert

Ein {{jsxref('Promise')}} das in ein [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) Objekt aufgelöst wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) für das Handle im `readwrite` Modus nicht `granted` ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) Objekt keine Datei im [Origin Private File System](/de/docs/Web/API/File_System_API/Origin_private_file_system) darstellt.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der aktuelle Eintrag nicht gefunden wird.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser nicht in der Lage ist, eine Sperre auf die mit dem Dateihandle verbundene Datei zu erwerben. Dies kann daran liegen, dass `mode` auf `readwrite` gesetzt ist und versucht wird, mehrere Handles gleichzeitig zu öffnen.

## Beispiele

### Grundlegende Verwendung

Die folgende asynchrone Ereignishandlerfunktion befindet sich in einem Web Worker. Der darin enthaltene Code erstellt ein synchrones Dateizugriffshandle.

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

Unser [`createSyncAccessHandle()` mode test](https://createsyncaccesshandle-mode-test.glitch.me/) Beispiel bietet ein {{htmlelement("input")}}-Feld zum Eingeben von Text und zwei Buttons — einen zum Schreiben des eingegebenen Textes an das Ende einer Datei im Origin Private File System und einen zum Leeren der Datei, wenn sie zu voll wird.

Probieren Sie das obige Demo aus, mit geöffnetem Browser-Entwicklerkonsolenfenster, damit Sie sehen können, was passiert. Wenn Sie versuchen, das Demo in mehreren Browser-Tabs zu öffnen, werden Sie feststellen, dass mehrere Handles gleichzeitig geöffnet werden können, um zeitgleich in die Datei zu schreiben. Dies liegt daran, dass `mode: "readwrite-unsafe"` auf den `createSyncAccessHandle()` Aufrufen gesetzt ist.

Im Folgenden erläutern wir den Code.

#### HTML

Die beiden {{htmlelement("button")}} Elemente und das Text-{{htmlelement("input")}} Feld sehen so aus:

```html
<ol>
  <li>
    <label for="filetext">Enter text to write to the file:</label>
    <input type="text" id="filetext" name="filetext" />
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

Das Haupt-JavaScript im HTML-Dokument wird unten gezeigt. Wir holen Referenzen zu den Schreib-Button, dem Leeren-Button und dem Texteingabefeld und erstellen dann einen neuen Web Worker mithilfe des [`Worker()`](/de/docs/Web/API/Worker/Worker) Konstruktors. Dann definieren wir zwei Funktionen und setzen sie als Ereignishandler auf den Buttons:

- `writeToOPFS()` wird ausgeführt, wenn der Schreib-Button geklickt wird. Diese Funktion postet den eingegebenen Wert des Textfeldes über ein Objekt an den Worker mithilfe der [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) Methode und leert dann das Textfeld für die nächste Eingabe. Beachten Sie, wie das übergebene Objekt auch eine `command: "write"` Eigenschaft enthält, um anzugeben, dass wir eine Schreibaktion mit dieser Nachricht auslösen möchten.
- `emptyOPFS()` wird ausgeführt, wenn der Leeren-Button geklickt wird. Dies sendet ein Objekt mit einer `command: "empty"` Eigenschaft an den Worker, um anzugeben, dass die Datei geleert werden soll.

```js
const writeBtn = document.querySelector(".write");
const emptyBtn = document.querySelector(".empty");
const fileText = document.querySelector("#filetext");

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

Zuerst führen wir eine Funktion namens `initOPFS()` aus, die eine Referenz zum OPFS-Root mithilfe von [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory) erhält, eine Datei erstellt und deren Handle mithilfe von [`FileSystemDirectoryHandle.getFileHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getFileHandle) zurückgibt, und dann ein [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) mithilfe von `createSyncAccessHandle()` zurückgibt. Dieser Aufruf beinhaltet die `mode: "readwrite-unsafe"` Eigenschaft, die es ermöglicht, dass mehrere Handles gleichzeitig auf dieselbe Datei zugreifen können.

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

Innerhalb der [Message-Event](/de/docs/Web/API/Worker/message_event) Handler-Funktion des Workers holen wir zuerst die Größe der Datei mithilfe von [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize). Dann prüfen wir, ob die Daten, die in der Nachricht gesendet werden, einen `command` Eigenschaftswert von `"empty"` enthalten. Falls ja, leeren wir die Datei mit [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate) mit einem Wert von `0` und aktualisieren die in der `size` Variablen enthaltene Dateigröße.

Wenn die Nachrichtendaten etwas anderes sind, dann:

- Erstellen wir einen neuen [`TextEncoder`](/de/docs/Web/API/TextEncoder) und [`TextDecoder`](/de/docs/Web/API/TextDecoder), um das Textinhalts-Encoding und -Decoding später zu bearbeiten.
- Kodieren wir die Nachrichtendaten und schreiben das Ergebnis an das Ende der Datei mithilfe von [`write()`](/de/docs/Web/API/FileSystemSyncAccessHandle/write), dann aktualisieren wir die in der `size` Variablen enthaltene Dateigröße.
- Erstellen wir eine {{jsxref("DataView")}} um die Dateiinhalte zu enthalten, und lesen den Inhalt in sie mithilfe von [`read()`](/de/docs/Web/API/FileSystemSyncAccessHandle/read).
- Dekodieren wir den `DataView`-Inhalt und protokollieren ihn in der Konsole.

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
    console.log("File contents: " + textDecoder.decode(dataView));

    // Flush the changes
    accessHandle.flush();
  }

  // Log the size of the file to the console
  console.log("Size: " + size);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
