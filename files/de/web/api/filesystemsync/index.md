---
title: FileSystemSync
slug: Web/API/FileSystemSync
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}

In der [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) stellt ein `FileSystemSync`-Objekt ein Dateisystem dar. Es hat zwei Eigenschaften.

> [!WARNING]
> Dieses Interface ist veraltet und wird nicht mehr als Standard weiterentwickelt.
> _Verwenden Sie es nicht mehr._ Nutzen Sie stattdessen die [File System API](/de/docs/Web/API/File_System_API).

## Instanzeigenschaften

- `name` {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ein String, der den Namen des Dateisystems angibt. Der Name muss innerhalb der Liste der verfügbaren Dateisysteme eindeutig sein.
- `root` {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ein `DirectoryEntry`, das das Stammverzeichnis des Dateisystems darstellt.

## Beschreibung

Das `FileSystemSync`-Objekt ist Ihr Zugang zur gesamten API, und Sie werden es häufig verwenden. Sobald Sie eine Referenz darauf haben, speichern Sie das Objekt daher in einer globalen Variablen oder einer Klasseneigenschaft.

## Spezifikationen

Diese Funktion ist nicht mehr Teil einer Spezifikation. Sie wird nicht mehr als Standard weiterentwickelt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
