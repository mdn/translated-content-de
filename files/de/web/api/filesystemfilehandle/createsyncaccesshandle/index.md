---
title: "FileSystemFileHandle: Methode createSyncAccessHandle()"
short-title: createSyncAccessHandle()
slug: Web/API/FileSystemFileHandle/createSyncAccessHandle
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

Die **`createSyncAccessHandle()`**-Methode der [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle)-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das in ein [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)-Objekt aufgelöst wird. Dieses Objekt kann synchron verwendet werden, um von einer Datei zu lesen und in eine Datei zu schreiben. Die synchrone Natur dieser Methode bringt Leistungsverbesserungen mit sich, kann jedoch nur innerhalb dedizierter [Web Workers](/de/docs/Web/API/Web_Workers_API) für Dateien im [origin-eigenen Dateisystem](/de/docs/Web/API/File_System_API/Origin_private_file_system) verwendet werden.

Das Erstellen eines [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) beansprucht eine exklusive Sperre für die Datei, die mit dem Datei-Handle verknüpft ist. Dies verhindert die Erstellung weiterer [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)s oder [`FileSystemWritableFileStream`](/de/docs/Web/API/FileSystemWritableFileStream)s für die Datei, bis das bestehende Zugriffs-Handle geschlossen wird.

## Syntax

