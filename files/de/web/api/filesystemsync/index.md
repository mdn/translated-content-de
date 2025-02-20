---
title: FileSystemSync
slug: Web/API/FileSystemSync
l10n:
  sourceCommit: cbe4c570701052c120808ea54c24c46ec9734084
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}{{Deprecated_Header}}

Im [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) repräsentiert ein `FileSystemSync`-Objekt ein Dateisystem. Es hat zwei Eigenschaften.

> [!WARNING]
> Diese Schnittstelle ist veraltet und befindet sich nicht mehr auf dem Standardpfad.
> _Verwenden Sie sie nicht mehr._ Verwenden Sie stattdessen die [File System API](/de/docs/Web/API/File_System_API).

## Grundkonzepte

Das `FileSystemSync`-Objekt ist Ihr Zugang zur gesamten API und Sie werden es häufig verwenden. Sobald Sie eine Referenz haben, speichern Sie das Objekt in einer globalen Variablen oder einer Klassen-Eigenschaft zwischen.

## Instanzeigenschaften

- `name` {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ein String, der den Namen des Dateisystems darstellt. Der Name muss eindeutig über die Liste der freigelegten Dateisysteme hinweg sein.
- `root` {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ein `DirectoryEntry`, das das Root-Verzeichnis des Dateisystems ist.

## Spezifikationen

Diese Funktion ist nicht mehr Teil einer Spezifikation. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
