---
title: FileSystemChangeRecord
slug: Web/API/FileSystemChangeRecord
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("File System API")}}

Das **`FileSystemChangeRecord`**-Wörterbuch der [File System API](/de/docs/Web/API/File_System_API) enthält Details zu einer einzelnen Änderung, die von einem [`FileSystemObserver`](/de/docs/Web/API/FileSystemObserver) beobachtet wurde.

Das `records`-Argument, das an die Rückruffunktion des Konstruktors [`FileSystemObserver()`](/de/docs/Web/API/FileSystemObserver/FileSystemObserver) übergeben wird, ist ein Array von `FileSystemChangeRecord`-Objekten.

## Instanz-Eigenschaften

- `changedHandle`

  - : Eine Referenz auf den Dateisystem-Handle, bei dem die Änderung beobachtet wurde.

    - Für das für Benutzer sichtbare Dateisystem kann dies ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) oder ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) sein.
    - Für das [Origin Private File System](/de/docs/Web/API/File_System_API/Origin_private_file_system) (OPFS) kann es ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle), ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) oder ein [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) sein.

    Diese Eigenschaft wird `null` sein für Aufzeichnungen mit einem Typ `"disappeared"`, `"errored"` oder `"unknown"`.

- `relativePathComponents`
  - : Ein Array, das die Pfadkomponenten enthält, die den relativen Dateipfad vom `root` zum `changedHandle` bilden, einschließlich des `changedHandle`-Dateinamens.
- `relativePathMovedFrom`
  - : Ein Array, das die Pfadkomponenten enthält, die den relativen Dateipfad vom `root` zum früheren Speicherort des `changedHandle` bilden, im Fall von Beobachtungen mit einem Typ `"moved"`. Wenn der Typ nicht `"moved"` ist, wird diese Eigenschaft `null` sein.
- `root`
  - : Eine Referenz auf den root-Dateisystem-Handle, also den, der an den `observe()`-Aufruf übergeben wurde, der die Beobachtung gestartet hat. Auch hier kann es sich um ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle), [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) oder [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) handeln.
- `type`
  - : Ein String, der den Typ der beobachteten Änderung darstellt. Mögliche Werte sind:
    - `appeared`
      - : Die Datei oder das Verzeichnis wurde erstellt oder in die `root`-Dateistruktur verschoben.
    - `disappeared`
      - : Die Datei oder das Verzeichnis wurde gelöscht oder aus der `root`-Dateistruktur verschoben. Um herauszufinden, welche Datei oder welches Verzeichnis verschwunden ist, können Sie die Eigenschaft `relativePathComponents` abfragen.
    - `errored`
      - : Ein Fehlerzustand ist im beobachteten Verzeichnis aufgetreten. Dies kann eintreten, wenn:
        - Die Beobachtung nicht mehr gültig ist. Dies kann geschehen, wenn der beobachtete Handle (also der `root` der Beobachtung) gelöscht oder verschoben wird. In diesem Fall wird eine `"disappeared"`-Beobachtung aufgezeichnet, gefolgt von einer `"errored"`-Beobachtung. In solchen Fällen können Sie die Beobachtung des Dateisystems möglicherweise mit [`FileSystemObserver.disconnect()`](/de/docs/Web/API/FileSystemObserver/disconnect) beenden.
        - Das Maximum an Beobachtungen pro Origin erreicht ist. Diese Grenze hängt vom Betriebssystem ab und ist im Voraus nicht bekannt. Wenn dies passiert, kann die Seite entscheiden, erneut zu versuchen, obwohl es keine Garantie gibt, dass das Betriebssystem genügend Ressourcen freigeben wird.
        - Die Berechtigung zum Zugriff auf das Verzeichnishandle oder Dateihandle entfernt wird.
    - `modified`
      - : Die Datei oder das Verzeichnis wurde geändert.
    - `moved`
      - : Die Datei oder das Verzeichnis wurde innerhalb der root-Dateistruktur verschoben.
        > [!NOTE]
        > Unter Windows werden `"moved"`-Beobachtungen nicht zwischen Verzeichnissen unterstützt. Sie werden als `"disappeared"`-Beobachtung im Quellverzeichnis und als `"appeared"`-Beobachtung im Zielverzeichnis gemeldet.
    - `unknown`
      - : Gibt an, dass einige Beobachtungen verpasst wurden. Wenn Sie Informationen darüber erhalten möchten, was sich in den verpassten Beobachtungen geändert hat, können Sie möglicherweise auf das Abfragen des beobachteten Verzeichnisses zurückgreifen.

Abhängig vom Betriebssystem werden nicht alle Beobachtungen mit dem gleichen Detailgrad gemeldet, zum Beispiel wenn sich die Inhalte eines Verzeichnisses rekursiv ändern. Im besten Fall erhält die Website einen detaillierten Änderungsbericht, der den Typ der Änderung und einen Handle zum betroffenen Pfad enthält. Im schlimmsten Fall erhält die Website einen eher generischen Änderungsbericht (d.h. einen `"unknown"` Typ), der dennoch eine Aufzählung des Verzeichnisses erfordert, um herauszufinden, welcher Handle sich geändert hat.

Dies ist dennoch eine Verbesserung gegenüber dem Abfragen, da die Verzeichnisauflistung bedarfsgerecht aus der Rückruffunktion heraus gestartet werden kann, anstatt die Änderungen periodisch abzufragen.

## Beispiele

### Initialisieren eines `FileSystemObserver`

Bevor Sie beginnen können, Änderungen an Dateien oder Verzeichnissen zu beobachten, müssen Sie einen `FileSystemObserver` initialisieren, um die Beobachtungen zu handhaben. Dies erfolgt mit dem [`FileSystemObserver()`](/de/docs/Web/API/FileSystemObserver/FileSystemObserver)-Konstruktor, der eine Rückruffunktion als Argument nimmt:

```js
const observer = new FileSystemObserver(callback);
```

Der [Rückruffunktion](/de/docs/Web/API/FileSystemObserver/FileSystemObserver#callback)-Körper kann spezifiziert werden, um Dateisystemänderungen auf beliebige Weise zurückzugeben und zu verarbeiten. Jedes Objekt im `records`-Array ist ein `FileSystemChangeRecord`-Objekt:

```js
const callback = (records, observer) => {
  for (const record of records) {
    console.log("Change detected:", record);
    const reportContent = `Change observed to ${record.changedHandle.kind} ${record.changedHandle.name}. Type: ${record.type}.`;
    sendReport(reportContent); // Some kind of user-defined reporting function
  }

  observer.disconnect();
};
```

## Spezifikationen

Ist derzeit nicht Teil einer Spezifikation. Siehe [https://github.com/whatwg/fs/pull/165](https://github.com/whatwg/fs/pull/165) für den relevanten Spezifikations-PR.

## Siehe auch

- [`FileSystemObserver()`](/de/docs/Web/API/FileSystemObserver/FileSystemObserver)-Konstruktor
- [File System API](/de/docs/Web/API/File_System_API)
- [Der File System Observer API Origin Trial](https://developer.chrome.com/blog/file-system-observer#stop-observing-the-file-system) auf developer.chrome.com (2024)
