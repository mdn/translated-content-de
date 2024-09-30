---
title: "FileSystemFileHandle: Methode createSyncAccessHandle()"
short-title: createSyncAccessHandle()
slug: Web/API/FileSystemFileHandle/createSyncAccessHandle
l10n:
  sourceCommit: 2b6f99e45534ce662f842d8b4d2f7845492e353c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

Die **`createSyncAccessHandle()`**-Methode der [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, welches in ein [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)-Objekt aufgelöst wird. Dieses Objekt kann verwendet werden, um synchron aus einer Datei zu lesen und in eine Datei zu schreiben. Die synchrone Natur dieser Methode bringt Leistungsvorteile, ist jedoch nur innerhalb von dedizierten [Web Workers](/de/docs/Web/API/Web_Workers_API) für Dateien im [origin privatem Dateisystem](/de/docs/Web/API/File_System_API/Origin_private_file_system) nutzbar.

Das Erstellen eines [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) nimmt eine exklusive Sperre auf die Datei, die mit dem Datei-Handle verknüpft ist. Dies verhindert die Erstellung weiterer [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)s oder [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)s für die Datei, solange das bestehende Zugriffs-Handle nicht geschlossen wird.

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
          - : Mehrere `FileSystemSyncAccessHandle`-Objekte können gleichzeitig auf einer Datei geöffnet werden (zum Beispiel bei Verwendung derselben App in mehreren Tabs), vorausgesetzt, sie sind alle im Modus `"read-only"` geöffnet. Sobald geöffnet, können leseähnliche Methoden auf den Handles aufgerufen werden — [`read()`](/de/docs/Web/API/FileSystemSyncAccessHandle/read), [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize), und [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close).
        - `"readwrite"`
          - : Es kann nur ein `FileSystemSyncAccessHandle`-Objekt auf einer Datei geöffnet werden. Der Versuch, weitere Handles zu öffnen, bevor das erste Handle geschlossen wird, führt zu einer `NoModificationAllowedError`-Ausnahme. Sobald geöffnet, kann jede verfügbare Methode auf dem Handle aufgerufen werden.
        - `"readwrite-unsafe"`
          - : Mehrere `FileSystemSyncAccessHandle`-Objekte können gleichzeitig auf einer Datei geöffnet werden, vorausgesetzt, sie sind alle im Modus `"readwrite-unsafe"` geöffnet. Sobald geöffnet, kann jede verfügbare Methode auf den Handles aufgerufen werden.

### Rückgabewert

Ein {{jsxref('Promise')}} welches in ein [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)-Objekt aufgelöst wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) für das Handle im Modus `readwrite` nicht `granted` ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)-Objekt keine Datei im [origin privatem Dateisystem](/de/docs/Web/API/File_System_API/Origin_private_file_system) repräsentiert.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der aktuelle Eintrag nicht gefunden wird.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser nicht in der Lage ist, eine Sperre auf die Datei zu erwerben, die dem Datei-Handle zugeordnet ist. Dies könnte daran liegen, dass `mode` auf `readwrite` gesetzt ist und versucht wird, mehrere Handles gleichzeitig zu öffnen.

## Beispiele

### Grundlegende Verwendung

Die folgende asynchrone Ereignishandlerfunktion befindet sich in einem Web Worker. Der Codeausschnitt darin erstellt ein synchrones Datei-Zugriffs-Handle.

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