```js-nolint
createSyncAccessHandle()
createSyncAccessHandle(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `mode` {{optional_inline}} {{non-standard_inline}}
      - : Ein String, der den Sperrmodus für das Zugriffs-Handle angibt. Der Standardwert ist `"readwrite"`. Mögliche Werte sind:
        - `"read-only"`
          - : Mehrere `FileSystemSyncAccessHandle`-Objekte können gleichzeitig auf einer Datei geöffnet werden (zum Beispiel, wenn dieselbe App in mehreren Tabs verwendet wird), vorausgesetzt, sie werden alle im `"read-only"`-Modus geöffnet. Sobald sie geöffnet sind, können leseartige Methoden auf den Handles aufgerufen werden — [`read()`](/de/docs/Web/API/FileSystemSyncAccessHandle/read), [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize) und [`close()`](/de/docs/Web/API/FileSystemSyncAccessHandle/close).
        - `"readwrite"`
          - : Es kann nur ein `FileSystemSyncAccessHandle`-Objekt auf einer Datei geöffnet werden. Der Versuch, nachfolgende Handles zu öffnen, bevor das erste Handle geschlossen ist, führt dazu, dass eine `NoModificationAllowedError`-Ausnahme ausgelöst wird. Sobald geöffnet, kann jede verfügbare Methode auf dem Handle aufgerufen werden.
        - `"readwrite-unsafe"`
          - : Mehrere `FileSystemSyncAccessHandle`-Objekte können gleichzeitig auf einer Datei geöffnet werden, vorausgesetzt, sie werden alle im `"readwrite-unsafe"`-Modus geöffnet. Sobald geöffnet, kann jede verfügbare Methode auf den Handles aufgerufen werden.

### Rückgabewert

Ein {{jsxref('Promise')}}, das in ein [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)-Objekt aufgelöst wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`PermissionStatus.state`](/de/docs/Web/API/PermissionStatus/state) für das Handle im `readwrite`-Modus nicht `granted` ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle)-Objekt keine Datei im [origin-eigenen Dateisystem](/de/docs/Web/API/File_System_API/Origin_private_file_system) repräsentiert.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der aktuelle Eintrag nicht gefunden wird.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Browser keine Sperre auf die Datei erlangen kann, die mit dem Datei-Handle verknüpft ist. Dies könnte daran liegen, dass `mode` auf `readwrite` gesetzt ist und versucht wird, mehrere Handles gleichzeitig zu öffnen.

## Beispiele

### Grundlegende Nutzung

Der folgende asynchrone Event-Handler wird innerhalb eines Web Workers enthalten. Der darin enthaltene Codeausschnitt erstellt ein synchrones Datei-Zugriffs-Handle.

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

### Vollständiges Beispiel mit der `mode`-Option

Unser [Beispiel zur `createSyncAccessHandle()`-Modustest](https://createsyncaccesshandle-mode-test.glitch.me/) bietet ein {{htmlelement("input")}}-Feld zur Eingabe von Text und zwei Schaltflächen — eine zum Schreiben des eingegebenen Textes an das Ende einer Datei im origin-eigenen Dateisystem und eine zum Leeren der Datei, wenn sie zu voll wird.

Versuchen Sie, die Demo oben zu erkunden, mit der geöffneten Entwicklerkonsole des Browsers, um zu sehen, was passiert. Wenn Sie versuchen, die Demo in mehreren Browser-Tabs zu öffnen, werden Sie feststellen, dass mehrere Handles gleichzeitig geöffnet werden können, um zur selben Zeit in die Datei zu schreiben. Dies liegt daran, dass `mode: "readwrite-unsafe"` in den `createSyncAccessHandle()`-Aufrufen gesetzt wird.

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

Das Haupt-JavaScript im HTML-Dokument wird unten gezeigt. Wir holen uns Referenzen zu der Schaltfläche zum Schreiben von Text, der Schaltfläche zum Leeren der Datei und dem Texteingabefeld, dann erstellen wir einen neuen Web Worker mit dem [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor. Wir definieren dann zwei Funktionen und setzen sie als Event-Handler auf die Schaltflächen:

- `writeToOPFS()` wird ausgeführt, wenn die Schaltfläche zum Schreiben von Text geklickt wird. Diese Funktion postet den eingegebenen Wert des Textfelds an den Worker innerhalb eines Objektes über die Methode [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage), dann wird das Textfeld geleert und für den nächsten Eintrag vorbereitet. Beachten Sie, wie das übergebene Objekt auch eine `command: "write"`-Eigenschaft enthält, um anzugeben, dass wir eine Schreibaktion mit dieser Nachricht auslösen möchten.
- `emptyOPFS()` wird ausgeführt, wenn die Schaltfläche zum Leeren der Datei geklickt wird. Diese postet ein Objekt mit einer `command: "empty"`-Eigenschaft an den Worker, der angibt, dass die Datei geleert werden soll.

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

Zuerst führen wir eine Funktion namens `initOPFS()` aus, die eine Referenz zum OPFS-Stamm mit [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory) erhält, eine Datei erstellt und deren Handle mit [`FileSystemDirectoryHandle.getFileHandle()`](/de/docs/Web/API/FileSystemDirectoryHandle/getFileHandle) zurückgibt, und dann ein [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) mit `createSyncAccessHandle()` zurückgibt. Dieser Aufruf enthält die Eigenschaft `mode: "readwrite-unsafe"`, die es ermöglicht, dass mehrere Handles gleichzeitig auf dieselbe Datei zugreifen.

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

Innerhalb der [Nachrichten-Ereignis](/de/docs/Web/API/Worker/message_event)-Handler-Funktion des Workers holen wir uns zuerst die Größe der Datei mit [`getSize()`](/de/docs/Web/API/FileSystemSyncAccessHandle/getSize). Dann überprüfen wir, ob die im Message-Daten gesendeten Daten eine `command`-Eigenschaft mit dem Wert `"empty"` enthalten. Wenn ja, leeren wir die Datei mit [`truncate()`](/de/docs/Web/API/FileSystemSyncAccessHandle/truncate) mit einem Wert von `0` und aktualisieren die Dateigröße, die in der Variablen `size` enthalten ist.

Wenn die Nachrichten-Daten etwas anderes sind, dann:

- Erstellen wir einen neuen [`TextEncoder`](/de/docs/Web/API/TextEncoder) und [`TextDecoder`](/de/docs/Web/API/TextDecoder), um später den Textinhalt zu kodieren und zu dekodieren.
- Kodieren wir die Nachrichtendaten und schreiben das Ergebnis an das Ende der Datei mit [`write()`](/de/docs/Web/API/FileSystemSyncAccessHandle/write), dann aktualisieren wir die Dateigröße, die in der Variablen `size` enthalten ist.
- Erstellen wir eine {{jsxref("DataView")}}, um die Dateiinhalte zu enthalten, und lesen den Inhalt mit [`read()`](/de/docs/Web/API/FileSystemSyncAccessHandle/read) in diese ein.
- Dekodieren wir den Inhalt des `DataView` und protokollieren ihn in die Konsole.

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
