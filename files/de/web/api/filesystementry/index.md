---
title: FileSystemEntry
slug: Web/API/FileSystemEntry
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("File and Directory Entries API")}}

Die Schnittstelle **`FileSystemEntry`** der File and Directory Entries API repräsentiert einen einzelnen Eintrag in einem Dateisystem. Der Eintrag kann eine Datei oder ein Verzeichnis sein (Verzeichnisse werden durch die Schnittstelle [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) repräsentiert). Sie bietet Methoden zum Arbeiten mit Dateien – darunter das Kopieren, Verschieben, Entfernen und Lesen von Dateien – sowie Informationen über die Datei, auf die sie verweist, etwa den Dateinamen und den Pfad vom Stammverzeichnis zum Eintrag.

## Instanzeigenschaften

_Diese Schnittstelle stellt die folgenden Eigenschaften bereit._

- [`filesystem`](/de/docs/Web/API/FileSystemEntry/filesystem) {{ReadOnlyInline}}
  - : Ein [`FileSystem`](/de/docs/Web/API/FileSystem)-Objekt, das das Dateisystem repräsentiert, in dem sich der Eintrag befindet.
- [`fullPath`](/de/docs/Web/API/FileSystemEntry/fullPath) {{ReadOnlyInline}}
  - : Eine Zeichenfolge mit dem vollständigen, absoluten Pfad vom Stammverzeichnis des Dateisystems zum Eintrag. Sie kann auch als Pfad relativ zum Stammverzeichnis betrachtet werden, dem das Zeichen „/“ vorangestellt ist.
- [`isDirectory`](/de/docs/Web/API/FileSystemEntry/isDirectory) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Eintrag ein Verzeichnis repräsentiert; andernfalls ist er `false`.
- [`isFile`](/de/docs/Web/API/FileSystemEntry/isFile) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Eintrag eine Datei repräsentiert. Ist er keine Datei, ist der Wert `false`.
- [`name`](/de/docs/Web/API/FileSystemEntry/name) {{ReadOnlyInline}}
  - : Eine Zeichenfolge mit dem Namen des Eintrags (dem letzten Teil des Pfads nach dem letzten Zeichen „/“).

## Instanzmethoden

_Diese Schnittstelle definiert die folgenden Methoden._

- [`copyTo()`](/de/docs/Web/API/FileSystemEntry/copyTo) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Kopiert die Datei oder das Verzeichnis an einen neuen Ort im Dateisystem.
- [`getMetadata()`](/de/docs/Web/API/FileSystemEntry/getMetadata) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ruft Metadaten über die Datei ab, beispielsweise das Änderungsdatum und die Größe.
- [`getParent()`](/de/docs/Web/API/FileSystemEntry/getParent)
  - : Gibt eine [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) zurück, die das übergeordnete Verzeichnis des Eintrags repräsentiert.
- [`moveTo()`](/de/docs/Web/API/FileSystemEntry/moveTo) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Verschiebt die Datei oder das Verzeichnis an einen neuen Ort im Dateisystem oder benennt die Datei beziehungsweise das Verzeichnis um.
- [`remove()`](/de/docs/Web/API/FileSystemEntry/remove) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Entfernt die angegebene Datei oder das angegebene Verzeichnis. Verzeichnisse können nur entfernt werden, wenn sie leer sind.
- [`toURL()`](/de/docs/Web/API/FileSystemEntry/toURL) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Erstellt eine URL, die den Eintrag identifiziert, und gibt sie zurück. Diese URL verwendet das URL-Schema `"filesystem:"`.

## Beschreibung

`FileSystemEntry`-Objekte werden nicht direkt erstellt. Stattdessen erhalten Sie über andere APIs ein Objekt, das auf dieser Schnittstelle basiert. Diese Schnittstelle dient als Basisklasse für die Schnittstellen [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) und [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry), die spezifische Funktionen für Dateisystemeinträge bereitstellen, die Dateien beziehungsweise Verzeichnisse repräsentieren.

Die Schnittstelle `FileSystemEntry` enthält Methoden zur Bearbeitung von Dateien und Verzeichnissen. Darüber hinaus bietet sie mit [`toURL()`](/de/docs/Web/API/FileSystemEntry/toURL) eine praktische Methode, um die URL eines Eintrags abzurufen. Sie führt außerdem ein neues URL-Schema ein: `filesystem:`.

In Google Chrome können Sie mit dem Schema `filesystem:` alle Dateien und Ordner anzeigen, die im Ursprung Ihrer App gespeichert sind. Verwenden Sie dazu das Schema `filesystem:` für das Stammverzeichnis des Ursprungs Ihrer App. Wenn sich Ihre App beispielsweise unter [`http://www.example.com`](https://www.example.com/) befindet, öffnen Sie `filesystem:http://www.example.com/temporary/` in einem Tab. Chrome zeigt eine schreibgeschützte Liste aller Dateien und Ordner an, die im Ursprung Ihrer App gespeichert sind.

## Beispiele

Ein Beispiel für die Funktionsweise von `toURL()` finden Sie in der [Methodenbeschreibung](/de/docs/Web/API/FileSystemEntry/toURL). Der folgende Codeausschnitt zeigt, wie Sie eine Datei anhand ihres Namens entfernen können.

```js
// Taking care of the browser-specific prefixes.
window.requestFileSystem =
  window.requestFileSystem || window.webkitRequestFileSystem;

// …

// Opening a file system with temporary storage
window.requestFileSystem(
  TEMPORARY,
  1024 * 1024 /* 1MB */,
  (fs) => {
    fs.root.getFile(
      "log.txt",
      {},
      (fileEntry) => {
        fileEntry.remove(() => {
          console.log("File removed.");
        }, onError);
      },
      onError,
    );
  },
  onError,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) und [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) basieren auf `FileSystemEntry`.
