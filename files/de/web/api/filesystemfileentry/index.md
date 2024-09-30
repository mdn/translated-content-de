---
title: FileSystemFileEntry
slug: Web/API/FileSystemFileEntry
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{APIRef("File and Directory Entries API")}}

Das **`FileSystemFileEntry`** Interface der [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction) repräsentiert eine Datei in einem Dateisystem. Es bietet Eigenschaften zur Beschreibung der Dateiattribute sowie die [`file()`](/de/docs/Web/API/FileSystemFileEntry/file)-Methode, die ein [`File`](/de/docs/Web/API/File)-Objekt erstellt, das verwendet werden kann, um die Datei zu lesen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt die Eigenschaften seines Eltern-Interfaces, [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry), hat jedoch keine einzigartigen Eigenschaften für dieses Interface._

## Instanzmethoden

- [`createWriter()`](/de/docs/Web/API/FileSystemFileEntry/createWriter) {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt ein [`FileWriter`](/de/docs/Web/API/FileWriter)-Objekt zurück, das verwendet werden kann, um Daten in die von dem Verzeichniseintrag repräsentierte Datei zu schreiben.
- [`file()`](/de/docs/Web/API/FileSystemFileEntry/file)
  - : Erstellt ein neues [`File`](/de/docs/Web/API/File)-Objekt, das verwendet werden kann, um die Datei zu lesen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
