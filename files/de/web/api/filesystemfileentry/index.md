---
title: FileSystemFileEntry
slug: Web/API/FileSystemFileEntry
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{APIRef("File and Directory Entries API")}}

Die **`FileSystemFileEntry`**-Schnittstelle der [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction) repräsentiert eine Datei in einem Dateisystem. Sie bietet Eigenschaften, die die Attribute der Datei beschreiben, sowie die {{domxref("FileSystemFileEntry.file", "file()")}}-Methode, die ein {{domxref("File")}}-Objekt erstellt, das zum Lesen der Datei verwendet werden kann.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt die Eigenschaften ihrer Elternschnittstelle, {{domxref("FileSystemEntry")}}, hat jedoch keine Eigenschaften, die für diese Schnittstelle einzigartig sind._

## Instanz-Methoden

- {{domxref("FileSystemFileEntry.createWriter", "createWriter()")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt ein {{domxref("FileWriter")}}-Objekt zurück, das verwendet werden kann, um Daten in die durch den Verzeichniseintrag repräsentierte Datei zu schreiben.
- {{domxref("FileSystemFileEntry.file", "file()")}}
  - : Erstellt ein neues {{domxref("File")}}-Objekt, das verwendet werden kann, um die Datei zu lesen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
