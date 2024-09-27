---
title: FileSystemSync
slug: Web/API/FileSystemSync
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}{{Deprecated_Header}}

Im [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction) repräsentiert ein `FileSystemSync`-Objekt ein Dateisystem. Es hat zwei Eigenschaften.

> [!WARNING]
> Diese Schnittstelle ist veraltet und befindet sich nicht mehr auf dem Standardpfad.
> _Verwenden Sie es nicht mehr._ Verwenden Sie stattdessen das [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API).

## Grundkonzepte

Das `FileSystemSync`-Objekt ist Ihr Zugang zur gesamten API und wird häufig verwendet. Sobald Sie eine Referenz haben, sollten Sie das Objekt in einer globalen Variable oder einer Klassen-Eigenschaft zwischenspeichern.

## Instanzeigenschaften

- `name` {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ein String, der den Namen des Dateisystems darstellt. Der Name muss innerhalb der Liste der offengelegten Dateisysteme eindeutig sein.
- `root` {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ein `DirectoryEntry`, das das Stammverzeichnis des Dateisystems ist.

## Spezifikationen

Dieses Feature ist nicht mehr Teil einer Spezifikation. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in das File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
