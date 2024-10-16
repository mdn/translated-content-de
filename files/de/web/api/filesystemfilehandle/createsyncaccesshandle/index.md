---
title: "FileSystemFileHandle: createSyncAccessHandle() Methode"
short-title: createSyncAccessHandle()
slug: Web/API/FileSystemFileHandle/createSyncAccessHandle
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

Die **`createSyncAccessHandle()`**-Methode der [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das in ein [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)-Objekt aufgelöst wird, welches dazu verwendet werden kann, synchron von einer Datei zu lesen und in eine Datei zu schreiben. Die synchrone Natur dieser Methode bringt Leistungsvorteile, ist jedoch nur innerhalb dedizierter [Web Workers](/de/docs/Web/API/Web_Workers_API) für Dateien innerhalb des [origin private file system](/de/docs/Web/API/File_System_API/Origin_private_file_system) nutzbar.

Das Erstellen eines [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) beansprucht ein exklusives Sperre auf der Datei, die mit dem Datei-Handle verbunden ist. Dies verhindert die Erstellung weiterer [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) oder [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream) für die Datei, bis das bestehende Zugriffs-Handle geschlossen wird.

## Syntax

```js-nolint
createSyncAccessHandle()
createSyncAccessHandle(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `mode` {{optional_inline}} {{non-standard_inline}}
      - : Ein String, der den Sperrmodus für das Zugriffs-Handle angibt. Der Standardwert ist `"readwrite"`.
        Mögliche Werte sind:
        - `"read-only"`
          - : Mehrere `FileSystemSyncAccessHandle`-Objekte können gleichzeitig auf einer Datei geöffnet werden (zum Beispiel bei Verwendung derselben App in mehreren Tabs), vorausgesetzt, sie sind alle im `"read-only"`-Modus geöffnet. Einmal geöffnet, können leseähnliche Methoden auf den Handles aufgerufen werden — [`read()`](/de/docs/Web/API/FileSystemSyncAccessHandle/read), [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize) und [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close).
        - `"readwrite"`
          - : Nur ein `FileSystemSyncAccessHandle`-Objekt kann auf einer Datei geöffnet werden. Der Versuch, weitere Handles zu öffnen, bevor das erste Handle geschlossen ist, führt zu einer `NoModificationAllowedError`-Ausnahme. Sobald es geöffnet ist, kann jede verfügbare Methode auf dem Handle aufgerufen werden.
        - `"readwrite-unsafe"`
          - : Mehrere `FileSystemSyncAccessHandle`-Objekte können gleichzeitig auf einer Datei geöffnet werden, vorausgesetzt, sie sind alle im `"readwrite-unsafe"`-Modus geöffnet. Einmal geöffnet, kann jede verfügbare Methode auf den Handles aufgerufen werden.

### Rückgabewert

Ein {{jsxref('Promise')}}, das in ein [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)-Objekt aufgelöst wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) für das Handle im `readwrite`-Modus nicht `granted` ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)-Objekt keine Datei im [origin private file system](/de/docs/Web/API/File_System_API/Origin_private_file_system) darstellt.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der aktuelle Eintrag nicht gefunden wird.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser nicht in der Lage ist, eine Sperre auf der mit dem Datei-Handle verbundenen Datei zu erwerben. Dies könnte der Fall sein, wenn `mode` auf `readwrite` gesetzt ist und versucht wird, mehrere Handles gleichzeitig zu öffnen.

## Beispiele

### Grundlegende Verwendung

Die folgende asynchrone Event-Handler-Funktion befindet sich in einem Web Worker. Der darin befindliche Code erstellt ein synchrones Datei-Zugriffs-Handle.

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

Unser [Beispiel der `createSyncAccessHandle()`-Modus-Test](https://createsyncaccesshandle-mode-test.glitch.me/) bietet ein {{htmlelement("input")}}-Feld zum Eingeben von Text und zwei Schaltflächen — eine, um den eingegebenen Text an das Ende einer Datei im origin private file system zu schreiben, und eine, um die Datei zu leeren, wenn sie zu voll wird.

Versuchen Sie das oben gezeigte Demo zu erkunden, mit geöffnetem Browser-Entwicklerkonsole, damit Sie sehen können, was passiert. Wenn Sie versuchen, das Demo in mehreren Browsertabs zu öffnen, werden Sie feststellen, dass mehrere Handles gleichzeitig geöffnet werden können, um gleichzeitig in die Datei zu schreiben. Dies ist der Fall, weil `mode: "readwrite-unsafe"` bei den `createSyncAccessHandle()`-Aufrufen eingestellt ist.

Nachfolgend erläutern wir den Code.

#### HTML

Die beiden {{htmlelement("button")}}-Elemente und das Text-{{htmlelement("input")}}-Feld sehen so aus:

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

Das JavaScript des Haupt-Threads in der HTML-Datei wird unten gezeigt. Wir holen Referenzen zur Schreib-Text-Schaltfläche, der Leeren-Datei-Schaltfläche und dem Texteingabefeld, dann erstellen wir einen neuen Web Worker mit dem [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor. Danach definieren wir zwei Funktionen und setzen sie als Event-Handler auf die Schaltflächen:

- `writeToOPFS()` wird ausgeführt, wenn die Schreib-Text-Schaltfläche geklickt wird. Diese Funktion sendet den eingegebenen Wert des Textfelds an den Worker innerhalb eines Objekts mithilfe der [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage)-Methode, leert dann das Textfeld und macht es bereit für die nächste Eingabe. Beachten Sie, dass das gesendete Objekt auch eine `command: "write"`-Eigenschaft enthält, um anzugeben, dass wir mit dieser Nachricht eine Schreibaktion auslösen möchten.
- `emptyOPFS()` wird ausgeführt, wenn die Leeren-Datei-Schaltfläche geklickt wird. Diese sendet ein Objekt mit der `command: "empty"`-Eigenschaft an den Worker, das angibt, dass die Datei geleert werden soll.

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

Zuerst führen wir eine Funktion namens `initOPFS()` aus, die einen Verweis auf das OPFS-Root mithilfe von [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory) erhält, eine Datei erstellt und ihren Handle mit [`FileSystemDirectoryHandle.getFileHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getFileHandle) zurückgibt und dann ein [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) mit `createSyncAccessHandle()` zurückgibt. Dieser Aufruf enthält die Eigenschaft `mode: "readwrite-unsafe"`, die es mehreren Handles ermöglicht, gleichzeitig auf dieselbe Datei zuzugreifen.

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