Unser [`createSyncAccessHandle()` mode test](https://createsyncaccesshandle-mode-test.glitch.me/) Beispiel bietet ein {{htmlelement("input")}}-Feld zum Eingeben von Text sowie zwei Schaltflächen — eine, um den eingegebenen Text an das Ende einer Datei im origin privaten Dateisystem zu schreiben, und eine, um die Datei zu leeren, wenn sie zu voll wird.

Versuchen Sie, das obige Demo zu erkunden, mit der geöffneten Entwicklerkonsole im Browser, damit Sie sehen können, was passiert. Wenn Sie versuchen, das Demo in mehreren Browsertabs zu öffnen, werden Sie feststellen, dass mehrere Handles gleichzeitig geöffnet werden können, um gleichzeitig in die Datei zu schreiben. Dies liegt daran, dass in den `createSyncAccessHandle()`-Aufrufen `mode: "readwrite-unsafe"` festgelegt ist.

Im Folgenden werden wir den Code erkunden.

#### HTML

Die zwei {{htmlelement("button")}}-Elemente und das Text-{{htmlelement("input")}}-Feld sehen folgendermaßen aus:

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

Das Haupt-JavaScript im HTML-Dokument ist unten dargestellt. Wir holen Referenzen auf die Schaltfläche zum Schreiben des Textes, die Schaltfläche zum Leeren der Datei und das Texteingabefeld. Dann erstellen wir einen neuen Web Worker mit dem [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor. Wir definieren dann zwei Funktionen und setzen sie als Ereignishandler auf die Schaltflächen:

- `writeToOPFS()` wird ausgeführt, wenn die Schaltfläche zum Schreiben des Textes geklickt wird. Diese Funktion postet den eingegebenen Wert des Textfelds an den Worker innerhalb eines Objekts mithilfe der [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage)-Methode und leert dann das Textfeld für die nächste Eingabe. Beachten Sie, wie das übergebene Objekt auch eine `command: "write"`-Eigenschaft enthält, um anzugeben, dass wir mit dieser Nachricht eine Schreibaktion auslösen möchten.
- `emptyOPFS()` wird ausgeführt, wenn die Schaltfläche zum Leeren der Datei geklickt wird. Dies postet ein Objekt mit einer `command: "empty"`-Eigenschaft an den Worker, um anzugeben, dass die Datei geleert werden soll.

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

Das Worker-JavaScript ist unten dargestellt.

Zuerst führen wir eine Funktion namens `initOPFS()` aus, die eine Referenz auf das OPFS-Wurzelverzeichnis mit [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory) erhält, eine Datei erstellt und deren Handle mit [`FileSystemDirectoryHandle.getFileHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getFileHandle) zurückgibt, und dann ein [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) mit `createSyncAccessHandle()` zurückgibt. Dieser Aufruf enthält die Eigenschaft `mode: "readwrite-unsafe"`, was es ermöglicht, dass mehrere Handles gleichzeitig auf dieselbe Datei zugreifen können.

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

Innerhalb der [Nachrichtenereignis](/de/docs/Web/API/Worker/message_event)-Handler-Funktion des Workers erhalten wir zuerst die Größe der Datei mit [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize). Wir prüfen dann, ob die im Nachrichtendaten enthaltene `command`-Eigenschaft den Wert `"empty"` hat. Falls ja, leeren wir die Datei mit [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate) mit einem Wert von `0` und aktualisieren die Dateigröße, die in der `size`-Variablen enthalten ist.

Wenn die Nachrichtendaten etwas anderes sind, dann:

- Erstellen wir einen neuen [`TextEncoder`](/de/docs/Web/API/TextEncoder) und [`TextDecoder`](/de/docs/Web/API/TextDecoder), um das Textinhalts-Encoding und -Decoding später zu handhaben.
- Codieren wir die Nachrichtendaten und schreiben das Ergebnis an das Ende der Datei mit [`write()`](/de/docs/Web/API/FileSystemSyncAccessHandle/write), dann aktualisieren wir die Dateigröße, die in der `size`-Variablen enthalten ist.
- Erstellen wir eine {{jsxref("DataView")}}, um den Dateiinhalt zu enthalten, und lesen den Inhalt in diese mit [`read()`](/de/docs/Web/API/FileSystemSyncAccessHandle/read).
- Dekodieren wir den Inhalt der `DataView` und protokollieren ihn in die Konsole.

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
