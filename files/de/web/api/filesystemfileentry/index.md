---
title: FileSystemFileEntry
slug: Web/API/FileSystemFileEntry
l10n:
  sourceCommit: cbe4c570701052c120808ea54c24c46ec9734084
---

{{APIRef("File and Directory Entries API")}}

Das **`FileSystemFileEntry`**-Interface der [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) repräsentiert eine Datei in einem Dateisystem. Es bietet Eigenschaften, die die Attribute der Datei beschreiben, sowie die [`file()`](/de/docs/Web/API/FileSystemFileEntry/file)-Methode, die ein [`File`](/de/docs/Web/API/File)-Objekt erstellt, das verwendet werden kann, um die Datei zu lesen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt die Eigenschaften seines übergeordneten Interfaces, [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry), hat jedoch keine Eigenschaften, die einzigartig für dieses Interface sind._

## Instanzmethoden

- [`createWriter()`](/de/docs/Web/API/FileSystemFileEntry/createWriter) {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt ein [`FileWriter`](/de/docs/Web/API/FileWriter)-Objekt zurück, das verwendet werden kann, um Daten in die durch den Verzeichniseintrag dargestellte Datei zu schreiben.
- [`file()`](/de/docs/Web/API/FileSystemFileEntry/file)
  - : Erstellt ein neues [`File`](/de/docs/Web/API/File)-Objekt, das verwendet werden kann, um die Datei zu lesen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
