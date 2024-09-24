---
title: "FileSystemFileHandle: Methode createSyncAccessHandle()"
short-title: createSyncAccessHandle()
slug: Web/API/FileSystemFileHandle/createSyncAccessHandle
l10n:
  sourceCommit: 2b6f99e45534ce662f842d8b4d2f7845492e353c
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

Die **`createSyncAccessHandle()`**-Methode des {{domxref("FileSystemFileHandle")}}-Interfaces gibt ein {{jsxref('Promise')}} zurück, das ein {{domxref('FileSystemSyncAccessHandle')}}-Objekt auflöst. Dieses kann verwendet werden, um synchron von einer Datei zu lesen und in eine Datei zu schreiben. Der synchrone Charakter dieser Methode bietet Leistungsverbesserungen, kann jedoch nur innerhalb dedizierter [Web Worker](/de/docs/Web/API/Web_Workers_API) für Dateien im [origin private file system](/de/docs/Web/API/File_System_API/Origin_private_file_system) genutzt werden.

Das Erstellen eines {{domxref('FileSystemSyncAccessHandle')}} nimmt eine exklusive Sperre für die mit dem Datei-Handle verknüpfte Datei. Dies verhindert die Erstellung weiterer {{domxref('FileSystemSyncAccessHandle')}} oder {{domxref('FileSystemWritableFileStream')}} für die Datei, bis das bestehende Zugriffs-Handle geschlossen ist.

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
          - : Mehrere `FileSystemSyncAccessHandle`-Objekte können gleichzeitig auf eine Datei geöffnet werden (zum Beispiel bei Verwendung derselben Anwendung in mehreren Tabs), vorausgesetzt, sie werden alle im Modus `"read-only"` geöffnet. Einmal geöffnet, können leseähnliche Methoden auf den Handles aufgerufen werden — {{domxref("FileSystemSyncAccessHandle.read", "read()")}}, {{domxref("FileSystemSyncAccessHandle.getSize", "getSize()")}} und {{domxref("FileSystemSyncAccessHandle.close", "close()")}}.
        - `"readwrite"`
          - : Es kann nur ein `FileSystemSyncAccessHandle`-Objekt auf eine Datei geöffnet werden. Der Versuch, weitere Handles zu öffnen, bevor das erste geschlossen ist, führt zu einer `NoModificationAllowedError`-Ausnahme. Einmal geöffnet, können alle verfügbaren Methoden auf dem Handle aufgerufen werden.
        - `"readwrite-unsafe"`
          - : Mehrere `FileSystemSyncAccessHandle`-Objekte können gleichzeitig auf eine Datei geöffnet werden, vorausgesetzt, sie werden alle im Modus `"readwrite-unsafe"` geöffnet. Einmal geöffnet, können alle verfügbaren Methoden auf den Handles aufgerufen werden.

### Rückgabewert

Ein {{jsxref('Promise')}} welches ein {{domxref('FileSystemSyncAccessHandle')}}-Objekt auflöst.

### Ausnahmen

- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der {{domxref('PermissionStatus.state')}} für das Handle im Modus `readwrite` nicht `granted` ist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das {{domxref('FileSystemSyncAccessHandle')}}-Objekt keine Datei im [origin private file system](/de/docs/Web/API/File_System_API/Origin_private_file_system) darstellt.
- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der aktuelle Eintrag nicht gefunden wird.
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Browser die Sperre für die mit dem Datei-Handle verknüpfte Datei nicht erlangen kann. Dies könnte der Fall sein, wenn `mode` auf `readwrite` gesetzt ist und versucht wird, gleichzeitig mehrere Handles zu öffnen.

## Beispiele

### Grundlegende Verwendung

Die folgende asynchrone Ereignis-Handler-Funktion ist in einem Web Worker enthalten. Der darin befindliche Code erstellt ein synchrones Datei-Zugriffs-Handle.

```js
onmessage = async (e) => {
  // Nachricht empfangen im Worker vom Hauptskript
  const message = e.data;

  // Handle zur Entwurfsdatei bekommen
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  // Sync-Zugriffs-Handle erhalten
  const accessHandle = await draftHandle.createSyncAccessHandle();

  // …

  // FileSystemSyncAccessHandle immer schließen, wenn fertig.
  accessHandle.close();
};
```

### Vollständiges Beispiel mit `mode`-Option

