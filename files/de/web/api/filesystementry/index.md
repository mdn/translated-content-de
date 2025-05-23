---
title: FileSystemEntry
slug: Web/API/FileSystemEntry
l10n:
  sourceCommit: e6d43da6c6d28a6ac92cdd47882809ffbdf987ce
---

{{APIRef("File and Directory Entries API")}}

Das **`FileSystemEntry`** Interface der File and Directory Entries API repräsentiert einen einzelnen Eintrag in einem Dateisystem. Der Eintrag kann eine Datei oder ein Verzeichnis sein (Verzeichnisse werden durch das [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) Interface repräsentiert). Es enthält Methoden zum Arbeiten mit Dateien — einschließlich Kopieren, Verschieben, Entfernen und Lesen von Dateien — sowie Informationen über eine Datei, auf die es verweist — einschließlich des Dateinamens und des Pfads vom Stamm bis zum Eintrag.

## Grundlegende Konzepte

`FileSystemEntry` Objekte erstellen Sie nicht direkt. Stattdessen erhalten Sie ein auf diesem Interface basierendes Objekt über andere APIs. Dieses Interface dient als Basisklasse für die [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) und [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) Interfaces, die Funktionen bereitstellen, die speziell für Dateisystemeinträge sind, die Dateien bzw. Verzeichnisse repräsentieren.

Das `FileSystemEntry` Interface enthält Methoden, die Sie zum Manipulieren von Dateien und Verzeichnissen erwarten würden, es enthält jedoch auch eine praktische Methode zum Abrufen der URL des Eintrags: [`toURL()`](/de/docs/Web/API/FileSystemEntry/toURL). Es führt auch ein neues URL-Schema ein: `filesystem:`.

Sie können das `filesystem:` Schema in Google Chrome verwenden, um alle Dateien und Ordner zu sehen, die im Ursprung Ihrer App gespeichert sind. Verwenden Sie einfach das `filesystem:` Schema für das Stammverzeichnis des Ursprungs der App. Zum Beispiel, wenn Ihre App unter [`http://www.example.com`](https://www.example.com/) liegt, öffnen Sie `filesystem:http://www.example.com/temporary/` in einem Tab. Chrome zeigt eine schreibgeschützte Liste aller Dateien und Ordner, die im Ursprung Ihrer App gespeichert sind.

### Beispiel

Um ein Beispiel zu sehen, wie `toURL()` funktioniert, sehen Sie sich die [Methodebeschreibung](/de/docs/Web/API/FileSystemEntry/toURL) an. Der folgende Ausschnitt zeigt Ihnen, wie Sie eine Datei anhand ihres Namens entfernen können.

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

## Instanz-Eigenschaften

_Dieses Interface bietet die folgenden Eigenschaften._

- [`filesystem`](/de/docs/Web/API/FileSystemEntry/filesystem) {{ReadOnlyInline}}
  - : Ein [`FileSystem`](/de/docs/Web/API/FileSystem) Objekt, das das Dateisystem repräsentiert, in dem sich der Eintrag befindet.
- [`fullPath`](/de/docs/Web/API/FileSystemEntry/fullPath) {{ReadOnlyInline}}
  - : Ein String, der den vollständigen, absoluten Pfad vom Stamm des Dateisystems bis zum Eintrag bietet; er kann auch als ein Pfad verstanden werden, der relativ zum Stammverzeichnis ist und mit einem "/" Zeichen versehen ist.
- [`isDirectory`](/de/docs/Web/API/FileSystemEntry/isDirectory) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Eintrag ein Verzeichnis darstellt; andernfalls ist er `false`.
- [`isFile`](/de/docs/Web/API/FileSystemEntry/isFile) {{ReadOnlyInline}}
  - : Ein Boolean, der `true` ist, wenn der Eintrag eine Datei darstellt. Wenn es sich nicht um eine Datei handelt, ist dieser Wert `false`.
- [`name`](/de/docs/Web/API/FileSystemEntry/name) {{ReadOnlyInline}}
  - : Ein String, der den Namen des Eintrags enthält (der letzte Teil des Pfads, nach dem letzten "/" Zeichen).

## Instanz-Methoden

_Dieses Interface definiert die folgenden Methoden._

- [`copyTo()`](/de/docs/Web/API/FileSystemEntry/copyTo) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Kopiert die Datei oder das Verzeichnis an einen neuen Ort im Dateisystem.
- [`getMetadata()`](/de/docs/Web/API/FileSystemEntry/getMetadata) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Erhält Metadaten über die Datei, wie das Änderungsdatum und die Größe.
- [`getParent()`](/de/docs/Web/API/FileSystemEntry/getParent)
  - : Gibt ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) zurück, das das übergeordnete Verzeichnis des Eintrags darstellt.
- [`moveTo()`](/de/docs/Web/API/FileSystemEntry/moveTo) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Verschiebt die Datei oder das Verzeichnis an einen neuen Ort im Dateisystem oder benennt die Datei oder das Verzeichnis um.
- [`remove()`](/de/docs/Web/API/FileSystemEntry/remove) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Entfernt die angegebene Datei oder das Verzeichnis. Sie können nur Verzeichnisse entfernen, die leer sind.
- [`toURL()`](/de/docs/Web/API/FileSystemEntry/toURL) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Erstellt und gibt eine URL zurück, die den Eintrag identifiziert. Diese URL verwendet das URL-Schema `"filesystem:"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) und [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) basieren auf `FileSystemEntry`.
