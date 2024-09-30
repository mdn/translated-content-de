---
title: FileSystemSync
slug: Web/API/FileSystemSync
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}{{Deprecated_Header}}

Im [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction) repräsentiert ein `FileSystemSync`-Objekt ein Dateisystem. Es hat zwei Eigenschaften.

> [!WARNING]
> Diese Schnittstelle ist veraltet und befindet sich nicht mehr auf dem Standardkurs.
> _Verwenden Sie sie nicht mehr._ Verwenden Sie stattdessen das [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API).

## Grundlegende Konzepte

Das `FileSystemSync`-Objekt ist Ihr Zugang zur gesamten API und Sie werden es häufig nutzen. Sobald Sie eine Referenz haben, sollten Sie das Objekt in einer globalen Variable oder einer Klassen-Eigenschaft zwischenspeichern.

## Instanzeigenschaften

- `name` {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ein Zeichenfolgenwert, der den Namen des Dateisystems repräsentiert. Der Name muss einzigartig in der Liste der freigelegten Dateisysteme sein.
- `root` {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ein `DirectoryEntry`, das das Stammverzeichnis des Dateisystems ist.

## Spezifikationen

Diese Funktion ist nicht mehr Teil einer Spezifikation. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [Einführung in das File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API/Introduction)
