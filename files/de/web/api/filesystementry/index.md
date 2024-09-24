---
title: FileSystemEntry
slug: Web/API/FileSystemEntry
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{APIRef("File and Directory Entries API")}}

Die **`FileSystemEntry`**-Schnittstelle der File and Directory Entries API repräsentiert einen einzelnen Eintrag in einem Dateisystem. Der Eintrag kann eine Datei oder ein Verzeichnis sein (Verzeichnisse werden durch die {{domxref("FileSystemDirectoryEntry")}}-Schnittstelle dargestellt). Sie enthält Methoden zum Arbeiten mit Dateien – einschließlich Kopieren, Verschieben, Entfernen und Lesen von Dateien – sowie Informationen über eine Datei, auf die sie verweist – einschließlich des Dateinamens und des Pfads von der Wurzel zum Eintrag.

## Grundlegende Konzepte

Sie erstellen `FileSystemEntry`-Objekte nicht direkt. Stattdessen erhalten Sie ein auf dieser Schnittstelle basierendes Objekt über andere APIs. Diese Schnittstelle dient als Basisklasse für die Schnittstellen {{domxref("FileSystemFileEntry")}} und {{domxref("FileSystemDirectoryEntry")}}, die spezifische Funktionen für Dateisystemeinträge bereitstellen, die Dateien bzw. Verzeichnisse darstellen.

Die `FileSystemEntry`-Schnittstelle enthält Methoden, die Sie erwarten würden, um mit Dateien und Verzeichnissen zu arbeiten, aber sie bietet auch eine praktische Methode zum Abrufen der URL des Eintrags: [`toURL()`](#tourl). Außerdem führt sie ein neues URL-Schema ein: `filesystem:`.

Sie können das `filesystem:`-Schema in Google Chrome verwenden, um alle Dateien und Ordner zu sehen, die im Ursprung Ihrer App gespeichert sind. Verwenden Sie einfach das `filesystem:`-Schema für das Stammverzeichnis des Ursprungs der App. Wenn sich Ihre App beispielsweise unter [`http://www.example.com`](https://www.example.com/) befindet, öffnen Sie `filesystem:http://www.example.com/temporary/` in einem Tab. Chrome zeigt eine schreibgeschützte Liste aller Dateien und Ordner, die im Ursprung Ihrer App gespeichert sind.

### Beispiel

Um ein Beispiel zu sehen, wie `toURL()` funktioniert, sehen Sie sich die [Methodenbeschreibung](#tourl) an. Der folgende Ausschnitt zeigt, wie Sie eine Datei anhand ihres Namens entfernen können.

```js
// Achten Sie auf die browser-spezifischen Präfixe.
window.requestFileSystem =
  window.requestFileSystem || window.webkitRequestFileSystem;

// …

// Öffnen eines Dateisystems mit temporärem Speicher
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

- {{domxref("FileSystemEntry.filesystem", "filesystem")}} {{ReadOnlyInline}}
  - : Ein {{domxref("FileSystem")}}-Objekt, das das Dateisystem repräsentiert, in dem sich der Eintrag befindet.
- {{domxref("FileSystemEntry.fullPath", "fullPath")}} {{ReadOnlyInline}}
  - : Ein String, der den vollständigen, absoluten Pfad vom Stamm des Dateisystems zum Eintrag liefert; er kann auch als Pfad betrachtet werden, der relativ zum Stammverzeichnis ist und mit einem "/"-Zeichen versehen ist.
- {{domxref("FileSystemEntry.isDirectory", "isDirectory")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Eintrag ein Verzeichnis darstellt; andernfalls ist er `false`.
- {{domxref("FileSystemEntry.isFile", "isFile")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Eintrag eine Datei darstellt. Wenn es sich nicht um eine Datei handelt, ist dieser Wert `false`.
- {{domxref("FileSystemEntry.name", "name")}} {{ReadOnlyInline}}
  - : Ein String, der den Namen des Eintrags enthält (der letzte Teil des Pfades, nach dem letzten "/"-Zeichen).

## Instanz-Methoden

_Diese Schnittstelle definiert die folgenden Methoden._

- {{domxref("FileSystemEntry.copyTo", "copyTo()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Kopiert die Datei oder das Verzeichnis an einen neuen Speicherort im Dateisystem.
- {{domxref("FileSystemEntry.getMetadata", "getMetadata()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ruft Metadaten über die Datei ab, wie das Änderungsdatum und die Größe.
- {{domxref("FileSystemEntry.getParent", "getParent()")}}
  - : Gibt ein {{domxref("FileSystemDirectoryEntry")}} zurück, das das übergeordnete Verzeichnis des Eintrags repräsentiert.
- {{domxref("FileSystemEntry.moveTo", "moveTo()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Verschiebt die Datei oder das Verzeichnis an einen neuen Ort im Dateisystem oder benennt die Datei oder das Verzeichnis um.
- {{domxref("FileSystemEntry.remove", "remove()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Entfernt die angegebene Datei oder das angegebene Verzeichnis. Sie können nur Verzeichnisse entfernen, die leer sind.
- {{domxref("FileSystemEntry.toURL", "toURL()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Erstellt und gibt eine URL zurück, die den Eintrag identifiziert. Diese URL verwendet das URL-Schema `"filesystem:"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemFileEntry")}} und {{domxref("FileSystemDirectoryEntry")}} basieren auf `FileSystemEntry`.
