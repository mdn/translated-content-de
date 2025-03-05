---
title: FileSystemChangeRecord
slug: Web/API/FileSystemChangeRecord
l10n:
  sourceCommit: b6dacb9087010826a5a7d5b2d7c428e89d8135cf
---

{{APIRef("File System API")}}

Das **`FileSystemChangeRecord`**-Wörterbuch der [File System API](/de/docs/Web/API/File_System_API) enthält Details zu einer einzelnen Änderung, die von einem [`FileSystemObserver`](/de/docs/Web/API/FileSystemObserver) beobachtet wurde.

Das `records`-Argument, das an die Rückruffunktion des Konstruktors [`FileSystemObserver()`](/de/docs/Web/API/FileSystemObserver/FileSystemObserver) übergeben wird, ist ein Array von `FileSystemChangeRecord`-Objekten.

## Instanzeigenschaften

- `changedHandle`

  - : Ein Verweis auf den Dateisystem-Handle, bei dem die Änderung beobachtet wurde.

    - Für das für den Benutzer sichtbare Dateisystem kann dies ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) oder ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) sein.
    - Für das [Origin Private File System](/de/docs/Web/API/File_System_API/Origin_private_file_system) (OPFS) kann es sich um ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle), ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) oder ein [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) handeln.

    Diese Eigenschaft wird `null` sein für Datensätze mit einem Typ `"disappeared"`, `"errored"` oder `"unknown"`.

- `relativePathComponents`
  - : Ein Array, das die Pfadkomponenten enthält, die den relativen Dateipfad vom `root` zum `changedHandle` bilden, einschließlich des `changedHandle`-Dateinamens.
- `relativePathMovedFrom`
  - : Ein Array, das die Pfadkomponenten enthält, die den relativen Dateipfad vom `root` zur vorherigen Position des `changedHandle` bilden, im Falle von Beobachtungen mit einem Typ `"moved"`. Wenn der Typ nicht `"moved"` ist, wird diese Eigenschaft `null` sein.
- `root`
  - : Ein Verweis auf den Root-Dateisystem-Handle, das heißt, auf den, der zur Methode `observe()` übergeben wurde, die die Beobachtung gestartet hat. Auch hier kann es sich um ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle), ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) oder ein [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) handeln.
- `type`
  - : Ein String, der den beobachteten Änderungstyp darstellt. Mögliche Werte sind:
    - `appeared`
      - : Die Datei oder das Verzeichnis wurde erstellt oder in die `root`-Dateistruktur verschoben.
    - `disappeared`
      - : Die Datei oder das Verzeichnis wurde gelöscht oder aus der `root`-Dateistruktur verschoben. Um herauszufinden, welche Datei oder welches Verzeichnis verschwunden ist, können Sie die Eigenschaft `relativePathComponents` abfragen.
    - `errored`
      - : Ein Fehlerzustand ist im beobachteten Verzeichnis aufgetreten. Dies kann passieren, wenn:
        - Die Beobachtung nicht mehr gültig ist. Das kann passieren, wenn der beobachtete Handle (das heißt, das `root` der Beobachtung) gelöscht oder verschoben wird. In diesem Fall wird eine `"disappeared"`-Beobachtung aufgezeichnet, gefolgt von einer `"errored"`-Beobachtung. In solchen Fällen könnten Sie in Erwägung ziehen, die Beobachtung des Dateisystems mit [`FileSystemObserver.disconnect()`](/de/docs/Web/API/FileSystemObserver/disconnect) zu stoppen.
        - Das Maximum an Beobachtungen pro Ursprung erreicht ist. Dieses Limit ist abhängig vom Betriebssystem und vorher nicht bekannt. Wenn dies geschieht, könnte die Website entscheiden, es erneut zu versuchen, obwohl nicht garantiert ist, dass das Betriebssystem genügend Ressourcen freigegeben hat.
        - Die Berechtigung, auf das Verzeichnis- oder Datei-Handle zuzugreifen, entfernt wurde.
    - `modified`
      - : Die Datei oder das Verzeichnis wurde modifiziert.
    - `moved`
      - : Die Datei oder das Verzeichnis wurde innerhalb der `root`-Dateistruktur verschoben.
        > [!NOTE]
        > Unter Windows werden `"moved"`-Beobachtungen zwischen Verzeichnissen nicht unterstützt. Sie werden als `"disappeared"`-Beobachtung im Quellverzeichnis und als `"appeared"`-Beobachtung im Zielverzeichnis gemeldet.
    - `unknown`
      - : Zeigt an, dass einige Beobachtungen verpasst wurden. Wenn Sie Informationen über die verpassten Beobachtungsänderungen herausfinden möchten, könnten Sie auf das Abfragen des beobachteten Verzeichnisses zurückgreifen.

Abhängig vom Betriebssystem werden nicht alle Beobachtungen mit dem gleichen Detaillierungsgrad gemeldet, beispielsweise wenn der Inhalt eines Verzeichnisses rekursiv verändert wird. Im besten Fall erhält die Website einen detaillierten Änderungsdatensatz, der den Typ der Änderung und einen Handle zum betroffenen Pfad enthält. Im schlimmsten Fall erhält die Website einen allgemeineren Änderungsdatensatz (das heißt, einen `"unknown"`-Typ), der dennoch erfordert, dass das Verzeichnis enumeriert wird, um herauszufinden, welcher Handle geändert wurde.

Dies ist immer noch eine Verbesserung gegenüber dem Abfragen, da die Verzeichniseinrichtung nach Bedarf aus der Rückruffunktion heraus gestartet werden kann, anstatt regelmäßig auf Änderungen abfragen zu müssen.

## Beispiele

### Einen `FileSystemObserver` initialisieren

Bevor Sie mit der Beobachtung von Datei- oder Verzeichnisänderungen beginnen können, müssen Sie einen `FileSystemObserver` initialisieren, um die Beobachtungen zu behandeln. Dies geschieht mit dem Konstruktor [`FileSystemObserver()`](/de/docs/Web/API/FileSystemObserver/FileSystemObserver), der eine Rückruffunktion als Argument annimmt:

```js
const observer = new FileSystemObserver(callback);
```

Der [Rückruffunktionskörper](/de/docs/Web/API/FileSystemObserver/FileSystemObserver#callback) kann so spezifiziert werden, dass er Dateisänderungsbeobachtungen auf beliebige Weise zurückgibt und verarbeitet. Jedes Objekt im `records`-Array ist ein `FileSystemChangeRecord`-Objekt:

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

Derzeit nicht Teil einer Spezifikation. Siehe [https://github.com/whatwg/fs/pull/165](https://github.com/whatwg/fs/pull/165) für den relevanten Spezifikations-PR.

## Siehe auch

- [`FileSystemObserver()`](/de/docs/Web/API/FileSystemObserver/FileSystemObserver) Konstruktor
- [File System API](/de/docs/Web/API/File_System_API)
- [Der File System Observer API Origin Trial](https://developer.chrome.com/blog/file-system-observer#stop-observing-the-file-system) auf developer.chrome.com (2024)
