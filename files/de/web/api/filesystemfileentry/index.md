---
title: FileSystemFileEntry
slug: Web/API/FileSystemFileEntry
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{APIRef("File and Directory Entries API")}}

Die **`FileSystemFileEntry`**-Schnittstelle der [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction) repräsentiert eine Datei in einem Dateisystem. Sie bietet Eigenschaften, die die Attribute der Datei beschreiben, sowie die Methode [`file()`](/de/docs/Web/API/FileSystemFileEntry/file), die ein [`File`](/de/docs/Web/API/File)-Objekt erstellt, das zum Lesen der Datei verwendet werden kann.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt die Eigenschaften der übergeordneten Schnittstelle [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry), hat jedoch keine Eigenschaften, die für diese Schnittstelle einzigartig sind._

## Instanzmethoden

- [`createWriter()`](/de/docs/Web/API/FileSystemFileEntry/createWriter) {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt ein [`FileWriter`](/de/docs/Web/API/FileWriter)-Objekt zurück, das verwendet werden kann, um Daten in die durch den Verzeichniseintrag repräsentierte Datei zu schreiben.
- [`file()`](/de/docs/Web/API/FileSystemFileEntry/file)
  - : Erstellt ein neues [`File`](/de/docs/Web/API/File)-Objekt, das zum Lesen der Datei verwendet werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
