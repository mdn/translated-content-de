---
title: Metadaten
slug: Web/API/Metadata
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}{{SeeCompatTable}}

Die **`Metadata`**-Schnittstelle enthält Informationen über einen Dateisystemeintrag. Diese Metadaten umfassen die Größe der Datei und das Datum und die Uhrzeit der letzten Änderung.

> [!NOTE]
> Diese Schnittstelle ist nicht im globalen Gültigkeitsbereich verfügbar; stattdessen erhalten Sie ein `Metadata`-Objekt, das einen {{domxref("FileSystemEntry")}} beschreibt, indem Sie die Methode {{domxref("FileSystemEntry.getMetadata()")}} verwenden.

## Instanz-Eigenschaften

- {{domxref("Metadata.modificationTime", "modificationTime")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Ein {{jsxref("Date")}}-Objekt, das das Datum und die Uhrzeit angibt, zu der der Eintrag geändert wurde.
- {{domxref("Metadata.size", "size")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Ein 64-bit unsigned Integer, der die Größe des Eintrags in Bytes angibt.

## Spezifikationen

Dieses Feature wurde aus allen Spezifikationen entfernt und ist nicht in der Standardisierungsprozess.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in die File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemEntry")}}
- {{domxref("FileSystemFileEntry")}} und {{domxref("FileSystemDirectoryEntry")}}
