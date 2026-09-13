---
title: FileSystemSync
slug: Web/API/FileSystemSync
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}

Im [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) repräsentiert ein `FileSystemSync`-Objekt ein Dateisystem. Es verfügt über zwei Eigenschaften.

> [!WARNING]
> Diese Schnittstelle ist veraltet und nicht länger auf dem Standardpfad.
> _Verwenden Sie sie nicht mehr._ Nutzen Sie stattdessen die [File System API](/de/docs/Web/API/File_System_API).

## Grundkonzepte

Das `FileSystemSync`-Objekt ist Ihr Zugang zu der gesamten API und Sie werden es oft verwenden. Sobald Sie eine Referenz haben, speichern Sie das Objekt in einer globalen Variablen oder Klassen-Eigenschaft.

## Instanzeigenschaften

- `name` {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ein String, der den Namen des Dateisystems darstellt. Der Name muss einzigartig in der Liste der bereitgestellten Dateisysteme sein.
- `root` {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ein `DirectoryEntry`, das das Stammverzeichnis des Dateisystems ist.

## Spezifikationen

Diese Funktion ist nicht mehr Teil einer Spezifikation. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
