---
title: Metadata
slug: Web/API/Metadata
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}{{SeeCompatTable}}

Das **`Metadata`**-Interface enthält Informationen über einen Datei-Systemeintrag. Diese Metadaten beinhalten die Größe der Datei sowie das Datum und die Uhrzeit der letzten Änderung.

> [!NOTE]
> Dieses Interface ist nicht im globalen Scope verfügbar; stattdessen erhalten Sie ein `Metadata`-Objekt, das einen [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) beschreibt, mithilfe der Methode [`FileSystemEntry.getMetadata()`](/de/docs/Web/API/FileSystemEntry/getMetadata).

## Instanz-Eigenschaften

- [`modificationTime`](/de/docs/Web/API/Metadata/modificationTime) {{ReadOnlyInline}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Ein {{jsxref("Date")}}-Objekt, das das Datum und die Uhrzeit der letzten Änderung des Eintrags angibt.
- [`size`](/de/docs/Web/API/Metadata/size) {{ReadOnlyInline}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Eine 64-Bit-Ganzzahl ohne Vorzeichen, die die Größe des Eintrags in Bytes angibt.

## Spezifikationen

Dieses Feature wurde aus allen Spezifikationen entfernt und befindet sich nicht im Prozess der Standardisierung.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)
- [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) und [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)