Unser Beispiel [`createSyncAccessHandle()` Modus-Test](https://createsyncaccesshandle-mode-test.glitch.me/) bietet ein {{htmlelement("input")}}-Feld zum Eingeben von Text und zwei Schaltflächen — eine, um den eingegebenen Text an das Ende einer Datei im origin private file system zu schreiben, und eine, um die Datei zu leeren, wenn sie zu voll wird.

Versuchen Sie, das obige Demo zu erkunden, mit geöffneten Entwicklerkonsolen im Browser, damit Sie sehen können, was passiert. Wenn Sie versuchen, das Demo in mehreren Browser-Tabs zu öffnen, werden Sie feststellen, dass mehrere Handles gleichzeitig geöffnet werden können, um gleichzeitig in die Datei zu schreiben. Dies ist, weil `mode: "readwrite-unsafe"` auf den `createSyncAccessHandle()`-Aufrufen gesetzt ist.

Nachfolgend erkunden wir den Code.

#### HTML

Die beiden {{htmlelement("button")}}-Elemente und das Text-{{htmlelement("input")}}-Feld sehen so aus:

```html
<ol>
  <li>
    <label for="filetext">Geben Sie den Text ein, der in die Datei geschrieben werden soll:</label>
    <input type="text" id="filetext" name="filetext" />
  </li>
  <li>
    Schreiben Sie Ihren Text in die Datei: <button class="write">Text schreiben</button>
  </li>
  <li>
    Löschen Sie die Datei, wenn sie zu voll wird:
    <button class="empty">Datei leeren</button>
  </li>
</ol>
```

#### Haupt-JavaScript

Das JavaScript des Hauptthreads innerhalb der HTML-Datei wird unten gezeigt. Wir holen Referenzen zu der Schaltfläche zum Texteingeben, der Schaltfläche zum Leeren der Datei und dem Texteingabefeld und erstellen dann einen neuen Web Worker mit dem {{domxref("Worker.Worker", "Worker()")}}-Konstruktor. Dann definieren wir zwei Funktionen und setzen sie als Ereignis-Handler auf den Schaltflächen:

- `writeToOPFS()` wird ausgeführt, wenn die Schaltfläche zum Texteingeben geklickt wird. Diese Funktion sendet den eingegebenen Wert des Textfeldes an den Worker innerhalb eines Objekts mit der {{domxref("Worker.postMessage()")}}-Methode und leert dann das Textfeld, bereit für die nächste Eingabe. Beachten Sie, dass das übergebene Objekt auch eine `command: "write"`-Eigenschaft enthält, um anzugeben, dass wir mit dieser Nachricht eine Schreibaktion auslösen wollen.
- `emptyOPFS()` wird ausgeführt, wenn die Schaltfläche zum Leeren der Datei geklickt wird. Diese sendet ein Objekt an den Worker, das die Eigenschaft `command: "empty"` enthält und angibt, dass die Datei geleert werden soll.

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
  console.log("Hauptskript: Text an Worker gesendet");
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

Zu Beginn führen wir eine Funktion namens `initOPFS()` aus, die eine Referenz auf das OPFS-Root mittels {{domxref("StorageManager.getDirectory()")}} bekommt, eine Datei erstellt und deren Handle zurückgibt mit {{domxref("FileSystemDirectoryHandle.getFileHandle()")}}, und dann ein {{domxref("FileSystemSyncAccessHandle")}} zurückgibt, indem `createSyncAccessHandle()` verwendet wird. Dieser Aufruf enthält die Eigenschaft `mode: "readwrite-unsafe"`, die es erlaubt, dass mehrere Handles gleichzeitig auf dieselbe Datei zugreifen.

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

Innerhalb der [message event](/de/docs/Web/API/Worker/message_event)-Handler-Funktion des Workers holen wir zuerst die Größe der Datei mit {{domxref("FileSystemSyncAccessHandle.getSize", "getSize()")}}. Dann prüfen wir, ob die gesendeten Daten im Message-Objekt einen Wert für die Eigenschaft `command` von `"empty"` enthalten. Falls ja, leeren wir die Datei mit {{domxref("FileSystemSyncAccessHandle.truncate", "truncate()")}} auf einen Wert von `0` und aktualisieren die Dateigröße, die in der Variablen `size` enthalten ist.

Wenn die Daten der Nachricht etwas anderes sind, dann:

- Erstellen wir einen neuen {{domxref("TextEncoder")}} und {{domxref("TextDecoder")}} zur späteren Handhabung der Kodierung und Dekodierung der Textinhalte.
- Kodieren wir die Nachrichtendaten und schreiben das Ergebnis ans Ende der Datei mit {{domxref("FileSystemSyncAccessHandle.write", "write()")}}, dann aktualisieren wir die Dateigröße, die in der Variablen `size` enthalten ist.
- Erstellen wir eine {{jsxref("DataView")}}, um die Dateiinhalte zu enthalten, und lesen diese mit {{domxref("FileSystemSyncAccessHandle.read", "read()")}} hinein.
- Dekodieren wir die Inhalte der `DataView` und protokollieren diese in der Konsole.

```js
onmessage = function (e) {
  console.log("Worker: Nachricht vom Hauptskript empfangen");

  // Aktuelle Größe der Datei ermitteln
  let size = accessHandle.getSize();

  if (e.data.command === "empty") {
    // Datei auf 0 Bytes kürzen
    accessHandle.truncate(0);

    // Aktuelle Größe der Datei ermitteln
    size = accessHandle.getSize();
  } else {
    const textEncoder = new TextEncoder();
    const textDecoder = new TextDecoder();

    // Inhalt kodieren, um in die Datei zu schreiben
    const content = textEncoder.encode(e.data.content);
    // Schreiben Sie den Inhalt am Ende der Datei
    accessHandle.write(content, { at: size });

    // Aktuelle Größe der Datei ermitteln
    size = accessHandle.getSize();

    // Eine Datenansicht der Länge der Datei vorbereiten
    const dataView = new DataView(new ArrayBuffer(size));

    // Die gesamte Datei in die Datenansicht einlesen
    accessHandle.read(dataView, { at: 0 });

    // Protokollieren Sie den aktuellen Dateinhalt in die Konsole
    console.log("Dateiinhalte: " + textDecoder.decode(dataView));

    // Änderungen übertragen
    accessHandle.flush();
  }

  // Protokollieren Sie die Größe der Datei in der Konsole
  console.log("Größe: " + size);
};
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
