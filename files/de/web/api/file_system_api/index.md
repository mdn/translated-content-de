---
title: Dateisystem-API
slug: Web/API/File_System_API
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{securecontext_header}}{{DefaultAPISidebar("File System API")}}{{AvailableInWorkers}}

Die **Dateisystem-API** — mit Erweiterungen über die [**File System Access API**](https://wicg.github.io/file-system-access/) zum Zugriff auf Dateien im Dateisystem des Geräts — ermöglicht Lese-, Schreib- und Dateiverwaltungsfunktionen.

## Konzepte und Nutzung

Diese API ermöglicht die Interaktion mit Dateien auf einem lokalen Gerät des Nutzers oder auf einem vom Nutzer zugänglichen Netzwerk-Dateisystem. Die Kernfunktionen dieser API umfassen das Lesen von Dateien, das Schreiben oder Speichern von Dateien und den Zugriff auf die Verzeichnisstruktur.

Die meiste Interaktion mit Dateien und Verzeichnissen erfolgt über Handles. Eine übergeordnete {{domxref('FileSystemHandle')}}-Klasse hilft dabei, zwei untergeordnete Klassen zu definieren: {{domxref('FileSystemFileHandle')}} und {{domxref('FileSystemDirectoryHandle')}}, für Dateien bzw. Verzeichnisse.

Die Handles repräsentieren eine Datei oder ein Verzeichnis auf dem System des Nutzers. Sie können zuerst auf sie zugreifen, indem Sie dem Nutzer einen Datei- oder Verzeichnisauswähler mit Methoden wie {{domxref('window.showOpenFilePicker()')}} und {{domxref('window.showDirectoryPicker()')}} zeigen. Sobald diese aufgerufen werden, erscheint der Dateiauswähler, und der Nutzer wählt entweder eine Datei oder ein Verzeichnis aus. Sobald dies erfolgreich geschieht, wird ein Handle zurückgegeben.

Sie können auch über folgende Wege auf Datei-Handles zugreifen:

- Die Methode {{domxref('DataTransferItem.getAsFileSystemHandle()')}} der {{domxref('HTML Drag and Drop API', '', '', 'nocode')}}.
- Die [File Handling API](https://developer.chrome.com/docs/capabilities/web-apis/file-handling).

Jedes Handle bietet seine eigene Funktionalität, und es gibt einige Unterschiede je nachdem, welches Sie verwenden (siehe den Abschnitt [Interfaces](#schnittstellen) für spezifische Details). Sie können dann auf die Dateidaten oder Informationen (einschließlich Unterelementen) des ausgewählten Verzeichnisses zugreifen. Diese API eröffnet neue Funktionalitäten, die dem Web bisher gefehlt haben. Dennoch wurde bei der Gestaltung der API höchstes Augenmerk auf die Sicherheit gelegt, und der Zugriff auf Datei-/Verzeichnisdaten ist nicht gestattet, es sei denn, der Nutzer erlaubt dies ausdrücklich (beachten Sie, dass dies nicht der Fall ist beim [origin-internen Dateisystem](#origin-internes_dateisystem), da dieses für den Nutzer nicht sichtbar ist).

> [!NOTE]
> Die verschiedenen Ausnahmen, die beim Verwenden der Features dieser API auftreten können, sind auf den relevanten Seiten aufgelistet, wie in der Spezifikation definiert. Die Situation wird jedoch durch die Interaktion der API mit dem zugrunde liegenden Betriebssystem komplexer. Es wurde ein Vorschlag gemacht, die [Fehlerzuordnungen in der Spezifikation aufzulisten](https://github.com/whatwg/fs/issues/57), welcher nützliche verwandte Informationen enthält.

> [!NOTE]
> Objekte, die auf {{domxref("FileSystemHandle")}} basieren, können auch in eine Instanz der {{domxref("IndexedDB API", "IndexedDB", "", "nocode")}} Datenbank serialisiert oder über {{domxref("window.postMessage", "postMessage()")}} übertragen werden.

### Origin-internes Dateisystem

Das origin-interne Dateisystem (OPFS) ist ein Speicherschnittpunkt, der als Teil der Dateisystem-API bereitgestellt wird und der Origin der Seite privat ist und nicht wie das reguläre Dateisystem für den Nutzer sichtbar ist. Es bietet Zugriff auf eine spezielle Art von Datei, die hochgradig für Leistung optimiert ist und direkten Schreibzugriff auf ihren Inhalt bietet.

Lesen Sie unseren Artikel über das [origin-interne Dateisystem](/de/docs/Web/API/File_System_API/Origin_private_file_system) für Anleitungen zu seiner Verwendung.

### Dateien speichern

- Im Falle der asynchronen Handles verwenden Sie die {{domxref('FileSystemWritableFileStream')}}-Schnittstelle. Sobald die Daten, die Sie speichern möchten, im Format eines {{domxref('Blob')}}, {{jsxref("String")}}-Objektes, String-Literals oder {{jsxref('ArrayBuffer', 'buffer')}} vorliegen, können Sie einen Stream öffnen und die Daten in eine Datei speichern. Dies kann die bestehende Datei oder eine neue Datei sein.
- Im Fall des synchronen {{domxref('FileSystemSyncAccessHandle')}} schreiben Sie Änderungen an einer Datei mithilfe der {{domxref('FileSystemSyncAccessHandle.write', 'write()')}}-Methode. Optional können Sie auch {{domxref('FileSystemSyncAccessHandle.flush', 'flush()')}} aufrufen, wenn Sie die Änderungen zu einem bestimmten Zeitpunkt auf die Festplatte schreiben müssen (ansonsten überlassen Sie dies dem zugrunde liegenden Betriebssystem, welches dies nach eigenem Ermessen handhabt, was in den meisten Fällen in Ordnung sein sollte).

## Schnittstellen

- {{domxref("FileSystemHandle")}}
  - : Ein Objekt, das einen Datei- oder Verzeichniseintrag repräsentiert. Mehrere Handles können denselben Eintrag repräsentieren. Meistens arbeitet man nicht direkt mit `FileSystemHandle`, sondern mit seinen untergeordneten Schnittstellen {{domxref('FileSystemFileHandle')}} und {{domxref('FileSystemDirectoryHandle')}}.
- {{domxref("FileSystemFileHandle")}}
  - : Bietet ein Handle zu einem Dateisystemeintrag.
- {{domxref("FileSystemDirectoryHandle")}}
  - : Bietet ein Handle zu einem Verzeichniseintrag des Dateisystems.
- {{domxref("FileSystemSyncAccessHandle")}}
  - : Bietet ein synchrones Handle zu einem Dateisystemeintrag, das direkt auf einer einzigen Datei auf der Festplatte arbeitet. Die synchrone Natur der Datei-Lese- und Schreibvorgänge ermöglicht eine höhere Leistung für kritische Methoden in Kontexten, in denen asynchrone Operationen mit hohem Overhead verbunden sind, z.B. [WebAssembly](/de/docs/WebAssembly). Diese Klasse ist nur innerhalb dedizierter [Web Worker](/de/docs/Web/API/Web_Workers_API) für Dateien im [origin-internen Dateisystem](#origin-internes_dateisystem) zugänglich.
- {{domxref("FileSystemWritableFileStream")}}
  - : Ein {{domxref('WritableStream')}}-Objekt mit zusätzlichen Komfortmethoden, das auf einer einzigen Datei auf der Festplatte arbeitet.

### Erweiterungen zu anderen Schnittstellen

- {{domxref("Window.showDirectoryPicker()")}}
  - : Zeigt einen Verzeichnisauswähler an, der es dem Nutzer ermöglicht, ein Verzeichnis auszuwählen.
- {{domxref("Window.showOpenFilePicker()")}}
  - : Zeigt einen Dateiauswähler an, der es einem Nutzer ermöglicht, eine Datei oder mehrere Dateien auszuwählen.
- {{domxref("Window.showSaveFilePicker()")}}
  - : Zeigt einen Dateiauswähler an, der es einem Nutzer ermöglicht, eine Datei zu speichern.
- {{domxref("DataTransferItem.getAsFileSystemHandle()")}}
  - : Gibt ein {{domxref('FileSystemFileHandle')}} zurück, wenn das gezogene Element eine Datei ist, oder ein {{domxref('FileSystemDirectoryHandle')}} zurück, wenn das gezogene Element ein Verzeichnis ist.
- {{domxref("StorageManager.getDirectory()")}}
  - : Wird verwendet, um eine Referenz zu einem {{domxref("FileSystemDirectoryHandle")}}-Objekt zu erhalten, das den Zugriff auf ein Verzeichnis und dessen Inhalt ermöglicht, das im [origin-internen Dateisystem](/de/docs/Web/API/File_System_API/Origin_private_file_system) gespeichert ist. Gibt ein {{jsxref('Promise')}} zurück, das mit einem {{domxref("FileSystemDirectoryHandle")}}-Objekt erfüllt wird.

## Beispiele

### Zugriff auf Dateien

Der folgende Code ermöglicht es dem Benutzer, eine Datei aus dem Dateiauswähler auszuwählen.

```js
async function getFile() {
  // Öffnen Sie den Dateiauswähler und zerstören Sie das Ergebnis für das erste Handle
  const [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
  return file;
}
```

Die folgende asynchrone Funktion präsentiert einen Dateiauswähler und verwendet die Methode `getFile()`, um den Inhalt abzurufen, sobald eine Datei ausgewählt wurde.

```js
const pickerOpts = {
  types: [
    {
      description: "Bilder",
      accept: {
        "image/*": [".png", ".gif", ".jpeg", ".jpg"],
      },
    },
  ],
  excludeAcceptAllOption: true,
  multiple: false,
};

async function getTheFile() {
  // Öffnen Sie den Dateiauswähler und zerstören Sie das Ergebnis für das erste Handle
  const [fileHandle] = await window.showOpenFilePicker(pickerOpts);

  // Dateiinhalt abrufen
  const fileData = await fileHandle.getFile();
}
```

### Zugang zu Verzeichnissen

Das folgende Beispiel gibt ein Verzeichnishandle mit dem angegebenen Namen zurück. Falls das Verzeichnis nicht existiert, wird es erstellt.

```js
const dirName = "directoryToGetName";

// vorausgesetzt, wir haben ein Verzeichnishandle: 'currentDirHandle'
const subDir = currentDirHandle.getDirectoryHandle(dirName, { create: true });
```

Die folgende asynchrone Funktion verwendet `resolve()`, um den Pfad zu einer ausgewählten Datei relativ zu einem angegebenen Verzeichnishandle zu finden.

```js
async function returnPathDirectories(directoryHandle) {
  // Ein Dateihandle erhalten, indem ein Dateiauswähler angezeigt wird:
  const [handle] = await self.showOpenFilePicker();
  if (!handle) {
    // Benutzer hat abgebrochen oder es gelang nicht, eine Datei zu öffnen.
    return;
  }

  // Überprüfen Sie, ob das Handle sich innerhalb unseres Verzeichnishandles befindet
  const relativePaths = await directoryHandle.resolve(handle);

  if (relativePaths === null) {
    // Nicht innerhalb des Verzeichnishandles
  } else {
    // relativePaths ist ein Array von Namen, das den relativen Pfad angibt

    for (const name of relativePaths) {
      // jede Eingabe protokollieren
      console.log(name);
    }
  }
}
```

### Schreiben in Dateien

Die folgende asynchrone Funktion öffnet den Dateiauswahl-Dialog zum Speichern, der ein {{domxref('FileSystemFileHandle')}} zurückgibt, sobald eine Datei ausgewählt ist. Ein beschreibbarer Stream wird dann mittels der Methode {{domxref('FileSystemFileHandle.createWritable()')}} erstellt.

Ein benutzerdefinierter {{domxref('Blob')}} wird dann in den Stream geschrieben, der anschließend geschlossen wird.

```js
async function saveFile() {
  // Erstellen Sie ein neues Handle
  const newHandle = await window.showSaveFilePicker();

  // Erstellen Sie einen FileSystemWritableFileStream, in den geschrieben werden kann
  const writableStream = await newHandle.createWritable();

  // Unsere Datei schreiben
  await writableStream.write(imgBlob);

  // Die Datei schließen und den Inhalt auf die Festplatte schreiben.
  await writableStream.close();
}
```

Das Folgende zeigt verschiedene Beispiele von Optionen, die in die `write()`-Methode übergeben werden können.

```js
// verwenden Sie einfach die Daten (ohne Optionen)
writableStream.write(data);

// schreibt die Daten ab der angegebenen Position in den Stream
writableStream.write({ type: "write", position, data });

// aktualisiert den aktuellen Datei-Cursor-Offset auf die angegebene Position
writableStream.write({ type: "seek", position });

// ändert die Dateigröße auf eine neue Länge
writableStream.write({ type: "truncate", size });
```

### Synchrones Lesen und Schreiben von Dateien im OPFS

Dieses Beispiel liest und schreibt synchron eine Datei in das [origin-interne Dateisystem](#origin-internes_dateisystem).

Die folgende asynchrone Ereignis-Handler-Funktion wird innerhalb eines Web Workers aufgerufen. Beim Empfang einer Nachricht vom Hauptthread:

- Erstellt einen synchronen Datei-Zugriffs-Handle.
- Ermittelt die Größe der Datei und erstellt einen {{jsxref("ArrayBuffer")}} dafür.
- Liest den Dateiinhaltt in den Puffer.
- Kodiert die Nachricht und schreibt sie ans Ende der Datei.
- Speichert die Änderungen auf die Festplatte und schließt den Zugriffs-Handle.

```js
onmessage = async (e) => {
  // Nachricht abrufen, die aus dem Hauptskript an die Arbeit gesendet wurde
  const message = e.data;

  // Handle für Entwurfsdatei im OPFS erhalten
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  // Erstellen Sie einen synchronen Zugriffs-Handle
  const accessHandle = await draftHandle.createSyncAccessHandle();

  // Größe der Datei ermitteln.
  const fileSize = accessHandle.getSize();
  // Dateiinhalte in einen Puffer einlesen.
  const buffer = new DataView(new ArrayBuffer(fileSize));
  const readBuffer = accessHandle.read(buffer, { at: 0 });

  // Schreiben Sie die Nachricht ans Ende der Datei.
  const encoder = new TextEncoder();
  const encodedMessage = encoder.encode(message);
  const writeBuffer = accessHandle.write(encodedMessage, { at: readBuffer });

  // Änderungen auf die Festplatte speichern.
  accessHandle.flush();

  // FileSystemSyncAccessHandle immer schließen, wenn fertig.
  accessHandle.close();
};
```

> [!NOTE]
> In früheren Versionen der Spezifikation wurden {{domxref("FileSystemSyncAccessHandle.close()", "close()")}}, {{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}, {{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}} und {{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}} unvorteilhaft als asynchrone Methoden spezifiziert. Dies wurde nun [geändert](https://github.com/whatwg/fs/issues/7), aber einige Browser unterstützen noch die asynchronen Versionen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die File System Access API: Vereinfachung des Zugriffs auf lokale Dateien](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
- [Das origin-interne Dateisystem](https://web.dev/articles/origin-private-file-system)
