---
title: FileSystemEntry
slug: Web/API/FileSystemEntry
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{APIRef("File and Directory Entries API")}}

Das **`FileSystemEntry`** Interface der File and Directory Entries API repräsentiert einen einzelnen Eintrag in einem Dateisystem. Der Eintrag kann eine Datei oder ein Verzeichnis sein (Verzeichnisse werden durch das [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) Interface repräsentiert). Es enthält Methoden zum Arbeiten mit Dateien – einschließlich Kopieren, Verschieben, Löschen und Lesen von Dateien – sowie Informationen über eine Datei, auf die es zeigt, einschließlich des Dateinamens und des Pfads von der Wurzel zum Eintrag.

## Grundkonzepte

Sie erstellen `FileSystemEntry` Objekte nicht direkt. Stattdessen erhalten Sie ein auf diesem Interface basierendes Objekt über andere APIs. Dieses Interface dient als Basisklasse für die [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) und [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) Interfaces, die jeweils spezifische Funktionen für Dateisystemeinträge bereitstellen, die Dateien und Verzeichnisse darstellen.

Das `FileSystemEntry` Interface enthält Methoden, die Sie zur Manipulation von Dateien und Verzeichnissen erwarten würden, bietet aber auch eine bequeme Methode zum Abrufen der URL des Eintrags: [`toURL()`](#tourl). Es führt auch ein neues URL-Schema ein: `filesystem:`.

Sie können das `filesystem:` Schema in Google Chrome verwenden, um alle Dateien und Ordner zu sehen, die im Ursprung Ihrer App gespeichert sind. Verwenden Sie einfach das `filesystem:` Schema für das Stammverzeichnis des Ursprungs der App. Wenn Ihre App zum Beispiel in [`http://www.example.com`](https://www.example.com/) ist, öffnen Sie `filesystem:http://www.example.com/temporary/` in einem Tab. Chrome zeigt eine schreibgeschützte Liste aller Dateien und Ordner an, die im Ursprung Ihrer App gespeichert sind.

### Beispiel

Um ein Beispiel dafür zu sehen, wie `toURL()` funktioniert, siehe die [Methodenbeschreibung](#tourl). Der folgende Codeausschnitt zeigt Ihnen, wie Sie eine Datei nach Name entfernen können.

```js
// Taking care of the browser-specific prefixes.
window.requestFileSystem =
  window.requestFileSystem || window.webkitRequestFileSystem;

// …

// Opening a file system with temporary storage
window.requestFileSystem(
  TEMPORARY,
  1024 * 1024 /*1MB*/,
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

## Instanzattribute

_Dieses Interface stellt die folgenden Attribute bereit._

- [`filesystem`](/de/docs/Web/API/FileSystemEntry/filesystem) {{ReadOnlyInline}}
  - : Ein [`FileSystem`](/de/docs/Web/API/FileSystem) Objekt, das das Dateisystem repräsentiert, in dem sich der Eintrag befindet.
- [`fullPath`](/de/docs/Web/API/FileSystemEntry/fullPath) {{ReadOnlyInline}}
  - : Ein String, der den vollständigen, absoluten Pfad vom Stamm des Dateisystems zum Eintrag bereitstellt; er kann auch als Pfad gedacht werden, der relativ zum Stammverzeichnis mit einem "/" Zeichen vorangestellt ist.
- [`isDirectory`](/de/docs/Web/API/FileSystemEntry/isDirectory) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Eintrag ein Verzeichnis darstellt; ansonsten ist er `false`.
- [`isFile`](/de/docs/Web/API/FileSystemEntry/isFile) {{ReadOnlyInline}}
  - : Ein Boolean, der `true` ist, wenn der Eintrag eine Datei darstellt. Wenn es sich nicht um eine Datei handelt, ist dieser Wert `false`.
- [`name`](/de/docs/Web/API/FileSystemEntry/name) {{ReadOnlyInline}}
  - : Ein String, der den Namen des Eintrags enthält (der letzte Teil des Pfades, nach dem letzten "/" Zeichen).

## Instanzmethoden

_Dieses Interface definiert die folgenden Methoden._

- [`copyTo()`](/de/docs/Web/API/FileSystemEntry/copyTo) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Kopiert die Datei oder das Verzeichnis an einen neuen Ort im Dateisystem.
- [`getMetadata()`](/de/docs/Web/API/FileSystemEntry/getMetadata) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ruft Metadaten über die Datei ab, wie zum Beispiel das Änderungsdatum und die Größe.
- [`getParent()`](/de/docs/Web/API/FileSystemEntry/getParent)
  - : Gibt ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) zurück, das das übergeordnete Verzeichnis des Eintrags repräsentiert.
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
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) und [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) basieren auf `FileSystemEntry`.