Innerhalb der [Message-Event](/de/docs/Web/API/Worker/message_event)-Handler-Funktion des Workers erhalten wir zuerst die Größe der Datei mit [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize). Wir überprüfen dann, ob die in der Nachricht gesendeten Daten eine `command`-Eigenschaft mit dem Wert `"empty"` enthalten. Falls ja, leeren wir die Datei mit [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate) mit einem Wert von `0` und aktualisieren die Dateigröße, die in der Variablen `size` befindet.

Falls die Nachrichtendaten etwas anderes sind, gehen wir folgendermaßen vor:

- Erstellen eines neuen [`TextEncoder`](/de/docs/Web/API/TextEncoder) und [`TextDecoder`](/de/docs/Web/API/TextDecoder) für die Kodierung und Dekodierung des Textinhalts später.
- Kodieren der Nachrichtendaten und Schreiben des Ergebnisses an das Ende der Datei mit [`write()`](/de/docs/Web/API/FileSystemSyncAccessHandle/write), dann Aktualisieren der Dateigröße, die in der Variablen `size` befindet.
- Erstellen eines {{jsxref("DataView")}} zur Aufnahme des Dateiinhalts und Lesen des Inhalts in den DataView mit [`read()`](/de/docs/Web/API/FileSystemSyncAccessHandle/read).
- Dekodieren der DataView-Inhalte und Protokollieren in der Konsole.

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
- [Die File System Access API: Vereinfachung des Zugriffs auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
