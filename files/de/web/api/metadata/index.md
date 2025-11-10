---
title: Metadaten
slug: Web/API/Metadata
l10n:
  sourceCommit: cbe4c570701052c120808ea54c24c46ec9734084
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}{{SeeCompatTable}}

Das **`Metadata`**-Interface enthält Informationen über einen Dateisystemeintrag. Diese Metadaten umfassen die Dateigröße sowie das Änderungsdatum und die Uhrzeit.

> [!NOTE]
> Dieses Interface ist nicht über den globalen Geltungsbereich verfügbar; stattdessen erhalten Sie ein `Metadata`-Objekt, das einen [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) beschreibt, durch die Methode [`FileSystemEntry.getMetadata()`](/de/docs/Web/API/FileSystemEntry/getMetadata).

## Instanz-Eigenschaften

- [`modificationTime`](/de/docs/Web/API/Metadata/modificationTime) {{ReadOnlyInline}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Ein {{jsxref("Date")}}-Objekt, das das Datum und die Uhrzeit angibt, zu der der Eintrag geändert wurde.
- [`size`](/de/docs/Web/API/Metadata/size) {{ReadOnlyInline}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Ein 64-Bit-Unsigned-Integer, der die Größe des Eintrags in Bytes angibt.

## Spezifikationen

Dieses Feature wurde aus allen Spezifikationen entfernt und wird nicht standardisiert.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)
- [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) und [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)
