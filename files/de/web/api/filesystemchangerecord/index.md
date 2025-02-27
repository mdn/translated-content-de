---
title: FileSystemChangeRecord
slug: Web/API/FileSystemChangeRecord
l10n:
  sourceCommit: 328a7843ffd9e0afb4d21822d058bb08b17d3445
---

{{APIRef("File System API")}}

Das **`FileSystemChangeRecord`**-Wörterbuch der [File System API](/de/docs/Web/API/File_System_API) enthält Details zu einer einzelnen Änderung, die von einem [`FileSystemObserver`](/de/docs/Web/API/FileSystemObserver) beobachtet wurde.

Das `records`-Argument, das an die Rückruffunktion des Konstruktors von [`FileSystemObserver()`](/de/docs/Web/API/FileSystemObserver/FileSystemObserver) übergeben wird, ist ein Array von `FileSystemChangeRecord`-Objekten.

## Instanzeigenschaften

- `changedHandle`

  - : Eine Referenz auf das Dateisystem-Handle, bei dem die Änderung beobachtet wurde.

    - Für das benutzerbeobachtbare Dateisystem kann dies ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle) oder ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) sein.
    - Für das [Origin Private File System](/de/docs/Web/API/File_System_API/Origin_private_file_system) (OPFS) kann es sich um ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle), ein [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) oder ein [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) handeln.

    Diese Eigenschaft wird `null` sein für Aufzeichnungen mit einem Typ `"disappeared"`, `"errored"` oder `"unknown"`.

- `relativePathComponents`
  - : Ein Array, das die Pfadkomponenten enthält, die den relativen Dateipfad vom `root` zum `changedHandle` ausmachen, einschließlich des `changedHandle`-Dateinamens.
- `relativePathMovedFrom`
  - : Ein Array, das die Pfadkomponenten enthält, die den relativen Dateipfad vom `root` zum früheren Standort des `changedHandle` ausmachen, im Fall von Beobachtungen mit einem Typ `"moved"`. Wenn der Typ nicht `"moved"` ist, wird diese Eigenschaft `null` sein.
- `root`
  - : Eine Referenz auf das Wurzel-Dateisystem-Handle, also das, welches an den `observe()`-Aufruf übergeben wurde, der die Beobachtung gestartet hat. Auch hierbei kann es sich um ein [`FileSystemFileHandle`](/de/docs/Web/API/FileSystemFileHandle), [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle) oder [`FileSystemSyncAccessHandle`](/de/docs/Web/API/FileSystemSyncAccessHandle) handeln.
- `type`
  - : Ein String, der den Typ der beobachteten Änderung darstellt. Mögliche Werte sind:
    - `appeared`
      - : Die Datei oder das Verzeichnis wurde erstellt oder in die `root`-Dateistruktur verschoben.
    - `disappeared`
      - : Die Datei oder das Verzeichnis wurde gelöscht oder aus der `root`-Dateistruktur verschoben. Um herauszufinden, welche Datei oder welches Verzeichnis verschwunden ist, können Sie die Eigenschaft `relativePathComponents` abfragen.
    - `errored`
      - : Ein Fehlerzustand trat im beobachteten Verzeichnis auf. Dies kann passieren, wenn:
        - Die Beobachtung nicht mehr gültig ist. Dies kann auftreten, wenn das beobachtete Handle (also das `root` der Beobachtung) gelöscht oder verschoben wird. In diesem Fall wird eine `"disappeared"`-Beobachtung aufgezeichnet, gefolgt von einer `"errored"`-Beobachtung. In solchen Fällen möchten Sie möglicherweise die Beobachtung des Dateisystems mit [`FileSystemObserver.disconnect()`](/de/docs/Web/API/FileSystemObserver/disconnect) beenden.
        - Das Maximum an Beobachtungen pro Origin erreicht ist. Diese Grenze hängt vom Betriebssystem ab und ist im Voraus nicht bekannt. Wenn dies passiert, kann die Website versuchen, es erneut zu versuchen, obwohl es keine Garantie gibt, dass das Betriebssystem genug Ressourcen freigegeben hat.
        - Die Berechtigung zum Zugriff auf das Verzeichnis oder das Dateihandle entfernt wird.
    - `modified`
      - : Die Datei oder das Verzeichnis wurde geändert.
    - `moved`
      - : Die Datei oder das Verzeichnis wurde innerhalb der Wurzel-Dateistruktur verschoben.
        > [!NOTE]
        > Unter Windows werden `"moved"`-Beobachtungen zwischen Verzeichnissen nicht unterstützt. Sie werden als `"disappeared"`-Beobachtungen im Quellverzeichnis und als `"appeared"`-Beobachtungen im Zielverzeichnis gemeldet.
    - `unknown`
      - : Gibt an, dass einige Beobachtungen verpasst wurden. Wenn Sie Informationen darüber wünschen, was sich in den verpassten Beobachtungen geändert hat, könnten Sie auf eine Abfrage des beobachteten Verzeichnisses zurückgreifen.

Je nach Betriebssystem werden nicht alle Beobachtungen mit dem gleichen Detailgrad gemeldet, zum Beispiel wenn sich der Inhalt eines Verzeichnisses rekursiv ändert. Im besten Fall erhält die Website einen detaillierten Änderungsdatensatz, der den Typ der Änderung und ein Handle zum betroffenen Pfad enthält. Im schlimmsten Fall erhält die Website einen allgemeineren Änderungsdatensatz (also einen Typ `"unknown"`), der trotzdem eine Durchsuchung des Verzeichnisses erfordert, um herauszufinden, welches Handle sich geändert hat.

Dies ist dennoch eine Verbesserung gegenüber einer regelmäßigen Abfrage, da die Verzeichniserfassung bedarfsgerecht aus der Rückruffunktion gestartet werden kann, anstatt regelmäßig auf Änderungen zu prüfen.

## Beispiele

### Einen `FileSystemObserver` initialisieren

Bevor Sie mit der Beobachtung von Datei- oder Verzeichnisänderungen beginnen können, müssen Sie einen `FileSystemObserver` initialisieren, um die Beobachtungen zu verwalten. Dies wird mit dem [`FileSystemObserver()`](/de/docs/Web/API/FileSystemObserver/FileSystemObserver)-Konstruktor durchgeführt, der eine Rückruffunktion als Argument nimmt:

```js
const observer = new FileSystemObserver(callback);
```

Der [Körper der Rückruffunktion](/de/docs/Web/API/FileSystemObserver/FileSystemObserver#callback) kann so spezifiziert werden, dass er Dateiänderungsbeobachtungen auf jede gewünschte Weise zurückgibt und verarbeitet. Jedes Objekt innerhalb des `records`-Arrays ist ein `FileSystemChangeRecord`-Objekt:

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

Derzeit nicht Teil einer Spezifikation. Siehe [https://github.com/whatwg/fs/pull/165](https://github.com/whatwg/fs/pull/165) für die relevante Spezifikations-PR.

## Siehe auch

- [`FileSystemObserver()`](/de/docs/Web/API/FileSystemObserver/FileSystemObserver)-Konstruktor
- [File System API](/de/docs/Web/API/File_System_API)
- [Die Origin-Testphase der File System Observer API](https://developer.chrome.com/blog/file-system-observer#stop-observing-the-file-system) auf developer.chrome.com (2024)
