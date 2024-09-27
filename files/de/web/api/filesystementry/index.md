---
title: FileSystemEntry
slug: Web/API/FileSystemEntry
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{APIRef("File and Directory Entries API")}}

Die **`FileSystemEntry`**-Schnittstelle des File and Directory Entries API repräsentiert einen einzelnen Eintrag in einem Dateisystem. Der Eintrag kann eine Datei oder ein Verzeichnis sein (Verzeichnisse werden durch die [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Schnittstelle dargestellt). Sie umfasst Methoden zur Arbeit mit Dateien – einschließlich Kopieren, Verschieben, Entfernen und Lesen von Dateien – sowie Informationen über eine Datei, auf die sie verweist, einschließlich des Dateinamens und ihres Pfades vom Root-Verzeichnis bis zum Eintrag.

## Grundlegende Konzepte

Sie erstellen keine `FileSystemEntry`-Objekte direkt. Stattdessen erhalten Sie ein auf dieser Schnittstelle basierendes Objekt über andere APIs. Diese Schnittstelle dient als Basisklasse für die [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry)- und [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Schnittstellen, die spezifische Funktionen für Dateisystemeinträge bieten, die Dateien bzw. Verzeichnisse repräsentieren.

Die `FileSystemEntry`-Schnittstelle umfasst Methoden, die Sie für die Manipulation von Dateien und Verzeichnissen erwarten würden, bietet aber auch eine praktische Methode zum Abrufen der URL des Eintrags: [`toURL()`](#tourl). Sie führt auch ein neues URL-Schema ein: `filesystem:`.

Sie können das `filesystem:`-Schema in Google Chrome verwenden, um alle Dateien und Ordner zu sehen, die im Ursprung Ihrer App gespeichert sind. Verwenden Sie einfach das `filesystem:`-Schema für das Root-Verzeichnis des Ursprungs der App. Wenn sich Ihre App beispielsweise unter [`http://www.example.com`](https://www.example.com/) befindet, öffnen Sie `filesystem:http://www.example.com/temporary/` in einem Tab. Chrome zeigt eine schreibgeschützte Liste aller im Ursprung Ihrer App gespeicherten Dateien und Ordner an.

### Beispiel

Um ein Beispiel dafür zu sehen, wie `toURL()` funktioniert, sehen Sie sich die [Methodenbeschreibung](#tourl) an. Der folgende Ausschnitt zeigt Ihnen, wie Sie eine Datei nach ihrem Namen entfernen können.

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

## Instanz-Eigenschaften

_Diese Schnittstelle bietet die folgenden Eigenschaften._

- [`filesystem`](/de/docs/Web/API/FileSystemEntry/filesystem) {{ReadOnlyInline}}
  - : Ein [`FileSystem`](/de/docs/Web/API/FileSystem)-Objekt, das das Dateisystem darstellt, in dem sich der Eintrag befindet.
- [`fullPath`](/de/docs/Web/API/FileSystemEntry/fullPath) {{ReadOnlyInline}}
  - : Ein String, der den vollständigen, absoluten Pfad vom Root-Verzeichnis des Dateisystems bis zum Eintrag angibt; er kann auch als ein Pfad angesehen werden, der relativ zum Root-Verzeichnis ist und mit einem "/"-Zeichen vorangestellt ist.
- [`isDirectory`](/de/docs/Web/API/FileSystemEntry/isDirectory) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Eintrag ein Verzeichnis darstellt; andernfalls `false`.
- [`isFile`](/de/docs/Web/API/FileSystemEntry/isFile) {{ReadOnlyInline}}
  - : Ein Boolean, der `true` ist, wenn der Eintrag eine Datei darstellt. Wenn es sich nicht um eine Datei handelt, ist dieser Wert `false`.
- [`name`](/de/docs/Web/API/FileSystemEntry/name) {{ReadOnlyInline}}
  - : Ein String, der den Namen des Eintrags enthält (der letzte Teil des Pfades, nach dem letzten "/"-Zeichen).

## Instanz-Methoden

_Diese Schnittstelle definiert die folgenden Methoden._

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
- [Einführung in das File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) und [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) basieren auf `FileSystemEntry`.
