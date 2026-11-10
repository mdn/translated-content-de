---
title: FileSystem
slug: Web/API/FileSystem
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("File and Directory Entries API")}}

Die Schnittstelle **`FileSystem`** der File and Directory Entries API repräsentiert ein Dateisystem. Solche Objekte können über die Eigenschaft [`filesystem`](/de/docs/Web/API/FileSystemEntry/filesystem) eines beliebigen Dateisystemeintrags abgerufen werden. Einige Browser bieten zusätzliche APIs zum Erstellen und Verwalten von Dateisystemen an, beispielsweise die Methode [`requestFileSystem()`](/de/docs/Web/API/Window/requestFileSystem) von Chrome.

Diese Schnittstelle gewährt Ihnen keinen Zugriff auf das Dateisystem der Benutzer. Stattdessen steht Ihnen ein „virtuelles Laufwerk“ innerhalb der Browser-Sandbox zur Verfügung. Um auf das Dateisystem der Benutzer zuzugreifen, ist deren Mitwirkung erforderlich, beispielsweise durch die Installation einer Chrome-Erweiterung. Die entsprechende Chrome-API finden Sie in der [Chrome-Entwicklerdokumentation](https://developer.chrome.com/docs/apps/reference/fileSystem).

## Instanzeigenschaften

- [`FileSystem.name`](/de/docs/Web/API/FileSystem/name) {{ReadOnlyInline}}
  - : Ein String, der den Namen des Dateisystems angibt. Dieser Name ist innerhalb der gesamten Liste der bereitgestellten Dateisysteme eindeutig.
- [`FileSystem.root`](/de/docs/Web/API/FileSystem/root) {{ReadOnlyInline}}
  - : Ein [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)-Objekt, das das Stammverzeichnis des Dateisystems repräsentiert. Über dieses Objekt können Sie auf alle Dateien und Verzeichnisse im Dateisystem zugreifen.

## Beschreibung

Es gibt zwei Möglichkeiten, ein `FileSystem`-Objekt zu erhalten:

1. Sie können ein Dateisystem, das eigens für Ihre Web-App in einer Sandbox erstellt wird, direkt durch einen Aufruf von `window.requestFileSystem()` anfordern. Ist der Aufruf erfolgreich, wird eine Callback-Funktion ausgeführt, die als Parameter ein `FileSystem`-Objekt erhält, das das Dateisystem beschreibt.
2. Sie können das Objekt über die Eigenschaft [`filesystem`](/de/docs/Web/API/FileSystemEntry/filesystem) eines Dateisystemeintrags abrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API)
- [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry), [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) und [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry)
